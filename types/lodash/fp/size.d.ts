// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Gets the size of collection by returning its length for array-like values or the number of own enumerable
     * properties for objects.
     *
     * @param collection The collection to inspect.
     * @return Returns the size of collection.
     */
    type Size = (collection: object | string | null | undefined) => number;
}

declare const size: Lodash.Size;
export = size;
