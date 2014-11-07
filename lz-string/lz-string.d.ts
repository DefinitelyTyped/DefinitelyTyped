// Type definitions for lz-string v1.3.3
// Project: https://github.com/pieroxy/lz-string
// Definitions by: Roman Nikitin <https://github.com/M0ns1gn0r>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var LZString: LZString.LZStringStatic;

declare module LZString {
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
        decompress(compressed: string): string;

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
        decompressFromUTF16(compressed: string): string;

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
        decompressFromBase64(compressed: string): string;
    }
}