// Type definitions for jquery 3.2
// Project: https://jquery.com
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference path="include.d.ts" />
/// <reference path="another.d.ts" />

export = factory;

declare function factory(window: Window, noGlobal?: boolean): jQueryStatic;

declare global {
    const jQuery: jQueryStatic;
    const $: jQueryStatic;

    namespace jQuery {
        type Callbacks = JQuery.Callbacks;
        type Deferred<T> = JQuery.Deferred<T>;
        type Event<TData = null> = JQuery.Event<TData>;
    }

    type JQuery = jQuery;
    type JQueryStatic = jQueryStatic;
    type JQueryCallback = JQuery.Callbacks;
    type JQueryDeferred<T> = JQuery.Deferred<T>;
    type BaseJQueryEventObject = JQuery.Event;
    type JQueryInputEventObject = JQuery.Event;
    type JQueryMouseEventObject = JQuery.Event;
    type JQueryKeyEventObject = JQuery.Event;
    type JQueryEventObject = JQuery.Event;
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
    type JQuerySupport = typeof $.support;
    type JQueryParam = typeof $.param;
    type JQueryEventConstructor = JQuery.Event;
}

type _Event = Event;

declare class jQuery {
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
    add(selector: jQuery.Selector, context: HTMLElement): this;
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
    add(selector: jQuery.Selector | jQuery.TypeOrArray<HTMLElement> | jQuery.htmlString | jQuery): this;
    /**
     * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     * @see {@link https://api.jquery.com/addBack/}
     * @since 1.8
     */
    addBack(selector?: jQuery.Selector): this;
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
    addClass(className: string | ((this: HTMLElement, index: number, currentClassName: string) => string)): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param content HTML string, DOM element, text node, array of elements and text nodes, or jQuery object to insert
     *                after each element in the set of matched elements.
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert after each element in the set of matched elements.
     * @see {@link https://api.jquery.com/after/}
     * @since 1.0
     */
    after(content: jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery,
          ...contents: Array<jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery>): this;
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
    after(fn: (this: HTMLElement, index: number, html: string) => jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery): this;
    /**
     * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxComplete/}
     * @since 1.0
     */
    ajaxComplete(handler: (this: Document, event: JQuery.Event, jqXHR: jQuery.jqXHR, ajaxOptions: jQuery.AjaxSettings) => void | false): this;
    /**
     * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxError/}
     * @since 1.0
     */
    ajaxError(handler: (this: Document, event: JQuery.Event, jqXHR: jQuery.jqXHR, ajaxSettings: jQuery.AjaxSettings, thrownError: string) => void | false): this;
    /**
     * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxSend/}
     * @since 1.0
     */
    ajaxSend(handler: (this: Document, event: JQuery.Event, jqXHR: jQuery.jqXHR, ajaxOptions: jQuery.AjaxSettings) => void | false): this;
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
    ajaxSuccess(handler: (this: Document, event: JQuery.Event, jqXHR: jQuery.jqXHR, ajaxOptions: jQuery.AjaxSettings, data: jQuery.PlainObject) => void | false): this;
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
    animate(properties: jQuery.PlainObject,
            duration: jQuery.Duration,
            easing: string,
            complete?: (this: HTMLElement) => void): this;
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
    animate(properties: jQuery.PlainObject,
            duration_easing: jQuery.Duration | string,
            complete?: (this: HTMLElement) => void): this;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration_easing_complete_options A string or number determining how long the animation will run.
     *                                         A string indicating which easing function to use for the transition.
     *                                         A function to call once the animation is complete, called once per matched element.
     *                                         A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/animate/}
     * @since 1.0
     */
    animate(properties: jQuery.PlainObject,
            duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param content DOM element, text node, array of elements and text nodes, HTML string, or jQuery object to insert at
     *                the end of each element in the set of matched elements.
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the end of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/append/}
     * @since 1.0
     */
    append(content: jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery,
           ...contents: Array<jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery>): this;
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
    append(fn: (this: HTMLElement, index: number, html: string) => jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery): this;
    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the end of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/appendTo/}
     * @since 1.0
     */
    appendTo(target: jQuery.Selector | jQuery.htmlString | jQuery.TypeOrArray<HTMLElement> | jQuery): this;
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
         value: string | number | null | ((this: HTMLElement, index: number, attr: string) => string | number | void | undefined)): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     * @see {@link https://api.jquery.com/attr/}
     * @since 1.0
     */
    attr(attributes: jQuery.PlainObject): this;
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
     * @param content HTML string, DOM element, text node, array of elements and text nodes, or jQuery object to insert
     *                before each element in the set of matched elements.
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert before each element in the set of matched elements.
     * @see {@link https://api.jquery.com/before/}
     * @since 1.0
     */
    before(content: jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery,
           ...contents: Array<jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery>): this;
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
    before(fn: (this: HTMLElement, index: number, html: string) => jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.0
     * @deprecated 3.0
     */
    bind<TData>(eventType: string, eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from
     *                      occurring and stops the event from bubbling. The default is true.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.4.3
     * @deprecated 3.0
     */
    bind(eventType: string, eventData: any, preventBubble: boolean): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.0
     * @deprecated 3.0
     */
    bind(eventType: string, handler: jQuery.EventHandler): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param preventBubble_eventData Setting the third argument to false will attach a function that prevents the default action from
     *                                occurring and stops the event from bubbling. The default is true.
     *                                An object containing data that will be passed to the event handler.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.0
     * @deprecated 3.0
     */
    bind(eventType: string, preventBubble_eventData?: boolean | any): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param events An object containing one or more DOM event types and functions to execute for them.
     * @see {@link https://api.jquery.com/bind/}
     * @since 1.4
     * @deprecated 3.0
     */
    bind(events: jQuery.PlainObject<jQuery.EventHandler>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/}
     * @since 1.4.3
     */
    blur<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/}
     * @since 1.0
     */
    blur(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/}
     * @since 1.4.3
     */
    change<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/}
     * @since 1.0
     */
    change(handler?: jQuery.EventHandler): this;
    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/children/}
     * @since 1.0
     */
    children(selector?: jQuery.Selector): this;
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
    click<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/click/}
     * @since 1.0
     */
    click(handler?: jQuery.EventHandler): this;
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
    closest(selector: jQuery.Selector, context: HTMLElement): this;
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
    closest(selector: jQuery.Selector | jQuery | HTMLElement): this;
    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     *
     * @see {@link https://api.jquery.com/contents/}
     * @since 1.2
     */
    contents(): this;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/}
     * @since 1.4.3
     */
    contextmenu<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/}
     * @since 1.0
     */
    contextmenu(handler?: jQuery.EventHandler): this;
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
        value: string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/css/}
     * @since 1.0
     */
    css(properties: jQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>): this;
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
    css(propertyNames: string[]): jQuery.PlainObject<string>;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by
     * data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @param undefined
     * @see {@link https://api.jquery.com/data/}
     * @since 1.2.3
     */
    // tslint:disable-next-line:unified-signatures
    data(key: string, undefined: undefined): any;
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
    data(obj: jQuery.PlainObject): this;
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
    data(): jQuery.PlainObject;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/}
     * @since 1.4.3
     */
    dblclick<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/}
     * @since 1.0
     */
    dblclick(handler?: jQuery.EventHandler): this;
    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/delay/}
     * @since 1.4
     */
    delay(duration: jQuery.Duration, queueName?: string): this;
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
    delegate<TData>(selector: string, eventType: string, eventData: TData, handler: jQuery.EventHandler<TData>): this;
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
    delegate(selector: string, eventType: string, handler: jQuery.EventHandler): this;
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
    delegate(selector: string, events: jQuery.PlainObject<jQuery.EventHandler>): this;
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
    detach(selector?: jQuery.Selector): this;
    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     *
     * @param fn A function to execute for each matched element.
     * @see {@link https://api.jquery.com/each/}
     * @since 1.0
     */
    each(fn: (this: HTMLElement, index: number, element: HTMLElement) => void | false): this;
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
     * @see {@link https://api.jquery.com/eq/}
     * @since 1.1.2
     */
    eq(index: number): this;
    /**
     * Reduce the set of matched elements to the one at the specified index.
     *
     * @param indexFromEnd An integer indicating the position of the element, counting backwards from the last element in the set.
     * @see {@link https://api.jquery.com/eq/}
     * @since 1.4
     */
    eq(indexFromEnd: number): this;
    /**
     * Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.
     *
     * @param obj An object to merge onto the jQuery prototype.
     * @see {@link https://api.jquery.com/jQuery.fn.extend/}
     * @since 1.0
     */
    extend(obj: object): jQuery;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeIn/}
     * @since 1.4.3
     */
    fadeIn(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    fadeIn(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    fadeIn(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeOut/}
     * @since 1.4.3
     */
    fadeOut(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    fadeOut(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    fadeOut(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
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
    fadeTo(duration: jQuery.Duration, opacity: number, easing: string, complete?: (this: HTMLElement) => void): this;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeTo/}
     * @since 1.0
     */
    fadeTo(duration: jQuery.Duration, opacity: number, complete?: (this: HTMLElement) => void): this;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/fadeToggle/}
     * @since 1.4.4
     */
    fadeToggle(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    fadeToggle(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    fadeToggle(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
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
    filter(selector: jQuery.Selector | jQuery.TypeOrArray<HTMLElement> | jQuery | ((this: HTMLElement, index: number, element: HTMLElement) => boolean)): this;
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
    find(selector: jQuery.Selector | HTMLElement | jQuery): this;
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
    focus<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focus/}
     * @since 1.0
     */
    focus(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/}
     * @since 1.4.3
     */
    focusin<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "focusin" event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/}
     * @since 1.4
     */
    focusin(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/}
     * @since 1.4.3
     */
    focusout<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "focusout" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/}
     * @since 1.4
     */
    focusout(handler?: jQuery.EventHandler): this;
    /**
     * Retrieve one of the elements matched by the jQuery object.
     *
     * @param index A zero-based integer indicating which element to retrieve.
     * @see {@link https://api.jquery.com/get/}
     * @since 1.0
     */
    get(index: number): HTMLElement;
    /**
     * Retrieve the elements matched by the jQuery object.
     *
     * @see {@link https://api.jquery.com/get/}
     * @since 1.0
     */
    get(): HTMLElement[];
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     *                 A DOM element to match elements against.
     * @see {@link https://api.jquery.com/has/}
     * @since 1.4
     */
    has(selector: string | HTMLElement): this;
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
    height(value: string | number | ((this: HTMLElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/height/}
     * @since 1.0
     */
    height(): number;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/hide/}
     * @since 1.4.3
     */
    hide(duration: jQuery.Duration, easing: string, complete: (this: HTMLElement) => void): this;
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
    hide(duration: jQuery.Duration, easing_complete: string | ((this: HTMLElement) => void)): this;
    /**
     * Hide the matched elements.
     *
     * @param duration_complete_options A string or number determining how long the animation will run.
     *                                  A function to call once the animation is complete, called once per matched element.
     *                                  A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/hide/}
     * @since 1.0
     */
    hide(duration_complete_options?: jQuery.Duration | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
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
    hover(handlerInOut: (this: HTMLElement, eventObject: JQuery.Event) => void | false,
          handlerOut?: (this: HTMLElement, eventObject: JQuery.Event) => void | false): this;
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
    html(htmlString: jQuery.htmlString | ((this: HTMLElement, index: number, oldhtml: jQuery.htmlString) => jQuery.htmlString)): this;
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
    index(element?: HTMLElement | jQuery | jQuery.Selector): number;
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
    innerHeight(value: string | number | ((this: HTMLElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed height for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see {@link https://api.jquery.com/innerHeight/}
     * @since 1.2.6
     */
    innerHeight(): number;
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
    innerWidth(value: string | number | ((this: HTMLElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed inner width for the first element in the set of matched elements, including
     * padding but not border.
     *
     * @see {@link https://api.jquery.com/innerWidth/}
     * @since 1.2.6
     */
    innerWidth(): number;
    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted after the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertAfter/}
     * @since 1.0
     */
    insertAfter(target: jQuery.Selector | jQuery.htmlString | jQuery.TypeOrArray<HTMLElement> | jQuery): this;
    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements
     *               will be inserted before the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertBefore/}
     * @since 1.0
     */
    insertBefore(target: jQuery.Selector | jQuery.htmlString | jQuery.TypeOrArray<HTMLElement> | jQuery): this;
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
    is(selector: jQuery.Selector | ((this: HTMLElement, index: number, element: HTMLElement) => boolean) | jQuery | HTMLElement | HTMLElement[]): boolean;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/}
     * @since 1.4.3
     */
    keydown<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/}
     * @since 1.0
     */
    keydown(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/}
     * @since 1.4.3
     */
    keypress<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/}
     * @since 1.0
     */
    keypress(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/}
     * @since 1.4.3
     */
    keyup<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/}
     * @since 1.0
     */
    keyup(handler?: jQuery.EventHandler): this;
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
         data: string | jQuery.PlainObject,
         complete: (this: HTMLElement, responseText: string, textStatus: string, jqXHR: jQuery.jqXHR) => void): this;
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
         complete_data?: ((this: HTMLElement, responseText: string, textStatus: string, jqXHR: jQuery.jqXHR) => void) | string | jQuery.PlainObject): this;
    /**
     * Pass each element in the current matched set through a function, producing a new jQuery object
     * containing the return values.
     *
     * @param callback A function object that will be invoked for each element in the current set.
     * @see {@link https://api.jquery.com/map/}
     * @since 1.2
     */
    map(callback: (this: HTMLElement, index: number, domElement: HTMLElement) => any | any[] | null | undefined): this;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/}
     * @since 1.4.3
     */
    mousedown<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/}
     * @since 1.0
     */
    mousedown(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/}
     * @since 1.4.3
     */
    mouseenter<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/}
     * @since 1.0
     */
    mouseenter(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/}
     * @since 1.4.3
     */
    mouseleave<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/}
     * @since 1.0
     */
    mouseleave(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/}
     * @since 1.4.3
     */
    mousemove<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/}
     * @since 1.0
     */
    mousemove(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/}
     * @since 1.4.3
     */
    mouseout<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/}
     * @since 1.0
     */
    mouseout(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/}
     * @since 1.4.3
     */
    mouseover<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/}
     * @since 1.0
     */
    mouseover(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/}
     * @since 1.4.3
     */
    mouseup<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/}
     * @since 1.0
     */
    mouseup(handler?: jQuery.EventHandler): this;
    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/next/}
     * @since 1.0
     */
    next(selector?: jQuery.Selector): this;
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
    nextUntil(selector?: jQuery.Selector | HTMLElement | jQuery, filter?: jQuery.Selector): this;
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
    not(selector: jQuery.Selector | jQuery.TypeOrArray<HTMLElement> | ((this: HTMLElement, index: number, element: HTMLElement) => boolean) | jQuery): this;
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
    off(events: string, selector: string, handler: jQuery.EventHandler): this;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(events: jQuery.PlainObject<jQuery.EventHandler>, selector: string): this;
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
    off(events: string, selector_handler?: string | jQuery.EventHandler): this;
    /**
     * Remove an event handler.
     *
     * @param events A jQuery.Event object.
     *               An object where the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent handler functions previously attached for the event(s).
     * @see {@link https://api.jquery.com/off/}
     * @since 1.7
     */
    off(events?: JQuery.Event | jQuery.PlainObject<jQuery.EventHandler>): this;
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
    offset(coordinates: jQuery.Coordinates | ((this: HTMLElement, index: number, coords: jQuery.Coordinates) => jQuery.Coordinates)): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the document.
     *
     * @see {@link https://api.jquery.com/offset/}
     * @since 1.2
     */
    offset(): jQuery.Coordinates;
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
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: string, selector: string | null, data: TData, handler: jQuery.EventHandler<TData> | false): this;
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
    on<TData>(events: jQuery.PlainObject<jQuery.EventHandler<TData>>, selector: string | null, data: TData): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector_data A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                      selector is null or omitted, the event is always triggered when it reaches the selected element.
     *                      Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: string, selector_data: string | null | TData, handler: jQuery.EventHandler<TData> | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on(events: string, handler: jQuery.EventHandler | false): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector_data A selector string to filter the descendants of the selected elements that will call the handler. If
     *                      the selector is null or omitted, the handler is always called when it reaches the selected element.
     *                      Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/}
     * @since 1.7
     */
    on<TData>(events: jQuery.PlainObject<jQuery.EventHandler<TData>>, selector_data?: string | null | TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                 selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: string, selector: string | null, data: TData, handler: jQuery.EventHandler<TData> | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector_data A selector string to filter the descendants of the selected elements that trigger the event. If the
     *                      selector is null or omitted, the event is always triggered when it reaches the selected element.
     *                      Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: string, selector_data: string | null | TData, handler: jQuery.EventHandler<TData> | false): this;
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
    one<TData>(events: jQuery.PlainObject<jQuery.EventHandler<TData>>, selector: string | null, data: TData): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand
     *                for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one(events: string, handler: jQuery.EventHandler | false): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional
     *               namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector_data A selector string to filter the descendants of the selected elements that will call the handler. If
     *                      the selector is null or omitted, the handler is always called when it reaches the selected element.
     *                      Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/}
     * @since 1.7
     */
    one<TData>(events: jQuery.PlainObject<jQuery.EventHandler<TData>>, selector_data?: string | null | TData): this;
    /**
     * Set the CSS outer height of each element in the set of matched elements.
     *
     * @param value A number representing the number of pixels, or a number along with an optional unit of measure
     *              appended (as a string).
     * @see {@link https://api.jquery.com/outerHeight/}
     * @since 1.8.0
     */
    outerHeight(value: string | number | ((this: HTMLElement, index: number, height: number) => string | number)): this;
    /**
     * Get the current computed outer height (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerHeight/}
     * @since 1.2.6
     */
    outerHeight(includeMargin?: boolean): number;
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
    outerWidth(value: string | number | ((this: HTMLElement, index: number, width: number) => string | number)): this;
    /**
     * Get the current computed outer width (including padding, border, and optionally margin) for the
     * first element in the set of matched elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerWidth/}
     * @since 1.2.6
     */
    outerWidth(includeMargin?: boolean): number;
    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parent/}
     * @since 1.0
     */
    parent(selector?: jQuery.Selector): this;
    /**
     * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parents/}
     * @since 1.0
     */
    parents(selector?: jQuery.Selector): this;
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
    parentsUntil(selector?: jQuery.Selector | HTMLElement | jQuery, filter?: jQuery.Selector): this;
    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     *
     * @see {@link https://api.jquery.com/position/}
     * @since 1.2
     */
    position(): jQuery.Coordinates;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param content DOM element, text node, array of elements and text nodes, HTML string, or jQuery object to insert at
     *                the beginning of each element in the set of matched elements.
     * @param contents One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or
     *                 jQuery objects to insert at the beginning of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/prepend/}
     * @since 1.0
     */
    prepend(content: jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery,
            ...contents: Array<jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery>): this;
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
    prepend(fn: (this: HTMLElement, elementOfArray: number, html: string) => jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery): this;
    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements
     *               will be inserted at the beginning of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/prependTo/}
     * @since 1.0
     */
    prependTo(target: jQuery.Selector | jQuery.htmlString | jQuery.TypeOrArray<HTMLElement | Text> | jQuery): this;
    /**
     * Get the immediately preceding sibling of each element in the set of matched elements. If a selector
     * is provided, it retrieves the previous sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prev/}
     * @since 1.0
     */
    prev(selector?: jQuery.Selector): this;
    /**
     * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevAll/}
     * @since 1.2
     */
    prevAll(selector?: jQuery.Selector): this;
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
    prevUntil(selector?: jQuery.Selector | HTMLElement | jQuery, filter?: jQuery.Selector): this;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise<T>(type: string, target: T): T & jQuery.Promise<HTMLElement>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise<T>(target: T): T & jQuery.Promise<HTMLElement>;
    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection,
     * queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed.
     * @see {@link https://api.jquery.com/promise/}
     * @since 1.6
     */
    promise(type?: string): jQuery.Promise<this>;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A function returning the value to set. Receives the index position of the element in the set and the
     *              old property value as arguments. Within the function, the keyword this refers to the current element.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(propertyName: string, value: (this: HTMLElement, index: number, oldPropertyValue: any) => any): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    // tslint:disable-next-line:unified-signatures
    prop(propertyName: string, value: any): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/prop/}
     * @since 1.6
     */
    prop(properties: jQuery.PlainObject): this;
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
    pushStack(elements: ArrayLike<HTMLElement>, name: string, args: any[]): this;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @see {@link https://api.jquery.com/pushStack/}
     * @since 1.0
     */
    pushStack(elements: ArrayLike<HTMLElement>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(queueName: string, newQueue: jQuery.TypeOrArray<jQuery.QueueFunction>): this;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param newQueue The new function to add to the queue, with a function to call that will dequeue the next item.
     *                 An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(newQueue: jQuery.TypeOrArray<jQuery.QueueFunction>): this;
    /**
     * Show the queue of functions to be executed on the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/queue/}
     * @since 1.2
     */
    queue(queueName?: string): jQuery.Queue;
    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @see {@link https://api.jquery.com/ready/}
     * @since 1.0
     */
    ready(handler: ($: jQueryStatic) => void): this;
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
    removeClass(className?: string | ((this: HTMLElement, index: number, className: string) => string)): this;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete.
     *             An array or space-separated string naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/}
     * @since 1.2.3
     * @since 1.7
     */
    removeData(name?: jQuery.TypeOrArray<string>): this;
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
    replaceAll(target: jQuery.Selector | jQuery | jQuery.TypeOrArray<HTMLElement>): this;
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
    replaceWith(newContent: jQuery.htmlString | jQuery.TypeOrArray<HTMLElement> | jQuery | ((this: HTMLElement) => any)): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/}
     * @since 1.4.3
     */
    resize<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/}
     * @since 1.0
     */
    resize(handler?: jQuery.EventHandler): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/}
     * @since 1.4.3
     */
    scroll<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/}
     * @since 1.0
     */
    scroll(handler?: jQuery.EventHandler): this;
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
    scrollLeft(): number;
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
    scrollTop(): number;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/}
     * @since 1.4.3
     */
    select<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/}
     * @since 1.0
     */
    select(handler?: jQuery.EventHandler): this;
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
    serializeArray(): jQuery.NameValuePair[];
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/show/}
     * @since 1.4.3
     */
    show(duration: jQuery.Duration, easing: string, complete: (this: HTMLElement) => void): this;
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
    show(duration: jQuery.Duration, easing_complete: string | ((this: HTMLElement) => void)): this;
    /**
     * Display the matched elements.
     *
     * @param duration_complete_options A string or number determining how long the animation will run.
     *                                  A function to call once the animation is complete, called once per matched element.
     *                                  A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/show/}
     * @since 1.0
     */
    show(duration_complete_options?: jQuery.Duration | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/siblings/}
     * @since 1.0
     */
    siblings(selector?: jQuery.Selector): this;
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
    slideDown(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    slideDown(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    slideDown(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideToggle/}
     * @since 1.4.3
     */
    slideToggle(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    slideToggle(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    slideToggle(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/slideUp/}
     * @since 1.4.3
     */
    slideUp(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
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
    slideUp(duration_easing: jQuery.Duration | string, complete?: (this: HTMLElement) => void): this;
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
    slideUp(duration_easing_complete_options?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.EffectsOptions): this;
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
    submit<TData>(eventData: TData, handler: jQuery.EventHandler<TData>): this;
    /**
     * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/submit/}
     * @since 1.0
     */
    submit(handler?: jQuery.EventHandler): this;
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
    text(text: string | number | boolean | ((this: HTMLElement, index: number, text: string) => string | number | boolean)): this;
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
    toArray(): HTMLElement[];
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.4.3
     */
    toggle(duration: jQuery.Duration, easing: string, complete?: (this: HTMLElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.0
     */
    toggle(duration: jQuery.Duration, complete?: (this: HTMLElement) => void): this;
    /**
     * Display or hide the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     *                Use true to show the element or false to hide it.
     * @see {@link https://api.jquery.com/toggle/}
     * @since 1.0
     * @since 1.3
     */
    toggle(options?: jQuery.EffectsOptions | boolean): this;
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
    toggleClass(className: string | ((this: HTMLElement, index: number, className: string, state: boolean) => string),
                state?: boolean): this;
    /**
     *
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
    trigger(eventType: string | JQuery.Event, extraParameters?: any[] | jQuery.PlainObject): this;
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
    triggerHandler(eventType: string | JQuery.Event, extraParameters?: any[] | jQuery.PlainObject): undefined | any;
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
    unbind(event: string, handler: jQuery.EventHandler | false): this;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param event A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     *              A jQuery.Event object.
     * @see {@link https://api.jquery.com/unbind/}
     * @since 1.0
     * @deprecated 3.0
     */
    unbind(event?: string | JQuery.Event): this;
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
    undelegate(selector: jQuery.Selector, eventType: string, handler: jQuery.EventHandler): this;
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
    undelegate(selector: jQuery.Selector, eventTypes: string | jQuery.PlainObject<jQuery.EventHandler>): this;
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
    val(value: string | number | string[] | ((this: HTMLElement, index: number, value: string) => string)): this;
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
    width(value: string | number | ((this: HTMLElement, index: number, value: number) => string | number)): this;
    /**
     * Get the current computed width for the first element in the set of matched elements.
     *
     * @see {@link https://api.jquery.com/width/}
     * @since 1.0
     */
    width(): number;
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
    wrap(wrappingElement: jQuery.Selector | jQuery.htmlString | HTMLElement | jQuery | ((this: HTMLElement, index: number) => string | jQuery)): this;
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
    wrapAll(wrappingElement: jQuery.Selector | jQuery.htmlString | HTMLElement | jQuery | ((this: HTMLElement) => string | jQuery)): this;
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
    wrapInner(wrappingElement: jQuery.htmlString | jQuery.Selector | jQuery | HTMLElement | ((this: HTMLElement, index: number) => string)): this;
}

interface jQuery extends ArrayLike<HTMLElement>, Iterable<HTMLElement> { }

interface jQueryStatic {
    Event: JQuery.Event;
    /**
     * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize
     * CSS property naming, or create custom properties.
     *
     * @see {@link https://api.jquery.com/jQuery.cssHooks/}
     * @since 1.4.3
     */
    cssHooks: jQuery.PlainObject<jQuery.CSSHook>;
    /**
     * An object containing all CSS properties that may be used without a unit. The .css() method uses this
     * object to see if it may append px to unitless values.
     *
     * @see {@link https://api.jquery.com/jQuery.cssNumber/}
     * @since 1.4.3
     */
    cssNumber: jQuery.PlainObject<boolean>;
    readonly fn: jQuery;
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
        step: jQuery.PlainObject<jQuery.AnimationHook>;
    };
    /**
     * A Promise-like object (or "thenable") that resolves when the document is ready.
     *
     * @see {@link https://api.jquery.com/jQuery.ready/}
     * @since 1.8
     */
    ready: jQuery.Thenable<jQueryStatic>;
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
    support: jQuery.PlainObject;
    valHooks: jQuery.PlainObject<jQuery.ValHook>;
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
    (html: jQuery.htmlString, ownerDocument_attributes: Document | jQuery.PlainObject): jQuery;
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     * @see {@link https://api.jquery.com/jQuery/}
     * @since 1.0
     */
    (selector: jQuery.Selector, context: HTMLElement | Document | jQuery): jQuery;
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
    (selector_object_callback?: jQuery.Selector | jQuery.TypeOrArray<HTMLElement> | jQuery.PlainObject | jQuery | (($: jQueryStatic) => void)): jQuery;
    /**
     * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
     *
     * @param flags An optional list of space-separated flags that change how the callback list behaves.
     * @see {@link https://api.jquery.com/jQuery.Callbacks/}
     * @since 1.7
     */
    Callbacks(flags?: string): JQuery.Callbacks;
    /**
     * A factory function that returns a chainable utility object with methods to register multiple
     * callbacks into callback queues, invoke callback queues, and relay the success or failure state of
     * any synchronous or asynchronous function.
     *
     * @param beforeStart A function that is called just before the constructor returns.
     * @see {@link https://api.jquery.com/jQuery.Deferred/}
     * @since 1.5
     */
    Deferred(beforeStart?: (this: JQuery.Deferred<any>, deferred: JQuery.Deferred<any>) => void): JQuery.Deferred<any>;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
     * @see {@link https://api.jquery.com/jQuery.ajax/}
     * @since 1.5
     */
    ajax(url: string, settings?: jQuery.AjaxSettings): jQuery.jqXHR;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can
     *                 be set for any option with $.ajaxSetup().
     * @see {@link https://api.jquery.com/jQuery.ajax/}
     * @since 1.0
     */
    ajax(settings?: jQuery.AjaxSettings): jQuery.jqXHR;
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
                  handler: (options: jQuery.AjaxSettings, originalOptions: jQuery.AjaxSettings, jqXHR: jQuery.jqXHR) => string | void): void;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they
     * are processed by $.ajax().
     *
     * @param handler A handler to set default values for future Ajax requests.
     * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
     * @since 1.5
     */
    ajaxPrefilter(handler: (options: jQuery.AjaxSettings, originalOptions: jQuery.AjaxSettings, jqXHR: jQuery.jqXHR) => string | void): void;
    /**
     * Set default values for future Ajax requests. Its use is not recommended.
     *
     * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
     * @see {@link https://api.jquery.com/jQuery.ajaxSetup/}
     * @since 1.1
     */
    ajaxSetup(options: jQuery.AjaxSettings): jQuery.AjaxSettings;
    /**
     * Creates an object that handles the actual transmission of Ajax data.
     *
     * @param dataType A string identifying the data type to use
     * @param handler A handler to return the new transport object to use with the data type provided in the first argument.
     * @see {@link https://api.jquery.com/jQuery.ajaxTransport/}
     * @since 1.5
     */
    ajaxTransport(dataType: string,
                  handler: (options: jQuery.AjaxSettings, originalOptions: jQuery.AjaxSettings, jqXHR: jQuery.jqXHR) => jQuery.Transport | void): void;
    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     *
     * @param container The DOM element that may contain the other element.
     * @param contained The DOM element that may be contained by (a descendant of) the other element.
     * @see {@link https://api.jquery.com/jQuery.contains/}
     * @since 1.4
     */
    contains(container: HTMLElement, contained: HTMLElement): boolean;
    css(elem: HTMLElement, unknown: any): any;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or
     * the full data store for the element.
     *
     * @param element The DOM element to query for the data.
     * @param key Name of the data stored.
     * @param undefined
     * @see {@link https://api.jquery.com/jQuery.data/}
     * @since 1.2.3
     */
    // tslint:disable-next-line:unified-signatures
    data(element: HTMLElement, key: string, undefined: undefined): any;
    /**
     * Store arbitrary data associated with the specified element. Returns the value that was set.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @param value The new data value; this can be any Javascript type except undefined.
     * @see {@link https://api.jquery.com/jQuery.data/}
     * @since 1.2.3
     */
    data<T>(element: HTMLElement, key: string, value: T): T;
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
    data(element: HTMLElement, key?: string): any;
    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param element A DOM element from which to remove and execute a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/jQuery.dequeue/}
     * @since 1.3
     */
    dequeue(element: HTMLElement, queueName?: string): void;
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
    each<T>(array: ArrayLike<T>, callback: (indexInArray: number, value: T) => false | any): ArrayLike<T>;
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
    each<T, K extends keyof T>(obj: T, callback: (propertyName: K, valueOfProperty: T[K]) => false | any): T;
    /**
     * Takes a string and throws an exception containing it.
     *
     * @param message The message to send out.
     * @see {@link https://api.jquery.com/jQuery.error/}
     * @since 1.4.1
     */
    error(message: string): never;
    /**
     * Escapes any character that has a special meaning in a CSS selector.
     *
     * @param selector A string containing a selector expression to escape.
     * @see {@link https://api.jquery.com/jQuery.escapeSelector/}
     * @since 3.0
     */
    escapeSelector(selector: jQuery.Selector): jQuery.Selector;
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
    extend<T, U>(deep: true, target: T, ...objects: U[]): T & U;
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
    extend<T, U>(target: T, ...objects: U[]): T & U;
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
        data: jQuery.PlainObject | string,
        success: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | null,
        dataType?: string): jQuery.jqXHR;
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
        success: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | null,
        dataType: string): jQuery.jqXHR;
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
        success_data: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | jQuery.PlainObject | string): jQuery.jqXHR;
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
    get(url_settings?: string | jQuery.AjaxSettings): jQuery.jqXHR;
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
            data: jQuery.PlainObject | string,
            success: (data: jQuery.PlainObject, textStatus: string, jqXHR: jQuery.jqXHR) => void): jQuery.jqXHR;
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
            success_data?: ((data: jQuery.PlainObject, textStatus: string, jqXHR: jQuery.jqXHR) => void) | jQuery.PlainObject | string): jQuery.jqXHR;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getScript/}
     * @since 1.0
     */
    getScript(url: string,
              success?: (this: jQuery.AjaxSettings, script: string | undefined, textStatus: string, jqXHR: jQuery.jqXHR) => void): jQuery.jqXHR;
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
            fn: (this: Window, elementOfArray: T, indexInArray: number) => boolean,
            invert?: boolean): T[];
    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param element A DOM element to be checked for data.
     * @see {@link https://api.jquery.com/jQuery.hasData/}
     * @since 1.5
     */
    hasData(element: HTMLElement): boolean;
    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param hold Indicates whether the ready hold is being requested or released
     * @see {@link https://api.jquery.com/jQuery.holdReady/}
     * @since 1.6
     */
    holdReady(hold: boolean): void;
    /**
     * Modify and filter HTML strings passed through jQuery manipulation methods.
     *
     * @param html The HTML string on which to operate.
     * @see {@link https://api.jquery.com/jQuery.htmlPrefilter/}
     * @since 1.12/2.2
     */
    htmlPrefilter(html: string): string;
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
    isPlainObject(obj: any): obj is jQuery.PlainObject;
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
    map<T, R>(array: T[], callback: (this: Window, elementOfArray: T, indexInArray: number) => R): R[];
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
    map<T, K extends keyof T, R>(obj: T, callback: (this: Window, propertyOfObject: T[K], key: K) => R): R[];
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
    noConflict(removeAll?: boolean): jQueryStatic;
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
    param(obj: any[] | jQuery.PlainObject | jQuery, traditional?: boolean): string;
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context Document element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     * @since 1.8
     */
    parseHTML(data: string, context: HTMLElement | null | undefined, keepScripts: boolean): HTMLElement[];
    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context_keepScripts Document element to serve as the context in which the HTML fragment will be created
     *                            A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     * @since 1.8
     */
    parseHTML(data: string, context_keepScripts?: HTMLElement | null | undefined | boolean): HTMLElement[];
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
         data: jQuery.PlainObject | string,
         success: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | null,
         dataType?: string): jQuery.jqXHR;
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
         success: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | null,
         dataType: string): jQuery.jqXHR;
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
         success_data: ((data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void) | jQuery.PlainObject | string): jQuery.jqXHR;
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
    post(url_settings?: string | jQuery.AjaxSettings): jQuery.jqXHR;
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
    proxy(fn: Function, context: object, ...additionalArguments: any[]): Function;
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
    proxy<T extends object>(context: T, name: keyof T, ...additionalArguments: any[]): Function;
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
    queue(element: HTMLElement, queueName: string, newQueue: jQuery.TypeOrArray<jQuery.QueueFunction>): jQuery;
    /**
     * Show the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element to inspect for an attached queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/jQuery.queue/}
     * @since 1.3
     */
    queue(element: HTMLElement, queueName?: string): jQuery.Queue;
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
    removeData(element: HTMLElement, name?: string): jQuery;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.1
     */
    speed(duration: jQuery.Duration, easing: string, complete: (this: HTMLElement) => void): jQuery.EffectsOptions;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.1
     */
    speed(easing: string, complete: (this: HTMLElement) => void): jQuery.EffectsOptions;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing_complete_settings A string indicating which easing function to use for the transition.
     *                                 A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.0
     * @since 1.1
     */
    speed(duration: jQuery.Duration,
          easing_complete_settings: string | ((this: HTMLElement) => void) | jQuery.SpeedSettings): jQuery.EffectsOptions;
    /**
     * Creates an object containing a set of properties ready to be used in the definition of custom animations.
     *
     * @param duration_easing_complete_settings A string or number determining how long the animation will run.
     *                                          A string indicating which easing function to use for the transition.
     *                                          A function to call once the animation is complete, called once per matched element.
     * @see {@link https://api.jquery.com/jQuery.speed/}
     * @since 1.0
     * @since 1.1
     */
    speed(duration_easing_complete_settings?: jQuery.Duration | string | ((this: HTMLElement) => void) | jQuery.SpeedSettings): jQuery.EffectsOptions;
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
    type(obj: any): string;
    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see {@link https://api.jquery.com/jQuery.unique/}
     * @since 1.1.3
     * @deprecated 3.0
     */
    unique(array: HTMLElement[]): HTMLElement[];
    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on
     * arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see {@link https://api.jquery.com/jQuery.uniqueSort/}
     * @since 1.12-2.2
     */
    uniqueSort(array: HTMLElement[]): HTMLElement[];
    /**
     * Provides a way to execute callback functions based on zero or more Thenable objects, usually
     * Deferred objects that represent asynchronous events.
     *
     * @param deferreds Zero or more Thenable objects.
     * @see {@link https://api.jquery.com/jQuery.when/}
     * @since 1.5
     */
    when<T>(...deferreds: Array<JQuery.Deferred<T> | jQuery.Promise<T> | jQuery.Thenable<T> | T>): jQuery.Promise<T>;
}

declare namespace JQuery {
    interface Callbacks {
        /**
         * Add a callback or a collection of callbacks to a callback list.
         *
         * @param callbacks A function, or array of functions, that are to be added to the callback list.
         * @see {@link https://api.jquery.com/callbacks.add/}
         * @since 1.7
         */
        add(callbacks: jQuery.TypeOrArray<Function>): this;
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
        fireWith(context?: object, args?: jQuery.TypeOrArray<any>): this;
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
        has(callback?: Function): boolean;
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
        remove(callbacks: jQuery.TypeOrArray<Function>): this;
    }

    interface Deferred<T> {
        /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         *
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see {@link https://api.jquery.com/deferred.always/}
         * @since 1.6
         */
        always(alwaysCallback: jQuery.TypeOrArray<jQuery.PromiseCallback<T>>,
               ...alwaysCallbacks: Array<jQuery.TypeOrArray<jQuery.PromiseCallback<T>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.catch/}
         * @since 3.0
         */
        catch(failFilter: jQuery.PromiseCallback<T>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         *
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see {@link https://api.jquery.com/deferred.done/}
         * @since 1.5
         */
        done(doneCallback: jQuery.TypeOrArray<jQuery.PromiseCallback<T>>,
             ...doneCallbacks: Array<jQuery.TypeOrArray<jQuery.PromiseCallback<T>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         *
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see {@link https://api.jquery.com/deferred.fail/}
         * @since 1.5
         */
        fail(failCallback: jQuery.TypeOrArray<jQuery.PromiseCallback<T>>,
             ...failCallbacks: Array<jQuery.TypeOrArray<jQuery.PromiseCallback<T>>>): this;
        /**
         * Call the progressCallbacks on a Deferred object with the given args.
         *
         * @param args Optional arguments that are passed to the progressCallbacks.
         * @see {@link https://api.jquery.com/deferred.notify/}
         * @since 1.7
         */
        notify(...args: any[]): this;
        /**
         * Call the progressCallbacks on a Deferred object with the given context and args.
         *
         * @param context Context passed to the progressCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the progressCallbacks.
         * @see {@link https://api.jquery.com/deferred.notifyWith/}
         * @since 1.7
         */
        notifyWith(context: object, ...args: any[]): this;
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
        pipe(doneFilter?: jQuery.PromiseCallback<T> | null,
             failFilter?: jQuery.PromiseCallback<T> | null,
             progressFilter?: jQuery.PromiseCallback<T> | null): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         *
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see {@link https://api.jquery.com/deferred.progress/}
         * @since 1.7
         */
        progress(progressCallback: jQuery.TypeOrArray<jQuery.PromiseCallback<T>>,
                 ...progressCallbacks: Array<jQuery.TypeOrArray<jQuery.PromiseCallback<T>>>): this;
        /**
         * Return a Deferred's Promise object.
         *
         * @param target Object onto which the promise methods have to be attached
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise<TTarget>(target: TTarget): TTarget & jQuery.Promise<T>;
        /**
         * Return a Deferred's Promise object.
         *
         * @see {@link https://api.jquery.com/deferred.promise/}
         * @since 1.5
         */
        promise(): jQuery.Promise<T>;
        /**
         * Reject a Deferred object and call any failCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the failCallbacks.
         * @see {@link https://api.jquery.com/deferred.reject/}
         * @since 1.5
         */
        reject(...args: any[]): this;
        /**
         * Reject a Deferred object and call any failCallbacks with the given context and args.
         *
         * @param context Context passed to the failCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the failCallbacks.
         * @see {@link https://api.jquery.com/deferred.rejectWith/}
         * @since 1.5
         */
        rejectWith(context: object, ...args: any[]): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given args.
         *
         * @param args Optional arguments that are passed to the doneCallbacks.
         * @see {@link https://api.jquery.com/deferred.resolve/}
         * @since 1.5
         */
        resolve(...args: any[]): this;
        /**
         * Resolve a Deferred object and call any doneCallbacks with the given context and args.
         *
         * @param context Context passed to the doneCallbacks as the this object.
         * @param args An optional array of arguments that are passed to the doneCallbacks.
         * @see {@link https://api.jquery.com/deferred.resolveWith/}
         * @since 1.5
         */
        resolveWith(context: object, ...args: any[]): this;
        /**
         * Determine the current state of a Deferred object.
         *
         * @see {@link https://api.jquery.com/deferred.state/}
         * @since 1.7
         */
        state(): "pending" | "resolved" | "rejected";
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         *
         * @param doneFilter A function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see {@link https://api.jquery.com/deferred.then/}
         * @since 1.8
         */
        then(doneFilter: jQuery.PromiseCallback<T> | null,
             failFilter?: jQuery.PromiseCallback<T> | null,
             progressFilter?: jQuery.PromiseCallback<T> | null): this;
    }

    class Event<TData = null> {
        /**
         * The current DOM element within the event bubbling phase.
         *
         * @see {@link https://api.jquery.com/event.currentTarget/}
         * @since 1.3
         */
        currentTarget: HTMLElement;
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
        delegateTarget: HTMLElement;
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
         * The other DOM element involved in the event, if any.
         *
         * @see {@link https://api.jquery.com/event.relatedTarget/}
         * @since 1.1.4
         */
        relatedTarget: HTMLElement | null;
        /**
         * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
         *
         * @see {@link https://api.jquery.com/event.result/}
         * @since 1.3
         */
        result: any;
        /**
         * The DOM element that initiated the event.
         *
         * @see {@link https://api.jquery.com/event.target/}
         * @since 1.0
         */
        target: HTMLElement;
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

    interface Event extends Partial<Pick<PointerEvent & KeyboardEvent & TouchEvent, "altKey" | "bubbles" | "cancelable" |
        "changedTouches" | "ctrlKey" | "detail" | "eventPhase" | "metaKey" | "pageX" | "pageY" | "shiftKey" | "view" |
        "char" | "charCode" | "key" | "keyCode" | "button" | "buttons" | "clientX" | "clientY" | "offsetX" | "offsetY" |
        "pointerId" | "pointerType" | "screenX" | "screenY" | "targetTouches" | "toElement" | "touches">> {
        originalTarget?: HTMLElement;
        originalEvent: _Event;
        new<T>(event: string, properties?: T): Event & T;
        new<T>(properties: T): Event & T;
        <T>(event: string, properties?: T): Event & T;
        <T>(properties: T): Event & T;
    }
}
