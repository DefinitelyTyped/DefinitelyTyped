// Type definitions for streamjs 1.4.0
// Project: http://streamjs.org/
// Definitions by: Bence Eros <https://github.com/erosb>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Stream<T> {
	static make<T> (...elems: T[]): Stream<T>;
	static make<T>(elems: T[]): Stream<T>;
	static range<T>(startInclusive: number, endExclusive: number): Stream<T>;
	static rangeClosed<T>(startInclusive: number, endInclusive: number): Stream<T>;
	static generate<T>(supplier: () => T): Stream<T>;
}
