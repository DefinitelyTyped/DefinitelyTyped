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
