import _ = require("../index");

declare namespace Lodash {
    interface XorWith {
        (): XorWith;
        <T>(arrays2: _.List<T> | null | undefined): XorWith1x1<T>;
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>): XorWith1x2<T>;
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorWith1x1<T> {
        (): XorWith1x1<T>;
        (comparator: _.Comparator<T>): XorWith1x2<T>;
        (comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorWith1x2<T> {
        (): XorWith1x2<T>;
        (arrays: _.List<T> | null | undefined): T[];
    }
}

declare const xorWith: Lodash.XorWith;
export = xorWith;
