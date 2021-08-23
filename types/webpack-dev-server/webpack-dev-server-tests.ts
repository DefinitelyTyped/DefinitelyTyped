import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');
const compiler = webpack({});

// basic example
const server1 = new WebpackDevServer({
    devMiddleware: {
        publicPath: '/assets/'
    }
}, compiler);
server1.startCallback(() => {
    console.info('started basic server...');
    server1.stopCallback(() => {
        console.log('stopped basic server.');
    })
});

// Configuration can be used as a type
const config: WebpackDevServer.Configuration = {
    static: {
        directory: '/path/to/directory',
        // or: directory: "http://localhost/",
        publicPath: '/serve-content-base-at-this-url',
        // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
        staticOptions: {},
    },

    client: {
        webSocketURL: {
            hostname: "0.0.0.0",
            pathname: "/ws",
            port: 8080,
        },
        // webSocketURL: 'auto://0.0.0.0:0/ws'
    },

    allowedHosts: "all",
    // Disable public host check, use it carefully

    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: false,

    https: true,

    // Set this if you want to enable gzip compression for assets
    compress: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "**" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    proxy: {
        '**': 'http://localhost:9090',
        '*': { logLevel: 'debug' },
    },

    devMiddleware: {
        stats: {
            assets: '/assets/',
            warningsFilter: /1/,

            // webpack-dev-middleware options
            quiet: false,
            noInfo: false,
            lazy: true,
            filename: 'bundle.js',
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
            },
            writeToDisk: true,
            // It's a required option.
            publicPath: '/assets/',
            headers: { 'X-Custom-Header': 'yes' },
            open: true,
        },
    },

    // https://webpack.js.org/configuration/dev-server/#devserveronlistening
    onListening(server) {
        const { port } = server.listeningApp.address();
    },
};

const c2: WebpackDevServer.Configuration = {
    static: {
        publicPath: ['/serve-content-base-at-this-url/1', '/serve-content-base-at-this-url/2']
    },
    devMiddleware: {
        stats: false,
    },
    open: {
        app: ['Google Chrome', '--incognito', '--other-flag'],
    },
};
const c3: WebpackDevServer.Configuration = {
    devMiddleware: {
        stats: 'verbose',
    }
};
const c4: WebpackDevServer.Configuration = {
    devMiddleware: {
        writeToDisk: (filePath: string) => true,
    }
};
const c5: WebpackDevServer.Configuration = {
    proxy: [{ context: (pathname: string) => true }],
};
const c6: WebpackDevServer.Configuration = {
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
const server2 = new WebpackDevServer({ ...config, port: 8081 }, compiler);
server2.startCallback(() => {
    console.log('started API example server...');

    // test the socket writer
    server2.sendMessage(server2.sockets, 'type1');
    server2.sendMessage(server2.sockets, 'type2', { message: 'OK' });

    server2.stopCallback(() => {
        console.log('stopped API example server...');
    });
});


// HTTPS example
const server3 = new WebpackDevServer({
    devMiddleware: {
        publicPath: '/assets/'
    },
    https: true,
    port: 8082,
}, compiler);

server3.startCallback(() => {
    console.info('started https server...');
    server3.stopCallback(() => {
        console.log('stopped https server.');
    })
})

const webpackConfig: webpack.Configuration = {
    context: __dirname,

    mode: 'development',

    target: 'node',

    devServer: config,
};

const multipleCompiler = webpack([
    {
        ...webpackConfig,
        devServer: { ...webpackConfig.devServer, port: 8083 },
    }, {
        ...webpackConfig,
        devServer: { ...webpackConfig.devServer, port: 8084 },
    }
]);

// multiple compilers
const _server = new WebpackDevServer(config, multipleCompiler);
