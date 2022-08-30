// Type definitions for sse4_crc32 7.0
// Project: https://github.com/anandsuresh/sse4_crc32#readme
// Definitions by: naeemy <https://github.com/naeemy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ReadStream } from 'fs';
import { Writable } from 'stream';

export class Crc32CStream extends Writable {
    constructor(crc?: number);
}

/**
 *
 * @param stream Readable stream object
 * @param [crc] Non-zero integer value
 */
export function fromStream(stream: ReadStream, crc?: number): Crc32CStream;
/**
 *
 * @param buf Buffer object or string
 * @param [initial] Non-zero integer value
 */
export function calculate(buf: Buffer | string, initial?: number): number;

// only available when NODE_ENV='production'
export const hardware_support: boolean | undefined;
/**
 * Calculates CRC-32C for the specified string/buffer using SSE 4.2 extensions
 * @param buf Buffer object or string
 * @param [initial] Non-zero integer value
 */
 export const  sse42_crc: ((buf: Buffer | string, initial?: number) => number) | undefined;
/**
 * Calculates CRC-32C for the specified string/buffer using table-lookups
 * @param buf Buffer object or string
 * @param [initial] Non-zero integer value
 */
export const table_crc: ((buf: Buffer | string, initial?: number) => number) | undefined;
