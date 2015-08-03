// Type definitions for Sequelize 2.0.0 dev13
// Project: http://sequelizejs.com
// Definitions by: samuelneff <https://github.com/samuelneff>, Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Based on original work by: samuelneff <https://github.com/samuelneff/sequelize-auto-ts/blob/master/lib/sequelize.d.ts>

/// <reference path="../node/node.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />

declare module "sequelize"
{
    module sequelize {
        interface SequelizeStaticAndInstance {

            /**
             * A reference to sequelize utilities. Most users will not need to use these utils directly. However, you might want
             * to use Sequelize.Utils._, which is a reference to the lodash library, if you don't already have it imported in
             * your project.
             */
            Utils: Utils;

            /**
             * A modified version of bluebird promises, that allows listening for sql events.
             *
             * @see Promise
             */
            Promise: Promise;

            /**
             * Exposes the validator.js object, so you can extend it with custom validation functions. The validator is exposed
             * both on the instance, and on the constructor.
             *
             * @see Validator
             */
            Validator: Validator;

            QueryTypes: QueryTypes;

            /**
             * A general error class.
             */
            Error: Error;

            /**
             * Emitted when a validation fails.
             *
             * @see ValidationError
             */
            ValidationError: ValidationError;

            /**
             * Creates a object representing a database function. This can be used in search queries, both in where and order
             * parts, and as default values in column definitions. If you want to refer to columns in your function, you should
             * use sequelize.col, so that the columns are properly interpreted as columns and not a strings.
             *
             * @param fn The function you want to call.
             * @param args All further arguments will be passed as arguments to the function.
             */
            fn(fn: string, ...args: Array<any>): any;

            /**
             * Creates a object representing a column in the DB. This is often useful in conjunction with sequelize.fn, since
             * raw string arguments to fn will be escaped.
             *
             * @param col The name of the column
             */
            col(col: string): Col;

            /**
             * Creates a object representing a call to the cast function.
             *
             * @param val The value to cast.
             * @param type The type to cast it to.
             */
            cast(val: any, type: string): Cast;

            /**
             * Creates a object representing a literal, i.e. something that will not be escaped.
             *
             * @param val Value to convert to a literal.
             */
            literal(val: any): Literal;

            /**
             * An AND query.
             *
             * @param args Each argument (string or object) will be joined by AND.
             */
            and(...args: Array<any>): And;

            /**
             * An OR query.
             *
             * @param args Each argument (string or object) will be joined by OR.
             */
            or(...args: Array<any>): Or;

            /**
             * A way of specifying attr = condition. Mostly used internally.
             *
             * @param attr          The attribute
             * @param condition     The condition. Can be both a simply type, or a further condition (.or, .and, .literal etc.)
             */
            where(attr: string, condition: any): Where;
        }

        interface SequelizeStatic extends SequelizeStaticAndInstance, DataTypes {
            /**
             * Instantiate sequelize with name of database and username
             * @param database database name
             * @param username user name
             */
            new (database: string, username: string): Sequelize;

            /**
             * Instantiate sequelize with name of database, username and password
             * @param database database name
             * @param username user name
             * @param password password
             */
            new (database: string, username: string, password: string): Sequelize;

            /**
             * Instantiate sequelize with name of database, username, password, and options.
             * @param database database name
             * @param username user name
             * @param password password
             * @param options options. @see Options
             */
            new (database: string, username: string, password: string, options: Options): Sequelize;

            /**
             * Instantiate sequelize with name of database, username, and options.
             *
             * @param database database name
             * @param username user name
             * @param options options. @see Options
             */
            new (database: string, username: string, options: Options): Sequelize;

            /**
             * Instantiate sequlize with an URI
             * @param connectionString A full database URI
             * @param options Options for sequelize. @see Options
             */
            new (connectionString: string, options?: Options): Sequelize;
        }

        interface Sequelize extends SequelizeStaticAndInstance {
            /**
             * Sequelize configuration (undocumented).
             */
            config: Config;

            /**
             * Sequelize options (undocumented).
             */
            options: Options;

            /**
             * Models are stored here under the name given to sequelize.define
             */
            models: any;
            modelManager: ModelManager;
            daoFactoryManager: ModelManager;
            transactionManager: TransactionManager;
            importCache: any;

            /**
             * A reference to the sequelize transaction class. Use this to access isolationLevels when creating a transaction.
             *
             * @see Transaction
             */
            Transaction: TransactionStatic;

            /**
             * Returns the specified dialect.
             */
            getDialect(): string;

            /**
             * Returns the singleton instance of QueryInterface.
             */
            getQueryInterface(): QueryInterface;

            /**
             * Returns the singleton instance of Migrator.
             * @param options Migration options
             * @param force A flag that defines if the migrator should get instantiated or not.
             */
            getMigrator(options?: MigratorOptions, force?: boolean): Migrator;

            /**
             * Define a new model, representing a table in the DB.
             *
             * @param daoName The name of the entity (table). Typically specified in singular form.
             * @param attributes A hash of attributes to define. Each attribute can be either a string name for the attribute
             *                   or can be an object defining the attribute and its options. Note attributes is not fully
             *                   typed since TypeScript does not support union types--it can be either a string or an
             *                   options object. @see AttributeOptions.
             * @param options Table options. @see DefineOptions.
             */
            define<TInstance, TPojo>(daoName: string, attributes: any, options?: DefineOptions): Model<TInstance, TPojo>;

            /**
             * Fetch a DAO factory which is already defined.
             *
             * @param daoName The name of a model defined with Sequelize.define.
             */
            model<TInstance, TPojo>(daoName: string): Model<TInstance, TPojo>;

            /**
             * Checks whether a model with the given name is defined.
             *
             * @param daoName The name of a model defined with Sequelize.define.
             */
            isDefined(daoName: string): boolean;

            /**
             * Imports a model defined in another file.
             *
             * @param path  The path to the file that holds the model you want to import. If the part is relative, it will be
             *              resolved relatively to the calling file
             */
            import<TInstance, TPojo>(path: string): Model<TInstance, TPojo>;

            /**
             * Execute a query on the DB, with the possibility to bypass all the sequelize goodness.
             *
             * @param sql           SQL statement to execute.
             *
             * @param callee        If callee is provided, the selected data will be used to build an instance of the DAO represented
             *                      by the factory. Equivalent to calling Model.build with the values provided by the query.
             *
             * @param options       Query options.
             *
             * @param replacements  Either an object of named parameter replacements in the format :param or an array of
             *                      unnamed replacements to replace ? in your SQL.
             */
            query(sql: string, callee?: Model<any, any>, options?: QueryOptions, replacements?: any): EventEmitter;

            query<TInstance, TPojo>(sql: string, callee?: Model<TInstance, TPojo>, options?: QueryOptions): EventEmitterT<Model<TInstance, TPojo>>;

            /**
             * Create a new database schema.
             *
             * @param schema Name of the schema.
             */
            createSchema(schema: string): EventEmitter;

            /**
             * Show all defined schemas.
             */
            showAllSchemas(): EventEmitter;

            /**
             * Drop a single schema.
             *
             * @param schema Name of the schema.
             */
            dropSchema(schema: string): EventEmitter;

            /**
             * Drop all schemas.
             */
            dropAllSchemas(): EventEmitter;

            /**
             * Sync all defined DAOs to the DB.
             *
             * @param options Options.
             */
            sync(options?: SyncOptions): EventEmitter;

            /**
             * Drop all tables defined through this sequelize instance. This is done by calling Model.drop on each model.
             *
             * @param options The options passed to each call to Model.drop.
             */
            drop(options: DropOptions): EventEmitter;

            /**
             * Test the connection by trying to authenticate. Alias for 'validate'.
             */
            authenticate(): EventEmitter;

            /**
             * Alias for authenticate(). Test the connection by trying to authenticate. Alias for 'validate'.
             */
            validate(): EventEmitter;

            /**
             * !! DEPRECATED : When passing a callback to a transaction a promise chain is expected in return, 
             * the transaction will be committed or rejected based on the promise chain returned to the callback. 
             * 
             * Start a transaction. When using transactions, you should pass the transaction in the options argument in order
             * for the query to happen under that transaction.
             *
             * @param callback  Called when the transaction has been set up and is ready for use. Callback takes transaction
             *                  argument (overload available for error and transaction arguments too).
             */
            transaction(callback: (transaction: Transaction) => boolean): Promise;

            /**
             * Start a transaction. When using transactions, you should pass the transaction in the options argument in order
             * for the query to happen under that transaction.
             *
             * @param options   Transaction options.
             * @param callback  Called when the transaction has been set up and is ready for use. Callback takes transaction
             *                  argument (overload available for error and transaction arguments too).
             */
            transaction(options?: TransactionOptions, callback?: (transaction: Transaction) => void): PromiseT<Transaction>;

            close(): void;
        }

        interface Config {
            database?: string;
            username?: string;
            password?: string;
            host?: string;
            port?: number;
            pool?: PoolOptions;
            protocol?: string;
            queue?: boolean;
            native?: boolean;
            ssl?: boolean;
            replication?: ReplicationOptions;
            dialectModulePath?: string;
            maxConcurrentQueries?: number;
            dialectOptions?: any;
        }

        interface Model<TInstance, TPojo> extends Hooks, Associations {
            /**
             * A reference to the sequelize instance.
             */
            sequelize: Sequelize;

            /**
             * The name of the model, typically singular.
             */
            name: string;

            /**
             * The name of the underlying database table, typically plural.
             */
            tableName: string;

            options: DefineOptions;
            attributes: any;
            rawAttributes: any;
            modelManager: ModelManager;
            daoFactoryManager: ModelManager;
            associations: any;
            scopeObj: any;

            /**
             * Sync this Model to the DB, that is create the table. Upon success, the callback will be called with the model
             * instance (this).
             */
            sync(options?: SyncOptions): PromiseT<Model<TInstance, TPojo>>;

            /**
             * Drop the table represented by this Model.
             *
             * @param options
             */
            drop(options?: DropOptions): Promise;

            /**
             * Apply a schema to this model. For postgres, this will actually place the schema in front of the table name -
             * "schema"."tableName", while the schema will be prepended to the table name for mysql and sqlite -
             * 'schema.tablename'.
             *
             * @param schema    The name of the schema.
             * @param options   Schema options.
             */
            schema(schema: string, options?: SchemaOptions): Model<TInstance, TPojo>;

            /**
             * Get the tablename of the model, taking schema into account. The method will return The name as a string if the
             * model has no schema, or an object with tableName, schema and delimiter properties.
             */
            getTableName(): any;

            /**
             * Apply a scope created in define to the model.
             *
             * @param options The scope(s) to apply. Scopes can either be passed as consecutive arguments, or as an array of
             *                arguments. To apply simple scopes, pass them as strings. For scope function, pass an object,
             *                with a method property. The value can either be a string, if the method does not take any
             *                arguments, or an array, where the first element is the name of the method, and consecutive
             *                elements are arguments to that method. Pass null to remove all scopes, including the default.
             */
            scope(options: any): Model<TInstance, TPojo>;

            /**
             * Search for multiple instances..
             *
             * @param options       A hash of options to describe the scope of the search.
             * @param queryOptions  Set the query options, e.g. raw, specifying that you want raw data instead of built
             *                      Instances. See sequelize.query for options.
             */
            findAll(options?: FindOptions, queryOptions?: QueryOptions): PromiseT<Array<TInstance>>;

            /**
             * Search for a single instance. This applies LIMIT 1, so the listener will always be called with a single instance.
             *
             * @param options       A hash of options to describe the scope of the search.
             * @param queryOptions  Set the query options, e.g. raw, specifying that you want raw data instead of built
             *                      Instances. See sequelize.query for options
             */
            find(options?: FindOptions, queryOptions?: QueryOptions): PromiseT<TInstance>;

            /**
             * Search for a single instance. This applies LIMIT 1, so the listener will always be called with a single instance.
             *
             * @param options       A number to search by id.
             * @param queryOptions  Set the query options, e.g. raw, specifying that you want raw data instead of built
             *                      Instances. See sequelize.query for options
             */
            find(id?: number, queryOptions?: QueryOptions): PromiseT<TInstance>;

            /**
             * Run an aggregation method on the specified field.
             *
             * @param field                 The field to aggregate over. Can be a field name or *.
             * @param aggregateFunction     The function to use for aggregation, e.g. sum, max etc.
             * @param options               Query options, particularly options.dataType.
             */
            aggregate<V>(field: string, aggregateFunction: string, options: FindOptions): PromiseT<V>;

            /**
             * Count the number of records matching the provided where clause.
             *
             * @param options Conditions and options for the query.
             */
            count(options?: FindOptions): PromiseT<number>;

            /**
             * Find all the rows matching your query, within a specified offset / limit, and get the total number of rows
             * matching your query. This is very usefull for paging.
             *
             * @param findOptions   Filtering options
             * @param queryOptions  Query options
             */
            findAndCountAll(findOptions?: FindOptions, queryOptions?: QueryOptions): PromiseT<FindAndCountResult<TInstance>>;

            /**
             * Find the maximum value of field.
             *
             * @param field
             * @param options
             */
            max<V>(field: string, options?: FindOptions): PromiseT<V>;

            /**
             * Find the minimum value of field.
             *
             * @param field
             * @param options
             */
            min<V>(field: string, options?: FindOptions): PromiseT<V>;

            /**
             * Find the sum of field.
             *
             * @param field
             * @param options
             */
            sum(field: string, options?: FindOptions): PromiseT<number>;

            /**
             * Builds a new model instance. Values is an object of key value pairs, must be defined but can be empty.
             *
             * @param values    any from which to build entity instance.
             * @param options   any construction options.
             */
            build(values: TPojo, options?: BuildOptions): TInstance;

            /**
             * Builds a new model instance and calls save on it..
             *
             * @param values
             * @param options
             */
            create(values: TPojo, options?: CopyOptions): PromiseT<TInstance>;

            /**
             * Find a row that matches the query, or build (but don't save) the row if none is found. The successfull result
             * of the promise will be (instance, initialized) - Make sure to use .spread().
             *
             * @param where     A hash of search attributes. Note that this method differs from finders, in that the syntax
             *                  is { attr1: 42 } and NOT { where: { attr1: 42}}. This may be subject to change in 2.0
             * @param defaults  Default values to use if building a new instance
             * @param options   Options passed to the find call
             */
            findOrInitialize(where: any, defaults?: TPojo, options?: QueryOptions): PromiseT<TInstance>;

            /**
             * Find a row that matches the query, or build and save the row if none is found The successfull result of the
             * promise will be (instance, created) - Make sure to use .spread().
             *
             * @param where     A hash of search attributes. Note that this method differs from finders, in that the syntax is
             *                  { attr1: 42 } and NOT { where: { attr1: 42}}. This is subject to change in 2.0
             * @param defaults  Default values to use if creating a new instance
             * @param options   Options passed to the find and create calls.
             */
            findOrCreate(where: any, defaults?: TPojo, options?: FindOrCreateOptions): PromiseT<TInstance>;

            /**
             * Create and insert multiple instances in bulk.
             *
             * @param records   List of objects (key/value pairs) to create instances from.
             * @param options
             */
            bulkCreate(records: Array<TPojo>, options?: BulkCreateOptions): PromiseT<Array<TInstance>>;

            /**
             * Delete multiple instances.
             */
            destroy(where?: any, options?: DestroyOptions): Promise;

            /**
             * Update multiple instances that match the where options.
             *
             * @param attrValueHash A hash of fields to change and their new values
             * @param where         Options to describe the scope of the search. Note that these options are not wrapped in a
             *                      { where: ... } is in find / findAll calls etc. This is probably due to change in 2.0.
             */
            update(attrValueHash: TPojo, where: any, options?: UpdateOptions): Promise;

            /**
             * Run a describe query on the table. The result will be return to the listener as a hash of attributes and their
             * types.
             */
            describe(): PromiseT<any>;

            /**
             *  A proxy to the node-sql query builder, which allows you to build your query through a chain of method calls.
             *  The returned instance already has all the fields property populated with the field of the model.
             */
            dataset(): any;
        }

        interface Instance<TInstance, TPojo> {
            /**
             * Returns true if this instance has not yet been persisted to the database.
             */
            isNewRecord: boolean;

            /**
             * Returns the Model the instance was created from.
             */
            Model: Model<TInstance, TPojo>;

            /**
             * A reference to the sequelize instance.
             */
            sequelize: Sequelize;

            /**
             * If timestamps and paranoid are enabled, returns whether the deletedAt timestamp of this instance is set.
             * Otherwise, always returns false.
             */
            isDeleted: boolean;

            /**
             * Get the values of this Instance. Proxies to this.get.
             */
            values: TPojo;

            /**
             * A getter for this.changed(). Returns true if any keys have changed.
             */
            isDirty: boolean;

            /**
             *  Get the values of the primary keys of this instance.
             */
            primaryKeyValues: TPojo;

            /**
             * Get the value of the underlying data value.
             *
             * @param key   Field to retrieve.
             */
            getDataValue(key: string): any;

            /**
             * Update the underlying data value.
             *
             * @param key   Field to set.
             * @param value Value to set.
             */
            setDataValue(key: string, value: any): void;

            /**
             * Retrieves the value for the key when specified. If no key is given, returns all values of the instance, also
             * invoking virtual getters.
             */
            get(key?: string): any;

            /**
             * Set is used to update values on the instance (the sequelize representation of the instance that is, remember
             * that nothing will be persisted before you actually call save).
             */
            set(key: string, value: any, options?: SetOptions): void;

            /**
             * If changed is called with a string it will return a boolean indicating whether the value of that key in
             * dataValues is different from the value in _previousDataValues. If changed is called without an argument, it will
             * return an array of keys that have changed.
             */
            changed(key: string): any;

            /**
               * If changed is called with a string it will return a boolean indicating whether the value of that key in
               * dataValues is different from the value in _previousDataValues. If changed is called without an argument, it will
               * return an array of keys that have changed.
               */
            changed(): Array<string>;

            /**
             * Returns the previous value for key from _previousDataValues.
             */
            previous(key: string): any;

            /**
             * Validate this instance, and if the validation passes, persist it to the database.
             */
            save(fields?: Array<string>, options?: SaveOptions): PromiseT<TInstance>;

            /**
             * Refresh the current instance in-place, i.e. update the object with current data from the DB and return the same
             * object. This is different from doing a find(Instance.id), because that would create and return a new instance.
             * With this method, all references to the Instance are updated with the new data and no new objects are created.
             */
            reload(options?: FindOptions): PromiseT<TInstance>;

            /**
             * Validate the attribute of this instance according to validation rules set in the model definition.
             */
            validate(options?: ValidateOptions): PromiseT<Error>;

            /**
             * This is the same as calling setAttributes, then calling save.
             */
            updateAttributes(updates: TPojo, options: SaveOptions): PromiseT<TInstance>;

            /**
             * Destroy the row corresponding to this instance. Depending on your setting for paranoid, the row will either be
             * completely deleted, or have its deletedAt timestamp set to the current time.
             *
             * @param options   Allows caller to specify if delete should be forced.
             */
            destroy(options?: DestroyInstanceOptions): Promise;

            /**
             * Increment the value of one or more columns. This is done in the database, which means it does not use the
             * values currently stored on the Instance.
             *
             * @param fields    If a string is provided, that column is incremented by the value of by given in options. If an
             *                  array is provided, the same is true for each column. If and object is provided, each column is
             *                  incremented by the value given.
             * @param options   Increment options.
             */
            increment(fields: any, options?: IncrementOptions): Promise;

            /**
             * Decrement the value of one or more columns. This is done in the database, which means it does not use the
             * values currently stored on the Instance.
             *
             * @param fields    If a string is provided, that column is decremented by the value of by given in options. If an
             *                  array is provided, the same is true for each column. If and object is provided, each column is
             *                  decremented by the value given.
             * @param options   Decrement options.
             */
            decrement(fields: any, options?: IncrementOptions): Promise;

            /**
             * Check whether all values of this and other Instance are the same.
             */
            equal(other: TInstance): boolean;

            /**
             * Check if this is eqaul to one of others by calling equals.
             *
             * @param others    Other instances to compare to.
             */
            equalsOneOf(others: Array<TInstance>): boolean;

            /**
             * Convert the instance to a JSON representation. Proxies to calling get with no keys. This means get all values
             * gotten from the DB, and apply all custom getters.
             */
            toJSON(): TPojo;
        }

        interface Transaction extends TransactionStatic {
            /**
             * Commit the transaction.
             */
            commit(): Transaction;

            /**
             * Rollback (abort) the transaction.
             */
            rollback(): Transaction;
        }

        interface TransactionStatic {
            /**
             * The possible isolation levels to use when starting a transaction
             */
            ISOLATION_LEVELS: TransactionIsolationLevels;

            /**
             * Possible options for row locking. Used in conjuction with find calls.
             */
            LOCK: TransactionLocks;
        }

        interface TransactionIsolationLevels {
            READ_UNCOMMITTED: string;// "READ UNCOMMITTED"
            READ_COMMITTED: string;  // "READ COMMITTED"
            REPEATABLE_READ: string; // "REPEATABLE READ"
            SERIALIZABLE: string;    // "SERIALIZABLE"
        }

        interface TransactionLocks {
            UPDATE: string;  // UPDATE
            SHARE: string;   // SHARE
        }

        interface Hooks {

            /**
             * Add a named hook to the model.
             *
             * @param hooktype
             */
            addHook(hooktype: string, name: string, fn: (...args: Array<any>) => void): boolean;

            /**
             * Add a hook to the model.
             *
             * @param hooktype
             */
            addHook(hooktype: string, fn: (...args: Array<any>) => void): boolean;

            /**
             * A named hook that is run before validation.
             */
            beforeValidate<T>(name: string, validator: (dao: T, callback: (err?: Error) => void) => void): void;

            /**
             * A hook that is run before validation.
             */
            beforeValidate<T>(validator: (dao: T, callback: (err?: Error) => void) => void): void;

            /**
             * A named hook that is run before validation.
             */
            afterValidate<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run before validation.
             */
            afterValidate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run before creating a single instance.
             */
            beforeCreate<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run before creating a single instance.
             */
            beforeCreate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run after creating a single instance.
             */
            afterCreate<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run after creating a single instance.
             */
            afterCreate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run before destroying a single instance.
             */
            beforeDestroy<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run before destroying a single instance.
             */
            beforeDestroy<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run after destroying a single instance.
             */
            afterDestroy<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run after destroying a single instance.
             */
            afterDestroy<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run before updating a single instance.
             */
            beforeUpdate<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run before updating a single instance.
             */
            beforeUpdate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run after updating a single instance.
             */
            afterUpdate<T>(name: string, validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run after updating a single instance.
             */
            afterUpdate<T>(validator: (dao: T, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run before creating instances in bulk.
             */
            beforeBulkCreate<T>(name: string, validator: (daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run before creating instances in bulk.
             */
            beforeBulkCreate<T>(validator: (daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run after creating instances in bulk.
             */
            afterBulkCreate<T>(name: string, validator: (daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A hook that is run after creating instances in bulk.
             */
            afterBulkCreate<T>(validator: (daos: Array<T>, fields: Array<string>, callback: (err?: Error, dao?: T) => void) => void): void;

            /**
             * A named hook that is run before destroying instances in bulk.
             */
            beforeBulkDestroy<T>(name: string, validator: (where: any, callback: (err?: Error, where?: any) => void) => void): void;

            /**
             * A hook that is run before destroying instances in bulk.
             */
            beforeBulkDestroy<T>(validator: (where: any, callback: (err?: Error, where?: any) => void) => void): void;

            /**
             * A named hook that is run after destroying instances in bulk.
             */
            afterBulkDestroy<T>(name: string, validator: (where: any, callback: (err?: Error, where?: any) => void) => void): void;

            /**
             * A hook that is run after destroying instances in bulk.
             */
            afterBulkDestroy<T>(validator: (where: any, callback: (err?: Error, where?: any) => void) => void): void;

            /**
             * A named hook that is run before updating instances in bulk.
             */
            beforeBulkUpdate<T>(name: string, validator: (instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void) => void): void;

            /**
             * A hook that is run before updating instances in bulk.
             */
            beforeBulkUpdate<T>(validator: (instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void) => void): void;

            /**
             * A named hook that is run after updating instances in bulk.
             */
            afterBulkUpdate<T>(name: string, validator: (instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void) => void): void;

            /**
             * A hook that is run after updating instances in bulk.
             */
            afterBulkUpdate<T>(validator: (instances: Array<T>, where: any, callback: (err?: Error, instances?: Array<T>, where?: any) => void) => void): void;
        }

        interface Associations {
            /**
             * Creates an association between this (the source) and the provided target. The foreign key is added on the target.
             *
             * @param target
             * @param options
             */
            hasOne<TInstance, TPojo>(target: Model<TInstance, TPojo>, options?: AssociationOptions): void;

            /**
             * Creates an association between this (the source) and the provided target. The foreign key is added on the source.
             *
             * @param target
             * @param options
             */
            belongsTo<TInstance, TPojo>(target: Model<TInstance, TPojo>, options?: AssociationOptions): void;

            /**
             * Creates an association to connect sources with multiple targets. Furthermore the targets can also have connections to multiple sources.
             *
             * @param target
             * @param options
             */
            belongsToMany<TInstance, TPojo>(target: Model<TInstance, TPojo>, options?: AssociationOptions): void;

            /**
             * Create an association that is either 1:m or n:m.
             *
             * @param target
             * @param options
             */
            hasMany<TInstance, TPojo>(target: Model<TInstance, TPojo>, options?: AssociationOptions): void;
        }

        /**
         * Extension of external project that doesn't have definitions.
         *
         * See https://github.com/chriso/validator.js and https://github.com/sequelize/sequelize/blob/master/lib/instance-validator.js
         */
        interface Validator {

        }

        /**
         * Custom class defined, but no extra methods or functionality even.
         */
        interface ValidationError extends Error {

        }

        interface QueryChainer {
            /**
             * Add an query to the chainer. This can be done in two ways - either by invoking the method like you would
             * normally, and then adding the returned emitter to the chainer, or by passing the class that you want to call a
             * method on, the name of the method, and its parameters to the chainer. The second form might sound a bit
             * cumbersome, but it is used when you want to run queries in serial.
             *
             * @param emitterOrKlass
             * @param method
             * @param params
             * @param options
             */
            add(emitterOrKlass: any, method?: string, params?: any, options?: any): QueryChainer;

            /**
             * Run the query chainer. In reality, this means, wait for all the added emitters to finish, since the queries
             * began executing as soon as you invoked their methods.
             */
            run(): EventEmitter;

            /**
             * Run the chainer serially, so that each query waits for the previous one to finish before it starts.
             *
             * @param options @see QueryChainerRunSeriallyOptions
             */
            runSerially(options?: QueryChainerRunSeriallyOptions): EventEmitter;
        }

        interface QueryInterface {

            /**
             * Returns the dialect-specific sql generator.
             */
            QueryGenerator: QueryGenerator;

            /**
             * Queries the schema (table list).
             *
             * @param schema The schema to query. Applies only to Postgres.
             */
            createSchema(schema?: string): EventEmitter;

            /**
             * Drops the specified schema (table).
             *
             * @param schema The name of the table to drop.
             */
            dropSchema(schema: string): EventEmitter;

            /**
             * Drops all tables.
             */
            dropAllSchemas(): EventEmitter;

            /**
             * Queries all table names in the database.
             *
             * @param options
             */
            showAllSchemas(options?: QueryOptions): EventEmitter;

            /**
             * Creates a table with specified attributes.
             * @param tableName     Name of table to create
             * @param attributes    Hash of attributes, key is attribute name, value is data type
             * @param options       Query options.
             *
             * @return The return type will be a Promise when dialect is Postgres and an EventEmitter for MySQL and SQLite.
             */
            createTable(tableName: string, attributes: any, options?: QueryOptions): any;

            /**
             * Drops the specified table.
             *
             * @param tableName Table name.
             * @param options   Query options, particularly "force".
             */
            dropTable(tableName: string, options?: QueryOptions): EventEmitter;
            dropAllTables(options?: QueryOptions): EventEmitter;
            dropAllEnums(options?: QueryOptions): EventEmitter;
            renameTable(before: string, after: string): EventEmitter;
            showAllTables(options?: QueryOptions): EventEmitter;
            describeTable(tableName: string, options?: QueryOptions): EventEmitter;
            addColumn(tableName: string, attributeName: any, dataTypeOrOptions?: any): EventEmitter;
            removeColumn(tableName: string, attributeName: string): EventEmitter;
            changeColumn(tableName: string, attributeName: string, dataTypeOrOptions: any): EventEmitter;
            renameColumn(tableName: string, attrNameBefore: string, attrNameAfter: string): EventEmitter;
            addIndex(tableName: string, attributes: Array<any>, options?: QueryOptions): EventEmitter;
            showIndex(tableName: string, options?: QueryOptions): EventEmitter;
            getForeignKeysForTables(tableNames: Array<string>): EventEmitter;
            removeIndex(tableName: string, attributes: Array<string>): EventEmitter;
            removeIndex(tableName: string, indexName: string): EventEmitter;
            insert<TModel>(dao: TModel, tableName: string, values: any, options?: QueryOptions): EventEmitter;
            /**
             * Inserts several records into the specified table.
             * @param tableName     Table to insert into.
             * @param records       Array of key/value pairs to insert as records.
             * @param options       Query options
             * @param attributes    For Postgres only, used to identify if an attribute is auto-increment and thus handled specially.
             */
            bulkInsert(tableName: string, records: Array<any>, options?: QueryOptions, attributes?: any): EventEmitter;

            update<TModel>(dao: TModel, tableName: string, values: Array<any>, where: any, options?: QueryOptions): EventEmitter;
            bulkUpdate(tableName: string, values: Array<any>, where: any, options?: QueryOptions, attributes?: any): EventEmitter;
            delete<TModel>(dao: TModel, tableName: string, where: any, options?: QueryOptions): EventEmitter;
            bulkDelete(tableName: string, where: any, options?: QueryOptions): EventEmitter;
            bulkDelete<TModel>(tableName: string, where: any, options: QueryOptions, model: TModel): EventEmitter;
            select<TModel>(factory: TModel, tableName: string, scope?: any, queryOptions?: QueryOptions): EventEmitter;
            increment<TModel>(dao: TModel, tableName: string, values: Array<any>, where: any, options?: QueryOptions): EventEmitter;
            rawSelect<TModel>(tableName: string, options: QueryOptions, attributeSelector: string, model: TModel): EventEmitter;
            /**
             * Postgres only. Creates a trigger on specified table to call the specified function with supplied parameters.
             *
             * @param tableName
             * @param triggerName
             * @param timingType
             * @param fireOnArray
             * @param functionName
             * @param functionParams
             * @param optionsArray
             */
            createTrigger(tableName: string, triggerName: string, timingType: string, fireOnArray: Array<any>, functionName: string, functionParams: Array<any>, optionsArray: Array<string>): EventEmitter;
            /**
             * Postgres only. Drops the specified trigger.
             *
             * @param tableName
             * @param triggerName
             */
            dropTrigger(tableName: string, triggerName: string): EventEmitter;
            renameTrigger(tableName: string, oldTriggerName: string, newTriggerName: string): EventEmitter;
            createFunction(functionName: string, params: Array<any>, returnType: string, language: string, body: string, options?: QueryOptions): EventEmitter;
            dropFunction(functionName: string, params: Array<any>): EventEmitter;
            renameFunction(oldFunctionName: string, params: Array<any>, newFunctionName: string): EventEmitter;
            /**
             * Escape an identifier (e.g. a table or attribute name). If force is true,
             * the identifier will be quoted even if the `quoteIdentifiers` option is
             * false.
             */
            quoteIdentifier(identifier: string, force: boolean): EventEmitter;
            quoteTable(tableName: string): EventEmitter;
            quoteIdentifiers(identifiers: string, force: boolean): EventEmitter;
            escape(value: string): EventEmitter;
            setAutocommit(transaction: Transaction, value: boolean): EventEmitter;
            setIsolationLevel(transaction: Transaction, value: string): EventEmitter;
            startTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter;
            commitTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter;
            rollbackTransaction(transaction: Transaction, options?: QueryOptions): EventEmitter;
        }

        interface QueryGenerator {
            createSchema(schemaName: string): string;
            dropSchema(schemaName: string): string;
            showSchemasQuery(): string;
            addSchema<TInstance, TPojo>(param: Model<TInstance, TPojo>): Schema;
            createTableQuery(tableName: string, attributes: Array<any>, options?: CreateTableQueryOptions): string;
            describeTableQuery(tableName: string, schema: string, schemaDelimiter: string): string;
            dropTableQuery(tableName: string, options?: { cascade: string }): string;
            renameTableQuery(before: string, after: string): string;
            showTablesQuery(): string;
            addColumnQuery(tableName: string, attributes: any): string;
            removeColumnQuery(tableName: string, attributeName: string): string;
            changeColumnQuery(tableName: string, attributes: any): string;
            renameColumnQuery(tableName: string, attrNameBefore: string, attrNameAfter: string): string;
            insertQuery(table: string, valueHash: any, modelAttributes: any): string;
            bulkInsertQuery(tableName: string, attrValueHashes: any): string;
            updateQuery(tableName: string, attrValueHash: any, where: any, options: InsertOptions, attributes: any): string;
            deleteQuery(tableName: string, where: any, options: DestroyOptions): string;
            deleteQuery<TInstance, TPojo>(tableName: string, where: any, options: DestroyOptions, model: Model<TInstance, TPojo>): string;
            /**
             * Creates a query to increment a value. Note "options" here is an additional hash of values to update.
             * 
             * @param tableName
             * @param attrValueHash
             * @param where
             * @param options
             */
            incrementQuery(tableName: string, attrValueHash: any, where: any, options?: any): string;
            addIndexQuery(tableName: string, attributes: Array<any>, options?: IndexOptions): string;
            /**
             * Return indices for a table. Not options may be passed but is not used, so can be anything.
             * @param tableName
             * @param options
             */
            showIndexQuery(tableName: string, options?: any): string; // options is actually not used
            removeIndexQuery(tableName: string, indexNameOrAttributes: string): string;
            removeIndexQuery(tableName: string, indexNameOrAttributes: Array<string>): string;
            attributesToSQL(attributes: Array<any>): string;
            findAutoIncrementField<TInstance, TPojo>(factory: Model<TInstance, TPojo>): Array<string>;
            quoteTable(param: any, as: boolean): string;
            quote(obj: any, parent: any, force: boolean): string;
            createTrigger(tableName: string, triggerName: string, timingType: string, fireOnArray: TriggerOptions, functionName: string, functionParams: Array<TriggerParam>): string;
            dropTrigger(tableName: string, triggerName: string): string;
            renameTrigger(tableName: string, oldTriggerName: string, newTriggerName: string): string;
            createFunction(functionName: string, params: Array<TriggerParam>, returnType: string, language: string, body: string, options?: Array<string>): string;
            dropFunction(functionName: string, params: Array<TriggerParam>): string;
            renameFunction(oldFunctionName: string, params: Array<TriggerParam>, newFunctionName: string): string;
            quoteIdentifier(identifier: string, force?: boolean): string;
            quoteIdentifiers(identifiers: string, force?: boolean): string;
            /**
             * Not documented, and reading through the code, I'm not sure what all the options available are for value/field.
             *
             * @param value
             * @param field
             */
            escape(value: any, field: any): string;
            getForeignKeysQuery(tableName: string, schemaName: string): string;
            dropForeignKeyQuery(tableName: string, foreignKey: string): string;
            selectQuery<TInstance, TPojo>(tableName: string, options: SelectOptions, model?: Model<TInstance, TPojo>): string;
            selectQuery<TInstance, TPojo>(tableName: Array<string>, options: SelectOptions, model?: Model<TInstance, TPojo>): string;
            selectQuery<TInstance, TPojo>(tableName: Array<Array<string>>, options: SelectOptions, model?: Model<TInstance, TPojo>): string;
            setAutocommitQuery(value: boolean): string;
            setIsolationLevelQuery(value: string): string;
            /**
             * Returns start transaction query. Options is not used.
             * @param options
             */
            startTransactionQuery(options?: any): string;
            /**
             * Returns start transaction query. Options is not used.
             * @param options
             */
            commitTransactionQuery(options?: any): string;
            /**
             * Returns start transaction query. Options is not used.
             * @param options
             */
            rollbackTransactionQuery(options?: any): string;
            addLimitAndOffset(options: SelectOptions, query?: string): string;
            getWhereConditions<TInstance, TPojo>(smth: any, tableName: string, factory: Model<TInstance, TPojo>, options?: any, prepend?: boolean): string;
            prependTableNameToHash(tableName: string, hash?: any): string;
            findAssociation<TInstance, TPojo>(attribute: string, dao: Model<TInstance, TPojo>): string;
            getAssociationFilterDAO<TInstance, TPojo>(filterStr: string, dao: Model<TInstance, TPojo>): string;
            isAssociationFilter<TInstance, TPojo>(filterStr: string, dao: Model<TInstance, TPojo>, options?: any): string;
            getAssociationFilterColumn<TInstance, TPojo>(filterStr: string, dao: Model<TInstance, TPojo>, options?: { include: boolean }): string;
            getConditionalJoins<TInstance, TPojo>(options: { where?: any }, originalDao: Model<TInstance, TPojo>): string;
            arrayValue(value: Array<string>, key: string, _key: string, factory?: any, logicResult?: any): string;
            hashToWhereConditions<TInstance, TPojo>(hash: any, dao: Model<TInstance, TPojo>, options?: HashToWhereConditionsOption): string;
            booleanValue(value: boolean): string;
        }

        interface Schema {
            tableName: string;
            table: string;
            name: string;
            schema: string;
            delimiter: string;
        }

        interface QueryTypes {
            SELECT: string;
            BULKUPDATE: string;
            BULKDELETE: string;
        }

        interface ModelManager {
            daos: Array<Model<any, any>>;
            sequelize: Sequelize;
            addDAO<TInstance, TPojo>(dao: Model<TInstance, TPojo>): Model<TInstance, TPojo>;
            removeDAO<TInstance, TPojo>(dao: Model<TInstance, TPojo>): void;
            getDAO<TInstance, TPojo>(daoName: string, options?: ModelMangerGetDaoOptions): Model<TInstance, TPojo>;
            all: Array<Model<any, any>>;

            /**
             * Iterate over DAOs in an order suitable for e.g. creating tables. Will
             * take foreign key constraints into account so that dependencies are visited
             * before dependents.
             */
            forEachDAO(iterator: (dao: Model<any, any>, name: string) => void, options?: ModelManagerForEachDaoOptions): void;
        }

        interface TransactionManager {
            sequelize: Sequelize;
            connectorManagers: any;
            getConnectorManager(uuid?: string): ConnectorManager;
            releaseConnectionManager(uuid?: string): void;

            /**
             * Execute a query on the DB, with the possibility to bypass all the sequelize goodness.
             *
             * @param sql           SQL statement to execute.
             *
             * @param callee        If callee is provided, the selected data will be used to build an instance of the DAO represented
             *                      by the factory. Equivalent to calling Model.build with the values provided by the query.
             *
             * @param options       Query options.
             *
             */
            query(sql: string, callee?: Model<any, any>, options?: QueryOptions): EventEmitter;

            query<TInstance, TPojo>(sql: string, callee?: Model<TInstance, TPojo>, options?: QueryOptions): EventEmitter;
        }

        interface ConnectorManager {

            /**
             * Execute a query on the DB, with the possibility to bypass all the sequelize goodness.
             *
             * @param sql           SQL statement to execute.
             *
             * @param callee        If callee is provided, the selected data will be used to build an instance of the DAO represented
             *                      by the factory. Equivalent to calling Model.build with the values provided by the query.
             *
             * @param options       Query options.
             *
             */
            query(sql: string, callee?: Model<any, any>, options?: QueryOptions): EventEmitter;

            afterTransactionSetup(callback: () => void): void;
            connect(): void;
            disconnect(): void;
            reconnect(): void;
            cleanup(): void;
        }

        interface Migrator {
            queryInterface: QueryInterface;
            migrate(options?: MigratorOptions): EventEmitter;
            getUndoneMigrations(callback: (err: Error, result: Array<Migrator>) => void): void;
            findOrCreateMetaDAO(syncOptions?: SyncOptions): EventEmitter;
            exec(filename: string, options?: MigratorExecOptions): EventEmitter;
            getLastMigrationFromDatabase(): EventEmitter;
            getLastMigrationIdFromDatabase(): EventEmitter;
            getFormattedDateString(s: string): string;
            stringToDate(s: string): Date;
            saveSuccessfulMigration(from: Migration, to: Migration, callback: (metaData: MetaInstance) => void): void;
            deleteUndoneMigration(from: Migration, to: Migration, callback: () => void): void;
            execute(options?: MigrationExecuteOptions): EventEmitter;
            isBefore(date: Date, options?: MigrationCompareOptions): boolean;
            isAfter(date: Date, options?: MigrationCompareOptions): boolean;

        }

        interface Migration extends QueryInterface {
            migrator: Migrator;
            path: string;
            filename: string;
            migrationId: number;
            date: Date;
            queryInterface: QueryInterface;
            migration: (err: Error, migration: Migration, dataTypes: any, callback: (err: Error) => void) => void;

        }

        interface EventEmitter extends EventEmitterT<any>, NodeJS.EventEmitter { }

        interface EventEmitterT<R> extends NodeJS.EventEmitter {
            /**
             * Create a new emitter instance.
             *
             * @param handler
             */
            new (handler: (emitter: EventEmitterT<R>) => void): EventEmitterT<R>;

            /**
             * Run the function that was passed when the emitter was instantiated.
             */
            run(): EventEmitterT<R>;

            /**
             * Listen for success events.
             *
             * @param onSuccess
             */
            success(onSuccess: (result: R) => void): EventEmitterT<R>;

            /**
             * Alias for success(handler). Listen for success events.
             *
             * @param onSuccess
             */
            ok(onSuccess: (result: R) => void): EventEmitterT<R>;

            /**
             * Listen for error events.
             *
             * @param onError
             */
            error(onError: (err: Error) => void): EventEmitterT<R>;

            /**
             * Alias for error(handler). Listen for error events.
             *
             * @param onError
             */
            fail(onError: (err: Error) => void): EventEmitterT<R>;

            /**
             * Alias for error(handler). Listen for error events.
             *
             * @param onError
             */
            failure(onError: (err: Error) => void): EventEmitterT<R>;

            /**
             * Listen for both success and error events.
             *
             * @param onDone
             */
            done(onDone: (err: Error, result: R) => void): EventEmitterT<R>;

            /**
             * Alias for done(handler). Listen for both success and error events.
             *
             * @param onDone
             */
            complete(onDone: (err: Error, result: R) => void): EventEmitterT<R>;

            /**
             * Attach a function that is called every time the function that created this emitter executes a query.
             *
             * @param onSQL
             */
            sql(onSQL: (sql: string) => void): EventEmitterT<R>;

            /**
             * Proxy every event of this event emitter to another one.
             *
             * @param emitter   The event emitter that should receive the events.
             * @param options   Contains an array of the events to proxy. Defaults to sql, error and success
             */
            proxy(emitter: EventEmitterT<R>, options?: ProxyOptions): EventEmitterT<R>;


        }

        interface Options {
            /**
             * The dialect you of the database you are connecting to. One of mysql, postgres, sqlite and mariadb.
             * Default is mysql.
             */
            dialect?: string;

            /**
             * If specified, load the dialect library from this path. For example, if you want to use pg.js instead of pg when
             * connecting to a pg database, you should specify 'pg.js' here
             */
            dialectModulePath?: string;

            /**
             * The host of the relational database. Default 'localhost'.
             */
            host?: string;

            /**
             * Integer    The port of the relational database.
             */
            port?: number;

            /**
             * The protocol of the relational database. Default 'tcp'.
             */
            protocol?: string;

            /**
             * Default options for model definitions. See sequelize.define for options.
             */
            define?: DefineOptions;

            /**
             * Default options for sequelize.query
             */
            query?: QueryOptions;

            /**
             * Default options for sequelize.sync
             */
            sync?: SyncOptions;

            /**
             * The timezone used when converting a date from the database into a javascript date. The timezone is also used to 
             * SET TIMEZONE when connecting to the server, to ensure that the result of NOW, CURRENT_TIMESTAMP and other time 
             * related functions have in the right timezone. For best cross platform performance use the format +/-HH:MM.
             * Default '+00:00'.
             */
            timezone?: string;

            /**
             * Logging options. Function used to log. Default is console.log. Signature is (message:string) => void.
             *
             * Set to "false" to disable logging.
             */
            logging?: any;

            /**                                                                                                                                                                                                                        logging=console.log]    Function    A function that gets executed everytime Sequelize would log something.
             * A flag that defines if null values should be passed to SQL queries or not.
             */
            omitNull?: boolean;

            /**
             * Boolean    Queue queries, so that only maxConcurrentQueries number of queries are executing at once. If false, all
             * queries will be executed immediately.
             */
            queue?: boolean;

            /**
             * The maximum number of queries that should be executed at once if queue is true.
             */
            maxConcurrentQueries?: number;

            /**
             * A flag that defines if native library shall be used or not. Currently only has an effect for postgres
             */
            native?: boolean;

            /**
             * Use read / write replication. To enable replication, pass an object, with two properties, read and write. Write
             * should be an object (a single server for handling writes), and read an array of object (several servers to
             * handle reads). Each read/write server can have the following properties?: host, port, username, password, database
             */
            replication?: ReplicationOptions;

            /**
             * Connection pool options.
             *
             */
            pool?: PoolOptions;

            /**
             * Set to false to make table names and attributes case-insensitive on Postgres and skip double quoting of them.
             * Default true.
             */
            quoteIdentifiers?: boolean;

            /**
             * Language. Default "en".
             */
            language?: string;
        }

        interface PoolOptions {
            maxConnections?: number;

            minConnections?: number;

            /**
             * The maximum time, in milliseconds, that a connection can be idle before being released.
             */
            maxIdleTime?: number;

            /**
             * A function that validates a connection. Called with client. The default function checks that client is an
             * object, and that its state is not disconnected.
             *
             * Note, this is not documented, and after reading code I'm not sure what client's type is.
             */
            validateConnection?: (client?: any) => boolean;
        }

        interface AttributeOptions {
            /**
             * A string or a data type
             */
            type?: string;

            /**
             * If false, the column will have a NOT NULL constraint, and a not null validation will be run before an instance
             * is saved.
             */
            allowNull?: boolean;

            /**
             * A literal default value, a javascript function, or an SQL function (see sequelize.fn)
             */
            defaultValue?: any;

            /**
             * If true, the column will get a unique constraint. If a string is provided, the column will be part of a
             * composite unique index. If multiple columns have the same string, they will be part of the same unique index.
             */
            unique?: any;

            primaryKey?: boolean;

            /**
             * If set, sequelize will map the attribute name to a different name in the database.
             */
            field?: string;

            autoIncrement?: boolean;

            comment?: string;

            /**
             * If this column references another table, provide it here as a Model, or a string.
             */
            references?: any;

            /**
             * The column of the foreign table that this column references. Default 'id'.
             */
            referencesKey?: string;

            /**
             * What should happen when the referenced key is updated. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
             * NO ACTION.
             */
            onUpdate?: string;

            /**
             * What should happen when the referenced key is deleted. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
             * NO ACTION.
             */
            onDelete?: string;

            /**
             * Provide a custom getter for this column. Use this.getDataValue(String) to manipulate the underlying values.
             */
            get?: () => any;

            /**
             * Provide a custom setter for this column. Use this.setDataValue(String, Value) to manipulate the underlying values.
             */
            set?: (value?: any) => void;

            /**
             * An object of validations to execute for this column every time the model is saved. Can be either the name of a
             * validation provided by validator.js, a validation function provided by extending validator.js (see the
             * DAOValidator property for more details), or a custom validation function. Custom validation functions are called
             * with the value of the field, and can possibly take a second callback argument, to signal that they are
             * asynchronous. If the validator is sync, it should throw in the case of a failed validation, it it is async,
             * the callback should be called with the error text.
             */
            validate?: any;
        }

        interface ForeignKeyAttributeOptions extends AttributeOptions {
            /**
             * The name of the foreign key in the target table. Defaults to the name of source + primary key of source.
             */
            fieldName: string;
        }

        interface DefineOptions {
            /**
             * Define the default search scope to use for this model. Scopes have the same form as the options passed to
             * find / findAll.
             */
            defaultScope?: FindOptions;

            /**
             * More scopes, defined in the same way as defaultScope above. See Model.scope for more information about how
             * scopes are defined, and what you can do with them
             */
            scopes?: any;

            /**
             * Don't persits null values. This means that all columns with null values will not be saved.
             */
            omitNull?: boolean;

            /**
             * Adds createdAt and updatedAt timestamps to the model. Default true.
             */
            timestamps?: boolean;

            /**
             * Calling destroy will not delete the model, but instead set a deletedAt timestamp if this is true. Needs
             * timestamps=true to work. Default false.
             */
            paranoid?: boolean;

            /**
             * Converts all camelCased columns to underscored if true. Default false.
             */
            underscored?: boolean;

            /**
             * Converts camelCased model names to underscored tablenames if true. Default false.
             */
            underscoredAll?: boolean;

            /**
             * If freezeTableName is true, sequelize will not try to alter the DAO name to get the table name. Otherwise, the
             * dao name will be pluralized. Default false.
             */
            freezeTableName?: boolean;

            /**
             * Override the name of the createdAt column if a string is provided, or disable it if false. Timestamps must be true.
             */
            createdAt?: any;

            /**
             * Override the name of the updatedAt column if a string is provided, or disable it if false. Timestamps must be true.
             */
            updatedAt?: any;

            /**
             * Override the name of the deletedAt column if a string is provided, or disable it if false. Timestamps must be true.
             */
            deletedAt?: any;

            /**
             * Defaults to pluralized DAO name, unless freezeTableName is true, in which case it uses DAO name verbatim.
             */
            tableName?: string;

            /**
             * Provide getter functions that work like those defined per column. If you provide a getter method with the same
             * name as a column, it will be used to access the value of that column. If you provide a name that does not match
             * a column, this function will act as a virtual getter, that can fetch multiple other values.
             */
            getterMethods?: any;

            /**
             * Provide setter functions that work like those defined per column. If you provide a setter method with the same
             * name as a column, it will be used to update the value of that column. If you provide a name that does not match
             * a column, this function will act as a virtual setter, that can act on and set other values, but will not be
             * persisted
             */
            setterMethods?: any;

            /**
             * Provide functions that are added to each instance (DAO).
             */
            instanceMethods?: any;

            /**
             * Provide functions that are added to the model (Model).
             */
            classMethods?: any;

            /**
             * Default 'public'.
             */
            schema?: string;
            schemaDelimiter?: string;
            engine?: string;
            charset?: string;
            comment?: string;
            collate?: string;
            whereCollection?: any;
            language?: string;

            /**
             * An object of hook function that are called before and after certain lifecycle events. The possible hooks are?:
             * beforeValidate, afterValidate, beforeBulkCreate, beforeBulkDestroy, beforeBulkUpdate, beforeCreate,
             * beforeDestroy, beforeUpdate, afterCreate, afterDestroy, afterUpdate, afterBulkCreate, afterBulkDestory and
             * afterBulkUpdate. See Hooks for more information about hook functions and their signatures. Each property can
             * either be a function, or an array of functions.
             */
            hooks?: Hooks;

            /**
             * An object of model wide validations. Validations have access to all model values via this. If the validator
             * function takes an argument, it is assumed to be async, and is called with a callback that accepts an optional
             * error.
             */
            validate?: any;

            /**
             * 
             */
            indexes?: Array<DefineIndexOptions>;
        }

        interface DefineIndexOptions {
            /**
             * The name of the index. Defaults to model name + _ + fields concatenated.
             */
            name?: string;

            /**
             * Index type. Only used by mysql. One of UNIQUE, FULLTEXT and SPATIAL.
             */
            type: string;

            /**
             * The method to create the index by (USING statement in SQL). BTREE and HASH are supported by mysql and postgres, 
             * and postgres additionally supports GIST and GIN.
             */
            method: string;

            /**
             * Should the index by unique? Can also be triggered by setting type to UNIQUE. Default false (unless type = "UNIQUE", 
             * then true).
             */
            unique?: boolean;

            /**
             * PostgreSQL will build the index without taking any write locks. Postgres only. Default false.
             */
            concurrently?: boolean;

            /**
             * An array of the fields to index. Each field can either be a string containing the name of the field, or an object 
             * with the following attributes: attribute (field name), length (create a prefix index of length chars), order (the 
             * direction the column should be sorted in), collate (the collation (sort order) for the column)
             */
            fields: Array<any>;
        }

        interface QueryOptions {
            /**
             * If true, sequelize will not try to format the results of the query, or build an instance of a model from the
             * result.
             */
            raw?: boolean;

            /**
             * The transaction that the query should be executed under.
             */
            transaction?: Transaction;

            /**
             * The type of query you are executing. The query type affects how results are formatted before they are passed
             * back. If no type is provided sequelize will try to guess the right type based on the sql, and fall back to
             * SELECT. The type is a string, but Sequelize.QueryTypes is provided is convenience shortcuts. Current options
             * are SELECT, BULKUPDATE and BULKDELETE.
             *
             * Default is SELECT.
             */
            type?: string;

            /**
             * Lock the selected rows in either share or update mode. Possible options are transaction.LOCK.UPDATE and
             * transaction.LOCK.SHARE. See transaction.LOCK for an example.
             */
            lock?: string;

            /**
             * For aggregate function calls, the type of the result. If field is a field in this Model, the default will be the
             * type of that field, otherwise defaults to float.
             */
            dataType?: any;

            /**
             * A function that logs sql queries, or false for no logging.
             */
            logging?: any;

            /**
             * If plain is true, then sequelize will only return the first record of the result set. In case of false it will 
             * all records.
             */
            plain?: boolean;
        }

        interface SyncOptions {
            /**
             * If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table.
             * Default false.
             */
            force?: boolean;

            /**
             * A function that logs sql queries, or false for no logging.
             */
            logging?: any;

            /**
             * The schema that the tables should be created in. This can be overriden for each table in sequelize.define.
             * Default 'public'.
             */
            schema?: string;
        }

        interface ReplicationOptions {
            read?: Array<Server>;
            write?: Server;
        }

        interface Server {
            host?: string;
            port?: number;
            database?: string;
            username?: string;
            password?: string;
        }

        interface DropOptions {
            /**
             * Also drop all objects depending on this table, such as views. Only works in postgres.
             *
             * Default false.
             */
            cascade?: boolean;
        }

        interface SchemaOptions {
            /**
             * The character(s) that separates the schema name from the table name. Default '.'.
             */
            schemaDelimiter?: string;
        }

        interface FindOptions {
            /**
             * A hash of attributes to describe your search.
             */
            where?: any;

            /**
             * A list of the attributes that you want to select. To rename an attribute, you can pass an array, with two 
             * elements - the first is the name of the attribute in the DB (or some kind of expression such as 
             * Sequelize.literal, Sequelize.fn and so on), and the second is the name you want the attribute to have in the 
             * returned instance
             */
            attributes?: Array<any>;

            /**
             * A list of associations to eagerly load. Supported is either { include?: [ Model1, Model2, ...] } or { include?:
             * [ { model?: Model1, as?: 'Alias' } ] }. If your association are set up with an as (eg. X.hasMany(Y, { as?: 'Z },
             * you need to specify Z in the as attribute when eager loading Y). When using the object form, you can also
             * specify attributes to specify what columns to load, where to limit the relations, and include to load further
             * nested relations
             */
            include?: any;

            /**
             * Specifies an ordering. If a string is provided, it will be esacped. Using an array, you can provide several
             * columns / functions to order by. Each element can be further wrapped in a two-element array. The first element
             * is the column / function to order by, the second is the direction. For example?: order?: [['name', 'DESC']]. In
             * this way the column will be escaped, but the direction will not.
             */
            order?: any;

            limit?: number;

            offset?: number;
        }

        interface BuildOptions {
            /**
             * If set to true, values will ignore field and virtual setters. Default false.
             */
            raw?: boolean;

            /**
             * Default true.
             */
            isNewRecord?: boolean;

            /**
             * Default true.
             */
            isDirty?: boolean;

            /**
             * an array of include options - Used to build prefetched/included model instances. See set.
             */
            include?: Array<any>;
        }

        interface CopyOptions extends BuildOptions {
            /**
             * If set, only columns matching those in fields will be saved.
             */
            fields?: Array<string>;

            /**
             *
             */
            transaction?: Transaction;
        }

        interface FindOrCreateOptions extends FindOptions, QueryOptions {

        }

        interface BulkCreateOptions {
            /**
             * Fields to insert (defaults to all fields).
             */
            fields?: Array<string>;

            /**
             * Should each row be subject to validation before it is inserted. The whole insert will fail if one row fails
             * validation. Default false.
             */
            validate?: boolean;

            /**
             * Run before / after create hooks for each individual Instance? BulkCreate hooks will still be run. Default false;
             */
            hooks?: boolean;

            /**
             * Ignore duplicate values for primary keys? (not supported by postgres). Default false.
             */
            ignoreDuplicates?: boolean;
        }

        interface DestroyOptions {
            /**
             * If set to true, destroy will find all records within the where parameter and will execute before-/ after
             * bulkDestroy hooks on each row.
             */
            hooks?: boolean;

            /**
             * How many rows to delete
             */
            limit?: number;

            /**
             * If set to true, dialects that support it will use TRUNCATE instead of DELETE FROM. If a table is truncated the
             * where and limit options are ignored.
             */
            truncate?: boolean;
        }

        interface DestroyInstanceOptions {
            /**
             * If set to true, paranoid models will actually be deleted.
             */
            force: boolean;
        }

        interface InsertOptions {
            limit?: number;
            returning?: string;
            allowNull?: string;
        }

        interface UpdateOptions {
            /**
             * Should each row be subject to validation before it is inserted. The whole insert will fail if one row fails
             * validation. Default true.
             */
            validate?: boolean;

            /**
             * Run before / after bulkUpdate hooks? Default false.
             */
            hooks?: boolean;

            /**
             * How many rows to update (only for mysql and mariadb).
             */
            limit?: number;
        }

        interface SetOptions {
            /**
             * If set to true, field and virtual setters will be ignored. Default false.
             */
            raw?: boolean;

            /**
             * Clear all previously set data values. Default false.
             */
            reset?: boolean;

            include?: any;
        }

        interface SaveOptions {
            /**
             * An alternative way of setting which fields should be persisted.
             */
            fields?: any;

            /**
             * If true, the updatedAt timestamp will not be updated. Default false.
             */
            silent?: boolean;

            transaction?: Transaction;
        }

        interface ValidateOptions {
            /**
             * An array of strings. All properties that are in this array will not be validated.
             */
            skip: Array<string>;
        }

        interface IncrementOptions {
            /**
             * The number to increment by. Default 1.
             */
            by?: number;

            transaction?: Transaction;
        }

        interface IndexOptions {
            indicesType?: string;
            indexType?: string;
            indexName?: string;
            parser?: any;
        }

        interface ProxyOptions {
            /**
             * An array of the events to proxy. Defaults to sql, error and success.
             */
            events: Array<string>;
        }

        interface AssociationOptions {
            /**
             * Set to true to run before-/afterDestroy hooks when an associated model is deleted because of a cascade. For
             * example if User.hasOne(Profile, {onDelete: 'cascade', hooks:true}), the before-/afterDestroy hooks for profile
             * will be called when a user is deleted. Otherwise the profile will be deleted without invoking any hooks.
             * Default false.
             */
            hooks?: boolean;

            /**
             * The name of the table that is used to join source and target in n:m associations. Can also be a sequelize model
             * if you want to define the junction table yourself and add extra attributes to it.
             */
            through?: any;

            /**
             * The alias of this model. If you create multiple associations between the same tables, you should provide an
             * alias to be able to distinguish between them. If you provide an alias when creating the assocition, you should
             * provide the same alias when eager loading and when getting assocated models. Defaults to the singularized
             * version of target.name
             */
            as?: string;

            /**
             * The foreignKey can be either a string name of the foreign key in the target table,
             * or can be an object defining the foreign key and its options. Note foreignKey is not fully
             * typed since TypeScript does not support union types--it can be either a string or an
             * options object. String name defaults to the name of source + primary key of source.
             * 
             * @see ForeignKeyAttributeOptions.
             */
            foreignKey?: any;

            /**
             * What should happen when the referenced key is deleted. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
             * NO ACTION. Default SET NULL.
             */
            onDelete?: string;

            /**
             * What should happen when the referenced key is updated. One of CASCADE, RESTRICT, SET DEFAULT, SET NULL or
             * NO ACTION. Default CASCADE.
             */
            onUpdate?: string;

            /**
             * Should on update and on delete constraints be enabled on the foreign key.
             */
            constraints?: boolean;
        }

        interface TriggerOptions {
            insert?: Array<string>;
            update?: Array<string>;
            delete?: Array<string>;
            truncate?: Array<string>;
        }

        interface TriggerParam {
            type: string;
            direction?: string;
            name?: string;
        }

        interface SelectOptions {
            limit?: number;
            offset?: number;
            attributes?: Array<any>;
            hasIncludeWhere?: boolean;
            hasIncludeRequired?: boolean;
            hasMultiAssociation?: boolean;
            tableAs?: string;
            table?: string;
            include?: Array<any>;
            includeIgnoreAttributes?: boolean;
            where?: any;
            /**
             * String field name or array of strings of field names.
             */
            group?: any;
            having?: any;
            order?: any;
            lock?: string;
        }

        interface HashToWhereConditionsOption {
            include?: boolean;
            keysEscaped?: boolean;
        }

        interface ModelMangerGetDaoOptions {
            attribute: string;
        }

        interface ModelManagerForEachDaoOptions {
            /**
             * Default true.
             */
            reverse: boolean;
        }

        interface MigratorOptions {
            /**
             * A flag that defines if the migrator should get instantiated or not..
             */
            force: boolean;
        }

        interface FindAndCountResult<T> {
            /**
             * The matching model instances.
             */
            rows?: Array<T>;

            /**
             * The total number of rows. This may be more than the rows returned if a limit and/or offset was supplied.
             */
            count?: number;
        }

        interface Col {
            /**
             * Column name.
             */
            col: string;
        }

        interface Cast {
            /**
             * The value to cast.
             */
            val: any;

            /**
             * The type to cast it to.
             */
            type: string;
        }

        interface Literal {
            val: any;
        }

        interface And {
            /**
             * Each argument (string or object) will be joined by AND.
             */
            args: Array<any>;
        }

        interface Or {
            /**
             * Each argument (string or object) will be joined by OR.
             */
            args: Array<any>;
        }

        interface Where {
            /**
             * The attribute.
             */
            attribute: string;

            /**
             * The condition. Can be both a simply type, or a further condition (.or, .and, .literal etc.).
             */
            logic: any;
        }

        interface TransactionOptions {
            /**
             *
             */
            autocommit?: boolean;

            /**
             * One of: 'READ UNCOMMITTED', 'READ COMMITTED', 'REPEATABLE READ', 'SERIALIZABLE'. Default 'REPEATABLE READ'.
             */
            isolationLevel?: string;
        }

        interface QueryChainerRunSeriallyOptions {
            /**
             * If set to true, all pending emitters will be skipped if a previous emitter failed. Default false.
             */
            skipOnError: boolean;
        }

        interface CreateTableQueryOptions {
            comment?: string;
            uniqueKeys?: Array<any>;
            charset?: string;
        }

        interface MigratorExecOptions {
            before?: (migrator: Migrator) => void;
            after?: (migrator: Migrator) => void;
            success?: (migrator: Migrator) => void;
        }

        interface MigrationExecuteOptions {
            method: string;
        }

        interface MigrationCompareOptions {
            /**
             * Default false.
             */
            withoutEquals: boolean;
        }

        interface Promise {
            /**
             * Listen for events, event emitter style. Mostly for backwards compatibility with EventEmitter.
             *
             * @param evt Event
             * @param fct Handler
             */
            on(evt: string, fct: () => void): void;

            /**
             * Emit an event from the emitter.
             *
             * @param type  The type of event.
             * @param value All other arguments will be passed to the event listeners.
             */
            emit(type: string, ...value: Array<any>): void;

            /**
             * Listen for success events.
             */
            success(onSuccess: () => void): Promise;

            /**
             * Alias for success(handler). Listen for success events.
             */
            ok(onSuccess: () => void): Promise;

            /**
             * Listen for error events.
             *
             * @param onError Error handler.
             */
            error(onError: (err?: Error) => void): Promise;

            /**
             * Alias for error(handler). Listen for error events.
             *
             * @param onError Error handler.
             */
            fail(onError: (err?: Error) => void): Promise;

            /**
             * Alias for error(handler). Listen for error events.
             *
             * @param onError Error handler.
             */
            failure(onError: (err?: Error) => void): Promise;

            /**
             * Listen for both success and error events..
             */
            done(handler: (err: Error, result?: any) => void): Promise;

            /**
             * Alias for done(handler). Listen for both success and error events..
             */
            complete(handler: (err: Error, result?: any) => void): Promise;

            /**
             * Attach a function that is called every time the function that created this emitter executes a query.
             *
             * @param onSQL
             */
            sql(onSQL: (sql: string) => void): Promise;

            /**
             * Proxy every event of this promise to another one.
             *
             * @param promise   The promise that should receive the events.
             * @param options   Contains an array of the events to proxy. Defaults to sql, error and success
             */
            proxy(promise: Promise, options?: ProxyOptions): Promise;


            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then(onFulfilled?: (result?: any) => void, onRejected?: (result?: any) => void): Promise;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then(onFulfilled?: (result?: any) => Promise, onRejected?: (result?: any) => Promise): Promise;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: any) => PromiseT<R>, onRejected?: (result?: any) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: any) => PromiseT<R>, onRejected?: (result?: any) => void): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: any) => void, onRejected?: (result?: any) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R1, R2>(onFulfilled?: (result?: any) => PromiseT<R1>, onRejected?: (result?: any) => PromiseT<R2>): Promise;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread(onFulfilled?: (...results: Array<any>) => Promise, onRejected?: (...results: Array<any>) => Promise): Promise;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread(onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => void): Promise;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread(onFulfilled?: (...results: Array<any>) => Promise, onRejected?: (...results: Array<any>) => void): Promise;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread(onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => Promise): Promise;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread<R>(onFulfilled?: (...results: Array<any>) => PromiseT<R>, onRejected?: (...results: Array<any>) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread<R>(onFulfilled?: (...results: Array<any>) => void, onRejected?: (...results: Array<any>) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread<R>(onFulfilled?: (...results: Array<any>) => PromiseT<R>, onRejected?: (...results: Array<any>) => void): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style. This listener will recieve all arguments emitted by the emitter, 
             * as opposed to then which will only recieve the first argument.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success).
             * @param onRejected
             */
            spread<R1, R2>(onFulfilled?: (...results: Array<any>) => PromiseT<R1>, onRejected?: (...results: Array<any>) => PromiseT<R2>): Promise;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch(onRejected: (result?: any) => Promise): Promise;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch<R>(onRejected: (result?: any) => PromiseT<R>): PromiseT<R>;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch(onRejected: (result?: any) => void): Promise;
        }

        interface PromiseT<T> extends Promise {
            /**
             * Listen for events, event emitter style. Mostly for backwards compatibility with EventEmitter.
             *
             * @param evt Event
             * @param fct Handler
             */
            on(evt: string, fct: (t: T) => void): void;

            /**
             * Emit an event from the emitter.
             *
             * @param type  The type of event.
             * @param value All other arguments will be passed to the event listeners.
             */
            emit(type: string, ...value: Array<T>): void;

            /**
             * Listen for success events.
             */
            success(onSuccess: (t: T) => void): PromiseT<T>;

            /**
             * Alias for success(handler). Listen for success events.
             */
            ok(onSuccess: (t: T) => void): PromiseT<T>;

            /**
             * Listen for both success and error events..
             */
            done(handler: (err: Error, result: T) => void): PromiseT<T>;

            /**
             * Alias for done(handler). Listen for both success and error events..
             */
            complete(handler: (err: Error, result: T) => void): PromiseT<T>;

            /**
             * Attach a function that is called every time the function that created this emitter executes a query.
             *
             * @param onSQL
             */
            sql(onSQL: (sql: string) => void): PromiseT<T>;

            /**
             * Proxy every event of this promise to another one.
             *
             * @param promise   The promise that should receive the events.
             * @param options   Contains an array of the events to proxy. Defaults to sql, error and success
             */
            proxy(promise: PromiseT<T>, options?: ProxyOptions): PromiseT<T>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then(onFulfilled?: (result?: T) => void, onRejected?: (result?: T) => void): Promise;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then(onFulfilled?: (result?: T) => Promise, onRejected?: (result?: T) => Promise): Promise;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: T) => PromiseT<R>, onRejected?: (result?: T) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: T) => PromiseT<R>, onRejected?: (result?: T) => void): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R>(onFulfilled?: (result?: T) => void, onRejected?: (result?: T) => PromiseT<R>): PromiseT<R>;

            /**
             * Attach listeners to the emitter, promise style.
             * 
             * @param onFulfilled       The function to call if the promise is fulfilled (if the emitter emits success). 
             *                          Note that this function will always only be called with one argument, as per 
             *                          the promises/A spec. For functions that emit multiple arguments 
             *                          (e.g. findOrCreate) @see spread
             * @param onRejected
             */
            then<R1, R2>(onFulfilled?: (result?: T) => PromiseT<R1>, onRejected?: (result?: T) => PromiseT<R2>): Promise;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch(onRejected: (result?: T) => Promise): Promise;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch<R>(onRejected: (result?: T) => PromiseT<R>): PromiseT<R>;

            /**
             * Shorthand for then(null, onRejected)
             */
            catch(onRejected: (result?: T) => void): Promise;
        }

        interface Utils {
            _: Lodash;

            /**
             * Formats a string to parse and interpolate values into the string based on the optionally provided SQL dialect.
             * @param arr       Array where first element is string with placeholders and remaining attributes are values to replace placeholders.
             * @param dialect   SQL Dialect.
             */
            format(arr: Array<any>, dialect?: string): string;

            /**
             * Formats a SQL string replacing named placeholders with values from the parameters object with matching key names.
             *
             * @param sql           String to format.
             * @param parameters    Key/value hash with values to replace in string.
             * @param dialect       SQL Dialect
             */
            formatNamedParameters(sql: string, parameters: any, dialect?: string): string;

            injectScope(scope: string, merge: boolean): any;

            smartWhere(whereArg: any, dialect: string): any;

            compileSmartWhere(obj: any, dialect: string): Array<any>;

            getWhereLogic(logic: string, val?: any): string;

            isHash(obj: any): boolean;

            hasChanged(attrValue: any, value: any): boolean;

            argsArePrimaryKeys(args: Array<any>, primaryKeys: any): boolean;

            /**
             * Consistently combines two table names such that the alphabetically first name always comes first when combined.
             *
             * @param table1
             * @param table2
             */
            combineTableNames(table1: string, table2: string): string;

            singularize(s: string, language?: string): string;

            pluralize(s: string, language: string): string;

            /**
             * Same concept as _.merge, but don't overwrite properties that have already been assigned
             */
            mergeDefaults: typeof _.merge;

            lowercaseFirst(str: string): string;

            uppercaseFirst(str: string): string;

            spliceStr(str: string, index: number, count: number, add: string): string;

            camelize(str: string): string;

            removeCommentsFromFunctionString(s: string): string;

            toDefaultValue(value: any): any;

            defaultValueSchemable(value: any): boolean;
            setAttributes(hash: any, identifier: string, instance: any, prefix: string): any;
            removeNullValuesFromHash(hash: any, omitNull: boolean, options: any): any;
            firstValueOfHash(obj: any): any;
            inherit(subClass: any, superClass: any): any;
            stack(): string;
            now(dialect: string): Date;

            /**
             * Runs provided function on next tick, depending on environment.
             *
             * @param f
             */
            tick(f: Function): void;

            /**
             * Surrounds a string with tick marks while removing all existing tick marks from the string.
             * @param s         String to tick
             * @param tickChar  Tick mark. Default `
             */
            addTicks(s: string, tickChar?: string): string;

            removeTicks(s: string, tickChar?: string): string;

            generateUUID(): string;

            validateParameter(value: any, expectation: any): boolean;

            CustomEventEmitter: EventEmitter;
            Promise: Promise;
            QueryChainer: QueryChainer;
            Lingo: any; // external project, no definitions yet}
        }

        interface Lodash extends _.LoDashStatic {
            camelizeIf(str: string, condition: boolean): string;
            camelizeIf(str: string, condition: any): string;
            underscoredIf(str: string, condition: boolean): string;
            underscoredIf(str: string, condition: any): string;
            /**
             * * Returns an array with some falsy values removed. The values null, "", undefined and NaN are considered falsey.
             *
             * @param arr Array to compact.
             */
            compactLite<T>(arr: Array<T>): Array<T>;
        }

        interface MetaPojo {
            from: string;
            to: string;
        }
        interface MetaInstance extends MetaPojo, Model<MetaInstance, MetaPojo> {

        }

        interface DataTypeStringBase {
            BINARY: DataTypeString;
        }
        interface DataTypeNumberBase {
            UNSIGNED: boolean;
            ZEROFILL: boolean;
        }

        interface DataTypeString extends DataTypeStringBase {
        }
        interface DataTypeChar extends DataTypeStringBase {
        }
        interface DataTypeInteger extends DataTypeNumberBase {
        }
        interface DataTypeBigInt extends DataTypeNumberBase {
        }
        interface DataTypeFloat extends DataTypeNumberBase {
        }
        interface DataTypeBlob {
        }
        interface DataTypeDecimal {
            PRECISION: number;
            SCALE: number;
        }

        interface DataTypeVirtual {
        }
        interface DataTypeEnum {
            (...values: Array<string>): DataTypeEnum;
        }
        interface DataTypeArray {
        }
        interface DataTypeHstore {
        }

        interface DataTypes {
            STRING: DataTypeString;
            CHAR: DataTypeChar;
            TEXT: string;
            INTEGER: DataTypeInteger;
            BIGINT: DataTypeBigInt;
            DATE: string;
            BOOLEAN: string;
            FLOAT: DataTypeFloat;
            NOW: string;
            BLOB: DataTypeBlob;
            DECIMAL: DataTypeDecimal;
            UUID: string;
            UUIDV1: string;
            UUIDV4: string;
            VIRTUAL: DataTypeVirtual;
            NONE: DataTypeVirtual;
            ENUM: DataTypeEnum;
            ARRAY: DataTypeArray;
            HSTORE: DataTypeHstore;
        }
    }

    var sequelize: sequelize.SequelizeStatic;

    export = sequelize;
}
