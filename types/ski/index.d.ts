export declare function S<T, S, U>(x: (z: U) => (y: S) => T, y: (z: U) => S, z: U): T;
export declare function K<T, S>(x: T): (y?: S) => T;
export declare function I<T>(x: T): T;
