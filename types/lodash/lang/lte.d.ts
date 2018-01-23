declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is less than or equal to other.
         *
         * @param value The value to compare.
         * @param other The other value to compare.
         * @return Returns true if value is less than or equal to other, else false.
         */
        lte(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.lte
         */
        lte(other: any): LoDashExplicitWrapper<boolean>;
    }
}