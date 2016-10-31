// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MQuery {
    (selector: string, context?: any): MQueryResultSetElements;
    (element: HTMLElement): MQueryResultSetElements;
    (object: MQueryResultSetElements): MQueryResultSetElements;
    <T>(object: MQueryResultSet<T>): MQueryResultSet<T>;
    <T>(object: T): MQueryResultSet<T>;
    (elementArray: HTMLElement[]): MQueryResultSetElements;
    <T>(array: T[]): MQueryResultSet<T>;
    <T>(): MQueryResultSet<T>;

    throttle(fn: Function, interval: number, shouldOverrideThrottle: boolean): Function;

    extend(target: any, ...objs: any[]): Object;
    extend(deep: boolean, target: any, ...objs: any[]): Object;

    makeArray<T>(obj: any): any[];

    isDefined(obj: any): boolean;
    isNotNull(obj: any): boolean;
    isUndefined(obj: any): boolean;
    isNull(obj: any): boolean;
    isUndefinedOrNull(obj: any): boolean;
    isDefinedAndNotNull(obj: any): boolean;
    isString(obj: any): boolean;
    isBoolean(obj: any): boolean;
    isFunction(obj: any): boolean;
    isArray(obj: any): boolean;
    isNode(obj: any): boolean;
    isElement(obj: any): boolean;
    isMQueryResultSet(obj: any): boolean;
    isNumber(obj: any): boolean;
    isObject(obj: any): boolean;
    isEmptyObject(obj: any): boolean;

    ready(callback: () => void): void;
    contains(container: HTMLElement, contained: HTMLElement): boolean;

    proxy(fn: (...args: any[]) => any, context: any, ...args: any[]): Function;
    proxy(context: any, name: string, ...args: any[]): any;

    every<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean;
    every<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: any) => boolean, context?: any): boolean;

    some<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean;
    some<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any): boolean;

    filter<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): T[];
    filter<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): MQueryResultSet<T>;
    filter<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): T[];
    filter<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any): MQueryResultSet<T>;

    forEach<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach<T>(obj: T[], fn: (elementOfArray: T) => void, context?: any): void;
    forEach<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => void, context?: any): void;

    map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
    map<T, U>(array: MQueryResultSet<T>, callback: (elementOfArray: T, indexInArray: number) => U): MQueryResultSet<U>;
    map<T, U>(array: T[], callback: (elementOfArray: T) => U): U[];
    map<T, U>(array: MQueryResultSet<T>, callback: (elementOfArray: T) => U): MQueryResultSet<U>;

    indexOf<T>(obj: T[], object: T, startIndex?: number): number;
    lastIndexOf<T>(obj: T[], object: T, startIndex?: number): number;

    data(element: HTMLElement, key: string, value: any): any;
    data(element: HTMLElement, key: string): any;
    data(element: HTMLElement): any;

    removeData(element: HTMLElement, name?: string): MQueryResultSetElements;
    hasData(element: HTMLElement): boolean;
}

interface MQueryResultSetElements extends MQueryResultSet<HTMLElement> {
    append(node: HTMLElement): MQueryResultSetElements;
    append(mQuerySet: MQueryResultSetElements): MQueryResultSetElements;
    append(html: string): MQueryResultSetElements;

    bind(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    unbind(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    trigger(eventType: string): MQueryResultSetElements;
    one(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;

    detach(): MQueryResultSetElements;

    find(selector: string): MQueryResultSetElements;
    closest(selector: string, context?: any): MQueryResultSetElements;
    offset(): { left: number; top: number; };
    offset(coordinates: { left: any; top: any; }): MQueryResultSetElements;

    filter(selector: string): MQueryResultSetElements;
    filter(fn: (elementOfArray: HTMLElement, indexInArray: number) => boolean, context?: any): MQueryResultSetElements;
    filter(fn: (elementOfArray: HTMLElement) => boolean, context?: any): MQueryResultSetElements;

    not(selector: string): MQueryResultSetElements;

    parent(selector?: string): MQueryResultSetElements;

    offsetParent(selector?: string): MQueryResultSetElements;

    parents(selector?: string): MQueryResultSetElements;
    parentsUntil(selector?: string, filter?: string): MQueryResultSetElements;
    parentsUntil(element?: HTMLElement, filter?: string): MQueryResultSetElements;

    position(): { top: number; left: number; };

    attr(attributeName: string): string;
    attr(attributeName: string, value: any): MQueryResultSetElements;
    attr(map: { [key: string]: any; }): MQueryResultSetElements;
    attr(attributeName: string, func: (index: number, attr: any) => any): MQueryResultSetElements;

    addClass(classNames: string): MQueryResultSetElements;
    removeClass(classNames: string): MQueryResultSetElements;

    css(propertyName: string): string;
    css(propertyNames: string[]): string;
    css(properties: any): MQueryResultSetElements;
    css(propertyName: string, value: any): MQueryResultSetElements;
    css(propertyName: any, value: any): MQueryResultSetElements;

    remove(selector?: string): MQueryResultSetElements;
    children(selector?: string): MQueryResultSetElements;
    empty(): MQueryResultSetElements;
    first(): MQueryResultSetElements;

    data(key: string, value: any): MQueryResultSetElements;
    data(obj: { [key: string]: any; }): MQueryResultSetElements;
    data(key: string): any;

    removeData(key: string): MQueryResultSetElements;

    map(callback: (elementOfArray: HTMLElement, indexInArray: number) => any): MQueryResultSetElements;
    map(callback: (elementOfArray: HTMLElement) => any): MQueryResultSetElements;

    blur(): MQueryResultSetElements;
    blur(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    change(): MQueryResultSetElements;
    change(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    click(): MQueryResultSetElements;
    click(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    dblclick(): MQueryResultSetElements;
    dblclick(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    error(): MQueryResultSetElements;
    error(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focus(): MQueryResultSetElements;
    focus(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focusin(): MQueryResultSetElements;
    focusin(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focusout(): MQueryResultSetElements;
    focusout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keydown(): MQueryResultSetElements;
    keydown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keypress(): MQueryResultSetElements;
    keypress(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keyup(): MQueryResultSetElements;
    keyup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    load(): MQueryResultSetElements;
    load(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mousedown(): MQueryResultSetElements;
    mousedown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseenter(): MQueryResultSetElements;
    mouseenter(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseleave(): MQueryResultSetElements;
    mouseleave(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mousemove(): MQueryResultSetElements;
    mousemove(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseout(): MQueryResultSetElements;
    mouseout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseover(): MQueryResultSetElements;
    mouseover(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseup(): MQueryResultSetElements;
    mouseup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    resize(): MQueryResultSetElements;
    resize(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    scroll(): MQueryResultSetElements;
    scroll(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    select(): MQueryResultSetElements;
    select(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    submit(): MQueryResultSetElements;
    submit(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    unload(): MQueryResultSetElements;
    unload(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;

}

interface MQueryResultSet<T> {
    [index: number]: T;
    contains(contained: T): boolean;

    filter(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): MQueryResultSet<T>;
    filter(fn: (elementOfArray: T) => boolean, context?: any): MQueryResultSet<T>;

    every(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every(fn: (elementOfArray: T) => boolean, context?: any): boolean;

    some(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some(fn: (elementOfArray: T) => boolean, context?: any): boolean;

    map(callback: (elementOfArray: T, indexInArray: number) => any): MQueryResultSet<T>;
    map(callback: (elementOfArray: T) => any): MQueryResultSet<T>;

    forEach(fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach(fn: (elementOfArray: T) => void, context?: any): void;

    indexOf(object: any, startIndex?: number): number;
    lastIndexOf(object: any, startIndex?: number): number;

}

interface MQueryEvent extends Event {
    altKey: boolean;
    attrChange: number;
    attrName: string;
    bubbles: boolean;
    button: number;
    cancelable: boolean;
    ctrlKey: boolean;
    defaultPrevented: boolean;
    detail: number;
    eventPhase: number;
    newValue: string;
    prevValue: string;
    relatedNode: HTMLElement;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
    view: any;
}

declare var m$: MQuery;