import { Configuration } from 'webpack';
import path = require('path');
import WebpackManifestPlugin = require('webpack-manifest-plugin');

const options: WebpackManifestPlugin.Options = {
    fileName: 'manifest.json',
    basePath: '/src/',
    seed: {
        name: 'Hello world',
    },
    publicPath: 'prod',
    writeToFileEmit: false,
    filter: file => file.isInitial,
    map: file => {
        if (file.name) {
            file.name = path.join(path.dirname(file.path), file.name);
        }
        return file;
    },
    sort: (a, b) => a.path.localeCompare(b.path),
    generate: (seed, files) =>
        files.reduce((manifest, { name, path }) => (name ? { ...manifest, [name]: path } : manifest), seed),
    serialize: manifest => JSON.stringify(manifest, null, 2),
};

const c: Configuration = {
    plugins: [
        new WebpackManifestPlugin(),
        new WebpackManifestPlugin({
            fileName: 'my-manifest.json',
            basePath: '/app/',
            seed: {
                name: 'My Manifest',
            },
        }),
    ],
};
