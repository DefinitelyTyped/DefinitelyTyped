export = TransactionLog;
declare function TransactionLog(): void;
declare class TransactionLog {
    private classDefManager_;
    private dbCache_;
    private classes_;
    private logger_;
    private deletePerDay_;
    getClearRules(): ClearRule[];
    clear(): void;
    query(options: LogQueryOptions): DataSet;
    private prepareChanges_;
    private applyLog_;
    undoLog(options: LogQueryOptions | LogApplyOptions): number;
    redoLog(options: LogQueryOptions | LogApplyOptions): number;
}
declare namespace TransactionLog {
    export {
        jazFilesTransactionLogMaxDays,
        errorEventsTransactionLogMaxDays,
        emailEventsTransactionLogMaxDays,
        Database,
        DataSet,
        ClearRule,
        LogQueryOptions,
        LogApplyOptions,
    };
}
declare let jazFilesTransactionLogMaxDays: number;
declare let errorEventsTransactionLogMaxDays: number;
declare let emailEventsTransactionLogMaxDays: number;
type Database = import('../database/Database');
type DataSet = import('../dataset/DataSet');
interface ClearRule {
    kind: 'class' | 'table';
    maxDays: number;
    tableName: string;
    tableClass: number;
    classKeys?: number[];
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
