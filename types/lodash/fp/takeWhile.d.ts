import _ = require("../index");

declare namespace Lodash {
    interface TakeWhile {
        (): TakeWhile;
        <T>(predicate: _.ValueIteratee<T>): TakeWhile1x1<T>;
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface TakeWhile1x1<T> {
        (): TakeWhile1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const takeWhile: Lodash.TakeWhile;
export = takeWhile;
