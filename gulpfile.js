const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const destination = 'dist';

const generateWebpackOptions = (output) => {
    const filename = output;
    return {
        mode: 'development',
        devtool: 'source-map',
        output: {
            filename: filename,
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', { modules: false }]],
                    cacheDirectory: '.tmp/js',
                },
            }],
        },
        plugins: [],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        warnings: false
                    }
                }),
            ],
        }
    };
};

function js() {
    const webpackOptions = generateWebpackOptions('showcar-ui.js'); 
    return gulp.src('src/showcar-ui.js')
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(webpack(webpackOptions))
        .pipe(gulp.dest(destination));
}

function icons() {
    const webpackOptions = generateWebpackOptions('showcar-icons.js'); 
    return gulp.src('src/js/showcar-icons.js')
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(webpack(webpackOptions))
        .pipe(gulp.dest(destination));
}

function tracking() {
    const webpackOptions = generateWebpackOptions('showcar-tracking.js'); 
    return gulp.src('src/js/showcar-tracking.js')
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(webpack(webpackOptions))
        .pipe(gulp.dest(destination));
}

function scss() {
    const sourcemaps = require('gulp-sourcemaps');
    const sass = require('gulp-sass');
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');
    const atImport = require('postcss-import');
    const cssnano = require('cssnano');
    const rename = require('gulp-rename');

    const plugins = [
        atImport(),
        autoprefixer(),
        cssnano()
    ];

    const input = 'src/showcar-ui.scss';

    return gulp.src(input)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename('showcar-ui.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(destination));
}

function jsLinter() {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error', () => {
            process.exit(1);
        });
}

function cssLinter() {
    const stylelint = require('gulp-stylelint');
    return gulp.src('src/**/*.scss')
        .pipe(stylelint({
            failAfterError: true,
            debug: true,
            reporters: [
                { formatter: 'string', console: true }
            ]
        }))
        .on('error', () => {
            process.exit(1);
        });
}

gulp.task('clean', function () {
    const del = require('del');
    return del([`${destination}/**/*`]);
});

gulp.task('replace', done => {
    const fs = require('fs');
    const UglifyJS = require('uglify-js');
    const readFile = filename => fs.readFileSync(filename, 'utf-8');
    const readJsFile = filename => UglifyJS.minify(readFile(filename)).code;
    const stringReplace = require('gulp-string-replace');
    const replaceOptions = { logs: { enabled: false } };
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

gulp.task('copy:fragments', done => {
    gulp.src('src/html/showcar-ui-fragment.html').pipe(gulp.dest(destination));
    gulp.src('src/html/showcar-ui-standalone-fragment.html').pipe(gulp.dest(destination));
    gulp.src('src/html/showcar-ui-toggled-fragment.html').pipe(gulp.dest(destination));
    gulp.src('src/html/showcar-ui-toggled-test-fragment.html').pipe(gulp.dest(destination));
    gulp.src('src/html/optimizely-*.html').pipe(gulp.dest(destination));
    done();
});

const compileJs = gulp.series(jsLinter, gulp.series(js, icons, tracking));
const compileCss = gulp.series(cssLinter, scss);

const build = gulp.series(compileJs, compileCss, 'copy:fragments', 'replace');

function serve() {
    const bs = require('browser-sync').create();

    bs.init({
        open: false,
        server: {
            baseDir: destination
        },
        port: 3000
    });

    gulp.watch(`${destination}/**/*`).on('change', bs.reload);
}

gulp.task('serve', gulp.series(serve));

gulp.task('docs:generate', (done) => {
    require('./docs/tasks/generateJson')();
    require('./docs/tasks/generateHtml')();
    done();
});

const serveDocs = require('./docs/tasks/docs');

gulp.task('docs:serve', done => {
    serveDocs(gulp);
    done();
});
gulp.task('docs:edit', gulp.series(build), () => {serveDocs(gulp);});
gulp.task('docs:watch', gulp.series(build), () => {serveDocs(gulp);});

gulp.task('default', gulp.series('docs:watch'));

// const testingParams = {
//     files: ['.quixoteconf.js'],
//     preprocessors: {
//         '.quixoteconf.js': ['webpack', 'sourcemap']
//     },
//     proxies: {
//         '/': 'http://localhost:3000/',
//     }
// };

// gulp.task('test', gulp.series('docs:serve', scgulp.karma(
//     Object.assign({}, testingParams, {
//         browsers: ['Firefox', 'Chrome', 'Safari']
//     }))
// ));

// gulp.task('test:fast', gulp.series('docs:serve', scgulp.karma(
//     Object.assign({}, testingParams, {
//         browsers: ['Chrome']
//     }))
// ));

// gulp.task('test:bs', gulp.series('docs:serve', scgulp.karma(
//     Object.assign({}, testingParams, {
//         browserStack: {
//             build: new Date().toLocaleString('de-DE', {
//                 hour12: false,
//                 month: '2-digit',
//                 day: '2-digit',
//                 hour: '2-digit',
//                 minute: '2-digit'
//             }),
//             project: 'Showcar-ui',
//         },
//         // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win', 'bs_iphone6s', 'bs_iphone7'],
//         browsers: ['bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],
//     }))
// ));

// gulp.task('test:travis', gulp.series('docs:serve', scgulp.karma(
//     Object.assign({}, testingParams, {
//         browserStack: {
//             project: 'Showcar-ui',
//         },
//         // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win', 'bs_iphone6s', 'bs_iphone7'],
//         // temporary removed iphones
//         // browsers: ['bs_safari_mac', 'bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],
//         browsers: ['bs_chrome_win', 'bs_firefox_win', 'bs_edge_win', 'bs_ie11_win'],  //temporary remove safari
//         // browsers: ['bs_chrome_win'], //only test on chrome
//     }))
// ));

// function karmaService() {

//     const plugins = [
//         'karma-mocha-reporter',
//         'karma-mocha',
//         'karma-sinon',
//         'karma-chai',
//         'karma-webpack',
//         'karma-electron',
//         'karma-firefox-launcher',
//         'karma-safari-launcher',
//         'karma-chrome-launcher',
//         'karma-ie-launcher',
//         'karma-edge-launcher',
//         'karma-browserstack-launcher',
//         'karma-sauce-launcher',
//         'karma-sourcemap-loader'
//     ];

//     const frameworks = ['mocha', 'chai', 'sinon'];

//     // let karmaConfig = {
//     //     // webpack configuration
//     //     webpack: require('../.webpack.config.js'),
//     //     webpackMiddleware: {
//     //         stats: 'errors-only'
//     //     },
//     //     // logLevel: 'DEBUG', //keep for debugging
//     //     browserConsoleLogOptions: {
//     //         level: 'log',
//     //         terminal: true
//     //     },
//     //     basePath: process.cwd(),
//     //     files,
//     //     frameworks,
//     //     plugins,
//     //     preprocessors,
//     //     port: 9876, //fix port, don't change
//     //     urlRoot,
//     //     proxies,
//     //     // use an extended timeout for browsers in case the service is busy
//     //     browserNoActivityTimeout: 4 * 60000,
//     //     captureTimeout: 4 * 60000,
//     //     browserDisconnectTimeout: 4 * 60000,
//     //     processKillTimeout: 4 * 60000,
//     //     browserDisconnectTolerance: 1,
//     // };


//     return gulp.src(['**/*.js.map'], {read: false})
//         .pipe(karma.server({
//             singleRun: true,
//             autoWatch: false,
//             frameworks: frameworks,
//             browsers: ['Firefox', 'Chrome', 'Safari'],
//             plugins: plugins
//         }));
// }

// gulp.task('test_n', gulp.series('docs:serve', karmaService));

exports.build = build;