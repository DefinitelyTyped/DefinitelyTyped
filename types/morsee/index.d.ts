// Type definitions for morsee 1.0
// Project: https://github.com/gabrielfurini/morsee
// Definitions by: Bas950 <https://github.com/Bas950>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Encodes given string to morse code.
 *
 * @param str The input string to encode.
 * @returns A string of the encoded input.
 */
export function encode(str: string): string;

/**
 * Decodes given morse code string to plain text.
 *
 * @param str The input string to decode.
 * @returns A string of the decoded input.
 */
export function decode(str: string): string;
