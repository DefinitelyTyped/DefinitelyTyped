import _ = require("../index");

declare namespace Lodash {
    interface OmitBy {
        (): OmitBy;
        <T>(predicate: _.ValueKeyIteratee<T>): OmitBy1x1<T>;
        <T extends object>(predicate: _.ValueKeyIteratee<T[keyof T]>, object: T | null | undefined): _.PartialObject<T>;
    }
    interface OmitBy1x1<T> {
        (): OmitBy1x1<T>;
        (object: object | null | undefined): _.PartialObject<T>;
    }
}

declare const omitBy: Lodash.OmitBy;
export = omitBy;
