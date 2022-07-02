export = DatabaseSchema;
declare function DatabaseSchema(database?: Database): void;
declare class DatabaseSchema {
    constructor(database?: Database);
    private database_;
    private dbType_;
    private timestampRegExp_;
    private timestampZoneRegExp_;
    private logger_;
    database: Database;
    private nativeTypeToDataType_;
    private formatColumnDataTypeDef_;
    private formatColumnDef_;
    private formatTableNamesFilter_;
    private formatOptionalFilter_;
    private getCurrentDatabaseName_;
    private databaseName_;
    private findUniqueConstraint_;
    private findPrimaryKeyConstraint_;
    private checkIdentifierNames_;
    private supportsExecuteDDL_;
    private executeDDL_;
    private getColumns_;
    private getTableIndexes_;
    private updateSchemaVersion_;
    private normalizeColumnDefs_;
    private notifyObservers_;
    getTables(tableNames?: string[]): TableInfo[];
    getTableColumns(tableName: string): ColumnInfo[];
    getTableIndexes(tableName: string): IndexInfo[];
    getTableTriggers(tableName: string): TriggerInfo[];
    getViews(viewNames?: string[]): ViewInfo[];
    getViewColumns(viewName: any): ColumnInfo[];
    getAllTablesAndViewsColumns(): Record<string, ColumnInfo[]>;
    getAllTablesIndexes(): Record<string, IndexInfo[]>;
    createTable(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
            primaryKey: string[];
            tablespace: string;
            indexTablespace: string;
        }
    ): string;
    dropTable(
        tableName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    alterTable(
        tableName: string,
        options: {
            dryRun: boolean;
            primaryKey: string[];
            indexTablespace: string;
        }
    ): string;
    addTableColumns(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
        }
    ): string;
    dropTableColumns(
        tableName: string,
        columns: string[],
        options?: {
            dryRun: boolean;
        }
    ): string;
    alterTableColumns(
        tableName: string,
        columns: ColumnDef[],
        options?: {
            dryRun: boolean;
            indexTablespace: string;
        }
    ): string;
    renameTableColumn(
        tableName: string,
        columnName: string,
        newColumnName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    supportsOnlineIndexCreation(): boolean;
    supportsOnlineIndexDrop(): boolean;
    createTableIndex(
        tableName: string,
        indexDef: IndexDef,
        options?: {
            dryRun: boolean;
            online: boolean;
        }
    ): string;
    renameTableIndex(
        tableName: string,
        indexName: string,
        newIndexName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
    dropTableIndex(
        tableName: string,
        indexName: string,
        options?: {
            dryRun: boolean;
            online: boolean;
        }
    ): string;
    dropView(
        viewName: string,
        options?: {
            dryRun: boolean;
        }
    ): string;
}
declare namespace DatabaseSchema {
    export {
        registerObserver,
        deregisterObserver,
        Database,
        TableInfo,
        ViewInfo,
        ColumnInfo,
        IndexInfo,
        TriggerInfo,
        ColumnDef,
        IndexDef,
    };
}
type Database = import('../database/Database');
interface TableInfo {
    name: string;
    primaryKey: string[];
    tablespace: string;
}
interface ColumnInfo {
    name: string;
    dataType: string | null;
    nativeDataType: string;
    charLength: number | null;
    numericPrecision: number | null;
    numericScale: number | null;
    nullable: boolean;
    unique: boolean;
    sparse: boolean;
}
interface IndexInfo {
    name: string;
    columns: string[];
    columnsOrder: string[];
    filterPredicate: string;
    unique: boolean;
    constraintType: string;
    tablespace: string;
    compressed: boolean;
    valid: boolean;
}
interface TriggerInfo {
    name: string;
    eventManipulation: string[];
    actionOrientation: string;
    actionTiming: string;
    actionCondition: string;
    actionStatement: string;
    enabled: boolean;
}
interface ViewInfo {
    name: string;
    definition: string;
}
interface ColumnDef {
    name: string;
    dataType: string;
    charLength?: number;
    numericPrecision?: number;
    numericScale?: number;
    nullable?: boolean;
    unique?: boolean;
    sparse?: boolean;
    identity?: boolean;
}
interface IndexDef {
    name: string;
    columns: string[];
    columnsOrder?: string[];
    filterPredicate?: string;
    unique?: boolean;
    tablespace?: string;
    compressed?: boolean;
}
declare function registerObserver(observer: import('./DatabaseSchemaObserver')): void;
declare function deregisterObserver(observer: import('./DatabaseSchemaObserver')): void;
