type NestedReadonlyNumberRecordOrArray<T> = Readonly<Record<number, T | readonly unknown[]>>;

declare function FlattenIntoArray<T>(
    target: Record<number, T>,
    source: Readonly<Record<number, T | readonly unknown[]>>,
    sourceLen: number,
    start: number,
    depth: number,
): number;
declare function FlattenIntoArray<T, S, THIS_ARG, AS extends NestedReadonlyNumberRecordOrArray<S>>(
    target: Record<number, T>,
    source: AS,
    sourceLen: number,
    start: number,
    depth: number,
    mapperFunction: (
        this: THIS_ARG,
        element: S | readonly unknown[],
        sourceIndex: number,
        source: AS,
    ) => T | ReadonlyArray<S | readonly unknown[]>,
    thisArg: THIS_ARG,
): number;
declare function FlattenIntoArray<T, S, THIS_ARG, AS extends NestedReadonlyNumberRecordOrArray<S>, U>(
    target: Record<number, T>,
    source: AS,
    sourceLen: number,
    start: number,
    depth: number,
    mapperFunction: (this: THIS_ARG, element: S | U, sourceIndex: number, source: AS) => T | U,
    thisArg: THIS_ARG,
): number;
export = FlattenIntoArray;
