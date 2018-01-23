declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an object composed of the inverted keys and values of object. If object contains duplicate values,
         * subsequent values overwrite property assignments of previous values unless multiValue is true.
         *
         * @param object The object to invert.
         * @param multiValue Allow multiple values per key.
         * @return Returns the new inverted object.
         */
        invert(
            object: object
        ): Dictionary<string>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): LoDashImplicitWrapper<Dictionary<string>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): LoDashExplicitWrapper<Dictionary<string>>;
    }
}