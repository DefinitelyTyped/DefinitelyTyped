/// <reference types="node" />

import path = require('path');
import { NamedModulesPlugin, NamedChunksPlugin } from 'webpack';
import NameAllModulesPlugin = require('name-all-modules-plugin');

module.exports = {
    entry: {
        main: './src/foo',
        other: './src/foo-two',
        vendor: ['preact'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new NamedModulesPlugin(),
        new NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }
            return chunk.modules.map((m: any) => path.relative(m.context, m.request)).join('_');
        }),
        // some other declaration
        // ....
        // and then
        new NameAllModulesPlugin(),
    ],
};

NameAllModulesPlugin; // $ExpectType typeof NameAllModulesPlugin
new NameAllModulesPlugin(); // $ExpectType NameAllModulesPlugin
