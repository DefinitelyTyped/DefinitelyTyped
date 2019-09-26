// Type definitions for merge-stream 1.1
// Project: https://github.com/grncdr/merge-stream
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
//                 Tom X. Tobin <https://github.com/tomxtobin>
//                 Daniel Zazula <https://github.com/daniel-zazula>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface MergedStream extends NodeJS.ReadWriteStream {
    add(source: NodeJS.ReadableStream | ReadonlyArray<NodeJS.ReadableStream>): MergedStream;
    isEmpty(): boolean;
}

declare function merge<T extends NodeJS.ReadableStream>(...streams: Array<T | ReadonlyArray<T>>): MergedStream;
export = merge;
