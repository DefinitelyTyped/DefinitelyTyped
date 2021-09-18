import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');
import { Application } from 'express';
import { AddressInfo } from 'net';
const compiler = webpack({});
const multipleCompiler = webpack([]);

// basic example
let server = new WebpackDevServer(
    {
        // Host and port are required options to correct work.
        host: 'localhost',
        port: 8080,

        devMiddleware: {
            publicPath: '/assets/',
        },
    },
    compiler,
);
(async () => {
    await server.start();
})();

// Configuration can be used as a type
const config: WebpackDevServer.Configuration = {
    // webpack-dev-server options Host and port is a required options to correct
    // work.
    host: 'localhost',
    magicHtml: false,
    port: 8080,

    client: {
        // Public host for server
        webSocketURL: 'public-host.ru',
        logging: 'info',
        overlay: {
            errors: true,
        },
    },

    static: {
        directory: '/path/to/directory',
        publicPath: '/serve-content-base-at-this-url',
        // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to
        // inner express server
        staticOptions: {},
        watch: true,
    },

    // webpack-dev-middleware options
    devMiddleware: {
        publicPath: '/assets/',
        stats: {
            assets: false,
            warningsFilter: /1/,
        },
        writeToDisk: true,
    },

    allowedHosts: 'all',
    // Disable public host check, use it carefully

    hot: true,
    // Enable special support for Hot Module Replacement Page is no longer updated,
    // but a "webpackHotUpdate" message is send to the content Use
    // "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI
    // option does. Set this as true if you want to access dev server from arbitrary
    // url. This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an
    // arbitrary server. Use "**" to proxy all paths to the specified server. This
    // is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see
    // https://github.com/webpack/webpack-dev-server/pull/127 ).
    proxy: {
        '**': 'http://localhost:9090',
        '*': {
            logLevel: 'debug',
        },
    },

    headers: {
        'X-Custom-Header': 'yes',
    },
    open: {
        target: ['first.html', 'http://localhost:8080/second.html'],
        app: {
            name: 'google-chrome',
            arguments: ['--incognito', '--new-window'],
        },
    },

    // https://webpack.js.org/configuration/dev-server/#devserveronlistening
    onListening(devServer) {
        const { port } = devServer.server.address() as AddressInfo;
    },

    watchFiles: [
        {
            paths: ['one-dir'],
        },
        'two-dir',
    ],
    webSocketServer: {
        type: 'ws',
        options: {
            path: '/custom/path',
        },
    },
};

const c2: WebpackDevServer.Configuration = {
    // Host and port are required options to correct work.
    host: 'local-ip',
    port: 'auto',

    allowedHosts: ['host.com', 'subdomain.host.com', 'subdomain2.host.com', 'host2.com'],

    client: {
        progress: true,
        webSocketURL: {
            hostname: '0.0.0.0',
            pathname: '/ws',
            password: 'dev-server',
            port: 8080,
            protocol: 'ws',
            username: 'webpack',
        },
    },

    static: {
        publicPath: ['/serve-content-base-at-this-url/1', '/serve-content-base-at-this-url/2'],
        staticOptions: {
            redirect: true,
        },
    },
    devMiddleware: {
        stats: false,
    },
    open: {
        app: ['Google Chrome', '--incognito', '--other-flag'],
    },
    onBeforeSetupMiddleware(devServer) {
        if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
        }

        devServer.app.get('/some/path', (req, res) => {
            res.json({ custom: 'response' });
        });
    },
    watchFiles: {
        paths: ['src/**/*.php', 'public/**/*'],
        options: {
            usePolling: false,
        },
    },
    webSocketServer: 'ws',
};
const c3: WebpackDevServer.Configuration = {
    // Host and port are required options to correct work.
    host: '127.0.0.1',
    port: 8080,

    static: '/path/to/directory',

    devMiddleware: {
        stats: 'verbose',
    },
};
const c4: WebpackDevServer.Configuration = {
    // Host and port are required options to correct work.
    host: 'localhost',
    port: 8080,

    static: ['/path/to/directory', '/path/to/another-directory'],

    devMiddleware: {
        writeToDisk: (filePath: string) => true,
    },
};
const c5: WebpackDevServer.Configuration = {
    // Host and port are required options to correct work.
    host: 'localhost',
    port: 8080,

    proxy: [
        {
            context: (pathname: string) => true,
        },
    ],
};
const c6: WebpackDevServer.Configuration = {
    // Host and port are required options to correct work.
    host: 'localhost',
    port: 8080,

    historyApiFallback: {
        disableDotRule: true,
        htmlAcceptHeaders: ['text/html'],
        index: '/app/',
        logger: () => {},
        rewrites: [
            {
                from: /\/page/,
                to: '/page.html',
            },
            {
                from: /^\/images\/.*$/,
                to: context => '/assets/' + context.parsedUrl.pathname,
            },
        ],
        verbose: true,
    },
};

// API example
server = new WebpackDevServer(config, compiler);

// test deprecated constructor
server = new WebpackDevServer(compiler, config);

(async () => {
    await server.start();
})();

// test the socket writer
server.sendMessage(server.sockets, 'type1');
server.sendMessage(server.sockets, 'type2', { message: 'OK' });

server.stop();

// HTTPS example
server = new WebpackDevServer(
    {
        // Host and port are required options to correct work.
        host: 'localhost',
        port: 8080,

        devMiddleware: {
            publicPath: '/assets/',
        },
        https: true,
    },
    compiler,
);

server.stopCallback(() => {});

server.stop();

const webpackConfig: webpack.Configuration = {
    context: __dirname,

    mode: 'development',

    target: 'node',

    devServer: config,
};

// multiple compilers
server = new WebpackDevServer(config, multipleCompiler);
