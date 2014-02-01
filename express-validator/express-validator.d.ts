// Type definitions for express-validator
// Project: https://github.com/ctavan/express-validator
// Definitions by: Nathan Ridley <https://github.com/axefrog/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare module ExpressValidator {
	export interface ValidationError {
		msg: string;
		param: string;
	}

	export interface RequestValidation {
		check(field: string, message: string): Validator;
		assert(field: string, message: string): Validator;
		sanitize(field: string): Sanitizer;
		onValidationError(func: (msg: string) => void): void;
	}

	export interface Validator {
		/**
		 * Alias for regex()
		 */
		is(): Validator;
		/**
		 * Alias for notRegex()
		 */
		not(): Validator;
		isEmail(): Validator;
		/**
		 * Accepts http, https, ftp
		 */
		isUrl(): Validator;
		/**
		 * Combines isIPv4 and isIPv6
		 */
		isIP(): Validator;
		isIPv4(): Validator;
		isIPv6(): Validator;
		isAlpha(): Validator;
		isAlphanumeric(): Validator;
		isNumeric(): Validator;
		isHexadecimal(): Validator;
		/**
		 * Accepts valid hexcolors with or without # prefix
		 */
		isHexColor(): Validator;
		/**
		 * isNumeric accepts zero padded numbers, e.g. '001', isInt doesn't
		 */
		isInt(): Validator;
		isLowercase(): Validator;
		isUppercase(): Validator;
		isDecimal(): Validator;
		/**
		 * Alias for isDecimal
		 */
		isFloat(): Validator;
		/**
		 * Check if length is 0
		 */
		notNull(): Validator;
		isNull(): Validator;
		/**
		 * Not just whitespace (input.trim().length !== 0)
		 */
		notEmpty(): Validator;
		equals(equals: any): Validator;
		contains(str: string): Validator;
		notContains(str: string): Validator;
		/**
		 * Usage: regex(/[a-z]/i) or regex('[a-z]','i')
		 */
		regex(pattern: string, modifiers: string): Validator;
		notRegex(pattern: string, modifiers: string): Validator;
		/**
		 * max is optional
		 */
		len(min: number, max?: number): Validator;
		/**
		 * Version can be 3, 4 or 5 or empty, see http://en.wikipedia.org/wiki/Universally_unique_identifier
		 */
		isUUID(version: number): Validator;
		/**
		 * Alias for isUUID(3)
		 */
		isUUIDv3(): Validator;
		/**
		 * Alias for isUUID(4)
		 */
		isUUIDv4(): Validator;
		/**
		 * Alias for isUUID(5)
		 */
		isUUIDv5(): Validator;
		/**
		 * Uses Date.parse() - regex is probably a better choice
		 */
		isDate(): Validator;
		/**
		 * Argument is optional and defaults to today. Comparison is non-inclusive
		 */
		isAfter(date: Date): Validator;
		/**
		 * Argument is optional and defaults to today. Comparison is non-inclusive
		 */
		isBefore(date: Date): Validator;
		isIn(options: string): Validator;
		isIn(options: string[]): Validator;
		notIn(options: string): Validator;
		notIn(options: string[]): Validator;
		max(val: string): Validator;
		min(val: string): Validator;
		/**
		 * Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
		 */
		isCreditCard(): Validator;
	}

	interface Sanitizer {
		/**
		 * Trim optional `chars`, default is to trim whitespace (\r\n\t )
		 */
		trim(...chars: string[]): Sanitizer;
		ltrim(...chars: string[]): Sanitizer;
		rtrim(...chars: string[]): Sanitizer;
		ifNull(replace: any): Sanitizer;
		toFloat(): Sanitizer;
		toInt(): Sanitizer;
		/**
		 * True unless str = '0', 'false', or str.length == 0
		 */
		toBoolean(): Sanitizer;
		/**
		 * False unless str = '1' or 'true'
		 */
		toBooleanStrict(): Sanitizer;
		/**
		 * Decode HTML entities
		 */
		entityDecode(): Sanitizer;
		entityEncode(): Sanitizer;
		/**
		 * Escape &, <, >, and "
		 */
		escape(): Sanitizer;
		/**
		 * Remove common XSS attack vectors from user-supplied HTML
		 */
		xss(): Sanitizer;
		/**
		 * Remove common XSS attack vectors from images
		 */
		xss(fromImages: boolean): Sanitizer;
	}
}

declare function ExpressValidator(): void;

declare module "express-validator" {
	export = ExpressValidator;
}
