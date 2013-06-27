///<reference path="rx.js.d.ts"/>

declare module Rx {
	export module Observable {
		function fromEvent(element: HTMLElement, eventName: string) : IObservable;
		function fromEvent(document: HTMLDocument, eventName: string): IObservable;
	}
}