// Project: http://jquery.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
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
//                 John Reilly <https://github.com/johnnyreilly/>
//                 Dick van den Brink <https://github.com/DickvdBrink>
//                 Thomas Schulz <https://github.com/King2500>
//                 Leonard Thieu <https://github.com/leonard-thieu>
//                 Andre Wiggins <https://github.com/andrewiggins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definitions copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0480c5ec87fab41aa23047a02b27f0ea71aaf975/types/jquery/v2/index.d.ts

interface JQLite extends JQuery {
    [index: number]: HTMLElement;
}

interface JQuery {
    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     * @see {@link https://api.jquery.com/addClass/#addClass-className}
     */
    addClass(className: string): this;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param content1 HTML string, DOM element, DocumentFragment, array of elements, or jQuery object to insert after each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
     * @see {@link https://api.jquery.com/after/#after-content-content}
     */
    after(content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]): this;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/after/#after-function}
     */
    after(func: (index: number, html: string) => string | Element | JQuery): this;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/append/#append-content-content}
     */
    append(content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]): this;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/append/#append-function}
     */
    append(func: (index: number, html: string) => string | Element | JQuery): this;

    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @see {@link https://api.jquery.com/attr/#attr-attributeName}
     */
    attr(attributeName: string): string;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute. If this is `null`, the attribute will be deleted.
     * @see {@link https://api.jquery.com/attr/#attr-attributeName-value}
     */
    attr(attributeName: string, value: string | number | null): this;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     * @see {@link https://api.jquery.com/attr/#attr-attributes}
     */
    attr(attributes: Object): this;

    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-handler}
     */
    bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-preventBubble}
     */
    bind(eventType: string, preventBubble: boolean): this;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param events An object containing one or more DOM event types and functions to execute for them.
     * @see {@link https://api.jquery.com/bind/#bind-events}
     */
    bind(events: any): this;

    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @see {@link https://api.jquery.com/children/}
     */
    children(): this;

    /**
     * Create a deep copy of the set of matched elements.
     *
     * @param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false.
     * @param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
     * @see {@link https://api.jquery.com/clone/}
     */
    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): this;

    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     * @see {@link https://api.jquery.com/contents/}
     */
    contents(): this;

    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     * @see {@link https://api.jquery.com/css/#css-propertyName}
     */
    css(propertyName: string): string;
    /**
     * Get the value of style properties for the first element in the set of matched elements.
     * Results in an object of property-value pairs.
     *
     * @param propertyNames An array of one or more CSS properties.
     * @see {@link https://api.jquery.com/css/#css-propertyNames}
     */
    css(propertyNames: string[]): any;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/css/#css-propertyName-value}
     */
    css(propertyName: string, value: string | number): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/css/#css-propertyName-function}
     */
    css(propertyName: string, value: (index: number, value: string) => string | number): this;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/css/#css-properties}
     */
    css(properties: JQLiteCssProperties): this;

    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any JavaScript type including Array or Object.
     * @see {@link https://api.jquery.com/data/#data-key-value}
     */
    data(key: string, value: any): this;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/data/#data-key}
     */
    data(key: string): any;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param obj An object of key-value pairs of data to update.
     * @see {@link https://api.jquery.com/data/#data-obj}
     */
    data(obj: { [key: string]: any; }): this;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     * @see {@link https://api.jquery.com/data/#data}
     */
    data(): any;

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/detach/}
     */
    detach(selector?: string): this;

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     * @see {@link https://api.jquery.com/empty/}
     */
    empty(): this;

    /**
     * Reduce the set of matched elements to the one at the specified index.
     *
     * @param index An integer indicating the 0-based position of the element. OR An integer indicating the position of the element, counting backwards from the last element in the set.
     * @see {@link https://api.jquery.com/eq/}
     */
    eq(index: number): this;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/find/#find-selector}
     */
    find(selector: string): this;
    find(element: any): this;
    find(obj: JQuery): this;

    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param className The class name to search for.
     * @see {@link https://api.jquery.com/hasClass/}
     */
    hasClass(className: string): boolean;

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/html/#html}
     */
    html(): string;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     * @see {@link https://api.jquery.com/html/#html-htmlString}
     */
    html(htmlString: string): this;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/html/#html-function}
     */
    html(func: (index: number, oldhtml: string) => string): this;

    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @see {@link https://api.jquery.com/next/}
     */
    next(): this;

    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data}
     */
    on(events: { [key: string]: (eventObject: JQueryEventObject, ...args: any[]) => any; }, selector?: string, data?: any): this;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data}
     */
    on(events: { [key: string]: (eventObject: JQueryEventObject, ...args: any[]) => any; }, data?: any): this;

    /**
     * Remove an event handler.
     * @see {@link https://api.jquery.com/off/#off}
     */
    off(): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param handler A handler function previously attached for the event(s), or the special value false. Takes handler with extra args that can be attached with on().
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): this;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @see {@link https://api.jquery.com/off/#off-events-selector}
     */
    off(events: { [key: string]: any; }, selector?: string): this;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute at the time the event is triggered.
     * @see {@link https://api.jquery.com/one/#one-events-data-handler}
     */
    one(events: string, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param data An object containing data that will be passed to the event handler.
     * @param handler A function to execute at the time the event is triggered.
     * @see {@link https://api.jquery.com/one/#one-events-data-handler}
     */
    one(events: string, data: Object, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data-handler}
     */
    one(events: string, selector: string, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data-handler}
     */
    one(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data}
     */
    one(events: { [key: string]: any; }, selector?: string, data?: any): this;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data}
     */
    one(events: { [key: string]: any; }, data?: any): this;

    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @see {@link https://api.jquery.com/parent/}
     */
    parent(): this;

    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/prepend/#prepend-content-content}
     */
    prepend(content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]): this;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/prepend/#prepend-function}
     */
    prepend(func: (index: number, html: string) => string | Element | JQuery): this;

    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName}
     */
    prop(propertyName: string): any;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName-value}
     */
    prop(propertyName: string, value: string | number | boolean): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/prop/#prop-properties}
     */
    prop(properties: Object): this;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param func A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword this refers to the current element.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName-function}
     */
    prop(propertyName: string, func: (index: number, oldPropertyValue: any) => any): this;

    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @see {@link https://api.jquery.com/ready/}
     */
    ready(handler: (jQueryAlias?: JQueryStatic) => any): this;

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/remove/}
     */
    remove(selector?: string): this;

    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
     * @see {@link https://api.jquery.com/removeAttr/}
     */
    removeAttr(attributeName: string): this;

    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     * @see {@link https://api.jquery.com/removeClass/#removeClass-className}
     */
    removeClass(className?: string): this;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/#removeData-name}
     */
    removeData(name: string): this;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param list An array of strings naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/#removeData-list}
     */
    removeData(list: string[]): this;
    /**
     * Remove all previously-stored piece of data.
     * @see {@link https://api.jquery.com/removeData/}
     */
    removeData(): this;

    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     *
     * @param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     * @see {@link https://api.jquery.com/replaceWith/#replaceWith-newContent}
     */
    replaceWith(newContent: JQuery | any[] | Element | Text | string): this;
    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     *
     * @param func A function that returns content with which to replace the set of matched elements.
     * @see {@link https://api.jquery.com/replaceWith/#replaceWith-function}
     */
    replaceWith(func: () => Element | JQuery): this;

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     * @see {@link https://api.jquery.com/text/#text}
     */
    text(): string;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     * @see {@link https://api.jquery.com/text/#text-text}
     */
    text(text: string | number | boolean): this;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param func A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
     * @see {@link https://api.jquery.com/text/#text-function}
     */
    text(func: (index: number, text: string) => string): this;

    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/#toggleClass-className}
     */
    toggleClass(className: string, swtch?: boolean): this;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param swtch A boolean value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/#toggleClass-state}
     */
    toggleClass(swtch?: boolean): this;

    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/triggerHandler/#triggerHandler-eventType-extraParameters}
     */
    triggerHandler(eventType: string, ...extraParameters: any[]): Object;
    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param event A jQuery.Event object.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/triggerHandler/#triggerHandler-event-extraParameters}
     */
    triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object;

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param handler The function that is to be no longer executed.
     * @see {@link https://api.jquery.com/unbind/#unbind-eventType-handler}
     */
    unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): this;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param fls Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
     * @see {@link https://api.jquery.com/unbind/#unbind-eventType-false}
     */
    unbind(eventType: string, fls: boolean): this;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param evt A JavaScript event object as passed to an event handler.
     * @see {@link https://api.jquery.com/unbind/#unbind-event}
     */
    unbind(evt: any): this;

    /**
     * Get the current value of the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/val/#val}
     */
    val(): any;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, an array of strings or number corresponding to the value of each matched element to set as selected/checked.
     * @see {@link https://api.jquery.com/val/#val-value}
     */
    val(value: string | string[] | number): this;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/val/#val-function}
     */
    val(func: (index: number, value: string) => string): this;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     * @see {@link https://api.jquery.com/wrap/#wrap-wrappingElement}
     */
    wrap(wrappingElement: JQuery | Element | string): this;
    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param func A callback function returning the HTML content or jQuery object to wrap around the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/wrap/#wrap-function}
     */
    wrap(func: (index: number) => string | JQuery): this;

    // Undocumented
    length: number;

    // TODO: events, how to define?
    // $destroy

    controller(name?: string): any;
    injector(): ng.auto.IInjectorService;
    /**
     * Returns the `$scope` of the element.
     *
     * **IMPORTANT**: Requires `debugInfoEnabled` to be true.
     *
     * See https://docs.angularjs.org/guide/production#disabling-debug-data for more information.
     */
    scope<T extends ng.IScope>(): T;
    /**
     * Returns the `$scope` of the element.
     *
     * **IMPORTANT**: Requires `debugInfoEnabled` to be true.
     *
     * See https://docs.angularjs.org/guide/production#disabling-debug-data for more information.
     */
    isolateScope<T extends ng.IScope>(): T;

    inheritedData(key: string, value: any): this;
    inheritedData(obj: { [key: string]: any; }): this;
    inheritedData(key?: string): any;
}

interface JQueryStatic {
    (element: string | Element | Document | JQuery | ArrayLike<Element> | (() => void)): JQLite;
}

/**
 * Interface of the JQuery extension of the W3C event object
 * @see {@link https://api.jquery.com/category/events/event-object/}
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

interface JQueryInputEventObject extends BaseJQueryEventObject {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

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

interface JQueryKeyEventObject extends JQueryInputEventObject {
    char: any;
    charCode: number;
    key: any;
    keyCode: number;
}

interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject {
}

/**
 * The interface used to specify the properties parameter in css()
 */
// tslint:disable-next-line:class-name
interface cssPropertySetter {
    (index: number, value?: string): string | number;
}
interface JQLiteCssProperties {
    [propertyName: string]: string | number | cssPropertySetter;
}
