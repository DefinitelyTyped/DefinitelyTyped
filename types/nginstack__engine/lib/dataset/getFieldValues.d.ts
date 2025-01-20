export = getFieldValues;
declare function getFieldValues(dataSet: DataSet, fieldNames: string[] | string): any[];
declare namespace getFieldValues {
    export { DataSet };
}
type DataSet = import('./DataSet');
