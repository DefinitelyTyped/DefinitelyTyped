import { MongoClientOptions } from "mongodb";

/**
 * Setup and tear down test fixtures with MongoDB.
 *
 * Use custom scripts to create indexes and more!
 *
 * @see https://www.npmjs.com/package/node-mongodb-fixtures
 */
declare class Fixtures {
    constructor(options?: Fixtures.Options);

    /**
     * @param uri MongoDB connection string.
     *
     * @param options MongoDB connection options.
     *
     * @param dbName Identifies a database to switch to. Useful when the db in the connection string differs from the db you want to connect to.
     */
    connect(uri: string, options?: MongoClientOptions, dbName?: string): Promise<this>;

    load(): Promise<this>;

    unload(): Promise<this>;

    disconnect(): Promise<void>;
}

declare namespace Fixtures {
    interface Options {
        /**
         * Specifiy the fixtures directory or default to `./fixtures`.
         */
        dir?: string | undefined;

        /**
         * Filter the fixtures present in the directory with a regex pattern.
         */
        filter?: string | undefined;

        /**
         * Specify `true` to mute the log output or default to `false`.
         */
        mute?: boolean | undefined;
    }
}

export = Fixtures;
