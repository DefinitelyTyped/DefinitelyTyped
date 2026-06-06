import { Db } from "mongodb";

export interface DbConfig {
    hosts?: string | undefined;
    db?: string | undefined;
    user?: string | undefined;
    password?: string | undefined;
    mongoUri?: string | undefined;
    migrationCollection: string;
    replicaSet?: string | undefined;
}

export interface MigrationResponse {
    id: string;
    status: "not-run" | "skipped" | "pending" | "ok" | "error" | "rollback" | "rollback-error";
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
    down?: ((db: Db, cb: (err?: Error) => void) => void) | undefined;
}
