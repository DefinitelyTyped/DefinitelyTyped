// Type definitions for vkbeautify v0.99.0
// Project: https://github.com/aabluedragon/vkbeautify
// Original project: https://github.com/vkiryukhin/vkBeautify
// Definitions by: Tim Schraepen <https://github.com/sch3lp/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'vkbeautify' {

    namespace vkbeautify {
        // beautifying
        function xml(text: string, amountOfWhitespaces?: number): string;
        function xml(text: string, indentPattern?: string): string;

        function json(text: string, amountOfWhitespaces?: number): string;
        function json(text: string, indentPattern?: string): string;

        function css(text: string, amountOfWhitespaces?: number): string;
        function css(text: string, indentPattern?: string): string;

        function sql(text: string, amountOfWhitespaces?: number): string;
        function sql(text: string, indentPattern?: string): string;

        // minifying
        function xmlmin(text: string, preserveComments?: boolean): string;
        function jsonmin(text: string): string;
        function cssmin(text: string, preserveComments?: boolean): string;
        function sqlmin(text: string): string;
    }

    export default vkbeautify
}