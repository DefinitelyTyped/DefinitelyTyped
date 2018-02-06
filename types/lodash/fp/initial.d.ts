// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Initial {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        (): Initial;
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const initial: Lodash.Initial;
export = initial;
