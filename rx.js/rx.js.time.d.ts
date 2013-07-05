///<reference path="rx.js.d.ts" />

// Type definitions for RxJS "Aggregates"
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.time.js

declare module Rx {

	interface ITimeInterval {
		value: any;
		interval: number;
	}

	interface ITimestamp {
		value: any;
		interval: number;
	}

	interface IObservable<T> {
		ifThen(condition: () => bool, thenSource: IObservable<T>): IObservable<T>;
		ifThen(condition: () => bool, thenSource: IObservable<T>, elseSource: IObservable<T>): IObservable<T>;
		ifThen(condition: () => bool, thenSource: IObservable<T>, scheduler: IScheduler): IObservable<T>;

		delay(dueTime: number, scheduler?: IScheduler): IObservable<T>;
		throttle(dueTime: number, scheduler?: IScheduler): IObservable<T>;
		windowWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): IObservable<T>;
		windowWithTime(timeSpan: number, scheduler?: IScheduler): IObservable<T>;
		windowWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): IObservable<T>;
		bufferWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): IObservable<T>;
		bufferWithTime(timeSpan: number, scheduler?: IScheduler): IObservable<T>;
		bufferWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): IObservable<T>;
		timeInterval(scheduler?: IScheduler): IObservable<ITimeInterval>;
		timestamp(scheduler?: IScheduler): IObservable<ITimestamp>;
		sample(interval: number, scheduler?: IScheduler): IObservable<T>;
		sample<TSample>(sampler: IObservable<TSample>, scheduler?: IScheduler): IObservable<T>;
		timeout(dueTime: Date, other?: IObservable<T>, scheduler?: IScheduler): IObservable<T>;
		timeout(dueTime: number, other?: IObservable<T>, scheduler?: IScheduler): IObservable<T>;

		delaySubscription(dueTime: number, scheduler?: IScheduler): IObservable<T>;
		delayWithSelector(delayDurationSelector: (T) => number): IObservable<T>;
		delayWithSelector(subscriptionDelay: number, delayDurationSelector: (T) => number): IObservable<T>;

		timeoutWithSelector<TTimeout>(firstTimeout: IObservable<TTimeout>, timeoutdurationSelector?: (T) => IObservable<TTimeout>, other?: IObservable<T>): IObservable<T>;
		throttleWithSelector<TTimeout>(throttleDurationSelector: (T) => IObservable<TTimeout>): IObservable<T>;

		skipLastWithTime(duration: number, scheduler?: IScheduler): IObservable<T>;
		takeLastWithTime(duration: number, timerScheduler?: IScheduler, loopScheduler?: IScheduler): IObservable<T>;

		takeLastBufferWithTime(duration: number, scheduler?: IScheduler): IObservable<Array>;
		takeWithTime(duration: number, scheduler?: IScheduler): IObservable<T>;
		skipWithTime(duration: number, scheduler?: IScheduler): IObservable<T>;

		skipUntilWithTime(startTime: Date, scheduler?: IScheduler): IObservable<T>;
		takeUntilWithTime(endTime: Date, scheduler?: IScheduler): IObservable<T>;
	}

	interface Observable {
		interval(period: number, scheduler?: IScheduler): IObservable<number>;
		interval(dutTime: number, period: number, scheduler?: IScheduler): IObservable<number>;
		timer(dueTime: Date, period: number, scheduler: IScheduler): IObservable<number>;
		timer(dueTime: Date, scheduler: IScheduler): IObservable<number>;
		timer(dueTime: number, period: number, scheduler: IScheduler): IObservable<number>;
		timer(dueTime: number, scheduler: IScheduler): IObservable<number>;

		generateWithAbsoluteTime<TState, TResult>(
			initialState: TState,
			condition: (TState) => boolean,
			iterate: (TState) => TState,
			resultSelector: (TState) => TResult,
			timeSelector: (TState) => Date,
			scheduler?: IScheduler): IObservable<TResult>;

		generateWithRelativeTime<TState, TResult>(
			initialState: TState,
			condition: (TState) => boolean,
			iterate: (TState) => TState,
			resultSelector: (TState) => TResult,
			timeSelector: (TState) => number,
			scheduler?: IScheduler): IObservable<TResult>;
	}
}