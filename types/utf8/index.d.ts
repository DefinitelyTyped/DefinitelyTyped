// Type definitions for utf8 3.0
// Project: https://github.com/mathiasbynens/utf8.js
// Definitions by: Nick Zelei <https://github.com/zelein>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace utf8;

/**
 * A string representing the semantic version number.
 */
export const version: string;
/**
 * Encodes any given JavaScript string (string) as UTF-8, and returns the UTF-8-encoded version of the string.
 * It throws an error if the input string contains a non-scalar value, i.e. a lone surrogate.
 * @param inputString
 */
export function encode(inputString: string): string;

/**
 * Decodes any given UTF-8-encoded string (byteString) as UTF-8, and returns the UTF-8-decoded version of the string.
 * It throws an error when malformed UTF-8 is detected.
 * @param byteString
 */
export function decode(byteString: string): string;
