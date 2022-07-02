export type SchemaInterfaceField = SingleFieldInterface | NestedFieldsInterface;

export interface SchemaInterface {
    [key: string]: SchemaInterfaceField;
}

export interface SingleFieldInterface {
    type: string;
    encoding?: string | undefined;
    bitWidth?: number | undefined;
    optional?: boolean | undefined;
    repeated?: boolean | undefined;
}

export interface NestedFieldsInterface {
    optional?: boolean | undefined;
    repeated?: boolean | undefined;
    fields: SchemaInterface;
}
