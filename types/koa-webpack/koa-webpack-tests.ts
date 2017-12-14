import Koa = require('koa');
import webpack = require('webpack');
import koaWebpack = require('koa-webpack');

const app = new Koa();
const config: webpack.Configuration = {};
const compiler = webpack(config);

// Using the middleware

const middleware = koaWebpack({
    compiler,
    config,
    dev: {
        noInfo: false,
        quiet: false,
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
    hot: {
        log: console.log.bind(console),
        path: '/__what',
        heartbeat: 2000
    }
});

app.use(middleware);

// Accessing the underlying middleware

middleware.dev.close();
middleware.dev.invalidate();
middleware.dev.waitUntilValid();
middleware.hot.publish(null);
