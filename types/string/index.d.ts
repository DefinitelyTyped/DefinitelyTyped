// Type definitions for string.js
// Project: http://stringjs.com
// Definitions by: Bas Pennings <https://github.com/basp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StringJS {
	length: number;
	
	s: string;
	
	between(left: string, right?: string): StringJS;
	
	camelize(): StringJS;
	
	capitalize(): StringJS;
	
	chompLeft(prefix: string): StringJS;
	
	chompRight(suffix: string): StringJS;
	
	collapseWhitespace(): StringJS;
	
	contains(ss: string): boolean;
	
	count(substring: string): number;
	
	dasherize(): StringJS;
	
	decodeHTMLEntities(): StringJS;
	
	endsWith(ss: string): boolean;
	
	escapeHTML(): StringJS;
	
	ensureLeft(prefix: string): StringJS;
	
	ensureRight(suffix: string): StringJS;
	
	humanize(): StringJS;
	
	include(ss: string): boolean;
	
	isAlpha(): boolean;
	
	isAlphaNumeric(): boolean;
	
	isEmpty(): boolean;
	
	isLower(): boolean;
	
	isNumeric(): boolean;
	
	isUpper(): boolean;
	
	latinise(): StringJS;
	
	left(n: number): StringJS;
	
	lines(): string[];
	
	pad(len: number, char?: string|number): StringJS;
	
	padLeft(len: number, char?: string|number): StringJS;
	
	padRight(len: number, char?: string|number): StringJS;
	
	parseCSV(delimiter?: string, qualifier?: string, escape?: string, lineDelimiter?: string): string[];
	
	repeat(n: number): StringJS;
	
	replaceAll(ss: string, newStr: string): StringJS;
	
	strip(...strings: string[]): StringJS;

	stripLeft(...strings: string[]): StringJS;

	stripRight(...strings: string[]): StringJS;
	
	right(n: number): StringJS;
	
	setValue(string: any): StringJS;
	
	slugify(): StringJS;
	
	startsWith(prefix: string): boolean;
	
	stripPunctuation(): StringJS;
	
	stripTags(...tags: string[]): StringJS;
	
	template(values: Object, open?: string, close?: string): StringJS;
	
	times(n: number): StringJS;
	
	titleCase(): StringJS;
	
	toBoolean(): boolean;
	
	toCSV(delimiter?: string, qualifier?: string): StringJS;
	toCSV(options: {
		delimiter?: string,
		qualifier?: string,
		escape?: string,
		encloseNumbers?: boolean,
		keys?: boolean
	}): StringJS;
	
	toFloat(precision?: number): number;
	
	toInt(): number;
	
	toInteger(): number;
	
	toString(): string;
	
	trim(): StringJS;
	
	trimLeft(): StringJS;
	
	trimRight(): StringJS;
	
	truncate(length: number, chars?: string): StringJS;
	
	underscore(): StringJS;
	
	unescapeHTML(): StringJS;
	
	wrapHTML(element?: string, attributes?: Object): StringJS;
}

declare var S: {
	(o: any): StringJS;
	VERSION: string;
	TMPL_OPEN: string;
	TMPL_CLOSE: string;
}

export = S;
export as namespace S;
