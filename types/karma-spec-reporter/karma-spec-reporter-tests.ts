import karma = require('karma');

const test = (config: karma.Config) => {
    config.set({
        reporters: ['spec'],
        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true,
            showSpecTiming: false,
            failFast: true,
        },
        plugins: ['karma-spec-reporter'],
    });
};
