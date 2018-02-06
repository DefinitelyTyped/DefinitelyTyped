import _ = require("../index");

declare namespace Lodash {
    interface SortedUniqBy {
        (): SortedUniqBy;
        (iteratee: _.StringIterator<_.NotVoid>): SortedUniqBy1x1;
        (iteratee: _.StringIterator<_.NotVoid>, array: string | null | undefined): string[];
        <T>(iteratee: _.ValueIteratee<T>): SortedUniqBy2x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface SortedUniqBy1x1 {
        (): SortedUniqBy1x1;
        (array: string | null | undefined): string[];
    }
    interface SortedUniqBy2x1<T> {
        (): SortedUniqBy2x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const sortedUniqBy: Lodash.SortedUniqBy;
export = sortedUniqBy;
