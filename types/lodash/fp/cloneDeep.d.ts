import _ = require("../index");

declare namespace Lodash {
    interface CloneDeep {
        /**
         * This method is like _.clone except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @return Returns the deep cloned value.
         */
        (): CloneDeep;
        /**
         * This method is like _.clone except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @return Returns the deep cloned value.
         */
        <T>(value: T): T;
    }
}

declare const cloneDeep: Lodash.CloneDeep;
export = cloneDeep;
