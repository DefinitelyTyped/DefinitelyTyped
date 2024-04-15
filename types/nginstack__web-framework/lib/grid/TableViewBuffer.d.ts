export = TableViewBuffer;
declare function TableViewBuffer(grid: any): void;
declare class TableViewBuffer {
    constructor(grid: any);
    buffer: any[];
    private _grid;
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
    private _searchRecordBufferByRecNo;
    getRecordBufferByRecNo(recNo: any): any;
    setFieldRecordBuffer(fieldIndex: any, recNo: any, value: any): void;
    toString(): string;
}
declare namespace TableViewBuffer {
    let BM_INACTIVE: number;
    let BM_EDIT: number;
    let BM_INSERT: number;
    let BM_BROWSE: number;
    let BM_DELETING: number;
}
