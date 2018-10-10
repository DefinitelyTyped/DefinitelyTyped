// Type definitions for get-stream 3.0
// Project: https://github.com/sindresorhus/get-stream#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'stream';

interface Options {
    /**
     * Encoding of the incoming stream.
     * @default 'utf8'
     */
    encoding?: BufferEncoding | 'buffer';
    /**
     * Maximum length of the returned string. If it exceeds this value before
     * the stream ends, the promise will be rejected.
     * @default Infinity
     */
    maxBuffer?: number;
}

/**
 * Get the stream as a string.
 * The methods returns a promise that resolves when the end event fires on the
 * stream, indicating that there is no more data to be read.
 * The stream is switched to flowing mode.
 */
declare function getStream(stream: Stream, options?: Options): Promise<string>;
declare namespace getStream {
    /**
     * Get the `stream` as an array of values.
     *
     * It honors both the `maxBuffer` and `encoding` options.
     * The behavior changes slightly based on the encoding chosen:
     *
     * - When `encoding` is unset, it assumes an [object mode stream](https://nodesource.com/blog/understanding-object-streams/)
     *   and collects values emitted from `stream` unmodified.
     *   In this case `maxBuffer` refers to the number of items in the array
     *   (not the sum of their sizes).
     *
     * - When `encoding` is set to `buffer`, it collects an array of buffers.
     *   `maxBuffer` refers to the summed byte lengths of every buffer in the array.
     *
     * - When `encoding` is set to anything else, it collects an array of strings.
     *   `maxBuffer` refers to the summed character lengths of every string in the array.
     *
     */
    function array<T>(stream: Stream, options?: Options): Promise<T[]>;

    /**
     * Get the stream as a buffer.
     *
     * It honors the maxBuffer option as above, but it refers to byte length
     * rather than string length.
     */
    function buffer(stream: Stream, options?: Options): Promise<Buffer>;
}

export = getStream;
