// Type definitions for pug 2.0.0-beta6
// Project: https://github.com/pugjs/pug
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Table of Contents
 *
 *  - Options https://pugjs.org/api/reference.html#options
 *  - Methods https://pugjs.org/api/reference.html#methods
 *
 * The order of contents is according to pugjs API document.
 */
declare module 'pug' {
    ////////////////////////////////////////////////////////////
    /// Options https://pugjs.org/api/reference.html#options ///
    ////////////////////////////////////////////////////////////
    export interface Options {
        filename?: string;
        basedir?: string;
        doctype?: string;
        pretty?: boolean | string;
        filters?: any;
        self?: boolean;
        debug?: boolean;
        compileDebug?: boolean;
        globals?: string[];
        cache?: boolean;
        inlineRuntimeFunctions?: boolean;
        name?: string;
    }

    ////////////////////////////////////////////////////////////
    /// Methods https://pugjs.org/api/reference.html#methods ///
    ////////////////////////////////////////////////////////////
    export function compile(source: string, options?: Options): (locals?: any) => string;
    export function compileFile(path: string, options?: Options): (locals?: any) => string;
    export function compileClient(source: string, options?: Options): ClientFunctionString;
    export function compileClientWithDependenciesTracked(source: string, options?: Options): {
        body: ClientFunctionString;
        dependencies: string[];
    };
    export function compileFileClient(path: string, options?: Options): ClientFunctionString;
    export function render(source: string, options?: Options, callback?: (err: Error, html: string) => void): string;
    export function renderFile(path: string, options?: Options, callback?: (err: Error, html: string) => void): string;

    // else
    export type ClientFunctionString = string;  // ex: 'function (locals) {...}'
    export type compileTemplate = (locals?: any) => string;
}
