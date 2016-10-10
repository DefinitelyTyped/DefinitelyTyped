// Type definitions for express-validator 2.20.4
// Project: https://github.com/ctavan/express-validator
// Definitions by: Nathan Ridley <https://github.com/axefrog/>, Jonathan Häberle <http://dreampulse.de>, Peter Harris <https://github.com/codeanimal/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />

// Add RequestValidation Interface on to Express's Request Interface.
declare namespace Express {
	interface Request extends ExpressValidator.RequestValidation {}
}

// External express-validator module.
declare module "express-validator" {
	import express = require('express');

	/**
	 *
	 * @middlewareOptions see: https://github.com/ctavan/express-validator#middleware-options
	 */
	function ExpressValidator(middlewareOptions?:any):express.RequestHandler;

	export = ExpressValidator;
}

// Internal Module.
declare namespace ExpressValidator {

	export interface ValidationError {
		msg: string;
		param: string;
	}

	interface ValidatorFunction { (item: string | {}, message?: string): Validator; }
	interface ValidatorExtraFunction extends ValidatorFunction { (matchIndex: number, message?: string): Validator; }
	interface SanitizerFunction { (item: string): Sanitizer; }
	interface Dictionary<T> { [key: string]: T; }

	export interface RequestValidation {
		assert: ValidatorExtraFunction;
		validate: ValidatorExtraFunction;
		check: ValidatorExtraFunction;
		checkBody: ValidatorFunction;
		checkFiles: ValidatorFunction;
		checkHeaders: ValidatorFunction;
		checkParams: ValidatorFunction;
		checkQuery: ValidatorFunction;
		
		filter: SanitizerFunction;
		sanitize: SanitizerFunction;
		sanitizeBody: SanitizerFunction;
		sanitizeQuery: SanitizerFunction;
		sanitizeParams: SanitizerFunction;
		sanitizeHeaders: SanitizerFunction;
		
		onValidationError(errback: (msg: string) => void): void;
		validationErrors(mapped?: boolean): Dictionary<MappedError> | MappedError[];
		validationErrors<T>(mapped?: boolean): Dictionary<T> | T[];
		asyncValidationErrors(mapped?: boolean): Promise<MappedError[] | Dictionary<MappedError>>;
		asyncValidationErrors<T>(mapped?: boolean): Promise<T[] | Dictionary<T>>;
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
		isEmail(options?:{}): Validator;
		/**
		 * Accepts http, https, ftp
		 */
		isURL(): Validator;
		isFQDN(options?: MinMaxOptions): Validator;
		
		/**
		 * Combines isIPv4 and isIPv6
		 */
		isIP(): Validator;
		isIPv4(): Validator;
		isIPv6(): Validator;
		isMACAddress(): Validator;
		isISBN(version?: number): Validator;
		isISIN(): Validator;
		isISO8601(): Validator;
		isMobilePhone(locale: string): Validator;
		isMongoId(): Validator;
		isMultibyte(): Validator;
		isAlpha(locale?: string): Validator;
		isAlphanumeric(locale?: string): Validator;
		isAscii(): Validator;
		isBase64(): Validator;
		isBoolean(): Validator;
		isByteLength(options: MinMaxOptions): Validator;
		isCurrency(options: {}): Validator;
		isDataURI(): Validator;
		isDivisibleBy(num: number): Validator;
		isNumeric(): Validator;
		isHexadecimal(): Validator;
		/**
		 * Accepts valid hexcolors with or without # prefix
		 */
		isHexColor(): Validator;
		/**
		 * isNumeric accepts zero padded numbers, e.g. '001', isInt doesn't
		 */
		isInt(options?: MinMaxOptions): Validator;
		isLowercase(): Validator;
		isUppercase(): Validator;
		isDecimal(): Validator;
		/**
		 * Alias for isDecimal
		 */
		isFloat(): Validator;
		isFullWidth(): Validator;
		isHalfWidth(): Validator;
		isVariableWidth(): Validator;
		/**
		 * Check if length is 0
		 */
		isNull(): Validator;
		/**
		 * Not just whitespace (input.trim().length !== 0)
		 */
		notEmpty(): Validator;
		equals(equals:any): Validator;
		contains(str:string): Validator;

		/**
		 * Usage: matches(/[a-z]/i) or matches('[a-z]','i')
		 */
		matches(pattern:string, modifiers?:string): Validator;
		matches(pattern: RegExp): Validator;
		
		/**
		 * max is optional
		 */
		len(min:number, max?:number): Validator;
		/**
		 * Version can be 3, 4 or 5 or empty, see http://en.wikipedia.org/wiki/Universally_unique_identifier
		 */
		isUUID(version?:number): Validator;
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
		isAfter(date?:Date): Validator;
		/**
		 * Argument is optional and defaults to today. Comparison is non-inclusive
		 */
		isBefore(date?:Date): Validator;
		isIn(options:string): Validator;
		isIn(options:string[]): Validator;
		notIn(options:string): Validator;
		notIn(options:string[]): Validator;
		max(val:string): Validator;
		min(val:string): Validator;
		isJSON(): Validator;
		isLength(options: MinMaxOptions): Validator;
		isWhitelisted(chars: string): Validator;
		/**
		 * Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
		 */
		isCreditCard(): Validator;
		/**
		 * Check an input only when the input exists
		 */
		isSurrogatePar(): Validator;
		
		optional(options?: { checkFalsy?: boolean }): Validator;
		withMessage(message: string): Validator;
	}

	interface Sanitizer {
		/**
		 * Trim optional `chars`, default is to trim whitespace (\r\n\t )
		 */
		trim(...chars:string[]): Sanitizer;
		ltrim(...chars:string[]): Sanitizer;
		rtrim(...chars:string[]): Sanitizer;
		stripLow(keep_new_lines?: boolean): Sanitizer;
		toFloat(): Sanitizer;
		toInt(radix?: number): Sanitizer;
		/**
		 * True unless str = '0', 'false', or str.length == 0. In strict mode only '1' and 'true' return true.
		 */
		toBoolean(strict?: boolean): Sanitizer;
		
		/**
		* Convert the input string to a date, or null if the input is not a date.
		*/
		toDate(): Sanitizer;
		
		/**
		 * Escape &, <, >, and "
		 */
		escape(): Sanitizer;
		
		/**
		 * Replaces HTML encoded entities with <, >, &, ', " and /.
		 */
		unescape(): Sanitizer;
		
		blacklist(chars: string): Sanitizer;
		blacklist(chars: string[]): Sanitizer;
		whitelist(chars: string): Sanitizer;
		whitelist(chars: string[]): Sanitizer;
		
		normalizeEmail(options?: { lowercase?: boolean; remove_dots?: boolean; remove_extensions?: boolean }): Sanitizer;
		
		/**
		 * !!! XSS sanitization was removed from the library (see: https://github.com/chriso/validator.js#xss-sanitization)
		 */
	}
	
	interface MappedError {
		param: string;
		msg: string;
		value: string;
	}
	
	interface MinMaxOptions {
		min?: number;
		max?: number;
	}
}
