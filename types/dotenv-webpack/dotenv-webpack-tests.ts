import * as webpack from 'webpack';
import Dotenv = require('dotenv-webpack');
import { Options } from 'dotenv-webpack';

new Dotenv(); // $ExpectType DotenvWebpackPlugin

const optionsEmpty: Options = {};

const optionsFull: Options = {
    path: './some.other.env',
    safe: true,
    allowEmptyValues: true,
    systemvars: true,
    silent: true,
    expand: true,
    defaults: true
};

const optionsStrings: Options = {
    safe: './some.other.env.example',
    defaults: './some.other.env.defaults'
};

const config: webpack.Configuration = {
    plugins: [
        new Dotenv(),
        new Dotenv(optionsEmpty),
        new Dotenv(optionsFull),
        new Dotenv(optionsStrings)
    ]
};
