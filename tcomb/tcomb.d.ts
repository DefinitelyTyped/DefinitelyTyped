// Type definitions for tcomb v0.4
// Project: http://gcanti.github.io/tcomb/guide/index.html
// Definitions by: Jed Mao <https://github.com/jedmao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module tcomb {

	export var options: {
		onFail: (message: string) => void;
	};

	/**
	 * Like util.format in Node.
	 */
	export function format(format: string, ...values: any[]): string;
	export function getKind(type: T): string;
	/**
	 * Returns a function's name or displayName if specified; otherwise,
	 * fallbacks on '<function<arity>>'.
	 */
	export function getFunctionName(fn: Function): string;
	export function getTypeName(type: T): string;
	/**
	 * Safe version of mixin, properties can be overwritten.
	 */
	export function mixin(target: {}, source: {}, overwrite?: boolean): any;
	export var slice: typeof Array.prototype.slice;
	export function shallowCopy(x: T): T;
	export function update(instance: any, spec: {}): T;
	/**
	 * If an assert fails the debugger kicks in so you can inspect the stack
	 * and quickly find out what's wrong.
	 * @param message - Useful for debugging. Formatted with values like util.format in Node.
	 * @param values - Sequentially inserted into the message.
	 */
	export function assert(condition: boolean, message?: string, ...values: any[]): void;
	export function fail(message?: string): void;

	interface T {
		meta: {
			/**
			 * The type kind, equal to "irreducible" for irreducible types.
			 */
			kind: string;
			/**
			 * The type name.
			 */
			name: string;
		};
		displayName: string;
		is(value: any): boolean;
		update(instance: any, spec: {}): T;
	}

	interface TypePredicate {
		(x: any): Bool_Instance;
	}

	interface Any_Instance {
	}

	interface Any_Static extends T {
		new (value: any): Any_Instance;
		(value: any): Any_Instance;
	}

	export var Any: Any_Static;

	interface Nil_Instance {
	}

	interface Nil_Static extends T {
		new (value: any): Nil_Instance;
		(value: any): Nil_Instance;
	}

	export var Nil: Str_Static;

	interface Str_Instance extends String {
	}

	interface Str_Static extends T {
		new (value: string): Str_Instance;
		(value: string): Str_Instance;
		meta: {
			/**
			 * The type kind, equal to "irreducible" for irreducible types.
			 */
			kind: string;
			/**
			 * The type name.
			 */
			name: string;
			/**
			 * The type predicate.
			 */
			is: TypePredicate;
		};
	}

	export var Str: Str_Static;

	interface Num_Instance extends Number {
	}

	interface Num_Static extends T {
		new (value: number): Num_Instance;
		(value: number): Num_Instance;
	}

	export var Num: Num_Static;

	interface Bool_Instance extends Boolean {
	}

	interface Bool_Static extends T {
		new (value: boolean): Bool_Instance;
		(value: boolean): Bool_Instance;
	}

	export var Bool: Bool_Static;

	interface Arr_Instance extends Array<any> {
	}

	interface Arr_Static extends T {
		new (value: any[]): Arr_Instance;
		(value: any[]): Arr_Instance;
	}

	export var Arr: Arr_Static;

	interface Obj_Instance extends Object {
	}

	interface Obj_Static extends T {
		new (value: Object): Obj_Instance;
		(value: Object): Obj_Instance;
	}

	export var Obj: Obj_Static;

	interface Func_Instance extends Function {
	}

	interface Func_Static extends T {
		new (value: Function): Func_Instance;
		(value: Function): Func_Instance;
	}

	export var Func: Func_Static;

	interface Err_Instance extends Error {
	}

	interface Err_Static extends T {
		new (value: Error): Err_Instance;
		(value: Error): Err_Instance;
	}

	export var Err: Err_Static;

	interface Re_Instance extends RegExp {
	}

	interface Re_Static extends T {
		new (value: RegExp): Re_Instance;
		(value: RegExp): Re_Instance;
	}

	export var Re: Re_Static;

	interface Dat_Instance extends Date {
	}

	interface Dat_Static extends T {
		new (value: Date): Dat_Instance;
		(value: Date): Dat_Instance;
	}

	export var Dat: Dat_Static;

	interface Type_Instance {
	}

	interface Type_Static extends T {
		new (value: any): Type_Instance;
		(value: any): Type_Instance;
	}

	export var Type: Type_Static;

	/**
	 * @param name - The type name.
	 * @param is - A predicate.
	 */
	export function irreducible(name: string, is: TypePredicate): T;
	/**
	 * @param props - A hash whose keys are the field names and the values are the fields types.
	 * @param name - Useful for debugging purposes.
	 */
	export function struct(props: Object, name?: string): typeof Struct;

	export interface Struct_Static extends T {
		new (value: any, mutable?: boolean): Struct_Instance;
		(value: any, mutable?: boolean): Struct_Instance;
		meta: {
			kind: string;
			name: string;
			props: any[];
		};
		/**
		 * @param mixins - Contains the new props.
		 * @param name - Useful for debugging purposes.
		 */
		extend(mixins: Object, name?: string): Struct_Static;
		/**
		 * @param mixins - Contains the new props.
		 * @param name - Useful for debugging purposes.
		 */
		extend(mixins: Struct_Static, name?: string): Struct_Static;
		/**
		 * @param mixins - Contains the new props.
		 * @param name - Useful for debugging purposes.
		 */
		extend(mixins: Object[], name?: string): Struct_Static;
		/**
		 * @param mixins - Contains the new props.
		 * @param name - Useful for debugging purposes.
		 */
		extend(mixins: Struct_Static[], name?: string): Struct_Static;
	}

	interface Struct_Instance {
	}

	export var Struct: Struct_Static;

	/**
	 * @param map - A hash whose keys are the enums (values are free).
	 * @param name - Useful for debugging purposes.
	 */
	export function enums(map: Object, name?: string): T;
	export module enums {
		/**
		 * @param keys - Array of enums.
		 * @param name - Useful for debugging purposes.
		 */
		export function of(keys: string[], name?: string): T;
		/**
		 * @param keys - String of enums separated by spaces.
		 * @param name - Useful for debugging purposes.
		 */
		export function of(keys: string, name?: string): T;
	}

	/**
	 * @param name - Useful for debugging purposes.
	 */
	export function union(types: T[], name?: string): Union_Static;

	interface Union_Static extends T {
		new (value: any, mutable?: boolean): Union_Instance;
		(value: any, mutable?: boolean): Union_Instance;
		meta: {
			kind: string;
			name: string;
			types: T[];
		};
		dispatch(x: any): T;
	}

	interface Union_Instance {
	}

	export var Union: Union_Static;

	/**
	 * @param type - The wrapped type.
	 * @param name - Useful for debugging purposes.
	 */
	export function maybe(type: T, name?: string): Maybe_Static;

	export interface Maybe_Static extends T {
		new (value: any, mutable?: boolean): Maybe_Instance;
		(value: any, mutable?: boolean): Maybe_Instance;
		meta: {
			kind: string;
			name: string;
			typee: T;
		};
	}

	interface Maybe_Instance {
	}

	export var Maybe: Maybe_Static;

	/**
	 * @param name - Useful for debugging purposes.
	 */
	export function tuple(types: T[], name?: string): Tuple_Static;

	interface Tuple_Static extends T {
		new (value: any, mutable?: boolean): Tuple_Instance;
		(value: any, mutable?: boolean): Tuple_Instance;
		meta: {
			kind: string;
			name: string;
			types: T[];
		};
	}

	interface Tuple_Instance {
	}

	export var Tuple: Tuple_Static;
	
	/**
	 * Combines old types into a new one.
	 * @param type - A type already defined.
	 * @param name - Useful for debugging purposes.
	 */
	export function subtype(type: T, predicate: TypePredicate, name?: string): typeof Subtype;

	interface Subtype_Static extends T {
		new (value: any, mutable?: boolean): Subtype_Instance;
		(value: any, mutable?: boolean): Subtype_Instance;
		meta: {
			kind: string;
			name: string;
			type: T;
			predicate: TypePredicate;
		};
	}

	interface Subtype_Instance {
	}

	export var Subtype: Subtype_Static;

	/**
	 * @param type - The type of list items.
	 * @param name - Useful for debugging purposes.
	 */
	export function list(type: T, name?: string): List_Static;

	interface List_Static extends T {
		new (value: any, mutable?: boolean): List_Instance;
		(value: any, mutable?: boolean): List_Instance;
		meta: {
			kind: string;
			name: string;
			'type': T;
		};
	}

	interface List_Instance {
	}

	export var List: List_Static;

	/**
	 * @param domain - The type of keys.
	 * @param codomain - The type of values.
	 * @param name - Useful for debugging purposes.
	 */
	export function dict(domain: T, codomain: T, name?: string): Dict_Static;

	interface Dict_Static extends T {
		new (value: any, mutable?: boolean): Dict_Instance;
		(value: any, mutable?: boolean): Dict_Instance;
		meta: {
			kind: string;
			name: string;
			domain: T;
			codomain: T;
		};
	}

	interface Dict_Instance {
	}

	export var Dict: Dict_Static;

	/**
	 * @param type - The type of the function's argument.
	 * @param codomain - The type of the function's return value.
	 * @param name - Useful for debugging purposes.
	 */
	export function func(domain: T, codomain: T, name?: string): Func_Static;
	/**
	 * @param type - The list of types of the function's arguments.
	 * @param codomain - The type of the function's return value.
	 * @param name - Useful for debugging purposes.
	 */
	export function func(domain: T[], codomain: T, name?: string): Func_Static;

	interface Func_Static extends T {
		new (value: any, mutable?: boolean): Func_Instance;
		(value: any, mutable?: boolean): Func_Instance;
		meta: {
			kind: string;
			name: string;
			domain: any;
			codomain: T;
		};
		of(fn: Function): Function;
	}

	interface Func_Instance {
	}

	export var Func: Func_Static;

}

declare module "tcomb" {
	export = tcomb;
}
