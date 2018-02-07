// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    type Defaults = (object: ReadonlyArray<any>) => any;
}

declare const defaultsAll: Lodash.Defaults;
export = defaultsAll;
