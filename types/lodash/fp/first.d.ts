// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Gets the first element of array.
     *
     * @alias _.first
     *
     * @param array The array to query.
     * @return Returns the first element of array.
     */
    type Head = <T>(array: _.List<T> | null | undefined) => T | undefined;
}

declare const first: Lodash.Head;
export = first;
