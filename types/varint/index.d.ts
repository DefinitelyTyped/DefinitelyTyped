// Type definitions for varint 6.0
// Project: https://github.com/chrisdickinson/varint#readme
// Definitions by: David Brockman Smoliansky <https://github.com/dbrockman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export const encode: {
    /**
     * Encodes `num` into `buffer` starting at `offset`. returns `buffer`, with the encoded varint written into it.
     * `varint.encode.bytes` will now be set to the number of bytes modified.
     */
    (num: number, buffer: Buffer, offset?: number): Buffer;

    /**
     * Encodes `num` into `bytes` starting at `offset`. returns `bytes`, with the encoded varint written into it.
     * `varint.encode.bytes` will now be set to the number of bytes modified.
     */
    (num: number, bytes: Uint8Array, offset?: number): Uint8Array;

    /**
     * Encodes `num` into `array` starting at `offset`. returns `array`, with the encoded varint written into it.
     * If `array` is not provided, it will default to a new array.
     * `varint.encode.bytes` will now be set to the number of bytes modified.
     */
    (num: number, array?: number[], offset?: number): number[];

    /**
     * Similar to `decode.bytes` when encoding a number it can be useful to know how many bytes where written (especially if you pass an output array).
     * You can access this via `varint.encode.bytes` which holds the number of bytes written in the last encode.
     */
    bytes: number;
};

export const decode: {
    /**
     * Decodes `data`, which can be either a buffer or array of integers, from position `offset` or default 0 and returns the decoded original integer.
     * Throws a `RangeError` when `data` does not represent a valid encoding.
     */
    (buf: Uint8Array | number[], offset?: number): number;

    /**
     * If you also require the length (number of bytes) that were required to decode the integer you can access it via `varint.decode.bytes`.
     * This is an integer property that will tell you the number of bytes that the last .decode() call had to use to decode.
     */
    bytes: number;
};

/**
 * returns the number of bytes this number will be encoded as, up to a maximum of 8.
 */
export function encodingLength(num: number): number;
