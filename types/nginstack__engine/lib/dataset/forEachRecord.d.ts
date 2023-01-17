export = forEachRecord;
declare function forEachRecord(ds: DataSet, f: (arg0: DataSet) => any, opt_obj?: any): void;
declare namespace forEachRecord {
    export { DataSet };
}
type DataSet = import('./DataSet');
