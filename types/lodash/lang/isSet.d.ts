import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Set object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isSet(value?: any): value is Set<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isSet(): LoDashExplicitWrapper<boolean>;
    }
}