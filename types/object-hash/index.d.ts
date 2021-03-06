// Type definitions for object-hash 2.1
// Project: https://github.com/puleos/object-hash
// Definitions by: Michael Zabka <https://github.com/misak113>
//                 Artur Diniz <https://github.com/artdiniz>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

declare namespace ObjectHash {
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

interface ObjectHash {
    /**
     * @see https://github.com/puleos/object-hash#hashvalue-options
     */
    (object: any, options?: ObjectHash.Options): string;
    /**
     * @see https://github.com/puleos/object-hash#hashsha1value
     */
    sha1(object: any): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysvalue
     */
    keys(object: any): string;
    /**
     * @see https://github.com/puleos/object-hash#hashmd5value
     */
    MD5(object: any): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysmd5value
     */
    keysMD5(object: any): string;
    /**
     * @see https://github.com/puleos/object-hash#hashwritetostreamvalue-options-stream
     */
    writeToStream(value: any, stream: ObjectHash.Stream): void;
    writeToStream(value: any, options: ObjectHash.Options, stream: ObjectHash.Stream): void;
}

declare const ObjectHash: ObjectHash;

export = ObjectHash;
