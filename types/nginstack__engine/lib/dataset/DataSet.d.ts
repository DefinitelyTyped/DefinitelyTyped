export = DataSet;
declare function DataSet(idoDB?: IdoDB): void;
declare class DataSet {
    constructor(idoDB?: IdoDB);
    sqlStatement: string;
    createField(fieldName: string, fieldType: string, opt_fieldSize?: number): void;
    create(): void;
    reload(): void;
    append(
        dataSet?: DataSet | any[],
        updatePreexistingKey?: boolean,
        insertEvenPreexistingKey?: boolean
    ): void;
    post(): void;
    automaticPost: boolean;
    fieldDefs: DataSetFieldDefs;
    first(): void;
    fieldIsProtected(fieldName: string): boolean;
    last(): void;
    eof: boolean;
    getView(): void;
    resetView(): void;
    viewActive: boolean;
    bof: boolean;
    next(): void;
    classesFilter: string;
    tableName: string;
    automaticApplyUpdates: boolean;
    integrityCheck: boolean;
    modified: boolean;
    localDBInfo: any;
    recordCount: number;
    dataSetVersion: number;
    dataSetId: number;
    recordVersion: number;
    active: boolean;
    bookmark: string;
    rowId: number;
    state: number;
    filter: string;
    fieldCount: number;
    filtered: boolean;
    indexFieldNames: string;
    insertWithKey: boolean;
    insertWithHighKey: boolean;
    isEmpty: boolean;
    isProtected: boolean;
    logChanges: boolean;
    recNo: number;
    verifyDeleteIntegrity: boolean;
    streamDelta: boolean;
    streamOnlyChangedRecords: boolean;
    goToCurrent(ds: DataSet): void;
    protect(fields: string[], opt_options?: any): number;
    unprotect(key: number): void;
    protectedFields: string[];
    sql(sqlExpression: string): void;
    prior(): void;
    del(): void;
    close(): void;
    clone(source: DataSet, opt_options?: any): void;
    copy(source: DataSet): void;
    empty(): void;
    find(searchValues: any): boolean;
    findNearest(searchValues: any): void;
    findKey(key: number): boolean;
    getIndex(): string[];
    locate(
        fields: string,
        values:
            | string
            | Date
            | number
            | boolean
            | null
            | Array<string | Date | number | boolean | null>,
        searchPartialValues?: boolean
    ): boolean;
    locatePattern(fields: string, values: string, logicalOperator: string): boolean;
    locateNextPattern(): boolean;
    setRange(startVal: any, endVal: any): void;
    getRange(): any[];
    rangeActive: boolean;
    resetRange(): void;
    setIndex(fieldNames: string, opt_descendingFieldNames?: string): void;
    getFieldName(fieldIdx: number): void;
    getFieldNames(opt_options?: { toLowerCase: boolean }): string[];
    getFieldType(fieldId: number | string): void;
    fieldWasModified(fieldId: number | string): void;
    getFieldModified(fieldId: number | string): void;
    resetFields(): void;
    getFieldSize(fieldNameOrPositionIndex: any): number;
    loadFromStream(streamObject: File | MemoryStream): void;
    saveToStream(streamObject: File | MemoryStream): void;
    sum(fieldsToGroup: string, fieldsToSum: string): DataSet;
    copyRecord(ds: DataSet, excludedFieldNames?: string): void;
    fieldIsNull(fieldNameOrPositionIndex: any): boolean;
    getField(
        fieldId: number | string,
        opt_options?: GetFieldOptions | number
    ): string | number | Date | boolean | null;
    setField(fieldId: number | string, value: any, opt_ignoreInvalidFieldId?: boolean): void;
    applyUpdates(opt_waitDBCacheSync?: boolean, opt_logChanges?: boolean): number;
    cancelUpdates(opt_key?: number): void;
    copyStructure(sourceDataSet: DataSet, fieldNames?: string): void;
    rollBack(): void;
    cancel(): void;
    edit(): void;
    findField(fieldName: string): number;
    getRows(fieldName: string): any[];
    applyLog(iLog: DataSet, options?: ApplyUndoLogOptions): void;
    undoLog(iLog: DataSet, options?: ApplyUndoLogOptions): void;
    setView(classKey: number, userKey?: number, securityExtraFilter?: string): void;
    setRecordApplyUpdatesAction(key: number, action: number): void;
    getRecordApplyUpdatesAction(key: number): number;
    search(
        resultFields: string,
        searchFields: string,
        value: string,
        inexact: boolean,
        limit: number
    ): DataSet;
    ignoredFieldNamesOnApplyUpdates: string;
    getLocalDBInfo(): {
        name: string;
        uniqueId: number;
        kind: string;
    };
    iterate(func: (arg0: DataSet) => any, thisObj?: any): void;
    getDeltaInspector(): DeltaInspector;
    updateAll(
        fieldNames: string[],
        values: any[] | DataSet,
        options?: {
            ignoreNonExistingFields?: boolean;
        }
    ): void;
    testMultivalue(): boolean;
    addMultivalue(): void;
    removeMultivalue(): void;
    gotoRowId(rowId: number): void;
    tryGotoRowId(rowId: number): boolean;
    gotoBookmark(bookmark: string): void;
    tryGotoBookmark(bookmark: string): boolean;
    backupState(): any;
    restoreState(state: any): void;
    newSharedDataSet(opt_options?: { sharedDelta: boolean }): DataSet;
    private _hasInformedField;
    getInformedField(fieldNameOrIndex: string | number): boolean;
    setInformedField(fieldNameOrIndex: string | number, informed: boolean): void;
    private _getAndSetFieldInformedCache;
    private _mountGetAndSetFieldInformedCache;
    getFieldInformed: any;
    setFieldInformed: any;
    private _fieldsCacheOfGetFields;
    private _indexFieldsCacheOfGetFields;
    getFields(fields: string | any[], options: GetFieldOptions): any[];
    val(expr: string): string | number | null | boolean | Date;
    str(expr: string): string;
    num(expr: string): number;
    bool(expr: string): boolean;
    date(expr: string): Date | null;
    dbkey(expr: string): DBKey | null;
}
declare namespace DataSet {
    export {
        getIntegerDataType,
        setIntegerDataType,
        setStringOverflowMode,
        getStringOverflowMode,
        File,
        MemoryStream,
        GetFieldOptions,
        DeltaInspector,
        IdoDB,
        DataSetFieldType,
        ApplyUndoLogOptions,
        DataSetFieldDef,
    };
}
type IdoDB = import('../ido/IdoDB');
declare function DataSetFieldDefs(): void;
declare class DataSetFieldDefs {
    size: number;
    add(
        defOrName: DataSetFieldDef | DataSetFieldDef[] | string,
        type?: DataSetFieldType,
        size?: number
    ): void;
    get(id: string | number): DataSetFieldDef;
    set(id: string | number, def: DataSetFieldDef): void;
    delete(id: string | number): boolean;
    has(name: string): boolean;
    clear(): void;
    assign(fieldDefs: DataSetFieldDefs): void;
    toArray(): DataSetFieldDef[];
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type GetFieldOptions = import('./GetFieldOptions');
interface ApplyUndoLogOptions {
    startVersion: number | null;
    endVersion: number | null;
}
type DeltaInspector = import('./DeltaInspector');
import DBKey = require('../dbkey/DBKey.js');
declare function getIntegerDataType(): DataSetFieldType;
declare function setIntegerDataType(type: DataSetFieldType): void;
declare function setStringOverflowMode(mode: string): void;
declare function getStringOverflowMode(): string;
type DataSetFieldType = import('./DataSetDataType').DataSetFieldType;
interface DataSetFieldDef {
    name: string;
    type: DataSetFieldType;
    size: number;
}
