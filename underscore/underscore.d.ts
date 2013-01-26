// Type definitions for Underscore 1.4
// Project: http://underscorejs.org/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface UnderscoreWrappedObject {
    value () : any;
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

// Used as common interface between Arrays and jQuery objects
interface IList {
    [index: number]: any;
    length: number;
}

interface UnderscoreStatic {

    /****
     Collections
    *****/
    each(list: IList, iterator: ListIterator, context?: any): any[];
    each(object: any, iterator: ObjectIterator, context?: any): any[];
    forEach(list: IList, iterator: ObjectIterator, context?: any): any[];
    forEach(object: any, iterator: ListIterator, context?: any): any[];

    map(list: IList, iterator: ListIterator, context?: any): any[];
    map(object: any, iterator: ObjectIterator, context?: any): any[];
    collect(list: IList, iterator: ListIterator, context?: any): any[];
    collect(object: any, iterator: ObjectIterator, context?: any): any[];

    reduce(list: IList, iterator: any, memo: any, context?: any): any[];
    inject(list: IList, iterator: any, memo: any, context?: any): any[];
    foldl(list: IList, iterator: any, memo: any, context?: any): any[];

    reduceRight(list: IList, iterator: any, memo: any, context?: any): any[];
    foldr(list: IList, iterator: any, memo: any, context?: any): any[];

    find(list: IList, iterator: any, context?: any): any;
    detect(list: IList, iterator: any, context?: any): any;

    filter(list: IList, iterator: any, context?: any): any[];
    select(list: IList, iterator: any, context?: any): any[];

    where(list: IList, properties: any): any[];

    reject(list: IList, iterator: any, context?: any): any[];

    all(list: IList, iterator: any, context?: any): bool;
    every(list: IList, iterator: any, context?: any): bool;

    any(list: IList, iterator?: any, context?: any): bool;
    some(list: IList, iterator?: any, context?: any): bool;

    contains(list: any, value: any): bool;
    contains(list: IList, value: any): bool;
    include(list: any, value: any): bool;
    include(list: IList, value: any): bool;

    invoke(list: IList, methodName: string, arguments: any[]): any;
    invoke(object: any, methodName: string, ...arguments: any[]): any;

    pluck(list: IList, propertyName: string): string[];
    max(list: IList, iterator?: any, context?: any): any;
    min(list: IList, iterator?: any, context?: any): any;
    sortBy(list: IList, iterator?: any, context?: any): any;
    groupBy(list: IList, iterator: any): any;
    countBy(list: IList, iterator: any): any;
    shuffle(list: any[]): any[];
    toArray(list: any): any[];
    size(list: any): number;

    /****
     Arrays
    *****/
    first(array: IList, n?: number): any;
    head(array: IList, n?: number): any;
    take(array: IList, n?: number): any;

    initial(array: IList, n?: number): any[];

    last(array: IList, n?: number): any;

    rest(array: IList, n?: number): any[];
    tail(array: IList, n?: number): any[];
    drop(array: IList, n?: number): any[];

    compact(array: any[]): any[];
    flatten(array: IList, shallow?: bool): any[];
    without(array: IList, ...values: any[]): any[];
    union(...arrays: any[][]): any[];
    intersection(...arrays: any[][]): any[];
    difference(array: IList, ...others: any[][]): any[];

    uniq(array: IList, isSorted?: bool, iterator?: any): any[];
    unique(array: IList, isSorted?: bool, iterator?: any): any[];

    zip(...arrays: any[]): any[];
    object(list: IList, values: any[]): any;
    indexOf(array: IList, value: any, isSorted?: bool): number;
    lastIndexOf(array: IList, value: any, fromIndex?: number): number;
    sortedIndex(list: IList, valueL: any, iterator?: any): number;
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
    debounce(func: any, wait: number, immediate?: bool): any;
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
    has(object: any, key: string): bool;
    isEqual(object: any, other: any): bool;
    isEmpty(object: any): bool;
    isElement(object: any): bool;
    isArray(object: any): bool;
    isObject(value: any): bool;
    isArguments(object: any): bool;
    isFunction(object: any): bool;
    isString(object: any): bool;
    isNumber(object: any): bool;
    isFinite(object: any): bool;
    isBoolean(object: any): bool;
    isDate(object: any): bool;
    isRegExp(object: any): bool;
    isNaN(object: any): bool;
    isNull(object: any): bool;
    isUndefined(value: any): bool;

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