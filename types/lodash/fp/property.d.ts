import _ = require("../index");

declare namespace Lodash {
    interface Property {
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        (): Property;
        /**
         * Creates a function that returns the property value at path on a given object.
         *
         * @param path The path of the property to get.
         * @return Returns the new function.
         */
        <TObj, TResult>(path: _.PropertyPath): (obj: TObj) => TResult;
    }
}

declare const property: Lodash.Property;
export = property;
