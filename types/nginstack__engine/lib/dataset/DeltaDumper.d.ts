export = DeltaDumper;
declare function DeltaDumper(): void;
declare namespace DeltaDumper {
    export { getDeltaDump, DELTA_INSERTED, DELTA_UPDATED, DELTA_DELETED, DELTA_ALL, DataSet };
}
declare function getDeltaDump(ds: DataSet, deltaKind?: number): any;
declare var DELTA_INSERTED: number;
declare var DELTA_UPDATED: number;
declare var DELTA_DELETED: number;
declare var DELTA_ALL: number;
type DataSet = import('./DataSet');
