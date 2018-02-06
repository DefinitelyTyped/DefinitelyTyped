import _ = require("../index");

declare namespace Lodash {
    interface Reject {
        (): Reject;
        (predicate: _.StringIterator<boolean>): Reject1x1;
        (predicate: _.StringIterator<boolean>, collection: string | null | undefined): string[];
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): Reject2x1<T>;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T[];
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface Reject1x1 {
        (): Reject1x1;
        (collection: string | null | undefined): string[];
    }
    interface Reject2x1<T> {
        (): Reject2x1<T>;
        (collection: _.List<T> | null | undefined): T[];
        (collection: object | null | undefined): Array<T[keyof T]>;
    }
}

declare const reject: Lodash.Reject;
export = reject;
