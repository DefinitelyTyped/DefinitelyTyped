// Type definitions for Zepto 1.0
// Project: http://zeptojs.com/
// Definitions by: Josh Baldwin <https://github.com/jbaldwin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
zepto-1.0rc1.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/zepto.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

interface ZeptoStatic {

	/**
	 * Core
	 **/

	/**
	* Create a Zepto collection object by performing a CSS selector, wrapping DOM nodes, or creating elements from an HTML string.
	* @param selector
	* @param context
	* @return
	**/
	(selector: string, context?: any): ZeptoCollection;

	/**
	* @see ZeptoStatic();
	* @param collection
	**/
	(collection: ZeptoCollection): ZeptoCollection;

	/**
	* @see ZeptoStatic();
	* @param element
	**/
	(element: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoStatic();
	* @param htmlString
	**/
	(htmlString: string): ZeptoCollection;

	/**
	* @see ZeptoStatic();
	* @param attributes
	**/
	(htmlString: string, attributes: any): ZeptoCollection;

	/**
	* @see ZeptoStatic();
	* @param object
	**/
	(object: any): ZeptoCollection;		// window and document tests break without this

	/**
	* Turn a dasherized string into “camel case”. Doesn’t affect already camel-cased strings.
	* @param str
	* @return
	**/
	camelCase(str: string): string;

	/**
	* Check if the parent node contains the given DOM node. Returns false if both are the same node.
	* @param parent
	* @param node
	* @return
	**/
	contains(parent: HTMLElement, node: HTMLElement): boolean;

	/**
	* Iterate over array elements or object key-value pairs. Returning false from the iterator function stops the iteration.
	* @param collection
	* @param fn
	**/
	each(collection: any[], fn: (index: number, item: any) => boolean): void;

	/**
	* @see ZeptoStatic.each
	**/
	each(collection: any, fn: (key: string, value: any) => boolean): void;

	/**
	* Extend target object with properties from each of the source objects, overriding the properties on target.
	* By default, copying is shallow. An optional true for the first argument triggers deep (recursive) copying.
	* @param target
	* @param sources
	* @return
	**/
	extend(target: any, ...sources: any[]): any;

	/**
	* @see ZeptoStatic.extend
	* @param deep
	**/
	extend(deep: boolean, target: any, ...sources: any[]): any;

	/**
	* Zepto.fn is an object that holds all of the methods that are available on Zepto collections, such as addClass(), attr(), and other. Adding a function to this object makes that method available on every Zepto collection.
	**/
	fn: any;

	/**
	* Get a new array containing only the items for which the callback function returned true.
	* @param items
	* @param fn
	* @return
	**/
	grep(items: any[], fn: (item: any) => boolean): any[];

	/**
	* Get the position of element inside an array, or -1 if not found.
	* @param element
	* @param array
	* @param fromIndex
	* @return
	**/
	inArray(element: any, array: any[], fromIndex?: number): number;

	/**
	* True if the object is an array.
	* @param object
	* @return
	**/
	isArray(object: any): boolean;

	/**
	* True if the object is a function.
	* @param object
	* @return
	**/
	isFunction(object: any): boolean;

	/**
	* True if the object is a “plain” JavaScript object, which is only true for object literals and objects created with new Object.
	* @param object
	* @return
	**/
	isPlainObject(object: any): boolean;

	/**
	* True if the object is a window object. This is useful for iframes where each one has its own window, and where these objects fail the regular obj === window check.
	* @param object
	* @return
	**/
	isWindow(object: any): boolean;

	/**
	* Iterate through elements of collection and return all results of running the iterator function, with null and undefined values filtered out.
	* @param collection
	* @param fn
	* @return
	**/
	map(collection: any[], fn: (item: any, index: number) => any): any[];

	/**
	* Alias for the native JSON.parse method.
	* @param str
	* @retrun
	**/
	parseJSON(str: string): any;

	/**
	* Remove whitespace from beginning and end of a string; just like String.prototype.trim().
	* @param str
	* @return
	**/
	trim(str: string): string;

	/**
	* Get string type of an object. Possible types are: null undefined boolean number string function array date regexp object error.
	* For other objects it will simply report “object”. To find out if an object is a plain JavaScript object, use isPlainObject.
	* @param object
	* @return
	**/
	type(object: any): string;

	/**
	* Event
	**/

	/**
	* Create and initialize a DOM event of the specified type. If a properties object is given, use it to extend the new event object. The event is configured to bubble by default; this can be turned off by setting the bubbles property to false.
	* An event initialized with this function can be triggered with trigger.
	* @param type
	* @param properties
	* @return
	**/
	Event(type: string, properties: any): Event;

	/**
	* Get a function that ensures that the value of this in the original function refers to the context object. In the second form, the original function is read from the specific property of the context object.
	**/
	proxy(fn: Function, context: any): Function;

	/**
	* Ajax
	**/

	/**
	* Perform an Ajax request. It can be to a local resource, or cross-domain via HTTP access control support in browsers or JSONP.
	* Options:
	*	type (default: “GET”): HTTP request method (“GET”, “POST”, or other)
	*	url (default: current URL): URL to which the request is made
	*	data (default: none): data for the request; for GET requests it is appended to query string of the URL. Non-string objects will get serialized with $.param
	*	processData (default: true): whether to automatically serialize data for non-GET requests to string
	*	contentType (default: “application/x-www-form-urlencoded”): the Content-Type of the data being posted to the server (this can also be set via headers). Pass false to skip setting the default value.
	*	dataType (default: none): response type to expect from the server (“json”, “jsonp”, “xml”, “html”, or “text”)
	*	timeout (default: 0): request timeout in milliseconds, 0 for no timeout
	*	headers: object of additional HTTP headers for the Ajax request
	*	async (default: true): set to false to issue a synchronous (blocking) request
	*	global (default: true): trigger global Ajax events on this request
	*	context (default: window): context to execute callbacks in
	*	traditional (default: false): activate traditional (shallow) serialization of data parameters with $.param
	*  If the URL contains =? or dataType is “jsonp”, the request is performed by injecting a <script> tag instead of using XMLHttpRequest (see JSONP). This has the limitation of contentType, dataType, headers, and async not being supported.
	* @param options
	* @return
	**/
	ajax(options: ZeptoAjaxSettings): XMLHttpRequest;

	/**
	* Perform a JSONP request to fetch data from another domain.
	* This method has no advantages over $.ajax and should not be used.
	* @param options Ajax settings to use with JSONP call.
	* @deprecated use $.ajax instead.
	**/
	ajaxJSONP(options: ZeptoAjaxSettings): XMLHttpRequest;

	/**
	* Object containing the default settings for Ajax requests. Most settings are described in $.ajax. The ones that are useful when set globally are:
	* @example
	*	timeout (default: 0): set to a non-zero value to specify a default timeout for Ajax requests in milliseconds
	*	global (default: true): set to false to prevent firing Ajax events
	*	xhr (default: XMLHttpRequest factory): set to a function that returns instances of XMLHttpRequest (or a compatible object)
	*	accepts: MIME types to request from the server for specific dataType values:
	*		script: “text/javascript, application/javascript”
	*		json: “application/json”
	*		xml: “application/xml, text/xml”
	*		html: “text/html”
	*		text: “text/plain”
	**/
	ajaxSettings: ZeptoAjaxSettings;

	/**
	* Perform an Ajax GET request. This is a shortcut for the $.ajax method.
	* @param url URL to send the HTTP GET request to.
	* @param fn Callback function when the HTTP GET request is completed.
	* @return The XMLHttpRequest object.
	**/
	get (url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void ): XMLHttpRequest;

	/**
	* @see ZeptoStatic.get
	* @param data See ZeptoAjaxSettings.data
	**/
	get (url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void ): XMLHttpRequest;

	/**
	* Get JSON data via Ajax GET request. This is a shortcut for the $.ajax method.
	* @param url URL to send the HTTP GET request to.
	* @param fn Callback function when the HTTP GET request is completed.
	* @return The XMLHttpRequest object.
	**/
	getJSON(url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void ): XMLHttpRequest;

	/**
	* @see ZeptoStatic.getJSON
	* @param data See ZeptoAjaxSettings.data
	**/
	getJSON(url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void ): XMLHttpRequest;

	/**
	* Serialize an object to a URL-encoded string representation for use in Ajax request query strings and post data. If shallow is set, nested objects are not serialized and nested array values won’t use square brackets on their keys.
	* Also accepts an array in serializeArray format, where each item has “name” and “value” properties.
	* @param object Serialize this object to URL-encoded string representation.
	* @param shallow Only serialize the first level of `object`.
	* @return Seralized URL-encoded string representation of `object`.
	**/
	param(object: any, shallow?: boolean): string;

	/**
	* Perform an Ajax POST request. This is a shortcut for the $.ajax method.
	* @param url URL to send the HTTP POST request to.
	* @param fn Callback function when the HTTP POST request is completed.
	* @return The XMLHttpRequest object.
	**/
	post(url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void , dataType?: string): XMLHttpRequest;

	/**
	* @see ZeptoStatic.post
	* @param data See ZeptoAjaxSettings.data
	**/
	post(url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void , dataType?: string): XMLHttpRequest;

	/**
	* Effects
	**/

	/**
	* Global settings for animations.
	**/
	fx: ZeptoEffects;

	/**
	* Detect
	**/

	/**
	* The following boolean flags are set to true if they apply, if not they're either set to 'false' or 'undefined'.  We recommend accessing them with `!!` prefixed to coerce to a boolean.
	**/
	os: {
		/**
		* OS version.
		**/
		version: string;

		/**
		* General device type
		**/
		phone: boolean;
		tablet: boolean;

		/**
		* Specific OS
		**/
		ios: boolean;
		android: boolean;
		webos: boolean;
		blackberry: boolean;
		bb10: boolean;
		rimtabletos: boolean;

		/**
		* Specific device type
		**/
		iphone: boolean;
		ipad: boolean;
		touchpad: boolean;
		kindle: boolean;
	};

	/**
	* The following boolean flags are set to true if they apply, if not they're either set to 'false' or 'undefined'.  We recommend accessing them with `!!` prefixed to coerce to a boolean.
	**/
	browser: {
		/**
		* Browser version.
		**/
		version: string;

		/**
		* Specific browser
		**/
		chrome: boolean;
		firefox: boolean;
		silk: boolean;
		playbook: boolean;

	};
}

interface ZeptoEffects {

	/**
	* (default false in browsers that support CSS transitions): set to true to disable all animate() transitions.
	**/
	off: boolean;

	/**
	* An object with duration settings for animations.
	* Change existing values or add new properties to affect animations that use a string for setting duration.
	**/
	speeds: ZeptoEffectsSpeeds;
}

interface ZeptoEffectsSpeeds {

	/**
	* Default = 400ms.
	**/
	_default: number;

	/**
	* Default = 200ms.
	**/
	fast: number;

	/**
	* Default = 600ms.
	**/
	slow: number;
}

interface ZeptoCollection {

	/**
	* Core
	**/

	/**
	* Modify the current collection by adding the results of performing the CSS selector on the whole document, or, if context is given, just inside context elements.
	* @param selector
	* @param context
	* @return Self object.
	**/
	add(selector: string, context?: any): ZeptoCollection;

	/**
	* Add class name to each of the elements in the collection. Multiple class names can be given in a space-separated string.
	* @param name
	* @return Self object.
	**/
	addClass(name: string): ZeptoCollection;

	/**
	* Add content to the DOM after each elements in the collection. The content can be an HTML string, a DOM node or an array of nodes.
	* @param content
	* @return Self object.
	**/
	after(content: string): ZeptoCollection;

	/*
	* @see ZeptoCollection.after
	**/
	after(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.after
	**/
	after(content: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.after
	**/
	after(content: ZeptoCollection): ZeptoCollection;

	/**
	* Append content to the DOM inside each individual element in the collection. The content can be an HTML string, a DOM node or an array of nodes.
	* @param content
	* @return Self object.
	**/
	append(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.append
	**/
	append(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.append
	**/
	append(content: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.append
	**/
	append(content: ZeptoCollection): ZeptoCollection;

	/**
	* Append elements from the current collection to the target element. This is like append, but with reversed operands.
	* @param target
	* @return Self object.
	**/
	appendTo(target: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.appendTo
	**/
	appendTo(target: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.appendTo
	**/
	appendTo(target: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.appendTo
	**/
	appendTo(target: ZeptoCollection): ZeptoCollection;

	/**
	* Read or set DOM attributes. When no value is given, reads specified attribute from the first element in the collection. When value is given, sets the attribute to that value on each element in the collection. When value is null, the attribute is removed (like with removeAttr). Multiple attributes can be set by passing an object with name-value pairs.
	* To read DOM properties such as checked or selected, use prop.
	* @param name
	* @return
	**/
	attr(name: string): string;

	/**
	* @see ZeptoCollection.attr
	* @param value
	**/
	attr(name: string, value: any): ZeptoCollection;

	/**
	* @see ZeptoCollection.attr
	* @param fn
	* @param oldValue
	**/
	attr(name: string, fn: (index: number, oldValue: any) => void ): ZeptoCollection;

	/**
	* @see ZeptoCollection.attr
	* @param object
	**/
	attr(object: any): ZeptoCollection;

	/**
	* Add content to the DOM before each element in the collection. The content can be an HTML string, a DOM node or an array of nodes.
	* @param content
	* @return Self object.
	**/
	before(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.before
	**/
	before(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.before
	**/
	before(content: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.before
	**/
	before(content: ZeptoCollection): ZeptoCollection;

	/**
	* Get immediate children of each element in the current collection. If selector is given, filter the results to only include ones matching the CSS selector.
	* @param selector
	* @return Children elements.
	**/
	children(selector?: string): ZeptoCollection;

	/**
	* Duplicate all elements in the collection via deep clone.
	* (!) This method doesn't have an option for copying data and event handlers over to the new elements, as it has in jQuery.
	* @return Clone of the self object.
	**/
	clone(): ZeptoCollection;

	/**
	* Traverse upwards from the current element to find the first element that matches the selector. If context node is given, consider only elements that are its descendants. This method is similar to parents(selector), but it only returns the first ancestor matched.
	* If a Zepto collection or element is given, the resulting element will have to match one of the given elements instead of a selector.
	* @param selector
	* @param context
	* @return Closest element from the selector and context.
	**/
	closest(selector: string, context?: any): ZeptoCollection;

	/**
	* Modify the collection by adding elements to it. If any of the arguments is an array, its elements are merged into the current collection.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @param nodes
	* @return Self object.
	**/
	concat(...nodes: any[]): ZeptoCollection;

	/**
	* Get the children of each element in the collection, including text and comment nodes.
	* @return Children including text and comment nodes.
	**/
	contents(): ZeptoCollection;

	/**
	* Read or set CSS properties on DOM elements. When no value is given, returns the CSS property from the first element in the collection. When a value is given, sets the property to that value on each element of the collection. Multiple properties can be set by passing an object to the method.
	* When a value for a property is blank (empty string, null, or undefined), that property is removed. When a unitless number value is given, “px” is appended to it for properties that require units.
	* @param property
	* @return
	**/
	css(property: string): any;

	/**
	* @see ZeptoCollection.css
	* @param value
	**/
	css(property: string, value: any): ZeptoCollection;

	/**
	* @see ZeptoCollection.css
	* @param properties
	**/
	css(properties: any): ZeptoCollection;

	/**
	* Read or write data-* DOM attributes. Behaves like attr, but prepends data- to the attribute name.
	* When reading attribute values, the following conversions apply:
	*	“true”, “false”, and “null” are converted to corresponding types;
	*	number values are converted to actual numeric types;
	*	JSON values are parsed, if it’s valid JSON;
	*	everything else is returned as string.
	* (!)  Zepto's basic implementation of `data()` only stores strings. To store arbitrary objects, include the optional "data" module in your custom build of Zepto.
	* @param name
	* @return
	**/
	data(name: string): any;

	/**
	* @see ZeptoCollection.data
	* @param value
	**/
	data(name: string, value: any): ZeptoCollection;

	/**
	* Iterate through every element of the collection. Inside the iterator function, this keyword refers to the current item (also passed as the second argument to the function). If the iterator function returns false, iteration stops.
	* @param fn
	* @param item
	* @return Self object.
	**/
	each(fn: (index: number, item: any) => boolean): ZeptoCollection;

	/**
	* Clear DOM contents of each element in the collection.
	* @return Self object.
	**/
	empty(): ZeptoCollection;

	/**
	* Get the item at position specified by index from the current collection.
	* @param index
	* @return Item specified by index in this collection.
	**/
	eq(index: number): ZeptoCollection;

	/**
	* Filter the collection to contain only items that match the CSS selector. If a function is given, return only elements for which the function returns a truthy value. Inside the function, the this keyword refers to the current element.
	* For the opposite, see not.
	* @param selector
	* @return Filtered collection.
	**/
	filter(selector: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.filter
	* @param fn
	**/
	filter(fn: (index: number) => boolean): ZeptoCollection;

	/**
	* Find elements that match CSS selector executed in scope of nodes in the current collection.
	* If a Zepto collection or element is given, filter those elements down to only ones that are descendants of element in the current collection.
	* @param selector
	* @return Found items.
	**/
	find(selector: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.find
	* @param collection
	**/
	find(collection: ZeptoCollection): ZeptoCollection;

	/**
	* @see ZeptoCollection.find
	* @param element
	**/
	find(element: Element): ZeptoCollection;

	/**
	* Get the first element of the current collection.
	* @return First element in the current collection.
	**/
	first(): ZeptoCollection;

	/**
	* Iterate through every element of the collection. Similar to each, but the arguments for the iterator functions are different, and returning false from the iterator won’t stop the iteration.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @param fn
	* @return
	**/
	forEach(fn: (item: any, index: number, array: any[]) => void ): ZeptoCollection;

	/**
	* Get all elements or a single element from the current collection. When no index is given, returns all elements in an ordinary array. When index is specified, return only the element at that position. This is different than eq in the way that the returned node is not wrapped in a Zepto collection.
	* @return
	**/
	get (): HTMLElement[];

	/**
	* @see ZeptoCollection.get
	* @param index
	**/
	get (index: number): HTMLElement;

	/**
	* Filter the current collection to include only elements that have any number of descendants that match a selector, or that contain a specific DOM node.
	* @param selector
	* @return
	**/
	has(selector: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.has
	* @param node
	**/
	has(node: HTMLElement): ZeptoCollection;

	/**
	* Check if any elements in the collection have the specified class.
	* @param name
	* @return
	**/
	hasClass(name: string): boolean;

	/**
	* Get the height of the first element in the collection; or set the height of all elements in the collection.
	* @return
	**/
	height(): number;

	/**
	* @see ZeptoCollection.height
	* @param value
	**/
	height(value: number): ZeptoCollection;

	/**
	* @see ZeptoCollection.height
	* @param fn
	**/
	height(fn: (index: number, oldHeight: number) => void ): ZeptoCollection;

	/**
	* Hide elements in this collection by setting their display CSS property to none.
	* @return
	**/
	hide(): ZeptoCollection;

	/**
	* Get or set HTML contents of elements in the collection. When no content given, returns innerHTML of the first element. When content is given, use it to replace contents of each element. Content can be any of the types described in append.
	* @return
	**/
	html(): string;

	/**
	* @see ZeptoCollection.html
	* @param content
	**/
	html(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.html
	* @param content
	**/
	html(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.html
	* @param content
	**/
	html(content: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.html
	* @param fn
	**/
	html(fn: (index: number, oldHtml: string) => void ): ZeptoCollection;

	/**
	* Get the position of an element. When no element is given, returns position of the current element among its siblings. When an element is given, returns its position in the current collection. Returns -1 if not found.
	* @param element
	* @return
	**/
	index(element?: string): number;

	/**
	* @see ZeptoCollection.index
	* @param element
	**/
	index(element?: HTMLElement): number;

	/**
	* @see ZeptoCollection.index
	* @param element
	**/
	index(element?: any): number; // not sure so leaving in for now

	/**
	* Get the position of an element in the current collection. If fromIndex number is given, search only from that position onwards. Returns the 0-based position when found and -1 if not found. Use of index is recommended over this method.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @see ZeptoCollection.index
	* @param element
	* @param fromIndex
	* @return
	**/
	indexOf(element: string, fromIndex?: number): number;

	/**
	* @see ZeptoCollection.indexOf
	* @param element
	**/
	indexOf(element: HTMLElement, fromIndex?: number): number;

	/**
	* @see ZeptoCollection.indexOf
	* @param element
	**/
	indexOf(element: any, fromIndex?: number): number; // not sure so leaving in for now

	/**
	* Insert elements from the current collection after the target element in the DOM. This is like after, but with reversed operands.
	* @param target
	* @return
	**/
	insertAfter(target: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.insertAfter
	* @param target
	**/
	insertAfter(target: HTMLElement): ZeptoCollection;

	/**
	* Insert elements from the current collection before each of the target elements in the DOM. This is like before, but with reversed operands.
	* @param target
	* @return
	**/
	insertBefore(target: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.insertBefore
	* @param target
	**/
	insertBefore(target: HTMLElement): ZeptoCollection;

	/**
	* Check if the first element of the current collection matches the CSS selector. For basic support of jQuery’s non-standard pseudo-selectors such as :visible, include the optional “selector” module.
	* (!) jQuery CSS extensions are not supported. The optional "selector" module only provides limited support for few of the most used ones.
	* @param selector
	* @return
	**/
	is(selector?: string): boolean;

	/**
	* Get the last element of the current collection.
	* @return
	**/
	last(): ZeptoCollection;

	/**
	* Iterate through all elements and collect the return values of the iterator function. Inside the iterator function, this keyword refers to the current item (also passed as the second argument to the function).
	* Returns a collection of results of iterator function, with null and undefined values filtered out.
	* @param fn
	* @return
	**/
	map(fn: (index: number, item: any) => any): ZeptoCollection;

	/**
	* Get the next sibling—optinally filtered by selector—of each element in the collection.
	* @param selector
	* @return
	**/
	next(selector?: string): ZeptoCollection;

	/**
	* Filter the current collection to get a new collection of elements that don’t match the CSS selector. If another collection is given instead of selector, return only elements not present in it. If a function is given, return only elements for which the function returns a falsy value. Inside the function, the this keyword refers to the current element.
	* For the opposite, see filter.
	* @param selector
	* @return
	**/
	not(selector: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.not
	* @param collection
	**/
	not(collection: ZeptoCollection): ZeptoCollection;

	/**
	* @see ZeptoCollection.not
	* @param fn
	**/
	not(fn: (index: number) => boolean): ZeptoCollection;

	/**
	* Get position of the element in the document. Returns an object with properties: top, left, width and height.
	* When given an object with properties left and top, use those values to position each element in the collection relative to the document.
	* @return
	**/
	offset(): ZeptoCoordinates;

	/**
	* @see ZeptoCollection.offset
	* @param coordinates
	**/
	offset(coordinates: ZeptoCoordinates): ZeptoCollection;

	/**
	* @see ZeptoCollection.offset
	* @param fn
	**/
	offset(fn: (index: number, oldOffset: number) => void ): ZeptoCollection;

	/**
	* Find the first ancestor element that is positioned, meaning its CSS position value is “relative”, “absolute” or “fixed”.
	* @return
	**/
	offsetParent(): ZeptoCollection;

	/**
	* Get immediate parents of each element in the collection. If CSS selector is given, filter results to include only ones matching the selector.
	* @param selector
	* @return
	**/
	parent(selector?: string): ZeptoCollection;

	/**
	* Get all ancestors of each element in the collection. If CSS selector is given, filter results to include only ones matching the selector.
	* To get only immediate parents, use parent. To only get the first ancestor that matches the selector, use closest.
	* @param selector
	* @return
	**/
	parents(selector?: string): ZeptoCollection;

	/**
	* Get values from a named property of each element in the collection, with null and undefined values filtered out.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @param property
	* @return
	**/
	pluck(property: string): string[];

	/**
	* Get the position of the first element in the collection, relative to the offsetParent. This information is useful when absolutely positioning an element to appear aligned with another.
	* Returns an object with properties: top, left.
	* @return
	**/
	position(): ZeptoPosition;

	/**
	* Prepend content to the DOM inside each element in the collection. The content can be an HTML string, a DOM node or an array of nodes.
	* @param content
	* @return
	**/
	prepend(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.prepend
	* @param content
	**/
	prepend(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.prepend
	* @param content
	**/
	prepend(content: HTMLElement[]): ZeptoCollection;

	/**
	* @see ZeptoCollection.prepend
	* @param content
	**/
	prepend(content: ZeptoCollection): ZeptoCollection;

	/**
	* Prepend elements of the current collection inside each of the target elements. This is like prepend, only with reversed operands.
	* @param content
	* @return
	**/
	prependTo(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.prependTo
	* @param content
	**/
	prependTo(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.prependTo
	* @param content
	**/
	prependTo(content: HTMLElement[]): ZeptoCollection;

        /**
	* @see ZeptoCollection.prependTo
	* @param content
	**/
	prependTo(content: ZeptoCollection): ZeptoCollection;

	/**
	* Get the previous sibling—optionally filtered by selector—of each element in the collection.
	* @param selector
	* @return
	**/
	prev(selector?: string): ZeptoCollection;

	/**
	* Read or set properties of DOM elements. This should be preferred over attr in case of reading values of properties that change with user interaction over time, such as checked and selected.
	* @param prop
	* @return
	**/
	prop(name: string): any;

	/**
	* @see ZeptoCollection.Prop
	* @param value
	**/
	prop(name: string, value: any): ZeptoCollection;

	/**
	* @see ZeptoCollection.Prop
	* @param fn
	**/
	prop(name: string, fn: (index: number, oldValue: any) => void ): ZeptoCollection;

	/**
	* Add elements to the end of the current collection.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @param elements
	* @return
	**/
	push(...elements: any[]): ZeptoCollection;

	/**
	* Attach an event handler for the “DOMContentLoaded” event that fires when the DOM on the page is ready. It’s recommended to use the $() function instead of this method.
	* @param fn
	* @return
	**/
	ready(fn: ($: ZeptoStatic) => void ): ZeptoCollection;

	/**
	* Identical to Array.reduce that iterates over current collection.
	* (!) This is a Zepto-provided method that is not part of the jQuery API.
	* @param fn
	* @return
	**/
	reduce(fn: (memo: any, item: any, index: number, array: any[], initial: any) => any): any;

	/**
	* Remove elements in the current collection from their parent nodes, effectively detaching them from the DOM.
	* @return
	**/
	remove(): ZeptoCollection;

	/**
	* Remove the specified attribute from all elements in the collection.
	* @param name
	* @return
	**/
	removeAttr(name: string): ZeptoCollection;

	/**
	* Remove the specified class name from all elements in the collection. When the class name isn’t given, remove all class names. Multiple class names can be given in a space-separated string.
	* @param name
	* @return
	**/
	removeClass(name?: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.removeClass
	* @param fn
	**/
	removeClass(fn: (index: number, oldClassName: string) => void ): ZeptoCollection;

	/**
	* Replace each element in the collection—both its contents and the element itself—with the new content. Content can be of any type described in before.
	* @param content
	* @return
	**/
	replaceWith(content: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.replacewith
	* @param content
	**/
	replaceWith(content: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.replacewith
	* @param content
	**/
	replaceWith(content: HTMLElement[]): ZeptoCollection;

	/**
	* Gets the value of how many pixels were scrolled so far on window or scrollable element on the page.
	* @return
	**/
	scrollTop(): number;

	/**
	* Restore the default value for the “display” property of each element in the array, effectively showing them if they were hidden with hide.
	* @return
	**/
	show(): ZeptoCollection;

	/**
	* Get all sibling nodes of each element in the collection. If CSS selector is specified, filter the results to contain only elements that match the selector.
	* @param selector
	* @return
	**/
	siblings(selector?: string): ZeptoCollection;

	/**
	* Get the number of elements in this collection.
	* @return
	**/
	size(): number;

	/**
	* Get the number of elements in this collection.
	**/
	length: number;

	/**
	* Extract the subset of this array, starting at start index. If end is specified, extract up to but not including end index.
	* @param start
	* @param end
	* @return
	**/
	slice(start?: number, end?: number): ZeptoCollection[];

	/**
	* Get or set the text content of elements in the collection. When no content is given, returns the text content of the first element in the collection. When content is given, uses it to replace the text contents of each element in the collection. This is similar to html, with the exception it can’t be used for getting or setting HTML.
	* @return
	**/
	text(): string;

	/**
	* @see ZeptoCollection.text
	* @param content
	* @return
	**/
	text(content: string): ZeptoCollection;

	/**
	* Toggle between showing and hiding each of the elements, based on whether the first element is visible or not. If setting is present, this method behaves like show if setting is truthy or hide otherwise.
	* @param setting
	* @return
	**/
	toggle(setting?: boolean): ZeptoCollection;

	/**
	* Toggle given class names (space-separated) in each element in the collection. The class name is removed if present on an element; otherwise it’s added. If setting is present, this method behaves like addClass if setting is truthy or removeClass otherwise.
	* @param names
	* @param setting
	* @return
	**/
	toggleClass(names: string, setting?: boolean): ZeptoCollection;

	/**
	* @see ZeptoCollection.toggleClass
	* @param fn
	**/
	toggleClass(fn: (index: number, oldClassNames: string) => void , setting?: boolean): ZeptoCollection;

	/**
	* Remove immediate parent nodes of each element in the collection and put their children in their place. Basically, this method removes one level of ancestry while keeping current elements in the DOM.
	* @return
	**/
	unwrap(): ZeptoCollection;

	/**
	* Get or set the value of form controls. When no value is given, return the value of the first element. For <select multiple>, an array of values is returend. When a value is given, set all elements to this value.
	* @return
	**/
	val(): string;

	/**
	* @see ZeptoCollection.val
	* @param value
	* @return
	**/
	val(value: any): ZeptoCollection;

	/**
	* @see ZeptoCollection.val
	* @param fn
	**/
	val(fn: (index: number, oldValue: any) => void ): ZeptoCollection;

	/**
	* Get the width of the first element in the collection; or set the width of all elements in the collection.
	* @return
	**/
	width(): number;

	/**
	* @see ZeptoCollection.width
	* @param value
	* @return
	**/
	width(value: number): ZeptoCollection;

	/**
	* @see ZeptoCollection.width
	* @param fn
	**/
	width(fn: (index: number, oldWidth: number) => void ): ZeptoCollection;

	/**
	* Wrap each element of the collection separately in a DOM structure. Structure can be a single element or several nested elements, and can be passed in as a HTML string or DOM node, or as a function that is called for each element and returns one of the first two types.
	* Keep in mind that wrapping works best when operating on nodes that are part of the DOM. When calling wrap() on a new element and then inserting the result in the document, the element will lose the wrapping.
	* @param structure
	* @return
	**/
	wrap(structure: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.wrap
	* @param structure
	**/
	wrap(structure: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.wrap
	* @param fn
	**/
	wrap(fn: (index: number) => string): ZeptoCollection;

	/**
	* Wrap all elements in a single structure. Structure can be a single element or several nested elements, and can be passed in as a HTML string or DOM node.
	* @param structure
	* @return
	**/
	wrapAll(structure: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.wrapAll
	* @param structure
	**/
	wrapAll(structure: HTMLElement): ZeptoCollection;

	/**
	* Wrap the contents of each element separately in a structure. Structure can be a single element or several nested elements, and can be passed in as a HTML string or DOM node, or as a function that is called for each element and returns one of the first two types.
	* @param structure
	* @return
	**/
	wrapInner(structure: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.wrapInner
	* @param structure
	**/
	wrapInner(structure: HTMLElement): ZeptoCollection;

	/**
	* @see ZeptoCollection.wrapInner
	* @param fn
	**/
	wrapInner(fn: (index: number) => string): ZeptoCollection;

	/**
	* Event
	**/

	/**
	* Attach an event handler to elements.
	* @deprecated use ZeptoCollection.on instead.
	* @param type
	* @param fn
	* @return
	**/
	bind(type: string, fn: (e: Event) => void ): ZeptoCollection;

	/**
	* Attach an event handler that is only triggered when the event originated from a node that matches a selector.
	* @depcreated use ZeptoCollection.on instead.
	* @param selector
	* @param type
	* @param fn
	* @return
	**/
	delegate(selector: string, type: string, fn: (e: Event) => void ): ZeptoCollection;

	/**
	* Detach event handler added by live.
	* @deprecated use ZeptoCollection.off instead.
	* @param type
	* @param fn
	* @return
	**/
	die(type: string, fn: (e: Event) => void ): ZeptoCollection;

	/**
	* @see ZeptoCollection.die
	* @deprecated use ZeptoCollection.off instead.
	* @param types
	**/
	die(types: any): ZeptoCollection;

	/**
	* Like delegate where the selector is taken from the current collection.
	* @deprepcated use ZeptoCollection.on instead.
	* @param type
	* @param fn
	* @return
	**/
	live(type: string, fn: (e: Event) => void ): ZeptoCollection;

	/**
	* Detach event handlers added with on. To detach a specific event handler, the same function must be passed that was used for on(). Otherwise, just calling this method with an event type with detach all handlers of that type. When called without arguments, it detaches all event handlers registered on current elements.
	* @param type
	* @param selector
	* @param fn
	* @return
	**/
	off(type: string, selector: string, fn: (e: Event) => boolean): ZeptoCollection;

	/**
	* @see ZeptoCollection.off
	**/
	off(type: string, fn: (e: Event) => boolean): ZeptoCollection;

	/**
	* @see ZeptoCollection.off
	**/
	off(type: string, selector?: string): ZeptoCollection;

	/**
	* @see ZeptoCollection.off
	**/
	off(): ZeptoCollection;

	/**
	* @see ZeptoCollection.off
	* @param events
	**/
	off(events: ZeptoEventHandlers, selector?: string): ZeptoCollection;

	/**
	* Add event handlers to the elements in collection. Multiple event types can be passed in a space-separated string, or as an object where event types are keys and handlers are values. If a CSS selector is given, the handler function will only be called when an event originates from an element that matches the selector.
	* Event handlers are executed in the context of the element to which the handler is attached, or the matching element in case a selector is provided. When an event handler returns false, preventDefault() is called for the current event, preventing the default browser action such as following links.
	* @param type
	* @param selector
	* @param fn
	* @return
	**/
	on(type: string, selector: string, fn: (e: Event) => boolean): ZeptoCollection;

	/**
	* @see ZeptoCollection.on
	**/
	on(type: string, fn: (e: Event) => boolean): ZeptoCollection;
	// todo: v0.9 will introduce string literals
	//on(type: 'ajaxStart', fn: ZeptoAjaxStartEvent): ZeptoCollection;
	//on(type: 'ajaxBeforeSend', fn: ZeptoAjaxBeforeSendEvent): ZeptoCollection;
	//on(type: 'ajaxSend', fn: ZeptoAjaxSendEvent): ZeptoCollection;
	//on(type: 'ajaxSuccess', fn: ZeptoAjaxSuccessEvent): ZeptoCollection;
	//on(type: 'ajaxError', fn: ZeptoAjaxErrorEvent): ZeptoCollection;
	//on(type: 'ajaxComplete', fn: ZeptoAjaxCompleteEvent): ZeptoCollection;
	//on(type: 'ajaxStop', fn: ZeptoAjaxStopEvent): ZeptoCollection;

	/**
	* @see ZeptoCollection.on
	* @param events
	**/
	on(events: ZeptoEventHandlers, selector?: string): ZeptoCollection;

	/**
	* Adds an event handler that removes itself the first time it runs, ensuring that the handler only fires once.
	* @param type
	* @param fn
	* @return
	**/
	one(type: string, fn: (e: Event) => void ): ZeptoCollection;

	/**
	* @see ZeptoCollection.one
	* @param events
	**/
	one(events: ZeptoEventHandlers): ZeptoCollection;

	/**
	* Trigger the specified event on elements of the collection. Event can either be a string type, or a full event object obtained with $.Event. If a data array is given, it is passed as additional arguments to event handlers.
	* (!) Zepto only supports triggering events on DOM elements.
	* @param event
	* @param data
	* @return
	**/
	trigger(event: string, data?: any[]): ZeptoCollection;

	/**
	* Like trigger, but triggers only event handlers on current elements and doesn’t bubble.
	* @param event
	* @param data
	* @return
	**/
	triggerHandler(event: string, data?: any[]): ZeptoCollection;

	/**
	* Detach event handler added with bind.
	* @deprecated use ZeptoCollection.off instead.
	* @param type
	* @param fn
	* @return
	**/
	unbind(type: string, fn: (e: Event) => boolean): ZeptoCollection;

	/**
	* Detach event handler added with delegate.
	* @deprecated use ZeptoCollection.off instead.
	* @param selector
	* @param type
	* @param fn
	* @return
	**/
	undelegate(selector: string, type: string, fn: (e: Event) => boolean): ZeptoCollection;

    focusin(): ZeptoCollection;
    focusin(fn: (e: Event) => any): ZeptoCollection;

    focusout(): ZeptoCollection;
    focusout(fn: (e: Event) => any): ZeptoCollection;

    load(): ZeptoCollection;
    load(fn: (e: Event) => any): ZeptoCollection;

    resize(): ZeptoCollection;
    resize(fn: (e: Event) => any): ZeptoCollection;

    scroll(): ZeptoCollection;
    scroll(fn: (e: Event) => any): ZeptoCollection;

    unload(): ZeptoCollection;
    unload(fn: (e: Event) => any): ZeptoCollection;

    click(): ZeptoCollection;
    click(fn: (e: Event) => any): ZeptoCollection;

    dblclick(): ZeptoCollection;
    dblclick(fn: (e: Event) => any): ZeptoCollection;

    mousedown(): ZeptoCollection;
    mousedown(fn: (e: Event) => any): ZeptoCollection;

    mouseup(): ZeptoCollection;
    mouseup(fn: (e: Event) => any): ZeptoCollection;

    mousemove(): ZeptoCollection;
    mousemove(fn: (e: Event) => any): ZeptoCollection;

    mouseover(): ZeptoCollection;
    mouseover(fn: (e: Event) => any): ZeptoCollection;

    mouseout(): ZeptoCollection;
    mouseout(fn: (e: Event) => any): ZeptoCollection;

    mouseenter(): ZeptoCollection;
    mouseenter(fn: (e: Event) => any): ZeptoCollection;

    mouseleave(): ZeptoCollection;
    mouseleave(fn: (e: Event) => any): ZeptoCollection;

    change(): ZeptoCollection;
    change(fn: (e: Event) => any): ZeptoCollection;

    select(): ZeptoCollection;
    select(fn: (e: Event) => any): ZeptoCollection;

    keydown(): ZeptoCollection;
    keydown(fn: (e: Event) => any): ZeptoCollection;

    keypress(): ZeptoCollection;
    keypress(fn: (e: Event) => any): ZeptoCollection;

    keyup(): ZeptoCollection;
    keyup(fn: (e: Event) => any): ZeptoCollection;

    error(): ZeptoCollection;
    error(fn: (e: Event) => any): ZeptoCollection;

    focus(): ZeptoCollection;
    focus(fn: (e: Event) => any): ZeptoCollection;

    blur(): ZeptoCollection;
    blur(fn: (e: Event) => any): ZeptoCollection;

	/**
	* Ajax
	**/

	/**
	* Set the html contents of the current collection to the result of a GET Ajax call to the given URL. Optionally, a CSS selector can be specified in the URL, like so, to use only the HTML content matching the selector for updating the collection:
	* $('#some_element').load('/foo.html #bar')
	* If no CSS selector is given, the complete response text is used instead.
	* Note that any JavaScript blocks found are only executed in case no selector is given.
	* @param url URL to send the HTTP GET request to.
	* @param fn Callback function when the HTTP GET request is completed.
	* @return Self object.
	* @example
	*	$('#some_element').load('/foo.html #bar')
	**/
	load(url: string, fn?: (data: any, status: string, xhr: XMLHttpRequest) => void ): ZeptoCollection;

	/**
	* Form
	**/

	/**
	* Serialize form values to an URL-encoded string for use in Ajax post requests.
	* @return Seralized form values in URL-encoded string.
	**/
	serialize(): string;

	/**
	* Serialize form into an array of objects with name and value properties. Disabled form controls, buttons, and unchecked radio buttons/checkboxes are skipped. The result doesn’t include data from file inputs.
	* @return Array with name value pairs from the Form.
	**/
	serializeArray(): any[];

	/**
	* Trigger or attach a handler for the submit event. When no function given, trigger the “submit” event on the current form and have it perform its submit action unless preventDefault() was called for the event.
	* When a function is given, this simply attaches it as a handler for the “submit” event on current elements.
	* @return Self object.
	**/
	submit(): ZeptoCollection;

	/**
	* @see ZeptoCollection.submit
	* @param fn Handler for the 'submit' event on current elements.
	* @return Self object.
	**/
	submit(fn: (e: any) => void ): ZeptoCollection;

	/**
	* Effects
	**/

	/**
	* Smoothly transition CSS properties of elements in the current collection.
	* @param properties object that holds CSS values to animate to; or CSS keyframe animation name.
	*	Zepto also supports the following CSS transform porperties:
	*		translate(X|Y|Z|3d)
	*		rotate(X|Y|Z|3d)
	*		scale(X|Y|Z)
	*		matrix(3d)
	*		perspective
	*		skew(X|Y)
	* @param duration (default 400): duration in milliseconds, or a string:
	*		fast (200 ms)
	*		slow (600 ms)
	*		any custom property of $.fx.speeds
	* @param easing (default linear): specifies the type of animation easing to use, one of:
	*		ease
	*		linear
	*		ease-in
	*		ease-out
	*		ease-in-out
	*		cubic-bezier(x1, y1, x2, y2)
	* @param complete Callback function when the animation has completed.
	* @return Self object.
	* @note If the duration is 0 or $.fx.off is true (default in a browser that doesn’t support CSS transitions), animations will not be executed; instead the target values will take effect instantly. Similarly, when the target CSS properties match the current state of the element, there will be no animation and the complete function won’t be called.
	*	If the first argument is a string instead of object, it is taken as a CSS keyframe animation name.
	* @note Zepto exclusively uses CSS transitions for effects and animation. jQuery easings are not supported. jQuery's syntax for relative changes ("=+10px") is not supported. See the spec for a list of animatable properties (http://www.w3.org/TR/css3-transitions/#animatable-properties-). Browser support may vary, so be sure to test in all browsers you want to support.
	**/
	animate(properties: any, duration?: number, easing?: string, complete?: () => void ): ZeptoCollection;

	/**
	* @see ZeptoCollection.animate
	* @param options Animation options.
	**/
	animate(properties: any, options: ZeptoAnimateSettings): ZeptoCollection;
}

interface ZeptoAjaxSettings {
	type?: string;
	url?: string;
	data?: any;
	processData?: boolean;
	contentType?: string;
	mimeType?: string;
	dataType?: string;
	jsonp?: string;
	jsonpCallback?: any; // string or Function
	timeout?: number;
	headers?: { [key: string]: string };
	async?: boolean;
	global?: boolean;
	context?: any;
	traditional?: boolean;
	cache?: boolean;
	xhrFields?: { [key: string]: any };
	username?: string;
	password?: string;
	beforeSend?: (xhr: XMLHttpRequest, settings: ZeptoAjaxSettings) => boolean;
	success?: (data: any, status: string, xhr: XMLHttpRequest) => void;
	error?: (xhr: XMLHttpRequest, errorType: string, error: Error) => void;
	complete?: (xhr: XMLHttpRequest, status: string) => void;
}

// Fired if no other ajax requests are currently active
// event name: ajaxStart
interface ZeptoAjaxStartEvent {
	(): void;
}

// Before sending the request, can be cancelled
// event name: ajaxBeforeSend
interface ZeptoAjaxBeforeSendEvent {
	(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void;
}

// Like ajaxBeforeSend, but not cancellable
// event name: ajaxSend
interface ZeptoAjaxSendEvent {
	(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void;
}

// When the response is success
// event name: ajaxSuccess
interface ZeptoAjaxSuccessEvent {
	(xhr: XMLHttpRequest, options: ZeptoAjaxSettings, data: any): void;
}

// When there was an error
// event name: ajaxError
interface ZeptoAjaxErrorEvent {
	(xhr: XMLHttpRequest, options: ZeptoAjaxSettings, error: Error): void;
}

// After request has completed, regardless of error or success
// event name: ajaxComplete
interface ZeptoAjaxCompleteEvent {
	(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void;
}

// Fired if this was the last active Ajax request.
// event name: ajaxStop
interface ZeptoAjaxStopEvent {
	(): void;
}

interface ZeptoAnimateSettings {
	duration?: number;
	easing?: string;
	complete?: () => void;
}

interface ZeptoPosition {
	top: number;
	left: number;
}

interface ZeptoCoordinates extends ZeptoPosition {
	width: number;
	height: number;
}

interface ZeptoEventHandlers {
	[key: string]: Function;
}

declare var Zepto: (fn: ($: ZeptoStatic) => void) => void;
declare var $: ZeptoStatic;
