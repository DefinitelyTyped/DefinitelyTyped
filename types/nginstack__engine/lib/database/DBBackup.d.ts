export = DBBackup;
declare function DBBackup(
    backupFileName: string,
    dbServerHost: string,
    dbName: string,
    userId?: string,
    password?: string
): void;
declare class DBBackup {
    constructor(
        backupFileName: string,
        dbServerHost: string,
        dbName: string,
        userId?: string,
        password?: string
    );
    backup(ignoredTables: string): void;
    partialBackup(initialLogDate: Date, ignoredTables: string): void;
    restore(options: number): RestoreResult;
}
declare namespace DBBackup {
    export {
        IGNORE_DUPLICATED_KEYS,
        IGNORE_EXISTING_TABLES,
        MERGE_ILOG_TABLE,
        DRY_RUN,
        RestoredTable,
        RestoreResult,
    };
}
interface RestoreResult {
    success: boolean;
    error: string;
    tables: RestoredTable[];
}
declare var IGNORE_DUPLICATED_KEYS: number;
declare var IGNORE_EXISTING_TABLES: number;
declare var MERGE_ILOG_TABLE: number;
declare var DRY_RUN: number;
interface RestoredTable {
    name: string;
    recordCount: number;
    merged: boolean;
    ignored: boolean;
    ignoredKeys: number[];
}
