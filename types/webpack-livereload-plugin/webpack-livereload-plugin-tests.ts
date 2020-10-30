import LiveReloadPlugin = require('webpack-livereload-plugin');
import { Plugin } from 'webpack';

const plugins: Plugin[] = [
    new LiveReloadPlugin(),
    new LiveReloadPlugin({}),
    new LiveReloadPlugin({
        appendScriptTag: true,
        delay: 100,
        hostname: 'localhost',
        ignore: /\.css$/,
        port: 9999,
        protocol: 'https',
        useSourceHash: true,
    }),
    new LiveReloadPlugin({
        ignore: [/\.css$/],
    }),
];
