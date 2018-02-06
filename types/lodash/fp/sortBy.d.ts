import _ = require("../index");

declare namespace Lodash {
    interface SortBy {
        (): SortBy;
        <T>(...iteratees: Array<_.Many<_.ValueIteratee<T>>>): SortBy1x1<T>;
        <T>(...iteratees: Array<_.Many<_.ValueIteratee<T>>>, collection: _.List<T> | null | undefined): T[];
        <T extends object>(...iteratees: Array<_.Many<_.ValueIteratee<T[keyof T]>>>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface SortBy1x1<T> {
        (): SortBy1x1<T>;
        (collection: _.List<T> | null | undefined): T[];
        (collection: object | null | undefined): Array<T[keyof T]>;
    }
}

declare const sortBy: Lodash.SortBy;
export = sortBy;
