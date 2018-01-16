// Type definitions for camo v0.12.2
// Project: https://github.com/scottwrobinson/camo
// Definitions by: Lucas Matías Ciruzzi <https://github.com/lucasmciruzzi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "camo" {

	/**
	 * Connect function
	 *
	 * @export
	 * @param {string} uri Connection URI
	 * @returns {Promise<any>}
	 */
	export function connect (uri: string): Promise<any>;

	type TypeOrArrayOfType<Type> = Type | Type[];

	/**
	 * Supported type constructors for document properties
	 */
	export type SchemaTypeConstructor =
		TypeOrArrayOfType<StringConstructor> |
		TypeOrArrayOfType<NumberConstructor> |
		TypeOrArrayOfType<BooleanConstructor> |
		TypeOrArrayOfType<ArrayBufferConstructor> |
		TypeOrArrayOfType<DateConstructor> |
		TypeOrArrayOfType<ObjectConstructor> |
		TypeOrArrayOfType<ArrayConstructor>;

	/**
	 * Supported types for document properties
	 */
	export type SchemaType = TypeOrArrayOfType<string | number | boolean | Date | Object>;

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
		 * Validation function.
		 *
		 * @param {Type} value Value taken.
		 * @returns {boolean} true (validation ok) or false (validation wrong).
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
	export interface DocumentSchema {
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
	 * findOneAndUpdate method options.
	 *
	 * @interface findOneAndUpdateOptions
	 */
	export interface FindOneAndUpdateOptions {
		/**
		 * Return a new document if one is not found with the given query.
		 *
		 * @type {boolean}
		 */
		upsert?: boolean;
	}

	/**
	 * findOne method options.
	 *
	 * @interface FindOneOptions
	 */
	export interface FindOneOptions {
		/**
		 * Find all or no references.
		 * Pass an array of field names to only populate the specified references.
		 *
		 * @type {(boolean | string[])}
		 */
		populate?: boolean | string[];
	}

	/**
	 * find method options.
	 *
	 * @interface FindOptions
	 */
	export interface FindOptions {
		/**
		 * Find all or no references.
		 * Pass an array of field names to only populate the specified references.
		 *
		 * @type {(boolean | string[])}
		 */
		populate?: boolean | string[];
		/**
		 * Sort the documents by the given field(s).
		 *
		 * @type {TypeOrArrayOfType<string>}
		 */
		sort?: TypeOrArrayOfType<string>;
		/**
		 * Limits the number of documents returned.
		 *
		 * @type {number}
		 */
		limit?: number;
		/**
		 * Skips the given number of documents and returns the rest.
		 *
		 * @type {number}
		 */
		skip?: number;
	}

	/**
	 * Camo document
	 */
	export class Document<Schema extends DocumentSchema> {
		/**
		 * Index signature
		 */
		[property: string]: SchemaTypeExtended | string | Document<any> | Function;
		/**
		 * Static method to define the collection name.
		 *
		 * @protected
		 * @static
		 * @returns {string} The collection name.
		 */
		protected static collectionName(): string;
		/**
		 * Sets the schema (to be used on the constructor).
		 *
		 * @protected
		 * @template Schema
		 * @param {Schema} schema
		 */
		protected schema<Schema>(schema: Schema): void;
		/**
		 * Creates a camo document instance.
		 *
		 * @static
		 * @template StaticSchema
		 * @param {StaticSchema} schema Base schema to create a document.
		 * @returns {DocumentInstance<StaticSchema>} A camo document instance.
		 */
		public static create<StaticSchema extends DocumentSchema>(schema: StaticSchema): Document<StaticSchema>;
		/**
		 * Saves the document instance to the database.
		 *
		 * @returns {Promise<Schema>}
		 */
		public save(): Promise<Schema>;
		/**
		 * Return the first document found, even if multiple documents match the query.
		 *
		 * @static
		 * @template StaticSchema
		 * @param {*} query Find query.
		 * @param {FindOneOptions} options findOne method options.
		 * @returns {Promise<StaticSchema>}
		 */
		public static findOne<StaticSchema extends DocumentSchema>(query: any, options?: FindOneOptions): Promise<StaticSchema>;
		/**
		 * Return all documents matching the query.
		 *
		 * @static
		 * @template StaticSchema
		 * @param {*} query Find query.
		 * @param {FindOptions} options
		 * @returns {Promise<StaticSchema>}
		 */
		public static find<StaticSchema extends DocumentSchema>(query: any, options?: FindOptions): Promise<StaticSchema[]>;
		/**
		 * Find and update (or insert) a document in one atomic operation (atomic for MongoDB only).
		 *
		 * @static
		 * @template StaticSchema
		 * @param {*} query Find query.
		 * @param {Schema} values Values to set.
		 * @param {FindOneAndUpdateOptions} options findOneAndUpdate method options.
		 * @returns {Promise<StaticSchema>}
		 */
		public static findOneAndUpdate<StaticSchema extends DocumentSchema>(query: any, values: StaticSchema, options?: FindOneAndUpdateOptions): Promise<StaticSchema>;
		/**
		 * Removes documents from the database.
		 * Should only be used on an instantiated document with a valid id.
		 *
		 * @returns {Promise<number>} Number of deleted documents.
		 */
		public delete(): Promise<number>;
		/**
		 * Removes the first document found, even if multiple documents match the query.
		 *
		 * @static
		 * @param {*} query Delete query.
		 * @returns {Promise<number>} Number of deleted documents.
		 */
		public static deleteOne(query: any): Promise<number>;
		/**
		 * Removes all documents matching the query.
		 *
		 * @static
		 * @param {*} query Delete query.
		 * @returns {Promise<number>} Number of deleted documents.
		 */
		public static deleteMany(query: any): Promise<number>;
		/**
		 * Find the first document and delete it.
		 *
		 * @static
		 * @param {*} query Delete query.
		 * @param {*} options Database Options for findOneAndDelete method.
		 * @returns {Promise<number>} Number of deleted documents.
		 */
		public static findOneAndDelete(query: any, options?: any): Promise<number>;
		/**
		 * Number of matching documents without retrieving all the data.
		 *
		 * @static
		 * @param {*} query Count query.
		 * @returns {Promise<number>}
		 */
		public static count(query: any): Promise<number>;
		/**
		 * pre-validate hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected preValidate(): Promise<any>;
		/**
		 * post-validate hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected postValidate(): Promise<any>;
		/**
		 * pre-save hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected preSave(): Promise<any>;
		/**
		 * post-save hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected postSave(): Promise<any>;
		/**
		 * pre-delete hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected preDelete(): Promise<any>;
		/**
		 * post-delete hook.
		 *
		 * @protected
		 * @returns {Promise<any>}
		 */
		protected postDelete(): Promise<any>;
		/**
		 * Serialized document to just the data, which includes nested and referenced data.
		 *
		 * @returns {*}
		 */
		public toJSON(): any;
	}

}
