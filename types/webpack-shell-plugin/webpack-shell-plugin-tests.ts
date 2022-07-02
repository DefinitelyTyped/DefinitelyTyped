/// <reference types="webpack-dev-server" />
import WebpackShellPlugin = require('webpack-shell-plugin');
import path = require('path');
import { Configuration, Plugin } from 'webpack';
import { Options } from 'webpack-shell-plugin';

const options: Options = {};

const plugins: Plugin[] = [
    new WebpackShellPlugin(),
    new WebpackShellPlugin({}),
    new WebpackShellPlugin(options),
    new WebpackShellPlugin({
        onBuildStart: ['echo "Starting"'],
        onBuildEnd: ['python script.py && node script.js'],
        dev: false,
        onBuildExit: ['echo "Exit"', 'echo "Done"'],
        safe: true,
    }),
];

const _: Configuration = {
    entry: {
        app: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },
    plugins,
    module: {
        rules: [
            { test: /\.js$/, loaders: 'babel' },
            { test: /\.scss$/, loader: 'style!css!scss?' },
            { test: /\.html$/, loader: 'html-loader' },
        ],
    },
};
