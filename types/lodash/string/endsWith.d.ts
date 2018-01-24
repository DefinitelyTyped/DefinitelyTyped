declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if string ends with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string ends with target, else false.
         */
        endsWith(
            string?: string,
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.endsWith
         */
        endsWith(
            target?: string,
            position?: number
        ): LoDashExplicitWrapper<boolean>;
    }
}