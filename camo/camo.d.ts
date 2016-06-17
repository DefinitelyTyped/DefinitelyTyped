// Type definitions for camo v0.11.4
// Project: https://github.com/scottwrobinson/camo
// Definitions by: Lucas Matías Ciruzzi <https://github.com/lucasmciruzzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "camo" {

	type TypeOrArray<Type> = Type | Type[];

	/**
	 * Supported type constructors for document properties
	 */
	export type SchemaTypeConstructor =
		TypeOrArray<StringConstructor> |
		TypeOrArray<NumberConstructor> |
		TypeOrArray<BooleanConstructor> |
		TypeOrArray<DateConstructor> |
		TypeOrArray<ObjectConstructor> |
		TypeOrArray<ArrayConstructor>;

	/**
	 * Supported types for document properties
	 */
	export type SchemaType = TypeOrArray<string | number | boolean | Date | Object>;

	/**
	 * Document property with options
	 */
	export interface SchemaTypeOptions<Type> {
		/**
		 * Type of data
		 */
		type: SchemaTypeConstructor;
		/**
		 * Default value
		 */
		default?: Type;
		/**
		 * Min value (only with Number)
		 */
		min?: number;
		/**
		 * Max value (only with Number)
		 */
		max?: number;
		/**
		 * Posible options
		 */
		choices?: Type[];
		/**
		 * RegEx to match value
		 */
		match?: RegExp;
		/**
		 * Validation function
		 *
		 * @param	value	Value taken
		 * @returns			true (validation ok) or false (validation wrong)
		 */
		validate?(value: Type): boolean;
		/**
		 * Unique value (like ids)
		 */
		unique?: boolean;
		/**
		 * Required field
		 */
		required?: boolean;
	}

	/**
	 * Document property type or options
	 */
	export type SchemaTypeExtended = SchemaTypeConstructor | SchemaTypeOptions<SchemaType>;

	/**
	 * Schema passed to Document.create()
	 */
	interface DocumentSchema {
		/**
		 * Index signature
		 */
		[property: string]: SchemaType;
		/**
		 * Document id
		 */
		_id?: string;
	}

	/**
	 * Camo document instance
	 */
	class DocumentInstance<Schema extends DocumentSchema> {
		public save(): Promise<Schema>;
		public loadOne(): Promise<Schema>;
		public loadMany(): Promise<Schema>;
		public delete(): Promise<Schema>;
		public deleteOne(): Promise<Schema>;
		public deleteMany(): Promise<Schema>;
		public loadOneAndDelete(): Promise<Schema>;
		public count(): Promise<Schema>;
		public preValidate(): Promise<Schema>;
		public postValidate(): Promise<Schema>;
		public preSave(): Promise<Schema>;
		public postSave(): Promise<Schema>;
		public preDelete(): Promise<Schema>;
		public postDelete(): Promise<Schema>;
	}

	/**
	 * Camo document
	 */
	export class Document {
		/**
		 * Index signature
		 */
		[property: string]: SchemaTypeExtended | string | DocumentInstance<any>;
		/**
		 * Static method to define the collection name
		 *
		 * @returns		The collection name
		 */
		static collectionName(): string;
		/**
		 * Creates a camo document instance
		 *
		 * @returns		A camo document instance
		 */
		static create<Schema extends DocumentSchema>(schema: Schema): DocumentInstance<Schema>;
	}

	/**
	 * Connect function
	 *
	 * @param	uri		Connection URI
	 */
	export function connect (uri: string): Promise<any>;

}
