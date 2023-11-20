declare module "camo" {
    /**
     * Connect function
     *
     * @param uri Connection URI
     */
    export function connect(uri: string): Promise<any>;

    type TypeOrArrayOfType<Type> = Type | Type[];

    /**
     * Supported type constructors for document properties
     */
    export type SchemaTypeConstructor =
        | TypeOrArrayOfType<StringConstructor>
        | TypeOrArrayOfType<NumberConstructor>
        | TypeOrArrayOfType<BooleanConstructor>
        | TypeOrArrayOfType<ArrayBufferConstructor>
        | TypeOrArrayOfType<DateConstructor>
        | TypeOrArrayOfType<ObjectConstructor>
        | TypeOrArrayOfType<ArrayConstructor>;

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
        default?: Type | undefined;
        /**
         * Min value (only with Number)
         */
        min?: number | undefined;
        /**
         * Max value (only with Number)
         */
        max?: number | undefined;
        /**
         * Posible options
         */
        choices?: Type[] | undefined;
        /**
         * RegEx to match value
         */
        match?: RegExp | undefined;
        /**
         * Validation function.
         *
         * @param value Value taken.
         * @returns true (validation ok) or false (validation wrong).
         */
        validate?(value: Type): boolean;
        /**
         * Unique value (like ids)
         */
        unique?: boolean | undefined;
        /**
         * Required field
         */
        required?: boolean | undefined;
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
        _id?: string | undefined;
    }

    /**
     * findOneAndUpdate method options.
     */
    export interface FindOneAndUpdateOptions {
        /**
         * Return a new document if one is not found with the given query.
         */
        upsert?: boolean | undefined;
    }

    /**
     * findOne method options.
     */
    export interface FindOneOptions {
        /**
         * Find all or no references.
         * Pass an array of field names to only populate the specified references.
         */
        populate?: boolean | string[] | undefined;
    }

    /**
     * find method options.
     */
    export interface FindOptions {
        /**
         * Find all or no references.
         * Pass an array of field names to only populate the specified references.
         */
        populate?: boolean | string[] | undefined;
        /**
         * Sort the documents by the given field(s).
         */
        sort?: TypeOrArrayOfType<string> | undefined;
        /**
         * Limits the number of documents returned.
         */
        limit?: number | undefined;
        /**
         * Skips the given number of documents and returns the rest.
         */
        skip?: number | undefined;
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
         * @returns The collection name.
         */
        protected static collectionName(): string;
        /**
         * Sets the schema (to be used on the constructor).
         */
        protected schema<Schema>(schema: Schema): void;
        /**
         * Creates a camo document instance.
         *
         * @param schema Base schema to create a document.
         * @returns A camo document instance.
         */
        public static create<StaticSchema extends DocumentSchema>(schema: StaticSchema): Document<StaticSchema>;
        /**
         * Saves the document instance to the database.
         */
        public save(): Promise<Schema>;
        /**
         * Return the first document found, even if multiple documents match the query.
         *
         * @param query Find query.
         * @param options findOne method options.
         */
        public static findOne<StaticSchema extends DocumentSchema>(
            query: any,
            options?: FindOneOptions,
        ): Promise<StaticSchema>;
        /**
         * Return all documents matching the query.
         *
         * @param query Find query.
         */
        public static find<StaticSchema extends DocumentSchema>(
            query: any,
            options?: FindOptions,
        ): Promise<StaticSchema[]>;
        /**
         * Find and update (or insert) a document in one atomic operation (atomic for MongoDB only).
         *
         * @param query Find query.
         * @param values Values to set.
         * @param options findOneAndUpdate method options.
         */
        public static findOneAndUpdate<StaticSchema extends DocumentSchema>(
            query: any,
            values: StaticSchema,
            options?: FindOneAndUpdateOptions,
        ): Promise<StaticSchema>;
        /**
         * Removes documents from the database.
         * Should only be used on an instantiated document with a valid id.
         *
         * @returns Number of deleted documents.
         */
        public delete(): Promise<number>;
        /**
         * Removes the first document found, even if multiple documents match the query.
         *
         * @param query Delete query.
         * @returns Number of deleted documents.
         */
        public static deleteOne(query: any): Promise<number>;
        /**
         * Removes all documents matching the query.
         *
         * @param query Delete query.
         * @returns Number of deleted documents.
         */
        public static deleteMany(query: any): Promise<number>;
        /**
         * Find the first document and delete it.
         *
         * @param query Delete query.
         * @param options Database Options for findOneAndDelete method.
         * @returns Number of deleted documents.
         */
        public static findOneAndDelete(query: any, options?: any): Promise<number>;
        /**
         * Number of matching documents without retrieving all the data.
         *
         * @param query Count query.
         */
        public static count(query: any): Promise<number>;
        /**
         * pre-validate hook.
         */
        protected preValidate(): Promise<any>;
        /**
         * post-validate hook.
         */
        protected postValidate(): Promise<any>;
        /**
         * pre-save hook.
         */
        protected preSave(): Promise<any>;
        /**
         * post-save hook.
         */
        protected postSave(): Promise<any>;
        /**
         * pre-delete hook.
         */
        protected preDelete(): Promise<any>;
        /**
         * post-delete hook.
         */
        protected postDelete(): Promise<any>;
        /**
         * Serialized document to just the data, which includes nested and referenced data.
         */
        public toJSON(): any;
    }
}
