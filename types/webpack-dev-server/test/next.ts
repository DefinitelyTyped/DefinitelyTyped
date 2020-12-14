/// <reference types="../next"/>

import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');
const compiler = webpack({});
const multipleCompiler = webpack([]);

// basic example
let server = new WebpackDevServer(compiler, {
    dev: {
        publicPath: '/assets/',
    },
});
server.listen(8080, 'localhost');

// Configuration can be used as a type
const config: WebpackDevServer.Configuration = {
    // webpack-dev-server options
    // Toggle between the dev-server's two different modes --- inline (default, recommended for HMR) or iframe.

    static: {
        directory: '/path/to/directory',
        publicPath: '/serve-content-base-at-this-url',
        // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
        staticOptions: {},
        watch: {
            aggregateTimeout: 300,
            poll: 1000,
        },
    },

    public: 'public-host.ru',
    // Public host for server

    firewall: false,
    // Disable public host check, use it carefully

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    // Set this if you want to enable gzip compression for assets
    compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "**" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    proxy: {
        '**': 'http://localhost:9090',
    },

    // webpack-dev-middleware options
    dev: {
        publicPath: '/assets/',
    },
    headers: { 'X-Custom-Header': 'yes' },
    open: true,
};

const c2: WebpackDevServer.Configuration = {
    static: {
        publicPath: ['/serve-content-base-at-this-url/1', '/serve-content-base-at-this-url/2'],
    },
    open: {
        app: ['Google Chrome', '--incognito', '--other-flag'],
    },
};
const c3: WebpackDevServer.Configuration = {
    proxy: [{ context: (pathname: string) => true }],
};
const c4: WebpackDevServer.Configuration = {
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
server = new WebpackDevServer(compiler, config);
server.listen(8080, 'localhost', () => {});

// test the socket writer
server.sockWrite(server.sockets, 'type1');
server.sockWrite(server.sockets, 'type2', { message: 'OK' });

server.close();

// HTTPS example
server = new WebpackDevServer(compiler, {
    dev: {
        publicPath: '/assets/',
    },
    https: true,
});

server.listen(8080, 'localhost', () => {});

server.close();

// multiple compilers
server = new WebpackDevServer(multipleCompiler, config);
