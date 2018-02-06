import _ = require("../index");

declare namespace Lodash {
    interface SortedIndexOf {
        (): SortedIndexOf;
        <T>(value: T): SortedIndexOf1x1<T>;
        <T>(value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedIndexOf1x1<T> {
        (): SortedIndexOf1x1<T>;
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedIndexOf: Lodash.SortedIndexOf;
export = sortedIndexOf;
