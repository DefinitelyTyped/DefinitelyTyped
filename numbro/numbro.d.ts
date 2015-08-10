// Type definitions for Numbro.js
// Project: https://github.com/foretagsplatsen/numbro
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface NumbroLanguage {
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

interface Numbro {
	(value?: any): Numbro;
	version: string;
	isNumbro: boolean;
	language(key: string, values?: NumbroLanguage): Numbro;
	zeroFormat(format: string): string;
	clone(): Numbro;
	format(inputString?: string): string;
	formatCurrency(inputString?: string): string;
	unformat(inputString: string): number;
	value(): number;
	valueOf(): number;
	set (value: any): Numbro;
	add(value: any): Numbro;
	subtract(value: any): Numbro;
	multiply(value: any): Numbro;
	divide(value: any): Numbro;
	difference(value: any): number;
}

declare var numbro: Numbro;

declare module "numbro" {

    export = numbro;

}
