import _ = require("../index");

declare namespace Lodash {
    interface Size {
        /**
         * Gets the size of collection by returning its length for array-like values or the number of own enumerable
         * properties for objects.
         *
         * @param collection The collection to inspect.
         * @return Returns the size of collection.
         */
        (): Size;
        /**
         * Gets the size of collection by returning its length for array-like values or the number of own enumerable
         * properties for objects.
         *
         * @param collection The collection to inspect.
         * @return Returns the size of collection.
         */
        (collection: object | string | null | undefined): number;
    }
}

declare const size: Lodash.Size;
export = size;
