import _ = require("../index");

declare namespace Lodash {
    interface MinBy {
        (): MinBy;
        <T>(iteratee: _.ValueIteratee<T>): MinBy1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): T | undefined;
    }
    interface MinBy1x1<T> {
        (): MinBy1x1<T>;
        (collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const minBy: Lodash.MinBy;
export = minBy;
