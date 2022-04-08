import webpack = require('webpack');
import WebpackEntryManifestPlugin = require('webpack-entry-manifest-plugin');

const config: webpack.Configuration = {
    plugins: [
        new WebpackEntryManifestPlugin({
            filename: 'manifest.json',
            map: (path, chunk) => path,
            filter: (path, chunk) => true,
            serialize: manifest => JSON.stringify(manifest),
        }),
    ],
};
