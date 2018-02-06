import _ = require("../index");

declare namespace Lodash {
    interface PullAllBy {
        (): PullAllBy;
        <T>(iteratee: _.ValueIteratee<T>): PullAllBy1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>): PullAllBy1x2<T>;
        <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>, array: T[]): T[];
        <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>, array: _.List<T>): _.List<T>;
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>): PullAllBy3x1<T1, T2>;
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>): PullAllBy3x2<T1>;
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>, array: T1[]): T1[];
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>, array: _.List<T1>): _.List<T1>;
    }
    interface PullAllBy1x1<T> {
        (): PullAllBy1x1<T>;
        (values: _.List<T>): PullAllBy1x2<T>;
        (values: _.List<T>, array: T[]): T[];
        (values: _.List<T>): PullAllBy2x2<T>;
        (values: _.List<T>, array: _.List<T>): _.List<T>;
    }
    interface PullAllBy1x2<T> {
        (): PullAllBy1x2<T>;
        (array: T[]): T[];
        (array: _.List<T>): _.List<T>;
    }
    interface PullAllBy3x1<T1, T2> {
        (): PullAllBy3x1<T1, T2>;
        (values: _.List<T2>): PullAllBy3x2<T1>;
        (values: _.List<T2>, array: T1[]): T1[];
        (values: _.List<T2>): PullAllBy4x2<T1>;
        (values: _.List<T2>, array: _.List<T1>): _.List<T1>;
    }
    interface PullAllBy3x2<T1> {
        (): PullAllBy3x2<T1>;
        <T2>(array: T1[]): T1[];
        <T2>(array: _.List<T1>): _.List<T1>;
    }
}

declare const pullAllBy: Lodash.PullAllBy;
export = pullAllBy;
