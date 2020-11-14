import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine'],
        plugins: [require('karma-jasmine'), require('karma-chrome-launcher'), require('karma-jasmine-html-reporter')],
        reporters: ['progress', 'kjhtml', 'mocha'],
        browsers: ['Chrome'],
        jasmineHtmlReporter: {
            suppressAll: true,
            suppressFailed: true,
        },
    });
};
