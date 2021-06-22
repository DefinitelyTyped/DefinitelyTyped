import MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
import { Options } from 'webpack-merge-and-include-globally';
import { Configuration } from 'webpack';
import { minify } from 'uglify-js';
import CleanCSS = require('clean-css');

const simpleOptions: Options = {
    files: {
        'vendor.js': [
            'node_modules/jquery/**/*.min.js',
            'node_modules/classnames/index.js',
            'node_modules/humps/humps.js',
        ],
        'style.css': ['example/test.css'],
    },
    transform: {
        'vendor.js': code => minify(code).code,
    },
};

const complexOptions: Options = {
    files: [
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: code => {
                const min = minify(code, {
                    sourceMap: {
                        filename: 'vendor.js',
                        url: 'vendor.js.map',
                    },
                });
                return {
                    'vendor.js': min.code,
                    'vendor.js.map': min.map,
                };
            },
        },
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: code => ({
                'style.css': new CleanCSS({}).minify(code).styles,
            }),
        },
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: 'style.css',
        },
    ],
};

const webpackConfiguration: Configuration = {
    plugins: [
        new MergeIntoSingleFilePlugin(simpleOptions),
        new MergeIntoSingleFilePlugin(complexOptions),
        new MergeIntoSingleFilePlugin(complexOptions, files => {}),
    ],
};
