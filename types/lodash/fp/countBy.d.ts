import _ = require("../index");

declare namespace Lodash {
    interface CountBy {
        (): CountBy;
        <T>(iteratee: _.StringIterator<T>): CountBy1x1;
        <T>(iteratee: _.StringIterator<T>, collection: string | null | undefined): _.Dictionary<number>;
        <T>(iteratee: _.ValueIteratee<T>): CountBy2x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): _.Dictionary<number>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<number>;
        <T extends object>(iteratee: _.ValueIteratee<T[keyof T]>, collection: T | null | undefined): _.Dictionary<number>;
    }
    interface CountBy1x1 {
        (): CountBy1x1;
        <T>(collection: string | null | undefined): _.Dictionary<number>;
    }
    interface CountBy2x1<T> {
        (): CountBy2x1<T>;
        (collection: _.List<T> | null | undefined): _.Dictionary<number>;
        (collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<number>;
        (collection: object | null | undefined): _.Dictionary<number>;
    }
}

declare const countBy: Lodash.CountBy;
export = countBy;
