// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
     * subsequent values overwrite property assignments of previous values unless multiValue is true.
     *
     * @param object The object to invert.
     * @param multiValue Allow multiple values per key.
     * @return Returns the new inverted object.
     */
    type Invert = (object: object) => _.Dictionary<string>;
}

declare const invertObj: Lodash.Invert;
export = invertObj;
