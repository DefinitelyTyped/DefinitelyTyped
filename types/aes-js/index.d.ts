// Type definitions for aes-js 3.1
// Project: https://github.com/ricmoo/aes-js
// Definitions by: Federico Bond <https://github.com/federicobond>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ByteSource = ArrayBuffer | Uint8Array | number[];

export class AES {
    /**
     * Create a new AES block cipher.
     * @param key The cipher key.
     */
    constructor(key: ByteSource)
    encrypt(v: ByteSource): ByteSource;
}

/**
 * Create a new Counter state for CTR cipher mode.
 * @param initialValue The Counter initial value.
 */
export class Counter {
    constructor(initialValue: number | ByteSource)
    setValue(value: number): void;
    setBytes(bytes: ByteSource): void;
    increment(): void;
}

export namespace ModeOfOperation {
    class ModeOfOperationECB {
        /**
         * Create a new ECB stream cipher.
         * @param key The cipher key.
         */
        constructor(key: ByteSource)
        encrypt(v: ByteSource): Uint8Array;
        decrypt(v: ByteSource): Uint8Array;
    }

    class ModeOfOperationCBC {
        /**
         * Create a new CBC stream cipher.
         * @param key The cipher key.
         * @param iv The cipher initialization vector.
         */
        constructor(key: ByteSource, iv: ByteSource);
        encrypt(v: ByteSource): Uint8Array;
        decrypt(v: ByteSource): Uint8Array;
    }

    class ModeOfOperationCFB {
        /**
         * Create a new CFB stream cipher.
         * @param key The cipher key.
         * @param iv The cipher initialization vector.
         * @param segmentSize The cipher segment size.
         */
        constructor(key: ByteSource, iv: ByteSource, segmentSize: number);
        encrypt(v: ByteSource): Uint8Array;
        decrypt(v: ByteSource): Uint8Array;
    }

    class ModeOfOperationOFB {
        /**
         * Create a new OFB stream cipher.
         * @param key The cipher key.
         * @param iv The cipher initialization vector.
         */
        constructor(key: ByteSource, iv: ByteSource);
        encrypt(v: ByteSource): Uint8Array;
        decrypt(v: ByteSource): Uint8Array;
    }

    class ModeOfOperationCTR {
        /**
         * Create a new CTR stream cipher.
         * @param key The cipher key.
         * @param counter The cipher counter state.
         */
        constructor(key: ByteSource, counter?: Counter)
        encrypt(v: ByteSource): Uint8Array;
        decrypt(v: ByteSource): Uint8Array;
    }

    const ecb: typeof ModeOfOperationECB;
    const cbc: typeof ModeOfOperationCBC;
    const cfb: typeof ModeOfOperationCFB;
    const ofb: typeof ModeOfOperationOFB;
    const ctr: typeof ModeOfOperationCTR;
}

export namespace utils {
    namespace utf8 {
        /**
         * Convert a UTF8 encoded string to a Uint8Array.
         * @param data The input string.
         */
        function toBytes(data: string): Uint8Array;

        /**
         * Convert an array-like object containing UTF8 data to a string.
         * @param data The input data.
         */
        function fromBytes(data: ByteSource): string;
    }
    namespace hex {
        /**
         * Convert a hexadecimal string to a Uint8Array.
         * @param data The input string.
         */
        function toBytes(data: string): Uint8Array;

        /**
         * Convert an array-like object to a hexadecimal string.
         * @param data The input data.
         */
        function fromBytes(data: ByteSource): string;
    }
}

export namespace padding {
    namespace pkcs7 {
        /**
         * Add standard PKCS7 padding to an array.
         * @param data The input data.
         */
        function pad(data: ByteSource): Uint8Array;

        /**
         * Remove standard PKCS7 padding from an array.
         * @param data The input data.
         */
        function strip(data: ByteSource): Uint8Array;
    }
}
