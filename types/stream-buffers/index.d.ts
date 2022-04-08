// Type definitions for stream-buffers 3.0
// Project: https://github.com/samcday/node-stream-buffer#readme
// Definitions by: Jason Dent <https://github.com/Jason3S>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export interface WritableStreamBufferOptions extends stream.WritableOptions {
    initialSize?: number;
    incrementAmount?: number;
}

export class WritableStreamBuffer extends stream.Writable {
    constructor(options?: WritableStreamBufferOptions);
    size(): number;
    maxSize(): number;
    getContents(length?: number): Buffer | false;
    getContentsAsString(encoding?: string, length?: number): string | false;
}

export interface ReadableStreamBufferOptions extends stream.ReadableOptions {
    frequency?: number;
    chunkSize?: number;
    initialSize?: number;
    incrementAmount?: number;
}

export class ReadableStreamBuffer extends stream.Readable {
    constructor(options?: ReadableStreamBufferOptions);
    put(data: string | Buffer, encoding?: string): void;
    stop(): void;
    size(): number;
    maxSize(): number;
}

export const DEFAULT_INITIAL_SIZE: number;
export const DEFAULT_INCREMENT_AMOUNT: number;
export const DEFAULT_FREQUENCY: number;
export const DEFAULT_CHUNK_SIZE: number;
