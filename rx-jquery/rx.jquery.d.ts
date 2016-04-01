// Type definitions for RxJS-jQuery
// Project: https://github.com/Reactive-Extensions/RxJS-jQuery/
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts"/>
///<reference path="../rx/rx.d.ts"/>

interface RxJQueryAjaxResult<T> {
	data: T;
	textStatus: string;
	jqXHR: JQueryXHR;
}

interface JQueryStatic {
	ajaxAsObservable<T>(settings: JQueryAjaxSettings): Rx.Observable<RxJQueryAjaxResult<T>>;
	getAsObservable<T>(url: string, data: any, dataType: string): Rx.Observable<RxJQueryAjaxResult<T>>;
	getJSONAsObservable<T>(url: string, data: any): Rx.Observable<RxJQueryAjaxResult<T>>;
	getScriptAsObservable<T>(url: string, data: any): Rx.Observable<RxJQueryAjaxResult<T>>;
	postAsObservable<T>(url: string, data: any, dataType: string): Rx.Observable<RxJQueryAjaxResult<T>>;
}

interface JQuery {
	onAsObservable<T extends BaseJQueryEventObject>(events: string, selector?: string, eventData?: any): Rx.Observable<T>;
	bindAsObservable<T extends BaseJQueryEventObject>(eventType: string, eventData?: any): Rx.Observable<T>;
	delegateAsObservable<T extends BaseJQueryEventObject>(selector: string, eventType: string, eventData?: any): Rx.Observable<T>;
	//liveAsObservable<T extends BaseJQueryEventObject>(eventType: string, eventData?: any): Rx.Observable<T>;	// removed in jquery 1.9

	changeAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
	clickAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	dblclickAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	focusAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
	focusinAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
	focusoutAsObservable(eventData?: any): Rx.Observable<JQueryInputEventObject>;
	keydownAsObservable(eventData?: any): Rx.Observable<JQueryKeyEventObject>;
	keyupAsObservable(eventData?: any): Rx.Observable<JQueryKeyEventObject>;
	loadAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	mousedownAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mouseenterAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mouseleaveAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mousemoveAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mouseoutAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mouseoverAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	mouseupAsObservable(eventData?: any): Rx.Observable<JQueryMouseEventObject>;
	resizeAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	scrollAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	selectAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	submitAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	unloadAsObservable(eventData?: any): Rx.Observable<BaseJQueryEventObject>;
	hideAsObservable(duration: number): Rx.Observable<BaseJQueryEventObject>;
	showAsObservable(duration: number): Rx.Observable<BaseJQueryEventObject>;
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

declare module "rx.jquery" {
	export = Rx;
}