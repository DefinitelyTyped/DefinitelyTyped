// Type definitions for orientjs 3.0
// Project: https://github.com/orientechnologies/orientjs
// Definitions by: [Saeed Tabrizi] <https://github.com/saeedtabrizi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Last Update  : 15-09-2019
// Developed in www.nowcando.com

/// <reference types="node" />

import events = require('events');
import { Readable } from 'stream';

/* =================== USAGE ===================
    OLD API :
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

    New API :

    const OrientDBClient = require("orientjs").OrientDBClient;

    OrientDBClient.connect({
    host: "localhost",
    port: 2424
    }).then(client => {
    return client.close();
    }).then(()=> {
    console.log("Client closed");
    });

    Single Session :

    client.session({ name: "demodb", username: "admin", password: "admin" })
    .then(session => {
        // use the session
        ...
        // close the session
        return session.close();
    });

    // Create a sessions Pool
    client.sessions({ name: "demodb", username: "admin", password: "admin", pool: { max: 10} })
    .then(pool => {
        // acquire a session
        return pool.acquire()
        .then(session => {
            // use the session
            ...
            // release the session
            return session.close();
        })
        .then(() => {
            // close the pool
            return pool.close();
        });
    });
    });

 =============================================== */

/**  A lightweight definiton for orientjs module, Official node.js driver for OrientDB.
 *
 * @description Official node.js driver for OrientDB. Fast, lightweight, uses the binary protocol.
 *
 * @author Saeed Tabrizi (saeed a_t nowcando.com)
 * @version 3.0.6
 *
 */

declare function orientjs(config: orientjs.ServerConfig): orientjs.OServer;

// tslint:disable:no-padding
declare namespace orientjs {

    type Version = number | string;
    type PropertyType = "Boolean" | "Integer" | "Short" | "Long" |
        "Float" | "Double" | "DateTime" | "String" | "Binary" |
        "Embedded" | "EmbeddedList" | "EmbeddedSet" | "EmbeddedMap" |
        "Link" | "LinkList" | "LinkSet" | "LinkMap" | "Byte" |
        "Transient" | "Date" | "Custom" | "Decimal" | "LinkBag";
    /**
     * A list of orientdb data types, indexed by their type id.
     * @type {Object}
     */
    enum ODataType {
        Boolean = 0,
        Integer = 1,
        Short = 2,
        Long = 3,
        Float = 4,
        Double = 5,
        Datetime = 6,
        String = 7,
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
        LinkBag = 22,
        Any = 23
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
            db?: DB;
            dir?: string;
            className?: string;
        }
        class Manager extends MigrationManager {
            constructor(config: MigrationManagerConfig);
        }
        class Migration {
            name: string;
            server: OServer;
            db: DB;
            configure(config?: any): void;
            up(): Promise<any>;
            down(): Promise<any>;
        }

        class MigrationManager {
            /**
             * # Migration Manager
             *
             * @param {Object} config The configuration for the migration manager.
             */
            constructor(config?: MigrationManagerConfig);

            name: string;
            server: OServer;
            db: DB;
            dir: string;
            className: string;

            /**
             * Create a new migration.
             *
             * @param   {string|Object} config  The name or configuration for the new migration.
             * @promise {string}                The full path to the created migration.
             */
            create(param: string): Promise<string>;
            /**
             * Generate the content for a migration.
             * @param  {Object} config The configuration object.
             * @return {string}        The generated JavaScript source code.
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
             * @param   {Integer} limit The maximum number of migrations to apply, if any.
             * @promise {Mixed} The result of the migration.
             */
            up(limit?: number): Promise<any>;
            /**
             * Revert the migration.
             *
             * @param   {Integer} limit The maximum number of migrations to revert, if any.
             * @promise {Mixed} The result of the migration.
             */
            down(limit?: number): Promise<any>;
            /**
             * Load the migration with the given name.
             *
             * @param  {string}    name The name of the migation.
             * @return {Migration}      The loaded migration instance.
             */
            loadMigration(name: string): Migration;
            /**
             * Apply the migration with the given name.
             *
             * @param   {string} name The name of the migation.
             * @promise {Mixed} The result of the migration.
             */
            applyMigration(name: string): Promise<any>;
            /**
             * Revert the migration with the given name.
             *
             * @param   {string} name The name of the migation.
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

    class ORID extends String {
        cluster?: number;
        position?: number;

        valueOf(): string;
        isValid?(input?: string | ORID | any): boolean;
        equals?(rid: string | ORID): boolean;
        parse?(input: string): boolean;
        parse?(input: string): ORID;
        parse?(input: string): ORID[];
        toRid?(cluster: number, position: number): any;
    }

    interface CustomField {
        /**
         * Get the value of the given custom field.
         *
         * @param  {string} key The name of the field to get.
         * @return {Mixed}      The field value, or undefined if it doesn't exist.
         */
        get(key: string): CustomField;
        /**
         * Set a custom field.
         *
         * @param   {string|Object} key   The key to set, or map of keys to values.
         * @param   {string}        value The value to set, if `key` is not an object.
         * @promise {Object|null}         The new set of custom fields, or null if none are present.
         */
        set(key: string, value: any): CustomField;
        /**
         * Unset the custom field with the given name,
         *
         * @param   {string}      key The name of the custom field to remove.
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

    class OClassProperty {
        class?: OClass;
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
        reload(): Promise<OClassProperty>;
        list(): Promise<OClassProperty[]>;
        /**
         * Create a new property.
         *
         * @param  {string|Object} config The property name or configuration.
         * @param   {Boolean} reload      Whether to reload the property, default to true.
         * @promise {Object}              The created property.
         */
        create(config?: PropertyCreateConfig | string, reload?: boolean): Promise<OClassProperty>;
        create(config: PropertyCreateConfig[], reload?: boolean): Promise<OClassProperty[]>;
        /**
         * Get the property with the given name.
         *
         * @param   {string} name   The property to get.
         * @promise {Object|null}   The retrieved property.
         */
        get(name: string): Promise<OClassProperty>;
        /**
         * Update the given property.
         *
         * @param   {Object}  property The property settings.
         * @param   {Boolean} reload   Whether to reload the property, default to true.
         * @promise {Object}           The updated property.
         */
        update(config: PropertyUpdateConfig, reload?: boolean): Promise<OClassProperty>;
        drop(name: string, config?: {
            ifexist?: boolean,
            force?: boolean
        }): Promise<OClass>;
        alter(name: string, setting?: any): Promise<OClass>;
        rename(oldName: string, newName?: string): Promise<OClassProperty>;
    }

    /**
     * The class constructor.
     * @param {Object} config The configuration for the class
     */
    class OClass {
        db?: DB;
        name?: string;
        shortName?: string;
        defaultClusterId?: any;
        superClass?: string;
        originalName?: string;
        clusterIds?: number[];
        /**
         * Configure the class instance.
         * @param  {Object} config The configuration object.
         */
        configure(config?: any): void;
        /**
         * Retreive a list of classes from the database.
         *
         * @param  {Boolean} refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */
        list(limit: number | boolean | any, offset?: number): Promise<OClass[]>;
        /**
         * Find a list of records in the class.
         *
         * @param  {Object}  attributes The attributes to search with.
         * @param  {Integer} limit      The maximum number of records to return
         * @param  {Integer} offset     The offset to start returning records from.
         * @promise {Object[]}          An array of records in the class.
         */
        find(attributes: any, limit?: number, offset?: number): Promise<ORecord[]>;
        /**
         * Create a record for this class.
         *
         * @param   {Object} record The record to create.
         * @promise {Object}        The created record.
         */
        create(record: ORecord): Promise<ORecord>;
        /**
         * Create a new class.
         *
         * @param  {string} name            The name of the class to create.
         * @param  {string} parentName      The name of the parent to extend, if any.
         * @param  {string|Integer} cluster The cluster name or id.
         * @param  {Boolean} isAbstract     The flag for the abstract class
         * @param  {Boolean} ifnotexist     The flag for the if not exist class
         * @promise {Object}                The created class object
         */
        create(name: string, parentName?: string, cluster?: string, isAbstract?: boolean, ifnotexist?: boolean): Promise<OClass>;
        /**
         * Update the given class.
         *
         * @param   {Object}  class    The class settings.
         * @param   {Boolean} reload   Whether to reload the class, default to true.
         * @promise {Object}           The updated class.
         */
        update(cls: any, reload: boolean): Promise<OClass>;
        /**
         * Reload the class instance.
         *
         * @promise {Class} The class instance.
         */
        reload(): Promise<OClass[]>;
        /**
         * Delete a class.
         *
         * @param  {string} name The name of the class to delete.
         * @param  {Object} config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
            ifexist?: boolean,
            force?: boolean
        }): Promise<DB>;
        /**
         * Get a class by name.
         *
         * @param   {Integer|string} name The name of the class.
         * @param   {Boolean} refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The class object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<OClass>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  {Object[]} classes The class objects to cache.
         * @return {DB}                The db instance.
         */
        cacheData(classes: OClass[]): DB;
        property: OClassProperty;
    }

    class Cluster {
        name?: string;
        location?: string;
        list(refresh?: boolean): Promise<any[]>;
        create(name: string, location?: string): Promise<Cluster> & Promise<any>;
        get(nameOrId: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        getByName(name: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        getById(id: string, refresh?: boolean): Promise<Cluster> & Promise<any>;
        drop(name: string): Promise<DB>;
        count(name: string): Promise<number>;
        range(name: string): Promise<any>;
        cacheData(clusters: Cluster[] & any[]): DB;
    }

    /**
     * The sequence constructor.
     * @param {Object} config The configuration for the sequence
     */
    class OSequence {
        db?: DB;
        name?: string;
        type?: string;
        value?: number;
        incr?: number;
        start?: number;
        cache?: number;
        /**
         * Configure the sequence instance.
         * @param  {Object} config The configuration object.
         */
        configure(config?: any): void;
        /**
         * Retreive a list of sequences from the database.
         *
         * @param  {Boolean} refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */

        list(refresh: boolean): Promise<OSequence[]>;

        /**
         * Create a new sequence.
         *
         * @param  {string} name            The name of the sequence to create.
         * @param  {string} type      The type of sequence.
         * @param  {Integer} start The start number.
         * @param  {Integer} incerement The increment number.
         * @param  {Integer} cache     The cache number
         * @promise {Object}                The created sequence object
         */
        create(name: string, type: "ORDERED" | "CACHED", start?: number, incerement?: number, cache?: number): Promise<OSequence>;
        /**
         * update a  sequence.
         *
         * @param  {string} name            The name of the sequence to create.
         * @param {Integer} incerement The increment number.
         * @param {Integer} cache The cache number
         * @param  {Integer} start The start number.
         * @promise {Object} The created sequence object
         */
        update(name: string, start?: number, incerement?: number, cache?: number): Promise<OSequence>;
        /**
         * Reload the sequence instance.
         *
         * @promise {Sequence} The class instance.
         */
        reload(): Promise<OSequence[]>;
        /**
         * Delete a sequence.
         *
         * @param  {string} name The name of the sequence to delete.
         * @param  {Object} config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
        }): Promise<DB>;
        /**
         * Get a sequence by name.
         *
         * @param   {Integer|string} name The name of the sequence.
         * @param   {Boolean} refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The sequence object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<OSequence>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  {Object[]} sequences The sequence objects to cache.
         * @return {DB}                The db instance.
         */
        cacheData(sequences: OSequence[]): DB;
    }

    interface RecordMeta {
        "@rid": ORID;
        "@version": Version;
    }

    type ODocument = ORecord;
    type BinaryRecord = ORecord & Buffer;
    class ORecord extends Object {
        '@rid'?: ORID;
        '@type'?: 'd' | 'b';
        '@class'?: string;
        '@version'?: Version;
        rid?: ORID;
        /**
         * Insert the given record into the database.
         *
         * @param  {Object} record  The record to insert.
         * @param  {Object} options The command options.
         * @promise {Object}        The inserted record.
         */
        create(record: ODocument | ORecord | BinaryRecord, options?: any): Promise<ORecord>;
        /**
         * Insert the given record into the database.
         *
         * @param  {Object} record  The record to insert.
         * @param  {Object} options The command options.
         * @promise {Object}        The inserted record.
         */
        create(records: ODocument[] | ORecord[] | BinaryRecord[], options?: any): Promise<ORecord[]>;

        /**
         * Read the given record.
         *
         * @param  {Object} record  The record to load.
         * @param  {Object} options The query options.
         * @promise {Object}        The loaded record.
         */
        get(record: ORecord | ORID, options?: any): Promise<ORecord | Buffer>;
        /**
         * Read the given record.
         *
         * @param  {Object} records  The record to load.
         * @param  {Object} options The query options.
         * @promise {Object[]}        The loaded record.
         */
        get(records: ORecord[] | ORID[], options?: any): Promise<ORecord[] | Buffer[]>;
        /**
         * Resolve all references within the given collection of records.
         *
         * @param  {Object[]} records  The records to resolve.
         * @return {Object}            The records with references replaced.
         */
        resolveReferences(records: ORecord[]): ORecord[];

        /**
         * Read the metadata for the given record.
         *
         * @param  {Object} record  The record to load.
         * @param  {Object} options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(record: ORecord | ORID | string, options?: any): Promise<RecordMeta>;
        /**
         * Read the metadata for the given record.
         *
         * @param  {Object} record  The record to load.
         * @param  {Object} options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(records: ORecord[] | ORID[], options?: any): Promise<RecordMeta[]>;

        /**
         * Update the given record.
         *
         * @param  {Object} record  The record to update.
         * @param  {Object} options The query options.
         * @promise {Object}        The updated record.
         */
        update(record?: ORecord | ORID, options?: any): Promise<ORecord>;

        delete(): Promise<ORecord> & Promise<ORecord>;
        /**
         * Delete the given record.
         *
         * @param   {string|ORID|Object} record  The record or record id to delete.
         * @param   {Object}            options The query options.
         * @promise {Object}                    The deleted record object.
         */
        delete(record: ORecord | ORID, options?: any): Promise<ORecord>;
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
        value: string | ORID;
    }
    interface Index {
        cached: boolean;
        db: DB;
        name: string;
        algorithm: string;
        clusters: Cluster[];
        type: string;
        configure(config: any): void;
        add(idx: IndexEntry | IndexEntry[]): Promise<Index[]>;
        set(key: string, value: string | ORID): Promise<Index>;
        delete(name: string): Promise<Index>;
        select(): OStatement;
        list(refresh?: boolean): Promise<Index[]>;
        create(config: IndexConfig | IndexConfig[]): Promise<Index>;
        drop(name: string): Promise<DB>;
        get(name: string, refresh?: boolean): Promise<Index>;
        cacheData(indices: any[]): Promise<DB>;
    }
    type OSqlExpression = string | ORawExpression | OSqlFunction;
    interface OStatement extends OQuery<any> {
        select(param?: string | string[]): OStatement;
        traverse(param?: string | string[]): OStatement;
        strategy(param?: string): OStatement;
        insert(param?: string | string[]): OStatement;
        update(param?: string | string[]): OStatement;
        delete(param?: string | string[]): OStatement;
        into(param?: string): OStatement;
        create(paramtype?: string, paramname?: string): OStatement;
        from(param?: string | any): OStatement;
        to(param?: any): OStatement;
        set(param?: any): OStatement;
        content(param?: any): OStatement;
        increment(property?: string, value?: any): OStatement;
        add(property: string, value: any): OStatement;
        remove(property: string, value: any): OStatement;
        put(property: string, keysValues: any): OStatement;
        upsert(condition?: any, params?: any, comparisonOperator?: string): OStatement;
        where(params: any): OStatement;
        while(param: any): OStatement;
        containsText(param: any): OStatement;
        and(param: any): OStatement;
        or(param: any): OStatement;
        group(param: any): OStatement;
        order(param: any): OStatement;
        skip(value: number): OStatement;
        offset(value?: number): OStatement;
        limit(value: number): OStatement;
        fetch(param?: any): OStatement;
        let(name: string, value: string | OStatement): OStatement;
        lock(param: any): OStatement;

        if(condition: OSqlExpression, statements: OStatement[]): OStatement;
        if(condition: OSqlExpression, ...statements: OStatement[]): OStatement;
        rollback(param?: any): OStatement;
        sleep(ms?: number): OStatement;

        commit(retryLimit?: number): OStatement;
        retry(retryLimit?: number): OStatement;
        wait(waitLimit: number): OStatement;
        return(value: OSqlExpression): OStatement;
        lucene(property: string | any, luceneQuery: string): OStatement;
        near(latitudeProperty: string | any, longitudeProperty: string | number, longitude: number, latitude?: number, maxDistanceInKms?: number): OStatement;
        within(latitudeProperty: string, longitudeProperty: string, box: number[]): OStatement;
        addParams(key: string, value: any): OStatement;
        addParams(value: any): OStatement;
        token(value: any): OStatement;
        buildStatement(): string;
    }

    interface OQuery<T> {
        transform<T>(transformer: (item: ORecord) => T): OQuery<T>;
        column(name: string): OQuery<T>;
        defaults(defaults: any): OQuery<T>;
        one<T>(params?: any): Promise<T>;
        all<T>(params?: any): Promise<T[]>;
        scalar<T>(params?: any): Promise<T>;
        exec<T>(params?: any): Promise<T>;
    }

    class OTransaction {
        db: DB;
        id: number;

        commit(): Promise<any>;
        create(record: ORecord): OTransaction;
        update(record: ORecord): OTransaction;
        delete(record: ORecord): OTransaction;
    }

    interface DbConnectionConfig {
        useToken?: boolean;
        name?: string;
        username?: string;
        password?: string;
        sessionId?: number;
        forcePrepare?: boolean;
        server?: OServer;
        type?: string;
        storage?: string;
        token?: any;
        transformers?: Array<((item: ORecord) => any)>;
    }

    interface ORawExpression {
        db: DB;
        value: string;
        as(alias: string): ORawExpression;
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

    interface OSqlFunction {
        db: DB;
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

    class DB extends events.EventEmitter {
        sessionId: number;
        forcePrepare: boolean;
        name: string;
        server: OServer;
        type: "graph" | "document";
        storage: "plocal" | "memory";
        username: string;
        password: string;
        token: any;
        dataSegments: any[];
        transactionId: number;
        transformers: any;
        transformerFunctions: any;

        class: OClass;
        cluster: Cluster;
        record: ORecord;
        index: Index;
        sequence: OSequence;
        /**
         * Configure the database instance.
         * @param  {Object} config The configuration for the database.
         * @return {DB}            The configured database object.
         */
        configure(config: DbConfig): DB;
        /**
         * Initialize the database instance.
         */
        init(): void;
        /**
         * Open the database.
         *
         * @promise {Db} The open db instance.
         */
        open(): Promise<DB>;
        /**
         * Close the database.
         *
         * @promise {Db} The now closed db instance.
         */
        close(): Promise<DB>;
        /**
         * Send the given operation to the server, ensuring the
         * database is open first.
         *
         * @param  {Integer} operation The operation to send.
         * @param  {Object} data       The data for the operation.
         * @promise {Mixed}            The result of the operation.
         */
        send(operation: number, data: any): Promise<any>;
        /**
         * Reload the configuration for the database.
         *
         * @promise {Db}  The database with reloaded configuration.
         */
        reload(): Promise<DB>;
        /**
         * Begin a new transaction.
         *
         * @return {OTransaction} The transaction instance.
         */
        begin(): OTransaction;
        /**
         * Execute an SQL query against the database and retreive the raw, parsed response.
         *
         * @param   {string} query   The query or command to execute.
         * @param   {Object} options The options for the query / command.
         * @promise {Mixed}          The results of the query / command.
         */
        exec(query: string, options?: QueryOptions): Promise<any>;

        /**
         * Execute an SQL query against the database and retreive the results
         *
         * @param   {string} query   The query or command to execute.
         * @param   {Object} options The options for the query / command.
         * @promise {Mixed}          The results of the query / command.
         */
        query(command: string, options?: QueryOptions): Promise<any>;
        /**
         * Execute a live query against the database
         *
         * @param   {string} query   The query or command to execute.
         * @param   {Object} options The options for the query / command.
         * @promise {Mixed}          The token of the live query.
         */
        liveQuery(command: string, options?: QueryOptions): Promise<any>;
        /**
         * Normalize a result, where possible.
         * @param  {Object} result The result to normalize.
         * @return {Object}        The normalized result.
         */
        normalizeResult(result: any): any;
        /**
         * Normalize the content for a result.
         * @param  {Mixed} content The content to normalize.
         * @return {Mixed}         The normalized content.
         */
        normalizeResultContent(content: any): any;
        /**
         * Register a transformer function for documents of the given class.
         * This function will be invoked for each document of the specified class
         * in all future result sets.
         *
         * @param  {string}   className   The name of the document class.
         * @param  {Function} transformer The transformer function.
         * @return {DB}                   The database instance.
         */
        registerTransformer<T>(className: string, transformer: (item: ORecord) => T): DB;
        /**
         * Transform a document according to its `@class` property, using the registered transformers.
         * @param  {Object} document The document to transform.
         * @return {Mixed}           The transformed document.
         */
        transformDocument(document: ODocument): any;

        /**
         * Create a query instance for this database.
         *
         * @return {OQuery} The query instance.
         */
        createQuery(): OStatement;
        /**
         * Create a raw expression.
         *
         * @return {ORawExpression} The raw expression instance.
         */
        rawExpression(param: string): ORawExpression;

        /** Create a sql Function.
         *
         * @return {OSqlFunction} The sql function instance.
         */
        sqlFunction(options?: any): OSqlFunction;

        /**
         * Create a create query.
         *
         * @return {OQuery} The query instance.
         */
        create(params?: any): OStatement;
        create(paramtype: string, paramname: string): OStatement;
        /**
         * Create a select query.
         *
         * @return {OQuery} The query instance.
         */
        select(params?: any): OStatement;
        /**
         * Create a traverse query.
         *
         * @return {OQuery} The query instance.
         */
        traverse(params?: any): OStatement;
        /**
         * Create an insert query.
         *
         * @return {OQuery} The query instance.
         */
        insert(params?: any): OStatement;
        /**
         * Create an update query.
         *
         * @return {OQuery} The query instance.
         */
        update(params?: any): OStatement;
        /**
         * Create a delete query.
         *
         * @return {OQuery} The query instance.
         */
        delete(params?: any): OStatement;
        /**
         * Create a transactional query.
         *
         * @return {OQuery} The query instance.
         */
        let(params?: any): OStatement;
        let(name: string, value: string | OStatement): OStatement;
        /** Create a transactional query with if.
         *
         * @return {OQuery} The query instance.
         */
        if(condition: OSqlExpression, statements: OStatement[]): OStatement;
        /** Create a transactional query with if.
         *
         * @return {OQuery} The query instance.
         */
        if(condition: OSqlExpression, ...statements: OStatement[]): OStatement;
        /**
         * Escape the given input.
         *
         * @param  {string} input The input to escape.
         * @return {string}       The escaped input.
         */
        escape(input: string): string;
        /**
         * Create a context for a user, using their authentication token.
         * The context includes the query builder methods, which will be executed
         * on behalf of the user.
         *
         * @param  {Buffer|string} token The authentication token.
         * @return {Object}              The object containing the query builder methods.
         */
        createUserContext(token: any): any;

        /**
         * Create a orient function from a plain Javascript function
         *
         * @param   {string} name     The name of the function
         * @param   {Object} fn       Plain Javascript function to stringify
         * @param   {Object} options  Not currently used but will be used for 'IDEMPOTENT' arg
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
     * @param {string|Object} options The server URL, or configuration object
     */
    class OServer {
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
         * @param  {Object} config The configuration for the server.
         * @return {OServer}            The configured server object.
         */
        configure(config: ServerConfig): OServer;
        /**
         * Configure the transport for the server.
         *
         * @param  {Object} config The server config.
         * @return {OServer}        The configured server object.
         */
        configureTransport(config: any): OServer;
        /**
         * Configure the logger for the server.
         *
         * @param  {Object} config The logger config
         * @return {OServer}        The server instance with the configured logger.
         */
        configureLogger(logger: Logger): OServer;
        /**
         * Send an operation to the server,
         *
         * @param  {Integer} operation The id of the operation to send.
         * @param  {Object} options    The options for the operation.
         * @promise {Mixed}            The result of the operation.
         */
        send(operation: number, options: any): any;
        /**
         * Close the connection to the server.
         *
         * @return {OServer} the disconnected server instance
         */
        close(): OServer;
        /**
         * Use the database with the given name / config.
         *
         * @param  {string | DbConfig} config The database name, or configuration object.
         * @return {DB}                   The database instance.
         */
        use(name: string | DbConfig): DB;
        /**
         * Create a database with the given name / config.
         *
         * @param  {string | DbConfig} config The database name or configuration object.
         * @promise {Db}                  The database instance
         */
        create(name: string | DbConfig): Promise<DB>;
        /**
         * Destroy a database with the given name / config.
         *
         * @param   {string | DbConfig} config The database name or configuration object.
         * @promise {Mixed}               The server response.
         */
        drop(name: string | DbConfig): Promise<DB>;
        /**
         * List all the databases on the server.
         *
         * @return {DB[]} An array of databases.
         */
        list(): Promise<DB[]>;
        /**
         * Determine whether a database exists with the given name.
         *
         * @param   {string} name        The database name.
         * @param   {string} storageType The storage type, defaults to `plocal`.
         * @promise {Boolean}            true if the database exists.
         */
        exists(name: string, storageType?: string): Promise<boolean>;
        /**
         * Freeze the database with the given name.
         *
         * @param   {string} name        The database name.
         * @param   {string} storageType The storage type, defaults to `plocal`.
         * @return {Object}              The response from the server.
         */
        freeze(name: string, storageType?: string): any;
        /**
         * Release the database with the given name.
         *
         * @param   {string} name        The database name.
         * @param   {string} storageType The storage type, defaults to `plocal`.
         * @return {Object}              The response from the server.
         */
        release(name: string, storageType?: string): any;

        shutdown(): Promise<any>;
    }

    class OServerNode extends events.EventEmitter {
        acquireConnection(): Promise<OConnection>;
        connect(): Promise<OServerNode>;
        close(): Promise<void>;
        acquireForSubscribe(): Promise<OConnection>;
        subscribeCluster(data?: any): Promise<OConnection>;
    }

    class OConnection {

    }

    interface OClusterConfig {
        selectionStrategy(cluster: OCluster): OServerNode;
    }
    class OCluster extends events.EventEmitter {

        servers: OServerNode[];
        constructor(config?: OClusterConfig)
        acquireFrom(selection: (cluster: OCluster) => OServerNode): Promise<OServerNode>;
        connect(): Promise<OServerNode>;

        close(): Promise<void>;
    }

    class ODatabase extends DB {
        constructor(config?: {
            host: string,
            port?: number,
            username?: string,
            password?: string,
            name: string
        });
    }

    interface BasePoolConfig {
        max?: number;
        min?: number;
        pool?: BasePool;
    }

    class BasePool extends events.EventEmitter {
        constructor(config: BasePoolConfig, params?: any);
        acquire(): Promise<BasePool>;

        hasError(): boolean;

        createError(err: Error | string): Error;
        createPool(config: BasePoolConfig, params?: any): BasePool;
        release(resource: any): boolean;
        size(): number;
        available(): boolean;
        borrowed(): boolean;

        pending(): boolean;

        close(): Promise<void>;
    }

    class ODatabasePoolFactory {
        create(): Promise<ODatabase>;
        destroy(db: ODatabase): Promise<void>;
    }

    class ODatabaseSessionPool extends BasePool {
        // createPool(config: BasePoolConfig, params?: any):  ODatabasePoolFactory;
    }
    class SessionManager {
        client: any;
        config: any;

        name: string;
        type: "document" | "graph";
        storage: "plocal" | "memory";
        username: string;
        password: string;
        pushNotification?: boolean;
        currentSession?: ODatabaseSession | null;
        sessions: ODatabaseSessionPool;

        open(): Promise<ODatabaseSession>;
        current(): ODatabaseSession | null;
        acquireSession(op: any, data: any): Promise<ODatabaseSession>;

        acquireSubscribeSession(op: any, data: any): Promise<ODatabaseSession>;
        sendOnSubscribe(db: any, op: any, data: any, onAcquire: any): Promise<ODatabaseSession>;
        close(): Promise<void>;
    }

    class ODatabaseTransaction {

        /**
         * Execute an SQL command against the database and retreive the results
         * @param   {String} command    The command to execute.
         * @param   {Object} options  The options for the command
         * @return  {OResult}          The results of the command
         */
        command(command: string, options?: any): OResult;

        /**
         * Commit the transaction.
         * @return {Promise} The results of the transaction.
         */
        commit(changes: any): Promise<any>;

        /**
         * Rollbacks the transaction.
         * @return {Promise} The results of the rollback.
         */
        rollback(): Promise<void>;
    }

    interface ODatabaseSessionOptions {
        name: string;
        username: string;
        password: string;

    }

    interface ODatabaseSessionPoolOptions {
        name: string;
        username: string;
        password: string;
        pool?: { max?: number, min?: number };
    }
    class ODatabaseSession {
        constructor(client?: OrientDBClient, options?: ODatabaseSessionOptions);
        /**
         * Get the current transaction
         * @returns {ODatabaseTransaction} The new transaction
         */
        tx(): ODatabaseTransaction;

        /**
         * Execute an SQL batch script against the database and retreive the results
         * @param   {String} batch                    The SQL batch to execute.
         * @param   {Object} [options]                The options for the batch SQL
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Batch parameters
         * @return  {OResult}          The results of the batch script
         */
        batch(batch: string, options?: { pageSize?: number, params?: any }): OResult;

        /**
         * Commit the transaction.
         * @param   {Object} changes
         * @returns {Promise} The results of the transaction.
         */
        commit(changes: any): Promise<any>;

        /**
         * Execute an SQL command against the database and retreive the results
         * @param   {String} command    The command to execute.
         * @param   {Object} [options]                The options for the command
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Command parameters
         * @return  {OResult}           The results of the command
         */
        command(command: string, options?: { pageSize?: number, params?: any }): OResult;

        /**
         * Execute an SQL query against the database and retreive the results
         * @param   {String} query                    The query to execute.
         * @param   {Object} [options]                The options for the query
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Query parameters
         * @returns {OResult}                         The results of the query
         */
        query(query: string, options?: { pageSize?: number, params?: any }): OResult;

        /**
         * Execute a custom language script against the database and retreive the results
         *
         * @param   {String} language                 The scripting language
         * @param   {String} script                   The script to execute.
         * @param   {Object} [options]                The options for the script
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Script parameters
         * @return  {OResult}                         The results of the script
         */
        execute(language: string, script: string, options?: { pageSize?: number, params?: any }): OResult;

        /**
         * Execute an SQL Live query against the database and retreive the results
         *
         * @param    {String} query    The query to execute.
         * @param    {Object} options  The options for the batch script
         * @returns  {LiveQuery}       The live query object
         */
        liveQuery(query: string, options?: any): any;

        /**
         * Close the database session. If the session is pooled, the instance is returned to the pool,
         * leaving the session open on the server.
         * Otherwhise the session is closed permanently on the server.
         *
         * @returns {Promise}
         */
        close(): Promise<void>;

        /**
         * Execute a unit of work in a transaction
         *
         * @param   {txWorkCallback} txWork           Transactional work
         * @param   {Number} [times]                  Number of retry in case of some failures. (MVVC errors)
         * @return  {Promise}                         The results of transaction
         */
        runInTransaction(txWork: any, times?: number): Promise<any>;
    }

    class OResult extends Readable {
        constructor(db: ODatabase, pageSize: number);
        /**
         *
         * @return {Promise}
         */
        all<R>(): Promise<R[]>;

        one<R>(): Promise<R>;
        close(): Promise<void>;
    }

    interface OServerConfig {
        host?: string;
        port?: number;
    }
    interface OrientDBClientConfig {
        host?: string;
        port?: number;

        servers?: OServerConfig[];
        pool?: { max?: number, min?: number; };

        subscribePool?: { max?: number; };

        logger?: any;

    }

    interface ServerOptions {
        username: string;
        password: string;
    }

    interface DatabaseOptions {
        username: string;
        password: string;
        name: string;
        type?: "graph" | "document";
        storage?: "plocal" | "memory";
    }

    interface DropDatabaseOptions {
        username: string;
        password: string;
        options?: DatabaseOptions;
    }

    class OrientDBClient extends events.EventEmitter {
        static connect(options?: OrientDBClientConfig): Promise<OrientDBClient>;
        constructor(options?: OrientDBClientConfig);
        connect(): Promise<OrientDBClient>;

        session(options?: ODatabaseSessionOptions): Promise<ODatabaseSession>;

        sessions(options?: ODatabaseSessionOptions): Promise<ODatabaseSessionPool>;
        migrator(config?: Migration.MigrationManagerConfig): Migration.MigrationManager;
        createDatabase(options?: DatabaseOptions): Promise<void>;
        dropDatabase(options?: DropDatabaseOptions): Promise<void>;

        existsDatabase(options?: DatabaseOptions): Promise<boolean>;

        listDatabases(options?: ServerOptions): Promise<any[]>;

        close(): Promise<void>;
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
