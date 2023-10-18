/// <reference types="node" />

export type EmptyObject = {
    [K in any]: never;
};

export type ErrorOnlyCallback = (error?: Error) => void;

export interface DriverMigration {
    comment: string | null;
    checksum: string | null;
    level: number;
    namespace: string;
    timestamp: string | null;
}

export interface ParsedMigration {
    filename: string;
    level: number;
    comment: string;
    script: string;
    directives: Record<string, string>;
    namespace: string;
}

export interface Driver {
    connect(cb: ErrorOnlyCallback): void;
    disconnect(cb: ErrorOnlyCallback): void;
    dropMigrations(cb: ErrorOnlyCallback): void;
    ensureMigrations(cb: ErrorOnlyCallback): void;
    lockMigrations(cb: ErrorOnlyCallback): void;
    unlockMigrations(cb: ErrorOnlyCallback): void;
    getMigrations(cb: (error: Error | null, migrations: DriverMigration[]) => void): void;
    runMigration(migration: ParsedMigration, cb: ErrorOnlyCallback): void;
}

export interface ScanOptions {
    directives?: Record<string, string>;
    filter?: RegExp;
    /**
     * @deprecated Replaced by `directives`
     */
    migrations?: Record<string, string>;
    quiet?: boolean;
}

export * from "./api/callback";
