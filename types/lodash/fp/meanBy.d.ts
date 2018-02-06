import _ = require("../index");

declare namespace Lodash {
    interface MeanBy {
        (): MeanBy;
        <T>(iteratee: _.ValueIteratee<T>): MeanBy1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): number;
    }
    interface MeanBy1x1<T> {
        (): MeanBy1x1<T>;
        (collection: _.List<T> | null | undefined): number;
    }
}

declare const meanBy: Lodash.MeanBy;
export = meanBy;
