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

const testWithPrefixes = (config: karma.Config) => {
    config.set({
        reporters: ['spec'],
        specReporter: {
            prefixes: {
                success: 'OK',
                failure: 'KO',
                skipped: '--',
            },
            suppressSummary: true,
        },
        plugins: ['karma-spec-reporter'],
    });
};
