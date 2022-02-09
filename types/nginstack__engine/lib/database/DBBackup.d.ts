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
    restore(options: number): void;
    partialBackup(initialLogDate: Date, ignoredTables: string): void;
}
declare namespace DBBackup {
    const IGNORE_DUPLICATED_KEYS: any;
    const IGNORE_EXISTING_TABLES: any;
    const MERGE_ILOG_TABLE: any;
}
