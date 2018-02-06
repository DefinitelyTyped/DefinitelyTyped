// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Constant {
        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        (): Constant;
        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        <T>(value: T): () => T;
    }
}

declare const constant: Lodash.Constant;
export = constant;
