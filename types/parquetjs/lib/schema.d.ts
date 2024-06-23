import { FieldInterface } from "./field.interface";
import { SchemaInterface } from "./schema.interface";

export class ParquetSchema {
    schema: SchemaInterface;

    fields: { [key: string]: FieldInterface };

    fieldList: FieldInterface[];

    constructor(schema: SchemaInterface);

    findField(path: string | string[] | string[][]): FieldInterface;

    findFieldBranch(path: string | string[]): FieldInterface[];
}
