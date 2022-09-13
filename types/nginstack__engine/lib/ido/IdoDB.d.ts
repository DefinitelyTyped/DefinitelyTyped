export = IdoDB;
declare function IdoDB(): void;
declare class IdoDB {
    tableExists(tableName: string): void;
    getTablesNames(): any[];
    dropTable(tableName: string): void;
    getTable(tableName: string): any;
    getDBStatistics(): string;
    uniqueId: any;
    name: any;
}
