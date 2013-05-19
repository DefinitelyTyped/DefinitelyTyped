///<reference path="../jquery/jquery.d.ts"/>
///<reference path="rx.js.d.ts"/>

interface JQueryStatic {
	ajaxAsObservable(settings: JQueryAjaxSettings): Rx.IObservable;
	getAsObservable(url: string, data: any, dataType: string): Rx.IObservable;
	getJSONAsObservable(url: string, data: any): Rx.IObservable;
	getScriptAsObservable(url: string, data: any): Rx.IObservable;
	postAsObservable(url: string, data: any, dataType: string): Rx.IObservable;
}

interface JQuery {
	changeAsObservable(eventData?: any): Rx.IObservable;
	clickAsObservable(eventData?: any): Rx.IObservable;
	dblclickAsObservable(eventData?: any): Rx.IObservable;
	focusAsObservable(eventData?: any): Rx.IObservable;
	focusinAsObservable(eventData?: any): Rx.IObservable;
	focusoutAsObservable(eventData?: any): Rx.IObservable;
	keydownAsObservable(eventData?: any): Rx.IObservable;
	keyupAsObservable(eventData?: any): Rx.IObservable;
	loadAsObservable(eventData?: any): Rx.IObservable;
	mousedownAsObservable(eventData?: any): Rx.IObservable;
	mouseenterAsObservable(eventData?: any): Rx.IObservable;
	mouseleaveAsObservable(eventData?: any): Rx.IObservable;
	mousemoveAsObservable(eventData?: any): Rx.IObservable;
	mouseoutAsObservable(eventData?: any): Rx.IObservable;
	mouseoverAsObservable(eventData?: any): Rx.IObservable;
	mouseupAsObservable(eventData?: any): Rx.IObservable;
	resizeAsObservable(eventData?: any): Rx.IObservable;
	scrollAsObservable(eventData?: any): Rx.IObservable;
	selectAsObservable(eventData?: any): Rx.IObservable;
	submitAsObservable(eventData?: any): Rx.IObservable;
	unloadAsObservable(eventData?: any): Rx.IObservable;
	readyAsObservable(): Rx.IObservable;
	hideAsObservable(duration: number): Rx.IObservable;
	showAsObservable(duration: number): Rx.IObservable;
	animateAsObservable(properties: any, duration: number, easing?: string): Rx.IObservable;
	fadeInAsObservable(duration: number, easing?: string): Rx.IObservable;
	fadeToAsObservable(duration: number, opacity: number, easing?: string): Rx.IObservable;
	fadeOutAsObservable(duration: number, easing?: string): Rx.IObservable;
	fadeToggleAsObservable(duration: number, easing?: string): Rx.IObservable;
	slideDownAsObservable(duration: number): Rx.IObservable;
	slideUpAsObservable(duration: number): Rx.IObservable;
	slideToggleAsObservable(duration: number): Rx.IObservable;
	toggleAsObservable(duration: number): Rx.IObservable;
}