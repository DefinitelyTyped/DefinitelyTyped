// Type definitions for ramda 0.27
// Project: https://ramdajs.com
// Definitions by: Scott O'Malley <https://github.com/TheHandsomeCoder>
//                 Erwin Poeze <https://github.com/donnut>
//                 Matt DeKrey <https://github.com/mdekrey>
//                 Stephen King <https://github.com/sbking>
//                 Alejandro Fernandez Haro <https://github.com/afharo>
//                 Vítor Castro <https://github.com/teves-castro>
//                 Simon Højberg <https://github.com/hojberg>
//                 Samson Keung <https://github.com/samsonkeung>
//                 Angelo Ocana <https://github.com/angeloocana>
//                 Rayner Pupo <https://github.com/raynerd>
//                 Nikita Moshensky <https://github.com/moshensky>
//                 Ethan Resnick <https://github.com/ethanresnick>
//                 Tomas Szabo <https://github.com/deftomat>
//                 Maciek Blim <https://github.com/blimusiek>
//                 Marcin Biernat <https://github.com/biern>
//                 Rayhaneh Banyassady <https://github.com/rayhaneh>
//                 Ryan McCuaig <https://github.com/rgm>
//                 Drew Wyatt <https://github.com/drewwyatt>
//                 John Ottenlips <https://github.com/jottenlips>
//                 Nitesh Phadatare <https://github.com/minitesh>
//                 Krantisinh Deshmukh <https://github.com/krantisinh>
//                 Aram Kharazyan <https://github.com/nemo108>
//                 Jituan Lin <https://github.com/jituanlin>
//                 Philippe Mills <https://github.com/Philippe-mills>
//                 Saul Mirone <https://github.com/Saul-Mirone>
//                 Nicholai Nissen <https://github.com/Nicholaiii>
//                 Mike Deverell <https://github.com/devrelm>
//                 Jorge Santana <https://github.com/LORDBABUINO>
//                 Mikael Couzic <https://github.com/couzic>
//                 Nikita Balikhin <https://github.com/NEWESTERS>
//                 Wang Zengdi <https://github.com/adispring>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import * as _ from "ts-toolbelt";
import {
    AtLeastOneFunctionsFlow,
    AtLeastOneFunctionsFlowFromRightToLeft,
    AssocPartialOne,
    CondPair,
    Dictionary,
    Evolvable,
    Evolve,
    Evolver,
    Find,
    Functor,
    InputTypesOfFns,
    KeyValuePair,
    Lens,
    Merge,
    MergeAll,
    ObjectHavingSome,
    ObjPred,
    Ord,
    Ordering,
    Path,
    Placeholder,
    Pred,
    Reduced,
    ReturnTypesOfFns,
    ValueOfRecord,
    ValueOfUnion,
    Take,
    ToTupleOfArray,
    ToTupleOfFunction,
    Tuple,
} from "./tools";

export * from './tools';

/**
 * Placeholder. When used with functions like curry, or op, the second argument is applied to the second
 * position, and it returns a function waiting for its first argument.
 */
export const __: Placeholder;

/**
 * Adds two numbers. Equivalent to a + b but curried.
 */
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;

/**
 * Creates a new list iteration function from an existing one by adding two new parameters to its callback
 * function: the current index, and the entire list.
 */
export function addIndex<T, U>(fn: (f: (item: T) => U, list: readonly T[]) => U[]): _.F.Curry<(a: (item: T, idx: number, list?: T[]) => U, b: readonly T[]) => U[]>;
/* Special case for forEach */
export function addIndex<T>(fn: (f: (item: T) => void, list: readonly T[]) => T[]): _.F.Curry<(a: (item: T, idx: number, list?: T[]) => void, b: readonly T[]) => T[]>;
/* Special case for reduce */
export function addIndex<T, U>(fn: (f: (acc: U, item: T) => U, aci: U, list: readonly T[]) => U): _.F.Curry<(a: (acc: U, item: T, idx: number, list?: T[]) => U, b: U, c: readonly T[]) => U>;

/**
 * Applies a function to the value at the given index of an array, returning a new copy of the array with the
 * element at the given index replaced with the result of the function application.
 */
export function adjust<T>(index: number, fn: (a: T) => T, list: readonly T[]): T[];
export function adjust<T>(index: number, fn: (a: T) => T): (list: readonly T[]) => T[];

/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 */
export function all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function all<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
 */
export function allPass<F extends Pred>(preds: readonly F[]): F;

/**
 * Returns a function that always returns the given value.
 */
export function always<T>(val: T): (...args: unknown[]) => T;

/**
 * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
 * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
 */

export function and<T, U>(a: T, b: U): T | U;
export function and<T>(a: T): <U>(b: U) => T | U;

/**
 * Returns the result of applying the onSuccess function to the value inside a successfully resolved promise. This is useful for working with promises inside function compositions.
 */
export function andThen<A, B>(onSuccess: (a: A) => B | Promise<B>, promise: Promise<A>): Promise<B>;
export function andThen<A, B>(onSuccess: (a: A) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;

/**
 * Returns true if at least one of elements of the list match the predicate, false otherwise.
 */
export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
 */
 export function anyPass<F extends Pred>(preds: readonly F[]): F;

/**
 * ap applies a list of functions to a list of values.
 */
export function ap<T, U>(fns: Array<((a: T) => U)>, vs: readonly T[]): U[];
export function ap<T, U>(fns: Array<((a: T) => U)>): (vs: readonly T[]) => U[];
export function ap<R, A, B>(fn: (r: R, a: A) => B, fn1: (r: R) => A): (r: R) => B;

/**
 * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list,
 * an empty list is returned.
 */
export function aperture<N extends number, T>(n: N, list: readonly T[]): Array<Tuple<T, N>> | [];
export function aperture<N extends number>(n: N): <T>(list: readonly T[]) => Array<Tuple<T, N>> | [];

/**
 * Returns a new list containing the contents of the given list, followed by the given element.
 */
export function append<T>(el: T, list: readonly T[]): T[];
export function append<T>(el: T): <T>(list: readonly T[]) => T[];

/**
 * Applies function fn to the argument list args. This is useful for creating a fixed-arity function from
 * a variadic function. fn should be a bound function if context is significant.
 */
export function apply<F extends (...args: readonly any[]) => any>(fn: F, args: Parameters<F>): ReturnType<F>;
export function apply<F extends (...args: readonly any[]) => any>(fn: F): (args: Parameters<F>) => ReturnType<F>;

/**
 * Given a spec object recursively mapping properties to functions, creates a function producing an object
 * of the same structure, by mapping each property to the result of calling its associated function with
 * the supplied arguments.
 */
export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
    obj: Obj
): (
        ...args: Parameters<ValueOfRecord<Obj>>
    ) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;

/**
 * Takes a value and applies a function to it.
 * This function is also known as the thrush combinator.
 */
export function applyTo<T, U>(el: T, fn: (t: T) => U): U;
export function applyTo<T>(el: T): <U>(fn: (t: T) => U) => U;

/**
 * Makes an ascending comparator function out of a function that returns a value that can be compared with < and >.
 */
export function ascend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;
export function ascend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;

/**
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
 */
export function assoc<T, U>(__: Placeholder, val: T, obj: U): <K extends string>(prop: K) => Record<K, T> & Omit<U, K>;
export function assoc<U, K extends string>(prop: K, __: Placeholder, obj: U): <T>(val: T) => Record<K, T> & Omit<U, K>;
export function assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>;
export function assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & Omit<U, K>;
export function assoc<K extends string>(prop: K): AssocPartialOne<K>;

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
 * placing the specific value at the tail end of that path.
 */
export function assocPath<T, U>(__: Placeholder, val: T, obj: U): (path: Path) => U;
export function assocPath<T, U>(path: Path, __: Placeholder, obj: U): (val: T) => U;
export function assocPath<T, U>(path: Path, val: T, obj: U): U;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): _.F.Curry<(a: T, b: U) => U>;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
 * parameters. Any extraneous parameters will not be passed to the supplied function.
 */
export function binary<T extends (...arg: any) => any>(fn: T): (...arg: _.T.Take<Parameters<T>, '2'>) => ReturnType<T>;

/**
 * Creates a function that is bound to a context. Note: R.bind does not provide the additional argument-binding
 * capabilities of Function.prototype.bind.
 */
export function bind<F extends (...args: readonly any[]) => any, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>;
export function bind<F extends (...args: readonly any[]) => any, T>(fn: F): (thisObj: T) => (...args: Parameters<F>) => ReturnType<F>;

/**
 * A function wrapping calls to the two functions in an && operation, returning the result of the first function
 * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
 * that the second function will not be invoked if the first returns a false-y value.
 */
export function both<T extends Pred>(pred1: T, pred2: T): T;
export function both<T extends Pred>(pred1: T): (pred2: T) => T;

/**
 * Returns the result of calling its first argument with the remaining arguments. This is occasionally useful
 * as a converging function for R.converge: the left branch can produce a function while the right branch
 * produces a value to be passed to that function as an argument.
 */
export function call<T extends (...args: readonly any[]) => any>(fn: T, ...args: Parameters<T>): ReturnType<T>;

/**
 * `chain` maps a function over a list and concatenates the results. `chain` is also known as `flatMap` in some libraries.
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * @sig Chain m => (a -> m b) -> m a -> m b
 *
 */
export function chain<A, B, T = never>(fn: (n: A) => readonly B[], list: readonly A[]): B[];
export function chain<A, B, T = never>(fn: (n: A) => readonly B[]): (list: readonly A[]) => B[];

export function chain<A, B, R>(aToMb: (a: A, r: R) => B, Ma: (r: R) => A): (r: R) => B;
export function chain<A, B, R>(aToMb: (a: A, r: R) => B): (Ma: (r: R) => A) => ((r: R) => B);

/**
 * Restricts a number to be within a range.
 * Also works for other ordered types such as Strings and Date
 */
export function clamp<T>(min: T, max: T, value: T): T;
export function clamp<T>(min: T, max: T): (value: T) => T;
export function clamp<T>(min: T): (max: T, value: T) => T;
export function clamp<T>(min: T): (max: T) => (value: T) => T;

/**
 * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
 */
export function clone<T>(value: T): T;
export function clone<T>(value: readonly T[]): T[];

/**
 * Makes a comparator function out of a function that reports whether the first element is less than the second.
 */
export function comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => Ordering;

/**
 * Takes a function f and returns a function g such that:
 * - applying g to zero or more arguments will give true if applying the same arguments to f gives
 *   a logical false value; and
 * - applying g to zero or more arguments will give false if applying the same arguments to f gives
 *   a logical true value.
 */
export function complement<TArgs extends any[]>(pred: (...args: TArgs) => unknown): (...args: TArgs) => boolean;

/**
 * Performs right-to-left function composition. The rightmost function may have any arity; the remaining
 * functions must be unary.
 */
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
    ...func: [
        fnLast: (a: any) => TResult,
        ...func: Array<(a: any) => any>,
        f7: (a: R6) => R7,
        f6: (a: R5) => R6,
        f5: (a: R4) => R5,
        f4: (a: R3) => R4,
        f3: (a: R2) => R3,
        f2: (a: R1) => R2,
        f1: (...args: TArgs) => R1
    ]
): (...args: TArgs) => TResult; // fallback overload if number of composed functions greater than 7
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f7: (a: R6) => R7,
    f6: (a: R5) => R6,
    f5: (a: R4) => R5,
    f4: (a: R3) => R4,
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R7;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f7: (a: R6) => R7,
    f6: (a: R5) => R6,
    f5: (a: R4) => R5,
    f4: (a: R3) => R4,
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R7;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
    f6: (a: R5) => R6,
    f5: (a: R4) => R5,
    f4: (a: R3) => R4,
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R6;
export function compose<TArgs extends any[], R1, R2, R3, R4, R5>(
    f5: (a: R4) => R5,
    f4: (a: R3) => R4,
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R5;
export function compose<TArgs extends any[], R1, R2, R3, R4>(
    f4: (a: R3) => R4,
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R4;
export function compose<TArgs extends any[], R1, R2, R3>(
    f3: (a: R2) => R3,
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R3;
export function compose<TArgs extends any[], R1, R2>(
    f2: (a: R1) => R2,
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R2;
export function compose<TArgs extends any[], R1>(
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;

/**
 * Returns the right-to-left Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
 * The typings only support arrays for now.
 * All functions must be unary.
 * R.composeK(h, g, f) is equivalent to R.compose(R.chain(h), R.chain(g), f).
 *
 * @deprecated since 0.26 in favor of composeWith(chain)
 */
// tslint:disable:max-line-length
export function composeK<V0, T1>(fn0: (x0: V0) => T1[]): (x0: V0) => T1[];
export function composeK<V0, T1, T2>(fn1: (x: T1) => T2[], fn0: (x0: V0) => T1[]): (x0: V0) => T2[];
export function composeK<V0, T1, T2, T3>(fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T3[];
export function composeK<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T4[];
export function composeK<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5[], fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T5[];
export function composeK<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6[], fn4: (x: T4) => T5[], fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T6[];
// tslint:enable:max-line-length

/**
 * Performs right-to-left composition of one or more Promise-returning functions.
 * All functions must be unary.
 *
 * @deprecated since 0.26 in favor of composeWith(then)
 */
// tslint:disable:max-line-length
export function composeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export function composeP<V0, T1, T2>(fn1: (x: T1) => Promise<T2>, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
export function composeP<V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T3>;
export function composeP<V0, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T4>;
export function composeP<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>, fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T5>;
export function composeP<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>, fn4: (x: T4) => Promise<T5>, fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T6>;
// tslint:enable:max-line-length

/**
 * Performs right-to-left function composition using transforming function.
 */
// tslint:disable:max-line-length
export function composeWith<TArgs extends any[], TResult>(transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any, fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>): (...args: TArgs) => TResult;
export function composeWith(transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any): <TArgs extends any[], TResult>(fns: AtLeastOneFunctionsFlowFromRightToLeft<TArgs, TResult>) => (...args: TArgs) => TResult;
// tslint:enable:max-line-length

/**
 * Returns the result of concatenating the given lists or strings.
 */
export function concat(
    placeholder: Placeholder,
): (<L1 extends any[], L2 extends any[]>(list1: L1, list2: L2) => [...L1, ...L2]) &
    (<S1 extends string, S2 extends string>(s1: S1, s2: S2) => `${S1}${S2}`);
export function concat<L2 extends any[]>(placeholder: Placeholder, list2: L2): <L1 extends any[]>(list1: L1) => [...L1, ...L2];
export function concat<S2 extends string>(placeholder: Placeholder, s2: S2): <S1 extends string>(s1: S1) => `${S1}${S2}`;
export function concat<L1 extends any[]>(list1: L1): <L2 extends any[]>(list2: L2) => [...L1, ...L2];
export function concat<S1 extends string>(s1: S1): <S2 extends string>(s2: S2) => `${S1}${S2}`;
export function concat<L1 extends any[], L2 extends any[]>(list1: L1, list2: L2): [...L1, ...L2];
export function concat<S1 extends string, S2 extends string>(s1: S1, s2: S2): `${S1}${S2}`;
export function concat(s1: string, s2: string): string;
export function concat(s1: string): (s2: string) => string;

/**
 * Returns a function, fn, which encapsulates if/else-if/else logic. R.cond takes a list of [predicate, transform] pairs.
 * All of the arguments to fn are applied to each of the predicates in turn until one returns a "truthy" value, at which
 * point fn returns the result of applying its arguments to the corresponding transformer. If none of the predicates
 * matches, fn returns undefined.
 */
export function cond<T extends any[], R>(pairs: Array<CondPair<T, R>>): (...args: T) => R;

/**
 * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
 */
export function construct<A extends any[], T>(constructor: { new(...a: A): T } | ((...a: A) => T)): (...a: A) => T;

/**
 * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
 * The arity of the function returned is specified to allow using variadic constructor functions.
 */
export function constructN<A extends any[], T>(n: number, constructor: { new(...a: A): T } | ((...a: A) => T)): (...a: Partial<A>) => T;

/**
 * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
 * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
 *
 * @deprecated since 0.26 in favor of includes
 */
export function contains(__: Placeholder, list: string): (a: string) => boolean;
export function contains<T>(__: Placeholder, list: readonly T[]): (a: T) => boolean;
export function contains(__: Placeholder): (list: string, a: string) => boolean;
export function contains<T>(__: Placeholder): (list: readonly T[], a: T) => boolean;
export function contains(a: string, list: string): boolean;
export function contains<T>(a: T, list: readonly T[]): boolean;
export function contains(a: string): (list: string) => boolean;
export function contains<T>(a: T): (list: readonly T[]) => boolean;

/**
 * Accepts a converging function and a list of branching functions and returns a new
 * function. When invoked, this new function is applied to some arguments, each branching
 * function is applied to those same arguments. The results of each branching function
 * are passed as arguments to the converging function to produce the return value.
 */
// tslint:disable:max-line-length
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3, R4, R5, R6, R7,
    RestFunctions extends Array<(...args: TArgs) => any>
>(
    converging: ((...args: readonly [R1, R2, R3, R4, R5, R6, R7, ...ReturnTypesOfFns<RestFunctions>]) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3),
        ((...args: TArgs) => R4),
        ((...args: TArgs) => R5),
        ((...args: TArgs) => R6),
        ((...args: TArgs) => R7),
        ...RestFunctions
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3, R4, R5, R6, R7
>(
    converging: ((...args: readonly [R1, R2, R3, R4, R5, R6, R7] & { length: 7 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3),
        ((...args: TArgs) => R4),
        ((...args: TArgs) => R5),
        ((...args: TArgs) => R6),
        ((...args: TArgs) => R7)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3, R4, R5, R6
>(
    converging: ((...args: readonly [R1, R2, R3, R4, R5, R6] & { length: 6 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3),
        ((...args: TArgs) => R4),
        ((...args: TArgs) => R5),
        ((...args: TArgs) => R6)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3, R4, R5
>(
    converging: ((...args: readonly [R1, R2, R3, R4, R5] & { length: 5 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3),
        ((...args: TArgs) => R4),
        ((...args: TArgs) => R5)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3, R4
>(
    converging: ((...args: readonly [R1, R2, R3, R4] & { length: 4 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3),
        ((...args: TArgs) => R4)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2, R3
>(
    converging: ((...args: readonly [R1, R2, R3] & { length: 3 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2),
        ((...args: TArgs) => R3)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1, R2
>(
    converging: ((...args: readonly [R1, R2] & { length: 2 }) => TResult),
    branches: [
        ((...args: TArgs) => R1),
        ((...args: TArgs) => R2)
    ]
): (...args: TArgs) => TResult;
export function converge<
    TArgs extends any[],
    TResult,
    R1
>(
    converging: ((...args: readonly [R1] & { length: 1 }) => TResult),
    branches: [((...args: TArgs) => R1)]
): (...args: TArgs) => TResult;
// tslint:enable:max-line-length

/**
 * Counts the elements of a list according to how many match each value
 * of a key generated by the supplied function. Returns an object
 * mapping the keys produced by `fn` to the number of occurrences in
 * the list. Note that all keys are coerced to strings because of how
 * JavaScript objects work.
 */
export function countBy<T>(fn: (a: T) => string | number, list: readonly T[]): { [index: string]: number };
export function countBy<T>(fn: (a: T) => string | number): (list: readonly T[]) => { [index: string]: number };

/**
 * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities.
 * First, its arguments needn't be provided one at a time.
 */
export function curry<F extends (...args: any) => any>(f: F): _.F.Curry<F>;

/**
 * Returns a curried equivalent of the provided function, with the specified arity. The curried function has
 * two unusual capabilities. First, its arguments needn't be provided one at a time.
 */
export function curryN<N extends number, F extends (...args: any) => any>(length: N, fn: F): _.F.Curry<(...a: _.T.Take<Parameters<F>, _.N.NumberOf<N>>) => ReturnType<F>>;
export function curryN<N extends number>(length: N): <F extends (...args: any) => any>(fn: F) => _.F.Curry<(...a: _.T.Take<Parameters<F>, _.N.NumberOf<N>>) => ReturnType<F>>;

/**
 * Decrements its argument.
 */
export function dec(n: number): number;

/**
 * Returns the second argument if it is not null, undefined or NaN. If it is null, undefined or NaN, the
 * first (default) argument is returned.
 */
export function defaultTo<T, U>(a: T, b: U | null | undefined): T | U;
export function defaultTo<T>(a: T): <U>(b: U | null | undefined) => T | U;

/**
 * Makes a descending comparator function out of a function that returns a value that can be compared with < and >.
 */
export function descend<T>(fn: (obj: T) => Ord, a: T, b: T): Ordering;
export function descend<T>(fn: (obj: T) => Ord): (a: T, b: T) => Ordering;

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 */
export function difference<T>(list1: readonly T[], list2: readonly T[]): T[];
export function difference<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 * Duplication is determined according to the value returned by applying the supplied predicate to two list
 * elements.
 */
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): T1[];
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[]): (list2: readonly T2[]) => T1[];

/*
 * Returns a new object that does not contain a prop property.
 */
export function dissoc<T extends object, K extends keyof T>(prop: K, obj: T): Omit<T, K>;
export function dissoc<K extends string | number>(prop: K): <T extends object>(obj: T) => Omit<T, K>;

/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 */
export function dissocPath<T>(path: Path, obj: any): T;
export function dissocPath<T>(path: Path): (obj: any) => T;

/**
 * Divides two numbers. Equivalent to a / b.
 */
export function divide(__: Placeholder, b: number): (a: number) => number;
export function divide(__: Placeholder): (b: number, a: number) => number;
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

/**
 * Returns a new list containing all but the first n elements of the given list.
 */
export function drop<T>(n: number, xs: readonly T[]): T[];
export function drop(n: number, xs: string): string;
export function drop<T>(n: number): {
    (xs: string): string;
    (xs: readonly T[]): T[];
};

/**
 * Returns a list containing all but the last n elements of the given list.
 */
export function dropLast<T>(n: number, xs: readonly T[]): T[];
export function dropLast(n: number, xs: string): string;
export function dropLast<T>(n: number): {
    (xs: readonly T[]): T[];
    (xs: string): string;
};

/**
 * Returns a new list containing all but last then elements of a given list, passing each value from the
 * right to the supplied predicate function, skipping elements while the predicate function returns true.
 */
export function dropLastWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];
export function dropLastWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];

/**
 * Returns a new list without any consecutively repeating elements. R.equals is used to determine equality.
 */
export function dropRepeats<T>(list: readonly T[]): T[];

/**
 * Returns a new list without any consecutively repeating elements.
 * Equality is determined by applying the supplied predicate to each pair of consecutive elements.
 * The first element in a series of equal elements will be preserved.
 */
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean, list: readonly T[]): T[];
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean): (list: readonly T[]) => T[];

/**
 * Returns a new list containing the last n elements of a given list, passing each value to the supplied
 * predicate function, skipping elements while the predicate function returns true.
 */
export function dropWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];
export function dropWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];

/**
 * A function wrapping calls to the two functions in an || operation, returning the result of the first
 * function if it is truth-y and the result of the second function otherwise. Note that this is
 * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
 */
export function either<T extends Pred>(pred1: T, pred2: T): T;
export function either<T extends Pred>(pred1: T): (pred2: T) => T;

/**
 * Returns the empty value of its argument's type. Ramda defines the empty value of Array ([]), Object ({}),
 * String (''), and Arguments. Other types are supported if they define <Type>.empty and/or <Type>.prototype.empty.
 * Dispatches to the empty method of the first argument, if present.
 */
export function empty<T>(x: T): T;

/**
 * Checks if a string ends with the provided substring, or a list ends with the provided sublist.
 */
export function endsWith(substr: string, str: string): boolean;
export function endsWith(substr: string): (str: string) => boolean;
export function endsWith<T>(subList: readonly T[], list: readonly T[]): boolean;
export function endsWith<T>(subList: readonly T[]): (list: readonly T[]) => boolean;

/**
 * Takes a function and two values in its domain and returns true if the values map to the same value in the
 * codomain; false otherwise.
 */
export function eqBy<T, U = T>(fn: (a: T) => U, a: T, b: T): boolean;
export function eqBy<T, U = T>(fn: (a: T) => U, a: T): (b: T) => boolean;
export function eqBy<T, U = T>(fn: (a: T) => U): _.F.Curry<(a: T, b: T) => boolean>;

/**
 * Reports whether two functions have the same value for the specified property.
 */
export function eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
export function eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

/**
 * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
 * Handles cyclical data structures.
 */
export function equals<T>(__: Placeholder, b: T): (a: T) => boolean;
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;

/**
 * Creates a new object by evolving a shallow copy of object, according to the transformation functions.
 */
export function evolve<E extends Evolver, V extends Evolvable<E>>(transformations: E, obj: V): Evolve<V, E>;
export function evolve<E extends Evolver>(transformations: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;

/**
 * A function that always returns false. Any passed in parameters are ignored.
 */
export function F(...args: unknown[]): false;

/**
 * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
 */
export function filter<A, P extends A>(pred: (val: A) => val is P): {
    <B extends A>(list: readonly B[]): P[];
    <B extends A>(dict: Dictionary<B>): Dictionary<P>;
};
export function filter<T>(pred: (value: T) => boolean): <P extends T, C extends (readonly P[] | Dictionary<P>)>(collection: C) => C;
export function filter<T, P extends T>(pred: (val: T) => val is P, list: readonly T[]): P[];
export function filter<T, P extends T>(pred: (val: T) => val is P, dict: Dictionary<T>): Dictionary<P>;
export function filter<T, C extends (readonly T[] | Dictionary<T>)>(pred: (value: T) => boolean, collection: C): C;

/**
 * Returns the first element of the list which matches the predicate, or `undefined` if no
 * element matches.
 */
export const find: Find;

/**
 * Returns the index of the first element of the list which matches the predicate, or `-1`
 * if no element matches.
 */
export function findIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;
export function findIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;

/**
 * Returns the last element of the list which matches the predicate, or `undefined` if no
 * element matches.
 */
export const findLast: Find;

/**
 * Returns the index of the last element of the list which matches the predicate, or
 * `-1` if no element matches.
 */
export function findLastIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
 * them in a new array, depth-first.
 */
export function flatten<T extends readonly any[]>(list: T): _.T.Flatten<T>;

/**
 * Returns a new function much like the supplied one, except that the first two arguments'
 * order is reversed.
 */
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
export function flip<F extends (...args: any) => any, P extends _.F.Parameters<F>>(fn: F): _.F.Curry<(...args: _.T.Merge<[P[1], P[0]], P>) => _.F.Return<F>>;

/**
 * Iterate over an input list, calling a provided function fn for each element in the list.
 */
export function forEach<T>(fn: (x: T) => void, list: readonly T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: readonly T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: readonly T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: readonly T[]) => T[];

/**
 * Iterate over an input object, calling a provided function fn for each key and value in the object.
 */
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;

/**
 * Creates a new object out of a list key-value pairs.
 */
export function fromPairs<V>(pairs: Array<KeyValuePair<string, V>> | Array<KeyValuePair<number, V>>): { [index: string]: V };

/**
 * Splits a list into sublists stored in an object, based on the result of
 * calling a String-returning function
 * on each element, and grouping the results according to values returned.
 */
export function groupBy<T, K extends string = string>(fn: (a: T) => K, list: readonly T[]): Record<K, T[]>;
export function groupBy<T, K extends string = string>(fn: (a: T) => K): (list: readonly T[]) => Record<K, T[]>;

/**
 * Takes a list and returns a list of lists where each sublist's elements are all "equal" according to the provided equality function
 */
export function groupWith<T>(fn: (x: T, y: T) => boolean): (list: readonly T[]) => T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: readonly T[]): T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

/**
 * Returns true if the first parameter is greater than the second.
 */
export function gt(__: Placeholder, b: number): (a: number) => boolean;
export function gt(__: Placeholder): (b: number, a: number) => boolean;
export function gt(a: number, b: number): boolean;
export function gt(a: string, b: string): boolean;
export function gt(a: number): (b: number) => boolean;

/**
 * Returns true if the first parameter is greater than or equal to the second.
 */
export function gte(__: Placeholder, b: number): (a: number) => boolean;
export function gte(__: Placeholder): (b: number, a: number) => boolean;
export function gte(a: number, b: number): boolean;
export function gte(a: string, b: string): boolean;
export function gte(a: number): (b: number) => boolean;

/**
 * Returns whether or not an object has an own property with the specified name.
 */
export function has(__: Placeholder, obj: unknown): (s: string) => boolean;
export function has(__: Placeholder): <P extends string>(obj: unknown, s: P) => obj is ObjectHavingSome<P>;
export function has<P extends string>(s: P, obj: unknown): obj is ObjectHavingSome<P>;
export function has<P extends string>(s: P): (obj: unknown) => obj is ObjectHavingSome<P>;

/**
 * Returns whether or not an object or its prototype chain has a property with the specified name
 */
export function hasIn<T>(s: string, obj: T): boolean;
export function hasIn(s: string): <T>(obj: T) => boolean;

/**
 * Returns whether or not a path exists in an object. Only the object's own properties are checked.
 */
export function hasPath<T>(list: readonly string[], obj: T): boolean;
export function hasPath(list: readonly string[]): <T>(obj: T) => boolean;

/**
 * Returns the first element in a list.
 * In some libraries this function is named `first`.
 */
export function head(str: string): string;
export function head(list: readonly []): undefined;
export function head<T extends any>(list: readonly T[]): T | undefined;

/**
 * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the
 * same memory. NaN is identical to NaN; 0 and -0 are not identical.
 */
export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;

/**
 * A function that does nothing but return the parameter supplied to it. Good as a default
 * or placeholder function.
 */
export function identity<T>(a: T): T;

/**
 * Creates a function that will process either the onTrue or the onFalse function depending upon the result
 * of the condition predicate.
 */
// tslint:disable:max-line-length
export function ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult;
// tslint:enable:max-line-length

/**
 * Increments its argument.
 */
export function inc(n: number): number;

/**
 * Given a target, this function checks a list for the target and returns a boolean.
 * Given a string, this function checks for the string in another string or list and returns
 * a boolean.
 */
export function includes(__: Placeholder, list: readonly string[] | string): (s: string) => boolean;
export function includes<T>(__: Placeholder, list: readonly T[]): (target: T) => boolean;
export function includes(__: Placeholder): (list: readonly string[] | string, s: string) => boolean;
export function includes<T>(__: Placeholder): (list: readonly T[], target: T) => boolean;
export function includes(s: string, list: readonly string[] | string): boolean;
export function includes(s: string): (list: readonly string[] | string) => boolean;
export function includes<T>(target: T, list: readonly T[]): boolean;
export function includes<T>(target: T): (list: readonly T[]) => boolean;

/**
 * Given a function that generates a key, turns a list of objects into an object indexing the objects
 * by the given key.
 */
export function indexBy<T, K extends string | number = string>(fn: (a: T) => K, list: readonly T[]): { [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(fn: (a: T) => K, list: readonly T[]): { [key in NonNullable<K>]?: T };
export function indexBy<T, K extends string | number = string>(fn: (a: T) => K): (list: readonly T[]) => { [key in K]: T };
export function indexBy<T, K extends string | number | undefined = string>(fn: (a: T) => K | undefined): (list: readonly T[]) => { [key in NonNullable<K>]?: T };

/**
 * Returns the position of the first occurrence of an item in an array
 * (by strict equality),
 * or -1 if the item is not included in the array.
 */
export function indexOf(target: string, list: readonly string[] | string): number;
export function indexOf(target: string): (list: readonly string[] | string) => number;
export function indexOf<T>(target: T, list: readonly T[]): number;
export function indexOf<T>(target: T): (list: readonly T[]) => number;

/**
 * Returns all but the last element of a list or string.
 */
export function init<T>(list: readonly T[]): T[];
export function init(list: string): string;

/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 */

export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[]): (list2: readonly T2[]) => T1[];

/**
 * Inserts the supplied element into the list, at index index. Note that
 * this is not destructive: it returns a copy of the list with the changes.
 */
export function insert<T>(index: number, elt: T, list: readonly T[]): T[];
export function insert<T>(index: number, elt: T): (list: readonly T[]) => T[];
export function insert(index: number): <T>(elt: T, list: readonly T[]) => T[];

/**
 * Inserts the sub-list into the list, at index `index`.  _Note  that this
 * is not destructive_: it returns a copy of the list with the changes.
 */
export function insertAll<T>(index: number, elts: readonly T[], list: readonly T[]): T[];
export function insertAll<T>(index: number, elts: readonly T[]): (list: readonly T[]) => T[];
export function insertAll(index: number): <T>(elts: readonly T[], list: readonly T[]) => T[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
 */
export function intersection<T>(list1: readonly T[], list2: readonly T[]): T[];
export function intersection<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Creates a new list with the separator interposed between elements.
 */
export function intersperse<T>(separator: T, list: readonly T[]): T[];
export function intersperse<T>(separator: T): (list: readonly T[]) => T[];

/**
 * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
 * using an appropriate iterator function based on the accumulator type.
 */
export function into<T>(acc: any, xf: (...a: readonly any[]) => any, list: readonly T[]): T[];
export function into<T, R>(acc: any, xf: (...a: readonly any[]) => R[], list: readonly T[]): R[];
export function into(acc: any, xf: (...a: readonly any[]) => any): <T>(list: readonly T[]) => T[];
export function into(acc: any): <T>(xf: (...a: readonly any[]) => any, list: readonly T[]) => T[];

/**
 * Same as R.invertObj, however this accounts for objects with duplicate values by putting the values into an array.
 */
export function invert<T>(obj: T): { [index: string]: string[] };

/**
 * Returns a new object with the keys of the given object as values, and the values of the given object as keys.
 */
export function invertObj(obj: { [index: string]: string } | { [index: number]: string }): { [index: string]: string };

/**
 * Turns a named method with a specified arity into a function that can be called directly
 * supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where the final
 * parameter is the target object.
 */
export function invoker(arity: number, method: string): (...a: readonly any[]) => any;

/**
 * See if an object (`val`) is an instance of the supplied constructor.
 * This function will check up the inheritance chain, if any.
 */
export function is<C extends (...args: any[]) => any>(ctor: C, val: any): val is ReturnType<C>;
export function is<C extends new (...args: any[]) => any>(ctor: C, val: any): val is InstanceType<C>;
export function is<C extends (...args: any[]) => any>(ctor: C): (val: any) => val is ReturnType<C>;
export function is<C extends new (...args: any[]) => any>(ctor: C): (val: any) => val is InstanceType<C>;

/**
 * Reports whether the list has zero elements.
 */
export function isEmpty(value: any): boolean;

/**
 * Checks if the input value is null or undefined.
 */
export function isNil(value: any): value is null | undefined;

/**
 * Returns a string made by inserting the `separator` between each
 * element and concatenating all the elements into a single string.
 */
export function join(x: string, xs: readonly any[]): string;
export function join(x: string): (xs: readonly any[]) => string;

/**
 * Applies a list of functions to a list of values.
 */
export function juxt<A extends any[], R1>(fns: [(...a: A) => R1]): (...a: A) => [R1];
export function juxt<A extends any[], R1, R2>(fns: [(...a: A) => R1, (...a: A) => R2]): (...a: A) => [R1, R2];
export function juxt<A extends any[], R1, R2, R3>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3]): (...a: A) => [R1, R2, R3];
export function juxt<A extends any[], R1, R2, R3, R4>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4]): (...a: A) => [R1, R2, R3, R4];
export function juxt<A extends any[], R1, R2, R3, R4, R5>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4, (...a: A) => R5]): (...a: A) => [R1, R2, R3, R4, R5];
export function juxt<A extends any[], U>(fns: Array<(...args: A) => U>): (...args: A) => U[];

/**
 * Returns a list containing the names of all the enumerable own
 * properties of the supplied object.
 */
export function keys<T extends object>(x: T): Array<keyof T>;
export function keys<T>(x: T): string[];

/**
 * Returns a list containing the names of all the
 * properties of the supplied object, including prototype properties.
 */
export function keysIn<T>(obj: T): string[];

/**
 * Returns the last element from a list.
 */
export function last(str: string): string;
export function last(list: readonly []): undefined;
export function last<T extends any>(list: readonly T[]): T | undefined;

/**
 * Returns the position of the last occurrence of an item (by strict equality) in
 * an array, or -1 if the item is not included in the array.
 */
export function lastIndexOf(target: string, list: readonly string[] | string): number;
export function lastIndexOf(target: string): (list: readonly string[] | string) => number;
export function lastIndexOf<T>(target: T, list: readonly T[]): number;
export function lastIndexOf<T>(target: T): (list: readonly T[]) => number;

/**
 * Returns the number of elements in the array by returning list.length.
 */
export function length<T extends ArrayLike<unknown>>(list: T): number;

/**
 * Returns a lens for the given getter and setter functions. The getter
 * "gets" the value of the focus; the setter "sets" the value of the focus.
 * The setter should not mutate the data structure.
 */
export function lens<S, A>(getter: (s: S) => A, setter: (a: A, s: S) => S): Lens<S, A>;

/**
 * Creates a lens that will focus on index n of the source array.
 */
export function lensIndex<A>(n: number): Lens<A[], A>;
export function lensIndex<A extends any[], N extends number>(n: N): Lens<A, A[N]>;

/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 */
export function lensPath<S, K0 extends keyof S = keyof S>(path: [K0]): Lens<S, S[K0]>;
export function lensPath<S, K0 extends keyof S = keyof S, K1 extends keyof S[K0] = keyof S[K0]>(path: [K0, K1]): Lens<S, S[K0][K1]>;
export function lensPath<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1]
>(
    path: [K0, K1, K2]
): Lens<S, S[K0][K1][K2]>;
export function lensPath<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
>(
    path: [K0, K1, K2, K3]
): Lens<S, S[K0][K1][K2][K3]>;
export function lensPath<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
>(
    path: [K0, K1, K2, K3, K4]
): Lens<S, S[K0][K1][K2][K3][K4]>;
export function lensPath<
    S,
    K0 extends keyof S = keyof S,
    K1 extends keyof S[K0] = keyof S[K0],
    K2 extends keyof S[K0][K1] = keyof S[K0][K1],
    K3 extends keyof S[K0][K1][K2] = keyof S[K0][K1][K2],
    K4 extends keyof S[K0][K1][K2][K3] = keyof S[K0][K1][K2][K3],
    K5 extends keyof S[K0][K1][K2][K3][K4] = keyof S[K0][K1][K2][K3][K4],
>(
    path: [K0, K1, K2, K3, K4, K5]
): Lens<S, S[K0][K1][K2][K3][K4][K5]>;

export function lensPath<S = any, A = any>(path: Path): Lens<S, A>;

/**
 * lensProp creates a lens that will focus on property k of the source object.
 */
export function lensProp<S, K extends keyof S = keyof S>(prop: K): Lens<S, S[K]>;

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other object that satisfies
 * the FantasyLand Apply spec.
 */
export function lift<F extends (...args: readonly any[]) => any>(fn: F): {
    (...args: ToTupleOfArray<Parameters<F>>): Array<ReturnType<F>>;
    <R>(...args: ToTupleOfFunction<R, Parameters<F>>): ((arg: R) => ReturnType<F>);
};

/**
 * "lifts" a function to be the specified arity, so that it may "map over" that many lists, Functions or other
 * objects that satisfy the FantasyLand Apply spec.
 */
export function liftN<N extends number, F extends (...args: readonly any[]) => any>(n: N, fn: F): {
    (...args: Take<N, ToTupleOfArray<Parameters<F>>>): Array<ReturnType<F>>;
    <R>(...args: Take<N, ToTupleOfFunction<R, Parameters<F>>>): ((arg: R) => ReturnType<F>);
};

/**
 * Returns true if the first parameter is less than the second.
 */
export function lt(__: Placeholder, b: number): (a: number) => boolean;
export function lt(__: Placeholder): (b: number, a: number) => boolean;
export function lt(a: number, b: number): boolean;
export function lt(a: string, b: string): boolean;
export function lt(a: number): (b: number) => boolean;

/**
 * Returns true if the first parameter is less than or equal to the second.
 */
export function lte(__: Placeholder, b: number): (a: number) => boolean;
export function lte(__: Placeholder): (b: number, a: number) => boolean;
export function lte(a: number, b: number): boolean;
export function lte(a: string, b: string): boolean;
export function lte(a: number): (b: number) => boolean;

/**
 * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
 */
export function map<T, U>(fn: (x: T) => U, list: readonly T[]): U[];
export function map<T, U>(fn: (x: T) => U): (list: readonly T[]) => U[];
export function map<T, U>(fn: (x: T[keyof T & keyof U] | ValueOfUnion<T>) => U[keyof T & keyof U], list: T): U;
export function map<T, U>(fn: (x: T[keyof T & keyof U] | ValueOfUnion<T>) => U[keyof T & keyof U]): (list: T) => U;
export function map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>; // used in functors
export function map<T, U>(fn: (x: T) => U): (obj: Functor<T>) => Functor<U>; // used in functors

/**
 * The mapAccum function behaves like a combination of map and reduce.
 */
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: readonly T[]): [U, TResult[]];
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: readonly T[]) => [U, TResult[]];

/**
 * The mapAccumRight function behaves like a combination of map and reduce.
 */
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: readonly T[]): [U, TResult[]];
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: readonly T[]) => [U, TResult[]];

/**
 * Like mapObj, but but passes additional arguments to the predicate function.
 */
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
    obj: Record<TKey, T>
): Record<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
    obj: PartialRecord<TKey, T>
): PartialRecord<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult
): (obj: Record<TKey, T>) => Record<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: PartialRecord<TKey, T>) => TResult
): (obj: Record<TKey, T>) => PartialRecord<TKey, TResult>;
export function mapObjIndexed<T, TResult>(
    fn: (value: T, key: string, obj?: {
        [key: string]: T
    }) => TResult,
    obj: {
        [key: string]: T
    }
): {
    [key: string]: TResult
};
/**
 * Tests a regular expression agains a String
 */
export function match(regexp: RegExp, str: string): string[];
export function match(regexp: RegExp): (str: string) => string[];

/**
 * mathMod behaves like the modulo operator should mathematically, unlike the `%`
 * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 */
export function mathMod(__: Placeholder, b: number): (a: number) => number;
export function mathMod(__: Placeholder): (b: number, a: number) => number;
export function mathMod(a: number, b: number): number;
export function mathMod(a: number): (b: number) => number;

/**
 * Returns the larger of its two arguments.
 */
export function max<T extends Ord>(a: T, b: T): T;
export function max<T extends Ord>(a: T): (b: T) => T;

/**
 * Takes a function and two values, and returns whichever value produces
 * the larger result when passed to the provided function.
 */
export function maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function maxBy<T>(keyFn: (a: T) => Ord): _.F.Curry<(a: T, b: T) => T>;

/**
 * Returns the mean of the given list of numbers.
 */
export function mean(list: readonly number[]): number;

/**
 * Returns the median of the given list of numbers.
 */
export function median(list: readonly number[]): number;

/**
 * Creates a new function that, when invoked, caches the result of calling fn for a given argument set and returns the result.
 * Subsequent calls to the memoized fn with the same argument set will not result in an additional call to fn; instead, the cached result for that set of arguments will be returned.
 */
export function memoizeWith<T extends (...args: readonly any[]) => any>(keyFn: (...v: Parameters<T>) => string, fn: T): T;

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 *
 * @deprecated since 0.26 in favor of mergeRight
 */
export function merge<O2 extends object>(__: Placeholder, b: O2): <O1 extends object>(a: O1) => Merge<O2, O1, 'flat'>;
export function merge(__: Placeholder): <O1 extends object, O2 extends object>(b: O2, a: O1) => Merge<O2, O1, 'flat'>;
export function merge<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O2, O1, 'flat'>;
export function merge<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O2, O1, 'flat'>;

/**
 * Merges a list of objects together into one object.
 */
export function mergeAll<Os extends readonly object[]>(list: Os): MergeAll<Os>;
/**
 * Creates a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects:
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the first object will be used.
 */
export function mergeDeepLeft<O1 extends object, O2 extends object>(o1: O1, o2: O2): Merge<O1, O2, 'deep'>;
export function mergeDeepLeft<O1 extends object>(o1: O1): <O2 extends object>(o2: O2) => Merge<O1, O2, 'deep'>;

/**
 * Creates a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects:
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the second object will be used.
 */
export function mergeDeepRight<O1 extends object, O2 extends object>(o1: O1, o2: O2): Merge<O2, O1, 'deep'>;
export function mergeDeepRight<O1 extends object>(a: O1): <O2 extends object>(o2: O2) => Merge<O2, O1, 'deep'>;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
 * and both associated values are also objects then the values will be recursively merged.
 * otherwise the provided function is applied to associated values using the resulting value as the new value
 * associated with the key. If a key only exists in one object, the value will be associated with the key of the resulting object.
 */
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1, b: T2): any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any): (a: T1, b: T2) => any;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
 * and both associated values are also objects then the values will be recursively merged.
 * otherwise the provided function is applied to the key and associated values using the resulting value as
 * the new value associated with the key. If a key only exists in one object, the value will be associated with
 * the key of the resulting object.
 */
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1, b: T2): any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any): (a: T1, b: T2) => any;

/**
 * Create a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects, the value from the first object will be used.
 */
export function mergeLeft<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O1, O2, 'flat'>;
export function mergeLeft<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O1, O2, 'flat'>;

/**
 * Create a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects, the value from the second object will be used.
 */
export function mergeRight<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O2, O1, 'flat'>;
export function mergeRight<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O2, O1, 'flat'>;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
 * the provided function is applied to the values associated with the key in each object, with the result being used as
 * the value associated with the key in the returned object. The key will be excluded from the returned object if the
 * resulting value is undefined.
 */
export function mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): any;
export function mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => any;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
 * the provided function is applied to the key and the values associated with the key in each object, with the
 * result being used as the value associated with the key in the returned object. The key will be excluded from
 * the returned object if the resulting value is undefined.
 */
export function mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): any;
export function mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWithKey(fn: (str: string, x: any, z: any) => any): <U, V>(a: U, b: V) => any;

/**
 * Returns the smaller of its two arguments.
 */
export function min<T extends Ord>(a: T, b: T): T;
export function min<T extends Ord>(a: T): (b: T) => T;

/**
 * Takes a function and two values, and returns whichever value produces
 * the smaller result when passed to the provided function.
 */
export function minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function minBy<T>(keyFn: (a: T) => Ord): _.F.Curry<(a: T, b: T) => T>;

/**
 * Divides the second parameter by the first and returns the remainder.
 * The flipped version (`moduloBy`) may be more useful curried.
 * Note that this functions preserves the JavaScript-style behavior for
 * modulo. For mathematical modulo see `mathMod`
 */
export function modulo(__: Placeholder, b: number): (a: number) => number;
export function modulo(__: Placeholder): (b: number, a: number) => number;
export function modulo(a: number, b: number): number;
export function modulo(a: number): (b: number) => number;

/**
 * Multiplies two numbers. Equivalent to a * b but curried.
 */
export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;

/**
 * Moves an item, at index `from`, to index `to`, in a `list` of elements.
 * A new list will be created containing the new elements order.
 */
export function move<T>(from: number, to: number, list: readonly T[]): T[];
export function move(from: number, to: number): <T>(list: readonly T[]) => T[];
export function move(from: number): {
    <T>(to: number, list: readonly T[]): T[];
    (to: number): <T>(list: readonly T[]) => T[];
};

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly n parameters.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export function nAry<N extends number, T extends (...arg: any) => any>(n: N, fn: T): (...arg: _.T.Take<Parameters<T>, _.N.NumberOf<N>>) => ReturnType<T>;
export function nAry<N extends number>(n: N): <T extends (...arg: any) => any>(fn: T) => (...arg: _.T.Take<Parameters<T>, _.N.NumberOf<N>>) => ReturnType<T>;

/**
 * Negates its argument.
 */
export function negate(n: number): number;

/**
 * Returns true if no elements of the list match the predicate, false otherwise.
 */
export function none<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function none<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * A function that returns the ! of its argument.
 * It will return true when passed false-y value, and false when passed a truth-y one.
 */
export function not(value: any): boolean;

/**
 * Returns the nth element of the given list or string
 */
 export function nth<T>(n: number, list: readonly T[]): T | undefined;
 export function nth(n: number, list: string): string;
 export function nth(n: number): {
     <T>(list: readonly T[]): T | undefined;
     (list: string): string;
 };

/**
 * Returns a function which returns its nth argument.
 */
export function nthArg(n: number): (...a: readonly any[]) => any;

/**
 * o is a curried composition function that returns a unary function. Like compose, o performs right-to-left function composition.
 * Unlike compose, the rightmost function passed to o will be invoked with only one argument.
 * Also, unlike compose, o is limited to accepting only 2 unary functions.
 * The name o was chosen because of its similarity to the mathematical composition operator ∘.
 */
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2, v: T1): R;
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2): (v: T1) => R;
export function o<T2, R>(
    f: (x: T2) => R,
): {
    <T1>(g: (x: T1) => T2, v: T1): R;
    <T1>(g: (x: T1) => T2): (v: T1) => R;
};

/**
 * Creates an object containing a single key:value pair.
 */
export function objOf<T, K extends string>(key: K, value: T): Record<K, T>;
export function objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;

/**
 * Returns a singleton array containing the value provided.
 */
export function of<T>(x: T): T[];

/**
 * Returns a partial copy of an object omitting the keys specified.
 */
export function omit<T, K extends string>(names: readonly K[], obj: T): Omit<T, K>;
export function omit<K extends string>(names: readonly K[]): <T>(obj: T) => Omit<T, K>;

/**
 * Accepts a function fn and returns a function that guards invocation of fn such that fn can only ever be
 * called once, no matter how many times the returned function is invoked. The first value calculated is
 * returned in subsequent invocations.
 */
export function once<F extends (...a: readonly any[]) => any>(fn: F): F;

/**
 * A function that returns the first truthy of two arguments otherwise the last argument. Note that this is
 * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
 */
export function or<T, U>(a: T, b: U): T | U;
export function or<T>(a: T): <U>(b: U) => T | U;

/**
 * Returns the result of applying the onFailure function to the value inside a failed promise.
 * This is useful for handling rejected promises inside function compositions.
 */
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>, promise: Promise<A>): Promise<B>;
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 */
export function over<S, A>(lens: Lens<S, A>, fn: (a: A) => A, value: S): S;
export function over<S, A>(lens: Lens<S, A>, fn: (a: A) => A): (value: S) => S;
export function over<S, A>(lens: Lens<S, A>): (fn: (a: A) => A, value: S) => S;

/**
 * Takes two arguments, fst and snd, and returns [fst, snd].
 */
export function pair<F, S>(fst: F, snd: S): [F, S];
export function pair<F>(fst: F): <S>(snd: S) => [F, S];

/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 */
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;

export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;

export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1, V2]): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1]): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0]): (x1: V1, x2: V2, x3: V3) => T;

export function partial<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;

/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 */
export function partialRight<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V1]): (x1: V0) => T;

export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V1, V2]): (x2: V0) => T;
export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V2]): (x1: V0, x2: V1) => T;

export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V1, V2, V3]): (x0: V0) => T;
export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V2, V3]): (x0: V0, x1: V1) => T;
export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V3]): (x0: V0, x1: V1, x2: V2) => T;

export function partialRight<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;

/**
 * Takes a predicate and a list and returns the pair of lists of elements
 * which do and do not satisfy the predicate, respectively.
 */
export function partition(fn: (a: string) => boolean, list: readonly string[]): [string[], string[]];
export function partition<T>(fn: (a: T) => boolean, list: readonly T[]): [T[], T[]];
export function partition<T>(fn: (a: T) => boolean): (list: readonly T[]) => [T[], T[]];
export function partition(fn: (a: string) => boolean): (list: readonly string[]) => [string[], string[]];

/**
 * Retrieve the value at a given path.
 */
export function path<T>(path: Path, obj: any): T | undefined;
export function path<T>(path: Path): (obj: any) => T | undefined;

/**
 * Determines whether a nested path on an object has a specific value,
 * in `R.equals` terms. Most likely used to filter a list.
 */
export function pathEq(path: Path, val: any, obj: any): boolean;
export function pathEq(path: Path, val: any): (obj: any) => boolean;
export function pathEq(path: Path): _.F.Curry<(a: any, b: any) => boolean>;

/**
 * If the given, non-null object has a value at the given path, returns the value at that path.
 * Otherwise returns the provided default value.
 */
export function pathOr<T>(defaultValue: T, path: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, path: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): _.F.Curry<(a: Path, b: any) => T>;

/**
 * Retrieves the values at given paths of an object.
 */
export function paths<T>(paths: Path[], obj: any): Array<T | undefined>;
export function paths<T>(paths: Path[]): (obj: any) => Array<T | undefined>;

/**
 * Returns true if the specified object property at given path satisfies the given predicate; false otherwise.
 */
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean): _.F.Curry<(a: Path, b: U) => boolean>;

/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 */
export function pick<T, K extends string | number | symbol>(names: readonly K[], obj: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<K extends string | number | symbol>(names: readonly K[]): <T>(obj: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;

/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
 */
export function pickAll<T, U>(names: readonly string[], obj: T): U;
export function pickAll(names: readonly string[]): <T, U>(obj: T) => U;

/**
 * Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.
 */
export function pickBy<T, U>(pred: ObjPred<T>, obj: T): U;
export function pickBy<T>(pred: ObjPred<T>): <U, V extends T>(obj: V) => U;

/**
 * Creates a new function that runs each of the functions supplied as parameters in turn,
 * passing the return value of each function invocation to the next function invocation,
 * beginning with whatever arguments were passed to the initial invocation.
 */
// tslint:disable:max-line-length
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7, TResult>(
    ...funcs: [
        f1: (...args: TArgs) => R1,
        f2: (a: R1) => R2,
        f3: (a: R2) => R3,
        f4: (a: R3) => R4,
        f5: (a: R4) => R5,
        f6: (a: R5) => R6,
        f7: (a: R6) => R7,
        ...func: Array<(a: any) => any>,
        fnLast: (a: any) => TResult
    ]
): (...args: TArgs) => TResult;  // fallback overload if number of piped functions greater than 7
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7
): (...args: TArgs) => R7;
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5, R6>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6
): (...args: TArgs) => R6;
export function pipe<TArgs extends any[], R1, R2, R3, R4, R5>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5
): (...args: TArgs) => R5;
export function pipe<TArgs extends any[], R1, R2, R3, R4>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4
): (...args: TArgs) => R4;
export function pipe<TArgs extends any[], R1, R2, R3>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3
): (...args: TArgs) => R3;
export function pipe<TArgs extends any[], R1, R2>(
    f1: (...args: TArgs) => R1,
    f2: (a: R1) => R2
): (...args: TArgs) => R2;
export function pipe<TArgs extends any[], R1>(
    f1: (...args: TArgs) => R1
): (...args: TArgs) => R1;
// tslint:enable:max-line-length

/**
 * Returns the left-to-right Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
 * The typings currently support arrays only as return values.
 * All functions need to be unary.
 * R.pipeK(f, g, h) is equivalent to R.pipe(f, R.chain(g), R.chain(h)).
 *
 * @deprecated since 0.26 in favor of pipeWith(chain)
 */
// tslint:disable:max-line-length
export function pipeK<V0, T1>(fn0: (x0: V0) => T1[]): (x0: V0) => T1[];
export function pipeK<V0, T1, T2>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[]): (x0: V0) => T2[];
export function pipeK<V0, T1, T2, T3>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[]): (x: V0) => T3[];
export function pipeK<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[]): (x: V0) => T4[];
export function pipeK<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[]): (x: V0) => T5[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[]): (x: V0) => T6[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn: (x: T6) => T7[]): (x: V0) => T7[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn: (x: T7) => T8[]): (x: V0) => T8[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn7: (x: T7) => T8[], fn8: (x: T8) => T9[]): (x0: V0) => T9[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn7: (x: T7) => T8[], fn8: (x: T8) => T9[], fn9: (x: T9) => T10[]): (x0: V0) => T10[];
// tslint:enable:max-line-length

/**
 * Performs left-to-right composition of one or more Promise-returning functions.
 * All functions need to be unary.
 *
 * @deprecated since 0.26 in favor of pipeWith(then)
 */
// tslint:disable:max-line-length
export function pipeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export function pipeP<V0, T1, T2>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>): (x0: V0) => Promise<T2>;
export function pipeP<V0, T1, T2, T3>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>): (x: V0) => Promise<T3>;
export function pipeP<V0, T1, T2, T3, T4>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>): (x: V0) => Promise<T4>;
export function pipeP<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>): (x: V0) => Promise<T5>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>): (x: V0) => Promise<T6>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn: (x: T6) => Promise<T7>): (x: V0) => Promise<T7>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn: (x: T7) => Promise<T8>): (x: V0) => Promise<T8>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn7: (x: T7) => Promise<T8>, fn8: (x: T8) => Promise<T9>): (x0: V0) => Promise<T9>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn7: (x: T7) => Promise<T8>, fn8: (x: T8) => Promise<T9>, fn9: (x: T9) => Promise<T10>): (x0: V0) => Promise<T10>;
// tslint:enable:max-line-length

/**
 * Performs left-to-right function composition using transforming function.
 */
// tslint:disable:max-line-length
export function pipeWith<TArgs extends any[], TResult>(transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any, fns: AtLeastOneFunctionsFlow<TArgs, TResult>): (...args: TArgs) => TResult;
export function pipeWith(transformer: (fn: (...args: any[]) => any, intermediatResult: any) => any): <TArgs extends any[], TResult>(fns: AtLeastOneFunctionsFlow<TArgs, TResult>) => (...args: TArgs) => TResult;
// tslint:enable:max-line-length

/**
 * Returns a new list by plucking the same named property off all objects in the list supplied.
 */
export function pluck<K extends keyof T, T>(p: K, list: readonly T[]): Array<T[K]>;
export function pluck<T>(p: number, list: Array<{ [k: number]: T }>): T[];
export function pluck<P extends string>(p: P): <T>(list: Array<Record<P, T>>) => T[];
export function pluck(p: number): <T>(list: Array<{ [k: number]: T }>) => T[];

/**
 * Returns a new list with the given element at the front, followed by the contents of the
 * list.
 */
export function prepend<T>(el: T, list: readonly T[]): T[];
export function prepend<T>(el: T): (list: readonly T[]) => T[];

/**
 * Multiplies together all the elements of a list.
 */
export function product(list: readonly number[]): number;

/**
 * Reasonable analog to SQL `select` statement.
 */
export function project<T, U>(props: readonly string[], objs: readonly T[]): U[];
export function project<T, U>(props: readonly string[]): (objs: readonly T[]) => U[];

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 */
export function prop<T>(__: Placeholder, obj: T): <P extends keyof T>(p: P) => T[P];
export function prop<P extends keyof T, T>(p: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

/**
 * Determines whether the given property of an object has a specific
 * value according to strict equality (`===`).  Most likely used to
 * filter a list.
 */
export function propEq<K extends string | number>(name: K, val: any, obj: Record<K, any>): boolean;
export function propEq<K extends string | number>(name: K, val: any): (obj: Record<K, any>) => boolean;
export function propEq<K extends string | number>(name: K): {
    (val: any, obj: Record<K, any>): boolean;
    (val: any): (obj: Record<K, any>) => boolean;
};

/**
 * Returns true if the specified object property is of the given type; false otherwise.
 */
export function propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>;
export function propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, InstanceType<C>>;
export function propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
export function propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
export function propIs<C extends (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, ReturnType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
};
export function propIs<C extends new (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, InstanceType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
};

/**
 * If the given, non-null object has an own property with the specified name, returns the value of that property.
 * Otherwise returns the provided default value.
 */
export function propOr<T, U>(val: T, __: Placeholder, obj: U): <V>(p: string) => V;
export function propOr<U>(__: Placeholder, p: string, obj: U): <T, V>(val: T) => V;
export function propOr<T, U, V>(val: T, p: string, obj: U): V;
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

/**
 * Returns the value at the specified property.
 * The only difference from `prop` is the parameter order.
 * Note: TS1.9 # replace any by dictionary
 */
export function props<P extends string, T>(ps: readonly P[], obj: Record<P, T>): T[];
export function props<P extends string>(ps: readonly P[]): <T>(obj: Record<P, T>) => T[];
export function props<P extends string, T>(ps: readonly P[]): (obj: Record<P, T>) => T[];

/**
 * Returns true if the specified object property satisfies the given predicate; false otherwise.
 */
export function propSatisfies<P, K extends keyof any>(pred: (val: any) => val is P, name: K, obj: any): obj is Record<K, P>;
export function propSatisfies<P, K extends keyof any>(pred: (val: any) => val is P, name: K): (obj: any) => obj is Record<K, P>;
export function propSatisfies<P>(pred: (val: any) => val is P): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, P>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, P>;
};
export function propSatisfies(pred: (val: any) => boolean, name: keyof any, obj: any): boolean;
export function propSatisfies(pred: (val: any) => boolean, name: keyof any): (obj: any) => boolean;
export function propSatisfies(pred: (val: any) => boolean): _.F.Curry<(a: keyof any, b: any) => boolean>;

/**
 * Returns a list of numbers from `from` (inclusive) to `to`
 * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
 * the half-open interval `[a, b)`.
 */
export function range(from: number, to: number): number[];
export function range(from: number): (to: number) => number[];

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 */
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>, acc: TResult, list: readonly T[]): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>): (acc: TResult, list: readonly T[]) => TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>, acc: TResult): (list: readonly T[]) => TResult;

/**
 * Groups the elements of the list according to the result of calling the String-returning function keyFn on each
 * element and reduces the elements of each group to a single value via the reducer function valueFn.
 */
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string, list: readonly T[]): { [index: string]: TResult };
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string): (list: readonly T[]) => { [index: string]: TResult };
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult): _.F.Curry<(a: (elem: T) => string, b: readonly T[]) => { [index: string]: TResult }>;
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult): _.F.Curry<(a: TResult, b: (elem: T) => string, c: readonly T[]) => { [index: string]: TResult }>;

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce and
 * transduce functions. The returned value should be considered a black box: the internal
 * structure is not guaranteed to be stable.
 */
export function reduced<T>(elem: T): Reduced<T>;

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 */
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult, list: readonly T[]): TResult;
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult): (acc: TResult, list: readonly T[]) => TResult;
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult): (list: readonly T[]) => TResult;

/**
 * Like reduce, reduceWhile returns a single item by iterating through the list, successively
 * calling the iterator function. reduceWhile also takes a predicate that is evaluated before
 * each step. If the predicate returns false, it "short-circuits" the iteration and returns
 * the current value of the accumulator.
 */
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: readonly T[]): TResult;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: readonly T[]) => TResult;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult): _.F.Curry<(a: TResult, b: readonly T[]) => TResult>;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean): _.F.Curry<(a: (acc: TResult, elem: T) => TResult, b: TResult, c: readonly T[]) => TResult>;

/**
 * Similar to `filter`, except that it keeps only values for which the given predicate
 * function returns falsy.
 */
export function reject<A, P extends A>(pred: (val: A) => val is P): {
    <B extends A>(list: readonly B[]): Array<Exclude<B, P>>;
    <B extends A>(dict: Dictionary<B>): Dictionary<Exclude<B, P>>;
};
export function reject<T>(pred: (value: T) => boolean): <P extends T, C extends (readonly P[] | Dictionary<P>)>(collection: C) => C;
export function reject<A, B extends A, P extends A>(pred: (val: A) => val is P, list: readonly B[]): Array<Exclude<B, P>>;
export function reject<A, B extends A, P extends A>(pred: (val: A) => val is P, dict: Dictionary<B>): Dictionary<Exclude<B, P>>;
export function reject<T, C extends (readonly T[] | Dictionary<T>)>(pred: (value: T) => boolean, collection: C): C;

/**
 * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
 */
export function remove<T>(start: number, count: number, list: readonly T[]): T[];
export function remove<T>(start: number): {
    (count: number, list: readonly T[]): T[];
    (count: number): (list: readonly T[]) => T[];
};
export function remove<T>(start: number, count: number): (list: readonly T[]) => T[];

/**
 * Returns a fixed list of size n containing a specified identical value.
 */
export function repeat<T>(a: T, n: number): T[];
export function repeat<T>(a: T): (n: number) => T[];

/**
 * Replace a substring or regex match in a string with a replacement.
 */
export function replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: readonly any[]) => string), str: string): string;
export function replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: readonly any[]) => string)): (str: string) => string;
export function replace(pattern: RegExp | string): (replacement: string | ((match: string, ...args: readonly any[]) => string)) => (str: string) => string;

/**
 * Returns a new list with the same elements as the original list, just in the reverse order.
 */
export function reverse<T>(list: readonly T[]): T[];
/**
 * Returns a new string with the characters in reverse order.
 */
export function reverse(str: string): string;

/**
 * Scan is similar to reduce, but returns a list of successively reduced values from the left.
 */
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult, list: readonly T[]): TResult[];
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult): (list: readonly T[]) => TResult[];
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any): (acc: TResult, list: readonly T[]) => TResult[];

/**
 * Returns the result of "setting" the portion of the given data structure focused by the given lens to the
 * given value.
 */
export function set<S, A>(lens: Lens<S, A>, a: A, obj: S): S;
export function set<S, A>(lens: Lens<S, A>, a: A): (obj: S) => S;
export function set<S, A>(lens: Lens<S, A>): (a: A, obj: S) => S;

/**
 * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
 */
export function slice(a: number, b: number, list: string): string;
export function slice<T>(a: number, b: number, list: readonly T[]): T[];
export function slice(a: number, b: number): {
    <T>(list: readonly T[]): T[];
    (list: string): string;
};
export function slice(a: number): {
    <T>(b: number, list: readonly T[]): T[];
    (b: number, list: string): string;
};

/**
 * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
 * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
 * if they are equal.
 */
export function sort<T>(fn: (a: T, b: T) => number, list: readonly T[]): T[];
export function sort<T>(fn: (a: T, b: T) => number): (list: readonly T[]) => T[];

/**
 * Sorts the list according to a key generated by the supplied function.
 */
export function sortBy<T>(fn: (a: T) => Ord, list: readonly T[]): T[];
export function sortBy<T>(fn: (a: T) => Ord): (list: readonly T[]) => T[];
export function sortBy(fn: (a: any) => Ord): <T>(list: readonly T[]) => T[];

/**
 * Sorts a list according to a list of comparators.
 */
export function sortWith<T>(fns: Array<((a: T, b: T) => number)>, list: readonly T[]): T[];
export function sortWith<T>(fns: Array<((a: T, b: T) => number)>): (list: readonly T[]) => T[];

/**
 * Splits a string into an array of strings based on the given
 * separator.
 */
export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];

/**
 * Splits a given list or string at a given index.
 */
export function splitAt<T>(index: number, list: readonly T[]): [T[], T[]];
export function splitAt(index: number, list: string): [string, string];
export function splitAt(index: number): {
    <T>(list: readonly T[]): [T[], T[]];
    (list: string): [string, string];
};

/**
 * Splits a collection into slices of the specified length.
 */
export function splitEvery<T>(a: number, list: readonly T[]): T[][];
export function splitEvery(a: number, list: string): string[];
export function splitEvery(a: number): {
    (list: string): string[];
    <T>(list: readonly T[]): T[][];
};

/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 * - the result of concatenating the two output lists is equivalent to the input list;
 * - none of the elements of the first output list satisfies the predicate; and
 * - if the second output list is non-empty, its first element satisfies the predicate.
 */
export function splitWhen<T, U>(pred: (val: T) => boolean, list: readonly U[]): U[][];
export function splitWhen<T>(pred: (val: T) => boolean): <U>(list: readonly U[]) => U[][];

/**
 * Checks if a string starts with the provided substring, or a list starts with the provided sublist.
 */
export function startsWith(substr: string, str: string): boolean;
export function startsWith(substr: string): (str: string) => boolean;
export function startsWith<T>(subList: readonly T[], list: readonly T[]): boolean;
export function startsWith<T>(subList: readonly T[]): (list: readonly T[]) => boolean;

/**
 * Subtracts two numbers. Equivalent to `a - b` but curried.
 */
export function subtract(__: Placeholder, b: number): (a: number) => number;
export function subtract(__: Placeholder): (b: number, a: number) => number;
export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;

/**
 * Adds together all the elements of a list.
 */
export function sum(list: readonly number[]): number;

/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
 */
export function symmetricDifference<T>(list1: readonly T[], list2: readonly T[]): T[];
export function symmetricDifference<T>(list: readonly T[]): <T>(list: readonly T[]) => T[];

/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
 * Duplication is determined according to the value returned by applying the supplied predicate to two list elements.
 */
export function symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];
export function symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;

/**
 * A function that always returns true. Any passed in parameters are ignored.
 */
export function T(...args: unknown[]): true;

/**
 * Returns all but the first element of a list or string.
 */
export function tail(list: string): string;
export function tail<T extends any>(list: readonly T[]): T[];

/**
 * Returns a new list containing the first `n` elements of the given list.  If
 * `n > * list.length`, returns a list of `list.length` elements.
 */
export function take<T>(n: number, xs: readonly T[]): T[];
export function take(n: number, xs: string): string;
export function take(n: number): {
    (xs: string): string;
    <T>(xs: readonly T[]): T[];
};

/**
 * Returns a new list containing the last n elements of the given list. If n > list.length,
 * returns a list of list.length elements.
 */
export function takeLast<T>(n: number, xs: readonly T[]): T[];
export function takeLast(n: number, xs: string): string;
export function takeLast(n: number): {
    <T>(xs: readonly T[]): T[];
    (xs: string): string;
};

/**
 * Returns a new list containing the last n elements of a given list, passing each value
 * to the supplied predicate function, and terminating when the predicate function returns
 * false. Excludes the element that caused the predicate function to fail. The predicate
 * function is passed one argument: (value).
 */
export function takeLastWhile<T>(pred: (a: T) => boolean, list: readonly T[]): T[];
export function takeLastWhile<T>(pred: (a: T) => boolean): <T>(list: readonly T[]) => T[];

/**
 * Returns a new list containing the first `n` elements of a given list, passing each value
 * to the supplied predicate function, and terminating when the predicate function returns
 * `false`.
 */
export function takeWhile<T>(fn: (x: T) => boolean, list: readonly T[]): T[];
export function takeWhile<T>(fn: (x: T) => boolean): (list: readonly T[]) => T[];

/**
 * Runs the given function with the supplied object, then returns the object.
 * Acts as a transducer if a transformer is given as second parameter.
 */
export function tap<T>(fn: (a: T) => void, value: T): T;
export function tap<T>(fn: (a: T) => void): (value: T) => T;

/**
 * Determines whether a given string matches a given regular expression.
 */
export function test(regexp: RegExp, str: string): boolean;
export function test(regexp: RegExp): (str: string) => boolean;

/**
 * Creates a thunk out of a function.
 * A thunk delays a calculation until its result is needed, providing lazy evaluation of arguments.
 */
export function thunkify<F extends (...args: readonly any[]) => any>(fn: F): _.F.Curry<(...args: Parameters<F>) => (() => ReturnType<F>)>;

/**
 * Calls an input function `n` times, returning an array containing the results of those
 * function calls.
 */
export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

/**
 * The lower case version of a string.
 */
export function toLower<S extends string>(str: S): Lowercase<S>;
export function toLower(str: string): string;

/**
 * Converts an object into an array of key, value arrays.
 * Only the object's own properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 */
export function toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>;
export function toPairs<S>(obj: Record<string | number, S>): Array<[string, S]>;

/**
 * Converts an object into an array of key, value arrays.
 * The object's own properties and prototype properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 */
export function toPairsIn<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>;
export function toPairsIn<S>(obj: Record<string | number, S>): Array<[string, S]>;

/**
 * Returns the string representation of the given value. eval'ing the output should
 * result in a value equivalent to the input value. Many of the built-in toString
 * methods do not satisfy this requirement.
 *
 * If the given value is an [object Object] with a toString method other than
 * Object.prototype.toString, this method is invoked with no arguments to produce the
 * return value. This means user-defined constructor functions can provide a suitable
 * toString method.
 */
export function toString(val: unknown): string;

/**
 * The upper case version of a string.
 */
export function toUpper<S extends string>(str: S): Uppercase<S>;
export function toUpper(str: string): string;

/**
 * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
 * list, successively calling the transformed iterator function and passing it an accumulator value and the
 * current value from the array, and then passing the result to the next call.
 */
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[], acc: readonly T[], list: readonly T[]): U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[]): (fn: (acc: readonly U[], val: U) => U[], acc: readonly T[], list: readonly T[]) => U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[]): (acc: readonly T[], list: readonly T[]) => U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[], acc: readonly T[]): (list: readonly T[]) => U;

/**
 * Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, returns a list of x lists of length n.
 */
export function transpose<T>(list: readonly T[][]): T[][];

/**
 * Maps an Applicative-returning function over a Traversable, then uses
 * sequence to transform the resulting Traversable of Applicative into
 * an Applicative of Traversable.
 */
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[], list: readonly A[]): B[][];
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[]): (list: readonly A[]) => B[][];
export function traverse<A, B>(of: (a: B) => B[]): (fn: (t: A) => B[], list: readonly A[]) => B[][];

/**
 * Removes (strips) whitespace from both ends of the string.
 */
export function trim(str: string): string;

/**
 * tryCatch takes two functions, a tryer and a catcher. The returned function evaluates the tryer; if it does
 * not throw, it simply returns the result. If the tryer does throw, the returned function evaluates the catcher
 * function and returns its result. Note that for effective composition with this function, both the tryer and
 * catcher functions must return the same type of results.
 */
export function tryCatch<F extends (...args: readonly any[]) => any, RE = ReturnType<F>, E = unknown>(tryer: F, catcher: (error: E, ...args: _.F.Parameters<F>) => RE): (F | (() => RE));
export function tryCatch<F extends (...args: readonly any[]) => any>(tryer: F): <RE = ReturnType<F>, E = unknown>(catcher: (error: E, ...args: _.F.Parameters<F>) => RE) => (F | (() => RE));
/**
 * Gives a single-word string description of the (native) type of a value, returning such answers as 'Object',
 * 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them
 * all as 'Object'.
 */
export function type(val: any): 'Object' | 'Number' | 'Boolean' | 'String' | 'Null' | 'Array' | 'RegExp' | 'Function' | 'Undefined' | 'Symbol' | 'Error';

/**
 * Takes a function fn, which takes a single array argument, and returns a function which:
 * - takes any number of positional arguments;
 * - passes these arguments to fn as an array; and
 * - returns the result.
 * In other words, R.unapply derives a variadic function from a function which takes an array.
 * R.unapply is the inverse of R.apply.
 */
export function unapply<T>(fn: (args: readonly any[]) => T): (...args: readonly any[]) => T;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export function unary<T, R>(fn: (a: T, ...args: readonly any[]) => R): (a: T) => R;

/**
 * Returns a function of arity n from a (manually) curried function.
 */
export function uncurryN<T>(len: number, fn: (a: any) => any): (...a: readonly any[]) => T;

/**
 * Builds a list from a seed value. Accepts an iterator function, which returns either false
 * to stop iteration or an array of length 2 containing the value to add to the resulting
 * list and the seed to be used in the next call to the iterator function.
 */
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): TResult[];
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false): (seed: T) => TResult[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the
 * elements of each list.
 */
export function union<T>(as: readonly T[], bs: readonly T[]): T[];
export function union<T>(as: readonly T[]): (bs: readonly T[]) => T[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
 * determined according to the value returned by applying the supplied predicate to two list elements.
 */
export function unionWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];
export function unionWith<T>(pred: (a: T, b: T) => boolean): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;

/**
 * Returns a new list containing only one copy of each element in the original list.
 */
export function uniq<T>(list: readonly T[]): T[];

/**
 * Returns a new list containing only one copy of each element in the original list,
 * based upon the value returned by applying the supplied function to each list element.
 * Prefers the first item if the supplied function produces the same value on two items.
 * R.equals is used for comparison.
 */
export function uniqBy<T, U>(fn: (a: T) => U, list: readonly T[]): T[];
export function uniqBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => T[];

/**
 * Returns a new list containing only one copy of each element in the original list, based upon the value
 * returned by applying the supplied predicate to two list elements.
 */
export function uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: readonly T[]): T[];
export function uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: readonly T[]) => T[];

/**
 * Tests the final argument by passing it to the given predicate function. If the predicate is not satisfied,
 * the function will return the result of calling the whenFalseFn function with the same argument. If the
 * predicate is satisfied, the argument is returned as is.
 */
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U, a: T): T | U;
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U): (a: T) => T | U;

/**
 * Returns a new list by pulling every item at the first level of nesting out, and putting
 * them in a new array.
 */
export function unnest<T extends readonly any[]>(list: T): _.T.UnNest<T>;

/**
 * Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as
 * the initial value. It does so by applying the transformation until the predicate is satisfied, at which point
 * it returns the satisfactory value.
 */
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U, init: U): U;
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U): (init: U) => U;

/**
 * Returns a new copy of the array with the element at the provided index replaced with the given value.
 */
export function update<T>(index: number, value: T, list: readonly T[]): T[];
export function update<T>(index: number, value: T): (list: readonly T[]) => T[];

/**
 * Accepts a function fn and a list of transformer functions and returns a new curried function.
 * When the new function is invoked, it calls the function fn with parameters consisting of the
 * result of calling each supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer functions, those arguments
 * are passed directly to fn as additional parameters. If you expect additional arguments that don't
 * need to be transformed, although you can ignore them, it's best to pass an identity function so
 * that the new function reports the correct arity.
 */
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TArg6, TR6, TArg7, TR7,
    TResult,
    RestFunctions extends Array<(...args: any[]) => any>,
    TArgs extends [TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, ...InputTypesOfFns<RestFunctions>]
>(
    fn: ((...args: [TR1, TR2, TR3, TR4, TR5, TR6, TR7, ...ReturnTypesOfFns<RestFunctions>]) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4, (arg: TArg5) => TR5, (arg: TArg6) => TR6, (arg: TArg7) => TR7, ...RestFunctions]
): (...args: TArgs) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TArg6, TR6, TArg7, TR7,
    TResult
>(
    fn: ((...args: [TR1, TR2, TR3, TR4, TR5, TR6, TR7] & { length: 7 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4, (arg: TArg5) => TR5, (arg: TArg6) => TR6, (arg: TArg7) => TR7]
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5, TArg7]) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5, TArg6, TR6,
    TResult
>(
    fn: ((...args: [TR1, TR2, TR3, TR4, TR5, TR6] & { length: 6 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4, (arg: TArg5) => TR5, (arg: TArg6) => TR6]
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5, TArg6]) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4, TArg5, TR5,
    TResult
>(
    fn: ((...args: [TR1, TR2, TR3, TR4, TR5] & { length: 5 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4, (arg: TArg5) => TR5]
): (...args: [TArg1, TArg2, TArg3, TArg4, TArg5]) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3, TArg4, TR4,
    TResult
>(
    fn: ((...args: [TR1, TR2, TR3, TR4] & { length: 4 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3, (arg: TArg4) => TR4]
): (...args: [TArg1, TArg2, TArg3, TArg4]) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2, TArg3, TR3,
    TResult
>(
    fn: ((...args: [TR1, TR2, TR3] & { length: 3 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2, (arg: TArg3) => TR3]
): (...args: [TArg1, TArg2, TArg3]) => TResult;
export function useWith<
    TArg1, TR1, TArg2, TR2,
    TResult
>(
    fn: ((...args: [TR1, TR2] & { length: 2 }) => TResult),
    transformers: [(arg: TArg1) => TR1, (arg: TArg2) => TR2]
): (...args: [TArg1, TArg2]) => TResult;
export function useWith<
    TArg1, TR1,
    TResult
>(
    fn: ((...args: [TR1]) => TResult),
    transformers: [(arg: TArg1) => TR1]
): (...args: [TArg1]) => TResult;

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across
 * different JS platforms.
 */
export function values<T extends object, K extends keyof T>(obj: T): Array<T[K] | ValueOfUnion<T>>;

/**
 * Returns a list of all the properties, including prototype properties, of the supplied
 * object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
 */
export function valuesIn<T>(obj: any): T[];

/**
 * Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which
 * portion of the data structure is visible.
 */
export function view<S, A>(lens: Lens<S, A>): (obj: S) => A;
export function view<S, A>(lens: Lens<S, A>, obj: S): A;

/**
 * Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function
 * will return the result of calling the whenTrueFn function with the same argument. If the predicate is not satisfied,
 * the argument is returned as is.
 */
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U, a: T): T | U;
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U): (a: T) => T | U;

/**
 * Takes a spec object and a test object and returns true if the test satisfies the spec.
 * Any property on the spec that is not a function is interpreted as an equality
 * relation.
 *
 * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
 * the test object's value for the property in question, as well as the whole test object.
 *
 * `where` is well suited to declaratively expressing constraints for other functions, e.g.,
 * `filter`, `find`, `pickWith`, etc.
 */
export function where<T, U>(spec: T, testObj: U): boolean;
export function where<T>(spec: T): <U>(testObj: U) => boolean;
export function where<ObjFunc2, U>(spec: ObjFunc2, testObj: U): boolean;
export function where<ObjFunc2>(spec: ObjFunc2): <U>(testObj: U) => boolean;

/**
 * Takes a spec object and a test object; returns true if the test satisfies the spec,
 * false otherwise. An object satisfies the spec if, for each of the spec's own properties,
 * accessing that property of the object gives the same value (in R.eq terms) as accessing
 * that property of the spec.
 */
export function whereEq<T, U>(spec: T, obj: U): boolean;
export function whereEq<T>(spec: T): <U>(obj: U) => boolean;

/**
 * Returns a new list without values in the first argument. R.equals is used to determine equality.
 * Acts as a transducer if a transformer is given in list position.
 */
export function without<T>(list1: readonly T[], list2: readonly T[]): T[];
export function without<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Exclusive disjunction logical operation.
 * Returns `true` if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns `false`.
 */
export function xor(a: any, b: any): boolean;
export function xor(a: any): (b: any) => boolean;

/**
 * Creates a new list out of the two supplied by creating each possible pair from the lists.
 */
export function xprod<K, V>(as: readonly K[], bs: readonly V[]): Array<KeyValuePair<K, V>>;
export function xprod<K>(as: readonly K[]): <V>(bs: readonly V[]) => Array<KeyValuePair<K, V>>;

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from
 * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 */
export function zip<K, V>(list1: readonly K[], list2: readonly V[]): Array<KeyValuePair<K, V>>;
export function zip<K>(list1: readonly K[]): <V>(list2: readonly V[]) => Array<KeyValuePair<K, V>>;

/**
 * Creates a new object out of a list of keys and a list of values.
 */
// TODO: Dictionary<T> as a return value is to specific, any seems to loose
export function zipObj<T, K extends string>(keys: readonly K[], values: readonly T[]): { [P in K]: T };
export function zipObj<K extends string>(keys: readonly K[]): <T>(values: readonly T[]) => { [P in K]: T };
export function zipObj<T, K extends number>(keys: readonly K[], values: readonly T[]): { [P in K]: T };
export function zipObj<K extends number>(keys: readonly K[]): <T>(values: readonly T[]) => { [P in K]: T };

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists.
 */
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[], list2: readonly U[]): TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: readonly T[], list2: readonly U[]) => TResult[];

export as namespace R
