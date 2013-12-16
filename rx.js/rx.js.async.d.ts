///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-Async package 2.2
// Project: http://rx.codeplex.com/
// Definitions by: zoetrope <https://github.com/zoetrope>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.async.js

declare module Rx {
    interface Observable {
        start<T>(func: () => T, scheduler?: IScheduler, context?: any): IObservable<T>;
        toAsync<T>(func: Function, scheduler?: IScheduler, context?: any): (...arguments: any[]) => IObservable<T>;
        fromCallback<T>(func: (...arguments: any[]) => void, scheduler?: IScheduler, context?: any, selector?: (...arguments: T[])=>T): () => IObservable<T>;
        fromNodeCallback<T>(func: (...arguments: any[]) => void, scheduler?: IScheduler, context?: any, selector?: (...arguments: any[])=>T): (...arguments: any[]) => IObservable<T>;
        fromEvent<T>(element: any, eventName: string, selector?: (...arguments: any[])=>T): IObservable<T>;
        fromEventPattern<T>(addHandler: (handler: any)=> void, removeHandler: (handler: any)=> void, selector?: (...arguments: any[])=>T): IObservable<T>;
        fromPromise<T>(promise: any): IObservable<T>;
    }
}