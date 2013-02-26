// Type definitions for Numeral.js
// Project: https://github.com/adamwdraper/Numeral-js
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface NumeralJSLanguage {
	delimiters: {
		thousands: string;
		decimal: string;
	};
	abbreviations: {
		thousand: string;
		million: string;
		billion: string;
		trillion: string;
	};
	ordinal(num: number): string;
	currency: {
		symbol: string;
	};
}

interface Numeral {
	(value?: any): Numeral;
	version: string;
	isNumeral: bool;
	language(key: string, values?: NumeralJSLanguage): Numeral;
	zeroFormat(format: string): string;
	clone(): Numeral;
	format(inputString: string): string;
	unformat(inputString: string): number;
	value(): number;
	valueOf(): number;
	set (value: any): Numeral;
	add(value: any): Numeral;
	subtract(value: any): Numeral;
	multiply(value: any): Numeral;
	divide(value: any): Numeral;
	difference(value: any): number;
}

declare var numeral: Numeral;