///<reference path="rx.js.d.ts" />

// Type definitions for RxJS-Binding package
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Dependencies:
// -> rx.js
// -> rx.binding.js

declare module Rx {

	interface ReplaySubject<T> extends ISubject<T> {
		new (bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}

	interface BehaviorSubject<T> extends ISubject<T> {
		new (initialValue: T): BehaviorSubject<any>;
	}

	interface ConnectableObservable<T> extends IObservable<T>{
		connect(): _IDisposable;
		refCount(): IObservable<T>;
	}

	interface IObservable<T> {

		publish(): ConnectableObservable<T>;
		publish<TResult>(selector: (item: T) => IObservable<TResult>): ConnectableObservable<TResult>;
		publishLast(): ConnectableObservable<T>;
		publishLast<TResult>(selector: (item: T) => IObservable<TResult>): ConnectableObservable<TResult>;
		publishValue(initialValue: T): ConnectableObservable<T>;
		publishValue<TResult>(selector: (item: T) => TResult, initialValue: TResult): ConnectableObservable<TResult>;

		replay(selector?: (source: IObservable<T>) => ReplaySubject<T>, bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}


	interface Observable {
	}
}
