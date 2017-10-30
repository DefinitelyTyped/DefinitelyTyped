import karma = require('karma');

export default function(config: karma.Config): void {
    config.set({
        files: ['src/index.spec.ts'],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        frameworks: ['jasmine'],
        preprocessors: {'src/index.spec.ts': ['webpack', 'sourcemap']},
        webpack: {entry: 'test.js'},
        webpackMiddlewareOptions: {noInfo: true},
        reporters: ['spec']
    });
}
