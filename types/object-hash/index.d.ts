// Type definitions for object-hash 2.1
// Project: https://github.com/puleos/object-hash
// Definitions by: Michael Zabka <https://github.com/misak113>
//                 Artur Diniz <https://github.com/artdiniz>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace objectHash {
    /**
     * @see https://github.com/puleos/object-hash#hashsha1value
     */
    function sha1(object: {} | null): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysvalue
     */
    function keys(object: {} | null): string;
    /**
     * @see https://github.com/puleos/object-hash#hashmd5value
     */
    function MD5(object: {} | null): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysmd5value
     */
    function keysMD5(object: {} | null): string;
    /**
     * @see https://github.com/puleos/object-hash#hashwritetostreamvalue-options-stream
     */
    function writeToStream(value: any, stream: Stream): void;
    function writeToStream(value: any, options: Options, stream: Stream): void;

    type BufferEncoding =
        | 'ascii'
        | 'base64'
        | 'binary'
        | 'hex'
        | 'latin1'
        | 'ucs-2'
        | 'ucs2'
        | 'utf-8'
        | 'utf16le'
        | 'utf8';

    interface Stream {
        update?(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
        write?(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
    }

    interface Options {
        /**
         * @default 'sha1'
         */
        algorithm?: 'sha1' | 'md5' | 'passthrough';
        /**
         * @default 'hex'
         */
        encoding?: 'buffer' | 'hex' | 'binary' | 'base64';

        excludeKeys?: (key: string) => boolean;
        /**
         * @default false
         */
        excludeValues?: boolean;
        /**
         * @default false
         */
        ignoreUnknown?: boolean;

        replacer?: (value: any) => any;
        /**
         * @default true
         */
        respectFunctionNames?: boolean;
        /**
         * @default true
         */
        respectFunctionProperties?: boolean;
        /**
         * @default true
         */
        respectType?: boolean;
        /**
         * @default false
         */
        unorderedArrays?: boolean;
        /**
         * @default true
         */
        unorderedObjects?: boolean;
        /**
         * @default true
         */
        unorderedSets?: boolean;
    }
}

/**
 * @see https://github.com/puleos/object-hash#hashvalue-options
 */
declare function objectHash(object: {} | null, options?: objectHash.Options): string;

export = objectHash;
