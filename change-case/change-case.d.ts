// Type definitions for change-case
// Project: https://github.com/blakeembrey/change-case
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "change-case" {
    function dot(s: string): string;
    function dotCase(s: string): string;
    function swap(s: string): string;
    function swapCase(s: string): string;
    function path(s: string): string;
    function pathCase(s: string): string;
    function upper(s: string): string;
    function upperCase(s: string): string;
    function lower(s: string): string;
    function lowerCase(s: string): string;
    function camel(s: string): string;
    function camelCase(s: string): string;
    function snake(s: string): string;
    function snakeCase(s: string): string;
    function title(s: string): string;
    function titleCase(s: string): string;
    function param(s: string): string;
    function paramCase(s: string): string;
    function pascal(s: string): string;
    function pascalCase(s: string): string;
    function constant(s: string): string;
    function constantCase(s: string): string;
    function sentence(s: string): string;
    function sentenceCase(s: string): string;
    function isUpper(s: string): boolean;
    function isUpperCase(s: string): boolean;
    function isLower(s: string): boolean;
    function isLowerCase(s: string): boolean;
    function ucFirst(s: string): string;
    function upperCaseFirst(s: string): string;
}
