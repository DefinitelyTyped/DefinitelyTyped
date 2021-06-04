/// <reference types="node" />

import webpack = require('webpack');
import TerserPlugin = require('terser-webpack-plugin');

const _ = webpack({
    optimization: {
        minimize: true,
        minimizer: [
            // test
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
            // include
            new TerserPlugin({
                include: /\/includes/,
            }),
            // exclude
            new TerserPlugin({
                exclude: /\/excludes/,
            }),
            // cache
            new TerserPlugin({
                cache: true,
            }),
            new TerserPlugin({
                cache: 'path/to/cache',
            }),
            // cacheKeys
            new TerserPlugin({
                cache: true,
                cacheKeys: (defaultCacheKeys, file) => {
                    defaultCacheKeys.myCacheKey = 'myCacheKeyValue';
                    return defaultCacheKeys;
                },
            }),
            // parallel
            new TerserPlugin({
                parallel: true,
            }),
            new TerserPlugin({
                parallel: 4,
            }),
            // sourceMap
            new TerserPlugin({
                sourceMap: true,
            }),
            // minify
            new TerserPlugin({
                minify: (file, sourceMap, minimizerOptions) => {
                    minimizerOptions!; // $ExpectType MinifyOptions
                    const results: TerserPlugin.MinifyResult = {
                        code: '',
                        extractedComments: [''],
                        map: '',
                    };
                    return results;
                },
            }),
            // terserOptions
            new TerserPlugin({
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: undefined,
                    toplevel: false,
                    nameCache: undefined,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
            }),
            // extractComments
            new TerserPlugin({
                extractComments: true,
            }),
            new TerserPlugin({
                extractComments: 'all',
            }),
            new TerserPlugin({
                extractComments: /@extract/i,
            }),
            new TerserPlugin({
                extractComments: (astNode, comment) => {
                    if (/@extract/i.test(comment.value)) {
                        return true;
                    }
                    return false;
                },
            }),
            new TerserPlugin({
                extractComments: {
                    condition: /^\**!|@preserve|@license|@cc_on/i,
                    filename: (fileData: TerserPlugin.FileData) => {
                        // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
                        return `${fileData.filename}.LICENSE.txt${fileData.query}`;
                    },
                    banner: licenseFile => {
                        return `License information can be found in ${licenseFile}`;
                    },
                },
            }),
            new TerserPlugin({
                extractComments: {
                    condition: /^\**!|@preserve|@license|@cc_on/i,
                    banner: false,
                },
            }),
            // varia
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: /@license/i,
                    },
                },
                extractComments: true,
            }),
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new TerserPlugin({
                terserOptions: {
                  ecma: undefined,
                  parse: {},
                  compress: {},
                  mangle: true, // Note `mangle.properties` is `false` by default.
                  module: false,
                  output: undefined,
                  toplevel: false,
                  nameCache: undefined,
                  ie8: false,
                  keep_classnames: undefined,
                  keep_fnames: false,
                  safari10: false,
                },
              }),
        ],
    },
});
