// Type definitions for jsSHA 2.0
// Project: https://github.com/Caligatio/jsSHA
// Definitions by: David Li <https://github.com/randombk>
//                 Tobias Kahlert <https://github.com/SrTobi>
//                 Kannan Goundan <https://github.com/cakoose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsSHA {
    type StringDataFormat = 'HEX' | 'TEXT' | 'B64' | 'BYTES';
    type ArrayBufferDataFormat = 'ARRAYBUFFER';

    interface EncodingOptions {
        encoding?: string;
    }

    interface Options extends EncodingOptions {
        numRounds?: number;
    }

    interface OutputFormatOptions {
        outputUpper?: boolean;
        b64Pad?: string;
        shakeLen?: number;
    }

    interface jsSHA {
        /**
         * Create a Hasher object.
         *
         * @param variant - The desired SHA variant (SHA-1, SHA-224, SHA-256,
         *   SHA-384, SHA-512, SHA3-224, SHA3-256, SHA3-384, SHA3-512, SHAKE128, or SHAKE256).
         * @param inputFormat The format of srcString.
         */
        new(variant: string, inputFormat: StringDataFormat, options?: Options): Hasher<string>;
        new(variant: string, inputFormat: ArrayBufferDataFormat, options?: Options): Hasher<ArrayBuffer>;
    }

    interface Hasher<InputT> {
        /**
         * Sets the HMAC key for an eventual getHMAC call.  Must be called
         * immediately after jsSHA object instantiation
         *
         * @param key - The key used to calculate the HMAC.
         * @param inputFormat - The format of key.
         */
        setHMACKey(key: string, inputFormat: StringDataFormat, encodingOpts?: EncodingOptions): void;
        setHMACKey(key: ArrayBuffer, inputFormat: ArrayBufferDataFormat, encodingOpts?: EncodingOptions): void;

        /**
         * Takes strString and hashes as many blocks as possible.  Stores the
         * rest for either a future update or getHash call.
         *
         * @param srcString - The string to be hashed
         */
        update(srcString: InputT): void;

        /**
         * Returns the desired SHA hash of the string specified at instantiation
         * using the specified parameters
         *
         * @expose
         * @param format - The desired output formatting.
         * @returns The string representation of the hash
         *   in the format specified.
         */
        getHash(format: StringDataFormat, outputFormatOpts?: OutputFormatOptions): string;
        getHash(format: ArrayBufferDataFormat, outputFormatOpts?: OutputFormatOptions): ArrayBuffer;

        /**
         * Returns the the HMAC in the specified format using the key given by
         * a previous setHMACKey call.
         *
         * @param format - The desired output formatting.
         * @returns The string representation of the hash in the format
         *   specified
         */
        getHMAC(format: StringDataFormat, outputFormatOpts?: OutputFormatOptions): string;
        getHMAC(format: ArrayBufferDataFormat, outputFormatOpts?: OutputFormatOptions): ArrayBuffer;
    }
}

declare var jsSHA: jsSHA.jsSHA;
export = jsSHA;
export as namespace jsSHA;
