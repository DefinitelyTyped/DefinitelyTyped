// This is the same type as the callable signature in `FlatMap` in `index.d.ts`.
declare function flatMap<A, B, T extends object | undefined = undefined>(
    xs: readonly A[],
    fn: (this: T, x: A, index: number, array: A[]) => readonly B[],
    thisArg?: T,
): B[];
export = flatMap;
