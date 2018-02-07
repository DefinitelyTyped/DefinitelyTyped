// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
     * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
     *
     * @param value The value to inspect.
     * @return Returns true if value is empty, else false.
     */
    type IsEmpty = (value: any) => boolean;
}

declare const isEmpty: Lodash.IsEmpty;
export = isEmpty;
