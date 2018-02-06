import _ = require("../index");

declare namespace Lodash {
    interface Omit {
        (): Omit;
        (...paths: _.PropertyPath[]): Omit1x1<T>;
        <T>(...paths: _.PropertyPath[], object: _.Dictionary<T>): _.Dictionary<T>;
        <T extends object>(...paths: _.PropertyPath[], object: T | null | undefined): _.PartialObject<T>;
    }
    interface Omit1x1<T> {
        (): Omit1x1<T>;
        (object: _.Dictionary<T>): _.Dictionary<T>;
        (object: T | null | undefined): _.PartialObject<T>;
    }
}

declare const omit: Lodash.Omit;
export = omit;
