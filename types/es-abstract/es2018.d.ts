import ES2017 = require('./es2017');

type PromiseConstructorLikeReturnType<C extends PromiseConstructorLike, T> = C extends new (
    executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,
) => infer R
    ? R
    : PromiseLike<T>;

interface ES2018 extends Omit<ES2017, 'EnumerableOwnProperties' | 'GetSubstitution' | 'IsPropertyDescriptor'> {
    readonly EnumerableOwnPropertyNames: typeof ES2017.EnumerableOwnProperties;

    // tslint:disable-next-line: ban-types
    thisSymbolValue(value: symbol | Symbol): symbol;

    IsStringPrefix(p: string, q: string): boolean;
    NumberToString(m: number): string;
    CopyDataProperties<T, S, E extends ES2017.PropertyKey>(target: T, source: S, excludedItems: E[]): T & Omit<S, E>;
    PromiseResolve<T>(C: PromiseConstructor, x: T): Promise<T>;
    PromiseResolve<C extends PromiseConstructorLike, T>(C: C, x: T): PromiseConstructorLikeReturnType<C, T>;

    GetSubstitution(
        matched: string,
        str: string,
        position: number,
        captures: string[],
        namedCaptures: undefined | { [groupName: string]: unknown },
        replacement: string,
    ): string;

    DateString(tv: number): string;
    TimeString(tv: number): string;
}

declare namespace ES2018 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2017.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2017.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2017.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2017.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2017.PropertyDescriptor<T>;
}

declare const ES2018: ES2018;
export = ES2018;
