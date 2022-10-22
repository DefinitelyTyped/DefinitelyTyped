export = getDistinctValues;
declare function getDistinctValues(ds: DataSet, fieldName: string): any[];
declare namespace getDistinctValues {
    export { DataSet };
}
type DataSet = import('./DataSet');
