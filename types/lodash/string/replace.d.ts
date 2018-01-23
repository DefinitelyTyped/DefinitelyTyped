declare namespace _ {
    interface LoDashStatic {
        /**
         * Replaces matches for pattern in string with replacement.
         *
         * Note: This method is based on String#replace.
         *
         * @return Returns the modified string.
         */
        replace(
            string: string,
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp|string,
            replacement: ReplaceFunction | string
        ): string;

        /**
         * @see _.replace
         */
        replace(
            replacement: ReplaceFunction | string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.replace
         */
        replace(
            pattern: RegExp | string,
            replacement: ReplaceFunction | string
        ): LoDashExplicitWrapper<string>;

        /**
         * @see _.replace
         */
        replace(
            replacement: ReplaceFunction | string
        ): LoDashExplicitWrapper<string>;
    }
}