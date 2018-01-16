// Type definitions for jquery 3.2
// Project: https://jquery.com
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Boris Yankov <https://github.com/borisyankov>
//                 Christian Hoffmeister <https://github.com/choffmeister>
//                 Steve Fenton <https://github.com/Steve-Fenton>
//                 Diullei Gomes <https://github.com/Diullei>
//                 Tass Iliopoulos <https://github.com/tasoili>
//                 Jason Swearingen <https://github.com/jasons-novaleaf>
//                 Sean Hill <https://github.com/seanski>
//                 Guus Goossens <https://github.com/Guuz>
//                 Kelly Summerlin <https://github.com/ksummerlin>
//                 Basarat Ali Syed <https://github.com/basarat>
//                 Nicholas Wolverson <https://github.com/nwolverson>
//                 Derek Cicerone <https://github.com/derekcicerone>
//                 Andrew Gaspar <https://github.com/AndrewGaspar>
//                 Seikichi Kondo <https://github.com/seikichi>
//                 Benjamin Jackman <https://github.com/benjaminjackman>
//                 Poul Sorensen <https://github.com/s093294>
//                 Josh Strobl <https://github.com/JoshStrobl>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Dick van den Brink <https://github.com/DickvdBrink>
//                 Thomas Schulz <https://github.com/King2500>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'jquery' {
    export = jQuery;
}

declare module 'jquery/dist/jquery.slim' {
    export = jQuery;
}

declare const jQuery: JQueryStatic;
declare const $: JQueryStatic;

// Used by JQuery.Event
type _Event = Event;
// Used by JQuery.Promise3 and JQuery.Promise
type _Promise<T> = Promise<T>;

interface JQueryStatic<TElement extends Node = HTMLElement> {
    /**
     * @see {@link http://api.jquery.com/jquery.ajax/#jQuery-ajax1}
     * @deprecated Use jQuery.ajaxSetup(options)
     */
    ajaxSettings: JQuery.AjaxSettings;
    /**
     * A factory function that returns a chainable utility object with methods to register multiple
     * callbacks into callback queues, invoke callback queues, and relay the success or failure state of
     * any synchronous or asynchronous function.
     *
     * @param beforeStart A function that is called just before the constructor returns.
     * @see {@link https://api.jquery.com/jQuery.Deferred/}
     * @since 1.5
     */
    Deferred: JQuery.DeferredStatic;
    Event: JQuery.EventStatic<TElement>;
    /**
     * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize
     * CSS property naming, or create custom properties.
     *
     * @see {@link https://api.jquery.com/jQuery.cssHooks/}
     * @since 1.4.3
     */
    cssHooks: JQuery.PlainObject<JQuery.CSSHook<TElement>>;
    /**
     * An object containing all CSS properties that may be used without a unit. The .css() method uses this
     * object to see if it may append px to unitless values.
     *
     * @see {@link https://api.jquery.com/jQuery.cssNumber/}
     * @since 1.4.3
     */
    cssNumber: JQuery.PlainObject<boolean>;
    readonly fn: JQuery<TElement>;
    fx: {
        /**
         * The rate (in milliseconds) at which animations fire.
         *
         * @see {@link https://api.jquery.com/jQuery.fx.interval/}
         * @since 1.4.3
         * @deprecated 3.0
         */
        interval: number;
        /**
         * Globally disable all animations.
         *
         * @see {@link https://api.jquery.com/jQuery.fx.off/}
         * @since 1.3
         */
        off: boolean;
        step: JQuery.PlainObject<JQuery.AnimationHook<Node>>;
    };
    /**
     * A Promise-like object (or "thenable") that resolves when the document is ready.
     *
     * @see {@link https://api.jquery.com/jQuery.ready/}
     * @since 1.8
     */
    ready: JQuery.Thenable<JQueryStatic<TElement>>;
    /**
     * A collection of properties that represent the presence of different browser features or bugs.
     * Intended for jQuery's internal use; specific properties may be removed when they are no longer
     * needed internally to improve page startup performance. For your own project's feature-detection
     * needs, we strongly recommend the use of an external library such as Modernizr instead of dependency
     * on properties in jQuery.support.
     *
     * @see {@link https://api.jquery.com/jQuery.support/}
     * @since 1.3
     * @deprecated 1.9
     */
    support: JQuery.PlainObject;
    valHooks: JQuery.PlainObject<JQuery.ValHook<TElement>>;
    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html A string of HTML to create on the fly. Note that this parses HTML, not XML.
     *             A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
     * @param ownerDocument_attributes A document in which the new elements will be created.
     *                                 An object of attributes, events, and methods to call on the newly-created element.
     * @see {@link https://api.jquery.com/jQuery/}
     * @since 1.0
     * @since 1.4
     */
    (html: JQuery.htmlString, ownerDocument_attributes: Document | JQuery.PlainObject): JQuery<TElement>;
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     * @see {@link https://api.jquery.com/jQuery/}
     * @since 1.0
     */
    (selector: JQuery.Selector, context: Element | Document | JQuery | undefined): JQuery<TElement>;
    // HACK: This is the factory function returned when importing jQuery without a DOM. Declaring it separately breaks using the type parameter on JQueryStatic.
    // HACK: The discriminator parameter handles the edge case of passing a Window object to JQueryStatic. It doesn't actually exist on the factory function.
    <FElement extends Node = HTMLElement>(window: Window, discriminator: boolean): JQueryStatic<FElement>;
    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param selector_object_callback A string containing a selector expression
     *                                 A DOM element to wrap in a jQuery object.
     *                                 An array containing a set of DOM elements to wrap in a jQuery object.
     *                                 A plain object to wrap in a jQuery object.
     *                                 An existing jQuery object to clone.
     *                                 The function to execute when the DOM is ready.
     * @see {@link https://api.jquery.com/jQuery/}
     * @since 1.0
     * @since 1.4
     */
    (selector_object_callback?: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery |
        JQuery.PlainObject |
        ((this: Document, $: JQueryStatic<TElement>) => void)): JQuery<TElement>;
    /**
     * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
     *
     * @param flags An optional list of space-separated flags that change how the callback list behaves.
     * @see {@link https://api.jquery.com/jQuery.Callbacks/}
     * @since 1.7
     */
    Callbacks<T extends Function>(flags?: string): JQuery.Callbacks<T>;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
     * @see {@link https://api.jquery.com/jQuery.ajax/}
     * @since 1.5
     */
    ajax(url: string, settings?: JQuery.AjaxSettings): JQuery.jqXHR;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup().
     * @see {@link https://api.jquery.com/jQuery.ajax/}
     * @since 1.0
     */
    ajax(settings?: JQuery.AjaxSettings): JQuery.jqXHR;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they
     * are processed by $.ajax().
     *
     * @param dataTypes An optional string containing one or more space-separated dataTypes
     * @param handler A handler to set default values for future Ajax requests.
     * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
     * @since 1.5
     */
    ajaxPrefilter(dataTypes: string,
                  handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => string | void): void;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they
     * are processed by $.ajax().
     *
     * @param handler A handler to set default values for future Ajax requests.
     * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
     * @since 1.5
     */
    ajaxPrefilter(handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => string | void): void;
    /**
     * Set default values for future Ajax requests. Its use is not recommended.
     *
     * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
     * @see {@link https://api.jquery.com/jQuery.ajaxSetup/}
     * @since 1.1
     */
    ajaxSetup(options: JQuery.AjaxSettings): JQuery.AjaxSettings;
    /**
     * Creates an object that handles the actual transmission of Ajax data.
     *
     * @param dataType A string identifying the data type to use
     * @param handler A handler to return the new transport object to use with the data type provided in the first argument.
     * @see {@link https://api.jquery.com/jQuery.ajaxTransport/}
     * @since 1.5
     */
    ajaxTransport(dataType: string,
                  handler: (options: JQuery.AjaxSettings, originalOptions: JQuery.AjaxSettings, jqXHR: JQuery.jqXHR) => JQuery.Transport | void): void;
    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     *
     * @param container The DOM element that may contain the other element.
     * @param contained The DOM element that may be contained by (a descendant of) the other element.
     * @see {@link https://api.jquery.com/jQuery.contains/}
     * @since 1.4
     */
    contains(container: Element, contained: Element): boolean;
    css(elem: Element, unknown: any): any;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or
     * the full data store for the element.
     *
     * @param element The DOM element to query for the data.
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/jQuery.data/}
     * @since 1.2.3
     */
    data(element: Element, key: string, undefined: undefined): any; // tslint:disable-line:unified-signatures
    /**
     * Store arbitrary data associated with the specified element. Returns the value that was set.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @param value The new data value; this can be any Javascript type except undefined.
     * @see {@link https://api.jquery.com/jQuery.data/}
     * @since 1.2.3
     */
    data<T>(element: Element, key: string, value: T): T;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or
     * the full data store for the element.
     *
     * @param element The DOM element to query for the data.
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/jQuery.data/}
     * @since 1.2.3
     * @since 1.4
     */
    data(element: Element, key?: string): any;
    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param element A DOM element from which to remove and execute a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/jQuery.dequeue/}
     * @since 1.3
     */
    dequeue(element: Element, queueName?: string): void;
    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
     * Arrays and array-like objects with a length property (such as a function's arguments object) are
     * iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param array The array to iterate over.
     * @param callback The function that will be executed on every object.
     * @see {@link https://api.jquery.com/jQuery.each/}
     * @since 1.0
     */
    each<T>(array: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => false | any): ArrayLike<T>;
    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
     * Arrays and array-like objects with a length property (such as a function's arguments object) are
     * iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param obj The object to iterate over.
     * @param callback The function that will be executed on every object.
     * @see {@link https://api.jquery.com/jQuery.each/}
     * @since 1.0
     */
    each<T, K extends keyof T>(obj: T, callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => false | any): T;
    /**
     * Takes a string and throws an exception containing it.
     *
     * @param message The message to send out.
     * @see {@link https://api.jquery.com/jQuery.error/}
     * @since 1.4.1
     */
    error(message: string): any;
    /**
     * Escapes any character that has a special meaning in a CSS selector.
     *
     * @param selector A string containing a selector expression to escape.
     * @see {@link https://api.jquery.com/jQuery.escapeSelector/}
     * @since 3.0
     */
    escapeSelector(selector: JQuery.Selector): JQuery.Selector;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U, V, W, X, Y, Z>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X, object5: Y, object6: Z): T & U & V & W & X & Y & Z;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U, V, W, X, Y>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X, object5: Y): T & U & V & W & X & Y;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U, V, W, X>(deep: true, target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U, V, W>(deep: true, target: T, object1: U, object2: V, object3: W): T & U & V & W;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U, V>(deep: true, target: T, object1: U, object2: V): T & U & V;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend<T, U>(deep: true, target: T, object1: U): T & U;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
     * @param target The object to extend. It will receive the new properties.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.1.4
     */
    extend(deep: true, target: any, object1: any, ...objects: any[]): any;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U, V, W, X, Y, Z>(target: T, object1: U, object2: V, object3: W, object4: X, object5: Y, object6: Z): T & U & V & W & X & Y & Z;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U, V, W, X, Y>(target: T, object1: U, object2: V, object3: W, object4: X, object5: Y): T & U & V & W & X & Y;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U, V, W, X>(target: T, object1: U, object2: V, object3: W, object4: X): T & U & V & W & X;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U, V, W>(target: T, object1: U, object2: V, object3: W): T & U & V & W;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U, V>(target: T, object1: U, object2: V): T & U & V;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend<T, U>(target: T, object1: U): T & U;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will
     *               extend the jQuery namespace if it is the sole argument.
     * @see {@link https://api.jquery.com/jQuery.extend/}
     * @since 1.0
     */
    extend(target: any, object1: any, ...objects: any[]): any;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                you can use null or jQuery.noop as a placeholder.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.get/}
     * @since 1.0
     */
    get(url: string,
        data: JQuery.PlainObject | string,
        success: JQuery.jqXHR.DoneCallback | null,
        dataType?: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                you can use null or jQuery.noop as a placeholder.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.get/}
     * @since 1.0
     */
    get(url: string,
        success: JQuery.jqXHR.DoneCallback | null,
        dataType: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                     you can use null or jQuery.noop as a placeholder.
     *                     A plain object or string that is sent to the server with the request.
     * @see {@link https://api.jquery.com/jQuery.get/}
     * @since 1.0
     */
    get(url: string,
        success_data: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url_settings A string containing the URL to which the request is sent.
     *                     A set of key/value pairs that configure the Ajax request. All properties except for url are
     *                     optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) for a
     *                     complete list of all settings. The type option will automatically be set to GET.
     * @see {@link https://api.jquery.com/jQuery.get/}
     * @since 1.0
     * @since 1.12
     * @since 2.2
     */
    get(url_settings?: string | JQuery.UrlAjaxSettings): JQuery.jqXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getJSON/}
     * @since 1.0
     */
    getJSON(url: string,
            data: JQuery.PlainObject | string,
            success: JQuery.jqXHR.DoneCallback): JQuery.jqXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data A callback function that is executed if the request succeeds.
     *                     A plain object or string that is sent to the server with the request.
     * @see {@link https://api.jquery.com/jQuery.getJSON/}
     * @since 1.0
     */
    getJSON(url: string,
            success_data?: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getScript/}
     * @since 1.0
     */
    getScript(url: string,
              success?: JQuery.jqXHR.DoneCallback<string | undefined>): JQuery.jqXHR<string | undefined>;
    /**
     * Execute some JavaScript code globally.
     *
     * @param code The JavaScript code to execute.
     * @see {@link https://api.jquery.com/jQuery.globalEval/}
     * @since 1.0.4
     */
    globalEval(code: string): void;
    /**
     * Finds the elements of an array which satisfy a filter function. The original array is not affected.
     *
     * @param array The array-like object to search through.
     * @param fn The function to process each item against. The first argument to the function is the item, and the
     *           second argument is the index. The function should return a Boolean value. this will be the global window object.
     * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements
     *               for which "callback" returns true. If "invert" is true, then the function returns an array
     *               consisting of all elements for which "callback" returns false.
     * @see {@link https://api.jquery.com/jQuery.grep/}
     * @since 1.0
     */
    grep<T>(array: ArrayLike<T>,
            fn: (elementOfArray: T, indexInArray: number) => boolean,
            invert?: boolean): T[];
    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param element A DOM element to be checked for data.
     * @see {@link https://api.jquery.com/jQuery.hasData/}
     * @since 1.5
     */
    hasData(element: Element): boolean;
    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param hold Indicates whether the ready hold is being requested or released
     * @see {@link https://api.jquery.com/jQuery.holdReady/}
     * @since 1.6
     * @deprecated 3.2
     */
    holdReady(hold: boolean): void;
    /**
     * Modify and filter HTML strings passed through jQuery manipulation methods.
     *
     * @param html The HTML string on which to operate.
     * @see {@link https://api.jquery.com/jQuery.htmlPrefilter/}
     * @since 1.12/2.2
     */
    htmlPrefilter(html: JQuery.htmlString): JQuery.htmlString;
    /**
     * Search for a specified value within an array and return its index (or -1 if not found).
     *
     * @param value The value to search for.
     * @param array An array through which to search.
     * @param fromIndex The index of the array at which to begin the search. The default is 0, which will search the whole array.
     * @see {@link https://api.jquery.com/jQuery.inArray/}
     * @since 1.2
     */
    inArray<T>(value: T, array: T[], fromIndex?: number): number;
    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     * @see {@link https://api.jquery.com/jQuery.isArray/}
     * @since 1.3
     * @deprecated 3.2
     */
    isArray(obj: any): obj is any[];
    /**
     * Check to see if an object is empty (contains no enumerable properties).
     *
     * @param obj The object that will be checked to see if it's empty.
     * @see {@link https://api.jquery.com/jQuery.isEmptyObject/}
     * @since 1.4
     */
    isEmptyObject(obj: any): boolean;
    /**
     * Determine if the argument passed is a JavaScript function object.
     *
     * @param obj Object to test whether or not it is a function.
     * @see {@link https://api.jquery.com/jQuery.isFunction/}
     * @since 1.2
     */
    isFunction(obj: any): obj is Function;
    /**
     * Determines whether its argument represents a JavaScript number.
     *
     * @param value The value to be tested.
     * @see {@link https://api.jquery.com/jQuery.isNumeric/}
     * @since 1.7
     */
    isNumeric(value: any): value is number;
    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param obj The object that will be checked to see if it's a plain object.
     * @see {@link https://api.jquery.com/jQuery.isPlainObject/}
     * @since 1.4
     */
    isPlainObject(obj: any): obj is JQuery.PlainObject;
    /**
     * Determine whether the argument is a window.
     *
     * @param obj Object to test whether or not it is a window.
     * @see {@link https://api.jquery.com/jQuery.isWindow/}
     * @since 1.4.3
     */
    isWindow(obj: any): obj is Window;
    /**
     * Check to see if a DOM node is within an XML document (or is an XML document).
     *
     * @param node The DOM node that will be checked to see if it's in an XML document.
     * @see {@link https://api.jquery.com/jQuery.isXMLDoc/}
     * @since 1.1.4
     */
    isXMLDoc(node: Node): boolean;
    /**
     * Convert an array-like object into a true JavaScript array.
     *
     * @param obj Any object to turn into a native Array.
     * @see {@link https://api.jquery.com/jQuery.makeArray/}
     * @since 1.2
     */
    makeArray<T>(obj: ArrayLike<T>): T[];
    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param array The Array to translate.
     * @param callback The function to process each item against. The first argument to the function is the array item, the
     *                 second argument is the index in array The function can return any value. A returned array will be
     *                 flattened into the resulting array. Within the function, this refers to the global (window) object.
     * @see {@link https://api.jquery.com/jQuery.map/}
     * @since 1.0
     */
    map<T, R>(array: T[], callback: (elementOfArray: T, indexInArray: number) => R): R[];
    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param obj The Object to translate.
     * @param callback The function to process each item against. The first argument to the function is the value; the
     *                 second argument is the key of the object property. The function can return any value to add to the
     *                 array. A returned array will be flattened into the resulting array. Within the function, this refers
     *                 to the global (window) object.
     * @see {@link https://api.jquery.com/jQuery.map/}
     * @since 1.6
     */
    map<T, K extends keyof T, R>(obj: T, callback: (propertyOfObject: T[K], key: K) => R): R[];
    /**
     * Merge the contents of two arrays together into the first array.
     *
     * @param first The first array-like object to merge, the elements of second added.
     * @param second The second array-like object to merge into the first, unaltered.
     * @see {@link https://api.jquery.com/jQuery.merge/}
     * @since 1.0
     */
    merge<T, U>(first: ArrayLike<T>, second: ArrayLike<U>): Array<T | U>;
    /**
     * Relinquish jQuery's control of the $ variable.
     *
     * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
     * @see {@link https://api.jquery.com/jQuery.noConflict/}
     * @since 1.0
     */
    noConflict(removeAll?: boolean): this;
    /**
     * An empty function.
     *
     * @see {@link https://api.jquery.com/jQuery.noop/}
     * @since 1.4
     */
    noop(): undefined;
    /**
     * Return a number representing the current time.
     *
     * @see {@link https://api.jquery.com/jQuery.now/}
     * @since 1.4.3
     */
    now(): number;
    /**
     * Create a serialized representation of an array, a plain object, or a jQuery object suitable for use
     * in a URL query string or Ajax request. In case a jQuery object is passed, it should contain input
     * elements with name/value properties.
     *
     * @param obj An array, a plain object, or a jQuery object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     * @see {@link https://api.jquery.com/jQuery.param/}
     * @since 1.2
     * @since 1.4
     */
    param(obj: any[] | JQuery.PlainObject | JQuery, traditional?: boolean): string;
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context Document element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     * @since 1.8
     */
    parseHTML(data: string, context: Document | null | undefined, keepScripts: boolean): JQuery.Node[];
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context_keepScripts Document element to serve as the context in which the HTML fragment will be created
     *                            A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     * @since 1.8
     */
    parseHTML(data: string, context_keepScripts?: Document | null | boolean): JQuery.Node[];
    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript value.
     *
     * @param json The JSON string to parse.
     * @see {@link https://api.jquery.com/jQuery.parseJSON/}
     * @since 1.4.1
     * @deprecated 3.0
     */
    parseJSON(json: string): any;
    /**
     * Parses a string into an XML document.
     *
     * @param data a well-formed XML string to be parsed
     * @see {@link https://api.jquery.com/jQuery.parseXML/}
     * @since 1.5
     */
    parseXML(data: string): XMLDocument;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.post/}
     * @since 1.0
     */
    post(url: string,
         data: JQuery.PlainObject | string,
         success: JQuery.jqXHR.DoneCallback | null,
         dataType?: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.post/}
     * @since 1.0
     */
    post(url: string,
         success: JQuery.jqXHR.DoneCallback | null,
         dataType: string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success_data A callback function that is executed if the request succeeds. Required if dataType is provided, but
     *                     can be null in that case.
     *                     A plain object or string that is sent to the server with the request.
     * @see {@link https://api.jquery.com/jQuery.post/}
     * @since 1.0
     */
    post(url: string,
         success_data: JQuery.jqXHR.DoneCallback | JQuery.PlainObject | string): JQuery.jqXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url_settings A string containing the URL to which the request is sent.
     *                     A set of key/value pairs that configure the Ajax request. All properties except for url are
     *                     optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) for a
     *                     complete list of all settings. Type will automatically be set to POST.
     * @see {@link https://api.jquery.com/jQuery.post/}
     * @since 1.0
     * @since 1.12
     * @since 2.2
     */
    post(url_settings?: string | JQuery.UrlAjaxSettings): JQuery.jqXHR;

    // region proxy

    // region (fn, null | undefined)

    // region 0 to 7 arguments

    // region 0 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D, e: E) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D>(fn: (a: A, b: B, c: C, d: D) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C>(fn: (a: A, b: B, c: C) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B>(fn: (a: A, b: B) => TReturn,
              context: null | undefined,
              a: A, b: B): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4`
     * @since 1.6
     */
    proxy<TReturn,
        A>(fn: (a: A) => TReturn,
           context: null | undefined,
           a: A): () => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn>(fn: () => TReturn,
                   context: null | undefined): () => TReturn;

    // endregion

    // region 1 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E, f: F): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T>(fn: (a: A, b: B, c: C, d: D, e: E,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D, e: E): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T>(fn: (a: A, b: B, c: C, d: D,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C, d: D): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T>(fn: (a: A, b: B, c: C,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B, c: C): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T>(fn: (a: A, b: B,
                t: T) => TReturn,
           context: null | undefined,
           a: A, b: B): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T>(fn: (a: A,
                t: T) => TReturn,
           context: null | undefined,
           a: A): (t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T>(fn: (t: T) => TReturn,
           context: null | undefined): (t: T) => TReturn;

    // endregion

    // region 2 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D, e: E): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U>(fn: (a: A, b: B, c: C, d: D,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C, d: D): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U>(fn: (a: A, b: B, c: C,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B, c: C): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U>(fn: (a: A, b: B,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A, b: B): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U>(fn: (a: A,
                   t: T, u: U) => TReturn,
              context: null | undefined,
              a: A): (t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U>(fn: (t: T, u: U) => TReturn,
              context: null | undefined): (t: T, u: U) => TReturn;

    // endregion

    // region 3 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V>(fn: (a: A, b: B, c: C, d: D,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C, d: D): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U, V>(fn: (a: A, b: B, c: C,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B, c: C): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U, V>(fn: (a: A, b: B,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A, b: B): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U, V>(fn: (a: A,
                      t: T, u: U, v: V) => TReturn,
                 context: null | undefined,
                 a: A): (t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U, V>(fn: (t: T, u: U, v: V) => TReturn,
                 context: null | undefined): (t: T, u: U, v: V) => TReturn;

    // endregion

    // region 4 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W>(fn: (a: A, b: B, c: C,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B, c: C): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U, V, W>(fn: (a: A, b: B,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A, b: B): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U, V, W>(fn: (a: A,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined,
                    a: A): (t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U, V, W>(fn: (t: T, u: U, v: V, w: W) => TReturn,
                    context: null | undefined): (t: T, u: U, v: V, w: W) => TReturn;

    // endregion

    // region 5 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X>(fn: (a: A, b: B, c: C,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X>(fn: (a: A, b: B,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A, b: B): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U, V, W, X>(fn: (a: A,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined,
                       a: A): (t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U, V, W, X>(fn: (t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: null | undefined): (t: T, u: U, v: V, w: W, x: X) => TReturn;

    // endregion

    // region 6 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X, Y>(fn: (a: A, b: B,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A, b: B): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U, V, W, X, Y>(fn: (a: A,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined,
                          a: A): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U, V, W, X, Y>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: null | undefined): (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;

    // endregion

    // region 7+ parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E, f: F): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D, e: E): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C, D,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C, d: D): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B, C,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B, c: C): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A, B,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A, b: B): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        A,
        T, U, V, W, X, Y, Z>(fn: (a: A,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined,
                             a: A): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn,
        T, U, V, W, X, Y, Z>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: null | undefined): (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;

    // endregion

    // endregion

    // region 8+ arguments

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.9
     */
    proxy<TReturn>(fn: (...args: any[]) => TReturn,
                   context: null | undefined,
                   ...additionalArguments: any[]): (...args: any[]) => TReturn;

    // endregion

    // endregion

    // region (fn, context)

    // region 0 to 7 arguments

    // region 0 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E>(fn: (a: A, b: B, c: C, d: D, e: E) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D>(fn: (a: A, b: B, c: C, d: D) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C>(fn: (a: A, b: B, c: C) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B>(fn: (a: A, b: B) => TReturn,
              context: TContext,
              a: A, b: B): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4`
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A>(fn: (a: A) => TReturn,
           context: TContext,
           a: A): (this: TContext) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn>(fn: () => TReturn,
                 context: TContext): (this: TContext) => TReturn;

    // endregion

    // region 1 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T>(fn: (a: A, b: B, c: C, d: D, e: E,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T>(fn: (a: A, b: B, c: C, d: D,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C, d: D): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T>(fn: (a: A, b: B, c: C,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B, c: C): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T>(fn: (a: A, b: B,
                t: T) => TReturn,
           context: TContext,
           a: A, b: B): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T>(fn: (a: A,
                t: T) => TReturn,
           context: TContext,
           a: A): (this: TContext, t: T) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T>(fn: (t: T) => TReturn,
           context: TContext): (this: TContext, t: T) => TReturn;

    // endregion

    // region 2 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U>(fn: (a: A, b: B, c: C, d: D, e: E,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U>(fn: (a: A, b: B, c: C, d: D,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U>(fn: (a: A, b: B, c: C,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B, c: C): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U>(fn: (a: A, b: B,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A, b: B): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U>(fn: (a: A,
                   t: T, u: U) => TReturn,
              context: TContext,
              a: A): (this: TContext, t: T, u: U) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U>(fn: (t: T, u: U) => TReturn,
              context: TContext): (this: TContext, t: T, u: U) => TReturn;

    // endregion

    // region 3 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V>(fn: (a: A, b: B, c: C, d: D, e: E,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V>(fn: (a: A, b: B, c: C, d: D,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V>(fn: (a: A, b: B, c: C,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V>(fn: (a: A, b: B,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A, b: B): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V>(fn: (a: A,
                      t: T, u: U, v: V) => TReturn,
                 context: TContext,
                 a: A): (this: TContext, t: T, u: U, v: V) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V>(fn: (t: T, u: U, v: V) => TReturn,
                 context: TContext): (this: TContext, t: T, u: U, v: V) => TReturn;

    // endregion

    // region 4 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D, e: E,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W>(fn: (a: A, b: B, c: C, d: D,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W>(fn: (a: A, b: B, c: C,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W>(fn: (a: A, b: B,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W>(fn: (a: A,
                         t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext,
                    a: A): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W>(fn: (t: T, u: U, v: V, w: W) => TReturn,
                    context: TContext): (this: TContext, t: T, u: U, v: V, w: W) => TReturn;

    // endregion

    // region 5 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D, e: E,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X>(fn: (a: A, b: B, c: C, d: D,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X>(fn: (a: A, b: B, c: C,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X>(fn: (a: A, b: B,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X>(fn: (a: A,
                            t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext,
                       a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X>(fn: (t: T, u: U, v: V, w: W, x: X) => TReturn,
                       context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X) => TReturn;

    // endregion

    // region 6 parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D, e: E,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C, d: D,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X, Y>(fn: (a: A, b: B, c: C,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X, Y>(fn: (a: A, b: B,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X, Y>(fn: (a: A,
                               t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext,
                          a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X, Y>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn,
                          context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y) => TReturn;

    // endregion

    // region 7+ parameters

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F, G,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F, g: G): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E, F,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E, f: F,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E, f: F): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D, E,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D, e: E,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D, e: E): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C, D,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C, d: D,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C, d: D): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B, C,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B, c: C,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B, c: C): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A, B,
        T, U, V, W, X, Y, Z>(fn: (a: A, b: B,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A, b: B): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        A,
        T, U, V, W, X, Y, Z>(fn: (a: A,
                                  t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext,
                             a: A): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn,
        T, U, V, W, X, Y, Z>(fn: (t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn,
                             context: TContext): (this: TContext, t: T, u: U, v: V, w: W, x: X, y: Y, z: Z, ...args: any[]) => TReturn;

    // endregion

    // endregion

    // region 8+ arguments

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param fn The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object,
        TReturn>(fn: (...args: any[]) => TReturn,
                 context: TContext,
                 ...additionalArguments: any[]): (this: TContext, ...args: any[]) => TReturn;

    // endregion

    // endregion

    // region (context, name)

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param context The object to which the context of the function should be set.
     * @param name The name of the function whose context will be changed (should be a property of the context object).
     * @param additionalArguments Any number of arguments to be passed to the function named in the name argument.
     * @see {@link https://api.jquery.com/jQuery.proxy/}
     * @since 1.4
     * @since 1.6
     */
    proxy<TContext extends object>(context: TContext,
                                   name: keyof TContext,
                                   ...additionalArguments: any[]): (this: TContext, ...args: any[]) => any;

    // endregion

    // endregion

    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element where the array of queued functions is attached.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue The new function to add to the queue.
     *                 An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/jQuery.queue/}
     * @since 1.3
     */
    queue<T extends Element>(element: T, queueName?: string, newQueue?: JQuery.TypeOrArray<JQuery.QueueFunction<T>>): JQuery.Queue<T>;
    /**
     * Handles errors thrown synchronously in functions wrapped in jQuery().
     *
     * @param error An error thrown in the function wrapped in jQuery().
     * @see {@link https://api.jquery.com/jQuery.readyException/}
     * @since 3.1
     */
    readyException(error: Error): any;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param element A DOM element from which to remove data.
     * @param name A string naming the piece of data to remove.
     * @see {@link https://api.jquery.com/jQuery.removeData/}
     * @since 1.2.3
     */
    removeData(element: Element, name?: string): void;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.1
     */
    speed(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): JQuery.EffectsOptions<TElement>;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete A string indicating which easing function to use for the transition.
     *                        A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.0
     * @since 1.1
     */
    speed(duration: JQuery.Duration,
          easing_complete: string | ((this: TElement) => void)): JQuery.EffectsOptions<TElement>;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration_complete_settings A string or number determining how long the animation will run.
     *                                   A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.0
     * @since 1.1
     */
    speed(duration_complete_settings?: JQuery.Duration | ((this: TElement) => void) | JQuery.SpeedSettings<TElement>): JQuery.EffectsOptions<TElement>;
    /**
     * Remove the whitespace from the beginning and end of a string.
     *
     * @param str The string to trim.
     * @see {@link https://api.jquery.com/jQuery.trim/}
     * @since 1.0
     */
    trim(str: string): string;
    /**
     * Determine the internal JavaScript [[Class]] of an object.
     *
     * @param obj Object to get the internal JavaScript [[Class]] of.
     * @see {@link https://api.jquery.com/jQuery.type/}
     * @since 1.4.3
     */
    type(obj: any): 'array' | 'boolean' | 'date' | 'error' | 'function' | 'null' | 'number' | 'object' | 'regexp' | 'string' | 'symbol' | 'undefined';
    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see {@link https://api.jquery.com/jQuery.unique/}
     * @since 1.1.3
     * @deprecated 3.0
     */
    unique<T extends Element>(array: T[]): T[];
    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see {@link https://api.jquery.com/jQuery.uniqueSort/}
     * @since 1.12
     * @since 2.2
     */
    uniqueSort<T extends Element>(array: T[]): T[];
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<TR1, UR1, VR1,
        TJ1 = any, UJ1 = any, VJ1 = any>
        (deferredT: JQuery.Promise<TR1, TJ1, any> | JQuery.Thenable<TR1> | TR1,
         deferredU: JQuery.Promise<UR1, UJ1, any> | JQuery.Thenable<UR1> | UR1,
         deferredV: JQuery.Promise<VR1, VJ1, any> | JQuery.Thenable<VR1> | VR1): JQuery.Promise3<TR1, TJ1, never,
        UR1, UJ1, never,
        VR1, VJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<TR1, UR1,
        TJ1 = any, UJ1 = any>
        (deferredT: JQuery.Promise<TR1, TJ1, any> | JQuery.Thenable<TR1> | TR1,
         deferredU: JQuery.Promise<UR1, UJ1, any> | JQuery.Thenable<UR1> | UR1): JQuery.Promise2<TR1, TJ1, never,
        UR1, UJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<TR1, TJ1,
        TR2, TJ2,
        TR3 = never, TJ3 = never>
        (deferredT: JQuery.Promise3<TR1, TJ1, any, TR2, TJ2, any, TR3, TJ3, any> |
            JQuery.Promise2<TR1, TJ1, any, TR2, TJ2, any>): JQuery.Promise3<TR1, TJ1, never, TR2, TJ2, never, TR3, TJ3, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<TR1, TJ1 = any>(deferred: JQuery.Promise<TR1, TJ1, any> | JQuery.Thenable<TR1> | TR1): JQuery.Promise<TR1, TJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @param deferreds Zero or more Thenable objects.
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<TR1 = never, TJ1 = never>(...deferreds: Array<JQuery.Promise<TR1, TJ1, any> | JQuery.Thenable<TR1> | TR1>): JQuery.Promise<TR1, TJ1, never>;
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @param deferreds Zero or more Thenable objects.
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when(...deferreds: any[]): JQuery.Promise<any, any, never>;
}

interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
    /**
     * A string containing the jQuery version number.
     *
     * @see {@link https://api.jquery.com/jquery/}
     * @since 1.0
     */
    jquery: string;
    /**
     * The number of elements in the jQuery object.
     *
     * @see {@link https://api.jquery.com/length/}
     * @since 1.0
     */
    length: number;
    /**
     * Create a new jQuery object with elements added to the set of matched elements.
     *
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     * @param context The point in the document at which the selector should begin matching; similar to the context
     *                argument of the $(selector, context) method.
     * @see {@link https://api.jquery.com/add/}
     * @since 1.4
     */
    add(selector: JQuery.Selector, context: Element): this;
    /**
     * Create a new jQuery object with elements added to the set of matched elements.
     *
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     *                 One or more elements to add to the set of matched elements.
     *                 An HTML fragment to add to the set of matched elements.
     *                 An existing jQuery object to add to the set of matched elements.
     * @see {@link https://api.jquery.com/add/}
     * @since 1.0
     * @since 1.3.2
     */
    add(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery.htmlString | JQuery): this;
    /**
     * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     * @see {@link https://api.jquery.com/addBack/}
     * @since 1.8
     */
    addBack(selector?: JQuery.Selector): this;
    /**
     * Adds the specified class(es) to each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     *                  A function returning one or more space-separated class names to be added to the existing class
     *                  name(s). Receives the index position of the element in the set and the existing class name(s) as
     *                  arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/addClass/}
     * @since 1.0
     * @since 1.4
     */
    addClass(className: string | ((this: TElement, index: number, currentClassName: string) => string)): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert after each element in the set of matched elements.
     * @see {@link https://api.jquery.com/after/}
     * @since 1.0
     */
    after(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert
     *           after each element in the set of matched elements. Receives the index position of the element in the
     *           set and the old HTML value of the element as arguments. Within the function, this refers to the
     *           current element in the set.
     * @see {@link https://api.jquery.com/after/}
     * @since 1.4
     * @since 1.10
     */
    after(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxComplete/}
     * @since 1.0
     */
    ajaxComplete(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings) => void | false): this;
    /**
     * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxError/}
     * @since 1.0
     */
    ajaxError(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxSettings: JQuery.AjaxSettings, thrownError: string) => void | false): this;
    /**
     * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxSend/}
     * @since 1.0
     */
    ajaxSend(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings) => void | false): this;
    /**
     * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxStart/}
     * @since 1.0
     */
    ajaxStart(handler: (this: Document) => void | false): this;
    /**
     * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxStop/}
     * @since 1.0
     */
    ajaxStop(handler: (this: Document) => void | false): this;
    /**
     * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxSuccess/}
     * @since 1.0
     */
    ajaxSuccess(handler: (this: Document, event: JQuery.Event<Document>, jqXHR: JQuery.jqXHR, ajaxOptions: JQuery.AjaxSettings, data: JQuery.PlainObject) => void | false): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/animate/}
     * @since 1.0
     */
    animate(properties: JQuery.PlainObject,
            duration: JQuery.Duration,
            easing: string,
            complete?: (this: TElement) => void): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/animate/}
     * @since 1.0
     */
    animate(properties: JQuery.PlainObject,
            duration_easing: JQuery.Duration | string,
            complete?: (this: TElement) => void): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/animate/}
     * @since 1.0
     */
    animate(properties: JQuery.PlainObject,
            options: JQuery.EffectsOptions<TElement>): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/animate/}
     * @since 1.0
     */
    animate(properties: JQuery.PlainObject,
            complete?: (this: TElement) => void): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the end of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/append/}
     * @since 1.0
     */
    append(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert at
     *           the end of each element in the set of matched elements. Receives the index position of the element
     *           in the set and the old HTML value of the element as arguments. Within the function, this refers to
     *           the current element in the set.
     * @see {@link https://api.jquery.com/append/}
     * @since 1.4
     */
    append(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the end of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/appendTo/}
     * @since 1.0
     */
    appendTo(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute. If null, the specified attribute will be removed (as in .removeAttr()).
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old attribute value as arguments.
     * @see {@link https://api.jquery.com/attr/}
     * @since 1.0
     * @since 1.1
     */
    attr(attributeName: string,
         value: string | number | null | ((this: TElement, index: number, attr: string) => string | number | void | undefined)): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     * @see {@link https://api.jquery.com/attr/}
     * @since 1.0
     */
    attr(attributes: JQuery.PlainObject): this;
    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @see {@link https://api.jquery.com/attr/}
     * @since 1.0
     */
    attr(attributeName: string): string | undefined;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert before each element in the set of matched elements.
     * @see {@link https://api.jquery.com/before/}
     * @since 1.0
     */
    before(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert
     *           before each element in the set of matched elements. Receives the index position of the element in
     *           the set and the old HTML value of the element as arguments. Within the function, this refers to the
     *           current element in the set.
     * @see {@link https://api.jquery.com/before/}
     * @since 1.4
     * @since 1.10
     */
    before(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    // [bind() overloads] https://github.com/jquery/api.jquery.com/issues/1048
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.0
     * @since 1.4.3
     * @deprecated 3.0
     */
    bind<TData>(eventType: string,
                eventData: TData,
                handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     *                Setting the second argument to false will attach a function that prevents the default action from
     *                occurring and stops the event from bubbling.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.0
     * @since 1.4.3
     * @deprecated 3.0
     */
    bind(eventType: string,
         handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false | null | undefined): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param events An object containing one or more DOM event types and functions to execute for them.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.4
     * @deprecated 3.0
     */
    bind(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/}
     * @since 1.4.3
     */
    blur<TData>(eventData: TData,
                handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/}
     * @since 1.0
     */
    blur(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/}
     * @since 1.4.3
     */
    change<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/}
     * @since 1.0
     */
    change(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/children/}
     * @since 1.0
     */
    children(selector?: JQuery.Selector): this;
    /**
     * Remove from the queue all items that have not yet been run.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/clearQueue/}
     * @since 1.4
     */
    clearQueue(queueName?: string): this;
    /**
     * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/click/}
     * @since 1.4.3
     */
    click<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/click/}
     * @since 1.0
     */
    click(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Create a deep copy of the set of matched elements.
     *
     * @param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The
     *                          default value is false. *In jQuery 1.5.0 the default value was incorrectly true; it was changed back
     *                          to false in 1.5.1 and up.
     * @param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should
     *                              be copied. By default its value matches the first argument's value (which defaults to false).
     * @see {@link https://api.jquery.com/clone/}
     * @since 1.0
     * @since 1.5
     */
    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): this;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @param context A DOM element within which a matching element may be found.
     * @see {@link https://api.jquery.com/closest/}
     * @since 1.4
     */
    closest(selector: JQuery.Selector, context: Element): this;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element
     * itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A jQuery object to match elements against.
     *                 An element to match elements against.
     * @see {@link https://api.jquery.com/closest/}
     * @since 1.3
     * @since 1.6
     */
    closest(selector: JQuery.Selector | Element | JQuery): this;
    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     *
     * @see {@link https://api.jquery.com/contents/}
     * @since 1.2
     */
    contents(): JQuery<TElement | Text | Comment>;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/}
     * @since 1.4.3
     */
    contextmenu<TData>(eventData: TData,
                       handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/}
     * @since 1.0
     */
    contextmenu(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/css/}
     * @since 1.0
     * @since 1.4
     */
    css(propertyName: string,
        value: string | number | ((this: TElement, index: number, value: string) => string | number | void | undefined)): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/css/}
     * @since 1.0
     */
    css(properties: JQuery.PlainObject<string | number | ((this: TElement, index: number, value: string) => string | number | void | undefined)>): this;
    /**
     * Get the computed style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     *                     An array of one or more CSS properties.
     * @see {@link https://api.jquery.com/css/}
     * @since 1.0
     */
    css(propertyName: string): string;
    /**
     * Get the computed style properties for the first element in the set of matched elements.
     *
     * @param propertyNames An array of one or more CSS properties.
     * @see {@link https://api.jquery.com/css/}
     * @since 1.9
     */
    css(propertyNames: string[]): JQuery.PlainObject<string>;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/data/}
     * @since 1.2.3
     */
    data(key: string, undefined: undefined): any; // tslint:disable-line:unified-signatures
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; this can be any Javascript type except undefined.
     * @see {@link https://api.jquery.com/data/}
     * @since 1.2.3
     */
    data(key: string, value: any): this;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param obj An object of key-value pairs of data to update.
     * @see {@link https://api.jquery.com/data/}
     * @since 1.4.3
     */
    data(obj: JQuery.PlainObject): this;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/data/}
     * @since 1.2.3
     */
    data(key: string): any;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @see {@link https://api.jquery.com/data/}
     * @since 1.4
     */
    data(): JQuery.PlainObject;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/}
     * @since 1.4.3
     */
    dblclick<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/}
     * @since 1.0
     */
    dblclick(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/delay/}
     * @since 1.4
     */
    delay(duration: JQuery.Duration, queueName?: string): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param eventType A string containing one or more space-separated JavaScript event types, such as "click" or
     *                  "keydown," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/delegate/}
     * @since 1.4.2
     * @deprecated 3.0
     */
    delegate<TData>(selector: JQuery.Selector,
                    eventType: string,
                    eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param eventType A string containing one or more space-separated JavaScript event types, such as "click" or
     *                  "keydown," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/delegate/}
     * @since 1.4.2
     * @deprecated 3.0
     */
    delegate(selector: JQuery.Selector,
             eventType: string,
             handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the
     * future, based on a specific set of root elements.
     *
     * @param selector A selector to filter the elements that trigger the event.
     * @param events A plain object of one or more event types and functions to execute for them.
     * @see {@link https://api.jquery.com/delegate/}
     * @since 1.4.3
     * @deprecated 3.0
     */
    delegate(selector: JQuery.Selector,
             events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/dequeue/}
     * @since 1.2
     */
    dequeue(queueName?: string): this;
    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/detach/}
     * @since 1.4
     */
    detach(selector?: JQuery.Selector): this;
    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     *
     * @param fn A function to execute for each matched element.
     * @see {@link https://api.jquery.com/each/}
     * @since 1.0
     */
    each(fn: (this: TElement, index: number, element: TElement) => void | false): this;
    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     *
     * @see {@link https://api.jquery.com/empty/}
     * @since 1.0
     */
    empty(): this;
    /**
     * End the most recent filtering operation in the current chain and return the set of matched elements
     * to its previous state.
     *
     * @see {@link https://api.jquery.com/end/}
     * @since 1.0
     */
    end(): this;
    /**
     * Reduce the set of matched elements to the one at the specified index.
     *
     * @param index An integer indicating the 0-based position of the element.
     *              An integer indicating the position of the element, counting backwards from the last element in the set.
     * @see {@link https://api.jquery.com/eq/}
     * @since 1.1.2
     * @since 1.4
     */
    eq(index: number): this;
    /**
     * Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.
     *
     * @param obj An object to merge onto the jQuery prototype.
     * @see {@link https://api.jquery.com/jQuery.fn.extend/}
     * @since 1.0
     */
    extend(obj: object): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeIn/}
     * @since 1.4.3
     */
    fadeIn(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeIn/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeIn(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeIn/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeIn(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeOut/}
     * @since 1.4.3
     */
    fadeOut(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeOut/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeOut(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeOut/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeOut(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeTo/}
     * @since 1.4.3
     */
    fadeTo(duration: JQuery.Duration, opacity: number, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeTo/}
     * @since 1.0
     */
    fadeTo(duration: JQuery.Duration, opacity: number, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeToggle/}
     * @since 1.4.4
     */
    fadeToggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeToggle/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeToggle(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeToggle/}
     * @since 1.0
     * @since 1.4.3
     */
    fadeToggle(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     *                 One or more DOM elements to match the current set of elements against.
     *                 An existing jQuery object to match the current set of elements against.
     *                 A function used as a test for each element in the set. this is the current DOM element.
     * @see {@link https://api.jquery.com/filter/}
     * @since 1.0
     * @since 1.4
     */
    filter(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): this;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector,
     * jQuery object, or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 An element or a jQuery object to match elements against.
     * @see {@link https://api.jquery.com/find/}
     * @since 1.0
     * @since 1.6
     */
    find(selector: JQuery.Selector | Element | JQuery): this;
    /**
     * Stop the currently-running animation, remove all queued animations, and complete all animations for
     * the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @see {@link https://api.jquery.com/finish/}
     * @since 1.9
     */
    finish(queue?: string): this;
    /**
     * Reduce the set of matched elements to the first in the set.
     *
     * @see {@link https://api.jquery.com/first/}
     * @since 1.4
     */
    first(): this;
    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focus/}
     * @since 1.4.3
     */
    focus<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focus/}
     * @since 1.0
     */
    focus(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/}
     * @since 1.4.3
     */
    focusin<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/}
     * @since 1.4
     */
    focusin(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/}
     * @since 1.4.3
     */
    focusout<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/}
     * @since 1.4
     */
    focusout(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Retrieve one of the elements matched by the jQuery object.
     *
     * @param index A zero-based integer indicating which element to retrieve.
     * @see {@link https://api.jquery.com/get/}
     * @since 1.0
     */
    get(index: number): TElement;
    /**
     * Retrieve the elements matched by the jQuery object.
     *
     * @see {@link https://api.jquery.com/get/}
     * @since 1.0
     */
    get(): TElement[];
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A DOM element to match elements against.
     * @see {@link https://api.jquery.com/has/}
     * @since 1.4
     */
    has(selector: string | Element): this;
    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param className The class name to search for.
     * @see {@link https://api.jquery.com/hasClass/}
     * @since 1.2
     */
    hasClass(className: string): boolean;
    /**
     * Set the CSS height of every matched element.
     *
     * @param value An integer representing the number of pixels, or an integer with an optional unit of measure
     *              appended (as a string).
     *              A function returning the height to set. Receives the index position of the element in the set and
     *              the old height as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/height/}
     * @since 1.0
     * @since 1.4.1
     */
    height(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/height/}
     * @since 1.0
     */
    height(): number | undefined;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/hide/}
     * @since 1.4.3
     */
    hide(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete A string indicating which easing function to use for the transition.
     *                        A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/hide/}
     * @since 1.0
     * @since 1.4.3
     */
    hide(duration: JQuery.Duration, easing_complete: string | ((this: TElement) => void)): this;
    /**
     * Hide the matched elements.
     *
     * @param duration_complete_options A string or number determining how long the animation will run.
     *                                  A function to call once the animation is complete, called once per matched element.
     *                                  A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/hide/}
     * @since 1.0
     */
    hide(duration_complete_options?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and
     * leaves the elements.
     *
     * @param handlerInOut A function to execute when the mouse pointer enters or leaves the element.
     * @param handlerOut A function to execute when the mouse pointer leaves the element.
     * @see {@link https://api.jquery.com/hover/}
     * @since 1.0
     * @since 1.4
     */
    // HACK: The type parameter T is not used but ensures the 'event' callback parameter is typed correctly.
    hover<T>(handlerInOut: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false,
             handlerOut?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     *                   A function returning the HTML content to set. Receives the index position of the element in the set
     *                   and the old HTML value as arguments. jQuery empties the element before calling the function; use the
     *                   oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/html/}
     * @since 1.0
     * @since 1.4
     */
    html(htmlString: JQuery.htmlString | ((this: TElement, index: number, oldhtml: JQuery.htmlString) => JQuery.htmlString)): this;
    /**
     * Get the HTML contents of the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/html/}
     * @since 1.0
     */
    html(): string;
    /**
     * Search for a given element from among the matched elements.
     *
     * @param element The DOM element or first element within the jQuery object to look for.
     *                A selector representing a jQuery collection in which to look for an element.
     * @see {@link https://api.jquery.com/index/}
     * @since 1.0
     * @since 1.4
     */
    index(element?: JQuery.Selector | Element | JQuery): number;
    /**
     * Set the CSS inner height of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the inner height (including padding but not border) to set. Receives the index
     *              position of the element in the set and the old inner height as arguments. Within the function, this
     *              refers to the current element in the set.
     * @see {@link https://api.jquery.com/innerHeight/}
     * @since 1.8.0
     */
    innerHeight(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see {@link https://api.jquery.com/innerHeight/}
     * @since 1.2.6
     */
    innerHeight(): number | undefined;
    /**
     * Set the CSS inner width of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the inner width (including padding but not border) to set. Receives the index
     *              position of the element in the set and the old inner width as arguments. Within the function, this
     *              refers to the current element in the set.
     * @see {@link https://api.jquery.com/innerWidth/}
     * @since 1.8.0
     */
    innerWidth(value: string | number | ((this: TElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed inner width for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see {@link https://api.jquery.com/innerWidth/}
     * @since 1.2.6
     */
    innerWidth(): number | undefined;
    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted after the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertAfter/}
     * @since 1.0
     */
    insertAfter(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery): this;
    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted before the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertBefore/}
     * @since 1.0
     */
    insertBefore(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery): this;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return
     * true if at least one of these elements matches the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A function used as a test for every element in the set. It accepts two arguments, index, which is
     *                 the element's index in the jQuery collection, and element, which is the DOM element. Within the
     *                 function, this refers to the current DOM element.
     *                 An existing jQuery object to match the current set of elements against.
     *                 One or more elements to match the current set of elements against.
     * @see {@link https://api.jquery.com/is/}
     * @since 1.0
     * @since 1.6
     */
    is(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): boolean;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/}
     * @since 1.4.3
     */
    keydown<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/}
     * @since 1.0
     */
    keydown(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/}
     * @since 1.4.3
     */
    keypress<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/}
     * @since 1.0
     */
    keypress(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/}
     * @since 1.4.3
     */
    keyup<TData>(eventData: TData,
                 handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/}
     * @since 1.0
     */
    keyup(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Reduce the set of matched elements to the final one in the set.
     *
     * @see {@link https://api.jquery.com/last/}
     * @since 1.4
     */
    last(): this;
    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param complete A callback function that is executed when the request completes.
     * @see {@link https://api.jquery.com/load/}
     * @since 1.0
     */
    load(url: string,
         data: string | JQuery.PlainObject,
         complete: (this: TElement, responseText: string, textStatus: JQuery.Ajax.TextStatus, jqXHR: JQuery.jqXHR) => void): this;
    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param complete_data A callback function that is executed when the request completes.
     *                      A plain object or string that is sent to the server with the request.
     * @see {@link https://api.jquery.com/load/}
     * @since 1.0
     */
    load(url: string,
         complete_data?: ((this: TElement, responseText: string, textStatus: JQuery.Ajax.TextStatus, jqXHR: JQuery.jqXHR) => void) | string | JQuery.PlainObject): this;
    /**
     * Pass each element in the current matched set through a function, producing a new jQuery object
     * containing the return values.
     *
     * @param callback A function object that will be invoked for each element in the current set.
     * @see {@link https://api.jquery.com/map/}
     * @since 1.2
     */
    map(callback: (this: TElement, index: number, domElement: TElement) => any | any[] | null | undefined): this;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/}
     * @since 1.4.3
     */
    mousedown<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/}
     * @since 1.0
     */
    mousedown(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/}
     * @since 1.4.3
     */
    mouseenter<TData>(eventData: TData,
                      handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/}
     * @since 1.0
     */
    mouseenter(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/}
     * @since 1.4.3
     */
    mouseleave<TData>(eventData: TData,
                      handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/}
     * @since 1.0
     */
    mouseleave(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/}
     * @since 1.4.3
     */
    mousemove<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/}
     * @since 1.0
     */
    mousemove(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/}
     * @since 1.4.3
     */
    mouseout<TData>(eventData: TData,
                    handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/}
     * @since 1.0
     */
    mouseout(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/}
     * @since 1.4.3
     */
    mouseover<TData>(eventData: TData,
                     handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/}
     * @since 1.0
     */
    mouseover(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/}
     * @since 1.4.3
     */
    mouseup<TData>(eventData: TData,
                   handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/}
     * @since 1.0
     */
    mouseup(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/next/}
     * @since 1.0
     */
    next(selector?: JQuery.Selector): this;
    /**
     * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextAll/}
     * @since 1.2
     */
    nextAll(selector?: string): this;
    /**
     * Get all following siblings of each element up to but not including the element matched by the
     * selector, DOM node, or jQuery object passed.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
     *                 A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextUntil/}
     * @since 1.4
     * @since 1.6
     */
    nextUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Remove elements from the set of matched elements.
     *
     * @param selector A string containing a selector expression, a DOM element, or an array of elements to match against the set.
     *                 A function used as a test for each element in the set. It accepts two arguments, index, which is the
     *                 element's index in the jQuery collection, and element, which is the DOM element. Within the
     *                 function, this refers to the current DOM element.
     *                 An existing jQuery object to match the current set of elements against.
     * @see {@link https://api.jquery.com/not/}
     * @since 1.0
     * @since 1.4
     */
    not(selector: JQuery.Selector | JQuery.TypeOrArray<Element> | JQuery | ((this: TElement, index: number, element: TElement) => boolean)): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as
     *               "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(events: string, selector: JQuery.Selector, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as
     *               "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector_handler A selector which should match the one originally passed to .on() when attaching event handlers.
     *                         A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(events: string, selector_handler?: JQuery.Selector | JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(events: JQuery.PlainObject<JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false>, selector?: JQuery.Selector): this;
    /**
     * Remove an event handler.
     *
     * @param event A jQuery.Event object.
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(event?: JQuery.Event<TElement>): this;
    /**
     * Set the current coordinates of every element in the set of matched elements, relative to the document.
     *
     * @param coordinates An object containing the properties top and left, which are numbers indicating the new top and left
     *                    coordinates for the elements.
     *                    A function to return the coordinates to set. Receives the index of the element in the collection as
     *                    the first argument and the current coordinates as the second argument. The function should return an
     *                    object with the new top and left properties.
     * @see {@link https://api.jquery.com/offset/}
     * @since 1.4
     */
    offset(coordinates: JQuery.Coordinates | ((this: TElement, index: number, coords: JQuery.Coordinates) => JQuery.Coordinates)): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the document.
     *
     * @see {@link https://api.jquery.com/offset/}
     * @since 1.2
     */
    offset(): JQuery.Coordinates | undefined;
    /**
     * Get the closest ancestor element that is positioned.
     *
     * @see {@link https://api.jquery.com/offsetParent/}
     * @since 1.2.6
     */
    offsetParent(): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: string,
              selector: JQuery.Selector | null,
              data: TData,
              handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on(events: string,
       selector: JQuery.Selector,
       handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: string,
              data: TData,
              handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on(events: string,
       handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
              selector: JQuery.Selector | null,
              data: TData): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>,
       selector: JQuery.Selector): this; // tslint:disable-line:unified-signatures
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
              data: TData): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: string,
               selector: JQuery.Selector | null,
               data: TData,
               handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one(events: string,
        selector: JQuery.Selector,
        handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: string,
               data: TData,
               handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one(events: string,
        handler: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
               selector: JQuery.Selector | null,
               data: TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If
     *                 the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>,
        selector: JQuery.Selector): this; // tslint:disable-line:unified-signatures
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: JQuery.PlainObject<JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>> | false>,
               data: TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one(events: JQuery.PlainObject<JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false>): this;
    /**
     * Set the CSS outer height of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     * @see {@link https://api.jquery.com/outerHeight/}
     * @since 1.8.0
     */
    outerHeight(value: string | number | ((this: TElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed outer height (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerHeight/}
     * @since 1.2.6
     */
    outerHeight(includeMargin?: boolean): number | undefined;
    /**
     * Set the CSS outer width of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the outer width to set. Receives the index position of the element in the set
     *              and the old outer width as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/outerWidth/}
     * @since 1.8.0
     */
    outerWidth(value: string | number | ((this: TElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed outer width (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerWidth/}
     * @since 1.2.6
     */
    outerWidth(includeMargin?: boolean): number | undefined;
    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parent/}
     * @since 1.0
     */
    parent(selector?: JQuery.Selector): this;
    /**
     * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parents/}
     * @since 1.0
     */
    parents(selector?: JQuery.Selector): this;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including
     * the element matched by the selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
     *                 A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parentsUntil/}
     * @since 1.4
     * @since 1.6
     */
    parentsUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     *
     * @see {@link https://api.jquery.com/position/}
     * @since 1.2
     */
    position(): JQuery.Coordinates;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the beginning of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/prepend/}
     * @since 1.0
     */
    prepend(...contents: Array<JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>>): this;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param fn A function that returns an HTML string, DOM element(s), text node(s), or jQuery object to insert at
     *           the beginning of each element in the set of matched elements. Receives the index position of the
     *           element in the set and the old HTML value of the element as arguments. Within the function, this
     *           refers to the current element in the set.
     * @see {@link https://api.jquery.com/prepend/}
     * @since 1.4
     */
    prepend(fn: (this: TElement, index: number, html: string) => JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>): this;
    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the beginning of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/prependTo/}
     * @since 1.0
     */
    prependTo(target: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element> | JQuery): this;
    /**
     * Get the immediately preceding sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the previous sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prev/}
     * @since 1.0
     */
    prev(selector?: JQuery.Selector): this;
    /**
     * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevAll/}
     * @since 1.2
     */
    prevAll(selector?: JQuery.Selector): this;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the
     * selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
     *                 A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevUntil/}
     * @since 1.4
     * @since 1.6
     */
    prevUntil(selector?: JQuery.Selector | Element | JQuery, filter?: JQuery.Selector): this;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise<T extends object>(type: string, target: T): T & JQuery.Promise<this>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise<T extends object>(target: T): T & JQuery.Promise<this>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise(type?: string): JQuery.Promise<this>;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A function returning the value to set. Receives the index position of the element in the set and the
     *              old property value as arguments. Within the function, the keyword this refers to the current element.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(propertyName: string, value: (this: TElement, index: number, oldPropertyValue: any) => any): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(propertyName: string, value: any): this; // tslint:disable-line:unified-signatures
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(properties: JQuery.PlainObject): this;
    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(propertyName: string): any | undefined;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @param name The name of a jQuery method that generated the array of elements.
     * @param args The arguments that were passed in to the jQuery method (for serialization).
     * @see {@link https://api.jquery.com/pushStack/}
     * @since 1.3
     */
    pushStack(elements: ArrayLike<Element>, name: string, args: any[]): this;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @see {@link https://api.jquery.com/pushStack/}
     * @since 1.0
     */
    pushStack(elements: ArrayLike<Element>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(queueName: string, newQueue: JQuery.TypeOrArray<JQuery.QueueFunction<TElement>>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(newQueue: JQuery.TypeOrArray<JQuery.QueueFunction<TElement>>): this;
    /**
     * Show the queue of functions to be executed on the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(queueName?: string): JQuery.Queue<Node>;
    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @see {@link https://api.jquery.com/ready/}
     * @since 1.0
     * @deprecated 3.0
     */
    ready(handler: ($: JQueryStatic<TElement>) => void): this;
    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/remove/}
     * @since 1.0
     */
    remove(selector?: string): this;
    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
     * @see {@link https://api.jquery.com/removeAttr/}
     * @since 1.0
     */
    removeAttr(attributeName: string): this;
    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     *                  A function returning one or more space-separated class names to be removed. Receives the index
     *                  position of the element in the set and the old class value as arguments.
     * @see {@link https://api.jquery.com/removeClass/}
     * @since 1.0
     * @since 1.4
     */
    removeClass(className?: string | ((this: TElement, index: number, className: string) => string)): this;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete.
     *             An array or space-separated string naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/}
     * @since 1.2.3
     * @since 1.7
     */
    removeData(name?: JQuery.TypeOrArray<string>): this;
    /**
     * Remove a property for the set of matched elements.
     *
     * @param propertyName The name of the property to remove.
     * @see {@link https://api.jquery.com/removeProp/}
     * @since 1.6
     */
    removeProp(propertyName: string): this;
    /**
     * Replace each target element with the set of matched elements.
     *
     * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
     * @see {@link https://api.jquery.com/replaceAll/}
     * @since 1.2
     */
    replaceAll(target: JQuery.Selector | JQuery | JQuery.TypeOrArray<Element>): this;
    /**
     * Replace each element in the set of matched elements with the provided new content and return the set
     * of elements that was removed.
     *
     * @param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     *                   A function that returns content with which to replace the set of matched elements.
     * @see {@link https://api.jquery.com/replaceWith/}
     * @since 1.2
     * @since 1.4
     */
    replaceWith(newContent: JQuery.htmlString | JQuery | JQuery.TypeOrArray<Element> | ((this: TElement) => any)): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/}
     * @since 1.4.3
     */
    resize<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/}
     * @since 1.0
     */
    resize(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/}
     * @since 1.4.3
     */
    scroll<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/}
     * @since 1.0
     */
    scroll(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the current horizontal position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     * @see {@link https://api.jquery.com/scrollLeft/}
     * @since 1.2.6
     */
    scrollLeft(value: number): this;
    /**
     * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/scrollLeft/}
     * @since 1.2.6
     */
    scrollLeft(): number | undefined;
    /**
     * Set the current vertical position of the scroll bar for each of the set of matched elements.
     *
     * @param value A number indicating the new position to set the scroll bar to.
     * @see {@link https://api.jquery.com/scrollTop/}
     * @since 1.2.6
     */
    scrollTop(value: number): this;
    /**
     * Get the current vertical position of the scroll bar for the first element in the set of matched
     * elements or set the vertical position of the scroll bar for every matched element.
     *
     * @see {@link https://api.jquery.com/scrollTop/}
     * @since 1.2.6
     */
    scrollTop(): number | undefined;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/}
     * @since 1.4.3
     */
    select<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/}
     * @since 1.0
     */
    select(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Encode a set of form elements as a string for submission.
     *
     * @see {@link https://api.jquery.com/serialize/}
     * @since 1.0
     */
    serialize(): string;
    /**
     * Encode a set of form elements as an array of names and values.
     *
     * @see {@link https://api.jquery.com/serializeArray/}
     * @since 1.2
     */
    serializeArray(): JQuery.NameValuePair[];
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/show/}
     * @since 1.4.3
     */
    show(duration: JQuery.Duration, easing: string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete A string indicating which easing function to use for the transition.
     *                        A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/show/}
     * @since 1.0
     * @since 1.4.3
     */
    show(duration: JQuery.Duration, easing_complete: string | ((this: TElement) => void)): this;
    /**
     * Display the matched elements.
     *
     * @param duration_complete_options A string or number determining how long the animation will run.
     *                                  A function to call once the animation is complete, called once per matched element.
     *                                  A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/show/}
     * @since 1.0
     */
    show(duration_complete_options?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/siblings/}
     * @since 1.0
     */
    siblings(selector?: JQuery.Selector): this;
    /**
     * Reduce the set of matched elements to a subset specified by a range of indices.
     *
     * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative,
     *              it indicates an offset from the end of the set.
     * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative,
     *            it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
     * @see {@link https://api.jquery.com/slice/}
     * @since 1.1.4
     */
    slice(start: number, end?: number): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideDown/}
     * @since 1.4.3
     */
    slideDown(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideDown/}
     * @since 1.0
     * @since 1.4.3
     */
    slideDown(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideDown/}
     * @since 1.0
     * @since 1.4.3
     */
    slideDown(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideToggle/}
     * @since 1.4.3
     */
    slideToggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideToggle/}
     * @since 1.0
     * @since 1.4.3
     */
    slideToggle(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideToggle/}
     * @since 1.0
     * @since 1.4.3
     */
    slideToggle(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideUp/}
     * @since 1.4.3
     */
    slideUp(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration_easing A string or number determining how long the animation will run.
     *                        A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideUp/}
     * @since 1.0
     * @since 1.4.3
     */
    slideUp(duration_easing: JQuery.Duration | string, complete: (this: TElement) => void): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideUp/}
     * @since 1.0
     * @since 1.4.3
     */
    slideUp(duration_easing_complete_options?: JQuery.Duration | string | ((this: TElement) => void) | JQuery.EffectsOptions<TElement>): this;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see {@link https://api.jquery.com/stop/}
     * @since 1.7
     */
    stop(queue: string, clearQueue?: boolean, jumpToEnd?: boolean): this;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see {@link https://api.jquery.com/stop/}
     * @since 1.2
     */
    stop(clearQueue?: boolean, jumpToEnd?: boolean): this;
    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/submit/}
     * @since 1.4.3
     */
    submit<TData>(eventData: TData,
                  handler: JQuery.EventHandler<TElement, TData> | JQuery.EventHandlerBase<any, JQuery.Event<TElement, TData>>): this;
    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/submit/}
     * @since 1.0
     */
    submit(handler?: JQuery.EventHandler<TElement> | JQuery.EventHandlerBase<any, JQuery.Event<TElement>> | false): this;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will
     *             be converted to a String representation.
     *             A function returning the text content to set. Receives the index position of the element in the set
     *             and the old text value as arguments.
     * @see {@link https://api.jquery.com/text/}
     * @since 1.0
     * @since 1.4
     */
    text(text: string | number | boolean | ((this: TElement, index: number, text: string) => string | number | boolean)): this;
    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     *
     * @see {@link https://api.jquery.com/text/}
     * @since 1.0
     */
    text(): string;
    /**
     * Retrieve all the elements contained in the jQuery set, as an array.
     *
     * @see {@link https://api.jquery.com/toArray/}
     * @since 1.4
     */
    toArray(): TElement[];
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.4.3
     */
    toggle(duration: JQuery.Duration, easing: string, complete?: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.0
     */
    toggle(duration: JQuery.Duration, complete: (this: TElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param duration_complete_options_display A string or number determining how long the animation will run.
     *                                          A function to call once the animation is complete, called once per matched element.
     *                                          A map of additional options to pass to the method.
     *                                          Use true to show the element or false to hide it.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.0
     * @since 1.3
     */
    toggle(duration_complete_options_display?: JQuery.Duration | ((this: TElement) => void) | JQuery.EffectsOptions<TElement> | boolean): this;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on
     * either the class's presence or the value of the state argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     *                  A function that returns class names to be toggled in the class attribute of each element in the
     *                  matched set. Receives the index position of the element in the set, the old class value, and the state as arguments.
     * @param state A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/}
     * @since 1.0
     * @since 1.3
     * @since 1.4
     */
    toggleClass<TState extends boolean>(className: string | ((this: TElement, index: number, className: string, state: TState) => string),
                                        state?: TState): this;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on
     * either the class's presence or the value of the state argument.
     *
     * @param state A boolean value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/}
     * @since 1.4
     * @deprecated 3.0
     */
    toggleClass(state?: boolean): this;
    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     *                  A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/trigger/}
     * @since 1.0
     * @since 1.3
     */
    trigger(eventType: string | JQuery.Event<TElement>, extraParameters?: any[] | JQuery.PlainObject | string | number): this;
    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     *                  A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/triggerHandler/}
     * @since 1.2
     * @since 1.3
     */
    triggerHandler(eventType: string | JQuery.Event<TElement>, extraParameters?: any[] | JQuery.PlainObject | string | number): undefined | any;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param event A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/unbind/}
     * @since 1.0
     * @since 1.4.3
     * @deprecated 3.0
     */
    unbind(event: string, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param event A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     *              A jQuery.Event object.
     * @see {@link https://api.jquery.com/unbind/}
     * @since 1.0
     * @deprecated 3.0
     */
    unbind(event?: string | JQuery.Event<TElement>): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/undelegate/}
     * @since 1.4.2
     * @deprecated 3.0
     */
    undelegate(selector: JQuery.Selector, eventType: string, handler: JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param eventTypes A string containing a JavaScript event type, such as "click" or "keydown"
     *                   An object of one or more event types and previously bound functions to unbind from them.
     * @see {@link https://api.jquery.com/undelegate/}
     * @since 1.4.2
     * @since 1.4.3
     * @deprecated 3.0
     */
    undelegate(selector: JQuery.Selector, eventTypes: string | JQuery.PlainObject<JQuery.EventHandlerBase<any, JQuery.Event<TElement, any>> | false>): this;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a
     * specific set of root elements.
     *
     * @param namespace A selector which will be used to filter the event results.
     * @see {@link https://api.jquery.com/undelegate/}
     * @since 1.4.2
     * @since 1.6
     * @deprecated 3.0
     */
    undelegate(namespace?: string): this;
    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     *
     * @param selector A selector to check the parent element against. If an element's parent does not match the selector,
     *                 the element won't be unwrapped.
     * @see {@link https://api.jquery.com/unwrap/}
     * @since 1.4
     * @since 3.0
     */
    unwrap(selector?: string): this;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, a number, or an array of strings corresponding to the value of each matched
     *              element to set as selected/checked.
     *              A function returning the value to set. this is the current element. Receives the index position of
     *              the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/val/}
     * @since 1.0
     * @since 1.4
     */
    val(value: string | number | string[] | ((this: TElement, index: number, value: string) => string)): this;
    /**
     * Get the current value of the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/val/}
     * @since 1.0
     */
    val(): string | number | string[] | undefined;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure
     *              appended (as a string).
     *              A function returning the width to set. Receives the index position of the element in the set and the
     *              old width as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/width/}
     * @since 1.0
     * @since 1.4.1
     */
    width(value: string | number | ((this: TElement, index: number, value: number) => string | number)): this;
    /**
     * Get the current computed width for the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/width/}
     * @since 1.0
     */
    width(): number | undefined;
    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the
     *                        matched elements. When you pass a jQuery collection containing more than one element, or a selector
     *                        matching more than one element, the first element will be used.
     *                        A callback function returning the HTML content or jQuery object to wrap around the matched elements.
     *                        Receives the index position of the element in the set as an argument. Within the function, this
     *                        refers to the current element in the set.
     * @see {@link https://api.jquery.com/wrap/}
     * @since 1.0
     * @since 1.4
     */
    wrap(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement, index: number) => string | JQuery)): this;
    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     *                        A callback function returning the HTML content or jQuery object to wrap around all the matched
     *                        elements. Within the function, this refers to the first element in the set. Prior to jQuery 3.0, the
     *                        callback was incorrectly called for every element in the set and received the index position of the
     *                        element in the set as an argument.
     * @see {@link https://api.jquery.com/wrapAll/}
     * @since 1.2
     * @since 1.4
     */
    wrapAll(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement) => string | JQuery)): this;
    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     *
     * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap
     *                        around the content of the matched elements.
     *                        A callback function which generates a structure to wrap around the content of the matched elements.
     *                        Receives the index position of the element in the set as an argument. Within the function, this
     *                        refers to the current element in the set.
     * @see {@link https://api.jquery.com/wrapInner/}
     * @since 1.2
     * @since 1.4
     */
    wrapInner(wrappingElement: JQuery.Selector | JQuery.htmlString | Element | JQuery | ((this: TElement, index: number) => string | JQuery | Element)): this;

    [n: number]: TElement;
}

// ES5 compatibility
interface Iterable<T> { }

declare namespace JQuery {
    type TypeOrArray<T> = T | T[];
    type Node = Element | Text | Comment;

    /**
     * A string is designated htmlString in jQuery documentation when it is used to represent one or more
     * DOM elements, typically to be created and inserted in the document. When passed as an argument of
     * the jQuery() function, the string is identified as HTML if it starts with <tag ... >) and is parsed
     * as such until the final > character. Prior to jQuery 1.9, a string was considered to be HTML if it
     * contained <tag ... > anywhere within the string.
     */
    type htmlString = string;
    /**
     * A selector is used in jQuery to select DOM elements from a DOM document. That document is, in most
     * cases, the DOM document present in all browsers, but can also be an XML document received via Ajax.
     */
    type Selector = string;

    /**
     * The PlainObject type is a JavaScript object containing zero or more key-value pairs. The plain
     * object is, in other words, an Object object. It is designated "plain" in jQuery documentation to
     * distinguish it from other kinds of JavaScript objects: for example, null, user-defined arrays, and
     * host objects such as document, all of which have a typeof value of "object."
     */
    interface PlainObject<T = any> {
        [key: string]: T;
    }

    // region Ajax

    interface AjaxSettings<TContext = any> extends Ajax.AjaxSettingsBase<TContext> {
        /**
         * A string containing the URL to which the request is sent.
         */
        url?: string;
        /**
         * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
         * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
         * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
         * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
         * of the type of request.
         */
        beforeSend?(this: TContext, jqXHR: jqXHR, settings: AjaxSettings<TContext>): false | void;
    }

    interface UrlAjaxSettings<TContext = any> extends Ajax.AjaxSettingsBase<TContext> {
        /**
         * A string containing the URL to which the request is sent.
         */
        url: string;
        /**
         * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
         * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
         * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
         * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
         * of the type of request.
         */
        beforeSend?(this: TContext, jqXHR: jqXHR, settings: UrlAjaxSettings<TContext>): false | void;
    }

    namespace Ajax {
        type SuccessTextStatus = 'success' | 'notmodified' | 'nocontent';
        type ErrorTextStatus = 'timeout' | 'error' | 'abort' | 'parsererror';
        type TextStatus = SuccessTextStatus | ErrorTextStatus;

        interface SuccessCallback<TContext> {
            (this: TContext, data: any, textStatus: SuccessTextStatus, jqXHR: JQuery.jqXHR): void;
        }

        interface ErrorCallback<TContext> {
            (this: TContext, jqXHR: jqXHR, textStatus: ErrorTextStatus, errorThrown: string): void;
        }

        interface CompleteCallback<TContext> {
            (this: TContext, jqXHR: jqXHR, textStatus: TextStatus): void;
        }

        /**
         * @see {@link http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings}
         */
        interface AjaxSettingsBase<TContext> {
            /**
             * A set of key/value pairs that map a given dataType to its MIME type, which gets sent in the Accept
             * request header. This header tells the server what kind of response it will accept in return.
             */
            accepts?: PlainObject<string>;
            /**
             * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need
             * synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests
             * do not support synchronous operation. Note that synchronous requests may temporarily lock the
             * browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async:
             * false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback
             * options instead of the corresponding methods of the jqXHR object such as jqXHR.done().
             */
            async?: boolean;
            /**
             * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
             * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
             * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
             * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
             * of the type of request.
             */
            beforeSend?(this: TContext, jqXHR: jqXHR, settings: AjaxSettingsBase<TContext>): false | void;
            /**
             * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache
             * to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}"
             * to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a
             * POST is made to a URL that has already been requested by a GET.
             */
            cache?: boolean;
            /**
             * A function to be called when the request finishes (after success and error callbacks are executed).
             * The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a
             * string categorizing the status of the request ("success", "notmodified", "nocontent", "error",
             * "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of
             * functions. Each function will be called in turn. This is an Ajax Event.
             */
            complete?: TypeOrArray<Ajax.CompleteCallback<TContext>>;
            /**
             * An object of string/regular-expression pairs that determine how jQuery will parse the response,
             * given its content type.
             */
            contents?: PlainObject<RegExp>;
            /**
             * When sending data to the server, use this content type. Default is
             * "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly
             * pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent).
             * As of jQuery 1.6 you can pass false to tell jQuery to not set any content type header. Note: The W3C
             * XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset
             * will not force the browser to change the encoding. Note: For cross-domain requests, setting the
             * content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or
             * text/plain will trigger the browser to send a preflight OPTIONS request to the server.
             */
            contentType?: string | false;
            /**
             * This object will be the context of all Ajax-related callbacks. By default, the context is an object
             * that represents the Ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
             */
            context?: TContext;
            /**
             * An object containing dataType-to-dataType converters. Each converter's value is a function that
             * returns the transformed value of the response.
             */
            converters?: PlainObject<((value: any) => any) | true>;
            /**
             * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of
             * crossDomain to true. This allows, for example, server-side redirection to another domain.
             */
            crossDomain?: boolean;
            /**
             * Data to be sent to the server. It is converted to a query string, if not already a string. It's
             * appended to the url for GET-requests. See processData option to prevent this automatic processing.
             * Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same
             * key based on the value of the traditional setting (described below).
             */
            data?: PlainObject | string;
            /**
             * A function to be used to handle the raw response data of XMLHttpRequest. This is a pre-filtering
             * function to sanitize the response. You should return the sanitized data. The function accepts two
             * arguments: The raw data returned from the server and the 'dataType' parameter.
             */
            dataFilter?(data: string, type: string): any;
            /**
             * The type of data that you're expecting back from the server. If none is specified, jQuery will try
             * to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON
             * will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be
             * returned as a string). The available types (and the result passed as the first argument to your
             * success callback) are:
             *
             * "xml": Returns a XML document that can be processed via jQuery.
             *
             * "html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.
             *
             * "script": Evaluates the response as JavaScript and returns it as plain text. Disables caching by
             * appending a query string parameter, _=[TIMESTAMP], to the URL unless the cache option is set to
             * true. Note: This will turn POSTs into GETs for remote-domain requests.
             *
             * "json": Evaluates the response as JSON and returns a JavaScript object. Cross-domain "json" requests
             * are converted to "jsonp" unless the request includes jsonp: false in its request options. The JSON
             * data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. As of
             * jQuery 1.9, an empty response is also rejected; the server should return a response of null or {}
             * instead. (See json.org for more information on proper JSON formatting.)
             *
             * "jsonp": Loads in a JSON block using JSONP. Adds an extra "?callback=?" to the end of your URL to
             * specify the callback. Disables caching by appending a query string parameter, "_=[TIMESTAMP]", to
             * the URL unless the cache option is set to true.
             *
             * "text": A plain text string.
             *
             * multiple, space-separated values: As of jQuery 1.5, jQuery can convert a dataType from what it
             * received in the Content-Type header to what you require. For example, if you want a text response to
             * be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it
             * received as text, and interpreted by jQuery as XML: "jsonp text xml". Similarly, a shorthand string
             * such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from
             * jsonp to text, and then from text to xml.
             */
            dataType?: 'xml' | 'html' | 'script' | 'json' | 'jsonp' | 'text' | string;
            /**
             * A function to be called if the request fails. The function receives three arguments: The jqXHR (in
             * jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an
             * optional exception object, if one occurred. Possible values for the second argument (besides null)
             * are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives
             * the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery
             * 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note:
             * This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
             */
            error?: TypeOrArray<Ajax.ErrorCallback<TContext>>;
            /**
             * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to
             * prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to
             * control various Ajax Events.
             */
            global?: boolean;
            /**
             * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest
             * transport. The header X-Requested-With: XMLHttpRequest is always added, but its default
             * XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from
             * within the beforeSend function.
             */
            headers?: PlainObject<string | null | undefined>;
            /**
             * Allow the request to be successful only if the response has changed since the last request. This is
             * done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery
             * 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
             */
            ifModified?: boolean;
            /**
             * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery
             * does not recognize it as such by default. The following protocols are currently recognized as local:
             * file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so
             * once in the $.ajaxSetup() method.
             */
            isLocal?: boolean;
            /**
             * Override the callback function name in a JSONP request. This value will be used instead of
             * 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would
             * result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false
             * prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for
             * transformation. In this case, you should also explicitly set the jsonpCallback setting. For example,
             * { jsonp: false, jsonpCallback: "callbackName" }. If you don't trust the target of your Ajax
             * requests, consider setting the jsonp property to false for security reasons.
             */
            jsonp?: string | false;
            /**
             * Specify the callback function name for a JSONP request. This value will be used instead of the
             * random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name
             * as it'll make it easier to manage the requests and provide callbacks and error handling. You may
             * want to specify the callback when you want to enable better browser caching of GET requests. As of
             * jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback
             * is set to the return value of that function.
             */
            jsonpCallback?: string | ((this: TContext) => string);
            /**
             * The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
             */
            method?: string;
            /**
             * A mime type to override the XHR mime type.
             */
            mimeType?: string;
            /**
             * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
             */
            password?: string;
            /**
             * By default, data passed in to the data option as an object (technically, anything other than a
             * string) will be processed and transformed into a query string, fitting to the default content-type
             * "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data,
             * set this option to false.
             */
            processData?: boolean;
            /**
             * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or
             * "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request.
             * Used when the character set on the local page is not the same as the one on the remote script.
             */
            scriptCharset?: string;
            /**
             * An object of numeric HTTP codes and functions to be called when the response has the corresponding
             * code.
             *
             * If the request is successful, the status code functions take the same parameters as the success
             * callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback.
             */
            statusCode?: StatusCodeCallbacks<TContext>;
            /**
             * A function to be called if the request succeeds. The function gets passed three arguments: The data
             * returned from the server, formatted according to the dataType parameter or the dataFilter callback
             * function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x,
             * XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each
             * function will be called in turn. This is an Ajax Event.
             */
            success?: TypeOrArray<Ajax.SuccessCallback<TContext>>;
            /**
             * Set a timeout (in milliseconds) for the request. A value of 0 means there will be no timeout. This
             * will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the
             * $.ajax call is made; if several other requests are in progress and the browser has no connections
             * available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and
             * below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any
             * object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be
             * cancelled by a timeout; the script will run even if it arrives after the timeout period.
             */
            timeout?: number;
            /**
             * Set this to true if you wish to use the traditional style of param serialization.
             */
            traditional?: boolean;
            /**
             * An alias for method. You should use type if you're using versions of jQuery prior to 1.9.0.
             */
            type?: string;
            /**
             * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
             */
            username?: string;
            // ActiveXObject requires "lib": ["scripthost"] which consumers would also require
            /**
             * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE),
             * the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or
             * enhancements to the factory.
             */
            xhr?(): XMLHttpRequest;
            /**
             * An object of fieldName-fieldValue pairs to set on the native XHR object.
             *
             * In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS
             * requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+
             * should you require the use of it.
             */
            xhrFields?: XHRFields;
        }

        type StatusCodeCallbacks<TContext> = {
            // region Success Status Codes

            // jQuery treats 2xx and 304 status codes as a success

            200?: SuccessCallback<TContext>;
            201?: SuccessCallback<TContext>;
            202?: SuccessCallback<TContext>;
            203?: SuccessCallback<TContext>;
            204?: SuccessCallback<TContext>;
            205?: SuccessCallback<TContext>;
            206?: SuccessCallback<TContext>;
            207?: SuccessCallback<TContext>;
            208?: SuccessCallback<TContext>;
            209?: SuccessCallback<TContext>;
            210?: SuccessCallback<TContext>;
            211?: SuccessCallback<TContext>;
            212?: SuccessCallback<TContext>;
            213?: SuccessCallback<TContext>;
            214?: SuccessCallback<TContext>;
            215?: SuccessCallback<TContext>;
            216?: SuccessCallback<TContext>;
            217?: SuccessCallback<TContext>;
            218?: SuccessCallback<TContext>;
            219?: SuccessCallback<TContext>;
            220?: SuccessCallback<TContext>;
            221?: SuccessCallback<TContext>;
            222?: SuccessCallback<TContext>;
            223?: SuccessCallback<TContext>;
            224?: SuccessCallback<TContext>;
            225?: SuccessCallback<TContext>;
            226?: SuccessCallback<TContext>;
            227?: SuccessCallback<TContext>;
            228?: SuccessCallback<TContext>;
            229?: SuccessCallback<TContext>;
            230?: SuccessCallback<TContext>;
            231?: SuccessCallback<TContext>;
            232?: SuccessCallback<TContext>;
            233?: SuccessCallback<TContext>;
            234?: SuccessCallback<TContext>;
            235?: SuccessCallback<TContext>;
            236?: SuccessCallback<TContext>;
            237?: SuccessCallback<TContext>;
            238?: SuccessCallback<TContext>;
            239?: SuccessCallback<TContext>;
            240?: SuccessCallback<TContext>;
            241?: SuccessCallback<TContext>;
            242?: SuccessCallback<TContext>;
            243?: SuccessCallback<TContext>;
            244?: SuccessCallback<TContext>;
            245?: SuccessCallback<TContext>;
            246?: SuccessCallback<TContext>;
            247?: SuccessCallback<TContext>;
            248?: SuccessCallback<TContext>;
            249?: SuccessCallback<TContext>;
            250?: SuccessCallback<TContext>;
            251?: SuccessCallback<TContext>;
            252?: SuccessCallback<TContext>;
            253?: SuccessCallback<TContext>;
            254?: SuccessCallback<TContext>;
            255?: SuccessCallback<TContext>;
            256?: SuccessCallback<TContext>;
            257?: SuccessCallback<TContext>;
            258?: SuccessCallback<TContext>;
            259?: SuccessCallback<TContext>;
            260?: SuccessCallback<TContext>;
            261?: SuccessCallback<TContext>;
            262?: SuccessCallback<TContext>;
            263?: SuccessCallback<TContext>;
            264?: SuccessCallback<TContext>;
            265?: SuccessCallback<TContext>;
            266?: SuccessCallback<TContext>;
            267?: SuccessCallback<TContext>;
            268?: SuccessCallback<TContext>;
            269?: SuccessCallback<TContext>;
            270?: SuccessCallback<TContext>;
            271?: SuccessCallback<TContext>;
            272?: SuccessCallback<TContext>;
            273?: SuccessCallback<TContext>;
            274?: SuccessCallback<TContext>;
            275?: SuccessCallback<TContext>;
            276?: SuccessCallback<TContext>;
            277?: SuccessCallback<TContext>;
            278?: SuccessCallback<TContext>;
            279?: SuccessCallback<TContext>;
            280?: SuccessCallback<TContext>;
            281?: SuccessCallback<TContext>;
            282?: SuccessCallback<TContext>;
            283?: SuccessCallback<TContext>;
            284?: SuccessCallback<TContext>;
            285?: SuccessCallback<TContext>;
            286?: SuccessCallback<TContext>;
            287?: SuccessCallback<TContext>;
            288?: SuccessCallback<TContext>;
            289?: SuccessCallback<TContext>;
            290?: SuccessCallback<TContext>;
            291?: SuccessCallback<TContext>;
            292?: SuccessCallback<TContext>;
            293?: SuccessCallback<TContext>;
            294?: SuccessCallback<TContext>;
            295?: SuccessCallback<TContext>;
            296?: SuccessCallback<TContext>;
            297?: SuccessCallback<TContext>;
            298?: SuccessCallback<TContext>;
            299?: SuccessCallback<TContext>;
            304?: SuccessCallback<TContext>;

            // endregion

            // region Error Status Codes

            300?: ErrorCallback<TContext>;
            301?: ErrorCallback<TContext>;
            302?: ErrorCallback<TContext>;
            303?: ErrorCallback<TContext>;
            305?: ErrorCallback<TContext>;
            306?: ErrorCallback<TContext>;
            307?: ErrorCallback<TContext>;
            308?: ErrorCallback<TContext>;
            309?: ErrorCallback<TContext>;
            310?: ErrorCallback<TContext>;
            311?: ErrorCallback<TContext>;
            312?: ErrorCallback<TContext>;
            313?: ErrorCallback<TContext>;
            314?: ErrorCallback<TContext>;
            315?: ErrorCallback<TContext>;
            316?: ErrorCallback<TContext>;
            317?: ErrorCallback<TContext>;
            318?: ErrorCallback<TContext>;
            319?: ErrorCallback<TContext>;
            320?: ErrorCallback<TContext>;
            321?: ErrorCallback<TContext>;
            322?: ErrorCallback<TContext>;
            323?: ErrorCallback<TContext>;
            324?: ErrorCallback<TContext>;
            325?: ErrorCallback<TContext>;
            326?: ErrorCallback<TContext>;
            327?: ErrorCallback<TContext>;
            328?: ErrorCallback<TContext>;
            329?: ErrorCallback<TContext>;
            330?: ErrorCallback<TContext>;
            331?: ErrorCallback<TContext>;
            332?: ErrorCallback<TContext>;
            333?: ErrorCallback<TContext>;
            334?: ErrorCallback<TContext>;
            335?: ErrorCallback<TContext>;
            336?: ErrorCallback<TContext>;
            337?: ErrorCallback<TContext>;
            338?: ErrorCallback<TContext>;
            339?: ErrorCallback<TContext>;
            340?: ErrorCallback<TContext>;
            341?: ErrorCallback<TContext>;
            342?: ErrorCallback<TContext>;
            343?: ErrorCallback<TContext>;
            344?: ErrorCallback<TContext>;
            345?: ErrorCallback<TContext>;
            346?: ErrorCallback<TContext>;
            347?: ErrorCallback<TContext>;
            348?: ErrorCallback<TContext>;
            349?: ErrorCallback<TContext>;
            350?: ErrorCallback<TContext>;
            351?: ErrorCallback<TContext>;
            352?: ErrorCallback<TContext>;
            353?: ErrorCallback<TContext>;
            354?: ErrorCallback<TContext>;
            355?: ErrorCallback<TContext>;
            356?: ErrorCallback<TContext>;
            357?: ErrorCallback<TContext>;
            358?: ErrorCallback<TContext>;
            359?: ErrorCallback<TContext>;
            360?: ErrorCallback<TContext>;
            361?: ErrorCallback<TContext>;
            362?: ErrorCallback<TContext>;
            363?: ErrorCallback<TContext>;
            364?: ErrorCallback<TContext>;
            365?: ErrorCallback<TContext>;
            366?: ErrorCallback<TContext>;
            367?: ErrorCallback<TContext>;
            368?: ErrorCallback<TContext>;
            369?: ErrorCallback<TContext>;
            370?: ErrorCallback<TContext>;
            371?: ErrorCallback<TContext>;
            372?: ErrorCallback<TContext>;
            373?: ErrorCallback<TContext>;
            374?: ErrorCallback<TContext>;
            375?: ErrorCallback<TContext>;
            376?: ErrorCallback<TContext>;
            377?: ErrorCallback<TContext>;
            378?: ErrorCallback<TContext>;
            379?: ErrorCallback<TContext>;
            380?: ErrorCallback<TContext>;
            381?: ErrorCallback<TContext>;
            382?: ErrorCallback<TContext>;
            383?: ErrorCallback<TContext>;
            384?: ErrorCallback<TContext>;
            385?: ErrorCallback<TContext>;
            386?: ErrorCallback<TContext>;
            387?: ErrorCallback<TContext>;
            388?: ErrorCallback<TContext>;
            389?: ErrorCallback<TContext>;
            390?: ErrorCallback<TContext>;
            391?: ErrorCallback<TContext>;
            392?: ErrorCallback<TContext>;
            393?: ErrorCallback<TContext>;
            394?: ErrorCallback<TContext>;
            395?: ErrorCallback<TContext>;
            396?: ErrorCallback<TContext>;
            397?: ErrorCallback<TContext>;
            398?: ErrorCallback<TContext>;
            399?: ErrorCallback<TContext>;
            400?: ErrorCallback<TContext>;
            401?: ErrorCallback<TContext>;
            402?: ErrorCallback<TContext>;
            403?: ErrorCallback<TContext>;
            404?: ErrorCallback<TContext>;
            405?: ErrorCallback<TContext>;
            406?: ErrorCallback<TContext>;
            407?: ErrorCallback<TContext>;
            408?: ErrorCallback<TContext>;
            409?: ErrorCallback<TContext>;
            410?: ErrorCallback<TContext>;
            411?: ErrorCallback<TContext>;
            412?: ErrorCallback<TContext>;
            413?: ErrorCallback<TContext>;
            414?: ErrorCallback<TContext>;
            415?: ErrorCallback<TContext>;
            416?: ErrorCallback<TContext>;
            417?: ErrorCallback<TContext>;
            418?: ErrorCallback<TContext>;
            419?: ErrorCallback<TContext>;
            420?: ErrorCallback<TContext>;
            421?: ErrorCallback<TContext>;
            422?: ErrorCallback<TContext>;
            423?: ErrorCallback<TContext>;
            424?: ErrorCallback<TContext>;
            425?: ErrorCallback<TContext>;
            426?: ErrorCallback<TContext>;
            427?: ErrorCallback<TContext>;
            428?: ErrorCallback<TContext>;
            429?: ErrorCallback<TContext>;
            430?: ErrorCallback<TContext>;
            431?: ErrorCallback<TContext>;
            432?: ErrorCallback<TContext>;
            433?: ErrorCallback<TContext>;
            434?: ErrorCallback<TContext>;
            435?: ErrorCallback<TContext>;
            436?: ErrorCallback<TContext>;
            437?: ErrorCallback<TContext>;
            438?: ErrorCallback<TContext>;
            439?: ErrorCallback<TContext>;
            440?: ErrorCallback<TContext>;
            441?: ErrorCallback<TContext>;
            442?: ErrorCallback<TContext>;
            443?: ErrorCallback<TContext>;
            444?: ErrorCallback<TContext>;
            445?: ErrorCallback<TContext>;
            446?: ErrorCallback<TContext>;
            447?: ErrorCallback<TContext>;
            448?: ErrorCallback<TContext>;
            449?: ErrorCallback<TContext>;
            450?: ErrorCallback<TContext>;
            451?: ErrorCallback<TContext>;
            452?: ErrorCallback<TContext>;
            453?: ErrorCallback<TContext>;
            454?: ErrorCallback<TContext>;
            455?: ErrorCallback<TContext>;
            456?: ErrorCallback<TContext>;
            457?: ErrorCallback<TContext>;
            458?: ErrorCallback<TContext>;
            459?: ErrorCallback<TContext>;
            460?: ErrorCallback<TContext>;
            461?: ErrorCallback<TContext>;
            462?: ErrorCallback<TContext>;
            463?: ErrorCallback<TContext>;
            464?: ErrorCallback<TContext>;
            465?: ErrorCallback<TContext>;
            466?: ErrorCallback<TContext>;
            467?: ErrorCallback<TContext>;
            468?: ErrorCallback<TContext>;
            469?: ErrorCallback<TContext>;
            470?: ErrorCallback<TContext>;
            471?: ErrorCallback<TContext>;
            472?: ErrorCallback<TContext>;
            473?: ErrorCallback<TContext>;
            474?: ErrorCallback<TContext>;
            475?: ErrorCallback<TContext>;
            476?: ErrorCallback<TContext>;
            477?: ErrorCallback<TContext>;
            478?: ErrorCallback<TContext>;
            479?: ErrorCallback<TContext>;
            480?: ErrorCallback<TContext>;
            481?: ErrorCallback<TContext>;
            482?: ErrorCallback<TContext>;
            483?: ErrorCallback<TContext>;
            484?: ErrorCallback<TContext>;
            485?: ErrorCallback<TContext>;
            486?: ErrorCallback<TContext>;
            487?: ErrorCallback<TContext>;
            488?: ErrorCallback<TContext>;
            489?: ErrorCallback<TContext>;
            490?: ErrorCallback<TContext>;
            491?: ErrorCallback<TContext>;
            492?: ErrorCallback<TContext>;
            493?: ErrorCallback<TContext>;
            494?: ErrorCallback<TContext>;
            495?: ErrorCallback<TContext>;
            496?: ErrorCallback<TContext>;
            497?: ErrorCallback<TContext>;
            498?: ErrorCallback<TContext>;
            499?: ErrorCallback<TContext>;
            500?: ErrorCallback<TContext>;
            501?: ErrorCallback<TContext>;
            502?: ErrorCallback<TContext>;
            503?: ErrorCallback<TContext>;
            504?: ErrorCallback<TContext>;
            505?: ErrorCallback<TContext>;
            506?: ErrorCallback<TContext>;
            507?: ErrorCallback<TContext>;
            508?: ErrorCallback<TContext>;
            509?: ErrorCallback<TContext>;
            510?: ErrorCallback<TContext>;
            511?: ErrorCallback<TContext>;
            512?: ErrorCallback<TContext>;
            513?: ErrorCallback<TContext>;
            514?: ErrorCallback<TContext>;
            515?: ErrorCallback<TContext>;
            516?: ErrorCallback<TContext>;
            517?: ErrorCallback<TContext>;
            518?: ErrorCallback<TContext>;
            519?: ErrorCallback<TContext>;
            520?: ErrorCallback<TContext>;
            521?: ErrorCallback<TContext>;
            522?: ErrorCallback<TContext>;
            523?: ErrorCallback<TContext>;
            524?: ErrorCallback<TContext>;
            525?: ErrorCallback<TContext>;
            526?: ErrorCallback<TContext>;
            527?: ErrorCallback<TContext>;
            528?: ErrorCallback<TContext>;
            529?: ErrorCallback<TContext>;
            530?: ErrorCallback<TContext>;
            531?: ErrorCallback<TContext>;
            532?: ErrorCallback<TContext>;
            533?: ErrorCallback<TContext>;
            534?: ErrorCallback<TContext>;
            535?: ErrorCallback<TContext>;
            536?: ErrorCallback<TContext>;
            537?: ErrorCallback<TContext>;
            538?: ErrorCallback<TContext>;
            539?: ErrorCallback<TContext>;
            540?: ErrorCallback<TContext>;
            541?: ErrorCallback<TContext>;
            542?: ErrorCallback<TContext>;
            543?: ErrorCallback<TContext>;
            544?: ErrorCallback<TContext>;
            545?: ErrorCallback<TContext>;
            546?: ErrorCallback<TContext>;
            547?: ErrorCallback<TContext>;
            548?: ErrorCallback<TContext>;
            549?: ErrorCallback<TContext>;
            550?: ErrorCallback<TContext>;
            551?: ErrorCallback<TContext>;
            552?: ErrorCallback<TContext>;
            553?: ErrorCallback<TContext>;
            554?: ErrorCallback<TContext>;
            555?: ErrorCallback<TContext>;
            556?: ErrorCallback<TContext>;
            557?: ErrorCallback<TContext>;
            558?: ErrorCallback<TContext>;
            559?: ErrorCallback<TContext>;
            560?: ErrorCallback<TContext>;
            561?: ErrorCallback<TContext>;
            562?: ErrorCallback<TContext>;
            563?: ErrorCallback<TContext>;
            564?: ErrorCallback<TContext>;
            565?: ErrorCallback<TContext>;
            566?: ErrorCallback<TContext>;
            567?: ErrorCallback<TContext>;
            568?: ErrorCallback<TContext>;
            569?: ErrorCallback<TContext>;
            570?: ErrorCallback<TContext>;
            571?: ErrorCallback<TContext>;
            572?: ErrorCallback<TContext>;
            573?: ErrorCallback<TContext>;
            574?: ErrorCallback<TContext>;
            575?: ErrorCallback<TContext>;
            576?: ErrorCallback<TContext>;
            577?: ErrorCallback<TContext>;
            578?: ErrorCallback<TContext>;
            579?: ErrorCallback<TContext>;
            580?: ErrorCallback<TContext>;
            581?: ErrorCallback<TContext>;
            582?: ErrorCallback<TContext>;
            583?: ErrorCallback<TContext>;
            584?: ErrorCallback<TContext>;
            585?: ErrorCallback<TContext>;
            586?: ErrorCallback<TContext>;
            587?: ErrorCallback<TContext>;
            588?: ErrorCallback<TContext>;
            589?: ErrorCallback<TContext>;
            590?: ErrorCallback<TContext>;
            591?: ErrorCallback<TContext>;
            592?: ErrorCallback<TContext>;
            593?: ErrorCallback<TContext>;
            594?: ErrorCallback<TContext>;
            595?: ErrorCallback<TContext>;
            596?: ErrorCallback<TContext>;
            597?: ErrorCallback<TContext>;
            598?: ErrorCallback<TContext>;
            599?: ErrorCallback<TContext>;

            // endregion
        } & {
            // Status codes not listed require type annotations when defining the callback
            [index: number]: SuccessCallback<TContext> | ErrorCallback<TContext>;
        };

        // Writable properties on XMLHttpRequest
        interface XHRFields extends Partial<Pick<XMLHttpRequest, 'onreadystatechange' | 'responseType' | 'timeout' | 'withCredentials' | 'msCaching'>> { }
    }

    interface Transport {
        send(headers: PlainObject, completeCallback: Transport.SuccessCallback): void;
        abort(): void;
    }

    namespace Transport {
        interface SuccessCallback {
            (status: number, statusText: Ajax.TextStatus, responses?: PlainObject, headers?: string): void;
        }
    }

    /**
     * @see {@link http://api.jquery.com/jquery.ajax/#jqXHR}
     */
    interface jqXHR<TResolve = any> extends Promise3<TResolve, jqXHR<TResolve>, never,
        Ajax.SuccessTextStatus, Ajax.ErrorTextStatus, never,
        jqXHR<TResolve>, string, never>,
        Pick<XMLHttpRequest, 'abort' | 'getAllResponseHeaders' | 'getResponseHeader' | 'overrideMimeType' | 'readyState' | 'responseText' |
            'setRequestHeader' | 'status' | 'statusText'>,
        Partial<Pick<XMLHttpRequest, 'responseXML'>> {
        responseJSON?: any;

        /**
         * Determine the current state of a Deferred object.
         *
         * @see {@link https://api.jquery.com/deferred.state/}
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';
        statusCode(map: Ajax.StatusCodeCallbacks<any>): void;
    }

    namespace jqXHR {
        /**
         * @deprecated
         */
        interface DoneCallback<TResolve = any, TjqXHR = jqXHR<TResolve>> extends Deferred.Callback3<TResolve, Ajax.SuccessTextStatus, TjqXHR> { }

        /**
         * @deprecated
         */
        interface FailCallback<TjqXHR> extends Deferred.Callback3<TjqXHR, Ajax.ErrorTextStatus, string> { }

        /**
         * @deprecated
         */
        interface AlwaysCallback<TResolve = any, TjqXHR = jqXHR<TResolve>> extends Deferred.Callback3<TResolve | TjqXHR, Ajax.TextStatus, TjqXHR | string> { }
    }

    // endregion

    // region Callbacks

    interface Callbacks<T extends Function = Function> {
        /**
         * Add a callback or a collection of callbacks to a callback list.
         *
         * @param callback A function, or array of functions, that are to be added to the callback list.
         * @param callbacks A function, or array of functions, that are to be added to the callback list.
         * @see {@link https://api.jquery.com/callbacks.add/}
         * @since 1.7
         */
        add(callback: TypeOrArray<T>, ...callbacks: Array<TypeOrArray<T>>): this;
        /**
         * Disable a callback list from doing anything more.
         *
         * @see {@link https://api.jquery.com/callbacks.disable/}
         * @since 1.7
         */
        disable(): this;
        /**
         * Determine if the callbacks list has been disabled.
         *
         * @see {@link https://api.jquery.com/callbacks.disabled/}
         * @since 1.7
         */
        disabled(): boolean;
        /**
         * Remove all of the callbacks from a list.
         *
         * @see {@link https://api.jquery.com/callbacks.empty/}
         * @since 1.7
         */
        empty(): this;
        /**
         * Call all of the callbacks with the given arguments.
         *
         * @param args The argument or list of arguments to pass back to the callback list.
         * @see {@link https://api.jquery.com/callbacks.fire/}
         * @since 1.7
         */
        fire(...args: any[]): this;
        /**
         * Call all callbacks in a list with the given context and arguments.
         *
         * @param context A reference to the context in which the callbacks in the list should be fired.
         * @param args An argument, or array of arguments, to pass to the callbacks in the list.
         * @see {@link https://api.jquery.com/callbacks.fireWith/}
         * @since 1.7
         */
        fireWith(context: object, args?: ArrayLike<any>): this;
        /**
         * Determine if the callbacks have already been called at least once.
         *
         * @see {@link https://api.jquery.com/callbacks.fired/}
         * @since 1.7
         */
        fired(): boolean;
        /**
         * Determine whether or not the list has any callbacks attached. If a callback is provided as an
         * argument, determine whether it is in a list.
         *
         * @param callback The callback to search for.
         * @see {@link https://api.jquery.com/callbacks.has/}
         * @since 1.7
         */
        has(callback?: T): boolean;
        /**
         * Lock a callback list in its current state.
         *
         * @see {@link https://api.jquery.com/callbacks.lock/}
         * @since 1.7
         */
        lock(): this;
        /**
         * Determine if the callbacks list has been locked.
         *
         * @see {@link https://api.jquery.com/callbacks.locked/}
         * @since 1.7
         */
        locked(): boolean;
        /**
         * Remove a callback or a collection of callbacks from a callback list.
         *
         * @param callbacks A function, or array of functions, that are to be removed from the callback list.
         * @see {@link https://api.jquery.com/callbacks.remove/}
         * @since 1.7
         */
        remove(...callbacks: T[]): this;
    }

    // endregion

    // region CSS

    interface CSSHook<TElement> {
        get(this: this, elem: TElement, computed: any, extra: any): any;
        set(this: this, elem: TElement, value: any): void;
    }

    // endregion

    // region Deferred

    /**
     * Any object that has a then method.
     */
    interface Thenable<T> extends PromiseLike<T> { }

    // Type parameter guide
    // --------------------
    // Each type parameter represents a parameter in one of the three possible callbacks.
    //
    // The first letter indicates which position the parameter is in.
    //
    // T = A = 1st position
    // U = B = 2nd position
    // V = C = 3rd position
    // S = R = rest position
    //
    // The second letter indicates which whether it is a [R]esolve, Re[J]ect, or [N]otify value.
    //
    // The third letter indicates whether the value is returned in the [D]one filter, [F]ail filter, or [P]rogress filter.

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see {@link http://api.jquery.com/Types/#Promise}
     * @deprecated Experimental. Avoid referncing this type directly in your code.
     */
    interface PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN,
        SR, SJ, SN> extends _Promise<TR>, PromiseLike<TR> {
        /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         *
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see {@link https://api.jquery.com/deferred.always/}
         * @since 1.6
         */
        always(alwaysCallback: TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>,
               ...alwaysCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         *
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see {@link https://api.jquery.com/deferred.done/}
         * @since 1.5
         */
        done(doneCallback: TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>,
             ...doneCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.fail/}
         * @since 1.5
         */
        fail(failCallback: TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>,
             ...failCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         *
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see {@link https://api.jquery.com/deferred.progress/}
         * @since 1.7
         */
        progress(progressCallback: TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>,
                 ...progressCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>>): this;
        /**
         * Return a Deferred's Promise object.
         *
         * @param target Object onto which the promise methods have to be attached
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise<TTarget extends object>(target: TTarget): this & TTarget;
        /**
         * Return a Deferred's Promise object.
         *
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise(): this;
        /**
         * Determine the current state of a Deferred object.
         *
         * @see {@link https://api.jquery.com/deferred.state/}
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';

        // region pipe

        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: null,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: null,
             progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: null,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter?: null,
             progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // endregion

        // region then

        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: null,
             progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: null,
             progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: null,
             failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>
            (doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter?: null,
             progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // endregion

        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.catch/}
         * @since 3.0
         */
        catch<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (failFilter?: ((t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                BRF, BJF, BNF,
                CRF, CJF, CNF,
                RRF, RJF, RNF> | Thenable<ARF> | ARF) | null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
    }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see {@link http://api.jquery.com/Types/#Promise}
     */
    interface Promise3<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN> extends PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN,
        never, never, never> { }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see {@link http://api.jquery.com/Types/#Promise}
     */
    interface Promise2<TR, TJ, TN,
        UR, UJ, UN> extends PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        never, never, never,
        never, never, never> { }

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see {@link http://api.jquery.com/Types/#Promise}
     */
    interface Promise<TR, TJ = any, TN = any> extends PromiseBase<TR, TJ, TN,
        TR, TJ, TN,
        TR, TJ, TN,
        TR, TJ, TN> { }

    interface DeferredStatic {
        // https://jquery.com/upgrade-guide/3.0/#callback-exit
        exceptionHook: any;
        <TR = any, TJ = any, TN = any>(beforeStart?: (this: JQuery.Deferred<TR, TJ, TN>, deferred: JQuery.Deferred<TR, TJ, TN>) => void): JQuery.Deferred<TR, TJ, TN>;
    }

    interface Deferred<TR, TJ = any, TN = any> {
        /**
         * Call the progressCallbacks on a Deferred object with the given args.
         *
         * @param args Optional arguments that are passed to the progressCallbacks.
         * @see {@link https://api.jquery.com/deferred.notify/}
         * @since 1.7
         */
        notify(...args: TN[]): this;
        /**
         * Call the progressCallbacks on a Deferred object with the given context and args.
         *
         * @param context Context passed to the progressCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the progressCallbacks.
         * @see {@link https://api.jquery.com/deferred.notifyWith/}
         * @since 1.7
         */
        notifyWith(context: object, args?: ArrayLike<TN>): this;
        /**
         * Reject a Deferred object and call any failCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the failCallbacks.
         * @see {@link https://api.jquery.com/deferred.reject/}
         * @since 1.5
         */
        reject(...args: TJ[]): this;
        /**
         * Reject a Deferred object and call any failCallbacks with the given context and args.
         *
         * @param context Context passed to the failCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the failCallbacks.
         * @see {@link https://api.jquery.com/deferred.rejectWith/}
         * @since 1.5
         */
        rejectWith(context: object, args?: ArrayLike<TJ>): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the doneCallbacks.
         * @see {@link https://api.jquery.com/deferred.resolve/}
         * @since 1.5
         */
        resolve(...args: TR[]): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given context and args.
         *
         * @param context Context passed to the doneCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the doneCallbacks.
         * @see {@link https://api.jquery.com/deferred.resolveWith/}
         * @since 1.5
         */
        resolveWith(context: object, args?: ArrayLike<TR>): this;

        /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         *
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see {@link https://api.jquery.com/deferred.always/}
         * @since 1.6
         */
        always(alwaysCallback: TypeOrArray<Deferred.Callback<TR | TJ>>,
               ...alwaysCallbacks: Array<TypeOrArray<Deferred.Callback<TR | TJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         *
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see {@link https://api.jquery.com/deferred.done/}
         * @since 1.5
         */
        done(doneCallback: TypeOrArray<Deferred.Callback<TR>>,
             ...doneCallbacks: Array<TypeOrArray<Deferred.Callback<TR>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.fail/}
         * @since 1.5
         */
        fail(failCallback: TypeOrArray<Deferred.Callback<TJ>>,
             ...failCallbacks: Array<TypeOrArray<Deferred.Callback<TJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         *
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see {@link https://api.jquery.com/deferred.progress/}
         * @since 1.7
         */
        progress(progressCallback: TypeOrArray<Deferred.Callback<TN>>,
                 ...progressCallbacks: Array<TypeOrArray<Deferred.Callback<TN>>>): this;
        /**
         * Return a Deferred's Promise object.
         *
         * @param target Object onto which the promise methods have to be attached
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise<TTarget extends object>(target: TTarget): JQuery.Promise<TR, TJ, TN> & TTarget;
        /**
         * Return a Deferred's Promise object.
         *
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise(): JQuery.Promise<TR, TJ, TN>;
        /**
         * Determine the current state of a Deferred object.
         *
         * @see {@link https://api.jquery.com/deferred.state/}
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';

        // region pipe

        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: null,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: null,
             progressFilter?: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: null,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<AJF> | AJF,
             progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.pipe/}
         * @since 1.6
         * @since 1.7
         * @deprecated 1.8
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter?: null,
             progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // endregion

        // region then

        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: null,
             progressFilter: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>
            (doneFilter: null,
             failFilter: null,
             progressFilter?: (...t: TN[]) => PromiseBase<ARP, AJP, ANP,
                 BRP, BJP, BNP,
                 CRP, CJP, CNP,
                 RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (doneFilter: null,
             failFilter: (...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                 BRF, BJF, BNF,
                 CRF, CJF, CNF,
                 RRF, RJF, RNF> | Thenable<ARF> | ARF,
             progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>
            (doneFilter: (...t: TR[]) => PromiseBase<ARD, AJD, AND,
                 BRD, BJD, BND,
                 CRD, CJD, CND,
                 RRD, RJD, RND> | Thenable<ARD> | ARD,
             failFilter?: null,
             progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // endregion

        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.catch/}
         * @since 3.0
         */
        catch<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>
            (failFilter?: ((...t: TJ[]) => PromiseBase<ARF, AJF, ANF,
                BRF, BJF, BNF,
                CRF, CJF, CNF,
                RRF, RJF, RNF> | Thenable<ARF> | ARF) | null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
    }

    namespace Deferred {
        interface CallbackBase<T, U, V, R> {
            (t: T, u: U, v: V, ...r: R[]): void;
        }

        interface Callback3<T, U, V> extends CallbackBase<T, U, V, never> { }

        interface Callback<T> {
            (...args: T[]): void;
        }

        /**
         * @deprecated
         */
        interface DoneCallback<TResolve> extends Callback<TResolve> { }

        /**
         * @deprecated
         */
        interface FailCallback<TReject> extends Callback<TReject> { }

        /**
         * @deprecated
         */
        interface AlwaysCallback<TResolve, TReject> extends Callback<TResolve | TReject> { }

        /**
         * @deprecated
         */
        interface ProgressCallback<TNotify> extends Callback<TNotify> { }
    }

    // endregion

    // region Effects

    type Duration = number | 'fast' | 'slow';
    // TODO: Is the first element always a string or is that specific to the 'fx' queue?
    type Queue<TElement> = { 0: string; } & Array<QueueFunction<TElement>>;

    interface QueueFunction<TElement> {
        (this: TElement, next: () => void): void;
    }

    /**
     * @see {@link https://api.jquery.com/animate/#animate-properties-options}
     */
    interface EffectsOptions<TElement> {
        /**
         * A function to be called when the animation on an element completes or stops without completing (its
         * Promise object is either resolved or rejected).
         */
        always?(this: TElement, animation: JQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function that is called once the animation on an element is complete.
         */
        complete?(this: TElement): void;
        /**
         * A function to be called when the animation on an element completes (its Promise object is resolved).
         */
        done?(this: TElement, animation: JQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to be called when the animation on an element fails to complete (its Promise object is rejected).
         */
        fail?(this: TElement, animation: JQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function to be called after each step of the animation, only once per animated element regardless
         * of the number of animated properties.
         */
        progress?(this: TElement, animation: JQuery.Promise<any>, progress: number, remainingMs: number): void;
        /**
         * A Boolean indicating whether to place the animation in the effects queue. If false, the animation
         * will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case
         * the animation is added to the queue represented by that string. When a custom queue name is used the
         * animation does not automatically start; you must call .dequeue("queuename") to start it.
         */
        queue?: boolean | string;
        /**
         * An object containing one or more of the CSS properties defined by the properties argument and their
         * corresponding easing functions.
         */
        specialEasing?: PlainObject<string>;
        /**
         * A function to call when the animation on an element begins.
         */
        start?(this: TElement, animation: JQuery.Promise<any>): void;
        /**
         * A function to be called for each animated property of each animated element. This function provides
         * an opportunity to modify the Tween object to change the value of the property before it is set.
         */
        step?(this: TElement, now: number, tween: Tween<TElement>): void;
    }

    interface SpeedSettings<TElement> {
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to call once the animation is complete.
         */
        complete?(this: TElement): void;
    }

    // This should be a class but doesn't work correctly under the JQuery namespace. Tween should be an inner class of jQuery.
    // Undocumented
    // https://github.com/jquery/api.jquery.com/issues/391
    // https://github.com/jquery/api.jquery.com/issues/61
    interface Tween<TElement> {
        easing: string;
        elem: TElement;
        end: number;
        now: number;
        options: EffectsOptions<TElement>;
        pos: number;
        prop: string;
        start: number;
        unit: string;
    }

    interface AnimationHook<TElement> {
        (fx: JQuery.Tween<TElement>): void;
    }

    // endregion

    // region Events

    // region Event

    // This should be a class but doesn't work correctly under the JQuery namespace. Event should be an inner class of jQuery.

    // Static members
    interface EventStatic<TTarget = EventTarget> {
        <T extends object>(event: string, properties?: T): JQuery.Event<TTarget> & T;
        <T extends EventLike>(properties: T): JQuery.Event<TTarget> & T;
        new <T extends object>(event: string, properties?: T): JQuery.Event<TTarget> & T;
        new <T extends EventLike>(properties: T): JQuery.Event<TTarget> & T;
    }

    // Instance members
    interface Event {
        /**
         * Indicates whether the META key was pressed when the event fired.
         *
         * @see {@link https://api.jquery.com/event.metaKey/}
         * @since 1.0.4
         */
        metaKey: boolean;
        /**
         * The namespace specified when the event was triggered.
         *
         * @see {@link https://api.jquery.com/event.namespace/}
         * @since 1.4.3
         */
        namespace: string;
        /**
         * The mouse position relative to the left edge of the document.
         *
         * @see {@link https://api.jquery.com/event.pageX/}
         * @since 1.0.4
         */
        pageX: number;
        /**
         * The mouse position relative to the top edge of the document.
         *
         * @see {@link https://api.jquery.com/event.pageY/}
         * @since 1.0.4
         */
        pageY: number;
        /**
         * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
         *
         * @see {@link https://api.jquery.com/event.result/}
         * @since 1.3
         */
        result: any;
        /**
         * The difference in milliseconds between the time the browser created the event and January 1, 1970.
         *
         * @see {@link https://api.jquery.com/event.timeStamp/}
         * @since 1.2.6
         */
        timeStamp: number;
        /**
         * Describes the nature of the event.
         *
         * @see {@link https://api.jquery.com/event.type/}
         * @since 1.0
         */
        type: string;
        /**
         * For key or mouse events, this property indicates the specific key or button that was pressed.
         *
         * @see {@link https://api.jquery.com/event.which/}
         * @since 1.1.3
         */
        which: number;
        /**
         * Returns whether event.preventDefault() was ever called on this event object.
         *
         * @see {@link https://api.jquery.com/event.isDefaultPrevented/}
         * @since 1.3
         */
        isDefaultPrevented(): boolean;
        /**
         * Returns whether event.stopImmediatePropagation() was ever called on this event object.
         *
         * @see {@link https://api.jquery.com/event.isImmediatePropagationStopped/}
         * @since 1.3
         */
        isImmediatePropagationStopped(): boolean;
        /**
         * Returns whether event.stopPropagation() was ever called on this event object.
         *
         * @see {@link https://api.jquery.com/event.isPropagationStopped/}
         * @since 1.3
         */
        isPropagationStopped(): boolean;
        /**
         * If this method is called, the default action of the event will not be triggered.
         *
         * @see {@link https://api.jquery.com/event.preventDefault/}
         * @since 1.0
         */
        preventDefault(): void;
        /**
         * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
         *
         * @see {@link https://api.jquery.com/event.stopImmediatePropagation/}
         * @since 1.3
         */
        stopImmediatePropagation(): void;
        /**
         * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
         *
         * @see {@link https://api.jquery.com/event.stopPropagation/}
         * @since 1.0
         */
        stopPropagation(): void;
    }

    // Generic members
    interface Event<TTarget = EventTarget,
        TData = null> extends Partial<Pick<PointerEvent & KeyboardEvent & TouchEvent, 'altKey' | 'bubbles' | 'cancelable' |
        'changedTouches' | 'ctrlKey' | 'detail' | 'eventPhase' | 'metaKey' | 'pageX' | 'pageY' | 'shiftKey' | 'view' |
        'char' | 'charCode' | 'key' | 'keyCode' | 'button' | 'buttons' | 'clientX' | 'clientY' | 'offsetX' | 'offsetY' |
        'pointerId' | 'pointerType' | 'screenX' | 'screenY' | 'targetTouches' | 'toElement' | 'touches'>> {
        /**
         * The current DOM element within the event bubbling phase.
         *
         * @see {@link https://api.jquery.com/event.currentTarget/}
         * @since 1.3
         */
        currentTarget: TTarget;
        /**
         * An optional object of data passed to an event method when the current executing handler is bound.
         *
         * @see {@link https://api.jquery.com/event.data/}
         * @since 1.1
         */
        data: TData;
        /**
         * The element where the currently-called jQuery event handler was attached.
         *
         * @see {@link https://api.jquery.com/event.delegateTarget/}
         * @since 1.7
         */
        delegateTarget: TTarget;
        originalEvent: _Event;
        /**
         * The other DOM element involved in the event, if any.
         *
         * @see {@link https://api.jquery.com/event.relatedTarget/}
         * @since 1.1.4
         */
        relatedTarget: TTarget | null;
        /**
         * The DOM element that initiated the event.
         *
         * @see {@link https://api.jquery.com/event.target/}
         * @since 1.0
         */
        target: TTarget;
    }

    interface EventLike {
        type: string;
    }

    // endregion

    interface EventHandler<TCurrentTarget extends EventTarget, TData = null> extends EventHandlerBase<TCurrentTarget, JQuery.Event<TCurrentTarget, TData>> { }

    interface EventHandlerBase<TContext extends object, T> {
        // Extra parameters can be passed from trigger()
        (this: TContext, t: T, ...args: any[]): void | false | any;
    }

    // Provided for convenience for use with jQuery.Event.which
    const enum Mouse {
        None = 0,
        Left = 1,
        Middle = 2,
        Right = 3
    }

    // Provided for convenience for use with jQuery.Event.which
    const enum Key {
        Backspace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Control = 17,
        Alt = 18,
        CapsLock = 20,
        Escape = 27,
        Space = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        ArrowLeft = 37,
        ArrowUp = 38,
        ArrowRight = 39,
        ArrowDown = 40,

        Semicolon = 186,
        Colon = 186,
        EqualsSign = 187,
        Plus = 187,
        Comma = 188,
        LessThanSign = 188,
        Minus = 189,
        Underscore = 189,
        Period = 190,
        GreaterThanSign = 190,
        ForwardSlash = 191,
        QuestionMark = 191,
        Backtick = 192,
        Tilde = 192,
        OpeningSquareBracket = 219,
        OpeningCurlyBrace = 219,
        Backslash = 220,
        Pipe = 220,
        ClosingSquareBracket = 221,
        ClosingCurlyBrace = 221,
        SingleQuote = 222,
        DoubleQuote = 222,

        Pause = 19,
        PrintScreen = 44,
        Insert = 45,
        Delete = 46,
        Num0 = 48,
        Num1 = 49,
        Num2 = 50,
        Num3 = 51,
        Num4 = 52,
        Num5 = 53,
        Num6 = 54,
        Num7 = 55,
        Num8 = 56,
        Num9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        MetaLeft = 91,
        MetaRight = 92,
        ContextMenu = 93,
        Numpad0 = 96,
        Numpad1 = 97,
        Numpad2 = 98,
        Numpad3 = 99,
        Numpad4 = 100,
        Numpad5 = 101,
        Numpad6 = 102,
        Numpad7 = 103,
        Numpad8 = 104,
        Numpad9 = 105,
        NumpadMultiply = 106,
        NumpadAdd = 107,
        NumpadSubtract = 109,
        NumpadDecimal = 110,
        NumpadDivide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145
    }

    // endregion

    interface NameValuePair {
        name: string;
        value: string;
    }

    interface Coordinates {
        left: number;
        top: number;
    }

    interface ValHook<TElement> {
        get?(elem: TElement): any;
        set?(elem: TElement, value: any): any;
    }
}

// region Legacy types

interface JQueryCallback extends JQuery.Callbacks<Function> { }
interface JQueryDeferred<T> extends JQuery.Deferred<T> { }
interface JQueryEventConstructor extends JQuery.Event<EventTarget> { }
interface JQueryDeferred<T> extends JQuery.Deferred<T> { }
interface JQueryAjaxSettings extends JQuery.AjaxSettings { }
interface JQueryAnimationOptions extends JQuery.EffectsOptions<Element> { }
interface JQueryCoordinates extends JQuery.Coordinates { }
interface JQueryGenericPromise<T> extends JQuery.Thenable<T> { }
interface JQueryXHR extends JQuery.jqXHR { }
interface JQueryPromise<T> extends JQuery.Promise<T> { }
interface JQuerySerializeArrayElement extends JQuery.NameValuePair { }

/**
 * @deprecated 1.9
 */
interface JQuerySupport extends JQuery.PlainObject { }

// Legacy types that are not represented in the current type definitions are marked deprecated.

/**
 * @deprecated
 */
interface JQueryPromiseCallback<T> {
    (value?: T, ...args: any[]): void;
}
/**
 * @deprecated
 */
interface JQueryParam {
    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     *
     * @param obj An array or object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     */
    (obj: any, traditional?: boolean): string;
}
/**
 * @deprecated
 */
interface BaseJQueryEventObject extends Event {
    /**
     * The current DOM element within the event bubbling phase.
     * @see {@link https://api.jquery.com/event.currentTarget/}
     */
    currentTarget: Element;
    /**
     * An optional object of data passed to an event method when the current executing handler is bound.
     * @see {@link https://api.jquery.com/event.data/}
     */
    data: any;
    /**
     * The element where the currently-called jQuery event handler was attached.
     * @see {@link https://api.jquery.com/event.delegateTarget/}
     */
    delegateTarget: Element;
    /**
     * Returns whether event.preventDefault() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isDefaultPrevented/}
     */
    isDefaultPrevented(): boolean;
    /**
     * Returns whether event.stopImmediatePropagation() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isImmediatePropagationStopped/}
     */
    isImmediatePropagationStopped(): boolean;
    /**
     * Returns whether event.stopPropagation() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isPropagationStopped/}
     */
    isPropagationStopped(): boolean;
    /**
     * The namespace specified when the event was triggered.
     * @see {@link https://api.jquery.com/event.namespace/}
     */
    namespace: string;
    /**
     * The browser's original Event object.
     * @see {@link https://api.jquery.com/category/events/event-object/}
     */
    originalEvent: Event;
    /**
     * If this method is called, the default action of the event will not be triggered.
     * @see {@link https://api.jquery.com/event.preventDefault/}
     */
    preventDefault(): any;
    /**
     * The other DOM element involved in the event, if any.
     * @see {@link https://api.jquery.com/event.relatedTarget/}
     */
    relatedTarget: Element;
    /**
     * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
     * @see {@link https://api.jquery.com/event.result/}
     */
    result: any;
    /**
     * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
     * @see {@link https://api.jquery.com/event.stopImmediatePropagation/}
     */
    stopImmediatePropagation(): void;
    /**
     * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
     * @see {@link https://api.jquery.com/event.stopPropagation/}
     */
    stopPropagation(): void;
    /**
     * The DOM element that initiated the event.
     * @see {@link https://api.jquery.com/event.target/}
     */
    target: Element;
    /**
     * The mouse position relative to the left edge of the document.
     * @see {@link https://api.jquery.com/event.pageX/}
     */
    pageX: number;
    /**
     * The mouse position relative to the top edge of the document.
     * @see {@link https://api.jquery.com/event.pageY/}
     */
    pageY: number;
    /**
     * For key or mouse events, this property indicates the specific key or button that was pressed.
     * @see {@link https://api.jquery.com/event.which/}
     */
    which: number;
    /**
     * Indicates whether the META key was pressed when the event fired.
     * @see {@link https://api.jquery.com/event.metaKey/}
     */
    metaKey: boolean;
}
/**
 * @deprecated
 */
interface JQueryInputEventObject extends BaseJQueryEventObject {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
/**
 * @deprecated
 */
interface JQueryMouseEventObject extends JQueryInputEventObject {
    button: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}
/**
 * @deprecated
 */
interface JQueryKeyEventObject extends JQueryInputEventObject {
    char: any;
    charCode: number;
    key: any;
    keyCode: number;
}
/**
 * @deprecated
 */
interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject { }
/**
 * @deprecated
 */
interface JQueryPromiseOperator<T, U> {
    (callback1: JQuery.TypeOrArray<JQueryPromiseCallback<T>>,
     ...callbacksN: Array<JQuery.TypeOrArray<JQueryPromiseCallback<any>>>): JQueryPromise<U>;
}
/**
 * @deprecated
 */
interface JQueryEasingFunction {
    (percent: number): number;
}
/**
 * @deprecated
 */
interface JQueryEasingFunctions {
    [name: string]: JQueryEasingFunction;
    linear: JQueryEasingFunction;
    swing: JQueryEasingFunction;
}

// endregion
