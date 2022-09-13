export = DeltaInspector;
declare function DeltaInspector(): void;
declare class DeltaInspector {
    getOriginalRecord(key: number | DBKey): any;
    getCurrentRecord(key: number | DBKey): any;
    getUpdatedRecords(): any;
    getDeletedRecords(): any;
    getInsertedRecords(): any;
}
declare namespace DeltaInspector {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
