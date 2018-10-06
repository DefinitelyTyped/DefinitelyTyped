// Type definitions for array.prototype.flatmap 1.2
// Project: https://github.com/es-shims/Array.prototype.flatMap#readme
// Definitions by: Jesse Hallett <https://github.com/hallettj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import flatMapImpl = require("./implementation");

interface FlatMap {
    <A, B, T extends object | undefined = undefined>(
        xs: ReadonlyArray<A>,
        fn: (this: T, x: A, index: number, array: A[]) => B[],
        thisArg?: T
    ): B[];
    getPolyfill(): typeof flatMapImpl;
    implementation: typeof flatMapImpl;
    shim(): typeof flatMapImpl;
}

declare const flatMap: FlatMap;
export = flatMap;
