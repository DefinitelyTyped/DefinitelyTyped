// Type definitions for Async 0.1.23
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AsyncCallback<T> { (err: string, results: T[]): any; }
interface AsyncIterator<T> { (item: T, callback: AsyncCallback<T>): void; }
interface AsyncMemoIterator<T> { (memo: T, item: T, callback: AsyncCallback<T>): void; }
interface AsyncWorker<T> { (task: T, callback: Function): void; }

interface AsyncQueue<T> {
    length(): number;
    concurrency: number;
    push(task: T, callback: AsyncCallback<T>): void;
    saturated: AsyncCallback<T>;
    empty: AsyncCallback<T>;
    drain: AsyncCallback<T>;
}

interface Async {

    // Collections
    forEach<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>): void;
    forEachSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>): void;
    forEachLimit<T>(arr: T[], limit: number, iterator: AsyncIterator<T>, callback: AsyncCallback<T>): void;
    map<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    mapSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    filter<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    select<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    filterSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    selectSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    reject<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    rejectSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    reduce<T>(arr: T[], memo: T, iterator: AsyncMemoIterator<T>, callback: AsyncCallback<T>);
    inject<T>(arr: T[], memo: T, iterator: AsyncMemoIterator<T>, callback: AsyncCallback<T>);
    foldl<T>(arr: T[], memo: T, iterator: AsyncMemoIterator<T>, callback: AsyncCallback<T>);
    reduceRight<T>(arr: T[], memo: T, iterator: AsyncMemoIterator<T>, callback: AsyncCallback<T>);
    foldr<T>(arr: T[], memo: T, iterator: AsyncMemoIterator<T>, callback: AsyncCallback<T>);
    detect<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    detectSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    sortBy<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    some<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    any<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    every<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    all<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    concat<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);
    concatSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: AsyncCallback<T>);

    // Control Flow
    series<T>(tasks: T[], callback?: AsyncCallback<T>): void;
    series<T>(tasks: T, callback?: AsyncCallback<T>): void;
    parallel<T>(tasks: T[], callback?: AsyncCallback<T>): void;
    parallel<T>(tasks: T, callback?: AsyncCallback<T>): void;
    whilst(test: Function, fn: Function, callback: AsyncCallback): void; // TODO: generify
    until(test: Function, fn: Function, callback: AsyncCallback): void; // TODO: generify
    waterfall<T>(tasks: T[], callback?: AsyncCallback<T>): void;
    waterfall<T>(tasks: T, callback?: AsyncCallback<T>): void;
    queue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncQueue<T>;
    //auto(tasks: any[], callback?: AsyncCallback<T>): void;
    auto<T>(tasks: T, callback?: AsyncCallback<T>): void;
    iterator(tasks): Function;
    apply(fn: Function, ...arguments: any[]): void;
    nextTick<T>(callback: AsyncCallback<T>): void;

    // Utils
    memoize(fn: Function, hasher?: Function): Function;
    unmemoize(fn: Function): Function;
    log(fn: Function, ...arguments: any[]): void;
    dir(fn: Function, ...arguments: any[]): void;
    noConflict(): Async;
}

declare var async: Async;