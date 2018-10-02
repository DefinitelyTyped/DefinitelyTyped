// Type definitions for massive 5.4
// Project: https://github.com/dmfay/massive-js.git
// Definitions by: Pascal Birchler <https://github.com/swissspidy>
//                 Clarence Ho <https://github.com/clarenceh>
//                 Felix Faust <https://github.com/AmazingTurtle>
//                 Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export = massive;

declare function massive(
    connection: massive.ConnectionInfo | string,
    loaderConfig?: massive.Loader,
    driverConfig?: object
): Promise<massive.Database>;

declare namespace massive {
    type UUID = string;

    interface AnyObject<T = any> {
        [key: string]: T;
    }

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

    interface RetrievalOptions {
        fields?: string[];
        exprs?: AnyObject<string>;
        limit?: number;
        offset?: number;
        order?: OrderingOptions[];
        pageLength?: number;
    }

    interface OrderingOptions {
        field?: string;
        expr?: string;
        direction?: "ASC" | "asc" | "DESC" | "desc";
        nulls?: "FIRST" | "first" | "LAST" | "last";
        type?: string;
        last?: string;
    }

    interface PersistenceInsertOptions {
        onConflictIgnore?: boolean;
        deepInsert?: boolean;
    }

    interface PersistenceUpdateDocOptions {
        body?: string;
    }

    interface InheritanceOptions {
        only?: boolean;
    }

    interface ResultProcessingOptions {
        build?: boolean;
        document?: boolean;
        single?: boolean;
        stream?: boolean;
        decompose?: DecomposeOptions;
    }

    interface DecomposeOptions {
        pk: string;
        columns?: string[] | AnyObject<string>;
        [foreignTable: string]: DecomposeOptions | any;
    }

    interface SearchDefinition {
        fields: string[];
        term: string;
        where: AnyObject;
    }

    interface SearchCriteria {
        fields: string[];
        term: string;
    }

    interface EntitySpecification {
        /** A Database. */
        db: Database;
        /** The entity's name. */
        name: string;
        /** Path to the entity, if a file. */
        path: string;
        /** Entity's owning schema, if a database object. */
        schema: string;
        /** Name of the loader that discovered the entity. */
        loader: string;
    }

    class Entity {
        constructor(spec: EntitySpecification);
    }

    interface ExecutableSpecification {
        /** A Database. */
        db: Database;
        /** The table or view's name. */
        name: string;
        /** The name of the schema owning the table or */
        schema: string;
        /** A function invocation statement or a pg-promise QueryFile. */
        sql: any;
        /** Number of parameters the executable expects. */
        paramCount: number;
        /** Whether a database function accepts variable-length argument lists as the last parameter. */
        isVariadic: boolean;
        /** True to enable single row/value results processing. */
        enhancedFunctions: boolean;
        /** If true, return the first result row as an object (with enhancedFunctions). */
        singleRow: boolean;
        /** If true, return results as a primitive or primitives (with enhancedFunctions). */
        singleValue: boolean;
    }

    class Executable {
        constructor(spec: ExecutableSpecification);

        /** Invoke the function or script. */
        invoke(options?: ResultProcessingOptions): Promise<AnyObject | any[]>;
    }

    interface ReadableSpecification {
        /** A Database. */
        db: Database;
        /** The table or view's name. */
        name: string;
        /** The name of the schema owning the table or view. */
        schema: string;
        /** Whether the object is a materialized view (default false). */
        is_matview?: boolean;
    }

    class Readable extends Entity {
        constructor(spec: ReadableSpecification);

        /** Count rows matching criteria. */
        count(conditions: AnyObject): Promise<number>;
        count(conditions: string, params: any[]): Promise<number>;

        /** Count documents matching criteria. Unlike count, this function only supports criteria objects. */
        countDoc(criteria: object): Promise<number>;

        /** Find rows matching criteria. */
        find(
            criteria?: AnyObject | number | UUID,
            options?: RetrievalOptions & ResultProcessingOptions
        ): Promise<any>;

        /** Find a document by searching in the body. */
        findDoc(
            criteria?: AnyObject | number | UUID,
            options?: RetrievalOptions
        ): Promise<any>;

        /** Return a single record. */
        findOne(
            criteria: AnyObject | number | UUID,
            options?: RetrievalOptions & ResultProcessingOptions
        ): Promise<any>;

        /**
         * Determine whether criteria represent a search by primary key.
         * If a number or uuid are passed, it is assumed to be a primary key value; if an object, it must have only one key, which must specify the primary key column.
         */
        isPkSearch(criteria: AnyObject | UUID | number): boolean;

        /** Refresh a materialized view. */
        refresh(concurrently?: boolean): Promise<void>;

        /**
         * Perform a full-text search on queryable fields. If options.document is true, looks in the document body fields instead of the table columns.
         */
        search(
            plan: SearchDefinition,
            options?: RetrievalOptions
        ): Promise<any[]>;

        /** Shortcut to perform a full text search on a document table. */
        searchDoc(
            plan: Pick<SearchDefinition, "fields" | "term">,
            options?: RetrievalOptions
        ): Promise<any[]>;

        /** Run a query with a raw SQL predicate, eg: db.mytable.where('id=$1', [123]).then(...); */
        where(
            conditions: string,
            params?: any[],
            options?: RetrievalOptions & ResultProcessingOptions
        ): Promise<any[]>;
    }

    interface WritableSpecification {
        /** A Database. */
        db: Database;
        /** The table or view's name. */
        name: string;
        /** The name of the schema owning the table. */
        schema: string;
        /** The table's primary key. */
        pk: string;
    }

    class Writable extends Readable {
        /** A database table or other writable object */
        constructor(spec: WritableSpecification);

        /** Delete a record or records. */
        destroy(
            criteria: AnyObject,
            options?: ResultProcessingOptions
        ): Promise<any[]>;

        /**
         * Attempts to assemble primary key criteria for a record object representing a row in this table.
         * The criteria must include the full primary key, and must not invoke any operations.
         */
        getPkCriteria(record: AnyObject): AnyObject;

        /** Insert a record or records into the table. */
        insert(
            data: AnyObject,
            options?: PersistenceInsertOptions & ResultProcessingOptions
        ): Promise<AnyObject>;
        insert(
            data: AnyObject[],
            options?: PersistenceInsertOptions & ResultProcessingOptions
        ): Promise<AnyObject[]>;

        /**
         * Saves an object.
         * If the object does not include a value for the table's primary key, this will emit an INSERT to create a new record.
         * if it does contain the primary key it will emit an UPDATE for the existing record.
         * Either way, the newest available version of the record will be returned.
         * This is not a true Postgres upsert! If you need the behavior of ON CONFLICT DO UPDATE, you'll need to use db.query or create an SQL script file.
         */
        save(
            record: AnyObject,
            options?: PersistenceInsertOptions &
                PersistenceUpdateDocOptions &
                ResultProcessingOptions
        ): Promise<AnyObject>;

        /** Save a document to the database. This function will create or replace the entire document body. */
        saveDoc(doc: AnyObject): Promise<AnyObject>;

        /** Update a record. */
        update(
            criteria: UUID | number,
            changes: AnyObject,
            options?: PersistenceUpdateDocOptions & ResultProcessingOptions
        ): Promise<AnyObject>;
        update(
            criteria: AnyObject,
            changes: AnyObject,
            options?: PersistenceUpdateDocOptions & ResultProcessingOptions
        ): Promise<AnyObject[]>;

        /**
         * Update a document, adding new information and changing existing information.
         * This function can be used with any JSON field, not just document tables; however, only document tables can use criteria objects which directly reference document fields.
         * If calling updateDoc with a criteria object for a non-document table, the criteria will be tested against the entire row (as opposed to the document body as it is for document tables).
         * To test elements of the JSON field in a non-document table with a criteria object, use a JSON path string.
         */
        updateDoc(
            criteria: UUID | number | AnyObject,
            changes: AnyObject,
            options?: PersistenceUpdateDocOptions & ResultProcessingOptions
        ): Promise<AnyObject>;
    }

    class Sequence {
        /** A database sequence. */
        constructor(db: Database, name: string, schema: string);

        /**
         * Get the last value the sequence returned.
         * The return value will be a stringified number.
         */
        lastValue(): Promise<string>;

        /**
         * Increment the sequence counter and return the next value.
         * The return value will be a stringified number.
         */
        nextValue(): Promise<string>;

        /** Reset the sequence. */
        reset(initialValue: number): Promise<void>;
    }

    class SingleValueStream {
        /** A stream which processes single-key results objects into their values for convenience on the client side. */
        constructor(options: AnyObject);

        /** Converts a single-key object into its value. */
        singleValue(obj: AnyObject): any;

        /** Implement the Transform stream that invokes singleValue on everything which passes through it. */
        private _transform(
            obj: AnyObject,
            encoding: string,
            cb: (err?: Error) => void
        ): void;
    }

    /** Represents a SELECT query. */
    class Select {
        /** Represents an SELECT query. */
        constructor(
            source: Readable,
            criteria: AnyObject | UUID,
            options?: RetrievalOptions & ResultProcessingOptions
        );

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a INSERT query. */
    class Insert {
        /** Represents an INSERT query. */
        constructor(
            source: Readable,
            record: AnyObject | any[],
            options?: ResultProcessingOptions & PersistenceInsertOptions
        );

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a UPDATE query. */
    class Update {
        /** Represents an UPDATE query. */
        constructor(
            source: Readable,
            changes: AnyObject,
            criteria: AnyObject,
            options?: ResultProcessingOptions & PersistenceUpdateDocOptions
        );

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    /** Represents a UPDATE query. */
    class Delete {
        /** Represents a DELETE query. */
        constructor(
            source: Readable,
            criteria?: AnyObject | UUID | number,
            options?: ResultProcessingOptions & InheritanceOptions
        );

        /** Format this object into a SQL SELECT. */
        format(): string;
    }

    class Database {
        /**
         * @param connection A connection object or connection string
         */
        constructor(
            connection: object | string,
            loader?: Loader,
            driverConfig?: object
        );

        /** Attach an entity to the connected instance. */
        attach(entities: AnyObject | any[]): Promise<any[]>;

        /** Remove all attached entities from the instance, returning it to the pre- introspection state. */
        clean(): void;

        /** Clones the database handle for a task or transaction, replacing the internal instance with a dedicated connection. */
        clone(conn: ConnectionInfo): Database;

        /** Create a new document table and attach it to the Database for usage. */
        createDocumentTable(location: string): Promise<void>;

        /**  Create an extension. */
        createExtension(extensionName: string): Promise<void>;

        /** Create a new schema in the database. */
        createSchema(schemaName: string): Promise<void>;

        /** Forget an entity. */
        detach(entityPath: string): void;

        /** Drop an extension. */
        dropExtension(extensionName: string): Promise<void>;

        /** Drop a schema and remove it and its owned objects from the Database. */
        dropSchema(schemaName: string, options?: DropOptions): Promise<void>;

        /** Drop a table and remove it from the Database. */
        dropTable(tablePath: string, options?: DropOptions): Promise<void>;

        /** List all the functions and scripts attached to the connected instance. */
        listFunctions(): Promise<any[]>;

        /** List all the non-pk sequences attached to the connected instance. */
        listSequences(): Promise<any[]>;

        /** List all the tables attached to the connected instance. */
        listTables(): Promise<any[]>;

        /** List all the views attached to the connected instance. */
        listViews(): Promise<any[]>;

        /** Execute a query. */
        query(
            query: Select | Insert | Update | Delete | string,
            params?: string[],
            options?: ResultProcessingOptions
        ): Promise<any>;

        /**
         * Synchronize the database API with the current state by scanning for tables, views, functions, and scripts.
         * Objects and files which no longer exist are cleared and new objects and files added.
         */
        reload(): Promise<Database>;

        /** Save a document. */
        saveDoc(collection: string, doc: AnyObject): Promise<any>;

        /** Begin a task, returning a copy of the connected instance which will route all queries made in the callback through the task scope. */
        withConnection(
            cb: (withTask: any) => any,
            options?: AnyObject
        ): Promise<any>;

        /** Begin a transaction, returning a copy of the connected instance which will route all queries made in the callback through the transaction scope. */
        withTransaction(
            cb: (withTx: any) => any,
            options?: AnyObject
        ): Promise<any>;

        [tableName: string]: Writable | any;
    }
}
