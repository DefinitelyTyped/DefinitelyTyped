// Type definitions for rx-lite-virtualtime 4.0
// Project: https://github.com/Reactive-Extensions/RxJS
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>, Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="rx-lite" />

declare namespace Rx {
    interface VirtualTimeScheduler<TAbsolute, TRelative> extends Scheduler {
        // protected constructor(initialClock: TAbsolute, comparer: (first: TAbsolute, second: TAbsolute) => number);

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

    interface HistoricalScheduler extends VirtualTimeScheduler<number, number> {
    }

    const HistoricalScheduler: {
        new (initialClock: number, comparer: (first: number, second: number) => number): HistoricalScheduler;
    };
}

declare module "rx-lite-virtualtime" {
    export = Rx;
}
