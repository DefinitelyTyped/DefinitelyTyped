/// <reference types="node" />

/**
 * An [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible JSON encoder
 * that properly encodes `Buffer`s.
 *
 * @param buffer The `Buffer` to encode.
 * @param [offset=0] The byte offset to encode `buffer` at in the newly allocated `Buffer`.
 */
export function encode(buffer: Buffer, offset?: number): Buffer;
/**
 * An [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible JSON encoder
 * that properly encodes `Buffer`s.
 *
 * @param buffer The `Buffer` to encode.
 * @param target The `Buffer` to encode the `buffer` into.
 * @param [offset=0] The byte offset to encode `buffer` at in `target`.
 */
export function encode(buffer: Buffer, target: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * The amount of bytes used to encode the `Buffer`. This property is set after each call to `encode()`.
     */
    const bytes: number | undefined;
}

/**
 * An [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible JSON decoder
 * that properly decodes `Buffer`s.
 *
 * @param buffer The `Buffer` to decode a stringified `Buffer` from.
 * @param [start=0] The byte offset into `buffer` to start decoding the encoded `Buffer`.
 * @param [end=buffer.length] The byte offset into `buffer` to end decoding the encoded `Buffer`
 * (not including the byte at the end-offset).
 */
export function decode(buffer: Buffer, start?: number, end?: number): Buffer;
export namespace decode {
    /**
     * The amount of bytes used to decode the `Buffer`. This property is set after each call to `decode()`.
     */
    const bytes: number | undefined;
}

/**
 * @returns The amount of bytes needed to encode `buffer`.
 */
export function encodingLength(buffer: Buffer): number;
