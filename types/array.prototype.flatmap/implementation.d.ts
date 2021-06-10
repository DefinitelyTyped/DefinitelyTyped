// This is the same type as the callable signature in `FlatMap` in `index.d.ts`.
declare function flatMap<A, B, T extends object | undefined = undefined>(
    xs: ReadonlyArray<A>,
    fn: (this: T, x: A, index: number, array: A[]) => ReadonlyArray<B>,
    thisArg?: T
): B[];
export = flatMap;
