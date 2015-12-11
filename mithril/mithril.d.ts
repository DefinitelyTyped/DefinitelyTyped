//Mithril type definitions for Typescript
declare module _mithril {
	interface MithrilStatic {

		<T extends MithrilController>(selector: string, attributes: MithrilAttributes, ...children: Array<string|MithrilVirtualElement|MithrilComponent<T>>): MithrilVirtualElement;
		<T extends MithrilController>(selector: string, ...children: Array<string|MithrilVirtualElement|MithrilComponent<T>>): MithrilVirtualElement;

		prop<T>(promise: MithrilPromise<T>) : MithrilPromiseProperty<T>;
		prop<T>(value: T): MithrilProperty<T>;
		prop(): MithrilProperty<Object>; // might be that this should be Property<any>

		withAttr(property: string, callback: (value: any) => void): (e: MithrilEvent) => any;

		module<T extends MithrilController>(rootElement: Node, component: MithrilComponent<T>): T;
		module<T extends MithrilController>(rootElement: Node): T;
		mount<T extends MithrilController>(rootElement: Node, component: MithrilComponent<T>): T;
		mount<T extends MithrilController>(rootElement: Node): T;

		component<T extends MithrilController>(component: MithrilComponent<T>, ...args: Array<any>): MithrilComponent<T>
		
		trust(html: string): string;

		render(rootElement: Element|HTMLDocument): void;
		render(rootElement: Element|HTMLDocument, children: MithrilVirtualElement, forceRecreation?: boolean): void;
		render(rootElement: Element|HTMLDocument, children: MithrilVirtualElement[], forceRecreation?: boolean): void;

		redraw: {
			(force?: boolean): void;
			strategy: MithrilProperty<string>;
		}

		route: {
			<T extends MithrilController>(rootElement: HTMLDocument, defaultRoute: string, routes: MithrilRoutes<T>): void;
			<T extends MithrilController>(rootElement: Element, defaultRoute: string, routes: MithrilRoutes<T>): void;

			(element: Element, isInitialized: boolean, context: Object, vdom: Object): void;
			(path: string, params?: any, shouldReplaceHistory?: boolean): void;
			(): string;

			param(key: string): string;
			mode: string;
			buildQueryString(data: Object): String
			parseQueryString(data: String): Object
		}

		request<T>(options: MithrilXHROptions): MithrilPromise<T>;

		deferred: {
			onerror(e: Error): void;
			<T>(): MithrilDeferred<T>;
		}

		sync<T>(promises: MithrilPromise<T>[]): MithrilPromise<T[]>;

		startComputation(): void;
		endComputation(): void;

		// For test suite
		deps: {
			(mockWindow: Window): Window;
			factory: Object;
		}

	}

	interface MithrilVirtualElement {
		key?: number;
		tag?: string;
		attrs?: MithrilAttributes;
		children?: any[];
	}

	// Configuration function for an element
	interface MithrilElementConfig {
		(element: Element, isInitialized: boolean, context?: any, vdom?: MithrilVirtualElement): void;
	}

	// Attributes on a virtual element
	interface MithrilAttributes {
		title?: string;
		className?: string;
		class?: string;
		config?: MithrilElementConfig;
	}

	// Defines the subset of Event that Mithril needs
	interface MithrilEvent {
		currentTarget: Element;
	}

	interface MithrilController {
		onunload?(evt: Event): any;
	}

	interface MithrilControllerFunction extends MithrilController {
		(): any;
	}

	interface MithrilView<T extends MithrilController> {
		(ctrl: T): string|MithrilVirtualElement;
	}

	interface MithrilComponent<T extends MithrilController> {
		controller: MithrilControllerFunction|{ new(): T };
		view: MithrilView<T>;
	}

	interface MithrilProperty<T> {
		(): T;
		(value: T): T;
		toJSON(): T;
	}

	interface MithrilPromiseProperty<T> extends MithrilPromise<T> {
		(): T;
		(value: T): T;
		toJSON(): T;
	}

	interface MithrilRoutes<T extends MithrilController> {
		[key: string]: MithrilComponent<T>;
	}


	interface MithrilDeferred<T> {
		resolve(value?: T): void;
		reject(value?: any): void;
		promise: MithrilPromise<T>;
	}

	interface MithrilSuccessCallback<T, U> {
		(value: T): U;
		(value: T): MithrilPromise<U>;
	}

	interface MithrilErrorCallback<U> {
		(value: Error): U;
		(value: string): U;
	}

	interface MithrilPromise<T> {
		(): T;
		(value: T): T;
		then<U>(success: (value: T) => U): MithrilPromise<U>;
		then<U>(success: (value: T) => MithrilPromise<U>): MithrilPromise<U>;
		then<U,V>(success: (value: T) => U, error: (value: Error) => V): MithrilPromise<U>|MithrilPromise<V>;
		then<U,V>(success: (value: T) => MithrilPromise<U>, error: (value: Error) => V): MithrilPromise<U>|MithrilPromise<V>;
	}
	interface MithrilXHROptions {
		method?: string;
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
		dataType?: string;
	}
}

declare var Mithril: _mithril.MithrilStatic;
declare var m: _mithril.MithrilStatic;

declare module "mithril" {
    export = m;
}
