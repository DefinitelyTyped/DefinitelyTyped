// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Handlebars {
    function registerHelper(name: string, fn: Function, inverse?: boolean): void;
    function registerPartial(name: string, str): void;
    function K();
    function createFrame(object);
    function Exception(message: string): void;
    class SafeString {
        constructor(str: string);
        static toString(): string;
    }
    function parse(string: string);
    function print(ast);
    var logger;
    function log(level, str): void;
    function compile(environment, options?, context?, asObject?);
}
