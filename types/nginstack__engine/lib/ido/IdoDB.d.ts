export = IdoDB;
declare function IdoDB(): void;
declare class IdoDB {
    tableExists(tableName: string): void;
    getTablesNames(): any[];
    dropTable(tableName: string): void;
    getTable(tableName: string): DataSet;
    getDBStatistics(): string;
    uniqueId: any;
    name: any;
}
declare namespace IdoDB {
    export { DataSet };
}
type DataSet = import('../dataset/DataSet');
