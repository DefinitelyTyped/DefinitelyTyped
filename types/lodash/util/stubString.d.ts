declare namespace _ {
    interface LoDashStatic {
        /**
         * This method returns an empty string.
         *
         * @returns Returns the empty string.
         */
        stubString(): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): LoDashExplicitWrapper<string>;
    }
}