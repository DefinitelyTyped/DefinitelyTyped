export = TransactionLog;
declare function TransactionLog(): void;
declare class TransactionLog {
    private logger_;
    private deletePerDay_;
    private getTableCleanupConfig_;
    private getLogTypeCleanupConfig_;
    queryDeletedKeysInLog_(
        fieldName: string,
        existingKeys: number[],
        maxRetention: number
    ): number[];
    clear(): void;
    query(options: LogQueryOptions): DataSet;
    private prepareChanges_;
    private applyLog_;
    undoLog(options: LogQueryOptions | LogApplyOptions): number;
    redoLog(options: LogQueryOptions | LogApplyOptions): number;
}
declare namespace TransactionLog {
    export {
        Database,
        DataSet,
        TableCleanupConfig,
        LogTypeCleanupConfig,
        TableCleanupRule,
        SpecificClassesRetentionRule,
        LogTypeCleanupRule,
        LogKeyList,
        LogQueryOptions,
        LogApplyOptions,
    };
}
type Database = import('../database/Database');
type DataSet = import('../dataset/DataSet');
type TableCleanupConfig = TableCleanupRule[];
type LogTypeCleanupConfig = LogTypeCleanupRule[];
interface TableCleanupRule {
    tableName: string;
    tableClass: number;
    retentionInDays: number;
    specificClassRules: SpecificClassesRetentionRule[];
}
interface SpecificClassesRetentionRule {
    retentionInDays: number;
    class: number;
}
interface LogTypeCleanupRule {
    retentionInDays: number;
    logType: number;
}
interface LogKeyList {
    existing: number[];
    deleted: number[];
}
interface LogQueryOptions {
    startDate?: Date;
    endDate?: Date;
    startTime?: string;
    endTime?: string;
    tableClass?: number | number[];
    recordKey?: number | number[];
    userKey?: number | number[];
    version?: number | number[];
    logType?: number | number[];
    sourceDatabase?: Database;
}
interface LogApplyOptions {
    logs: DataSet;
    sourceDatabase?: Database;
}
