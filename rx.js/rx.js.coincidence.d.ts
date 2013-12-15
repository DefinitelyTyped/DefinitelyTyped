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

	interface Observable<T> {
		join<T2, TDuration, T2Duration, TResult>(
			right: Observable<T2>,
			leftDurationSelector: (leftItem: T) => Observable<TDuration>,
			rightDurationSelector: (rightItem: T2) => Observable<T2Duration>,
			resultSelector: (leftItem: T, rightItem: T2) => TResult): Observable<TResult>;

		groupJoin<T2, TDuration, T2Duration, TResult>(
			right: Observable<T2>,
			leftDurationSelector: (leftItem: T) => Observable<TDuration>,
			rightDurationSelector: (rightItem: T2) => Observable<T2Duration>,
			resultSelector: (leftItem: T, rightItem: Observable<T2>) => TResult): Observable<TResult>;


		// lack of documentation to complete the followings...

		buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>,
			bufferClosingSelector: (opening: TBufferOpening) => Observable<TBufferClosing>): Observable<T>;

		window<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>,
			bufferClosingSelector: (opening: TBufferOpening) => Observable<TBufferClosing>): Observable<T>;
	}
}
