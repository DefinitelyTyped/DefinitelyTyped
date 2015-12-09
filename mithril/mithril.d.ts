// Type definitions for Mithril
// Project: http://lhorie.github.io/mithril/
// Definitions by: Leo Horie <https://github.com/lhorie>, Chris Bowdon <https://github.com/cbowdon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//Mithril type definitions for Typescript

interface MithrilStatic {
	(selector: string, attributes: Object, children?: any): MithrilVirtualElement;
	(selector: string, children?: any): MithrilVirtualElement;
	prop<T>(value?: T): (value?: T) => T;
	prop<T>(promise: MithrilPromise<T>): MithrilPromiseProperty<T>;
	withAttr(property: string, callback: (value: any) => void): (e: Event) => any;
	module(rootElement: Node, module: MithrilModule): void;
	trust(html: string): String;
	render(rootElement: Element, children?: any): void;
	render(rootElement: HTMLDocument, children?: any): void;
	redraw: MithrilRedraw;
	route: MithrilRoute;
	request(options: MithrilXHROptions): MithrilPromise<any>;
	deferred<T>(): MithrilDeferred<T>;
	sync<T>(promises: MithrilPromise<T>[]): MithrilPromise<T>;
	startComputation(): void;
	endComputation(): void;
}

interface MithrilRoute {
	(rootElement: Element, defaultRoute: string, routes: { [key: string]: MithrilModule }): void;
	(rootElement: HTMLDocument, defaultRoute: string, routes: { [key: string]: MithrilModule }): void;
	(path: string, params?: any, shouldReplaceHistory?: boolean): void;
	(element: Element, isInitialized: boolean): void;
	(): string;
	mode: string;
	param: MithrilParam;
	buildQueryString(data: Object): string;
	parseQueryString(queryString: string): Object;
}

interface MithrilParam {
	(param: string): string;
}

interface MithrilRedraw {
	(): void;
	strategy: (value?: string) => string;
}

interface MithrilVirtualElement {
	tag: string;
	attrs: Object;
	children: any;
}

interface MithrilModule {
	controller: Function;
	view: (controller?: any) => MithrilVirtualElement;
}

interface MithrilDeferred<T> {
	resolve(value?: T): void;
	reject(value?: any): void;
	promise: MithrilPromise<T>;
}

interface MithrilPromise<T> {
	(value?: T): T;
	then<R>(successCallback?: (value: T) => R, errorCallback?: (value: any) => any): MithrilPromise<R>;
	then<R>(successCallback?: (value: T) => MithrilPromise<R>, errorCallback?: (value: any) => any): MithrilPromise<R>;
}

interface MithrilPromiseProperty<T> extends MithrilPromise<T> {
	(): T;
	(value: T): T;
	toJSON(): T;
}

interface MithrilXHROptions {
	method: string;
	url: string;
	user?: string;
	password?: string;
	data?: any;
	background?: boolean;
	unwrapSuccess?(data: any): any;
	unwrapError?(data: any): any;
	serialize?(dataToSerialize: any): string;
	deserialize?(dataToDeserialize: string): any;
	extract?(xhr: XMLHttpRequest, options: MithrilXHROptions): string;
	type?(data: Object): void;
	config?(xhr: XMLHttpRequest, options: MithrilXHROptions): XMLHttpRequest;
}

declare var Mithril: MithrilStatic;
declare var m: MithrilStatic;
