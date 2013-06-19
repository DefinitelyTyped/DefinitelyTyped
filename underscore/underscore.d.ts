// Type definitions for Underscore 1.4
// Project: http://underscorejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface UnderscoreWrappedObject {
    value () : any;
	filter(arg?) : any;
}

interface TemplateSettings {
    evaluate?: RegExp;
    interpolate?: RegExp;
    escape?: RegExp;
}

interface ListIterator {
    (value, key, list?): void;
}

interface ObjectIterator {
    (element, index, list?): void;
}

// Common interface between Arrays and jQuery objects
interface List {
    [index: number]: any;
    length: number;
}

interface UnderscoreStatic {
	(arg?:any) : any;

    /****
     Collections
    *****/
    each(list: List, iterator: ListIterator, context?: any): any[];
    each(object: any, iterator: ObjectIterator, context?: any): any[];
    forEach(list: List, iterator: ObjectIterator, context?: any): any[];
    forEach(object: any, iterator: ListIterator, context?: any): any[];

    map(list: List, iterator: ListIterator, context?: any): any[];
    map(object: any, iterator: ObjectIterator, context?: any): any[];
    collect(list: List, iterator: ListIterator, context?: any): any[];
    collect(object: any, iterator: ObjectIterator, context?: any): any[];

    reduce(list: List, iterator: any, memo: any, context?: any): any;
    reduce(list: any[], iterator: any, memo: any, context?: any): any;
    inject(list: List, iterator: any, memo: any, context?: any): any;
    inject(list: any[], iterator: any, memo: any, context?: any): any;
    foldl(list: List, iterator: any, memo: any, context?: any): any;
    foldl(list: any[], iterator: any, memo: any, context?: any): any;

    reduceRight(list: List, iterator: any, memo: any, context?: any): any[];
    reduceRight(list: any[], iterator: any, memo: any, context?: any): any[];
    foldr(list: List, iterator: any, memo: any, context?: any): any[];
    foldr(list: any[], iterator: any, memo: any, context?: any): any[];

    find(list: List, iterator: any, context?: any): any;
    find(list: any[], iterator: any, context?: any): any;
    detect(list: List, iterator: any, context?: any): any;
    detect(list: any[], iterator: any, context?: any): any;

    filter(list: List, iterator: any, context?: any): any[];
    filter(list: any[], iterator: any, context?: any): any[];
    select(list: List, iterator: any, context?: any): any[];
    select(list: any[], iterator: any, context?: any): any[];

    where(list: List, properties: any): any[];
    where(list: any[], properties: any): any[];

    reject(list: List, iterator: any, context?: any): any[];
    reject(list: any[], iterator: any, context?: any): any[];

    all(list: List, iterator: any, context?: any): boolean;
    all(list: any[], iterator: any, context?: any): boolean;
    every(list: List, iterator: any, context?: any): boolean;
    every(list: any[], iterator: any, context?: any): boolean;

    any(list: List, iterator?: any, context?: any): boolean;
    any(list: any[], iterator?: any, context?: any): boolean;
    some(list: List, iterator?: any, context?: any): boolean;
    some(list: any[], iterator?: any, context?: any): boolean;

    contains(list: any, value: any): boolean;
    contains(list: List, value: any): boolean;
    include(list: any, value: any): boolean;
    include(list: List, value: any): boolean;

    invoke(list: List, methodName: string, arguments: any[]): any;
    invoke(object: any, methodName: string, ...arguments: any[]): any;

    pluck(list: List, propertyName: string): string[];
    pluck(list: any[], propertyName: string): string[];
    max(list: List, iterator?: any, context?: any): any;
    max(list: any[], iterator?: any, context?: any): any;
    min(list: List, iterator?: any, context?: any): any;
    min(list: any[], iterator?: any, context?: any): any;
    sortBy(list: List, iterator?: any, context?: any): any;
    sortBy(list: any[], iterator?: any, context?: any): any;
    groupBy(list: List, iterator: any): any;
    groupBy(list: any[], iterator: any): any;
    countBy(list: List, iterator: any): any;
    countBy(list: any[], iterator: any): any;
    shuffle(list: any[]): any[];
    toArray(list: any): any[];
    size(list: any): number;

    /****
     Arrays
    *****/
    first(array: List, n?: number): any;
    first(array: any[], n?: number): any;
    head(array: List, n?: number): any;
    head(array: any[], n?: number): any;
    take(array: List, n?: number): any;
    take(array: any[], n?: number): any;

    initial(array: List, n?: number): any[];
    initial(array: any[], n?: number): any[];

    last(array: List, n?: number): any;
    last(array: any[], n?: number): any;

    rest(array: List, n?: number): any[];
    rest(array: any[], n?: number): any[];
    tail(array: List, n?: number): any[];
    tail(array: any[], n?: number): any[];
    drop(array: List, n?: number): any[];
    drop(array: any[], n?: number): any[];

    compact(array: any[]): any[];
    flatten(array: List, shallow?: boolean): any[];
    flatten(array: any[], shallow?: boolean): any[];
    without(array: List, ...values: any[]): any[];
    without(array: any[], ...values: any[]): any[];
    union(...arrays: any[][]): any[];
    intersection(...arrays: any[][]): any[];
    difference(array: List, ...others: any[][]): any[];
    difference(array: any[], ...others: any[][]): any[];

    uniq(array: List, isSorted?: boolean, iterator?: any): any[];
    uniq(array: any[], isSorted?: boolean, iterator?: any): any[];
    unique(array: List, isSorted?: boolean, iterator?: any): any[];
    unique(array: any[], isSorted?: boolean, iterator?: any): any[];

    zip(...arrays: any[]): any[];
    object(list: List, values?: any[]): any;
    object(list: any[], values?: any[]): any;
    indexOf(array: List, value: any, isSorted?: boolean): number;
    indexOf(array: any[], value: any, isSorted?: boolean): number;
    lastIndexOf(array: List, value: any, fromIndex?: number): number;
    lastIndexOf(array: any[], value: any, fromIndex?: number): number;
    sortedIndex(list: List, valueL: any, iterator?: any): number;
    sortedIndex(list: any[], valueL: any, iterator?: any): number;
    range(stop: number): any[];
    range(start: number, stop: number, step?: number): any[];

    /****
     Functions
    *****/
    bind(func: (...as : any[]) => any, context: any, ...arguments: any[]): () => any;
    bindAll(object: any, ...methodNames: string[]): any;
    memoize(func: any, hashFunction?: any): any;
    defer(func: () => any);
    delay(func: any, wait: number, ...arguments: any[]): any;
    delay(func: any, ...arguments: any[]): any;
    throttle(func: any, wait: number): any;
    debounce(func: any, wait: number, immediate?: boolean): any;
    once(func: any): any;
    after(count: number, func: any): any;
    wrap(func: (...as : any[]) => any, wrapper: any): () => any;
    compose(...functions: any[]): any;

    /****
     Objects
    *****/
    keys(object: any): any[];
    values(object: any): any[];
    pairs(object: any): any[];
    invert(object: any): any;

    functions(object: any): string[];
    methods(object: any): string[];

    extend(destination: any, ...sources: any[]): any;
    pick(object: any, ...keys: string[]): any;
    omit(object: any, ...keys: string[]): any;
    defaults(object: any, ...defaults: any[]): any;
    clone(object: any): any;
    tap(object: any, interceptor: (...as : any[]) => any): any;
    has(object: any, key: string): boolean;
    isEqual(object: any, other: any): boolean;
    isEmpty(object: any): boolean;
    isElement(object: any): boolean;
    isArray(object: any): boolean;
    isObject(value: any): boolean;
    isArguments(object: any): boolean;
    isFunction(object: any): boolean;
    isString(object: any): boolean;
    isNumber(object: any): boolean;
    isFinite(object: any): boolean;
    isBoolean(object: any): boolean;
    isDate(object: any): boolean;
    isRegExp(object: any): boolean;
    isNaN(object: any): boolean;
    isNull(object: any): boolean;
    isUndefined(value: any): boolean;

    /****
     Utility
    *****/
    noConflict(): any;
    identity(value: any): any;
    times(n: number, iterator: (index : number) => void, context?: any): void;
    random(min: number, max: number): number;
    mixin(object: any): void;
    uniqueId(prefix: string): string;
    uniqueId(): number;
    escape(str: string): string;
    result(object: any, property: string): any;
    templateSettings: TemplateSettings;
    template(templateString: string, data?: any, settings?: any): (...data: any[]) => string;

    /****
     Chaining
    *****/
    chain(object: any): UnderscoreWrappedObject;
}

declare var _: UnderscoreStatic;