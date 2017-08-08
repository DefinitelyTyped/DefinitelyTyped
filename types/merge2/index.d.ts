// Type definitions for merge2 1.1
// Project: https://github.com/teambition/merge2
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Chigozirim C. <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { DuplexOptions } from 'stream';

type StreamType = NodeJS.ReadableStream | Merge2Stream;

interface Merge2Stream extends NodeJS.ReadWriteStream {
    /**
     * @summary    Add more streams to an existing merged stream
     *
     * @param      {...(StreamType|StreamType[])} args  streams to add
     *
     * @return     The merged stream
     */
    add(...args: Array<StreamType | StreamType[]>): Merge2Stream;

    /**
     * @summary    It will emit 'queueDrain' when all streams merged.
     *             If you set end === false in options, this event give you a notice that
     *             you should add more streams to merge, or end the mergedStream.
     *
     * @param      {string} event  The 'queueDrain' event
     *
     * @return     This stream
     */
    on(event: 'queueDrain', callback: () => void): this;
}

/**
 * @summary        This function takes an arbitrary number of streams and returns a
 *                 Merge2Stream.
 *
 * @description    If a DuplexOption is specified, it has to be specified last in the
 *                 argument list
 *
 * @see            { @link https://github.com/teambition/merge2#api }
 *
 * @param          {...(StreamType|StreamType[])} args  StreamTypes
 * @param          {DuplexOptions} opts  Optional DuplexOption to be specified last
 *
 * @return         A merged duplex stream
 */
declare function IMerge2(...args: Array<StreamType | StreamType[] | DuplexOptions>): Merge2Stream;

declare namespace IMerge2 {}

export = IMerge2;
