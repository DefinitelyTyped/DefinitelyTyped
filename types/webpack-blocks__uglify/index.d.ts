// Type definitions for @webpack-blocks/uglify 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/sass
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Block } from 'webpack-blocks';

declare namespace uglify {
    type TestType = string | RegExp;

    interface ParseOptions {
        bare_returns?: boolean;
        html5_comments?: boolean;
        shebang?: boolean;
    }

    interface CompressOptions {

    }

    interface MangleOptions {

    }

    interface OutputOptions {

    }

    interface SourceMapOptions {

    }

    interface NameCacheObject {

    }

    interface UglifyOptions {
        warnings?: true;
        parse?: ParseOptions;
        compress?: CompressOptions;
        mangle?: boolean | MangleOptions;
        output?: OutputOptions;
        sourceMap?: SourceMapOptions;
        toplevel?: boolean;
        nameCache?: NameCacheObject;
        ie8?: boolean;
        keep_fnames?: boolean;
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
        uglifyOptions?: UglifyOptions;
    }
}

declare function uglify(options?: uglify.Options): Block;

export = uglify;
