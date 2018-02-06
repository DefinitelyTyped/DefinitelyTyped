import _ = require("../index");

declare namespace Lodash {
    interface Has {
        (): Has;
        (path: _.PropertyPath): Has1x1<T>;
        <T>(path: _.PropertyPath, object: T): boolean;
    }
    interface Has1x1<T> {
        (): Has1x1<T>;
        (object: T): boolean;
    }
}

declare const has: Lodash.Has;
export = has;
