// Type definitions for merge-stream v1.0.0
// Project: https://github.com/grncdr/merge-stream
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>, Tom X. Tobin <http://tomxtobin.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface IMergedStream extends NodeJS.ReadWriteStream {
    add(source: NodeJS.ReadableStream): IMergedStream;
    add(source: NodeJS.ReadableStream[]): IMergedStream;
    isEmpty(): boolean;
}

declare function merge<T extends NodeJS.ReadableStream>(...streams: T[]): IMergedStream;
export = merge;
