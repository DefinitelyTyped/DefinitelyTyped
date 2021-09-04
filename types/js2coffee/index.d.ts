// Type definitions for JS2Coffee 2.2
// Project: https://github.com/js2coffee/js2coffee
// Definitions by: Munin M. <https://github.com/SNDST00M>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as estree from "estree";
import * as sourceMap from 'source-map';

/**
 * JS2Coffee API.
 *
 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON, you must wrap the string in
 * parentheses like so: `(...)`.
 * @param {Options} [options] JS2Coffee compiler options.
 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
 * @param {boolean} [options.compat=false] Compatibility mode with JS.
 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
 * @param {string} [options.source] The source code itself - always overwritten by
 * `source`.
 * @returns {string} Compiled CoffeeScript code.
 */
declare function js2coffee(source: string, options?: js2coffee.Options): string;

declare namespace js2coffee {

	/**
	 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON, you must wrap the string in
	 * parentheses like so: `(...)`.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {Build} Build output in CoffeeScript.
	 */
	function build(source: string, options?: js2coffee.Options): js2coffee.Build;

	/**
	 * Compiles JavaScript into a ESTree-style CoffeeScript AST. The AST has the following custom types exclusive to
	 * JS2Coffee:
	 * - `CoffeeDoExpression`
	 * - `CoffeeEscapedExpression`
	 * - `CoffeeListExpression`
	 * - `CoffeeLoopStatement`
	 * - `CoffeePrototypeExpression`
	 *
	 * @param {string} source JavaScript code to compile. In order to compile JSON as CSON,
	 * you must wrap the string in parentheses like so: `(...)`.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {AST} JavaScript AST in ESTree format.
	 */
	function parseJS(source: string, options?: js2coffee.Options): js2coffee.AST;

	/**
	 * Mutates the `ast` JavaScript syntax tree into a CoffeeScript AST transform.
	 *
	 * @param {AST} JavaScript AST in ESTree format.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {Transform} Abstract syntax tree for post-transform CoffeeScript.
	 */
	function transform(ast: js2coffee.AST, options?: js2coffee.Options): js2coffee.Transform;

	/**
	 * Generates a CoffeeScript `CodeWithSourceMap` instance from a given CoffeeScript transform.
	 *
	 * @param {AST} ast Transformed CoffeeScript AST in ESTree format.
	 * @param {Options} [options] JS2Coffee compiler options.
	 * @param {boolean} [options.bare=false] Whether to omit a top-level IIFE safety wrapper.
	 * @param {boolean} [options.comments=true] Whether to keep comments in the output.
	 * @param {boolean} [options.compat=false] Compatibility mode with JS.
	 * @param {string} [options.filename=index.js] File name for JS script to compile to CoffeeScript.
	 * @param {number} [options.indent=2] Indentation character(s) used in the compiler output.
	 * @param {string} [options.source] The source code itself - always overwritten by
	 * `source`.
	 * @returns {CodeWithSourceMap} CoffeeScript output as a `CodeWithSourceMap` object.
	 */
	function generate(ast: js2coffee.Transform, options?: js2coffee.Options): sourceMap.CodeWithSourceMap;

	/**
	 * Version number. Type defintions are written for JS2Coffee v1.9.2.
	 */
	let version: string;

	/**
	 * Collection of helper functions used to parse JavaScript in JS2Coffee.
	 */
	let helpers: js2coffee.Helpers;

	/**
	 * ESTree node types for CoffeeScript AST nodes in `AST` body.
	 *
	 * @type {string} String prefixed with `"Coffee"`.
	 */
	type CoffeeNodeType = (
		| "CoffeeDoExpression"
		| "CoffeeEscapedExpression"
		| "CoffeeListExpression"
		| "CoffeeLoopStatement"
		| "CoffeePrototypeExpression"
	);

	/**
	 * Custom ESTree-style node used to define CoffeeScript in JS2Coffee ASTs.
	 *
	 * @extends {estree.Node}
	 */
	interface CustomNode extends Omit<estree.Node, "type"> {
		type: js2coffee.CoffeeNodeType;
	}

	/**
	 * JS2Coffee compiler options.
	 *
	 * `source` parameter.
	 */
	interface Options {
		bare?: boolean;
		comments?: boolean;
		compat?: boolean;
		filename?: string;
		indent?: number;
		source?: string;
	}

	/**
	 * Custom ESTree-style node used to define converted CoffeeScript nodes JS2Coffee ASTs.
	 *
	 * @extends {estree.Node}
	 */
	interface CoffeeNode extends Omit<estree.Node, "type"> {
		type: estree.Node["type"] | js2coffee.CoffeeNodeType;
	}

	/**
	 * Generic compilation error in JS2Coffee.
	 *
	 */
	interface CompileError extends Error {
		description: string;
		end: {
			line: number;
			column: number;
		};
		start: {
			line: number;
			column: number;
		};
	}

	/**
	 * Esprima-style error thrown by JS2Coffee.
	 *
	 */
	interface EsprimaStyleError {
		column: number;
		description: string;
		lineNumber: number;
	}

	/**
	 * JavaScript syntax error thrown by JS2Coffee compiler.
	 *
	 * @extends Error
	 */
	interface SyntaxProblem extends CompileError {
		filename: string;
		js2coffee: true;
		sourcePreview: string[];
	}

	/**
	 * Collection of helper functions used to parse JavaScript in JS2Coffee.
	 */
	interface Helpers {
		/**
		 * Reserved words taken from COFFEE_KEYWORDS (lexer.coffee).
		 * We don't check for "undefined" because it"s already explicitly
		 * accounted for elsewhere.
		 */
		reserved: {
			keywords: string[];
			reserved: string[];
			aliases: string[];
		};
		reservedWords: string[];
		/**
		 * Builds a syntax error message.
		 *
		 * @param err Error to convert into syntax error.
		 * @param source Source code that threw the JS2Coffee compiler error
		 * @param file File name including extension.
		 */
		buildError(
			err: js2coffee.CompileError | js2coffee.EsprimaStyleError,
			source: string,
			file: string
		): js2coffee.SyntaxProblem;
		/**
		 * Duplicates all primitive members of an object recursively.
		 *
		 * @param {object} obj Object to clone.
		 * @returns Deep copy of object.
		 */
		clone(obj: object): object;
		/**
		 * Turns an array of strings into a comma-separated list.
		 * Takes new lines into account.
		 *
		 * @param list Array of elements to join with `,`.
		 * @returns Array with elements separated by `,`.
		 */
		commaDelimit(list: string[]): string[];
		/**
		 * Intersperses `joiner` into `list`.
		 * Used for things like adding indentations.
		 *
		 * @param list Array of elements to be joined by `joiner`.
		 * @param joiner Element to insert between each element of `list`.
		 */
		delimit(list: any[], joiner: any): any[];
		/**
		 * Escapes JS that cannot be converted to CoffeeScript.
		 *
		 * @param {Node} node Unconvertable node.
		 * @returns {CoffeeNode} Node with type "CoffeeEscapedExpression".
		 */
		escapeJs(node: estree.Node): js2coffee.CoffeeNode & { type: "CoffeeEscapedExpression" };
		/**
		 * Inspect a ESTree node for debugging.
		 *
		 * @param node Node to inspect.
		 * @returns String representation bounded by `~~~~`.
		 */
		inspect(node: estree.BaseNode): `~~~~\n${string}\n~~~~`;
		/**
		 * ESTree comment node assertion.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a comment.
		 */
		isComment(node: estree.BaseNode): boolean;
		/**
		 * ESTree infinite loop node assertion.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a infinite loop.
		 */
		isLoop(node: estree.BaseNode): boolean;
		/**
		 * ESTree "truthy" node assertion.
		 * A node is truthy when it has a "Literal" type and a value.
		 *
		 * @param {BaseNode} node Node to apply test to.
		 * @returns {boolean} Whether the ESTree node is a "truthy" node.
		 */
		isTruthy(node: estree.BaseNode): boolean;
		/**
		 * Returns the final return statements in a body.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @returns Array of ESTree nodes for final return statement or empty array.
		 */
		getReturnStatements(body: estree.BaseNode[]): estree.BaseNode[] | [];
		/**
		 * Returns the precedence level of a ESTree operator node.
		 * If a node"s precedence level is greater than its parent, it has to be
		 * parenthesized.
		 *
		 * @param node ESTree operator node.
		 * @returns Precedence level.
		 */
		getPrecedence(node: estree.BaseNode): number;
		joinLines(props: string[], indent: string): string[];
		/**
		 * Get the last statement in a program.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @returns Last non-comment node in a program.
		 */
		lastStatement(body: estree.BaseNode[]): estree.BaseNode;
		/**
		 * Appends a new line to a given SourceNode (what `walk()` returns). If it
		 * already ends in a newline, it is left alone.
		 *
		 * @param srcnode Either a ESTree node or a node array terminating with `\n`.
		 * @returns ESTree node array terminating with `\n`.
		 */
		newline(srcnode: estree.BaseNode | [estree.BaseNode, "\n"]): [estree.BaseNode, "\n"];
		/**
		 * Get the next ESTree node after `node` that is not a comment
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @param node Current node in JS2Coffee stack.
		 * @returns Next non-comment stack, if one is available.
		 */
		nextNonComment(body: estree.BaseNode[], node: estree.BaseNode): estree.BaseNode | undefined;
		/**
		 * Iterate to the next ESTree node until `fn` returns true.
		 *
		 * @param body AST colleciton of nodes describing a program.
		 * @param node Current node in JS2Coffee stack.
		 * @returns Next ESTree node that passes the `fn` callback.
		 */
		nextUntil(body: estree.BaseNode[], node: estree.BaseNode, fn: (n: estree.BaseNode) => boolean): estree.BaseNode | undefined;
		/**
		 * Prepends every item in the `list` with a given `prefix`.
		 *
		 * @param list Array of elements.
		 * @param prefix Prefix to insert before every element.
		 * @returns Array with all elements preceded by `prefix`.
		 */
		prependAll(list: any[], prefix: any): any[];
		/**
		 * Quotes a string or primitive with single quotes.
		 *
		 * @param {any} str String to quote.
		 */
		quote(str: any): string;
		/**
		 * Fabricates a replacement node for `node` that maintains the same source
		 * location.
		 *
		 * @param node Prevous node.
		 * @param {SourceLocation} node.loc Previous node"s location (preserved in output).
		 * @param {number[]} node.range Previous node"s character range (preserved in output).
		 * @param newNode New ESTree node with a specified `type` and `name`.
		 * @param {string} newNode.type ESTree or JS2Coffee type for the new node.
		 * @param {string} newNode.name Name of the new node.
		 * @returns Newly typed and named node with previous source location.
		 */
		replace(node: estree.BaseNode, newNode: estree.BaseNode): estree.BaseNode;
		/**
		 * Delimit using spaces. This also accounts for times where one of the
		 * statements begin with a new line, such as in the case of function
		 * expressions and object expressions.
		 *
		 * @param {string[]} list Array of code tokens.
		 * @returns Array of code tokens separated by spaces.
		 */
		space(list: string[]): string[];
		/**
		 * Convert identifier, custom character or indentation level into indent.
		 *
		 * @param ind Either "tab", "t", custom character or indentation level.
		 * @returns Indentation character sequence (character default: ` `).
		 */
		toIndent(ind: "tab" | "t" | string | number): string;
	}

	/**
	 * Collection of syntax warnings to return to user (may be empty).
	 */
	type Warnings = js2coffee.SyntaxProblem[] | [];

	/**
	 * Abstract syntax tree for CoffeeScript file.
	 *
	 */
	interface AST extends Omit<estree.Program, "body"> {
		body: js2coffee.CoffeeNode[];
	}

	/**
	 * Abstract syntax tree for post-transform CoffeeScript.
	 *
	 */
	interface Transform {
		ast: js2coffee.AST;
		warnings: js2coffee.Warnings;
	}

	/**
	 * Build output for JS code compiled to CoffeeScript.
	 *
	 * (see `CodeWithSourceMap` definition in `source-map`).
	 */
	interface Build {
		ast: js2coffee.AST;
		code: string;
		map: sourceMap.CodeWithSourceMap;
		warnings: Warnings;
	}
}

export = js2coffee;
