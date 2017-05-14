// Type definitions for jQuery 1.10.x / 2.0.x
// Project: http://jquery.com/
// Definitions by: falsandtru <https://github.com/falsandtru>, jquery.d.ts definitors <https://github.com/borisyankov/DefinitelyTyped/blob/master/jquery/jquery.d.ts>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

/**
 * Interface for the JQuery callback
 */
interface JQueryCallback {
    /**
     * Add a callback or a collection of callbacks to a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be added to the callback list.
     */
    add(callbacks: Function|Function[]): JQueryCallback;

    /**
     * Disable a callback list from doing anything more.
     */
    disable(): JQueryCallback|boolean;

    /**
     * Remove a callback or a collection of callbacks from a callback list.
     * 
     * @param callbacks A function, or array of functions, that are to be removed from the callback list.
     */
    remove(callbacks: Function|Function[]): JQueryCallback;
}

/**
 * Interface for the JQuery promise/deferred callbacks
 */
interface JQueryPromiseOperator<T, R> {
    (callback: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...callbacks: JQueryPromiseCallback<T>[]): JQueryPromise<R>;
}

/**
 * Interface for the JQuery deferred, part of callbacks
 */
interface JQueryDeferred<T> extends JQueryPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallbacks1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     */
    always(alwaysCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...alwaysCallbacks2: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    always(alwaysCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...alwaysCallbacks2: any[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     * 
     * @param doneCallbacks1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     */
    done(doneCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbacks2: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    done(doneCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbacks2: any[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     * 
     * @param failCallbacks1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     */
    fail(failCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...failCallbacks2: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    fail(failCallbacks1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...failCallbacks2: any[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     */
    progress(progressCallback: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
}

/**
 * Static members of jQuery (those on $ and jQuery themselves)
 */
interface JQueryStatic {
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     */
    (selector: string, context: Element|JQuery|Document): JQuery;
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param element A DOM element to wrap in a jQuery object.
     */
    (selector: Element|Element[]|JQuery|Document|Window): JQuery;

    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context DOM element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     */
    parseHTML(data: string, context?: HTMLElement|Document, keepScripts?: boolean): any[];
}

/**
 * The jQuery instance members
 */
interface JQuery {
    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     */
    addClass(className: string|((index: number, className: string) => string)): JQuery;

    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute.
     */
    attr(attributeName: string, value: string|number|((index: number, attr: string) => string|number)): JQuery;

    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     */
    html(htmlString: string|((index: number, oldhtml: string) => string)): JQuery;

    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     */
    prop(propertyName: string, value: string|number|boolean|((index: number, oldPropertyValue: any) => any)): JQuery;

    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     */
    removeClass(className?: string|((index: number, className: string) => string)): JQuery;

    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     */
    toggleClass(className: string|((index: number, className: string, swtch: boolean) => string), swtch?: boolean): JQuery;

    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
     */
    val(value: string|string[]|((index: number, value: string) => string)): JQuery;

    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     */
    css(propertyName: string, value: string|number|((index: number, value: string) => string|number)): JQuery;

    /**
     * Set the CSS height of every matched element.
     *
     * @param value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
     */
    height(value: number|string|((index: number, height: number) => number|string)): JQuery;

    /**
     * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     *
     * @param coordinates An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     */
    offset(coordinates: JQueryCoordinates|((index: number, coords: JQueryCoordinates) => JQueryCoordinates)): JQuery;

    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     */
    width(value: number|string|((index: number, width: number) => number|string)): JQuery;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
     */
    removeData(name: string|string[]): JQuery;

    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     * 
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters Additional parameters to pass along to the event handler.
     */
    trigger(event: string|JQueryEventObject, extraParameters?: any[]|Object): JQuery;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     * 
     * param content1 HTML string, DOM element, array of elements, or jQuery object to insert after each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
     */
    after(content1: JQuery|any[]|Element|Text|string|((index: number, html: string) => string|Element|JQuery), ...content2: any[]): JQuery;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     * 
     * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
     */
    append(content1: JQuery|any[]|Element|Text|string|((index: number, html: string) => string|Element|JQuery), ...content2: any[]): JQuery;

    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     * 
     * param content1 HTML string, DOM element, array of elements, or jQuery object to insert before each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
     */
    before(content1: JQuery|any[]|Element|Text|string|((index: number, html: string) => string|Element|JQuery), ...content2: any[]): JQuery;

    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     * 
     * param content1 DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
     * param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
     */
    prepend(content1: JQuery|any[]|Element|Text|string|((index: number, html: string) => string|Element|JQuery), ...content2: any[]): JQuery;

    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     * 
     * param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     */
    replaceWith(newContent: JQuery|any[]|Element|Text|string|(() => Element|JQuery)): JQuery;

    /**
     * Set the content of each element in the set of matched elements to the specified text.
     * 
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     */
    text(text: string|number|boolean|((index: number, text: string) => string)): JQuery;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     * 
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     */
    wrap(wrappingElement: JQuery|Element|string|((index: number) => string|JQuery)): JQuery;

    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     * 
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     */
    wrapAll(wrappingElement: JQuery|Element|string|((index: number) => string)): JQuery;

    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     * 
     * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
     */
    wrapInner(wrappingElement: JQuery|Element|string|((index: number) => string)): JQuery;

    /**
     * Add elements to the set of matched elements.
     * 
     * @param elements One or more elements to add to the set of matched elements.
     */
    add(element: string|Element|JQuery|Document|Window): JQuery;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    closest(element: string|Element|JQuery|Document): JQuery;

    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     * 
     * @param selector A string containing a selector expression to match the current set of elements against.
     */
    filter(selector: string|Element|JQuery|((index: number, element: Element) => boolean)): JQuery;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    find(selector: string|Element|JQuery): JQuery;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    has(selector: string|Element): JQuery;

    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    is(selector: string|Element|JQuery|((index: number, element: Element) => boolean)): JQuery;

    /**
     * Remove elements from the set of matched elements.
     * 
     * @param selector A string containing a selector expression to match elements against.
     */
    not(selector: string|Element|JQuery|((index: number, element: Element) => boolean)): JQuery;

    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    parentsUntil(selector?: string|Element|JQuery, filter?: string): JQuery;

    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     * 
     * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     */
    prevUntil(selector?: string|Element|JQuery, filter?: string): JQuery;
}
