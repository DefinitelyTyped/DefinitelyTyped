declare function wu<T>(iterable: Iterable<T>): wu.WuIterable<T>;

export = wu;
export as namespace wu;

declare namespace wu {
    type Consumer<T> = (t: T) => void;
    type Filter<T> = (t: T) => boolean;
    type TypeGuardFilter<T, S extends T> = (t: T) => t is S;

    // only static
    function chain<T>(...iters: Array<Iterable<T>>): WuIterable<T>;
    function count(start?: number, step?: number): WuIterable<number>;
    function curryable(fun: (...x: any[]) => any, expected?: number): any;
    function entries<T>(obj: { [i: string]: T }): WuIterable<[string, T]>;
    function keys(obj: { [i: string]: any }): WuIterable<string>;
    function values<T>(obj: { [i: string]: T }): WuIterable<T>;
    function repeat<T>(obj: T, times?: number): WuIterable<T>;
    // also copied to WuIterable
    function asyncEach(fn: Consumer<any>, maxBlock?: number, timeout?: number): void;
    function drop<T>(n: number, iter: Iterable<T>): WuIterable<T>;
    function dropWhile<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
    function cycle<T>(iter: Iterable<T>): WuIterable<T>;
    function chunk<T>(n: number, iter: Iterable<T>): WuIterable<T[]>;
    function concatMap<T, U>(fn: (t: T) => Iterable<U>, iter: Iterable<T>): WuIterable<U>;
    function enumerate<T>(iter: Iterable<T>): WuIterable<[T, number]>;
    function every<T>(fn: Filter<T>, iter: Iterable<T>): boolean;
    function filter<T, S extends T>(fn: TypeGuardFilter<T, S>, iter: Iterable<T>): WuIterable<S>;
    function filter<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
    function find<T, S extends T>(fn: TypeGuardFilter<T, S>, iter: Iterable<T>): S | undefined;
    function find<T>(fn: Filter<T>, iter: Iterable<T>): T | undefined;
    function flatten(iter: Iterable<any>): WuIterable<any>;
    function flatten(shallow: boolean, iter: Iterable<any>): WuIterable<any>;
    function forEach<T>(fn: Consumer<T>, iter: Iterable<T>): void;
    function has<T>(t: T, iter: Iterable<T>): boolean;
    // invoke<T, U>(name:string, ...t:T[], iter: Iterable<(t:T)=>U>): WuIterable<U>;
    const invoke: any;
    function map<T, U>(fn: (t: T) => U, iter: Iterable<T>): WuIterable<U>;
    // pluck<T>(attribute:string, iter: Iterable<{[attribute]: T}>): WuIterable<T>;
    function pluck(attribute: string, iter: Iterable<any>): WuIterable<any>;
    function reduce<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): T;
    function reduce<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): T;
    function reduce<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): U;
    function reduce<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): U;
    function reductions<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): WuIterable<T>;
    function reductions<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): WuIterable<T>;
    function reductions<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): WuIterable<U>;
    function reductions<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): WuIterable<U>;
    function reject<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
    function slice<T>(iter: Iterable<T>): WuIterable<T>;
    function slice<T>(start: number, iter: Iterable<T>): WuIterable<T>;
    function slice<T>(start: number, stop: number, iter: Iterable<T>): WuIterable<T>;
    function some<T>(fn: Filter<T>, iter: Iterable<T>): boolean;
    function spreadMap<T>(fn: (...x: any[]) => T, iter: Iterable<any[]>): WuIterable<T>;
    function take<T>(n: number, iter: Iterable<T>): WuIterable<T>;
    function takeWhile<T>(fn: Filter<T>, iter: Iterable<T>): WuIterable<T>;
    function tap<T>(fn: Consumer<T>, iter: Iterable<T>): WuIterable<T>;
    function toArray<T>(iter: Iterable<T>): T[];
    function unique<T>(iter: Iterable<T>): WuIterable<T>;
    function zip<T, U>(iter2: Iterable<T>, iter: Iterable<U>): WuIterable<[T, U]>;
    function zipLongest<T, U>(iter2: Iterable<T>, iter: Iterable<U>): WuIterable<[T, U]>;
    const zipWith: any;
    const unzip: any;
    function tee<T>(iter: Iterable<T>): Array<WuIterable<T>>;
    function tee<T>(n: number, iter: Iterable<T>): Array<WuIterable<T>>;

    interface WuIterable<T> extends IterableIterator<T> {
        // generated from section "copied to WuIterable" above via
        // sed -r 's/(, )?iter: Iterable<\w+>//' |
        // sed -r 's/^(\s+\w+)<T>/\1/' |
        // sed -r 's/^(\s+\w+)<T, /\1</'
        asyncEach(fn: Consumer<any>, maxBlock?: number, timeout?: number): any;
        drop(n: number): WuIterable<T>;
        dropWhile(fn: Filter<T>): WuIterable<T>;
        cycle(): WuIterable<T>;
        chunk(n: number): WuIterable<T[]>;
        concatMap<U>(fn: (t: T) => Iterable<U>): WuIterable<U>;
        enumerate(): WuIterable<[T, number]>;
        every(fn: Filter<T>): boolean;
        filter<S extends T>(fn: TypeGuardFilter<T, S>): WuIterable<S>;
        filter(fn: Filter<T>): WuIterable<T>;
        find<S extends T>(fn: TypeGuardFilter<T, S>): S | undefined;
        find(fn: Filter<T>): T | undefined;
        flatten(shallow?: boolean): WuIterable<any>;
        forEach(fn: Consumer<T>): void;
        has(t: T): boolean;
        // invoke<T, U>(name:string, ...t:T[], iter: Iterable<(t:T)=>U>): WuIterable<U>;
        invoke: any;
        map<U>(fn: (t: T) => U): WuIterable<U>;
        // pluck<T>(attribute:string, iter: Iterable<{[attribute]: T}>): WuIterable<T>;
        pluck(attribute: string): WuIterable<any>;
        reduce(fn: (a: T, b: T) => T, initial?: T): T;
        reduce<U>(fn: (a: U, b: T) => U, initial?: U): U;
        reductions(fn: (a: T, b: T) => T, initial?: T): WuIterable<T>;
        reductions<U>(fn: (a: U, b: T) => U, initial?: U): WuIterable<U>;
        reject(fn: Filter<T>): WuIterable<T>;
        slice(start?: number, stop?: number): WuIterable<T>;
        some(fn: Filter<T>): boolean;
        spreadMap(fn: (...x: any[]) => T, iter: Iterable<any[]>): WuIterable<T>;
        take(n: number): WuIterable<T>;
        takeWhile(fn: Filter<T>): WuIterable<T>;
        tap(fn: Consumer<T>): WuIterable<T>;
        toArray(): T[];
        unique(): WuIterable<T>;
        zip<U>(iter2: Iterable<U>): WuIterable<[T, U]>;
        zipLongest<U>(iter2: Iterable<U>): WuIterable<[T, U]>;
        zipWith: any;
        unzip: any;
        tee(n?: number): Array<WuIterable<T>>;
    }
}
