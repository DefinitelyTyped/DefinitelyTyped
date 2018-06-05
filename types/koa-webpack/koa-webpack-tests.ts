import Koa = require('koa');
import webpack = require('webpack');
import koaWebpack = require('koa-webpack');

const app = new Koa();
const config: webpack.Configuration = {};
const compiler = webpack(config);

// Using the middleware

koaWebpack({
    compiler,
    config,
    devMiddleware: {
        lazy: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true,
        },
        publicPath: '/assets/',
        index: 'index.html',
        headers: {
            'X-Custom-Header': 'yes'
        },
        stats: {
            colors: true,
        },
        reporter: null,
        serverSideRender: false
    },
    hotClient: {
        log: console.log.bind(console),
        path: '/__what',
        heartbeat: 2000
    }
}).then((middleware) => {
    app.use(middleware);

    // Accessing the underlying middleware

    middleware.devMiddleware.close();
    middleware.devMiddleware.invalidate();
    middleware.devMiddleware.waitUntilValid();
    middleware.hotClient.publish(null);

    return middleware;
}).then((middleware) => {
    // close the middleware

    middleware.close();
});
