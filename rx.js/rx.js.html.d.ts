///<reference path="rx.js.d.ts"/>

declare module Rx {
	interface Observable {
		fromEvent(element: HTMLElement, eventName: string) : IObservable;
		fromEvent(document: HTMLDocument, eventName: string): IObservable;
	}
}