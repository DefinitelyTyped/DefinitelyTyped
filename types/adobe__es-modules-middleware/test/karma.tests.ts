/// <reference types="node" />
import path = require('path');
import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        // @adobe/es-modules-middleware
        esModulesMiddleware: {
            paths: {
                '/': __dirname,
                '/node_modules': path.join(__dirname, 'node_modules'),
            },
        },

        // other
        basePath: '.',
        plugins: ['karma-*', require('@adobe/es-modules-middleware')],
        frameworks: ['mocha', 'chai', 'sinon', 'web-components'],
        middleware: ['es-modules'],
        files: [
            {
                pattern: '**/*.test.html',
                watched: false,
                included: false,
                served: true,
            },
            {
                pattern: '**/test/*.js',
                watched: true,
                included: false,
                served: false,
            },
        ],
        proxies: {
            '/node_modules/': '/base/node_modules/',
        },
        reporters: ['mocha'],
    });
};
