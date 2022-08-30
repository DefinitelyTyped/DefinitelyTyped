// Type definitions for chillout 5.0
// Project: https://github.com/polygonplanet/chillout
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

// tslint:disable:no-unnecessary-generics

export as namespace chillout;

export const version: string;

/**
 * If you want to stop the loops, return this value. It works like the `break` statement in JavaScript `for` statement.
 */
export const StopIteration: unique symbol;

// tslint:disable-next-line: void-return
export type DefaultCallbackReturn = typeof StopIteration | void | Promise<unknown>;

/**
 * Executes a provided function once per array/object element.
 * The iteration will break if the callback function returns `chillout.StopIteration`, or an error occurs.
 * This method can be called like JavaScript `Array.forEach`.
 *
 * @param obj Target array/object.
 * @param callback Function to execute for each element, taking three arguments:
 * - value: The current element being processed in the array/object.
 * - key: The key of the current element being processed in the array/object.
 * - obj: The array/object that `forEach` is being applied to.
 * @param context Value to use as `this` when executing callback.
 *
 * @example
 * import * as chillout from 'chillout';
 *
 * // Example of array iteration:
 * const values = ['a', 'b', 'c'];
 *
 * chillout.forEach(values, (value, key, obj) => {
 *   console.log(value);
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 'a'
 * // 'b'
 * // 'c'
 * // 'done'
 *
 * // Example of object iteration:
 * const obj = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * };
 *
 * chillout.forEach(obj, (value, key, obj) => {
 *   console.log(key + ':' + value);
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 'a:1'
 * // 'b:2'
 * // 'c:3'
 * // 'done'
 */
export function forEach<TObject extends ArrayLike<unknown> | object, TContext = unknown>(
    ...args: ForEachArgs<TObject, TContext>
): Promise<null | undefined>;

export type ForEachArgs<
    TObject extends ArrayLike<unknown> | object,
    TContext,
    TCallbackReturn extends DefaultCallbackReturn = DefaultCallbackReturn,
> = TObject extends ArrayLike<unknown>
    ? [
          arr: TObject,
          callback: (
              this: TContext,
              value: TObject extends ArrayLike<infer T> ? T : never,
              key: number,
              arr: TObject,
          ) => TCallbackReturn,
          context?: TContext,
      ]
    : [
          obj: TObject,
          callback: (
              this: TContext,
              value: TObject[keyof TObject],
              key: keyof TObject,
              obj: TObject,
          ) => TCallbackReturn,
          context?: TContext,
      ];

/**
 * Executes a provided function the specified number times.
 * The iteration will break if the callback function returns `chillout.StopIteration`, or an error occurs.
 * This method can be called like JavaScript `for` statement.
 *
 * @param count The number of times or object for execute the function.
 * @param callback Function to execute for each times, taking one argument:
 * - i: The current number
 * @param context Value to use as `this` when executing callback.
 *
 * @example
 * import * as chillout from 'chillout';
 *
 * // Example using number of iterations:
 * chillout.repeat(5, (i) => {
 *   console.log(i);
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 'done'
 *
 * // Example specifying a RepeatDescriptor object:
 * chillout.repeat({ start: 10, step: 2, done: 20 }, (i) => {
 *   console.log(i);
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 10
 * // 12
 * // 14
 * // 16
 * // 18
 * // 'done'
 */
export function repeat<TContext = unknown>(...args: RepeatArgs<TContext>): Promise<null | undefined>;

export type RepeatArgs<TContext, TCallbackReturn extends DefaultCallbackReturn = DefaultCallbackReturn> = [
    count: number | RepeatDescriptor,
    callback: (this: TContext, i: number) => TCallbackReturn,
    context?: TContext,
];

export interface RepeatDescriptor {
    /**
     * The number with which to start the repetition.
     * @default 0
     */
    start?: number;
    /**
     * The number with which each repetition step should be increased.
     * @default 1
     */
    step?: number;
    /**
     * The number when repetition should be stopped.
     */
    done: number;
}

/**
 * Executes a provided function until the `callback` returns `chillout.StopIteration`, or an error occurs.
 * This method can be called like JavaScript `while (true) { ... }` statement.
 *
 * @param callback The function that is executed for each iteration.
 * @param context Value to use as `this` when executing callback.
 *
 * @example
 * import * as chillout from 'chillout';
 *
 * let i = 0;
 * chillout.until(() => {
 *   console.log(i);
 *   i++;
 *   if (i === 5) {
 *     return chillout.StopIteration; // break loop
 *   }
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 'done'
 */
export function until<TContext = unknown>(...args: UntilArgs<TContext>): Promise<null | undefined>;

export type UntilArgs<TContext, TCallbackReturn extends DefaultCallbackReturn = DefaultCallbackReturn> = [
    callback: (this: TContext) => TCallbackReturn,
    context?: TContext,
];

/**
 * Executes a provided function until the `callback` returns `chillout.StopIteration`, or an error occurs.
 * This method can be called like JavaScript `while (true) { ... }` statement, and it works same as `until`,
 * but it executes tasks with more slowly interval than `until` to reduce CPU load.
 * This method is useful when you want to wait until some processing is done.
 *
 * @param callback The function that is executed for each iteration.
 * @param context Value to use as `this` when executing callback.
 *
 * @example
 * import * as chillout from 'chillout';
 *
 * chillout.waitUntil(() => {
 *   // Wait until the DOM body element is loaded
 *   if (document.body) {
 *     return chillout.StopIteration; // break loop
 *   }
 * }).then(() => {
 *   document.body.innerHTML += 'body loaded';
 * });
 */
export function waitUntil<TContext = unknown>(...args: UntilArgs<TContext>): Promise<null | undefined>;

/**
 * Iterates the iterable objects, similar to the `for-of` statement.
 * Executes a provided function once per element.
 * The iteration will break if the callback function returns `chillout.StopIteration`, or an error occurs.
 *
 * @param iterable Target iterable object.
 * @param callback Function to execute for each element, taking one argument:
 * - value: The value the iterator produces on each iteration.
 * @param context Value to use as `this` when executing callback.
 *
 * @example
 * import * as chillout from 'chillout';
 *
 * chillout.forOf([1, 2, 3], (value) => {
 *   console.log(value);
 * }).then(() => {
 *   console.log('done');
 * });
 *
 * // 1
 * // 2
 * // 3
 * // 'done'
 */
export function forOf<TValue, TContext = unknown>(...args: ForOfArgs<TValue, TContext>): Promise<null | undefined>;

export type ForOfArgs<TValue, TContext, TCallbackReturn extends DefaultCallbackReturn = DefaultCallbackReturn> = [
    iterable: Iterable<TValue>,
    callback: (this: TContext, value: TValue) => TCallbackReturn,
    context?: TContext,
];

export interface ChilloutIterator<TValue, TReturn = null> {
    next(): readonly [false, typeof StopIteration | TValue] | readonly [true, TReturn];
}

export function iterate<TReturn>(
    iterator: ChilloutIterator<unknown, TReturn>,
    interval?: number,
): Promise<TReturn | undefined>;

export const iterator: {
    forEach<
        TObject extends ArrayLike<unknown> | object,
        TCallbackReturn extends DefaultCallbackReturn,
        TContext = unknown,
    >(
        ...args: ForEachArgs<TObject, TContext, TCallbackReturn>
    ): ChilloutIterator<TCallbackReturn>;
    repeat<TCallbackReturn extends DefaultCallbackReturn, TContext = unknown>(
        ...args: RepeatArgs<TContext, TCallbackReturn>
    ): ChilloutIterator<TCallbackReturn>;
    until<TCallbackReturn extends DefaultCallbackReturn, TContext = unknown>(
        ...args: UntilArgs<TContext, TCallbackReturn>
    ): ChilloutIterator<TCallbackReturn>;
    forOf<TValue, TCallbackReturn extends DefaultCallbackReturn, TContext = unknown>(
        ...args: ForOfArgs<TValue, TContext, TCallbackReturn>
    ): ChilloutIterator<TCallbackReturn>;
};

export function isThenable(value: unknown): value is PromiseLike<unknown>;
export function isArrayLike(value: unknown): value is ArrayLike<unknown>;

export function nextTick(task: () => any): void;
