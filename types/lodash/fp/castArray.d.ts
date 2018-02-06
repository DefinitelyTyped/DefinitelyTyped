// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface CastArray {
        /**
         * Casts value as an array if it’s not one.
         *
         * @param value The value to inspect.
         * @return Returns the cast array.
         */
        (): CastArray;
        /**
         * Casts value as an array if it’s not one.
         *
         * @param value The value to inspect.
         * @return Returns the cast array.
         */
        <T>(value: _.Many<T>): T[];
    }
}

declare const castArray: Lodash.CastArray;
export = castArray;
