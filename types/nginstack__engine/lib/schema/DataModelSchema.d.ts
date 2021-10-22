export = DataModelSchema;
declare function DataModelSchema(
    options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>
): void;
declare class DataModelSchema {
    constructor(options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>);
    private baseClass_;
    private classDefManager_;
    private classesTable_;
    private iVfs_;
    private tables_;
    private columnsPerTable_;
    private ignoreClassDefErrors_;
    private logger_;
    private classHasModelDefFiles_;
    private iterateClassesWithDef_;
    scanForClassDefErrors(): ClassDefError[];
    getTables(): TableInfo[];
    getTableColumns(tableName: string): ColumnInfo[];
    getTableIndexes(tableName: string): IndexInfo[];
    getUnmanagedTableNames(): string[];
    getUnmanagedTableColumns(tableName: string): string[];
    getUnmanagedTableIndexes(tableName: string): string[];
}
declare namespace DataModelSchema {
    export {
        getRemoteSchema,
        formatUniqueIndexName,
        Database,
        Field,
        TableInfo,
        ColumnDataTypeDef,
        ReferencedTable,
        ColumnInfo,
        IndexInfo,
        ClassDefError,
        DataModelSchemaInfo,
        DataModelSchemaOptions,
    };
}
interface DataModelSchemaOptions {
    baseClass: number;
    ignoreClassDefErrors: boolean;
}
interface ClassDefError {
    classKey: number;
    className: string;
    classPath: string;
    tableName: string;
    error: string;
    stackTrace: string;
}
interface TableInfo {
    name: string;
    displayName: string;
    primaryKey: string[];
    tableClass: number;
    tableClassName: string;
    keyFieldName: string;
    classFieldName: string;
    versionFieldName: string;
    cacheStrategy: {
        ALWAYS: string;
        NEVER: string;
        ON_DEMAND: string;
    };
    upgradeMustSyncRecords: boolean;
    managedDatabaseSchema: boolean;
    tablespace: string;
    indexTablespace: string;
    integerDatabaseType: string;
    errors: string[];
    warnings: string[];
}
interface ColumnInfo {
    name: string;
    dataType: string;
    charLength: number | null;
    nullable: boolean;
    sparse: boolean;
    referencedTables: ReferencedTable[];
    sourceClass: number;
    userCanChangeNegativeKeyClasses: number[];
    dataTypeDefs: ColumnDataTypeDef[];
    errors: string[];
    warnings: string[];
}
interface IndexInfo {
    name: string;
    columns: string[];
    columnsOrder: string[];
    filterPredicate: string;
    unique: boolean;
    tablespace: string;
    constraintType: string;
    compressed: boolean;
    sourceClass: number | null;
    definitionKey: number | null;
    integrityCheck: boolean;
    disabled: boolean;
    disableReason: string;
    errors: string[];
    warnings: string[];
}
declare function getRemoteSchema(
    database: Database,
    options?: DataModelSchemaOptions | Partial<DataModelSchemaOptions>
): DataModelSchemaInfo;
declare function formatUniqueIndexName(tableName: string, columns: string[]): string;
type Database = import('../database/Database');
type Field = import('../classdef/Field');
interface ColumnDataTypeDef {
    dataType: string;
    charLength: number | null;
    sourceClass: number;
}
interface ReferencedTable {
    name: string;
    baseClass: number;
    integrityCheck: boolean;
}
interface DataModelSchemaInfo {
    classDefErrors: ClassDefError[];
    tables: TableInfo[];
    tableColumns: Record<string, ColumnInfo[]>;
    tableIndexes: Record<string, IndexInfo[]>;
    unmanagedTableNames: string[];
    unmanagedTableColumns: Record<string, string[]>;
    unmanagedTableIndexes: Record<string, string[]>;
}
