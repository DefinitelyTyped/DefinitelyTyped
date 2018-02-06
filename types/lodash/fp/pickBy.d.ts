import _ = require("../index");

declare namespace Lodash {
    interface PickBy {
        (): PickBy;
        <T>(predicate: _.ValueKeyIteratee<T>): PickBy1x1<T>;
        <T extends object>(predicate: _.ValueKeyIteratee<T[keyof T]>, object: T | null | undefined): _.PartialObject<T>;
    }
    interface PickBy1x1<T> {
        (): PickBy1x1<T>;
        (object: object | null | undefined): _.PartialObject<T>;
    }
}

declare const pickBy: Lodash.PickBy;
export = pickBy;
