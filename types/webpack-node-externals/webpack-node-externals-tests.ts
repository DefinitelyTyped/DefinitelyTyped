import webpack = require('webpack');
import webpackNodeExternals = require('webpack-node-externals');

const a: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals()
    ]
};
const b: webpack.Configuration = {
    entry: 'test.js',
    externals: webpackNodeExternals()
};
const c: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            allowlist: [
                'jquery',
                'webpack/hot/dev-server',
                /^lodash/,
                (moduleName: string) => moduleName === 'moduleF',
            ],
        }),
    ],
};
const d: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            importType: (moduleName) => {
                return 'commonjs';
            }
        })
    ]
};
const e: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                exclude: 'devDependencies'
            }
        })
    ]
};
const f: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                exclude: ['devDependencies']
            }
        })
    ]
};
const g: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                include: 'dependencies'
            }
        })
    ]
};
const h: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesFromFile: {
                include: ['dependencies']
            }
        })
    ]
};
const i: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            includeAbsolutePaths: true,
        }),
    ],
};
const j: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            modulesDir: 'node_modules/somepackage/node_modules',
        }),
    ],
};
const k: webpack.Configuration = {
    entry: 'test.js',
    externals: [
        webpackNodeExternals({
            binaryDirs: ['.bin', '._bin'],
        }),
    ],
};
