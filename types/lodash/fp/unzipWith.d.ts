import _ = require("../index");

declare namespace Lodash {
    interface UnzipWith {
        (): UnzipWith;
        <T, TResult>(iteratee: (...values: T[]) => TResult): UnzipWith1x1<T, TResult>;
        <T, TResult>(iteratee: (...values: T[]) => TResult, array: _.List<_.List<T>> | null | undefined): TResult[];
    }
    interface UnzipWith1x1<T, TResult> {
        (): UnzipWith1x1<T, TResult>;
        (array: _.List<_.List<T>> | null | undefined): TResult[];
    }
}

declare const unzipWith: Lodash.UnzipWith;
export = unzipWith;
