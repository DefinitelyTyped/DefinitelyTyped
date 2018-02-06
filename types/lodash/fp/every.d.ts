import _ = require("../index");

declare namespace Lodash {
    interface Every {
        (): Every;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): Every1x1<T>;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): boolean;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.NumericDictionary<T> | null | undefined): boolean;
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): boolean;
    }
    interface Every1x1<T> {
        (): Every1x1<T>;
        (collection: _.List<T> | null | undefined): boolean;
        (collection: _.NumericDictionary<T> | null | undefined): boolean;
        (collection: object | null | undefined): boolean;
    }
}

declare const every: Lodash.Every;
export = every;
