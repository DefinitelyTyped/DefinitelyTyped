import * as Globalize from "../globalize";

declare module "../globalize" {
	interface CurrencyFormatterOptions extends CommonNumberFormatterOptions {
		/**
		* symbol (default), accounting, code or name.
		*/
		style?: "symbol" | "accounting" | "code" | "name";
	}

	interface Shared {
		/**
		 * Return a function that formats a currency according to the given options or locale's defaults.
		 * The returned function is invoked with one argument: the Number value to be formatted.
		 * @param {string} currency 3-letter currency code as defined by ISO 4217, eg. USD.
		 * @param {CurrencyFormatterOptions} options A JSON object including none or any of the following options.
		 * @returns {Function} Return a function that formats a currency
		 */
		currencyFormatter(currency: string, options?: CurrencyFormatterOptions): (value: number) => string;

		/**
		 * Return a currency formatted according to the given options or locale's defaults.
		 * @param {number} value The value to format.
		 * @param {string} currency 3-letter currency code as defined by ISO 4217, eg. USD.
		 * @param {CurrencyFormatterOptions} options A JSON object including none or any of the following options.
		 * @returns {string} Return a string formatted in the currency according to the value and the options
		 */
		formatCurrency(value: number, currency: string, options?: CurrencyFormatterOptions): string;
	}
}

export = Globalize;
