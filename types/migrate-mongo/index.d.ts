// Type definitions for migrate-mongo 7.0
// Project: https://github.com/seppevs/migrate-mongo#readme
// Definitions by: Amit Beckenstein <https://github.com/amitbeck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import * as mongo from 'mongodb';

export function init(): Promise<void>;
export function create(description: string): Promise<string>;
export namespace database {
    function connect(): Promise<{
        client: mongo.MongoClient;
        db: mongo.Db & { close: mongo.MongoClient['close'] },
    }>;
}
export namespace config {
    /**
     * @internal
     */
    const DEFAULT_CONFIG_FILE_NAME: string;
    /**
     * @internal
     */
    function shouldExist(): Promise<void>;
    /**
     * @internal
     */
    function shouldNotExist(): Promise<void>;
    /**
     * @internal
     */
    function getConfigFilename(): string;
    /**
     * Read the `migrate-mongo-config.js` file.
     */
    function read(): Promise<Config>;

    interface Config {
        mongodb: {
            url: Parameters<typeof mongo.MongoClient['connect']>[0];
            databaseName: mongo.Db['databaseName'];
            options: mongo.MongoClientOptions;
        };
        /**
         * The migrations dir, can be an relative or absolute path.
         */
        migrationsDir?: string;
        /**
         * The MongoDB collection where the applied changes are stored.
         */
        changelogCollectionName: string;
    }
}

/**
 * Apply all pending migrations.
 * @example
 * ```js
 * const db = await database.connect();
 * const migrated = await up(db);
 * migrated.forEach(fileName => console.log('Migrated:', fileName));
 * ```
 * If an an error occurred, the promise will reject and won't continue with the rest of the pending migrations.
 */
export function up(db: mongo.Db): Promise<string[]>;
/**
 * Revert (only) the last applied migration.
 * @example
 * ```js
 * const db = await database.connect();
 * const migratedDown = await down(db);
 * migratedDown.forEach(fileName => console.log('Migrated Down:', fileName));
 * ```
 */
export function down(db: mongo.Db): Promise<string[]>;
export function status(db: mongo.Db): Promise<MigrationStatus[]>;

export interface MigrationStatus {
    fileName: string;
    /**
     * Either "PENDING" or a JSON date.
     */
    appliedAt: string;
}

/**
 * Type of `up()` and `down()` functions for migration scripts.
 */
export type MigrationFunction =
    | ((db: mongo.Db, client: mongo.MongoClient) => Promise<void>)
    /**
     * @deprecated Callbacks are supported for backwards compatibility.
     * New migration scripts should be written using `Promise`s and/or `async` & `await`. It's easier to read and write.
     */
    | ((db: mongo.Db, next: mongo.MongoCallback<mongo.UpdateWriteOpResult>) => void)
    /**
     * @deprecated Callbacks are supported for backwards compatibility.
     * New migration scripts should be written using `Promise`s and/or `async` & `await`. It's easier to read and write.
     */
    | ((db: mongo.Db, client: mongo.MongoClient, next: mongo.MongoCallback<mongo.UpdateWriteOpResult>) => void);
