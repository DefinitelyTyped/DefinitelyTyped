import ES2018 = require('./es2018');

type NestedReadonlyNumberRecordOrArray<T> = Readonly<Record<number, T | readonly unknown[]>>;
interface WritableArrayLike<T> {
    length: number;
    [n: number]: T;
}

interface ES2019 extends ES2018 {
    AddEntriesFromIterable<T, K, V>(
        target: T,
        iterable: Iterable<readonly [K, V]>,
        adder: (this: T, key: K, value: V) => void,
    ): T;

    FlattenIntoArray<T>(
        target: Record<number, T>,
        source: Readonly<Record<number, T | readonly unknown[]>>,
        sourceLen: number,
        start: number,
        depth: number,
    ): number;
    FlattenIntoArray<T, S, THIS_ARG, AS extends NestedReadonlyNumberRecordOrArray<S>>(
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
    FlattenIntoArray<T, S, THIS_ARG, AS extends NestedReadonlyNumberRecordOrArray<S>, U>(
        target: Record<number, T>,
        source: AS,
        sourceLen: number,
        start: number,
        depth: number,
        mapperFunction: (this: THIS_ARG, element: S | U, sourceIndex: number, source: AS) => T | U,
        thisArg: THIS_ARG,
    ): number;

    TrimString(string: string, where: 'start' | 'end' | 'start+end'): string;
}

declare namespace ES2019 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2018.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2018.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2018.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2018.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2018.PropertyDescriptor<T>;
}

declare const ES2019: ES2019;
export = ES2019;
