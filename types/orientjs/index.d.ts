// Type definitions for orientjs 3.0
// Project: https://github.com/orientechnologies/orientjs
// Definitions by: [Saeed Tabrizi] <https://github.com/saeedtabrizi>
//                 [Aleksey Rezvov] <https://github.com/aleksey-rezvov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0.2
// Last Update  : 09-18-2020
// Developed in www.nowcando.ir

/// <reference types="node" />

// tslint:disable:no-redundant-jsdoc-2
import events = require('events');
import { Readable } from 'stream';

declare namespace orientjs {
    type ORecordVersion = number | string;
    type PropertyType = "Boolean" | "Integer" | "Short" | "Long" |
        "Float" | "Double" | "DateTime" | "String" | "Binary" |
        "Embedded" | "EmbeddedList" | "EmbeddedSet" | "EmbeddedMap" |
        "Link" | "LinkList" | "LinkSet" | "LinkMap" | "Byte" |
        "Transient" | "Date" | "Custom" | "Decimal" | "LinkBag";
    /**
     * A list of orientdb data types, indexed by their type id.
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
        interface BaseError {
            name: string;
            init(name: string): void;
        }
        interface OperationError extends BaseError {
            message: string;
            date: any;
        }
        interface RequestError extends OperationError {
        }
    }

    namespace Migration {
        interface OMigrationManagerConfig {
            name?: string;
            db?: ODB;
            dir?: string;
            className?: string;
        }
        interface OManager extends OMigrationManager {
            new (config: OMigrationManagerConfig): OManager;
        }
        interface OMigration {
            name: string;
            server: OServer;
            db: ODB;

            up(): Promise<any>;
            down(): Promise<any>;
        }

        interface OMigrationManager {
            /**
             * # Migration Manager
             *
             * @param config The configuration for the migration manager.
             */
            new(config?: OMigrationManagerConfig):OMigrationManager;

            name: string;
            server: OServer;
            db: ODB;
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
            ensureStructure: Promise<OMigrationManager>;
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
            loadMigration(name: string): OMigration;
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

    interface OLogger {
        error(...args: any[]): void;
        log(...args: any[]): void;
        debug(...args: any[]): void;
    }

    interface ORecordID extends String {
        new(input: String|Array<any>|Object): ORecordID;
        cluster?: number;
        position?: number;

        valueOf(): string;
        isTemporary(): boolean;
        isValid(): boolean;
        equals(rid: string | ORecordID): boolean;
      
    }

    interface ORecordIDStatic {
        new():ORecordID;
        isValid(input?: string | ORecordID | any): boolean;
        parse(input: string): boolean | ORecordID | ORecordID[];
        isTemporary(input?: string | ORecordID | any): boolean;
        isValid(input?: string | ORecordID | any): boolean;
        toRid(cluster: number, position: number): string;
    }

    type ORID = ORecordID;

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

    interface OClassProperty {
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

        reload(): Promise<OClassProperty>;
        list(): Promise<OClassProperty[]>;
        /**
         * Create a new property.
         *
         * @param  config The property name or configuration.
         * @param   reload      Whether to reload the property, default to true.
         * @promise {Object}              The created property.
         */
        create(config?: PropertyCreateConfig | string, reload?: boolean): Promise<OClassProperty>;
        create(config: PropertyCreateConfig[], reload?: boolean): Promise<OClassProperty[]>;
        /**
         * Get the property with the given name.
         *
         * @param   name   The property to get.
         * @promise {Object|null}   The retrieved property.
         */
        get(name: string): Promise<OClassProperty>;
        /**
         * Update the given property.
         *
         * @param    property The property settings.
         * @param   reload   Whether to reload the property, default to true.
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
     * @param config The configuration for the class
     */
    interface OClass {
        db?: ODB;
        name?: string;
        shortName?: string;
        defaultClusterId?: any;
        superClass?: string;
        originalName?: string;
        clusterIds?: number[];
        property: OClassProperty;
    }

    interface OClassStatic{
        new(): OClass;
        /**
         * Configure the class instance.
         * @param  config The configuration object.
         */

        /**
         * Retreive a list of classes from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */
        list(limit: number | boolean | any, offset?: number): Promise<OClass[]>;
        /**
         * Find a list of records in the class.
         *
         * @param   attributes The attributes to search with.
         * @param  limit      The maximum number of records to return
         * @param  offset     The offset to start returning records from.
         * @promise {Object[]}          An array of records in the class.
         */
        find(attributes: any, limit?: number, offset?: number): Promise<ORecord[]>;
        /**
         * Create a record for this class.
         *
         * @param   record The record to create.
         * @promise {Object}        The created record.
         */
        create(record: ORecord): Promise<ORecord>;
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
        create(name: string, parentName?: string, cluster?: string, isAbstract?: boolean, ifnotexist?: boolean): Promise<OClass>;
        /**
         * Update the given class.
         *
         * @param    class    The class settings.
         * @param   reload   Whether to reload the class, default to true.
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
         * @param  name The name of the class to delete.
         * @param  config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
            ifexist?: boolean,
            force?: boolean
        }): Promise<ODB>;
        /**
         * Get a class by name.
         *
         * @param   name The name of the class.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The class object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<OClass>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  classes The class objects to cache.
         * @return                The db instance.
         */
        cacheData(classes: OClass[]): ODB;
    }

    interface OCluster {
        name?: string;
        location?: string;
      
    }

    interface OClusterStatic {
        new():  OCluster;
        list(refresh?: boolean): Promise<any[]>;
        create(name: string, location?: string): Promise<OCluster> ;
        get(nameOrId: string, refresh?: boolean): Promise<OCluster> ;
        getByName(name: string, refresh?: boolean): Promise<OCluster>;
        getById(id: string, refresh?: boolean): Promise<OCluster> ;
        drop(name: string): Promise<ODB>;
        count(name: string): Promise<number>;
        range(name: string): Promise<any>;
        cacheData(clusters: OCluster[] & any[]): ODB;
    }

    /**
     * The sequence constructor.
     * @param config The configuration for the sequence
     */
    interface OSequence {
        db?: ODB;
        name?: string;
        type?: string;
        value?: number;
        incr?: number;
        start?: number;
        cache?: number;
       
    }

    interface OSequenceStatic {
        new(): OSequence;
         /**
         * Configure the sequence instance.
         * @param  config The configuration object.
         */

        /**
         * Retreive a list of sequences from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @promise {Object[]}       An array of class objects.
         */

        list(refresh: boolean): Promise<OSequence[]>;

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
        create(name: string, type: "ORDERED" | "CACHED", start?: number, incerement?: number, cache?: number): Promise<OSequence>;
        /**
         * update a  sequence.
         *
         * @param  name            The name of the sequence to create.
         * @param incerement The increment number.
         * @param cache The cache number
         * @param  start The start number.
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
         * @param  name The name of the sequence to delete.
         * @param  config The config.
         * @promise {Db}         The database instance.
         */
        drop(name: string, config?: {
        }): Promise<ODB>;
        /**
         * Get a sequence by name.
         *
         * @param   name The name of the sequence.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @promise {Object}          The sequence object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<OSequence>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  sequences The sequence objects to cache.
         * @return                The db instance.
         */
        cacheData(sequences: OSequence[]): ODB;
    }

    interface ORecordMeta {
        "@rid": ORecordID;
        "@version": ORecordVersion;
    }

    type ODocument<T> = T ;
    type BinaryRecord<T> = ORecord<T> & Buffer;

    interface ORecordBaseType {
       
    }

    type ORecordType = {
        '@rid': ORecordID;
        '@type': 'd' | 'b';
        '@class': string;
        '@version': ORecordVersion;
    }
    type ORecord<T=any>  = ODocument<T> & ORecordType;

    interface ORecordStatic {
        new(): ORecord;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @promise {Object}        The inserted record.
         */
        create<R>(record: ODocument<R> | ORecord<R> | BinaryRecord<R>, options?: any): Promise<ORecord<R>>;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @promise {Object}        The inserted record.
         */
        create<R>(records: ODocument<R>[] | ORecord<R>[] | BinaryRecord<R>[], options?: any): Promise<ORecord<R>[]>;

        /**
         * Read the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The loaded record.
         */
        get<R>(record: ORecord<R> | ORecordID, options?: any): Promise<ORecord<R> | Buffer>;
        /**
         * Read the given record.
         *
         * @param  records  The record to load.
         * @param  options The query options.
         * @promise {Object[]}        The loaded record.
         */
        get<R>(records: ORecord<R>[] | ORecordID[], options?: any): Promise<ORecord<R>[] | Buffer[]>;
        /**
         * Resolve all references within the given collection of records.
         *
         * @param  records  The records to resolve.
         * @return            The records with references replaced.
         */
        resolveReferences<R>(records: ORecord<R>[]): ORecord<R>[];

        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(record: ORecord | ORecordID | string, options?: any): Promise<ORecordMeta>;
        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @promise {Object}        The record object with loaded meta data.
         */
        meta(records: ORecord[] | ORecordID[], options?: any): Promise<ORecordMeta[]>;

        /**
         * Update the given record.
         *
         * @param  record  The record to update.
         * @param  options The query options.
         * @promise {Object}        The updated record.
         */
        update<R>(record?: ORecord<R> | ORecordID, options?: any): Promise<ORecord<R>>;

        delete<R>(): Promise<ORecord<R>>;
        /**
         * Delete the given record.
         *
         * @param   record  The record or record id to delete.
         * @param              options The query options.
         * @promise {Object}                    The deleted record object.
         */
        delete<R>(record: ORecord<R> | ORecordID, options?: any): Promise<ORecord<R>>;
    }
    interface IndexConfig {
        name: string;
        class?: string;
        ifnotexist?: boolean;
        properties?: string[];
        type: "UNIQUE" | "NOTUNIQUE" | "FULLTEXT" | "DICTIONARY" | "UNIQUE_HASH_INDEX" | "NOTUNIQUE_HASH_INDEX" | "FULLTEXT_HASH_INDEX" | "DICTIONARY_HASH_INDEX" | "SPATIAL";
        keyType?: string;
        metadata?: any;
        engine?: "LUCENE" | "COLA" | string;
    }

    interface OIndexEntry {
        key: string;
        value: string | ORecordID;
    }
    interface OIndex {
        cached: boolean;
        db: ODB;
        name: string;
        algorithm: string;
        clusters: OCluster[];
        type: string;
    }

    interface OIndexStatic {
        new(): OIndex;
        configure(config: any): void;
        add(idx: OIndexEntry | OIndexEntry[]): Promise<OIndex[]>;
        set(key: string, value: string | ORecordID): Promise<OIndex>;
        delete(name: string): Promise<OIndex>;
        list(refresh?: boolean): Promise<OIndex[]>;
        create(config: IndexConfig | IndexConfig[]): Promise<OIndex>;
        drop(name: string): Promise<ODB>;
        get(name: string, refresh?: boolean): Promise<OIndex>;
        cacheData(indices: any[]): Promise<ODB>;

    }
    type OSqlExpression = string | ORawExpression | OSqlFunction;
    interface OStatement<T> extends OQuery<T> {
        select(param?: string | string[]): OStatement<T>;
        traverse(param?: string | string[]): OStatement<T>;
        strategy(param?: string): OStatement<T>;
        insert(param?: string | string[]): OStatement<T>;
        update(param?: string | string[]): OStatement<T>;
        delete(param?: string | string[]): OStatement<T>;
        into(param?: string): OStatement<T>;
        create(paramtype?: string, paramname?: string): OStatement<T>;
        from(param?: string | any): OStatement<T>;
        to(param?: any): OStatement<T>;
        set(param?: any): OStatement<T>;
        content(param?: any): OStatement<T>;
        increment(property?: string, value?: any): OStatement<T>;
        add(property: string, value: any): OStatement<T>;
        remove(property: string, value: any): OStatement<T>;
        put(property: string, keysValues: any): OStatement<T>;
        upsert(condition?: any, params?: any, comparisonOperator?: string): OStatement<T>;
        where(params: any): OStatement<T>;
        while(param: any): OStatement<T>;
        containsText(param: any): OStatement<T>;
        and(param: any): OStatement<T>;
        or(param: any): OStatement<T>;
        group(param: any): OStatement<T>;
        order(param: any): OStatement<T>;
        skip(value: number): OStatement<T>;
        offset(value?: number): OStatement<T>;
        limit(value: number): OStatement<T>;
        fetch(param?: any): OStatement<T>;
        let(name: string, value: string | OStatement<T>): OStatement<T>;
        lock(param: any): OStatement<T>;

        if(condition: OSqlExpression, statements: OStatement<T>[]): OStatement<T>;
        if(condition: OSqlExpression, ...statements: OStatement<any>[]): OStatement<T>;
        rollback(param?: any): OStatement<T>;
        sleep(ms?: number): OStatement<T>;

        commit(retryLimit?: number): OStatement<T>;
        retry(retryLimit?: number): OStatement<T>;
        wait(waitLimit: number): OStatement<T>;
        return(value: OSqlExpression): OStatement<T>;
        lucene(property: string | any, luceneQuery: string): OStatement<T>;
        near(latitudeProperty: string | any, longitudeProperty: string | number,
             longitude: number, latitude?: number, maxDistanceInKms?: number): OStatement<T>;
        within(latitudeProperty: string, longitudeProperty: string, box: number[]): OStatement<T>;
        addParams(key: string, value: any): OStatement<T>;
        addParams(value: any): OStatement<T>;
        token(value: any): OStatement<T>;
        buildStatement(): string;
    }

    interface OStatementStatic{

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

    interface OQueryStatic{

        transform<T>(transformer: (item: ORecord) => T): OQuery<T>;
        column<T>(name: string): OQuery<T>;
        defaults<T>(defaults: any): OQuery<T>;
        one<T>(params?: any): Promise<T>;
        all<T>(params?: any): Promise<T[]>;
        scalar<T>(params?: any): Promise<T>;
        exec<T>(params?: any): Promise<T>;
    }
    interface OTransaction {
        db: ODB;
        id: number;

        commit<R>(): Promise<R>;
        create<T>(record: ORecord<T>): OTransaction;
        update<T>(record: ORecord<T>): OTransaction;
        delete<T>(record: ORecord<T>): OTransaction;
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
        transformers?: Array<((item: any) => any)>;
    }

    interface ORawExpression {
        db: ODB;
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
        db: ODB;
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

    interface ODB extends events.EventEmitter {
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

        class: OClassStatic;
        cluster: OClusterStatic;
        record: ORecordStatic;
        index: OIndexStatic;
        sequence: OSequenceStatic;
        /**
         * Configure the database instance.
         * @param  config The configuration for the database.
         * @return            The configured database object.
         */
        configure(config: DbConfig): ODB;
        /**
         * Initialize the database instance.
         */
        init(): void;
        /**
         * Open the database.
         *
         * @promise {Db} The open db instance.
         */
        open(): Promise<ODB>;

        /**
         * Send the given operation to the server, ensuring the
         * database is open first.
         *
         * @param  operation The operation to send.
         * @param  data       The data for the operation.
         * @promise {Mixed}            The result of the operation.
         */
        send<R>(operation: number, data: any): Promise<R>;
        /**
         * Reload the configuration for the database.
         *
         * @promise {Db}  The database with reloaded configuration.
         */
        reload(): Promise<ODB>;

        /**
         * Execute an SQL query against the database and retreive the raw, parsed response.
         *
         * @param   query   The query or command to execute.
         * @param   options The options for the query / command.
         * @promise {Mixed}          The results of the query / command.
         */
        exec<R>(query: string, options?: QueryOptions): Promise<R>;

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
        registerTransformer<T,R=T>(className: string, transformer: (item: T) => R): ODB;
        /**
         * Transform a document according to its `@class` property, using the registered transformers.
         * @param  document The document to transform.
         * @return           The transformed document.
         */
        transformDocument<T=any,R=T>(document: ODocument<T>): R;

        /**
         * Create a query instance for this database.
         *
         * @return The query instance.
         */
        createQuery<T>(): OStatement<T>;
        /**
         * Create a raw expression.
         *
         * @return The raw expression instance.
         */
        rawExpression(param: string): ORawExpression;

        /**
         * Create a sql Function.
         *
         * @param [options]
         * @returns
         */
        sqlFunction(options?: any): OSqlFunction;

        /**
         * Create a create query.
         *
         * @return The query instance.
         */
        create<T>(params?: any): OStatement<T>;
        create<T>(paramtype: string, paramname: string): OStatement<T>;
        /**
         * Create a select query.
         *
         * @return The query instance.
         */
        select<T,P>(params?: P): OStatement<T>;
        /**
         * Create a traverse query.
         *
         * @return The query instance.
         */
        traverse<T,P>(params?: P): OStatement<T>;
        /**
         * Create an insert query.
         *
         * @return The query instance.
         */
        insert<T,P>(params?: P): OStatement<T>;
        /**
         * Create an update query.
         *
         * @return The query instance.
         */
        update<T,P>(params?: P): OStatement<T>;
        /**
         * Create a delete query.
         *
         * @return The query instance.
         */
        delete<T,P>(params?: P): OStatement<T>;
        /**
         * Create a transactional query.
         *
         * @return The query instance.
         */
        let<T,P>(params?: P): OStatement<T>;
        let<T,P>(name: string, value: P | OStatement<P>): OStatement<T>;
        /**
         * Create a transactional query with if.
         *
         * @param condition
         * @param statements
         * @returns
         */
        if<T>(condition: OSqlExpression, statements: OStatement<any>[]): OStatement<T>;
       /**
        * Create a transactional query with if.
        *
        * @param condition
        * @param statements
        * @returns
        */
        if<T>(condition: OSqlExpression, ...statements: OStatement<any>[]): OStatement<T>;
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
    interface OServer {
        new(options?: ServerConfig): OServer;
        config: ServerConfiguration;
        logger: OLogger;

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
        configure(config: ServerConfig): OServer;
        /**
         * Configure the transport for the server.
         *
         * @param  config The server config.
         * @return        The configured server object.
         */
        configureTransport(config: any): OServer;
        /**
         * Configure the logger for the server.
         *
         * @param  config The logger config
         * @return        The server instance with the configured logger.
         */
        configureLogger(logger: OLogger): OServer;
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
        close(): OServer;
        /**
         * Use the database with the given name / config.
         *
         * @param  config The database name, or configuration object.
         * @return                   The database instance.
         */
        use(name: string | DbConfig): ODB;
        /**
         * Create a database with the given name / config.
         *
         * @param  config The database name or configuration object.
         * @promise {Db}                  The database instance
         */
        create(name: string | DbConfig): Promise<ODB>;
        /**
         * Destroy a database with the given name / config.
         *
         * @param   config The database name or configuration object.
         * @promise {Mixed}               The server response.
         */
        drop(name: string | DbConfig): Promise<ODB>;
        /**
         * List all the databases on the server.
         *
         * @return An array of databases.
         */
        list(): Promise<ODB[]>;
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

    interface OConnection {
    }

    namespace Topology {
        interface OServerNode extends events.EventEmitter {
            acquireConnection(): Promise<OConnection>;
            connect(): Promise<OServerNode>;
            close(): Promise<void>;
            acquireForSubscribe(): Promise<OConnection>;
            subscribeCluster(data?: any): Promise<OConnection>;
        }
        interface OClusterConfig {
            selectionStrategy(cluster: OCluster): OServerNode;
        }
        interface OCluster extends events.EventEmitter {
            servers: OServerNode[];
            constructor(config?: OClusterConfig)
            acquireFrom(selection: (cluster: OCluster) => OServerNode): Promise<OServerNode>;
            connect(): Promise<OServerNode>;

            close(): Promise<void>;
        }
    }

    interface ODatabase extends ODB {
        new(config?: {
            host: string,
            port?: number,
            username?: string,
            password?: string,
            name: string
        }): ODatabase;
    }

    interface BasePoolConfig {
        max?: number;
        min?: number;
    }

    interface BasePool<T> extends events.EventEmitter {
        new (config: BasePoolConfig, params?: any): BasePool<T>;
        acquire(): Promise<ODatabaseSession>;
        hasError(): boolean;
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

    interface ODatabaseSessionPool extends BasePool<ODatabasePoolFactory> {}
    interface OSessionManager {
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

    interface ODatabaseTransaction extends OTransaction {
        /**
         * Execute an SQL command against the database and retreive the results
         * @param   command    The command to execute.
         * @param   options  The options for the command
         * @return           The results of the command
         */
        command<R>(command: string, options?: any): OResult<R>;

        /**
         * Commit the transaction.
         * @return The results of the transaction.
         */
        commit<R>(changes?: any): Promise<R>;

        /**
         * Rollbacks the transaction.
         * @return The results of the rollback.
         */
        rollback(): Promise<void>;
    }

    interface ODatabaseSessionOptions {
        name: string;
        username?: string;
        password?: string;
    }

    interface ODatabaseSessionPoolOptions {
        name: string;
        username?: string;
        password?: string;
        pool?: { max?: number, min?: number };
    }
    interface ODatabaseSession extends ODatabase {
        new(client?: OrientDBClient, options?: ODatabaseSessionOptions): ODatabaseSession;

        pool: ODatabaseSessionPool;
        sessionManager: OSessionManager;
        /**
         * Get the current transaction
         * @returns The new transaction
         */
        tx(): ODatabaseTransaction;

        /**
         * Begin a transaction in this database session. ODatabaseSession supports only 1 transaction at time.
         * Use multiple sessions if you want to run concurrent transactions.
         * @returns {ODatabaseTransaction} The new transaction
         */
        begin(): ODatabaseTransaction;

        /**
         * Execute an SQL batch script against the database and retreive the results
         * @param   batch                    The SQL batch to execute.
         * @param   {Object} [options]                The options for the batch SQL
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Batch parameters
         * @return           The results of the batch script
         */
        batch<R>(batch: string, options?: { pageSize?: number, params?: any }): OResult<R>;

        /**
         * Commit the transaction.
         * @param   changes
         * @returns The results of the transaction.
         */
        commit(changes: any): Promise<any>;

        /**
         * Execute an SQL command against the database and retreive the results
         * @param   command    The command to execute.
         * @param   {Object} [options]                The options for the command
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Command parameters
         * @return            The results of the command
         */
        command<R>(command: string, options?: { pageSize?: number, params?: any }): OResult<R>;

        /**
         * Execute an SQL query against the database and retreive the results
         * @param   query                    The query to execute.
         * @param   {Object} [options]                The options for the query
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Query parameters
         * @returns                         The results of the query
         */
        query<R>(query: string, options?: { pageSize?: number, params?: any }): OResult<R>;

        /**
         * Execute a custom language script against the database and retreive the results
         *
         * @param   language                 The scripting language
         * @param   script                   The script to execute.
         * @param   {Object} [options]                The options for the script
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Script parameters
         * @return                          The results of the script
         */
        execute<R>(language: string, script: string, options?: { pageSize?: number, params?: any }): OResult<R>;

        /**
         * Execute an SQL Live query against the database and retreive the results
         *
         * @param    query    The query to execute.
         * @param    options  The options for the batch script
         * @returns        The live query object
         */
        liveQuery(query: string, options?: any): OLiveQuery;

        /**
         * Close the database session. If the session is pooled, the instance is returned to the pool,
         * leaving the session open on the server.
         * Otherwhise the session is closed permanently on the server.
         *
         * @returns
         */
        close(): Promise<void>;

        /**
         * Execute a unit of work in a transaction
         *
         * @param   txWork           Transactional work
         * @param   [times]                  Number of retry in case of some failures. (MVVC errors)
         * @return                          The results of transaction
         */
        runInTransaction(txWork: any, times?: number): Promise<any>;
    }

    interface OResult<R> extends Readable {
        constructor(db: ODatabase, pageSize: number);
        /**
         *
         * @return
         */
        all(): Promise<R[]>;

        one(): Promise<R>;
        close(): Promise<void>;
    }

    interface OLiveQuery extends Readable {
        unsubscribe(): Promise<any>;
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

        logger?: OLogger;
    }

    interface OServerOptions {
        username: string;
        password: string;
    }

    interface ODatabaseOptions {
        username?: string;
        password?: string;
        name: string;
        type?: "graph" | "document";
        storage?: "plocal" | "memory";
    }

    interface ODropDatabaseOptions {
        username?: string;
        password?: string;
        options?: ODatabaseOptions;
    }

    interface ODatabaseType {
        name: string;
    }

    interface OrientDBClient extends events.EventEmitter {
       
        new (options?: OrientDBClientConfig): OrientDBClient;
        connect(): Promise<OrientDBClient>;

        session(options?: ODatabaseSessionOptions): Promise<ODatabaseSession>;

        sessions(options?: ODatabaseSessionPoolOptions): Promise<ODatabaseSessionPool>;
        migrator(config?: Migration.OMigrationManagerConfig): Migration.OMigrationManager;
        createDatabase(options?: ODatabaseOptions): Promise<void>;
        dropDatabase(options?: ODropDatabaseOptions): Promise<void>;

        existsDatabase(options?: ODatabaseOptions): Promise<boolean>;

        listDatabases(options?: OServerOptions): Promise<ODatabaseType[]>;

        close(): Promise<void>;
    }

    interface OrientDBClientStatic {
        new(): OrientDBClient;
        connect(options?: OrientDBClientConfig): Promise<OrientDBClient>;
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

    const OrientDBClient :OrientDBClientStatic;
    const Server :OServer;
    const RecordID :ORecordIDStatic;
    const Statement :OStatementStatic;
    const Query : OQueryStatic;
    const ODatabase :ODatabase;
    const Pool :ODatabaseSessionPool;
    const Db : ODB;
}

/**
 * A lightweight definiton for orientjs module, Official node.js driver for OrientDB.
 *
 * @param {orientjs.ServerConfig} config
 * @returns {orientjs.OServer}
 */
declare function orientjs(config: orientjs.ServerConfig): orientjs.OServer;

export = orientjs;

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

