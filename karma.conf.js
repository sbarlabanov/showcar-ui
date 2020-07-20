// Karma configuration
// Generated on Tue Jul 14 2020 14:25:45 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: process.cwd(),
    
        plugins: [ 
            require('karma-quixote'), 
            'karma-webpack', 
            'karma-sourcemap-loader', 
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-sinon',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-browserstack-launcher'
        ],
    
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon', 'quixote'],
    
    
        // list of files / patterns to load in the browser
        files: [
            '.quixoteconf.js',
            { pattern: '**/*.js.map', included: false, watched: false }
        ],
    
    
        // list of files / patterns to exclude
        exclude: [
            '**/*.swp'
        ],
    
    
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // add webpack as preprocessor
            '.quixoteconf.js': ['webpack', 'sourcemap']
        },
    
        webpack: require('./webpack.config.js'),
    
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only',
        },
    
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'BrowserStack'],
    
    
        // web server port
        port: 9876,
    
    
        // enable / disable colors in the output (reporters and logs)
        colors: true,
    
    
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browserConsoleLogOptions: {
            level: 'log',
            terminal: true
        },
    
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
    
    
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
    
    
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
    
        urlRoot: '/karma/',
    
        proxies: {
            '/': 'http://localhost:3000/',
        },
    
        client: {
            captureConsole: true,
            mocha: {
                reporter: 'html',
                timeout: 20000
            },
            mochaReporter: {
                output: 'full',
                maxLogLines: -1
            }
        },

        customLaunchers: {
            bs_chrome_win: {
                base: 'BrowserStack',
                browser: 'Chrome',
                browser_version: 'latest',
                os: 'Windows',
                os_version: '10'
            },
            bs_firefox_win: {
                base: 'BrowserStack',
                browser: 'Firefox',
                browser_version: '78.0',
                os: 'Windows',
                os_version: '10'
            },
            bs_edge_win: {
                base: 'BrowserStack',
                browser: 'Edge',
                browser_version: '14.0',
                os: 'Windows',
                os_version: '10'
            },
            bs_ie11_win: {
                base: 'BrowserStack',
                browser: 'IE',
                browser_version: '11.0',
                os: 'Windows',
                os_version: '10'
            }
        },

        browserNoActivityTimeout: 5 * 60000,
        captureTimeout: 5 * 60000,
        browserDisconnectTimeout: 5 * 60000,
        processKillTimeout: 5 * 60000,
        browserDisconnectTolerance: 2
    });
};
