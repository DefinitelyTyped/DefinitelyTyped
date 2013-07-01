/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

// Typing for the jQuery library, version 2.0.x

/*
    Interface for the AJAX setting that will configure the AJAX request
*/
interface JQueryAjaxSettings {
    accepts?: any;
    async?: boolean;
    beforeSend? (jqXHR: JQueryXHR, settings: JQueryAjaxSettings);
    cache?: boolean;
    complete? (jqXHR: JQueryXHR, textStatus: string);
    contents?: { [key: string]: any; };
    contentType?: string;
    context?: any;
    converters?: { [key: string]: any; };
    crossDomain?: boolean;
    data?: any;
    dataFilter? (data: any, ty: any): any;
    dataType?: string;
    error? (jqXHR: JQueryXHR, textStatus: string, errorThrow: string): any;
    global?: boolean;
    headers?: { [key: string]: any; };
    ifModified?: boolean;
    isLocal?: boolean;
    jsonp?: string;
    jsonpCallback?: any;
    mimeType?: string;
    password?: string;
    processData?: boolean;
    scriptCharset?: string;
    statusCode?: { [key: string]: any; };
    success? (data: any, textStatus: string, jqXHR: JQueryXHR);
    timeout?: number;
    traditional?: boolean;
    type?: string;
    url?: string;
    username?: string;
    xhr?: any;
    xhrFields?: { [key: string]: any; };
}

/*
    Interface for the jqXHR object
*/
interface JQueryXHR extends XMLHttpRequest, JQueryPromise {
    overrideMimeType(mimeType: string);
    abort(statusText?: string): void;
}

/*
    Interface for the JQuery callback
*/
interface JQueryCallback {
    add(...callbacks: any[]): any;
    disable(): any;
    empty(): any;
    fire(...arguments: any[]): any;
    fired(): boolean;
    fireWith(context: any, ...args: any[]): any;
    has(callback: any): boolean;
    lock(): any;
    locked(): boolean;
    remove(...callbacks: any[]): any;
}

/*
    Interface for the JQuery promise, part of callbacks
*/
interface JQueryPromise {
    always(...alwaysCallbacks: any[]): JQueryDeferred;
    done(...doneCallbacks: any[]): JQueryDeferred;
    fail(...failCallbacks: any[]): JQueryDeferred;
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise;
    then(doneCallbacks: any, failCallbacks?: any, progressCallbacks?: any): JQueryDeferred;
}

/*
    Interface for the JQuery deferred, part of callbacks
*/
interface JQueryDeferred extends JQueryPromise {
    notify(...args: any[]): JQueryDeferred;
    notifyWith(context: any, ...args: any[]): JQueryDeferred;

    pipe(doneFilter?: any, failFilter?: any, progressFilter?: any): JQueryPromise;
    progress(...progressCallbacks: any[]): JQueryDeferred;
    reject(...args: any[]): JQueryDeferred;
    rejectWith(context: any, ...args: any[]): JQueryDeferred;
    resolve(...args: any[]): JQueryDeferred;
    resolveWith(context: any, ...args: any[]): JQueryDeferred;
    state(): string;
    then(doneCallbacks: any, failCallbacks?: any, progressCallbacks?: any): JQueryDeferred;
    promise(target?: any): JQueryPromise;
}

/*
    Interface of the JQuery extension of the W3C event object
*/

interface BaseJQueryEventObject extends Event {
    data: any;
    delegateTarget: Element;
    isDefaultPrevented(): boolean;
    isImmediatePropogationStopped(): boolean;
    isPropagationStopped(): boolean;
    namespace: string;
    preventDefault(): any;
    relatedTarget: Element;
    result: any;
    stopImmediatePropagation();
    stopPropagation();
    pageX: number;
    pageY: number;
    which: number;
    metaKey: any;
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

interface JQueryPopStateEventObject extends BaseJQueryEventObject {
    originalEvent: PopStateEvent;
}

interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject, JQueryPopStateEventObject {
}

/*
    Collection of properties of the current browser
*/

interface JQuerySupport {
    ajax?: boolean;
    boxModel?: boolean;
    changeBubbles?: boolean;
    checkClone?: boolean;
    checkOn?: boolean;
    cors?: boolean;
    cssFloat?: boolean;
    hrefNormalized?: boolean;
    htmlSerialize?: boolean;
    leadingWhitespace?: boolean;
    noCloneChecked?: boolean;
    noCloneEvent?: boolean;
    opacity?: boolean;
    optDisabled?: boolean;
    optSelected?: boolean;
    scriptEval? (): boolean;
    style?: boolean;
    submitBubbles?: boolean;
    tbody?: boolean;
}

interface JQueryParam {
    (obj: any): string;
    (obj: any, traditional: boolean): string;
}

/*
    Static members of jQuery (those on $ and jQuery themselves)
*/
interface JQueryStatic {

    /****
     AJAX
    *****/
    ajax(settings: JQueryAjaxSettings): JQueryXHR;
    ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;

    ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) => any): any;
    ajaxPrefilter(handler: (opts: any, originalOpts: any, jqXHR: JQueryXHR) => any): any;

    ajaxSettings: JQueryAjaxSettings;

    ajaxSetup();
    ajaxSetup(options: JQueryAjaxSettings);

    get(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;
    getJSON(url: string, data?: any, success?: any): JQueryXHR;
    getScript(url: string, success?: any): JQueryXHR;

    param: JQueryParam;

    post(url: string, data?: any, success?: any, dataType?: any): JQueryXHR;

    // Callbacks
    Callbacks(flags?: string): JQueryCallback;

    // Core
    holdReady(hold: boolean): any;

    (selector: string, context?: any): JQuery;
    (element: Element): JQuery;
    (object: {}): JQuery;
    (elementArray: Element[]): JQuery;
    (object: JQuery): JQuery;
    (func: Function): JQuery;
    (array: any[]): JQuery;
    (): JQuery;

    noConflict(removeAll?: boolean): Object;

    when(...deferreds: any[]): JQueryPromise;

    // CSS
    css(e: any, propertyName: string, value?: any);
    css(e: any, propertyName: any, value?: any);
    cssHooks: { [key: string]: any; };
    cssNumber: any;

    // Data
    data(element: Element, key: string, value: any): any;
    data(element: Element, key: string): any;
    data(element: Element): any;

    dequeue(element: Element, queueName?: string): any;

    hasData(element: Element): boolean;

    queue(element: Element, queueName?: string): any[];
    queue(element: Element, queueName: string, newQueueOrCallback: any): JQuery;

    removeData(element: Element, name?: string): JQuery;

    // Deferred
    Deferred: {
        (beforeStart?: (deferred: JQueryDeferred) => any): JQueryDeferred;
        new (beforeStart?: (deferred: JQueryDeferred) => any): JQueryDeferred;
    };

    // Effects
    fx: { tick: () => void; interval: number; stop: () => void; speeds: { slow: number; fast: number; }; off: boolean; step: any; };

    // Events
    proxy(fn: (...args: any[]) => any, context: any, ...args: any[]): any;
    proxy(context: any, name: string, ...args: any[]): any;

    Event: {
        (name: string, eventProperties?: any): JQueryEventObject;
        new (name: string, eventProperties?: any): JQueryEventObject;
    };

    // Internals
    error(message: any);

    // Miscellaneous
    expr: any;
    fn: any;  //TODO: Decide how we want to type this
    isReady: boolean;

    // Properties
    support: JQuerySupport;

    // Utilities
    contains(container: Element, contained: Element): boolean;

    each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;
    each(collection: JQuery, callback: (indexInArray: number, valueOfElement: HTMLElement) => any): any;
    each<T>(collection: T[], callback: (indexInArray: number, valueOfElement: T) => any): any;

    extend(target: any, ...objs: any[]): Object;
    extend(deep: boolean, target: any, ...objs: any[]): Object;

    globalEval(code: string): any;

    grep<T>(array: T[], func: (elementOfArray: T, indexInArray: number) => boolean, invert?: boolean): T[];

    inArray<T>(value: T, array: T[], fromIndex?: number): number;

    isArray(obj: any): boolean;
    isEmptyObject(obj: any): boolean;
    isFunction(obj: any): boolean;
    isNumeric(value: any): boolean;
    isPlainObject(obj: any): boolean;
    isWindow(obj: any): boolean;
    isXMLDoc(node: Node): boolean;

    makeArray(obj: any): any[];

    map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
    map(array: any, callback: (elementOfArray: any, indexInArray: any) => any): any;

    merge<T>(first: T[], second: T[]): T[];
    merge<T,U>(first: T[], second: U[]): any[];

    noop(): any;

    now(): number;

    parseJSON(json: string): any;

    //FIXME: This should return an XMLDocument
    parseXML(data: string): any;

    queue(element: Element, queueName: string, newQueue: any[]): JQuery;

    trim(str: string): string;

    type(obj: any): string;

    unique(arr: any[]): any[];

    /**
    * Parses a string into an array of DOM nodes.
    *
    * @param data HTML string to be parsed
    * @param context DOM element to serve as the context in which the HTML fragment will be created
    * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
    */
    parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[];
}

/*
    The jQuery instance members
*/
interface JQuery {
    // AJAX
    ajaxComplete(handler: any): JQuery;
    ajaxError(handler: (event: any, jqXHR: any, settings: any, exception: any) => any): JQuery;
    ajaxSend(handler: (event: any, jqXHR: any, settings: any, exception: any) => any): JQuery;
    ajaxStart(handler: () => any): JQuery;
    ajaxStop(handler: () => any): JQuery;
    ajaxSuccess(handler: (event: any, jqXHR: any, settings: any, exception: any) => any): JQuery;

    load(url: string, data?: any, complete?: any): JQuery;

    serialize(): string;
    serializeArray(): any[];

    // Attributes
    addClass(classNames: string): JQuery;
    addClass(func: (index: any, currentClass: any) => string): JQuery;

    // http://api.jquery.com/addBack/
    addBack(selector?: string): JQuery;


    attr(attributeName: string): string;
    attr(attributeName: string, value: any): JQuery;
    attr(map: { [key: string]: any; }): JQuery;
    attr(attributeName: string, func: (index: any, attr: any) => any): JQuery;

    hasClass(className: string): boolean;

    html(): string;
    html(htmlString: string): JQuery;
    html(htmlContent: (index: number, oldhtml: string) => string): JQuery;
    html(JQuery): JQuery;

    prop(propertyName: string): any;
    prop(propertyName: string, value: any): JQuery;
    prop(map: any): JQuery;
    prop(propertyName: string, func: (index: any, oldPropertyValue: any) => any): JQuery;

    removeAttr(attributeName: any): JQuery;

    removeClass(className?: any): JQuery;
    removeClass(func: (index: any, cls: any) => any): JQuery;

    removeProp(propertyName: any): JQuery;

    toggleClass(className: any, swtch?: boolean): JQuery;
    toggleClass(swtch?: boolean): JQuery;
    toggleClass(func: (index: any, cls: any, swtch: any) => any): JQuery;

    val(): any;
    val(value: string[]): JQuery;
    val(value: string): JQuery;
    val(value: number): JQuery;
    val(func: (index: any, value: any) => any): JQuery;

    // CSS
    css(propertyName: string): string;
    css(propertyNames: string[]): string;
    css(properties: any): JQuery;
    css(propertyName: string, value: any): JQuery;
    css(propertyName: any, value: any): JQuery;

    height(): number;
    height(value: number): JQuery;
    height(value: string): JQuery;
    height(func: (index: any, height: any) => any): JQuery;

    innerHeight(): number;
    innerWidth(): number;

    offset(): { left: number; top: number; };
    offset(coordinates: any): JQuery;
    offset(func: (index: any, coords: any) => any): JQuery;

    outerHeight(includeMargin?: boolean): number;
    outerWidth(includeMargin?: boolean): number;

    position(): { top: number; left: number; };

    scrollLeft(): number;
    scrollLeft(value: number): JQuery;

    scrollTop(): number;
    scrollTop(value: number): JQuery;

    width(): number;
    width(value: number): JQuery;
    width(value: string): JQuery;
    width(func: (index: any, height: any) => any): JQuery;

    // Data
    clearQueue(queueName?: string): JQuery;

    data(key: string, value: any): JQuery;
    data(obj: { [key: string]: any; }): JQuery;
    data(key?: string): any;

    dequeue(queueName?: string): JQuery;

    removeData(nameOrList?: any): JQuery;

    // Deferred
    promise(type?: any, target?: any): JQueryPromise;

    // Effects
    animate(properties: any, duration?: any, complete?: Function): JQuery;
    animate(properties: any, duration?: any, easing?: string, complete?: Function): JQuery;
    animate(properties: any, options: { duration?: any; easing?: string; complete?: Function; step?: Function; queue?: boolean; specialEasing?: any; });

    delay(duration: number, queueName?: string): JQuery;

    fadeIn(duration?: any, callback?: any): JQuery;
    fadeIn(duration?: any, easing?: string, callback?: any): JQuery;

    fadeOut(duration?: any, callback?: any): JQuery;
    fadeOut(duration?: any, easing?: string, callback?: any): JQuery;

    fadeTo(duration: any, opacity: number, callback?: any): JQuery;
    fadeTo(duration: any, opacity: number, easing?: string, callback?: any): JQuery;

    fadeToggle(duration?: any, callback?: any): JQuery;
    fadeToggle(duration?: any, easing?: string, callback?: any): JQuery;

    finish(): JQuery;

    hide(duration?: any, callback?: any): JQuery;
    hide(duration?: any, easing?: string, callback?: any): JQuery;

    show(duration?: any, callback?: any): JQuery;
    show(duration?: any, easing?: string, callback?: any): JQuery;

    slideDown(duration?: any, callback?: any): JQuery;
    slideDown(duration?: any, easing?: string, callback?: any): JQuery;

    slideToggle(duration?: any, callback?: any): JQuery;
    slideToggle(duration?: any, easing?: string, callback?: any): JQuery;

    slideUp(duration?: any, callback?: any): JQuery;
    slideUp(duration?: any, easing?: string, callback?: any): JQuery;

    stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
    stop(queue?: any, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;

    toggle(duration?: any, callback?: any): JQuery;
    toggle(duration?: any, easing?: string, callback?: any): JQuery;
    toggle(showOrHide: boolean): JQuery;

    // Events
    bind(eventType: string, eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    bind(eventType: string, eventData: any, preventBubble: boolean): JQuery;
    bind(eventType: string, preventBubble: boolean): JQuery;
    bind(...events: any[]);

    blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    blur(handler: (eventObject: JQueryEventObject) => any): JQuery;

    change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    change(handler: (eventObject: JQueryEventObject) => any): JQuery;

    click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    click(handler: (eventObject: JQueryEventObject) => any): JQuery;

    dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;

    delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;

    focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    focus(handler: (eventObject: JQueryEventObject) => any): JQuery;

    focusin(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;

    focusout(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;

    hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
    hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;

    keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;
    keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;

    keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;
    keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;

    keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;
    keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;

    load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    load(handler: (eventObject: JQueryEventObject) => any): JQuery;

    mousedown(): JQuery;
    mousedown(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseevent(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseevent(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseenter(): JQuery;
    mouseenter(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseleave(): JQuery;
    mouseleave(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mousemove(): JQuery;
    mousemove(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseout(): JQuery;
    mouseout(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseover(): JQuery;
    mouseover(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    mouseup(): JQuery;
    mouseup(eventData: any, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    off(events?: string, selector?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    off(eventsMap: { [key: string]: any; }, selector?: any): JQuery;

    on(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    on(events: string, selector?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    on(eventsMap: { [key: string]: any; }, selector?: any, data?: any): JQuery;

    one(events: string, selector?: any, data?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    one(eventsMap: { [key: string]: any; }, selector?: any, data?: any): JQuery;

    ready(handler: any): JQuery;

    resize(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    resize(handler: (eventObject: JQueryEventObject) => any): JQuery;

    scroll(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;

    select(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    select(handler: (eventObject: JQueryEventObject) => any): JQuery;

    submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    submit(handler: (eventObject: JQueryEventObject) => any): JQuery;

    trigger(eventType: string, ...extraParameters: any[]): JQuery;
    trigger(event: JQueryEventObject): JQuery;

    triggerHandler(eventType: string, ...extraParameters: any[]): Object;

    unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    unbind(eventType: string, fls: boolean): JQuery;
    unbind(evt: any): JQuery;

    undelegate(): JQuery;
    undelegate(selector: any, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    undelegate(selector: any, events: any): JQuery;
    undelegate(namespace: string): JQuery;

    unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    unload(handler: (eventObject: JQueryEventObject) => any): JQuery;

    // Internals
    context: Element;
    jquery: string;

    error(handler: (eventObject: JQueryEventObject) => any): JQuery;
    error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    pushStack(elements: any[]): JQuery;
    pushStack(elements: any[], name: any, arguments: any): JQuery;

    // Manipulation
    after(...content: any[]): JQuery;
    after(func: (index: any) => any);

    append(...content: any[]): JQuery;
    append(func: (index: any, html: any) => any);

    appendTo(target: any): JQuery;

    before(...content: any[]): JQuery;
    before(func: (index: any) => any);

    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;

    detach(selector?: any): JQuery;

    empty(): JQuery;

    insertAfter(target: any): JQuery;
    insertBefore(target: any): JQuery;

    prepend(...content: any[]): JQuery;
    prepend(func: (index: any, html: any) => any): JQuery;

    prependTo(target: any): JQuery;

    remove(selector?: any): JQuery;

    replaceAll(target: any): JQuery;

    replaceWith(func: any): JQuery;

    text(): string;
    text(textString: any): JQuery;
    text(textString: (index: number, text: string) => string): JQuery;

    toArray(): any[];

    unwrap(): JQuery;

    wrap(wrappingElement: any): JQuery;
    wrap(func: (index: any) => any): JQuery;

    wrapAll(wrappingElement: any): JQuery;

    wrapInner(wrappingElement: any): JQuery;
    wrapInner(func: (index: any) => any): JQuery;

    // Miscellaneous
    each(func: (index: any, elem: Element) => any): JQuery;

    get(index?: number): any;

    index(): number;
    index(selector: string): number;
    index(element: any): number;

    // Properties
    length: number;
    selector: string;
    [x: string]: any;
    [x: number]: HTMLElement;

    // Traversing
    add(selector: string, context?: any): JQuery;
    add(...elements: any[]): JQuery;
    add(html: string): JQuery;
    add(obj: JQuery): JQuery;

    children(selector?: any): JQuery;

    closest(selector: string): JQuery;
    closest(selector: string, context?: Element): JQuery;
    closest(obj: JQuery): JQuery;
    closest(element: any): JQuery;
    closest(selectors: any, context?: Element): any[];

    contents(): JQuery;

    end(): JQuery;

    eq(index: number): JQuery;

    filter(selector: string): JQuery;
    filter(func: (index: any) => any): JQuery;
    filter(element: any): JQuery;
    filter(obj: JQuery): JQuery;

    find(selector: string): JQuery;
    find(element: any): JQuery;
    find(obj: JQuery): JQuery;

    first(): JQuery;

    has(selector: string): JQuery;
    has(contained: Element): JQuery;

    is(selector: string): boolean;
    is(func: (index: any) => any): boolean;
    is(element: any): boolean;
    is(obj: JQuery): boolean;

    last(): JQuery;

    map(callback: (index: any, domElement: Element) => any): JQuery;

    next(selector?: string): JQuery;

    nextAll(selector?: string): JQuery;

    nextUntil(selector?: string, filter?: string): JQuery;
    nextUntil(element?: Element, filter?: string): JQuery;

    not(selector: string): JQuery;
    not(func: (index: any) => any): JQuery;
    not(element: any): JQuery;
    not(obj: JQuery): JQuery;

    offsetParent(): JQuery;

    parent(selector?: string): JQuery;

    parents(selector?: string): JQuery;

    parentsUntil(selector?: string, filter?: string): JQuery;
    parentsUntil(element?: Element, filter?: string): JQuery;

    prev(selector?: string): JQuery;

    prevAll(selector?: string): JQuery;

    prevUntil(selector?: string, filter?: string): JQuery;
    prevUntil(element?: Element, filter?: string): JQuery;

    siblings(selector?: string): JQuery;

    slice(start: number, end?: number): JQuery;

    // Utilities

    queue(queueName?: string): any[];
    queue(queueName: string, newQueueOrCallback: any): JQuery;
    queue(newQueueOrCallback: any): JQuery;
}

declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;
