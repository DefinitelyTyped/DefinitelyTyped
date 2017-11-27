// Type definitions for typeahead.js 0.11.1
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov>, Gidon Junge <https://github.com/gjunge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQuery {
    /**
     * For a given input[type="text"], enables typeahead functionality.
     *
     * @constructor
     * @param options Options hash that's used for configuration
     * @param datasets Array of datasets
     */
    typeahead<T>(options: Twitter.Typeahead.Options, datasets: Twitter.Typeahead.Dataset<T>[]): JQuery;

    /**
      * For a given input[type="text"], enables typeahead functionality.
      *
      * @constructor
      * @param options Options hash that's used for configuration
      * @param dataset At least one dataset is required
      * @param datasets Rest of the datasets.
      */
    typeahead<T>(options: Twitter.Typeahead.Options, dataset: Twitter.Typeahead.Dataset<T>, ...datasets: Twitter.Typeahead.Dataset<T>[]): JQuery;

    /**
     * Returns the current value of the typeahead.
     * The value is the text the user has entered into the input element.
     *
     * @constructor
     * @param methodName Method 'val'
     */
    typeahead(methodName: 'val'): string;

    /**
     * Accommodates the val overload.
     *
     * @constructor
     * @param methodName Method 'val'
     */
    typeahead(methodName: string): string;

    /**
     * Sets the value of the typeahead. This should be used in place of jQuery#val.
     *
     * @constructor
     * @param methodName Method 'val'
     * @param val The value to be set
     */
    typeahead(methodName: 'val', val: string): JQuery;

    /**
     * Accommodates the set val overload.
     *
     * @constructor
     * @param methodName Method 'val'
     * @param val The value to be set
     */
    typeahead(methodName: string, val: string): JQuery;

    /**
     * Opens the suggestion menu.
     *
     * @constructor
     * @param methodName Method 'open'
     */
    typeahead(methodName: 'open'): JQuery;

    /**
     * Closes the suggestion menu.
     *
     * @constructor
     * @param methodName Method 'close'
     */
    typeahead(methodName: 'close'): JQuery;

    /**
     * Removes typeahead functionality and reverts the input element back to its original state.
     *
     * @constructor
     * @param methodName Method 'destroy'
     */
    typeahead(methodName: 'destroy'): JQuery;

    /**
     * Attach an event handler function for typeahead:active event to the selected elements.
     *
     * @param events typeahead:active event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:active", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:active event to the selected elements.
     *
     * @param events typeahead:active event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:active", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:active event to the selected elements.
     *
     * @param events typeahead:active event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:active", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:active event to the selected elements.
     *
     * @param events typeahead:active event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:active", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:idle event to the selected elements.
     *
     * @param events typeahead:idle event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:idle", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:idle event to the selected elements.
     *
     * @param events typeahead:idle event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:idle", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:idle event to the selected elements.
     *
     * @param events typeahead:idle event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:idle", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:idle event to the selected elements.
     *
     * @param events typeahead:idle event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:idle", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:open event to the selected elements.
     *
     * @param events typeahead:open event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:open", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:open event to the selected elements.
     *
     * @param events typeahead:open event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:open", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:open event to the selected elements.
     *
     * @param events typeahead:open event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:open", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:open event to the selected elements.
     *
     * @param events typeahead:open event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:open", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:close event to the selected elements.
     *
     * @param events typeahead:close event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:close", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:close event to the selected elements.
     *
     * @param events typeahead:close event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:close", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:close event to the selected elements.
     *
     * @param events typeahead:close event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:close", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:close event to the selected elements.
     *
     * @param events typeahead:close event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:close", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:change event to the selected elements.
     *
     * @param events typeahead:change event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:change", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:change event to the selected elements.
     *
     * @param events typeahead:change event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:change", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:change event to the selected elements.
     *
     * @param events typeahead:change event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:change", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:change event to the selected elements.
     *
     * @param events typeahead:change event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:change", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:render event to the selected elements.
     *
     * @param events typeahead:render event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:render", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:render event to the selected elements.
     *
     * @param events typeahead:render event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:render", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:render event to the selected elements.
     *
     * @param events typeahead:render event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:render", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:render event to the selected elements.
     *
     * @param events typeahead:render event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:render", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:select event to the selected elements.
     *
     * @param events typeahead:select event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:select", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:select event to the selected elements.
     *
     * @param events typeahead:select event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:select", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:select event to the selected elements.
     *
     * @param events typeahead:select event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:select", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:select event to the selected elements.
     *
     * @param events typeahead:select event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:select", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:autocomplete event to the selected elements.
     *
     * @param events typeahead:autocomplete event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:autocomplete", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:autocomplete event to the selected elements.
     *
     * @param events typeahead:autocomplete event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:autocomplete", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:autocomplete event to the selected elements.
     *
     * @param events typeahead:autocomplete event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:autocomplete", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:autocomplete event to the selected elements.
     *
     * @param events typeahead:autocomplete event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:autocomplete", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:cursorchange event to the selected elements.
     *
     * @param events typeahead:cursorchange event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:cursorchange", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:cursorchange event to the selected elements.
     *
     * @param events typeahead:cursorchange event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:cursorchange", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:cursorchange event to the selected elements.
     *
     * @param events typeahead:cursorchange event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:cursorchange", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:cursorchange event to the selected elements.
     *
     * @param events typeahead:cursorchange event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:cursorchange", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncrequest event to the selected elements.
     *
     * @param events typeahead:asyncrequest event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:asyncrequest", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncrequest event to the selected elements.
     *
     * @param events typeahead:asyncrequest event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:asyncrequest", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncrequest event to the selected elements.
     *
     * @param events typeahead:asyncrequest event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asyncrequest", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncrequest event to the selected elements.
     *
     * @param events typeahead:asyncrequest event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asyncrequest", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asynccancel event to the selected elements.
     *
     * @param events typeahead:asynccancel event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:asynccancel", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asynccancel event to the selected elements.
     *
     * @param events typeahead:asynccancel event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:asynccancel", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asynccancel event to the selected elements.
     *
     * @param events typeahead:asynccancel event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asynccancel", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asynccancel event to the selected elements.
     *
     * @param events typeahead:asynccancel event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asynccancel", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncreceive event to the selected elements.
     *
     * @param events typeahead:asyncreceive event fired when the typeahead moves to active state.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     */
    on(events: "typeahead:asyncreceive", handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncreceive event to the selected elements.
     *
     * @param events typeahead:asyncreceive event fired when the typeahead moves to active state.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
    */
    on(events: "typeahead:asyncreceive", data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncreceive event to the selected elements.
     *
     * @param events typeahead:asyncreceive event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asyncreceive", selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Attach an event handler function for typeahead:asyncreceive event to the selected elements.
     *
     * @param events typeahead:asyncreceive event fired when the typeahead moves to active state.
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     */
    on(events: "typeahead:asyncreceive", selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:active event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:active", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:active event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:active", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:idle event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:idle", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:idle event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:idle", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:open event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:open", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:open event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:open", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:close event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:close", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:close event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:close", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:change event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:change", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:change event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:change", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:render event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:render", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:render event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:render", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:select event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:select", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:select event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:select", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:autocomplete event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:autocomplete", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:autocomplete event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:autocomplete", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:cursorchange event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:cursorchange", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:cursorchange event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:cursorchange", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asyncrequest event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asyncrequest", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asyncrequest event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asyncrequest", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asynccancel event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asynccancel", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asynccancel event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asynccancel", handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asyncreceive event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asyncreceive", selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     *
     * @param events typeahead:asyncreceive event.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     */
    off(events: "typeahead:asyncreceive", handler: (eventObject: JQueryEventObject) => any): JQuery;
}

declare namespace Twitter.Typeahead {
    interface Options {
        /**
          * If true, when suggestions are rendered, pattern matches for the current query in text nodes will be wrapped in a strong element with its class set to {{classNames.highlight}}.
          * Defaults to false.
          */
        highlight?: boolean;

        /**
          * If false, the typeahead will not show a hint.
          * Defaults to true.
          */
        hint?: boolean;

        /**
          * The minimum character length needed before suggestions start getting rendered.
          * Defaults to 1.
          */
        minLength?: number;

        /**
         * Used for overriding the default class names.
         */
        classNames?: ClassNames;
    }

    /**
      * A typeahead is composed of one or more datasets. When an end-user
      * modifies the value of a typeahead, each dataset will attempt to render
      * suggestions for the new value.
      * For most use cases, one dataset should suffice. It's only in the scenario
      * where you want rendered suggestions to be grouped based on some sort of
      * categorical relationship that you'd need to use multiple datasets. For
      * example, on twitter.com, the search typeahead groups results into recent
      * searches, trends, and accounts  that would be a great use case for using
      * multiple datasets.
      */
    interface Dataset<T> {
        /**
         * The backing data source for suggestions.
         * Expected to be a function with the signature (query, syncResults, asyncResults).
         * syncResults should be called with suggestions computed synchronously and
         *  asyncResults should be called with suggestions computed asynchronously
         * (e.g. suggestions that come for an AJAX request).
         *  source can also be a Bloodhound instance.
         */
        source: Bloodhound<T> | ((query: string, syncResults: (result: T[]) => void, asyncResults?: (result: T[]) => void) => void);

        /**
         * Lets the dataset know if async suggestions should be expected.
         * If not set, this information is inferred from the signature of
         * source i.e. if the source function expects 3 arguments, async will
         * be set to true.
         */
        async?: boolean;

        /**
          * The name of the dataset.
          * This will be appended to {{classNames.dataset}} - to form the class name of the containing DOM element.
          * Must only consist of underscores, dashes, letters (a-z), and numbers.
          * Defaults to a random number.
          */
        name?: string;

        /**
          * The max number of suggestions to be displayed. Defaults to 5.
          */
        limit?: number;

        /**
         * For a given suggestion, determines the string representation of it.
         * This will be used when setting the value of the input control after
         * a suggestion is selected. Can be either a key string or a function
         * that transforms a suggestion object into a string.
         * Defaults to stringifying the suggestion.
         */
        display?: string | ((obj: T) => string);

        /**
         * A hash of templates to be used when rendering the dataset. Note a
         * precompiled template is a function that takes a JavaScript object as
         * its first argument and returns a HTML string.
         */
        templates?: Templates<T>;
    }

    /**
     * A hash of templates to be used when rendering the dataset. Note a
     * precompiled template is a function that takes a JavaScript object as
     * its first argument and returns a HTML string.
     */
    interface Templates<T> {
        /**
         * Rendered when 0 suggestions are available for the given query.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query.
         */
        notFound?: string | ((query: string) => string);

        /**
         * Rendered when 0 synchronous suggestions are available but asynchronous suggestions are expected.
         * Can be either a HTML string or a precompiled template.
         * If it's a precompiled template, the passed in context will contain query.
         */
        pending?: string | ((query: string) => string);

        /**
         * Rendered at the top of the dataset when suggestions are present. Can be either a HTML string or
         * a precompiled template. If it's a precompiled template, the passed in context will contain
         * query and suggestions.
         */
        header?: string | ((query: string, suggestions: T[]) => string);

        /**
         * Rendered at the bottom of the dataset when suggestions are present. Can be either a HTML string or
         * a precompiled template. If it's a precompiled template, the passed in context will contain
         * query and suggestions.
         */
        footer?: string | ((query: string, suggestions: T[]) => string);

        /**
         * Used to render a single suggestion. If set, this has to be a precompiled template.
         * The associated suggestion object will serve as the context.
         * Defaults to the value of display wrapped in a div tag i.e. <div>{{value}}</div>.
          */
        suggestion?: (suggestion: T) => string;
    }

    /**
     * Used for overriding the default class names.
     */
    interface ClassNames {
        /**
         * Added to input that's initialized into a typeahead. Defaults to tt-input.
         */
        input?: string;

        /**
         * Added to hint input.Defaults to tt- hint.
         */
        hint?: string;

        /**
         * Added to menu element.Defaults to tt- menu.
         */
        menu?: string;

        /**
         * Added to dataset elements.to Defaults to tt- dataset.
         */
        dataset?: string;
        /**
         * Added to suggestion elements.Defaults to tt- suggestion.
         */
        suggestion?: string;

        /**
         * Added to menu element when it contains no content.Defaults to tt- empty.
         */
        empty?: string;

        /**
         * Added to menu element when it is opened.Defaults to tt- open.
         */
        open?: string;

        /**
         * Added to suggestion element when menu cursor moves to said suggestion.Defaults to tt- cursor.
         */
        cursor?: string;

        /**
         * Added to the element that wraps highlighted text.Defaults to tt- highlight.
         */
        highlight?: string;
    }
}

declare namespace Bloodhound {
    interface BloodhoundOptions<T> {
        /**
         * Transforms a datum into an array of string tokens.
         *
         * @param datum Suggestion.
         * @returns An array of string tokens.
         */
        datumTokenizer: (datum: T) => string[];

        /**
         * Transforms a query into an array of string tokens.
         *
         * @param quiery Query.
         * @returns An array of string tokens.
         */
        queryTokenizer: (query: string) => string[];

        /**
         * If set to false, the Bloodhound instance will not be implicitly
         * initialized by the constructor function. Defaults to true.
         */
        initialize?: boolean;

        /**
         * Given a datum, returns a unique id for it.
         * Defaults to JSON.stringify. Note that it is highly recommended
         * to override this option.
         *
         * @param datum Suggestion.
         * @returns Unique id for the suggestion.
         */
        identify?: (datum: T) => number;

        /**
         * If the number of datums provided from the internal search index is
         * less than sufficient, remote will be used to backfill search
         * requests triggered by calling #search. Defaults to 5.
         */
        sufficient?: number;

        /**
         * A compare function used to sort data returned from the internal search index.
         *
         * @param a First suggestion.
         * @param b Second suggestion.
         * @returns Comparison result.
         */
        sorter?: (a: T, b: T) => number;

        /**
         * An array of data or a function that returns an array of data.
         * The data will be added to the internal search index when #initialize is called.
         */
        local?: T[] | (() => T[]);

        /**
         * Can be a URL to a JSON file containing an array of data or,
         * if more configurability is needed, a prefetch options hash.
         */
        prefetch?: string | PrefetchOptions<T>;

        /**
         * Can be a URL to fetch data from when the data provided by the internal
         * search index is insufficient or, if more configurability is needed,
         * a remote options hash.
         */
        remote?: string | RemoteOptions<T>;
    }

    /**
     * Prefetched data is fetched and processed on initialization. If the browser
     * supports local storage, the processed data will be cached there to prevent
     * additional network requests on subsequent page loads.
     *
     * WARNING: While it's possible to get away with it for smaller data sets,
     * prefetched data isn't meant to contain entire sets of data. Rather, it should
     * act as a first-level cache. Ignoring this warning means you'll run the risk
     * of hitting local storage limits.
     */
    interface PrefetchOptions<T> {
        /**
         * The URL prefetch data should be loaded from.
         */
        url: string;

        /**
         * If false, will not attempt to read or write to local storage and
         * will always load prefetch data from url on initialization. Defaults to true.
         */
        cache?: boolean;

        /**
         * The time (in milliseconds) the prefetched data should be cached in
         * local storage. Defaults to 86400000 (1 day).
         */
        ttl?: number;

        /**
         * The key that data will be stored in local storage under.
         * Defaults to value of url.
         */
        cacheKey?: string;

        /**
         * A string used for thumbprinting prefetched data. If this doesn't
         * match what's stored in local storage, the data will be refetched.
         */
        thumbprint?: string;

        /**
         * A function that provides a hook to allow you to prepare the settings
         * object passed to transport when a request is about to be made.
         * Defaults to the identity function.
         *
         * @param settings The default settings object created internally by the Bloodhound instance.
         * @returns A settings object.
         */
        prepare?: (settings: JQueryAjaxSettings) => JQueryAjaxSettings;

        /**
         * A function with the signature transform(response) that allows you to
         * transform the prefetch response before the Bloodhound instance operates
         * on it. Defaults to the identity function.
         *
         * @param response Prefetch response.
         * @returns Transform response.
         */
        transform?: (response: T) => T;
    }

    /**
     * Bloodhound only goes to the network when the internal search engine cannot
     * provide a sufficient number of results. In order to prevent an obscene
     * number of requests being made to the remote endpoint, requests are rate-limited.
     */
    interface RemoteOptions<T> {
        /**
         * The URL remote data should be loaded from.
         */
        url: string;

        /**
         * A function that provides a hook to allow you to prepare the settings
         * object passed to transport when a request is about to be made.
         * The function signature should be prepare(query, settings), where query
         * is the query #search was called with and settings is the default settings
         * object created internally by the Bloodhound instance. The prepare function
         * should return a settings object. Defaults to the identity function.
         *
         * @param query The query #search was called with.
         * @param settings The default settings object created internally by Bloodhound.
         * @returns A JqueryAjaxSettings object.
         */
        prepare?: (query: string, settings: JQueryAjaxSettings) => JQueryAjaxSettings;

        /**
         * A convenience option for prepare. If set, prepare will be a function
         * that replaces the value of this option in url with the URI encoded query.
         */
        wildcard?: string;

        /**
         * The method used to rate-limit network requests.
         * Can be either debounce or throttle. Defaults to debounce.
         */
        rateLimitby?: string;

        /**
         * The time interval in milliseconds that will be used by rateLimitBy.
         * Defaults to 300.
         */
        rateLimitWait?: number;

        /**
         * A function with the signature transform(response) that allows you to
         * transform the remote response before the Bloodhound instance operates on it.
         * Defaults to the identity function.
         *
         * @param response Prefetch response.
         * @returns Transform response.
         */
        transform?: (response: T) => T;

        /**
         * DEPRECATED: transform the remote response before the Bloodhound instance operates on it.
         * */
        filter?: (response: T) => T;

    }

    /**
    * Build-in tokenization methods.
    */
    interface Tokenizers {
        /**
         * Split a given string on whitespace characters.
         */
        whitespace(str: string): string[];

        /**
         * Split a given string on non-word characters.
         */
        nonword(str: string): string[];

        /**
         * Instances of the build-in tokenization methods.
         */
        obj: ObjTokenizer;
    }

    interface ObjTokenizer {
        /**
         * Split the string content of the given object attribute(s) on
         * whitespace characters.
         */
        whitespace(key: string | string[]): (obj: any) => string[];

        /**
         * Split the string content of the given object attribute(s) on non-word
         * characters.
         */
        nonword(key: string | string[]): (obj: any) => string[];
    }
}

/**
 * Bloodhound is the typeahead.js suggestion engine. Bloodhound is robust,
 * flexible, and offers advanced functionalities such as prefetching,
 * intelligent caching, fast lookups, and backfilling with remote data.
 */
declare class Bloodhound<T> {
    /**
     * The constructor function.
     *
     * @constructor
     * @param options Options hash.
     */
    constructor(options: Bloodhound.BloodhoundOptions<T>);

    /**
     * Returns a reference to Bloodhound and reverts window.Bloodhound to its
     * previous value. Can be used to avoid naming collisions.
     */
    public static noConflict(): Bloodhound<any>;

    /**
     * The Bloodhound suggestion engine is token-based, so how datums and queries are tokenized plays a vital role in the quality of search results.
     * Specify how you want datums and queries tokenized.
     */
    public static tokenizers: Bloodhound.Tokenizers;

    /**
     * Kicks off the initialization of the suggestion engine. Initialization
     * entails adding the data provided by local and prefetch to the internal
     * search index as well as setting up transport mechanism used by remote.
     * Before #initialize is called, the #get and #search methods will effectively be no-ops.
     *
     * Note, unless the initialize option is false, this method is implicitly called by the constructor.
     *
     * After initialization, how subsequent invocations of #initialize behave depends on
     * the reinitialize argument. If reinitialize is falsy, the method will not execute the
     * initialization logic and will just return the same jQuery promise returned
     * by the initial invocation. If reinitialize is truthy, the method will behave
     * as if it were being called for the first time.
     *
     * @param reinitialize How subsequent invocations of #initialize will behave.
     * @returns jQuery promise.
     */
    public initialize(reinitialize?: boolean): JQueryPromise<T>;

    /**
     * Takes one argument, data, which is expected to be an array.
     * The data passed in will get added to the internal search index.
     *
     * @param data Data to be added to the internal search index.
     */
    public add(data: T[]): void;

    /**
     * Returns the data in the local search index corresponding to ids.
     *
     * @param ids Data ids.
     * @returns The corresponding data.
     */
    public get(ids: number[]): T[];

    /**
     * Returns the data that matches query. Matches found in the local search
     * index will be passed to the sync callback. If the data passed to sync
     * doesn't contain at least sufficient number of datums, remote data will
     * be requested and then passed to the async callback.
     *
     * @param query Query.
     * @param sync Sync callback
     * @param async Async callback.
     * @returns The data that matches query.
     */
    public search(query: string, sync: (datums: T[]) => void, async: (datums: T[]) => void): T[];

    /**
     * Returns all items from the internal search index.
     */
    public all(): T[];

    /**
     * Clears the internal search index that's powered by local, prefetch, and #add.
     */
    public clear(): Bloodhound<T>;

    /**
     * If you're using prefetch, data gets cached in local storage in an effort to cut down on unnecessary network requests.
     * clearPrefetchCache offers a way to programmatically clear said cache.
     */
    public clearPrefetchCache(): Bloodhound<T>;

    /**
     * If you're using remote, Bloodhound will cache the 10 most recent responses in an effort to provide a better user experience.
     * clearRemoteCache offers a way to programmatically clear said cache.
     */
    public clearRemoteCache(): Bloodhound<T>;

    /*
     * DEPRECATED: wraps the suggestion engine in an adapter that is compatible with the typeahead jQuery plugin
     */
    public ttAdapter(): any;
}

declare module "bloodhound" {
    export = Bloodhound;
}
