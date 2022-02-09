export = DeltaDumper;
declare function DeltaDumper(): void;
declare namespace DeltaDumper {
    function getDeltaDump(ds: any, deltaKind?: number): any;
    const DELTA_INSERTED: number;
    const DELTA_UPDATED: number;
    const DELTA_DELETED: number;
    const DELTA_ALL: number;
}
