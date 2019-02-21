// Type definitions for frac 1.1
// Project: http://sheetjs.com/opensource
// Definitions by:  Adam Zerella <https://github.com/adamzerella>,
//                  SheetJSDev <https://github.com/SheetJSDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Frac {
	/**
	 * Return a rational approximation to a floating point number with bounded denominator.
	 * Using the Mediant method.
	 */
	(x: number, D: number, mixed?: boolean): [number, number, number];
	/**
	 * Return a rational approximation to a floating point number with bounded denominator.
	 * Using the Aberth algorithm.
	 */
	cont(x: number, D: number, mixed?: boolean): [number, number, number];
}

export const frac: Frac;

export default frac;
