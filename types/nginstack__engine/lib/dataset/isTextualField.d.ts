export = isTextualField;
declare function isTextualField(ds: DataSet, fieldName: string): boolean;
declare namespace isTextualField {
    export { DataSet };
}
type DataSet = import('./DataSet');
