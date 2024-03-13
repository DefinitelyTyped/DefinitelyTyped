declare namespace objectHash {
    type NotUndefined = object | string | number | boolean | null | NotUndefined[];

    /**
     * @see https://github.com/puleos/object-hash#hashsha1value
     */
    function sha1(object: NotUndefined): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysvalue
     */
    function keys(object: NotUndefined): string;
    /**
     * @see https://github.com/puleos/object-hash#hashmd5value
     */
    function MD5(object: NotUndefined): string;
    /**
     * @see https://github.com/puleos/object-hash#hashkeysmd5value
     */
    function keysMD5(object: NotUndefined): string;
    /**
     * @see https://github.com/puleos/object-hash#hashwritetostreamvalue-options-stream
     */
    function writeToStream(value: any, stream: Stream): void;
    function writeToStream(value: any, options: Options, stream: Stream): void;

    type BufferEncoding =
        | "ascii"
        | "base64"
        | "binary"
        | "hex"
        | "latin1"
        | "ucs-2"
        | "ucs2"
        | "utf-8"
        | "utf16le"
        | "utf8";

    interface Stream {
        update?(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
        write?(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
    }

    type HashName =
        | "md4"
        | "md4WithRSAEncryption"
        | "md5"
        | "md5WithRSAEncryption"
        | "ripemd"
        | "ripemd160"
        | "ripemd160WithRSA"
        | "rmd160"
        | "rsa-md4"
        | "rsa-md5"
        | "rsa-ripemd160"
        | "rsa-sha1"
        | "rsa-sha1-2"
        | "rsa-sha224"
        | "rsa-sha256"
        | "rsa-sha3-224"
        | "rsa-sha3-256"
        | "rsa-sha3-384"
        | "rsa-sha3-512"
        | "rsa-sha384"
        | "rsa-sha512"
        | "sha1"
        | "sha1WithRSAEncryption"
        | "sha224"
        | "sha224WithRSAEncryption"
        | "sha256"
        | "sha256WithRSAEncryption"
        | "sha3-224"
        | "sha3-256"
        | "sha3-384"
        | "sha3-512"
        | "sha384"
        | "sha384WithRSAEncryption"
        | "sha512"
        | "sha512WithRSAEncryption";

    interface BaseOptions {
        /**
         * @default 'sha1'
         */
        algorithm?: HashName | "passthrough" | undefined;

        excludeKeys?: ((key: string) => boolean) | undefined;
        /**
         * @default false
         */
        excludeValues?: boolean | undefined;
        /**
         * @default false
         */
        ignoreUnknown?: boolean | undefined;

        replacer?: ((value: any) => any) | undefined;
        /**
         * @default true
         */
        respectFunctionNames?: boolean | undefined;
        /**
         * @default true
         */
        respectFunctionProperties?: boolean | undefined;
        /**
         * @default true
         */
        respectType?: boolean | undefined;
        /**
         * @default false
         */
        unorderedArrays?: boolean | undefined;
        /**
         * @default true
         */
        unorderedObjects?: boolean | undefined;
        /**
         * @default true
         */
        unorderedSets?: boolean | undefined;
    }

    interface NormalOption extends BaseOptions {
        /**
         * @default 'hex'
         */
        encoding?: "hex" | "binary" | "base64" | undefined;
    }

    interface WithBufferOption extends BaseOptions {
        encoding: "buffer";
    }

    type Options = NormalOption | WithBufferOption;
}

/**
 * @see https://github.com/puleos/object-hash#hashvalue-options
 */
declare function objectHash(object: objectHash.NotUndefined, options?: objectHash.NormalOption): string;
declare function objectHash(object: objectHash.NotUndefined, options?: objectHash.WithBufferOption): Buffer;

export = objectHash;
