// Type definitions for orientjs 3.0
// Project: https://github.com/orientechnologies/orientjs
// Definitions by: [Saeed Tabrizi] <https://github.com/saeedtabrizi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Last Update  : 20-7-2017
// Compatible with Orientdb >= 2.2.15 and orientjs >= 2.2.x features .
// Developed with love in www.nowcando.com
//

/// <reference types="node" />

import events = require('events');
import Promise = require('bluebird');

/* =================== USAGE ===================
    import orientjs = require('orientjs');
   let dbserver = orientjs({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
    });
    let db = dbserver.use({
        name: 'mytestdb',
        username: 'root',
        password: 'root'
    });
 =============================================== */

/**
 * A lightweight definiton for orientjs module, Official node.js driver for OrientDB.
 *
 * @description Official node.js driver for OrientDB. Fast, lightweight, uses the binary protocol.
 *
 * @author Saeed Tabrizi (saeed a_t nowcando.com)
 * @version 3.0.1
 */

/**
 * Make a orientdb server client in binary protocol  .
 * @param config The configuration for server connection.
 */
declare function orientjs(config: orientjs.ServerConfig): orientjs.Server;
declare namespace orientjs {
    type Version = number | string;
    type PropertyType = "Boolean" | "Integer" | "Short" | "Long" |
        "Float" | "Double" | "DateTime" | "String" | "Binary" |
        "Embedded" | "EmbeddedList" | "EmbeddedSet" | "EmbeddedMap" |
        "Link" | "LinkList" | "LinkSet" | "LinkMap" | "Byte" |
        "Transient" | "Date" | "Custom" | "Decimal" | "LinkBag";
    enum DataTypes {
        Boolean = 0,
        Integer = 1,
        Short = 2,
        Long = 3,
        Float = 4,
        Double = 5,
        Datetime = 6,
        string = 7,
        Binary = 8,
        Embedded = 9,
        EmbeddedList = 10,
        EmbeddedSet = 11,
        EmbeddedMap = 12,
        Link = 13,
        LinkList = 14,
        LinkSet = 15,
        LinkMap = 16,
        Byte = 17,
        Transient = 18,
        Date = 19,
        Custom = 20,
        Decimal = 21,
        LinkBag = 22
    }

    namespace errors {
        class BaseError {
            name: string;
            init(name: string): void;
        }
        class OperationError extends BaseError {
            message: string;
            date: any;
        }
        class RequestError extends OperationError {
        }
    }

    namespace Migration {
        interface MigrationManagerConfig {
            name?: string;
            db?: Db;
            dir?: string;
            className?: string;
        }
        class Manager extends MigrationManager {
            constructor(config: MigrationManagerConfig);
        }
        class Migration {
            name: string;
            server: Server;
            db: Db;
            configure(config?: any): void;
            up(): Promise<any>;
            down(): Promise<any>;
        }

        class MigrationManager {
            /**
             * # Migration Manager
             *
             * @param config The configuration for the migration manager.
             */
            constructor(config?: MigrationManagerConfig);

            name: string;
            server: Server;
            db: Db;
            dir: string;
            className: string;

            /**
             * Create a new migration.
             *
             * @param   config  The name or configuration for the new migration.
             * @promise {string}                The full path to the created migration.
             */
            create(param: string): Promise<string>;
            /**
             * Generate the content for a migration.
             * @param  config The configuration object.
             * @return        The generated JavaScript source code.
             */
            generateMigration(config: any): string;
            /**
             * List the migrations that have not yet been applied.
             *
             * @promise {string[]} An array of migration names
             */
            list(): Promise<string[]>;
            /**
             * List all the available migrations.
             *
             * @promise {string[]} The names of the available migrations.
             */
            listAvailable(): Promise<string[]>;
            /**
             * Ensure the migration class exists.
             *
             * @promise {MigrationManager}  The manager instance with intact structure.
             */
            ensureStructure: Promise<MigrationManager>;
            /**
             * Retrieve a list of applied migrations.
             *
             * @promise {Object[]} The applied migrations.
             */
            listApplied(): Promise<any[]>;
            /**
             * Perform the migration.
             *
             * @param   limit The maximum number of migrations to apply, if any.
             * @promise {Mixed} The result of the migration.
             */
            up(limit?: number): Promise<any>;
            /**
             * Revert the migration.
             *
             * @param   limit The maximum number of migrations to revert, if any.
             * @promise {Mixed} The result of the migration.
             */
            down(limit?: number): Promise<any>;
            /**
             * Load the migration with the given name.
             *
             * @param     name The name of the migation.
             * @return      The loaded migration instance.
             */
            loadMigration(name: string): Migration;
            /**
             * Apply the migration with the given name.
             *
             * @param   name The name of the migation.
             * @promise {Mixed} The result of the migration.
             */
            applyMigration(name: string): Promise<any>;
            /**
             * Revert the migration with the given name.
             *
             * @param   name The name of the migation.
             * @promise {Mixed} The result of the migration.
             */
            revertMigration(name: string): Promise<any>;
        }
    }

    interface Logger {
        error(...args: any[]): void;
        log(...args: any[]): void;
        debug(...args: any[]): void;
    }

    class RID extends String {
        cluster?: number;
        position?: number;

        valueOf(): string;
        isValid?(input?: string | RID | any): boolean;
        equals?(rid: string | RID): boolean;
        parse?(input: string): boolean;
        parse?(input: string): RID;
        parse?(input: string): RID[];
        toRid?(cluster: number, position: number): any;
    }

    interface CustomField {
        /**
         * Get the value of the given custom field.
         *
         * @param  key The name of the field to get.
         * @return      The field value, or undefined if it doesn't exist.
         */
        get(key: string): CustomField;
        /**
         * Set a custom field.
         *
         * @param   key   The key to set, or map of keys to values.
         * @param          value The value to set, if `key` is not an object.
         * @promise {Object|null}         The new set of custom fields, or null if none are present.
         */
        set(key: string, value: any): CustomField;
        /**
         * Unset the custom field with the given name,
         *
         * @param        key The name of the custom field to remove.
         * @promise {Object|null}     The new set of custom fields, or null if none are present.
         */
        unset(key: string): CustomField;
    }

    interface PropertyCreateConfig {
        name: string;
        type: PropertyType;
        default?: any;
        ifnotexist?: boolean;
        unsafe?: boolean;
        mandatory?: boolean;
        readonly?: boolean;
        notNull?: boolean;
        collate?: string;
        linkedClass?: string;
        linkedType?: string;
        regexp?: RegExp | string;
        min?: number;
        max?: number;
        custom?: {
            fields?: CustomField[]
        };
    }

    interface PropertyUpdateConfig {
        name: string;
        type: PropertyType;
        default?: any;
        mandatory?: boolean;
        readonly?: boolean;
        notNull?: boolean;
        collate?: string;
        linkedClass?: string;
        linkedType?: string;
        regexp?: RegExp | string;
        min?: number;
        max?: number;
        custom?: {
            fields?: CustomField[]
        };
    }

    class Property {
        class?: Class;
        name?: string;
        originalName?: string;
        type?: PropertyType;
        mandatory?: boolean;
        readonly?: boolean;
        notNull?: boolean;
        collate?: string;
        linkedClass?: string;
        linkedType?: PropertyType;
        regexp?: RegExp | string;
        min?: number;
        max?: number;
        custom?: {
            fields?: CustomField[]
        };

        configure(config?: any): void;
        reload(): Promise<Property>;
        list(): Promise<Property[]>;
        /**
         * Create a new property.
         *
         * @param  config The property name or configuration.
         * @param   reload      Whether to reload the property, default to true.
         * @promise {Object}              The created property.
         */
        create(config?: PropertyCreateConfig | string, reload?: boolean): Promise<Property>;
        create(config: PropertyCreateConfig[], reload?: boolean): Promise<Property[]>;
        /**
         * Get the property with the given name.
         *
         * @param   name   The property to get.
         * @promise {Object|null}   The retrieved property.
         */
        get(name: string): Promise<Property>;
        /**
         * Update the given property.
         *
         * @param    property The property settings.
         * @param   reload   Whether to reload the property, default to true.
         * @promise {Object}           The updated property.
         */
        update(config: PropertyUpdateConfig, reload?: boolean): Promise<Property>;
        drop(name: string, config?: {
            ifexist?: boolean,
            force?: boolean
        }): Promise<Class>;
        alter(name: string, setting?: any): Promise<Class>;
        rename(oldName: string, newName?: string): Promise<Property>;
    }

    /**
     * The class constructor.
     * @param config The configuration for the class
     */
    class Class {
        db?: Db;
        name?: string;
        shortName?: string;
        defaultClusterId?: any;
        superClass?: string;
        originalName?: string;
        clusterIds?: number[];
        /**
         * Configure the class instance.
         * @param  config The configuration object.
         */
        configure(config?: any): void;
        /**
         * Retreive a list of classes from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */
        list(limit: number | boolean | any, offset?: number): Promise<Class[]>;
        /**
         * Find a list of records in the class.
         *
         * @param   attributes The attributes to search with.
         * @param  limit      The maximum number of records to return
         * @param  offset     The offset to start returning records from.
         * @promise {Object[]}          An array of records in the class.
         */
        find(attributes: any, limit?: number, offset?: number): Promise<Record[]>;
        /**
         * Create a record for this class.
         *
         * @param   record The record to create.
         * @promise {Object}        The created record.
         */
        create(record: Record): Promise<Record>;
        /**
         * Create a new class.
         *
         * @param  name            The name of the class to create.
         * @param  parentName      The name of the parent to extend, if any.
         * @param  cluster The cluster name or id.
         * @param  isAbstract     The flag for the abstract class
         * @param  ifnotexist     The flag for the if not exist class
         * @promise {Object}                The created class object
         */
        create(name: string, parentName?: string, cluster?: string, isAbstract?: boolean, ifnotexist?: boolean): Promise<Class>;
        /**
         * Update the given class.
         *
         * @param    class    The class settings.
         * @param   reload   Whether to reload the class, default to true.
         * @promise {Object}           The updated class.
         */
        update(cls: any, reload: boolean): Promise<Class>;
        /**
         * Reload the class instance.
         *
         * @promise {Class} The class instance.
         */
        reload(): Promise<Class[]>;
        /**
         * Delete a class.
         *
         * @param  name The name of the class to delete.
         * @param  config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
            ifexist?: boolean,
            force?: boolean
        }): Promise<Db>;
        /**
         * Get a class by name.
         *
         * @param   name The name of the class.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The class object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<Class>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  classes The class objects to cache.
         * @return                The db instance.
         */
        cacheData(classes: Class[]): Db;
        property: Property;
    }

    class Cluster {
        name?: string;
        location?: string;
        list(refresh?: boolean): Promise<any[]>;
        create(name: string, location?: string): Promise<Cluster> & Promise<any>;
        get(nameOrId: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        getByName(name: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        getById(id: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        drop(name: string): Promise<Db>;
        count(name: string): Promise<number>;
        range(name: string): Promise<any>;
        cacheData(clusters: Cluster[] & any[]): Db;
    }

    /**
     * The sequence constructor.
     * @param config The configuration for the sequence
     */
    class Sequence {
        db?: Db;
        name?: string;
        type?: string;
        value?: number;
        incr?: number;
        start?: number;
        cache?: number;
        /**
         * Configure the sequence instance.
         * @param  config The configuration object.
         */
        configure(config?: any): void;
        /**
         * Retreive a list of sequences from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */

        list(refresh: boolean): Promise<Sequence[]>;

        /**
         * Create a new sequence.
         *
         * @param  name            The name of the sequence to create.
         * @param  type      The type of sequence.
         * @param  start The start number.
         * @param  incerement The increment number.
         * @param  cache     The cache number
         * @promise {Object}                The created sequence object
         */
        create(name: string, type: "ORDERED" | "CACHED", start?: number, incerement?: number, cache?: number): Promise<Sequence>;
        /**
         * update a  sequence.
         *
         * @param  name            The name of the sequence to create.
         * @param incerement The increment number.
         * @param cache The cache number
         * @param  start The start number.
         * @promise {Object} The created sequence object
         */
        update(name: string, start?: number, incerement?: number, cache?: number): Promise<Sequence>;
        /**
         * Reload the sequence instance.
         *
         * @promise {Sequence} The class instance.
         */
        reload(): Promise<Sequence[]>;
        /**
         * Delete a sequence.
         *
         * @param  name The name of the sequence to delete.
         * @param  config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
        }): Promise<Db>;
        /**
         * Get a sequence by name.
         *
         * @param   name The name of the sequence.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The sequence object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<Sequence>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  sequences The sequence objects to cache.
         * @return                The db instance.
         */
        cacheData(sequences: Sequence[]): Db;
    }

    interface RecordMeta {
        "@rid": RID;
        "@version": Version;
    }

    type ODocument = Record;
    type BinaryRecord = Record & Buffer;
    class Record extends Object {
        '@rid'?: RID;
        '@type'?: 'd' | 'b';
        '@class'?: string;
        '@version'?: Version;
        rid?: RID;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @promise {Object}        The inserted record.
         */
        create(record: ODocument | Record | BinaryRecord, options?: any): Promise<Record>;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @promise {Object}        The inserted record.
         */
        create(records: ODocument[] | Record[] | BinaryRecord[], options?: any): Promise<Record[]>;

        /**
         * Read the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The loaded record.
         */
        get(record: Record | RID, options?: any): Promise<Record | Buffer>;
        /**
         * Read the given record.
         *
         * @param  records  The record to load.
         * @param  options The query options.
         * @promise {Object[]}        The loaded record.
         */
        get(records: Record[] | RID[], options?: any): Promise<Record[] | Buffer[]>;
        /**
         * Resolve all references within the given collection of records.
         *
         * @param  records  The records to resolve.
         * @return            The records with references replaced.
         */
        resolveReferences(records: Record[]): Record[];

        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(record: Record | RID | string, options?: any): Promise<RecordMeta>;
        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(records: Record[] | RID[], options?: any): Promise<RecordMeta[]>;

        /**
         * Update the given record.
         *
         * @param  record  The record to update.
         * @param  options The query options.
         * @promise {Object}        The updated record.
         */
        update(record?: Record | RID, options?: any): Promise<Record>;

        delete(): Promise<Record> & Promise<Record>;
        /**
         * Delete the given record.
         *
         * @param   record  The record or record id to delete.
         * @param              options The query options.
         * @promise {Object}                    The deleted record object.
         */
        delete(record: Record | RID, options?: any): Promise<Record>;
    }
    interface IndexConfig {
        name: string;
        class?: string;
        properties?: string[];
        type: "UNIQUE" | "NOTUNIQUE" | "FULLTEXT" | "DICTIONARY" | "UNIQUE_HASH_INDEX" | "NOTUNIQUE_HASH_INDEX" | "FULLTEXT_HASH_INDEX" | "DICTIONARY_HASH_INDEX" | "SPATIAL";
        keyType?: string;
        metadata?: any;
        engine?: "LUCENE" | "COLA" | string;
    }

    interface IndexEntry {
        key: string;
        value: string | RID;
    }
    interface Index {
        cached: boolean;
        db: Db;
        name: string;
        algorithm: string;
        clusters: Cluster[];
        type: string;
        configure(config: any): void;
        add(idx: IndexEntry | IndexEntry[]): Promise<Index[]>;
        set(key: string, value: string | RID): Promise<Index>;
        delete(name: string): Promise<Index>;
        select(): Statement;
        list(refresh?: boolean): Promise<Index[]>;
        create(config: IndexConfig | IndexConfig[]): Promise<Index>;
        drop(name: string): Promise<Db>;
        get(name: string, refresh?: boolean): Promise<Index>;
        cacheData(indices: any[]): Promise<Db>;
    }
    type SqlExpression = string | RawExpression | SqlFunction;
    interface Statement extends Query<any> {
        select(param?: string | string[]): Statement;
        traverse(param?: string | string[]): Statement;
        strategy(param?: string): Statement;
        insert(param?: string | string[]): Statement;
        update(param?: string | string[]): Statement;
        delete(param?: string | string[]): Statement;
        into(param?: string): Statement;
        create(paramtype?: string, paramname?: string): Statement;
        from(param?: string | any): Statement;
        to(param?: any): Statement;
        set(param?: any): Statement;
        content(param?: any): Statement;
        increment(property?: string, value?: any): Statement;
        add(property: string, value: any): Statement;
        remove(property: string, value: any): Statement;
        put(property: string, keysValues: any): Statement;
        upsert(condition?: any, params?: any, comparisonOperator?: string): Statement;
        where(params: any): Statement;
        while(param: any): Statement;
        containsText(param: any): Statement;
        and(param: any): Statement;
        or(param: any): Statement;
        group(param: any): Statement;
        order(param: any): Statement;
        skip(value: number): Statement;
        offset(value?: number): Statement;
        limit(value: number): Statement;
        fetch(param?: any): Statement;
        let(name: string, value: string | Statement): Statement;
        lock(param: any): Statement;

        if(condition: SqlExpression, statements: Statement[]): Statement;
        if(condition: SqlExpression, ...statements: Statement[]): Statement;
        rollback(param?: any): Statement;
        sleep(ms?: number): Statement;

        commit(retryLimit?: number): Statement;
        retry(retryLimit?: number): Statement;
        wait(waitLimit: number): Statement;
        return(value: SqlExpression): Statement;
        lucene(property: string | any, luceneQuery: string): Statement;
        near(latitudeProperty: string | any, longitudeProperty: string | number, longitude: number, latitude?: number, maxDistanceInKms?: number): Statement;
        within(latitudeProperty: string, longitudeProperty: string, box: number[]): Statement;
        addParams(key: string, value: any): Statement;
        addParams(value: any): Statement;
        token(value: any): Statement;
        buildStatement(): string;
    }

    interface Query<T> {
        transform<T>(transformer: (item: Record) => T): Query<T>;
        column(name: string): Query<T>;
        defaults(defaults: any): Query<T>;
        one<T>(params?: any): Promise<T>;
        all<T>(params?: any): Promise<T[]>;
        scalar<T>(params?: any): Promise<T>;
        exec<T>(params?: any): Promise<T>;
    }

    class Transaction {
        db: Db;
        id: number;

        commit(): Promise<any>;
        create(record: Record): Transaction;
        update(record: Record): Transaction;
        delete(record: Record): Transaction;
    }

    interface DbConnectionConfig {
        useToken?: boolean;
        name?: string;
        username?: string;
        password?: string;
        sessionId?: number;
        forcePrepare?: boolean;
        server?: Server;
        type?: string;
        storage?: string;
        token?: any;
        transformers?: Array<((item: Record) => any)>;
    }

    interface RawExpression {
        db: Db;
        value: string;
        as(alias: string): RawExpression;
    }
    class AbsSqlFunction {
        constructor(field: number | string);
    }
    class AvgSqlFunction {
        constructor(field: string);
    }
    class SequenceSqlFunction {
        constructor(name: string);
        next(): number;
        current(): number;
        reset(): number;
    }

    interface SqlFunction {
        db: Db;
        abs: AbsSqlFunction;
        avg: AbsSqlFunction;
        sequence: SequenceSqlFunction;
    }

    interface QueryOptions {
        params?: any;
        mode?: "s" | "a" | "l";
        fetchPlan?: any;
        limit?: number;
        token?: any;
        class?: string;
        language?: "SQL" | "Javascript";
    }

    class Db extends events.EventEmitter {
        sessionId: number;
        forcePrepare: boolean;
        name: string;
        server: Server;
        type: "graph" | "document";
        storage: "plocal" | "memory";
        username: string;
        password: string;
        token: any;
        dataSegments: any[];
        transactionId: number;
        transformers: any;
        transformerFunctions: any;

        class: Class;
        cluster: Cluster;
        record: Record;
        index: Index;
        sequence: Sequence;
        /**
         * Configure the database instance.
         * @param  config The configuration for the database.
         * @return            The configured database object.
         */
        configure(config: DbConfig): Db;
        /**
         * Initialize the database instance.
         */
        init(): void;
        /**
         * Open the database.
         *
         * @promise {Db} The open db instance.
         */
        open(): Promise<Db>;
        /**
         * Close the database.
         *
         * @promise {Db} The now closed db instance.
         */
        close(): Promise<Db>;
        /**
         * Send the given operation to the server, ensuring the
         * database is open first.
         *
         * @param  operation The operation to send.
         * @param  data       The data for the operation.
         * @promise {Mixed}            The result of the operation.
         */
        send(operation: number, data: any): Promise<any>;
        /**
         * Reload the configuration for the database.
         *
         * @promise {Db}  The database with reloaded configuration.
         */
        reload(): Promise<Db>;
        /**
         * Begin a new transaction.
         *
         * @return The transaction instance.
         */
        begin(): Transaction;
        /**
         * Execute an SQL query against the database and retreive the raw, parsed response.
         *
         * @param   query   The query or command to execute.
         * @param   options The options for the query / command.
         * @promise {Mixed}          The results of the query / command.
         */
        exec(query: string, options?: QueryOptions): Promise<any>;

        /**
         * Execute an SQL query against the database and retreive the results
         *
         * @param   query   The query or command to execute.
         * @param   options The options for the query / command.
         * @promise {Mixed}          The results of the query / command.
         */
        query(command: string, options?: QueryOptions): Promise<any>;
        /**
         * Execute a live query against the database
         *
         * @param   query   The query or command to execute.
         * @param   options The options for the query / command.
         * @promise {Mixed}          The token of the live query.
         */
        liveQuery(command: string, options?: QueryOptions): Promise<any>;
        /**
         * Normalize a result, where possible.
         * @param  result The result to normalize.
         * @return        The normalized result.
         */
        normalizeResult(result: any): any;
        /**
         * Normalize the content for a result.
         * @param  content The content to normalize.
         * @return         The normalized content.
         */
        normalizeResultContent(content: any): any;
        /**
         * Register a transformer function for documents of the given class.
         * This function will be invoked for each document of the specified class
         * in all future result sets.
         *
         * @param    className   The name of the document class.
         * @param  transformer The transformer function.
         * @return                   The database instance.
         */
        registerTransformer<T>(className: string, transformer: (item: Record) => T): Db;
        /**
         * Transform a document according to its `@class` property, using the registered transformers.
         * @param  document The document to transform.
         * @return           The transformed document.
         */
        transformDocument(document: ODocument): any;

        /**
         * Create a query instance for this database.
         *
         * @return The query instance.
         */
        createQuery(): Statement;
        /**
         * Create a raw expression.
         *
         * @return The raw expression instance.
         */
        rawExpression(param: string): RawExpression;

        /**
         * Create a sql Function.
         *
         * @return The sql function instance.
         */
        sqlFunction(options?: any): SqlFunction;

        /**
         * Create a create query.
         *
         * @return The query instance.
         */
        create(params?: any): Statement;
        create(paramtype: string, paramname: string): Statement;
        /**
         * Create a select query.
         *
         * @return The query instance.
         */
        select(params?: any): Statement;
        /**
         * Create a traverse query.
         *
         * @return The query instance.
         */
        traverse(params?: any): Statement;
        /**
         * Create an insert query.
         *
         * @return The query instance.
         */
        insert(params?: any): Statement;
        /**
         * Create an update query.
         *
         * @return The query instance.
         */
        update(params?: any): Statement;
        /**
         * Create a delete query.
         *
         * @return The query instance.
         */
        delete(params?: any): Statement;
        /**
         * Create a transactional query.
         *
         * @return The query instance.
         */
        let(params?: any): Statement;
        let(name: string, value: string | Statement): Statement;
        /**
         * Create a transactional query with if.
         *
         * @return The query instance.
         */
        if(condition: SqlExpression, statements: Statement[]): Statement;
        /**
         * Create a transactional query with if.
         *
         * @return The query instance.
         */
        if(condition: SqlExpression, ...statements: Statement[]): Statement;
        /**
         * Escape the given input.
         *
         * @param  input The input to escape.
         * @return       The escaped input.
         */
        escape(input: string): string;
        /**
         * Create a context for a user, using their authentication token.
         * The context includes the query builder methods, which will be executed
         * on behalf of the user.
         *
         * @param  token The authentication token.
         * @return              The object containing the query builder methods.
         */
        createUserContext(token: any): any;

        /**
         * Create a orient function from a plain Javascript function
         *
         * @param   name     The name of the function
         * @param   fn       Plain Javascript function to stringify
         * @param   options  Not currently used but will be used for 'IDEMPOTENT' arg
         * @promise {Mixed}           The results of the query / command.
         */
        createFn(name: string, fn: (...args: any[]) => any, options?: any): Promise<any>;
        createFn(fn: (...args: any[]) => any, options?: any): Promise<any>;
    }

    interface ServerConfiguration {
        get(name: string): string;
        set(key: string, value: string): string;
        list(): any;
    }

    /**
     * # Server
     * Represents a connection to an orientdb server.
     *
     * @param options The server URL, or configuration object
     */
    class Server {
        constructor(options?: ServerConfig);
        config: ServerConfiguration;
        logger: Logger;

        /**
         * Initialize the server instance.
         */
        init(): void;
        /**
         * Configure the server instance.
         *
         * @param  config The configuration for the server.
         * @return            The configured server object.
         */
        configure(config: ServerConfig): Server;
        /**
         * Configure the transport for the server.
         *
         * @param  config The server config.
         * @return        The configured server object.
         */
        configureTransport(config: any): Server;
        /**
         * Configure the logger for the server.
         *
         * @param  config The logger config
         * @return        The server instance with the configured logger.
         */
        configureLogger(logger: Logger): Server;
        /**
         * Send an operation to the server,
         *
         * @param  operation The id of the operation to send.
         * @param  options    The options for the operation.
         * @promise {Mixed}            The result of the operation.
         */
        send(operation: number, options: any): any;
        /**
         * Close the connection to the server.
         *
         * @return the disconnected server instance
         */
        close(): Server;
        /**
         * Use the database with the given name / config.
         *
         * @param  config The database name, or configuration object.
         * @return                   The database instance.
         */
        use(name: string | DbConfig): Db;
        /**
         * Create a database with the given name / config.
         *
         * @param  config The database name or configuration object.
         * @promise {Db}                  The database instance
         */
        create(name: string | DbConfig): Promise<Db>;
        /**
         * Destroy a database with the given name / config.
         *
         * @param   config The database name or configuration object.
         * @promise {Mixed}               The server response.
         */
        drop(name: string | DbConfig): Promise<Db>;
        /**
         * List all the databases on the server.
         *
         * @return An array of databases.
         */
        list(): Promise<Db[]>;
        /**
         * Determine whether a database exists with the given name.
         *
         * @param   name        The database name.
         * @param   storageType The storage type, defaults to `plocal`.
         * @promise {Boolean}            true if the database exists.
         */
        exists(name: string, storageType?: string): Promise<boolean>;
        /**
         * Freeze the database with the given name.
         *
         * @param   name        The database name.
         * @param   storageType The storage type, defaults to `plocal`.
         * @return              The response from the server.
         */
        freeze(name: string, storageType?: string): any;
        /**
         * Release the database with the given name.
         *
         * @param   name        The database name.
         * @param   storageType The storage type, defaults to `plocal`.
         * @return              The response from the server.
         */
        release(name: string, storageType?: string): any;

        shutdown(): Promise<any>;
    }

    class ODatabase extends Db {
        constructor(config?: {
            host: string,
            port?: number,
            username?: string,
            password?: string,
            name: string
        });
    }

    interface ServerConfig {
        useToken?: boolean;
        host: string;
        port?: number;
        username?: string;
        password?: string;
        servers?: ServerConfig[];
    }

    interface DbConfig {
        name: string;
        type?: string;
        storage?: string;
        username?: string;
        password?: string;
    }
}
export = orientjs;
