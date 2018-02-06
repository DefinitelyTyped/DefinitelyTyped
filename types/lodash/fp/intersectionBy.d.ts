import _ = require("../index");

declare namespace Lodash {
    interface IntersectionBy {
        (): IntersectionBy;
        <T2>(values: _.List<T2>): IntersectionBy1x1<T1, T2>;
        <T1, T2>(values: _.List<T2>, iteratee: _.ValueIteratee<T1 | T2>): IntersectionBy1x2<T1>;
        <T1, T2>(values: _.List<T2>, iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null): T1[];
    }
    interface IntersectionBy1x1<T1, T2> {
        (): IntersectionBy1x1<T1, T2>;
        (iteratee: _.ValueIteratee<T1 | T2>): IntersectionBy1x2<T1>;
        (iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null): T1[];
    }
    interface IntersectionBy1x2<T1> {
        (): IntersectionBy1x2<T1>;
        <T2>(array: _.List<T1> | null): T1[];
    }
}

declare const intersectionBy: Lodash.IntersectionBy;
export = intersectionBy;
