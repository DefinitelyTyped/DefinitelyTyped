declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts string to snake case.
         *
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        snakeCase(string?: string): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.snakeCase
         */
        snakeCase(): LoDashExplicitWrapper<string>;
    }
}