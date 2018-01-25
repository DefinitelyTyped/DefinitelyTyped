import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
         * jQuery-like collection with a length greater than 0 or an object with own enumerable properties.
         *
         * @param value The value to inspect.
         * @return Returns true if value is empty, else false.
         */
        isEmpty(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEmpty
         */
        isEmpty(): LoDashExplicitWrapper<boolean>;
    }
}