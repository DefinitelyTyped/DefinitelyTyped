import _ = require("../index");

declare namespace Lodash {
    interface SortedIndex {
        (): SortedIndex;
        <T>(value: T): SortedIndex1x1<T>;
        <T>(value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedIndex1x1<T> {
        (): SortedIndex1x1<T>;
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedIndex: Lodash.SortedIndex;
export = sortedIndex;
