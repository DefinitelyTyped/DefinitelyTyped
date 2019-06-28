export interface SchemaInterface {
    [key: string]: SingleFieldInterface | NestedFieldsInterface;
}

export interface SingleFieldInterface {
    type: string;
}

export interface NestedFieldsInterface {
    repeated: boolean;
    fields: SchemaInterface;
}
