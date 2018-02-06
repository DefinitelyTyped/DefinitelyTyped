import _ = require("../index");

declare namespace Lodash {
    interface IsMap {
        /**
         * Checks if value is classified as a Map object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (): IsMap;
        /**
         * Checks if value is classified as a Map object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        (value: any): value is Map<any, any>;
    }
}

declare const isMap: Lodash.IsMap;
export = isMap;
