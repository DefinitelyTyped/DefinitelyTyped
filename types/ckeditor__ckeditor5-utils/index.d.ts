// Type definitions for @ckeditor/ckeditor5-utils 10.2
// Project: https://github.com/ckeditor/ckeditor5-utils, https://ckeditor.com/ckeditor-5
// Definitions by: denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Helpers

export interface DeleteChange {
    index: number;
    type: "delete";
    howMany: number;
}

export interface InsertChange {
    index: number;
    type: "insert";
    values: string[];
}

export interface BindChain {
    to(observable: Observable, ...bindProperties: Array<Observable | string | Function>): void;
    toMany(observable: Observable[], ...bindProperties: Array<Observable | string | Function>): void;
}

export interface CollectionBindTo<T, K> {
    as: (Class: {new(item: T): K}) => void;
    using: (callbackOrProperty: keyof T | ((item: T) => K)) => void;
}

// utils/dom

export function createElement(doc: Document, name: string, attributes?: object | null, children?: Node | string | Array<Node | string>): Element;

// TODO? utils/dom/emittermixin

export function getAncestors(node: Node): Array<Node | DocumentFragment>;

export function getBorderWidths(element: HTMLElement): {top: number, right: number, bottom: number, left: number};

export function getCommonAncestor(nodeA: Node, nodeB: Node): Node | DocumentFragment | Document | null;

export function getDataFromElement(el: HTMLElement): string;

export function getPositionedAncestor(element?: HTMLElement): HTMLElement | null;

export function indexOf(node: Node): number;

export function insertAt(parentElement: Element, index: number, nodeToInsert: Node): void;

export function isNode(obj: any): obj is Node;

export function isRange(obj: any): obj is Range;

export function isText(obj: any): obj is Text;

export function isWindow(obj: any): obj is Window;

export interface Options {
    element: HTMLElement;
    fitInViewport?: boolean;
    limiter?: HTMLElement | Range | ClientRect | Rect | (() => HTMLElement | Range | ClientRect | Rect);
    positions: Array<(targetRect: Rect, elementRect: Rect) => Position>;
    target: HTMLElement | Range | ClientRect | Rect | (() => HTMLElement | Range | ClientRect | Rect);
}

export interface Position {
    left: number;
    name: string;
    top: number;
}

export function getOptimalPosition(options: Options): Position;

export class Rect {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;

    constructor(source: HTMLElement | Range | Window | ClientRect | Rect | object);
    clone(): Rect;
    contains(anotherRect: Rect): boolean;
    excludeScrollbarsAndBorders(): Rect;
    getArea(): number;
    getIntersection(anotherRect: Rect): Rect;
    getIntersectionArea(anotherRect: Rect): number;
    getVisible(): Rect | null;
    isEqual(rect: Rect): boolean;
    moveBy(x: number, y: number): Rect;
    moveTo(x: number, y: number): Rect;

    static getDomRangeRects(range: Range): Rect[];
}

export function remove(node: Node): void;

export function scrollAncestorsToShowTarget(target: HTMLElement | Range): void;

export function scrollViewportToShowTarget(options: {target: HTMLElement | Range, viewportOffset?: number}): void;

export function setDataInElement(el: HTMLElement, data: string): void;

export function toUnit(unit: string): (value: number) => string;

// utils/ckeditorerror

export const DOCUMENTATION_URL: string;

export class CKEditorError extends Error {
    data: object | undefined;
    name: string;

    constructor(message: string, data?: object);

    static isCKEditorError(error: Error): boolean;
}

export function attachLinkToDocumentation(message: string): string;

// utils/collection

export function as(Class: Function): void;
export function using(callbackOrProperty: Function | string): void;

export class Collection<T> implements Iterable<T>, Emitter {
    first: T | null;
    last: T | null;
    length: number;

    constructor(options?: {idProperty?: keyof T});
    add(item: T, index?: number): this;
    bindTo<S>(externalCollection: Collection<S>): CollectionBindTo<S, T>;
    clear(): void;
    filter(callbackfn: (item: T, index: number) => boolean, thisArg?: any): T[];
    find(predicate: (item: T, index: number) => boolean, thisArg?: any): T | undefined;
    get(idOrIndex: string | number): T | null;
    getIndex(idOrItem: string | T): number;
    map<U>(callbackfn: (item: T, index: number) => U, thisArg?: any): U[];
    remove(subject: T | number | string): T;

    // Iterable<T>
    [Symbol.iterator](): Iterator<T>;

    // Emitter
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(emitter: Emitter, event: string, callback: Function, options?: {priority?: PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}

// utils/comparearrays

export type ArrayRelation = "extension" | "same" | "prefix";

export function compareArrays<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): number | ArrayRelation;

// utils/config

export class Config {
    constructor(configurations?: object, defaultConfigurations?: object);
    define(name: object): void;
    define(name: string, value: any): void;
    get(name: string): any /*| undefined*/;
    set(name: string, value: any /*| undefined*/): void;
}

// utils/count

export function count(iterator: Iterable<any>): number;

// utils/diff

export type Change = "equal" | "insert" | "delete";

export function diff(a: string, b: string, cmp?: (a: string, b: string) => boolean): Change[];
export function diff(a: ReadonlyArray<string>, b: ReadonlyArray<string>, cmp?: (a: string, b: string) => boolean): Change[];

// utils/difftochanges

export function diffToChanges(diff: Change[], output: string | string[]): Array<DeleteChange | InsertChange>;

// utils/elementreplacer

export class ElementReplacer {
    replace(element: HTMLElement, newElement?: HTMLElement): void;
    restore(): void;
}

// utils/emittermixin

export const EmitterMixin: Emitter;

export interface Emitter {
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(emitter: Emitter, event: string, callback: Function, options?: {priority?: PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}

export interface EmitterMixinDelegateChain {
    to(emitter: Emitter, nameOrFunction?: string | ((name: string) => string)): void;
}

// utils/env

export namespace env {
    const isEdge: boolean;
    const isMac: boolean;
}

// utils/eventinfo

export class EventInfo<T> {
    readonly name: string;
    readonly path: object[];
    return: any /*| undefined*/;
    readonly source: T;

    constructor(source: T, name: string);
    off: {
        (): void;
        called: boolean;
    };
    stop: {
        (): void;
        called: boolean;
    };
}

// utils/fastdiff

export function fastDiff(oldText: string, newText: string): Array<DeleteChange | InsertChange>;

// utils/first

export function first<T>(iterable: Iterable<T>): T;

// utils/focustracker

export class FocusTracker implements Observable {
    readonly focusedElement: HTMLElement;
    readonly isFocused: boolean;

    add(element: HTMLElement): void;
    remove(element: HTMLElement): void;

    // Observable
    bind(...bindProperties: string[]): BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;

    // Observable (Emitter)
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(emitter: Emitter, event: string, callback: Function, options?: {priority?: PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}

// utils/isiterable

export function isIterable(value: any): value is Iterable<any>;

// utils/keyboard

export const keyCodes: {
    a: 65,
    b: 66,
    c: 67;
    d: 68;
    e: 69;
    f: 70;
    g: 71;
    h: 72;
    i: 73;
    j: 74;
    k: 75;
    l: 76;
    m: 77;
    n: 78;
    o: 79;
    p: 80;
    q: 81;
    r: 82;
    s: 83;
    t: 84;
    u: 85;
    v: 86;
    w: 87;
    x: 88;
    y: 89;
    z: 90;

    0: 48;
    1: 49;
    2: 50;
    3: 51;
    4: 52;
    5: 53;
    6: 54;
    7: 55;
    8: 56;
    9: 57;

    f1: 112;
    f2: 113;
    f3: 114;
    f4: 115;
    f5: 116;
    f6: 117;
    f7: 118;
    f8: 118;
    f9: 120;
    f10: 121;
    f11: 122;
    f12: 123;

    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    backspace: 8,
    "delete": 46,
    enter: 13,
    space: 32,
    esc: 27,
    tab: 9,
    ctrl: 0x110000,
    cmd: 0x110000,
    shift: 0x220000,
    alt: 0x440000
};

export interface KeystrokeInfo {
    altKey?: boolean;
    ctrlKey?: boolean;
    keyCode: number;
    shiftKey?: boolean;
}

export function getCode(key: string | KeystrokeInfo): number;

export function getEnvKeystrokeText(keystroke: string): string;

export function parseKeystroke(keystroke: string | Array<number | string>): number;

// utils/keystrokehandler

export class KeystrokeHandler {
    constructor();
    destroy(): void;
    listenTo(emitter: Emitter): void;
    press(keyEvtData: KeystrokeInfo): boolean;
    set(
        keystroke: string | Array<string | number>,
        callback: (keyEvtData: KeystrokeInfo, cancel: () => void) => void,
        options?: {priority?: PriorityString | number}
    ): void;
}

// utils/locale

export class Locale {
    readonly language: string;

    constructor(language?: string);
    t(str: string, values?: string[]): string;
}

// utils/log

export namespace log {
    function error(message: string, data?: object): void;
    function warn(message: string, data?: object): void;
}

// utils/mapsequal

export function mapsEqual<K, V>(mapsA: Map<K, V>, mapsB: Map<K, V>): boolean;

// utils/mix

export function mix<T>(baseClass: {new(...p: any[]): T}, ...mixins: Array<Partial<T>>): void;

// utils/nth

export function nth<T>(index: number, iterable: Iterable<T>): T;

// utils/objecttomap

export function objectToMap<T extends object>(obj: T): Map<keyof T, T[keyof T]>;

// utils/observablemixin

export const ObservableMixin: Observable;

export interface Observable extends Emitter {
    bind(...bindProperties: string[]): BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;

    // Emitter
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(emitter: Emitter, event: string, callback: Function, options?: {priority?: PriorityString | number }): void;
    off(event: string, callback?: Function): void;
    on(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    once(event: string, callback: Function, options?: {priority: PriorityString | number}): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}

// utils/priorities

export namespace priorities {
    function get(priority: PriorityString | number): number;
}

export type PriorityString = "highest" | "high" | "normal" | "low" | "lowest";

// utils/spy

export function spy(): {(): void; called: boolean};

// utils/tomap

export function toMap<K, V>(data: Map<K, V>): Map<K, V>;
export function toMap<K extends string, V = any>(data: ReadonlyArray<[K, V]>): Map<K, V>;
export function toMap<T extends object>(data: T): Map<keyof T, T[keyof T]>;

// utils/translation-service

export function add(language: string, translations: {[key: string]: string}): void;

export function translate(language: string, translationKey: string): string;

// TODO: CKEDITOR_TRANSLATIONS

// utils/uid

export function uid(): string;

// utils/unicode

export function isCombiningMark(character: string): boolean;

export function isHighSurrogateHalf(character: string): boolean;

export function isInsideCombinedSymbol(string: string, offset: number): boolean;

export function isInsideSurrogatePair(string: string, offset: number): boolean;

export function isLowSurrogateHalf(character: string): boolean;

// utils/version

// TODO: CKEDITOR_VERSION;
