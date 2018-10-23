// Type definitions for capitalize 1.0
// Project: https://github.com/grncdr/js-capitalize
// Definitions by: Frederick Fogerty <https://github.com/frederickfogerty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Capitalize the first letter of a string
 * @param input the string to capitalize
 */
declare function capitalize(input: string): string;
declare namespace capitalize {
	/**
	 * Capitalize each word in a string
	 * @param input the string to capitalize
	 */
	function words(input: string): string;
}
export = capitalize;
