// Type definitions for css
// Project: https://github.com/reworkcss/css
// Definitions by: Ilya Verbitskiy <https://github.com/ilich>
// Definitions: https://github.com/ilich/DefinitelyTyped

/**
 * CSS parser / stringifier for Node.js
 */
declare module "css" {

	/**
	 * css.parse options
	 */
	interface ParserOptions {
		/** Silently fail on parse errors */
		silent?: boolean;
		/** The path to the file containing css. Makes errors and source maps more helpful, by letting them know where code comes from. */
		source?: string;
	}

	/**
	 * css.stringify options
	 */
	interface StringifyOptions {
		/** The string used to indent the output. Defaults to two spaces. */
		indent?: string;
		/** Omit comments and extraneous whitespace. */
		compress?: boolean;
		/** Return a sourcemap along with the CSS output. 
		 * Using the source option of css.parse is strongly recommended 
		 * when creating a source map. Specify sourcemap: 'generator' 
		 * to return the SourceMapGenerator object instead of serializing the source map. 
		 */
		sourcemap?: string;
		/** (enabled by default, specify false to disable)
		 *  Reads any source maps referenced by the input files 
		 * when generating the output source map. When enabled, 
		 * file system access may be required for reading the referenced source maps. 
		 */
		inputSourcemaps?: boolean;
	}

	/**
	 * Error thrown during parsing.
	 */
	interface ParserError {
		/** The full error message with the source position. */
		message?: string;
		/** The error message without position. */
		reason?: string;
		/** The value of options.source if passed to css.parse. Otherwise undefined. */
		filename?: string;
		line?: number;
		column?: number;
		/** The portion of code that couldn't be parsed. */
		source?: string;
	}

	// ---------------------------------------------------------------------------------
	// AST Tree
	// ---------------------------------------------------------------------------------

	/**
	 * Information about a position in the code.
	 * The line and column numbers are 1-based: The first line is 1 and the first column of a line is 1 (not 0).
	 */
	interface Position {
		line?: number;
		column?: number;
	}

	/**
	 * Base AST Tree Node.
	 */
	interface Node {
		/** The possible values are the ones listed in the Types section on https://github.com/reworkcss/css page. */
		type?: string;
		/** A reference to the parent node, or null if the node has no parent. */
		parent?: Node;
		/** Information about the position in the source string that corresponds to the node. */
		position?: {
			start?: Position;
			end?: Position;
			/** The value of options.source if passed to css.parse. Otherwise undefined. */
			source?: string;
			/** The full source string passed to css.parse. */
			content?: string;
		};
	}

	interface Rule extends Node {
		/** The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments. */
		selectors?: Array<string>;
		/** Array of nodes with the types declaration and comment. */
		declarations?: Array<Declaration|Comment>;
	}

	interface Declaration extends Node {
		/** The property name, trimmed from whitespace and comments. May not be empty. */
		property?: string;
		/** The value of the property, trimmed from whitespace and comments. Empty values are allowed. */
		value?: string;
	}

	/** 
	 * A rule-level or declaration-level comment. Comments inside selectors, properties and values etc. are lost.
	 */
	interface Comment extends Node {
		comment?: string;
	}

	/** 
	 * The @charset at-rule. 
	 */
	interface Charset {
		/** The part following @charset. */
		charset?: string;
	}

	/**
	 * The @custom-media at-rule 
	 */
	interface CustomMedia {
		/** The ---prefixed name. */
		name?: string;
		/** The part following the name. */
		media?: string;
	}

	/**
	 * The @document at-rule.
	 */
	interface Document {
		/** The part following @document. */
		document?: string;
		/** The vendor prefix in @document, or undefined if there is none. */
		vendor?: string;
		/** Array of nodes with the types rule, comment and any of the at-rule types. */
		rules?: Array<Rule|Comment|AtRule>;
	}

	/**
	 * The @font-face at-rule.
	 */
	interface FontFace {
		/** Array of nodes with the types declaration and comment. */
		declarations?: Array<Declaration|Comment>;
	}

	/**
	 * The @host at-rule.
	 */
	interface Host {
		/** Array of nodes with the types rule, comment and any of the at-rule types. */
		rules?: Array<Rule|Comment|AtRule>;
	}

	/**
	 * The @import at-rule.
	 */
	interface Import {
		/** The part following @import. */
		import?: string;
	}

	/**
	 * The @keyframes at-rule.
	 */
	interface KeyFrames {
		/** The name of the keyframes rule. */
		name?: string;
		/** The vendor prefix in @keyframes, or undefined if there is none. */
		vendor?: string;
		/** Array of nodes with the types keyframe and comment. */
		keyframes?: Array<KeyFrame|Comment>;
	}

	interface KeyFrame {
		/** The list of "selectors" of the keyframe rule, split on commas. Each “selector” is trimmed from whitespace. */
		values?: Array<string>;
		/** Array of nodes with the types declaration and comment. */
		declarations?: Array<Declaration|Comment>;
	}

	/**
	 * The @media at-rule.
	 */
	interface Media {
		/** The part following @media. */
		media?: string;
		/** Array of nodes with the types rule, comment and any of the at-rule types. */
		rules?: Array<Rule|Comment|AtRule>;
	}

	/**
	 * The @namespace at-rule.
	 */
	interface Namespace {
		/** The part following @namespace. */
		namespace?: string;
	}

	/**
	 * The @page at-rule.
	 */
	interface Page {
		/** The list of selectors of the rule, split on commas. Each selector is trimmed from whitespace and comments. */
		selectors?: Array<string>;
		/** Array of nodes with the types declaration and comment. */
		declarations?: Array<Declaration|Comment>;
	}

	/**
	 * The @supports at-rule.
	 */
	interface Supports {
		/** The part following @supports. */
		supports?: string;
		/** Array of nodes with the types rule, comment and any of the at-rule types. */
		rules?: Array<Rule|Comment|AtRule>;
	}

	/** All at-rules. */
	type AtRule = Charset|CustomMedia|Document|FontFace|Host|Import|KeyFrames|Media|Namespace|Page|Supports;

	/** 
	 * The root node returned by css.parse. 
	 */
	interface Stylesheet extends Node {
		stylesheet?: {
			/** Array of nodes with the types rule, comment and any of the at-rule types. */
			rules?: Array<Rule|Comment|AtRule>;
			/** Array of Errors. Errors collected during parsing when option silent is true. */
			parsingErrors?: Array<ParserError>
		};
	}

	// ---------------------------------------------------------------------------------

	/**
	 * Accepts a CSS string and returns an AST object.
	 * 
	 * @param {string} code - CSS code.
	 * @param {ParserOptions} options - CSS parser options.
	 * @return {Stylesheet} AST object built using provides CSS code.
	 */
	function parse(code: string, options?: ParserOptions): Stylesheet;

	/**
	 * Accepts an AST object (as css.parse produces) and returns a CSS string.
	 * 
	 * @param {Stylesheet} stylesheet - AST tree.
	 * @param {StringifyOptions} options - AST tree to string serializaiton options.
	 * @return {string} CSS code.
	 */
	function stringify(stylesheet: Stylesheet, options?: StringifyOptions): string;

}