import karma = require('karma');
import jsdom = require('jsdom');

const resourceLoader = new jsdom.ResourceLoader({
    proxy: 'http://127.0.0.1:9001',
    strictSSL: false,
    userAgent: 'Mellblomenator/9000',
});
const virtualConsole = new jsdom.VirtualConsole();
const cookieJar = new jsdom.CookieJar();

module.exports = (config: karma.Config) => {
    config.set({
        browsers: ['jsdom'],

        jsdomLauncher: {
            jsdom: {
                resources: resourceLoader,
                virtualConsole,
                cookieJar,
            },
        },
    });
};
