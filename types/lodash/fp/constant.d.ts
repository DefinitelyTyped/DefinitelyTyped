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
