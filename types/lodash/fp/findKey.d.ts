import _ = require("../index");

declare namespace Lodash {
    interface FindKey {
        (): FindKey;
        <T>(predicate: _.ValueIteratee<T>): FindKey1x1<T>;
        <T>(predicate: _.ValueIteratee<T[keyof T]>, object: T | null | undefined): string | undefined;
    }
    interface FindKey1x1<T> {
        (): FindKey1x1<T>;
        (object: object | null | undefined): string | undefined;
    }
}

declare const findKey: Lodash.FindKey;
export = findKey;
