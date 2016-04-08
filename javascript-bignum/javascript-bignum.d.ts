// Type definitions for javascript-bignum
// Project: https://github.com/jtobey/javascript-bignum
// Definitions by: Nathan Shively-Sanders <https://github.com/sandersn> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Documentation: http://john-edwin-tobey.org/Scheme/javascript-bignum/docs/files/schemeNumber-js.html

// This version only includes typing for schemeNumber, not the full library
declare type SchemeOperator = (...args: (string | SchemeNumber | number)[]) => SchemeNumber;
declare var VERSION: number[];
declare function raise(conditionType: string, message: string, ...irritants: any[]): void;
declare var maxIntegerDigits: number;
declare interface SchemeFn {
	[opname: string]: SchemeOperator;
	inexact: SchemeOperator;
	exact: SchemeOperator;
	max: SchemeOperator;
	min: SchemeOperator;
	abs: SchemeOperator;
	div: SchemeOperator;
	mod: SchemeOperator;
	div0: SchemeOperator;
	mod0: SchemeOperator;
	gcd: SchemeOperator;
	lcm: SchemeOperator;
	numerator: SchemeOperator;
	denominator: SchemeOperator;
	floor: SchemeOperator;
	ceiling: SchemeOperator;
	truncate: SchemeOperator;
	round: SchemeOperator;
	rationalize: SchemeOperator;
	exp: SchemeOperator;
	log: SchemeOperator;
	sin: SchemeOperator;
	cos: SchemeOperator;
	tan: SchemeOperator;
	asin: SchemeOperator;
	acos: SchemeOperator;
	atan: SchemeOperator;
	sqrt: SchemeOperator;
	expt: SchemeOperator;
	magnitude: SchemeOperator;
	angle: SchemeOperator;
}
declare interface SchemeNumber {
	(value: string | number): SchemeNumber;
	toString(radix: number): string;
	toFixed(fractionDigits: number): string;
	toExponential(fractionDigits: number): string;
	toPrecision(precision: number): string;
	fn: SchemeFn;
}
declare var SchemeNumber: SchemeNumber;
