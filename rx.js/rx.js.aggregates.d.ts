///<reference path="rx.js.d.ts" />

// Type definitions for RxJS "Aggregates"
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Rx {
	interface IObservable<T> {
		all(predicate?: (value: T) => bool): IObservable<bool>;
		min(comparer?: (value1: T, value2: T) => number): IObservable<T>;
		max(comparer?: (value1: T, value2: T) => number): IObservable<number>;
		count(predicate?: (item: T) => bool): IObservable<number>;
		sum(keySelector?: (item: T) => number): IObservable<number>;
		isEmpty(predicate?: (value: T) => bool): IObservable<bool>;
		contains(value: T, comparer?: (value1: T, value2: T) => bool): IObservable<bool>;
		average(keySelector?: (item: T) => number): IObservable<number>;
	}
}