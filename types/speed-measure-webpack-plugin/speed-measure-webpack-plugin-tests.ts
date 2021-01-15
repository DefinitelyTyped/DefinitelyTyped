import SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
import { Options } from 'speed-measure-webpack-plugin';
import UglifyJSPlugin = require('uglifyjs-webpack-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import { Configuration } from 'webpack';

const uglify = new UglifyJSPlugin();

const defualtOptions = new SpeedMeasurePlugin();

const options: Options = {
    disable: true,
    granularLoaderData: true,
    pluginNames: {
        customUglifyName: uglify,
    },
    outputFormat: 'human',
    outputTarget: console.log,
};

const smp = new SpeedMeasurePlugin(options);
const webpackConfig = smp.wrap({
    plugins: [new HtmlWebpackPlugin()],
});

// basic

const basic: Configuration = {
    entry: {
        app: ['./app.js'],
    },
    output: {
        filename: 'someLibName.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
};
smp.wrap(basic);
