// Type definitions for elasticsearch 5.0
// Project: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/16.x/index.html
// Definitions by: Casper Skydt <https://github.com/CasperSkydt>
//                 Blake Smith <https://github.com/bfsmith>
//                 Dave Dunkin <https://github.com/ddunkin>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Margus Lamp <https://github.com/mlamp>
//                 Ahmad Ferdous Bin Alam <https://github.com/ahmadferdous>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Paul Brabban <https://github.com/brabster>
//                 Budi Irawan <https://github.com/deerawan>
//                 Yonatan Kiron <https://github.com/YonatanKiron>
//                 Jani Šumak <https://github.com/dasdachs>
//                 Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import HttpConnector = require("./src/lib/connectors/http");

export class Client {
    constructor(params: ConfigOptions);
    cat: Cat;
    cluster: Cluster;
    indices: Indices;
    ingest: Ingest;
    nodes: Nodes;
    snapshot: Snapshot;
    tasks: Tasks;
    bulk(params: BulkIndexDocumentsParams, callback: (error: any, response: any) => void): void;
    bulk(params: BulkIndexDocumentsParams): Promise<any>;
    clearScroll(params: ClearScrollParams, callback: (error: any, response: any) => void): void;
    clearScroll(params: ClearScrollParams): Promise<any>;
    count(params: CountParams, callback: (error: any, response: CountResponse) => void): void;
    count(params: CountParams): Promise<CountResponse>;
    create(params: CreateDocumentParams, callback: (err: any, response: CreateDocumentResponse, status: any) => void): void;
    create(params: CreateDocumentParams): Promise<CreateDocumentResponse>;
    delete(params: DeleteDocumentParams, callback: (error: any, response: DeleteDocumentResponse) => void): void;
    delete(params: DeleteDocumentParams): Promise<DeleteDocumentResponse>;
    deleteByQuery(params: DeleteDocumentByQueryParams, callback: (error: any, response: DeleteDocumentByQueryResponse) => void): void;
    deleteByQuery(params: DeleteDocumentByQueryParams): Promise<DeleteDocumentByQueryResponse>;
    deleteScript(params: DeleteScriptParams, callback: (error: any, response: any) => void): void;
    deleteScript(params: DeleteScriptParams): Promise<any>;
    deleteTemplate(params: DeleteTemplateParams, callback: (error: any, response: any) => void): void;
    deleteTemplate(params: DeleteTemplateParams): Promise<any>;
    exists(params: ExistsParams, callback: (error: any, response: boolean, status?: any) => void): void;
    exists(params: ExistsParams): Promise<boolean>;
    explain(params: ExplainParams, callback: (error: any, response: ExplainResponse) => void): void;
    explain(params: ExplainParams): Promise<ExplainResponse>;
    fieldStats(params: FieldStatsParams, callback: (error: any, response: FieldStatsResponse) => void): void;
    fieldStats(params: FieldStatsParams): Promise<FieldStatsResponse>;
    get<T>(params: GetParams, callback: (error: any, response: GetResponse<T>) => void): void;
    get<T>(params: GetParams): Promise<GetResponse<T>>;
    getScript(params: GetScriptParams, callback: (error: any, response: any) => void): void;
    getScript(params: GetScriptParams): Promise<any>;
    getSource(params: GetSourceParams, callback: (error: any, response: any) => void): void;
    getSource(params: GetSourceParams): Promise<any>;
    getTemplate(params: GetTemplateParams, callback: (error: any, response: any) => void): void;
    getTemplate(params: GetTemplateParams): Promise<any>;
    index<T>(params: IndexDocumentParams<T>, callback: (error: any, response: any) => void): void;
    index<T>(params: IndexDocumentParams<T>): Promise<any>;
    info(params: InfoParams, callback: (error: any, response: any) => void): void;
    info(params: InfoParams): Promise<any>;
    mget<T>(params: MGetParams, callback: (error: any, response: MGetResponse<T>) => void): void;
    mget<T>(params: MGetParams): Promise<MGetResponse<T>>;
    msearch<T>(params: MSearchParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
    msearch<T>(params: MSearchParams): Promise<MSearchResponse<T>>;
    msearchTemplate<T>(params: MSearchTemplateParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
    msearchTemplate<T>(params: MSearchTemplateParams): Promise<MSearchResponse<T>>;
    mtermvectors(params: MTermVectorsParams, callback: (error: any, response: any) => void): void;
    mtermvectors(params: MTermVectorsParams): Promise<any>;
    ping(params: PingParams, callback: (err: any, response: any, status: any) => void): void;
    ping(params: PingParams): Promise<any>;
    putScript(params: PutScriptParams, callback: (err: any, response: any, status: any) => void): void;
    putScript(params: PutScriptParams): Promise<any>;
    putTemplate(params: PutTemplateParams, callback: (err: any, response: any, status: any) => void): void;
    putTemplate(params: PutTemplateParams): Promise<any>;
    reindex(params: ReindexParams, callback: (error: any, response: ReindexResponse) => void): void;
    reindex(params: ReindexParams): Promise<ReindexResponse>;
    reindexRethrottle(params: ReindexRethrottleParams, callback: (error: any, response: any) => void): void;
    reindexRethrottle(params: ReindexRethrottleParams): Promise<any>;
    renderSearchTemplate(params: RenderSearchTemplateParams, callback: (error: any, response: any) => void): void;
    renderSearchTemplate(params: RenderSearchTemplateParams): Promise<any>;
    scroll<T>(params: ScrollParams, callback: (error: any, response: SearchResponse<T>) => void): void;
    scroll<T>(params: ScrollParams): Promise<SearchResponse<T>>;
    search<T>(params: SearchParams, callback: (error: any, response: SearchResponse<T>) => void): void;
    search<T>(params: SearchParams): Promise<SearchResponse<T>>;
    searchShards(params: SearchShardsParams, callback: (error: any, response: SearchShardsResponse) => void): void;
    searchShards(params: SearchShardsParams): Promise<SearchShardsResponse>;
    searchTemplate(params: SearchTemplateParams, callback: (error: any, response: any) => void): void;
    searchTemplate(params: SearchTemplateParams): Promise<any>;
    suggest(params: SuggestParams, callback: (error: any, response: any) => void): void;
    suggest(params: SuggestParams): Promise<any>;
    termvectors(params: TermvectorsParams, callback: (error: any, response: any) => void): void;
    termvectors(params: TermvectorsParams): Promise<any>;
    update(params: UpdateDocumentParams, callback: (error: any, response: any) => void): void;
    update(params: UpdateDocumentParams): Promise<any>;
    updateByQuery(params: UpdateDocumentByQueryParams, callback: (error: any, response: UpdateDocumentByQueryResponse) => void): void;
    updateByQuery(params: UpdateDocumentByQueryParams): Promise<UpdateDocumentByQueryResponse>;
    close(): void;
}

export interface ConfigOptions {
    host?: any;
    hosts?: any;
    httpAuth?: string | undefined;
    log?: any;
    apiVersion?: string | undefined;
    plugins?: any;
    sniffOnStart?: boolean | undefined;
    sniffInterval?: number | undefined;
    sniffOnConnectionFault?: boolean | undefined;
    maxRetries?: number | undefined;
    requestTimeout?: number | undefined;
    deadTimeout?: number | undefined;
    pingTimeout?: number | undefined;
    keepAlive?: boolean | undefined;
    maxSockets?: number | undefined;
    suggestCompression?: boolean | undefined;
    connectionClass?: string | typeof HttpConnector | undefined;
    sniffedNodesProtocol?: string | undefined;
    ssl?: object | undefined;
    selector?: any;
    defer?: (() => void) | undefined;
    nodesToHostCallback?: any;
    createNodeAgent?: any;
}

export interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

export interface GenericParams {
    requestTimeout?: number | undefined;
    maxRetries?: number | undefined;
    method?: string | undefined;
    body?: any;
    ignore?: number | number[] | undefined;
    filterPath?: string | string[] | undefined;
}

export interface ShardsResponse {
    total: number;
    successful: number;
    failed: number;
    skipped: number;
}

/**
 * A string of a number and a time unit.  A time unit is one of
 * [d, h, m, s, ms, micros, nanos].  eg: "30s" for 30 seconds.
 * These are incorrectly identified as `Date | number` in the docs as of 2016-11-15.
 */
export type TimeSpan = string;

export type NameList = string | string[] | boolean;
export type Refresh = boolean | "true" | "false" | "wait_for" | "";
export type VersionType = "internal" | "external" | "external_gte" | "force";
export type ExpandWildcards = "open" | "closed" | "none" | "all";
export type DefaultOperator = "AND" | "OR";
export type Conflicts = "abort" | "proceed";

export interface BulkIndexDocumentsParams extends GenericParams {
    waitForActiveShards?: string | undefined;
    refresh?: Refresh | undefined;
    routing?: string | undefined;
    timeout?: TimeSpan | undefined;
    type?: string | undefined;
    fields?: NameList | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    pipeline?: string | undefined;
    index?: string | undefined;
}

export interface ClearScrollParams extends GenericParams {
    scrollId: NameList;
}

export interface CountParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    minScore?: number | undefined;
    preference?: string | undefined;
    routing?: string | undefined;
    q?: string | undefined;
    analyzer?: string | undefined;
    analyzeWildcard?: boolean | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
}

export interface CountResponse {
    count: number;
    _shards: ShardsResponse;
}

export interface CreateDocumentParams extends GenericParams {
    waitForActiveShards?: string | undefined;
    parent?: string | undefined;
    refresh?: Refresh | undefined;
    routing?: string | undefined;
    timeout?: TimeSpan | undefined;
    timestamp?: Date | number | undefined;
    ttl?: TimeSpan | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    pipeline?: string | undefined;
    id?: string | undefined;
    index: string;
    type: string;
}

export interface CreateDocumentResponse {
    _shards: ShardsResponse;
    _index: string;
    _type: string;
    _id: string;
    _version: number;
    created: boolean;
    result: string;
}

export interface DeleteDocumentParams extends GenericParams {
    waitForActiveShards?: string | undefined;
    parent?: string | undefined;
    refresh?: Refresh | undefined;
    routing?: string | undefined;
    timeout?: TimeSpan | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    index: string;
    type: string;
    id: string;
}

export interface DeleteDocumentResponse {
    _shards: ShardsResponse;
    found: boolean;
    _index: string;
    _type: string;
    _id: string;
    _version: number;
    result: string;
}

export interface DeleteDocumentByQueryParams extends GenericParams {
    analyzer?: string | undefined;
    analyzeWildcard?: boolean | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    from?: number | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    conflicts?: Conflicts | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    preference?: string | undefined;
    q?: string | undefined;
    routing?: string | string[] | boolean | undefined;
    scroll?: string | undefined;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch" | undefined;
    searchTimeout?: TimeSpan | undefined;
    size?: number | undefined;
    sort?: NameList | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    terminateAfter?: number | undefined;
    stats?: string | string[] | boolean | undefined;
    version?: number | undefined;
    requestCache?: boolean | undefined;
    refresh?: Refresh | undefined;
    timeout?: TimeSpan | undefined;
    waitForActiveShards?: string | undefined;
    scrollSize?: number | undefined;
    waitForCompletion?: boolean | undefined;
    requestsPerSecond?: number | undefined;
    slices?: number | undefined;
    index?: string | undefined;
    type?: string | undefined;
}

export interface DeleteDocumentByQueryResponse extends ReindexResponse {
    // DeleteDocumentByQueryResponse, UpdateDocumentByQueryResponse and ReindexResponse are identical
}

export interface DeleteScriptParams extends GenericParams {
    id: string;
    lang: string;
}

export interface DeleteTemplateParams extends GenericParams {
    id: string;
}

export interface ExistsParams extends GenericParams {
    parent?: string | undefined;
    preference?: string | undefined;
    realtime?: boolean | undefined;
    refresh?: boolean | undefined;
    routing?: string | undefined;
    id: string;
    index: string;
    type: string;
}

export interface ExplainParams extends GenericParams {
    analyzeWildcard?: boolean | undefined;
    analyzer?: string | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    storedFields?: NameList | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    parent?: string | undefined;
    preference?: string | undefined;
    q?: string | undefined;
    routing?: string | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    id?: string | undefined;
    index?: string | undefined;
    type?: string | undefined;
}

export interface ExplainResponse {
    _index: string;
    _type: string;
    _id: string;
    matched: boolean;
    explanation: ExplainResponseDetails;
}

export interface ExplainResponseDetails {
    value: number;
    description: string;
    details: ExplainResponseDetails[];
}

export interface FieldStatsParams extends GenericParams {
    fields?: NameList | undefined;
    level?: "indices" | "cluster" | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index?: NameList | undefined;
}

export interface FieldStatsResponse {
    _shards: ShardsResponse;
    indices: { [indexName: string]: FieldStatsResponseIndex };
    conflicts?: { [fieldName: string]: string } | undefined;
}

export interface FieldStatsResponseIndex {
    fields: { [fieldName: string]: FieldStatsResponseField };
}

export interface FieldStatsResponseField {
    max_doc: number;
    doc_count: number;
    density: number;
    sum_doc_freq: number;
    sum_total_term_freq: number;
    min_value: any;
    max_value: any;
    is_searchable: string;
    is_aggregatable: string;
}

export interface GetParams extends GenericParams {
    storedFields?: NameList | undefined;
    parent?: string | undefined;
    preference?: string | undefined;
    realtime?: boolean | undefined;
    refresh?: boolean | undefined;
    routing?: string | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    id: string;
    index: string;
    type: string;
}

export interface GetResponse<T> {
    _index: string;
    _type: string;
    _id: string;
    _version: number;
    _routing?: string | undefined;
    found: boolean;
    _source: T;
}

export interface GetScriptParams extends GenericParams {
    id: string;
    lang: string;
}

export interface GetSourceParams extends GenericParams {
    preference?: string | undefined;
    realtime?: boolean | undefined;
    refresh?: boolean | undefined;
    routing?: string | undefined;
    _source: NameList;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    id: string;
    index: string;
    type: string;
}

export interface GetTemplateParams extends GenericParams {
    id: string;
}

export interface IndexDocumentParams<T> extends GenericParams {
    waitForActiveShards?: string | undefined;
    opType?: "index" | "create" | undefined;
    parent?: string | undefined;
    refresh?: Refresh | undefined;
    routing?: string | undefined;
    timeout?: TimeSpan | undefined;
    timestamp?: Date | number | undefined;
    ttl?: TimeSpan | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    pipeline?: string | undefined;
    id?: string | undefined;
    index: string;
    type: string;
    body: T;
}

export interface InfoParams extends GenericParams {
}

export interface MGetParams extends GenericParams {
    storedFields?: NameList | undefined;
    preference?: string | undefined;
    realtime?: boolean | undefined;
    refresh?: boolean | undefined;
    routing?: string | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    index?: string | undefined;
    type?: string | undefined;
}

export interface MGetResponse<T> {
    docs?: Array<GetResponse<T>> | undefined;
}

export interface MSearchParams extends GenericParams {
    search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch" | undefined;
    maxConcurrentSearches?: number | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
}

export interface MSearchResponse<T> {
    responses?: Array<SearchResponse<T>> | undefined;
}

export interface MSearchTemplateParams extends GenericParams {
    search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch" | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
}

export interface MTermVectorsParams extends GenericParams {
    ids?: NameList | undefined;
    termStatistics?: boolean | undefined;
    fieldStatistics?: boolean | undefined;
    fields?: NameList | undefined;
    offsets?: boolean | undefined;
    positions?: boolean | undefined;
    payloads?: boolean | undefined;
    preference?: string | undefined;
    routing?: string | undefined;
    parent?: string | undefined;
    realtime?: boolean | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    index: string;
    type: string;
}

export interface PingParams extends GenericParams {
}

export interface PutScriptParams extends GenericParams {
    id: string;
    lang: string;
    body: any;
}

export interface PutTemplateParams extends GenericParams {
    id: string;
    body: any;
}

export interface ReindexParams extends GenericParams {
    refresh?: boolean | undefined;
    timeout?: TimeSpan | undefined;
    waitForActiveShards?: string | undefined;
    waitForCompletion?: boolean | undefined;
    requestsPerSecond?: number | undefined;
    slices?: number | undefined;
    body: {
        conflicts?: string | undefined;
        source: {
            index: string | string[];
            type?: string | string[] | undefined;
            query?: any;
            sort?: any;
            size?: number | undefined;
            remote?: {
                host: string;
                username?: string | undefined;
                password?: string | undefined;
            } | undefined
        };
        dest: {
            index: string;
            version_type?: string | undefined;
            op_type?: string | undefined;
            routing?: string | undefined;
            pipeline?: string | undefined;
        };
        script?: {
            inline: string;
            lang: string;
        } | undefined
    };
}

export interface ReindexRethrottleParams extends GenericParams {
    requestsPerSecond: number;
    taskId: string;
}

export interface RenderSearchTemplateParams extends GenericParams {
    id: string;
}

export interface ScrollParams extends GenericParams {
    scroll: TimeSpan;
    scrollId: string;
}

export interface SearchParams extends GenericParams {
    analyzer?: string | undefined;
    analyzeWildcard?: boolean | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    explain?: boolean | undefined;
    storedFields?: NameList | undefined;
    docvalueFields?: NameList | undefined;
    fielddataFields?: NameList | undefined;
    from?: number | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    preference?: string | undefined;
    q?: string | undefined;
    routing?: NameList | undefined;
    scroll?: TimeSpan | undefined;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch" | undefined;
    size?: number | undefined;
    sort?: NameList | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    terminateAfter?: number | undefined;
    stats?: NameList | undefined;
    suggestField?: string | undefined;
    suggestMode?: "missing" | "popular" | "always" | undefined;
    suggestSize?: number | undefined;
    suggestText?: string | undefined;
    timeout?: TimeSpan | undefined;
    trackScores?: boolean | undefined;
    version?: boolean | undefined;
    requestCache?: boolean | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
}

export interface SearchResponse<T> {
    took: number;
    timed_out: boolean;
    _scroll_id?: string | undefined;
    _shards: ShardsResponse;
    hits: {
        total: number;
        max_score: number;
        hits: Array<{
            _index: string;
            _type: string;
            _id: string;
            _score: number;
            _source: T;
            _version?: number | undefined;
            _explanation?: Explanation | undefined;
            fields?: any;
            highlight?: any;
            inner_hits?: any;
            matched_queries?: string[] | undefined;
            sort?: string[] | undefined;
        }>;
    };
    aggregations?: any;
}

export interface SearchShardsParams extends GenericParams {
    preference?: string | undefined;
    routing?: string | undefined;
    local?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index: NameList;
    type?: NameList;
}

export interface SearchShardsResponse {
    nodes: any;
    shards: SearchShardsResponseShard[][];
}

export interface SearchShardsResponseShard {
    index: string;
    node: string;
    primary: boolean;
    shard: number;
    state: string;
    allocation_id: {
        id: string;
    };
    relocating_node: any;
}

export interface SearchTemplateParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    preference?: string | undefined;
    routing?: NameList | undefined;
    scroll?: TimeSpan | undefined;
    searchType?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch" | undefined;
    index: NameList;
    type: NameList;
}

export interface SuggestParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    preference?: string | undefined;
    routing?: string | undefined;
    index: NameList;
}

export interface TermvectorsParams extends GenericParams {
    termStatistics?: boolean | undefined;
    fieldStatistics?: boolean | undefined;
    fields?: NameList | undefined;
    offsets?: boolean | undefined;
    positions?: boolean | undefined;
    payloads?: boolean | undefined;
    preference?: string | undefined;
    routing?: string | undefined;
    parent?: string | undefined;
    realtime?: boolean | undefined;
    version?: number | undefined;
    versionType?: VersionType | undefined;
    index: string;
    type: string;
    id?: string | undefined;
}

export interface UpdateDocumentParams extends GenericParams {
    waitForActiveShards?: string | undefined;
    fields?: NameList | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    lang?: string | undefined;
    parent?: string | undefined;
    refresh?: Refresh | undefined;
    retryOnConflict?: number | undefined;
    routing?: string | undefined;
    timeout?: TimeSpan | undefined;
    timestamp?: Date | number | undefined;
    ttl?: TimeSpan | undefined;
    version?: number | undefined;
    versionType?: "internal" | "force" | undefined;
    id: string;
    index: string;
    type: string;
}

export interface UpdateDocumentByQueryParams extends GenericParams {
    analyzer?: string | undefined;
    analyzeWildcard?: boolean | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    explain?: boolean | undefined;
    storedFields?: NameList | undefined;
    docvalueFields?: NameList | undefined;
    fielddataFields?: NameList | undefined;
    from?: number | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    conflicts?: Conflicts | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    pipeline?: string | undefined;
    preference?: string | undefined;
    q?: string | undefined;
    routing?: NameList | undefined;
    scroll?: TimeSpan | undefined;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch" | undefined;
    searchTimeout?: TimeSpan | undefined;
    size?: number | undefined;
    sort?: NameList | undefined;
    _source?: NameList | undefined;
    _sourceExclude?: NameList | undefined;
    _sourceInclude?: NameList | undefined;
    terminateAfter?: number | undefined;
    stats?: NameList | undefined;
    suggestField?: string | undefined;
    suggestMode?: "missing" | "popular" | "always" | undefined;
    suggestSize?: number | undefined;
    suggestText?: string | undefined;
    timeout?: TimeSpan | undefined;
    trackScores?: boolean | undefined;
    version?: boolean | undefined;
    versionType?: boolean | undefined;
    requestCache?: boolean | undefined;
    refresh?: boolean | undefined;
    waitForActiveShards?: string | undefined;
    scrollSize?: number | undefined;
    waitForCompletion?: boolean | undefined;
    requestsPerSecond?: number | undefined;
    slices?: number | undefined;
    index: NameList;
    type: NameList;
}

export interface UpdateDocumentByQueryResponse extends ReindexResponse {
    // DeleteDocumentByQueryResponse, UpdateDocumentByQueryResponse and ReindexResponse are identical
}

export interface ReindexResponse extends ReindexResponseBase {
    took: number;
    timed_out: boolean;
    failures: any[];
    slices?: ReindexOrByQueryResponseSlice[] | undefined;
}

export interface ReindexOrByQueryResponseSlice extends ReindexResponseBase {
    slice_id: number;
}

export interface ReindexResponseBase {
    total: number;
    updated: number;
    deleted: number;
    batches: number;
    version_conflicts: number;
    noops: number;
    retries: {
        bulk: number;
        search: number;
    };
    throttled_millis: number;
    requests_per_second: number;
    throttled_until_millis: number;
}

export interface Cat {
    aliases(params: CatAliasesParams, callback: (error: any, response: any) => void): void;
    aliases(params: CatAliasesParams): Promise<any>;
    allocation(params: CatAllocationParams, callback: (error: any, response: any) => void): void;
    allocation(params: CatAllocationParams): Promise<any>;
    count(params: CatCountParams, callback: (error: any, response: any) => void): void;
    count(params: CatAllocationParams): Promise<any>;
    fielddata(params: CatFielddataParams, callback: (error: any, response: any) => void): void;
    fielddata(params: CatFielddataParams): Promise<any>;
    health(params: CatHealthParams, callback: (error: any, response: any) => void): void;
    health(params: CatHealthParams): Promise<any>;
    help(params: CatHelpParams, callback: (error: any, response: any) => void): void;
    help(params: CatHelpParams): Promise<any>;
    indices(params: CatIndicesParams, callback: (error: any, response: any) => void): void;
    indices(params: CatIndicesParams): Promise<any>;
    master(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    master(params: CatCommonParams): Promise<any>;
    nodeattrs(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    nodeattrs(params: CatCommonParams): Promise<any>;
    nodes(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    nodes(params: CatCommonParams): Promise<any>;
    pendingTasks(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    pendingTasks(params: CatCommonParams): Promise<any>;
    plugins(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    plugins(params: CatCommonParams): Promise<any>;
    recovery(params: CatRecoveryParams, callback: (error: any, response: any) => void): void;
    recovery(params: CatRecoveryParams): Promise<any>;
    repositories(params: CatCommonParams, callback: (error: any, response: any) => void): void;
    repositories(params: CatCommonParams): Promise<any>;
    segments(params: CatSegmentsParams, callback: (error: any, response: any) => void): void;
    segments(params: CatSegmentsParams): Promise<any>;
    shards(params: CatShardsParams, callback: (error: any, response: any) => void): void;
    shards(params: CatShardsParams): Promise<any>;
    snapshots(params: CatSnapshotsParams, callback: (error: any, response: any) => void): void;
    snapshots(params: CatSnapshotsParams): Promise<any>;
    tasks(params: CatTasksParams, callback: (error: any, response: any) => void): void;
    tasks(params: CatTasksParams): Promise<any>;
    threadPool(params: CatThreadPoolParams, callback: (error: any, response: any) => void): void;
    threadPool(params: CatThreadPoolParams): Promise<any>;
}

export type CatBytes = "b" | "k" | "kb" | "m" | "mb" | "g" | "gb" | "t" | "tb" | "p" | "pb";

export interface CatCommonParams extends GenericParams {
    format: string;
    local?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    h?: NameList | undefined;
    help?: boolean | undefined;
    v?: boolean | undefined;
}

export interface CatAliasesParams extends CatCommonParams {
    name?: NameList | undefined;
}

export interface CatAllocationParams extends CatCommonParams {
    bytes?: CatBytes | undefined;
    nodeId?: NameList | undefined;
}

export interface CatCountParams extends CatCommonParams {
    index?: NameList | undefined;
}

export interface CatFielddataParams extends CatCommonParams {
    bytes?: CatBytes | undefined;
    fields?: NameList | undefined;
}

export interface CatHealthParams extends CatCommonParams {
    ts?: boolean | undefined;
}

export interface CatHelpParams extends GenericParams {
    help?: boolean | undefined;
}

export interface CatIndicesParams extends CatCommonParams {
    bytes?: CatBytes | undefined;
    health?: "green" | "yellow" | "red" | undefined;
    pri?: boolean | undefined;
    index?: NameList | undefined;
}

export interface CatRecoveryParams extends GenericParams {
    format: string;
    bytes?: CatBytes | undefined;
    masterTimeout?: TimeSpan | undefined;
    h?: NameList | undefined;
    help?: boolean | undefined;
    v?: boolean | undefined;
}

export interface CatSegmentsParams extends GenericParams {
    format: string;
    h?: NameList | undefined;
    help?: boolean | undefined;
    v?: boolean | undefined;
    index?: NameList | undefined;
}

export interface CatShardsParams extends CatCommonParams {
    index?: NameList | undefined;
    bytes?: CatBytes | undefined;
}

export interface CatSnapshotsParams extends GenericParams {
    format: string;
    ignoreUnavailable?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    h?: NameList | undefined;
    help?: boolean | undefined;
    v?: boolean | undefined;
    repository?: NameList | undefined;
}

export interface CatTasksParams extends GenericParams {
    format: string;
    nodeId?: NameList | undefined;
    actions?: NameList | undefined;
    detailed?: boolean | undefined;
    parentNode?: string | undefined;
    parentTask?: number | undefined;
    h?: NameList | undefined;
    help?: boolean | undefined;
    v?: boolean | undefined;
}

export interface CatThreadPoolParams extends CatCommonParams {
    size?: "" | "k" | "m" | "g" | "t" | "p" | undefined;
    threadPoolPatterns?: NameList | undefined;
}

export interface Cluster {
    allocationExplain(params: ClusterAllocationExplainParams, callback: (error: any, response: any) => void): void;
    allocationExplain(params: ClusterAllocationExplainParams): Promise<any>;
    getSettings(params: ClusterGetSettingsParams, callback: (error: any, response: any) => void): void;
    getSettings(params: ClusterGetSettingsParams): Promise<any>;
    health(params: ClusterHealthParams, callback: (error: any, response: any) => void): void;
    health(params: ClusterHealthParams): Promise<any>;
    pendingTasks(params: ClusterPendingTasksParams, callback: (error: any, response: any) => void): void;
    pendingTasks(params: ClusterPendingTasksParams): Promise<any>;
    putSettings(params: ClusterPutSettingsParams, callback: (error: any, response: any) => void): void;
    putSettings(params: ClusterPutSettingsParams): Promise<any>;
    reroute(params: ClusterRerouteParams, callback: (error: any, response: any) => void): void;
    reroute(params: ClusterRerouteParams): Promise<any>;
    state(params: ClusterStateParams, callback: (error: any, response: any) => void): void;
    state(params: ClusterStateParams): Promise<any>;
    stats(params: ClusterStatsParams, callback: (error: any, response: any) => void): void;
    stats(params: ClusterStatsParams): Promise<any>;
}

export interface ClusterAllocationExplainParams extends GenericParams {
    includeYesDecisions?: boolean | undefined;
    includeDiskInfo?: boolean | undefined;
}

export interface ClusterGetSettingsParams extends GenericParams {
    flatSettings?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
    includeDefaults?: boolean | undefined;
}

export interface ClusterHealthParams extends GenericParams {
    level?: "cluster" | "indices" | "shards" | undefined;
    local?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    waitForActiveShards?: string | undefined;
    waitForNodes?: string | undefined;
    waitForEvents?: "immediate" | "urgent" | "high" | "normal" | "low" | "languid" | undefined;
    waitForRelocatingShards?: boolean | undefined;
    waitForStatus?: "green" | "yellow" | "red" | undefined;
    index?: NameList | undefined;
}

export interface ClusterPendingTasksParams extends GenericParams {
    local?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
}

export interface ClusterPutSettingsParams extends GenericParams {
    flatSettings?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
}

export interface ClusterRerouteParams extends GenericParams {
    dryRun?: boolean | undefined;
    explain?: boolean | undefined;
    retryFailed?: boolean | undefined;
    metric?: NameList | undefined;
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
}

export interface ClusterStateParams extends GenericParams {
    local?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    flatSettings?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index?: NameList | undefined;
    metric?: NameList | undefined;
}

export interface ClusterStatsParams extends GenericParams {
    flatSettings?: boolean | undefined;
    human?: boolean | undefined;
    timeout?: TimeSpan | undefined;
    nodeId?: NameList | undefined;
}

export class Indices {
    analyze(params: IndicesAnalyzeParams, callback: (error: any, response: any, status: any) => void): void;
    analyze(params: IndicesAnalyzeParams): Promise<any>;
    clearCache(params: IndicesClearCacheParams, callback: (error: any, response: any, status: any) => void): void;
    clearCache(params: IndicesClearCacheParams): Promise<any>;
    close(params: IndicesCloseParams, callback: (error: any, response: any, status: any) => void): void;
    close(params: IndicesCloseParams): Promise<any>;
    create(params: IndicesCreateParams, callback: (error: any, response: any, status: any) => void): void;
    create(params: IndicesCreateParams): Promise<any>;
    delete(params: IndicesDeleteParams, callback: (error: any, response: any, status: any) => void): void;
    delete(params: IndicesDeleteParams): Promise<any>;
    deleteAlias(params: IndicesDeleteAliasParams, callback: (error: any, response: any, status: any) => void): void;
    deleteAlias(params: IndicesDeleteAliasParams): Promise<any>;
    deleteTemplate(params: IndicesDeleteTemplateParams, callback: (error: any, response: any, status: any) => void): void;
    deleteTemplate(params: IndicesDeleteTemplateParams): Promise<any>;
    exists(params: IndicesExistsParams, callback: (error: any, response: boolean, status: any) => void): void;
    exists(params: IndicesExistsParams): Promise<boolean>;
    existsAlias(params: IndicesExistsAliasParams, callback: (error: any, response: boolean, status: any) => void): void;
    existsAlias(params: IndicesExistsAliasParams): Promise<boolean>;
    existsTemplate(params: IndicesExistsTemplateParams, callback: (error: any, response: boolean, status: any) => void): void;
    existsTemplate(params: IndicesExistsTemplateParams): Promise<boolean>;
    existsType(params: IndicesExistsTypeParams, callback: (error: any, response: boolean, status: any) => void): void;
    existsType(params: IndicesExistsTypeParams): Promise<boolean>;
    flush(params: IndicesFlushParams, callback: (error: any, response: any, status: any) => void): void;
    flush(params: IndicesFlushParams): Promise<any>;
    flushSynced(params: IndicesFlushSyncedParams, callback: (error: any, response: any, status: any) => void): void;
    flushSynced(params: IndicesFlushSyncedParams): Promise<any>;
    forcemerge(params: IndicesForcemergeParams, callback: (error: any, response: any, status: any) => void): void;
    forcemerge(params: IndicesForcemergeParams): Promise<any>;
    get(params: IndicesGetParams, callback: (error: any, response: any, status: any) => void): void;
    get(params: IndicesGetParams): Promise<any>;
    getAlias(params: IndicesGetAliasParams, callback: (error: any, response: any, status: any) => void): void;
    getAlias(params: IndicesGetAliasParams): Promise<any>;
    getFieldMapping(params: IndicesGetFieldMappingParams, callback: (error: any, response: any, status: any) => void): void;
    getFieldMapping(params: IndicesGetFieldMappingParams): Promise<any>;
    getMapping(params: IndicesGetMappingParams, callback: (error: any, response: any, status: any) => void): void;
    getMapping(params: IndicesGetMappingParams): Promise<any>;
    getSettings(params: IndicesGetSettingsParams, callback: (error: any, response: any, status: any) => void): void;
    getSettings(params: IndicesGetSettingsParams): Promise<any>;
    getTemplate(params: IndicesGetTemplateParams, callback: (error: any, response: any, status: any) => void): void;
    getTemplate(params: IndicesGetTemplateParams): Promise<any>;
    getUpgrade(params: IndicesGetUpgradeParams, callback: (error: any, response: any, status: any) => void): void;
    getUpgrade(params: IndicesGetUpgradeParams): Promise<any>;
    open(params: IndicesOpenParams, callback: (error: any, response: any, status: any) => void): void;
    open(params: IndicesOpenParams): Promise<any>;
    putAlias(params: IndicesPutAliasParams, callback: (error: any, response: any, status: any) => void): void;
    putAlias(params: IndicesPutAliasParams): Promise<any>;
    putMapping(params: IndicesPutMappingParams, callback: (error: any, response: any, status: any) => void): void;
    putMapping(params: IndicesPutMappingParams): Promise<any>;
    putSettings(params: IndicesPutSettingsParams, callback: (error: any, response: any, status: any) => void): void;
    putSettings(params: IndicesPutSettingsParams): Promise<any>;
    putTemplate(params: IndicesPutTemplateParams, callback: (error: any, response: any) => void): void;
    putTemplate(params: IndicesPutTemplateParams): Promise<any>;
    recovery(params: IndicesRecoveryParams, callback: (error: any, response: any) => void): void;
    recovery(params: IndicesRecoveryParams): Promise<any>;
    refresh(params: IndicesRefreshParams, callback: (error: any, response: any) => void): void;
    refresh(params: IndicesRefreshParams): Promise<any>;
    rollover(params: IndicesRolloverParams, callback: (error: any, response: IndicesRolloverResponse) => void): void;
    rollover(params: IndicesRolloverParams): Promise<IndicesRolloverResponse>;
    segments(params: IndicesSegmentsParams, callback: (error: any, response: any) => void): void;
    segments(params: IndicesSegmentsParams): Promise<any>;
    shardStores(params: IndicesShardStoresParams, callback: (error: any, response: any) => void): void;
    shardStores(params: IndicesShardStoresParams): Promise<any>;
    shrink(params: IndicesShrinkParams, callback: (error: any, response: any) => void): void;
    shrink(params: IndicesShrinkParams): Promise<any>;
    stats(params: IndicesStatsParams, callback: (error: any, response: any) => void): void;
    stats(params: IndicesStatsParams): Promise<any>;
    updateAliases(params: IndicesUpdateAliasesParams, callback: (error: any, response: any) => void): void;
    updateAliases(params: IndicesUpdateAliasesParams): Promise<any>;
    upgrade(params: IndicesUpgradeParams, callback: (error: any, response: any) => void): void;
    upgrade(params: IndicesUpgradeParams): Promise<any>;
    validateQuery(params: IndicesValidateQueryParams, callback: (error: any, response: any) => void): void;
    validateQuery(params: IndicesValidateQueryParams): Promise<any>;
}

export interface IndicesAnalyzeParams extends GenericParams {
    analyzer?: string | undefined;
    charFilter?: NameList | undefined;
    field?: string | undefined;
    filter?: NameList | undefined;
    index?: string | undefined;
    perferLocal?: boolean | undefined;
    text?: NameList | undefined;
    tokenizer?: string | undefined;
    explain?: boolean | undefined;
    attributes?: NameList | undefined;
    format?: "" | undefined;
}

export interface IndicesClearCacheParams extends GenericParams {
    fieldData?: boolean | undefined;
    fielddata?: boolean | undefined;    // yes the docs really have both
    fields?: NameList | undefined;
    query?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index?: NameList | undefined;
    recycler?: boolean | undefined;
    request?: boolean | undefined;
}

export interface IndicesCloseParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index: NameList;
}

export interface IndicesCreateParams extends GenericParams {
    waitForActiveShards?: string | undefined;
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    updateAllTypes?: boolean | undefined;
    includeTypeName?: boolean | undefined;
    index: string;
}

export interface IndicesDeleteParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    index: NameList;
    ignoreUnavailable?: boolean | undefined;
}

export interface IndicesDeleteAliasParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    index: NameList;
    name: NameList;
}

export interface IndicesDeleteTemplateParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    name: string;
}

export interface IndicesExistsParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    local?: boolean | undefined;
    index: NameList;
}

export interface IndicesExistsAliasParams extends IndicesExistsParams {
    name: NameList;
}

export interface IndicesExistsTemplateParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    name: NameList;
}

export interface IndicesExistsTypeParams extends IndicesExistsParams {
    type: NameList;
}

export interface IndicesFlushParams extends GenericParams {
    force?: boolean | undefined;
    waitIfOngoing?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index: NameList;
}

export interface IndicesFlushSyncedParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index: NameList;
}

export interface IndicesForcemergeParams extends GenericParams {
    flush?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    maxNumSegments?: number | undefined;
    onlyExpungeDeletes?: boolean | undefined;
    operationThreading?: any;   // even the docs don't know what this does
    waitForMerge?: boolean | undefined;
    index: NameList;
}

export interface IndicesGetParams extends GenericParams {
    local?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    flatSettings?: boolean | undefined;
    human?: boolean | undefined;
    includeDefaults?: boolean | undefined;
    index?: NameList | undefined;
    feature?: NameList | undefined;
    includeTypeName?: boolean | undefined;
}

export interface IndicesGetAliasParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    local?: boolean | undefined;
    index?: NameList | undefined;
    name?: NameList | undefined;
}

export interface IndicesGetFieldMappingParams extends GenericParams {
    includeDefaults?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    local?: boolean | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
    fields?: NameList | undefined;
    includeTypeName?: boolean | undefined;
}

export interface IndicesGetMappingParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    local?: boolean | undefined;
    index?: NameList | undefined;
    type?: NameList | undefined;
    includeTypeName?: boolean | undefined;
}

export interface IndicesGetSettingsParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    flatSettings?: boolean | undefined;
    local?: boolean | undefined;
    human?: boolean | undefined;
    includeDefaults?: boolean | undefined;
    index?: NameList | undefined;
    name?: NameList | undefined;
}

export interface IndicesGetTemplateParams extends GenericParams {
    flatSettings?: boolean | undefined;
    masterTimeout?: TimeSpan | undefined;
    local?: boolean | undefined;
    name?: NameList | undefined;
    includeTypeName?: boolean | undefined;
}

export interface IndicesGetUpgradeParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    human?: boolean | undefined;
    index?: NameList | undefined;
}

export interface IndicesOpenParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    index?: NameList | undefined;
}

export interface IndicesPutAliasParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    index?: NameList | undefined;
    name: NameList;
}

export interface IndicesPutMappingParams extends GenericParams {
  timeout?: TimeSpan | undefined;
  masterTimeout?: TimeSpan | undefined;
  ignoreUnavailable?: boolean | undefined;
  allowNoIndices?: boolean | undefined;
  expandWildcards?: ExpandWildcards | undefined;
  updateAllTypes?: boolean | undefined;
  index: NameList;
  type: string;
  includeTypeName?: boolean | undefined;
  body: any;
}

export interface IndicesPutSettingsParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    preserveExisting?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    flatSettings?: boolean | undefined;
    index: NameList;
    body: any;
}

export interface IndicesPutTemplateParams extends GenericParams {
    order?: number | undefined;
    create?: boolean | undefined;
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    flatSettings?: boolean | undefined;
    name: string;
    body: any;
    includeTypeName?: boolean | undefined;
}

export interface IndicesRecoveryParams extends GenericParams {
    detailed?: boolean | undefined;
    activeOnly?: boolean | undefined;
    human?: boolean | undefined;
    index: NameList;
}

export interface IndicesRefreshParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    force?: boolean | undefined;
    operationThreading?: any;   // even the docs don't know what this does
    index: NameList;
}

export interface IndicesRolloverParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    waitForActiveShards?: number | string | undefined;
    alias?: string | undefined;
    newIndex?: string | undefined;
    includeTypeName?: boolean | undefined;
}

export interface IndicesRolloverResponse {
    acknowledged: boolean;
    shards_acknowledged: boolean;
    old_index: string;
    new_index: string;
    rolled_over: boolean;
    dry_run: boolean;
    conditions: { [condition: string]: boolean };
}

export interface IndicesSegmentsParams extends GenericParams {
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    human?: boolean | undefined;
    operationThreading?: any;   // even the docs don't know what this does
    verbose?: boolean | undefined;
    index: NameList;
}

export interface IndicesShardStoresParams extends GenericParams {
    status?: NameList | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    operationThreading?: any;   // even the docs don't know what this does
    index: NameList;
}

export interface IndicesShrinkParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    waitForActiveShards?: string | number | undefined;
    index: string;
    target: string;
}

export interface IndicesStatsParams extends GenericParams {
    completionFields?: NameList | undefined;
    fielddataFields?: NameList | undefined;
    fields?: NameList | undefined;
    groups?: NameList | undefined;
    human?: boolean | undefined;
    level?: "cluster" | "indices" | "shards" | undefined;
    types?: NameList | undefined;
    index: NameList;
    metric?: NameList | undefined;
}

export interface IndicesUpdateAliasesParams extends GenericParams {
    timeout?: TimeSpan | undefined;
    masterTimeout?: TimeSpan | undefined;
    body: {
        actions: IndicesUpdateAliasesParamsAction[];
    };
}

export interface IndicesUpdateAliasesParamsAction {
    add?: {
        index?: string | undefined;
        indices?: string[] | undefined;
        alias: string;
        routing?: string | undefined;
        filter?: object | undefined;
    } | undefined;
    remove?: {
        index?: string | undefined;
        indices?: string[] | undefined;
        alias: string;
    } | undefined;
    remove_index?: {
        index: string;
    } | undefined;
}

export interface IndicesUpgradeParams extends GenericParams {
    expandWildcards?: ExpandWildcards | undefined;
    ignoreUnavailable?: boolean | undefined;
    waitForCompletion?: boolean | undefined;
    onlyAncientSegments?: boolean | undefined;
    index: NameList;
}

export interface IndicesValidateQueryParams extends GenericParams {
    explain?: boolean | undefined;
    ignoreUnavailable?: boolean | undefined;
    allowNoIndices?: boolean | undefined;
    expandWildcards?: ExpandWildcards | undefined;
    operationThreading?: any;   // even the docs don't know what this does
    q?: string | undefined;
    analyzer?: string | undefined;
    analyzeWildcard?: boolean | undefined;
    defaultOperator?: DefaultOperator | undefined;
    df?: string | undefined;
    lenient?: boolean | undefined;
    lowercaseExpandedTerms?: boolean | undefined;
    rewrite?: boolean | undefined;
    index: NameList;
    type?: NameList | undefined;
}

export class Ingest {
    deletePipeline(params: IngestDeletePipelineParams, callback: (error: any, response: any, status: any) => void): void;
    deletePipeline(params: IngestDeletePipelineParams): Promise<any>;
    getPipeline(params: IngestGetPipelineParams, callback: (error: any, response: any, status: any) => void): void;
    getPipeline(params: IngestGetPipelineParams): Promise<any>;
    putPipeline(params: IngestPutPipelineParams, callback: (error: any, response: any, status: any) => void): void;
    putPipeline(params: IngestPutPipelineParams): Promise<any>;
    simulate(params: IngestSimulateParams, callback: (error: any, response: any, status: any) => void): void;
    simulate(params: IngestSimulateParams): Promise<any>;
}

export interface IngestDeletePipelineParams extends GenericParams {
    masterTimeout?: number | undefined;
    timeout?: number | undefined;
    id: string;
}

export interface IngestGetPipelineParams extends GenericParams {
    masterTimeout?: number | undefined;
    id: string;
}

export interface IngestPutPipelineParams extends GenericParams {
    masterTimeout?: number | undefined;
    timeout?: number | undefined;
    id: string;
    body: any;
}

export interface IngestSimulateParams extends GenericParams {
    verbose?: boolean | undefined;
    id: string;
}

export class Nodes {
    hotThreads(params: NodesHotThreadsParams, callback: (error: any, response: any, status: any) => void): void;
    hotThreads(params: NodesHotThreadsParams): Promise<any>;
    info(params: NodesInfoParams, callback: (error: any, response: any, status: any) => void): void;
    info(params: NodesInfoParams): Promise<any>;
    stats(params: NodesStatsParams, callback: (error: any, response: any, status: any) => void): void;
    stats(params: NodesStatsParams): Promise<any>;
}

export interface NodesHotThreadsParams extends GenericParams {
    interval?: TimeSpan | undefined;
    snapshots?: number | undefined;
    threads?: number | undefined;
    ignoreIdleThreads?: boolean | undefined;
    type?: "cpu" | "wait" | "blocked" | undefined;
    timeout?: TimeSpan | undefined;
    nodeId: NameList;
}

export interface NodesInfoParams extends GenericParams {
    flatSettings?: boolean | undefined;
    human?: boolean | undefined;
    timeout?: TimeSpan | undefined;
    nodeId: NameList;
    metric?: NameList | undefined;
}

export interface NodesStatsParams extends GenericParams {
    completionFields?: NameList | undefined;
    fielddataFields?: NameList | undefined;
    fields?: NameList | undefined;
    groups?: boolean | undefined;
    human?: boolean | undefined;
    level?: "indices" | "node" | "shards" | undefined;
    types?: NameList | undefined;
    timeout?: TimeSpan | undefined;
    metric?: NameList | undefined;
    indexMetric?: NameList | undefined;
    nodeId?: NameList | undefined;
}

export class Snapshot {
    create(params: SnapshotCreateParams, callback: (error: any, response: any, status: any) => void): void;
    create(params: SnapshotCreateParams): Promise<any>;
    createRepository(params: SnapshotCreateRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
    createRepository(params: SnapshotCreateRepositoryParams): Promise<any>;
    delete(params: SnapshotDeleteParams, callback: (error: any, response: any, status: any) => void): void;
    delete(params: SnapshotDeleteParams): Promise<any>;
    deleteRepository(params: SnapshotDeleteRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
    deleteRepository(params: SnapshotDeleteRepositoryParams): Promise<any>;
    get(params: SnapshotGetParams, callback: (error: any, response: any, status: any) => void): void;
    get(params: SnapshotGetParams): Promise<any>;
    getRepository(params: SnapshotGetRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
    getRepository(params: SnapshotGetRepositoryParams): Promise<any>;
    restore(params: SnapshotRestoreParams, callback: (error: any, response: any, status: any) => void): void;
    restore(params: SnapshotRestoreParams): Promise<any>;
    status(params: SnapshotStatusParams, callback: (error: any, response: any, status: any) => void): void;
    status(params: SnapshotStatusParams): Promise<any>;
    verifyRepository(params: SnapshotVerifyRepositoryParams, callback: (error: any, response: any, status: any) => void): void;
    verifyRepository(params: SnapshotVerifyRepositoryParams): Promise<any>;
}

export interface SnapshotCreateParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    waitForCompletion?: boolean | undefined;
    repository: string;
    snapshot: string;
}

export interface SnapshotCreateRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
    verify?: boolean | undefined;
    repository: string;
}

export interface SnapshotDeleteParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    repository: string;
    snapshot: string;
}

export interface SnapshotDeleteRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
    repository: string;
}

export interface SnapshotGetParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    ignoreUnavailable?: boolean | undefined;
    repository: string;
    snapshot: NameList;
}

export interface SnapshotGetRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    local?: boolean | undefined;
    repository: NameList;
}

export interface SnapshotRestoreParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    waitForCompletion?: boolean | undefined;
    repository: string;
    snapshot: string;
}

export interface SnapshotStatusParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    ignoreUnavailable?: boolean | undefined;
    repository: string;
    snapshot: NameList;
}

export interface SnapshotVerifyRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan | undefined;
    timeout?: TimeSpan | undefined;
    repository: string;
}

export class Tasks {
    cancel(params: TasksCancelParams, callback: (error: any, response: any, status: any) => void): void;
    cancel(params: TasksCancelParams): Promise<any>;
    get(params: TasksGetParams, callback: (error: any, response: any, status: any) => void): void;
    get(params: TasksGetParams): Promise<any>;
    list(params: TasksListParams, callback: (error: any, response: any, status: any) => void): void;
    list(params: TasksListParams): Promise<any>;
}

export interface TasksCancelParams extends GenericParams {
    nodeId?: NameList | undefined;
    actions?: NameList | undefined;
    parentNode?: string | undefined;
    parentTask?: string | undefined;
    taskId?: string | undefined;
}

export interface TasksGetParams extends GenericParams {
    waitForCompletion?: boolean | undefined;
    taskId?: string | undefined;
}

export interface TasksListParams extends GenericParams {
    nodeId?: NameList | undefined;
    actions?: NameList | undefined;
    detailed?: boolean | undefined;
    parentNode?: string | undefined;
    parentTask?: string | undefined;
    waitForCompletion?: boolean | undefined;
    groupBy?: "nodes" | "parents" | undefined;
}

export namespace errors {
    class _Abstract extends Error {}
    class Generic extends _Abstract {}
    class ConnectionFault extends _Abstract {}
    class NoConnections extends _Abstract {}
    class Serialization extends _Abstract {}
    class RequestTypeError extends _Abstract {}

    class AuthenticationException extends _Abstract {}
    class AuthorizationException extends _Abstract {}
    class BadGateway extends _Abstract {}
    class BadRequest extends _Abstract {}
    class BlockedByWindowsParentalControls extends _Abstract {}
    class ClientClosedRequest extends _Abstract {}
    class Conflict extends _Abstract {}
    class ExpectationFailed extends _Abstract {}
    class Forbidden extends _Abstract {}
    class GatewayTimeout extends _Abstract {}
    class HTTPToHTTPS extends _Abstract {}
    class HTTPVersionNotSupported extends _Abstract {}
    class ImATeapot extends _Abstract {}
    class InternalServerError extends _Abstract {}
    class LengthRequired extends _Abstract {}
    class MethodNotAllowed extends _Abstract {}
    class MovedPermanently extends _Abstract {}
    class MultipleChoices extends _Abstract {}
    class NotAcceptable extends _Abstract {}
    class NotExtended extends _Abstract {}
    class NotFound extends _Abstract {}
    class NotImplemented extends _Abstract {}
    class NotModified extends _Abstract {}
    class PaymentRequired extends _Abstract {}
    class PermanentRedirect extends _Abstract {}
    class PreconditionFailed extends _Abstract {}
    class ProxyAuthenticationRequired extends _Abstract {}
    class RequestedRangeNotSatisfiable extends _Abstract {}
    class RequestEntityTooLarge extends _Abstract {}
    class RequestHeaderTooLarge extends _Abstract {}
    class RequestTimeout extends _Abstract {}
    class RequestURITooLong extends _Abstract {}
    class SeeOther extends _Abstract {}
    class ServiceUnavailable extends _Abstract {}
    class TemporaryRedirect extends _Abstract {}
    class TooManyConnectionsFromThisIP extends _Abstract {}
    class TooManyRequests extends _Abstract {}
    class UnsupportedMediaType extends _Abstract {}
    class UpgradeRequired extends _Abstract {}
    class UseProxy extends _Abstract {}
    class VariantAlsoNegotiates extends _Abstract {}
}
