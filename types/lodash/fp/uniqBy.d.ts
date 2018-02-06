import _ = require("../index");

declare namespace Lodash {
    interface UniqBy {
        (): UniqBy;
        (iteratee: _.StringIterator<_.NotVoid>): UniqBy1x1;
        (iteratee: _.StringIterator<_.NotVoid>, array: string | null | undefined): string[];
        <T>(iteratee: _.ValueIteratee<T>): UniqBy2x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface UniqBy1x1 {
        (): UniqBy1x1;
        (array: string | null | undefined): string[];
    }
    interface UniqBy2x1<T> {
        (): UniqBy2x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const uniqBy: Lodash.UniqBy;
export = uniqBy;
