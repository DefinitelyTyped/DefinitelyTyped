declare namespace Stream {
	interface Stream<T> {
		/** Returns the value of the stream. */
		(): T;
		/** Sets the value of the stream. */
		(value: T): this;
		/** Creates a dependent stream whose value is set to the result of the callback function. */
		map(f: (current: T) => Stream<T> | T | void): Stream<T>;
		/** Creates a dependent stream whose value is set to the result of the callback function. */
		map<U>(f: (current: T) => Stream<U> | U): Stream<U>;
		/** This method is functionally identical to stream. It exists to conform to Fantasy Land's Applicative specification. */
		of(val?: T): Stream<T>;
		/** Apply. */
		ap<U>(f: Stream<(value: T) => U>): Stream<U>;
		/** A co-dependent stream that unregisters dependent streams when set to true. */
		end: Stream<boolean>;
		/** When a stream is passed as the argument to JSON.stringify(), the value of the stream is serialized. */
		toJSON(): string;
		/** Returns the value of the stream. */
		valueOf(): T;
	}

	interface Static {
		/** Creates a stream. */
		<T>(value?: T): Stream<T>;
		/** Creates a computed stream that reactively updates if any of its upstreams are updated. */
		combine<T>(combiner: (...streams: any[]) => T, streams: Array<Stream<any>>): Stream<T>;
		/** Creates a stream whose value is the array of values from an array of streams. */
		merge(streams: Array<Stream<any>>): Stream<any[]>;
		/** Creates a new stream with the results of calling the function on every incoming stream with and accumulator and the incoming value. */
		scan<T, U>(fn: (acc: U, value: T) => U, acc: U, stream: Stream<T>): Stream<U>;
		/** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
		scanMerge<T, U>(pairs: Array<[Stream<T>, (acc: U, value: T) => U]>, acc: U): Stream<U>;
		/** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
		scanMerge<U>(pairs: Array<[Stream<any>, (acc: U, value: any) => U]>, acc: U): Stream<U>;
		/** A special value that can be returned to stream callbacks to halt execution of downstreams. */
		readonly HALT: any;
	}
}

declare const Stream: Stream.Static;
export = Stream;
