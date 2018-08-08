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

config = {
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            logger: {
                error: message => console.error(message),
                warn: message => console.warn(message),
                info: message => console.info(message),
            }
        })
    ]
};

export default config;
