// Type definitions for jsonld 1.5
// Project: https://github.com/digitalbazaar/jsonld.js
// Definitions by: Jonas Erbe <https://github.com/jason076>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { Context, JsonLd, Document, Url, JsonLdProcessor, RemoteDocument } from './jsonld-spec';

// Some typealiases for better readability and some placeholders
type MimeNQuad = 'application/n-quads';
type RdfDataSet = any;
type RdfOrString = RdfDataSet|string;
type Callback<T> = (err: Error, res: T) => void;
type DocCallback = Callback<JsonLd>;

/*
 * Declares interfaces used to type the methods options object.
 * The interfaces are usefull to avoid code replication.
 */

export namespace Options {
    export interface DocLoader {
        documentLoader?: (url: Url,
            callback: (err: Error, remoteDoc: RemoteDocument) => void)
                => Promise<RemoteDocument>;
    }

    export interface Common extends DocLoader {
        base?: string;
        expandContext?: Context;
    }

    export interface ExpMap {
        // TODO: Figure out type of info
        expansionMap?: (info: any) => any;
    }

    export interface Compact extends Common, ExpMap {
        compactArrays?: boolean;
        appropriate?: boolean;
        compactToRelative?: boolean;
        graph?: boolean;
        skipExpansion?: boolean;
        expansion?: boolean;
        framing?: boolean;
        // TODO: Figure out type of info
        compactionMap?: (info: any) => void;
    }

    export interface Expand extends Common, ExpMap {
        keepFreeFloatingNodes?: boolean;
    }

    export type Flatten = Common;

    export interface Frame {
        embed?: '@last' | '@always' | '@never' | '@link';
        explicit?: boolean;
        requireAll?: boolean;
        omitDefault?: boolean;
    }

    export interface Normalize extends Common {
        algorithm?: 'URDNA2015' | `URGNA2012`;
        skipExpansion?: boolean;
        expansion?: boolean;
        inputFormat?: MimeNQuad;
        format?: MimeNQuad;
        useNative?: boolean;
    }

    export interface FromRdf {
        format?: MimeNQuad;
        rdfParser?: any;
        useRdfType?: boolean;
        useNativeTypes?: boolean;
    }

    export interface ToRdf extends Common {
        skipExpansion?: boolean;
        format?: MimeNQuad;
        produceGeneralizedRdf?: boolean;
    }

    // TODO Complete and uncomment if needed (see comments at the end of the file)
    /* NOT USED AT THE MOMENT
    // type Link = Common;
    export interface Issuer {

        issuer?: IdentifierIssuer;   // a jsonld.IdentifierIssuer to use to label blank nodes.
    }

    export type CreateNodeMap = Common&Issuer;

    export interface Merge extends Common, Issuer{

        mergeNodes?: boolean;    //true to merge properties for nodes with the same ID,
        //false to ignore new properties for nodes with the same ID once
        //the ID has been defined; note that this may not prevent merging
        //new properties where a node is in the `object` position
        //(default: true).
    }

    export interface Get {
        documentLoader?: DocLoader;  // the document loader to use.
    }

    export type ProcessContext = DocLoader;
    */
}

export function compact(input: Document, ctx: Context, options: Options.Compact, callback: DocCallback): void;
export function compact(input: Document, ctx: Context, callback: DocCallback): void;
export function compact(input: Document, ctx: Context, options?: Options.Compact): Promise<JsonLd>;

export function expand(input: Document, options: Options.Expand, callback: DocCallback): void;
export function expand(input: Document, callback: DocCallback): void;
export function expand(input: Document, options?: Options.Expand): Promise<JsonLd>;

export function flatten(input: Document, ctx: Context, options: Options.Flatten, callback: DocCallback): void;
export function flatten(input: Document, ctx: Context, callback: DocCallback): void;
export function flatten(input: Document, ctx: Context, options?: Options.Flatten): Promise<JsonLd>;

export function frame(input: Document, frame: Document, options: Options.Frame, callback: DocCallback): void;
export function frame(input: Document, frame: Document, callback: DocCallback): void;
export function frame(input: Document, frame: Document, options?: Options.Frame): Promise<JsonLd>;

export function normalize(input: Document, options: Options.Normalize, callback: DocCallback): void;
export function normalize(input: Document, callback: DocCallback): void;
export function normalize(input: Document, options?: Options.Normalize): Promise<JsonLd>;

export function fromRDF(dataset: RdfOrString, options: Options.FromRdf, callback: DocCallback): void;
export function fromRDF(dataset: RdfOrString, callback: DocCallback): void;
export function fromRDF(dataset: RdfOrString, options?: Options.FromRdf): Promise<JsonLd>;

export function toRDF(input: Document, callback: Callback<RdfDataSet>): void;
export function toRDF(input: Document, options: Options.ToRdf, callback: Callback<RdfDataSet>): void;
export function toRDF(input: Document, options?: Options.ToRdf): Promise<RdfDataSet>;

export let JsonLdProcessor: JsonLdProcessor;

// disable autoexport
export {};

// TODO: Complete and export the following types if needed!
// ************************************************************************************
// Not exported because of experimental state
// export function link(input: Document, ctx: Context, options: Options.Link, callback: DocCallback): void;
// export function link(input: Document, ctx: Context, callback: DocCallback): void;
// export function link(input: Document, ctx: Context, options?: Options.Link): Promise<JsonLd>;

// Not exported because of experimental state
// export function createNodeMapn(input: Document, options: Options.CreateNodeMap, callback: Callback<MegedNodeMap>): void;
// export function createNodeMapn(input: Document, callback: Callback<MegedNodeMap>): void;
// export function createNodeMapn(input: Document, options: Options.CreateNodeMap): Promise<MegedNodeMap>;

// Not exported because of experimental state
// export function merge (docs: Document, ctx: Context, options: Options.Merge, callback: DocCallback): void;
// export function merge (docs: Document, ctx: Context, callback: DocCallback): void;
// export function merge (docs: Document, ctx: Context, options: Options.Merge): Promise<JsonLd>;

/*
export namespace documentLoader {
  function get(): NormalizedDocLoader;
  function set(v: DocLoader): void;
}
*/

// default document loader not implemented
// export function documentLoader(url: Url): DocLoader;

/**
 * Deprecated default document loader. Do not use or override.
 */
// export function loadDocument(url: Url): Promise<DocLoader>;

// export function get (url: Url, options: Options.Get): Promise<JsonLd>;

// export function processContext(activeCtx: Context, localCtx: Context, options: Options.ProcessContext): Promise<Context>;

// backwards compatibility
// export function getContextValue(ctx: Context, key: string, type: JsonLDType): any;
/**
 * Document loaders.
 */
/*
export namespace documentLoaders {
  let node: DocLoader;
  let xhr: DocLoader;
}

export type DocumentLoaders = 'node' | 'xhr';
*/

// export function useDocumentLoader (type: DocumentLoaders, ...params: any): void;

// type ParserFunction = (input: string, callback: (err: Error, dataset: RdfDataSet) => Promise<RdfDataSet|null|undefined>) => void;
// export function registerRDFParser (contentType: MimeType, parser: ParserFunction): void;

// export function unregisterRDFParser (contentType: MimeType): void;

// TODO Still originial source code. Maybe build additional types from it
// ******************************************************************************
/* URL API */
// jsonld.url = require('./url');
/* Utility API */
// jsonld.util = util;
// backwards compatibility
// Object.assign(jsonld, util);

// reexpose API as jsonld.promises for backwards compatability
// jsonld.promises = jsonld;

// backwards compatibility
// declare module 'RequestQueue';

// ******************************************************************************
