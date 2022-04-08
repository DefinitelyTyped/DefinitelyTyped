// Type definitions for webpack-chunk-hash 0.4
// Project: https://github.com/alexindigo/webpack-chunk-hash#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export = WebpackChunkHash;

declare class WebpackChunkHash extends Plugin {
    constructor(options?: WebpackChunkHash.Options);
}

declare namespace WebpackChunkHash {
    interface Options {
        /**
         * @default 'md5'
         * @description The hash algorithm to use
         * @see {@link https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options}
         */
        algorithm?: string;
        /**
         * @default 'hex'
         * @description The digest enconding to use
         * @see {@link https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options}
         */
        digest?: 'hex' | 'latin1' | 'base64';
        /**
         * @default null
         * @description A callback to add more content to the resulting hash
         */
        additionalHashContent?(chunk: any): string;
    }
}
