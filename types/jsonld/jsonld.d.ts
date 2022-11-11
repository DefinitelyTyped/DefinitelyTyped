/*
 * Types from the jsonld Specification:
 * https://www.w3.org/TR/json-ld11/
 * @version 1.1
 */

/*
 * Disable automatic exporting.
 * Some of these declarations are not needed externally.
 */
export {};

/**
 * A JSON-LD document MUST be valid JSON text as described in [RFC8259],
 * or some format that can be represented in the JSON-LD internal representation
 * that is equivalent to valid JSON text.
 * @see https://www.w3.org/TR/json-ld11/#json-ld-grammar
 */
export type JsonLdDocument = NodeObject | NodeObject[] | {
    '@context'?: Keyword['@context'] | undefined;
    '@graph'?: Keyword['@graph'] | undefined;
};

/**
 * A node object represents zero or more properties of a node
 * in the graph serialized by the JSON-LD document.
 * @see https://www.w3.org/TR/json-ld11/#node-objects
 */
export interface NodeObject {
    '@context'?: Keyword['@context'] | undefined;
    '@id'?: Keyword['@id'] | undefined;
    '@included'?: Keyword['@included'] | undefined;
    '@graph'?: OrArray<NodeObject> | undefined;
    '@nest'?: OrArray<JsonObject> | undefined;
    '@type'?: OrArray<Keyword['@type']> | undefined;
    '@reverse'?: {[key: string]: Keyword['@reverse']} | undefined;
    '@index'?: Keyword['@index'] | undefined;
    [key: string]:
        | OrArray<
            | null
            | boolean
            | number
            | string
            | NodeObject
            | GraphObject
            | ValueObject
            | ListObject
            | SetObject
        >
        | LanguageMap
        | IndexMap
        | IncludedBlock
        | IdMap
        | TypeMap
        | NodeObject[keyof NodeObject];
}

/**
 * A graph object represents a named graph, which MAY include an explicit graph name.
 * @see https://www.w3.org/TR/json-ld11/#graph-objects
 */
export interface GraphObject {
    '@graph': OrArray<NodeObject>;
    '@index'?: Keyword['@index'] | undefined;
    '@id'?: Keyword['@id'] | undefined;
    '@context'?: Keyword['@context'] | undefined;
}

/**
 * A value object is used to explicitly associate a type or a language with a value
 * to create a typed value or a language-tagged string and possibly associate a base direction.
 * @see https://www.w3.org/TR/json-ld11/#value-objects
 */
export type ValueObject = {
    '@index'?: Keyword['@index'] | undefined;
    '@context'?: Keyword['@context'] | undefined;
} & ({
    '@value': Keyword['@value'];
    '@language'?: Keyword['@language'] | undefined;
    '@direction'?: Keyword['@direction'] | undefined;
} | {
    '@value': Keyword['@value'];
    '@type': Keyword['@type'];
} | {
    '@value': Keyword['@value'] | JsonObject | JsonArray;
    '@type': '@json';
});

/**
 * A list represents an ordered set of values.
 * @see https://www.w3.org/TR/json-ld11/#lists-and-sets
 */
export interface ListObject {
    '@list': Keyword['@list'];
    '@index'?: Keyword['@index'] | undefined;
}

/**
 * A set represents an unordered set of values.
 * @see https://www.w3.org/TR/json-ld11/#lists-and-sets
 */
export interface SetObject {
    '@set': Keyword['@set'];
    '@index'?: Keyword['@index'] | undefined;
}

/**
 * A language map is used to associate a language with a value in a way that allows easy programmatic access.
 * @see https://www.w3.org/TR/json-ld11/#language-maps
 */
export interface LanguageMap {
    [key: string]: null | string | string[];
}

/**
 * An index map allows keys that have no semantic meaning, but should be preserved regardless,
 * to be used in JSON-LD documents.
 * @see https://www.w3.org/TR/json-ld11/#index-maps
 */
export interface IndexMap {
    [key: string]: OrArray<
        | null
        | boolean
        | number
        | string
        | NodeObject
        | ValueObject
        | ListObject
        | SetObject
    >;
}

/**
 * An id map is used to associate an IRI with a value that allows easy programmatic access.
 * @see https://www.w3.org/TR/json-ld11/#id-maps
 */
export interface IdMap {
    [key: string]: NodeObject;
}

/**
 * A type map is used to associate an IRI with a value that allows easy programmatic access.
 * @see https://www.w3.org/TR/json-ld11/#type-maps
 */
export interface TypeMap {
    [key: string]: string | NodeObject;
}

/**
 * An included block is used to provide a set of node objects.
 * @see https://www.w3.org/TR/json-ld11/#included-blocks
 */
export type IncludedBlock = OrArray<NodeObject>;

/**
 * A context definition defines a local context in a node object.
 * @see https://www.w3.org/TR/json-ld11/#context-definitions
 */
export interface ContextDefinition {
    '@base'?: Keyword['@base'] | undefined;
    '@direction'?: Keyword['@direction'] | undefined;
    '@import'?: Keyword['@import'] | undefined;
    '@language'?: Keyword['@language'] | undefined;
    '@propagate'?: Keyword['@propagate'] | undefined;
    '@protected'?: Keyword['@protected'] | undefined;
    '@type'?: {
        '@container': '@set';
        '@protected'?: Keyword['@protected'] | undefined;
    } | undefined;
    '@version'?: Keyword['@version'] | undefined;
    '@vocab'?: Keyword['@vocab'] | undefined;
    [key: string]:
        | null
        | string
        | ExpandedTermDefinition
        | ContextDefinition[keyof ContextDefinition];
}

/**
 * An expanded term definition is used to describe the mapping between a term
 * and its expanded identifier, as well as other properties of the value
 * associated with the term when it is used as key in a node object.
 * @see https://www.w3.org/TR/json-ld11/#expanded-term-definition
 */
export type ExpandedTermDefinition = {
    '@type'?: '@id' | '@json' | '@none' | '@vocab' | string | undefined;
    '@language'?: Keyword['@language'] | undefined;
    '@index'?: Keyword['@index'] | undefined;
    '@context'?: ContextDefinition | undefined;
    '@prefix'?: Keyword['@prefix'] | undefined;
    '@propagate'?: Keyword['@propagate'] | undefined;
    '@protected'?: Keyword['@protected'] | undefined;
} & ({
    '@id'?: Keyword['@id'] | null | undefined;
    '@nest'?: '@nest' | string | undefined;
    '@container'?: Keyword['@container'] | undefined;
} | {
    '@reverse': Keyword['@reverse'];
    '@container'?: '@set' | '@index' | null | undefined;
});

/**
 * A list of keywords and their types.
 * Only used for internal reference; not an actual interface.
 * Not for export.
 * @see https://www.w3.org/TR/json-ld/#keywords
 */
// tslint:disable-next-line:interface-over-type-literal
type Keyword = {
    '@base': string | null;
    '@container':
        | OrArray<'@list' | '@set' | ContainerType>
        | ContainerTypeArray
        | null;
    '@context': OrArray<null | string | ContextDefinition>;
    '@direction': 'ltr' | 'rtl' | null;
    '@graph': OrArray<ValueObject | NodeObject>;
    '@id': OrArray<string>;
    '@import': string;
    '@included': IncludedBlock;
    '@index': string;
    '@json': '@json';
    '@language': string;
    '@list': OrArray<null | boolean | number | string | NodeObject | ValueObject>;
    '@nest': object;
    '@none': '@none';
    '@prefix': boolean;
    '@propagate': boolean;
    '@protected': boolean;
    '@reverse': string;
    '@set': OrArray<null | boolean | number | string | NodeObject | ValueObject>;
    '@type': string;
    '@value': null | boolean | number | string;
    '@version': '1.1';
    '@vocab': string | null;
};

/*
 * Helper Types
 * (not for export)
 */
type OrArray<T> = T | T[];
type ContainerType =
    | '@language'
    | '@index'
    | '@id'
    | '@graph'
    | '@type';
type ContainerTypeArray =
    | ['@graph', '@id']
    | ['@id', '@graph']
    | ['@set',   '@graph', '@id']
    | ['@set',   '@id',    '@graph']
    | ['@graph', '@set',   '@id']
    | ['@id',    '@set',   '@graph']
    | ['@graph', '@id',    '@set']
    | ['@id',    '@graph', '@set']
    | ['@set', ContainerType]
    | [ContainerType, '@set']
;

/*
 * JSON Types
 * (not for export)
 */
type JsonPrimitive = string | number | boolean | null;
interface JsonArray extends Array<JsonValue> {}
interface JsonObject { [key: string]: JsonValue | undefined; }
type JsonValue = JsonPrimitive | JsonArray | JsonObject;
