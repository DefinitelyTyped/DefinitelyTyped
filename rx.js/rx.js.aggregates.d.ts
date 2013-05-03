// Type definitions for RxJS "Aggregates"
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.js.d.ts" />

declare module Rx {
	export module Observable {
		function all(predicate?: (any) => bool): IObservable;
		function min(predicate?: (any) => bool): IObservable;
		function max(predicate?: (any) => bool): IObservable;
		function count(predicate?: (any) => bool): IObservable;
		function sum(keySelector?: (any) => any): IObservable;
	}
}