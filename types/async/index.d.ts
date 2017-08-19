// Type definitions for Async 2.0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Arseniy Maximov <https://github.com/kern0>, Joe Herman <https://github.com/Penryn>, Angus Fenying <https://github.com/fenying>, Pascal Martin <https://github.com/pascalmartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Dictionary<T> { [key: string]: T; }

interface ErrorCallback<T> { (err?: T): void; }
interface AsyncBooleanResultCallback<E> { (err?: E, truthValue?: boolean): void; }
interface AsyncResultCallback<T, E> { (err?: E, result?: T): void; }
interface AsyncResultArrayCallback<T, E> { (err?: E, results?: (T | undefined)[]): void; }
interface AsyncResultObjectCallback<T, E> { (err: E | undefined, results: Dictionary<T | undefined>): void; }

interface AsyncFunction<T, E> { (callback: (err?: E, result?: T) => void): void; }
interface AsyncIterator<T, E> { (item: T, callback: ErrorCallback<E>): void; }
interface AsyncForEachOfIterator<T, E> { (item: T, key: number|string, callback: ErrorCallback<E>): void; }
interface AsyncResultIterator<T, R, E> { (item: T, callback: AsyncResultCallback<R, E>): void; }
interface AsyncMemoIterator<T, R, E> { (memo: R | undefined, item: T, callback: AsyncResultCallback<R, E>): void; }
interface AsyncBooleanIterator<T, E> { (item: T, callback: AsyncBooleanResultCallback<E>): void; }

interface AsyncWorker<T, E> { (task: T, callback: ErrorCallback<E>): void; }
interface AsyncVoidFunction<E> { (callback: ErrorCallback<E>): void; }

interface AsyncQueue<T> {
    length(): number;
    started: boolean;
    running(): number;
    idle(): boolean;
    concurrency: number;
    push<E>(task: T, callback?: ErrorCallback<E>): void;
    push<E>(task: T, callback?: AsyncResultCallback<T, E>): void;
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
    payload?: number;
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
    each<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    each<T, E>(arr: Dictionary<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    eachSeries: typeof async.each;
    eachLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    eachLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEach: typeof async.each;
    forEachSeries: typeof async.each;
    forEachLimit: typeof async.eachLimit;
    forEachOf<T, E>(obj: T[] | IterableIterator<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOf<T, E>(obj: Dictionary<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOfSeries: typeof async.forEachOf;
    forEachOfLimit<T, E>(obj: T[] | IterableIterator<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    forEachOfLimit<T, E>(obj: Dictionary<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
    eachOf: typeof async.forEachOf;
    eachOfSeries: typeof async.forEachOf;
    eachOfLimit: typeof async.forEachOfLimit;
    map<T, R, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
    map<T, R, E>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
    mapSeries: typeof async.map;
    mapLimit<T, R, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
    mapLimit<T, R, E>(arr: Dictionary<T>, limit: number, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
    mapValuesLimit<T, R, E>(obj: Dictionary<T>, limit: number, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
    mapValues<T, R, E>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
    mapValuesSeries: typeof async.mapValues;
    filter<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
    filter<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
    filterSeries: typeof async.filter;
    filterLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
    filterLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
    select: typeof async.filter;
    selectSeries: typeof async.filter;
    selectLimit: typeof async.filterLimit;
    reject: typeof async.filter;
    rejectSeries: typeof async.filter;
    rejectLimit: typeof async.filterLimit;
    reduce<T, R, E>(arr: T[] | IterableIterator<T>, memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): void;
    inject: typeof async.reduce;
    foldl: typeof async.reduce;
    reduceRight: typeof async.reduce;
    foldr: typeof async.reduce;
    detect<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
    detect<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
    detectSeries: typeof async.detect;
    detectLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
    detectLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
    find: typeof async.detect;
    findSeries: typeof async.detect;
    findLimit: typeof async.detectLimit;
    sortBy<T, V, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>): void;
    some<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    some<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    someSeries: typeof async.some;
    someLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    someLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    any: typeof async.some;
    anySeries: typeof async.someSeries;
    anyLimit: typeof async.someLimit;
    every<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    every<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    everySeries: typeof async.every;
    everyLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    everyLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
    all: typeof async.every;
    allSeries: typeof async.every;
    allLimit: typeof async.everyLimit;

    concat<T, R, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
    concat<T, R, E>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
    concatSeries: typeof async.concat;

    // Control Flow
    series<T, E>(tasks: AsyncFunction<T, E>[], callback?: AsyncResultArrayCallback<T, E>): void;
    series<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
    parallel<T, E>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
    parallel<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
    parallelLimit<T, E>(tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>): void;
    parallelLimit<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>): void;
    whilst<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
    doWhilst<E>(fn: AsyncVoidFunction<E>, test: () => boolean, callback: ErrorCallback<E>): void;
    until<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
    doUntil<E>(fn: AsyncVoidFunction<E>, test: () => boolean, callback: ErrorCallback<E>): void;
    during<E>(test: (testCallback : AsyncBooleanResultCallback<E>) => void, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
    doDuring<E>(fn: AsyncVoidFunction<E>, test: (testCallback: AsyncBooleanResultCallback<E>) => void, callback: ErrorCallback<E>): void;
    forever<E>(next: (next : ErrorCallback<E>) => void, errBack: ErrorCallback<E>) : void;
    waterfall<T, E>(tasks: Function[], callback?: AsyncResultCallback<T, E | Error>): void;
    compose(...fns: Function[]): Function;
    seq(...fns: Function[]): Function;
    applyEach(fns: Function[], argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    applyEachSeries(fns: Function[], argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
    queue<T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>;
    queue<T, R, E>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): AsyncQueue<T>;
    priorityQueue<T, E>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>;
    cargo<E>(worker : (tasks: any[], callback : ErrorCallback<E>) => void, payload? : number) : AsyncCargo;
    auto<E>(tasks: any, concurrency?: number, callback?: AsyncResultCallback<any, E>): void;
    autoInject<E>(tasks: any, callback?: AsyncResultCallback<any, E>): void;
    retry<T, E>(opts: number, task: (callback : AsyncResultCallback<T, E>, results: any) => void, callback:  AsyncResultCallback<any, E | Error>): void;
    retry<T, E>(opts: { times: number, interval: number|((retryCount: number) => number) }, task: (callback: AsyncResultCallback<T, E>, results : any) => void, callback:  AsyncResultCallback<any, E | Error>): void;
    retryable<T, E>(opts: number | {times: number, interval: number}, task: AsyncFunction<T, E>): AsyncFunction<T, E | Error>;
    apply<E>(fn: Function, ...arguments: any[]): AsyncFunction<any,E | Error>;
    nextTick(callback: Function, ...args: any[]): void;
    setImmediate: typeof async.nextTick;

    reflect<T, E>(fn: AsyncFunction<T, E>) : (callback: (err: null, result: {error?: E, value?: T}) => void) => void;
    reflectAll<T, E>(tasks: AsyncFunction<T, E>[]): ((callback: (err: null, result: {error?: E, value?: T}) => void) => void)[];

    timeout<T, E>(fn: AsyncFunction<T, E>, milliseconds: number, info?: any): AsyncFunction<T, E | Error>;
    timeout<T, R, E>(fn: AsyncResultIterator<T, R, E>, milliseconds: number, info?: any): AsyncResultIterator<T, R, E | Error>;

    times<T, E> (n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
    timesSeries<T, E>(n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
    timesLimit<T, E>(n: number, limit: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;

    transform<T, R, E>(arr: T[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;
    transform<T, R, E>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;

    transform<T, R, E>(arr: {[key: string] : T}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void, callback?: AsyncResultObjectCallback<T, E>): void;
    transform<T, R, E>(arr: {[key: string] : T}, acc: {[key: string] : R}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void, callback?: AsyncResultObjectCallback<T, E>): void;

    race<T, E>(tasks: (AsyncFunction<T, E>)[], callback: AsyncResultCallback<T, E | Error>) : void;

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
