export interface SchemaInterface {
    [key: string]: SingleFieldInterface | NestedFieldsInterface;
}

export interface SingleFieldInterface {
    type: string;
    encoding?: string;
    bitWidth?: number;
    optional?: boolean;
}

export interface NestedFieldsInterface {
    repeated: boolean;
    fields: SchemaInterface;
}
