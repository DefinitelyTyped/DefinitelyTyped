import _ = require("../index");

declare namespace Lodash {
    interface MaxBy {
        (): MaxBy;
        <T>(iteratee: _.ValueIteratee<T>): MaxBy1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): T | undefined;
    }
    interface MaxBy1x1<T> {
        (): MaxBy1x1<T>;
        (collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const maxBy: Lodash.MaxBy;
export = maxBy;
