import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Number primitive or object.
         *
         * Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite method.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isNumber(value?: any): value is number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNumber
         */
        isNumber(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isNumber
         */
        isNumber(): LoDashExplicitWrapper<boolean>;
    }
}