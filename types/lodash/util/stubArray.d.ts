declare namespace _ {
    interface LoDashStatic {
        /**
         * This method returns a new empty array.
         *
         * @returns Returns the new empty array.
         */
        stubArray(): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): any[];
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): LoDashExplicitWrapper<any[]>;
    }
}