// Type definitions for Marked
// Project: https://github.com/chjj/marked
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "marked" {
	function marked(src: string, opt?: Options): string;
	module marked {
		export function lexer(src: string, opt?: Options): any[];
		export function parser(src: any[], opt?: Options): string;
		export function parse(src: string, opt?: Options): string;
		export function setOptions(opt: Options): void;
	}

	export = marked;
}

interface Options {
	gfm?: bool;
	tables?: bool;
	breaks?: bool;
	pedantic?: bool;
	sanitize?: bool;
	highlight?: any;
}
