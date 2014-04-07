// Type definitions for RxJS-Lite v2.2.18
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx-lite.d.ts"/>
///<reference path="rx.async-lite.d.ts" />
///<reference path="rx.binding-lite.d.ts" />
///<reference path="rx.time-lite.d.ts" />
///<reference path="rx.backpressure-lite.d.ts" />

declare module Rx {
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

	export interface Observable<T> {
		shareReplay(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;	// same as replayWhileObserved in rx.binding.d.ts
	}
}
