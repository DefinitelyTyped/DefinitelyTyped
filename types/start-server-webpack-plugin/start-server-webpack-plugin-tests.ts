import { Configuration } from 'webpack';
import StartServerWebpackPlugin = require('start-server-webpack-plugin');

const c1: Configuration = {
    plugins: [
        new StartServerWebpackPlugin('main.js')
    ]
};

const c2: Configuration = {
    plugins: [
        new StartServerWebpackPlugin({
            name: 'main.js',
            nodeArgs: [],
            args: [],
            signal: false,
            keyboard: false
        })
    ]
};
