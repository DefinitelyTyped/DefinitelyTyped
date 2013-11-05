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
	interface IObservable<T> {
		aggregate<TAcc>(accumulator: (acc: TAcc, value: T) => TAcc): IObservable<TAcc>;
		aggregate<TAcc>(seed: TAcc, accumulator: (acc: TAcc, value: T) => TAcc): IObservable<TAcc>;

		any(): IObservable<boolean>;
		any(selector: (item: T) => boolean): IObservable<boolean>;

		isEmpty(predicate?: (value: T) => boolean): IObservable<boolean>;
		all(predicate?: (value: T) => boolean): IObservable<boolean>;
		contains(value: T, comparer?: (value1: T, value2: T) => boolean): IObservable<boolean>;
		count(predicate?: (item: T) => boolean): IObservable<number>;
		sum(keySelector?: (item: T) => number): IObservable<number>;
		minBy(keySelector: (item: T) => number, comparer?: (value1: T, value2: T) => number): IObservable<T>;
		min(comparer?: (value1: T, value2: T) => number): IObservable<T>;
		maxBy(keySelector: (item: T) => number, comparer?: (value1: T, value2: T) => number): IObservable<T>;
		max(comparer?: (value1: T, value2: T) => number): IObservable<number>;
		average(keySelector?: (item: T) => number): IObservable<number>;

		sequenceEqual(second: IObservable<T>, comparer?: (value1: T, value2: T) => number): IObservable<T>;
		elementAt(index: number): IObservable<T>;
		elementAtOrDefault(index: number, defaultValue: T): IObservable<T>;

		single(): IObservable<T>;
		single(predicate: (T) => boolean): IObservable<T>;
		singleOrDefault(): IObservable<T>;
		singleOrDefault(predicate: (T) => boolean): IObservable<T>;
		singleOrDefault(predicate: (T) => boolean, defaultValue: T): IObservable<T>;

		first(): IObservable<T>;
		first(predicate: (T) => boolean): IObservable<T>;
		firstOrDefault(): IObservable<T>;
		firstOrDefault(predicate: (T) => boolean): IObservable<T>;
		firstOrDefault(predicate: (T) => boolean, defaultValue: T): IObservable<T>;

		last(): IObservable<T>;
		last(predicate: (T) => boolean): IObservable<T>;
		lastOrDefault(): IObservable<T>;
		lastOrDefault(predicate: (T) => boolean): IObservable<T>;
		lastOrDefault(predicate: (T) => boolean, defaultValue: T): IObservable<T>;
	}
}