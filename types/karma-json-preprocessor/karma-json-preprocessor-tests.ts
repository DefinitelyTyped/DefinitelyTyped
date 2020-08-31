import karma = require('karma');

// Mocha reporter options tests
const mochaReporter: karma.JsonPreprocessorOptions = {
    varName: '$json',
    stripPrefix: 'prefix',
};

module.exports = (config: karma.Config) => {
    config.set({
        preprocessors: {
            '**/*.json': ['json'],
        },
        files: ['**/*.js', '**/*.json'],
        jsonPreprocessor: {
            varName: '$json',
            stripPrefix: 'prefix',
        },
    });
};
