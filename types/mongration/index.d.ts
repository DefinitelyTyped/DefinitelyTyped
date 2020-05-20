// Type definitions for mongration 1.0
// Project: https://github.com/awapps/mongration#readme
// Definitions by: Anton Lobashev <https://github.com/soulthreads>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import { Db } from 'mongodb';

export interface DbConfig {
    hosts?: string;
    db?: string;
    user?: string;
    password?: string;
    mongoUri?: string;
    migrationCollection: string;
    replicaSet?: string;
}

export interface MigrationResponse {
    id: string;
    status: 'not-run' | 'skipped' | 'pending' | 'ok' | 'error' | 'rollback' | 'rollback-error';
}

export class Migration {
    constructor(dbConfig: DbConfig);
    add: (paths: string | string[]) => void;
    addAllFromPath: (path: string) => void;
    migrate: (doneCb?: (err: Error | null, response: MigrationResponse[]) => void) => void;
}

export interface MigrationStep {
    id: string;
    up: (db: Db, cb: (err?: Error) => void) => void;
    down?: (db: Db, cb: (err?: Error) => void) => void;
}
