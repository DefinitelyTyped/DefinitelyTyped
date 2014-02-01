// Type definitions for RxJS-Coincidence package
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />

declare module Rx {

	interface Observable<T> {
		join<TRight, TDurationLeft, TDurationRight, TResult>(
			right: Observable<TRight>,
			leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
			rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
			resultSelector: (leftItem: T, rightItem: TRight) => TResult): Observable<TResult>;

		groupJoin<TRight, TDurationLeft, TDurationRight, TResult>(
			right: Observable<TRight>,
			leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
			rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
			resultSelector: (leftItem: T, rightItem: Observable<TRight>) => TResult): Observable<TResult>;

		window<TWindowOpening>(windowOpenings: Observable<TWindowOpening>): Observable<Observable<T>>;
		window<TWindowClosing>(windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
		window<TWindowOpening, TWindowClosing>(windowOpenings: Observable<TWindowOpening>, windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;

		buffer<TBufferOpening>(bufferOpenings: Observable<TBufferOpening>): Observable<T[]>;
		buffer<TBufferClosing>(bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
		buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>, bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
	}
}
