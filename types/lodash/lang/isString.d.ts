import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a String primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isString(value?: any): value is string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isString
         */
        isString(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isString
         */
        isString(): LoDashExplicitWrapper<boolean>;
    }
}