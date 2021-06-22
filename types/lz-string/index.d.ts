// Type definitions for lz-string 1.3
// Project: https://github.com/pieroxy/lz-string, http://pieroxy.net/blog/pages/lz-string/index.html
// Definitions by: Roman Nikitin <https://github.com/M0ns1gn0r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var LZString: LZString.LZStringStatic;
export = LZString;
export as namespace LZString;

declare namespace LZString {
    /**
     * LZ-based compression algorithm for JavaScript.
     */
    interface LZStringStatic {
        /**
         * Compresses input string producing an instance of an "invalid" UTF-16 string.
         * Such string could be stored in localStorage only on webkit
         * browsers (tested on Android, Chrome, Safari).
         *
         * @param uncompressed A string which should be compressed.
         */
        compress(uncompressed: string): string;

        /**
         * Decompresses "invalid" input string created by the method compress().
         *
         * @param compressed A string obtained from a call to compress().
         */
        decompress(compressed: string): null | string;

        /**
         * Compresses input string producing an instance of a "valid" UTF-16 string,
         * in the sense that all browsers can store them safely.
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToUTF16(uncompressed: string): string;

        /**
         * Decompresses "valid" input string created by the method compressToUTF16().
         *
         * @param compressed A string obtained from a call to compressToUTF16().
         */
        decompressFromUTF16(compressed: string): null | string;

        /**
         * Compresses input string producing an instance of a ASCII UTF-16 string,
         * which represents the original string encoded in Base64.
         * The result can be safely transported outside the browser with a
         * guarantee that none of the characters produced need to be URL-encoded.
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToBase64(uncompressed: string): string;

        /**
         * Decompresses ASCII UTF-16 input string created by the method compressToBase64().
         *
         * @param compressed A string obtained from a call to compressToBase64().
         */
        decompressFromBase64(compressed: string): null | string;

        /**
         * produces ASCII strings representing the original string encoded in Base64 with a few
         * tweaks to make these URI safe. Hence, you can send them to the server without thinking
         * about URL encoding them. This saves bandwidth and CPU
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToEncodedURIComponent(uncompressed: string): string;

        /**
         * Decompresses "valid" input string created by the method compressToEncodedURIComponent().
         *
         * @param compressed A string obtained from a call to compressToEncodedURIComponent().
         */
        decompressFromEncodedURIComponent(compressed: string): null | string;

        /**
         * produces an uint8Array
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToUint8Array(uncompressed: string): Uint8Array;

        /**
         * Decompresses "valid" array created by the method compressToUint8Array().
         *
         * @param compressed A string obtained from a call to compressToUint8Array().
         */
        decompressFromUint8Array(compressed: Uint8Array): null | string;
    }
}
