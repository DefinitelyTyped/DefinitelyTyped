/// <reference path="./pretties.d.ts" />
/// <reference path="./spinners.d.ts" />
/// <reference path="./table.d.ts" />
/// <reference path="./unicode.d.ts" />

declare namespace adone {
    namespace text {
        namespace escape {
            function regExpPattern(str: string): string;

            function regExpReplacement(str: string): string;

            function format(str: string): string;

            function shellArg(str: string): string;

            function control(str: string): string;

            function htmlSpecialChars(str: string): string;
        }

        namespace regexp {
            function array2alternatives(array: string[]): string;
        }

        function escapeStringRegexp(str: string): string;

        function toCamelCase(str: string): string;

        function camelCaseToDashed(str: string): string;

        const endLineRegExp: RegExp;

        function splitLines(str: string): string[];

        function regExpIndexOf(str: string, regex: RegExp, index?: number): string;

        function stripAnsi(str: string): string;

        function hasAnsi(str: string): boolean;

        function random(len: number): string;

        function detectNewLine(str: string): "\r\n" | "\n";

        namespace I {
            interface WordWrapOptions {
                join?: boolean;
                mode?: "soft" | "hard";
                countAnsiEscapeCodes?: boolean;
            }
        }

        function wordwrap(str: string, stop: number, options: I.WordWrapOptions & { join: false}): string[];
        function wordwrap(str: string, stop: number, options?: I.WordWrapOptions): string;

        function stringDistance(strA: string, strB: string, memo?: number[][]): number;

        function stringDistanceCapped(strA: string, strB: string, cap: number): number;

        function capitalize(str: string): string;

        function capitalizeWords(str: string): string;

        function width(str: string): number;

        function indent(string: string, spaces: number): string;

        function stripEof(str: string): string;

        function stripLastCRLF(str: string): string;

        function stripBOM(str: string): string;

        function toUTF8Array(str: string): number[];
    }
}
