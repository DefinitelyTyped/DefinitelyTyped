import karma = require('karma');

// karma.server is deprecated and will eventually be removed
karma.server.start({ port: 9876 }, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

karma.runner.run({ port: 9876 }, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

karma.stopper.stop({ port: 9876 }, exitCode => {
    if (exitCode === 0) {
        console.log('Server stop as initiated');
    }
    process.exit(exitCode);
});

const server = new karma.Server({ logLevel: 'debug', port: 9876 }, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

server.start();

server.refreshFiles();

server.on('browser_register', (browser: any) => {
    console.log('A new browser was registered');
});

server.on('run_complete', (browsers, results) => {
    results.disconnected = false;
    results.error = false;
    results.exitCode = 0;
    results.failed = 9;
    results.success = 10;
});

karma.runner.run({ port: 9876 }, (exitCode: number) => {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
});

const testLauncher = (launcher: karma.launcher.Launcher) => {
    const captured: boolean = launcher.areAllCaptured();
};

// Example of configuration file karma.conf.ts, see http://karma-runner.github.io/latest/config/configuration-file.html
module.exports = (config: karma.Config) => {
    config.set({
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

        port: 9876,

        autoWatch: true,

        browserDisconnectTimeout: 20_000,
        browserDisconnectTolerance: 100,
        browserNoActivityTimeout: 10_000,
        browserSocketTimeout: 20_000,

        browsers: ['Chrome', 'Firefox'],
        customHeaders: [
            {
                match: '.*foo.html',
                name: 'Service-Worker-Allowed',
                value: '/',
            },
        ],
        customLaunchers: {
            ChromiumHeadless_without_security: {
                base: 'ChromiumHeadless',
                flags: ['--no-sandbox', '--disable-setuid-sandbox'],
            },
        },
        detached: true,
        failOnEmptyTestSuite: false,
        failOnSkippedTests: true,
        failOnFailingTestSuite: false,
        forceJSONP: true,
        formatError: msg => `error: ${msg}`,
        listenAddress: '0.0.0.0',
        pingTimeout: 2000,
        processKillTimeout: 3000,
        proxies: {
            '/static': 'http://gstatic.com',
            '/web': 'http://localhost:9000',
            '/img/': '/base/test/images/',
            '/proxyfied': {
                target: 'http://myserver.localhost',
                changeOrigin: true,
            },
        },
        proxyReq: (proxyReq, req, res, options) => {
            proxyReq.setHeader('Referer', 'https://www.example.com/');
        },
        proxyRes: (proxyRes, req, res) => {
            if (proxyRes.headers['set-cookie']) {
                proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map((cookie: string) => {
                    return cookie.replace(/\s*secure;?/i, '');
                });
            }
        },
        singleRun: true,
        restartOnFileChange: true,
        retryLimit: 5,
        browserConsoleLogOptions: {
            level: 'warn',
            format: '%b %T: %m',
            path: 'some/path/to.log',
            terminal: false,
        },
        upstreamProxy: {
            hostname: 'localhost',
            path: '/',
            port: 27001,
            protocol: 'http',
        },
    });
};

// custom browser config
const customBrowser = (config: karma.Config) => {
    config.set({
        browsers: ['Safari', 'my-custom-browser', 'Firefox', '/usr/local/bin/custom-browser.sh'],
    });
};

// plugins
function CustomMiddlewareFactory(config: karma.ConfigOptions) {
    return (request: any, response: any /* next */) => {
        response.writeHead(200);
        return response.end('content!');
    };
}

// plugin can be class or constructor function
const CustomPlugin = function CustomPlugin() {};
CustomPlugin.prototype = {
    log: () => {},
};
class CustomPluginClass {
    log: () => {};
}

const pluginsTests = (config: karma.Config) => {
    config.set({
        middleware: ['custom'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            { 'framework:xyz': ['factory', CustomMiddlewareFactory] },
            { 'framework:abc': ['type', CustomPlugin] },
            { 'framework:abc': ['type', CustomPluginClass] },
            { 'framework:xyz': ['value', 5] },
        ],
    });
};

console.log(karma.constants.DEFAULT_HOSTNAME);
console.log(karma.VERSION);

karma.config.parseConfig('karma.conf.js', {
    singleRun: true,
    restartOnFileChange: true,
});
