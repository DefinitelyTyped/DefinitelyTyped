/// <reference types="node"/>

interface MergedStream extends NodeJS.ReadWriteStream {
    /**
     * A method to dynamically add more sources to the stream. The argument supplied to add can be
     * either a source or an array of sources.
     */
    add(source: NodeJS.ReadableStream | readonly NodeJS.ReadableStream[]): MergedStream;

    /**
     * A method that tells you if the merged stream is empty.
     */
    isEmpty(): boolean;
}

declare function merge<T extends NodeJS.ReadableStream>(...streams: Array<T | readonly T[]>): MergedStream;
export = merge;
