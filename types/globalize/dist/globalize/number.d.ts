import * as Globalize from "../globalize";

declare module "../globalize" {
	interface NumberFormatterOptions extends CommonNumberFormatterOptions, NumberParserOptions { }
	interface NumberParserOptions {
		/**
		 * decimal (default), or percent.
		 */
		style?: "decimal" | "percent";
	}
	interface Shared {
		/**
		 * Return a function that formats a number according to the given options or locale's defaults.
		 * @param {NumberFormatterOptions} options A JSON object including none or any of the following options.
		 * style Optional String decimal (default), or percent.
		 * minimumIntegerDigits Optional Non-negative integer Number value indicating the minimum integer digits to be used. Numbers will be padded with leading zeroes if necessary.
		 * minimumFractionDigits and maximumFractionDigits Optional Non-negative integer Number values indicating the minimum and maximum fraction digits to be used. Numbers will be rounded or padded with trailing zeroes if necessary. Either one or both of these properties must be present. If they are, they will override minimum and maximum fraction digits derived from the CLDR patterns.
		 * minimumSignificantDigits and maximumSignificantDigits Optional Positive integer Number values indicating the minimum and maximum fraction digits to be shown. Either none or both of these properties are present. If they are, they override minimum and maximum integer and fraction digits. The formatter uses however many integer and fraction digits are required to display the specified number of significant digits.
		 * round Optional String with rounding method ceil, floor, round (default), or truncate.
		 * useGrouping Optional Boolean (default is true) value indicating whether a grouping separator should be used.
		 * @returns {Function} Return a function that formats a number according to the given options.
		 */
		numberFormatter(options?: NumberFormatterOptions): (value: number) => string;
		/**
		 * Return a function that parses a string representing a number according to the given options or locale's defaults.
		 * @param {NumberParserOptions} options A JSON object including none or any of the following options.
		 * style Optional String decimal (default), or percent.
		 * @returns {Function} Return a function that parses a String representing a number according to the given options. If value is invalid, NaN is returned.
		 */
		numberParser(options?: NumberParserOptions): (value: string) => number
		/**
		 * Return a number formatted according to the given options or locale's defaults.
		 * @param {number} value The number to format
		 * @param {NumberFormatterOptions} options A JSON object including none or any of the following options.
		 * style Optional String decimal (default), or percent.
		 * minimumIntegerDigits Optional Non-negative integer Number value indicating the minimum integer digits to be used. Numbers will be padded with leading zeroes if necessary.
		 * minimumFractionDigits and maximumFractionDigits Optional Non-negative integer Number values indicating the minimum and maximum fraction digits to be used. Numbers will be rounded or padded with trailing zeroes if necessary. Either one or both of these properties must be present. If they are, they will override minimum and maximum fraction digits derived from the CLDR patterns.
		 * minimumSignificantDigits and maximumSignificantDigits Optional Positive integer Number values indicating the minimum and maximum fraction digits to be shown. Either none or both of these properties are present. If they are, they override minimum and maximum integer and fraction digits. The formatter uses however many integer and fraction digits are required to display the specified number of significant digits.
		 * round Optional String with rounding method ceil, floor, round (default), or truncate.
		 * useGrouping Optional Boolean (default is true) value indicating whether a grouping separator should be used.
		 * @returns {string} Return the number formatted
		 */
		formatNumber(value: number, options?: NumberFormatterOptions): string;

		/**
		 * A function that parses a string representing a number according to the given options or locale's defaults.
		 * @param {string} value The number as string to parse
		 * @param {NumberParserOptions} options A JSON object including none or any of the following options.
		 * style Optional String decimal (default), or percent.
		 * @returns {number} Return a number according to the given options. If value is invalid, NaN is returned.
		 */
		parseNumber(value: string, options?: NumberParserOptions): number;
	}
}

export = Globalize;
