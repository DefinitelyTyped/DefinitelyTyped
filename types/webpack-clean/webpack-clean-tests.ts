/// <reference types="node" />

import WebpackCleanPlugin = require('webpack-clean');
import path = require('path');

module.exports = {
    context: path.join(__dirname, './'),
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new WebpackCleanPlugin(['dist/test1.js', 'dist/test2.js'])],
};

module.exports = {
    plugins: [new WebpackCleanPlugin('dist/fileA.js', { basePath: path.join(__dirname, './') })],
};

module.exports = {
    plugins: [new WebpackCleanPlugin(['fileA.js', 'fileB.js'], { basePath: path.join(__dirname, 'dist') })],
};

module.exports = {
    plugins: [
        new WebpackCleanPlugin(['fileA.js', 'fileB.js'], { basePath: path.join(__dirname, 'dist'), removeMaps: true }),
    ],
};

module.exports = {
    plugins: [
        new WebpackCleanPlugin(['fileA.js', 'fileB.js'], {
            basePath: path.join(__dirname, 'dist'),
            removeMaps: true,
            forceDelete: true,
        }),
    ],
};
