import { Config } from 'karma';

module.exports = (config: Config) =>
    config.set({
        files: ['./entry-module.spec.ts'],
        preprocessors: {
            './entry-module.spec.ts': ['webpack', 'sourcemap'],
            './entry-module.ts': ['coverage'],
        },
        // add both "karma-coverage" and "karma-remap-coverage" reporters
        reporters: ['progress', 'coverage', 'remap-coverage'],

        // save interim raw coverage report in memory
        coverageReporter: {
            type: 'in-memory',
        },

        // define where to save final remaped coverage reports
        remapCoverageReporter: {
            'text-summary': null,
            lcov: undefined,
            html: './coverage/html',
            cobertura: './coverage/cobertura.xml',
        },

        // make sure both reporter plugins are loaded
        plugins: ['karma-coverage', 'karma-remap-coverage'],
    });
