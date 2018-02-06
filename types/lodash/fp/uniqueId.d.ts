// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface UniqueId {
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         *
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        (): UniqueId;
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         *
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        (prefix: string): string;
    }
}

declare const uniqueId: Lodash.UniqueId;
export = uniqueId;
