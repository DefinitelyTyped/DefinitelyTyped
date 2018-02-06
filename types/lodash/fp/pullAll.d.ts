import _ = require("../index");

declare namespace Lodash {
    interface PullAll {
        (): PullAll;
        <T>(values: _.List<T>,): PullAll1x1<T>;
        <T>(values: _.List<T>,, array: T[]): T[];
        <T>(values: _.List<T>,, array: _.List<T>): _.List<T>;
    }
    interface PullAll1x1<T> {
        (): PullAll1x1<T>;
        (array: T[]): T[];
        (array: _.List<T>): _.List<T>;
    }
}

declare const pullAll: Lodash.PullAll;
export = pullAll;
