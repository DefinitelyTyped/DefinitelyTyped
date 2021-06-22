import * as webpack from 'webpack';
import BrotliWebpackPlugin = require('brotli-webpack-plugin');

new BrotliWebpackPlugin(); // $ExpectType BrotliWebpackPlugin

const optionsEmpty: BrotliWebpackPlugin.Options = {};

const optionsFull: BrotliWebpackPlugin.Options = {
    asset: '[path].br[query]',
    test: /\.js$/,
    threshold: 1024,
    minRatio: 0.9,
    deleteOriginalAssets: true,
};

const config: webpack.Configuration = {
    plugins: [
        new BrotliWebpackPlugin(),
        new BrotliWebpackPlugin(optionsEmpty),
        new BrotliWebpackPlugin(optionsFull),
    ]
};
