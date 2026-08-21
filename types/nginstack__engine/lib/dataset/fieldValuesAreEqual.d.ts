export = fieldValuesAreEqual;
declare function fieldValuesAreEqual(
    ds: DataSet,
    fieldNames: string[],
    fieldValues: any[]
): boolean;
declare namespace fieldValuesAreEqual {
    export { DataSet };
}
type DataSet = import('./DataSet');
