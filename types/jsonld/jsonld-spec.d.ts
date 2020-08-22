/*
 * Types from the jsonld Specification:
 * https://www.w3.org/TR/json-ld-api/
 *
 */

// Some aliases and placeholders for better readability
export type JsonLdObj = object;
export type JsonLdArray = [JsonLdObj];
export type JsonLd = JsonLdObj|JsonLdArray;

type DOMString = string;
type LoadDocumentCallback = (url: Url) => Promise<RemoteDocument>;

export type Url = DOMString;
export type Iri = Url;
export type Document = JsonLd|Url;
export type Context = Document;
export type Frame = JsonLdObj|Url;

export interface Options {
    base?: DOMString|null;
    compactArrays?: boolean;
    documentLoader?: LoadDocumentCallback|null;
    expandContext?: Context|null;
    processingMode?: DOMString;
}

export interface JsonLdProcessor {
    compact(input: Document, context: Context,  options?: Options): Promise<JsonLdObj>;
    expand(input: Document, options?: Options): Promise<JsonLdArray>;
    flatten(input: Document, context?: Context|null, options?: Options): Promise<JsonLdObj>;
}

export interface RemoteDocument {
    contextUrl?: Url;
    documentUrl: Url;
    document: JsonLd;
}

export {};
