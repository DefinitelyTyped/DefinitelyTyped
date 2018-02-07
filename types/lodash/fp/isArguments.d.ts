// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if value is classified as an arguments object.
     *
     * @param value The value to check.
     * @return Returns true if value is correctly classified, else false.
     */
    type IsArguments = (value: any) => value is IArguments;
}

declare const isArguments: Lodash.IsArguments;
export = isArguments;
