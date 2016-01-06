// Type definitions for icepick v1.1.0
// Project: https://github.com/aearly/icepick
// Definitions by: Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "icepick" {
  export function freeze<T>(collection: T): T;
  export function thaw<T>(collection: T): T;
  export function assoc<T>(collection: T, key: number | string, value: any): T;
  export function dissoc<T>(collection: T, key: number | string): T;
  export function assocIn<T>(collection: T, path: Array<number | string>, value: any): T;
  export function getIn<Result>(collection: any, path: Array<number | string>): Result;
  export function updateIn<T, V>(collection: T, path: Array<number | string>, callback: (value: V) => V): T;

  export {assoc as set};
  export {dissoc as unset};
  export {assocIn as setIn};

  export function assign<T>(target: T): T;
  export function assign<T, S1>(target: T, source1: S1): (T & S1);
  export function assign<T, S1, S2>(target: T, s1: S1, s2: S2): (T & S1 & S2);
  export function assign<T, S1, S2, S3>(target: T, s1: S1, s2: S2, s3: S3): (T & S1 & S2 & S3);
  export function assign<T, S1, S2, S3, S4>(target: T, s1: S1, s2: S2, s3: S3, s4: S4): (T & S1 & S2 & S3 & S4);

  export {assign as extend};

  export function merge<T, S1>(target: T, source: S1): (T & S1);

  export function push<T>(array: T[], element: T): T[];
  export function pop<T>(array: T[]): T[];
  export function shift<T>(array: T[]): T[];
  export function unshift<T>(array: T[], element: T): T[];
  export function reverse<T>(array: T[]): T[];
  export function sort<T>(array: T[], compareFunction?: (a:T, b:T) => number): T[];
  export function splice<T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[];
  export function slice<T>(array: T[], begin?: number, end?: number): T[];

  export function map<T, U>(fn: (value: T) => U, array: T[]): U[];
  export function filter<T>(fn: (value: T) => boolean, array: T[]): T[];

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

  export function chain<T>(target: T): IcepickWrapper<T>;
}
