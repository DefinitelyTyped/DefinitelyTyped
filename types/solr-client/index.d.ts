/// <reference types="node" />
import { ClientRequest } from "http";

export function createClient(options?: Options): Client;

export interface Options {
    host?: string | undefined;
    port?: number | undefined;
    core?: string | undefined;
    path?: string | undefined;
    agent?: string | undefined;
    secure?: boolean | undefined;
    bigint?: string | undefined;
    solrVersion?: string | undefined;
}

export interface RangeFilterOption {
    field: string;
    start: string | number | Date;
    end: string | number | Date;
}

export interface GroupOptions {
    on?: boolean | undefined;
    field?: string | string[] | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: string | undefined;
    format?: string | undefined;
    main?: boolean | undefined;
    ngroups?: boolean | undefined;
    truncate?: boolean | undefined;
    cache?: number | undefined;
}

export interface FacetOptions {
    on: boolean;
    query?: string | undefined;
    field?: string | string[] | undefined;
    prefix?: string | undefined;
    sort?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    mincout?: number | undefined;
    missing?: boolean | undefined;
    method?: string | undefined;
    pivot?: string | string[] | undefined;
}

export interface MoreLikeThisOptions {
    on: boolean;
    fl?: string | string[] | undefined;
    count?: number | undefined;
    mintf?: number | undefined;
    mindf?: number | undefined;
    minwl?: number | undefined;
    maxwl?: number | undefined;
    maxqt?: number | undefined;
    maxntp?: number | undefined;
    boost?: boolean | undefined;
    qf?: string | object | undefined;
}

export interface HighlightOptions {
    on: boolean;
    q?: string | string[] | undefined;
    qparser?: string | undefined;
    fl?: string | string[] | undefined;
    snippets?: number | undefined;
    fragsize?: number | undefined;
    mergeContiguous?: boolean | undefined;
    maxAnalyzedChars?: number | undefined;
    maxMultiValuedToExamine?: number | undefined;
    maxMultiValuedToMatch?: number | undefined;
    alternateField?: string | undefined;
    maxAlternateFieldLength?: number | undefined;
    formatter?: string | undefined;
    simplePre?: string | undefined;
    simplePost?: string | undefined;
    fragmenter?: string | undefined;
    highlightMultiTerm?: boolean | undefined;
    requireFieldMatch?: boolean | undefined;
    usePhraseHighlighter?: boolean | undefined;
    regexSlop?: number | undefined;
    regexPattern?: string | undefined;
    regexMaxAnalyzedChars?: number | undefined;
    preserveMulti?: boolean | undefined;
    payloads?: boolean | undefined;
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
    delete(
        field: string,
        text: string,
        options?: Options,
        callback?: (err: Error, data: object) => void,
    ): ClientRequest;
    deleteByRange(
        field: string,
        start: string | Date,
        stop: string | Date,
        options?: object,
        callback?: (err: Error, data: object) => void,
    ): ClientRequest;
    deleteByID(id: string | number, options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteByQuery(query: string, options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    deleteAll(options?: Options, callback?: (err: Error, data: object) => void): ClientRequest;
    optimize(options: object, callback?: (err: Error, data: object) => void): ClientRequest;
    rollback(callback?: (err: Error, data: object) => void): ClientRequest;
    update(data: object, options?: object, callback?: (err: Error, data: object) => void): ClientRequest;
    search(query: Query, callback?: (err: Error, data: object) => void): ClientRequest;
    executeCollection(
        collection: Query | object | string,
        callback?: (err: Error, data: object) => void,
    ): ClientRequest;
    searchAll(callback?: (err: Error, data: object) => void): ClientRequest;
    get(handler: string, query: Query | object | string, callback?: (err: Error, data: object) => void): ClientRequest;
    post(handler: string, query: Query | object | string, callback?: (err: Error, data: object) => void): ClientRequest;
    escapeSpecialChars(s: string): string;
    query(): Query;
    atomicUpdate(doc: object, callback?: (err: Error, data: object) => void): ClientRequest;
    searchAsync(query: Query): Promise<object>;
}

export as namespace Solr;
