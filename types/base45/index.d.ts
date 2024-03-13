/// <reference types="node" />

/**
 * This function takes a base45-encoded string, decodes it, and returns a buffer.
 */
export function decode(base45: string): Buffer;

/**
 * This function takes a byte string and encodes it according to base45.
 * The input data must be in the form of a string containing only
 * characters in the range from `U+0000` to `U+00FF`, each representing
 * a binary byte with values `0x00` to `0xFF` or a binary buffer in the
 * same range.
 */
export function encode(buffer: Buffer | Uint8Array | string): string;
