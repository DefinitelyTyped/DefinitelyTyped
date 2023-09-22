/*
 * Types from the jsonld Specification:
 * https://www.w3.org/TR/json-ld-api/
 */
import { ContextDefinition, JsonLdDocument, NodeObject } from "./jsonld";

// Some aliases and placeholders for better readability
export type JsonLdObj = NodeObject;
export type JsonLdArray = [JsonLdObj];
export type JsonLd = JsonLdObj | JsonLdArray;

type DOMString = string;
type LoadDocumentCallback = (url: Url) => Promise<RemoteDocument>;

export type Url = DOMString;
export type Iri = Url;
export type Document = JsonLdDocument;
export type Context = ContextDefinition;
export type Frame = JsonLdObj | Url;

export interface Options {
    base?: DOMString | null | undefined;
    compactArrays?: boolean | undefined;
    documentLoader?: LoadDocumentCallback | null | undefined;
    expandContext?: ContextDefinition | null | undefined;
    processingMode?: DOMString | undefined;
}

export interface JsonLdProcessor {
    compact(input: JsonLdDocument, context: ContextDefinition, options?: Options): Promise<JsonLdObj>;
    expand(input: JsonLdDocument, options?: Options): Promise<JsonLdArray>;
    flatten(input: JsonLdDocument, context?: ContextDefinition | null, options?: Options): Promise<JsonLdObj>;
}

export interface RemoteDocument {
    contextUrl?: Url | undefined;
    documentUrl: Url;
    document: JsonLd;
}

export {};
