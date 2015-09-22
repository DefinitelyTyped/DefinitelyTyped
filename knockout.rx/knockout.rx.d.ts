// Type definitions for knockout.rx 1.0
// Project: https://github.com/Igorbek/knockout.rx
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts"/>
/// <reference path="../rx/rx.d.ts"/>

interface KnockoutSubscribableFunctions<T> {
	toObservable(event?: string): Rx.Observable<T>;
	toObservable<TEvent>(event: string): Rx.Observable<TEvent>;
}

interface KnockoutObservableFunctions<T> {
	toObservableWithReplyLatest(): Rx.Observable<T>;
	toSubject(): Rx.ISubject<T>;
}

interface KnockoutComputedFunctions<T> {
	toObservableWithReplyLatest(): Rx.Observable<T>;
}

declare module Rx {
	interface Observable<T> {
		toKoSubscribable(): KnockoutSubscribable<T>;
		toKoObservable(initialValue?: T): KnockoutObservable<T>;
	}

	interface Subject<T> {
		toKoObservable(initialValue?: T): KnockoutObservable<T>;
	}
}
