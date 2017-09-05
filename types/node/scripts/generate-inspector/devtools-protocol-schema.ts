// This file describes the known structure of the JSON data files that back the
// Chrome DevTools Protocol Docs, as in the below link.
// https://github.com/ChromeDevTools/devtools-protocol/tree/master/json
// This file is up-to-date as of r496688.

export interface Documentable {
    description?: string;
    deprecated?: boolean;
    experimental?: boolean;
}

export interface BaseType<T= string> {
    type: T;
}

export interface StringType extends BaseType<"string"> {
    enum?: string[];
}

export interface ArrayType extends BaseType<"array"> {
    items: Field;
    minItems?: number;
    maxItems?: number;
}

export interface ObjectDefinition extends BaseType<"object"> {
    properties?: Parameter[];
}

export interface ObjectReference {
    $ref: string;
}

export type TypeDefinition = BaseType<"any"|"integer"|"number"|"boolean"> |
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
    description?: string;
    handlers?: string[];
    parameters?: Parameter[];
    returns?: Parameter[];
    experimental?: boolean;
    redirect?: string;
}

export interface Event extends Documentable {
    name: string;
    parameters?: Parameter[];
    description?: string;
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
        commands: Command[],
        events?: Event[],
        dependencies?: string[],
    } & Documentable>;
}
