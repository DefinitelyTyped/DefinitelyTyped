import _ = require("../index");

declare namespace Lodash {
    interface FindLastKey {
        (): FindLastKey;
        <T>(predicate: _.ValueIteratee<T>): FindLastKey1x1<T>;
        <T>(predicate: _.ValueIteratee<T[keyof T]>, object: T | null | undefined): string | undefined;
    }
    interface FindLastKey1x1<T> {
        (): FindLastKey1x1<T>;
        (object: object | null | undefined): string | undefined;
    }
}

declare const findLastKey: Lodash.FindLastKey;
export = findLastKey;
