// Type definitions for superstruct 0.5
// Project: https://github.com/ianstormtaylor/superstruct#readme
// Definitions by: Edward Snare <https://github.com/edwardsnare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

export as namespace superstruct;

export interface Config {
	types?: {[type: string]: CustomType};
}

export type CustomType = (value: any) => boolean|string;

export function isStruct(value: any): boolean;

export class Kind {
	constructor(name: string, type: string, validate: (value?: any, data?: any) => any[]);
	name: string;
	type: string;
	validate: (value?: any, data?: any) => any[];
}

export const struct: struct;

export interface struct {
	(schema: Types, defaults?: object, options?: {}): Struct;
	/** `any` structs are the equivalent of using the `struct()` function directly, providing the shorthands for commonly used notations. */
	any(data: any): Kind;
	/** `dict` structs validate an object's keys and values. But, unlike `object` structs, they do not enforce a specific set of keys. */
	dict(data: [Type, Type]): Kind;
	/** `enum` structs validate that a value is one of a specific set of literals. */
	enum(literals: any[]): Kind;
	/**
	 * `function` structs will validate using the validation function provided.
	 * They're helpful as an escape hatch in cases when you really need to write a one-off validation, and don't want to add it to your set of known data types.
	 */
	function(type: (value: any, data?: any) => boolean|string|object): Kind;
	/** `instance` structs validate that an object is an instance of a particular class, using the built-in instanceof operator. */
	instance(object: any): Kind;
	/**
	 * `interface` structs validate that a value has a set of properties on it, but it does not assert anything about unspecified properties.
	 * This allows you to assert that a particular set of functionality exists without a strict equality check for properties.
	 */
	interface(properties: Types): Kind;
	/** `intersection` structs validate that a value matches all of many structs. Their arguments are any other validate struct schema. */
	intersection(structs: Type[]): Kind;
	/** `lazy` structs accepts a function that will return a struct. They are useful to create recursive structs. */
	lazy(structs: () => Kind): Kind;
	/** `list` structs will validate that all of the elements in an array match a specific type. The elements's schema can be any valid value for a struct—string, array, object or function. */
	list(elements: Type[]): Kind;
	/** `literal` structs enforces that a value matches an exact, pre-defined value, using the `===` operator. */
	literal(value: any): Kind;
	/**
	 * `object` structs will validate that each of the properties in an object match a specific type.
	 * The properties's schemas can be any valid value for a struct—string, array, object or function.
	 */
	object(properties: Types): Kind;
	/** `optional` structs validate that a value matches a specific kind of struct, or that it is `undefined`. */
	optional(type: Type): Kind;
	/**
	 * `partial` structs are similar to `object` structs, but they only require that the specified properties exist, and they don't care about other properties on the object.
	 * They differ from `interface` structs in that they only return the specified properties.
	 */
	partial(properties: Types): Kind;
	/** `scalar` structs are the lowest-level type of struct. They validate that a single scalar value matches a type, denoted by a type string. */
	scalar(value: string): Kind;
	/** `tuple` structs validate that a value is a specific array tuple of values. */
	tuple(values: Type[]): Kind;
	/** `union` structs validate that a value matches at least one of many structs. Their arguments are any other validate struct schema. */
	union(schemas: Type[]): Kind;
}

export interface Struct {
	(data: object): any;
	/** @throws {StructError} */
	assert(value: object): any;
	test(value: object): boolean;
	validate(value: object): [StructError]|[undefined, any];
}

export interface StructError extends TypeError {
	data: any;
	path: string[];
	value: any;
	reason: any;
	type: string;
	errors: StructError[];
}

export function superstruct(config?: Config): struct;

export type Type = any;

export interface Types {
	[type: string]: Type;
}
