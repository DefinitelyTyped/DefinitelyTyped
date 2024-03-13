import { Knex } from "knex";

export interface KnexDbManager {
    createDbOwnerIfNotExist(): Promise<void>;
    updateIdSequences(): Promise<void>;
    createDb(dbName?: string): Promise<void>;
    dropDb(dbName?: string): Promise<void>;
    migrateDb(): Promise<void>;
    close(): Promise<void>;
    closeKnex(): Promise<void>;
    dbVersion(): Promise<string>;
    populateDb(glob?: string): Promise<void>;
    copyDb(fromDbName?: string, toDbName?: string): Promise<void>;
    truncateDb(ignoreTables?: string[]): Promise<void>;

    // Warning: We actually just want the Knex interface, but it's not exported in the current version of `knex`
    // Updating to a newer version of `knex` is also problematic since older version of Typescript throw errors
    // The current solution extracts the Knex interface from the Seeder constructor
    knexInstance(): ConstructorParameters<typeof Knex.Seeder>[0];
}

export interface DbManagerConfig {
    collate?: string[] | undefined;
    superUser?: string | undefined;
    superPassword?: string | undefined;
    populatePathPattern?: string | undefined;
}

export interface DbManagerFactoryConfig {
    knex: Knex.Config | string;
    dbManager: DbManagerConfig;
}

export function databaseManagerFactory(config: DbManagerFactoryConfig): KnexDbManager;
