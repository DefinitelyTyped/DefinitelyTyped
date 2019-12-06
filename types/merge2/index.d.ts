// Type definitions for merge2 1.3
// Project: https://github.com/teambition/merge2
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Chigozirim C. <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { PassThrough } from 'stream';

/**
 * @summary        This function takes an arbitrary number of streams and returns a
 *                 Merge2Stream.
 *
 * @description    If a DuplexOption is specified, it has to be specified last in the
 *                 argument list
 *
 * @see            { @link https://github.com/teambition/merge2#api }
 *
 * @param          args  StreamTypes
 * @param          opts  Optional DuplexOption to be specified last
 *
 * @return         A merged duplex stream
 */
declare function merge2(a: Streams, options?: merge2.Options): merge2.Merge2Stream;
declare function merge2(a: Streams, b: Streams, options?: merge2.Options): merge2.Merge2Stream;
declare function merge2(a: Streams, b: Streams, c: Streams, options?: merge2.Options): merge2.Merge2Stream;
declare function merge2(a: Streams, b: Streams, c: Streams, d: Streams, options?: merge2.Options): merge2.Merge2Stream;
declare function merge2(a: Streams, b: Streams, c: Streams, d: Streams, e: Streams, options?: merge2.Options): merge2.Merge2Stream;
declare function merge2(...args: Streams[]): merge2.Merge2Stream;

type Streams = merge2.StreamType | merge2.StreamType[];

declare namespace merge2 {
    type StreamType = NodeJS.ReadableStream | Merge2Stream;

    interface Options {
        end?: boolean;
        objectMode?: boolean;
    }

    interface Merge2Stream extends PassThrough {
        /**
         * @summary    Add more streams to an existing merged stream
         *
         * @param      args  streams to add
         *
         * @return     The merged stream
         */
        add(...args: Streams[]): Merge2Stream;

        /**
         * @summary    It will emit 'queueDrain' when all streams merged.
         *             If you set end === false in options, this event give you a notice that
         *             you should add more streams to merge, or end the mergedStream.
         *
         * @param event The 'queueDrain' event
         *
         * @return     This stream
         */
        on(event: 'queueDrain', listener: () => void): this;
        on(event: string, listener: (...args: any[]) => void): this;

        once(event: 'queueDrain', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
    }
}

export = merge2;
