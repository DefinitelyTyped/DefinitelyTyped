/*
 * Types from the jsonld Specification:
 * https://www.w3.org/TR/json-ld-api/
 *
 */
import {
    JsonLdDocument,
    NodeObject,
    ContextDefinition,
} from './jsonld';

// Some aliases and placeholders for better readability
export type JsonLdObj = NodeObject;
export type JsonLdArray = [JsonLdObj];
export type JsonLd = JsonLdObj|JsonLdArray;

type DOMString = string;
type LoadDocumentCallback = (url: Url) => Promise<RemoteDocument>;

export type Url = DOMString;
export type Iri = Url;
export type Document = JsonLdDocument;
export type Context = ContextDefinition;
export type Frame = JsonLdObj|Url;

export interface Options {
    base?: DOMString|null;
    compactArrays?: boolean;
    documentLoader?: LoadDocumentCallback|null;
    expandContext?: ContextDefinition|null;
    processingMode?: DOMString;
}

export interface JsonLdProcessor {
    compact(input: JsonLdDocument, context: ContextDefinition,  options?: Options): Promise<JsonLdObj>;
    expand(input: JsonLdDocument, options?: Options): Promise<JsonLdArray>;
    flatten(input: JsonLdDocument, context?: ContextDefinition|null, options?: Options): Promise<JsonLdObj>;
}

export interface RemoteDocument {
    contextUrl?: Url;
    documentUrl: Url;
    document: JsonLd;
}

export {};
