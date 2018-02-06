import _ = require("../index");

declare namespace Lodash {
    interface XorBy {
        (): XorBy;
        <T>(arrays2: _.List<T> | null | undefined): XorBy1x1<T>;
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>): XorBy1x2<T>;
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorBy1x1<T> {
        (): XorBy1x1<T>;
        (iteratee: _.ValueIteratee<T>): XorBy1x2<T>;
        (iteratee: _.ValueIteratee<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorBy1x2<T> {
        (): XorBy1x2<T>;
        (arrays: _.List<T> | null | undefined): T[];
    }
}

declare const xorBy: Lodash.XorBy;
export = xorBy;
