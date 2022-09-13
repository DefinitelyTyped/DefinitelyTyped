import { Configuration } from 'webpack';
import WatchExternalFilesPlugin = require('webpack-watch-files-plugin');

const config: Configuration = {
    plugins: [
        new WatchExternalFilesPlugin(),
        new WatchExternalFilesPlugin({}),
        new WatchExternalFilesPlugin({
            files: ['test.js'],
            verbose: false,
        }),
        new WatchExternalFilesPlugin({
            files: ['test.js'],
        }),
        new WatchExternalFilesPlugin({
            verbose: true,
        }),
    ],
};
