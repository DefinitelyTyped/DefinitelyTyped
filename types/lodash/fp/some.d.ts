import _ = require("../index");

declare namespace Lodash {
    interface Some {
        (): Some;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): Some1x1<T>;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): boolean;
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): boolean;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.NumericDictionary<T> | null | undefined): boolean;
    }
    interface Some1x1<T> {
        (): Some1x1<T>;
        (collection: _.List<T> | null | undefined): boolean;
        (collection: object | null | undefined): boolean;
        (collection: _.NumericDictionary<T> | null | undefined): boolean;
    }
}

declare const some: Lodash.Some;
export = some;
