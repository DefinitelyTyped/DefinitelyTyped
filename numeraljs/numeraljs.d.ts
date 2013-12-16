// Type definitions for Numeral.js 1.5.2
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

/**
 * Represents a Numeral object for formatting and manipulating numbers.
 */
interface Numeral {
	(value?: any): Numeral;
    
    /**
     * Gets the NumeralJS version number. 
     */
    version: string;
    
    /**
     * Determines if the object is a Numeral object instance.
     * @param obj The object instance to test.
     * @return True if the object is an instance of the Numberal object, false otherwise.
     */
    isNumeral(obj: any): boolean;

    /**
     * This function will load languages and then set the global language. 
     * @param key An optional string language key that will be used to set the global language. If 
     * no key is specified, the current global language key will be returned.
     * @param values An option configuration object containing the language configuration values to load.
     * @return A Numeral object.
     */
    language(key?: string, values?: NumeralJSLanguage): Numeral;

    /**
     * This function gets and sets the loaded language data.
     * @param key An optional string language key that will be used to retrieve the global language. If 
     * no key is specified, the current global language key will be returned.
     * @return A Numeral object.
     */
    languageData(key?: string);

    /**
     * This function sets the format to use when formatting numerals with a value of 0.
     * @param format The custom format string that will be used for format the number.
     */
    zeroFormat(format: string): void;

    /**
     * Clones a numeral object.
     * @return A clone of the original numeral object.
     */
    clone(): Numeral;

    /**
     * Formats a numeral for output using the supplied format string and optional rounding function.
     * @param inputString A format string that will be used to format the numeral.   
     * @param roundingFunction A custom rounding function. If no rounding function is specified, use Math.round.
     * @return The formatted string representation of the numeral.
     */
    format(inputString: string, roundingFunction?: Function): string;

    /**
     * Unformats a string by turning it back into a number. 
     * @param inputString A format string that will be used to unformat the string back into a number.   
     * @return The number representing the formatted string numeral.
     */
    unformat(inputString: string): number;

    /**
     * Retrieves the original value of the numeral object.
     * @return The value of the numeral.
     */
    value(): number;

    /**
     * Retrieves the original value of the numeral object.
     * @return The value of the numeral.
     */
    valueOf(): number;

    /**
     * Sets the value of the numeral object.
     * @return A numeral object.
     */
    set(value: any): Numeral;

    /**
     * Adds a value to the numeral.
     * @param value The value to add to the numeral.
     * @return The sum of the numeral and value.
     */
    add(value: any): Numeral;

    /**
     * Subtracts a value from the numeral.
     * @param value The value to subtract from the numeral.
     * @return The result of subtracting the value from the numeral.
     */
    subtract(value: any): Numeral;

    /**
     * Multiplies a value with the numeral.
     * @param value The value to multiply with the numeral.
     * @return The result of multiplying the value and the numeral.
     */
    multiply(value: any): Numeral;

    /**
     * Divides a value by the numeral.
     * @param value The value to divide the numeral by.
     * @return The result of dividing the numeral by the value.
     */
    divide(value: any): Numeral;

    /**
     * Finds the absolute difference between the numberal and a value.
     * @param value The value that will be used to calculate the difference.
     * @return An absolute number representing the difference between the numeral and the value.
     */
    difference(value: any): number;
}

declare var numeral: Numeral;