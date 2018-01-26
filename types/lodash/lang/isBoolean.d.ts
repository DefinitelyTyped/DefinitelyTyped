import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a boolean primitive or object.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isBoolean(value?: any): value is boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBoolean
         */
        isBoolean(): LoDashExplicitWrapper<boolean>;
    }
}