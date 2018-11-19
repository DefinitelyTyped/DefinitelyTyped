// Type definitions for compression-webpack-plugin 0.4
// Project: https://github.com/webpack-contrib/compression-webpack-plugin
// Definitions by: Anton Kandybo <https://github.com/dublicator>
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

    // NOTE: These are the compression algorithms exported by zlib.
    type ZlibAlgorithm = 'deflate' | 'deflateRaw' | 'gzip';

    interface BaseOptions {
        asset?: string;
        cache?: boolean | string;
        test?: RegExp | RegExp[];
        regExp?: RegExp | RegExp[];
        threshold?: number;
        minRatio?: number;
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
