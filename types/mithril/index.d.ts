// Type definitions for Mithril 1.1
// Project: https://mithril.js.org/
// Definitions by: Mike Linkovich <https://github.com/spacejack>, András Parditka <https://github.com/andraaspar>, Isiah Meadows <https://github.com/isiahmeadows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/** Manually triggers a redraw of mounted components. */
declare function redraw(): void;

/** Renders a vnode structure into a DOM element. */
declare function render(el: Element, vnodes: Mithril.Children): void;

/** Mounts a component to a DOM element, enabling it to autoredraw on user events. */
declare function mount(element: Element, component: Mithril.ComponentTypes<any, any>): void;
/** Unmounts a component from a DOM element. */
declare function mount(element: Element, component: null): void; // tslint:disable-line unified-signatures

/** Makes an XHR request and returns a promise. */
declare function request <T>(options: Mithril.RequestOptions<T> & { url: string }): Promise<T>;
/** Makes an XHR request and returns a promise. */
declare function request <T>(url: string, options?: Mithril.RequestOptions<T>): Promise<T>;

/** Makes a JSON-P request and returns a promise. */
declare function jsonp<T>(options: Mithril.JsonpOptions & { url: string }): Promise<T>;
/** Makes a JSON-P request and returns a promise. */
declare function jsonp<T>(url: string, options?: Mithril.JsonpOptions): Promise<T>;

/** Creates an event handler which takes the value of the specified DOM element property and calls a function with it as the argument. */
declare function withAttr(name: string, callback: (value: any) => any): (e: { currentTarget: any, [p: string]: any }) => void;
/** Creates an event handler which takes the value of the specified DOM element property and calls a function with it as the argument. */
declare function withAttr<T>(name: string, callback: (this: T, value: any) => any, thisArg: T): (e: { currentTarget: any, [p: string]: any }) => void;

declare namespace Mithril {
	interface Lifecycle<Attrs, State> {
		/** The oninit hook is called before a vnode is touched by the virtual DOM engine. */
		oninit?(this: State, vnode: Vnode<Attrs, State>): any;
		/** The oncreate hook is called after a DOM element is created and attached to the document. */
		oncreate?(this: State, vnode: VnodeDOM<Attrs, State>): any;
		/** The onbeforeupdate hook is called before a vnode is diffed in a update. */
		onbeforeremove?(this: State, vnode: VnodeDOM<Attrs, State>): Promise<any> | void;
		/** The onupdate hook is called after a DOM element is updated, while attached to the document. */
		onremove?(this: State, vnode: VnodeDOM<Attrs, State>): any;
		/** The onbeforeremove hook is called before a DOM element is detached from the document. If a Promise is returned, Mithril only detaches the DOM element after the promise completes. */
		onbeforeupdate?(this: State, vnode: Vnode<Attrs, State>, old: VnodeDOM<Attrs, State>): boolean | void;
		/** The onremove hook is called before a DOM element is removed from the document. */
		onupdate?(this: State, vnode: VnodeDOM<Attrs, State>): any;
		/** WORKAROUND: TypeScript 2.4 does not allow extending an interface with all-optional properties. */
		[_: number]: any;
	}

	interface Hyperscript {
		/** Creates a virtual element (Vnode). */
		(selector: string, ...children: Children[]): Vnode<any, any>;
		/** Creates a virtual element (Vnode). */
		(selector: string, attributes: Attributes, ...children: Children[]): Vnode<any, any>;
		/** Creates a virtual element (Vnode). */
		<Attrs, State>(component: ComponentTypes<Attrs, State>, ...args: Children[]): Vnode<Attrs, State>;
		/** Creates a virtual element (Vnode). */
		<Attrs, State>(component: ComponentTypes<Attrs, State>, attributes: Attrs & Lifecycle<Attrs, State> & { key?: string | number }, ...args: Children[]): Vnode<Attrs, State>;
		/** Creates a fragment virtual element (Vnode). */
		fragment(attrs: Lifecycle<any, any> & { [key: string]: any }, children: ChildArrayOrPrimitive): Vnode<any, any>;
		/** Turns an HTML string into a virtual element (Vnode). Do not use trust on unsanitized user input. */
		trust(html: string): Vnode<any, any>;
	}

	interface RouteResolver<Attrs, State> {
		/** The onmatch hook is called when the router needs to find a component to render. */
		onmatch?(this: this, args: Attrs, requestedPath: string): Component<any, any> | Promise<any> | void;
		/** The render method is called on every redraw for a matching route. */
		render?(this: this, vnode: Vnode<Attrs, State>): Children;
	}

	/** This represents a key-value mapping linking routes to components. */
	interface RouteDefs {
		/** The key represents the route. The value represents the corresponding component. */
		[url: string]: ComponentTypes<any, any> | RouteResolver<any, any>;
	}

	interface RouteOptions {
		/** Routing parameters. If path has routing parameter slots, the properties of this object are interpolated into the path string. */
		replace?: boolean;
		/** The state object to pass to the underlying history.pushState / history.replaceState call. */
		state?: any;
		/** The title string to pass to the underlying history.pushState / history.replaceState call. */
		title?: string;
	}

	interface Route {
		/** Creates application routes and mounts Components and/or RouteResolvers to a DOM element. */
		(element: Element, defaultRoute: string, routes: RouteDefs): void;
		/** Returns the last fully resolved routing path, without the prefix. */
		get(): string;
		/** Redirects to a matching route or to the default route if no matching routes can be found. */
		set(route: string, data?: any, options?: RouteOptions): void;
		/** Defines a router prefix which is a fragment of the URL that dictates the underlying strategy used by the router. */
		prefix(urlFragment: string): void;
		/** This method is meant to be used in conjunction with an <a> Vnode's oncreate hook. */
		link(vnode: Vnode<any, any>): (e?: Event) => any;
		/** Returns the named parameter value from the current route. */
		param(name: string): string;
		/** Gets all route parameters. */
		param(): any;
	}

	interface RequestOptions<T> {
		/** The HTTP method to use. */
		method?: string;
		/** The data to be interpolated into the URL and serialized into the querystring (for GET requests) or body (for other types of requests). */
		data?: any;
		/** Whether the request should be asynchronous. Defaults to true. */
		async?: boolean;
		/** A username for HTTP authorization. */
		user?: string;
		/** A password for HTTP authorization. */
		password?: string;
		/** Whether to send cookies to 3rd party domains. */
		withCredentials?: boolean;
		/** Exposes the underlying XMLHttpRequest object for low-level configuration. */
		config?(xhr: XMLHttpRequest): any;
		/** Headers to append to the request before sending it. */
		headers?: { [key: string]: string };
		/** A constructor to be applied to each object in the response. */
		type?: new (o: any) => any;
		/** A serialization method to be applied to data. Defaults to JSON.stringify, or if options.data is an instance of FormData, defaults to the identity function. */
		serialize?(data: any): any;
		/** A deserialization method to be applied to the response. Defaults to a small wrapper around JSON.parse that returns null for empty responses. */
		deserialize?(data: string): T;
		/** A hook to specify how the XMLHttpRequest response should be read. Useful for reading response headers and cookies. Defaults to a function that returns xhr.responseText */
		extract?(xhr: XMLHttpRequest, options: this): T;
		/**
		 * Force the use of the HTTP body section for data in GET requests when set to true,
		 * or the use of querystring for other HTTP methods when set to false.
		 * Defaults to false for GET requests and true for other methods.
		 */
		useBody?: boolean;
		/** If false, redraws mounted components upon completion of the request. If true, it does not. */
		background?: boolean;
	}

	interface JsonpOptions {
		/** The data to be interpolated into the URL and serialized into the querystring. */
		data?: any;
		/** A constructor to be applied to each object in the response. */
		type?: new (o: any) => any;
		/** The name of the function that will be called as the callback. */
		callbackName?: string;
		/** The name of the querystring parameter name that specifies the callback name. */
		callbackKey?: string;
		/** If false, redraws mounted components upon completion of the request. If true, it does not. */
		background?: boolean;
	}

	interface Static extends Hyperscript {
		route: Route;
		mount: typeof mount;
		withAttr: typeof withAttr;
		render: typeof render;
		redraw: typeof redraw;
		request: typeof request;
		jsonp: typeof jsonp;
		/** Returns an object with key/value pairs parsed from a string of the form: ?a=1&b=2 */
		parseQueryString(queryString: string): { [p: string]: any };
		/** Turns the key/value pairs of an object into a string of the form: a=1&b=2 */
		buildQueryString(values: { [p: string]: any }): string;
		/** A string containing the semver value for the current Mithril release. */
		version: string;
	}

	// Vnode children types
	type Child = Vnode<any, any> | string | number | boolean | null | undefined;
	interface ChildArray extends Array<Children> { }
	type Children = Child | ChildArray;
	type ChildArrayOrPrimitive = ChildArray | string | number | boolean;

	/** Virtual DOM nodes, or vnodes, are Javascript objects that represent an element (or parts of the DOM). */
	interface Vnode<Attrs, State extends Lifecycle<Attrs, State>> {
		/** The nodeName of a DOM element. It may also be the string [ if a vnode is a fragment, # if it's a text vnode, or < if it's a trusted HTML vnode. Additionally, it may be a component. */
		tag: string | Component<Attrs, State>;
		/** A hashmap of DOM attributes, events, properties and lifecycle methods. */
		attrs: Attrs;
		/** An object that is persisted between redraws. In component vnodes, state is a shallow clone of the component object. */
		state: State;
		/** The value used to map a DOM element to its respective item in an array of data. */
		key?: string | number;
		/** In most vnode types, the children property is an array of vnodes. For text and trusted HTML vnodes, The children property is either a string, a number or a boolean. */
		children?: ChildArrayOrPrimitive;
		/**
		 * This is used instead of children if a vnode contains a text node as its only child.
		 * This is done for performance reasons.
		 * Component vnodes never use the text property even if they have a text node as their only child.
		 */
		text?: string | number | boolean;
	}

	// In some lifecycle methods, Vnode will have a dom property
	// and possibly a domSize property.
	interface VnodeDOM<Attrs, State extends Lifecycle<Attrs, State>> extends Vnode<Attrs, State> {
		/** Points to the element that corresponds to the vnode. */
		dom: Element;
		/** This defines the number of DOM elements that the vnode represents (starting from the element referenced by the dom property). */
		domSize?: number;
	}

	interface CVnode<A> extends Vnode<A, ClassComponent<A>> { }

	interface CVnodeDOM<A> extends VnodeDOM<A, ClassComponent<A>> { }

	/**
	 * Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse.
	 * Any Javascript object that has a view method can be used as a Mithril component.
	 * Components can be consumed via the m() utility.
	 */
	interface Component<Attrs, State extends Lifecycle<Attrs, State>> extends Lifecycle<Attrs, State> {
		/** Creates a view out of virtual elements. */
		view(this: State, vnode: Vnode<Attrs, State>): Children | null | void;
	}

	/**
	 * Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse.
	 * Any class that implements a view method can be used as a Mithril component.
	 * Components can be consumed via the m() utility.
	 */
	interface ClassComponent<A> extends Lifecycle<A, ClassComponent<A>> {
		/** The oninit hook is called before a vnode is touched by the virtual DOM engine. */
		oninit?(vnode: Vnode<A, this>): any;
		/** The oncreate hook is called after a DOM element is created and attached to the document. */
		oncreate?(vnode: VnodeDOM<A, this>): any;
		/** The onbeforeupdate hook is called before a vnode is diffed in a update. */
		onbeforeremove?(vnode: VnodeDOM<A, this>): Promise<any> | void;
		/** The onupdate hook is called after a DOM element is updated, while attached to the document. */
		onremove?(vnode: VnodeDOM<A, this>): any;
		/** The onbeforeremove hook is called before a DOM element is detached from the document. If a Promise is returned, Mithril only detaches the DOM element after the promise completes. */
		onbeforeupdate?(vnode: Vnode<A, this>, old: VnodeDOM<A, this>): boolean | void;
		/** The onremove hook is called before a DOM element is removed from the document. */
		onupdate?(vnode: VnodeDOM<A, this>): any;
		/** Creates a view out of virtual elements. */
		view(vnode: Vnode<A, this>): Children | null | void;
	}

	/**
	 * Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse.
	 * Any function that returns an object with a view method can be used as a Mithril component.
	 * Components can be consumed via the m() utility.
	 */
	type FactoryComponent<A> = (vnode: Vnode<A, {}>) => Component<A, {}>;

	/**
	 * Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse.
	 * Any Javascript object that has a view method is a Mithril component. Components can be consumed via the m() utility.
	 */
	type Comp<Attrs, State extends Lifecycle<Attrs, State>> = Component<Attrs, State> & State;

	/** Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse. Components can be consumed via the m() utility. */
	type ComponentTypes<A, S> = Component<A, S> | { new (vnode: CVnode<A>): ClassComponent<A> } | FactoryComponent<A>;

	/** This represents the attributes available for configuring virtual elements, beyond the applicable DOM attributes. */
	interface Attributes extends Lifecycle<any, any> {
		/** The class name(s) for this virtual element, as a space-separated list. */
		className?: string;
		/** The class name(s) for this virtual element, as a space-separated list. */
		class?: string;
		/** A key to optionally associate with this element. */
		key?: string | number;
		/** Any other virtual element properties, including attributes and event handlers. */
		[property: string]: any;
	}
}

declare const Mithril: Mithril.Static;
export = Mithril;
