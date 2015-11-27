// Type definitions for Uglify-js
// Project: http://lisperator.net/uglifyjs/
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare var uglifyjs: uglifyjs.UglifyjsStatic;
declare module uglifyjs {

	interface MinifyResult{
		code:string;
		map:string
	}

	interface OutputOptions {
		indent_start?  : number;     // start indentation on every line (only when `beautify`)
		indent_level ? : number;       // indentation level (only when `beautify`)
		quote_keys   ? : boolean; // quote all keys in object literals?
		space_colon   ?: boolean;  // add a space after colon signs?
		ascii_only   ? : boolean; // output ASCII-safe? (encodes Unicode characters as ASCII)
		inline_script ?: boolean; // escape "</script"?
		width        ? : number;      // informative maximum line width (for beautified output)
		max_line_len ? : number;   // maximum line length (for non-beautified output)
		ie_proof     ? : boolean; // output IE-safe code?
		beautify     ? : boolean; // beautify output?
		source_map   ? : boolean;  // output a source map
		bracketize   ? : boolean; // use brackets every time?
		comments     ? : boolean; // output comments?
		semicolons    ?: boolean;  // use semicolons to separate statements? (otherwise, newlines)
	}

	interface CompressionOptions{
		sequences    ? : boolean;  // join consecutive statemets with the “comma operator”
		properties   ? : boolean;  // optimize property access: a["foo"] → a.foo
		dead_code    ? : boolean;   // discard unreachable code
		drop_debugger? : boolean;   // discard “debugger” statements
		unsafe       ? : boolean;  // some unsafe optimizations (see below)
		conditionals ? : boolean;  // optimize if-s and conditional expressions
		comparisons  ? : boolean;   // optimize comparisons
		evaluate     ? : boolean; // evaluate constant expressions
		booleans     ? : boolean;  // optimize boolean expressions
		loops        ? : boolean;   // optimize loops
		unused       ? : boolean;   // drop unused variables/functions
		hoist_funs   ? : boolean;  // hoist function declarations
		hoist_vars   ? : boolean;  // hoist variable declarations
		if_return    ? : boolean;   // optimize if-s followed by return/continue
		join_vars    ? : boolean;   // join var declarations
		cascade      ? : boolean;   // try to cascade `right` into `left` in sequences
		side_effects  ?: boolean;   // drop side-effect-free statements
		warnings      ?: boolean;  // warn about potentially dangerous optimizations/code
		global_defs  ? : {}     // global definitions
	}

	interface MinifyOptions{
		spidermonkey ?: boolean;
		outSourceMap?: string;
		sourceRoot?:string;
		inSourceMap?:string;
		warnings?:boolean;
		fromString?:boolean;
		mangle?:boolean;
		output?: OutputOptions;
		compress?:CompressionOptions;
	}

	interface UglifyjsStatic {
		minify(pathOrStringofcode:string, options? : MinifyOptions):MinifyResult;
		minify(pathes:string[], options? : MinifyOptions):MinifyResult;
	}

}

declare module "uglify-js" {
	export = uglifyjs;
}
