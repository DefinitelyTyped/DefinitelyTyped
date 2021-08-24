import karma = require('karma');
import karmaHtmlDetailedReporter = require('karma-html-detailed-reporter');

// See https://github.com/karma-runner/karma-coverage/blob/v1.1.2/README.md#basic
module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['progress', 'htmlDetailed'],
        browsers: ['Chrome', 'PhantomJS'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-html-detailed-reporter'],

        // (test) configure the reporter
        htmlDetailed: {
            autoReload: true,
            dir: './_reports',
            refreshTimeout: 1000,
            splitResults: true,
            showSuccess: true,
            showFailed: false,
            showSkipped: true,
            useHostedBootstrap: true,
        },
    });
};

const [factory, preprocessor] = karmaHtmlDetailedReporter['preprocessor:htmlDetailed'];
const [type, reporter] = karmaHtmlDetailedReporter['reporter:htmlDetailed'];
