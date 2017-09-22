import * as karma from 'karma';
import * as http from 'http';
import * as httpProxy from 'http-proxy';

const browserConsoleLogOptions: karma.BrowserConsoleLogOptions = {
    level: 'debug',
    format: '%b %T: %m',
    path: '/output',
    terminal: true
};

const client: karma.ClientOptions = {
    args: ['test'],
    useIframe: true,
    runInParent: false,
    captureConsole: true,
    clearContext: true
};

const customHeaders: karma.CustomHeader[] = [
    {
        match: '.*foo.html',
        name: 'Service-Worker-Allowed',
        value: '/'
    },
    {
        match: '.*bar.html',
        name: 'Service-Worker-Allowed',
        value: '/'
    }
];

const filePattern: karma.FilePattern = {
    pattern: '**/**.ts',
    watched: true,
    included: true,
    served: true,
    nocache: true
};

const proxies: karma.Proxies = {
    '/static': 'http://gstatic.com',
    '/web': 'http://localhost:9000',
    '/img/': '/base/test/images/',
    '/proxyfied': {
        target: 'http://myserver.localhost',
        changeOrigin: true
    }
};

const upstreamProxy: karma.UpstreamProxy = {
    path: '/',
    port: 9875,
    hostname: 'localhost',
    protocol: 'http:'
};

const configurationOptions: karma.ConfigOptions = {
    autoWatch: true,
    autoWatchBatchDelay: 3000,
    basePath: '/',
    browserDisconnectTimeout: 3000,
    browserConsoleLogOptions,
    browserDisconnectTolerance: 200,
    browserNoActivityTimeout: 3000,
    browsers: ['Chrome', 'Firefox'],
    captureTimeout: 4000,
    client,
    colors: true,
    concurrency: Infinity,
    crossOriginAttribute: true,
    customContextFile: 'path-to-file',
    customDebugFile: 'path-to-file',
    customClientContextFile: 'path-to-file',
    customHeaders,
    detached: true,
    exclude: ['./foo.ts', './bar.ts'],
    failOnEmptyTestSuite: true,
    files: [filePattern],
    forceJSONP: true,
    frameworks: ['mocha', 'chai'],
    listenAddress: '0.0.0.0',
    hostname: 'localhost',
    httpsServerOptions: {
        passphrase: 'pass'
    },
    logLevel: 'log',
    loggers: [{
        type: 'console-logger'
    }],
    middleware: ['custom'],
    mime: {
        'text/x-typescript': ['ts', 'tsx'],
        'text/plain': ['mytxt']
    },
    beforeMiddleware: ['custom'],
    plugins: ['karma-webpack'],
    port: 9876,
    processKillTimeout: 9000,
    preprocessors: { '**/*.coffee': 'coffee' },
    protocol: 'https:',
    httpModule: 'http2',
    proxies,
    proxyValidateSSL: true,
    reportSlowerThan: 200,
    reporters: ['dots', 'progress'],
    formatError(error) {
        return error;
    },
    restartOnFileChange: true,
    retryLimit: 3,
    singleRun: true,
    transports: ['polling', 'websocket'],
    proxyReq(
        proxyReq: http.ClientRequest,
        req: http.IncomingMessage,
        res: http.ServerResponse,
        options: httpProxy.ServerOptions
    ) {
        proxyReq.setHeader('Referer', 'https://www.example.com/');
    },
    proxyRes(proxyRes: http.IncomingMessage, req: http.IncomingMessage, res: http.ServerResponse) {
        if (proxyRes.headers['set-cookie']) {
            proxyRes.headers['set-cookie'] = (proxyRes.headers['set-cookie'] as any).map((cookie: string) => {
                return cookie.replace(/\s*secure;?/i, '');
            });
        }
    },
    upstreamProxy,
    urlRoot: '/',
    jsVersion: 2,
    webpack: {
        entry: './index.ts'
    },
    webpackMiddleware: {
        noInfo: true,
        quiet: true,
        publicPath: '/'
    }
};
