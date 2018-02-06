import _ = require("../index");

declare namespace Lodash {
    interface ForIn {
        (): ForIn;
        <T>(iteratee: _.ObjectIterator<T, any>): ForIn1x1<T>;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T): T;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T | null | undefined): T | null | undefined;
    }
    interface ForIn1x1<T> {
        (): ForIn1x1<T>;
        (object: T): T;
        (object: T | null | undefined): T | null | undefined;
    }
}

declare const forIn: Lodash.ForIn;
export = forIn;
