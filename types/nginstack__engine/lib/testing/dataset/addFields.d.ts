export = addFields;
declare function addFields(ds: DataSet, fields: FieldObj[]): DataSet;
declare namespace addFields {
    export { FieldObj, DataSet };
}
interface FieldObj {
    name: string;
    type: string;
    size?: number;
}
type DataSet = import('../../dataset/DataSet');
