import { Configuration } from 'webpack';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

let config: Configuration = {
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};

config = {
    plugins: [
        new ForkTsCheckerWebpackPlugin({})
    ]
};

config = {
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            vue: true
        })
    ]
};

export default config;
