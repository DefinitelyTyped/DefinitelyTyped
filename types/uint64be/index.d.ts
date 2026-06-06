/// <reference types="node" />

/**
 * Encode a number as a big endian 64 bit unsigned integer.
 *
 * @param number The number to encode.
 * @param buffer The buffer to encode the `number` into.
 * @param [offset=0] The offset at which to write the encoded `number`.
 *
 * @example
 * import * as uint64be from 'uint64be'
 *
 * uint64be.encode(42) // returns a 8 byte buffer with 42 encoded
 */
export function encode(number: number, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * Number of bytes after encoding a number. Always returns `8`.
     */
    const bytes: 8;
}

/**
 * Decode a number from a buffer.
 *
 * @param buffer The buffer with the encoded number.
 * @param [offset=0] The offset at which to start decoding.
 *
 * @example
 * import * as uint64be from 'uint64be'
 *
 * const buffer = uint64be.encode(42)
 * console.log(uint64be.decode(buffer)) // returns 42
 */
export function decode(buffer: Buffer, offset?: number): number;
export namespace decode {
    /**
     * Number of bytes after decoding a number. Always returns `8`.
     */
    const bytes: 8;
}

/**
 * Always returns `8`.
 */
export function encodingLength(number: number): 8;
