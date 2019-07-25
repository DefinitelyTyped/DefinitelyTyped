// tslint:disable:rulename strict-export-declare-modifiers
/** Creates an empty stream. */
declare function Stream<T = any>(): Stream<T>; // tslint:disable-line no-unnecessary-generics
/** Creates a stream with an initial value. */
declare function Stream<T>(value: T): Stream<T>; // tslint:disable-line unified-signatures

declare interface Stream<T> {
	/** Returns the value of the stream. */
	(): T;
	/** Sets the value of the stream. */
	(value: T): this;
	/** Creates a dependent stream whose value is set to the result of the callback function. */
	map<U>(f: (current: T) => U): Stream<U>;
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

declare namespace Stream {
	/** Creates a computed stream that reactively updates if any of its upstreams are updated. */
	export function combine<T>(combiner: (...streams: any[]) => T, streams: Array<Stream<any>>): Stream<T>;
	/** Combines the values of one or more streams into a single stream that is updated whenever one or more of the sources are updated */
	export function lift<A, Z>(fn: (a: A) => Z, s: Stream<A>): Stream<Z>;
	export function lift<A, B, Z>(fn: (a: A, b: B) => Z, sa: Stream<A>, sb: Stream<B>): Stream<Z>;
	export function lift<A, B, C, Z>(fn: (a: A, b: B, c: C) => Z, sa: Stream<A>, sb: Stream<B>, sc: Stream<C>): Stream<Z>;
	export function lift<A, B, C, D, Z>(fn: (a: A, b: B, c: C, d: D) => Z, sa: Stream<A>, sb: Stream<B>, sc: Stream<C>, sd: Stream<D>): Stream<Z>;
	export function lift<A, B, C, D, E, Z>(fn: (a: A, b: B, c: C, d: D, e: E) => Z, sa: Stream<A>, sb: Stream<B>, sc: Stream<C>, sd: Stream<D>, se: Stream<E>): Stream<Z>;
	export function lift<A, B, C, D, E, F, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => Z, sa: Stream<A>, sb: Stream<B>, sc: Stream<C>, sd: Stream<D>, se: Stream<E>, sf: Stream<F>): Stream<Z>;
	export function lift<T>(fn: (...values: any[]) => T, ...streams: Array<Stream<any>>): Stream<T>;
	/** Creates a stream whose value is the array of values from an array of streams. */
	export function merge(streams: Array<Stream<any>>): Stream<any[]>;
	/** Creates a new stream with the results of calling the function on every incoming stream with and accumulator and the incoming value. */
	export function scan<T, U>(fn: (acc: U, value: T) => U, acc: U, stream: Stream<T>): Stream<U>;
	/** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
	export function scanMerge<T, U>(pairs: Array<[Stream<T>, (acc: U, value: T) => U]>, acc: U): Stream<U>;
	/** Takes an array of pairs of streams and scan functions and merges all those streams using the given functions into a single stream. */
	export function scanMerge<U>(pairs: Array<[Stream<any>, (acc: U, value: any) => U]>, acc: U): Stream<U>;
	/** A special value that can be returned to stream callbacks to skip execution of downstreams. */
	export const SKIP: any;
}

export = Stream;
