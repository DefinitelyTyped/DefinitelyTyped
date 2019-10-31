/*
 * Types from the jsonld Specification:
 * https://www.w3.org/TR/json-ld-api/
 *
 */

// Some aliases and placeholders for better readability
export type JsonLdObj = object;
export type JsonLdArray = [object];
export type JsonLd = JsonLdObj|JsonLdArray;

type DOMString = string;
type LoadDocumentCallback = Promise<Url>;

export type Url = DOMString;
export type Iri = Url;
export type Document = JsonLd|Url;
export type Context = Document;

export interface Options {
    base?: DOMString|null;
    compactArrays?: boolean;
    documentLoader?: LoadDocumentCallback|null;
    expandContext?: Context|null;
    processingMode?: DOMString;
}

export interface JsonLdProcessor {
    compact(input: Document, context: Context,  options?: Options): Promise<JsonLd>;
    expand(input: Document, options?: Options): Promise<JsonLd>;
    flatten(input: Document, context?: Context|null, options?: Options): Promise<JsonLd>;
}

export interface RemoteDocument {
    contextUrl?: Url;
    documentUrl: Url;
    document: JsonLd;
}

export {};
