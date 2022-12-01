export = DeltaInspector;
declare function DeltaInspector(): void;
declare class DeltaInspector {
    getOriginalRecord(key: number | DBKey): any;
    getCurrentRecord(key: number | DBKey): any;
    getUpdatedRecords(): RecordIterator;
    getDeletedRecords(): RecordIterator;
    getInsertedRecords(): RecordIterator;
}
declare namespace DeltaInspector {
    export { DBKey, DataSet, RecordIterator };
}
type DBKey = import('../dbkey/DBKey');
type RecordIterator = import('./RecordIterator');
type DataSet = import('./DataSet');
