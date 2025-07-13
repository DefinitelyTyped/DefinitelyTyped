export = DeltaInspector;
declare function DeltaInspector(): void;
declare class DeltaInspector {
    getOriginalRecord(key: number | DBKey): Record<string, any> | null;
    getCurrentRecord(key: number | DBKey): Record<string, any> | null;
    getUpdatedRecords(): RecordIterator;
    getDeletedRecords(): RecordIterator;
    getInsertedRecords(): RecordIterator;
}
declare namespace DeltaInspector {
    export { DBKey, DataSet, RecordIterator };
}
type DBKey = import('../dbkey/DBKey');
type DataSet = import('./DataSet');
type RecordIterator = import('./RecordIterator');
