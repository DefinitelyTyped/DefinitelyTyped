// Type definitions for event-stream v3.3.2
// Project: https://github.com/dominictarr/event-stream
// Definitions by: David Gardiner <https://github.com/flcdrg/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

interface MapStream extends stream.Stream {
    writable: boolean;
    readable: boolean;

    destroy: () => void;
    end: any;
    pause: () => void;
    resume: () => void;
    write: any;
}

/**
 * Create a through stream from an asynchronous function
 * 
 * @param asyncFunction
 */
export declare function map(asyncFunction: Function):  MapStream;

/**
 * Same as map, but the callback is called synchronously. Based on es.through
 * @param syncFunction
 */
export declare function mapSync(syncFunction: Function):  MapStream;

/**
 * Break up a stream and reassemble it so that each line is a chunk. matcher may be a String, or a RegExp
 * 
 * @param matcher
 */
export declare function split(matcher: string | RegExp):  MapStream;

/**
 * Create a through stream that emits separator between each chunk, just like Array#join
 * 
 * @param separator
 */
export declare function join(separator: string):  MapStream;

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param stream
 */
export declare function concat(...stream: MapStream[]):  MapStream;

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param stream
 */
export declare function concat(streamArray: MapStream[]):  MapStream;

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param stream
 */
export declare function merge(...stream: MapStream[]): MapStream;

/**
 * Merges streams into one and returns it. Incoming data will be emitted as soon it comes into - no ordering will be applied
 * (for example: data1 data1 data2 data1 data2 - where data1 and data2 is data from two streams).
 * Counts how many streams were passed to it and emits end only when all streams emitted end.
 * 
 * @param stream
 */
export declare function merge(streamArray: MapStream[]): MapStream;

/**
 * Replace all occurrences of from with to
 * @param from
 * @param to
 */
export declare function replace(from: string | RegExp, to: string | RegExp): MapStream;

/**
 * Convenience function for parsing JSON chunks. For newline separated JSON, use with es.split.
 * By default it logs parsing errors by console.error; for another behaviour, transforms created by es.parse({error: true})
 * will emit error events for exceptions thrown from JSON.parse, unmodified.
 */
export declare function parse(): any;

/**
 * convert javascript objects into lines of text. The text will have whitespace escaped and have a \n appended, so it will be compatible with es.parse
 */
export declare function stringify(): MapStream;

/**
 * create a readable stream (that respects pause) from an async function.
 * 
 * @param asyncFunction
 */
export declare function readable(asyncFunction: Function): MapStream;

/**
 * Create a readable stream from an Array.
 * 
 * @param array
 */
export declare function readArray(array: any[]): MapStream;

/**
 * create a writeable stream from a callback
 * 
 * @param callback
 */
export declare function writeArray(callback: Function): MapStream;

/**
 * A stream that buffers all chunks when paused
 */
export declare function pause(): MapStream | void;

/**
 * Takes a writable stream and a readable stream and makes them appear as a readable writable stream.
 * 
 * @param writeStream
 * @param readStream
 */
export declare function duplex(writeStream: stream.Writable, readStream: stream.Readable): MapStream;

/**
 * Create a through stream from a child process
 * 
 * @param child_process
 */
export declare function child(child_process: any): MapStream;

/**
 * waits for stream to emit 'end'. joins chunks of a stream into a single string or buffer.
 * Takes an optional callback, which will be passed the complete string/buffer when it receives the 'end' event.
 * 
 * @param callback
 */
export declare function wait(callback: Function): MapStream;
