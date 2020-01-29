/// <reference types="node" />
import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['detectBrowsers'],

        plugins: [
            'karma-chrome-launcher',
            'karma-edge-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-safari-launcher',
            'karma-safaritechpreview-launcher',
            'karma-opera-launcher',
            'karma-phantomjs-launcher',
            'karma-detect-browsers',
        ],
    });
};

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['detectBrowsers'],

        // configuration
        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: true,

            // use headless mode, for browsers that support it, default is false
            preferHeadless: true,

            // post processing of browsers list
            // here you can edit the list of browsers used by karma
            postDetection: availableBrowsers => {
                // Add IE Emulation
                const result = availableBrowsers;

                if (availableBrowsers.indexOf('IE') > -1) {
                    result.push('IE9');
                }

                // Remove PhantomJS if another browser has been detected
                if (availableBrowsers.length > 1 && availableBrowsers.indexOf('PhantomJS') > -1) {
                    const i = result.indexOf('PhantomJS');
                    if (i !== -1) {
                        result.splice(i, 1);
                    }
                }

                return result;
            },
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-edge-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-safari-launcher',
            'karma-safaritechpreview-launcher',
            'karma-opera-launcher',
            'karma-phantomjs-launcher',
            'karma-detect-browsers',
        ],
    });
};

// @see https://github.com/twbs/bootstrap/blob/f153748f522e01ba16989e6c8085a69ff656b069/js/tests/karma.conf.js
const { env } = process;
const debug = env.DEBUG === 'true';
const detectBrowsers: karma.KarmaDetectBrowsers = {
    usePhantomJS: false,
    postDetection(availableBrowser) {
        if (env.CI === 'true' || availableBrowser.indexOf('Chrome') > -1) {
            return debug ? ['Chrome'] : ['ChromeHeadless'];
        }

        if (availableBrowser.indexOf('Firefox') > -1) {
            return debug ? ['Firefox'] : ['FirefoxHeadless'];
        }

        throw new Error('Please install Firefox or Chrome');
    },
};
module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['detectBrowsers'],
        detectBrowsers,
    });
};
