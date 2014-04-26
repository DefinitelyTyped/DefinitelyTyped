// Type definitions for joi v4.0.0
// Project: https://github.com/spumko/joi
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'joi' {

	export interface ValidationOptions {
		// when true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
		abortEarly?: boolean;
		// when true, attempts to cast values to the required types (e.g. a string to a number). Defaults to true.
		convert?: boolean;
		// when true, allows object to contain unknown keys which are ignored. Defaults to false.
		allowUnknown?: boolean;
		// when true, ignores unknown keys with a function value. Defaults to false.
		skipFunctions?: boolean;
		// when true, unknown keys are deleted (only when value is an object). Defaults to false.
		stripUnknown?: boolean;
		// overrides individual error messages. Defaults to no override ({}).
		language?: Object
	}

	export interface RenameOptions {
		// if true, does not delete the old key name, keeping both the new and old keys in place. Defaults to false.
		alias?: boolean;
		// if true, allows renaming multiple keys to the same destination where the last rename wins. Defaults to false.
		multiple?: boolean;
		// if true, allows renaming a key over an existing key. Defaults to false.
		override?: boolean;
	}

	export interface ValidationError {
		message: string;
		details: ValidationErrorItem[];
		simple (): string;
		annotated (): string;
	}

	export interface ValidationErrorItem {
		message: string;
		type: string;
		path: string;
		options?: ValidationOptions;
	}

	export interface SchemaMap {
		[key: string]: Schema;
	}

	export interface Schema extends AnySchema<Schema> {
	}

	export interface AnySchema<T extends AnySchema<Schema>> {

		validate<U>(value: U, options?: ValidationOptions, callback?: (err: ValidationError, value: U) => void): void;

		/**
		 * Whitelists a value
		 */
		allow(value: any, ...values : any[]): T;
		allow(values: any[]): T;

		/**
		 * Adds the provided values into the allowed whitelist and marks them as the only valid values allowed.
		 */
		valid(value: any, ...values : any[]): T;
		valid(values: any[]): T;

		/**
		 * Blacklists a value
		 */
		invalid(value: any, ...values : any[]): T;
		invalid(values: any[]): T;

		/**
		 * Marks a key as required which will not allow undefined as value. All keys are optional by default.
		 */
		required(): T;

		/**
		 * Marks a key as optional which will allow undefined as values. Used to annotate the schema for readability as all keys are optional by default.
		 */
		optional(): T;

		/**
		 * Annotates the key
		 */
		description(desc: string): T;

		/**
		 * Annotates the key
		 */
		notes(notes: string): T;
		notes(notes: string[]): T;

		/**
		 * Annotates the key
		 */
		tags(notes: string): T;
		tags(notes: string[]): T;

		/**
		 * Overrides the global validate() options for the current key and any sub-key
		 */
		options(options: ValidationOptions): T;

		/**
		 * Sets the options.convert options to false which prevent type casting for the current key and any child keys.
		 */
		strict(): T;

		/**
		 * Sets a default value if the original value is undefined
		 */
		default(value: any): T;
	}

	export interface BooleanSchema extends AnySchema<BooleanSchema> {

	}

	export interface NumberSchema extends AnySchema<NumberSchema> {
		/**
		 * Specifies the minimum value.
		 */
		min(limit: number): NumberSchema;

		/**
		 * Specifies the maximum value.
		 */
		max(limit: number): NumberSchema;

		/**
		 * Requires the number to be an integer (no floating point).
		 */
		integer(): NumberSchema;
	}

	export interface StringSchema extends AnySchema<StringSchema> {
		/**
		 * Allows the value to match any whitelist of blacklist item in a case insensitive comparison.
		 */
		insensitive(): StringSchema;

		/**
		 * Specifies the minimum number string characters.
		 */
		min(limit: number): StringSchema;

		/**
		 * Specifies the maximum number of string characters.
		 */
		max(limit: number): StringSchema;

		/**
		 * Specifies the exact string length required
		 */
		length(limit: number): StringSchema;

		/**
		 * Defines a regular expression rule.
		 */
		regex(pattern: RegExp): StringSchema;

		/**
		 * Requires the string value to only contain a-z, A-Z, and 0-9.
		 */
		alphanum(): StringSchema;

		/**
		 * Requires the string value to only contain a-z, A-Z, 0-9, and underscore _.
		 */
		token(): StringSchema;

		/**
		 * Requires the string value to be a valid email address.
		 */
		email(): StringSchema;

		/**
		 * Requires the string value to be a valid GUID.
		 */
		guid(): StringSchema;

		/**
		 * Requires the string value to be in valid ISO 8601 date format.
		 */
		isoDate(): StringSchema;

	}

	export interface ArraySchema extends AnySchema<ArraySchema> {
		/**
		 * List the types allowed for the array value
		 */
		includes(type: Schema, ...types: Schema[]): ArraySchema;
		includes(types: Schema[]): ArraySchema;

		/**
		 * List the types forbidden for the array values.
		 */
		excludes(type: Schema, ...types: Schema[]): ArraySchema;
		excludes(types: Schema[]): ArraySchema;

		/**
		 * Specifies the minimum number of items in the array.
		 */
		min(limit: number): ArraySchema;

		/**
		 * Specifies the maximum number of items in the array.
		 */
		max(limit: number): ArraySchema;

		/**
		 * Specifies the exact number of items in the array.
		 */
		length(limit: number): ArraySchema;

	}

	export interface ObjectSchema extends AnySchema<ObjectSchema> {
		/**
		 * Sets the allowed object keys.
		 */
		keys(schema?: SchemaMap): ObjectSchema;

		/**
		 * Specifies the minimum number of keys in the object.
		 */
		min(limit: number): ObjectSchema;

		/**
		 * Specifies the maximum number of keys in the object.
		 */
		max(limit: number): ObjectSchema;

		/**
		 * Specifies the exact number of keys in the object.
		 */
		length(limit: number): ObjectSchema;

		/**
		 * Requires the presence of other keys whenever the specified key is present.
		 */
		with(key: string, peers: string): ObjectSchema;
		with(key: string, peers: string[]): ObjectSchema;

		/**
		 * Forbids the presence of other keys whenever the specified is present.
		 */
		without(key: string, peers: string): ObjectSchema;
		without(key: string, peers: string[]): ObjectSchema;

		/**
		 * Defines an exclusive relationship between a set of keys. one of them is required but not at the same time where:
		 */
		xor(peer1: string, peer2: string, ...peers: string[]): ObjectSchema;
		xor(peers: string[]): ObjectSchema;

		/**
		 * Defines a relationship between keys where one of the peers is required (and more than one is allowed).
		 */
		or(peer1: string, peer2: string, ...peers: string[]): ObjectSchema;
		or(peers: string[]): ObjectSchema;

		/**
		 * Renames a key to another name (deletes the renamed key).
		 */
		rename(from: string, to: string, options?: RenameOptions): ObjectSchema;
	}

	export interface BinarySchema extends AnySchema<BinarySchema> {
		/**
		 * Specifies the minimum length of the buffer.
		 */
		min(limit: number): BinarySchema;

		/**
		 * Specifies the maximum length of the buffer.
		 */
		max(limit: number): BinarySchema;

		/**
		 * Specifies the exact length of the buffer:
		 */
		length(limit: number): BinarySchema;
	}

	export interface DateSchema extends AnySchema<DateSchema> {

		/**
		 * Specifies the oldest date allowed.
		 */
		min(date: Date): DateSchema;
		min(date: number): DateSchema;
		min(date: string): DateSchema;

		/**
		 * Specifies the latest date allowed.
		 */
		max(date: Date): DateSchema;
		max(date: number): DateSchema;
		max(date: string): DateSchema;
	}

	export interface FunctionSchema extends AnySchema<FunctionSchema> {

	}

	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

	/**
	 * Generates a schema object that matches any data type.
	 */
	export function any(): Schema;

	/**
	 * Generates a schema object that matches an array data type.
	 */
	export function array(): ArraySchema;

	/**
	 * Generates a schema object that matches a boolean data type (as well as the strings 'true', 'false', 'yes', and 'no'). Can also be called via bool().
	 */
	export function bool(): BooleanSchema;

	export function boolean(): BooleanSchema;

	/**
	 * Generates a schema object that matches a Buffer data type (as well as the strings which will be converted to Buffers).
	 */
	export function binary(): BinarySchema;

	/**
	 * Generates a schema object that matches a date type (as well as a JavaScript date string or number of milliseconds).
	 */
	export function date(): DateSchema;

	/**
	 * Generates a schema object that matches a function type.
	 */
	export function func(): FunctionSchema;

	/**
	 * Generates a schema object that matches a number data type (as well as strings that can be converted to numbers).
	 */
	export function number(): NumberSchema;

	/**
	 * Generates a schema object that matches an object data type (as well as JSON strings that parsed into objects).
	 */
	export function object(schema?: SchemaMap): ObjectSchema;

	/**
	 * Generates a schema object that matches a string data type. Note that empty strings are not allowed by default and must be enabled with allow('').
	 */
	export function string(): StringSchema;

	/**
	 * Generates a type that will match one of the provided alternative schemas
	 */
	export function alternatives(types: Schema[]): Schema;
	export function alternatives(type1: Schema, type2: Schema, ...types: Schema[]): Schema;

	/**
	 * Validates a value using the given schema and options.
	 */
	export function validate<T>(value: T, schema: Schema, options?: ValidationOptions, callback?: (err: ValidationError, value: T) => void): void;
	export function validate<T>(value: T, schema: Object, options?: ValidationOptions, callback?: (err: ValidationError, value: T) => void): void;

	/**
	 * Converts literal schema definition to joi schema object (or returns the same back if already a joi schema object).
	 */
	export function compile(schema: Object): Schema;

}
