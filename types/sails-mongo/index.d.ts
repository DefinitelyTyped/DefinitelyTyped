import * as mongodb from "mongodb";

/**
 * Sails.js/Waterline adapter for MongoDB.
 *
 * The module exports the adapter definition as a plain object.
 * It is usually referenced from a Sails datastore configuration (`adapter: "sails-mongo"`),
 * but it can also be required directly, e.g. to reach the bundled MongoDB driver.
 */
declare const sailsMongo: sailsMongo.Adapter;

export = sailsMongo;

declare namespace sailsMongo {
    /**
     * Node-style callback used by the adapter methods.
     */
    type Callback<T = undefined> = (err?: Error, result?: T) => void;

    /**
     * MongoDB client options that the adapter accepts in a datastore configuration.
     * Any other non-standard property makes `registerDatastore()` fail with `E_BAD_CONFIG`.
     */
    type WhitelistedMongoClientOptions = Partial<
        Pick<
            mongodb.MongoClientOptions,
            | "ssl"
            | "tls"
            | "tlsInsecure"
            | "tlsCAFile"
            | "tlsCertificateKeyFile"
            | "tlsCertificateKeyFilePassword"
            | "tlsAllowInvalidCertificates"
            | "tlsAllowInvalidHostnames"
            | "noDelay"
            | "connectTimeoutMS"
            | "socketTimeoutMS"
            | "family"
            | "retryWrites"
            | "maxPoolSize"
            | "replicaSet"
            | "authSource"
            | "w"
            | "forceServerObjectId"
            | "serializeFunctions"
            | "ignoreUndefined"
            | "raw"
            | "readPreference"
            | "pkFactory"
            | "readConcern"
            | "maxStalenessSeconds"
            | "promoteValues"
            | "promoteLongs"
            | "promoteBuffers"
            | "authMechanism"
            | "readPreferenceTags"
            | "monitorCommands"
            | "localThresholdMS"
            | "serverSelectionTimeoutMS"
            | "heartbeatFrequencyMS"
            | "autoEncryption"
            | "driverInfo"
            | "appName"
        >
    >;

    /**
     * Configuration of a datastore using this adapter (e.g. in `config/datastores.js`).
     *
     * Top-level `host`, `port`, `user`, `password` and `database` take precedence over the
     * corresponding parts of `url`, and are merged into it.
     */
    interface DatastoreConfig extends WhitelistedMongoClientOptions {
        /** The adapter to use: `"sails-mongo"`, or the adapter module itself. */
        adapter?: string | Adapter | undefined;
        /** Unique name of the datastore. Set by Waterline. */
        identity?: string | undefined;
        /** Connection URL, e.g. `mongodb://user:password@localhost:27017/my-app`. */
        url?: string | undefined;
        /** Whether the datastore enforces a schema. Defaults to `false`. */
        schema?: boolean | undefined;
        user?: string | undefined;
        password?: string | undefined;
        host?: string | undefined;
        port?: number | string | undefined;
        database?: string | undefined;
        /** @deprecated Has had no effect since MongoDB driver v4. */
        useNewUrlParser?: boolean | undefined;
        /** @deprecated Has had no effect since MongoDB driver v4. */
        useUnifiedTopology?: boolean | undefined;
    }

    /**
     * Connection manager created for each registered datastore.
     *
     * In sails-mongo, the manager and the connection are the same object: a MongoDB `Db`
     * instance, with the owning `MongoClient` attached as `client`.
     * This is what Sails exposes as `Model.getDatastore().manager`.
     */
    interface Manager extends mongodb.Db {
        client: mongodb.MongoClient;
        /** Telltale indicating that this `Db` instance was created by this adapter. */
        _isFromMPMongo: true;
    }

    /** In sails-mongo, a connection is the manager itself. */
    type Connection = Manager;

    /**
     * Adapter-specific "meta keys" that can be passed to a Waterline query with `.meta()`.
     */
    interface QueryMeta {
        /** Send back the affected records from `create`, `createEach`, `update` and `destroy`. */
        fetch?: boolean | undefined;
        /** Identities of the models whose primary keys are not `ObjectId`s. */
        modelsNotUsingObjectIds?: string[] | undefined;
        /** Make the `like` modifier case-insensitive. */
        makeLikeModifierCaseInsensitive?: boolean | undefined;
        /** Log the stage 3 queries received by the adapter. */
        logMongoS3Qs?: boolean | undefined;
        /** A connection leased with `.leaseConnection()`. */
        leasedConnection?: Connection | undefined;
        [key: string]: unknown;
    }

    /** A record, as stored in MongoDB (keyed by column name). */
    interface PhysicalRecord {
        [columnName: string]: unknown;
    }

    type SortDirection = "ASC" | "DESC";

    /** Normalized criteria of a stage 3 query. */
    interface StageThreeCriteria {
        where: { [key: string]: unknown };
        select?: string[] | undefined;
        limit?: number | undefined;
        skip?: number | undefined;
        sort?: Array<{ [columnName: string]: SortDirection }> | undefined;
    }

    /** A stage 3 Waterline query, as received by the adapter methods. */
    interface StageThreeQuery {
        method: string;
        /** Name of the physical model (collection). */
        using: string;
        meta?: QueryMeta | undefined;
    }

    interface CreateQuery extends StageThreeQuery {
        method: "create";
        newRecord: PhysicalRecord;
    }

    interface CreateEachQuery extends StageThreeQuery {
        method: "createEach";
        newRecords: PhysicalRecord[];
    }

    interface UpdateQuery extends StageThreeQuery {
        method: "update";
        criteria: StageThreeCriteria;
        valuesToSet: PhysicalRecord;
    }

    interface DestroyQuery extends StageThreeQuery {
        method: "destroy";
        criteria: StageThreeCriteria;
    }

    interface FindQuery extends StageThreeQuery {
        method: "find";
        criteria: StageThreeCriteria;
    }

    interface CountQuery extends StageThreeQuery {
        method: "count";
        criteria: StageThreeCriteria;
    }

    interface NumericQuery extends StageThreeQuery {
        method: "sum" | "avg";
        criteria: StageThreeCriteria;
        numericAttrName: string;
    }

    /** Definition of an attribute, as provided to the adapter by Waterline. */
    interface AttributeDefinition {
        columnName?: string | undefined;
        type?: string | undefined;
        required?: boolean | undefined;
        /** Identity of the associated model, for singular associations. */
        model?: string | undefined;
        autoMigrations?: {
            columnType?: string | undefined;
            unique?: boolean | undefined;
            autoIncrement?: boolean | undefined;
        } | undefined;
        [key: string]: unknown;
    }

    /** Information about a physical model using a datastore. */
    interface PhysicalModelInfo {
        primaryKey: string;
        identity: string;
        tableName: string;
        definition: { [attributeName: string]: AttributeDefinition };
    }

    /** Physical models using a datastore, keyed by table name. */
    interface PhysicalModelsReport {
        [tableName: string]: PhysicalModelInfo;
    }

    /** Column definitions given to `define()`, keyed by column name. */
    interface PhysicalModelDefinition {
        [columnName: string]: {
            unique?: boolean | undefined;
            [key: string]: unknown;
        };
    }

    /**
     * A "dry" machine definition (see the `machine` package).
     */
    interface MachineDefinition {
        friendlyName: string;
        description?: string | undefined;
        extendedDescription?: string | undefined;
        moreInfoUrl?: string | undefined;
        sync?: boolean | undefined;
        identity?: string | undefined;
        implementationType?: string | undefined;
        inputs: { [inputName: string]: { [key: string]: unknown } };
        exits: { [exitName: string]: { [key: string]: unknown } };
        fn(inputs: { [inputName: string]: unknown }, exits: { [exitName: string]: (output?: unknown) => void }): void;
    }

    /**
     * Handlers for the exits of a machine invocation.
     * Unhandled exits other than `success` are routed to `error`.
     */
    type MachineExitHandlers<T> =
        & {
            error(err: Error): void;
            success(result: T): void;
        }
        & {
            [exitName: string]: (output: any) => void;
        };

    /**
     * The deferred object returned when invoking a "wet" machine.
     */
    interface MachineDeferred<T> extends PromiseLike<T> {
        exec(cb: (err: Error | null | undefined, result?: T) => void): void;
        switch(handlers: MachineExitHandlers<T>): void;
        /** Only available on synchronous machines. */
        execSync(): T;
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
        ): Promise<T | TResult>;
        toPromise(): Promise<T>;
        meta(meta: { [key: string]: unknown }): this;
    }

    /** A "wet" (callable) machine, built from a machine definition. */
    type WetMachine<Inputs, Output> = (inputs: Inputs) => MachineDeferred<Output>;

    interface ManagerReport {
        manager: Manager;
        meta?: unknown;
    }

    interface ConnectionReport {
        connection: Connection;
        meta?: unknown;
    }

    interface MetaReport {
        meta?: unknown;
    }

    /**
     * Low-level driver attached to each registered datastore entry.
     */
    interface Driver {
        createManager: WetMachine<
            {
                connectionString: string;
                onUnexpectedFailure?: ((err: Error) => void) | undefined;
                meta?: DatastoreConfig | undefined;
            },
            ManagerReport
        >;
        destroyManager: WetMachine<{ manager: Manager; meta?: unknown }, MetaReport>;
        getConnection: WetMachine<{ manager: Manager; meta?: unknown }, ConnectionReport>;
        releaseConnection: WetMachine<{ connection: Connection; meta?: unknown }, MetaReport>;
        /** The MongoDB Node.js driver bundled with the adapter. */
        mongodb: typeof mongodb;
    }

    /** A datastore registered with the adapter. */
    interface DatastoreEntry {
        config: DatastoreConfig;
        manager: Manager;
        driver: Driver;
    }

    interface Adapter {
        /** The identity of this adapter, referenced by datastore configurations. */
        identity: "sails-mongo";
        /** Waterline adapter API version. */
        adapterApiVersion: 1;
        /** Default datastore configuration. */
        defaults: { schema: false };
        /** Registered datastores, keyed by datastore name. */
        datastores: { [datastoreName: string]: DatastoreEntry };
        /** The MongoDB Node.js driver bundled with the adapter. */
        mongodb: typeof mongodb;

        /**
         * Register a new datastore with this adapter.
         * Waterline calls this method once for every datastore configured to use this adapter.
         */
        registerDatastore(
            dsConfig: DatastoreConfig & { identity: string },
            physicalModelsReport: PhysicalModelsReport,
            done: Callback<unknown>,
        ): void;
        /** Tear down (un-register) a datastore and close its connection manager. */
        teardown(datastoreName: string, done: Callback<unknown>): void;

        createManager: MachineDefinition;
        destroyManager: MachineDefinition;
        getConnection: MachineDefinition;
        releaseConnection: MachineDefinition;
        verifyModelDef: MachineDefinition;

        /** Create a record. Sends it back only if `meta.fetch` is set. */
        create(datastoreName: string, query: CreateQuery, done: Callback<PhysicalRecord | undefined>): void;
        /** Create several records. Sends them back only if `meta.fetch` is set. */
        createEach(datastoreName: string, query: CreateEachQuery, done: Callback<PhysicalRecord[] | undefined>): void;
        /** Update matching records. Sends them back only if `meta.fetch` is set. */
        update(datastoreName: string, query: UpdateQuery, done: Callback<PhysicalRecord[] | undefined>): void;
        /** Destroy matching records. Sends them back only if `meta.fetch` is set. */
        destroy(datastoreName: string, query: DestroyQuery, done: Callback<PhysicalRecord[] | undefined>): void;
        /** Find matching records. */
        find(datastoreName: string, query: FindQuery, done: Callback<PhysicalRecord[]>): void;
        /** Count matching records. */
        count(datastoreName: string, query: CountQuery, done: Callback<number>): void;
        /** Sum an attribute over matching records. */
        sum(datastoreName: string, query: NumericQuery, done: Callback<number>): void;
        /** Average an attribute over matching records. */
        avg(datastoreName: string, query: NumericQuery, done: Callback<number>): void;

        /** Create the unique indexes of a physical model (collection). */
        define(
            datastoreName: string,
            tableName: string,
            phmDef: PhysicalModelDefinition,
            done: Callback,
        ): void;
        /** Drop a physical model (collection). Does nothing if it does not exist. */
        drop(datastoreName: string, tableName: string, unused: unknown, done: Callback): void;

        definePhysicalModel: MachineDefinition;
        dropPhysicalModel: MachineDefinition;
        setPhysicalSequence: MachineDefinition;
    }
}
