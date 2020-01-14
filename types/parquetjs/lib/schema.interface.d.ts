export type SchemaInterfaceField = SingleFieldInterface | NestedFieldsInterface;

export interface SchemaInterface {
    [key: string]: SchemaInterfaceField;
}

export interface SingleFieldInterface {
    type: string;
    encoding?: string;
    bitWidth?: number;
    optional?: boolean;
    repeated?: boolean;
}

export interface NestedFieldsInterface {
    optional?: boolean;
    repeated?: boolean;
    fields: SchemaInterface;
}
