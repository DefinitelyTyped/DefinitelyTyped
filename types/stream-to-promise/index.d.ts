// Type definitions for stream-to-promise 2.2
// Project: https://github.com/bendrucker/stream-to-promise
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as Stream from 'stream';

/**
 * Return a promise which resolves when the input stream ends
 * @param stream The input stream
 * @returns A promise containing the stream output as a buffer
 */
declare function streamToPromise(stream: NodeJS.ReadableStream | Stream.Readable): Promise<Buffer>;

/**
 * Return s promise which resolves when the input stream ends
 * @param stream The input stream
 */
declare function streamToPromise(stream: NodeJS.WritableStream | Stream.Writable): Promise<void>;

export = streamToPromise;
