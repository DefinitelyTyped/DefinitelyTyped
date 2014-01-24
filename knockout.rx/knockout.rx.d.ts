// Type definitions for knockout.rx 0.1
// Project: https://github.com/Igorbek/knockout.rx
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts"/>
/// <reference path="../rx.js/rx.d.ts"/>

interface KnockoutSubscribableFunctions<T> {
	toObservable(event?: string): Rx.IObservable<T>;
	toObservable<TEvent>(event: string): Rx.IObservable<TEvent>;
}

interface KnockoutObservableFunctions<T> {
	toObservableWithReplyLatest(): Rx.IObservable<T>;
}

interface KnockoutComputedFunctions<T> {
	toObservableWithReplyLatest(): Rx.IObservable<T>;
}

declare module Rx {
	interface IObservable<T> {
		toKoSubscribable(): KnockoutSubscribable<T>;
		toKoObservable(initialValue?: T): KnockoutObservable<T>;
	}
}
