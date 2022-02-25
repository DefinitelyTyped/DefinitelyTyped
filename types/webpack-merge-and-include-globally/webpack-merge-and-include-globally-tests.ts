import MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
import { Options } from 'webpack-merge-and-include-globally';
import { Configuration } from 'webpack';
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
        'vendor.js': code => 'transformed',
    },
};

const complexOptions: Options = {
    files: [
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: code => {
                return {
                    'vendor.js': 'min.code',
                    'vendor.js.map': 'min.map',
                };
            },
        },
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: code => ({
                'style.css': 'styles',
            }),
        },
        {
            src: ['node_modules/jquery/**/*.min.js', 'node_modules/classnames/index.js', 'node_modules/humps/humps.js'],
            dest: 'style.css',
        },
    ],
    transformFileName: (fileNameBase, extension, hash) => `${fileNameBase}.[${hash}]${extension}`,
};

const webpackConfiguration: Configuration = {
    plugins: [
        new MergeIntoSingleFilePlugin(simpleOptions),
        new MergeIntoSingleFilePlugin(complexOptions),
        new MergeIntoSingleFilePlugin(complexOptions, files => {}),
    ],
};

const instance = new MergeIntoSingleFilePlugin(simpleOptions);
instance.apply; // $ExpectType (compiler: Compiler) => void
