// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
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
        <T>(values: _.List<T>): Difference1x1<T>;
        /**
         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        <T>(values: _.List<T>, array: _.List<T> | null | undefined): T[];
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
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const difference: Lodash.Difference;
export = difference;
