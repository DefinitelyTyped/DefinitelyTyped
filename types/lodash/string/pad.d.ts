declare namespace _ {
    interface LoDashStatic {
        /**
         * Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if
         * they can’t be evenly divided by length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        pad(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pad
         */
        pad(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }
}