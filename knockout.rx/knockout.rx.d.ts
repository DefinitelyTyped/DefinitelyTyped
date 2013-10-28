/// <reference path="../knockout/knockout.d.ts"/>
/// <reference path="../rx.js/rx.js.d.ts"/>

interface KnockoutSubscribableFunctions<T> {
	toObservable(event?: string): Rx.IObservable<T>;
	toObservable<TEvent>(event: string): Rx.IObservable<TEvent>;
}

declare module Rx {
	interface IObservable<T> {
		toKoSubscribable(): KnockoutSubscribable<T>;
		toKoObservable(initialValue?: T): KnockoutObservable<T>;
	}
}
