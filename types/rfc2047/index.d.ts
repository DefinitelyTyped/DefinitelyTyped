// Type definitions for rfc2047 2.0
// Project: https://github.com/One-com/rfc2047
// Definitions by: Masanori Ohgita <https://github.com/mugifly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Decode
 * @param  {string} encodedText Encoded Text
 * @return {string} Decoded Text
 */
export function decode(encodedText: string): string;

/**
 * Encode
 * @param  {string} decodedText Decoded Text
 * @return {string} Encoded Text
 */
export function encode(decodedText: string): string;
