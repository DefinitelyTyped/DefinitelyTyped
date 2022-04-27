// Type definitions for Async 3.2
// Project: https://github.com/caolan/async, https://caolan.github.io/async
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Arseniy Maximov <https://github.com/kern0>
//                 Joe Herman <https://github.com/Penryn>
//                 Angus Fenying <https://github.com/fenying>
//                 Pascal Martin <https://github.com/pascalmartin>
//                 Etienne Rossignon <https://github.com/erossignon>
//                 Lifeng Zhu <https://github.com/Juliiii>
//                 Tümay Çeber <https://github.com/brendtumi>
//                 Andrew Pensinger <https://github.com/apnsngr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace async;

export interface Dictionary<T> { [key: string]: T; }
export type IterableCollection<T> = T[] | IterableIterator<T> | Dictionary<T>;

export interface ErrorCallback<E = Error> { (err?: E | null): void; }
export interface AsyncBooleanResultCallback<E = Error> { (err?: E | null, truthValue?: boolean): void; }
export interface AsyncResultCallback<T, E = Error> { (err?: E | null, result?: T): void; }
export interface AsyncResultArrayCallback<T, E = Error> { (err?: E | null, results?: Array<T | undefined>): void; }
export interface AsyncResultObjectCallback<T, E = Error> { (err: E | undefined, results: Dictionary<T | undefined>): void; }

export interface AsyncFunction<T, E = Error> { (callback: (err?: E | null, result?: T) => void): void; }
export interface AsyncFunctionEx<T, E = Error> { (callback: (err?: E | null, ...results: T[]) => void): void; }
export interface AsyncIterator<T, E = Error> { (item: T, callback: ErrorCallback<E>): void; }
export interface AsyncForEachOfIterator<T, E = Error> { (item: T, key: number|string, callback: ErrorCallback<E>): void; }
export interface AsyncResultIterator<T, R, E = Error> { (item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncResultIteratorPromise<T, R> { (item: T): Promise<R>; }
export interface AsyncMemoIterator<T, R, E = Error> { (memo: R | undefined, item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncBooleanIterator<T, E = Error> { (item: T, callback: AsyncBooleanResultCallback<E>): void; }

export interface AsyncWorker<T, E = Error> { (task: T, callback: ErrorCallback<E>): void; }
export interface AsyncVoidFunction<E = Error> { (callback: ErrorCallback<E>): void; }

export type AsyncAutoTasks<R extends Dictionary<any>, E> = { [K in keyof R]: AsyncAutoTask<R[K], R, E> };
export type AsyncAutoTask<R1, R extends Dictionary<any>, E> = AsyncAutoTaskFunctionWithoutDependencies<R1, E> | Array<keyof R | AsyncAutoTaskFunction<R1, R, E>>;
export interface AsyncAutoTaskFunctionWithoutDependencies<R1, E = Error> { (cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }
export interface AsyncAutoTaskFunction<R1, R extends Dictionary<any>, E = Error> { (results: R, cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }

export interface DataContainer<T> {
    data: T;
    priority: number;
}

export interface CallbackContainer {
    callback: Function;
}

export interface PriorityContainer {
    priority: number;
}

export interface QueueObject<T> {
    /**
     * Returns the number of items waiting to be processed.
     */
    length(): number;

    /**
     * Indicates whether or not any items have been pushed and processed by the queue.
     */
    started: boolean;

    /**
     * Returns the number of items currently being processed.
     */
    running(): number;

    /**
     * Returns an array of items currently being processed.
     */
    workersList<TWorker extends DataContainer<T>, CallbackContainer>(): TWorker[];

    /**
     * Returns false if there are items waiting or being processed, or true if not.
     */
    idle(): boolean;

    /**
     * An integer for determining how many worker functions should be run in parallel.
     * This property can be changed after a queue is created to alter the concurrency on-the-fly.
     */
    concurrency: number;

    /**
     * An integer that specifies how many items are passed to the worker function at a time.
     * Only applies if this is a cargo object
     */
    payload: number;

    /**
     * Add a new task to the queue. Calls `callback` once the worker has finished
     * processing the task.
     *
     * Instead of a single task, a tasks array can be submitted.
     * The respective callback is used for every task in the list.
     */
    push<R>(task: T | T[]): Promise<R>;
    push<R, E = Error>(task: T | T[], callback: AsyncResultCallback<R, E>): void;

    /**
     * Add a new task to the front of the queue
     */
    unshift<R>(task: T | T[]): Promise<R>;
    unshift<R, E = Error>(task: T | T[], callback: AsyncResultCallback<R, E>): void;

    /**
     * The same as `q.push`, except this returns a promise that rejects if an error occurs.
     * The `callback` arg is ignored
     */
    pushAsync<R>(task: T | T[]): Promise<R>;

    /**
     * The same as `q.unshift`, except this returns a promise that rejects if an error occurs.
     * The `callback` arg is ignored
     */
    unshiftAsync<R>(task: T | T[]): Promise<R>;

    /**
     * Remove items from the queue that match a test function.
     * The test function will be passed an object with a `data` property,
     * and a `priority` property, if this is a `priorityQueue` object.
     */
    remove(filter: (node: DataContainer<T>) => boolean): void;

    /**
     * A function that sets a callback that is called when the number of
     * running workers hits the `concurrency` limit, and further tasks will be
     * queued.
     *
     * If the callback is omitted, `q.saturated()` returns a promise
     * for the next occurrence.
     */
    saturated(): Promise<void>;
    saturated(handler: () => void): void;

    /**
     * A function that sets a callback that is called when the number
     * of running workers is less than the `concurrency` & `buffer` limits,
     * and further tasks will not be queued
     *
     * If the callback is omitted, `q.unsaturated()` returns a promise
     * for the next occurrence.
     */
    unsaturated(): Promise<void>;
    unsaturated(handler: () => void): void;

    /**
     * A minimum threshold buffer in order to say that the `queue` is `unsaturated`.
     */
    buffer: number;

    /**
     * A function that sets a callback that is called when the last item from the `queue`
     * is given to a `worker`.
     *
     * If the callback is omitted, `q.empty()` returns a promise for the next occurrence.
     */
    empty(): Promise<void>;
    empty(handler: () => void): void;

    /**
     * A function that sets a callback that is called when the last item from
     * the `queue` has returned from the `worker`.
     *
     * If the callback is omitted, `q.drain()` returns a promise for the next occurrence.
     */
    drain(): Promise<void>;
    drain(handler: () => void): void;

    /**
     * A function that sets a callback that is called when a task errors.
     *
     * If the callback is omitted, `q.error()` returns a promise that rejects on the next error.
     */
    error(): Promise<never>;
    error(handler: (error: Error, task: T) => void): void;

    /**
     * A boolean for determining whether the queue is in a paused state.
     */
    paused: boolean;

    /**
     * A function that pauses the processing of tasks until `q.resume()` is called.
     */
    pause(): void;

    /**
     * A function that resumes the processing of queued tasks when the queue
     * is paused.
     */
    resume(): void;

    /**
     * A function that removes the drain callback and empties remaining tasks
     * from the queue forcing it to go idle. No more tasks should be pushed to
     * the queue after calling this function.
     */
    kill(): void;
}

/**
 * A priorityQueue object to manage the tasks.
 *
 * There are two differences between queue and priorityQueue objects:
 * - `push(task, priority, [callback])` — priority should be a number. If an array of tasks is given, all tasks will be assigned the same priority.
 * - The `unshift` method was removed.
 */
// FIXME: can not use Omit due to ts version restriction. Replace Pick with Omit, when ts 3.5+ will be allowed
export interface AsyncPriorityQueue<T> extends Pick<QueueObject<T>, Exclude<keyof QueueObject<T>, 'push' | 'unshift'>> {
    push<R>(task: T | T[], priority?: number): Promise<R>;
    push<R, E = Error>(task: T | T[], priority: number, callback: AsyncResultCallback<R, E>): void;
}

/**
 * @deprecated this is a type that left here for backward compatibility.
 * Please use QueueObject instead
 */
export type AsyncQueue<T> = QueueObject<T>;

/**
 * @deprecated this is a type that left here for backward compatibility.
 * Please use QueueObject instead
 */
export type AsyncCargoQueue<T = any> = QueueObject<T>;

// Collections
export function each<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncIterator<T, E>, callback: ErrorCallback<E>): void;
export function each<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncIterator<T, E>): Promise<void>;
export const eachSeries: typeof each;
export function eachLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncIterator<T, E>, callback: ErrorCallback<E>): void;
export function eachLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncIterator<T, E>): Promise<void>;
export const forEach: typeof each;
export const forEachSeries: typeof each;
export const forEachLimit: typeof eachLimit;
export function forEachOf<T, E = Error>(obj: IterableCollection<T>, iterator: AsyncForEachOfIterator<T, E>, callback: ErrorCallback<E>): void;
export function forEachOf<T, E = Error>(obj: IterableCollection<T>, iterator: AsyncForEachOfIterator<T, E>): Promise<void>;
export const forEachOfSeries: typeof forEachOf;
export function forEachOfLimit<T, E = Error>(obj: IterableCollection<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback: ErrorCallback<E>): void;
export function forEachOfLimit<T, E = Error>(obj: IterableCollection<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>): Promise<void>;
export const eachOf: typeof forEachOf;
export const eachOfSeries: typeof forEachOf;
export const eachOfLimit: typeof forEachOfLimit;
export function map<T, R, E = Error>(
    arr: T[] | IterableIterator<T> | Dictionary<T>,
    iterator: (AsyncResultIterator<T, R, E> | AsyncResultIteratorPromise<T, R>),
    callback: AsyncResultArrayCallback<R, E>
    ): void;
export function map<T, R, E = Error>(
    arr: T[] | IterableIterator<T> | Dictionary<T>,
    iterator: (AsyncResultIterator<T, R, E> | AsyncResultIteratorPromise<T, R>)
    ): Promise<R[]>;

export const mapSeries: typeof map;
export function mapLimit<T, R, E = Error>(
    arr: IterableCollection<T>,
    limit: number, iterator: (AsyncResultIterator<T, R, E> | AsyncResultIteratorPromise<T, R>),
    callback: AsyncResultArrayCallback<R, E>
    ): void;
export function mapLimit<T, R, E = Error>(
    arr: IterableCollection<T>,
    limit: number, iterator: (AsyncResultIterator<T, R, E> | AsyncResultIteratorPromise<T, R>)
    ): Promise<R[]>;

export function mapValuesLimit<T, R, E = Error>(
    obj: Dictionary<T>,
    limit: number,
    iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void,
    callback: AsyncResultObjectCallback<R, E>
    ): void;
export function mapValuesLimit<T, R, E = Error>(
    obj: Dictionary<T>,
    limit: number,
    iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void
): Promise<R>;

export function mapValues<T, R, E = Error>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
export function mapValues<T, R, E = Error>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void): Promise<R>;
export const mapValuesSeries: typeof mapValues;
export function filter<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function filter<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>): Promise<T[]>;
export const filterSeries: typeof filter;
export function filterLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function filterLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>): Promise<T[]>;
export const select: typeof filter;
export const selectSeries: typeof filter;
export const selectLimit: typeof filterLimit;
export const reject: typeof filter;
export const rejectSeries: typeof filter;
export const rejectLimit: typeof filterLimit;
export function reduce<T, R, E = Error>(arr: T[] | IterableIterator<T>, memo: R, iterator: AsyncMemoIterator<T, R, E>, callback: AsyncResultCallback<R, E>): void;
export function reduce<T, R, E = Error>(arr: T[] | IterableIterator<T>, memo: R, iterator: AsyncMemoIterator<T, R, E>): Promise<R>;
export const inject: typeof reduce;
export const foldl: typeof reduce;
export const reduceRight: typeof reduce;
export const foldr: typeof reduce;
export function detect<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback: AsyncResultCallback<T, E>): void;
export function detect<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>): Promise<T>;
export const detectSeries: typeof detect;
export function detectLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export const find: typeof detect;
export const findSeries: typeof detect;
export const findLimit: typeof detectLimit;
export function sortBy<T, V, E = Error>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export function some<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const someSeries: typeof some;
export function someLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const any: typeof some;
export const anySeries: typeof someSeries;
export const anyLimit: typeof someLimit;
export function every<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const everySeries: typeof every;
export function everyLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const all: typeof every;
export const allSeries: typeof every;
export const allLimit: typeof everyLimit;

export function concat<T, R, E = Error>(arr: IterableCollection<T>, iterator: AsyncResultIterator<T, R[], E>, callback: AsyncResultArrayCallback<R, E>): void;
export function concat<T, R, E = Error>(arr: IterableCollection<T>, iterator: AsyncResultIterator<T, R[], E>): Promise<R[]>;
export function concatLimit<T, R, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncResultIterator<T, R[], E>, callback: AsyncResultArrayCallback<R, E>): void;
export function concatLimit<T, R, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncResultIterator<T, R[], E>): Promise<R[]>;
export const concatSeries: typeof concat;

// Control Flow
export function series<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
export function series<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function series<T, R, E = Error>(tasks: Array<AsyncFunction<T, E>> | Dictionary<AsyncFunction<T, E>>): Promise<R>;
export function parallel<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallel<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallel<T, R, E = Error>(tasks: Array<AsyncFunction<T, E>> | Dictionary<AsyncFunction<T, E>>): Promise<R>;
export function parallelLimit<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallelLimit<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallelLimit<T, R, E = Error>(tasks: Array<AsyncFunction<T, E>> | Dictionary<AsyncFunction<T, E>>, limit: number): Promise<R>;

export function whilst<T, E = Error>(
    test: (cb: AsyncBooleanResultCallback) => void,
    fn: AsyncFunctionEx<T, E>,
    callback: AsyncFunctionEx<T, E>
): void;
export function whilst<T, R, E = Error>(
    test: (cb: AsyncBooleanResultCallback) => void,
    fn: AsyncFunctionEx<T, E>
): Promise<R>;
export function doWhilst<T, E = Error>(
    fn: AsyncFunctionEx<T, E>,
    test: (/* ...results: T[], */ cb: AsyncBooleanResultCallback) => void,
    callback: AsyncFunctionEx<T, E>
): void;
export function doWhilst<T, R, E = Error>(
    fn: AsyncFunctionEx<T, E>,
    test: (/* ...results: T[], */ cb: AsyncBooleanResultCallback) => void
): Promise<R>;
export function until<T, E = Error>(
    test: (cb: AsyncBooleanResultCallback) => void,
    fn: AsyncFunctionEx<T, E>,
    callback: AsyncFunctionEx<T, E>
): void;
export function until<T, R, E = Error>(
    test: (cb: AsyncBooleanResultCallback) => void,
    fn: AsyncFunctionEx<T, E>
): Promise<R>;
export function doUntil<T, E = Error>(
    fn: AsyncFunctionEx<T, E>,
    test: (/* ...results: T[], */ cb: AsyncBooleanResultCallback) => void,
    callback: AsyncFunctionEx<T, E>
): void;
export function doUntil<T, R, E = Error>(
    fn: AsyncFunctionEx<T, E>,
    test: (/* ...results: T[], */ cb: AsyncBooleanResultCallback) => void
): Promise<R>;

export function during<E = Error>(test: (testCallback: AsyncBooleanResultCallback<E>) => void, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doDuring<E = Error>(fn: AsyncVoidFunction<E>, test: (testCallback: AsyncBooleanResultCallback<E>) => void, callback: ErrorCallback<E>): void;
export function forever<E = Error>(next: (next: ErrorCallback<E>) => void, errBack: ErrorCallback<E>): void;
export function waterfall<T, E = Error>(tasks: Function[], callback?: AsyncResultCallback<T, E>): void;
export function compose(...fns: Function[]): Function;
export function seq(...fns: Function[]): Function;
export function applyEach(fns: Function[], ...argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function applyEachSeries(fns: Function[], ...argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function queue<T, E = Error>(worker: AsyncWorker<T, E>, concurrency?: number): QueueObject<T>;
export function queue<T, R, E = Error>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): QueueObject<T>;
export function priorityQueue<T, E = Error>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncPriorityQueue<T>;
export function cargo<T, E = Error>(worker: AsyncWorker<T[], E>, payload?: number): QueueObject<T>;
export function cargoQueue<T, E = Error>(
    worker: AsyncWorker<T[], E>,
    concurrency?: number,
    payload?: number,
): QueueObject<T>;
export function auto<R extends Dictionary<any>, E = Error>(tasks: AsyncAutoTasks<R, E>, concurrency?: number): Promise<R>;
export function auto<R extends Dictionary<any>, E = Error>(tasks: AsyncAutoTasks<R, E>, concurrency: number, callback: AsyncResultCallback<R, E>): void;
export function auto<R extends Dictionary<any>, E = Error>(tasks: AsyncAutoTasks<R, E>, callback: AsyncResultCallback<R, E>): void;
export function autoInject<E = Error>(tasks: any, callback?: AsyncResultCallback<any, E>): void;

export interface RetryOptions<E> {
    times?: number | undefined;
    interval?: number | ((retryCount: number) => number) | undefined;
    errorFilter?: ((error: E) => boolean) | undefined;
}
export function retry<T, E = Error>(
    task: (() => Promise<T>) | ((callback: AsyncResultCallback<T, E>) => void),
): Promise<T>;
export function retry<T, E = Error>(
    opts: number | RetryOptions<E>,
    task: (() => Promise<T>) | ((callback: AsyncResultCallback<T, E>) => void),
): Promise<T>;
export function retry<T, E = Error>(
    task: (() => Promise<T>) | ((callback: AsyncResultCallback<T, E>) => void),
    callback: AsyncResultCallback<T, E>,
): void;
export function retry<T, E = Error>(
    opts: number | RetryOptions<E>,
    task: (() => Promise<T>) | ((callback: AsyncResultCallback<T, E>) => void),
    callback: AsyncResultCallback<T, E>,
): void;

export function retryable<T, E = Error>(task: AsyncFunction<T, E>): AsyncFunction<T, E>;
export function retryable<T, E = Error>(
    opts: number | (RetryOptions<E> & { arity?: number | undefined }),
    task: AsyncFunction<T, E>,
): AsyncFunction<T, E>;
export function apply<E = Error>(fn: Function, ...args: any[]): AsyncFunction<any, E>;
export function nextTick(callback: Function, ...args: any[]): void;
export const setImmediate: typeof nextTick;

export function reflect<T, E = Error>(fn: AsyncFunction<T, E>): (callback: (err: null, result: {error?: E | undefined, value?: T | undefined}) => void) => void;
export function reflectAll<T, E = Error>(tasks: Array<AsyncFunction<T, E>>): Array<(callback: (err: null, result: {error?: E | undefined, value?: T | undefined}) => void) => void>;

export function timeout<T, E = Error>(fn: AsyncFunction<T, E>, milliseconds: number, info?: any): AsyncFunction<T, E>;
export function timeout<T, R, E = Error>(fn: AsyncResultIterator<T, R, E>, milliseconds: number, info?: any): AsyncResultIterator<T, R, E>;

export function times<T, E = Error>(n: number, iterator: (AsyncResultIterator<number, T, E> | AsyncResultIteratorPromise<number, T>), callback: AsyncResultArrayCallback<T, E>): void;
export function times<T, E = Error>(n: number, iterator: (AsyncResultIterator<number, T, E> | AsyncResultIteratorPromise<number, T>)): Promise<T>;

export const timesSeries: typeof times;
export function timesLimit<T, E = Error>(
    n: number,
    limit: number,
    iterator: (AsyncResultIterator<number, T, E> | AsyncResultIteratorPromise<number, T>),
    callback: AsyncResultArrayCallback<T, E>
    ): void;
export function timesLimit<T, E = Error>(
    n: number,
    limit: number,
    iterator: (AsyncResultIterator<number, T, E> | AsyncResultIteratorPromise<number, T>)
    ): Promise<T>;

export function transform<T, R, E = Error>(arr: T[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;
export function transform<T, R, E = Error>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;

export function transform<T, R, E = Error>(
    arr: {[key: string]: T},
    iteratee: (acc: {[key: string]: R}, item: T, key: string, callback: (error?: E) => void) => void,
    callback?: AsyncResultObjectCallback<T, E>
    ): void;

export function transform<T, R, E = Error>(
    arr: {[key: string]: T},
    acc: {[key: string]: R},
    iteratee: (acc: {[key: string]: R}, item: T, key: string, callback: (error?: E) => void) => void,
    callback?: AsyncResultObjectCallback<T, E>
    ): void;

export function race<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback: AsyncResultCallback<T, E>): void;

// Utils
export function memoize(fn: Function, hasher?: Function): Function;
export function unmemoize(fn: Function): Function;
export function ensureAsync(fn: (... argsAndCallback: any[]) => void): Function;
export function constant(...values: any[]): AsyncFunction<any>;
export function asyncify(fn: Function): (...args: any[]) => any;
export function wrapSync(fn: Function): Function;
export function log(fn: Function, ...args: any[]): void;
export function dir(fn: Function, ...args: any[]): void;
