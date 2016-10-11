// Type definitions for Async 2.0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Arseniy Maximov <https://github.com/kern0>, Joe Herman <https://github.com/Penryn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dictionary<T> { [key: string]: T; }

interface ErrorCallback<T> { (err?: T): void; }
interface AsyncResultCallback<T, E> { (err: E, result: T): void; }
interface AsyncResultArrayCallback<T, E> { (err: E, results: T[]): void; }
interface AsyncResultObjectCallback<T, E> { (err: E, results: Dictionary<T>): void; }

interface AsyncFunction<T, E> { (callback: (err?: E, result?: T) => void): void; }
interface AsyncIterator<T, E> { (item: T, callback: ErrorCallback<E>): void; }
interface AsyncForEachOfIterator<T, E> { (item: T, key: number|string, callback: ErrorCallback<E>): void; }
interface AsyncResultIterator<T, R, E> { (item: T, callback: AsyncResultCallback<R, E>): void; }
interface AsyncMemoIterator<T, R, E> { (memo: R, item: T, callback: AsyncResultCallback<R, E>): void; }
interface AsyncBooleanIterator<T, E> { (item: T, callback: (err: E, truthValue: boolean) => void): void; }

interface AsyncWorker<T, E> { (task: T, callback: ErrorCallback<E>): void; }
interface AsyncVoidFunction<E> { (callback: ErrorCallback<E>): void; }

interface AsyncQueue<T> {
    length(): number;
    started: boolean;
    running(): number;
    idle(): boolean;
    concurrency: number;
    push<E>(task: T, callback?: ErrorCallback<E>): void;
    push<E>(task: T[], callback?: ErrorCallback<E>): void;
    unshift<E>(task: T, callback?: ErrorCallback<E>): void;
    unshift<E>(task: T[], callback?: ErrorCallback<E>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    paused: boolean;
    pause(): void
    resume(): void;
    kill(): void;
    workersList(): {
        data: T,
        callback: Function
    }[];
    error(error: Error, data: any): void;
    unsaturated(): void;
    buffer: number;
}

interface AsyncPriorityQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push<E>(task: T, priority: number, callback?: AsyncResultArrayCallback<T, E>): void;
    push<E>(task: T[], priority: number, callback?: AsyncResultArrayCallback<T, E>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
    workersList(): {
        data: T,
        priority: number,
        callback: Function
    }[];
    error(error: Error, data: any): void;
    unsaturated(): void;
    buffer: number;
}

interface AsyncCargo {
    length(): number;
    payload: number;
    push(task: any, callback? : Function): void;
    push(task: any[], callback? : Function): void;
    saturated(): void;
    empty(): void;
    drain(): void;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

interface Async {

    // Collections
    each<T, E>(arr: T[], iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    eachSeries<T, E>(arr: T[], iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    eachLimit<T, E>(arr: T[], limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOf<E>(obj: any, iterator: (item: any, key: string|number, callback?: ErrorCallback<E>) => void, callback: ErrorCallback<E>): void;
    forEachOf<T, E>(obj: T[], iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOfSeries<E>(obj: any, iterator: (item: any, key: string|number, callback?: ErrorCallback<E>) => void, callback: ErrorCallback<E>): void;
    forEachOfSeries<T, E>(obj: T[], iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOfLimit<E>(obj: any, limit: number, iterator: (item: any, key: string|number, callback?: ErrorCallback<E>) => void, callback: ErrorCallback<E>): void;
    forEachOfLimit<T, E>(obj: T[], limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    map<T, R, E>(arr: T[], iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): any;
    mapSeries<T, R, E>(arr: T[], iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): any;
    mapLimit<T, R, E>(arr: T[], limit: number, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): any;
    mapValuesLimit<T, R, E>(obj: {[name: string]: T}, limit: number, iteratee: (value: string, key: T, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultArrayCallback<R, E>): void;
    mapValues<T, R, E>(obj: {[name: string]: T}, iteratee: (value: string, key: T, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultArrayCallback<R, E>): void;
    mapValuesSeries: typeof async.mapValues;
    filter<T,E>(arr: T[], iterator: AsyncBooleanIterator<T,E>, callback?: AsyncResultArrayCallback<T,E>): any;
    select<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    filterSeries<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    selectSeries<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    filterLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    selectLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    reject<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    rejectSeries<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    rejectLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    reduce<T, R, E>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): any;
    inject<T, R, E>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): any;
    foldl<T, R, E>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): any;
    reduceRight<T, R, E>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback: AsyncResultCallback<R, E>): any;
    foldr<T, R, E>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback: AsyncResultCallback<R, E>): any;
    detect<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): any;
    find: typeof async.detect;
    detectSeries<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): any;
    findSeries: typeof async.detectSeries;
    detectLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): any;
    findLimit: typeof async.detectLimit;
    sortBy<T, V, E>(arr: T[], iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>): any;
    some<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    someLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    anyLimit: typeof async.someLimit;
    someSeries<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    anySeries: typeof async.someSeries;
    any<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    every<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    everyLimit<T, E>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    all<T, E>(arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<boolean, E>): any;
    concat<T, R, E>(arr: T[], iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): any;
    concatSeries<T, R, E>(arr: T[], iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): any;

    // Control Flow
    series<T, E>(tasks: AsyncFunction<T, E>[], callback?: AsyncResultArrayCallback<T, E>): void;
    series<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
    parallel<T, E>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
    parallel<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
    parallelLimit<T, E>(tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>): void;
    parallelLimit<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>): void;
    whilst<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: (err: E) => void): void;
    doWhilst<E>(fn: AsyncVoidFunction<E>, test: () => boolean, callback: (err: E) => void): void;
    until<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: (err: E) => void): void;
    doUntil<E>(fn: AsyncVoidFunction<E>, test: () => boolean, callback: (err: E) => void): void;
    during<E>(test: (testCallback : (error: Error, truth: boolean) => void) => void, fn: AsyncVoidFunction<E>, callback: (err: E) => void): void;
    doDuring<E>(fn: AsyncVoidFunction<E>, test: (testCallback: (error: Error, truth: boolean) => void) => void, callback: (err: E) => void): void;
    forever(next: (errCallback : (err: Error) => void) => void, errBack: (err: Error) => void) : void;
    waterfall(tasks: Function[], callback?: (err: Error, results?: any) => void): void;
    compose(...fns: Function[]): Function;
    seq(...fns: Function[]): Function;
    applyEach(fns: Function[], argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    applyEachSeries(fns: Function[], argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    queue<T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>;
    priorityQueue<T, E>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>;
    cargo<E>(worker : (tasks: any[], callback : ErrorCallback<E>) => void, payload? : number) : AsyncCargo;
    auto(tasks: any, concurrency?: number, callback?: (error: Error, results: any) => void): void;
    autoInject(tasks: any, callback?: (error: Error, results: any) => void): void;
    retry<T, E>(opts: number, task: (callback : AsyncResultCallback<T, E>, results: any) => void, callback: (error: Error, results: any) => void): void;
    retry<T, E>(opts: { times: number, interval: number|((retryCount: number) => number) }, task: (callback: AsyncResultCallback<T, E>, results : any) => void, callback: (error: Error, results: any) => void): void;
    retryable<T, E>(opts: number | {times: number, interval: number}, task: AsyncFunction<T, E>): AsyncFunction<T, E>;
    apply(fn: Function, ...arguments: any[]): AsyncFunction<any,any>; // TODO: be more specific
    nextTick(callback: Function, ...args: any[]): void;
    setImmediate: typeof async.nextTick;

    allLimit<T, E>(arr: T[], limit: number, iteratee: AsyncBooleanIterator<T, E>, cb?: AsyncResultCallback<boolean, E>) : any;
    everySeries<T, E>(arr: T[], iteratee: AsyncBooleanIterator<T, E>, cb?: AsyncResultCallback<boolean, E>) : any
    allSeries: typeof async.everySeries;

    reflect<T, E>(fn: AsyncFunction<T, E>) : (callback: (err: void, result: {error?: Error, value?: T}) => void) => void;
    reflectAll<T, E>(tasks: AsyncFunction<T, E>[]): ((callback: (err: void, result: {error?: Error, value?: T}) => void) => void)[];

    timeout<T, E>(fn: AsyncFunction<T, E>, milliseconds: number, info: any): AsyncFunction<T, E>;

    times<T, E> (n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
    timesSeries<T, E>(n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
    timesLimit<T, E>(n: number, limit: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;

    transform<T, R, E>(arr: T[], iteratee: (acc: R[], item: T, key: string, callback: (error?: E) => void) => void): void;
    transform<T, R, E>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: string, callback: (error?: E) => void) => void): void;
    transform<T, R, E>(arr: {[key: string] : T}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void): void;
    transform<T, R, E>(arr: {[key: string] : T}, acc: {[key: string] : R}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void): void;

    race<T, E>(tasks: (AsyncFunction<T, E>)[], callback: AsyncResultCallback<T, E>) : void;

    // Utils
    memoize(fn: Function, hasher?: Function): Function;
    unmemoize(fn: Function): Function;
    ensureAsync(fn: (... argsAndCallback: any[]) => void): Function;
    constant(...values: any[]): Function;
    asyncify(fn: Function): Function;
    wrapSync(fn: Function): Function;
    log(fn: Function, ...arguments: any[]): void;
    dir(fn: Function, ...arguments: any[]): void;
}

declare var async: Async;

declare module "async" {
    export = async;
}
