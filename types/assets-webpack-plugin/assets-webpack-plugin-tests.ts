import * as webpack from 'webpack';
import * as AssetsPlugin from 'assets-webpack-plugin';

const config: webpack.Configuration = {
    plugins: [
        new AssetsPlugin(),
        new AssetsPlugin({
            filename: 'assets.json'
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            fullPath: false,
            includeManifest: true,
            path: '/foo/bar',
            prettyPrint: true,
            processOutput: (assets) => (
                'window.assets = ' + JSON.stringify(assets)
            ),
            update: true,
            metadata: {
                meta: 'data'
            },
        })
    ]
};
