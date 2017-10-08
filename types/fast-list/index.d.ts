// Type definitions for fast-list 1.0
// Project: https://github.com/isaacs/fast-list#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace FastList;
export = FastList;

declare const FastList: FastListFactory;

interface FastListFactory {
    <T>(): FastList.List<T>;
    new <T>(): FastList.List<T>;
}

declare namespace FastList {
    interface List<T> {
        readonly length: number;

        push(item: T): void;
        pop(): T | undefined;
        unshift(item: T): void;
        shift(): T | undefined;
        drop(): void;
        item(index: number): T | undefined;
        map <U = T, V = this>(callbackfn: (this: V, value: T, index: number, list: this) => U, thisArg?: V): List<U>;
        reduce <U = T, V = this>(callbackfn: (this: V, acc: U, value: T, index: number, list: this) => U, initialValue?: U, thisArg?: V): U;
        forEach <U = this>(callbackfn: (this: U, value: T, index: number, list: this) => void, thisArg?: U): void;
        filter <U = this>(callbackfn: (this: U, value: T, index: number, list: this) => boolean, thisArg?: U): List<T>;
        slice(start?: number, end?: number): T[];
    }
}
