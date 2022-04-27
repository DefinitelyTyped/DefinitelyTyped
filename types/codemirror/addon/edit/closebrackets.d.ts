import '../../';

declare module '../../' {
    interface AutoCloseBrackets {
        /**
         * String containing pairs of matching characters.
         */
        pairs?: string | undefined;

        /**
         * If the next character is in the string, opening a bracket should be auto-closed.
         */
        closeBefore?: string | undefined;

        /**
         * String containing chars that could do a triple quote.
         */
        triples?: string | undefined;

        /**
         * explode should be a similar string that gives the pairs of characters that, when enter is pressed between them, should have the second character also moved to its own line.
         */
        explode?: string | undefined;

        /**
         * By default, if the active mode has a closeBrackets property, that overrides the configuration given in the option.
         * But you can add an override property with a truthy value to override mode-specific configuration.
         */
        override?: boolean | undefined;
    }

    interface EditorConfiguration {
        /**
         * Will auto-close brackets and quotes when typed.
         * By default, it'll auto-close ()[]{}''"", but you can pass it a string similar to that (containing pairs of matching characters),
         * or an object with pairs and optionally explode properties to customize it.
         */
        autoCloseBrackets?: AutoCloseBrackets | boolean | string | undefined;
    }
}
