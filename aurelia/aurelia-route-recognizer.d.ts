declare module 'aurelia-route-recognizer/state' {
	export class State {
	    charSpec: any;
	    nextStates: any;
	    constructor(charSpec?: any);
	    get(charSpec: any): any;
	    put(charSpec: any): any;
	    match(ch: any): any[];
	}

}
declare module 'aurelia-route-recognizer/segments' {
	export class StaticSegment {
	    string: any;
	    constructor(string: any);
	    eachChar(callback: any): void;
	    regex(): any;
	    generate(): any;
	}
	export class DynamicSegment {
	    name: any;
	    constructor(name: any);
	    eachChar(callback: any): void;
	    regex(): string;
	    generate(params: any, consumed: any): any;
	}
	export class StarSegment {
	    name: any;
	    constructor(name: any);
	    eachChar(callback: any): void;
	    regex(): string;
	    generate(params: any, consumed: any): any;
	}
	export class EpsilonSegment {
	    eachChar(): void;
	    regex(): string;
	    generate(): string;
	}

}
declare module 'aurelia-route-recognizer/index' {
	/**
	 * Class that parses route patterns and matches path strings.
	 *
	 * @class RouteRecognizer
	 * @constructor
	 */
	export class RouteRecognizer {
	    rootState: any;
	    names: any;
	    constructor();
	    /**
	     * Parse a route pattern and add it to the collection of recognized routes.
	     *
	     * @method add
	     * @param {Object} route The route to add.
	     */
	    add(route: any): any;
	    /**
	     * Retrieve the handlers registered for the named route.
	     *
	     * @method handlersFor
	     * @param {String} name The name of the route.
	     * @return {Array} The handlers.
	     */
	    handlersFor(name: any): any[];
	    /**
	     * Check if this RouteRecognizer recognizes a named route.
	     *
	     * @method hasRoute
	     * @param {String} name The name of the route.
	     * @return {Boolean} True if the named route is recognized.
	     */
	    hasRoute(name: any): boolean;
	    /**
	     * Generate a path and query string from a route name and params object.
	     *
	     * @method generate
	     * @param {String} name The name of the route.
	     * @param {Object} params The route params to use when populating the pattern.
	     *  Properties not required by the pattern will be appended to the query string.
	     * @return {String} The generated absolute path and query string.
	     */
	    generate(name: any, params: any): string;
	    /**
	     * Generate a query string from an object.
	     *
	     * @method generateQueryString
	     * @param {Object} params Object containing the keys and values to be used.
	     * @return {String} The generated query string, including leading '?'.
	     */
	    generateQueryString(params: any): string;
	    /**
	     * Parse a query string.
	     *
	     * @method parseQueryString
	     * @param {String} The query string to parse.
	     * @return {Object} Object with keys and values mapped from the query string.
	     */
	    parseQueryString(queryString: any): {};
	    /**
	     * Match a path string against registered route patterns.
	     *
	     * @method recognize
	     * @param {String} path The path to attempt to match.
	     * @return {Array} Array of objects containing `handler`, `params`, and
	     *  `isDynanic` values for the matched route(s), or undefined if no match
	     *  was found.
	     */
	    recognize(path: any): RecognizeResults;
	}
	export class RecognizeResults {
	    splice: any;
	    slice: any;
	    push: any;
	    length: any;
	    queryParams: any;
	    constructor(queryParams: any);
	}

}
declare module 'aurelia-route-recognizer' {
	export * from 'aurelia-route-recognizer/index';
}
