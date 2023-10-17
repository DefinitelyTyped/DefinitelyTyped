/// <reference types="node" />

import stream = require("stream");

/**
 * Pass a variable number of streams and each will be piped to the next one.
 *
 * A stream will be returned that wraps passed in streams in a way that errors will be forwarded and you can write to and/or read from it.
 *
 * Pass an object as the second to last or last argument to pass as options to the underlying stream constructors.
 *
 * Pass a function as last argument to be called on error or finish of the last stream.
 */
declare function multipipe(callback?: (err?: Error) => any): stream.PassThrough;
declare function multipipe(options?: stream.DuplexOptions, callback?: (err?: Error) => any): stream.PassThrough;

declare function multipipe(
    stream: NodeJS.ReadWriteStream | ReadonlyArray<stream.Stream>,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    stream: NodeJS.ReadWriteStream | ReadonlyArray<stream.Stream>,
    options?: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    destination: NodeJS.WritableStream,
    options?: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    transform: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    transform: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    t6: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    t6: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    t6: NodeJS.ReadWriteStream,
    t7: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;
declare function multipipe(
    source: NodeJS.ReadableStream,
    t1: NodeJS.ReadWriteStream,
    t2: NodeJS.ReadWriteStream,
    t3: NodeJS.ReadWriteStream,
    t4: NodeJS.ReadWriteStream,
    t5: NodeJS.ReadWriteStream,
    t6: NodeJS.ReadWriteStream,
    t7: NodeJS.ReadWriteStream,
    destination: NodeJS.WritableStream,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any,
): NodeJS.ReadWriteStream;

export = multipipe;
