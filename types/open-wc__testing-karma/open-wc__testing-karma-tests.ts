import { createDefaultConfig } from '@open-wc/testing-karma';
import merge = require('lodash/merge');
import karma = require('karma');

module.exports = (config: karma.Config) => {
    // defaults
    const defaultConfig = createDefaultConfig(config);
    // sets config merging defaults with custom settings
    config.set(
        merge(defaultConfig, {
            logLevel: config.LOG_DEBUG,
            basePath: '..',
            urlRoot: '/base/',
            frameworks: ['jasmine'],
            files: [
                { pattern: 'lib/angular.js', watched: false },
                'test/unit/*.spec.js',
                { pattern: 'compiled/index.html', watched: false },
                { pattern: 'app/index.html', included: false, served: false },
                { pattern: 'compiled/app.js.map', included: false, served: true, watched: false, nocache: true },
                { pattern: 'test/images/*.jpg', watched: false, included: false, served: true, nocache: false },
            ],
            loggers: {
                custom: { type: 'file', filename: 'log.txt' },
            },
            reporters: ['progress', 'coverage'],
            middleware: ['foo', 'bar'],
            beforeMiddleware: ['foo', 'bar'],
            mime: {
                'text/x-typescript': ['ts', 'tsx'],
            },
            preprocessors: {
                'app.js': ['coverage'],
            },
        }),
    );
};
