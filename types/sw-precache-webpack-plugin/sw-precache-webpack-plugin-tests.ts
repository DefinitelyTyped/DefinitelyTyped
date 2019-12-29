import { Configuration } from 'webpack';
import * as SwPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';

let config: Configuration = {
    plugins: [new SwPrecacheWebpackPlugin()]
};

config = {
    plugins: [
        new SwPrecacheWebpackPlugin({
            filename: ''
        })
    ]
};

config = {
    plugins: [
        new SwPrecacheWebpackPlugin({
            cacheId: ''
        })
    ]
};

config = {
    plugins: [
        new SwPrecacheWebpackPlugin({
            importScripts: [
                {
                    chunkName: ''
                }
            ]
        })
    ]
};

export default config;
