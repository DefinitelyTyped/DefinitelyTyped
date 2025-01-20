export = fieldValueIsEqual;
declare function fieldValueIsEqual(ds: DataSet, fieldName: string, value: any): boolean;
declare namespace fieldValueIsEqual {
    export { DataSet };
}
type DataSet = import('./DataSet');
