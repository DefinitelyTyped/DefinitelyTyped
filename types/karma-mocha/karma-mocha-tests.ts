import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: ['src/**/*.js', 'test/**/*.js'],
        reporters: ['progress'],
        port: 9876, // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'],
        autoWatch: false,
        concurrency: Infinity,
        client: {
            mocha: {
                // karma-mocha options
                expose: ['body '],
                // opts: './test/mocha.opts',
                opts: true,
                // mocha options
                ui: 'bdd',
            },
        },
    });
};

const mochaClientOptionsTestOne: karma.MochaClientOptions = {
    expose: [],
    opts: true,
    ui: 'bdd',
};

const mochaClientOptionsTestTwo: karma.MochaClientOptions = {
    expose: ['body'],
    opts: 'test/mocha.opts',
    ui: 'bdd',
};

const mochaClientOptionsTestThree: karma.MochaClientOptions = {
    ui: 'bdd',
};
