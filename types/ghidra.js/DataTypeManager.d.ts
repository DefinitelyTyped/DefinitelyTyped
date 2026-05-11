import type { JavaClass } from "./JavaClass";
// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataType.html

export interface DataType extends JavaClass {
    addParent(dt: DataType): void;
    clone(dtm: DataTypeManager): DataType;
    copy(dtm: DataTypeManager): DataType;
    dataTypeAlignmentChanged(dt: DataType): void;
    dataTypeDeleted(dt: DataType): void;
    dataTypeNameChanged(dt: DataType, oldName: string): void;
    dataTypeReplaced(oldDt: DataType, newDt: DataType): void;
    dataTypeSizeChanged(dt: DataType): void;
    dependsOn(dt: DataType): boolean;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeManager.html

export interface DataTypeManager extends JavaClass {
    addDataType(dataType: DataType, handler: DataTypeConflictHandler): DataType;
    close(): void;
    contains(dataType: DataType): boolean;
    dataTypeChanged(dataType: DataType, isAutoChange: boolean): void;
    disassociate(datatype: DataType): void;
    endTransaction(transactionID: number, commit: boolean): void;
    findDataType(dataTypePath: string): DataType;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeConflictHandler.html

export interface DataTypeConflictHandler extends JavaClass {
    resolveConflict(addedDataType: DataType, existingDataType: DataType): void;
    shouldUpdate(sourceDataType: DataType, localDataType: DataType): boolean;
}
