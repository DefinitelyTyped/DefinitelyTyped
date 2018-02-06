import _ = require("../index");

declare namespace Lodash {
    interface DropWhile {
        (): DropWhile;
        <T>(predicate: _.ValueIteratee<T>): DropWhile1x1<T>;
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface DropWhile1x1<T> {
        (): DropWhile1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const dropWhile: Lodash.DropWhile;
export = dropWhile;
