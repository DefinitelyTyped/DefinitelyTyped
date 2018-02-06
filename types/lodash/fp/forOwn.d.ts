import _ = require("../index");

declare namespace Lodash {
    interface ForOwn {
        (): ForOwn;
        <T>(iteratee: _.ObjectIterator<T, any>): ForOwn1x1<T>;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T): T;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T | null | undefined): T | null | undefined;
    }
    interface ForOwn1x1<T> {
        (): ForOwn1x1<T>;
        (object: T): T;
        (object: T | null | undefined): T | null | undefined;
    }
}

declare const forOwn: Lodash.ForOwn;
export = forOwn;
