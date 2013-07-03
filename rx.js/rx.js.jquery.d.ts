///<reference path="../jquery/jquery.d.ts"/>
///<reference path="rx.js.d.ts"/>

declare module JQueryResults {

	export interface eventBase{
		bubbles: bool;
		cancelable: bool;
		type: string;
		preventDefault(): void;
		isDefaultPrevented(): bool;
		stopPropagation(): void;
		isPropagationStopped(): bool;
		data: any;
		originalEvent: any;
		eventPhase: number;
	}

	export interface keyEvent extends eventBase {
		key: number;
		keyCode: number;
		altKey: bool;
		ctrlKey: bool;
		shiftKey: bool;
		char: string;
		metaKey: bool;
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
	ajaxAsObservable<T>(settings: JQueryAjaxSettings): Rx.IObservable<T>;
	getAsObservable<T>(url: string, data: any, dataType: string): Rx.IObservable<T>;
	getJSONAsObservable<T>(url: string, data: any): Rx.IObservable<T>;
	getScriptAsObservable<T>(url: string, data: any): Rx.IObservable<T>;
	postAsObservable<T>(url: string, data: any, dataType: string): Rx.IObservable<T>;
}

interface JQuery {
	changeAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	clickAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	dblclickAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	focusAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	focusinAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	focusoutAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	keydownAsObservable(eventData?: any): Rx.IObservable<JQueryResults.keyEvent>;
	keyupAsObservable(eventData?: any): Rx.IObservable<JQueryResults.keyEvent>;
	loadAsObservable(eventData?: any): Rx.IObservable<JQueryResults.uiEvent>;
	mousedownAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mouseenterAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mouseleaveAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mousemoveAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mouseoutAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mouseoverAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	mouseupAsObservable(eventData?: any): Rx.IObservable<JQueryResults.mouseEvent>;
	resizeAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	scrollAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	selectAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	submitAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	unloadAsObservable(eventData?: any): Rx.IObservable<JQueryResults.eventBase>;
	hideAsObservable(duration: number): Rx.IObservable<JQueryResults.eventBase>;
	showAsObservable(duration: number): Rx.IObservable<JQueryResults.eventBase>;
	readyAsObservable(): Rx.IObservable<any>;
	animateAsObservable(properties: any, duration: number, easing?: string): Rx.IObservable<any>;
	fadeInAsObservable(duration: number, easing?: string): Rx.IObservable<any>;
	fadeToAsObservable(duration: number, opacity: number, easing?: string): Rx.IObservable<any>;
	fadeOutAsObservable(duration: number, easing?: string): Rx.IObservable<any>;
	fadeToggleAsObservable(duration: number, easing?: string): Rx.IObservable<any>;
	slideDownAsObservable(duration: number): Rx.IObservable<any>;
	slideUpAsObservable(duration: number): Rx.IObservable<any>;
	slideToggleAsObservable(duration: number): Rx.IObservable<any>;
	toggleAsObservable(duration: number): Rx.IObservable<any>;
}