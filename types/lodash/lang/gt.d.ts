import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is greater than other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is greater than other, else false.
         */
        gt(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.gt
         */
        gt(other: any): LoDashExplicitWrapper<boolean>;
    }
}