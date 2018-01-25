import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts value to a plain object flattening inherited enumerable properties of value to own properties
         * of the plain object.
         *
         * @param value The value to convert.
         * @return Returns the converted plain object.
         */
        toPlainObject(value?: any): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPlainObject
         */
        toPlainObject(): LoDashExplicitWrapper<any>;
    }
}