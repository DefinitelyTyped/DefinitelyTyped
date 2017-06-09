// Type definitions for Globalize
// Project: https://github.com/jquery/globalize
// Definitions by: Grégoire Castre <https://github.com/gcastre/>, Aram Taieb <https://github.com/afromogli/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Note: You'll need the cldr.js definition file to use the globalize (https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/cldr.js)

/// <reference types="cldrjs" />

interface DateFormatterOptions {
	/**
	 * String value indicating a skeleton (see description above), eg. { skeleton: "GyMMMd" }.
	 * Skeleton provides a more flexible formatting mechanism than the predefined list full, long, medium, or short represented by date, time, or datetime.
	 * Instead, they are an open-ended list of patterns containing only date field information, and in a canonical order.
	 */
	skeleton?: string;
	/**
	 * One of the following String values: full, long, medium, or short, eg. { date: "full" }.
	 */
	date?: "full" | "long" | "medium" | "short";
	/**
	 * One of the following String values: full, long, medium, or short, eg. { time: "full" }.
	 */
	time?: "full" | "long" | "medium" | "short";
	/**
	 * One of the following String values: full, long, medium, or short, eg. { datetime: "full" }
	 */
	datetime?: "full" | "long" | "medium" | "short";
	/**
	 * String value indicating a machine raw pattern (anything in the "Sym." column) eg. { raw: "dd/mm" }.
	 * Note this is NOT recommended for i18n in general. Use skeleton instead.
	 */
	raw?: string;
}

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
}

interface NumberFormatterOptions extends CommonNumberFormatterOptions {
	/**
	 * decimal (default), or percent
	 */
	style?: "decimal" | "percent";
}

interface CurrencyFormatterOptions extends CommonNumberFormatterOptions {
	/**
	 * symbol (default), accounting, code or name.
	 */
	style?: "symbol" | "accounting" | "code" | "name";
}

interface NumberParserOptions {
	/**
	 * decimal (default), or percent.
	 */
	style?: "decimal" | "percent";
}

interface PluralGeneratorOptions {
	/**
	 * cardinal (default), or ordinal.
	 */
	type?: "cardinal" | "ordinal";
}

interface RelativeTimeFormatterOptions {
	/**
	 * eg. "short" or "narrow". Or falsy for default long form
	 */
	form?: "short" | "narrow";
}

interface UnitFormatterOptions {
	/**
	 * form: [String] eg. "long", "short" or "narrow".
	 */
	form?: "long" | "short" | "narrow";

	/**
	 * numberFormatter: [Function] a number formatter function. Defaults to Globalize .numberFormatter() for the current locale using the default options.
	 */
	numberFormatter?: NumberFormatterOptions;
}

interface GlobalizeStatic {

	cldr: Cldr.CldrStatic;

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
	 * .dateFormatter( options )
	 * @param {DateFormatterOptions} options see date/expand_pattern for more info.
	 * @returns {Function} Return a function that formats a date according to the given `options` and the default/instance locale.
	 */
	dateFormatter(options?: DateFormatterOptions): (value: Date) => string;

	//Return a function that parses a string representing a date into a JavaScript Date object according to the given options. The default parsing assumes numeric year, month, and day (i.e., { skeleton: "yMd" }).
	dateParser(options?: DateFormatterOptions): (value: string) => Date;

	//Alias for .dateFormatter( [options] )( value ).
	formatDate(value: Date, options?: DateFormatterOptions): string;
	/**
	 * Alias for .dateParser( [options] )( value ).
	 * @param {string} value The object whose module id you wish to determine.
	 * @param {DateFormatterOptions} options The object whose module id you wish to determine.
	 * @returns {Date} Return the value as a Date.
	 */
	parseDate(value: string, options?: DateFormatterOptions): Date;

	/**
	 * Load messages data.
	 * @param {Object} json JSON object of messages data. Keys can use any character, except /, { and }. Values (i.e., the message content itself) can contain any character.
	 * @returns {void}
	 */
	loadMessages(json: Object): void;
	/**
	 * Return a function that formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string. It supports pluralization and gender inflections.
	 * @param path String or Array containing the path of the message content, eg. "greetings/bye", or [ "greetings", "bye" ].
	 * @returns {Function} Return A function that formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string. It supports pluralization and gender inflections.
	 */
	messageFormatter(path: string | string[]): (variables?: string | string[] | Object) => string;

	/**
	 * Formats a message (using ICU message format pattern) given its path and a set of variables into a user-readable string
	 * @param path String or Array containing the path of the message content, eg. "greetings/bye", or [ "greetings", "bye" ].
	 * @param variables Variables can be Objects, where each property can be referenced by name inside a message; or Arrays, where each entry of the Array can be used inside a message, using numeric indices. When passing one or more arguments of other types, they're converted to an Array and used as such.
	 * @returns {string} Return a user-readable string.
	 */
	formatMessage(path: string | string[], variables?: string | string[] | Object): string

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

	/**
	 * Returns a function that formats a relative time according to the given unit, options, and the default/instance locale.
	 * The returned function is invoked with one argument: the number value to be formatted.
	 * @param unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
	 * @param options form: [String] eg. "short" or "narrow". Or falsy for default long form.
	 * @returns {Function} Returns a function that formats a relative time according to the given unit.
	 */
	relativeTimeFormatter(unit: string, options?: RelativeTimeFormatterOptions): (value: number) => string;

	/**
	 * Return a relative time according to the given unit
	 * @param {number} value The number to be formatted.
	 * @param {string} unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
	 * @param options form: [String] eg. "short" or "narrow". Or falsy for default long form.
	 * @returns {string} Return a relative time according to the given unit.
	 */
	formatRelativeTime(value: number, unit: string, options?: RelativeTimeFormatterOptions): string;

	/**
	 * Returns a function that formats a unit according to the given unit, options, and the default/instance locale.
	 * The returned function is invoked with one argument: the number value to be formatted.
	 * @param unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc. Could also be a compound unit, eg. "mile-per-hour" or "mile/hour"
	 * @param options form: [String] eg. "long", "short" or "narrow".
	 * @returns {Function} Returns a function that formats a unit according to the given unit, options, and the default/instance locale.
	 */
	unitFormatter(unit: string, options?: UnitFormatterOptions): (value: number) => string;

	/**
	 * Alias for .unitFormatter( unit, options )( value ).
	 * @param {number} value The number to be formatted.
	 * @param {string} unit String value indicating the unit to be formatted. eg. "day", "week", "month", etc. Could also be a compound unit, eg. "mile-per-hour" or "mile/hour"
	 * @param {UnitFormatterOptions} options form: [String] eg. "long", "short" or "narrow".
	 * @returns {string} Returns the unit formatted.
	 */
	formatUnit(value: number, unit: string, options?: UnitFormatterOptions): string

	/**
	 * Create a Globalize instance.
	 * @param {string} Locale string of the instance.
	 * @returns {Globalize} A Globalize instance
	 */
	new (locale: string): GlobalizeStatic;
	/**
	 * Create a Globalize instance.
	 * @param cldr Cldr instance of the instance.
	 * @returns {Globalize} A Globalize instance
	 */
	new (cldr: Cldr.CldrStatic): GlobalizeStatic;
}

declare var Globalize: GlobalizeStatic;
