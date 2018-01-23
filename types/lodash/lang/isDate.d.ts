declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Date object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isDate(value?: any): value is Date;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isDate
         */
        isDate(): LoDashExplicitWrapper<boolean>;
    }
}