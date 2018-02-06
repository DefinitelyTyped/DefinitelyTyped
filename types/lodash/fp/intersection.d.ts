import _ = require("../index");

declare namespace Lodash {
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
        <T>(arrays: _.List<T>): T[];
    }
}

declare const intersection: Lodash.Intersection;
export = intersection;
