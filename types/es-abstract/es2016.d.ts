import ES2015 = require('./es2015');

interface ES2016 extends ES2015 {
    /**
     * @param x
     * @param y
     *
     * @throws {TypeError} If `x` or `y` is a `number` or they're different types.
     */
    SameValueNonNumber(
        x: object | null | undefined | string | boolean | symbol,
        y: object | null | undefined | string | boolean | symbol,
    ): boolean;

    IterableToArrayLike<T extends Iterable<unknown> | ArrayLike<unknown>>(
        items: T,
    ): T extends Iterable<infer I> ? I[] : T;

    OrdinaryGetPrototypeOf(O: object): object | null;
    OrdinarySetPrototypeOf(O: object, V: object | null): boolean;
}

declare namespace ES2016 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2015.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2015.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2015.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2015.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2015.PropertyDescriptor<T>;
}

declare const ES2016: ES2016;
export = ES2016;
