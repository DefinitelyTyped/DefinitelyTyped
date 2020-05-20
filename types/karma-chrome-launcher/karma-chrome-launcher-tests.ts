import karma = require('karma');
import path = require('path');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['mocha'],
        plugins: ['karma-mocha', 'karma-chrome-launcher'],
        files: ['test/index.spec.js'],
        reporters: ['mocha'],
        browsers: ['Chrome', 'Chrome_without_security'],
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security', '--disable-site-isolation-trials'],
                // Chrome launcher specific configuration
                chromeDataDir: path.resolve(__dirname, '.chrome'),
            },
        },
    });
};
