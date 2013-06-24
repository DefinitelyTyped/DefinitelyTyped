// Type definitions for Underscore 1.4
// Project: http://underscorejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function _(value): any;

declare module _ {

    interface UnderscoreWrappedObject {
        value(): any;
        filter(arg?): any;
    }

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
    export function pick(object: any, ...keys: string[]): any;
    export function omit(object: any, ...keys: string[]): any;
    export function defaults(object: any, ...defaults: any[]): any;
    export function clone(object: any): any;
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
    export function chain(object: any): UnderscoreWrappedObject;
}

declare module "underscore" {
    export = _;
}