import _ = require("../index");

declare namespace Lodash {
    interface Filter {
        (): Filter;
        (predicate: _.StringIterator<boolean>): Filter1x1;
        (predicate: _.StringIterator<boolean>, collection: string | null | undefined): string[];
        <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): Filter2x1<T, S>;
        <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, collection: _.List<T> | null | undefined): S[];
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): Filter3x1<T>;
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T[];
        <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): Filter4x1<T, S>;
        <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, collection: T | null | undefined): S[];
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface Filter1x1 {
        (): Filter1x1;
        (collection: string | null | undefined): string[];
    }
    interface Filter2x1<T, S extends T> {
        (): Filter2x1<T, S>;
        (collection: _.List<T> | null | undefined): S[];
    }
    interface Filter3x1<T> {
        (): Filter3x1<T>;
        (collection: _.List<T> | null | undefined): T[];
        (collection: object | null | undefined): Array<T[keyof T]>;
    }
    interface Filter4x1<T extends object, S extends T[keyof T]> {
        (): Filter4x1<T, S>;
        (collection: T | null | undefined): S[];
    }
}

declare const filter: Lodash.Filter;
export = filter;
