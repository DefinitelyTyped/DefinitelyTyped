import _ = require("../index");

declare namespace Lodash {
    interface Compact {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        (): Compact;
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        <T>(array: _.List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }
}

declare const compact: Lodash.Compact;
export = compact;
