import karma = require('karma');

// Mocha reporter options tests
const mochaReporter: karma.MochaReporterOptions = {
    symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x',
    },
    colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed',
    },
    output: 'minimal',
    showDiff: 'inline',
    divider: '==improved==divider==',
    ignoreSkipped: true,
    maxLogLines: 50,
};

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['mocha', 'chai'],
        plugins: ['karma-mocha', 'karma-chai', 'karma-mocha-reporter', 'karma-chrome-launcher'],

        // list of files / patterns to load in the browser
        files: ['test/**/*.spec.js'],

        mochaReporter,

        reporters: ['mocha'],

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome'],

        singleRun: true,

        reportSlowerThan: 500,
    });
};
