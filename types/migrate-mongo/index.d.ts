// Type definitions for migrate-mongo 8.2
// Project: https://github.com/seppevs/migrate-mongo#readme
// Definitions by: Amit Beckenstein <https://github.com/amitbeck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as mongo from 'mongodb';

export function init(): Promise<void>;
export function create(description: string): Promise<string>;
export namespace database {
    function connect(): Promise<{
        client: mongo.MongoClient;
        db: mongo.Db & { close: mongo.MongoClient['close'] };
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
    /**
     * Set the passed config object.
     * @param config The config object.
     */
    function set(config: Partial<Config>): void;

    interface Config {
        mongodb: {
            url: Parameters<typeof mongo.MongoClient['connect']>[0];
            databaseName?: mongo.Db['databaseName'];
            options?: mongo.MongoClientOptions;
        };
        /**
         * The migrations dir, can be an relative or absolute path.
         */
        migrationsDir?: string | undefined;
        /**
         * The MongoDB collection where the applied changes are stored.
         */
        changelogCollectionName: string;
        /**
         * The file extension to create migrations and search for in migration dir
         */
        migrationFileExtension?: string | undefined;
        /**
         * Enable the algorithm to create a checksum of the file contents and use that in the comparison to determine
         * if the file should be run.  Requires that scripts are coded to be run multiple times.
         */
        useFileHash?: boolean | undefined;
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
export function up(db: mongo.Db, client: mongo.MongoClient): Promise<string[]>;
/**
 * Revert (only) the last applied migration.
 * @example
 * ```js
 * const db = await database.connect();
 * const migratedDown = await down(db);
 * migratedDown.forEach(fileName => console.log('Migrated Down:', fileName));
 * ```
 */
export function down(db: mongo.Db, client: mongo.MongoClient): Promise<string[]>;
export function status(db: mongo.Db): Promise<MigrationStatus[]>;

export interface MigrationStatus {
    fileName: string;
    fileHash?: string | undefined;
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
    | ((db: mongo.Db, next: mongo.Callback) => void)
    /**
     * @deprecated Callbacks are supported for backwards compatibility.
     * New migration scripts should be written using `Promise`s and/or `async` & `await`. It's easier to read and write.
     */
    | ((db: mongo.Db, client: mongo.MongoClient, next: mongo.Callback) => void);
