// Type definitions for @webpack-blocks/uglify 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/uglify
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from 'webpack-blocks';
import { MinifyOptions } from 'uglify-js';

declare namespace uglify {
    type TestType = string | RegExp;
    type ExtractCommentsFunction = (node: any, comment: any) => boolean | ExtractCommentsObject;
    type FileNameFunction = (file: string) => string;

    interface ExtractCommentsObject {
        condition?: boolean | string | RegExp | ExtractCommentsFunction;
        filename?: RegExp | FileNameFunction;
        banner?: boolean | string | FileNameFunction;
    }

    interface Options {
        test?: TestType | TestType[];
        include?: TestType | TestType[];
        exclude?: TestType | TestType[];
        chunkFilter?: (chunk: any) => boolean;
        cache?: string | boolean;
        cacheKeys?: (defaultCacheKeys: any, file: any) => object;
        parallel?: boolean | number;
        sourceMap?: boolean;
        minify?: (file: any, sourceMap: any) => {error: any, map: any, code: any, warnings: any, extractedComments: any};
        uglifyOptions?: MinifyOptions;
        extractComments?: boolean | string | RegExp | ExtractCommentsFunction;
        warningsFilter?: (warning: any, source: any) => boolean;
    }
}

declare function uglify(options?: uglify.Options): Block;

export = uglify;
