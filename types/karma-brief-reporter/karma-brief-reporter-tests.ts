import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        // Choose the reporter
        reporters: ['brief'],
        // Test reporter options
        briefReporter: {
            suppressErrorReport: true,
            earlyErrorReport: true,
            suppressErrorHighlighting: true,
            omitExternalStackFrames: true,
            suppressBrowserLogs: true,
            renderOnRunCompleteOnly: true,
        },
    });
};
