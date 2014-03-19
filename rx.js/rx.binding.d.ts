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
        new <T>(source: Observable<T>, subject: ISubject<T>): ConnectableObservable<T>;
	}

	export var ConnectableObservable: ConnectableObservableStatic;

	export interface Observable<T> {
		multicast(subject: Observable<T>): ConnectableObservable<T>;
		multicast<TResult>(subjectSelector: () => ISubject<T>, selector: (source: ConnectableObservable<T>) => Observable<T>): Observable<T>;
		publish(): ConnectableObservable<T>;
		publish<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
		/**
		* Returns an observable sequence that shares a single subscription to the underlying sequence.
		* This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
		* 
		* @example
		* var res = source.share();
		* 
		* @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
		*/
		share(): Observable<T>;
		publishLast(): ConnectableObservable<T>;
		publishLast<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
		publishValue(initialValue: T): ConnectableObservable<T>;
		publishValue<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>, initialValue: TResult): Observable<TResult>;

		replay(selector?: (source: Observable<T>) => ReplaySubject<T>, bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
	}
}
