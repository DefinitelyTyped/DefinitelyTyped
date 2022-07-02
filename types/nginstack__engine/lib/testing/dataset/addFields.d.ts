export = addFields;
declare function addFields(ds: any, fields: FieldObj[]): any;
declare namespace addFields {
    export { FieldObj };
}
interface FieldObj {
    name: string;
    type: string;
    size?: number;
}
