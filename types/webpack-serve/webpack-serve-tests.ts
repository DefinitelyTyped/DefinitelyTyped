import webpack = require('webpack');
import serve = require('webpack-serve');

const webpackConfig: webpack.Configuration = {
    entry: { index: './index.js' },
};

const webpackCompiler = webpack(webpackConfig);

const serveConfig: serve.Options = {
    add: (app, middleware, options) => {
        middleware.content();
        middleware.webpack();
    },
    compiler: webpackCompiler,
    config: webpackConfig,
    content: './webroot',
    clipboard: true,
    devMiddleware: {
        logLevel: 'warn',
        publicPath: '/',
    },
    host: 'localhost',
    hotClient: {
        logLevel: 'warn',
        allEntries: true,
    },
    http2: true,
    https: {},
    logLevel: 'info',
    logTime: false,
    on: {
        'build-finished': args => {
            console.log(args.stats.toString());
        },
    },
    open: {
        path: '/index.html',
    },
    port: 65080,
};

const promise = serve({}, serveConfig);

promise.then(result => {
    result.on('compiler-error', args => {
        console.log(args.stats);
    });
});
