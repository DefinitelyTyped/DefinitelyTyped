export = DBBackup;
declare function DBBackup(options: {
    serverHost: string;
    dbName: string;
    dbUserName: string;
    dbPassword: string;
    userName?: string;
    password?: string;
}): void;
declare class DBBackup {
    constructor(options: {
        serverHost: string;
        dbName: string;
        dbUserName: string;
        dbPassword: string;
        userName?: string;
        password?: string;
    });
    backup(
        fileName: string,
        options?: {
            ignoredTables?: string;
            logStartDate?: Date;
        }
    ): void;
    restore(
        fileName: string,
        options: {
            ignoreDuplicateKeys: boolean;
            skipExistingTables: boolean;
            mergeLogTable: boolean;
            dryRun: boolean;
        }
    ): RestoreResult;
}
declare namespace DBBackup {
    export { RestoredTable, RestoreResult };
}
interface RestoredTable {
    name: string;
    recordCount: number;
    merged: boolean;
    ignored: boolean;
    ignoredKeys: number[];
}
interface RestoreResult {
    success: boolean;
    error: string;
    tables: RestoredTable[];
}
