declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is null.
         *
         * @param value The value to check.
         * @return Returns true if value is null, else false.
         */
        isNull(value: any): value is null;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNull
         */
        isNull(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isNull
         */
        isNull(): LoDashExplicitWrapper<boolean>;
    }
}