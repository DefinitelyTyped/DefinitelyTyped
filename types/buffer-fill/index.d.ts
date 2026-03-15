/// <reference types="node" />

/**
 * A ponyfill for `Buffer.fill`.
 *
 * @param buf - The Buffer to fill
 * @param value - The value to fill with
 * @param offset - Starting offset
 * @param end - Ending offset (exclusive)
 * @param encoding - Encoding if value is a string
 * @returns The modified buffer
 */
declare function bufferFill(
    buf: Buffer,
    value: string | Buffer | number,
    offset?: number,
    end?: number,
    encoding?: BufferEncoding,
): Buffer;

export = bufferFill;
