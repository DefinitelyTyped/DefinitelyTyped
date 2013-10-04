// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Handlebars {
    function registerHelper(name: string, fn: Function, inverse?: boolean): void;
    function registerPartial(name: string, str: any): void;
    function K(): void;
    function createFrame(object: any): any;
    function Exception(message: string): void;
    class SafeString {
        constructor(str: string);
        static toString(): string;
    }
    function parse(input: string): boolean;
    var logger: Logger;
    function log(level: number, obj: any): void;
    function compile(input: any, options?: any): (context: any, options?: any) => string;

    interface Logger {
        DEBUG: number;
        INFO: number;
        WARN: number;
        ERROR: number;
        level: number;

        methodMap: { [level: number]: string };

        log(level: number, obj: string): void;
    }
}
