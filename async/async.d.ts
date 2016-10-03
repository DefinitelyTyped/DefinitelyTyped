// Type definitions for Async 2.0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Arseniy Maximov <https://github.com/kern0>, Joe Herman <https://github.com/Penryn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dictionary<T> { [key: string]: T; }

interface ErrorCallback { (err?: Error): void; }
interface AsyncResultCallback<T> { (err: Error, result: T): void; }
interface AsyncResultArrayCallback<T> { (err: Error, results: T[]): void; }
interface AsyncResultObjectCallback<T> { (err: Error, results: Dictionary<T>): void; }

interface AsyncFunction<T> { (callback: (err?: Error, result?: T) => void): void; }
interface AsyncIterator<T> { (item: T, callback: ErrorCallback): void; }
interface AsyncForEachOfIterator<T> { (item: T, key: number|string, callback: ErrorCallback): void; }
interface AsyncResultIterator<T, R> { (item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncBooleanIterator<T> { (item: T, callback: (err: string, truthValue: boolean) => void): void; }

interface AsyncWorker<T> { (task: T, callback: ErrorCallback): void; }
interface AsyncVoidFunction { (callback: ErrorCallback): void; }

interface AsyncQueue<T> {
    length(): number;
    started: boolean;
    running(): number;
    idle(): boolean;
    concurrency: number;
    push(task: T, callback?: ErrorCallback): void;
    push(task: T[], callback?: ErrorCallback): void;
    unshift(task: T, callback?: ErrorCallback): void;
    unshift(task: T[], callback?: ErrorCallback): void;
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
    push(task: T, priority: number, callback?: AsyncResultArrayCallback<T>): void;
    push(task: T[], priority: number, callback?: AsyncResultArrayCallback<T>): void;
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
    each<T>(arr: T[], iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    eachSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    eachLimit<T>(arr: T[], limit: number, iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    forEachOf(obj: any, iterator: (item: any, key: string|number, callback?: ErrorCallback) => void, callback: ErrorCallback): void;
    forEachOf<T>(obj: T[], iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    forEachOfSeries(obj: any, iterator: (item: any, key: string|number, callback?: ErrorCallback) => void, callback: ErrorCallback): void;
    forEachOfSeries<T>(obj: T[], iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    forEachOfLimit(obj: any, limit: number, iterator: (item: any, key: string|number, callback?: ErrorCallback) => void, callback: ErrorCallback): void;
    forEachOfLimit<T>(obj: T[], limit: number, iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    map<T, R>(arr: T[], iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapSeries<T, R>(arr: T[], iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapLimit<T, R>(arr: T[], limit: number, iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapValuesLimit<T, R>(obj: {[name: string]: T}, limit: number, iteratee: (value: string, key: T, callback: AsyncResultCallback<R>) => void, callback: AsyncResultCallback<R[]>): void;
    mapValues<T, R>(obj: {[name: string]: T}, iteratee: (value: string, key: T, callback: AsyncResultCallback<R>) => void, callback: AsyncResultCallback<R[]>): void;
    mapValuesSeries: typeof async.mapValues;
    filter<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    select<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    filterSeries<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    selectSeries<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    filterLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    selectLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    reject<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    rejectSeries<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    rejectLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback?: AsyncResultCallback<R>): any;
    inject<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback?: AsyncResultCallback<R>): any;
    foldl<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback?: AsyncResultCallback<R>): any;
    reduceRight<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    foldr<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    detect<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    find: typeof async.detect;
    detectSeries<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    findSeries: typeof async.detectSeries;
    detectLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    findLimit: typeof async.detectLimit;
    sortBy<T, V>(arr: T[], iterator: AsyncResultIterator<T, V>, callback?: AsyncResultArrayCallback<T>): any;
    some<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => void): any;
    someLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => void): any;
    anyLimit: typeof async.someLimit;
    someSeries<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => void): any;
    anySeries: typeof async.someSeries;
    any<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => void): any;
    every<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => any): any;
    everyLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => any): any;
    all<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: (result: boolean) => any): any;
    concat<T, R>(arr: T[], iterator: AsyncResultIterator<T, R[]>, callback?: AsyncResultArrayCallback<R>): any;
    concatSeries<T, R>(arr: T[], iterator: AsyncResultIterator<T, R[]>, callback?: AsyncResultArrayCallback<R>): any;

    // Control Flow
    series<T>(tasks: AsyncFunction<T>[], callback?: AsyncResultArrayCallback<T>): void;
    series<T>(tasks: Dictionary<AsyncFunction<T>>, callback?: AsyncResultObjectCallback<T>): void;
    parallel<T>(tasks: Array<AsyncFunction<T>>, callback?: AsyncResultArrayCallback<T>): void;
    parallel<T>(tasks: Dictionary<AsyncFunction<T>>, callback?: AsyncResultObjectCallback<T>): void;
    parallelLimit<T>(tasks: Array<AsyncFunction<T>>, limit: number, callback?: AsyncResultArrayCallback<T>): void;
    parallelLimit<T>(tasks: Dictionary<AsyncFunction<T>>, limit: number, callback?: AsyncResultObjectCallback<T>): void;
    whilst(test: () => boolean, fn: AsyncVoidFunction, callback: (err: any) => void): void;
    doWhilst(fn: AsyncVoidFunction, test: () => boolean, callback: (err: any) => void): void;
    until(test: () => boolean, fn: AsyncVoidFunction, callback: (err: any) => void): void;
    doUntil(fn: AsyncVoidFunction, test: () => boolean, callback: (err: any) => void): void;
    during(test: (testCallback : (error: Error, truth: boolean) => void) => void, fn: AsyncVoidFunction, callback: (err: any) => void): void;
    doDuring(fn: AsyncVoidFunction, test: (testCallback: (error: Error, truth: boolean) => void) => void, callback: (err: any) => void): void;
    forever(next: (errCallback : (err: Error) => void) => void, errBack: (err: Error) => void) : void;
    waterfall(tasks: Function[], callback?: (err: Error, results?: any) => void): void;
    compose(...fns: Function[]): Function;
    seq(...fns: Function[]): Function;
    applyEach(fns: Function[], argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    applyEachSeries(fns: Function[], argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    queue<T>(worker: AsyncWorker<T>, concurrency?: number): AsyncQueue<T>;
    priorityQueue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncPriorityQueue<T>;
    cargo(worker : (tasks: any[], callback : ErrorCallback) => void, payload? : number) : AsyncCargo;
    auto(tasks: any, concurrency?: number, callback?: (error: Error, results: any) => void): void;
    autoInject(tasks: any, callback?: (error: Error, results: any) => void): void;
    retry<T>(opts: number, task: (callback : AsyncResultCallback<T>, results: any) => void, callback: (error: Error, results: any) => void): void;
    retry<T>(opts: { times: number, interval: number|((retryCount: number) => number) }, task: (callback: AsyncResultCallback<T>, results : any) => void, callback: (error: Error, results: any) => void): void;
    retryable<T>(opts: number | {times: number, interval: number}, task: AsyncFunction<T>): AsyncFunction<T>;
    apply(fn: Function, ...arguments: any[]): AsyncFunction<any>;
    nextTick(callback: Function, ...args: any[]): void;
    setImmediate: typeof async.nextTick;

    allLimit<T>(arr: T[], limit: number, iteratee: AsyncBooleanIterator<T>, cb?: (result: boolean) => any) : any;
    everySeries<T>(arr: T[], iteratee: AsyncBooleanIterator<T>, cb?: (result: boolean) => any) : any
    allSeries: typeof async.everySeries;

    reflect<T>(fn: AsyncFunction<T>) : (callback: (err: void, result: {error?: Error, value?: T}) => void) => void;
    reflectAll<T>(tasks: AsyncFunction<T>[]): ((callback: (err: void, result: {error?: Error, value?: T}) => void) => void)[];

    timeout<T>(fn: AsyncFunction<T>, milliseconds: number, info: any): AsyncFunction<T>;

    times<T> (n: number, iterator: AsyncResultIterator<number, T>, callback: AsyncResultArrayCallback<T>): void;
    timesSeries<T>(n: number, iterator: AsyncResultIterator<number, T>, callback: AsyncResultArrayCallback<T>): void;
    timesLimit<T>(n: number, limit: number, iterator: AsyncResultIterator<number, T>, callback: AsyncResultArrayCallback<T>): void;

    transform<T, R>(arr: T[], iteratee: (acc: R[], item: T, key: string, callback: (error?: Error) => void) => void): void;
    transform<T, R>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: string, callback: (error?: Error) => void) => void): void;
    transform<T, R>(arr: {[key: string] : T}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: Error) => void) => void): void;
    transform<T, R>(arr: {[key: string] : T}, acc: {[key: string] : R}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: Error) => void) => void): void;

    race<T>(tasks: (AsyncFunction<T>)[], callback: AsyncResultCallback<T>) : void;

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
