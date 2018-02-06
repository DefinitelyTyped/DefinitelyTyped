import _ = require("../index");

declare namespace Lodash {
    interface SortedLastIndexOf {
        (): SortedLastIndexOf;
        <T>(value: T): SortedLastIndexOf1x1<T>;
        <T>(value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexOf1x1<T> {
        (): SortedLastIndexOf1x1<T>;
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedLastIndexOf: Lodash.SortedLastIndexOf;
export = sortedLastIndexOf;
