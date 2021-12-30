import { A, O, T } from "ts-toolbelt";

// ///////////////////////////////////////////////////////////////////////////////////////
// TOOLS /////////////////////////////////////////////////////////////////////////////////

// Here lies a loose collection of tools that compute types for the functions in "index.d.ts"
// The goal of this file is to keep "index.d.ts" readable as well as hiding implementations

// WHEN ADDING A NEW TOOL
// - Add documentation for the tool you've created
// - Add <created by @username> on your tool's docs

// TODO
// - Types need proper descriptions, so that we know what they do

// ---------------------------------------------------------------------------------------
// A

/**
 * <needs description>
 */
export type Arity0Fn = () => any;

/**
 * <needs description>
 */
export type Arity1Fn = (a: any) => any;

/**
 * <needs description>
 */
export type Arity2Fn = (a: any, b: any) => any;

/**
 * <needs description>
 */
export interface ArrayLike {
    nodeType: number;
}

/**
 * <needs description>
 * @param K
 */
export type AssocPartialOne<K extends keyof any> =
    (<T>(val: T) => <U>(obj: U) => Record<K, T> & Omit<U, K>)
    & (<T, U>(val: T, obj: U) => Record<K, T> & Omit<U, K>);

/**
 * Array of functions to compose/pipe with.
 */

export type AtLeastOneFunctionsFlow<TArgs extends any[], TResult> =
    [(...args: TArgs) => any, ...Array<(args: any) => any>, (...args: any[]) => TResult] | [(...args: TArgs) => TResult];
export type AtLeastOneFunctionsFlowFromRightToLeft<TArgs extends any[], TResult> =
    [(...args: any) => TResult, ...Array<(args: any) => any>, (...args: TArgs) => any] | [(...args: TArgs) => TResult];

    // ---------------------------------------------------------------------------------------
// C

/**
 * <needs description>
 */
export interface CharList extends String {
    push(x: string): void;
}

/**
 * R.cond's [predicate, transform] pair.
 */

export type CondPair<T extends any[], R> = [(...val: T) => boolean, (...val: T) => R];

// ---------------------------------------------------------------------------------------
// D

/**
 * <needs description>
 * @param A
 */
export interface Dictionary<A> {
    [index: string]: A;
}

// ---------------------------------------------------------------------------------------
// E

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
    [P in keyof O]: P extends keyof E
                    ? EvolveValue<O[P], E[P]>
                    : O[P];
};

/**
 * <needs description>
 * @param A
 */
type Evolved<A> =
    A extends (value: infer V) => any
    ? V
    : A extends Evolver
      ? Evolvable<A>
      : never;

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
type EvolveNestedValue<O, E extends Evolver> =
    O extends object
    ? O extends Evolvable<E>
      ? Evolve<O, E>
      : never
    : never;

/**
 * <needs description>
 * @param V
 * @param E
 */
type EvolveValue<V, E> =
    E extends (value: V) => any
    ? ReturnType<E>
    : E extends Evolver
      ? EvolveNestedValue<V, E>
      : never;

// ---------------------------------------------------------------------------------------
// F

/**
 * <needs description>
 */
export interface Find {
    <T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P | undefined;
    <T>(pred: (val: T) => boolean, list: readonly T[]): T | undefined;
    <T, P extends T>(pred: (val: T) => val is P): (list: readonly T[]) => P | undefined;
    <T>(pred: (val: T) => boolean): (list: readonly T[]) => T | undefined;
}

/**
 * <needs description>
 * @param A
 */
export type Functor<A> =
  | { ['fantasy-land/map']: <B>(fn: (a: A) => B) => Functor<B>; [key: string]: any }
  | { map: <B>(fn: (a: A) => B) => Functor<B>; [key: string]: any };

// ---------------------------------------------------------------------------------------
// K

/**
 * <needs description>
 * @param K
 * @param V
 */
export type KeyValuePair<K, V> = [K, V];

// ---------------------------------------------------------------------------------------
// L

/**
 * <needs description>
 * @param S
 * @param A
 */
export type Lens<S, A> = (
    functorFactory: (a: A) => Functor<A>
) => (s: S) => Functor<S>;

// ---------------------------------------------------------------------------------------
// M

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
export type Merge<O1 extends object, O2 extends object, Depth extends 'flat' | 'deep'> =
    O.MergeUp<T.ObjectOf<O1>, T.ObjectOf<O2>, Depth, 1>;

/**
 * Merge multiple objects `Os` with each other
 * @param Os
 *
 * It essentially works like [[Merge]], since the utility
 * `MergeUp` is used by `AssignUp` internally.
 *
 * <created by @pirix-gh>
 */
export type MergeAll<Os extends readonly object[]> =
    O.AssignUp<{}, Os, 'flat', 1> extends infer M
    ? {} extends M    // nothing merged => bcs no `as const`
      ? T.UnionOf<Os> // so we output the approximate types
      : M             // otherwise, we can get accurate types
    : never;

// ---------------------------------------------------------------------------------------
// O

/**
 * Predicate for an object containing the key.
 */
export type ObjPred<T = unknown> = (value: any, key: unknown extends T ? string : keyof T) => boolean;

/**
 * <needs description>
 */
export type Ord = number | string | boolean | Date;

/**
 * Represents two value's order
 */
export type LT = -1;
export type EQ = 0;
export type GT = 1;

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
export type ObjectHavingSome<Key extends string> = A.Clean<{
    [K in Key]: { [P in K]: unknown }
}[Key]>;

// ---------------------------------------------------------------------------------------
// P

/**
 * <needs description>
 */
export type Path = Array<(number | string)>;

/**
 * <needs description>
 */
export type Placeholder = A.x & {'@@functional/placeholder': true};

/**
 * <needs description>
 */
export type Pred<T extends any[] = any[]> = (...a: T) => boolean;

// ---------------------------------------------------------------------------------------
// R

/**
 * <needs description>
 * @param A
 */
export interface Reduced<A> {
    '@@transducer/value': A;
    '@@transducer/reduced': true;
}

type Fn = (...args: any) => any;
export type ReturnTypesOfFns<A extends ReadonlyArray<Fn>> = A extends [infer H, ...infer R] ? H extends Fn ? R extends Fn[] ? [ReturnType<H>, ...ReturnTypesOfFns<R>] : [] : [] : [];
export type InputTypesOfFns<A extends ReadonlyArray<Fn>> = A extends [infer H, ...infer R] ? H extends Fn ? R extends Fn[] ? [Parameters<H>[0], ...InputTypesOfFns<R>] : [] : [] : [];
// ---------------------------------------------------------------------------------------
// S

// ---------------------------------------------------------------------------------------
// V

/**
 * <needs description>
 * @param R
 */
export type ValueOfRecord<R> =
    R extends Record<any, infer T>
    ? T
    : never;

/**
 * If `T` is a union, `T[keyof T]` (cf. `map` and `values` in `index.d.ts`) contains the types of object values that are common across the union (i.e., an intersection).
 * Because we want to include the types of all values, including those that occur in some, but not all members of the union, we first define `ValueOfUnion`.
 * @see https://stackoverflow.com/a/60085683
 */
export type ValueOfUnion<T> = T extends infer U ? U[keyof U] : never;

/**
 * Take first N types of an Tuple
 */

export type Take<N extends number, Tuple extends any[], ReturnTuple extends any[] = []> = ReturnTuple['length'] extends N
    ? ReturnTuple
    : Tuple extends [infer X, ...infer Xs]
        ? Take<N, Xs, [...ReturnTuple, X]>
        : never;

/**
 * define an n-length tuple type
 */

 export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;

/**
 * map Tuple of ordinary type to Tuple of array type
 * [string, number] -> [string[], number[]]
 */
export type ToTupleOfArray<Tuple extends any[]> =
    Tuple extends []
    ? []
    : Tuple extends [infer X, ...infer Xs]
        ? [X[], ...ToTupleOfArray<Xs>]
        : never;

export type ToTupleOfFunction<R, Tuple extends any[]> =
    Tuple extends []
    ? []
    : Tuple extends [infer X, ...infer Xs]
        ? [(arg: R) => X, ...ToTupleOfFunction<R, Xs>]
        : never;

export {};
