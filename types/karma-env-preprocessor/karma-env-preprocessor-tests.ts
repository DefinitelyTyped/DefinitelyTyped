/// <reference types="node" />
import karma = require('karma');

const testEnvProcessorConfigOption = (config: karma.Config) => {
    config.set({
        plugins: ['karma-env-preprocessor'],
        preprocessors: {
            '**/*.js': ['env'],
        },
        envPreprocessor: ['PATH', 'HOME'],
    });
};
