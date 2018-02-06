import _ = require("../index");

declare namespace Lodash {
    interface InvertBy {
        (): InvertBy;
        <T>(interatee: _.ValueIteratee<T>): InvertBy1x1<T>;
        <T>(interatee: _.ValueIteratee<T>, object: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): _.Dictionary<string[]>;
        <T extends object>(interatee: _.ValueIteratee<T[keyof T]>, object: T | null | undefined): _.Dictionary<string[]>;
    }
    interface InvertBy1x1<T> {
        (): InvertBy1x1<T>;
        (object: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): _.Dictionary<string[]>;
        (object: object | null | undefined): _.Dictionary<string[]>;
    }
}

declare const invertBy: Lodash.InvertBy;
export = invertBy;
