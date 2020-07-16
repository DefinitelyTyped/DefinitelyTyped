import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        // karma tests
        frameworks: ['browserify', 'jasmine'],
        files: ['some-non-cjs-library.js', 'test/**/*.js'],
        preprocessors: {
            'test/**/*.js': ['browserify'],
        },
        logLevel: 'LOG_DEBUG',
        autoWatch: true,
        // browserify tests
        browserify: {
            debug: true,
            transform: ['reactify', 'coffeeify', 'brfs'],
            extensions: ['.js', '.jsx', '.coffee'],
            plugin: ['stringify'],
            configure: bundle => {
                bundle.on('prebundle', () => {
                    bundle.external('foobar');
                });
            },
        },
        // watchify tests
        watchify: {
            delay: 100,
            ignoreWatch: ['**/node_modules/**'],
            poll: 1000,
        },
    });
};
