// Type definitions for Marked
// Project: https://github.com/chjj/marked
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "marked" {
	export function (src: string, opt?: Options): string;
	export function lexer(src: string, opt?: Options): Array;
	export function parser(src: string, opt?: Options): string;
	export function parse(src: string, opt?: Options): string;
	export function setOptions(opt: Options): void;
}

interface Options {
	gfm?: bool;
	tables?: bool;
	breaks?: bool;
	pedantic?: bool;
	sanitize?: bool;
	highlight?: any;
}
