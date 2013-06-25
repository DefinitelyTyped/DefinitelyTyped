// Type definitions for Underscore 1.4
// Project: http://underscorejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function _<T>(value: Array<T>): _<T>;
declare function _<T>(value: T): _<T>;

declare module _ {

    interface TemplateSettings {
        evaluate?: RegExp;
        interpolate?: RegExp;
        escape?: RegExp;
    }

    interface ListIterator<T, TResult> {
        (value: T, index: number, list?: List<T>): TResult;
    }

    interface ObjectIterator<T, TResult> {
        (element: T, key: string, list?: any): TResult;
    }

    interface Collection<T> { }

    // Common interface between Arrays and jQuery objects
    interface List<T> extends Collection<T> {
        [index: number]: T;
        length: number;
    }

    interface Dictionary<T> extends Collection<T> {
        [index: string]: T;
    }

    /****
        Collections
    *****/
    export function each<T>(list: List<T>, iterator: ListIterator<T, void >, context?: any): void;
    export function each<T>(object: Dictionary<T>, iterator: ObjectIterator<T, void >, context?: any): void;
    export function forEach<T>(list: List<T>, iterator: ListIterator<T, void >, context?: any): void;
    export function forEach<T>(object: Dictionary<T>, iterator: ObjectIterator<T, void >, context?: any): void;

    export function map<T, TResult>(list: List<T>, iterator: ListIterator<T, TResult>, context?: any): TResult[];
    export function map<T, TResult>(object: Dictionary<T>, iterator: ObjectIterator<T, TResult>, context?: any): TResult[];
    export function collect<T, TResult>(list: List<T>, iterator: ListIterator<T, TResult>, context?: any): TResult[];
    export function collect<T, TResult>(object: Dictionary<T>, iterator: ObjectIterator<T, TResult>, context?: any): TResult[];

    export function reduce<T, TResult>(list: Collection<T>, iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;
    export function inject<T, TResult>(list: Collection<T>, iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;

    export function reduceRight<T, TResult>(list: Collection<T>, iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;
    export function foldr<T, TResult>(list: Collection<T>, iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;

    export function find<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): T;
    export function detect<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): T;

    export function filter<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): T[];
    export function select<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): T[];

    export function where<T>(list: Collection<T>, properties: any): T[];

    export function reject<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): T[];

    export function all<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): boolean;
    export function every<T>(list: Collection<T>, iterator: (x: T) => boolean, context?: any): boolean;

    export function any<T>(list: Collection<T>, iterator?: (x: T) => boolean, context?: any): boolean;
    export function some<T>(list: Collection<T>, iterator?: (x: T) => boolean, context?: any): boolean;

    export function contains<T>(list: Collection<T>, value: T): boolean;
    export function include<T>(list: Collection<T>, value: T): boolean;

    export function invoke<T>(list: Collection<T>, methodName: string, ...arguments: any[]): any;

    export function pluck<T>(list: Collection<T>, propertyName: string): any[];

    export function max<T>(list: Collection<T>, iterator?: (x: T) => any, context?: any): T;
    export function min<T>(list: Collection<T>, iterator?: (x: T) => any, context?: any): T;

    export function sortBy<T>(list: List<T>, iterator?: (x: T) => any, context?: any): T[];
    export function sortBy<T>(list: any, iterator?: (x: T) => any, context?: any): T[];
    export function sortBy<T>(list: List<T>, iterator: string, context?: any): T[];
    export function sortBy<T>(list: any, iterator: string, context?: any): T[];

    export function groupBy<T>(list: List<T>, iterator?: (x: T) => any, context?: any): Dictionary<List<T>>;
    export function groupBy<T>(list: any, iterator?: (x: T) => any, context?: any): Dictionary<List<T>>;
    export function groupBy<T>(list: List<T>, iterator: string, context?: any): Dictionary<List<T>>;
    export function groupBy<T>(list: any, iterator: string, context?: any): Dictionary<List<T>>;

    export function countBy<T>(list: List<T>, iterator?: (x: T) => any, context?: any): Dictionary<List<number>>;
    export function countBy<T>(list: any, iterator?: (x: T) => any, context?: any): Dictionary<List<number>>;
    export function countBy<T>(list: List<T>, iterator: string, context?: any): Dictionary<List<number>>;
    export function countBy<T>(list: any, iterator: string, context?: any): Dictionary<List<number>>;

    export function shuffle<T>(list: Collection<T>): T[];

    export function toArray<T>(list: Collection<T>): T[];

    export function size<T>(list: Collection<T>): number;

    /****
        Arrays
    *****/
    export function first<T>(array: List<T>): T;
    export function first<T>(array: List<T>, n: number): T[];
    export function head<T>(array: List<T>): T;
    export function head<T>(array: List<T>, n: number): T[];
    export function take<T>(array: List<T>): T;
    export function take<T>(array: List<T>, n: number): T[];

    export function initial<T>(array: List<T>, n?: number): T[];

    export function last<T>(array: List<T>): T;
    export function last<T>(array: List<T>, n: number): T[];

    export function rest<T>(array: List<T>, n?: number): T[];
    export function tail<T>(array: List<T>, n?: number): T[];
    export function drop<T>(array: List<T>, n?: number): T[];

    export function compact<T>(array: List<T>): T[];

    export function flatten(array: any[], shallow?: boolean): any[];

    export function without<T>(array: List<T>, ...values: T[]): T[];

    export function union<T>(...arrays: List<T>[]): T[];

    export function intersection<T>(...arrays: List<T>[]): T[];

    export function difference<T>(array: List<T>, ...others: List<T>[]): T[];

    export function uniq<T>(array: List<T>, isSorted?: boolean, iterator?: (x: T) => any): T[];
    export function unique<T>(array: List<T>, isSorted?: boolean, iterator?: (x: T) => any): T[];

    export function zip(...arrays: any[]): any[];

    export function object(list: any[], values?: any): any;

    export function indexOf<T>(array: List<T>, value: T, isSorted?: boolean): number;
    export function indexOf<T>(array: List<T>, value: T, startFrom: number): number;

    export function lastIndexOf<T>(array: List<T>, value: T, fromIndex?: number): number;

    export function sortedIndex<T>(list: List<T>, value: T, iterator?: (x: T) => any, context?: any): number;

    export function range(stop: number): any[];
    export function range(start: number, stop: number, step?: number): any[];

    /****
        Functions
    *****/
    export function bind(func: (...as: any[]) => any, context: any, ...arguments: any[]): () => any;
    export function bindAll(object: any, ...methodNames: string[]): any;
    export function memoize(func: any, hashFunction?: any): any;
    export function defer(func: () => any);
    export function delay(func: any, wait: number, ...arguments: any[]): any;
    export function delay(func: any, ...arguments: any[]): any;
    export function throttle(func: any, wait: number): any;
    export function debounce(func: any, wait: number, immediate?: boolean): any;
    export function once(func: any): any;
    export function after(count: number, func: any): any;
    export function wrap(func: (...as: any[]) => any, wrapper: any): () => any;
    export function compose(...functions: any[]): any;

    /****
        Objects
    *****/
    export function keys(object: any): string[];
    export function values<T>(object: Dictionary<T>): T[];
    export function pairs(object: any): any[];
    export function invert(object: any): any;
    export function functions(object: any): string[];
    export function methods(object: any): string[];
    export function extend(destination: any, ...sources: any[]): any;
    export function pick(object: any, keys: string[]): any;
    export function pick(object: any, ...keys: string[]): any;
    export function omit(object: any, keys: string[]): any;
    export function omit(object: any, ...keys: string[]): any;
    export function defaults(object: any, ...defaults: any[]): any;
    export function clone<T>(object: T): T;
    export function tap(object: any, interceptor: (...as: any[]) => any): any;
    export function has(object: any, key: string): boolean;
    export function isEqual(object: any, other: any): boolean;
    export function isEmpty(object: any): boolean;
    export function isElement(object: any): boolean;
    export function isArray(object: any): boolean;
    export function isObject(value: any): boolean;
    export function isArguments(object: any): boolean;
    export function isFunction(object: any): boolean;
    export function isString(object: any): boolean;
    export function isNumber(object: any): boolean;
    export function isFinite(object: any): boolean;
    export function isBoolean(object: any): boolean;
    export function isDate(object: any): boolean;
    export function isRegExp(object: any): boolean;
    export function isNaN(object: any): boolean;
    export function isNull(object: any): boolean;
    export function isUndefined(value: any): boolean;

    /****
        Utility
    *****/
    export function noConflict(): any;
    export function identity(value: any): any;
    export function times(n: number, iterator: (index: number) => void , context?: any): void;
    export function random(min: number, max: number): number;
    export function mixin(object: any): void;
    export function uniqueId(prefix: string): string;
    export function uniqueId(): number;
    export function escape(str: string): string;
    export function result(object: any, property: string): any;
    export var templateSettings: TemplateSettings;
    export function template(templateString: string, data?: any, settings?: any): (...data: any[]) => string;

    /****
        Chaining
    *****/
    export function chain(object): any;
}

declare class _<T> {

    each(iterator: _.ListIterator<T, void >, context?: any): void;
    forEach(iterator: _.ListIterator<T, void >, context?: any): void;

    map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];

    reduce<T, TResult>(iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;
    inject<T, TResult>(iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;

    reduceRight<T, TResult>(iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;
    foldr<T, TResult>(iterator: (prev: TResult, curr: T) => TResult, memo: TResult, context?: any): TResult;

    find<T>(iterator: (x: T) => boolean, context?: any): T;
    detect<T>(iterator: (x: T) => boolean, context?: any): T;

    filter<T>(iterator: (x: T) => boolean, context?: any): T[];
    select<T>(iterator: (x: T) => boolean, context?: any): T[];

    where<T>(properties: any): T[];

    reject<T>(iterator: (x: T) => boolean, context?: any): T[];

    all<T>(iterator: (x: T) => boolean, context?: any): boolean;
    every<T>(iterator: (x: T) => boolean, context?: any): boolean;

    any<T>(iterator?: (x: T) => boolean, context?: any): boolean;
    some<T>(iterator?: (x: T) => boolean, context?: any): boolean;

    contains<T>(value: T): boolean;
    include<T>(value: T): boolean;

    invoke<T>(methodName: string, ...arguments: any[]): any;

    pluck<T>(propertyName: string): any[];

    max<T>(iterator?: (x: T) => any, context?: any): T;
    min<T>(iterator?: (x: T) => any, context?: any): T;

    sortBy<T>(iterator?: (x: T) => any, context?: any): T[];
    sortBy<T>(iterator: string, context?: any): T[];

    groupBy<T>(iterator?: (x: T) => any, context?: any): _.Dictionary<_.List<T>>;
    groupBy<T>(iterator: string, context?: any): _.Dictionary<_.List<T>>;

    countBy<T>(iterator?: (x: T) => any, context?: any): _.Dictionary<_.List<number>>;
    countBy<T>(iterator: string, context?: any): _.Dictionary<_.List<number>>;

    shuffle<T>(): T[];

    toArray<T>(): T[];

    size<T>(): number;

    /****
        Arrays
    *****/
    first<T>(n?: number): T[];
    head<T>(n?: number): T[];
    take<T>(n?: number): T[];
    initial<T>(n?: number): T[];
    last<T>(n?: number): T[];
    rest<T>(n?: number): T[];
    tail<T>(n?: number): T[];
    drop<T>(n?: number): T[];

    compact<T>(): T[];

    flatten(shallow?: boolean): any[];

    without<T>(...values: T[]): T[];

    union<T>(...arrays: _.List<T>[]): T[];

    intersection<T>(...arrays: _.List<T>[]): T[];

    difference<T>(...others: _.List<T>[]): T[];

    uniq<T>(isSorted?: boolean, iterator?: (x: T) => any): T[];
    unique<T>(isSorted?: boolean, iterator?: (x: T) => any): T[];

    zip(...arrays: any[]): any[];

    object(values?: any): any;

    indexOf<T>(value: T, isSorted?: boolean): number;
    indexOf<T>(value: T, startFrom: number): number;

    lastIndexOf<T>(value: T, fromIndex?: number): number;

    sortedIndex<T>(value: T, iterator?: (x: T) => any, context?: any): number;

    /****
        Functions
    *****/
    bind(func: (...as: any[]) => any, context: any, ...arguments: any[]): () => any;
    bindAll(...methodNames: string[]): any;
    memoize(hashFunction?: any): any;
    defer();
    delay(wait: number, ...arguments: any[]): any;
    delay(...arguments: any[]): any;
    throttle(wait: number): any;
    debounce(wait: number, immediate?: boolean): any;
    once(): any;
    after(func: any): any;
    wrap(wrapper: any): () => any;
    compose(...functions: any[]): any;

    /****
        Objects
    *****/
    keys(): string[];
    values<T>(): T[];
    pairs(): any[];
    invert(): any;
    functions(): string[];
    methods(): string[];
    extend(...sources: any[]): any;
    pick(keys: string[]): any;
    pick(...keys: string[]): any;
    omit(keys: string[]): any;
    omit(...keys: string[]): any;
    defaults(...defaults: any[]): any;
    clone(): T;
    tap(interceptor: (...as: any[]) => any): any;
    has(key: string): boolean;
    isEqual(other: any): boolean;
    isEmpty(): boolean;
    isElement(): boolean;
    isArray(): boolean;
    isObject(): boolean;
    isArguments(): boolean;
    isFunction(): boolean;
    isString(): boolean;
    isNumber(): boolean;
    isFinite(): boolean;
    isBoolean(): boolean;
    isDate(): boolean;
    isRegExp(): boolean;
    isNaN(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;

    /****
        Utility
    *****/
    identity(): any;
    times(iterator: (index: number) => void , context?: any): void;
    random(max: number): number;
    mixin(): void;
    uniqueId(): string;
    escape(): string;
    result(property: string): any;
    template(data?: any, settings?: any): (...data: any[]) => string;

    /****
        Chaining
    *****/
    chain(): any;
}

declare module "underscore" {
    export = _;
}