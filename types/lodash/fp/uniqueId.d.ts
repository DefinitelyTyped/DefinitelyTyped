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
