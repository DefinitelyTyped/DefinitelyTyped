// Type definitions for RxJS-Binding package
// Project: http://rx.codeplex.com/
// Definitions by: Carl de Billy <http://carl.debilly.net/>
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="rx.d.ts" />

declare module Rx {
	export interface BehaviorSubject<T> extends Subject<T> {
	}

	interface BehaviorSubjectStatic {
		new <T>(initialValue: T): BehaviorSubject<T>;
	}

	export var BehaviorSubject: BehaviorSubjectStatic;

	export interface ReplaySubject<T> extends Subject<T> {
	}

	interface ReplaySubjectStatic {
		new <T>(bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}

	export var ReplaySubject: ReplaySubjectStatic;

	interface ConnectableObservable<T> extends Observable<T> {
		connect(): IDisposable;
		refCount(): Observable<T>;
    }

    interface ConnectableObservableStatic {
        new <T>(): ConnectableObservable<T>;
	}

	export var ConnectableObservable: ConnectableObservableStatic;

	export interface Observable<T> {
		publish(): ConnectableObservable<T>;
		publish<TResult>(selector: (item: T) => Observable<TResult>): ConnectableObservable<TResult>;
		publishLast(): ConnectableObservable<T>;
		publishLast<TResult>(selector: (item: T) => Observable<TResult>): ConnectableObservable<TResult>;
		publishValue(initialValue: T): ConnectableObservable<T>;
		publishValue<TResult>(selector: (item: T) => TResult, initialValue: TResult): ConnectableObservable<TResult>;

		replay(selector?: (source: Observable<T>) => ReplaySubject<T>, bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}
}
