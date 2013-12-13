///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-Aggregates package
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.aggregates.js

declare module Rx {
	export interface Observable<T> {
		aggregate<TAcc>(accumulator: (acc: TAcc, value: T) => TAcc): Observable<TAcc>;
		aggregate<TAcc>(seed: TAcc, accumulator: (acc: TAcc, value: T) => TAcc): Observable<TAcc>;

		any(): Observable<boolean>;
		any(selector: (item: T) => boolean): Observable<boolean>;

		isEmpty(predicate?: (value: T) => boolean): Observable<boolean>;
		all(predicate?: (value: T) => boolean): Observable<boolean>;
		contains(value: T, comparer?: (value1: T, value2: T) => boolean): Observable<boolean>;
		count(predicate?: (item: T) => boolean): Observable<number>;
		sum(keySelector?: (item: T) => number): Observable<number>;
		minBy(keySelector: (item: T) => number, comparer?: (value1: T, value2: T) => number): Observable<T>;
		min(comparer?: (value1: T, value2: T) => number): Observable<T>;
		maxBy(keySelector: (item: T) => number, comparer?: (value1: T, value2: T) => number): Observable<T>;
		max(comparer?: (value1: T, value2: T) => number): Observable<number>;
		average(keySelector?: (item: T) => number): Observable<number>;

		sequenceEqual(second: Observable<T>, comparer?: (value1: T, value2: T) => number): Observable<T>;
		elementAt(index: number): Observable<T>;
		elementAtOrDefault(index: number, defaultValue: T): Observable<T>;

		single(): Observable<T>;
		single(predicate: (item: T) => boolean): Observable<T>;
		singleOrDefault(): Observable<T>;
		singleOrDefault(predicate: (item: T) => boolean): Observable<T>;
		singleOrDefault(predicate: (item: T) => boolean, defaultValue: T): Observable<T>;

		first(): Observable<T>;
		first(predicate: (item: T) => boolean): Observable<T>;
		firstOrDefault(): Observable<T>;
		firstOrDefault(predicate: (item: T) => boolean): Observable<T>;
		firstOrDefault(predicate: (item: T) => boolean, defaultValue: T): Observable<T>;

		last(): Observable<T>;
		last(predicate: (item: T) => boolean): Observable<T>;
		lastOrDefault(): Observable<T>;
		lastOrDefault(predicate: (item: T) => boolean): Observable<T>;
		lastOrDefault(predicate: (item: T) => boolean, defaultValue: T): Observable<T>;
	}
}