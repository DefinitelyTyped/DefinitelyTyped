import _ = require("../index");

declare namespace Lodash {
    interface Union {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        (): Union;
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        <T>(...arrays: Array<_.List<T> | null | undefined>): T[];
    }
}

declare const union: Lodash.Union;
export = union;
