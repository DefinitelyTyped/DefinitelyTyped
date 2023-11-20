import flatMapImpl = require("./implementation");

interface FlatMap {
    <A, B, T extends object | undefined = undefined>(
        xs: ReadonlyArray<A>,
        fn: (this: T, x: A, index: number, array: A[]) => ReadonlyArray<B>,
        thisArg?: T,
    ): B[];
    getPolyfill(): typeof flatMapImpl;
    implementation: typeof flatMapImpl;
    shim(): typeof flatMapImpl;
}

declare const flatMap: FlatMap;
export = flatMap;
