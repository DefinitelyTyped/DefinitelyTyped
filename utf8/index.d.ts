// Type definitions for utf8 v2.1.1
// Project: https://github.com/mathiasbynens/utf8.js
// Definitions by: Nick Zelei <https://github.com/zelein/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "utf8" {
    /**
     * A string representing the semantic version number.
     */
    let version: string;
    /**
     * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
     * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
     * @param {string} inputString
     */
    function encode(inputString: string): string;

    /**
     * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
     * It throws an error when malformed UTF-8 is detected.
     * @param {string} byteString
     */
    function decode(byteString: string): string;
}
