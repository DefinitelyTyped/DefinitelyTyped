export interface SchemaInterface {
    [key: string]: SingleFieldInterface | NestedFieldsInterface
}

interface SingleFieldInterface {
    type: string,
}

interface NestedFieldsInterface {
    repeated: boolean,
    fields: SchemaInterface,
}
