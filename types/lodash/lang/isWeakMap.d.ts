declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakMap object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakMap(value?: any): value is WeakMap<object, any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isWeakMap(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isSet
         */
        isWeakMap(): LoDashExplicitWrapper<boolean>;
    }
}