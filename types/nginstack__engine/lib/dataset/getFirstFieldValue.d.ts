export = getFirstFieldValue;
declare function getFirstFieldValue(ds: DataSet, fieldNames: string[]): any;
declare namespace getFirstFieldValue {
    export { DataSet };
}
type DataSet = import('./DataSet');
