import _ = require("../index");

declare namespace Lodash {
    interface ToPlainObject {
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        (): ToPlainObject;
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        (value: any): any;
    }
}

declare const toPlainObject: Lodash.ToPlainObject;
export = toPlainObject;
