// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Intersection {
    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    (): Intersection;
    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    <T>(arrays2: _.List<T>): Intersection1x1<T>;
    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    <T>(arrays2: _.List<T>, arrays: _.List<T>): T[];
}
interface Intersection1x1<T> {
    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    (): Intersection1x1<T>;
    /**
     * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param arrays The arrays to inspect.
     * @return Returns the new array of shared values.
     */
    (arrays: _.List<T>): T[];
}

declare const intersection: Intersection;
declare namespace intersection {}
export = intersection;
