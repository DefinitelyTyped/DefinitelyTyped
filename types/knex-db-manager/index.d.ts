// Type definitions for knex-db-manager 0.6
// Project: https://github.com/Vincit/knex-db-manager#readme
// Definitions by: Dmitrii Solovev <https://github.com/dimonnwc3>
//                 Nicusor Chiciuc <https://github.com/nicu-chiciuc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Knex } from 'knex';

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
    knexInstance(): Knex;
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
