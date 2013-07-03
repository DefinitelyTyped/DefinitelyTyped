///<reference path="rx.js.d.ts"/>

declare module Rx {
	interface Observable {
		fromEvent<TEvent>(element: HTMLElement, eventName: string): IObservable<TEvent>;
		fromEvent<TEvent>(document: HTMLDocument, eventName: string): IObservable<TEvent>;
	}
}