import _ = require("../index");

declare namespace Lodash {
    interface TakeRightWhile {
        (): TakeRightWhile;
        <T>(predicate: _.ValueIteratee<T>): TakeRightWhile1x1<T>;
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface TakeRightWhile1x1<T> {
        (): TakeRightWhile1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const takeRightWhile: Lodash.TakeRightWhile;
export = takeRightWhile;
