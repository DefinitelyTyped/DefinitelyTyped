import _ = require("../index");

declare namespace Lodash {
    interface PullAllWith {
        (): PullAllWith;
        <T>(comparator: _.Comparator<T>): PullAllWith1x1<T>;
        <T>(comparator: _.Comparator<T>, values: _.List<T>): PullAllWith1x2<T>;
        <T>(comparator: _.Comparator<T>, values: _.List<T>, array: T[]): T[];
        <T>(comparator: _.Comparator<T>, values: _.List<T>, array: _.List<T>): _.List<T>;
        <T1, T2>(comparator: _.Comparator2<T1, T2>): PullAllWith3x1<T1, T2>;
        <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>): PullAllWith3x2<T1>;
        <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>, array: T1[]): T1[];
        <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>, array: _.List<T1>): _.List<T1>;
    }
    interface PullAllWith1x1<T> {
        (): PullAllWith1x1<T>;
        (values: _.List<T>): PullAllWith1x2<T>;
        (values: _.List<T>, array: T[]): T[];
        (values: _.List<T>): PullAllWith2x2<T>;
        (values: _.List<T>, array: _.List<T>): _.List<T>;
    }
    interface PullAllWith1x2<T> {
        (): PullAllWith1x2<T>;
        (array: T[]): T[];
        (array: _.List<T>): _.List<T>;
    }
    interface PullAllWith3x1<T1, T2> {
        (): PullAllWith3x1<T1, T2>;
        (values: _.List<T2>): PullAllWith3x2<T1>;
        (values: _.List<T2>, array: T1[]): T1[];
        (values: _.List<T2>): PullAllWith4x2<T1>;
        (values: _.List<T2>, array: _.List<T1>): _.List<T1>;
    }
    interface PullAllWith3x2<T1> {
        (): PullAllWith3x2<T1>;
        <T2>(array: T1[]): T1[];
        <T2>(array: _.List<T1>): _.List<T1>;
    }
}

declare const pullAllWith: Lodash.PullAllWith;
export = pullAllWith;
