// Type definitions for nodekell 1.0
// Project: https://github.com/rudty/nodekell
// Definitions by: Lee Tae Woo <https://github.com/syrflover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

export interface CurriedFunction2<T1, T2, R> {
	(t1: T1): (t2: T2) => R;
	(t1: T1, t2: T2): R;
}

export interface CurriedFunction3<T1, T2, T3, R> {
	(t1: T1): CurriedFunction2<T2, T3, R>; // t1 => t2 => t3 => r | t1 => t2 t3 =>
	(t1: T1, t2: T2): (t3: T3) => R;
	(t1: T1, t2: T2, t3: T3): R;
}

export interface CurriedFunction4<T1, T2, T3, T4, R> {
	(t1: T1): CurriedFunction3<T2, T3, T4, R>;
	(t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
	(t1: T1, t2: T2, t3: T3): (t4: T4) => R;
	(t1: T1, t2: T2, t3: T3, t4: T4): R;
}

export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
	(t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
	(t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
	(t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
	(t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
}

export interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R> {
	(t1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, R>;
	(t1: T1, t2: T2): CurriedFunction5<T3, T4, T5, T6, T7, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction4<T4, T5, T6, T7, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction3<T5, T6, T7, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction2<T6, T7, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): (t7: T7) => R;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): R;
}

export interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
	(t1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, R>;
	(t1: T1, t2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction5<T4, T5, T6, T7, T8, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction4<T5, T6, T7, T8, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction3<T6, T7, T8, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction2<T7, T8, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): (t8: T8) => R;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): R;
}

/**
 * https://github.com/rudty/nodekell#curry
 *
 * @param f
 */
export function curry<T1, T2, R>(f: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
export function curry<T1, T2, T3, R>(f: (t1: T1, t2: T2, T3: T3) => R): CurriedFunction3<T1, T2, T3, R>;
export function curry<T1, T2, T3, T4, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T1, T2, T3, T4, R>;
export function curry<T1, T2, T3, T4, T5, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
export function curry<T1, T2, T3, T4, T5, T6, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
export function curry<T1, T2, T3, T4, T5, T6, T7, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R>;
export function curry<T1, T2, T3, T4, T5, T6, T7, T8, R>(f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R>;

export type Iter<T> = Iterable<T> | AsyncIterable<T>; // | IterableIterator<T> | AsyncIterableIterator<T> | T[];

export type ExtractIter<T> = T extends Iter<infer X> ? X : T;

export type ExtractPromise<T> = T extends Promise<infer X> ? X : T;

export type ExtractMap<T> = T extends Map<infer K, infer V> ? [K, V] : unknown;
/**
 * https://github.com/rudty/nodekell#seq
 *
 * make generator
 *
 * do not need to check if iter
 *
 * Symbol.asyncIterator or Symbol.iterator
 */
export function seq<T>(iter: Iter<T>): AsyncIterableIterator<T>;

/**
 * internal function
 *
 * ```ts
 * ioe('hello') === 'hello';
 * ioe(1234) === 1234;
 * ```
 */
export function ioe<T>(e: T): T;

/**
 * internal function
 *
 * do nothing
 */
export function fnothing(): void;

/**
 * ```ts
 * add(1, 2) === 3;
 * add('hello', 'world') === 'helloworld';
 * ```
 */
export function add(a: number, b: number): number;
export function add(a: string, b: string): string;

/**
 * ```ts
 * sub(2, 1) === 1;
 * ```
 */
export function sub(a: number, b: number): number;

/**
 * ```ts
 * inc(1) === 2;
 * ```
 */
export function inc(a: number): number;

/**
 * ```ts
 * dec(2) === 1;
 * ```
 */
export function dec(a: number): number;

/**
 * ```ts
 * first([0,1,2,3]) === 0;
 * ```
 */
export function first<T extends any[]>(a: T): T[0];

/**
 * ```ts
 * second([0,1,2,3]) === 1;
 * ```
 */
export function second<T extends any[]>(a: T): T[1];

/**
 * ```ts
 * notNil(null) === false;
 * notNil(0) === true;
 * ```
 */
export function notNil(a: any): boolean;

//
// prelude.js
//

/**
 * https://github.com/rudty/nodekell#head
 *
 * @param iter
 */
export function head<T>(iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#tail
 */
export function tail<T>(iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#drop
 *
 * @param count
 * @param iter
 */
export function drop<T>(count: number): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function drop<T>(count: number, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#dropwhile
 *
 * @param f
 * @param iter
 */
export function dropWhile<T>(f: (elem: T) => (boolean | Promise<boolean>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function dropWhile<T>(f: (elem: T) => (boolean | Promise<boolean>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#filter
 *
 * @param f
 * @param iter
 */
export function filter<T>(f: (elem: T) => (boolean | Promise<boolean>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function filter<T>(f: (elem: T) => (boolean | Promise<boolean>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#map
 *
 * @param f
 * @param iter
 */
export function map<T, Y>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<Y>;

export function map<T, Y>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<Y>;

export type Extract2dArray<T> =
	ExtractPromise<T> extends Iter<infer X> ?
	X extends Iter<infer Y> ?
	ExtractPromise<Y> :
	ExtractPromise<X> :
	ExtractPromise<ExtractIter<ExtractPromise<T>>>;

export type Extract2dArrayOrElem<T> =
	ExtractPromise<T> extends Iter<infer X> ?
	X extends Iter<infer Y> ?
	ExtractPromise<Y> : // | Iter<ExtractPromise<Y>>
	// ExtractPromise<Y> extends Iter<infer Z> ? ExtractPromise<Y> | Iter<ExtractPromise<Y>> : ExtractPromise<Y> :
	ExtractPromise<X> :
	[] extends ExtractPromise<T> ?
	ExtractPromise<ExtractIter<ExtractPromise<ExtractIter<ExtractPromise<T>>>>> : //  | Iter<ExtractPromise<ExtractIter<ExtractPromise<ExtractIter<ExtractPromise<T>>>>>>
	ExtractPromise<ExtractIter<ExtractPromise<T>>>;

/* type test = Extract2dArray<Promise<string[]> | Promise<string> | string[]>
type test2 = Extract2dArray<AsyncIterableIterator<AsyncIterableIterator<string>>>
type test3 = Extract2dArrayOrElem<AsyncIterableIterator<(number | (number | Promise<number>)[])>>
type test4 = Extract2dArrayOrElem<AsyncIterableIterator<AsyncIterableIterator<string>>>
type test5 = Extract2dArrayOrElem<string | string[]>;
type test6 = Extract2dArrayOrElem<AsyncIterableIterator<AsyncIterableIterator<string>>>
type test7 = Extract2dArray<Extract2dArray<AsyncIterableIterator<string | Promise<string>[][]>>>;
type test8 = Extract2dArrayOrElem<AsyncIterableIterator<string | Promise<string>[][]>>
type test9 = Extract2dArrayOrElem<Extract2dArrayOrElem<AsyncIterableIterator<string | Promise<string>[][]>>>;
type test10 = Extract2dArrayOrElem<AsyncIterableIterator<string | Promise<string>[][]>>;
type test11 = Extract2dArrayOrElem<test10>;
type test12 = Extract2dArrayOrElem<(number | (number | number[])[])[]>;
type test13 = Extract2dArrayOrElem<AsyncIterableIterator<string | string[][] | Promise<string>[][]>>;
type test14 = Extract2dArrayOrElem<test13>; */
// type test15 = Extract2dArrayOrElem<test14>;

/**
 * https://github.com/rudty/nodekell#fmap
 *
 * @param f
 * @param iter
 */
export function fmap<T, R>(f: (elem: Extract2dArrayOrElem<Iter<T>>) => (R | Promise<R>)): (iter: Iter<T>) => AsyncIterableIterator<Extract2dArrayOrElem<R>>;
export function fmap<T, R>(f: (elem: T) => (R | Promise<R>)): (iter: T) => AsyncIterableIterator<Extract2dArrayOrElem<R>>;

export function fmap<T, R>(f: (elem: Extract2dArrayOrElem<Iter<T>>) => (R | Promise<R>), iter: Iter<T>): AsyncIterableIterator<Extract2dArrayOrElem<R>>;
export function fmap<T, R>(f: (elem: T) => (R | Promise<R>), iter: T): AsyncIterableIterator<Extract2dArrayOrElem<R>>;

/**
 * https://github.com/rudty/nodekell#flatMap
 *
 * as fmap
 *
 * @param f
 * @param iter
 */
export function flatMap<T, R>(f: (elem: Extract2dArrayOrElem<Iter<T>>) => (R | Promise<R>)): (iter: Iter<T>) => AsyncIterableIterator<Extract2dArrayOrElem<R>>;
export function flatMap<T, R>(f: (elem: T) => (R | Promise<R>)): (iter: T) => AsyncIterableIterator<Extract2dArrayOrElem<R>>;

export function flatMap<T, R>(f: (elem: Extract2dArrayOrElem<Iter<T>>) => (R | Promise<R>), iter: Iter<T>): AsyncIterableIterator<Extract2dArrayOrElem<R>>;
export function flatMap<T, R>(f: (elem: T) => (R | Promise<R>), iter: T): AsyncIterableIterator<Extract2dArrayOrElem<R>>;

/**
 * https://github.com/rudty/nodekell#flat
 *
 * @param iter
 */
export function flat<T>(iter: Iter<T>): AsyncIterableIterator<Extract2dArray<Iter<T>>>;

/**
 * https://github.com/rudty/nodekell#take
 *
 * @param count
 * @param iter
 */
export function take<T>(count: number): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function take<T>(count: number, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#takewhile
 *
 * @param f
 * @param iter
 */
export function takeWhile<T>(f: (elem: T) => (boolean | Promise<boolean>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function takeWhile<T>(f: (elem: T) => (boolean | Promise<boolean>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#foldl
 *
 * @param f
 * @param init
 * @param iter
 */

// export function foldl<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (init: T | Promise<T>) => (iter: Iter<T | Promise<T>>) => Promise<T>;

// export function foldl<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (init: T | Promise<T>, iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldl<T>(f: (acc: T, elem: T) => (T | Promise<T>)): CurriedFunction2<T | Promise<T>, Iter<T | Promise<T>>, Promise<T>>;

export function foldl<T>(f: (acc: T, elem: T) => (T | Promise<T>), init: T | Promise<T>): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldl<T>(f: (acc: T, elem: T) => (T | Promise<T>), init: T | Promise<T>, iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#foldl1
 *
 * @param f
 * @param iter
 */
export function foldl1<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldl1<T>(f: (acc: T, elem: T) => (T | Promise<T>), iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#reduce
 *
 * as foldl1
 *
 * @param f
 * @param iter
 */
export function reduce<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function reduce<T>(f: (acc: T, elem: T) => (T | Promise<T>), iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#scanl
 *
 * @param f
 * @param init
 * @param iter
 */
// export function scanl<T>(f: (a: T, b: T) => (T | Promise<T>)): (init: T | Promise<T>) => (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

// export function scanl<T>(f: (a: T, b: T) => (T | Promise<T>)): (init: T | Promise<T>, iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function scanl<T>(f: (a: T, b: T) => (T | Promise<T>)): CurriedFunction2<T | Promise<T>, Iter<T | Promise<T>>, AsyncIterableIterator<T>>;

export function scanl<T>(f: (a: T, b: T) => (T | Promise<T>), init: T | Promise<T>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function scanl<T>(f: (a: T, b: T) => (T | Promise<T>), init: T | Promise<T>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#scanl1
 *
 * @param f
 * @param iter
 */
export function scanl1<T>(f: (a: T, b: T) => (T | Promise<T>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function scanl1<T>(f: (a: T, b: T) => (T | Promise<T>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#reverse
 *
 * @param iter
 */
export function reverse<T>(iter: Iter<T>): AsyncIterableIterator<ExtractPromise<T>>;

/**
 * https://github.com/rudty/nodekell#foldr
 *
 * @param f
 * @param init
 * @param iter
 */
// export function foldr<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (init: T | Promise<T>) => (iter: Iter<T | Promise<T>>) => Promise<T>;

// export function foldr<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (init: T | Promise<T>, iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldr<T>(f: (acc: T, elem: T) => (T | Promise<T>)): CurriedFunction2<T | Promise<T>, Iter<T | Promise<T>>, Promise<T>>;

export function foldr<T>(f: (acc: T, elem: T) => (T | Promise<T>), init: T | Promise<T>): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldr<T>(f: (acc: T, elem: T) => (T | Promise<T>), init: T | Promise<T>, iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#foldr1
 *
 * @param f
 * @param iter
 */
export function foldr1<T>(f: (acc: T, elem: T) => (T | Promise<T>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function foldr1<T>(f: (acc: T, elem: T) => (T | Promise<T>), iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#zip
 *
 * @param iter1
 * @param iter2
 */
export function zip<T, Y>(iter1: Iter<T | Promise<T>>): (iter2: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[T, Y]>;

export function zip<T, Y>(iter1: Iter<T | Promise<T>>, iter2: Iter<Y | Promise<Y>>): AsyncIterableIterator<[T, Y]>;

/**
 * https://github.com/rudty/nodekell#zipwith
 *
 * **Note**
 * - if f is promise function, modify not zip type in typescript. but return type is zip.
 *
 * @param f
 * @param iter1
 * @param iter2
 */
// export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => [R1, R2]): (a: Iter<T | Promise<T>>) => (b: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;
// export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => (Promise<[R1, R2]> | Promise<(R1 | R2)[]>)): (a: Iter<T | Promise<T>>) => (b: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;

// export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => [R1, R2]): (a: Iter<T | Promise<T>>, b: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;
// export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => (Promise<[R1, R2]> | Promise<(R1 | R2)[]>)): (a: Iter<T | Promise<T>>, b: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;

export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => [R1, R2]): CurriedFunction2<Iter<T | Promise<T>>, Iter<Y | Promise<Y>>, AsyncIterableIterator<[R1, R2]>>;
export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => (Promise<[R1, R2]> | Promise<(R1 | R2)[]>)): CurriedFunction2<Iter<T | Promise<T>>, Iter<Y | Promise<Y>>, AsyncIterableIterator<[R1, R2]>>;

export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => [R1, R2], iter1: Iter<T | Promise<T>>): (iter2: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;
export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => (Promise<[R1, R2]> | Promise<(R1 | R2)[]>), iter1: Iter<T | Promise<T>>): (iter2: Iter<Y | Promise<Y>>) => AsyncIterableIterator<[R1, R2]>;

export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => [R1, R2], iter1: Iter<T | Promise<T>>, iter2: Iter<Y | Promise<Y>>): AsyncIterableIterator<[R1, R2]>;
export function zipWith<T, Y, R1, R2>(f: (a: T, b: Y) => (Promise<[R1, R2]> | Promise<(R1 | R2)[]>), iter1: Iter<T | Promise<T>>, iter2: Iter<Y | Promise<Y>>): AsyncIterableIterator<[R1, R2]>;

///
/// generator.js
///

/**
 * https://github.com/rudty/nodekell#repeat
 *
 * @param supply
 */
export function repeat<T>(supply: () => (T | Promise<T>)): AsyncIterableIterator<T>;
export function repeat<T>(supply: T | Promise<T>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#range
 *
 * @param endOrBegin
 * @param end
 * @param step
 */
export function range(end: number): IterableIterator<number>;
export function range(begin: number, end: number): IterableIterator<number>;
export function range(begin: number, end: number, step: number): IterableIterator<number>;

/**
 * https://github.com/rudty/nodekell#iterate
 *
 * @param f
 * @param value
 */
export function iterate<T>(f: (value: T) => (T | Promise<T>)): (value: T | Promise<T>) => AsyncIterableIterator<T>;

export function iterate<T>(f: (value: T) => (T | Promise<T>), value: T | Promise<T>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#run
 *
 * @param iter
 * @param ...f
 */
export function run<T, R0>(iter: Iter<T>, f0: (t: Iter<T>) => R0): R0;
export function run<T, R0, R1>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1): R1;
export function run<T, R0, R1, R2>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2): R2;
export function run<T, R0, R1, R2, R3>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3): R3;
export function run<T, R0, R1, R2, R3, R4>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4): R4;
export function run<T, R0, R1, R2, R3, R4, R5>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5): R5;
export function run<T, R0, R1, R2, R3, R4, R5, R6>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6): R6;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7): R7;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8): R8;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9): R9;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10): R10;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11): R11;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12): R12;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13): R13;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14): R14;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14, f15: (r14: R14) => R15): R15;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14, f15: (r14: R14) => R15, f16: (r15: R15) => R16): R16;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14, f15: (r14: R14) => R15, f16: (r15: R15) => R16, f17: (r16: R16) => R17): R17;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14, f15: (r14: R14) => R15, f16: (r15: R15) => R16, f17: (r16: R16) => R17, f18: (r17: R17) => R18): R18;
export function run<T, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19>(iter: Iter<T>, f0: (t: Iter<T>) => R0, f1: (r0: R0) => R1, f2: (r1: R1) => R2, f3: (r2: R2) => R3, f4: (r3: R3) => R4, f5: (r4: R4) => R5, f6: (r5: R5) => R6, f7: (r6: R6) => R7, f8: (r7: R7) => R8, f9: (r8: R8) => R9, f10: (r9: R9) => R10, f11: (r10: R10) => R11, f12: (r11: R11) => R12, f13: (r12: R12) => R13, f14: (r13: R13) => R14, f15: (r14: R14) => R15, f16: (r15: R15) => R16, f17: (r16: R16) => R17, f18: (r17: R17) => R18, f19: (r18: R18) => R19): R19;

/**
 * https://github.com/rudty/nodekell#rangeof
 *
 * @param a
 */
export function rangeOf<T>(...a: T[]): AsyncIterableIterator<Extract2dArrayOrElem<T[]>>;

/**
 * https://github.com/rudty/nodekell#sleep
 *
 * @param t milliseconds
 */
export function sleep(t: number): Promise<void>;

// export function firstOrGet

///
/// timer.js
///

/**
 * https://github.com/rudty/nodekell#withtimeout
 *
 * @param duration
 * @param iter
 */
export function withTimeout<T>(duration: number | Promise<number>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;
export function withTimeout<T>(duration: () => (number | Promise<number>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function withTimeout<T>(duration: number | Promise<number>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;
export function withTimeout<T>(duration: () => (number | Promise<number>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#timeout
 *
 * @param duration
 * @param job
 */
export function timeout<T>(duration: number | Promise<number>): (job: Promise<T>) => Promise<T>;
export function timeout<T>(duration: number | Promise<number>): (job: () => Promise<T>) => Promise<T>;

export function timeout<T>(duration: () => (number | Promise<number>)): (job: Promise<T>) => Promise<T>;
export function timeout<T>(duration: () => (number | Promise<number>)): (job: () => Promise<T>) => Promise<T>;

export function timeout<T>(duration: number | Promise<number>, job: Promise<T>): Promise<T>;
export function timeout<T>(duration: number | Promise<number>, job: () => Promise<T>): Promise<T>;

export function timeout<T>(duration: () => (number | Promise<number>), job: Promise<T>): Promise<T>;
export function timeout<T>(duration: () => (number | Promise<number>), job: () => Promise<T>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#interval
 *
 * @param timeout
 * @param timerHandler
 * @param params
 */
export function interval(timeout: number, timerHandler: () => any, ...params: any[]): { run: boolean; };

/**
 * https://github.com/rudty/nodekell#rangeinterval
 *
 * @param duration
 * @param endOrBegin
 * @param end
 * @param step
 */
export function rangeInterval(duration: number | Promise<number>, end: number): AsyncIterableIterator<number>;
export function rangeInterval(duration: () => (number | Promise<number>), end: number): AsyncIterableIterator<number>;

export function rangeInterval(duration: number | Promise<number>, begin: number, end: number): AsyncIterableIterator<number>;
export function rangeInterval(duration: () => (number | Promise<number>), begin: number, end: number): AsyncIterableIterator<number>;

export function rangeInterval(duration: number | Promise<number>, begin: number, end: number, step: number): AsyncIterableIterator<number>;
export function rangeInterval(duration: () => (number | Promise<number>), begin: number, end: number, step: number): AsyncIterableIterator<number>;

/**
 * https://github.com/rudty/nodekell#emptythen
 *
 * @param supply
 * @param iter
 */
export function emptyThen<T, Y>(supply: Promise<Iter<Y | Promise<Y>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: Iter<Y | Promise<Y>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: () => Promise<Iter<Y | Promise<Y>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: () => Iter<Y | Promise<Y>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;

export function emptyThen<T, Y>(supply: Promise<Iter<Y | Promise<Y>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: Iter<Y | Promise<Y>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: () => Promise<Iter<Y | Promise<Y>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function emptyThen<T, Y>(supply: () => Iter<Y | Promise<Y>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;

/**
 * https://github.com/rudty/nodekell#collect
 *
 * @param iter
 */
export function collect<T>(iter: Iter<T | Promise<T>>): Promise<T[]>;

/**
 * https://github.com/rudty/nodekell#collectmap
 *
 * @param iter
 */
export function collectMap<K, V>(iter: Iter<[K, V] | Promise<[K, V]>>): Promise<Map<K, V>>;

/**
 * https://github.com/rudty/nodekell#collectset
 *
 * @param iter
 */
export function collectSet<T>(iter: Iter<T | Promise<T>>): Promise<Set<T>>;

/**
 * https://github.com/rudty/nodekell#foreach
 *
 * @param f
 * @param iter
 */
export function forEach<T, Y>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => Promise<Y[]>;

export function forEach<T, Y>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): Promise<Y[]>;

/**
 * https://github.com/rudty/nodekell#distinctby
 *
 * @param f
 * @param iter
 */
export function distinctBy<T, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T>;

export function distinctBy<T, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#distinct
 *
 * @param iter
 */
export function distinct<T>(iter: Iter<T | Promise<T>>): AsyncIterableIterator<T>;

/**
 * https://github.com/rudty/nodekell#some
 *
 * @param f
 * @param iter
 */
export function some<T>(f: (elem: T) => (boolean | Promise<boolean>)): (iter: Iter<T | Promise<T>>) => Promise<boolean>;

export function some<T>(f: (elem: T) => (boolean | Promise<boolean>), iter: Iter<T | Promise<T>>): Promise<boolean>;

/**
 * https://github.com/rudty/nodekell#every
 *
 * @param f
 * @param iter
 */
export function every<T>(f: (elem: T) => (boolean | Promise<boolean>)): (iter: Iter<T | Promise<T>>) => Promise<boolean>;

export function every<T>(f: (elem: T) => (boolean | Promise<boolean>), iter: Iter<T | Promise<T>>): Promise<boolean>;

/**
 * https://github.com/rudty/nodekell#maxby
 *
 * @param f
 * @param iter
 */
/* export function maxBy<T extends object, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function maxBy<T extends object, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): Promise<T>; */

export function maxBy<T, Y>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function maxBy<T, Y>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#minby
 *
 * @param f
 * @param iter
 */
/* export function minBy<T extends object, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function minBy<T extends object, Y extends T[keyof T]>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): Promise<T>; */

export function minBy<T, Y>(f: (elem: T) => (Y | Promise<Y>)): (iter: Iter<T | Promise<T>>) => Promise<T>;

export function minBy<T, Y>(f: (elem: T) => (Y | Promise<Y>), iter: Iter<T | Promise<T>>): Promise<T>;

/**
 * https://github.com/rudty/nodekell#count
 *
 * @param iter
 */
export function count<T>(iter: Iter<T | Promise<T>>): Promise<number>;
// export function count<T>(iter: Iter<T>): Promise<number>;

/**
 * https://github.com/rudty/nodekell#sum
 *
 * @param iter
 */
export function sum(iter: string): Promise<string>;
export function sum(iter: Iter<string | Promise<string>>): Promise<string>;
export function sum(iter: Iter<number | Promise<number>>): Promise<number>;

/**
 * https://github.com/rudty/nodekell#max
 *
 * @param iter
 */
export function max(iter: string): Promise<string>;
export function max(iter: Iter<number | Promise<number>>): Promise<number>;
export function max(iter: Iter<string | Promise<string>>): Promise<string>;

/**
 * https://github.com/rudty/nodekell#min
 *
 * @param iter
 */
export function min(iter: string): Promise<string>;
export function min(iter: Iter<number | Promise<number>>): Promise<number>;
export function min(iter: Iter<string | Promise<string>>): Promise<string>;

/**
 * https://github.com/rudty/nodekell#average
 *
 * @param iter
 */
export function average(iter: Iter<number | Promise<number>>): Promise<number>;
// export function average(iter: Iter<number>): Promise<number>;

/**
 * https://github.com/rudty/nodekell#splitby
 *
 * @param f
 * @param any
 */
export function splitBy<T, Y>(f: (elem: T) => (Iter<Y> | Promise<Iter<Y>>)): (any: T) => AsyncIterableIterator<Y>;

export function splitBy<T, Y>(f: (elem: T) => (Iter<Y> | Promise<Iter<Y>>), any: T): AsyncIterableIterator<Y>;

/**
 * https://github.com/rudty/nodekell#errorthen
 *
 * @param supply
 * @param iter
 */
export function errorThen<T, Y>(supply: Promise<(error: any) => Iter<Y | Promise<Y>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: Promise<(error: any) => Promise<Iter<Y | Promise<Y>>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;

export function errorThen<T, Y>(supply: (error: any) => Iter<Y | Promise<Y>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: (error: any) => Promise<Iter<Y | Promise<Y>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;

export function errorThen<T, Y>(supply: Iter<Y | Promise<Y>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: Promise<Iter<Y | Promise<Y>>>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<T | Y>;

export function errorThen<T, Y>(supply: Promise<(error: any) => Promise<Iter<Y | Promise<Y>>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: Promise<(error: any) => Iter<Y | Promise<Y>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;

export function errorThen<T, Y>(supply: (error: any) => Promise<Iter<Y | Promise<Y>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: (error: any) => Iter<Y | Promise<Y>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;

export function errorThen<T, Y>(supply: Promise<Iter<Y | Promise<Y>>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;
export function errorThen<T, Y>(supply: Iter<Y | Promise<Y>>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<T | Y>;

/**
 * https://github.com/rudty/nodekell#then
 *
 * @param f
 * @param t
 */
export function then<T, Y>(f: (t: T) => Y): (t: T) => Y;

export function then<T, Y>(f: (t: T) => Y, t: T): Y;

/**
 * https://github.com/rudty/nodekell#buffer
 *
 * @param supply
 * @param iter
 */
export function buffer<T>(supply: number | Promise<number>): (iter: Iter<T | Promise<T>>) => AsyncIterableIterator<[T]>;

export function buffer<T>(supply: number | Promise<number>, iter: Iter<T | Promise<T>>): AsyncIterableIterator<[T]>;

//
// tsql.js
//

/**
 * https://github.com/rudty/nodekell#groupby
 *
 * **TODO**
 * - remove ExtractPromise
 *
 * @param f
 * @param iter
 */
/* export function groupBy<V extends object, K extends V[keyof V]>(f: (elem: V) => (K | Promise<K>)): (iter: Iter<V | Promise<V>>) => Promise<Map<K, V>>;

export function groupBy<V extends object, K extends V[keyof V]>(f: (elem: V) => (K | Promise<K>), iter: Iter<V | Promise<V>>): Promise<Map<K, V>>; */

export function groupBy<K, V>(f: (elem: ExtractPromise<V>) => (K | Promise<K>)): (iter: Iter<V> | Iter<V | Promise<V>>) => Promise<Map<K, ExtractPromise<V>[]>>;

export function groupBy<K, V>(f: (elem: ExtractPromise<V>) => (K | Promise<K>), iter: Iter<V> | Iter<V | Promise<V>>): Promise<Map<K, ExtractPromise<V>[]>>;

/**
 * https://github.com/rudty/nodekell#concat
 *
 * @param iter1
 * @param iter2
 */
export function concat<T, Y>(iter1: Iter<T | Promise<T>>): (iter2: Iter<Y | Promise<Y>>) => AsyncIterableIterator<T | Y>;

export function concat<T, Y>(iter1: Iter<T | Promise<T>>, iter2: Iter<Y | Promise<Y>>): AsyncIterableIterator<T | Y>;

export type InnerJoinObject<T1 extends object, T2 extends object> = { [P in keyof T1 | keyof T2]: P extends keyof T1 ? T1[P] : P extends keyof T2 ? T2[P] : unknown };
export type InnerJoinMap<T1, T2> = Map<T1 extends Map<infer K1, infer V1> ? T2 extends Map<infer K2, infer V2> ? K1 | K2 : unknown : unknown, T1 extends Map<infer K1, infer V1> ? T2 extends Map<infer K2, infer V2> ? V1 | V2 : unknown : unknown>;

// type InnerJoinObjectTest1 = InnerJoinObject<{ id: number; name: string; }, { id: number; length: number; }>;
// type InnerJoinObjectTest2 = InnerJoinObject<{ id: number; length: number; }, { id: number; name: string; }>;

// type InnerJoinMapTest1 = InnerJoinMap<Map<"string" | "number" | "object", (string | number | null)[]>, Map<"string" | "number", (string | number)[]>>;
// type InnerJoinMapTest2 = InnerJoinMap<Map<"string" | "number", (string | number)[]>, Map<"string" | "number" | "object", (string | number | null)[]>>;

// type IsCustomIter<T> = T extends object ? T extends Iter<any> ? T : unknown : unknown;
// type NonUnknowable<T, Y> = unknown extends T ? Y : T;

/**
 * https://github.com/rudty/nodekell#innerjoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
// export function innerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1>) => (iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

// export function innerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1>, iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

export function innerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1>, Iter<T2>, AsyncIterableIterator<InnerJoinMap<T1, T2>>>;

export function innerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1>): (iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

export function innerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1>, iter2: Iter<T2>): AsyncIterableIterator<InnerJoinMap<T1, T2>>;

// export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: NonUnknowable<IsCustomIter<T1>, T1>, elem2: NonUnknowable<IsCustomIter<T2>, T2>) => (boolean | Promise<boolean>), iter1: Iter<NonUnknowable<IsCustomIter<T1 | Promise<T1>>, T1 | Promise<T1>>>, iter2: Iter<NonUnknowable<IsCustomIter<T2 | Promise<T2>>, T2 | Promise<T2>>>): AsyncIterableIterator<unknown extends IsCustomIter<T1> ? InnerJoinObject<T1, T2> : InnerJoinObject<T1, T2>>;

// export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: NonUnknowable<IsCustomIter<T1>, T1>, elem2: NonUnknowable<IsCustomIter<T2>, T2>) => (boolean | Promise<boolean>), iter1: Iter<NonUnknowable<IsCustomIter<T1 | Promise<T1>>, T1 | Promise<T1>>>, iter2: Iter<NonUnknowable<IsCustomIter<T2 | Promise<T2>>, T2 | Promise<T2>>>): AsyncIterableIterator<unknown extends IsCustomIter<T1> ? InnerJoinObject<T1, T2> : T1 | T2>;

// export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: NonUnknowable<IsCustomIter<T1>, T1>, elem2: NonUnknowable<IsCustomIter<T2>, T2>) => (boolean | Promise<boolean>), iter1: Iter<NonUnknowable<IsCustomIter<T1 | Promise<T1>>, T1 | Promise<T1>>>, iter2: Iter<NonUnknowable<IsCustomIter<T2 | Promise<T2>>, T2 | Promise<T2>>>): AsyncIterableIterator<unknown extends IsCustomIter<T1> ? InnerJoinObject<T1, T2> : T1 | T2>;

// export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

// export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: T2, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<InnerJoinObject<T1, T2>>>;

export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

export function innerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<InnerJoinObject<T1, T2>>;

// export function innerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

// export function innerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function innerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T1 | T2>>;

export function innerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function innerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T1 | T2>;

/**
 * https://github.com/rudty/nodekell#leftinnerjoin
 *
 * as innerJoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
// export function leftInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1>) => (iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

// export function leftInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1>, iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

export function leftInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1>, Iter<T2>, AsyncIterableIterator<InnerJoinMap<T1, T2>>>;

export function leftInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1>): (iter2: Iter<T2>) => AsyncIterableIterator<InnerJoinMap<T1, T2>>;

export function leftInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1>, iter2: Iter<T2>): AsyncIterableIterator<InnerJoinMap<T1, T2>>;

// export function leftInnerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

// export function leftInnerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

export function leftInnerJoin<T1 extends object, T2 extends object>(f: (elem1: T2, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<InnerJoinObject<T1, T2>>>;

export function leftInnerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T1, T2>>;

export function leftInnerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<InnerJoinObject<T1, T2>>;

// export function leftInnerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

// export function leftInnerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function leftInnerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T1 | T2>>;

export function leftInnerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function leftInnerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T1 | T2>;

/**
 * https://github.com/rudty/nodekell#rightinnerjoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
export function rightInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<InnerJoinMap<T2, T1>>>;

export function rightInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinMap<T2, T1>>;

export function rightInnerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<InnerJoinMap<T2, T1>>;

// export function rightInnerJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T2, T1>>;

// export function rightInnerJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T2, T1>>;

export function rightInnerJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<InnerJoinObject<T2, T1>>>;

export function rightInnerJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<InnerJoinObject<T2, T1>>;

export function rightInnerJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<InnerJoinObject<T2, T1>>;

// export function rightInnerJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

// export function rightInnerJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

export function rightInnerJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T2 | T1>>;

export function rightInnerJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

export function rightInnerJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T2 | T1>;

/*
  outerJoinMap K2와 V2에 대해 옵셔널(optional)을 적용하고 싶은데 방법 없나
*/
export type OuterJoinObject<T1 extends object, T2 extends object> = { [P in keyof T1 | keyof T2]: P extends keyof T1 ? T1[P] : P extends keyof T2 ? T2[P] | undefined : unknown };
export type OuterJoinMap<T1, T2> = Map<T1 extends Map<infer K1, infer V1> ? T2 extends Map<infer K2, infer V2> ? K1 | K2 : unknown : unknown, T1 extends Map<infer K1, infer V1> ? T2 extends Map<infer K2, infer V2> ? V1 | V2 : unknown : unknown>;

// type OuterJoinObjectTest = OuterJoinObject<{ id: number; value: number; }, { id: number; name: string; }>;
// type OuterJoinMapTest = OuterJoinMap<Map<string | number, string | number>, Map<string, number>>;

/*
ExpectType OuterJoinTest
{
  id: number;
  value: number;
  name: string | undefined;
}
*/

/**
 * https://github.com/rudty/nodekell#outerjoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
export function outerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinMap<T1, T2>>>;

export function outerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinMap<T1, T2>>;

export function outerJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinMap<T1, T2>>;

// export function outerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

// export function outerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

export function outerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinObject<T1, T2>>>;

export function outerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

export function outerJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinObject<T1, T2>>;

// export function outerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

// export function outerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function outerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T1 | T2>>;

export function outerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function outerJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T1 | T2>;

/**
 * https://github.com/rudty/nodekell#leftouterjoin
 *
 * as outerJoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
export function leftOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinMap<T1, T2>>>;

export function leftOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinMap<T1, T2>>;

export function leftOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinMap<T1, T2>>;

// export function leftOuterJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

// export function leftOuterJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

export function leftOuterJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinObject<T1, T2>>>;

export function leftOuterJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T1, T2>>;

export function leftOuterJoin<T1 extends object, T2 extends object>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinObject<T1, T2>>;

// export function leftOuterJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

// export function leftOuterJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function leftOuterJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T1 | T2>>;

export function leftOuterJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T1 | T2>;

export function leftOuterJoin<T1, T2>(f: (elem1: T1, elem2: T2) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T1 | T2>;

/**
 * https://github.com/rudty/nodekell#rightouterjoin
 *
 * @param f
 * @param iter1
 * @param iter2
 */
export function rightOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinMap<T2, T1>>>;

export function rightOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinMap<T2, T1>>;

export function rightOuterJoin<T1 extends Map<ExtractMap<T1>[0], ExtractMap<T1>[1]>, T2 extends Map<ExtractMap<T2>[0], ExtractMap<T2>[1]>>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinMap<T2, T1>>;

// export function rightOuterJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T2, T1>>;

// export function rightOuterJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T2, T1>>;

export function rightOuterJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<OuterJoinObject<T2, T1>>>;

export function rightOuterJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<OuterJoinObject<T2, T1>>;

export function rightOuterJoin<T1 extends object, T2 extends object>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<OuterJoinObject<T2, T1>>;

// export function rightOuterJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): (iter1: Iter<T1 | Promise<T1>>) => (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

// export function rightOuterJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

export function rightOuterJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>)): CurriedFunction2<Iter<T1 | Promise<T1>>, Iter<T2 | Promise<T2>>, AsyncIterableIterator<T2 | T1>>;

export function rightOuterJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>): (iter2: Iter<T2 | Promise<T2>>) => AsyncIterableIterator<T2 | T1>;

export function rightOuterJoin<T1, T2>(f: (elem2: T2, elem1: T1) => (boolean | Promise<boolean>), iter1: Iter<T1 | Promise<T1>>, iter2: Iter<T2 | Promise<T2>>): AsyncIterableIterator<T2 | T1>;
