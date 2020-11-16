import karma = require('karma');

// See https://github.com/karma-runner/karma-coverage/blob/v1.1.2/README.md#basic
module.exports = (config: karma.Config) => {
    config.set({
        files: ['src/**/*.js', 'test/**/*.js'],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage', 'junit'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage'],
        },

        // the default configuration
        junitReporter: {
            outputDir: 'junit',
            outputFile: 'test-resutls.xml',
            suite: 'tests',
            useBrowserName: true,
            nameFormatter: (browser, result) => {
                return browser.id + '-browser';
            },
            classNameFormatter: (browser, result) => {
                return browser.name + '-class';
            },
            properties: {
                isValid: true,
            },
            xmlVersion: 1,
        },
    });
};
