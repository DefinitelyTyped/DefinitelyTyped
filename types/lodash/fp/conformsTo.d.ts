import _ = require("../index");

declare namespace Lodash {
    interface ConformsTo {
        (): ConformsTo;
        <T>(source: ConformsPredicateObject<T>): ConformsTo1x1<T>;
        <T>(source: ConformsPredicateObject<T>, object: T): boolean;
    }
    interface ConformsTo1x1<T> {
        (): ConformsTo1x1<T>;
        (object: T): boolean;
    }
}

declare const conformsTo: Lodash.ConformsTo;
export = conformsTo;
