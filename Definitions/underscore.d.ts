// Type definitions for Underscore 1.4.1
// https://github.com/borisyankov/DefinitelyTyped

interface KeyValuePair {
    key: string;
    value: any;
}

interface TemplateSettings {
    evaluate?: RegExp;
    interpolate?: RegExp;
    escape?: RegExp;
}

interface UnderscoreStatic {

    /****
     Collections
    *****/
    each(list: any[], iterator: any, context?: any): any[]; // interface Iterator = (element, index, list) => any;
    each(obj: any, iterator: any, context?: any): any[]; // (value, key, list)
    forEach(list: any[], iterator: any, context?: any): any[];
    forEach(obj: any, iterator: any, context?: any): any[];

    map(list: any[], iterator: any, context?: any): any[];
    map(obj: any, iterator: any, context?: any): any[];
    collect(list: any[], iterator: any, context?: any): any[];
    collect(obj: any, iterator: any, context?: any): any[];

    reduce(list: any[], iterator: any, memo: any, context?: any): any[];
    inject(list: any[], iterator: any, memo: any, context?: any): any[];
    foldl(list: any[], iterator: any, memo: any, context?: any): any[];

    reduceRight(list: any[], iterator: any, memo: any, context?: any): any[];
    foldr(list: any[], iterator: any, memo: any, context?: any): any[];
    find(list: any[], iterator: any, context?: any): any;
    detect(list: any[], iterator: any, context?: any): any;
    filter(list: any[], iterator: any, context?: any): any[];
    select(list: any[], iterator: any, context?: any): any[];
    where(list: any[], properties: any): any[];
    reject(list: any[], iterator: any, context?: any): any[];
    all(list: any[], iterator: any, context?: any): bool;
    _any(list: any[], iterator?: any, context?: any): bool;
    contains(list: any, value: any): bool;
    contains(list: any[], value: any): bool;

    invoke(list: any[], methodName: string, arguments: any[]): any;
    invoke(obj: any, methodName: string, ...arguments: any[]): any;

    pluck(list: any[], propertyName: string): string[];
    max(list: any[], iterator?: any, context?: any): any;
    min(list: any[], iterator?: any, context?: any): any;
    sortBy(list: any[], iterator?: any, context?: any): any;
    groupBy(list: any[], iterator: any): any;
    countBy(list: any[], iterator: any): any;
    shuffle(list: any[]): any[];
    toArray(list: any): any[];
    size(list: any): number;

    /****
     Arrays
    *****/
    first(array: any[], n?: number): any;
    head(array: any[], n?: number): any;
    take(array: any[], n?: number): any;
    initial(array: any[], n?: number): any[];
    last(array: any[], n?: number): any;
    rest(array: any[], n?: number): any[];
    tail(array: any[], n?: number): any[];
    drop(array: any[], n?: number): any[];
    compact(array: any[]): any[];
    flatten(array: any[], shallow?: bool): any[];
    without(array: any[], ...values: any[]): any[];
    union(...arrays: any[]): any[];
    intersection(...arrays: any[]): any[];
    difference(array: any[], ...others: any[]): any[];
    uniq(array: any[], isSorted?: bool, iterator?: any): any[];
    zip(...arrays: any[]): any[];
    object(list: any[], values: any[]): any;
    indexOf(array: any[], value: any, isSorted?: bool): number;
    lastIndexOf(array: any[], value: any, fromIndex?: number): number;
    sortedIndex(list: any[], valueL: any, iterator?: any): number;
    range(stop: number): any[];
    range(start: number, stop: number, step?: number): any[];

    /****
     Functions
    *****/
    bind(func: any, context: any, ...arguments: any[]): () => any;
    bindAll(obj: any, ...methodNames: string[]): any;
    memoize(func: any, hashFunction?: any): any;
    defer(func: () => any);
    delay(func: any, wait: number, ...arguments: any[]): any;
    delay(func: any, ...arguments: any[]): any;
    throttle(func: any, wait: number): any;
    debounce(func: any, wait: number, immediate?: bool): any;
    once(func: any): any;
    after(count: number, func: any): any;
    wrap(func: any, wrapper: any): () => any;
    compose(...functions: any[]): any;

    /****
     Objects
    *****/
    keys(object: any): any[];
    values(object: any): any[];
    pairs(object: any): KeyValuePair[];
    invert(object: any): any[];
    functions(object: any): string[];
    methods(object: any): string[];
    extend(destination: any, sources: any): any;
    pick(object: any, ...keys: string[]): any;
    omit(object: any, key: string): any;
    omit(object: any, keys: string[]): any;
    defaults(object: any, defaults: any): any;
    clone(object: any): any;
    tap(object: any, interceptor: any): any;
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
    noConflict(): UnderscoreStatic;
    identity(value: any): any;
    times(n: number, iterator: any, context?: any): any[];
    random(min: number, max: number): number;
    mixin(object: any): any;
    uniqueId(prefix: string): string;
    uniqueId(): number;
    escape(string: string): string;
    result(object: any, property: any): any;
    templateSettings: TemplateSettings;
    template(templateString: string, data?: any, settings?: any): (data: any) => string;

    /****
     Chaining
    *****/
    chain(obj: any): any;
    // (obj).value()
}

declare var _: UnderscoreStatic;