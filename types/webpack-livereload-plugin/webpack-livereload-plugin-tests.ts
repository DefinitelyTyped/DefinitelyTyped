import LiveReloadPlugin = require('webpack-livereload-plugin');
import { Plugin } from 'webpack';

const plugins: Plugin[] = [
    new LiveReloadPlugin(),
    new LiveReloadPlugin({}),
    new LiveReloadPlugin({
        appendScriptTag: true,
        cert: '',
        delay: 100,
        hostname: 'localhost',
        ignore: /\.css$/,
        key: '',
        pfx: '',
        port: 9999,
        protocol: 'https',
        useSourceHash: true,
    }),
    new LiveReloadPlugin({
        ignore: [/\.css$/],
    }),
];
