///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-Coincidence package
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.coincidence.js

declare module Rx {

	interface IObservable<T> {
		join<T2, TDuration, T2Duration, TResult>(
			right: IObservable<T2>,
			leftDurationSelector: (leftItem: T) => IObservable<TDuration>,
			rightDurationSelector: (rightItem: T2) => IObservable<T2Duration>,
			resultSelector: (leftItem: T, rightItem: T2) => TResult): IObservable<TResult>;

		groupJoin<T2, TDuration, T2Duration, TResult>(
			right: IObservable<T2>,
			leftDurationSelector: (leftItem: T) => IObservable<TDuration>,
			rightDurationSelector: (rightItem: T2) => IObservable<T2Duration>,
			resultSelector: (leftItem: T, rightItem: IObservable<T2>) => TResult): IObservable<TResult>;


		// lack of documentation to complete the followings...

		buffer<TBufferOpening, TBufferClosing>(bufferOpenings: IObservable<TBufferOpening>,
			bufferClosingSelector: (opening: TBufferOpening) => IObservable<TBufferClosing>): IObservable<T>;

		window<TBufferOpening, TBufferClosing>(bufferOpenings: IObservable<TBufferOpening>,
			bufferClosingSelector: (opening: TBufferOpening) => IObservable<TBufferClosing>): IObservable<T>;
	}


	interface Observable {
	}
}
