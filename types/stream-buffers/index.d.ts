/// <reference types="node" />
import stream = require("stream");

export interface WritableStreamBufferOptions extends stream.WritableOptions {
    initialSize?: number | undefined;
    incrementAmount?: number | undefined;
}

export class WritableStreamBuffer extends stream.Writable {
    constructor(options?: WritableStreamBufferOptions);
    size(): number;
    maxSize(): number;
    getContents(length?: number): Buffer | false;
    getContentsAsString(encoding?: string, length?: number): string | false;
}

export interface ReadableStreamBufferOptions extends stream.ReadableOptions {
    frequency?: number | undefined;
    chunkSize?: number | undefined;
    initialSize?: number | undefined;
    incrementAmount?: number | undefined;
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
