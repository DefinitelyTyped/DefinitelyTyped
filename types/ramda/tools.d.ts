import { A, M, O, T } from 'ts-toolbelt';

// Here lies a loose collection of tools that compute types for the functions in "index.d.ts"
// The goal of this file is to keep "index.d.ts" readable as well as hiding implementations

// WHEN ADDING A NEW TOOL
// - Add documentation for the tool you've created
// - Add <created by @username> on your tool's docs

// TODO
// - Types need proper descriptions, so that we know what they do

/**
 * A type that any constructor is assignable to.
 * Use as a generic constraint (`T extends AnyConstructor`)
 * and for function parameters (`a: AnyConstructor`).
 * Use `new (...args: unknown[]) => unknown` instead for function return types.
 *
 * <created by @somebody1234>
 */
export type AnyConstructor = new (...args: any[]) => unknown;

/**
 * A type that any function is assignable to.
 * Use as a generic constraint (`T extends AnyFunction`)
 * and for function parameters (`a: AnyFunction`).
 * Use `(...args: unknown[]) => unknown` instead for function return types.
 *
 * <created by @somebody1234>
 */
export type AnyFunction = (...args: any[]) => unknown;

/**
 * A function taking 0 arguments.
 * @deprecated Use `() => unknown` instead
 */
export type Arity0Fn = () => any;

/**
 * A function taking 1 argument.
 * @deprecated Use `(a: any) => unknown` instead
 */
export type Arity1Fn = (a: any) => any;

/**
 * A function taking 2 arguments.
 * @deprecated Use `(a: any, b: any) => unknown` instead
 */
export type Arity2Fn = (a: any, b: any) => any;

/**
 * <needs description>
 *
 * @deprecated Unknown purpose. If really needed, consider `{ nodeType: number; }` instead.
 */
export interface ArrayLike {
    nodeType: number;
}

/**
 * <needs description>
 * @param K
 */
export type AssocPartialOne<K extends keyof any> = (<T>(val: T) => <U>(obj: U) => Record<K, T> & Omit<U, K>) &
    (<T, U>(val: T, obj: U) => Record<K, T> & Omit<U, K>);

/**
 * Array of functions to compose/pipe with.
 */
export type AtLeastOneFunctionsFlow<TArgs extends any[], TResult> =
    | [(...args: TArgs) => any, ...Array<(args: any) => any>, (...args: any[]) => TResult]
    | [(...args: TArgs) => TResult];
export type AtLeastOneFunctionsFlowFromRightToLeft<TArgs extends any[], TResult> =
    | [(...args: any) => TResult, ...Array<(args: any) => any>, (...args: TArgs) => any]
    | [(...args: TArgs) => TResult];

/**
 * <needs description>
 *
 * @deprecated Unknown purpose. If really needed, consider `string & { push(x: string): void; }` instead.
 */
export interface CharList extends String {
    push(x: string): void;
}

/**
 * R.cond's [predicate, transform] pair.
 */
export type CondPair<T extends any[], R> = [(...val: T) => boolean, (...val: T) => R];

/**
 * R.cond's [predicate, transform] pair in a typeguarded version
 */
export type CondPairTypeguard<T, TFiltered extends T, R> = [(value: T) => value is TFiltered, (value: TFiltered) => R];

/**
 * Dictionary
 * @param A The type of dictionary values
 */
export interface Dictionary<A> {
    [index: string]: A;
}

/**
 * Represents all objects evolvable with Evolver E
 * @param E
 */
export type Evolvable<E extends Evolver> = {
    [P in keyof E]?: Evolved<E[P]>;
};

/**
 * <needs description>
 * @param O
 * @param E
 */
export type Evolve<O extends Evolvable<E>, E extends Evolver> = {
    [P in keyof O]: P extends keyof E ? EvolveValue<O[P], E[P]> : O[P];
};

/**
 * <needs description>
 * @param A
 */
type Evolved<A> = A extends (value: infer V) => any ? V : A extends Evolver ? Evolvable<A> : never;

/**
 * A set of transformation to run as part of an evolve
 * @param T - the type to be evolved
 */
export type Evolver<T extends Evolvable<any> = any> = {
    // if T[K] isn't evolvable, don't allow nesting for that property
    [key in keyof Partial<T>]: ((value: T[key]) => T[key]) | (T[key] extends Evolvable<any> ? Evolver<T[key]> : never);
};

/**
 * <needs description>
 * @param O
 * @param E
 */
type EvolveNestedValue<O, E extends Evolver> = O extends object
    ? O extends Evolvable<E>
        ? Evolve<O, E>
        : never
    : never;

/**
 * <needs description>
 * @param V
 * @param E
 */
type EvolveValue<V, E> = E extends (value: V) => any
    ? ReturnType<E>
    : E extends Evolver
    ? EvolveNestedValue<V, E>
    : never;

/**
 * All falsy JavaScript values representable by the type system.
 *
 * @note Actually there are six (seven) falsy values in JS - the sixth being `NaN`;
 * the seventh being `document.all`. However `NaN` is not a valid literal type,
 * and `document.all` is an object so it's probably not a good idea to add it either.
 */
export type Falsy = undefined | null | 0 | "" | false;

/**
 * The type of `R.find` and `R.findLast`
 *
 * @deprecated Inlined.
 */
export interface Find {
    <T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P | undefined;
    <T>(pred: (val: T) => boolean, list: readonly T[]): T | undefined;
    <T, P extends T>(pred: (val: T) => val is P): (list: readonly T[]) => P | undefined;
    <T>(pred: (val: T) => boolean): (list: readonly T[]) => T | undefined;
}

/**
 * A functor satisfying the FantasyLand spec
 * @param A
 */
export type Functor<A> =
    | { ['fantasy-land/map']: <B>(fn: (a: A) => B) => Functor<B>; [key: string]: any }
    | { map: <B>(fn: (a: A) => B) => Functor<B>; [key: string]: any };

/**
 * A pair containing the key and corresponding value of an object.
 * @param K Key type
 * @param V Value type
 */
export type KeyValuePair<K, V> = [K, V];

/**
 * <needs description>
 * @param S Type of the full object
 * @param A Type of the lens focus
 */
export type Lens<S, A> = (functorFactory: (a: A) => Functor<A>) => (s: S) => Functor<S>;

/**
 * Returns true if T1 array length less than or equal to length of array T2, else returns false
 *
 * @param T1 First readonly array
 * @param T2 Second readonly array
 *
 * <created by @valerii15298>
 */
type Arr1LessThanOrEqual<
    T1 extends ReadonlyArray<any>,
    T2 extends ReadonlyArray<any>,
> = T1['length'] extends T2['length']
    ? true
    : T2['length'] extends 0
    ? false
    : T2 extends readonly [infer First, ...infer Rest]
    ? Arr1LessThanOrEqual<T1, Rest>
    : never;

/**
 * Return true if types T1 and T2 can intersect, e.g. both are primitives or both are objects.
 * Taking into account branded types too.
 *
 * @param T1 First readonly array
 * @param T2 Second readonly array
 *
 * <created by @valerii15298>
 */
type Intersectable<T1, T2> = [T1] extends [T2]
    ? true
    : [T2] extends [T1]
    ? true
    : [T1] extends [object]
    ? [T2] extends [object]
        ? true
        : false
    : [T1] extends [M.Primitive]
    ? [T2] extends [M.Primitive]
        ? true
        : false
    : false;

/**
 * Check if type `T` is `any`
 *
 * @param T Type to check
 *
 * <created by @valerii15298>
 */
type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 * Intersection when produced result can be usable type.
 * For example type `{a: any} & number` will not be reduced to `never`
 *  but `Intersection<{a: any}, number>` will be `never`
 * If one of type is any, another type will be returned.
 *
 * @param T1
 * @param T2
 *
 * <created by @valerii15298>
 */
type Intersection<T1, T2> = Intersectable<T1, T2> extends true
    ? IsAny<T1> extends true
        ? T2
        : IsAny<T2> extends true
        ? T1
        : T1 & T2
    : never;

/**
 * Merge second array with first one,
 * resulting array will have the same length as array T1,
 * every item in new array will be item from first array(T1) by corresponding index
 * intersected with item from second array(also with the same index) if such exist
 *
 * examples:
 *   `mergeArrWithLeft<[1, number, number, string], [number, 2, 7]>` => `[1, 2, 7, string]`
 *   `mergeArrWithLeft<[1, string], [number, "exact text", number, any]>` => `[1, "exact text"]`
 *
 * @param T1
 * @param T2
 *
 * <created by @valerii15298>
 */
export type mergeArrWithLeft<T1 extends ReadonlyArray<any>, T2 extends ReadonlyArray<any>> = readonly [
    ...{
        readonly [Index in keyof T1]: Index extends keyof T2 ? Intersection<T1[Index], T2[Index]> : T1[Index];
    }
];

/**
 * The same as mergeArrWithLeft but will merge smaller array to larger one,
 * so that data will not be lost and maximum length array will be returned
 *
 * example: MergeArrays<[1, number], [number, 2, string]>
 *   will result to => [1, 2, string]
 *
 * @param T1
 * @param T2
 *
 * <created by @valerii15298>
 */
type MergeArrays<T1 extends ReadonlyArray<any>, T2 extends ReadonlyArray<any>> = Arr1LessThanOrEqual<
    T1,
    T2
> extends true
    ? mergeArrWithLeft<T2, T1>
    : mergeArrWithLeft<T1, T2>;

/**
 * Given array of functions will return new array which will be constructed
 * merging all functions parameters array using mergeArrays generic.
 *
 * If provided array is not array of functions, return type will be empty array([])
 *
 * @param T Array of functions
 *
 * <created by @valerii15298>
 */
export type LargestArgumentsList<T extends ReadonlyArray<any>> = T extends readonly [
    (...args: infer Args) => any,
    ...infer Rest
]
    ? MergeArrays<LargestArgumentsList<Rest>, Args>
    : readonly [];

/**
 * Checks if type is `never`
 *
 * Returns `true` if type is `never`, else returns `false`
 *
 * @param T Type to check
 *
 * <created by @valerii15298>
 */
type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Checks if array of types is contains `never` type
 *
 * Returns `true` if array contains `never` type, else returns `false`
 *
 * @param T Array of types to check
 *
 * <created by @valerii15298>
 */
type HasNever<T extends readonly any[]> = T extends readonly [infer First, ...infer Rest]
    ? IsNever<First> extends true
        ? true
        : HasNever<Rest>
    : false;

/**
 * Checks if corresponding types of arguments in functions overlap(have at least one type in common, except never)
 *
 * Returns `unknown` if arguments types overlap, else returns `ErrorMsg`
 *
 * @param T Type to check
 *
 * <created by @valerii15298>
 */
export type IfFunctionsArgumentsDoNotOverlap<T extends ReadonlyArray<Fn>, ErrorMsg extends string> = HasNever<
    LargestArgumentsList<T>
> extends true
    ? ErrorMsg
    : unknown;

/**
 * Merge an object `O1` with `O2`
 * @param O1
 * @param O2
 * @param Depth
 *
 * `O1` & `O2` are intersected with `[]` so that we can
 * handle the scenario where we merge arrays (like ramda).
 * Ramda removes array props when merging arrays, and thus
 * only keeps own properties. This is what `ObjectOf` does.
 *
 * => ramda's `merge` functions are 100% properly typed.
 *
 * <created by @pirix-gh>
 */
export type Merge<O1 extends object, O2 extends object, Depth extends 'flat' | 'deep'> = O.MergeUp<
    T.ObjectOf<O1>,
    T.ObjectOf<O2>,
    Depth,
    1
>;

/**
 * Merge multiple objects `Os` with each other
 * @param Os
 *
 * It essentially works like [[Merge]], since the utility
 * `MergeUp` is used by `AssignUp` internally.
 *
 * <created by @pirix-gh>
 */
export type MergeAll<Os extends readonly object[]> = O.AssignUp<{}, Os, 'flat', 1> extends infer M
    ? {} extends M // nothing merged => bcs no `as const`
        ? T.UnionOf<Os> // so we output the approximate types
        : M // otherwise, we can get accurate types
    : never;

/**
 * Predicate for an object containing the key.
 */
export type ObjPred<T = unknown> = (value: any, key: unknown extends T ? string : keyof T) => boolean;

/**
 * Values that can be compared using the relational operators `<`/`<=`/`>`/`>=`
 */
export type Ord = number | string | boolean | Date;

/**
 * `a` is less than `b`
 */
export type LT = -1;
/**
 * `a` is equal to `b`
 */
export type EQ = 0;
/**
 * `a` is greater than `b`
 */
export type GT = 1;

/**
 * Represents two values' order
 */
export type Ordering = LT | EQ | GT;

/**
 * An object with at least one of its properties beeing of type `Key`.
 *
 * @example
 * ```
 * // $ExpectType { foo: unknown } | { bar: unknown }
 * type Foo = ObjectHavingSome<"foo" | "bar">
 * ```
 */
// Implementation taken from
// https://github.com/piotrwitek/utility-types/blob/df2502ef504c4ba8bd9de81a45baef112b7921d0/src/mapped-types.ts#L351-L362
export type ObjectHavingSome<Key extends string> = A.Clean<
    {
        [K in Key]: { [P in K]: unknown };
    }[Key]
>;

/**
 * <needs description>
 */
export type Path = ReadonlyArray<number | string>;

/**
 * A placeholder used to skip parameters, instead adding a parameter to the returned function.
 */
export type Placeholder = A.x & { '@@functional/placeholder': true };

/**
 * Takes a lists of arguments and returns either `true` or `false`.
 *
 * Classical predicates only take one argument, but since ramda
 * supports multiple arguments, we also use them like that.
 *
 * Note that these predicates, don't represent typeguards,
 * meaning when this type is used, we can't get type narrowing.
 *
 * @see {@link PredTypeguard} for the typeguard version of this.
 */
export type Pred<T extends any[] = any[]> = (...a: T) => boolean;

/**
 * Takes an argument and returns either `true` or `false`.
 *
 * This is usually used as an overload before {@link Pred}.
 * If you would this type alone, the function would **required**
 * to be a typeguard, meaning a simple function just returning
 * a `boolean` wouldn't satisfy this constrain.
 */
export type PredTypeguard<T, TTypeguarded extends T> = (a: T) => a is TTypeguarded;

/**
 * A runtime-branded value used to stop `reduce` and `transduce` early.
 * @param A The type of the contained value
 */
export interface Reduced<A> {
    '@@transducer/value': A;
    '@@transducer/reduced': true;
}

/**
 * A type representing any function. Useful as a generic constraint.
 */
export type Fn = (...args: any[]) => unknown;

/**
 * Converts an array of functions to an array of their return types.
 * @param A The array of functions
 */
export type ReturnTypesOfFns<A extends ReadonlyArray<Fn>> = A extends readonly [(...args: any[]) => infer H, ...infer R]
    ? R extends readonly Fn[]
        ? readonly [H, ...ReturnTypesOfFns<R>]
        : readonly []
    : readonly [];

/**
 * Converts an array of functions taking a single parameter to an array of their parameter types.
 * @param A The array of functions
 */
export type InputTypesOfFns<A extends ReadonlyArray<Fn>> = A extends [infer H, ...infer R]
    ? H extends Fn
        ? R extends Fn[]
            ? [Parameters<H>[0], ...InputTypesOfFns<R>]
            : []
        : []
    : [];

/**
 * The type of the values of a record.
 * @param R The record.
 * @deprecated Use `T[keyof T]` instead.
 */
export type ValueOfRecord<R> = R extends Record<any, infer T> ? T : never;

/**
 * If `T` is a union, `T[keyof T]` (cf. `map` and `values` in `index.d.ts`) contains the types of object values that are common across the union (i.e., an intersection).
 * Because we want to include the types of all values, including those that occur in some, but not all members of the union, we first define `ValueOfUnion`.
 * @see https://stackoverflow.com/a/60085683
 * @param T The (possible) union
 */
export type ValueOfUnion<T> = T extends infer U ? U[keyof U] : never;

/**
 * Take first `N` types of an Tuple
 * @param N Length of prefix to take
 * @param Tuple Input tuple type
 */
export type Take<
    N extends number,
    Tuple extends any[],
    ReturnTuple extends any[] = [],
> = ReturnTuple['length'] extends N
    ? ReturnTuple
    : Tuple extends [infer X, ...infer Xs]
    ? Take<N, Xs, [...ReturnTuple, X]>
    : never;

/**
 * A homogeneous tuple of length `N`.
 * @param T Type of every element of the tuple
 * @param N Length of the tuple
 */
export type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;

/**
 * Map tuple of ordinary type to tuple of array type
 * [string, number] -> [string[], number[]]
 */
export type ToTupleOfArray<Tuple extends any[]> = Tuple extends []
    ? []
    : Tuple extends [infer X, ...infer Xs]
    ? [X[], ...ToTupleOfArray<Xs>]
    : never;

/**
 * Map tuple of ordinary type to tuple of function type
 * @param R Parameter type of every function
 * @param Tuple Return type of every function
 */
export type ToTupleOfFunction<R, Tuple extends any[]> = Tuple extends []
    ? []
    : Tuple extends [infer X, ...infer Xs]
    ? [(arg: R) => X, ...ToTupleOfFunction<R, Xs>]
    : never;

export {};
