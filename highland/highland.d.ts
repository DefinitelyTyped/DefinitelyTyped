// Type definitions for Highland 1.14.0
// Project: http://highlandjs.org/
// Definitions by: Bart van der Schoor <https://github.com/Bartvds/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

// Note: make sure to updated both the module and instance methods

// TODO figure out curry arguments
// TODO use externalised Thenable

// TODO export module functions

/**
 * Highland: the high-level streams library
 *
 * Highland may be freely distributed under the Apache 2.0 license.
 * http://github.com/caolan/highland
 * Copyright (c) Caolan McMahon
 *
 */

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
 * `push(err, val)`, much like a standard Node.js callback. You call `next()`
 * to signal you've finished processing the current data. If the Stream is
 * still being consumed the generator function will then be called again.
 *
 * You can also redirect a generator Stream by passing a new source Stream
 * to read from to next. For example: `next(other_stream)` - then any subsequent
 * calls will be made to the new source.
 *
 * **Node Readable Stream -** Pass in a Node Readable Stream object to wrap
 * it with the Highland API. Reading from the resulting Highland Stream will
 * begin piping the data from the Node Stream to the Highland Stream.
 *
 * **EventEmitter / jQuery Elements -** Pass in both an event name and an
 * event emitter as the two arguments to the constructor and the first
 * argument emitted to the event handler will be written to the new Stream.
 *
 * **Promise -** Accepts an ES6 / jQuery style promise and returns a
 * Highland Stream which will emit a single value (or an error).
 *
 * @id _(source)
 * @section Streams
 * @name _(source)
 * @param {Array | Function | Readable Stream | Promise} source - (optional) source to take values from from
 * @api public
 *
 * // from an Array
 * _([1, 2, 3, 4]);
 *
 * // using a generator function
 * _(function (push, next) {
 *     push(null, 1);
 *     push(err);
 *     next();
 * });
 *
 * // a stream with no source, can pipe node streams through it etc.
 * var through = _();
 *
 * // wrapping a Node Readable Stream so you can easily manipulate it
 * _(readable).filter(hasSomething).pipe(writeable);
 *
 * // creating a stream from events
 * _('click', btn).each(handleEvent);
 *
 * // from a Promise object
 * var foo = _($.getJSON('/api/foo'));
 */
declare function Highland<R>(): Highland.Stream<R>;
declare function Highland<R>(xs: R[]): Highland.Stream<R>;
declare function Highland<R>(xs: (push: (err: Error, x?: R) => void, next: () => void) => void): Highland.Stream<R>;
declare function Highland<R>(xs: Highland.Stream<R>): Highland.Stream<R>;

declare function Highland<R>(xs: ReadableStream): Highland.Stream<R>;
declare function Highland<R>(xs: NodeEventEmitter): Highland.Stream<R>;

declare function Highland<R>(xs: Highland.Thenable<Highland.Stream<R>>): Highland.Stream<R>;
declare function Highland<R>(xs: Highland.Thenable<R[]>): Highland.Stream<R>;

declare module Highland {

	interface Thenable<R> {
		then<U>(onFulfilled: (value: R) => Thenable<U>,  onRejected: (error: any) => Thenable<U>): Thenable<U>;
		then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Thenable<U>;
		then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>): Thenable<U>;
		then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>;
	}

	/**
	 * The end of stream marker. This is sent along the data channel of a Stream
	 * to tell consumers that the Stream has ended. See the following map code for
	 * an example of detecting the end of a Stream:
	 *
	 * @id nil
	 * @section Streams
	 * @name _.nil
	 * @api public
	 *
	 * var map(iter, source) {
	 *     return source.consume(function (err, val, push, next) {
	 *         if (err) {
	 *             push(err);
	 *             next();
	 *         }
	 *         else if (val === _.nil) {
	 *             push(null, val);
	 *         }
	 *         else {
	 *             push(null, iter(val));
	 *             next();
	 *         }
	 *     });
	 * };
	 */
	var nil: Nil;

	// hacky unique
	// TODO do we need this?
	interface Nil {
		Highland_NIL: Nil;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
	 *
	 * fn = curry(function (a, b, c) {
	 *     return a + b + c;
	 * });
	 *
	 * fn(1)(2)(3) == fn(1, 2, 3)
	 * fn(1, 2)(3) == fn(1, 2, 3)
	 * fn(1)(2, 3) == fn(1, 2, 3)
	 */
	function curry(fn: Function, ...args: any[]): Function;

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
	 *
	 * fn = ncurry(3, function () {
	 *     return Array.prototype.join.call(arguments, '.');
	 * });
	 *
	 * fn(1, 2, 3) == '1.2.3';
	 * fn(1, 2)(3) == '1.2.3';
	 * fn(1)(2)(3) == '1.2.3';
	 */
	function ncurry(n: number, fn: Function, ...args: any[]): Function;

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
	 *
	 * var addAll = function () {
	 *     var args = Array.prototype.slice.call(arguments);
	 *     return foldl1(add, args);
	 * };
	 * var f = partial(addAll, 1, 2);
	 * f(3, 4) == 10
	 */
	function partial(f: Function, ...args: any[]): Function;

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
	 *
	 * div(2, 4) == 0.5
	 * flip(div, 2, 4) == 2
	 * flip(div)(2, 4) == 2
	 */
	function flip(fn: Function, ...args: any[]): Function;

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
	 *
	 * var add1 = add(1);
	 * var mul3 = mul(3);
	 *
	 * var add1mul3 = compose(mul3, add1);
	 * add1mul3(2) == 9
	 */
	function compose(...functions: Function[]): Function;

	/**
	 * The reversed version of compose. Where arguments are in the order of
	 * application.
	 *
	 * @id seq
	 * @name seq(fn1, fn2, ...)
	 * @section Functions
	 * @api public
	 *
	 * var add1 = add(1);
	 * var mul3 = mul(3);
	 *
	 * var add1mul3 = seq(add1, mul3);
	 * add1mul3(2) == 9
	 */
	function seq(...functions: Function[]): Function;

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
	 * Returns true if `x` is a Highland Stream.
	 *
	 * @id isStream
	 * @section Streams
	 * @name _.isStream(x)
	 * @param x - the object to test
	 * @api public
	 *
	 * _.isStream('foo')  // => false
	 * _.isStream(_([1,2,3]))  // => true
	 */
	function isStream(x: any): boolean;

	function isStreamError(x: any): boolean;

	function isStreamRedirect(x: any): boolean;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Actual Stream constructor wrapped the the main exported function
	 */
	interface Stream<R> extends NodeEventEmitter {

		/**
		 * Pauses the stream. All Highland Streams start in the paused state.
		 *
		 * @id pause
		 * @section Streams
		 * @name Stream.pause()
		 * @api public
		 *
		 * var xs = _(generator);
		 * xs.pause();
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
		 *
		 * var xs = _(generator);
		 * xs.resume();
		 */
		resume(): void;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		/**
		 * Ends a Stream. This is the same as sending a [nil](#nil) value as data.
		 * You shouldn't need to call this directly, rather it will be called by
		 * any [Node Readable Streams](http://nodejs.org/api/stream.html#stream_class_stream_readable)
		 * you pipe in.
		 *
		 * @id end
		 * @section Streams
		 * @name Stream.end()
		 * @api public
		 *
		 * mystream.end();
		 */
		end(): void;

		/**
		 * Pipes a Highland Stream to a [Node Writable Stream](http://nodejs.org/api/stream.html#stream_class_stream_writable)
		 * (Highland Streams are also Node Writable Streams). This will pull all the
		 * data from the source Highland Stream and write it to the destination,
		 * automatically managing flow so that the destination is not overwhelmed
		 * by a fast source.
		 *
		 * This function returns the destination so you can chain together pipe calls.
		 *
		 * @id pipe
		 * @section Streams
		 * @name Stream.pipe(dest)
		 * @param {Writable Stream} dest - the destination to write all data to
		 * @api public
		 *
		 * var source = _(generator);
		 * var dest = fs.createWriteStream('myfile.txt')
		 * source.pipe(dest);
		 *
		 * // chained call
		 * source.pipe(through).pipe(dest);
		 */
		pipe<U>(dest: Stream<U>): Stream<U>;
		pipe<U>(dest: ReadWriteStream): Stream<U>;
		pipe(dest: WritableStream): void;

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

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * var filter = function (f, source) {
		 *     return source.consume(function (err, x, push, next) {
		 *         if (err) {
		 *             // pass errors along the stream and consume next value
		 *             push(err);
		 *             next();
		 *         }
		 *         else if (x === _.nil) {
		 *             // pass nil (end event) along the stream
		 *             push(null, x);
		 *         }
		 *         else {
		 *             // pass on the value only if the value passes the predicate
		 *             if (f(x)) {
		 *                 push(null, x);
		 *             }
		 *             next();
		 *         }
		 *     });
		 * };
		 */
		consume<U>(f: (err: Error, x: R, push: (err: Error, value?: U) => void, next: () => void) => void): Stream<U>;

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
		 *
		 * xs.pull(function (err, x) {
		 *     // do something
		 * });
		 */
		pull(f: (err: Error, x: R) => void): void;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		/**
		 * Writes a value to the Stream. If the Stream is paused it will go into the
		 * Stream's incoming buffer, otherwise it will be immediately processed and
		 * sent to the Stream's consumers (if any). Returns false if the Stream is
		 * paused, true otherwise. This lets Node's pipe method handle back-pressure.
		 *
		 * You shouldn't need to call this yourself, but it may be called by Node
		 * functions which treat Highland Streams as a [Node Writable Stream](http://nodejs.org/api/stream.html#stream_class_stream_writable).
		 *
		 * @id write
		 * @section Streams
		 * @name Stream.write(x)
		 * @param x - the value to write to the Stream
		 * @api public
		 *
		 * var xs = _();
		 * xs.write(1);
		 * xs.write(2);
		 * xs.end();
		 *
		 * xs.toArray(function (ys) {
		 *     // ys will be [1, 2]
		 * });
		 */
		write(x: R): boolean;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		/**
		 * Forks a stream, allowing you to add additional consumers with shared
		 * back-pressure. A stream forked to multiple consumers will only pull values
		 * from it's source as fast as the slowest consumer can handle them.
		 *
		 * @id fork
		 * @section Streams
		 * @name Stream.fork()
		 * @api public
		 *
		 * var xs = _([1, 2, 3, 4]);
		 * var ys = xs.fork();
		 * var zs = xs.fork();
		 *
		 * // no values will be pulled from xs until zs also resume
		 * ys.resume();
		 *
		 * // now both ys and zs will get values from xs
		 * zs.resume();
		 */
		fork(): Stream<R>;

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
		 *
		 * var xs = _([1, 2, 3, 4]);
		 * var ys = xs.fork();
		 * var zs = xs.observe();
		 *
		 * // now both zs and ys will recieve data as fast as ys can handle it
		 * ys.resume();
		 */
		observe(): Stream<R>;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * getDocument.errors(function (err, push) {
		 *     if (err.statusCode === 404) {
		 *         // not found, return empty doc
		 *         push(null, {});
		 *     }
		 *     else {
		 *         // otherwise, re-throw the error
		 *         push(err);
		 *     }
		 * });
		 */
		errors(f: (err: Error, push: (err: Error, x?: R) => void) => void): Stream<R>;

		// function errors(f: (err: Error, push: (err: Error, x?: R) => void) => void): Stream<R>;

		/**
		 * Like the [errors](#errors) method, but emits a Stream end marker after
		 * an Error is encountered.
		 *
		 * @id stopOnError
		 * @section Streams
		 * @name Stream.stopOnError(f)
		 * @param {Function} f - the function to handle an error
		 * @api public
		 *
		 * brokenStream.stopOnError(function (err) {
		 *     console.error('Something broke: ' + err);
		 * });
		 */
		stopOnError(f: (err: Error) => void): Stream<R>;

		// function stopOnError(f: (err: Error) => void): Stream<R>;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * _([1, 2, 3, 4]).each(function (x) {
		 *     // will be called 4 times with x being 1, 2, 3 and 4
		 * });
		 */
		each(f: (x: R) => void): void;

		// function each(f: (x: R) => void): void;

		/**
		 * Applies results from a Stream as arguments to a function
		 *
		 * @id apply
		 * @section Streams
		 * @name Stream.apply(f)
		 * @param {Function} f - the function to apply arguments to
		 * @api public
		 *
		 * _([1, 2, 3]).apply(function (a, b, c) {
		 *     // a === 1
		 *     // b === 2
		 *     // c === 3
		 * });
		 */
		// TODO what to do here?
		apply(f: Function): void;

		//function apply(f:Function): Stream;

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
		 *
		 * _([1, 2, 3, 4]).each(function (x) {
		 *     // will be called 4 times with x being 1, 2, 3 and 4
		 * });
		 */
		toArray(f: (arr: R[]) => void): void;

		//function toArray(f:(arr:any[]) => void): void;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * var doubled = _([1, 2, 3, 4]).map(function (x) {
		 *     return x * 2;
		 * });
		 *
		 * _([1, 2, 3]).map('hi')  // => 'hi', 'hi', 'hi'
		 */
		map<U>(f: (x: R) => U): Stream<U>;

		//function map(f:(arr:any) => any): Stream;

		/**
		 * Creates a new Stream of values by applying each item in a Stream to an
		 * iterator function which may return a Stream. Each item on these result
		 * Streams are then emitted on a single output Stream.
		 *
		 * The same as calling `stream.map(f).flatten()`.
		 *
		 * @id flatMap
		 * @section Streams
		 * @name Stream.flatMap(f)
		 * @param {Function} f - the iterator function
		 * @api public
		 *
		 * filenames.flatMap(readFile)
		 */
		flatMap<U>(f: (x: R) => Stream<U>): Stream<U>;
		flatMap<U>(f: (x: R) => U): Stream<U>;

		// function flatMap(f:(arr:any) => any): Stream;

		/**
		 * Retrieves values associated with a given property from all elements in
		 * the collection.
		 *
		 * @id pluck
		 * @section Streams
		 * @name Stream.pluck(property)
		 * @param {String} prop - the property to which values should be associated
		 * @api public
		 *
		 * var docs = [
		 *     {type: 'blogpost', title: 'foo'},
		 *     {type: 'blogpost', title: 'bar'},
		 *     {type: 'comment', title: 'baz'}
		 * ];
		 *
		 * _(docs).pluck('title').toArray(function (xs) {
		 *    // xs is now ['foo', 'bar', 'baz']
		 * });
		 */
		// forced parametrise?
		pluck<U>(prop: string): Stream<U>;

		// function pluck(prop:string): Stream;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		/**
		 * Creates a new Stream including only the values which pass a truth test.
		 *
		 * @id filter
		 * @section Streams
		 * @name Stream.filter(f)
		 * @param f - the truth test function
		 * @api public
		 *
		 * var evens = _([1, 2, 3, 4]).filter(function (x) {
		 *     return x % 2 === 0;
		 * });
		 */
		filter(f: (x: R) => boolean): Stream<R>;

		// function filter(f:(arr:any) => boolean): Stream;

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
		 *
		 * var checkExists = _.wrapCallback(fs.exists);
		 * filenames.flatFilter(checkExists)
		 */
		flatFilter(f: (x: R) => Stream<boolean>): Stream<R>;

		// function flatFilter(): Stream;

		/**
		 * A convenient form of filter, which returns the first object from a
		 * Stream that passes the provided truth test
		 *
		 * @id find
		 * @section Streams
		 * @name Stream.find(f)
		 * @param {Function} f - the truth test function which returns a Stream
		 * @api public
		 *
		 * var docs = [
		 *     {type: 'blogpost', title: 'foo'},
		 *     {type: 'blogpost', title: 'bar'},
		 *     {type: 'comment', title: 'foo'}
		 * ];
		 *
		 * var f(x) {
		 *     return x.type == 'blogpost';
		 * };
		 *
		 * _(docs).find(f);
		 * // => [{type: 'blogpost', title: 'foo'}]
		 *
		 * // example with partial application
		 * var firstBlogpost = _.find(f);
		 *
		 * firstBlogpost(docs)
		 * // => [{type: 'blogpost', title: 'foo'}]
		 */
		find(f: (x: R) => boolean): Stream<R>;

		// function find(): Stream;

		/**
		 * A convenient form of reduce, which groups items based on a function or property name
		 *
		 * @id group
		 * @section Streams
		 * @name Stream.group(f)
		 * @param {Function|String} f - the function or property name on which to group,
		 *                              toString() is called on the result of a function.
		 * @api public
		 *
		 * var docs = [
		 *     {type: 'blogpost', title: 'foo'},
		 *     {type: 'blogpost', title: 'bar'},
		 *     {type: 'comment', title: 'foo'}
		 * ];
		 *
		 * var f(x) {
		 *     return x.type;
		 * };
		 *
		 * _(docs).group(f); OR _(docs).group('type');
		 * // => {
		 * // =>    'blogpost': [{type: 'blogpost', title: 'foo'}, {type: 'blogpost', title: 'bar'}]
		 * // =>    'comment': [{type: 'comment', title: 'foo'}]
		 * // =>  }
		 *
		 */
		// TODO verify this
		group(f: (x: R) => string): Stream<{[prop:string]:R[]}>;
		group(prop: string): Stream<{[prop:string]:R[]}>;

		// function group(): Stream;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

		/**
		 * Filters a Stream to drop all non-truthy values.
		 *
		 * @id compact
		 * @section Streams
		 * @name Stream.compact()
		 * @api public
		 *
		 * var compacted = _([0, 1, false, 3, null, undefined, 6]).compact();
		 * // => [1, 3, 6]
		 */
		compact(): Stream<R>;

		// function compact(): Stream;

		/**
		 * A convenient form of filter, which returns all objects from a Stream
		 * match a set of property values.
		 *
		 * @id where
		 * @section Streams
		 * @name Stream.where(props)
		 * @param {Object} props - the properties to match against
		 * @api public
		 *
		 * var docs = [
		 *     {type: 'blogpost', title: 'foo'},
		 *     {type: 'blogpost', title: 'bar'},
		 *     {type: 'comment', title: 'foo'}
		 * ];
		 *
		 * _(docs).where({title: 'foo'})
		 * // => {type: 'blogpost', title: 'foo'}
		 * // => {type: 'comment', title: 'foo'}
		 *
		 * // example with partial application
		 * var getBlogposts = _.where({type: 'blogpost'});
		 *
		 * getBlogposts(docs)
		 * // => {type: 'blogpost', title: 'foo'}
		 * // => {type: 'blogpost', title: 'bar'}
		 */
		where(props: Object): Stream<R>;

		// function where(): Stream;

		/**
		 * Takes two Streams and returns a Stream of corresponding pairs.
		 *
		 * @id zip
		 * @section Streams
		 * @name Stream.zip(ys)
		 * @param {Array | Stream} ys - the other stream to combine values with
		 * @api public
		 *
		 * _(['a', 'b', 'c']).zip([1, 2, 3])  // => ['a', 1], ['b', 2], ['c', 3]
		 */
		zip(ys: R[]): Stream<R>;
		zip(ys: Stream<R>): Stream<R>;

		// function zip(): Stream;

		/**
		 * Creates a new Stream with the first `n` values from the source.
		 *
		 * @id take
		 * @section Streams
		 * @name Stream.take(n)
		 * @param {Number} n - integer representing number of values to read from source
		 * @api public
		 *
		 * _([1, 2, 3, 4]).take(2) // => 1, 2
		 */
		take(n: number): Stream<R>;

		// function take(): Stream;

		/**
		 * Drops all values from the Stream apart from the last one (if any).
		 *
		 * @id last
		 * @section Streams
		 * @name Stream.last()
		 * @api public
		 *
		 * _([1, 2, 3, 4]).last()  // => 4
		 */
		last(): Stream<R>;

		// function last(): Stream;

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
		 *
		 * var nums = _([
		 *     _([1, 2, 3]),
		 *     _([4, 5, 6])
		 * ]);
		 *
		 * nums.sequence()  // => 1, 2, 3, 4, 5, 6
		 *
		 * // using sequence to read from files in series
		 * filenames.map(readFile).sequence()
		 */
		//TODO figure out typing
		sequence<U>(): Stream<U>;

		// function sequence(): Stream;

		/**
		 * An alias for the [sequence](#sequence) method.
		 *
		 * @id series
		 * @section Streams
		 * @name Stream.series()
		 * @api public
		 *
		 * filenames.map(readFile).series()
		 */
		// TODO figure out typing
		series<U>(): Stream<U>;

		// function series = _.sequence;

		/**
		 * Recursively reads values from a Stream which may contain nested Streams
		 * or Arrays. As values or errors are encountered, they are emitted on a
		 * single output Stream.
		 *
		 * @id flatten
		 * @section Streams
		 * @name Stream.flatten()
		 * @api public
		 *
		 * _([1, [2, 3], [[4]]]).flatten();  // => 1, 2, 3, 4
		 *
		 * var nums = _(
		 *     _([1, 2, 3]),
		 *     _([4, _([5, 6]) ])
		 * );
		 *
		 * nums.flatten();  // => 1, 2, 3, 4, 5, 6
		 */
		flatten<U>(): Stream<U>;
		flatten(): Stream<R>;

		// function flatten(): Stream;

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
		 *
		 * var readFile = _.wrapCallback(fs.readFile);
		 * var filenames = _(['foo.txt', 'bar.txt', 'baz.txt']);
		 *
		 * // read from up to 10 files at once
		 * filenames.map(readFile).parallel(10);
		 */
		parallel(n: number): Stream<R>;

		// function parallel(): Stream;

		/**
		 * Switches source to an alternate Stream if the current Stream is empty.
		 *
		 * @id otherwise
		 * @section Streams
		 * @name Stream.otherwise(ys)
		 * @param {Stream} ys - alternate stream to use if this stream is empty
		 * @api public
		 *
		 * _([1,2,3]).otherwise(['foo'])  // => 1, 2, 3
		 * _([]).otherwise(['foo'])       // => 'foo'
		 *
		 * _.otherwise(_(['foo']), _([1,2,3]))    // => 1, 2, 3
		 * _.otherwise(_(['foo']), _([]))         // => 'foo'
		 */
		otherwise(ys: Stream<R>): Stream<R>;

		// function otherwise(): Stream;

		/**
		 * Adds a value to the end of a Stream.
		 *
		 * @id append
		 * @section Streams
		 * @name Stream.append(y)
		 * @param y - the value to append to the Stream
		 * @api public
		 *
		 * _([1, 2, 3]).append(4)  // => 1, 2, 3, 4
		 */
		append(y: R): Stream<R>;

		// function append(): Stream;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * var add = function (a, b) {
		 *     return a + b;
		 * };
		 *
		 * _([1, 2, 3, 4]).reduce(0, add)  // => 10
		 */
		// TODO: convert this to this.scan(z, f).last()
		reduce<U>(memo: U, f: (memo: U, x: R) => U): Stream<U>;

		// function reduce(): Stream;

		/**
		 * Same as [reduce](#reduce), but uses the first element as the initial
		 * state instead of passing in a `memo` value.
		 *
		 * @id reduce1
		 * @section Streams
		 * @name Stream.reduce1(iterator)
		 * @param {Function} iterator - the function which reduces the values
		 * @api public
		 *
		 * _([1, 2, 3, 4]).reduce1(add)  // => 10
		 */
		reduce1<U>(memo: U, f: (memo: U, x: R) => U): Stream<U>;

		// function reduce1(): Stream;

		/**
		 * Groups all values into an Array and passes down the stream as a single
		 * data event. This is a bit like doing [toArray](#toArray), but instead
		 * of accepting a callback and causing a *thunk*, it passes the value on.
		 *
		 * @id collect
		 * @section Streams
		 * @name Stream.collect()
		 * @api public
		 *
		 * _(['foo', 'bar']).collect().toArray(function (xs) {
		 *     // xs will be [['foo', 'bar']]
		 * });
		 */
		collect(): Stream<R[]>;

		// function collect(): Stream;

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
		 *
		 * _([1, 2, 3, 4]).scan(0, add)  // => 0, 1, 3, 6, 10
		 */
		scan<U>(memo: U, x: (memo: U, x: R) => U): Stream<U>;

		//function scan(): Stream;

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
		 *
		 * _([1, 2]).concat([3, 4])  // => 1, 2, 3, 4
		 * _.concat([3, 4], [1, 2])  // => 1, 2, 3, 4
		 */
		concat(ys: Stream<R>): Stream<R>;
		concat(ys: R[]): Stream<R>;

		// function concat(): Stream;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * _(['foo', 'bar']).invoke('toUpperCase', [])  // => FOO, BAR
		 *
		 * filenames.map(readFile).sequence().invoke('toString', ['utf8']);
		 */
		invoke<U>(method: string, args: any[]): Stream<U>;

		// function invoke(): Stream;

		/**
		 * Ensures that only one data event is push downstream (or into the buffer)
		 * every `ms` milliseconds, any other values are dropped.
		 *
		 * @id throttle
		 * @section Streams
		 * @name Stream.throttle(ms)
		 * @param {Number} ms - the minimum milliseconds between each value
		 * @api public
		 *
		 * _('mousemove', document).throttle(1000);
		 */
		throttle(ms: number): Stream<R>;

		// function throttle(ms:number): Stream;

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
		 *
		 * // sends last keyup event after user has stopped typing for 1 second
		 * $('keyup', textbox).debounce(1000);
		 */
		debounce(ms: number): Stream<R>;

		// function debounce(ms:number): Stream;

		// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
		 *
		 * // slowThing will always get the last known mouse position
		 * // when it asks for more data from the mousePosition stream
		 * mousePosition.latest().map(slowThing)
		 */
		latest(): Stream<R>;

		// function latest(): Stream;
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
	 *
	 * _.values({foo: 1, bar: 2, baz: 3})  // => 1, 2, 3
	 */
	function values(obj: Object): Stream<any>;

	/**
	 * Returns keys from an Object as a Stream.
	 *
	 * @id keys
	 * @section Objects
	 * @name _.keys(obj)
	 * @param {Object} obj - the object to return keys from
	 * @api public
	 *
	 * _.keys({foo: 1, bar: 2, baz: 3})  // => 'foo', 'bar', 'baz'
	 */
	function keys(obj: Object): Stream<string>;

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
	 *
	 * _.pairs({foo: 1, bar: 2})  // => ['foo', 1], ['bar', 2]
	 */
	function pairs(obj: Object): Stream<any[]>;

	function pairs(obj: any[]): Stream<any[]>;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
	 *
	 * _.extend({name: 'bar'}, {name: 'foo', price: 20})
	 * // => {name: 'bar', price: 20}
	 *
	 * // example of partial application
	 * var publish = _.extend({published: true});
	 *
	 * publish({title: 'test post'})
	 * // => {title: 'test post', published: true}
	 */
	function extend(extensions: Object, target: Object): Object;

	function extend(target: Object): (extensions: Object) => Object;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Returns a property from an object.
	 *
	 * @id get
	 * @section Objects
	 * @name _.get(prop, obj)
	 * @param {String} prop - the property to return
	 * @param {Object} obj - the object to read properties from
	 * @api public
	 *
	 * var obj = {foo: 'bar', baz: 123};
	 * _.get('foo', obj) // => 'bar'
	 *
	 * // making use of partial application
	 * var posts = [
	 *   {title: 'one'},
	 *   {title: 'two'},
	 *   {title: 'three'}
	 * ];
	 *
	 * _(posts).map(_.get('title'))  // => 'one', 'two', 'three'
	 */
	function get(prop: string, obj: Object): string;

	function get(prop: string): (obj: Object) => Object;

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
	 *
	 * var obj = {foo: 'bar', baz: 123};
	 * _.set('foo', 'wheeee', obj) // => {foo: 'wheeee', baz: 123}
	 *
	 * // making use of partial application
	 * var publish = _.set('published', true);
	 *
	 * publish({title: 'example'})  // => {title: 'example', published: true}
	 */
	function set(prop: string, val: any, obj: Object): Object;

	function set(prop: string, val: any): (obj: Object) => Object;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Logs values to the console, a simple wrapper around `console.log` that
	 * it suitable for passing to other functions by reference without having to
	 * call `bind`.
	 *
	 * @id log
	 * @section Utils
	 * @name _.log(args..)
	 * @api public
	 *
	 * _.log('Hello, world!');
	 *
	 * _([1, 2, 3, 4]).each(_.log);
	 */
	function log(x: any, ...args: any[]): void;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Wraps a node-style async function which accepts a callback, transforming
	 * it to a function which accepts the same arguments minus the callback and
	 * returns a Highland Stream instead. Only the first argument to the
	 * callback (or an error) will be pushed onto the Stream.
	 *
	 * @id wrapCallback
	 * @section Utils
	 * @name _.wrapCallback(f)
	 * @param {Function} f - the node-style function to wrap
	 * @api public
	 *
	 * var fs = require('fs');
	 *
	 * var readFile = _.wrapCallback(fs.readFile);
	 *
	 * readFile('example.txt').apply(function (data) {
	 *     // data is now the contents of example.txt
	 * });
	 */
	function wrapCallback(f: Function): Function;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Add two values. Can be partially applied.
	 *
	 * @id add
	 * @section Operators
	 * @name _.add(a, b)
	 * @api public
	 *
	 * add(1, 2) === 3
	 * add(1)(5) === 6
	 */
	function add(a: number, b: number): number;

	function add(a: number): (b: number) => number;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
declare module 'highland' {
export = Highland;
}
