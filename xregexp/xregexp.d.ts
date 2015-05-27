// Type definitions for XRegExp 2.0.0
// Project: http://xregexp.com
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'xregexp' {
	// scopes: 'default', 'class', or 'all'
	/*
	 Native flags:
	 g - global
	 i - ignore case
	 m - multiline anchors
	 y - sticky (Firefox 3+)
	 Additional XRegExp flags:
	 n - explicit capture
	 s - dot matches all (aka singleline)
	 x - free-spacing and line comments (aka extended)
	 */
	export interface TokenOpts {
		scope?: string;
		trigger?: () => boolean;
		customFlags?: string;
	}

	export function XRegExp(pattern: string, flags?: string): RegExp;
	export function XRegExp(pattern: RegExp): RegExp;

	export module XRegExp {
		function addToken(regex: RegExp, handler: (matchArr: RegExpExecArray, scope: string) => string, options?: TokenOpts): void;

		function build(pattern: string, subs: string[], flags?: string): RegExp;
		function cache(pattern: string, flags?: string): RegExp;
		function escape(str: string): string;
		function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray;
		function forEach(str: string, regex: RegExp, callback: (matchArr: RegExpExecArray, index: number, input: string, regexp: RegExp) => void, context?: Object): any;
		function globalize(regex: RegExp): RegExp;

		function install(options: string): void;
		function install(options: Object): void;

		function isInstalled(feature: string): boolean;
		function isRegExp(value: any): boolean;
		function matchChain(str: string, chain: RegExp[]): string[];
		function matchChain(str: string, chain: { regex: RegExp; backref: string }[]): string[];
		function matchChain(str: string, chain: { regex: RegExp; backref: number }[]): string[];
		function matchRecursive(str: string, left: string, right: string, flags?: string, options?: Object): string[];

		function replace(str: string, search: string, replacement: string, scope?: string): string;
		function replace(str: string, search: string, replacement: Function, scope?: string): string;
		function replace(str: string, search: RegExp, replacement: string, scope?: string): string;
		function replace(str: string, search: RegExp, replacement: Function, scope?: string): string;

		function split(str: string, separator: string, limit?: number): string[];
		function split(str: string, separator: RegExp, limit?: number): string[];

		function test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean;

		function uninstall(options: Object): void;
		function uninstall(options: string): void;

		function union(patterns: string[], flags?: string): RegExp;
		var version: string;
	}
}
