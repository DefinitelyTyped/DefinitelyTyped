import * as webpack from 'webpack';
import DotenvWebpackPlugin = require('dotenv-webpack');

new DotenvWebpackPlugin(); // $ExpectType DotenvWebpackPlugin

const options: DotenvWebpackPlugin.Options = {
    path: './some.other.env',
    safe: true,
    systemvars: true,
    silent: true
};

const config: webpack.Configuration = {
    plugins: [
        new DotenvWebpackPlugin(),
        new DotenvWebpackPlugin({
            path: './some.other.env',
        }),
        new DotenvWebpackPlugin(options),
    ]
};
