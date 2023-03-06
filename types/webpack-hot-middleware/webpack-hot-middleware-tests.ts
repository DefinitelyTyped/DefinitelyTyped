import express = require('express');
import webpack = require('webpack');
import webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack({});

let webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

webpackHotMiddlewareInstance = webpackHotMiddleware(compiler, {
    log: console.log.bind(console),
    path: '/__what',
    heartbeat: 2000
});

const multiCompiler = webpack([{}]);

webpackHotMiddlewareInstance = webpackHotMiddleware(multiCompiler);

const clientOpts: webpackHotMiddleware.ClientOptions = {
    path: '/__webpack_hmr',
    reload: true,
    name: '__webpack_hmr_custom_bundle_name',
    timeout: 1000,
    overlay: false,
    noInfo: true,
    quiet: true,
    dynamicPublicPath: false,
    autoConnect: true,
    ansiColors: {
        red: '00FF00'
    },
    overlayStyles: {
        color: '#FF0000'
    },
    overlayWarnings: false
};

const app = express();
app.use(webpackHotMiddlewareInstance);
