// Type definitions for utf8 v2.1.1
// Project: https://github.com/mathiasbynens/utf8.js
// Definitions by: Nick Zelei <https://github.com/zelein/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Utf8 {
    /**
     * A string representing the semantic version number.
     */
    version: string;
    /**
     * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
     * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
     * @param {string} inputString
     */
    encode(inputString: string): string;

    /**
     * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
     * It throws an error when malformed UTF-8 is detected.
     * @param {string} byteString
     */
    decode(byteString: string): string;
}

declare var Utf8: Utf8;
declare module "utf8" {
    export = Utf8;
}

