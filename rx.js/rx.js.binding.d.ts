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

    var ReplaySubject: {
        new <T>(bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
    }

	interface BehaviorSubject<T> extends ISubject<T> {
		new (initialValue: T): BehaviorSubject<any>;
	}

    var BehaviorSubject: {
        new <T>(initialValue: T): BehaviorSubject<T>;
    }

	interface ConnectableObservable<T> extends Observable<T>{
		connect(): IDisposable;
		refCount(): Observable<T>;
    }

    var ConnectableObservable: {
        new <T>(): ConnectableObservable<T>;
    }

	interface Observable<T> {

		publish(): ConnectableObservable<T>;
		publish<TResult>(selector: (item: T) => Observable<TResult>): ConnectableObservable<TResult>;
		publishLast(): ConnectableObservable<T>;
		publishLast<TResult>(selector: (item: T) => Observable<TResult>): ConnectableObservable<TResult>;
		publishValue(initialValue: T): ConnectableObservable<T>;
		publishValue<TResult>(selector: (item: T) => TResult, initialValue: TResult): ConnectableObservable<TResult>;

		replay(selector?: (source: Observable<T>) => ReplaySubject<T>, bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}


	interface Observable {
	}
}
