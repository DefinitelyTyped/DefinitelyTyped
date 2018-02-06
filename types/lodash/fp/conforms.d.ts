import _ = require("../index");

declare namespace Lodash {
    interface Conforms {
        (): Conforms;
        <T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
}

declare const conforms: Lodash.Conforms;
export = conforms;
