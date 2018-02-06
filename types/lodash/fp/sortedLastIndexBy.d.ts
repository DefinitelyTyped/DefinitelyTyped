import _ = require("../index");

declare namespace Lodash {
    interface SortedLastIndexBy {
        (): SortedLastIndexBy;
        <T>(iteratee: _.ValueIteratee<T>): SortedLastIndexBy1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, value: T): SortedLastIndexBy1x2<T>;
        <T>(iteratee: _.ValueIteratee<T>, value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexBy1x1<T> {
        (): SortedLastIndexBy1x1<T>;
        (value: T): SortedLastIndexBy1x2<T>;
        (value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexBy1x2<T> {
        (): SortedLastIndexBy1x2<T>;
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedLastIndexBy: Lodash.SortedLastIndexBy;
export = sortedLastIndexBy;
