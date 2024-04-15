/// <reference types="node" />

export function align(n: number): {
    encode: typeof encode;
    decode: typeof decode;
    encodingLength: typeof encodingLength;
    decodingLength: typeof decodingLength;
};

/**
 * Run-length-encode a bitfield.
 *
 * @param bitfield The bitfield to encode.
 * @param buffer The buffer to write the encoded bitfield into.
 * @param [offset=0] The offset in byte into the `buffer` to start writing the encoded `bitfield`.
 *
 * @example
 * import * as rle from 'bitfield-rle'
 * import Bitfield from 'bitfield'
 *
 * const bits = new Bitfield(1024)
 *
 * bits.set(400, true) // set bit 400
 *
 * const enc = rle.encode(Buffer.from(bits.buffer)) // rle encode the bitfield
 * console.log(enc.length) // 6 bytes
 */
export function encode(bitfield: Buffer, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    const bytes: number;
}

/**
 * Decode an encoded bitfield.
 *
 * @param buffer The buffer with an encoded bitfield.
 * @param [offset=0] The offset in `buffer`in bytes where to start decoding
 *
 * @example
 * import * as rle from 'bitfield-rle'
 * import Bitfield from 'bitfield'
 *
 * const bits = new Bitfield(1024)
 *
 * bits.set(400, true) // set bit 400
 *
 * const enc = rle.encode(Buffer.from(bits.buffer))
 * const dec = rle.decode(enc) // decode the rle encoded buffer
 * console.log(dec.length) // 128 bytes (like the old bitfield)
 *
 * const decodedBits = new Bitfield(dec)
 * console.log(decodedBits.get(400)) // still returns true
 */
export function decode(buffer: Buffer, offset?: number): Buffer;
export namespace decode {
    const bytes: number;
}

/**
 * @returns How many bytes are needed to encode the bitfield.
 */
export function encodingLength(bitfield: Buffer): number;

/**
 * @returns How many bytes a decoded bitfield will use.
 */
export function decodingLength(buffer: Buffer, offset?: number): number;
