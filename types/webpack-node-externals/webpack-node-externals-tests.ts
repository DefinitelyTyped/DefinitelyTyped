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
const d: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            importType: function (moduleName) {
                return 'commonjs';
            }
        })
    ]
};
const e: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                exclude: 'devDependencies'
            }
        })
    ]
}
const f: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                exclude: ['devDependencies']
            }
        })
    ]
}
const g: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                include: 'dependencies'
            }
        })
    ]
}
const h: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                include: ['dependencies']
            }
        })
    ]
}
