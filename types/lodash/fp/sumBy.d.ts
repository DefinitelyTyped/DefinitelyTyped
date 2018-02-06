import _ = require("../index");

declare namespace Lodash {
    interface SumBy {
        (): SumBy;
        <T>(iteratee: ((value: T) => number) | string): SumBy1x1<T>;
        <T>(iteratee: ((value: T) => number) | string, collection: _.List<T> | null | undefined): number;
    }
    interface SumBy1x1<T> {
        (): SumBy1x1<T>;
        (collection: _.List<T> | null | undefined): number;
    }
}

declare const sumBy: Lodash.SumBy;
export = sumBy;
