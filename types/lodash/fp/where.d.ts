// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    <T>(source: _.ConformsPredicateObject<T>): ConformsTo1x1<T>;
    /**
     * Checks if object conforms to source by invoking the predicate properties of source with the
     * corresponding property values of object.
     *
     * Note: This method is equivalent to _.conforms when source is partially applied.
     */
    <T>(source: _.ConformsPredicateObject<T>, object: T): boolean;
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

declare const where: ConformsTo;
export = where;
