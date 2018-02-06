import _ = require("../index");

declare namespace Lodash {
    interface DropRightWhile {
        (): DropRightWhile;
        <T>(predicate: _.ValueIteratee<T>): DropRightWhile1x1<T>;
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface DropRightWhile1x1<T> {
        (): DropRightWhile1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const dropRightWhile: Lodash.DropRightWhile;
export = dropRightWhile;
