export = TableViewBuffer;
declare function TableViewBuffer(grid: any): void;
declare class TableViewBuffer {
    constructor(grid: any);
    buffer: any[];
    _grid: any;
    stateModified: boolean;
    private state_;
    setState(value: number): void;
    getState(): number;
    isBrowsing(): boolean;
    isInactive(): boolean;
    resync(): void;
    resyncRecord(recNo: any): void;
    syncBookmarkAfterInsert: boolean;
    editedRecBuffer: any;
    clientBufferIndex: any;
    fEditingRecBuffer: any;
    setEditingRecBuffer(value: any): void;
    getEditingRecBuffer(): any;
    lastRecordIndex: number;
    reset(): void;
    clear(): void;
    editing: boolean;
    editingOrInserting: boolean;
    private getLastUsedBufferIndex;
    updateBufferProperties(propertyName: any, value: any): void;
    createRecordBuffer(qtd: any, bufferLength: any): void;
    rebuild(qtd: any, bufferLength: any): void;
    _searchRecordBufferByRecNo(recBuffer: any, recNo: any): number;
    getRecordBufferByRecNo(recNo: any): any;
    setFieldRecordBuffer(fieldIndex: any, recNo: any, value: any): void;
    toString(): string;
}
declare namespace TableViewBuffer {
    const BM_INACTIVE: number;
    const BM_EDIT: number;
    const BM_INSERT: number;
    const BM_BROWSE: number;
    const BM_DELETING: number;
}
