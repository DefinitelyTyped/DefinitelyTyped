// Type definitions for Async 2.0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Arseniy Maximov <https://github.com/kern0>, Joe Herman <https://github.com/Penryn>, Angus Fenying <https://github.com/fenying>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dictionary<T> { [key: string]: T; }

interface ErrorCallback { (err?: Error): void; }
interface AsyncBooleanResultCallback { (err: Error, truthValue: boolean): void; }
interface AsyncResultCallback<T> { (err: Error, result: T): void; }
interface AsyncResultArrayCallback<T> { (err: Error, results: T[]): void; }
interface AsyncResultObjectCallback<T> { (err: Error, results: Dictionary<T>): void; }

interface AsyncFunction<T> { (callback: (err?: Error, result?: T) => void): void; }
interface AsyncIterator<T> { (item: T, callback: ErrorCallback): void; }
interface AsyncForEachOfIterator<T> { (item: T, key: number|string, callback: ErrorCallback): void; }
interface AsyncResultIterator<T, R> { (item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncBooleanIterator<T> { (item: T, callback: AsyncBooleanResultCallback): void; }

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
    each<T>(arr: Dictionary<T>, iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    eachSeries: typeof async.each;
    eachLimit<T>(arr: T[], limit: number, iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    eachLimit<T>(arr: Dictionary<T>, limit: number, iterator: AsyncIterator<T>, callback?: ErrorCallback): void;
    forEach: typeof async.each;
    forEachSeries: typeof async.each;
    forEachLimit: typeof async.eachLimit;
    forEachOf(obj: any, iterator: (item: any, key: string|number, callback?: ErrorCallback) => void, callback: ErrorCallback): void;
    forEachOf<T>(obj: T[], iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    forEachOf<T>(obj: Dictionary<T>, iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    forEachOfSeries: typeof async.forEachOf;
    forEachOfLimit(obj: any, limit: number, iterator: (item: any, key: string|number, callback?: ErrorCallback) => void, callback: ErrorCallback): void;
    forEachOfLimit<T>(obj: T[], limit: number, iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    forEachOfLimit<T>(obj: Dictionary<T>, limit: number, iterator: AsyncForEachOfIterator<T>, callback?: ErrorCallback): void;
    eachOf: typeof async.forEachOf;
    eachOfSeries: typeof async.forEachOf;
    eachOfLimit: typeof async.forEachOfLimit;
    map<T, R>(arr: T[], iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    map<T, R>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapSeries: typeof async.map;
    mapLimit<T, R>(arr: T[], limit: number, iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapLimit<T, R>(arr: Dictionary<T>, limit: number, iterator: AsyncResultIterator<T, R>, callback?: AsyncResultArrayCallback<R>): any;
    mapValuesLimit<T, R>(obj: Dictionary<T>, limit: number, iteratee: (value: T, key: string, callback: AsyncResultCallback<R>) => void, callback: AsyncResultCallback<R[]>): void;
    mapValues<T, R>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R>) => void, callback: AsyncResultCallback<R[]>): void;
    mapValuesSeries: typeof async.mapValues;
    filter<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    filter<T>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    filterSeries: typeof async.filter;
    filterLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    filterLimit<T>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultArrayCallback<T>): any;
    select: typeof async.filter;
    selectSeries: typeof async.filter;
    selectLimit: typeof async.filterLimit;
    reject: typeof async.filter;
    rejectSeries: typeof async.filter;
    rejectLimit: typeof async.filterLimit;
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback?: AsyncResultCallback<R>): any;
    inject: typeof async.reduce;
    foldl: typeof async.reduce;
    reduceRight: typeof async.reduce;
    foldr: typeof async.reduce;
    detect<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    detect<T>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    detectSeries: typeof async.detect;
    detectLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    detectLimit<T>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncResultCallback<T>): any;
    find: typeof async.detect;
    findSeries: typeof async.detect;
    findLimit: typeof async.detectLimit;
    sortBy<T, V>(arr: T[], iterator: AsyncResultIterator<T, V>, callback?: AsyncResultArrayCallback<T>): any;
    some<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    some<T>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    someSeries: typeof async.some;
    someLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, AsyncBooleanResultCallback): any;
    someLimit<T>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T>, AsyncBooleanResultCallback): any;
    any: typeof async.some;
    anySeries: typeof async.someSeries;
    anyLimit: typeof async.someLimit;
    every<T>(arr: T[], iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    every<T>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    everySeries: typeof async.every;
    everyLimit<T>(arr: T[], limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    everyLimit<T>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T>, callback?: AsyncBooleanResultCallback): any;
    all: typeof async.every;
    allSeries: typeof async.every;
    allLimit: typeof async.everyLimit;

    concat<T, R>(arr: T[], iterator: AsyncResultIterator<T, R[]>, callback?: AsyncResultArrayCallback<R>): any;
    concat<T, R>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R[]>, callback?: AsyncResultArrayCallback<R>): any;
    concatSeries: typeof async.concat;

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
