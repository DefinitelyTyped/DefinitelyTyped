// Type definitions for vkbeautify v0.99.0
// Project: https://github.com/aabluedragon/vkbeautify
// Original project: https://github.com/vkiryukhin/vkBeautify
// Definitions by: Tim Schraepen <https://github.com/sch3lp/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'vkbeautify' {

    namespace vkbeautify {
        // beautifying
        /**
         * Pretty print an xml string with the given number of whitespace
         */
        function xml(text: string, amountOfWhitespaces?: number): string;
        /**
         * Pretty print an xml string with the given indentation pattern (can be whitespace)
         */
        function xml(text: string, indentPattern?: string): string;

        /**
         * Pretty print a json string with the given number of whitespace
         */
        function json(text: string, amountOfWhitespaces?: number): string;
        /**
         * Pretty print a json string with the given indentation pattern (can be whitespace)
         */
        function json(text: string, indentPattern?: string): string;

        /**
         * Pretty print a css string with the given number of whitespace
         */
        function css(text: string, amountOfWhitespaces?: number): string;
        /**
         * Pretty print a css string with the given indentation pattern (can be whitespace)
         */
        function css(text: string, indentPattern?: string): string;

        /**
         * Pretty print an sql string with the given number of whitespace
         */
        function sql(text: string, amountOfWhitespaces?: number): string;
        /**
         * Pretty print an sql string with the given indentation pattern (can be whitespace)
         */
        function sql(text: string, indentPattern?: string): string;

        // minifying
        /**
         * Minifiy an xml string, and preserve or remove comments (default)
         */
        function xmlmin(text: string, preserveComments?: boolean): string;
        /**
         * Minifiy a json string
         */
        function jsonmin(text: string): string;
        /**
         * Minifiy a css string, and preserve or remove comments (default)
         */
        function cssmin(text: string, preserveComments?: boolean): string;
        /**
         * Minifiy an sql string
         */
        function sqlmin(text: string): string;
    }

    export default vkbeautify
}