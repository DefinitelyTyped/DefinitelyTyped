import _ = require("../index");

declare namespace Lodash {
    interface OrderBy {
        (): OrderBy;
        (orders: _.Many<boolean|string>): OrderBy1x1<T>;
        <T>(orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined): OrderBy1x2<T>;
        <T>(orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined, iteratees: _.Many<_.ListIterator<T, _.NotVoid>>): T[];
        <T>(orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined, iteratees: _.Many<_.ValueIteratee<T>>): T[];
        <T extends object>(orders: _.Many<boolean|string>, collection: T | null | undefined): OrderBy3x2<T>;
        <T extends object>(orders: _.Many<boolean|string>, collection: T | null | undefined, iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>): Array<T[keyof T]>;
        <T extends object>(orders: _.Many<boolean|string>, collection: T | null | undefined, iteratees: _.Many<_.ValueIteratee<T[keyof T]>>): Array<T[keyof T]>;
        <T>(orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined): OrderBy5x2<T>;
        <T>(orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined, iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>): T[];
        <T>(orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined, iteratees: _.Many<_.ValueIteratee<T>>): T[];
    }
    interface OrderBy1x1<T> {
        (): OrderBy1x1<T>;
        (collection: _.List<T> | null | undefined): OrderBy1x2<T>;
        (collection: _.List<T> | null | undefined, iteratees: _.Many<_.ListIterator<T, _.NotVoid>>): T[];
        (collection: _.List<T> | null | undefined): OrderBy2x2<T>;
        (collection: _.List<T> | null | undefined, iteratees: _.Many<_.ValueIteratee<T>>): T[];
        (collection: T | null | undefined): OrderBy3x2<T>;
        (collection: T | null | undefined, iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>): Array<T[keyof T]>;
        (collection: T | null | undefined): OrderBy4x2<T>;
        (collection: T | null | undefined, iteratees: _.Many<_.ValueIteratee<T[keyof T]>>): Array<T[keyof T]>;
        (collection: _.NumericDictionary<T> | null | undefined): OrderBy5x2<T>;
        (collection: _.NumericDictionary<T> | null | undefined, iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>): T[];
        (collection: _.NumericDictionary<T> | null | undefined): OrderBy6x2<T>;
        (collection: _.NumericDictionary<T> | null | undefined, iteratees: _.Many<_.ValueIteratee<T>>): T[];
    }
    interface OrderBy1x2<T> {
        (): OrderBy1x2<T>;
        (iteratees: _.Many<_.ListIterator<T, _.NotVoid>>): T[];
        (iteratees: _.Many<_.ValueIteratee<T>>): T[];
    }
    interface OrderBy3x2<T extends object> {
        (): OrderBy3x2<T>;
        (iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>): Array<T[keyof T]>;
        (iteratees: _.Many<_.ValueIteratee<T[keyof T]>>): Array<T[keyof T]>;
    }
    interface OrderBy5x2<T> {
        (): OrderBy5x2<T>;
        (iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>): T[];
        (iteratees: _.Many<_.ValueIteratee<T>>): T[];
    }
}

declare const orderBy: Lodash.OrderBy;
export = orderBy;
