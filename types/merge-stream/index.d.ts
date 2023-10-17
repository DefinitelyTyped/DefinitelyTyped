/// <reference types="node"/>

interface MergedStream extends NodeJS.ReadWriteStream {
    add(source: NodeJS.ReadableStream | ReadonlyArray<NodeJS.ReadableStream>): MergedStream;
    isEmpty(): boolean;
}

declare function merge<T extends NodeJS.ReadableStream>(...streams: Array<T | ReadonlyArray<T>>): MergedStream;
export = merge;
