// Type definitions for yallist 3.0
// Project: https://github.com/isaacs/yallist#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = Yallist;

declare class Yallist<T> implements Iterable<T> {
    static create<T>(): Yallist<T>;
    static create<T>(list: Yallist.ForEachIterable<T>): Yallist<T>;
    static create<T>(...items: T[]): Yallist<T>;

    static Node: Yallist.NodeConstructor;

    head: Yallist.Node<T> | null;
    tail: Yallist.Node<T> | null;
    length: number;

    constructor();
    constructor(list: Yallist.ForEachIterable<T>);
    constructor(...items: T[]);

    forEach<U = this>(callbackFn: (this: U, value: T, index: number, list: this) => void, thisArg?: U): void;
    forEachReverse<U = this>(callbackFn: (this: U, value: T, index: number, list: this) => void, thisArg?: U): void;
    get(n: number): T | undefined;
    getReverse(n: number): T | undefined;
    map<U = this, R = T>(callbackFn: (this: U, value: T, list: this) => R, thisArg?: U): Yallist<R>;
    mapReverse<U = this, R = T>(callbackFn: (this: U, value: T, list: this) => R, thisArg?: U): Yallist<R>;
    pop(): T | undefined;
    push(...items: T[]): number;
    pushNode(node: Yallist.Node<T>): void;
    reduce<U = T>(fn: (previousValue: U, currentValue: T, index: number) => U, initialValue?: U): U;
    reduceReverse<U = T>(fn: (previousValue: U, currentValue: T, index: number) => U, initialValue?: U): U;
    removeNode(node: Yallist.Node<T>): void;
    reverse(): this;
    shift(): T | undefined;
    slice(from?: number, to?: number): Yallist<T>;
    sliceReverse(from?: number, to?: number): Yallist<T>;
    toArray(): T[];
    toArrayReverse(): T[];
    unshift(...items: T[]): number;
    unshiftNode(node: Yallist.Node<T>): void;

    [Symbol.iterator](): Iterator<T>;
}

declare namespace Yallist {
    interface ForEachIterable<T> {
        forEach(callbackFn: (item: T) => void): void;
    }

    interface NodeConstructor {
        <T>(value: T, prev?: Node<T>, next?: Node<T>, list?: Yallist<T>): Node<T>;
        new <T>(value: T, prev?: Node<T>, next?: Node<T>, list?: Yallist<T>): Node<T>;
    }

    interface Node<T> {
        prev: Node<T> | null;
        next: Node<T> | null;
        value: T;
        list?: Yallist<T>;
    }
}
