declare namespace _ {
    interface LoDashStatic {
        /**
         * This method returns a new empty object.
         *
         * @returns Returns the new empty object.
         */
        stubObject(): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): LoDashExplicitWrapper<any>;
    }
}