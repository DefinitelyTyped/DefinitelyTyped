import _ = require("../index");

declare namespace Lodash {
    interface KeyBy {
        (): KeyBy;
        (iteratee: _.StringIterator<_.PropertyName>): KeyBy1x1;
        (iteratee: _.StringIterator<_.PropertyName>, collection: string | null | undefined): _.Dictionary<string>;
        <T>(iteratee: _.ValueIterateeCustom<T, _.PropertyName>): KeyBy2x1<T>;
        <T>(iteratee: _.ValueIterateeCustom<T, _.PropertyName>, collection: _.List<T> | null | undefined): _.Dictionary<T>;
        <T extends object>(iteratee: _.ValueIterateeCustom<T[keyof T], _.PropertyName>, collection: T | null | undefined): _.Dictionary<T[keyof T]>;
        <T>(iteratee: _.ValueIterateeCustom<T, _.PropertyName>, collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<T>;
    }
    interface KeyBy1x1 {
        (): KeyBy1x1;
        (collection: string | null | undefined): _.Dictionary<string>;
    }
    interface KeyBy2x1<T> {
        (): KeyBy2x1<T>;
        (collection: _.List<T> | null | undefined): _.Dictionary<T>;
        (collection: object | null | undefined): _.Dictionary<T[keyof T]>;
        (collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<T>;
    }
}

declare const keyBy: Lodash.KeyBy;
export = keyBy;
