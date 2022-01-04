import NewRelicSourceMapPlugin = require('@edx/new-relic-source-map-webpack-plugin');
import webpack = require('webpack');

const config: webpack.Configuration = {
    plugins: [
        new NewRelicSourceMapPlugin({
            applicationId: 'YOUR NEW RELIC APP ID',
            apiKey: process.env.NEW_RELIC_ADMIN_KEY!,
            staticAssetUrl: 'http://examplecdn.com',
            noop: typeof process.env.NEW_RELIC_ADMIN_KEY === 'undefined',
            errorCallback: (error: Error) => {},
            extensionRegex: /\.js$/,
            releaseId: '12345',
            releaseName: 'test-release',
            staticAssetUrlBuilder: (url, publicPath, file) => {
                return '/computed/path/here';
            },
        }),
    ],
};
