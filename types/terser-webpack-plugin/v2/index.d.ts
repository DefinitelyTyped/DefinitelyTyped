// Type definitions for terser-webpack-plugin 2.2
// Project: https://github.com/webpack-contrib/terser-webpack-plugin
// Definitions by: Daniel Schopf <https://github.com/Danscho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';
import { MinifyOptions } from 'terser';
import webpack = require('webpack');

export = TerserPlugin;

declare class TerserPlugin extends Plugin {
    constructor(opts?: TerserPlugin.TerserPluginOptions);
}

declare namespace TerserPlugin {
    interface MinifyResult {
        error: any;
        map: any;
        code: any;
        warnings: any;
        extractedComments: any;
    }

    interface ExtractCommentOptions {
        condition: boolean | string | RegExp | ExtractCommentFn | object;
        filename?: string | FormatFn;
        banner?: boolean | string | FormatFn;
    }

    type ExtractCommentFn = (node: any, comment: any) => (boolean | object);

    type FormatFn = (input: string) => string;

    interface TerserPluginOptions {
        test?: string | RegExp | Array<string | RegExp>;
        include?: string | RegExp | Array<string | RegExp>;
        exclude?: string | RegExp | Array<string | RegExp>;
        chunkFilter?: (chunk: webpack.compilation.Chunk) => boolean;
        cache?: boolean | string;
        cacheKeys?: (defaultCacheKeys: any, file: any) => object;
        parallel?: boolean | number;
        sourceMap?: boolean;
        minify?: (file: any, sourceMap: any) => MinifyResult;
        terserOptions?: MinifyOptions;
        extractComments?: boolean
        | string
        | RegExp
        | ExtractCommentFn
        | ExtractCommentOptions;
        warningsFilter?: (warning: string, source: string | undefined, file: string) => boolean;
    }
}
