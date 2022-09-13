/// <reference types="node" />
import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        plugins: [require('karma-material-reporter')],

        reporters: ['progress', 'material'],
        // configuration
        materialReporter: {
            serverPort: 3000,
            autoOpen: true,
            expandSuites: true,
        },
    });
};
