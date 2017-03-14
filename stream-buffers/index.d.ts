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

export declare class WritableStreamBuffer extends stream.Writable {
    constructor(options?: WritableStreamBufferOptions);
    size(): number;
    maxSize(): number;
    getContents(length?: number): any;
    getContentsAsString(encoding?: string, length?: number): string;
}

export interface ReadableStreamBufferOptions extends stream.ReadableOptions {
    frequency?: number;
    chunkSize?: number;
    initialSize?: number;
    incrementAmount?: number;
}

export declare class ReadableStreamBuffer extends stream.Readable {
    constructor(options?: ReadableStreamBufferOptions);
    put(data: string | Buffer, encoding?: string): void;
    stop(): void;
    size(): number;
    maxSize(): number;
}

export declare const DEFAULT_INITIAL_SIZE: number;
export declare const DEFAULT_INCREMENT_AMOUNT: number;
export declare const DEFAULT_FREQUENCY: number;
export declare const DEFAULT_CHUNK_SIZE: number;
