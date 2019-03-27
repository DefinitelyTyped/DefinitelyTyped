import webpack = require('webpack');
import DuplicatePackageCheckerWebpackPlugin = require('duplicate-package-checker-webpack-plugin');

const a: webpack.Configuration = {
    entry: 'test.js',
    plugins: [
        new DuplicatePackageCheckerWebpackPlugin()
    ]
};
const b: webpack.Configuration = {
    entry: 'test.js',
    plugins: [
        new DuplicatePackageCheckerWebpackPlugin({})
    ]
};
const c: webpack.Configuration = {
    entry: 'test.js',
    plugins: [
        new DuplicatePackageCheckerWebpackPlugin({
            verbose: true,
            emitError: true,
            showHelp: false,
            strict: false,
            exclude(instance) {
                return instance.name === "fbjs";
            }
        })
    ]
};
