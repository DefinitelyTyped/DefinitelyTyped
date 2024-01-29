/// <reference types="node"/>
import * as Stream from "stream";

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
