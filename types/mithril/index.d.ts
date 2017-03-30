// Type definitions for Mithril 1.1
// Project: http://lhorie.github.io/mithril/
// Definitions by: Leo Horie <https://github.com/lhorie>, Chris Bowdon <https://github.com/cbowdon>, Mike Linkovich <https://github.com/spacejack>, András Parditka <https://github.com/andraaspar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace Mithril {
	export interface Lifecycle<Attrs, State> {
		/** Any property attached to the component object is copied for every instance of the component. This allows simple state initialization. */
		[propName: string]: any;
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
	}

	export interface Hyperscript {
		/** Creates a virtual element (Vnode). */
		(selector: string, ...children: Children[]): Vnode<any, any>;
		/** Creates a virtual element (Vnode). */
		(selector: string, attributes: Attributes, ...children: Children[]): Vnode<any, any>;
		/** Creates a virtual element (Vnode). */
		<Attrs, State>(component: ComponentTypes<Attrs, State>, attributes: Attrs & Lifecycle<Attrs, State> & { key?: string | number }, ...args: Children[]): Vnode<Attrs, State>;
		/** Creates a virtual element (Vnode). */
		<Attrs, State>(component: ComponentTypes<Attrs, State>, ...args: Children[]): Vnode<Attrs, State>;
		/** Creates a fragment virtual element (Vnode). */
		fragment(attrs: Lifecycle<any, any> & { [key: string]: any }, children: ChildArrayOrPrimitive): Vnode<any, any>;
		/** Turns an HTML string into a virtual element (Vnode). Do not use trust on unsanitized user input. */
		trust(html: string): Vnode<any, any>;
	}

	export interface RouteResolver<State, Params> {
		/** The onmatch hook is called when the router needs to find a component to render. */
		render?(this: State, vnode: Vnode<State, Params>): Children;
		/** The render method is called on every redraw for a matching route. */
		onmatch?(args: Params, requestedPath: string): Component<any, any> | Promise<any> | void;
	}

	/** This represents a key-value mapping linking routes to components. */
	export interface RouteDefs {
		/** The key represents the route. The value represents the corresponding component. */
		[url: string]: ComponentTypes<any, any> | RouteResolver<any, any>;
	}

	export interface RouteOptions {
		/** Routing parameters. If path has routing parameter slots, the properties of this object are interpolated into the path string. */
		replace?: boolean;
		/** The state object to pass to the underlying history.pushState / history.replaceState call.*/
		state?: any;
		/** The title string to pass to the underlying history.pushState / history.replaceState call. */
		title?: string;
	}

	export interface Route {
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

	export interface Mount {
		/** Mounts a component to a DOM element, enabling it to autoredraw on user events. */
		(element: Element, component: ComponentTypes<any, any>): void;
		/** Unmounts a component from a DOM element. */
		(element: Element, component: null): void;
	}

	/** Creates an event handler which takes the value of the specified DOM element property and calls a function with it as the argument. */
	export type WithAttr = (name: string, callback: (value: any) => any, thisArg?: any) => (e: { currentTarget: any, [p: string]: any }) => void;

	/** Returns an object with key/value pairs parsed from a string of the form: ?a=1&b=2 */
	export type ParseQueryString = (queryString: string) => { [p: string]: any };

	/** Turns the key/value pairs of an object into a string of the form: a=1&b=2 */
	export type BuildQueryString = (values: { [p: string]: any }) => string;

	export interface RequestOptions<T> {
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
		headers?: any;
		/** A constructor to be applied to each object in the response. */
		type?: new (o: any) => any;
		/** A serialization method to be applied to data. Defaults to JSON.stringify, or if options.data is an instance of FormData, defaults to the identity function. */
		serialize?(data: any): any;
		/** A deserialization method to be applied to the response. Defaults to a small wrapper around JSON.parse that returns null for empty responses. */
		deserialize?(data: string): T;
		/** A hook to specify how the XMLHttpRequest response should be read. Useful for reading response headers and cookies. Defaults to a function that returns xhr.responseText */
		extract?(xhr: XMLHttpRequest, options: RequestOptions<T>): T;
		/** Force the use of the HTTP body section for data in GET requests when set to true, or the use of querystring for other HTTP methods when set to false. Defaults to false for GET requests and true for other methods. */
		useBody?: boolean;
		/** If false, redraws mounted components upon completion of the request. If true, it does not. */
		background?: boolean;
	}

	export interface RequestOptionsAll<T> extends RequestOptions<T> {
		/** The URL to send the request to. */
		url: string;
	}

	export interface Request {
		/** Makes an XHR request and returns a promise. */
		<T>(options: RequestOptionsAll<T>): Promise<T>;
		/** Makes an XHR request and returns a promise. */
		<T>(url: string, options?: RequestOptions<T>): Promise<T>;
	}

	export interface JsonpOptions {
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

	export interface JsonpOptionsAll extends JsonpOptions {
		/** The URL to send the request to. */
		url: string;
	}

	export interface Jsonp {
		/** Makes a JSON-P request and returns a promise. */
		<T>(options: JsonpOptionsAll): Promise<T>;
		/** Makes a JSON-P request and returns a promise. */
		<T>(url: string, options?: JsonpOptions): Promise<T>;
	}

	export interface RequestService {
		request: Request;
		jsonp: Jsonp;
	}

	/** Renders a vnode structure into a DOM element. */
	export type Render = (el: Element, vnodes: Children) => void;

	export interface RenderService {
		render: Render
	}

	/** Manually triggers a redraw of mounted components. */
	export type Redraw = () => void;

	export interface RedrawService {
		redraw: Redraw
		render: Render
	}

	export interface Static extends Hyperscript {
		route: Route;
		/** Activates a component, enabling it to autoredraw on user events. */
		mount: Mount;
		/** Returns a event handler that can be bound to an element, firing with the specified property. */
		withAttr: WithAttr;
		render: Render;
		redraw: Redraw;
		request: Request;
		jsonp: Jsonp;
		/** Parse a query string into an object. */
		parseQueryString: ParseQueryString;
		/** Serialize an object into a query string. */
		buildQueryString: BuildQueryString;
		/** A string containing the semver value for the current Mithril release. */
		version: string;
	}

	// Vnode children types
	export type Child = Vnode<any, any> | string | number | boolean | null | undefined;
	export interface ChildArray extends Array<Children> { }
	export type Children = Child | ChildArray;
	export type ChildArrayOrPrimitive = ChildArray | string | number | boolean;

	/** Virtual DOM nodes, or vnodes, are Javascript objects that represent an element (or parts of the DOM). */
	export interface Vnode<Attrs, State extends Lifecycle<Attrs, State>> {
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
		/** This is used instead of children if a vnode contains a text node as its only child. This is done for performance reasons. Component vnodes never use the text property even if they have a text node as their only child. */
		text?: string | number | boolean;
	}

	// In some lifecycle methods, Vnode will have a dom property
	// and possibly a domSize property.
	export interface VnodeDOM<Attrs, State> extends Vnode<Attrs, State> {
		/** Points to the element that corresponds to the vnode. */
		dom: Element;
		/** This defines the number of DOM elements that the vnode represents (starting from the element referenced by the dom property). */
		domSize?: number;
	}

	export interface CVnode<A> extends Vnode<A, ClassComponent<A>> { }

	export interface CVnodeDOM<A> extends VnodeDOM<A, ClassComponent<A>> { }

	/** Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse. Any Javascript object that has a view method is a Mithril component. Components can be consumed via the m() utility. */
	export interface Component<Attrs, State extends Lifecycle<Attrs, State>> extends Lifecycle<Attrs, State> {
		/** Creates a view out of virtual elements. */
		view(this: State, vnode: Vnode<Attrs, State>): Children | null | void;
	}

	export interface ClassComponent<A> extends Lifecycle<A, ClassComponent<A>> {
		view(this: ClassComponent<A>, vnode: CVnode<A>): Children | null | void;
	}

	// Factory component
	export type FactoryComponent<A> = (vnode: Vnode<A, {}>) => Component<A, {}>

	/** Components are a mechanism to encapsulate parts of a view to make code easier to organize and/or reuse. Any Javascript object that has a view method is a Mithril component. Components can be consumed via the m() utility. */
	export type Comp<Attrs, State extends Lifecycle<Attrs, State>> = Component<Attrs, State> & State;

	export type ComponentTypes<A, S> = Component<A, S> | { new (vnode: CVnode<A>): ClassComponent<A> } | FactoryComponent<A>

	/** This represents the attributes available for configuring virtual elements, beyond the applicable DOM attributes.*/
	export interface Attributes extends Lifecycle<any, any> {
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
