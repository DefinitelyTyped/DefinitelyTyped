// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Identity {
        /**
         * This method returns the first argument provided to it.
         *
         * @param value Any value.
         * @return Returns value.
         */
        (): Identity;
        /**
         * This method returns the first argument provided to it.
         *
         * @param value Any value.
         * @return Returns value.
         */
        <T>(value: T): T;
    }
}

declare const identity: Lodash.Identity;
export = identity;
