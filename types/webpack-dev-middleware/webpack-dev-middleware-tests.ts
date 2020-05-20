import express = require('express');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');

const compiler = webpack({});

let webpackDevMiddlewareInstance = webpackDevMiddleware(compiler);

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    logLevel: 'silent',
    logTime: true,
    lazy: true,
    methods: ['GET', 'POST'],
    mimeTypes: {
        typeMap: { 'text/html': ['phtml'] },
        force: true,
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    publicPath: '/assets/',
    index: 'index.html',
    headers: {
        'X-Custom-Header': 'yes',
    },
    stats: {
        colors: true,
    },
    reporter: null,
    serverSideRender: false,
    writeToDisk: false,
});

const app = express();
app.use([webpackDevMiddlewareInstance]);

webpackDevMiddlewareInstance.close(() => {
    console.log('closed');
});

webpackDevMiddlewareInstance.invalidate(stats => {
    if (stats) {
        console.log(stats.toJson());
    }
});

webpackDevMiddlewareInstance.waitUntilValid(stats => {
    if (stats) {
        console.log('Package is in a valid state:' + stats.toJson());
    }
});

const fs = webpackDevMiddlewareInstance.fileSystem;
fs.mkdirpSync('foo');

let filename = webpackDevMiddlewareInstance.getFilenameFromUrl('url');
if (filename !== false) {
    filename = filename.substr(0);
}
