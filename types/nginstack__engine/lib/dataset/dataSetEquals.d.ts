export = dataSetEquals;
declare function dataSetEquals(a: DataSet, b: DataSet): boolean;
declare namespace dataSetEquals {
    export { DataSet };
}
type DataSet = import('./DataSet');
