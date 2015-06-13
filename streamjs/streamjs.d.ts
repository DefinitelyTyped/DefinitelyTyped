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
	// static empty<T>(): Stream<T>;
	
	anyMatch(predicate: (elem: T) => boolean): boolean;
	anyMatch(regexp: RegExp): boolean;
	allMatch(predicate: (elem: T) => boolean): boolean;
	allMatch(regexp: RegExp): boolean;
	average(): number;
	avg(): number;
	collect(collector: Stream.Collector<T>): T;
	count(): number;
	distinct(): Stream<T>;
	dropWhile(predicate: (elem: T) => boolean): Stream<T>;
	dropWhile(regexp: RegExp): Stream<string>;
	filter(predicate: (T) => boolean): Stream<T>;
	findAny(): Stream.Optional<T>;
	findFirst(): Stream.Optional<T>;
	forEach(consumer: (elem: T) => void): void;
	
	groupBy(mapper: (elem: T) => string): Stream.GroupingResult<T>;
	groupingBy(mapper: (elem: T) => string): Stream.GroupingResult<T>;
	indexBy(keyMapper: (elem: T) => string, mergeFunction?: (elem1: T, elem2: T) => T): T[];
	map <U> (mapper: (T) => U): Stream<U>;
	max(): Stream.Optional<T>;
	max(comparator: (e1: T, e2: T) => number): Stream.Optional<T>;
	min(): Stream.Optional<T>;
	min(comparator: (elem1: T, elem2: T) => number): Stream.Optional<T>;
	noneMatch(predicate: (elem: T) => boolean): boolean;
	noneMatch(regexp: RegExp): boolean;
	flatMap <U> (mapper: (T) => U[]): Stream<U>;
	iterator(): Stream.Iterator<T>;
	joining(): string;
	joining(delimiter: string): string;
	joining(options: Stream.JoinOptions): string;
	join(): string;
	join(delimiter: string): string;
	join(options: Stream.JoinOptions): string;
	limit(limit: number): Stream<T>;
	partitioningBy(predicate: (elem: T) => boolean): T[][];
	partitionBy(predicate: (elem: T) => boolean): T[][];
	partitioningBy(regexp: RegExp): T[][];
	partitionBy(regexp: RegExp): T[][];
	partitioningBy(size: number): T[][];
	partitionBy(size: number): T[][];
	peek(consumer: (elem: T) => void ): Stream<T>;
	reduce(identity: T, accumulator: (e1: T, e2: T) => T): T;
	reduce(accumulator: (e1: T, e2: T) => T): Stream.Optional<T>;
	reverse(): Stream<T>;
	size(): number;
	sorted(): Stream<T>;
	sorted(comparator: (e1: T, e2: T) => number): Stream<T>;
	sort(): Stream<T>;
	sort(comparator: (e1: T, e2: T) => number): Stream<T>;
	shuffle(): Stream<T>;
	skip(n: number): Stream<T>;
	slice(begin, end): Stream<T>;
	sum(): T;
	takeWhile(predicate: (elem: T) => boolean): Stream<T>;
	takeWhile(regexp: RegExp): Stream<string>;
	toArray(): T[];
	toMap(keyMapper: (elem: T) => string, mergeFunction?: (elem1: T, elem2: T) => T): T[];
}

declare module Stream {

	export interface Iterator<T> {
		next(): T;
		done: boolean;
	}

	export interface JoinOptions {
		prefix: string;
		delimiter: string;
		suffix: string;
	}

	export interface GroupingResult<T> {
		[index: string]: T
	}

	export interface Collector<T> {
		supplier(): T;
		accumulator(e1: T, e2: T): T;
		finisher(result: T): T
	}

	export class Optional<T> {
		static of<T>(elem: T): Optional<T>;
		static ofNullable<T>(elem: T): Optional<T>;
		static empty<T>(): Optional<T>;
		
		filter(predicate: (elem: T) => boolean): Optional<T>;
		map<U>(mapper: (elem: T) => U): Optional<U>;
		flatMap<U>(mapper: (elem: T) => Stream.Optional<U>): Optional<U>;
	}
}
