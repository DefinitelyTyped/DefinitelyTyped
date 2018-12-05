import { Configuration } from 'webpack';
import CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

const options: CaseSensitivePathsWebpackPlugin.Options = {
    debug: true,
};

const c: Configuration = {
    plugins: [
        new CaseSensitivePathsWebpackPlugin(),
        new CaseSensitivePathsWebpackPlugin({
            debug: true
        }),
    ],
};
