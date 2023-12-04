export = DBCache;
declare function DBCache(): void;
declare class DBCache {
    private systemTables_;
    private readTableSchemaField_;
    dbName: string;
    host: string;
    dbType: string;
    dbDate: Date;
    dbUTCDate: Date;
    initializedSuccessfully: boolean;
    lastSynchronizedVersion: number;
    getTable(tableName: string): DataSet;
    copyTableStructure(tableName: string, ds: DataSet): void;
    getFieldValue(
        key: number,
        fieldName: string,
        refreshIfNotFound: boolean
    ): number | boolean | string | null;
    findKey(key: number): {
        tableName: string;
        rowId: number;
    };
    hasTable(tableName: string): boolean;
    isCachedTable(tableName: string): boolean;
    getTableClass(tableName: string): number;
    getTableNameDefinedByClass(classKey: number): boolean;
    getTableNames(): any[];
    refresh(wait?: boolean, timeout?: number): boolean;
    isFromCache(ds: DataSet): boolean;
    tableContainsKey(tableName: string, key: number): boolean;
    getKeyFieldName(tableName: string): string;
    getClassFieldName(tableName: string): string;
    getVersionFieldName(tableName: string): string;
    tryGetClass(key: number): number | null;
    getClass(key: number): number;
    newTableStructure(tableName: string): DataSet;
    private fieldExistsCache_;
    fieldExists(tableName: string, fieldName: string): boolean;
    recordFieldExists(key: number, fieldName: string): boolean;
}
import DataSet = require('../dataset/DataSet.js');
