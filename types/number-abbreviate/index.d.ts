/**
 * Represents an instance of the NumberAbbreviate abbreviator.
 * Created by `new NumberAbbreviate(units)` or internally by the direct function call.
 */
interface AbbreviatorInstance {
    /**
     * Units used in the abbreviations
     *
     * @default ['k', 'm', 'b', 't']
     */
    units: string[];
    /**
     * Abbreviates a number into a more readable format (e.g., 1000000 -> 1M).
     *
     * @param value number to be abbreviated. Non-numeric strings will result in `NaN`
     * @param decimalPlaces number of decimal places to include (default: 0).
     * @returns the abbreviated string or `NaN`
     */
    abbreviate(value: number | string, decimalPlaces?: number): string;
    /**
     * Internal helper function for the abbreviation logic.
     *
     * @internal
     * @param number number to be abbreviated
     * @param decPlaces number of decimal places to include.
     * @returns the abbreviated string fragment without sign.
     */
    _abbreviate(number: number, decPlaces: number): string;
}

/**
 * A utility for abbreviating numbers into more readable formats (e.g., 1000000 becomes 1m).
 * Can be used as a direct function call for quick abbreviation or instantiated
 * as a class for custom unit configurations.
 *
 * @example
 * // Direct function call:
 * import abbreviate from "number-abbreviate";
 * console.log(abbreviate(1234567, 1)); // Outputs: "1.2m"
 *
 * @example
 * // Using as a constructor for custom units:
 * import NumberAbbreviateClass from "number-abbreviate";
 * const customAbbrev = new NumberAbbreviateClass(['k', 'M', 'B', 'T']);
 * console.log(customAbbrev.abbreviate(5000000000, 2)); // Outputs: "5.00B"
 */
interface NumberAbbreviateFunction {
    /**
     * Creates a new instance of the NumberAbbreviate utility with custom unit abbreviations.
     * @param units Optional. An array of custom unit strings (default: ['k', 'm', 'b', 't']).
     */
    new(units?: string[]): AbbreviatorInstance;
    /**
     * Abbreviates a number into a more readable format.
     * @param value number or string to abbreviate. Non-numeric strings will result in `NaN`
     * @param decimalPlaces number of decimal places to include (default: `0`).
     * @param units an array of custom unit strings for this specific call, used in order. (default: `['k', 'm', 'b', 't']`)
     * @returns the abbreviated string or `NaN`
     */
    (value: number | string, decimalPlaces?: number, units?: string[]): string;
}

declare const NumberAbbreviate: NumberAbbreviateFunction; // <--- CHANGE HERE: Added 'declare'
export = NumberAbbreviate;
