// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Difference {
    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param array The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    (): Difference;
    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param array The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    <T>(array: _.List<T> | null | undefined): Difference1x1<T>;
    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param array The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    <T>(array: _.List<T> | null | undefined, values: _.List<T>): T[];
}
interface Difference1x1<T> {
    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param array The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    (): Difference1x1<T>;
    /**
     * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
     * equality comparisons.
     *
     * @param array The array to inspect.
     * @param values The arrays of values to exclude.
     * @return Returns the new array of filtered values.
     */
    (values: _.List<T>): T[];
}

declare const difference: Difference;
export = difference;
