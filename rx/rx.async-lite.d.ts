// DefinitelyTyped: partial

// This file contains common part of defintions for rx.async.d.ts and rx.lite.d.ts
// Do not include the file separately.

///<reference path="rx-lite.d.ts"/>

declare module Rx {
	export module config {
		/**
		* Configuration option to determine whether to use native events only
		*/
		export var useNativeEvents: boolean;
	}

    interface ObservableStatic {
		/**
		* Invokes the asynchronous function, surfacing the result through an observable sequence.
		* @param functionAsync Asynchronous function which returns a Promise to run.
		* @returns An observable sequence exposing the function's result value, or an exception.
		*/
		startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>;

		fromCallback: {
			// with single result callback without selector
			<TResult>(func: (callback: (result: TResult) => any) => any, context?: any): () => Observable<TResult>;
			<T1, TResult>(func: (arg1: T1, callback: (result: TResult) => any) => any, context?: any): (arg1: T1) => Observable<TResult>;
			<T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any callback with selector
			<TCallbackResult, TResult>(func: (callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): () => Observable<TResult>;
			<T1, TCallbackResult, TResult>(func: (arg1: T1, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1) => Observable<TResult>;
			<T1, T2, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any callback without selector
			<TResult>(func: (callback: Function) => any, context?: any): () => Observable<TResult>;
			<T1, TResult>(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TResult>;
			<T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
			<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
			// with any function with selector
			<TCallbackResult, TResult>(func: Function, context: any, selector: (args: TCallbackResult[]) => TResult): (...args: any[]) => Observable<TResult>;
			// with any function without selector
			<TResult>(func: Function, context?: any): (...args: any[]) => Observable<TResult>;
		};

		fromNodeCallback: {
			// with single result callback without selector
			<T>(func: (callback: (err: any, result: T) => any) => any, context?: any): () => Observable<T>;
			<T1, T>(func: (arg1: T1, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1) => Observable<T>;
			<T1, T2, T>(func: (arg1: T1, arg2: T2, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<T>;
			<T1, T2, T3, T>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<T>;
			// with any callback with selector
			<TC, TR>(func: (callback: Function) => any, context: any, selector: (results: TC[]) => TR): () => Observable<TR>;
			<T1, TC, TR>(func: (arg1: T1, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1) => Observable<TR>;
			<T1, T2, TC, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2) => Observable<TR>;
			<T1, T2, T3, TC, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
			// with any callback without selector
			<TR>(func: (callback: Function) => any, context?: any): () => Observable<TR>;
			<T1, TR>(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TR>;
			<T1, T2, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TR>;
			<T1, T2, T3, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
			// with any function with selector
			<TC, T>(func: Function, context: any, selector: (results: TC[]) => T): (...args: any[]) => Observable<T>;
			// with any function without selector
			<T>(func: Function, context?: any): (...args: any[]) => Observable<T>;
		};

		fromEvent<T>(element: NodeList, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;

		// mouse events
		fromEvent(element: Node, eventName: "click", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "dblclick", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mousemove", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mousedown", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mouseup", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mouseover", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mouseout", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mouseenter", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;
		fromEvent(element: Node, eventName: "mouseleave", selector?: (arguments: any[]) => MouseEvent): Observable<MouseEvent>;

		// wheel event
		fromEvent(element: Node, eventName: "wheel", selector?: (arguments: any[]) => WheelEvent): Observable<WheelEvent>;

		// keyboard events
		fromEvent(element: Node, eventName: "keydown", selector?: (arguments: any[]) => KeyboardEvent): Observable<KeyboardEvent>;
		fromEvent(element: Node, eventName: "keyup", selector?: (arguments: any[]) => KeyboardEvent): Observable<KeyboardEvent>;
		fromEvent(element: Node, eventName: "keypress", selector?: (arguments: any[]) => KeyboardEvent): Observable<KeyboardEvent>;

		// touch events
		// TODO: define TouchEvent in lib.d.ts
		//fromEvent(element: Node, eventName: "touchstart", selector?: (arguments: any[]) => TouchEvent): Observable<TouchEvent>;
		//fromEvent(element: Node, eventName: "touchmove", selector?: (arguments: any[]) => TouchEvent): Observable<TouchEvent>;
		//fromEvent(element: Node, eventName: "touchend", selector?: (arguments: any[]) => TouchEvent): Observable<TouchEvent>;
		//fromEvent(element: Node, eventName: "touchcancel", selector?: (arguments: any[]) => TouchEvent): Observable<TouchEvent>;

		// pointer events
		fromEvent(element: Node, eventName: "pointerdown", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;
		fromEvent(element: Node, eventName: "pointerup", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;
		fromEvent(element: Node, eventName: "pointercancel", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;
		fromEvent(element: Node, eventName: "pointermove", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;
		fromEvent(element: Node, eventName: "pointerover", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;
		fromEvent(element: Node, eventName: "pointerout", selector?: (arguments: any[]) => PointerEvent): Observable<PointerEvent>;

		// device motion/orientation
		fromEvent(element: Node, eventName: "devicemotion", selector?: (arguments: any[]) => DeviceMotionEvent): Observable<DeviceMotionEvent>;
		fromEvent(element: Node, eventName: "deviceorientation", selector?: (arguments: any[]) => DeviceOrientationEvent): Observable<DeviceOrientationEvent>;

		fromEvent<T>(element: Node, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
        fromEventPattern<T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (arguments: any[])=>T): Observable<T>;
	}
}
