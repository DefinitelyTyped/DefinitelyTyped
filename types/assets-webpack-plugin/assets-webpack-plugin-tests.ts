import * as webpack from 'webpack';
import AssetsPlugin = require('assets-webpack-plugin');

const config: webpack.Configuration = {
    plugins: [
        new AssetsPlugin(),
        new AssetsPlugin({
            filename: 'assets.json'
        }),
        new AssetsPlugin({
            entrypoints: true,
            filename: 'assets.json',
            fullPath: false,
            fileTypes: ['css'],
            includeManifest: true,
            includeAllFileTypes: false,
            keepInMemory: true,
            manifestFirst: true,
            path: '/foo/bar',
            prettyPrint: true,
            processOutput: (assets) => (
                'window.assets = ' + JSON.stringify(assets)
            ),
            update: true,
            useCompilerPath: true,
            metadata: {
                meta: 'data'
            },
        })
    ]
};
