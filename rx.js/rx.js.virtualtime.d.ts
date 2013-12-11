///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-VirtualTime package 2.2
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.virtualtime.js

declare module Rx {
    // Virtual IScheduler
    interface IVirtualTimeScheduler extends IScheduler {
        toRelative(duetime): number;
        toDateTimeOffset(duetime: number): number;

        clock: number;
        comparer: (x: number, y: number) =>number;
        isEnabled: boolean;
        queue: IPriorityQueue;
        scheduleRelativeWithState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>IDisposable): IDisposable;
        scheduleRelative(dueTime: number, action: () =>void ): IDisposable;
        start(): IDisposable;
        stop(): void;
        advanceTo(time: number);
        advanceBy(time: number);
        sleep(time: number);
        getNext(): IScheduledItem;
        scheduleAbsolute(dueTime: number, action: () =>void );
        scheduleAbsoluteWithState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>IDisposable): IDisposable;
    }
    //export module VirtualTimeScheduler {
    //    //absract
    //    function new (initialClock: number, comparer: (x: number, y: number) =>number): IVirtualTimeScheduler;
    //}
}