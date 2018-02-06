import _ = require("../index");

declare namespace Lodash {
    interface Pull {
        (): Pull;
        <T>(...values: T[]): Pull1x1<T>;
        <T>(...values: T[], array: T[]): T[];
        <T>(...values: T[], array: _.List<T>): _.List<T>;
    }
    interface Pull1x1<T> {
        (): Pull1x1<T>;
        (array: T[]): T[];
        (array: _.List<T>): _.List<T>;
    }
}

declare const pull: Lodash.Pull;
export = pull;
