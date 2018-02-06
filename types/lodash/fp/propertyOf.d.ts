import _ = require("../index");

declare namespace Lodash {
    interface PropertyOf {
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         *
         * @param object The object to query.
         * @return Returns the new function.
         */
        (): PropertyOf;
        /**
         * The opposite of _.property; this method creates a function that returns the property value at a given path
         * on object.
         *
         * @param object The object to query.
         * @return Returns the new function.
         */
        <T extends {}>(object: T): (path: _.PropertyPath) => any;
    }
}

declare const propertyOf: Lodash.PropertyOf;
export = propertyOf;
