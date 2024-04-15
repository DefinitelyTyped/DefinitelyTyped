export = findFields;
declare function findFields(ds: DataSet, fieldNames: string[]): number;
declare namespace findFields {
    export { DataSet };
}
type DataSet = import('./DataSet');
