type NegationFunction = (val: any) => boolean;

type MaybeFunction = <T>(val: T) => boolean | T;

type CheckTypePredicates = Pick<
    CheckType,
    | "equal"
    | "undefined"
    | "null"
    | "assigned"
    | "primitive"
    | "zero"
    | "infinity"
    | "number"
    | "integer"
    | "even"
    | "odd"
    | "greater"
    | "less"
    | "between"
    | "greaterOrEqual"
    | "lessOrEqual"
    | "inRange"
    | "positive"
    | "negative"
    | "string"
    | "emptyString"
    | "nonEmptyString"
    | "contains"
    | "match"
    | "boolean"
    | "object"
    | "emptyObject"
    | "nonEmptyObject"
    | "instanceStrict"
    | "instance"
    | "like"
    | "array"
    | "emptyArray"
    | "nonEmptyArray"
    | "arrayLike"
    | "iterable"
    | "date"
    | "function"
    | "hasLength"
    | "containsKey"
    | "in"
>;

interface ArrayFunction {
    (a: any): a is any[];

    of: CheckTypePredicates;
}

interface ArrayLikeFunction {
    (a: any): a is ArrayLike<any>;

    of: CheckTypePredicates;
}

interface IterableFunction {
    (a: any): a is Iterable<any>;

    of: CheckTypePredicates;
}

interface ObjectFunction {
    (a: any): a is object;

    of: CheckTypePredicates;
}

type AssertExtended<T extends any[], R> = (...args: [...T, string?]) => R;

type ExtendWithAssert<T> = {
    [K in keyof T]: T[K] extends (...a: infer U) => infer R ? AssertExtended<U, R> & ExtendWithAssert<T[K]>
        : ExtendWithAssert<T[K]>;
};
interface AssertFunction {
    <T>(possibleFalsy: T, message?: string, errorType?: { new(...args: any[]): any }): T;
}

interface CheckType {
    /* General predicates */

    equal(a: any, b: any): boolean;
    null(a: any): a is null;
    undefined(a: any): a is undefined;
    assigned(a: any): boolean;
    primitive(a: any): a is number | string | boolean | null | undefined | symbol;
    hasLength(a: any, length: number): boolean;

    /* String predicates */

    string(a: any): a is string;
    emptyString(a: any): boolean;
    nonEmptyString(a: any): boolean;
    match(a: string, b: RegExp): boolean;

    /* Number predicates */

    number(a: any): a is number;
    integer(a: any): a is number;
    zero(a: any): boolean;
    infinity(a: any): boolean;
    greater(num: number, greaterThan: number): boolean;
    greaterOrEqual(num: number, greaterOrEqual: number): boolean;
    less(num: number, lessThan: number): boolean;
    lessOrEqual(num: number, lessOrEqual: number): boolean;
    /**
     * Excluding a and b. Any order of a, b
     */
    between(num: number, a: number, b: number): boolean;
    /**
     * Including a, b. Any order of a, b
     */
    inRange(num: number, a: number, b: number): boolean;
    positive(num: number): boolean;
    negative(num: number): boolean;
    odd(num: number): boolean;
    even(num: number): boolean;

    /* Boolean predicates */

    boolean(a: any): a is boolean;

    /* Object predicates */

    object: ObjectFunction;
    emptyObject(a: any): boolean;
    nonEmptyObject(a: any): boolean;
    /**
     * Checking via instanceof
     */
    instanceStrict<T extends object>(a: any, prototype: T): a is T;
    /**
     * Checking via instanceof, fallback constructor.name and .toString()
     */
    instance<T extends object>(a: any, prototype: T): a is T;
    /**
     * Duck type checking. Structural in other words. Checking if a has all properties of duck
     */
    like<T extends object>(a: any, duck: T): a is T;

    /* Array predicates */

    array: ArrayFunction;
    emptyArray(a: any): boolean;
    nonEmptyArray(a: any): boolean;
    arrayLike: ArrayLikeFunction;
    iterable: IterableFunction;
    includes(a: any[], value: any): boolean;

    /* Date predicates */

    date(a: any): a is Date;

    /* Function predicates */

    function(a: any): a is (...args: any[]) => any;

    /* Modifiers (some of them in their respected sections) */
    not: CheckTypePredicates & NegationFunction;
    maybe: CheckTypePredicates & MaybeFunction;
    assert: ExtendWithAssert<CheckTypePredicates> & ExtendWithAssert<Pick<CheckType, "not" | "maybe">> & AssertFunction;

    /* Batch operations */

    /**
     * Applying predicate to every element of array and returning resulting array
     *
     * Example: apply([2, 3, "four"], check.number) => [true, true, false]
     */
    apply<T>(arr: any[], predicate: (...args: any[]) => T): T[];

    // Also some difficulties with returning object with only defined in predicates object propertis.
    // Will gladly accept help or ideas. Now using any for returned object
    map<T extends { [k: string]: any }>(
        arr: T,
        predicates: Partial<{ [k in keyof T]: (...args: any[]) => boolean }>,
    ): Partial<{ [k in keyof T]: any }>;

    all(arr: boolean[] | { [k: string]: boolean }): boolean;

    any(arr: boolean[] | { [k: string]: boolean }): boolean;

    /* Searching keys and values */
    in(substring: string, a: string): boolean;
    in(value: any, a: object): boolean;
    in<T = any>(value: T, a: T[] | Set<T> | Map<any, T> | Iterable<T>): boolean;

    contains(a: string, substring: string): boolean;
    contains(a: object, value: any): boolean;
    contains<T = any>(a: T[] | Set<T> | Map<any, T> | Iterable<T>, value: T): boolean;

    keyIn(key: number | string, a: string | any[]): boolean;
    keyIn(key: number | string | symbol, a: object): boolean;
    keyIn<K = any>(key: K, a: Map<K, any>): boolean;

    containsKey(a: string | any[], key: number | string): boolean;
    containsKey(a: object, key: number | string | symbol): boolean;
    containsKey<K = any>(a: Map<K, any>, key: K): boolean;
}

declare const check: CheckType;

export = check;
