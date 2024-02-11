/// <reference types="node"/>

interface MergedStream extends NodeJS.ReadWriteStream {
    add(source: NodeJS.ReadableStream | readonly NodeJS.ReadableStream[]): MergedStream;
    isEmpty(): boolean;
}

declare function merge<T extends NodeJS.ReadableStream>(...streams: Array<T | readonly T[]>): MergedStream;
export = merge;
