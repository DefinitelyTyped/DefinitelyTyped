// Type definitions for base32-encoding 1.0
// Project: https://github.com/emilbayes/base32-encoding#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Encode a normal buffer as base32, meaning only the lower 5 bits are used.
 * Takes `⌈len * 8 / 5⌉` bytes to encode.
 *
 * Sets `encode.bytes` to the number of bytes written.
 *
 * @param buffer The buffer to encode.
 * @param output This buffer will be used instead of allocating a new `Buffer` internally.
 * @param offset The offset to write to in `output`.
 */
export function encode<TOut extends Uint8Array = Buffer>(
    buffer: Uint8Array,
    /** @default Buffer.alloc(encode.bytes) */
    output?: TOut,
    /** @default 0 */
    offset?: number,
): TOut;
export namespace encode {
    const bytes: number | undefined;
}
/**
 * Decode a base32 buffer as a normal, "base256" buffer, meaning only the lower 5 bits are
 * read from `buffer` and assembled into complete 8 bit bytes. Takes `⌊len * 5 / 8⌋` bytes to encode.
 *
 * Sets `decode.bytes` to the number of bytes written.
 *
 * @param buffer The buffer to decode.
 * @param output This buffer will be used instead of allocating a new `Buffer` internally.
 * @param offset The offset to write to in `output`.
 */
export function decode<TOut extends Uint8Array = Buffer>(buffer: Uint8Array, output?: TOut, offset?: number): TOut;
export namespace decode {
    const bytes: number | undefined;
}
/**
 * @returns `⌈len * 8 / 5⌉`.
 */
export function encodingLength(buffer: Uint8Array): number;
/**
 * Encode `buffer` to base32 and translate into a string.
 *
 * @param buffer The buffer to stringify.
 * @param alphabet The alphabet to use for translation.
 */
export function stringify(
    buffer: Uint8Array,
    /** @default '23456789abcdefghijkmnpqrstuvwxyz' (missing o01l) */
    alphabet?: string,
): string;
/**
 * Decode `str` from base32 and translate from a string.
 *
 * @param str The string to parse.
 * @param alphabet The alphabet to use for translation.
 */
export function parse(
    str: string,
    /** @default '23456789abcdefghijkmnpqrstuvwxyz' (missing o01l) */
    alphabet?: string,
): Buffer;
