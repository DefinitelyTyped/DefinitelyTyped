// Type definitions for knex-db-manager 0.6
// Project: https://github.com/Vincit/knex-db-manager#readme
// Definitions by: Dmitrii Solovev <https://github.com/dimonnwc3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { QueryBuilder, Config as KnexConfig } from 'knex';

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
    knexInstance(): QueryBuilder;
}

export interface DbManagerConfig {
    collate?: string[];
    superUser?: string;
    superPassword?: string;
    populatePathPattern?: string;
}

export interface DbanagerFactoryConfig {
    knex: KnexConfig | string;
    dbManager: DbManagerConfig;
}

export function databaseManagerFactory(config: DbanagerFactoryConfig): KnexDbManager;
