/// <reference path="./index.d.ts" />

import {A} from "ts-toolbelt"

// ///////////////////////////////////////////////////////////////////////////////////////
// TOOLS /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// A

/** <needs description>
 */
export type Arity0Fn = () => any;

/** <needs description>
 */
export type Arity1Fn = (a: any) => any;

/** <needs description>
 */
export type Arity2Fn = (a: any, b: any) => any;

/** <needs description>
 */
export interface ArrayLike {
    nodeType: number;
}

/** <needs description>
 * @param K
 */
export interface AssocPartialOne<K extends keyof any> {
    <T>(val: T): <U>(obj: U) => Record<K, T> & U;
    <T, U>(val: T, obj: U): Record<K, T> & U;
}

// ---------------------------------------------------------------------------------------
// C

/** <needs description>
 */
export interface CharList extends String {
    push(x: string): void;
}

/** <needs description>
 * @param V0
 * @param R
 */
export type ComposeWithFns<V0, R> = [
    (x0: V0) => R
] | [
    (x: any) => R,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
] | [
    (x: any) => R,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: V0) => any
];

// ---------------------------------------------------------------------------------------
// D

/** <needs description>
 * @param A
 */
export interface Dictionary<A> {
    [index: string]: A;
}

// ---------------------------------------------------------------------------------------
// E

/** Represents all objects evolvable with Evolver E
 * @param E
 */
export type Evolvable<E extends Evolver> = {
    [P in keyof E]?: Evolved<E[P]>;
};

/** <needs description>
 * @param O
 * @param E
 */
export type Evolve<O extends Evolvable<E>, E extends Evolver> = {
    [P in keyof O]: P extends keyof E 
                    ? EvolveValue<O[P], E[P]>
                    : O[P];
};

/** <needs description>
 * @param A
 */
type Evolved<A> =
    A extends (value: infer V) => any 
    ? V 
    : A extends Evolver 
      ? Evolvable<A> 
      : never;

/** <needs description>
 */
export interface Evolver {
    [key: string]: ((value: any) => any) | Evolver;
}

/** <needs description>
 * @param O
 * @param E
 */
type EvolveNestedValue<O, E extends Evolver> =
    O extends object
    ? O extends Evolvable<E>
      ? Evolve<O, E> 
      : never
    : never;

/** <needs description>
 * @param V
 * @param E
 */
type EvolveValue<V, E> =
    E extends (value: V) => any ? ReturnType<E> :
    E extends Evolver ? EvolveNestedValue<V, E> :
    never;

// ---------------------------------------------------------------------------------------
// F

/** <needs description>
 */
interface Filter {
    <T>(fn: (value: T) => boolean): FilterOnceApplied<T>;
    <T, Kind extends 'array'>(fn: (value: T) => boolean): (list: readonly T[]) => T[];
    <T, Kind extends 'object'>(fn: (value: T) => boolean): (list: Dictionary<T>) => Dictionary<T>;
    <T>(fn: (value: T) => boolean, list: readonly T[]): T[];
    <T>(fn: (value: T) => boolean, obj: Dictionary<T>): Dictionary<T>;
}

/** <needs description>
 * @param A
 */
type FilterOnceApplied<A> =
    <K extends A[] | Dictionary<A>>(source: K) =>
        K extends Array<infer U>
        ? U[]
        : K extends Dictionary<infer U>
          ? Dictionary<U> 
          : never;

/** <needs description>
 * @param A
 */
export interface Functor<A> {
    map<U>(fn: (a: A) => U): Functor<U>;
}

// ---------------------------------------------------------------------------------------
// K

/** <needs description>
 * @param K
 * @param V
 */
export type KeyValuePair<K, V> = [K, V];

// ---------------------------------------------------------------------------------------
// L

/** <needs description>
 */
export interface Lens {
    <T, U>(obj: T): U;
    set<T, U>(str: string, obj: T): U;
}

// ---------------------------------------------------------------------------------------
// O

/** <needs description>
 */
export type ObjPred = (value: any, key: string) => boolean;

/** <needs description>
 */
export type Ord = number | string | boolean | Date;

// ---------------------------------------------------------------------------------------
// P

/** <needs description>
 */
export type Path = Array<(number | string)>;

/** <needs description>
 */
export type Placeholder = A.x & {'@@functional/placeholder': true};

/** <needs description>
 */
export type Pred = (...a: readonly any[]) => boolean;

/** <needs description>
 * @param V0
 * @param R
 */
export type PipeWithFns<V0, R> = [
    (x0: V0) => R
] | [
    (x0: V0) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
] | [
    (x0: V0) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => any,
    (x: any) => R
];

// ---------------------------------------------------------------------------------------
// R

/** <needs description>
 * @param A
 */
export interface Reduced<A> {
    '@@transducer/value': A;
    '@@transducer/reduced': true;
}

// ---------------------------------------------------------------------------------------
// S

/** <needs description>
 * @param A
 */
export type SafePred<A> = (...a: readonly A[]) => boolean;

// ---------------------------------------------------------------------------------------
// V

/** <needs description>
 * @param R
 */
export type ValueOfRecord<R> = 
    R extends Record<any, infer T> 
    ? T 
    : never;
