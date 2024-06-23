export = mergeDeep;

/** Recursively merge values in a javascript object. */
declare function mergeDeep<T, U>(orig: T, objects: U): T & U;
declare function mergeDeep<T, U, V>(orig: T, objects1: U, objects2: V): T & U & V;
declare function mergeDeep<T, U, V, W>(orig: T, objects1: U, objects2: V, objects3: W): T & U & V & W;
declare function mergeDeep<T, U, V, W, X>(
    orig: T,
    objects1: U,
    objects2: V,
    objects3: W,
    objects4: X,
): T & U & V & W & X;
declare function mergeDeep(target: any, ...sources: any[]): any;
