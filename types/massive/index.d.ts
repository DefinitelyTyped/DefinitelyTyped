// Type definitions for massive 4.6
// Project: https://github.com/dmfay/massive-js.git
// Definitions by: Pascal Birchler <https://github.com/swissspidy>
//                 Clarence Ho <https://github.com/clarenceh>
//                 Felix Faust <https://github.com/AmazingTurtle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export = massive;

declare function massive(connection: massive.ConnectionInfo | string,
                         loaderConfig?: massive.Loader,
                         driverConfig?: object): Promise<massive.Database>;

declare namespace massive {

    type UUID = number | string;

    interface Loader {

        blacklist?: string | string[];

        whitelist?: string | string[];

        functionBlacklist?: string | string[];

        functionWhitelist?: string | string[];

        allowedSchemas?: string | string[];

        exceptions?: string | string[];

        scripts?: string;

    }

    interface DropOptions {

        cascade?: boolean;

    }

    interface ConnectionInfo {

        user?: string;

        database?: string;

        password?: string | null;

        port?: number;

        host?: string;

        ssl?: boolean;

        application_name?: string;

        fallback_application_name?: boolean;

    }

    /**
     * Bundled insert, select, update and delete query options.. Shame on me
     */
    interface GenericQueryOptions {

        columns?: string[];

        limit?: number;

        offset?: number;

        only?: boolean;

        order?: string[];

        orderBody?: boolean;

        build?: boolean;

        document?: boolean;

        single?: boolean;

        stream?: boolean;

    }

    interface SearchDefinition {

        /**
         * List of the fields to search.
         */
        fields: string[];

        /**
         * Search term.
         */
        term: string;

    }

    interface QueryOptions {

        /**
         *    This is a query against a document table.
         */
        document?: boolean;

        /**
         * True to return a single result object instead of an array of results.
         */
        single?: boolean;

        /**
         * True to return a stream instead of a resultset.
         */
        stream?: boolean;

    }

    interface SearchCriteria {

        fields: string[];

        term: string;

    }

    class Table extends Queryable {

        /**
         * Delete a record or records.
         *
         * @param {object} criteria
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<void>}
         */
        public destroy(criteria: object, options?: GenericQueryOptions): Promise<void>;

        /**
         * Attempts to assemble primary key criteria for a record object representing a row in this table. The criteria must include the full primary key, and must not invoke any operations.
         *
         * @param {object} record
         * @returns {object}
         */
        public getPkCriteria(record: object): object;

        /**
         * Insert a record or records into the table.
         *
         * @param {object | any[]} data
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public insert(data: object | any[], options?: GenericQueryOptions): Promise<any>;

        /**
         * Update a document, adding new information and changing existing information. This function can be used with any JSON field, not just document tables; however, only document tables can use criteria objects which directly reference document fields. If calling modify with a criteria object for a non-document table, the criteria will be tested against the entire row (as opposed to the document body as it is for document tables). To test elements of the JSON field in a non-document table with a criteria object, use a JSON path string.
         *
         * @param {object | massive.UUID} criteria Primary key of the document, or a criteria object.
         * @param {object} changes Changes to apply.
         * @param {string} field Document field name, default: body.
         * @returns {Promise<any>}
         */
        public modify(criteria: object | UUID, changes: object, field?: string): Promise<any>;

        /**
         * Performs an upsert. If the record does not include a value for the primary key column, it will be inserted and the persisted record (including primary key) returned; if it does, the row will be updated and the modified record returned.
         *
         * @param {object} record
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public save(record: object, options?: GenericQueryOptions): Promise<any>;

        /**
         * Save a document to the database. This function replaces the entire document body.
         *
         * @param {object} record
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public saveDoc(record: object): Promise<any>;

        /**
         * Update a record. May be invoked with a complete record (including primary key), or with a criteria object and a map of fields to new values. Multi-row updates are only possible through the latter usage.
         *
         * @param {object} criteria
         * @param {object} fields
         * @param {massive.GenericQueryOptions} options
         */
        public update(criteria: object, fields: object, options?: GenericQueryOptions);

    }

    interface EntitySpecification {

        /**
         * A Database.
         */
        db: object;

        /**
         * The entity's name.
         */
        name: string;

        /**
         * Path to the entity, if a file.
         */
        path: string;

        /**
         * Entity's owning schema, if a database object.
         */
        schema: string;

    }

    class Entity {

        constructor(spec: EntitySpecification);

    }

    class Queryable extends Entity {

        constructor(spec: EntitySpecification);

        /**
         * Count rows matching criteria. There are two ways to use this method: 1. find() style: db.mytable.count({field: value}); 2. where() style: db.mytable.count("field=$1", [value]);
         *
         * @param {object | string} conditions A criteria object or SQL predicate.
         * @param params Prepared statement parameters for use with raw SQL predicates.
         * @returns {Promise<number>}
         */
        public count(conditions: object | string, params?: any): Promise<number>;

        /**
         * Count documents matching criteria. Unlike count, this function only supports criteria objects.
         *
         * @param {object} criteria
         * @returns {Promise<number>}
         */
        public countDoc(criteria: object): Promise<number>;

        /**
         * Find rows matching criteria.
         *
         * @param {object | massive.UUID} criteria A criteria object or primary key value.
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public find(criteria: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Find a document by searching in the body.
         *
         * @param {object | massive.UUID} criteria A criteria object or primary key value.
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public findDoc(criteria?: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Return a single record.
         *
         * @param {object | massive.UUID} criteria A criteria object or primary key value.
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public findOne(criteria?: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Determine whether criteria represent a search by primary key. If a number or uuid are passed, it is assumed to be a primary key value; if an object, it must have only one key, which must specify the primary key column.
         *
         * @param {Object | String | Number} criteria
         * @returns {boolean}
         */
        public isPkSearch(criteria?: Object | String | Number): boolean;

        /**
         * Perform a full-text search on queryable fields. If options.document is true, looks in the document body fields instead of the table columns.
         *
         * @param {massive.SearchDefinition} plan
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public search(plan: SearchDefinition, options?: GenericQueryOptions): Promise<any>;

        /**
         * Shortcut to perform a full text search on a document table.
         *
         * @param {massive.SearchDefinition} plan
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public searchDoc(plan: SearchDefinition, options?: GenericQueryOptions): Promise<any>;

        /**
         * Run a query with a raw SQL predicate, eg: db.mytable.where('id=$1', [123]).then(...);
         *
         * @param {string} conditions
         * @param params
         * @param {massive.GenericQueryOptions} options
         * @returns {Promise<any>}
         */
        public where(conditions: string, params?: any, options?: GenericQueryOptions): Promise<any>;

    }

    /**
     * Represents a SELECT query.
     */
    class Select {

        /**
         *
         * @param {massive.Queryable} source Database object to query.
         * @param {object | massive.UUID} criteria A criteria object, prebuilt predicate, or primitive pk value.
         * @param {massive.GenericQueryOptions} options
         */
        constructor(source: Queryable, criteria: object | UUID, options?: GenericQueryOptions);

        /**
         * Format this object into a SQL SELECT.
         *
         * @returns {string}
         */
        public format(): string;

    }

    /**
     * Represents a INSERT query.
     */
    class Insert {

        /**
         *
         * @param {massive.Queryable} source Database object to query.
         * @param {Object | any[]} record A map of field names to values to be inserted, or an array of same.
         * @param {massive.GenericQueryOptions} options
         */
        constructor(source: Queryable, record: Object | any[], options?: GenericQueryOptions);

        /**
         * Format this object into a SQL SELECT.
         *
         * @returns {string}
         */
        public format(): string;

    }

    /**
     * Represents a UPDATE query.
     */
    class Update {

        /**
         *
         * @param {massive.Queryable} source Database object to query.
         * @param {Object} changes A map of field names to new values.
         * @param {Object} criteria A criteria object.
         * @param {massive.GenericQueryOptions} options
         */
        constructor(source: Queryable, changes: Object, criteria: Object, options?: GenericQueryOptions);

        /**
         * Format this object into a SQL SELECT.
         *
         * @returns {string}
         */
        public format(): string;

    }

    /**
     * Represents a UPDATE query.
     */
    class Delete {

        /**
         *
         * @param {massive.Queryable} source Database object to query.
         * @param {Object} criteria A criteria object.
         * @param {massive.GenericQueryOptions} options
         */
        constructor(source: Queryable, criteria?: Object, options?: GenericQueryOptions);

        /**
         * Format this object into a SQL SELECT.
         *
         * @returns {string}
         */
        public format(): string;

    }

    class Database {
        /**
         *
         * @param {object | string} connection A connection object or connection string
         * @param {massive.Loader} loader
         * @param {object} driverConfig
         */
        constructor(connection: object | string, loader?: Loader, driverConfig?: object);

        /**
         * Attach an entity to the connected instance.
         *
         * @param ctor
         * @param sources
         * @returns {Promise<any[]>}
         */
        public attach(ctor: any, ...sources: any[]): Promise<any[]>;

        /**
         * Remove all attached entities from the instance, returning it to the pre- introspection state.
         *
         */
        public clean(): void;

        /**
         * Create a new document table and attach it to the Database for usage.
         *
         * @param {string} location
         * @returns {Promise<void>}
         */
        public createDocumentTable(location: string): Promise<void>;

        /**
         * Create a new schema in the database.
         *
         * @param {string} schemaName
         */
        public createSchema(schemaName: string): Promise<void>;

        /**
         * Forget an entity.
         *
         * @param {string} entityPath
         */
        public detach(entityPath: string): void;

        /**
         * Drop a schema and remove it and its owned objects from the Database.
         *
         * @param {string} schemaName
         * @param {massive.DropOptions} options
         * @returns {Promise<void>}
         */
        public dropSchema(schemaName: string, options?: DropOptions): Promise<void>;

        /**
         * Drop a table and remove it from the Database.
         *
         * @param {string} tablePath
         * @param {massive.DropOptions} options
         * @returns {Promise<void>}
         */
        public dropTable(tablePath: string, options?: DropOptions): Promise<void>;

        /**
         * List all the functions and scripts attached to the connected instance.
         *
         * @returns {Promise<any[]>}
         */
        public listFunctions(): Promise<any[]>;

        /**
         * List all the tables attached to the connected instance.
         *
         * @returns {Promise<any[]>}
         */
        public listTables(): Promise<any[]>;

        /**
         * List all the views attached to the connected instance.
         *
         * @returns {Promise<any[]>}
         */
        public listViews(): Promise<any[]>;

        /**
         * Execute a query.
         *
         * @param {string} query
         * @param params
         * @param {massive.QueryOptions} options
         * @returns {Promise<any>}
         */
        public query(query: Select | Insert | Update | Delete | string, params?: any, options?: QueryOptions): Promise<any>;

        /**
         * Synchronize the database API with the current state by scanning for tables, views, functions, and scripts. Objects and files which no longer exist are cleared and new objects and files added.
         */
        public reload(): void;

        /**
         * Save a document.
         *
         * @param {string} collection Document table name to save to. If it does not already exist, it will be created.
         * @param {object} doc A JSON document.
         * @returns {Promise<any>}
         */
        public saveDoc(collection: string, doc: object): Promise<any>;

        [tableName: string]: Table | any;

    }
}
