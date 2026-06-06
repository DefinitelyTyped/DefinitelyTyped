// TypeScript Version: 2.2

export type RefFunction = (current: any, item: any) => string;

export interface Relation {
    ref: string | RefFunction;
    attributes?: string[] | undefined;
    included?: boolean | undefined;
}

export type LinkFunction = (...records: any[]) => any;

export interface SerializerOptions {
    ref?: (() => void) | boolean | string | undefined;
    included?: boolean | undefined;
    id?: string | undefined;
    attributes?: string[] | undefined;
    topLevelLinks?: { [key: string]: string | LinkFunction } | undefined;
    dataLinks?: { [key: string]: string | LinkFunction } | undefined;
    dataMeta?: (() => void) | object | undefined;
    relationshipLinks?: { [key: string]: string | LinkFunction } | undefined;
    relationshipMeta?: object | undefined;
    ignoreRelationshipData?: boolean | undefined;
    keyForAttribute?: string | KeyForAttribute | undefined;
    nullIfMissing?: boolean | undefined;
    pluralizeType?: boolean | undefined;
    typeForAttribute?: TypeForAttribute | undefined;
    meta?: object | undefined;
    transform?: Transform | undefined;
    [key: string]: any;
}

export interface KeyForAttribute {
    (attribute: string): string;
}

export interface TypeForAttribute {
    (attribute: string, object?: any): any;
}

export interface Transform {
    (record: any): any;
}

export interface DeserializerOptions {
    id?: string | undefined;
    keyForAttribute?:
        | "dash-case"
        | "lisp-case"
        | "spinal-case"
        | "kebab-case"
        | "underscore_case"
        | "snake_case"
        | "camelCase"
        | "CamelCase"
        | KeyForAttribute
        | undefined;
    pluralizeType?: boolean | undefined;
    typeAsAttribute?: boolean | undefined;
    transform?: Transform | undefined;
}

export interface DeserializerConstructor {
    new(opts: DeserializerOptions): Deserializer;
}

export interface SerializerConstructor {
    new(collectionName: string, opts: SerializerOptions): Serializer;
}

export interface ErrorConstructor {
    new(opts: JSONAPIErrorOptions | JSONAPIErrorOptions[]): JSONAPIError;
}

export interface JSONAPIError {
    errors: any[];
}

export interface JSONAPIErrorOptions {
    id?: string | undefined;
    status?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    detail?: string | undefined;
    source?: {
        pointer?: string | undefined;
        parameter?: string | undefined;
    } | undefined;
    links?: {
        about?: string | undefined;
    } | undefined;
    meta?: any;
}

export interface Serializer {
    serialize(data: any): any;
}

export interface Deserializer {
    deserialize(data: any, callback: Callback): void;

    deserialize(data: any): Promise<any>;
}

export interface Callback {
    (error: Error, response: any): any;
}

export let Serializer: SerializerConstructor;
export let Deserializer: DeserializerConstructor;
export let Error: ErrorConstructor;
