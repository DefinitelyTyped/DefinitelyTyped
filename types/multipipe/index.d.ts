// Type definitions for multipipe 3.0
// Project: https://github.com/juliangruber/multipipe#readme
// Definitions by: Michael de Wit <https://github.com/mjwwit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

declare function multipipe(stream: stream.Duplex | ReadonlyArray<stream.Stream>, callback?: (err?: Error) => any): stream.Duplex;
declare function multipipe(stream: stream.Duplex | ReadonlyArray<stream.Stream>, options?: stream.DuplexOptions, callback?: (err?: Error) => any): stream.Duplex;

declare function multipipe(source: stream.Readable, destination: stream.Writable, callback?: (err?: Error) => any): stream.Duplex;
declare function multipipe(source: stream.Readable, destination: stream.Writable, options?: stream.DuplexOptions, callback?: (err?: Error) => any): stream.Duplex;

declare function multipipe(source: stream.Readable, transform: stream.Duplex, destination: stream.Writable, callback?: (err?: Error) => any): stream.Duplex;
declare function multipipe(source: stream.Readable, transform: stream.Duplex, destination: stream.Writable, options: stream.DuplexOptions, callback?: (err?: Error) => any): stream.Duplex;

declare function multipipe(source: stream.Readable, t1: stream.Duplex, t2: stream.Duplex, destination: stream.Writable, callback?: (err?: Error) => any): stream.Duplex;
declare function multipipe(source: stream.Readable, t1: stream.Duplex, t2: stream.Duplex, destination: stream.Writable, options: stream.DuplexOptions, callback?: (err?: Error) => any): stream.Duplex;

declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    destination: stream.Writable,
    callback?: (err?: Error) => any
): stream.Duplex;
declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    destination: stream.Writable,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any
): stream.Duplex;

declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    destination: stream.Writable,
    callback?: (err?: Error) => any
): stream.Duplex;
declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    destination: stream.Writable,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any
): stream.Duplex;

declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    destination: stream.Writable,
    callback?: (err?: Error) => any
): stream.Duplex;
declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    destination: stream.Writable,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any
): stream.Duplex;

declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    t6: stream.Duplex,
    destination: stream.Writable,
    callback?: (err?: Error) => any
): stream.Duplex;
declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    t6: stream.Duplex,
    destination: stream.Writable,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any
): stream.Duplex;

declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    t6: stream.Duplex,
    t7: stream.Duplex,
    destination: stream.Writable,
    callback?: (err?: Error) => any
): stream.Duplex;
declare function multipipe(
    source: stream.Readable,
    t1: stream.Duplex,
    t2: stream.Duplex,
    t3: stream.Duplex,
    t4: stream.Duplex,
    t5: stream.Duplex,
    t6: stream.Duplex,
    t7: stream.Duplex,
    destination: stream.Writable,
    options: stream.DuplexOptions,
    callback?: (err?: Error) => any
): stream.Duplex;

export = multipipe;
