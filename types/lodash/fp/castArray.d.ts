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
