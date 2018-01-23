declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a typed array.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isTypedArray(value: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isTypedArray
         */
        isTypedArray(): LoDashExplicitWrapper<boolean>;
    }
}