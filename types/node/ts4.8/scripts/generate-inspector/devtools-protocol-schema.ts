// This file reflects the known structure of the JSON data file that describes the v8 inspector protocol.
// https://github.com/nodejs/node/blob/master/deps/v8/src/inspector/js_protocol.json

export interface Documentable {
    description?: string;
    deprecated?: boolean;
    experimental?: boolean;
}

export interface BaseType<T= string> {
    type: T;
}

export interface StringType extends BaseType<'string'> {
    enum?: string[];
}

export interface ArrayType extends BaseType<'array'> {
    items: Field;
    minItems?: number;
    maxItems?: number;
}

export interface ObjectDefinition extends BaseType<'object'> {
    properties?: Parameter[];
}

export interface ObjectReference {
    $ref: string;
}

export type TypeDefinition = BaseType<'any'|'integer'|'number'|'boolean'> |
    StringType | ArrayType | ObjectDefinition;

export type Type = TypeDefinition & Documentable & {
    id: string,
};

export type Field = TypeDefinition | ObjectReference;

export type Parameter = Field & Documentable & {
    name: string,
    optional?: boolean,
};

export interface Command extends Documentable {
    name: string;
    handlers?: string[];
    parameters?: Parameter[];
    returns?: Parameter[];
    redirect?: string;
}

export interface Event extends Documentable {
    name: string;
    parameters?: Parameter[];
}

// It should be safe to load a devtools-protocol/json file and cast it to
// this type.
export interface Schema {
    version: {
        major: string,
        minor: string,
    };
    domains: Array<{
        domain: string,
        types?: Type[],
        commands?: Command[],
        events?: Event[],
        dependencies?: string[],
    } & Documentable>;
}
