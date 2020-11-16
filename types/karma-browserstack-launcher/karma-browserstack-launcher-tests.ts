/// <reference types="node" />

import karma = require('karma');

const test = (config: karma.Config) => {
    config.set({
        // global config of your BrowserStack account
        browserStack: {
            username: 'jamesbond' || process.env.BROWSERSTACK_USERNAME,
            accessKey: '007' || process.env.BROWSERSTACK_ACCESS_KEY,
            build: process.env.BUILD_NUMBER,
            captureTimeout: 100,
            forcelocal: true,
            name: 'project',
            project: 'project',
            proxyHost: '127.0.0.1',
            proxyPass: process.env.BROWSERSTACK_ACCESS_KEY,
            proxyPort: 8080,
            proxyProtocol: 'http',
            proxyUser: process.env.BROWSERSTACK_USERNAME,
            retryLimit: 3,
            startTunnel: true,
            timeout: 100,
            tunnelIdentifier: 'tunnel',
            localIdentifier: 'Test123',
            video: true,
        },

        reporters: ['BrowserStack'],

        // define browsers
        customLaunchers: {
            bs_firefox_mac: {
                base: 'BrowserStack',
                browser: 'firefox',
                browser_version: '21.0',
                os: 'OS X',
                os_version: 'Mountain Lion',
            },
            bs_iphone5: {
                base: 'BrowserStack',
                device: 'iPhone 5',
                os: 'ios',
                os_version: '6.0',
            },
            iPad_3: {
                base: 'BrowserStack',
                real_mobile: false,
                device: 'iPad 3rd (6.0)',
                os: 'ios',
                os_version: '6.0',
                browser_version: null,
                browser: 'Mobile Safari',
            },
        },

        browsers: ['bs_firefox_mac', 'bs_iphone5'],
    });
};
