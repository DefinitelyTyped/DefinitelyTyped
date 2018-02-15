import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if string starts with the given target string.
         *
         * @param string The string to search.
         * @param target The string to search for.
         * @param position The position to search from.
         * @return Returns true if string starts with target, else false.
         */
        startsWith(
            string?: string,
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(
            target?: string,
            position?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.startsWith
         */
        startsWith(
            target?: string,
            position?: number
        ): LoDashExplicitWrapper<boolean>;
    }
}