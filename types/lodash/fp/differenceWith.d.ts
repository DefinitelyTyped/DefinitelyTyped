import _ = require("../index");

declare namespace Lodash {
    interface DifferenceWith {
        (): DifferenceWith;
        <T2>(values: _.List<T2>): DifferenceWith1x1<T1, T2>;
        <T1, T2>(values: _.List<T2>, comparator: _.Comparator2<T1, T2>): DifferenceWith1x2<T1>;
        <T1, T2>(values: _.List<T2>, comparator: _.Comparator2<T1, T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface DifferenceWith1x1<T1, T2> {
        (): DifferenceWith1x1<T1, T2>;
        (comparator: _.Comparator2<T1, T2>): DifferenceWith1x2<T1>;
        (comparator: _.Comparator2<T1, T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface DifferenceWith1x2<T1> {
        (): DifferenceWith1x2<T1>;
        <T2>(array: _.List<T1> | null | undefined): T1[];
    }
}

declare const differenceWith: Lodash.DifferenceWith;
export = differenceWith;
