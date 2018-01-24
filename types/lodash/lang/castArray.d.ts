declare namespace _ {
    interface LoDashStatic {
        /**
         * Casts value as an array if it’s not one.
         *
         * @param value The value to inspect.
         * @return Returns the cast array.
         */
        castArray<T>(value?: Many<T>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.castArray
         */
        castArray<T>(this: LoDashImplicitWrapper<Many<T>>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.castArray
         */
        castArray<T>(this: LoDashExplicitWrapper<Many<T>>): LoDashExplicitWrapper<T[]>;
    }
}