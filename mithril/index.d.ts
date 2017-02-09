// Type definitions for Mithril 1.0.0
// Project: http://lhorie.github.io/mithril/
// Definitions by: Leo Horie <https://github.com/lhorie>, Chris Bowdon <https://github.com/cbowdon>, András Parditka <https://github.com/andraaspar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Mithril type definitions for Typescript

/**
* This is the module containing all the types/declarations/etc. for Mithril
*/
declare namespace Mithril {
	interface ChildArray extends Array<Children> {}
	type Children = Child | ChildArray;
	type Child = string | number | boolean | Vnode<any, any>;
	
	interface Static {
		/**
		* Creates a virtual element for use with m.render, m.mount, etc.
		*
		* @param selector A simple CSS selector. May include SVG tags. Nested
		* selectors are not supported.
		* @param children Child elements, components, and text to add.
		* @return A virtual element.
		*
		* @see m.render
		* @see m.mount
		*/
		(
			selector: string,
			...children: Children[]
		): Vnode<any, any>;

		/**
		* Creates a virtual element for use with m.render, m.mount, etc.
		*
		* @param selector A simple CSS selector. May include SVG tags. Nested
		* selectors are not supported.
		* @param attributes Attributes to add. Any DOM attribute may be used
		* as an attribute, although innerHTML and the like may be overwritten
		* silently.
		* @param children Child elements, components, and text to add.
		* @return A virtual element.
		*
		* @see m.render
		* @see m.mount
		*/
		(
			selector: string,
			attributes: Attributes,
			...children: Children[]
		): Vnode<any, any>;

		/**
		* Initializes a component for use with m.render, m.mount, etc.
		*
		* @param component A component.
		* @param args Arguments to optionally pass to the component.
		* @return A component.
		*
		* @see m.render
		* @see m.mount
		* @see m
		*/
		<State, Attrs>(
			component: Component<State, Attrs>,
			attributes: Attrs,
			...args: Children[]
		): Vnode<State, Attrs>;

		/**
		* Initializes a component for use with m.render, m.mount, etc.
		*
		* @param component A component.
		* @param args Arguments to optionally pass to the component.
		* @return A component.
		*
		* @see m.render
		* @see m.mount
		* @see m
		*/
		<State, Attrs>(
			component: Component<State, Attrs>,
			...args: Children[]
		): Vnode<State, Attrs>;

		/**
		* Returns a event handler that can be bound to an element, firing with
		* the specified property.
		*
		* @param property The property to get from the event.
		* @param callback The handler to use the value from the event.
		* @return A function suitable for listening to an event.
		*/
		withAttr(
			property: string,
			callback: (value: any) => any,
			callbackThis?: any
		): (e: Event) => void;

		/**
		 * Activates a component, enabling it to autoredraw on user events.
		 *
		 * @param rootElement The base node.
		 * @param component The component to mount.
		 */
		mount<State, Attributes>(
			rootElement: Element,
			component: Component<State, Attributes>
		): void;

		/**
		* Trust this string of HTML.
		*
		* @param html The HTML to trust
		* @return A virtual node with an added internal flag to mark it as
		* trusted.
		*/
		trust(html: string): Vnode<any, any>;

		render: Render;

		/**
		* Updates the DOM after a change in the application data layer.
		*/
		redraw(): void;

		route: Route;

		/**
		* Serialize an object into a query string.
		*
		* @param data The data to serialize.
		* @return The serialized string.
		*/
		buildQueryString(data: {[propName: string]: any}): string;

		/**
		* Parse a query string into an object.
		*
		* @param data The data to parse.
		* @return The parsed object data.
		*/
		parseQueryString(data: string): {[propName: string]: any};

		/**
		* Send an XHR request to a server. Note that the `url` option is
		* required.
		*
		* @param options The options to use for the request.
		* @return A promise to the returned data, or void if not applicable.
		*
		* @see XHROptions for the available options.
		*/
		request(url: string, options?: XHROptions): Promise<any>
		
		/**
		* Send an XHR request to a server. Note that the `url` option is
		* required.
		*
		* @param options The options to use for the request.
		* @return A promise to the returned data, or void if not applicable.
		*
		* @see XHROptions for the available options.
		*/
		request(options: XHROptions): Promise<any>

		/**
		* Send a JSONP request to a server. Note that the `url` option is
		* required.
		*
		* @param options The options to use
		* @return A promise to the returned data.
		*
		* @see JSONPOptions for the available options.
		*/
		jsonp(url: string, options?: JSONPOptions): Promise<any>;

		/**
		* Send a JSONP request to a server. Note that the `url` option is
		* required.
		*
		* @param options The options to use
		* @return A promise to the returned data.
		*
		* @see JSONPOptions for the available options.
		*/
		jsonp(options: JSONPOptions): Promise<any>;
		
		/**
		 * Allows attaching lifecycle methods to a fragment vnode.
		 */
		fragment(attrs: LifeCycle<any, any>, children: Children): Vnode<any, any>;
		
		/**
		 * A string containing the semver value for the current Mithril release.
		 */
		version: string;
	}
	
	interface Route {
		/**
		* Enable routing, mounting a controller based on the route. It
		* automatically mounts the components for you, starting with the one
		* specified by the default route.
		*
		* @param rootElement The element to mount the active controller to.
		* @param defaultRoute The route to start with.
		* @param routes A key-value mapping of pathname to controller.
		*/
		(
			root: Element,
			defaultRoute: string,
			routes: Routes
		): void;

		/**
		* This allows m.route to be used as the `config` attribute for a
		* virtual element, particularly useful for cases like this:
		*
		* ```ts
		* // Note that the '#' is not required in `href`, thanks to the
		* `config` setting.
		* m("a[href='/dashboard/alicesmith']", {oncreate: m.route.link});
		* ```
		*/
		link(vdom: Vnode<any, any>): (e?: Event) => any;

		/**
		* Redirects to a matching route, or to the default route if no
		* matching routes can be found.
		*
		* @param path The path to route to, without a prefix.
		* @param data Routing parameters.
		* @param options Options.
		*/
		set(path: string, data?: any, options?: RouteOptions): void;

		/**
		* Returns the last fully resolved routing path, without the prefix.
		*
		* @return Returns the last fully resolved path.
		*/
		get(): string;

		/**
		* Gets a route parameter.
		*
		* @param key The key to get.
		* @return The value associated with the parameter key.
		*/
		param(key: string): string;

		/**
		* Gets all route parameters.
		*
		* @return All route parameters.
		*/
		param(): Object;

		/**
		 * Defines a router prefix.
		 */
		prefix(prefix: string): void;
	}
	
	interface RouteOptions {
		/**
		 * Routing parameters. If path has routing parameter slots, the
		 * properties of this object are interpolated into the path string.
		 */
		replace?: boolean;
		
		/**
		 * The state object to pass to the underlying history.pushState /
		 * history.replaceState call.
		 */
		state?: Object;
		
		/**
		 * The title string to pass to the underlying history.pushState /
		 * history.replaceState call.
		 */
		title?: string;
	}

	/**
	* This represents a key-value mapping linking routes to components.
	*/
	interface Routes {
		/**
		* The key represents the route. The value represents the corresponding
		* component.
		*/
		[key: string]: Component<any, any> | RouteResolver<any, any>;
	}
	
	interface RouteResolver<State, Params> {
		/**
		 * This hook is called when the router needs to find a component to
		 * render.
		 */
		onmatch?: (args: Params, requestedPath: string) => Component<any, any> | Promise<Component<any, any>>;
		
		/**
		 * This is called on every redraw for a matching route.
		 */
		render?: (this: State, vnode: Vnode<State, Params>) => Children;
	}

	/**
	* Virtual DOM nodes, or vnodes, are Javascript objects that represent an
	* element (or parts of the DOM).
	*
	* @see m
	*/
	interface Vnode<State, Attrs> {
		/**
		 * The nodeName of a DOM element. It may also be the string [ if a vnode
		 * is a fragment, # if it's a text vnode, or < if it's a trusted HTML
		 * vnode. Additionally, it may be a component.
		 */
		tag: string | Component<State, Attrs>;

		/**
		 * The value used to map a DOM element to its respective item in an
		 * array of data.
		 */
		key?: string | number;

		/**
		 * A hashmap of DOM attributes, events, properties and lifecycle
		 * methods.
		 */
		attrs?: Attrs;

		/**
		 * In most vnode types, the children property is an array of vnodes. For
		 * text and trusted HTML vnodes, The children property is either a
		 * string, a number or a boolean.
		 */
		children?: Children;

		/**
		 * This is used instead of children if a vnode contains a text node as
		 * its only child. This is done for performance reasons. Component
		 * vnodes never use the text property even if they have a text node as
		 * their only child.
		 */
		text?: string | number | boolean;

		/**
		 * Points to the element that corresponds to the vnode. This property is
		 * undefined in the oninit lifecycle method. In fragments and trusted
		 * HTML vnodes, dom points to the first element in the range.
		 */
		dom?: Element;

		/**
		 * This is only set in fragment and trusted HTML vnodes, and it's
		 * undefined in all other vnode types. It defines the number of DOM
		 * elements that the vnode represents (starting from the element
		 * referenced by the dom property).
		 */
		domSize?: number;

		/**
		 * An object that is persisted between redraws. In component vnodes,
		 * state is a shallow clone of the component object.
		 */
		state: State;

		/**
		 * An object that is persisted between redraws and that stores event
		 * handlers so that they can be removed using the DOM API. The events
		 * property is undefined if there are no event handlers defined. This
		 * property is only used internally by Mithril, do not use it.
		 */
		events?: {
			[propName: string]: any;
		};
	}

	/**
	* This represents the attributes available for configuring virtual elements,
	* beyond the applicable DOM attributes.
	*
	* @see m
	*/
	interface Attributes {
		/**
		* The class name(s) for this virtual element, as a space-separated list.
		*/
		className?: string;

		/**
		* The class name(s) for this virtual element, as a space-separated list.
		*/
		class?: string;

		/**
		* A key to optionally associate with this element.
		*/
		key?: string | number;

		/**
		* Any other virtual element properties, including attributes and event
		* handlers.
		*/
		[property: string]: any;
	}
	
	interface LifeCycle<State, Attrs> {
		/**
		 * Any property attached to the component object is copied for every
		 * instance of the component. This allows simple state initialization.
		 */
		[propName: string]: any;

		/**
		 * This hook is called before a vnode is touched by the virtual DOM
		 * engine.
		*/
		oninit?: (this: State, vnode: Vnode<State, Attrs>) => any;

		/**
		 * This hook is called after a DOM element is created and attached to
		 * the document.
		 */
		oncreate?: (this: State, vnode: Vnode<State, Attrs>) => any;
		
		/**
		 * This hook is called before a vnode is diffed in a update. If this
		 * function is defined and returns false, Mithril prevents a diff from
		 * happening to the vnode, and consequently to the vnode's children.
		 */
		onbeforeupdate?: (this: State, vnode: Vnode<State, Attrs>, old: Vnode<State, Attrs>) => any;

		/**
		 * This hook is called after a DOM element is updated, while attached to
		 * the document.
		 */
		onupdate?: (this: State, vnode: Vnode<State, Attrs>) => any;

		/**
		 * This hook is called before a DOM element is detached from the
		 * document. If a Promise is returned, Mithril only detaches the DOM
		 * element after the promise completes.
		 */
		onbeforeremove?: (this: State, vnode: Vnode<State, Attrs>) => any;

		/**
		 * This hook is called before a DOM element is removed from the
		 * document. If a onbeforeremove hook is also defined, the onremove hook
		 * runs after the promise returned from onbeforeremove is completed.
		 */
		onremove?: (this: State, vnode: Vnode<State, Attrs>) => any;
	}
	
	interface ComponentMethods<State, Attrs> extends LifeCycle<State, Attrs> {
		
		/**
		* Creates a view out of virtual elements.
		*/
		view(this: State, vnode: Vnode<State, Attrs>): Children;
	}

	/**
	 * Components are a mechanism to encapsulate parts of a view to make code
	 * easier to organize and/or reuse. Any Javascript object that has a view
	 * method is a Mithril component. Components can be consumed via the m()
	 * utility.
	 *
	 * @see m
	 */
	type Component<State, Attrs> = ComponentMethods<State, Attrs> & State;
	
	interface JSONPOptions {
		
		/**
		 * The URL to send the request to.
		 */
		url?: string;
		
		/**
		 * The data to be interpolated into the URL and serialized into the
		 * querystring.
		 */
		data?: any;
		
		/**
		 * A constructor to be applied to each object in the response.
		 */
		type?: new (o: any) => any;
		
		/**
		 * The name of the function that will be called as the callback.
		 */
		callbackName?: string;
		
		/**
		 * The name of the querystring parameter name that specifies the
		 * callback name.
		 */
		callbackKey?: string;
	}

	interface XHROptions {
		
		/**
		 * The HTTP method to use.
		 */
		method?: string;
		
		/**
		 * The URL to send the request to. 
		 */
		url?: string;
		
		/**
		 * The data to be interpolated into the URL and serialized into the
		 * querystring (for GET requests) or body (for other types of requests).
		 */
		data?: any;
		
		/**
		 * Whether the request should be asynchronous. Defaults to true.
		 */
		async?: boolean;
		
		/**
		 * A username for HTTP authorization.
		 */
		user?: string;
		
		/**
		 * A password for HTTP authorization.
		 */
		password?: string;
		
		/**
		 * Whether to send cookies to 3rd party domains.
		 */
		withCredentials?: boolean;
		
		/**
		 * Exposes the underlying XMLHttpRequest object for low-level
		 * configuration.
		 */
		config?: (xhr: XMLHttpRequest) => any;
		
		/**
		 * Headers to append to the request before sending it.
		 */
		headers?: any;
		
		/**
		 * A constructor to be applied to each object in the response.
		 */
		type?: new (o: any) => any;
		
		/**
		 * A serialization method to be applied to data. Defaults to
		 * JSON.stringify, or if options.data is an instance of FormData,
		 * defaults to the identity function.
		 */
		serialize?: (data: any) => any;
		
		/**
		 * A deserialization method to be applied to the response. Defaults to a
		 * small wrapper around JSON.parse that returns null for empty
		 * responses.
		 */
		deserialize?: (data: any) => any;
		
		/**
		 * A hook to specify how the XMLHttpRequest response should be read.
		 * Useful for reading response headers and cookies. Defaults to a
		 * function that returns xhr.responseText
		 */
		extract?: (xhr: XMLHttpRequest, options: XHROptions) => string;
		
		/**
		 * Force the use of the HTTP body section for data in GET requests when
		 * set to true, or the use of querystring for other HTTP methods when
		 * set to false. Defaults to false for GET requests and true for other
		 * methods.
		 */
		useBody?: boolean;
		
		/**
		 * If false, redraws mounted components upon completion of the request.
		 * If true, it does not.
		 */
		background?: boolean;
	}
	
	interface Combiner<T> {
		(...args: (Stream<any> | Stream<any>[])[]): T;
	}

	interface CreateStream {
		/**
		 * Creates a stream.
		 * 
		 * @param value The value of the stream.
		 */
		<T>(value?: T): Stream<T>;
		
		/**
		 * Creates a computed stream that reactively updates if any of its
		 * upstreams are updated.
		 */
		combine<T>(combiner: Combiner<T>, streams: Stream<any>[]): Stream<T>;
		
		/**
		 * Creates a stream whose value is the array of values from an array of
		 * streams.
		 */
		merge<T>(streams: Stream<T>[]): Stream<T[]>;
		
		/**
		 * A special value that can be returned to stream callbacks to halt
		 * execution of downstreams.
		 */
		readonly HALT: any;
	}

	interface Stream<T> {
		/**
		 * Get stream value.
		 */
		(): T;

		/**
		 * Set stream value.
		 * 
		 * @param value The value of the stream.
		 */
		(value: T): void;
		
		/**
		 * Creates a dependent stream whose value is set to the result of the
		 * callback function.
		 */
		map<U>(callback: (value: T) => U): Stream<U>;
		
		/**
		 * A co-dependent stream that unregisters dependent streams when set to
		 * true.
		 */
		end: Stream<boolean>;
		
		/**
		 * When a stream is passed as the argument to JSON.stringify(), the
		 * value of the stream is serialized.
		 */
		toJSON(): string;
		
		/**
		 * Returns the value of the stream.
		 */
		valueOf(): T;
	}
	
	interface Render {
		/**
		 * Renders a template to the DOM.
		 */
		(
			rootElement: Element,
			children: Children
		): void;
	}
}

declare const m: Mithril.Static;
declare const stream: Mithril.CreateStream;

declare module "mithril" {
	export = m;
}

declare module "mithril/stream" {
	export = stream;
}

declare module "mithril/render" {
	const render: Mithril.Render;
	export = render;
}
