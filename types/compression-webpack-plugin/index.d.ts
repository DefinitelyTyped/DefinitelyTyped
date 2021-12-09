// Type definitions for compression-webpack-plugin 9.0
// Project: https://github.com/webpack-contrib/compression-webpack-plugin
// Definitions by: Anton Kandybo <https://github.com/dublicator>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { WebpackPluginInstance, Compiler } from 'webpack';
import { ZlibOptions as ZlibCompressionOptions } from 'zlib';

export = CompressionPlugin;

/**
 * Prepare compressed versions of assets to serve them with Content-Encoding.
 */
declare class CompressionPlugin<O = any> implements WebpackPluginInstance {
    static isWebpack4(): boolean;
    constructor(options?: CompressionPlugin.Options<O>);

    apply(compiler: Compiler): void;
}

declare namespace CompressionPlugin {
    type AlgorithmCallback = (error: Error | null, result: Uint8Array) => void;
    type Algorithm<O> = (input: string, compressionOptions: O, callback: AlgorithmCallback) => void;

    // NOTE: These are the async compression algorithms on the zlib object.
    type ZlibAlgorithm = 'deflate' | 'deflateRaw' | 'gzip' | 'brotliCompress';

    /** Filtering rule as regex or string */
    type Rule = string | RegExp;

    /** Filtering rules. */
    type Rules = Rule | ReadonlyArray<Rule>;

    interface FileInfo {
        /** original asset filename */
        filename: string;
    }

    type FilenameFunction = (pathData: FileInfo) => string;

    interface BaseOptions {
        /**
         * Enable file caching
         * ⚠ Ignored in webpack 5! Please use webpack.js.org/configuration/other-options/#cache.
         * @default true
         */
        cache?: boolean | string | undefined;
        /**
         * Whether to delete the original assets or not
         * @default false
         */
        deleteOriginalAssets?: boolean | 'keep-source-map' | undefined;
        /**
         * Exclude all assets matching any of these conditions
         */
        exclude?: Rules | undefined;
        /**
         * The target asset filename.
         * @default '[path][base].gz'
         */
        filename?: string | FilenameFunction | undefined;
        /**
         * Include all assets matching any of these conditions
         */
        include?: Rules | undefined;
        /**
         * Only assets that compress better than this ratio are processed (minRatio = Compressed Size / Original Size)
         * @default 0.8
         */
        minRatio?: number | undefined;
        /**
         * Include all assets that pass test assertion
         */
        test?: Rules | undefined;
        /**
         * Only assets bigger than this size are processed (in bytes)
         * @default 0
         */
        threshold?: number | undefined;
    }

    interface ZlibOptions extends BaseOptions {
        /**
         * The compression algorithm/function
         * @default 'gzip'
         */
        algorithm?: ZlibAlgorithm | undefined;
        /**
         * Compression options for algorithm
         * @default { level: 9 }
         */
        compressionOptions?: ZlibCompressionOptions | undefined;
    }

    interface CustomOptions<O> extends BaseOptions {
        algorithm: Algorithm<O>;
        compressionOptions?: O | undefined;
    }

    type Options<O> = ZlibOptions | CustomOptions<O>;
}
