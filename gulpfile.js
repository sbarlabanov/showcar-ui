const gulp = require('gulp');
const scgulp = require('showcar-gulp')(gulp);

// Don't put in separate task. Runs async on each gulp task
const pkg = require('showcar-gulp/package.json');
const updateNotifier = require('update-notifier');
updateNotifier({
    pkg,
    updateCheckInterval: 1 //check each time
}).notify({ defer: false, isGlobal: false });

gulp.task('eslint', scgulp.eslint({
    files: 'src/**/*.js'
}));

gulp.task('js', gulp.series('eslint', scgulp.js({
    entry: 'src/showcar-ui.js',
    out: 'dist/showcar-ui.js',
})));

gulp.task('icons', gulp.series('eslint', scgulp.js({
    entry: 'src/js/showcar-icons.js',
    out: 'dist/showcar-icons.js',
})));

gulp.task('tracking', gulp.series('eslint', scgulp.js({
    entry: 'src/js/showcar-tracking.js',
    out: 'dist/showcar-tracking.js',
})));

gulp.task('stylelint', scgulp.stylelint({
    files: 'src/**/*.scss'
}));

gulp.task('scss', gulp.series('stylelint', scgulp.scss({
    entry: 'src/showcar-ui.scss',
    out: 'dist/showcar-ui.css',
})));

gulp.task('clean', scgulp.clean({
    files: ['dist/**/*']
}));

gulp.task('serve', scgulp.serve({
    dir: 'dist'
}));

gulp.task('copy:fragments', done => {
    gulp.src('src/html/showcar-ui-fragment.html').pipe(gulp.dest('dist/'));
    gulp.src('src/html/showcar-ui-standalone-fragment.html').pipe(gulp.dest('dist/'));
    gulp.src('src/html/showcar-ui-toggled-fragment.html').pipe(gulp.dest('dist/'));
    gulp.src('src/html/showcar-ui-toggled-test-fragment.html').pipe(gulp.dest('dist/'));
    gulp.src('src/html/optimizely-*.html').pipe(gulp.dest('dist/'));
    done();
});

const fs = require('fs');
const UglifyJS = require('uglify-js');
const readFile = filename => fs.readFileSync(filename, 'utf-8');
const readJsFile = filename => UglifyJS.minify(readFile(filename)).code;
const stringReplace = require('gulp-string-replace');
var replaceOptions = {
    logs: {
        enabled: false
    }
};
gulp.task('replace', done => {
    gulp.src(['src/html/index.html', 'src/html/index-standalone.html', 'docs/helpers/polyfills.js'])
        .pipe(stringReplace('@@POLYFILL_DOCUMENT_REGISTER_ELEMENT', readFile('node_modules/document-register-element/build/document-register-element.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_DOM4', readFile('node_modules/dom4/build/dom4.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_ARRAY', readJsFile('src/js/polyfills/array.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_STRING', readJsFile('src/js/polyfills/string.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_OBJECT', readJsFile('src/js/polyfills/object.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_PROMISE', readJsFile('node_modules/promiz/promiz.min.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_FETCH', readJsFile('node_modules/whatwg-fetch/fetch.js'), replaceOptions))
        .pipe(stringReplace('@@POLYFILL_URL_SEARCH_PARAMS', readJsFile('node_modules/url-search-params-polyfill/index.js'), replaceOptions))
        .pipe(stringReplace('@@SCRIPT_ERROR_COLLECTOR', readJsFile('src/js/inline-js/js-error-collector.js'), replaceOptions))
        .pipe(gulp.dest('dist/'));
    done();
});

gulp.task('set-dev', () => {
    scgulp.config.devmode = true;
});

gulp.task('docs:generate', (done) => {
    require('./docs/tasks/generateJson')();
    require('./docs/tasks/generateHtml')();
    done();
});

const serveDocs = require('./docs/tasks/docs');

gulp.task('build', gulp.series('js', 'icons', 'tracking', 'scss', 'copy:fragments', 'replace'));
gulp.task('docs:serve', done => {
    serveDocs(gulp);
    done();
});
gulp.task('docs:edit', gulp.series('build'), () => {serveDocs(gulp);});
gulp.task('docs:watch', gulp.series('build'), () => {serveDocs(gulp);});

gulp.task('default', gulp.series('docs:watch'));

const testingParams = {
    files: ['.quixoteconf.js'],
    preprocessors: {
        '.quixoteconf.js': ['webpack', 'sourcemap']
    },
    proxies: {
        '/': 'http://localhost:3000/',
    }
};

gulp.task('test', gulp.series('docs:serve', scgulp.karma(
    Object.assign({}, testingParams, {
        browsers: ['Firefox', 'Chrome', 'Safari']
    }))
));

gulp.task('test:fast', gulp.series('docs:serve', scgulp.karma(
    Object.assign({}, testingParams, {
        browsers: ['Chrome']
    }))
));

gulp.task('test:bs', gulp.series('docs:serve', scgulp.karma(
    Object.assign({}, testingParams, {
        browserStack: {
            build: new Date().toLocaleString('de-DE', {
                hour12: false,
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }),
            project: 'Showcar-ui',
        },
        // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win', 'bs_iphone6s', 'bs_iphone7'],
        browsers: ['bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],
    }))
));

gulp.task('test:travis', gulp.series('docs:serve', scgulp.karma(
    Object.assign({}, testingParams, {
        browserStack: {
            project: 'Showcar-ui',
        },
        // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win', 'bs_iphone6s', 'bs_iphone7'],
        // temporary removed iphones
        // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],
        browsers: ['bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],  //temporary remove safari
        // browsers: ['bs_chrome_win'], //only test on chrome
    }))
));
