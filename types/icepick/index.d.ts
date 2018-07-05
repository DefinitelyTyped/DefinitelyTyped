// Type definitions for icepick v1.3.0
// Project: https://github.com/aearly/icepick
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Tobias Cohen <https://github.com/tobico>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function freeze<T>(collection: T): T;
export declare function thaw<T>(collection: T): T;
export declare function assoc<T, V>(collection: T, key: number | string, value: V): T;
export declare function dissoc<T>(collection: T, key: number | string): T;
export declare function assocIn<T, V>(collection: T, path: Array<number | string>, value: V): T;
export declare function getIn<T>(collection: T, path: Array<number | string>): any;
export declare function updateIn<T, V>(collection: T, path: Array<number | string>, callback: (value: V) => V): T;

export {assoc as set};
export {dissoc as unset};
export {assocIn as setIn};

export declare function assign<T>(target: T): T;
export declare function assign<T, S1>(target: T, source1: S1): (T & S1);
export declare function assign<T, S1, S2>(target: T, s1: S1, s2: S2): (T & S1 & S2);
export declare function assign<T, S1, S2, S3>(target: T, s1: S1, s2: S2, s3: S3): (T & S1 & S2 & S3);
export declare function assign<T, S1, S2, S3, S4>(target: T, s1: S1, s2: S2, s3: S3, s4: S4): (T & S1 & S2 & S3 & S4);

export {assign as extend};

export declare function merge<T, S1>(target: T, source: S1): (T & S1);

export declare function push<T>(array: T[], element: T): T[];
export declare function pop<T>(array: T[]): T[];
export declare function shift<T>(array: T[]): T[];
export declare function unshift<T>(array: T[], element: T): T[];
export declare function reverse<T>(array: T[]): T[];
export declare function sort<T>(array: T[], compareFunction?: (a: T, b: T) => number): T[];
export declare function splice<T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[];
export declare function slice<T>(array: T[], begin?: number, end?: number): T[];

export declare function map<T, U>(fn: (value: T) => U, array: T[]): U[];
export declare function filter<T>(fn: (value: T) => boolean, array: T[]): T[];

interface IcepickWrapper<T> {
    value(): T;

    freeze(): IcepickWrapper<T>;
    thaw(): IcepickWrapper<T>;

    assoc<V>(key: number | string, value: V): IcepickWrapper<T>;
    set<V>(key: number | string, value: V): IcepickWrapper<T>;

    dissoc(key: number | string): IcepickWrapper<T>;
    unset(key: number | string): IcepickWrapper<T>;

    assocIn<V>(path: Array<number | string>, value: V): IcepickWrapper<T>;
    setIn<V>(path: Array<number | string>, value: V): IcepickWrapper<T>;

    getIn(path: Array<number | string>): IcepickWrapper<any>;
    updateIn<V>(path: Array<number | string>, callback: (value: V) => V): IcepickWrapper<T>;

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

export declare function chain<T>(target: T): IcepickWrapper<T>;
