import flatMapImpl = require("./implementation");

interface FlatMap {
    <A, B, T extends object | undefined = undefined>(
        xs: readonly A[],
        fn: (this: T, x: A, index: number, array: A[]) => readonly B[],
        thisArg?: T,
    ): B[];
    getPolyfill(): typeof flatMapImpl;
    implementation: typeof flatMapImpl;
    shim(): typeof flatMapImpl;
}

declare const flatMap: FlatMap;
export = flatMap;
