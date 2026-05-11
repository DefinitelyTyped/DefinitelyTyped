export = IdoDB;
declare function IdoDB(): void;
declare class IdoDB {
    name: string;
    uniqueId: number;
    size: number;
    tableExists(tableName: string): boolean;
    getTableNames(): string[];
    dropTable(tableName: string): void;
    getTable(tableName: string): DataSet;
    getDBStatistics(): string;
    close(): void;
}
declare namespace IdoDB {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
