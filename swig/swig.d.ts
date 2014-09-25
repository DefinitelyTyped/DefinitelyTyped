// Type definitions for swig
// Project: http://github.com/paularmstrong/swig
// Definitions by: Peter Harris <https://github.com/CodeAnimal>, Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// API Documentation : http://paularmstrong.github.io/swig/docs/api/

declare module "swig" {
    export class Swig {
        constructor(options?: SwigOptions);

        setFilter(
            name: string,
            method: (input: any, ...args: any[]) => string
            ): void;
        setTag(
            name: string,
            parse: (str?: string, line?: string, parser?: Object, types?: lexer.TYPES, stack?: any, opts?: Object, swig?: Swig) => boolean,
            compile: (compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string) => string,
            ends?: boolean,
            blockLevel?: boolean
            ): void;
        setExtension(name: string, object: any): void;
        parseFile(pathName: string, options?: any): parser.ParseReturn;
        precompile(source: string, options?: SwigOptions): any;
        compile(source: string, options?: SwigOptions): (locals?: any) => string;
        compileFile(pathname: string, options: SwigOptions, cb: (err: Error, compiledRender: (locals?: any) => string) => void): void;
        compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string;
        render(source: string, options?: SwigOptions): string;
        renderFile(pathName: string, locals: any, cb: (err: Error, output: string) => void): void;
        renderFile(pathName: string, locals?: any): string
        run(templateFn: Function, locals?: any, filePath?: string): string;
        invalidateCache(): void;

        loaders: typeof loaders;
    }

    export module lexer {
        export enum TYPES {
            /** Whitespace */
            WHITESPACE = 0,
            /** Plain string */
            STRING = 1,
            /** Variable filter */
            FILTER = 2,
            /** Empty variable filter */
            FILTEREMPTY = 3,
            /** Function */
            FUNCTION = 4,
            /** Function with no arguments */
            FUNCTIONEMPTY = 5,
            /** Open parenthesis */
            PARENOPEN = 6,
            /** Close parenthesis */
            PARENCLOSE = 7,
            /** Comma */
            COMMA = 8,
            /** Variable */
            VAR = 9,
            /** Number */
            NUMBER = 10,
            /** Math operator */
            OPERATOR = 11,
            /** Open square bracket */
            BRACKETOPEN = 12,
            /** Close square bracket */
            BRACKETCLOSE = 13,
            /** Key on an object using dot-notation */
            DOTKEY = 14,
            /** Start of an array */
            ARRAYOPEN = 15,
            /** End of an array
             * Currently unused
            ARRAYCLOSE = 16, */
            /** Open curly brace */
            CURLYOPEN = 17,
            /** Close curly brace */
            CURLYCLOSE = 18,
            /** Colon (:) */
            COLON = 19,
            /** JavaScript-valid comparator */
            COMPARATOR = 20,
            /** Boolean logic */
            LOGIC = 21,
            /** Boolean logic "not" */
            NOT = 22,
            /** true or false */
            BOOL = 23,
            /** Variable assignment */
            ASSIGNMENT = 24,
            /** Start of a method */
            METHODOPEN = 25,
            /** End of a method
             * Currently unused
            METHODEND = 26, */
            /** Unknown type */
            UNKNOWN = 100
        }

        export function read(str: string): string[];
    }

    export module parser {
        interface ParseReturn {
            name: string;
            parent: any;
            tokens: any[];
            blocks: any;
        }
    }

    export interface SwigOptions {
        autoescape?: boolean;
        cache?: any;
        cmtControls?: string[];
        loader?: TemplateLoader;
        locals?: any;
        tagControls?: string[];
        varControls?: string[];
    }

    export interface TemplateLoader {
        resolve(to: string, from: string): string;
        load(identifier: string, callback?: (err: Error, data: any) => void): void;
        load(identifier:string): any;
    }

    export module loaders {
        export function fs(basepath?: string, encoding?: string): TemplateLoader;
        export function memory(mapping: any, basepath?: string): TemplateLoader;
    }

    export var version: string;
    export function setDefaults(options: SwigOptions): void;
    export function setDefaultTZOffset(offset: number): void;
    export function setFilter(
        name: string,
        method: (input: any, ...args: any[]) => string
        ): void;
    export function setTag(
        name: string,
        parse: (str?: string, line?: string, parser?: Object, types?: lexer.TYPES, stack?: any, opts?: Object, swig?: Swig) => boolean,
        compile: (compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string) => string,
        ends?: boolean,
        blockLevel?: boolean
        ): void;
    export function setExtension(name: string, object: any): void;
    export function parseFile(pathName: string, options?: any): parser.ParseReturn;
    export function precompile(source: string, options?: SwigOptions): any;
    export function compile(source: string, options?: SwigOptions): (locals?: any) => string;
    export function compileFile(pathname: string, options: SwigOptions, cb: (err: Error, compiledRender: (locals?: any) => string) => void): void;
    export function compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string;
    export function render(source: string, options?: SwigOptions): string;
    export function renderFile(pathName: string, locals: any, cb: (err: Error, output: string) => void): void;
    export function renderFile(pathName: string, locals?: any): string
    export function run(templateFn: Function, locals?: any, filePath?: string): string;
    export function invalidateCache(): void;
}