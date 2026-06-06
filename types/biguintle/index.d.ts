/// <reference types="node" />

/**
 * Encode unsigned `BigInt` as little endian.
 *
 * @param value Value to encode.
 * @param buffer The buffer to encode `value` to. If not set, a new `Buffer` is allocated the size
 * of the byte width of `value`.
 * @param [byteOffset=0] The byte offset in `buffer` to encode `value`.
 *
 * @example
 * import * as bigUintLE from 'biguintle'
 * import assert = require('node:assert')
 *
 * const bigUint = 2n ** 64n - 1n // UINT64_MAX
 *
 * assert(bigUintLE.encodingLength(bigUint) === 8)
 * const buf = bigUintLE.encode(bigUint)
 * assert(bigUintLE.encode.bytes === 8 && buf.byteLength === 8)
 */
export function encode<TBuf extends Uint8Array = Buffer>(value: bigint, buffer?: TBuf, byteOffset?: number): TBuf;
export namespace encode {
    /**
     * Number of bytes last encoded.
     */
    const bytes: number;
}

/**
 * Decode unsigned `BigInt` encoded as little endian from `buffer`.
 *
 * @param buffer The buffer to decode value from.
 * @param [byteOffset=0] The byte offset in `buffer` to decode `value` from.
 * @param [byteLength=buffer.byteLength] The number of bytes to decode. Note that if you
 * do **not** give a `byteLength` all of `buffer` will be decoded, since `BigInt`s do
 * not have a natural width.
 *
 * @example
 * import * as bigUintLE from 'biguintle'
 * import assert = require('node:assert')
 *
 * const bigUint = 2n ** 64n - 1n // UINT64_MAX
 *
 * const buf = bigUintLE.encode(bigUint)
 * const num = bigUintLE.decode(buf)
 * assert(bigUintLE.decode.bytes === 8)
 */
export function decode(buffer: Uint8Array, byteOffset?: number, byteLength?: number): bigint;
export namespace decode {
    /**
     * Number of bytes last decoded.
     */
    const bytes: number;
}

/**
 * Number of bytes required to encode `value`.
 */
export function encodingLength(value: bigint): number;
