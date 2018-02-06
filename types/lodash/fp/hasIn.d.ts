import _ = require("../index");

declare namespace Lodash {
    interface HasIn {
        (): HasIn;
        (path: _.PropertyPath): HasIn1x1<T>;
        <T>(path: _.PropertyPath, object: T): boolean;
    }
    interface HasIn1x1<T> {
        (): HasIn1x1<T>;
        (object: T): boolean;
    }
}

declare const hasIn: Lodash.HasIn;
export = hasIn;
