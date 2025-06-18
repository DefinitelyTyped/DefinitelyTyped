/// <reference types="node"/>

export const encode: {
    /**
     * Encodes `num` into `buffer` starting at `offset`. returns `buffer`, with the encoded varint written into it.
     * `varint.encode.bytes` will now be set to the number of bytes modified.
     */
    <TBuf extends Uint8Array | number[] = number[]>(num: number, buffer?: TBuf, offset?: number): TBuf;

    /**
     * Similar to `decode.bytes` when encoding a number it can be useful to know how many bytes where written (especially if you pass an output array).
     * You can access this via `varint.encode.bytes` which holds the number of bytes written in the last encode.
     */
    bytes: number | undefined;
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
    bytes: number | undefined;
};

/**
 * returns the number of bytes this number will be encoded as, up to a maximum of 8.
 */
export function encodingLength(num: number): number;
