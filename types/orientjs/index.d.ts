/// <reference types="node" />

// tslint:disable:no-redundant-jsdoc-2
import events = require("events");
import { Readable } from "stream";

declare namespace orientjs {
    type Version = number | string;
    type PropertyType =
        | "Boolean"
        | "Integer"
        | "Short"
        | "Long"
        | "Float"
        | "Double"
        | "DateTime"
        | "String"
        | "Binary"
        | "Embedded"
        | "EmbeddedList"
        | "EmbeddedSet"
        | "EmbeddedMap"
        | "Link"
        | "LinkList"
        | "LinkSet"
        | "LinkMap"
        | "Byte"
        | "Transient"
        | "Date"
        | "Custom"
        | "Decimal"
        | "LinkBag";
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
        Any = 23,
    }

    namespace Errors {
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
            name?: string | undefined;
            db?: ODB | undefined;
            dir?: string | undefined;
            className?: string | undefined;
        }
        class Manager extends MigrationManager {
            constructor(config: MigrationManagerConfig);
        }
        class Migration {
            name: string;
            server: OServer;
            db: ODB;

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
            server: OServer;
            db: ODB;
            dir: string;
            className: string;

            /**
             * Create a new migration.
             *
             * @param   config  The name or configuration for the new migration.
             * @return                The full path to the created migration.
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
             * @return An array of migration names
             */
            list(): Promise<string[]>;
            /**
             * List all the available migrations.
             *
             * @return The names of the available migrations.
             */
            listAvailable(): Promise<string[]>;
            /**
             * Ensure the migration class exists.
             *
             * @return  The manager instance with intact structure.
             */
            ensureStructure: Promise<MigrationManager>;
            /**
             * Retrieve a list of applied migrations.
             *
             * @return The applied migrations.
             */
            listApplied(): Promise<any[]>;
            /**
             * Perform the migration.
             *
             * @param   limit The maximum number of migrations to apply, if any.
             * @return The result of the migration.
             */
            up(limit?: number): Promise<any>;
            /**
             * Revert the migration.
             *
             * @param   limit The maximum number of migrations to revert, if any.
             * @return The result of the migration.
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
             * @return The result of the migration.
             */
            applyMigration(name: string): Promise<any>;
            /**
             * Revert the migration with the given name.
             *
             * @param   name The name of the migation.
             * @return The result of the migration.
             */
            revertMigration(name: string): Promise<any>;
        }
    }

    interface OLogger {
        error(...args: any[]): void;
        log(...args: any[]): void;
        debug(...args: any[]): void;
    }

    class ORID extends String {
        cluster?: number | undefined;
        position?: number | undefined;

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
         * @param  key The name of the field to get.
         * @return      The field value, or undefined if it doesn't exist.
         */
        get(key: string): CustomField;
        /**
         * Set a custom field.
         *
         * @param   key   The key to set, or map of keys to values.
         * @param          value The value to set, if `key` is not an object.
         * @return         The new set of custom fields, or null if none are present.
         */
        set(key: string, value: any): CustomField;
        /**
         * Unset the custom field with the given name,
         *
         * @param        key The name of the custom field to remove.
         * @return     The new set of custom fields, or null if none are present.
         */
        unset(key: string): CustomField;
    }

    interface PropertyCreateConfig {
        name: string;
        type: PropertyType;
        default?: any;
        ifnotexist?: boolean | undefined;
        unsafe?: boolean | undefined;
        mandatory?: boolean | undefined;
        readonly?: boolean | undefined;
        notNull?: boolean | undefined;
        collate?: string | undefined;
        linkedClass?: string | undefined;
        linkedType?: string | undefined;
        regexp?: RegExp | string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        custom?: {
            fields?: CustomField[] | undefined;
        } | undefined;
    }

    interface PropertyUpdateConfig {
        name: string;
        type: PropertyType;
        default?: any;
        mandatory?: boolean | undefined;
        readonly?: boolean | undefined;
        notNull?: boolean | undefined;
        collate?: string | undefined;
        linkedClass?: string | undefined;
        linkedType?: string | undefined;
        regexp?: RegExp | string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        custom?: {
            fields?: CustomField[] | undefined;
        } | undefined;
    }

    class OClassProperty {
        class?: OClass | undefined;
        name?: string | undefined;
        originalName?: string | undefined;
        type?: PropertyType | undefined;
        mandatory?: boolean | undefined;
        readonly?: boolean | undefined;
        notNull?: boolean | undefined;
        collate?: string | undefined;
        linkedClass?: string | undefined;
        linkedType?: PropertyType | undefined;
        regexp?: RegExp | string | undefined;
        min?: number | undefined;
        max?: number | undefined;
        custom?: {
            fields?: CustomField[] | undefined;
        } | undefined;

        reload(): Promise<OClassProperty>;
        list(): Promise<OClassProperty[]>;
        /**
         * Create a new property.
         *
         * @param  config The property name or configuration.
         * @param   reload      Whether to reload the property, default to true.
         * @return              The created property.
         */
        create(config?: PropertyCreateConfig | string, reload?: boolean): Promise<OClassProperty>;
        create(config: PropertyCreateConfig[], reload?: boolean): Promise<OClassProperty[]>;
        /**
         * Get the property with the given name.
         *
         * @param   name   The property to get.
         * @return   The retrieved property.
         */
        get(name: string): Promise<OClassProperty>;
        /**
         * Update the given property.
         *
         * @param    property The property settings.
         * @param   reload   Whether to reload the property, default to true.
         * @return           The updated property.
         */
        update(config: PropertyUpdateConfig, reload?: boolean): Promise<OClassProperty>;
        drop(name: string, config?: {
            ifexist?: boolean | undefined;
            force?: boolean | undefined;
        }): Promise<OClass>;
        alter(name: string, setting?: any): Promise<OClass>;
        rename(oldName: string, newName?: string): Promise<OClassProperty>;
    }

    /**
     * The class constructor.
     * @param config The configuration for the class
     */
    class OClass {
        db?: ODB | undefined;
        name?: string | undefined;
        shortName?: string | undefined;
        defaultClusterId?: any;
        superClass?: string | undefined;
        originalName?: string | undefined;
        clusterIds?: number[] | undefined;
        /**
         * Configure the class instance.
         * @param  config The configuration object.
         */

        /**
         * Retreive a list of classes from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @return       An array of class objects.
         */
        list(limit: number | boolean | any, offset?: number): Promise<OClass[]>;
        /**
         * Find a list of records in the class.
         *
         * @param   attributes The attributes to search with.
         * @param  limit      The maximum number of records to return
         * @param  offset     The offset to start returning records from.
         * @return          An array of records in the class.
         */
        find(attributes: any, limit?: number, offset?: number): Promise<ORecord[]>;
        /**
         * Create a record for this class.
         *
         * @param   record The record to create.
         * @return        The created record.
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
         * @return                The created class object
         */
        create(
            name: string,
            parentName?: string,
            cluster?: string,
            isAbstract?: boolean,
            ifnotexist?: boolean,
        ): Promise<OClass>;
        /**
         * Update the given class.
         *
         * @param    class    The class settings.
         * @param   reload   Whether to reload the class, default to true.
         * @return           The updated class.
         */
        update(cls: any, reload: boolean): Promise<OClass>;
        /**
         * Reload the class instance.
         *
         * @return The class instance.
         */
        reload(): Promise<OClass[]>;
        /**
         * Delete a class.
         *
         * @param  name The name of the class to delete.
         * @param  config The config.
         * @return         The database instance.
         */
        drop(name: string, config?: {
            ifexist?: boolean | undefined;
            force?: boolean | undefined;
        }): Promise<ODB>;
        /**
         * Get a class by name.
         *
         * @param   name The name of the class.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @return          The class object if it exists.
         */
        get(name: string, refresh?: boolean): Promise<OClass>;
        /**
         * Cache the given class data for fast lookup later.
         *
         * @param  classes The class objects to cache.
         * @return                The db instance.
         */
        cacheData(classes: OClass[]): ODB;
        property: OClassProperty;
    }

    class OCluster {
        name?: string | undefined;
        location?: string | undefined;
        list(refresh?: boolean): Promise<any[]>;
        create(name: string, location?: string): Promise<OCluster> & Promise<any>;
        get(nameOrId: string, refresh?: boolean): Promise<OCluster> & Promise<any>;
        getByName(name: string, refresh?: boolean): Promise<OCluster> & Promise<any>;
        getById(id: string, refresh?: boolean): Promise<OCluster> & Promise<any>;
        drop(name: string): Promise<ODB>;
        count(name: string): Promise<number>;
        range(name: string): Promise<any>;
        cacheData(clusters: OCluster[] & any[]): ODB;
    }

    /**
     * The sequence constructor.
     * @param config The configuration for the sequence
     */
    class OSequence {
        db?: ODB | undefined;
        name?: string | undefined;
        type?: string | undefined;
        value?: number | undefined;
        incr?: number | undefined;
        start?: number | undefined;
        cache?: number | undefined;
        /**
         * Configure the sequence instance.
         * @param  config The configuration object.
         */

        /**
         * Retreive a list of sequences from the database.
         *
         * @param  refresh Whether to refresh the list or not.
         * @return       An array of class objects.
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
         * @return                The created sequence object
         */
        create(
            name: string,
            type: "ORDERED" | "CACHED",
            start?: number,
            incerement?: number,
            cache?: number,
        ): Promise<OSequence>;
        /**
         * update a  sequence.
         *
         * @param  name            The name of the sequence to create.
         * @param incerement The increment number.
         * @param cache The cache number
         * @param  start The start number.
         * @return The created sequence object
         */
        update(name: string, start?: number, incerement?: number, cache?: number): Promise<OSequence>;
        /**
         * Reload the sequence instance.
         *
         * @return The class instance.
         */
        reload(): Promise<OSequence[]>;
        /**
         * Delete a sequence.
         *
         * @param  name The name of the sequence to delete.
         * @param  config The config.
         * @return         The database instance.
         */
        drop(name: string, config?: {}): Promise<ODB>;
        /**
         * Get a sequence by name.
         *
         * @param   name The name of the sequence.
         * @param   refresh Whether to refresh the data, defaults to false.
         * @return          The sequence object if it exists.
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

    interface RecordMeta {
        "@rid": ORID;
        "@version": Version;
    }

    type ODocument = ORecord;
    type BinaryRecord = ORecord & Buffer;
    class ORecord extends Object {
        "@rid"?: ORID | undefined;
        "@type"?: "d" | "b" | undefined;
        "@class"?: string | undefined;
        "@version"?: Version | undefined;
        rid?: ORID | undefined;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @return        The inserted record.
         */
        create(record: ODocument | ORecord | BinaryRecord, options?: any): Promise<ORecord>;
        /**
         * Insert the given record into the database.
         *
         * @param  record  The record to insert.
         * @param  options The command options.
         * @return        The inserted record.
         */
        create(records: ODocument[] | ORecord[] | BinaryRecord[], options?: any): Promise<ORecord[]>;

        /**
         * Read the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @return        The loaded record.
         */
        get(record: ORecord | ORID, options?: any): Promise<ORecord | Buffer>;
        /**
         * Read the given record.
         *
         * @param  records  The record to load.
         * @param  options The query options.
         * @return        The loaded record.
         */
        get(records: ORecord[] | ORID[], options?: any): Promise<ORecord[] | Buffer[]>;
        /**
         * Resolve all references within the given collection of records.
         *
         * @param  records  The records to resolve.
         * @return            The records with references replaced.
         */
        resolveReferences(records: ORecord[]): ORecord[];

        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @return        The record object with loaded meta data.
         */
        meta(record: ORecord | ORID | string, options?: any): Promise<RecordMeta>;
        /**
         * Read the metadata for the given record.
         *
         * @param  record  The record to load.
         * @param  options The query options.
         * @return        The record object with loaded meta data.
         */
        meta(records: ORecord[] | ORID[], options?: any): Promise<RecordMeta[]>;

        /**
         * Update the given record.
         *
         * @param  record  The record to update.
         * @param  options The query options.
         * @return        The updated record.
         */
        update(record?: ORecord | ORID, options?: any): Promise<ORecord>;

        delete(): Promise<ORecord> & Promise<ORecord>;
        /**
         * Delete the given record.
         *
         * @param   record  The record or record id to delete.
         * @param              options The query options.
         * @return                    The deleted record object.
         */
        delete(record: ORecord | ORID, options?: any): Promise<ORecord>;
    }
    interface IndexConfig {
        name: string;
        class?: string | undefined;
        ifnotexist?: boolean | undefined;
        properties?: string[] | undefined;
        type:
            | "UNIQUE"
            | "NOTUNIQUE"
            | "FULLTEXT"
            | "DICTIONARY"
            | "UNIQUE_HASH_INDEX"
            | "NOTUNIQUE_HASH_INDEX"
            | "FULLTEXT_HASH_INDEX"
            | "DICTIONARY_HASH_INDEX"
            | "SPATIAL";
        keyType?: string | undefined;
        metadata?: any;
        engine?: "LUCENE" | "COLA" | string | undefined;
    }

    interface OIndexEntry {
        key: string;
        value: string | ORID;
    }
    interface OIndex {
        cached: boolean;
        db: ODB;
        name: string;
        algorithm: string;
        clusters: OCluster[];
        type: string;
        configure(config: any): void;
        add(idx: OIndexEntry | OIndexEntry[]): Promise<OIndex[]>;
        set(key: string, value: string | ORID): Promise<OIndex>;
        delete(name: string): Promise<OIndex>;
        select(): OStatement;
        list(refresh?: boolean): Promise<OIndex[]>;
        create(config: IndexConfig | IndexConfig[]): Promise<OIndex>;
        drop(name: string): Promise<ODB>;
        get(name: string, refresh?: boolean): Promise<OIndex>;
        cacheData(indices: any[]): Promise<ODB>;
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
        near(
            latitudeProperty: string | any,
            longitudeProperty: string | number,
            longitude: number,
            latitude?: number,
            maxDistanceInKms?: number,
        ): OStatement;
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
        db: ODB;
        id: number;

        commit(): Promise<any>;
        create(record: ORecord): OTransaction;
        update(record: ORecord): OTransaction;
        delete(record: ORecord): OTransaction;
    }

    interface DbConnectionConfig {
        useToken?: boolean | undefined;
        name?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        sessionId?: number | undefined;
        forcePrepare?: boolean | undefined;
        server?: OServer | undefined;
        type?: string | undefined;
        storage?: string | undefined;
        token?: any;
        transformers?: Array<((item: ORecord) => any)> | undefined;
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
        mode?: "s" | "a" | "l" | undefined;
        fetchPlan?: any;
        limit?: number | undefined;
        token?: any;
        class?: string | undefined;
        language?: "SQL" | "Javascript" | undefined;
    }

    class ODB extends events.EventEmitter {
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
        cluster: OCluster;
        record: ORecord;
        index: OIndex;
        sequence: OSequence;
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
         * @return The open db instance.
         */
        open(): Promise<ODB>;

        /**
         * Send the given operation to the server, ensuring the
         * database is open first.
         *
         * @param  operation The operation to send.
         * @param  data       The data for the operation.
         * @return            The result of the operation.
         */
        send<R>(operation: number, data: any): Promise<R>;
        /**
         * Reload the configuration for the database.
         *
         * @return  The database with reloaded configuration.
         */
        reload(): Promise<ODB>;

        /**
         * Execute an SQL query against the database and retreive the raw, parsed response.
         *
         * @param   query   The query or command to execute.
         * @param   options The options for the query / command.
         * @return          The results of the query / command.
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
        registerTransformer<T>(className: string, transformer: (item: ORecord) => T): ODB;
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
        createQuery(): OStatement;
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
        create(params?: any): OStatement;
        create(paramtype: string, paramname: string): OStatement;
        /**
         * Create a select query.
         *
         * @return The query instance.
         */
        select(params?: any): OStatement;
        /**
         * Create a traverse query.
         *
         * @return The query instance.
         */
        traverse(params?: any): OStatement;
        /**
         * Create an insert query.
         *
         * @return The query instance.
         */
        insert(params?: any): OStatement;
        /**
         * Create an update query.
         *
         * @return The query instance.
         */
        update(params?: any): OStatement;
        /**
         * Create a delete query.
         *
         * @return The query instance.
         */
        delete(params?: any): OStatement;
        /**
         * Create a transactional query.
         *
         * @return The query instance.
         */
        let(params?: any): OStatement;
        let(name: string, value: string | OStatement): OStatement;
        /**
         * Create a transactional query with if.
         *
         * @param condition
         * @param statements
         * @returns
         */
        if(condition: OSqlExpression, statements: OStatement[]): OStatement;
        /**
         * Create a transactional query with if.
         *
         * @param condition
         * @param statements
         * @returns
         */
        if(condition: OSqlExpression, ...statements: OStatement[]): OStatement;
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
         * @return           The results of the query / command.
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
    class OServer {
        constructor(options?: ServerConfig);
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
         * @return            The result of the operation.
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
         * @return                  The database instance
         */
        create(name: string | DbConfig): Promise<ODB>;
        /**
         * Destroy a database with the given name / config.
         *
         * @param   config The database name or configuration object.
         * @return               The server response.
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
         * @return            true if the database exists.
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

    class OConnection {
    }

    namespace Topology {
        class OServerNode extends events.EventEmitter {
            acquireConnection(): Promise<OConnection>;
            connect(): Promise<OServerNode>;
            close(): Promise<void>;
            acquireForSubscribe(): Promise<OConnection>;
            subscribeCluster(data?: any): Promise<OConnection>;
        }
        interface OClusterConfig {
            selectionStrategy(cluster: OCluster): OServerNode;
        }
        class OCluster extends events.EventEmitter {
            servers: OServerNode[];
            constructor(config?: OClusterConfig);
            acquireFrom(selection: (cluster: OCluster) => OServerNode): Promise<OServerNode>;
            connect(): Promise<OServerNode>;

            close(): Promise<void>;
        }
    }

    class ODatabase extends ODB {
        constructor(config?: {
            host: string;
            port?: number | undefined;
            username?: string | undefined;
            password?: string | undefined;
            name: string;
        });
    }

    interface BasePoolConfig {
        max?: number | undefined;
        min?: number | undefined;
    }

    class BasePool<T> extends events.EventEmitter {
        constructor(config: BasePoolConfig, params?: any);
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

    class ODatabaseSessionPool extends BasePool<ODatabasePoolFactory> {}
    class OSessionManager {
        client: any;
        config: any;

        name: string;
        type: "document" | "graph";
        storage: "plocal" | "memory";
        username: string;
        password: string;
        pushNotification?: boolean | undefined;
        currentSession?: ODatabaseSession | null | undefined;
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
         * @param   command    The command to execute.
         * @param   options  The options for the command
         * @return           The results of the command
         */
        command<R>(command: string, options?: any): OResult<R>;

        /**
         * Commit the transaction.
         * @return The results of the transaction.
         */
        commit(changes: any): Promise<any>;

        /**
         * Rollbacks the transaction.
         * @return The results of the rollback.
         */
        rollback(): Promise<void>;
    }

    interface ODatabaseSessionOptions {
        name: string;
        username?: string | undefined;
        password?: string | undefined;
    }

    interface ODatabaseSessionPoolOptions {
        name: string;
        username?: string | undefined;
        password?: string | undefined;
        pool?: { max?: number | undefined; min?: number | undefined } | undefined;
    }
    class ODatabaseSession extends ODatabase {
        constructor(client?: OrientDBClient, options?: ODatabaseSessionOptions);

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
        batch<R>(batch: string, options?: { pageSize?: number | undefined; params?: any }): OResult<R>;

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
        command<R>(command: string, options?: { pageSize?: number | undefined; params?: any }): OResult<R>;

        /**
         * Execute an SQL query against the database and retreive the results
         * @param   query                    The query to execute.
         * @param   {Object} [options]                The options for the query
         * @param   {Number} [options.pageSize]       Page size of the streamed result set
         * @param   {Object|Array} [options.params]   Query parameters
         * @returns                         The results of the query
         */
        query<R>(query: string, options?: { pageSize?: number | undefined; params?: any }): OResult<R>;

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
        execute<R>(
            language: string,
            script: string,
            options?: { pageSize?: number | undefined; params?: any },
        ): OResult<R>;

        /**
         * Execute an SQL Live query against the database and retreive the results
         *
         * @param    query    The query to execute.
         * @param    options  The options for the batch script
         * @returns        The live query object
         */
        liveQuery(query: string, options?: any): LiveQuery;

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

    class OResult<R> extends Readable {
        constructor(db: ODatabase, pageSize: number);
        /**
         * @return
         */
        all(): Promise<R[]>;

        one(): Promise<R>;
        close(): Promise<void>;
    }

    class LiveQuery extends Readable {
        unsubscribe(): Promise<any>;
    }
    interface OServerConfig {
        host?: string | undefined;
        port?: number | undefined;
    }
    interface OrientDBClientConfig {
        host?: string | undefined;
        port?: number | undefined;

        servers?: OServerConfig[] | undefined;
        pool?: { max?: number | undefined; min?: number | undefined } | undefined;

        subscribePool?: { max?: number | undefined } | undefined;

        logger?: any;
    }

    interface ServerOptions {
        username: string;
        password: string;
    }

    interface DatabaseOptions {
        username?: string | undefined;
        password?: string | undefined;
        name: string;
        type?: "graph" | "document" | undefined;
        storage?: "plocal" | "memory" | undefined;
    }

    interface DropDatabaseOptions {
        username?: string | undefined;
        password?: string | undefined;
        options?: DatabaseOptions | undefined;
    }

    class OrientDBClient extends events.EventEmitter {
        static connect(options?: OrientDBClientConfig): Promise<OrientDBClient>;
        constructor(options?: OrientDBClientConfig);
        connect(): Promise<OrientDBClient>;

        session(options?: ODatabaseSessionOptions): Promise<ODatabaseSession>;

        sessions(options?: ODatabaseSessionPoolOptions): Promise<ODatabaseSessionPool>;
        migrator(config?: Migration.MigrationManagerConfig): Migration.MigrationManager;
        createDatabase(options?: DatabaseOptions): Promise<void>;
        dropDatabase(options?: DropDatabaseOptions): Promise<void>;

        existsDatabase(options?: DatabaseOptions): Promise<boolean>;

        listDatabases(options?: ServerOptions): Promise<any[]>;

        close(): Promise<void>;
    }

    interface ServerConfig {
        useToken?: boolean | undefined;
        host: string;
        port?: number | undefined;
        username?: string | undefined;
        password?: string | undefined;
        servers?: ServerConfig[] | undefined;
    }

    interface DbConfig {
        name: string;
        type?: string | undefined;
        storage?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
    }
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
