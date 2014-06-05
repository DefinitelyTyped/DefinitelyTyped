// Type definitions for RxJS-VirtualTime v2.2.25
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />

declare module Rx {
    // Virtual IScheduler
	export /*abstract*/ class VirtualTimeScheduler<TAbsolute, TRelative> extends Scheduler {
		constructor(initialClock: TAbsolute, comparer: (first: TAbsolute, second: TAbsolute) => number);

		advanceBy(time: TRelative): void;
		advanceTo(time: TAbsolute): void;
		scheduleAbsolute(dueTime: TAbsolute, action: () => void): IDisposable;
		scheduleAbsoluteWithState<TState>(state: TState, dueTime: TAbsolute, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleRelative(dueTime: TRelative, action: () => void): IDisposable;
		scheduleRelativeWithState<TState>(state: TState, dueTime: TRelative, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		sleep(time: TRelative): void;
		start(): IDisposable;
		stop(): void;

		isEnabled: boolean;

		/* protected abstract */ add(from: TAbsolute, by: TRelative): TAbsolute;
		/* protected abstract */ toDateTimeOffset(duetime: TAbsolute): number;
		/* protected abstract */ toRelative(duetime: number): TRelative;

		/* protected */ getNext(): internals.ScheduledItem<TAbsolute>;
	}

	export class HistoricalScheduler extends VirtualTimeScheduler<number, number> {
		constructor(initialClock: number, comparer: (first: number, second: number) => number);
	}
}
