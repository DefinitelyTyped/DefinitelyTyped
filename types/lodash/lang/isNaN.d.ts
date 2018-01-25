import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is NaN.
         *
         * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
         *
         * @param value The value to check.
         * @return Returns true if value is NaN, else false.
         */
        isNaN(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isNaN
         */
        isNaN(): LoDashExplicitWrapper<boolean>;
    }
}