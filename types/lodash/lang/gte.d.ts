import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is greater than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than or equal to other, else false.
         */
        gte(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gte
         */
        gte(other: any): LoDashExplicitWrapper<boolean>;
    }
}