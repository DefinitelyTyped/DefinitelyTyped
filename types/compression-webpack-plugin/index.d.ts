// Type definitions for compression-webpack-plugin 2.0
// Project: https://github.com/webpack-contrib/compression-webpack-plugin
// Definitions by: Anton Kandybo <https://github.com/dublicator>
//                 Rhys van der Waerden <https://github.com/rhys-vdw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Plugin } from 'webpack';
import { ZlibOptions as ZlibCompressionOptions } from 'zlib';

export = CompressionPlugin;

declare class CompressionPlugin<O = any> extends Plugin {
    constructor(options?: CompressionPlugin.Options<O>);
}

declare namespace CompressionPlugin {
    type AlgorithmCallback = (error: Error | null, result: Buffer) => void;
    type Algorithm<O> = (source: string, options: O, callback: AlgorithmCallback) => void;

    // NOTE: These are the async compression algorithms on the zlib object.
    type ZlibAlgorithm = 'deflate' | 'deflateRaw' | 'gzip' | 'brotliCompress';
    type Pattern = string | RegExp | ReadonlyArray<RegExp> | ReadonlyArray<string>;

    interface BaseOptions {
        cache?: boolean | string;
        deleteOriginalAssets?: boolean;
        exclude?: Pattern;
        filename?: string;
        include?: Pattern;
        minRatio?: number;
        test?: Pattern;
        threshold?: number;
    }

    interface ZlibOptions extends BaseOptions {
        algorithm?: ZlibAlgorithm;
        compressionOptions?: ZlibCompressionOptions;
    }

    interface CustomOptions<O> extends BaseOptions {
        algorithm: Algorithm<O>;
        compressionOptions?: O;
    }

    type Options<O> = ZlibOptions | CustomOptions<O>;
}
