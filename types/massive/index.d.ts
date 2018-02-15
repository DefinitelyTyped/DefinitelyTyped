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

    /** Bundled insert, select, update and delete query options.. Shame on me */
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
        /** List of the fields to search. */
        fields: string[];

        /** Search term. */
        term: string;
    }

    interface QueryOptions {
        /** This is a query against a document table. */
        document?: boolean;
        /** True to return a single result object instead of an array of results. */
        single?: boolean;
        /** True to return a stream instead of a resultset. */
        stream?: boolean;
    }

    interface SearchCriteria {
        fields: string[];
        term: string;
    }

    class Table extends Queryable {
        /** Delete a record or records. */
        destroy(criteria: object, options?: GenericQueryOptions): Promise<void>;

        /** Attempts to assemble primary key criteria for a record object representing a row in this table. The criteria must include the full primary key, and must not invoke any operations. */
        getPkCriteria(record: object): object;

        /** Insert a record or records into the table. */
        insert(data: object | any[], options?: GenericQueryOptions): Promise<any>;

        /**
         * Update a document, adding new information and changing existing information.
         * This function can be used with any JSON field, not just document tables; however, only document tables can use criteria objects which directly reference document fields.
         * If calling modify with a criteria object for a non-document table, the criteria will be tested against the entire row (as opposed to the document body as it is for document tables).
         * To test elements of the JSON field in a non-document table with a criteria object, use a JSON path string.
         */
        modify(criteria: object | UUID, changes: object, field?: string): Promise<any>;

        /**
         * Performs an upsert.
         * If the record does not include a value for the primary key column, it will be inserted and the persisted record (including primary key) returned;
         * if it does, the row will be updated and the modified record returned.
         */
        save(record: object, options?: GenericQueryOptions): Promise<any>;

        /**
         * Save a document to the database. This function replaces the entire document body.
         */
        saveDoc(record: object): Promise<any>;

        /**
         * Update a record.
         * May be invoked with a complete record (including primary key), or with a criteria object and a map of fields to new values.
         * Multi-row updates are only possible through the latter usage.
         */
        update(criteria: object, fields: object, options?: GenericQueryOptions): void;
    }

    interface EntitySpecification {
        /** A Database. */
        db: object;
        /** The entity's name. */
        name: string;
        /** Path to the entity, if a file. */
        path: string;
        /** Entity's owning schema, if a database object. */
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
         * @param conditions A criteria object or SQL predicate.
         * @param params Prepared statement parameters for use with raw SQL predicates.
         */
        count(conditions: object | string, params?: any): Promise<number>;

        /**
         * Count documents matching criteria. Unlike count, this function only supports criteria objects.
         */
        countDoc(criteria: object): Promise<number>;

        /**
         * Find rows matching criteria.
         *
         * @param criteria A criteria object or primary key value.
         */
        find(criteria: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Find a document by searching in the body.
         *
         * @param criteria A criteria object or primary key value.
         */
        findDoc(criteria?: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Return a single record.
         *
         * @param criteria A criteria object or primary key value.
         */
        findOne(criteria?: object | UUID, options?: GenericQueryOptions): Promise<any>;

        /**
         * Determine whether criteria represent a search by primary key.
         * If a number or uuid are passed, it is assumed to be a primary key value; if an object, it must have only one key, which must specify the primary key column.
         */
        isPkSearch(criteria?: object | string | number): boolean;

        /**
         * Perform a full-text search on queryable fields. If options.document is true, looks in the document body fields instead of the table columns.
         */
        search(plan: SearchDefinition, options?: GenericQueryOptions): Promise<any>;

        /** Shortcut to perform a full text search on a document table. */
        searchDoc(plan: SearchDefinition, options?: GenericQueryOptions): Promise<any>;

        /** Run a query with a raw SQL predicate, eg: db.mytable.where('id=$1', [123]).then(...); */
        where(conditions: string, params?: any, options?: GenericQueryOptions): Promise<any>;
    }

    /** Represents a SELECT query. */
    class Select {
        /**
         * @param source Database object to query.
         * @param criteria A criteria object, prebuilt predicate, or primitive pk value.
         */
        constructor(source: Queryable, criteria: object | UUID, options?: GenericQueryOptions);

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a INSERT query. */
    class Insert {
        /**
         * @param source Database object to query.
         * @param record A map of field names to values to be inserted, or an array of same.
         */
        constructor(source: Queryable, record: object | any[], options?: GenericQueryOptions);

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a UPDATE query. */
    class Update {
        /**
         * @param source Database object to query.
         * @param changes A map of field names to new values.
         * @param criteria A criteria object.
         */
        constructor(source: Queryable, changes: object, criteria: object, options?: GenericQueryOptions);

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a UPDATE query. */
    class Delete {
        /**
         * @param source Database object to query.
         * @param criteria A criteria object.
         */
        constructor(source: Queryable, criteria?: object, options?: GenericQueryOptions);

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    class Database {
        /**
         * @param connection A connection object or connection string
         */
        constructor(connection: object | string, loader?: Loader, driverConfig?: object);

        /** Attach an entity to the connected instance. */
        attach(ctor: any, ...sources: any[]): Promise<any[]>;

        /** Remove all attached entities from the instance, returning it to the pre- introspection state. */
        clean(): void;

        /** Create a new document table and attach it to the Database for usage. */
        createDocumentTable(location: string): Promise<void>;

        /** Create a new schema in the database. */
        createSchema(schemaName: string): Promise<void>;

        /** Forget an entity. */
        detach(entityPath: string): void;

        /** Drop a schema and remove it and its owned objects from the Database. */
        dropSchema(schemaName: string, options?: DropOptions): Promise<void>;

        /** Drop a table and remove it from the Database. */
        dropTable(tablePath: string, options?: DropOptions): Promise<void>;

        /** List all the functions and scripts attached to the connected instance. */
        listFunctions(): Promise<any[]>;

        /** List all the tables attached to the connected instance. */
        listTables(): Promise<any[]>;

        /** List all the views attached to the connected instance. */
        listViews(): Promise<any[]>;

        /** Execute a query. */
        query(query: Select | Insert | Update | Delete | string, params?: any, options?: QueryOptions): Promise<any>;

        /**
         * Synchronize the database API with the current state by scanning for tables, views, functions, and scripts.
         * Objects and files which no longer exist are cleared and new objects and files added.
         */
        reload(): void;

        /**
         * Save a document.
         *
         * @param collection Document table name to save to. If it does not already exist, it will be created.
         * @param doc A JSON document.
         */
        saveDoc(collection: string, doc: object): Promise<any>;

        [tableName: string]: Table | any;
    }
}
