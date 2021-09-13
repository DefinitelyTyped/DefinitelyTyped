// Type definitions for Highland 2.12.0
// Project: http://highlandjs.org/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Hugo Wood <https://github.com/hgwood>
//                 William Yu <https://github.com/iwllyu>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Jack Wearden <https://github.com/notbobthebuilder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

// TODO export the top-level functions

// TODO figure out curry arguments
// TODO use externalised Readable/Writable (not node's)

// Returns the type of a flattened stream.
// Uses trick described in https://github.com/microsoft/TypeScript/pull/33050#issuecomment-552218239
// with string keys to support TS 2.8
type Flattened<R> = {
    value: R,
    stream: R extends Highland.Stream<infer U> ? Flattened<U> : never,
    array: R extends Array<infer U> ? Flattened<U> : never;
}[R extends Array<any> ? 'array' : R extends Highland.Stream<any> ? 'stream' : 'value'];

// Describes a constructor for a particular promise library
interface PConstructor<T, P extends PromiseLike<T>> {
    new(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): P
}
/**
 * Highland: the high-level streams library
 *
 * Highland may be freely distributed under the Apache 2.0 license.
 * https://github.com/caolan/highland
 * Copyright (c) Caolan McMahon
 *
 */
interface HighlandStatic {
    /**
     * The Stream constructor, accepts an array of values or a generator function
     * as an optional argument. This is typically the entry point to the Highland
     * APIs, providing a convenient way of chaining calls together.
     *
     * **Arrays -** Streams created from Arrays will emit each value of the Array
     * and then emit a [nil](#nil) value to signal the end of the Stream.
     *
     * **Generators -** These are functions which provide values for the Stream.
     * They are lazy and can be infinite, they can also be asynchronous (for
     * example, making a HTTP request). You emit values on the Stream by calling
     * `push(err, val)`, much like a standard Node.js callback. Once it has been
     * called, the generator function will not be called again unless you call
     * `next()`. This call to `next()` will signal you've finished processing the
     * current data and allow for the generator function to be called again. If the
     * Stream is still being consumed the generator function will then be called
     * again.
     *
     * You can also redirect a generator Stream by passing a new source Stream
     * to read from to next. For example: `next(other_stream)` - then any subsequent
     * calls will be made to the new source.
     *
     * **Node Readable Stream -** Pass in a Node Readable Stream object to wrap
     * it with the Highland API. Reading from the resulting Highland Stream will
     * begin piping the data from the Node Stream to the Highland Stream.
     *
     * A stream constructed in this way relies on `Readable#pipe` to end the
     * Highland Stream once there is no more data. Not all Readable Streams do
     * this. For example, `IncomingMessage` will only emit `close` when the client
     * aborts communications and will *not* properly call `end`. In this case, you
     * can provide an optional `onFinished` function with the signature
     * `onFinished(readable, callback)` as the second argument.
     *
     * This function will be passed the Readable and a callback that should called
     * when the Readable ends. If the Readable ended from an error, the error
     * should be passed as the first argument to the callback. `onFinished` should
     * bind to whatever listener is necessary to detect the Readable's completion.
     * If the callback is called multiple times, only the first invocation counts.
     * If the callback is called *after* the Readable has already ended (e.g., the
     * `pipe` method already called `end`), it will be ignored.
     *
     * The `onFinished` function may optionally return one of the following:
     *
     * - A cleanup function that will be called when the stream ends. It should
     * unbind any listeners that were added.
     * - An object with the following optional properties:
     *    - `onDestroy` - the cleanup function.
     *    - `continueOnError` - Whether or not to continue the stream when an
     *      error is passed to the callback. Set this to `true` if the Readable
     *      may continue to emit values after errors. Default: `false`.
     *
     * See [this issue](https://github.com/caolan/highland/issues/490) for a
     * discussion on why Highland cannot reliably detect stream completion for
     * all implementations and why the `onFinished` function is required.
     *
     * **EventEmitter / jQuery Elements -** Pass in both an event name and an
     * event emitter as the two arguments to the constructor and the first
     * argument emitted to the event handler will be written to the new Stream.
     *
     * You can pass a mapping hint as the third argument, which specifies how
     * event arguments are pushed into the stream. If no mapping hint is provided,
     * only the first value emitted with the event to the will be pushed onto the
     * Stream.
     *
     * If `mappingHint` is a number, an array of that length will be pushed onto
     * the stream, containing exactly that many parameters from the event. If it's
     * an array, it's used as keys to map the arguments into an object which is
     * pushed to the tream. If it is a function, it's called with the event
     * arguments, and the returned value is pushed.
     *
     * **Promise -** Accepts an ES6 / jQuery style promise and returns a
     * Highland Stream which will emit a single value (or an error). In case you use
     * [bluebird cancellation](http://bluebirdjs.com/docs/api/cancellation.html) Highland Stream will be empty for a cancelled promise.
     *
     * **Iterator -** Accepts an ES6 style iterator that implements the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_.22iterator.22_protocol):
     * yields all the values from the iterator using its `next()` method and terminates when the
     * iterator's done value returns true. If the iterator's `next()` method throws, the exception will be emitted as an error,
     * and the stream will be ended with no further calls to `next()`.
     *
     * **Iterable -** Accepts an object that implements the [iterable protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_.22iterable.22_protocol),
     * i.e., contains a method that returns an object that conforms to the iterator protocol. The stream will use the
     * iterator defined in the `Symbol.iterator` property of the iterable object to generate emitted values.
     *
     * @id _(source)
     * @section Stream Objects
     * @name _(source)
     * @param {Array | Function | Iterator | Iterable | Promise | Readable Stream | String} source - (optional) source to take values from from
     * @param {Function} onFinished - (optional) a function that detects when the readable completes. Second argument. Only valid if `source` is a Readable.
     * @param {EventEmitter | jQuery Element} eventEmitter - (optional) An event emitter. Second argument. Only valid if `source` is a String.
     * @param {Array | Function | Number} mappingHint - (optional) how to pass the
     * arguments to the callback. Only valid if `source` is a String.
     * @api public
     */
    <R>(): Highland.Stream<R>;
    <R>(source: R[]): Highland.Stream<R>;
    <R>(source: (push: (err: Error | null, x?: R | Highland.Nil) => void, next: () => void) => void): Highland.Stream<R>;

    <R>(source: Highland.Stream<R>): Highland.Stream<R>;
    <R>(source: NodeJS.ReadableStream, onFinished?: Highland.OnFinished): Highland.Stream<R>;
    <R>(source: string, eventEmitter: NodeJS.EventEmitter, mappingHint?: Highland.MappingHint): Highland.Stream<R>;

    // moar (promise for everything?)
    <R>(source: PromiseLike<Highland.Stream<R>>): Highland.Stream<R>;
    <R>(source: PromiseLike<R>): Highland.Stream<R>;

    <R>(source: Iterable<R>): Highland.Stream<R>;
    <R>(source: Iterator<R>): Highland.Stream<R>;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // UTILS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Returns true if `x` is the end of stream marker.
     *
     * @id isNil
     * @section Streams
     * @name _.isNil(x)
     * @param x - the object to test
     * @api public
     */
    isNil<R>(x: R | Highland.Nil): x is Highland.Nil;

    /**
     * Returns true if `x` is a Highland Stream.
     *
     * @id isStream
     * @section Streams
     * @name _.isStream(x)
     * @param x - the object to test
     * @api public
     */
    isStream(x: any): x is Highland.Stream<any>;

    isStreamError(x: any): x is Highland.Stream<any>;

    isStreamRedirect(x: any): x is Highland.Stream<any>;

    /**
     * Logs values to the console, a simple wrapper around `console.log` that
     * it suitable for passing to other functions by reference without having to
     * call `bind`.
     *
     * @id log
     * @section Utils
     * @name _.log(args..)
     * @api public
     */
    log(x: any, ...args: any[]): void;

    /**
     * The end of stream marker. This is sent along the data channel of a Stream
     * to tell consumers that the Stream has ended. See the following map code for
     * an example of detecting the end of a Stream:
     *
     * @id nil
     * @section Streams
     * @name _.nil
     * @api public
     */
    nil: Highland.Nil;

    /**
     * Wraps a node-style async function which accepts a callback, transforming
     * it to a function which accepts the same arguments minus the callback and
     * returns a Highland Stream instead. The wrapped function keeps its context,
     * so you can safely use it as a method without binding (see the second
     * example below).
     *
     * wrapCallback also accepts an optional mappingHint, which specifies how
     * callback arguments are pushed to the stream. This can be used to handle
     * non-standard callback protocols that pass back more than one value.
     *
     * mappingHint can be a function, number, or array. See the documentation on
     * EventEmitter Stream Objects for details on the mapping hint. If
     * mappingHint is a function, it will be called with all but the first
     * argument that is passed to the callback. The first is still assumed to be
     * the error argument.
     *
     * @id wrapCallback
     * @section Utils
     * @name _.wrapCallback(f)
     * @param {Function} f - the node-style function to wrap
     * @param {Array | Function | Number} [mappingHint] - how to pass the arguments to the callback
     * @api public
     */
    wrapCallback(f: Function, mappingHint?: Highland.MappingHint): (...args: any[]) => Highland.Stream<any>;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // OBJECTS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Extends one object with the properties of another. **Note:** The
     * arguments are in the reverse order of other libraries such as
     * underscore. This is so it follows the convention of other functions in
     * this library and so you can more meaningfully partially apply it.
     *
     * @id extend
     * @section Objects
     * @name _.extend(a, b)
     * @param {Object} a - the properties to extend b with
     * @param {Object} b - the original object to extend
     * @api public
     */
    extend(extensions: Object, target: Object): Object;

    extend(target: Object): (extensions: Object) => Object;

    /**
     * Returns a property from an object.
     *
     * @id get
     * @section Objects
     * @name _.get(prop, obj)
     * @param {String} prop - the property to return
     * @param {Object} obj - the object to read properties from
     * @api public
     */
    get(prop: string, obj: Object): string;

    get(prop: string): (obj: Object) => Object;

    /**
     * Returns keys from an Object as a Stream.
     *
     * @id keys
     * @section Objects
     * @name _.keys(obj)
     * @param {Object} obj - the object to return keys from
     * @api public
     */
    keys(obj: Object): Highland.Stream<string>;

    /**
     * Returns key/value pairs for an Object as a Stream. Reads properties
     * lazily, so if you don't read from all keys on an object, not
     * all properties will be read from (may have an effect where getters
     * are used).
     *
     * @id pairs
     * @section Objects
     * @name _.pairs(obj)
     * @param {Object} obj - the object to return key/value pairs from
     * @api public
     */
    pairs(obj: Object): Highland.Stream<any[]>;

    pairs(obj: any[]): Highland.Stream<any[]>;

    /**
     * Updates a property on an object, returning the updated object.
     *
     * @id set
     * @section Objects
     * @name _.set(prop, value, obj)
     * @param {String} prop - the property to return
     * @param value - the value to set the property to
     * @param {Object} obj - the object to set properties on
     * @api public
     */
    set(prop: string, val: any, obj: Object): Object;

    set(prop: string, val: any): (obj: Object) => Object;

    /**
     * Returns values from an Object as a Stream. Reads properties
     * lazily, so if you don't read from all keys on an object, not
     * all properties will be read from (may have an effect where getters
     * are used).
     *
     * @id values
     * @section Objects
     * @name _.values(obj)
     * @param {Object} obj - the object to return values from
     * @api public
     */
    values(obj: Object): Highland.Stream<any>;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // FUNCTIONS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Creates a composite function, which is the application of function1 to
     * the results of function2. You can pass an arbitrary number of arguments
     * and have them composed. This means you can't partially apply the compose
     * function itself.
     *
     * @id compose
     * @name compose(fn1, fn2, ...)
     * @section Functions
     * @api public
     */
    compose(...functions: Function[]): Function;

    /**
     * Transforms a function with specific arity (all arguments must be
     * defined) in a way that it can be called as a chain of functions until
     * the arguments list is saturated.
     *
     * This function is not itself curryable.
     *
     * @id curry
     * @name curry(fn, [*arguments])
     * @section Functions
     * @param {Function} fn - the function to curry
     * @param args.. - any number of arguments to pre-apply to the function
     * @returns Function
     * @api public
     */
    curry(fn: Function, ...args: any[]): Function;

    /**
     * Evaluates the function `fn` with the argument positions swapped. Only
     * works with functions that accept two arguments.
     *
     * @id flip
     * @name flip(fn, [x, y])
     * @section Functions
     * @param {Function} f - function to flip argument application for
     * @param x - parameter to apply to the right hand side of f
     * @param y - parameter to apply to the left hand side of f
     * @api public
     */
    flip(fn: Function, ...args: any[]): Function;

    /**
     * Same as `curry` but with a specific number of arguments. This can be
     * useful when functions do not explicitly define all its parameters.
     *
     * This function is not itself curryable.
     *
     * @id ncurry
     * @name ncurry(n, fn, [args...])
     * @section Functions
     * @param {Number} n - the number of arguments to wait for before apply fn
     * @param {Function} fn - the function to curry
     * @param args... - any number of arguments to pre-apply to the function
     * @returns Function
     * @api public
     */
    ncurry(n: number, fn: Function, ...args: any[]): Function;

    /**
     * Partially applies the function (regardless of whether it has had curry
     * called on it). This will always postpone execution until at least the next
     * call of the partially applied function.
     *
     * @id partial
     * @name partial(fn, args...)
     * @section Functions
     * @param {Function} fn - function to partial apply
     * @param args... - the arguments to apply to the function
     * @api public
     */
    partial(fn: Function, ...args: any[]): Function;

    /**
     * The reversed version of compose. Where arguments are in the order of
     * application.
     *
     * @id seq
     * @name seq(fn1, fn2, ...)
     * @section Functions
     * @api public
     */
    seq(...functions: Function[]): Function;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // OPERATORS
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Add two values. Can be partially applied.
     *
     * @id add
     * @section Operators
     * @name _.add(a, b)
     * @api public
     */
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;

    /**
     * Perform logical negation on a value. If `x` is truthy then returns false,
     * otherwise returns true.
     *
     * @id not
     * @section Operators
     * @name _.not(x)
     * @param x - the value to negate
     * @api public
     *
     * _.not(true)   // => false
     * _.not(false)  // => true
     */
    not<R>(x: any): boolean;
}

declare namespace Highland {

    // hacky unique
    // TODO do we need this?
    interface Nil {
        Highland_NIL: Nil;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Used as an Error marker when writing to a Stream's incoming buffer
     */
    // TODO is this public?
    class StreamError {
        constructor(err: Error);

        error: Error;
    }

    /**
     * Used as a Redirect marker when writing to a Stream's incoming buffer
     */
        // TODO is this public?
    class StreamRedirect<R> {
        constructor(to: Stream<R>)

        to: Stream<R>;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    /**
     * Actual Stream constructor wrapped the the main exported function
     */
    interface Stream<R> extends NodeJS.EventEmitter {

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // STREAM OBJECTS
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        /**
         * Destroys a stream by unlinking it from any consumers and sources. This will
         * stop all consumers from receiving events from this stream and removes this
         * stream as a consumer of any source stream.
         *
         * This function calls end() on the stream and unlinks it from any piped-to streams.
         *
         * @id pipe
         * @section Streams
         * @name Stream.destroy()
         * @api public
         */
        destroy(): void;

        /**
         * Ends a Stream. This is the same as sending a [nil](#nil) value as data.
         * You shouldn't need to call this directly, rather it will be called by
         * any [Node Readable Streams](https://nodejs.org/api/stream.html#stream_class_stream_readable)
         * you pipe in.
         *
         * @id end
         * @section Streams
         * @name Stream.end()
         * @api public
         */
        end(): void;

        /**
         * Pauses the stream. All Highland Streams start in the paused state.
         *
         * @id pause
         * @section Streams
         * @name Stream.pause()
         * @api public
         */
        pause(): void;

        /**
         * Resumes a paused Stream. This will either read from the Stream's incoming
         * buffer or request more data from an upstream source.
         *
         * @id resume
         * @section Streams
         * @name Stream.resume()
         * @api public
         */
        resume(): void;

        /**
         * Writes a value to the Stream. If the Stream is paused it will go into the
         * Stream's incoming buffer, otherwise it will be immediately processed and
         * sent to the Stream's consumers (if any). Returns false if the Stream is
         * paused, true otherwise. This lets Node's pipe method handle back-pressure.
         *
         * You shouldn't need to call this yourself, but it may be called by Node
         * functions which treat Highland Streams as a [Node Writable Stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
         *
         * @id write
         * @section Streams
         * @name Stream.write(x)
         * @param x - the value to write to the Stream
         * @api public
         */
        write(x: R): boolean;

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // TRANSFORMS
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        /**
         * Adds a value to the end of a Stream.
         *
         * @id append
         * @section Streams
         * @name Stream.append(y)
         * @param y - the value to append to the Stream
         * @api public
         */
        append(y: R): Stream<R>;

        /**
         * Takes one Stream and batches incoming data into arrays of given length
         *
         * @id batch
         * @section Transforms
         * @name Stream.batch(n)
         * @param {Number} n - length of the array to batch
         * @api public
         *
         * _([1, 2, 3, 4, 5]).batch(2)  // => [1, 2], [3, 4], [5]
         */
        batch(n: number): Stream<R[]>;

        /**
         * Takes one Stream and batches incoming data within a maximum time frame
         * into arrays of a maximum length.
         *
         * @id batchWithTimeOrCount
         * @section Transforms
         * @name Stream.batchWithTimeOrCount(ms, n)
         * @param {Number} ms - the maximum milliseconds to buffer a batch
         * @param {Number} n - the maximum length of the array to batch
         * @api public
         *
         * _(function (push) {
         *     push(1);
         *     push(2);
         *     push(3);
         *     setTimeout(push, 20, 4);
         * }).batchWithTimeOrCount(10, 2)
         *
         * // => [1, 2], [3], [4]
         */
        batchWithTimeOrCount(ms: number, n: number): Stream<R[]>;

        /**
         * Groups all values into an Array and passes down the stream as a single
         * data event. This is a bit like doing [toArray](#toArray), but instead
         * of accepting a callback and causing a *thunk*, it passes the value on.
         *
         * @id collect
         * @section Streams
         * @name Stream.collect()
         * @api public
         */
        collect(): Stream<R[]>;

        /**
         * Filters a Stream to drop all non-truthy values.
         *
         * @id compact
         * @section Streams
         * @name Stream.compact()
         * @api public
         */
        compact(): Stream<R>;

        /**
         * Consumes values from a Stream (once resumed) and returns a new Stream for
         * you to optionally push values onto using the provided push / next functions.
         *
         * This function forms the basis of many higher-level Stream operations.
         * It will not cause a paused stream to immediately resume, but behaves more
         * like a 'through' stream, handling values as they are read.
         *
         * @id consume
         * @section Streams
         * @name Stream.consume(f)
         * @param {Function} f - the function to handle errors and values
         * @api public
         */
        consume<U>(f: (err: Error, x: R | Highland.Nil, push: (err: Error | null, value?: U | Highland.Nil) => void, next: () => void) => void): Stream<U>;

        /**
         * Holds off pushing data events downstream until there has been no more
         * data for `ms` milliseconds. Sends the last value that occurred before
         * the delay, discarding all other values.
         *
         * @id debounce
         * @section Streams
         * @name Stream.debounce(ms)
         * @param {Number} ms - the milliseconds to wait before sending data
         * @api public
         */
        debounce(ms: number): Stream<R>;

        /**
         * Creates a new Stream which applies a function to each value from the source
         * and re-emits the source value. Useful when you want to mutate the value or
         * perform side effects
         *
         * @id doto
         * @section Transforms
         * @name Stream.doto(f)
         * @param {Function} f - the function to apply
         * @api public
         *
         * var appended = _([[1], [2], [3], [4]]).doto(function (x) {
         *     x.push(1);
         * });
         *
         * _([1, 2, 3]).doto(console.log)
         * // 1
         * // 2
         * // 3
         * // => 1, 2, 3
         */
        doto(f: (x: R) => void): Stream<R>;

        /**
         * Acts as the inverse of [`take(n)`](#take) - instead of returning the first `n` values, it ignores the
         * first `n` values and then emits the rest. `n` must be of type `Number`, if not the whole stream will
         * be returned. All errors (even ones emitted before the nth value) will be emitted.
         *
         * @id drop
         * @section Transforms
         * @name Stream.drop(n)
         * @param {Number} n - integer representing number of values to read from source
         * @api public
         *
         * _([1, 2, 3, 4]).drop(2) // => 3, 4
         */
        drop(n: number): Stream<R>;

        /**
         * Extracts errors from a Stream and applies them to an error handler
         * function. Returns a new Stream with the errors removed (unless the error
         * handler chooses to rethrow them using `push`). Errors can also be
         * transformed and put back onto the Stream as values.
         *
         * @id errors
         * @section Streams
         * @name Stream.errors(f)
         * @param {Function} f - the function to pass all errors to
         * @api public
         */
        errors(f: (err: Error, push: (err: Error | null, x?: R) => void) => void): Stream<R>;

        /**
         * Creates a new Stream including only the values which pass a truth test.
         *
         * @id filter
         * @section Streams
         * @name Stream.filter(f)
         * @param f - the truth test function
         * @api public
         */
        filter<S extends R>(f: (x: R) => x is S): Stream<S>;
        filter(f: (x: R) => boolean): Stream<R>;

        /**
         * A convenient form of filter, which returns the first object from a
         * Stream that passes the provided truth test
         *
         * @id find
         * @section Streams
         * @name Stream.find(f)
         * @param {Function} f - the truth test function which returns a Stream
         * @api public
         */
        find(f: (x: R) => boolean): Stream<R>;

        /**
         * A convenient form of [where](#where), which returns the first object from a
         * Stream that matches a set of property values. findWhere is to [where](#where) as [find](#find) is to [filter](#filter).
         *
         * @id findWhere
         * @section Transforms
         * @name Stream.findWhere(props)
         * @param {Object} props - the properties to match against
         * @api public
         *
         * var docs = [
         *     {type: 'blogpost', title: 'foo'},
         *     {type: 'blogpost', title: 'bar'},
         *     {type: 'comment', title: 'foo'}
         * ];
         *
         * _(docs).findWhere({type: 'blogpost'})
         * // => {type: 'blogpost', title: 'foo'}
         *
         * // example with partial application
         * var firstBlogpost = _.findWhere({type: 'blogpost'});
         *
         * firstBlogpost(docs)
         * // => {type: 'blogpost', title: 'foo'}
         */
        findWhere(props: Partial<R>): Stream<R>;

        /**
         * A convenient form of reduce, which groups items based on a function or property name
         *
         * @id group
         * @section Streams
         * @name Stream.group(f)
         * @param {Function|String} f - the function or property name on which to group,
         *                              toString() is called on the result of a function.
         * @api public
         */
        // TODO verify this
        group(f: (x: R) => string): Stream<{[prop:string]:R[]}>;
        group(prop: string): Stream<{[prop:string]:R[]}>;

        /**
         * Creates a new Stream with only the first value from the source.
         *
         * @id head
         * @section Streams
         * @name Stream.head()
         * @api public
         *
         * _([1, 2, 3, 4]).head() // => 1
         */
        head(): Stream<R>;

        /**
         * Creates a new Stream with the separator interspersed between the elements of the source.
         *
         * `intersperse` is effectively the inverse of [splitBy](#splitBy).
         *
         * @id intersperse
         * @section Transforms
         * @name Stream.intersperse(sep)
         * @param {R} separator - the value to intersperse between the source elements
         * @api public
         */
        intersperse<U>(separator: U): Stream<R | U>;

        /**
         * Calls a named method on each object from the Stream - returning
         * a new stream with the result of those calls.
         *
         * @id invoke
         * @section Streams
         * @name Stream.invoke(method, args)
         * @param {String} method - the method name to call
         * @param {Array} args - the arguments to call the method with
         * @api public
         */
        invoke<U>(method: string, args: any[]): Stream<U>;

        /**
         * Drops all values from the Stream apart from the last one (if any).
         *
         * @id last
         * @section Streams
         * @name Stream.last()
         * @api public
         */
        last(): Stream<R>;

        /**
         * Creates a new Stream, which when read from, only returns the last
         * seen value from the source. The source stream does not experience
         * back-pressure. Useful if you're using a Stream to model a changing
         * property which you need to query periodically.
         *
         * @id latest
         * @section Streams
         * @name Stream.latest()
         * @api public
         */
        latest(): Stream<R>;

        /**
         * Creates a new Stream of transformed values by applying a function to each
         * value from the source. The transformation function can be replaced with
         * a non-function value for convenience, and it will emit that value
         * for every data event on the source Stream.
         *
         * @id map
         * @section Streams
         * @name Stream.map(f)
         * @param f - the transformation function or value to map to
         * @api public
         */
        map<U>(f: (x: R) => U): Stream<U>;

        /**
         *
         * Retrieves copies of all elements in the collection,
         * with only the whitelisted keys. If one of the whitelisted
         * keys does not exist, it will be ignored.
         *
         * @id pick
         * @section Transforms
         * @name Stream.pick(properties)
         * @param {Array} properties - property names to white filter
         * @api public
         */
        pick<Prop extends keyof R>(props: Prop[]): Stream<Pick<R, Prop>>;
        /**
         *
         * Retrieves copies of all the elements in the collection
         * that satisfy a given predicate. Note: When using ES3,
         * only enumerable elements are selected. Both enumerable
         * and non-enumerable elements are selected when using ES5.
         *
         * @id pickBy
         * @section Transforms
         * @name Stream.pickBy(f)
         * @param {Function} f - the predicate function
         * @api public
         */
        pickBy<Prop extends keyof R>(f: (key: Prop, value: R[Prop]) => boolean): Stream<Partial<R>>

        /**
         * Retrieves values associated with a given property from all elements in
         * the collection.
         *
         * @id pluck
         * @section Streams
         * @name Stream.pluck(property)
         * @param {String} prop - the property to which values should be associated
         * @api public
         */
        pluck<Prop extends keyof R>(prop: Prop): Stream<R[Prop]>;
        pluck<U>(prop: string): Stream<U>;

        /**
         * Limits number of values through the stream to a maximum of number of values
         * per window. Errors are not limited but allowed to pass through as soon as
         * they are read from the source.
         *
         * @id ratelimit
         * @section Transforms
         * @name Stream.ratelimit(num, ms)
         * @param {Number} num - the number of operations to perform per window
         * @param {Number} ms - the window of time to limit the operations in (in ms)
         * @api public
         *
         * _([1, 2, 3, 4, 5]).ratelimit(2, 100);
         *
         * // after 0ms => 1, 2
         * // after 100ms => 1, 2, 3, 4
         * // after 200ms => 1, 2, 3, 4, 5
         */
        ratelimit(num: number, ms: number): Stream<R>;

        /**
         * Boils down a Stream to a single value. The memo is the initial state
         * of the reduction, and each successive step of it should be returned by
         * the iterator function. The iterator is passed two arguments:
         * the memo and the next value.
         *
         * @id reduce
         * @section Streams
         * @name Stream.reduce(memo, iterator)
         * @param memo - the initial state of the reduction
         * @param {Function} iterator - the function which reduces the values
         * @api public
         */
        reduce<U>(memo: U, iterator: (memo: U, x: R) => U): Stream<U>;

        /**
         * Same as [reduce](#reduce), but uses the first element as the initial
         * state instead of passing in a `memo` value.
         *
         * @id reduce1
         * @section Streams
         * @name Stream.reduce1(iterator)
         * @param {Function} iterator - the function which reduces the values
         * @api public
         */
        reduce1<U>(iterator: (memo: R | U, x: R) => U): Stream<U>;

        /**
         * The inverse of [filter](#filter).
         *
         * @id reject
         * @section Streams
         * @name Stream.reject(f)
         * @param {Function} f - the truth test function
         * @api public
         *
         * var odds = _([1, 2, 3, 4]).reject(function (x) {
         *     return x % 2 === 0;
         * });
         */
        reject(f: (x: R) => boolean): Stream<R>;

        /**
         * Like [reduce](#reduce), but emits each intermediate value of the
         * reduction as it is calculated.
         *
         * @id scan
         * @section Streams
         * @name Stream.scan(memo, iterator)
         * @param memo - the initial state of the reduction
         * @param {Function} iterator - the function which reduces the values
         * @api public
         */
        scan<U>(memo: U, iterator: (memo: U, x: R) => U): Stream<U>;

        /**
         * Same as [scan](#scan), but uses the first element as the initial
         * state instead of passing in a `memo` value.
         *
         * @id scan1
         * @section Streams
         * @name Stream.scan1(iterator)
         * @param {Function} iterator - the function which reduces the values
         * @api public
         *
         * _([1, 2, 3, 4]).scan1(add) // => 1, 3, 6, 10
         */
        scan1<U>(iterator: (memo: R | U, x: R) => U): Stream<U>;

        /**
         * Creates a new Stream with the values from the source in the range of `start` (inclusive) to `end` (exclusive).
         * `start` and `end` must be of type `Number`, if `start` is not a `Number` it will default to `0`
         * and, likewise, `end` will default to `Infinity`: this could result in the whole stream being be
         * returned.
         *
         * @id slice
         * @section Transforms
         * @name Stream.slice(start, end)
         * @param {Number} start - integer representing index to start reading from source (inclusive)
         * @param {Number} end - integer representing index to stop reading from source (exclusive)
         * @api public
         */
        slice(start: number, end: number): Stream<R>;

        /**
         * Collects all values together then emits each value individually but in sorted order.
         * The method for sorting the elements is ascending lexical.
         *
         * @id sort
         * @section Transforms
         * @name Stream.sort()
         * @api public
         *
         * var sorted = _(['b', 'z', 'g', 'r']).sort().toArray(_.log);
         * // => ['b', 'g', 'r', 'z']
         */
        sort(): Stream<R>;

        /**
         * Collects all values together then emits each value individually in sorted
         * order. The method for sorting the elements is defined by the comparator
         * function supplied as a parameter.
         *
         * The comparison function takes two arguments `a` and `b` and should return
         *
         * - a negative number if `a` should sort before `b`.
         * - a positive number if `a` should sort after `b`.
         * - zero if `a` and `b` may sort in any order (i.e., they are equal).
         *
         * This function must also define a [partial
         * order](https://en.wikipedia.org/wiki/Partially_ordered_set). If it does not,
         * the resulting ordering is undefined.
         *
         * @id sortBy
         * @section Transforms
         * @name Stream.sortBy(f)
         * @param {Function} f - the comparison function
         * @api public
         */
        sortBy(f: (a: R, b: R) => number): Stream<R>;

        /**
         * [splitBy](#splitBy) over newlines.
         *
         * @id split
         * @section Transforms
         * @name Stream.split()
         * @api public
         */
        split(this: Stream<string>): Stream<string>;

        /**
         * Splits the source Stream by a separator and emits the pieces in between, much like splitting a string.
         *
         * `splitBy` is effectively the inverse of [intersperse](#intersperse).
         *
         * @id splitBy
         * @section Transforms
         * @name Stream.splitBy(sep)
         * @param {String | RegExp} sep - the separator to split on
         * @api public
         */
        splitBy(this: Stream<string>, sep: string | RegExp): Stream<string>;

        /**
         * Like the [errors](#errors) method, but emits a Stream end marker after
         * an Error is encountered.
         *
         * @id stopOnError
         * @section Streams
         * @name Stream.stopOnError(f)
         * @param {Function} f - the function to handle an error
         * @api public
         */
        stopOnError(f: (err: Error) => void): Stream<R>;

        /**
         * Creates a new Stream with the first `n` values from the source.
         *
         * @id take
         * @section Streams
         * @name Stream.take(n)
         * @param {Number} n - integer representing number of values to read from source
         * @api public
         */
        take(n: number): Stream<R>;

        /**
         * An alias for the [doto](#doto) method.
         *
         * @id tap
         * @section Transforms
         * @name Stream.tap(f)
         * @param {Function} f - the function to apply
         * @api public
         *
         * _([1, 2, 3]).tap(console.log)
         */
        tap(f: (x: R) => void): Stream<R>;

        /**
         * Ensures that only one data event is push downstream (or into the buffer)
         * every `ms` milliseconds, any other values are dropped.
         *
         * @id throttle
         * @section Streams
         * @name Stream.throttle(ms)
         * @param {Number} ms - the minimum milliseconds between each value
         * @api public
         */
        throttle(ms: number): Stream<R>;

        /**
         * Filters out all duplicate values from the stream and keeps only the first
         * occurence of each value, using === to define equality.
         *
         * @id uniq
         * @section Streams
         * @name Stream.uniq()
         * @api public
         */
        uniq(): Stream<R>;

        /**
         * Filters out all duplicate values from the stream and keeps only the first
         * occurence of each value, using the provided function to define equality.
         *
         * @id uniqBy
         * @section Streams
         * @name Stream.uniqBy()
         * @api public
         */
        uniqBy(f: (a: R, b: R) => boolean): Stream<R>;

        /**
         * A convenient form of filter, which returns all objects from a Stream
         * match a set of property values.
         *
         * @id where
         * @section Streams
         * @name Stream.where(props)
         * @param {Object} props - the properties to match against
         * @api public
         */
        where(props: Partial<R>): Stream<R>;

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // HIGHER-ORDER STREAMS
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        /**
         * Concatenates a Stream to the end of this Stream.
         *
         * Be aware that in the top-level export, the args may be in the reverse
         * order to what you'd expect `_([a], [b]) => [b, a]`, as this follows the
         * convention of other top-level exported functions which do `x` to `y`.
         *
         * @id concat
         * @section Streams
         * @name Stream.concat(ys)
         * @params {Stream | Array} ys - the values to concatenate onto this Stream
         * @api public
         */
        concat(ys: Stream<R>): Stream<R>;
        concat(ys: R[]): Stream<R>;

        /**
         * Filters using a predicate which returns a Stream. If you need to check
         * against an asynchronous data source when filtering a Stream, this can
         * be convenient. The Stream returned from the filter function should have
         * a Boolean as it's first value (all other values on the Stream will be
         * disregarded).
         *
         * @id flatFilter
         * @section Streams
         * @name Stream.flatFilter(f)
         * @param {Function} f - the truth test function which returns a Stream
         * @api public
         */
        flatFilter(f: (x: R) => Stream<boolean>): Stream<R>;

        /**
         * Creates a new Stream of values by applying each item in a Stream to an
         * iterator function which must return a (possibly empty) Stream. Each
         * item on these result Streams are then emitted on a single output Stream.
         *
         * This transform is functionally equivalent to `.map(f).sequence()`.
         *
         * @id flatMap
         * @section Streams
         * @name Stream.flatMap(f)
         * @param {Function} f - the iterator function
         * @api public
         */
        flatMap<U>(f: (x: R) => Stream<U>): Stream<U>;
        flatMap<U>(f: (x: R) => U): Stream<U>;

        /**
         * Recursively reads values from a Stream which may contain nested Streams
         * or Arrays. As values or errors are encountered, they are emitted on a
         * single output Stream.
         *
         * @id flatten
         * @section Streams
         * @name Stream.flatten()
         * @api public
         */
        flatten<U extends Flattened<R>>(): Stream<U>;

        /**
         * Forks a stream, allowing you to add additional consumers with shared
         * back-pressure. A stream forked to multiple consumers will only pull values
         * from it's source as fast as the slowest consumer can handle them.
         *
         * @id fork
         * @section Streams
         * @name Stream.fork()
         * @api public
         */
        fork(): Stream<R>;

        /**
         * Takes a Stream of Streams and merges their values and errors into a
         * single new Stream. The merged stream ends when all source streams have
         * ended.
         *
         * Note that no guarantee is made with respect to the order in which
         * values for each stream end up in the merged stream. Values in the
         * merged stream will, however, respect the order they were emitted from
         * their respective streams.
         *
         * @id merge
         * @section Streams
         * @name Stream.merge()
         * @api public
         *
         * var txt = _(['foo.txt', 'bar.txt']).map(readFile)
         * var md = _(['baz.md']).map(readFile)
         *
         * _([txt, md]).merge();
         * // => contents of foo.txt, bar.txt and baz.txt in the order they were read
         */
        merge<U>(this: Stream<Stream<U>>): Stream<U>;

        /**
         * Takes a Stream of Streams and merges their values and errors into a
         * single new Stream, limitting the number of unpaused streams that can
         * running at any one time.
         *
         * Note that no guarantee is made with respect to the order in which
         * values for each stream end up in the merged stream. Values in the
         * merged stream will, however, respect the order they were emitted from
         * their respective streams.
         *
         * @id mergeWithLimit
         * @section Higher-order Streams
         * @name Stream.mergeWithLimit(n)
         * @param {Number} n - the maximum number of streams to run in parallel
         * @api public
         *
         * var readFile = _.wrapCallback(fs.readFile);
         *
         * var txt = _(['foo.txt', 'bar.txt']).flatMap(readFile)
         * var md = _(['baz.md']).flatMap(readFile)
         * var js = _(['bosh.js']).flatMap(readFile)
         *
         * _([txt, md, js]).mergeWithLimit(2);
         * // => contents of foo.txt, bar.txt, baz.txt and bosh.js in the order
         * // they were read, but bosh.js is not read until either foo.txt and bar.txt
         * // has completely been read or baz.md has been read
         */
        mergeWithLimit<U>(this: Stream<Stream<U>>, n: number): Stream<U>;

        /**
         * Observes a stream, allowing you to handle values as they are emitted, without
         * adding back-pressure or causing data to be pulled from the source. This can
         * be useful when you are performing two related queries on a stream where one
         * would block the other. Just be aware that a slow observer could fill up it's
         * buffer and cause memory issues. Where possible, you should use [fork](#fork).
         *
         * @id observe
         * @section Streams
         * @name Stream.observe()
         * @api public
         */
        observe(): Stream<R>;

        /**
         * Switches source to an alternate Stream if the current Stream is empty.
         *
         * @id otherwise
         * @section Streams
         * @name Stream.otherwise(ys)
         * @param {Stream} ys - alternate stream to use if this stream is empty
         * @api public
         */
        otherwise(ys: Stream<R>): Stream<R>;

        /**
         * Takes a Stream of Streams and reads from them in parallel, buffering
         * the results until they can be returned to the consumer in their original
         * order.
         *
         * @id parallel
         * @section Streams
         * @name Stream.parallel(n)
         * @param {Number} n - the maximum number of concurrent reads/buffers
         * @api public
         */
        parallel<U>(this: Stream<Stream<U>>, n: number): Stream<U>

        /**
         * Reads values from a Stream of Streams, emitting them on a Single output
         * Stream. This can be thought of as a flatten, just one level deep. Often
         * used for resolving asynchronous actions such as a HTTP request or reading
         * a file.
         *
         * @id sequence
         * @section Streams
         * @name Stream.sequence()
         * @api public
         */
        sequence<U>(this: Stream<Stream<U>>): Stream<U>;
        sequence<U>(this: Stream<U[]>): Stream<U>;

        /**
         * An alias for the [sequence](#sequence) method.
         *
         * @id series
         * @section Streams
         * @name Stream.series()
         * @api public
         */
        series<U>(this: Stream<Stream<U>>): Stream<U>;
        series<U>(this: Stream<U[]>): Stream<U>;

        /**
         * Transforms a stream using an arbitrary target transform.
         *
         * If `target` is a function, this transform passes the current Stream to it,
         * returning the result.
         *
         * If `target` is a [Duplex
         * Stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex_1),
         * this transform pipes the current Stream through it. It will always return a
         * Highland Stream (instead of the piped to target directly as in
         * [pipe](#pipe)). Any errors emitted will be propagated as Highland errors.
         *
         * **TIP**: Passing a function to `through` is a good way to implement complex
         * reusable stream transforms. You can even construct the function dynamically
         * based on certain inputs. See examples below.
         *
         * @id through
         * @section Higher-order Streams
         * @name Stream.through(target)
         * @param {Function | Duplex Stream} target - the stream to pipe through or a
         * function to call.
         * @api public
         *
         * // This is a static complex transform.
         * function oddDoubler(s) {
         *     return s.filter(function (x) {
         *         return x % 2; // odd numbers only
         *     })
         *     .map(function (x) {
         *         return x * 2;
         *     });
         * }
         *
         * // This is a dynamically-created complex transform.
         * function multiplyEvens(factor) {
         *     return function (s) {
         *         return s.filter(function (x) {
         *             return x % 2 === 0;
         *         })
         *         .map(function (x) {
         *             return x * factor;
         *         });
         *     };
         * }
         *
         * _([1, 2, 3, 4]).through(oddDoubler); // => 2, 6
         *
         * _([1, 2, 3, 4]).through(multiplyEvens(5)); // => 10, 20
         *
         * // Can also be used with Node Through Streams
         * _(filenames).through(jsonParser).map(function (obj) {
         *     // ...
         * });
         *
         * // All errors will be propagated as Highland errors
         * _(['zz{"a": 1}']).through(jsonParser).errors(function (err) {
         *   console.log(err); // => SyntaxError: Unexpected token z
         * });
         */
        through<U>(f: (x: Stream<R>) => U): U;
        through(thru: NodeJS.ReadWriteStream): Stream<any>;


        /**
         * Takes two Streams and returns a Stream of corresponding pairs.
         *
         * @id zip
         * @section Streams
         * @name Stream.zip(ys)
         * @param {Array | Stream} ys - the other stream to combine values with
         * @api public
         */
        zip<U>(ys: U[]): Stream<[R, U]>;
        zip<U>(ys: Stream<U>): Stream<[R, U]>;

        /**
         * Takes a stream and a *finite* stream of `N` streams
         * and returns a stream of the corresponding `(N+1)`-tuples.
         *
         * *Note:* This transform will be renamed `zipEach` in the next major version
         * release.
         *
         * @id zipAll
         * @section Higher-order Streams
         * @name Stream.zipAll(ys)
         * @param {Array | Stream} ys - the array of streams to combine values with
         * @api public
         */
        zipAll<U>(ys: U[][]): Stream<Array<R | U>>;
        zipAll<U>(ys: Stream<U[]>): Stream<Array<R | U>>;
        zipAll<U>(ys: Stream<Stream<U>>): Stream<Array<R | U>>;

        /**
         * Takes a *finite* stream of streams and returns a stream where the first
         * element from each separate stream is combined into a single data event,
         * followed by the second elements of each stream and so on until the shortest
         * input stream is exhausted.
         *
         * *Note:* This transform will be renamed `zipAll` in the next major version
         * release.
         *
         * @id zipAll0
         * @section Higher-order Streams
         * @name Stream.zipAll0()
         * @api public
         */
        zipAll0<T>(this: Stream<Stream<T>>): Stream<T[]>;

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // CONSUMPTION
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        /**
         * Applies results from a Stream as arguments to a function
         *
         * @id apply
         * @section Streams
         * @name Stream.apply(f)
         * @param {Function} f - the function to apply arguments to
         * @api public
         */
        // TODO what to do here?
        apply(f: Function): void;

        /**
         * Calls a function once the Stream has ended. This method consumes the stream.
         * If the Stream has already ended, the function is called immediately.
         *
         * If an error from the Stream reaches this call, it will emit an `error` event
         * (i.e., it will call `emit('error')` on the stream being consumed).  This
         * event will cause an error to be thrown if unhandled.
         *
         * As a special case, it is possible to chain `done` after a call to
         * [each](#each) even though both methods consume the stream.
         *
         * @id done
         * @section Consumption
         * @name Stream.done(f)
         * @param {Function} f - the callback
         * @api public
         *
         * var total = 0;
         * _([1, 2, 3, 4]).each(function (x) {
         *     total += x;
         * }).done(function () {
         *     // total will be 10
         * });
         */
        done(f: () => void): void;

        /**
         * Iterates over every value from the Stream, calling the iterator function
         * on each of them. This function causes a **thunk**.
         *
         * If an error from the Stream reaches the `each` call, it will emit an
         * error event (which will cause it to throw if unhandled).
         *
         * @id each
         * @section Streams
         * @name Stream.each(f)
         * @param {Function} f - the iterator function
         * @api public
         */
        each(f: (x: R) => void): Pick<Stream<R>, 'done'>;

        /**
         * Pipes a Highland Stream to a [Node Writable
         * Stream](https://nodejs.org/api/stream.html#stream_class_stream_writable).
         * This will pull all the data from the source Highland Stream and write it to
         * the destination, automatically managing flow so that the destination is not
         * overwhelmed by a fast source.
         *
         * Users may optionally pass an object that may contain any of these fields:
         *
         * - `end` - Ends the destination when this stream ends. Default: `true`. This
         *   option has no effect if the destination is either `process.stdout` or
         *   `process.stderr`. Those two streams are never ended.
         *
         * Like [Readable#pipe](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options),
         * this function will throw errors if there is no `error` handler installed on
         * the stream.
         *
         * This function returns the destination so you can chain together `pipe` calls.
         *
         * **NOTE**: While Highland streams created via `_()` and [pipeline](#pipeline)
         * support being piped to, it is almost never appropriate to `pipe` from a
         * Highland stream to another Highland stream. Those two cases are meant for
         * use when piping from *Node* streams. You might be tempted to use `pipe` to
         * construct reusable transforms. Do not do it. See [through](#through) for a
         * better way.
         *
         * @id pipe
         * @section Consumption
         * @name Stream.pipe(dest, options)
         * @param {Writable Stream} dest - the destination to write all data to
         * @param {Object} options - (optional) pipe options.
         * @api public
         */
        pipe<U>(dest: Stream<U>): Stream<U>;
        pipe<U extends NodeJS.WritableStream>(dest: U, options?: { end?: boolean | undefined }): U

        /**
         * Consumes a single item from the Stream. Unlike consume, this function will
         * not provide a new stream for you to push values onto, and it will unsubscribe
         * as soon as it has a single error, value or nil from the source.
         *
         * You probably won't need to use this directly, but it is used internally by
         * some functions in the Highland library.
         *
         * @id pull
         * @section Streams
         * @name Stream.pull(f)
         * @param {Function} f - the function to handle data
         * @api public
         */
        pull(f: (err: Error, x: R | Highland.Nil) => void): void;

        /**
         * Collects all values from a Stream into an Array and calls a function with
         * once with the result. This function causes a **thunk**.
         *
         * If an error from the Stream reaches the `toArray` call, it will emit an
         * error event (which will cause it to throw if unhandled).
         *
         * @id toArray
         * @section Streams
         * @name Stream.toArray(f)
         * @param {Function} f - the callback to provide the completed Array to
         * @api public
         */
        toArray(f: (arr: R[]) => void): void;

        /**
         * Returns the result of a stream to a nodejs-style callback function.
         *
         * If the stream contains a single value, it will call `cb`
         * with the single item emitted by the stream (if present).
         * If the stream is empty, `cb` will be called without any arguments.
         * If an error is encountered in the stream, this function will stop
         * consumption and call `cb` with the error.
         * If the stream contains more than one item, it will stop consumption
         * and call `cb` with an error.
         *
         * @id toCallback
         * @section Consumption
         * @name Stream.toCallback(cb)
         * @param {Function} cb - the callback to provide the error/result to
         * @api public
         *
         * _([1, 2, 3, 4]).collect().toCallback(function (err, result) {
         *     // parameter result will be [1,2,3,4]
         *     // parameter err will be null
         * });
         */
        toCallback(cb: (err?: Error, x?: R) => void): void;

        /**
         * Converts the stream to a node Readable Stream for use in methods
         * or pipes that depend on the native stream type.
         *
         * The options parameter can be an object passed into the [`Readable`
         * constructor](https://nodejs.org/api/stream.html#stream_class_stream_readable).
         *
         * @id toNodeStream
         * @section Consumption
         * @name Stream.toNodeStream(options)
         * @param {Object} options - (optional) [`Readable` constructor](https://nodejs.org/api/stream.html#stream_class_stream_readable) options
         * @api public
         *
         * _(fs.createReadStream('./abc')).toNodeStream()
         * _(fs.createReadStream('./abc')).toNodeStream({objectMode: false})
         * _([{a: 1}]).toNodeStream({objectMode: true})
         */
        toNodeStream(options?: object): NodeJS.ReadableStream;

        /**
         * Converts the result of a stream to Promise.
         *
         * If the stream contains a single value, it will return
         * with the single item emitted by the stream (if present).
         * If the stream is empty, `undefined` will be returned.
         * If an error is encountered in the stream, this function will stop
         * consumption and call `cb` with the error.
         * If the stream contains more than one item, it will stop consumption
         * and reject with an error.
         *
         * @id toPromise
         * @section Consumption
         * @name Stream.toPromise(PromiseCtor)
         * @param {Function} PromiseCtor - Promises/A+ compliant constructor
         * @api public
         *
         * _([1, 2, 3, 4]).collect().toPromise(Promise).then(function (result) {
         *     // parameter result will be [1,2,3,4]
         * });
         */
        toPromise<P extends PromiseLike<R>>(PromiseCtor: PConstructor<R, P>): P;
    }

    interface PipeableStream<T, R> extends Stream<R> {}

    interface PipeOptions {
        end: boolean
    }

    type MappingHint = number | string[] | Function;

    interface CleanupObject {
        onDestroy?: Function | undefined;
        continueOnError?: boolean | undefined;
    }
    type OnFinished = (r: NodeJS.ReadableStream, cb: (...args: any[]) => void) => void | Function | CleanupObject;
}

declare var highland:HighlandStatic;

declare module 'highland' {
    export = highland;
}

