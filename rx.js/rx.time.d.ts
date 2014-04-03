// Type definitions for RxJS-Time v2.2.18
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />
///<reference path="rx.time-lite.d.ts" />

declare module Rx {
	export interface Observable<T> {
		windowWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<Observable<T>>;
		windowWithTime(timeSpan: number, scheduler?: IScheduler): Observable<Observable<T>>;
		windowWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<Observable<T>>;
		bufferWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<T[]>;
		bufferWithTime(timeSpan: number, scheduler?: IScheduler): Observable<T[]>;
		bufferWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<T[]>;
	}

	interface ObservableStatic {
		timer(dueTime: Date, period: number, scheduler: IScheduler): Observable<number>;
		timer(dueTime: Date, scheduler: IScheduler): Observable<number>;

		generateWithAbsoluteTime<TState, TResult>(
			initialState: TState,
			condition: (state: TState) => boolean,
			iterate: (state: TState) => TState,
			resultSelector: (state: TState) => TResult,
			timeSelector: (state: TState) => Date,
			scheduler?: IScheduler): Observable<TResult>;
	}
}
