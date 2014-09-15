// Type definitions for Mithril
// Project: http://lhorie.github.io/mithril/
// Definitions by: Leo Horie <https://github.com/lhorie>, Chris Bowdon <https://github.com/cbowdon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//Mithril type definitions for Typescript

interface MithrilStatic {
	(selector: string, attributes: Object, children?: any): MithrilVirtualElement;
	(selector: string, children?: any): MithrilVirtualElement;
	prop(value?: any): (value?: any) => any;
	withAttr(property: string, callback: (value: any) => void): (e: Event) => any;
	module(rootElement: Node, module: MithrilModule): void;
	trust(html: string): String;
	render(rootElement: Element, children?: any): void;
	render(rootElement: HTMLDocument, children?: any): void;
	redraw(): void;
	route(rootElement: Element, defaultRoute: string, routes: { [key: string]: MithrilModule }): void;
	route(rootElement: HTMLDocument, defaultRoute: string, routes: { [key: string]: MithrilModule }): void;
	route(path: string, params?: any, shouldReplaceHistory?: boolean): void;
	route(): string;
	route(element: Element, isInitialized: boolean): void;
	request(options: MithrilXHROptions): MithrilPromise;
	deferred(): MithrilDeferred;
	sync(promises: MithrilPromise[]): MithrilPromise;
	startComputation(): void;
	endComputation(): void;
}

interface MithrilVirtualElement {
	tag: string;
	attrs: Object;
	children: any;
}

interface MithrilModule {
	controller: Function;
	view: Function;
}

interface MithrilDeferred {
	resolve(value?: any): void;
	reject(value?: any): void;
	promise: MithrilPromise;
}

interface MithrilPromise {
	(value?: any): any;
	then(successCallback?: (value: any) => any, errorCallback?: (value: any) => any): MithrilPromise;
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
