// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Creates an object that inherits from the given prototype object. If a properties object is provided its own
     * enumerable properties are assigned to the created object.
     *
     * @param prototype The object to inherit from.
     * @param properties The properties to assign to the object.
     * @return Returns the new object.
     */
    type Create = <T extends object, U extends object>(prototype: T) => T & U;
}

declare const create: Lodash.object;
export = create;
