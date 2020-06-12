// Type definitions for solr-client 0.7
// Project: https://github.com/lbdremy/solr-node-client#readme
// Definitions by: liul85 <https://github.com/liul85>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
import { ClientRequest } from "http";

export function createClient(options?: Options): Client;

export interface Options {
  host?: string;
  port?: number;
  core?: string;
  path?: string;
  agent?: string;
  secure?: boolean;
  bigint?: string;
  solrVersion?: string;
}

export interface RangeFilterOption {
    field: string;
    start: string | number | Date;
    end: string | number | Date;
}

export interface GroupOptions {
    on?: boolean;
    field?: string | string[];
    limit?: number;
    offset?: number;
    sort?: string;
    format?: string;
    main?: boolean;
    ngroups?: boolean;
    truncate?: boolean;
    cache?: number;
}

export interface FacetOptions {
    on: boolean;
    query?: string;
    field?: string | string[];
    prefix: string;
    sort?: string;
    limit?: number;
    offset?: number;
    mincout?: number;
    missing?: boolean;
    method?: string;
    pivot?: string | string[];
}

export interface MoreLikeThisOptions {
    on: boolean;
    fl?: string | string[];
    count?: number;
    mintf?: number;
    mindf?: number;
    minwl?: number;
    maxwl?: number;
    maxqt?: number;
    maxntp?: number;
    boost?: boolean;
    qf?: string | object;
}

export interface HighlightOptions {
    on: boolean;
    q?: string | string[];
    qparser?: string;
    fl?: string | string[];
    snippets?: number;
    fragsize?: number;
    mergeContiguous?: boolean;
    maxAnalyzedChars?: number;
    maxMultiValuedToExamine?: number;
    maxMultiValuedToMatch?: number;
    alternateField?: string;
    maxAlternateFieldLength?: number;
    formatter?: string;
    simplePre?: string;
    simplePost?: string;
    fragmenter?: string;
    highlightMultiTerm?: boolean;
    requireFieldMatch?: boolean;
    usePhraseHighlighter?: boolean;
    regexSlop?: number;
    regexPattern?: string;
    regexMaxAnalyzedChars?: number;
    preserveMulti?: boolean;
    payloads?: boolean;
}

export interface AddRemoteResourceOptions {
    path: string;
    format: string;
    contentType: string;
    parameters: object;
}

export interface Query {
    set(parameters: string): Query;
    defType(type: string): Query;
    requestHandler(handler: string): Query;
    q(q: string | object): Query;
    qop(op: string): Query;
    df(df: string): Query;
    start(start: number): Query;
    rows(rows: number): Query;
    cursorMark(mark: string): Query;
    sort(options: object): Query;
    rangeFilter(options: RangeFilterOption[]): Query;
    matchFilter(field: string, value: string | number | Date): Query;
    fl(fields: string | string[]): Query;
    timeout(time: string | number): Query;
    groupBy(field: string): Query;
    group(options: GroupOptions): Query;
    facet(options: FacetOptions): Query;
    mlt(options: MoreLikeThisOptions): Query;
    dismax(): Query;
    edismax(): Query;
    debugQuery(): Query;
    qf(options: object): Query;
    mm(minimum: string | number): Query;
    pf(options: object): Query;
    ps(slop: number): Query;
    qs(slop: number): Query;
    tie(tiebreaker: number): Query;
    bq(options: object): Query;
    bf(functions: string): Query;
    boost(functions: string): Query;
    build(): string;
    hl(options: HighlightOptions): Query;
}

export interface Client {
    basicAuth(username: string, password: string): Client;
    unauth(): Client;
    add(docs: object[], options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    realTimeGet(ids: string | string[], query?: Query, callback?: (err: Error, data: object) => void): ClientRequest;
    addRemoteResource(options: AddRemoteResourceOptions, callback?: (err: Error, data: object) => void): ClientRequest;
    commit(options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    prepareCommit(callback?: (err: Error, data: object) => void): ClientRequest;
    softCommit(callback?: (err: Error, data: object) => void): ClientRequest;
    delete(field: string, text: string, options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteByRange(field: string, start: string | Date, stop: string | Date, options?: object, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteByID(id: string | number, options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteByQuery(query: string, options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteAll(options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    optimize(options: object, callback?: (err: Error, data: object) => void): ClientRequest;
    rollback(callback?: (err: Error, data: object) => void): ClientRequest;
    update(data: object, options?: object, callback?: (err: Error, data: object) => void): ClientRequest;
    search(query: Query, callback?: (err: Error, data: object) => void): ClientRequest;
    executeCollection(collection: Query | object | string, callback?: (err: Error, data: object) => void): ClientRequest;
    searchAll(callback?: (err: Error, data: object) => void): ClientRequest;
    get(handler: string, query: Query | object | string, callback?: (err: Error, data: object) => void): ClientRequest;
    post(handler: string, query: Query | object | string, callback?: (err: Error, data: object) => void): ClientRequest;
    escapeSpecialChars(s: string): string;
    query(): Query;
    atomicUpdate(doc: object, callback?: (err: Error, data: object) => void): ClientRequest;
    searchAsync(query: Query): Promise<object>;
}

export as namespace Solr;
