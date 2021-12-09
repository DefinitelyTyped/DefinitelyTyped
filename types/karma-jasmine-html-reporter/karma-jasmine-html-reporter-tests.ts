import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-jasmine-html-reporter'],
        reporters: ['progress', 'kjhtml', 'mocha'],
        browsers: ['Chrome'],
        jasmineHtmlReporter: {
            suppressAll: true,
            suppressFailed: true,
        },
    });
};
