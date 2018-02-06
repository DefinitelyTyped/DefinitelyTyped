import _ = require("../index");

declare namespace Lodash {
    interface DifferenceBy {
        (): DifferenceBy;
        <T2>(values: _.List<T2>): DifferenceBy1x1<T1, T2>;
        <T1, T2>(values: _.List<T2>, iteratee: _.ValueIteratee<T1 | T2>): DifferenceBy1x2<T1>;
        <T1, T2>(values: _.List<T2>, iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface DifferenceBy1x1<T1, T2> {
        (): DifferenceBy1x1<T1, T2>;
        (iteratee: _.ValueIteratee<T1 | T2>): DifferenceBy1x2<T1>;
        (iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface DifferenceBy1x2<T1> {
        (): DifferenceBy1x2<T1>;
        <T2>(array: _.List<T1> | null | undefined): T1[];
    }
}

declare const differenceBy: Lodash.DifferenceBy;
export = differenceBy;
