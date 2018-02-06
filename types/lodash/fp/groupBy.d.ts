import _ = require("../index");

declare namespace Lodash {
    interface GroupBy {
        (): GroupBy;
        (iteratee: _.StringIterator<_.NotVoid>): GroupBy1x1;
        (iteratee: _.StringIterator<_.NotVoid>, collection: string | null | undefined): _.Dictionary<string[]>;
        <T>(iteratee: _.ValueIteratee<T>): GroupBy2x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): _.Dictionary<T[]>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<T[]>;
        <T extends object>(iteratee: _.ValueIteratee<T[keyof T]>, collection: T | null | undefined): _.Dictionary<Array<T[keyof T]>>;
    }
    interface GroupBy1x1 {
        (): GroupBy1x1;
        (collection: string | null | undefined): _.Dictionary<string[]>;
    }
    interface GroupBy2x1<T> {
        (): GroupBy2x1<T>;
        (collection: _.List<T> | null | undefined): _.Dictionary<T[]>;
        (collection: _.NumericDictionary<T> | null | undefined): _.Dictionary<T[]>;
        (collection: object | null | undefined): _.Dictionary<Array<T[keyof T]>>;
    }
}

declare const groupBy: Lodash.GroupBy;
export = groupBy;
