// Type definitions for express-validator 2.9.0
// Project: https://github.com/ctavan/express-validator
// Definitions by: Nathan Ridley <https://github.com/axefrog/>, Jonathan Häberle <http://dreampulse.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

// Add RequestValidation Interface on to Express's Request Interface.
declare module Express {
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
declare module ExpressValidator {

	export interface ValidationError {
		msg: string;
		param: string;
	}

	interface ValidatorFunction { (item: string, message: string): Validator; }
	interface SanitizerFunction { (item: string): Sanitizer; }
	interface Dictionary<T> { [key: string]: T; }

	export interface RequestValidation {
		assert: ValidatorFunction;
		check: ValidatorFunction;
		checkBody: ValidatorFunction;
		checkFiles: ValidatorFunction;
		checkHeader: ValidatorFunction;
		checkParams: ValidatorFunction;
		checkQuery: ValidatorFunction;
		validate: ValidatorFunction;

		filter: SanitizerFunction;
		sanitize: SanitizerFunction;

		onValidationError(errback: (msg: string) => void): void;
		validationErrors(mapped?: boolean): Dictionary<any> | any[];
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
		isMACAddress(): Validator;
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
		equals(equals:any): Validator;
		contains(str:string): Validator;
		notContains(str:string): Validator;
		/**
		 * Usage: regex(/[a-z]/i) or regex('[a-z]','i')
		 */
		regex(pattern:string, modifiers:string): Validator;
		notRegex(pattern:string, modifiers:string): Validator;
		/**
		 * max is optional
		 */
		len(min:number, max?:number): Validator;
		/**
		 * Version can be 3, 4 or 5 or empty, see http://en.wikipedia.org/wiki/Universally_unique_identifier
		 */
		isUUID(version:number): Validator;
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
		isAfter(date:Date): Validator;
		/**
		 * Argument is optional and defaults to today. Comparison is non-inclusive
		 */
		isBefore(date:Date): Validator;
		isIn(options:string): Validator;
		isIn(options:string[]): Validator;
		notIn(options:string): Validator;
		notIn(options:string[]): Validator;
		max(val:string): Validator;
		min(val:string): Validator;
		/**
		 * Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
		 */
		isCreditCard(): Validator;
		/**
		 * Check an input only when the input exists
		 */
		optional(): Validator;
	}

	interface Sanitizer {
		/**
		 * Trim optional `chars`, default is to trim whitespace (\r\n\t )
		 */
		trim(...chars:string[]): Sanitizer;
		ltrim(...chars:string[]): Sanitizer;
		rtrim(...chars:string[]): Sanitizer;
		ifNull(replace:any): Sanitizer;
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
		xss(fromImages:boolean): Sanitizer;
	}

}
