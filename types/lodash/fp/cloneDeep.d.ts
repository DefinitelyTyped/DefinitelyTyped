// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * This method is like _.clone except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @return Returns the deep cloned value.
     */
    type CloneDeep = <T>(value: T) => T;
}

declare const cloneDeep: Lodash.CloneDeep;
export = cloneDeep;
