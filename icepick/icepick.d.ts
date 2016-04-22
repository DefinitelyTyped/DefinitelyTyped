// Type definitions for icepick v1.1.0
// Project: https://github.com/aearly/icepick
// Definitions by: Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export function freeze<T>(collection: T): T;
declare export function thaw<T>(collection: T): T;
declare export function assoc<T>(collection: T, key: number | string, value: any): T;
declare export function dissoc<T>(collection: T, key: number | string): T;
declare export function assocIn<T>(collection: T, path: Array<number | string>, value: any): T;
declare export function getIn<Result>(collection: any, path: Array<number | string>): Result;
declare export function updateIn<T, V>(collection: T, path: Array<number | string>, callback: (value: V) => V): T;

export {assoc as set};
export {dissoc as unset};
export {assocIn as setIn};

declare export function assign<T>(target: T): T;
declare export function assign<T, S1>(target: T, source1: S1): (T & S1);
declare export function assign<T, S1, S2>(target: T, s1: S1, s2: S2): (T & S1 & S2);
declare export function assign<T, S1, S2, S3>(target: T, s1: S1, s2: S2, s3: S3): (T & S1 & S2 & S3);
declare export function assign<T, S1, S2, S3, S4>(target: T, s1: S1, s2: S2, s3: S3, s4: S4): (T & S1 & S2 & S3 & S4);

export {assign as extend};

declare export function merge<T, S1>(target: T, source: S1): (T & S1);

declare export function push<T>(array: T[], element: T): T[];
declare export function pop<T>(array: T[]): T[];
declare export function shift<T>(array: T[]): T[];
declare export function unshift<T>(array: T[], element: T): T[];
declare export function reverse<T>(array: T[]): T[];
declare export function sort<T>(array: T[], compareFunction?: (a: T, b: T) => number): T[];
declare export function splice<T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[];
declare export function slice<T>(array: T[], begin?: number, end?: number): T[];

declare export function map<T, U>(fn: (value: T) => U, array: T[]): U[];
declare export function filter<T>(fn: (value: T) => boolean, array: T[]): T[];

interface IcepickWrapper<T> {
    value(): T;

    freeze(): IcepickWrapper<T>;
    thaw(): IcepickWrapper<T>;

    assoc(key: number | string, value: any): IcepickWrapper<T>;
    set(key: number | string, value: any): IcepickWrapper<T>;

    dissoc(key: number | string): IcepickWrapper<T>;
    unset(key: number | string): IcepickWrapper<T>;

    assocIn(path: Array<number | string>, value: any): IcepickWrapper<T>;
    setIn(path: Array<number | string>, value: any): IcepickWrapper<T>;

    getIn<Result>(collection: any, path: Array<number | string>): IcepickWrapper<Result>;
    updateIn<T, V>(collection: T, path: Array<number | string>, callback: (value: V) => V): IcepickWrapper<T>;

    assign<S1>(source1: S1): IcepickWrapper<T & S1>;
    assign<S1, S2>(s1: S1, s2: S2): IcepickWrapper<T & S1 & S2>;
    assign<S1, S2, S3>(s1: S1, s2: S2, s3: S3): IcepickWrapper<T & S1 & S2 & S3>;
    assign<S1, S2, S3, S4>(s1: S1, s2: S2, s3: S3, s4: S4): IcepickWrapper<T & S1 & S2 & S3 & S4>;
    extend<S1>(source1: S1): IcepickWrapper<T & S1>;
    extend<S1, S2>(s1: S1, s2: S2): IcepickWrapper<T & S1 & S2>;
    extend<S1, S2, S3>(s1: S1, s2: S2, s3: S3): IcepickWrapper<T & S1 & S2 & S3>;
    extend<S1, S2, S3, S4>(s1: S1, s2: S2, s3: S3, s4: S4): IcepickWrapper<T & S1 & S2 & S3 & S4>;

    merge<S1>(source: S1): IcepickWrapper<T & S1>;
}

declare export function chain<T>(target: T): IcepickWrapper<T>;
