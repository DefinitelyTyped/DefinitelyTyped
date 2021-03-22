import karma = require('karma');

// Mocha reporter options tests
const mochaReporter: karma.JsonToFileReporterOptions = {
    outputPath: 'tests/out/',
};

module.exports = (config: karma.Config) => {
    config.set({
        jsonToFileReporter: {
            outputPath: 'tests/out/',
        },
        plugins: ['karma-json-to-file-reporter'],
        reporters: ['json-to-file'],
    });
};
