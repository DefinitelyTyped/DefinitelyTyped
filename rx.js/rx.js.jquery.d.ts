///<reference path="../jquery/jquery.d.ts"/>
///<reference path="rx.js.d.ts"/>

// Those are the definitions for bridging Rx with jQuery.
//
// Using the https://github.com/Reactive-Extensions/rxjs-jquery project
//
// Dependencies:
// -> rx.js
// -> rx.jquery.js
// -> jquery.js

declare module JQueryResults {

	export interface eventBase{
		bubbles: boolean;
		cancelable: boolean;
		type: string;
		preventDefault(): void;
		isDefaultPrevented(): boolean;
		stopPropagation(): void;
		isPropagationStopped(): boolean;
		data: any;
		originalEvent: any;
		eventPhase: number;
	}

	export interface keyEvent extends eventBase {
		key: number;
		keyCode: number;
		altKey: boolean;
		ctrlKey: boolean;
		shiftKey: boolean;
		char: string;
		metaKey: boolean;
	}

	export interface uiEvent extends eventBase{
		target: any;
		currentTarget: any;
	}

	export interface mouseEvent extends keyEvent{
		clientX: number;
		clientY: number;
		screenX: number;
		screenY: number;
		offsetX: number;
		offsetY: number;
		pageX: number;
		pageY: number;
		which: number;
	}
}


interface JQueryStatic {
	ajaxAsObservable<T>(settings: JQueryAjaxSettings): Rx.Observable<T>;
	getAsObservable<T>(url: string, data: any, dataType: string): Rx.Observable<T>;
	getJSONAsObservable<T>(url: string, data: any): Rx.Observable<T>;
	getScriptAsObservable<T>(url: string, data: any): Rx.Observable<T>;
	postAsObservable<T>(url: string, data: any, dataType: string): Rx.Observable<T>;
}

interface JQuery {
	changeAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	clickAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	dblclickAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	focusAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	focusinAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	focusoutAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	keydownAsObservable(eventData?: any): Rx.Observable<JQueryResults.keyEvent>;
	keyupAsObservable(eventData?: any): Rx.Observable<JQueryResults.keyEvent>;
	loadAsObservable(eventData?: any): Rx.Observable<JQueryResults.uiEvent>;
	mousedownAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mouseenterAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mouseleaveAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mousemoveAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mouseoutAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mouseoverAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	mouseupAsObservable(eventData?: any): Rx.Observable<JQueryResults.mouseEvent>;
	resizeAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	scrollAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	selectAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	submitAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	unloadAsObservable(eventData?: any): Rx.Observable<JQueryResults.eventBase>;
	hideAsObservable(duration: number): Rx.Observable<JQueryResults.eventBase>;
	showAsObservable(duration: number): Rx.Observable<JQueryResults.eventBase>;
	readyAsObservable(): Rx.Observable<any>;
	animateAsObservable(properties: any, duration: number, easing?: string): Rx.Observable<any>;
	fadeInAsObservable(duration: number, easing?: string): Rx.Observable<any>;
	fadeToAsObservable(duration: number, opacity: number, easing?: string): Rx.Observable<any>;
	fadeOutAsObservable(duration: number, easing?: string): Rx.Observable<any>;
	fadeToggleAsObservable(duration: number, easing?: string): Rx.Observable<any>;
	slideDownAsObservable(duration: number): Rx.Observable<any>;
	slideUpAsObservable(duration: number): Rx.Observable<any>;
	slideToggleAsObservable(duration: number): Rx.Observable<any>;
	toggleAsObservable(duration: number): Rx.Observable<any>;
}