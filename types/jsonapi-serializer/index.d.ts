// Type definitions for jsonapi-serializer 3.6
// Project: https://github.com/SeyZ/jsonapi-serializer#readme
// Definitions by: Frank Chiang <https://github.com/chiangf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

export type RefFunction = (current: any, item: any) => string;

export interface Relation {
    ref: string | RefFunction;
    attributes?: string[];
    included?: boolean;
}

export type LinkFunction = (...records: any[]) => any;

export interface SerializerOptions {
    ref?: (() => void) | boolean | string;
    included?: boolean;
    id?: string;
    attributes?: string[];
    topLevelLinks?: { [key: string]: string | LinkFunction };
    dataLinks?: { [key: string]: string | LinkFunction };
    dataMeta?: (() => void) | object;
    relationshipLinks?: { [key: string]: string | LinkFunction };
    relationshipMeta?: object;
    ignoreRelationshipData?: boolean;
    keyForAttribute?: string | KeyForAttribute;
    nullIfMissing?: boolean;
    pluralizeType?: boolean;
    typeForAttribute?: TypeForAttribute;
    meta?: object;
    transform?: Transform;
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
    id?: string;
    keyForAttribute?:
        | "dash-case"
        | "lisp-case"
        | "spinal-case"
        | "kebab-case"
        | "underscore_case"
        | "snake_case"
        | "camelCase"
        | "CamelCase"
        | KeyForAttribute;
    pluralizeType?: boolean;
    typeAsAttribute?: boolean;
    transform?: Transform;
}

export interface DeserializerConstructor {
    new (opts: DeserializerOptions): Deserializer;
}

export interface SerializerConstructor {
    new (collectionName: string, opts: SerializerOptions): Serializer;
}

export interface ErrorConstructor {
    new (opts: JSONAPIErrorOptions | JSONAPIErrorOptions[]): JSONAPIError;
}

export interface JSONAPIError {
    errors: any[];
}

export interface JSONAPIErrorOptions {
    id?: string;
    status?: string;
    code?: string;
    title?: string;
    detail?: string;
    source?: {
        pointer?: string;
        parameter?: string;
    };
    links?: {
        about?: string;
    };
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
