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
        condition?: boolean | string | RegExp | ExtractCommentsFunction | undefined;
        filename?: RegExp | FileNameFunction | undefined;
        banner?: boolean | string | FileNameFunction | undefined;
    }

    interface Options {
        test?: TestType | TestType[] | undefined;
        include?: TestType | TestType[] | undefined;
        exclude?: TestType | TestType[] | undefined;
        chunkFilter?: ((chunk: any) => boolean) | undefined;
        cache?: string | boolean | undefined;
        cacheKeys?: ((defaultCacheKeys: any, file: any) => object) | undefined;
        parallel?: boolean | number | undefined;
        sourceMap?: boolean | undefined;
        minify?: ((file: any, sourceMap: any) => {error: any, map: any, code: any, warnings: any, extractedComments: any}) | undefined;
        uglifyOptions?: MinifyOptions | undefined;
        extractComments?: boolean | string | RegExp | ExtractCommentsFunction | undefined;
        warningsFilter?: ((warning: any, source: any) => boolean) | undefined;
    }
}

declare function uglify(options?: uglify.Options): Block;

export = uglify;
