declare function objectAssign<T, U>(target: T, source: U): T & U;
declare function objectAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
declare function objectAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
declare function objectAssign<T, U, V, W, Q>(
    target: T,
    source1: U,
    source2: V,
    source3: W,
    source4: Q,
): T & U & V & W & Q;
declare function objectAssign<T, U, V, W, Q, R>(
    target: T,
    source1: U,
    source2: V,
    source3: W,
    source4: Q,
    source5: R,
): T & U & V & W & Q & R;
declare function objectAssign(target: any, ...sources: any[]): any;
declare namespace objectAssign {}
export = objectAssign;
