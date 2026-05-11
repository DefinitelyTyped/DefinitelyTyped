/// <reference types="node" />

/**
 * Encode a number as a big endian 48 bit unsigned integer.
 *
 * @param number The number to encode.
 * @param buffer The buffer to encode the `number` into.
 * @param [offset=0] The offset at which to write the encoded `number`.
 *
 * @example
 * import * as uint48be from 'uint48be'
 *
 * uint48be.encode(42) // returns a 6 byte buffer with 42 encoded
 */
export function encode(number: number, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * Number of bytes after encoding a number. Always returns `6`.
     */
    const bytes: 6;
}

/**
 * Decode a number from a buffer.
 *
 * @param buffer The buffer with the encoded number.
 * @param [offset=0] The offset at which to start decoding.
 *
 * @example
 * import * as uint48be from 'uint48be'
 *
 * const buffer = uint48be.encode(42)
 * console.log(uint48be.decode(buffer)) // returns 42
 */
export function decode(buffer: Buffer, offset?: number): number;
export namespace decode {
    /**
     * Number of bytes after decoding a number. Always returns `6`.
     */
    const bytes: 6;
}

/**
 * Always returns `6`.
 */
export function encodingLength(number: number): 6;
