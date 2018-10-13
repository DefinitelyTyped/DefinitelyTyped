import * as Globalize from "../globalize";

declare module "../globalize" {
	interface PluralGeneratorOptions {
		/**
		 * cardinal (default), or ordinal.
		 */
		type?: "cardinal" | "ordinal";
	}
	interface Shared {
		/**
		 * Return a function that returns the value's corresponding plural group: zero, one, two, few, many, or other.
		 * The returned function is invoked with one argument: the Number value for which to return the plural group.
		 * @param {PluralGeneratorOptions} options A JSON object including none or any of the following options.
		 * type Optional String cardinal (default), or ordinal.
		 * @returns {Function} Return a function that returns the value's corresponding plural group: zero, one, two, few, many, or other.
		 */
		pluralGenerator(options?: PluralGeneratorOptions): (value: number) => string;

		/**
		 * Returns the value's corresponding plural group: zero, one, two, few, many, or other.
		 * @param {number} value A Number for which to return the plural group.
		 * @param {PluralGeneratorOptions} options A JSON object including none or any of the following options.
		 * type Optional String cardinal (default), or ordinal.
		 * @returns {string} Returns the value's corresponding plural group: zero, one, two, few, many, or other.
		 */
		plural(value: number, options?: PluralGeneratorOptions): string;
	}
}

export = Globalize;
