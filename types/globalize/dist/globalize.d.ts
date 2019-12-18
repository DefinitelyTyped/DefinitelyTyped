import * as Cldr from "cldrjs";

declare namespace Globalize {
	interface CommonNumberFormatterOptions {
		/**
		 * Non-negative integer Number value indicating the minimum integer digits to be used. Numbers will be padded with leading zeroes if necessary.
		 */
		minimumIntegerDigits?: number;
		/**
		 * Non-negative integer Number values indicating the minimum and maximum fraction digits to be used.
		 * Numbers will be rounded or padded with trailing zeroes if necessary.
		 * Either one or both of these properties must be present.
		 * If they are, they will override minimum and maximum fraction digits derived from the CLDR patterns.
		 */
		minimumFractionDigits?: number;
		/**
		 * Non-negative integer Number values indicating the minimum and maximum fraction digits to be used.
		 * Numbers will be rounded or padded with trailing zeroes if necessary.
		 * Either one or both of these properties must be present.
		 * If they are, they will override minimum and maximum fraction digits derived from the CLDR patterns.
		 */
		maximumFractionDigits?: number;
		/**
		 * Positive integer Number values indicating the minimum and maximum fraction digits to be shown.
		 * Either none or both of these properties are present
		 * If they are, they override minimum and maximum integer and fraction digits.
		 * The formatter uses however many integer and fraction digits are required to display the specified number of significant digits.
		 */
		minimumSignificantDigits?: number;
		/**
		 * Positive integer Number values indicating the minimum and maximum fraction digits to be shown.
		 * Either none or both of these properties are present.
		 * If they are, they override minimum and maximum integer and fraction digits.
		 * The formatter uses however many integer and fraction digits are required to display the specified number of significant digits.
		 */
		maximumSignificantDigits?: number;
		/**
		 * String with rounding method ceil, floor, round (default), or truncate.
		 */
		round?: "ceil" | "floor" | "round" | "truncate";
		/**
		 * Boolean (default is true) value indicating whether a grouping separator should be used.
		 */
		useGrouping?: boolean;
		/**
		 * String `short` or `long` indicating which compact number format should be used to represent the number.
		 */
		compact?: "short" | "long";
	}

	interface Shared {
		cldr: Cldr.CldrStatic;
	}

	interface Static extends Shared {
		/**
		 * Globalize.load( json, ... )
		 * @param {Object} [JSON]
		 * Load resolved or unresolved cldr data.
		 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
		 */
		load(json: Object): void;

		/**
		 * Globalize.locale()
		 * Return the default Cldr instance.
		 */
		locale(): Cldr.CldrStatic;

		/**
		 * Globalize.locale( [locale] )
		 * @param {string} locale
		 * Set default Cldr instance
		 * Return the default Cldr instance.
		 */
		locale(locale: string): Cldr.CldrStatic;
		/**
		 * Globalize.locale( cldr )
		 * @param {Cldr} cldr [Cldr instance]
		 * Set default Cldr instance
		 * Return the default Cldr instance.
		 */
		locale(cldr: Cldr.CldrStatic): Cldr.CldrStatic;

		/**
		 * Create a Globalize instance.
		 * @param {string} Locale string of the instance.
		 * @returns {Globalize} A Globalize instance
		 */
		new (locale: string): Globalize;
		/**
		 * Create a Globalize instance.
		 * @param cldr Cldr instance of the instance.
		 * @returns {Globalize} A Globalize instance
		 */
		new (cldr: Cldr.CldrStatic): Globalize;
		/**
		 * Create a Globalize instance.
		 * @param {string} Locale string of the instance.
		 * @returns {Globalize} A Globalize instance
		 */
		(locale: string): Globalize;
		/**
		 * Create a Globalize instance.
		 * @param cldr Cldr instance of the instance.
		 * @returns {Globalize} A Globalize instance
		 */
		(cldr: Cldr.CldrStatic): Globalize;
	}
}

interface Globalize extends Globalize.Shared {
}

declare const Globalize: Globalize.Static;

export = Globalize;
