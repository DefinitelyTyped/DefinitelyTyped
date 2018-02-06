import _ = require("../index");

declare namespace Lodash {
    interface ForOwnRight {
        (): ForOwnRight;
        <T>(iteratee: _.ObjectIterator<T, any>): ForOwnRight1x1<T>;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T): T;
        <T>(iteratee: _.ObjectIterator<T, any>, object: T | null | undefined): T | null | undefined;
    }
    interface ForOwnRight1x1<T> {
        (): ForOwnRight1x1<T>;
        (object: T): T;
        (object: T | null | undefined): T | null | undefined;
    }
}

declare const forOwnRight: Lodash.ForOwnRight;
export = forOwnRight;
