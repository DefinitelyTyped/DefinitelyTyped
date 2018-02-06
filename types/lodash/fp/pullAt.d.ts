import _ = require("../index");

declare namespace Lodash {
    interface PullAt {
        (): PullAt;
        (...indexes: Array<_.Many<number>>): PullAt1x1<T>;
        <T>(...indexes: Array<_.Many<number>>, array: T[]): T[];
        <T>(...indexes: Array<_.Many<number>>, array: _.List<T>): _.List<T>;
    }
    interface PullAt1x1<T> {
        (): PullAt1x1<T>;
        (array: T[]): T[];
        (array: _.List<T>): _.List<T>;
    }
}

declare const pullAt: Lodash.PullAt;
export = pullAt;
