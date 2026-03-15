/// <reference types="node" />

/**
 * A ponyfill for `Buffer.alloc`.
 *
 * @param size - The desired length of the new Buffer
 * @param fill - A value to pre-fill the new Buffer with
 * @param encoding - If fill is a string, this is its encoding
 * @returns A new Buffer of the specified size
 */
declare function bufferAlloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer;

export = bufferAlloc;
