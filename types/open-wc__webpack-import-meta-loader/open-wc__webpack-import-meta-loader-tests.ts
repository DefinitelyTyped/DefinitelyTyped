/// <reference types="node" />

import webpack = require('webpack');
import webpackImportMetaLoader = require('@open-wc/webpack-import-meta-loader');

const configuration: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    { resourceQuery: /global/, use: ['style-loader', 'css-loader'] },
                    { use: ['to-string-loader', 'css-loader'] },
                ],
            },
            // typical use test
            {
                test: /\.js$/,
                loader: require.resolve('@open-wc/webpack-import-meta-loader'),
            },
        ],
    },
};

webpackImportMetaLoader('TEST_VALUE'); // $ExpectType string
