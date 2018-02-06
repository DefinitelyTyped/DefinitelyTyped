import _ = require("../index");

declare namespace Lodash {
    interface ConformsTo {
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        (): ConformsTo;
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        <T>(source: ConformsPredicateObject<T>): ConformsTo1x1<T>;
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        <T>(source: ConformsPredicateObject<T>, object: T): boolean;
    }
    interface ConformsTo1x1<T> {
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        (): ConformsTo1x1<T>;
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        (object: T): boolean;
    }
}

declare const where: Lodash.ConformsTo;
export = where;
