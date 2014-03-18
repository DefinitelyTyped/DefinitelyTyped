// Type definitions for RxJS-Async v2.2.15
// Project: http://rx.codeplex.com/
// Definitions by: zoetrope <https://github.com/zoetrope>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />

declare module Rx {
    interface ObservableStatic {
		start<T>(func: () => T, scheduler?: IScheduler, context?: any): Observable<T>;

		/**
		* Invokes the asynchronous function, surfacing the result through an observable sequence.
		* @param functionAsync Asynchronous function which returns a Promise to run.
		* @returns An observable sequence exposing the function's result value, or an exception.
		*/
		startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>;

        toAsync<TResult>(func: () => TResult, scheduler?: IScheduler, context?: any): () => Observable<TResult>;
		toAsync<T1, TResult>(func: (arg1: T1) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1) => Observable<TResult>;
		toAsync<T1, TResult>(func: (arg1?: T1) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1) => Observable<TResult>;
		toAsync<T1, TResult>(func: (...args: T1[]) => TResult, scheduler?: IScheduler, context?: any): (...args: T1[]) => Observable<TResult>;
		toAsync<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
		toAsync<T1, T2, TResult>(func: (arg1: T1, arg2?: T2) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2?: T2) => Observable<TResult>;
		toAsync<T1, T2, TResult>(func: (arg1?: T1, arg2?: T2) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, arg2?: T2) => Observable<TResult>;
		toAsync<T1, T2, TResult>(func: (arg1: T1, ...args: T2[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, ...args: T2[]) => Observable<TResult>;
		toAsync<T1, T2, TResult>(func: (arg1?: T1, ...args: T2[]) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, ...args: T2[]) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3?: T3) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3?: T3) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2?: T2, arg3?: T3) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2?: T2, arg3?: T3) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1?: T1, arg2?: T2, arg3?: T3) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, arg2?: T2, arg3?: T3) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, ...args: T3[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, ...args: T3[]) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2?: T2, ...args: T3[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2?: T2, ...args: T3[]) => Observable<TResult>;
		toAsync<T1, T2, T3, TResult>(func: (arg1?: T1, arg2?: T2, ...args: T3[]) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, arg2?: T2, ...args: T3[]) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4?: T4) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3, arg4?: T4) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3?: T3, arg4?: T4) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3?: T3, arg4?: T4) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2?: T2, arg3?: T3, arg4?: T4) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2?: T2, arg3?: T3, arg4?: T4) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1?: T1, arg2?: T2, arg3?: T3, arg4?: T4) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, arg2?: T2, arg3?: T3, arg4?: T4) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, ...args: T4[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3, ...args: T4[]) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3?: T3, ...args: T4[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3?: T3, ...args: T4[]) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2?: T2, arg3?: T3, ...args: T4[]) => TResult, scheduler?: IScheduler, context?: any): (arg1: T1, arg2?: T2, arg3?: T3, ...args: T4[]) => Observable<TResult>;
		toAsync<T1, T2, T3, T4, TResult>(func: (arg1?: T1, arg2?: T2, arg3?: T3, ...args: T4[]) => TResult, scheduler?: IScheduler, context?: any): (arg1?: T1, arg2?: T2, arg3?: T3, ...args: T4[]) => Observable<TResult>;

		fromCallback: {
			// with single result callback without selector
			<TResult>(func: (callback: (result: TResult) => any) => any, scheduler?: IScheduler, context?: any): () => Observable<TResult>;
			<T1, TResult>(func: (arg1: T1, callback: (result: TResult) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1) => Observable<TResult>;
			<T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any callback with selector
			<TCallbackResult, TResult>(func: (callback: Function) => any, scheduler: IScheduler, context: any, selector: (args: TCallbackResult[]) => TResult): () => Observable<TResult>;
			<T1, TCallbackResult, TResult>(func: (arg1: T1, callback: Function) => any, scheduler: IScheduler, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1) => Observable<TResult>;
			<T1, T2, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, scheduler: IScheduler, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, scheduler: IScheduler, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any callback without selector
			<TResult>(func: (callback: Function) => any, scheduler?: IScheduler, context?: any): () => Observable<TResult>;
			<T1, TResult>(func: (arg1: T1, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1) => Observable<TResult>;
			<T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any function with selector
			<TCallbackResult, TResult>(func: Function, scheduler: IScheduler, context: any, selector: (args: TCallbackResult[]) => TResult): (...args: any[]) => Observable<TResult>;
			// with any function without selector
			<TResult>(func: Function, scheduler?: IScheduler, context?: any): (...args: any[]) => Observable<TResult>;
		};

		fromNodeCallback: {
			// with single result callback without selector
			<T>(func: (callback: (err: any, result: T) => any) => any, scheduler?: IScheduler, context?: any): () => Observable<T>;
			<T1, T>(func: (arg1: T1, callback: (err: any, result: T) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1) => Observable<T>;
			<T1, T2, T>(func: (arg1: T1, arg2: T2, callback: (err: any, result: T) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2) => Observable<T>;
			<T1, T2, T3, T>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: T) => any) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<T>;
			// with any callback with selector
			<TC, TR>(func: (callback: Function) => any, scheduler: IScheduler, context: any, selector: (results: TC[]) => TR): () => Observable<TR>;
			<T1, TC, TR>(func: (arg1: T1, callback: Function) => any, scheduler: IScheduler, context: any, selector: (results: TC[]) => TR): (arg1: T1) => Observable<TR>;
			<T1, T2, TC, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, scheduler: IScheduler, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2) => Observable<TR>;
			<T1, T2, T3, TC, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, scheduler: IScheduler, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
			// with any callback without selector
			<TR>(func: (callback: Function) => any, scheduler?: IScheduler, context?: any): () => Observable<TR>;
			<T1, TR>(func: (arg1: T1, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1) => Observable<TR>;
			<T1, T2, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2) => Observable<TR>;
			<T1, T2, T3, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, scheduler?: IScheduler, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
			// with any function with selector
			<TC, T>(func: Function, scheduler: IScheduler, context: any, selector: (results: TC[]) => T): (...args: any[]) => Observable<T>;
			// with any function without selector
			<T>(func: Function, scheduler?: IScheduler, context?: any): (...args: any[]) => Observable<T>;
		};

		fromEvent<T>(element: NodeList, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
		fromEvent<T>(element: Node, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
        fromEventPattern<T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (arguments: any[])=>T): Observable<T>;
	}
}
