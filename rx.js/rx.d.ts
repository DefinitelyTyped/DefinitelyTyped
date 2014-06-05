// Type definitions for RxJS v2.2.25
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx-lite.d.ts"/>

declare module Rx {
	export interface IScheduler {
		catch(handler: (exception: any) => boolean): IScheduler;
		catchException(handler: (exception: any) => boolean): IScheduler;
	}

	export class Scheduler implements IScheduler {
		constructor(
			now: () => number,
			schedule: (state: any, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
			scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
			scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable);

		static normalize(timeSpan: number): number;

		static immediate: IScheduler;
		static currentThread: ICurrentThreadScheduler;
		static timeout: IScheduler;

		now(): number;
		catch(handler: (exception: any) => boolean): IScheduler;
		catchException(handler: (exception: any) => boolean): IScheduler;

		schedule(action: () => void): IDisposable;
		scheduleWithState<TState>(state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
		scheduleWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
		scheduleWithRelativeAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;

		scheduleRecursive(action: (action: () => void) => void): IDisposable;
		scheduleRecursiveWithState<TState>(state: TState, action: (state: TState, action: (state: TState) => void) => void): IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelativeAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void): IDisposable;

		schedulePeriodic(period: number, action: () => void): IDisposable;
		schedulePeriodicWithState<TState>(state: TState, period: number, action: (state: TState) => TState): IDisposable;
	}

	// Observer
	export interface Observer<T> {
		checked(): Observer<any>;
	}

	interface ObserverStatic {
		/**
		* Schedules the invocation of observer methods on the given scheduler.
		* @param scheduler Scheduler to schedule observer messages on.
		* @returns Observer whose messages are scheduled on the given scheduler.
		*/
		notifyOn<T>(scheduler: IScheduler): Observer<T>;
	}

	export interface Observable<T> {
		observeOn(scheduler: IScheduler): Observable<T>;
		subscribeOn(scheduler: IScheduler): Observable<T>;

		amb(rightSource: Observable<T>): Observable<T>;
		amb(rightSource: IPromise<T>): Observable<T>;
		onErrorResumeNext(second: Observable<T>): Observable<T>;
		onErrorResumeNext(second: IPromise<T>): Observable<T>;
		bufferWithCount(count: number, skip?: number): Observable<T[]>;
		windowWithCount(count: number, skip?: number): Observable<Observable<T>>;
		defaultIfEmpty(defaultValue?: T): Observable<T>;
		distinct(skipParameter: boolean, valueSerializer: (value: T) => string): Observable<T>;
		distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string): Observable<T>;
		groupBy<TKey, TElement>(keySelector: (value: T) => TKey, skipElementSelector?: boolean, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
		groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
		groupByUntil<TKey, TDuration>(keySelector: (value: T) => TKey, skipElementSelector: boolean, durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
		groupByUntil<TKey, TElement, TDuration>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
	}

	interface ObservableStatic {
		using<TSource, TResource extends IDisposable>(resourceFactory: () => TResource, observableFactory: (resource: TResource) => Observable<TSource>): Observable<TSource>;
		amb<T>(...sources: Observable<T>[]): Observable<T>;
		amb<T>(...sources: IPromise<T>[]): Observable<T>;
		amb<T>(sources: Observable<T>[]): Observable<T>;
		amb<T>(sources: IPromise<T>[]): Observable<T>;
		onErrorResumeNext<T>(...sources: Observable<T>[]): Observable<T>;
		onErrorResumeNext<T>(...sources: IPromise<T>[]): Observable<T>;
		onErrorResumeNext<T>(sources: Observable<T>[]): Observable<T>;
		onErrorResumeNext<T>(sources: IPromise<T>[]): Observable<T>;
	}

	interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
		key: TKey;
		underlyingObservable: Observable<TElement>;
	}
}

declare module "rx" {
    export = Rx
}
