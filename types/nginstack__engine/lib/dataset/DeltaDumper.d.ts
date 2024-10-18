export = DeltaDumper;
declare function DeltaDumper(): void;
declare namespace DeltaDumper {
    export { getDeltaDump, DELTA_INSERTED, DELTA_UPDATED, DELTA_DELETED, DELTA_ALL, DataSet };
}
declare function getDeltaDump(ds: DataSet, deltaKind?: number): any;
declare let DELTA_INSERTED: number;
declare let DELTA_UPDATED: number;
declare let DELTA_DELETED: number;
declare let DELTA_ALL: number;
type DataSet = import('./DataSet');
