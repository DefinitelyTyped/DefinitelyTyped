// Type definitions for RxJS "Aggregates"
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.js.d.ts" />

declare module Rx {
	interface Observable {
		all(predicate?: (any) => bool): IObservable;
		min(predicate?: (any) => bool): IObservable;
		max(predicate?: (any) => bool): IObservable;
		count(predicate?: (any) => bool): IObservable;
		sum(keySelector?: (any) => any): IObservable;
	}
}