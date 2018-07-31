// Type definitions for @babel/parser 7.0
// Project: https://github.com/babel/babel/tree/master/packages/babel-parser
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { File, Expression } from "@babel/types";

export function parse(code: string, opts?: ParseOptions): File;

export function parseExpression(input: string, options?: ParseOptions): Expression;

export interface ParseOptions {
    /**
     * By default, import and export declarations can only appear at a program's top level.
     * Setting this option to true allows them anywhere where a statement is allowed.
     */
    allowImportExportEverywhere?: boolean;

    /**
     * By default, await use is not allowed outside of an async function. Set this to true to accept such code.
     */
    allowAwaitOutsideFunction?: boolean;

    /**
     * By default, a return statement at the top level raises an error. Set this to true to accept such code.
     */
    allowReturnOutsideFunction?: boolean;

    allowSuperOutsideMethod?: boolean;

    /**
     * Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous".
     * Defaults to "script". "unambiguous" will make @babel/parser attempt to guess, based on the presence of ES6 import or export
     * statements. Files with ES6 imports and exports are considered "module" and are otherwise "script".
     */
    sourceType?: "script" | "module" | "unambiguous";

    /**
     * Correlate output AST nodes with their source filename. Useful when
     * generating code and source maps from the ASTs of multiple input files.
     */
    sourceFilename?: string;

    /**
     * By default, the first line of code parsed is treated as line 1. You can provide a line number to alternatively start with. Useful
     * for integration with other source tools.
     */
    startLine?: number;

    /**
     * Array containing the plugins that you want to enable.
     */
    plugins?: PluginList;

    strictMode?: boolean;

    /**
     * Adds a `ranges` property to each node: `[node.start, node.end]`
     */
    ranges?: boolean;

    /**
     * Adds all parsed tokens to a `tokens` property on the `File` node
     */
    tokens?: boolean;
}

export type PluginList = Array<PluginName | [PluginName, PluginOptions]>;

export type PluginName =
    "asyncGenerators" |
    "bigInt" |
    "classPrivateMethods" |
    "classPrivateProperties" |
    "classProperties" |
    "decorators" |
    "doExpressions" |
    "dynamicImport" |
    "estree" |
    "exportDefaultFrom" |
    "exportNamespaceFrom" |
    "flow" |
    "flowComments" |
    "functionBind" |
    "functionSent" |
    "importMeta" |
    "jsx" |
    "nullishCoalescingOperator" |
    "numericSeparator" |
    "objectRestSpread" |
    "optionalCatchBinding" |
    "optionalChaining" |
    "pipelineOperator" |
    "throwExpressions" |
    "typescript";

export interface PluginOptions {
    decorators?: {
        decoratorsBeforeExport?: boolean;
    };
    flow?: {
        all?: boolean;
    };
}
