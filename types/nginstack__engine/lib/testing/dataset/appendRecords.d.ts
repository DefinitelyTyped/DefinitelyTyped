export = appendRecords;
declare function appendRecords(
    ds: DataSet,
    records: Array<Record<any, any>> | Record<any, any>,
    opt_post?: boolean
): void;
declare namespace appendRecords {
    export { DataSet };
}
type DataSet = import('../../dataset/DataSet');
