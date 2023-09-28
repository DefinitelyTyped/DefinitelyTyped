export = FieldList;
declare function FieldList(): void;
declare class FieldList {
    private nameAliases_;
    private init_;
    private _fieldsByFieldName;
    private _fieldIdxByFieldName;
    private _properties;
    private fields_;
    getFieldNames(opt_fieldsNames?: any[]): string[];
    count: number;
    clear(): void;
    add(field: Field): void;
    map(func: (arg0: string, ...args: any[]) => any, ...args: any[]): any[];
    private fieldNameMapper_;
    indexOf(nameOrField: string): any;
    field(nameOrIndex: string | number): Field;
    remove(nameOrIndexOrField: string | number | Field): Field;
    assign(fieldList: FieldList): void;
    clone(): FieldList;
    getFieldsByProperty(...args: any[]): FieldList;
    setFieldsProperties(
        fieldNames: string | Field[],
        propertyNames: string | string[] | ((arg0: Field) => void),
        ...args: any[]
    ): void;
    private toArray;
    private getText;
    private findObjectsByString;
    private objects;
    private strings;
    private getAllObjects;
    private find;
    private addObject;
}
import Field = require('./Field.js');
