import _ = require("../index");

declare namespace Lodash {
    interface SortedLastIndex {
        (): SortedLastIndex;
        <T>(value: T): SortedLastIndex1x1<T>;
        <T>(value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndex1x1<T> {
        (): SortedLastIndex1x1<T>;
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedLastIndex: Lodash.SortedLastIndex;
export = sortedLastIndex;
