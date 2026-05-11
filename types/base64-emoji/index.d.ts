/// <reference types="node" />

/**
 * Transforms any binary data to emoji using only 64 different emojicons (+1 for padding).
 *
 * @param obj The buffer or string to encode.
 * @param buffer Buffer to be used to store the encoded result. If not provided a new buffer will be
 * allocated.
 * @param [offset=0] If passed, the input will be encoded into the buffer at that byte offset.
 *
 * @example
 * import * as emoji from 'base64-emoji'
 *
 * const encoded = emoji.encode('Hello World')
 *
 * console.log(encoded.toString()) // => 🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫
 */
export function encode(obj: string | Buffer, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * The number of encoded bytes after a call to `encode`.
     */
    const bytes: number | undefined;
}

/**
 * Transforms encoded binary data back to emoji.
 *
 * @param buffer The data to decode.
 * @param [offset=0] If passed, the input will be decoded from that byte offset.
 * @param [length=buf.length] The number of bytes that should be decoded.
 *
 * @example
 * import * as emoji from 'base64-emoji'
 *
 * const encoded = '🍕📙🕡🌵🎎📙🚢😮🕡🐗🏦🕤🎎📙🕖📫'
 * const decoded = emoji.decode(encoded)
 *
 * console.log(decoded.toString()) // => Hello World
 */
export function decode(buffer: string | Buffer, offset?: number, length?: number): Buffer;
export namespace decode {
    /**
     * The number of decoded bytes after a call to `decode`.
     */
    const bytes: number | undefined;
}

/**
 * Determines the amount of bytes needed to encode the input.
 */
export function encodingLength(obj: string | Buffer): number;
