import webpack = require('webpack');
import webpackNodeExternals = require('webpack-node-externals');

const a: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals()
    ]
};
const b: webpack.Configuration = {
    entry: 'test.js',
    externals: webpackNodeExternals()
};
const c: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            whitelist: ['jquery', 'webpack/hot/dev-server', /^lodash/]
        })
    ]
};
