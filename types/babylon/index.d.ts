// Type definitions for babylon 6.16
// Project: https://github.com/babel/babylon, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Expression, File } from "babel-types";

export function parse(code: string, opts?: BabylonOptions): File;

export function parseExpression(input: string, options?: BabylonOptions): Expression;

export interface BabylonOptions {
    /**
     * By default, import and export declarations can only appear at a program's top level.
     * Setting this option to true allows them anywhere where a statement is allowed.
     */
    allowImportExportEverywhere?: boolean | undefined;

    /**
     * By default, a return statement at the top level raises an error. Set this to true to accept such code.
     */
    allowReturnOutsideFunction?: boolean | undefined;

    allowSuperOutsideMethod?: boolean | undefined;

    /**
     * Indicate the mode the code should be parsed in. Can be either "script" or "module".
     */
    sourceType?: "script" | "module" | undefined;

    /**
     * Correlate output AST nodes with their source filename. Useful when
     * generating code and source maps from the ASTs of multiple input files.
     */
    sourceFilename?: string | undefined;

    /**
     * Array containing the plugins that you want to enable.
     */
    plugins?: PluginName[] | undefined;
}

export type PluginName =
    | "estree"
    | "jsx"
    | "flow"
    | "typescript"
    | "classConstructorCall"
    | "doExpressions"
    | "objectRestSpread"
    | "decorators"
    | "classProperties"
    | "exportExtensions"
    | "asyncGenerators"
    | "functionBind"
    | "functionSent"
    | "dynamicImport";
