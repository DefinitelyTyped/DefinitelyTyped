declare namespace _ {
    interface LoDashStatic {
        /**
         * Generates a unique ID. If prefix is provided the ID is appended to it.
         *
         * @param prefix The value to prefix the ID with.
         * @return Returns the unique ID.
         */
        uniqueId(prefix?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): LoDashExplicitWrapper<string>;
    }
}