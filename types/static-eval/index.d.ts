// Type definitions for static-eval v0.2.4
// Project: https://github.com/substack/static-eval
// Definitions by: Ben Liddicott <https://github.com/benliddicott/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="esprima" />

import * as ESTree from 'estree';

/**
* Evaluates the given ESTree.Expression, with the given named variables in place.
* @param ast [ESTree.Expression] An esprima expression derived from parse.body[].expression
* @param vars Named variables, objects or functions which may be referenced in the expression.
*/
declare function evaluate(ast: ESTree.Expression, vars: { [name: string]: any }): any;
export =evaluate;
