///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-Async package 2.2
// Project: http://rx.codeplex.com/
// Definitions by: zoetrope <https://github.com/zoetrope>
// Revision by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Rx {
    interface ObservableStatic {
        start<T>(func: () => T, scheduler?: IScheduler, context?: any): Observable<T>;
        toAsync<T>(func: Function, scheduler?: IScheduler, context?: any): (...arguments: any[]) => Observable<T>;
        fromCallback<T>(func: (...arguments: any[]) => void, scheduler?: IScheduler, context?: any, selector?: (...arguments: T[])=>T): () => Observable<T>;
        fromNodeCallback<T>(func: (...arguments: any[]) => void, scheduler?: IScheduler, context?: any, selector?: (...arguments: any[])=>T): (...arguments: any[]) => Observable<T>;
        fromEvent<T>(element: any, eventName: string, selector?: (...arguments: any[])=>T): Observable<T>;
        fromEventPattern<T>(addHandler: (handler: any)=> void, removeHandler: (handler: any)=> void, selector?: (...arguments: any[])=>T): Observable<T>;
        fromPromise<T>(promise: any): Observable<T>;
    }
}