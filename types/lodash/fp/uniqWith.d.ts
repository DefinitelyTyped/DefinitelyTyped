import _ = require("../index");

declare namespace Lodash {
    interface UniqWith {
        (): UniqWith;
        <T>(comparator: _.Comparator<T>): UniqWith1x1<T>;
        <T>(comparator: _.Comparator<T>, array: _.List<T> | null | undefined): T[];
    }
    interface UniqWith1x1<T> {
        (): UniqWith1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const uniqWith: Lodash.UniqWith;
export = uniqWith;
