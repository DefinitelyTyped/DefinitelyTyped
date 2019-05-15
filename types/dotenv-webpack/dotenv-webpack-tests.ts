import * as webpack from 'webpack';
import DotenvWebpackPlugin = require('dotenv-webpack');

new DotenvWebpackPlugin(); // $ExpectType DotenvWebpackPlugin

const optionsEmpty: DotenvWebpackPlugin.Options = {};

const optionsFull: DotenvWebpackPlugin.Options = {
    path: './some.other.env',
    safe: true,
    systemvars: true,
    silent: true,
    expand: true,
    defaults: true
};

const optionsStrings: DotenvWebpackPlugin.Options = {
    safe: './some.other.env.example',
    defaults: './some.other.env.defaults'
};

const config: webpack.Configuration = {
    plugins: [
        new DotenvWebpackPlugin(),
        new DotenvWebpackPlugin(optionsEmpty),
        new DotenvWebpackPlugin(optionsFull),
        new DotenvWebpackPlugin(optionsStrings)
    ]
};
