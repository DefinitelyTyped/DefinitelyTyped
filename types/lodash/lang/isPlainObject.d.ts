import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is a plain object, that is, an object created by the Object constructor or one with a
         * [[Prototype]] of null.
         *
         * Note: This method assumes objects created by the Object constructor have no inherited enumerable properties.
         *
         * @param value The value to check.
         * @return Returns true if value is a plain object, else false.
         */
        isPlainObject(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isPlainObject
         */
        isPlainObject(): LoDashExplicitWrapper<boolean>;
    }
}