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
    filter: (file) => file.isInitial,
    map: (file) => {
        if (file.name) {
            file.name = path.join(path.dirname(file.path), file.name);
            return file;
        }
    },
    reduce: (manifest, { name, path }) => {
        if (name) {
            return { ...manifest, [name]: path };
        }
    },
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
