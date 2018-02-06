import _ = require("../index");

declare namespace Lodash {
    interface Remove {
        (): Remove;
        <T>(predicate: _.ValueIteratee<T>): Remove1x1<T>;
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T>): T[];
    }
    interface Remove1x1<T> {
        (): Remove1x1<T>;
        (array: _.List<T>): T[];
    }
}

declare const remove: Lodash.Remove;
export = remove;
