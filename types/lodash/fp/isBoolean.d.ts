// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if value is classified as a boolean primitive or object.
     *
     * @param value The value to check.
     * @return Returns true if value is correctly classified, else false.
     */
    type IsBoolean = (value: any) => value is boolean;
}

declare const isBoolean: Lodash.IsBoolean;
export = isBoolean;
