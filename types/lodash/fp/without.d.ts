// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Without {
    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param array The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    (): Without;
    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param array The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    <T>(values: ReadonlyArray<T>): Without1x1<T>;
    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param array The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    <T>(values: ReadonlyArray<T>, array: _.List<T> | null | undefined): T[];
}
interface Without1x1<T> {
    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param array The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    (): Without1x1<T>;
    /**
     * Creates an array excluding all provided values using SameValueZero for equality comparisons.
     *
     * @param array The array to filter.
     * @param values The values to exclude.
     * @return Returns the new array of filtered values.
     */
    (array: _.List<T> | null | undefined): T[];
}

declare const without: Without;
export = without;
