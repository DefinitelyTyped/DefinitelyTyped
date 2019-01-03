// Type definitions for terser-webpack-plugin 1.2
// Project: https://github.com/webpack-contrib/terser-webpack-plugin
// Definitions by: Daniel Schopf <https://github.com/Danscho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Plugin } from 'webpack';

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

    type ExtractCommentFn = (node: any, comment: any) => (boolean | object);

    interface TerserPluginOptions {
        test?: string | RegExp | Array<string | RegExp>;
        include?: string | RegExp | Array<string | RegExp>;
        exclude?: string | RegExp | Array<string | RegExp>;
        chunkFilter?: (chunk: any) => boolean;
        cache?: boolean | string;
        cacheKeys?: (defaultCacheKeys: any, file: any) => object;
        parallel?: boolean | number;
        sourceMap?: boolean;
        minify?: (file: any, sourceMap: any) => MinifyResult;
        terserOptions?: any;
        extractComments?: boolean | string | RegExp | object | ExtractCommentFn;
        warningsFilter?: (warning: any, source: any) => boolean;
    }
}
