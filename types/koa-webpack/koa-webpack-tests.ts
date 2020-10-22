import Koa = require('koa');
import webpack = require('webpack');
import koaWebpack = require('koa-webpack');

const app = new Koa();
const config: webpack.Configuration = {};
const compiler = webpack(config);

app.use(ctx => {
    // $ExpectType MemoryFileSystem | undefined
    ctx.state.fs;
    ctx.body = ctx.state.fs!.createReadStream('file.js');
});

app.use(ctx => {
    // $ExpectType Stats
    ctx.state.stats;
    ctx.body = ctx.state.stats.toJson();
});

// Using the middleware
koaWebpack({
    compiler,
    config,
    // Reference: https://github.com/webpack/webpack-dev-middleware#options
    devMiddleware: {
        headers: { 'X-Custom-Header': 'yes' },
        index: 'index.html',
        lazy: false,
        logger: undefined,
        logLevel: 'info',
        // logTime: false,
        // mimeTypes: null,
        publicPath: '/assets/',
        reporter: null,
        serverSideRender: false,
        stats: { context: process.cwd() },
        watchOptions: { aggregateTimeout: 200 },
        // writeToDisk: false
    },
    // Reference: https://github.com/webpack-contrib/webpack-hot-client#api
    hotClient: {
        allEntries: false,
        autoConfigure: true,
        host: 'localhost',
        hmr: true,
        https: false,
        logLevel: 'info',
        logTime: false,
        port: 0,
        reload: true,
        server: undefined,
        stats: { context: process.cwd() },
    },
}).then(middleware => {
    app.use(middleware);

    // Accessing the underlying middleware
    middleware.devMiddleware.close();
    middleware.devMiddleware.invalidate();
    middleware.devMiddleware.waitUntilValid();
    middleware.devMiddleware.getFilenameFromUrl('/public/index.html');
    middleware.devMiddleware.fileSystem;
    middleware.hotClient.close();
    middleware.hotClient.options;
    middleware.hotClient.server;

    // close the middleware
    middleware.close(() => {
        console.log('closed');
    });
});
