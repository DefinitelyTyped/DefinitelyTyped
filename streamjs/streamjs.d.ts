// Type definitions for streamjs 1.4.0
// Project: http://streamjs.org/
// Definitions by: Bence Eros <https://github.com/erosb>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Stream<T> {
	// static make <T> (...elems: T[]): Stream<T>;
	static make <T> (elems: T[]): Stream<T>;
	static range (startInclusive: number, endExclusive: number): Stream<number>;
	static rangeClosed (startInclusive: number, endInclusive: number): Stream<number>;
	static generate <T> (supplier: () => T): Stream<T>;
	
	distinct(): Stream<T>;
	dropWhile(predicate: (elem: T) => boolean): Stream<T>;
	dropWhile(regexp: RegExp): Stream<string>;
	filter(predicate: (T) => boolean): Stream<T>;
	map <U> (mapper: (T) => U): Stream<U>;
	flatMap <U> (mapper: (T) => U[]): Stream<U>;
	limit(limit: number): Stream<T>;
	peek(consumer: (elem: T) => void ): Stream<T>;
	reverse(): Stream<T>;
	sorted(): Stream<T>;
	sorted(comparator: (e1: T, e2: T) => number): Stream<T>;
	sort(): Stream<T>;
	sort(comparator: (e1: T, e2: T) => number): Stream<T>;
	shuffle(): Stream<T>;
	skip(n: number): Stream<T>;
	slice(begin, end): Stream<T>;
	takeWhile(predicate: (elem: T) => boolean): Stream<T>;
	takeWhile(regexp: RegExp): Stream<string>;
	toArray(): T[];
}
