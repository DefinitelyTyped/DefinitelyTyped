import _ = require("../index");

declare namespace Lodash {
    interface Conforms {
        /**
         * Creates a function that invokes the predicate properties of `source` with the corresponding
         * property values of a given object, returning true if all predicates return truthy, else false.
         */
        (): Conforms;
        /**
         * Creates a function that invokes the predicate properties of `source` with the corresponding
         * property values of a given object, returning true if all predicates return truthy, else false.
         */
        <T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
}

declare const conforms: Lodash.Conforms;
export = conforms;
