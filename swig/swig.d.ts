// Type definitions for swig
// Project: http://github.com/paularmstrong/swig
// Definitions by: Peter Harris <https://github.com/CodeAnimal>
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
            parse: (str?: string, line?: string, parser?: Object, types?: TYPES, stack?: any, opts?: Object, swig?: Swig) => boolean,
            compile: (compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string) => string,
            ends?: boolean,
            blockLevel?: boolean
            ): void;
        setExtension(name: string, object: any): void;
        parseFile(pathName: string, options?: any);
        precompile(source: string, options?: SwigOptions): any;
        compile(source: string, options?: SwigOptions): (locals?: any) => string;
        compileFile(pathname: string, options: SwigOptions, cb: (err: any, compiledRender: (locals?: any) => string) => void): void;
        compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string;
        render(source: string, options?: SwigOptions): string;
        renderFile(pathName: string, locals: any, cb: (err: any, output: string) => void): void;
        renderFile(pathName: string, locals?: any): string
        run(templateFn: Function, locals?: any, filePath?: string): string;
        invalidateCache(): void;

        loaders: typeof loaders;
    }

    export interface TYPES {
        /** Whitespace */
        WHITESPACE: number;
        /** Plain string */
        STRING: number;
        /** Variable filter */
        FILTER: number;
        /** Empty variable filter */
        FILTEREMPTY: number;
        /** Function */
        FUNCTION: number;
        /** Function with no arguments */
        FUNCTIONEMPTY: number;
        /** Open parenthesis */
        PARENOPEN: number;
        /** Close parenthesis */
        PARENCLOSE: number;
        /** Comma */
        COMMA: number;
        /** Variable */
        VAR: number;
        /** Number */
        NUMBER: number;
        /** Math operator */
        OPERATOR: number;
        /** Open square bracket */
        BRACKETOPEN: number;
        /** Close square bracket */
        BRACKETCLOSE: number;
        /** Key on an object using dot-notation */
        DOTKEY: number;
        /** Start of an array */
        ARRAYOPEN: number;
        /** End of an array
         * Currently unused
        ARRAYCLOSE: number, */
        /** Open curly brace */
        CURLYOPEN: number;
        /** Close curly brace */
        CURLYCLOSE: number;
        /** Colon (:) */
        COLON: number;
        /** JavaScript-valid comparator */
        COMPARATOR: number;
        /** Boolean logic */
        LOGIC: number;
        /** Boolean logic "not" */
        NOT: number;
        /** true or false */
        BOOL: number;
        /** Variable assignment */
        ASSIGNMENT: number;
        /** Start of a method */
        METHODOPEN: number;
        /** End of a method
         * Currently unused
        METHODEND: 26, */
        /** Unknown type */
        UNKNOWN: number
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
        load(identifier, callback?: (err: any, data: any) => void): void;
        load(identifier): any;
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
        parse: (str?: string, line?: string, parser?: Object, types?: TYPES, stack?: any, opts?: Object, swig?: Swig) => boolean,
        compile: (compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string) => string,
        ends?: boolean,
        blockLevel?: boolean
        ): void;
    export function setExtension(name: string, object: any): void;
    export function parseFile(pathName: string, options?: any);
    export function precompile(source: string, options?: SwigOptions): any;
    export function compile(source: string, options?: SwigOptions): (locals?: any) => string;
    export function compileFile(pathname: string, options: SwigOptions, cb: (err: any, compiledRender: (locals?: any) => string) => void): void;
    export function compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string;
    export function render(source: string, options?: SwigOptions): string;
    export function renderFile(pathName: string, locals: any, cb: (err: any, output: string) => void): void;
    export function renderFile(pathName: string, locals?: any): string
    export function run(templateFn: Function, locals?: any, filePath?: string): string;
    export function invalidateCache(): void;
}