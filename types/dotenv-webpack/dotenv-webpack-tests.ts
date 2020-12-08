import webpack = require('webpack');
import Dotenv = require('dotenv-webpack');
import { Options } from 'dotenv-webpack';
import { Configuration } from 'webpack';

new Dotenv(); // $ExpectType DotenvWebpackPlugin

const optionsEmpty: Options = {};

const optionsFull: Options = {
    path: './some.other.env',
    safe: true,
    allowEmptyValues: true,
    systemvars: true,
    silent: true,
    expand: true,
    defaults: true,
};

const optionsStrings: Options = {
    safe: './some.other.env.example',
    defaults: './some.other.env.defaults',
};

const config: Configuration = {
    plugins: [new Dotenv(), new Dotenv(optionsEmpty), new Dotenv(optionsFull), new Dotenv(optionsStrings)],
};
