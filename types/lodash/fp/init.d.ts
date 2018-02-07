// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Gets all but the last element of array.
     *
     * @param array The array to query.
     * @return Returns the slice of array.
     */
    type Initial = <T>(array: _.List<T> | null | undefined) => T[];
}

declare const init: Lodash.Initial;
export = init;
