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
        filename?: string | FormatFn | undefined;
        banner?: boolean | string | FormatFn | undefined;
    }

    type ExtractCommentFn = (node: any, comment: any) => (boolean | object);

    type FormatFn = (input: string) => string;

    interface TerserPluginOptions {
        test?: string | RegExp | Array<string | RegExp> | undefined;
        include?: string | RegExp | Array<string | RegExp> | undefined;
        exclude?: string | RegExp | Array<string | RegExp> | undefined;
        chunkFilter?: ((chunk: webpack.compilation.Chunk) => boolean) | undefined;
        cache?: boolean | string | undefined;
        cacheKeys?: ((defaultCacheKeys: any, file: any) => object) | undefined;
        parallel?: boolean | number | undefined;
        sourceMap?: boolean | undefined;
        minify?: ((file: any, sourceMap: any) => MinifyResult) | undefined;
        terserOptions?: MinifyOptions | undefined;
        extractComments?: boolean
        | string
        | RegExp
        | ExtractCommentFn
        | ExtractCommentOptions | undefined;
        warningsFilter?: ((warning: string, source: string | undefined, file: string) => boolean) | undefined;
    }
}
