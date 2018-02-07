// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates a shallow clone of value.
     *
     * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
     * array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols,
     * and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty
     * object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @param value The value to clone.
     * @return Returns the cloned value.
     */
    type Clone = <T>(value: T) => T;
}

declare const clone: Lodash.Clone;
export = clone;
