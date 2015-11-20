// Type definitions for css
// Project: https://github.com/reworkcss/css
// Definitions by: Ilya Verbitskiy <https://github.com/ilich>
// Definitions: https://github.com/ilich/DefinitelyTyped

declare module "css" {

	// Options

	interface ParserOptions {
		silent?: boolean;
		source?: string;
	}

	interface StringifyOptions {
		indent?: string;
		compress?: boolean;
		sourcemap?: string;
		inputSourcemaps?: boolean;
	}

	// Errors

	interface ParserError {
		message?: string;
		reason?: string;
		filename?: string;
		line?: number;
		column?: number;
		source?: string;
	}

	// AST Tree

	interface Position {
		line?: number;
		column?: number;
	}

	interface Node {
		type?: string;
		parent?: Node;
		position?: {
			start?: Position;
			end?: Position;
			source?: string;
			content?: string;
		};
	}

	interface Rule extends Node {
		selectors?: Array<string>;
		declarations?: Array<Declaration|Comment>;
	}

	interface Declaration extends Node {
		property?: string;
		value?: string;
	}

	interface Comment extends Node {
		comment?: string;
	}

	interface Charset {
		charset?: string;
	}

	interface CustomMedia {
		name?: string;
		media?: string;
	}

	interface Document {
		document?: string;
		vendor?: string;
		rules?: Array<Rule|Comment|AtRule>;
	}

	interface FontFace {
		declarations?: Array<Declaration|Comment>;
	}

	interface Host {
		rules?: Array<Rule|Comment|AtRule>;
	}

	interface Import {
		import?: string;
	}

	interface KeyFrames {
		name?: string;
		vendor?: string;
		keyframes?: Array<KeyFrame|Comment>;
	}

	interface KeyFrame {
		values?: Array<string>;
		declarations?: Array<Declaration|Comment>;
	}

	interface Media {
		media?: string;
		rules?: Array<Rule|Comment|AtRule>;
	}

	interface Namespace {
		namespace?: string;
	}

	interface Page {
		selectors?: Array<string>;
		declarations?: Array<Declaration|Comment>;
	}

	interface Supports {
		supports?: string;
		rules?: Array<Rule|Comment|AtRule>;
	}

	type AtRule = Charset|CustomMedia|Document|FontFace|Host|Import|KeyFrames|Media|Namespace|Page|Supports;

	interface Stylesheet extends Node {
		stylesheet?: {
			rules?: Array<Rule|Comment|AtRule>;
			parsingErrors?: Array<ParserError>
		};
	}

	// API

	function parse(code?: string, options?: ParserOptions): Stylesheet;
	function stringify(stylesheet?: Stylesheet, options?: StringifyOptions): string;
}