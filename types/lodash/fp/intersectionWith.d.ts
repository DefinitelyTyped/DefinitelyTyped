import _ = require("../index");

declare namespace Lodash {
    interface IntersectionWith {
        (): IntersectionWith;
        <T2>(values: _.List<T2>): IntersectionWith1x1<T1, T2>;
        <T1, T2>(values: _.List<T2>, comparator: _.Comparator2<T1, T2>): IntersectionWith1x2<T1>;
        <T1, T2>(values: _.List<T2>, comparator: _.Comparator2<T1, T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface IntersectionWith1x1<T1, T2> {
        (): IntersectionWith1x1<T1, T2>;
        (comparator: _.Comparator2<T1, T2>): IntersectionWith1x2<T1>;
        (comparator: _.Comparator2<T1, T2>, array: _.List<T1> | null | undefined): T1[];
    }
    interface IntersectionWith1x2<T1> {
        (): IntersectionWith1x2<T1>;
        <T2>(array: _.List<T1> | null | undefined): T1[];
    }
}

declare const intersectionWith: Lodash.IntersectionWith;
export = intersectionWith;
