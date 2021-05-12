import express = require('express');
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');

const compiler = webpack({});
const multiCompiler = webpack([{}]);
const compilerWithPublicPath = webpack({
    output: {
        publicPath: '/assets/',
    },
});

// options
let webpackDevMiddlewareInstance = webpackDevMiddleware(compiler);

webpackDevMiddlewareInstance = webpackDevMiddleware(multiCompiler);

webpackDevMiddlewareInstance = webpackDevMiddleware(compilerWithPublicPath, {});

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    mimeTypes: {
        myhtml: 'text/html',
    },
    writeToDisk: false,
    methods: ['GET', 'POST'],
    headers: {
        'X-Custom-Header': 'yes',
    },
    publicPath: '/assets/',
    serverSideRender: false,
    stats: 'errors-only',
    outputFileSystem: compiler.outputFileSystem,
    index: 'index.html',
});

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    writeToDisk: () => false,
    stats: true,
});

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    stats: {
        all: true,
    },
});

// return value
const app = express();
app.use([webpackDevMiddlewareInstance]);

webpackDevMiddlewareInstance.waitUntilValid(stats => {
    if (stats) {
        console.log('Package is in a valid state:' + stats.toJson());
    }
});

webpackDevMiddlewareInstance.invalidate(stats => {
    if (stats) {
        console.log(stats.toJson());
    }
});

webpackDevMiddlewareInstance.close(() => {
    console.log('closed');
});

// $ExpectType boolean
webpackDevMiddlewareInstance.context.state;

function foo(_: webpack.Stats) {}
if (webpackDevMiddlewareInstance.context.stats) {
    foo(webpackDevMiddlewareInstance.context.stats);
}

webpackDevMiddleware(compilerWithPublicPath, webpackDevMiddlewareInstance.context.options);

webpackDevMiddleware(webpackDevMiddlewareInstance.context.compiler, {});

function bar(_: webpack.Watching) {}
if (webpackDevMiddlewareInstance.context.watching) {
    bar(webpackDevMiddlewareInstance.context.watching);
}

webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    headers: () => {
        return { "X-nonsense-1": "yes", "X-nonsense-2": "no" };
    },
});
webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
    headers: (req, res) => {
        res.setHeader("X-nonsense-1", "yes");
        res.setHeader("X-nonsense-2", "no");
    },
});
