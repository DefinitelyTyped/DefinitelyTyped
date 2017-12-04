// Type definitions for elasticsearch 5.0
// Project: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
// Definitions by: Casper Skydt <https://github.com/CasperSkydt>
//                 Blake Smith <https://github.com/bfsmith>
//                 Dave Dunkin <https://github.com/ddunkin>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Margus Lamp <https://github.com/mlamp>
//                 Ahmad Ferdous Bin Alam <https://github.com/ahmadferdous>
//                 Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class Client {
    constructor(params: ConfigOptions);
    cat: Cat;
    cluster: Cluster;
    indices: Indices;
    ingest: Ingest;
    nodes: Nodes;
    snapshot: Snapshot;
    tasks: Tasks;
    bulk(params: BulkIndexDocumentsParams): Promise<any>;
    bulk(params: BulkIndexDocumentsParams, callback: (error: any, response: any) => void): void;
    clearScroll(params: ClearScrollParams, callback: (error: any, response: any) => void): void;
    clearScroll(params: ClearScrollParams): Promise<any>;
    count(params: CountParams, callback: (error: any, response: CountResponse) => void): void;
    count(params: CountParams): Promise<CountResponse>;
    create(params: CreateDocumentParams): Promise<CreateDocumentResponse>;
    create(params: CreateDocumentParams, callback: (err: any, response: CreateDocumentResponse, status: any) => void): void;
    delete(params: DeleteDocumentParams): Promise<DeleteDocumentResponse>;
    delete(params: DeleteDocumentParams, callback: (error: any, response: DeleteDocumentResponse) => void): void;
    deleteByQuery(params: DeleteDocumentByQueryParams): Promise<DeleteDocumentByQueryResponse>;
    deleteByQuery(params: DeleteDocumentByQueryParams, callback: (error: any, response: DeleteDocumentByQueryResponse) => void): void;
    deleteScript(params: DeleteScriptParams): Promise<any>;
    deleteScript(params: DeleteScriptParams, callback: (error: any, response: any) => void): void;
    deleteTemplate(params: DeleteTemplateParams): Promise<any>;
    deleteTemplate(params: DeleteTemplateParams, callback: (error: any, response: any) => void): void;
    exists(params: ExistsParams): Promise<any>;
    exists(params: ExistsParams, callback: (error: any, response: any, status?: any) => void): void;
    explain(params: ExplainParams): Promise<ExplainResponse>;
    explain(params: ExplainParams, callback: (error: any, response: ExplainResponse) => void): void;
    fieldStats(params: FieldStatsParams): Promise<FieldStatsResponse>;
    fieldStats(params: FieldStatsParams, callback: (error: any, response: FieldStatsResponse) => void): void;
    get<T>(params: GetParams, callback: (error: any, response: GetResponse<T>) => void): void;
    get<T>(params: GetParams): Promise<GetResponse<T>>;
    getScript(params: GetScriptParams): Promise<any>;
    getScript(params: GetScriptParams, callback: (error: any, response: any) => void): void;
    getSource(params: GetSourceParams): Promise<any>;
    getSource(params: GetSourceParams, callback: (error: any, response: any) => void): void;
    getTemplate(params: GetTemplateParams): Promise<any>;
    getTemplate(params: GetTemplateParams, callback: (error: any, response: any) => void): void;
    index<T>(params: IndexDocumentParams<T>): Promise<any>;
    index<T>(params: IndexDocumentParams<T>, callback: (error: any, response: any) => void): void;
    info(params: InfoParams): Promise<any>;
    info(params: InfoParams, callback: (error: any, response: any) => void): void;
    mget<T>(params: MGetParams, callback: (error: any, response: MGetResponse<T>) => void): void;
    mget<T>(params: MGetParams): Promise<MGetResponse<T>>;
    msearch<T>(params: MSearchParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
    msearch<T>(params: MSearchParams): Promise<MSearchResponse<T>>;
    msearchTemplate<T>(params: MSearchTemplateParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
    msearchTemplate<T>(params: MSearchTemplateParams): Promise<MSearchResponse<T>>;
    mtermvectors(params: MTermVectorsParams): Promise<any>;
    mtermvectors(params: MTermVectorsParams, callback: (error: any, response: any) => void): void;
    ping(params: PingParams): Promise<any>;
    ping(params: PingParams, callback: (err: any, response: any, status: any) => void): void;
    putScript(params: PutScriptParams): Promise<any>;
    putScript(params: PutScriptParams, callback: (err: any, response: any, status: any) => void): void;
    putTemplate(params: PutTemplateParams): Promise<any>;
    putTemplate(params: PutTemplateParams, callback: (err: any, response: any, status: any) => void): void;
    reindex(params: ReindexParams): Promise<ReindexResponse>;
    reindex(params: ReindexParams, callback: (error: any, response: ReindexResponse) => void): void;
    reindexRethrottle(params: ReindexRethrottleParams): Promise<any>;
    reindexRethrottle(params: ReindexRethrottleParams, callback: (error: any, response: any) => void): void;
    renderSearchTemplate(params: RenderSearchTemplateParams): Promise<any>;
    renderSearchTemplate(params: RenderSearchTemplateParams, callback: (error: any, response: any) => void): void;
    scroll<T>(params: ScrollParams): Promise<SearchResponse<T>>;
    scroll<T>(params: ScrollParams, callback: (error: any, response: SearchResponse<T>) => void): void;
    search<T>(params: SearchParams): Promise<SearchResponse<T>>;
    search<T>(params: SearchParams, callback: (error: any, response: SearchResponse<T>) => void): void;
    searchShards(params: SearchShardsParams): Promise<SearchShardsResponse>;
    searchShards(params: SearchShardsParams, callback: (error: any, response: SearchShardsResponse) => void): void;
    searchTemplate(params: SearchTemplateParams): Promise<any>;
    searchTemplate(params: SearchTemplateParams, callback: (error: any, response: any) => void): void;
    suggest(params: SuggestParams): Promise<any>;
    suggest(params: SuggestParams, callback: (error: any, response: any) => void): void;
    termvectors(params: TermvectorsParams): Promise<any>;
    termvectors(params: TermvectorsParams, callback: (error: any, response: any) => void): void;
    update(params: UpdateDocumentParams): Promise<any>;
    update(params: UpdateDocumentParams, callback: (error: any, response: any) => void): void;
    updateByQuery(params: UpdateDocumentByQueryParams): Promise<any>;
    updateByQuery(params: UpdateDocumentByQueryParams, callback: (error: any, response: any) => void): void;
    close(): void;
}

export interface ConfigOptions {
    host?: any;
    hosts?: any;
    httpAuth?: string;
    log?: any;
    apiVersion?: string;
    plugins?: any;
    sniffOnStart?: boolean;
    sniffInterval?: number;
    sniffOnConnectionFault?: boolean;
    maxRetries?: number;
    requestTimeout?: number;
    deadTimeout?: number;
    pingTimeout?: number;
    keepAlive?: boolean;
    maxSockets?: number;
    suggestCompression?: boolean;
    connectionClass?: string;
    sniffedNodesProtocol?: string;
    ssl?: object;
    selector?: any;
    defer?: () => void;
    nodesToHostCallback?: any;
    createNodeAgent?: any;
}

export interface Explanation {
    value: number;
    description: string;
    details: Explanation[];
}

export interface GenericParams {
    requestTimeout?: number;
    maxRetries?: number;
    method?: string;
    body?: any;
    ignore?: number | number[];
    filterPath?: string | string[];
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
    waitForActiveShards?: string;
    refresh?: Refresh;
    routing?: string;
    timeout?: TimeSpan;
    type?: string;
    fields?: NameList;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    pipeline?: string;
    index?: string;
}

export interface ClearScrollParams extends GenericParams {
    scrollId: NameList;
}

export interface CountParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    minScore?: number;
    preference?: string;
    routing?: string;
    q?: string;
    analyzer?: string;
    analyzeWildcard?: boolean;
    defaultOperator?: DefaultOperator;
    df?: string;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    index?: NameList;
    type?: NameList;
}

export interface CountResponse {
    count: number;
    _shards: ShardsResponse;
}

export interface CreateDocumentParams extends GenericParams {
    waitForActiveShards?: string;
    parent?: string;
    refresh?: Refresh;
    timeout?: TimeSpan;
    timestamp?: Date | number;
    ttl?: TimeSpan;
    version?: number;
    versionType?: VersionType;
    pipeline?: string;
    id?: string;
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
    waitForActiveShards?: string;
    parent?: string;
    refresh?: Refresh;
    routing?: string;
    timeout?: TimeSpan;
    version?: number;
    versionType?: VersionType;
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
    analyzer?: string;
    analyzeWildcard?: boolean;
    defaultOperator?: DefaultOperator;
    df?: string;
    from?: number;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    conflicts?: Conflicts;
    expandWildcards?: ExpandWildcards;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    preference?: string;
    q?: string;
    routing?: string | string[] | boolean;
    scroll?: string;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch";
    searchTimeout?: TimeSpan;
    size?: number;
    sort?: NameList;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    terminateAfter?: number;
    stats?: string | string[] | boolean;
    version?: number;
    requestCache?: boolean;
    refresh?: Refresh;
    timeout?: TimeSpan;
    waitForActiveShards?: string;
    scrollSize?: number;
    waitForCompletion?: boolean;
    requestsPerSecond?: number;
    index?: string;
    type?: string;
}

export interface DeleteDocumentByQueryResponse {
    took: number;
    timed_out: boolean;
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
    total: number;
    failures: any[];
}

export interface DeleteScriptParams extends GenericParams {
    id: string;
    lang: string;
}

export interface DeleteTemplateParams extends GenericParams {
    id: string;
}

export interface ExistsParams extends GenericParams {
    parent?: string;
    preference?: string;
    realtime?: boolean;
    refresh?: boolean;
    routing?: string;
    id: string;
    index: string;
    type: string;
}

export interface ExplainParams extends GenericParams {
    analyzeWildcard?: boolean;
    analyzer?: string;
    defaultOperator?: DefaultOperator;
    df?: string;
    storedFields?: NameList;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    parent?: string;
    preference?: string;
    q?: string;
    routing?: string;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    id?: string;
    index?: string;
    type?: string;
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
    fields?: NameList;
    level?: "indices" | "cluster";
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index?: NameList;
}

export interface FieldStatsResponse {
    _shards: ShardsResponse;
    indices: { [indexName: string]: FieldStatsResponseIndex };
    conflicts?: { [fieldName: string]: string };
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
    storedFields?: NameList;
    parent?: string;
    preference?: string;
    realtime?: boolean;
    refresh?: boolean;
    routing?: string;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    version?: number;
    versionType?: VersionType;
    id: string;
    index: string;
    type: string;
}

export interface GetResponse<T> {
    _index: string;
    _type: string;
    _id: string;
    _version: number;
    found: boolean;
    _source: T;
}

export interface GetScriptParams extends GenericParams {
    id: string;
    lang: string;
}

export interface GetSourceParams extends GenericParams {
    preference?: string;
    realtime?: boolean;
    refresh?: boolean;
    routing?: string;
    _source: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    version?: number;
    versionType?: VersionType;
    id: string;
    index: string;
    type: string;
}

export interface GetTemplateParams extends GenericParams {
    id: string;
}

export interface IndexDocumentParams<T> extends GenericParams {
    waitForActiveShards?: string;
    opType?: "index" | "create";
    parent?: string;
    refresh?: string;
    routing?: string;
    timeout?: TimeSpan;
    timestamp?: Date | number;
    ttl?: TimeSpan;
    version?: number;
    versionType?: VersionType;
    pipeline?: string;
    id?: string;
    index: string;
    type: string;
    body: T;
}

export interface InfoParams extends GenericParams {
}

export interface MGetParams extends GenericParams {
    storedFields?: NameList;
    preference?: string;
    realtime?: boolean;
    refresh?: boolean;
    source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    index?: string;
    type?: string;
}

export interface MGetResponse<T> {
    docs?: Array<GetResponse<T>>;
}

export interface MSearchParams extends GenericParams {
    search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
    maxConcurrentSearches?: number;
    index?: NameList;
    type?: NameList;
}

export interface MSearchResponse<T> {
    responses?: Array<SearchResponse<T>>;
}

export interface MSearchTemplateParams extends GenericParams {
    search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
    index?: NameList;
    type?: NameList;
}

export interface MTermVectorsParams extends GenericParams {
    ids?: NameList;
    termStatistics?: boolean;
    fieldStatistics?: boolean;
    fields?: NameList;
    offsets?: boolean;
    positions?: boolean;
    payloads?: boolean;
    preference?: string;
    routing?: string;
    parent?: string;
    realtime?: boolean;
    version?: number;
    versionType?: VersionType;
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
    refresh?: boolean;
    timeout?: TimeSpan;
    waitForActiveShards?: string;
    waitForCompletion?: boolean;
    requestsPerSecond?: number;
    body: {
        conflicts?: string;
        source: {
            index: string | string[];
            type?: string | string[];
            query?: any;
            sort?: any;
            size?: number;
            remote?: {
                host: string;
                username?: string;
                password?: string;
            }
        };
        dest: {
            index: string;
            version_type?: string;
            op_type?: string;
            routing?: string;
            pipeline?: string;
        };
        script?: {
            inline: string;
            lang: string;
        }
    };
}

export interface ReindexResponse {
    took: number;
    updated: number;
    created: number;
    batches: number;
    version_conflicts: number;
    retries: {
        bulk: number;
        search: number;
    };
    throttled_millis: number;
    failures: any[];
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
    analyzer?: string;
    analyzeWildcard?: boolean;
    defaultOperator?: DefaultOperator;
    df?: string;
    explain?: boolean;
    storedFields?: NameList;
    docvalueFields?: NameList;
    fielddataFields?: NameList;
    from?: number;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    preference?: string;
    q?: string;
    routing?: NameList;
    scroll?: TimeSpan;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch";
    size?: number;
    sort?: NameList;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    terminateAfter?: number;
    stats?: NameList;
    suggestField?: string;
    suggestMode?: "missing" | "popular" | "always";
    suggestSize?: number;
    suggestText?: string;
    timeout?: TimeSpan;
    trackScores?: boolean;
    version?: boolean;
    requestCache?: boolean;
    index?: NameList;
    type?: NameList;
}

export interface SearchResponse<T> {
    took: number;
    timed_out: boolean;
    _scroll_id?: string;
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
            _version?: number;
            _explanation?: Explanation;
            fields?: any;
            highlight?: any;
            inner_hits?: any;
            sort?: string[];
        }>;
    };
    aggregations?: any;
}

export interface SearchShardsParams extends GenericParams {
    preference?: string;
    routing?: string;
    local?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index: NameList;
    type: NameList;
}

export interface SearchShardsResponse {
    nodes: any;
    shards: SearchShardsResponseShard[][];
}

export interface SearchShardsResponseShard {
    index: string;
    node: string;
    primary: boolean;
    share: number;
    state: string;
    allocation_id: {
        id: string;
    };
    relocating_node: any;
}

export interface SearchTemplateParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    preference?: string;
    routing?: NameList;
    scroll?: TimeSpan;
    searchType?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch";
    index: NameList;
    type: NameList;
}

export interface SuggestParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    preference?: string;
    routing?: string;
    index: NameList;
}

export interface TermvectorsParams extends GenericParams {
    termStatistics?: boolean;
    fieldStatistics?: boolean;
    fields?: NameList;
    offsets?: boolean;
    positions?: boolean;
    payloads?: boolean;
    preference?: string;
    routing?: string;
    parent?: string;
    realtime?: boolean;
    version?: number;
    versionType?: VersionType;
    index: string;
    type: string;
    id?: string;
}

export interface UpdateDocumentParams extends GenericParams {
    waitForActiveShards?: string;
    fields?: NameList;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    lang?: string;
    parent?: string;
    refresh?: Refresh;
    retryOnConflict?: number;
    routing?: string;
    timeout?: TimeSpan;
    timestamp?: Date | number;
    ttl?: TimeSpan;
    version?: number;
    versionType?: "internal" | "force";
    id: string;
    index: string;
    type: string;
}

export interface UpdateDocumentByQueryParams extends GenericParams {
    analyzer?: string;
    analyzeWildcard?: boolean;
    defaultOperator?: DefaultOperator;
    df?: string;
    explain?: boolean;
    storedFields?: NameList;
    docvalueFields?: NameList;
    fielddataFields?: NameList;
    from?: number;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    conflicts?: Conflicts;
    expandWildcards?: ExpandWildcards;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    pipeline?: string;
    preference?: string;
    q?: string;
    routing?: NameList;
    scroll?: TimeSpan;
    searchType?: "query_then_fetch" | "dfs_query_then_fetch";
    searchTimeout?: TimeSpan;
    size?: number;
    sort?: NameList;
    _source?: NameList;
    _sourceExclude?: NameList;
    _sourceInclude?: NameList;
    terminateAfter?: number;
    stats?: NameList;
    suggestField?: string;
    suggestMode?: "missing" | "popular" | "always";
    suggestSize?: number;
    suggestText?: string;
    timeout?: TimeSpan;
    trackScores?: boolean;
    version?: boolean;
    versionType?: boolean;
    requestCache?: boolean;
    refresh?: boolean;
    waitForActiveShards?: string;
    scrollSize?: number;
    waitForCompletion?: boolean;
    requestsPerSecond?: number;
    index: NameList;
    type: NameList;
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
    local?: boolean;
    masterTimeout?: TimeSpan;
    h?: NameList;
    help?: boolean;
    v?: boolean;
}

export interface CatAliasesParams extends CatCommonParams {
    name?: NameList;
}

export interface CatAllocationParams extends CatCommonParams {
    bytes?: CatBytes;
    nodeId?: NameList;
}

export interface CatCountParams extends CatCommonParams {
    index?: NameList;
}

export interface CatFielddataParams extends CatCommonParams {
    bytes?: CatBytes;
    fields?: NameList;
}

export interface CatHealthParams extends CatCommonParams {
    ts?: boolean;
}

export interface CatHelpParams extends GenericParams {
    help?: boolean;
}

export interface CatIndicesParams extends CatCommonParams {
    bytes?: CatBytes;
    health?: "green" | "yellow" | "red";
    pri?: boolean;
    index?: NameList;
}

export interface CatRecoveryParams extends GenericParams {
    format: string;
    bytes?: CatBytes;
    masterTimeout?: TimeSpan;
    h?: NameList;
    help?: boolean;
    v?: boolean;
}

export interface CatSegmentsParams extends GenericParams {
    format: string;
    h?: NameList;
    help?: boolean;
    v?: boolean;
    index?: NameList;
}

export interface CatShardsParams extends CatCommonParams {
    index?: NameList;
}

export interface CatSnapshotsParams extends GenericParams {
    format: string;
    ignoreUnavailable?: boolean;
    masterTimeout?: TimeSpan;
    h?: NameList;
    help?: boolean;
    v?: boolean;
    repository?: NameList;
}

export interface CatTasksParams extends GenericParams {
    format: string;
    nodeId?: NameList;
    actions?: NameList;
    detailed?: boolean;
    parentNode?: string;
    parentTask?: number;
    h?: NameList;
    help?: boolean;
    v?: boolean;
}

export interface CatThreadPoolParams extends CatCommonParams {
    size?: "" | "k" | "m" | "g" | "t" | "p";
    threadPoolPatterns?: NameList;
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
    includeYesDecisions?: boolean;
    includeDiskInfo?: boolean;
}

export interface ClusterGetSettingsParams extends GenericParams {
    flatSettings?: boolean;
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
    includeDefaults?: boolean;
}

export interface ClusterHealthParams extends GenericParams {
    level?: "cluster" | "indices" | "shards";
    local?: boolean;
    masterTimeout?: TimeSpan;
    waitForActiveShards?: string;
    waitForNodes?: string;
    waitForEvents?: "immediate" | "urgent" | "high" | "normal" | "low" | "languid";
    waitForRelocatingShards?: boolean;
    waitForStatus?: "green" | "yellow" | "red";
    index?: NameList;
}

export interface ClusterPendingTasksParams extends GenericParams {
    local?: boolean;
    masterTimeout?: TimeSpan;
}

export interface ClusterPutSettingsParams extends GenericParams {
    flatSettings?: boolean;
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
}

export interface ClusterRerouteParams extends GenericParams {
    dryRun?: boolean;
    explain?: boolean;
    retryFailed?: boolean;
    metric?: NameList;
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
}

export interface ClusterStateParams extends GenericParams {
    local?: boolean;
    masterTimeout?: TimeSpan;
    flatSettings?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index?: NameList;
    metric?: NameList;
}

export interface ClusterStatsParams extends GenericParams {
    flatSettings?: boolean;
    human?: boolean;
    timeout?: TimeSpan;
    nodeId?: NameList;
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
    exists(params: IndicesExistsParams, callback: (error: any, response: any, status: any) => void): void;
    exists(params: IndicesExistsParams): Promise<any>;
    existsAlias(params: IndicesExistsAliasParams, callback: (error: any, response: any, status: any) => void): void;
    existsAlias(params: IndicesExistsAliasParams): Promise<any>;
    existsTemplate(params: IndicesExistsTemplateParams, callback: (error: any, response: any, status: any) => void): void;
    existsTemplate(params: IndicesExistsTemplateParams): Promise<any>;
    existsType(params: IndicesExistsTypeParams, callback: (error: any, response: any, status: any) => void): void;
    existsType(params: IndicesExistsTypeParams): Promise<any>;
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
    analyzer?: string;
    charFilter?: NameList;
    field?: string;
    filter?: NameList;
    index?: string;
    perferLocal?: boolean;
    text?: NameList;
    tokenizer?: string;
    explain?: boolean;
    attributes?: NameList;
    format?: "";
}

export interface IndicesClearCacheParams extends GenericParams {
    fieldData?: boolean;
    fielddata?: boolean;    // yes the docs really have both
    fields?: NameList;
    query?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index?: NameList;
    recycler?: boolean;
    request?: boolean;
}

export interface IndicesCloseParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index: NameList;
}

export interface IndicesCreateParams extends GenericParams {
    waitForActiveShards?: string;
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    updateAllTypes?: boolean;
    index: string;
}

export interface IndicesDeleteParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    index: NameList;
}

export interface IndicesDeleteAliasParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    index: NameList;
    name: NameList;
}

export interface IndicesDeleteTemplateParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    name: string;
}

export interface IndicesExistsParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    local?: boolean;
    index: NameList;
}

export interface IndicesExistsAliasParams extends IndicesExistsParams {
    name: NameList;
}

export interface IndicesExistsTemplateParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    name: NameList;
}

export interface IndicesExistsTypeParams extends IndicesExistsParams {
    type: NameList;
}

export interface IndicesFlushParams extends GenericParams {
    force?: boolean;
    waitIfOngoing?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index: NameList;
}

export interface IndicesFlushSyncedParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index: NameList;
}

export interface IndicesForcemergeParams extends GenericParams {
    flush?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    maxNumSegments?: number;
    onlyExpungeDeletes?: boolean;
    operationThreading?: any;   // even the docs don't know what this does
    waitForMerge?: boolean;
    index: NameList;
}

export interface IndicesGetParams extends GenericParams {
    local?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    flatSettings?: boolean;
    human?: boolean;
    includeDefaults?: boolean;
    index?: NameList;
    feature?: NameList;
}

export interface IndicesGetAliasParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    local?: boolean;
    index?: NameList;
    name?: NameList;
}

export interface IndicesGetFieldMappingParams extends GenericParams {
    includeDefaults?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    local?: boolean;
    index?: NameList;
    type?: NameList;
    fields?: NameList;
}

export interface IndicesGetMappingParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    local?: boolean;
    index?: NameList;
    type?: NameList;
}

export interface IndicesGetSettingsParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    flatSettings?: boolean;
    local?: boolean;
    human?: boolean;
    includeDefaults?: boolean;
    index?: NameList;
    name?: NameList;
}

export interface IndicesGetTemplateParams extends GenericParams {
    flatSettings?: boolean;
    masterTimeout?: TimeSpan;
    local?: boolean;
    name?: NameList;
}

export interface IndicesGetUpgradeParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    human?: boolean;
    index?: NameList;
}

export interface IndicesOpenParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    index?: NameList;
}

export interface IndicesPutAliasParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    index?: NameList;
    name: NameList;
}

export interface IndicesPutMappingParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    updateAllTypes?: boolean;
    index: NameList;
    type: string;
    body: any;
}

export interface IndicesPutSettingsParams extends GenericParams {
    masterTimeout?: TimeSpan;
    preserveExisting?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    flatSettings?: boolean;
    index: NameList;
    body: any;
}

export interface IndicesPutTemplateParams extends GenericParams {
    order?: number;
    create?: boolean;
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    flatSettings?: boolean;
    name: string;
    body: any;
}

export interface IndicesRecoveryParams extends GenericParams {
    detailed?: boolean;
    activeOnly?: boolean;
    human?: boolean;
    index: NameList;
}

export interface IndicesRefreshParams extends GenericParams {
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    force?: boolean;
    operationThreading?: any;   // even the docs don't know what this does
    index: NameList;
}

export interface IndicesRolloverParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    waitForActiveShards?: number | string;
    alias?: string;
    newIndex?: string;
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
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    human?: boolean;
    operationThreading?: any;   // even the docs don't know what this does
    verbose?: boolean;
    index: NameList;
}

export interface IndicesShardStoresParams extends GenericParams {
    status?: NameList;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    operationThreading?: any;   // even the docs don't know what this does
    index: NameList;
}

export interface IndicesShrinkParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    waitForActiveShards?: string | number;
    index: string;
    target: string;
}

export interface IndicesStatsParams extends GenericParams {
    completionFields?: NameList;
    fielddataFields?: NameList;
    fields?: NameList;
    groups?: NameList;
    human?: boolean;
    level?: "cluster" | "indices" | "shards";
    types?: NameList;
    index: NameList;
    metric?: NameList;
}

export interface IndicesUpdateAliasesParams extends GenericParams {
    timeout?: TimeSpan;
    masterTimeout?: TimeSpan;
    body: {
        actions: IndicesUpdateAliasesParamsAction[];
    };
}

export interface IndicesUpdateAliasesParamsAction {
    add?: {
        index?: string;
        indices?: string[];
        alias: string;
    };
    remove?: {
        index?: string;
        indices?: string[];
        alias: string;
    };
    remove_index?: {
        index: string;
    };
}

export interface IndicesUpgradeParams extends GenericParams {
    expandWildcards?: ExpandWildcards;
    ignoreUnavailable?: boolean;
    waitForCompletion?: boolean;
    onlyAncientSegments?: boolean;
    index: NameList;
}

export interface IndicesValidateQueryParams extends GenericParams {
    explain?: boolean;
    ignoreUnavailable?: boolean;
    allowNoIndices?: boolean;
    expandWildcards?: ExpandWildcards;
    operationThreading?: any;   // even the docs don't know what this does
    q?: string;
    analyzer?: string;
    analyzeWildcard?: boolean;
    defaultOperator?: DefaultOperator;
    df?: string;
    lenient?: boolean;
    lowercaseExpandedTerms?: boolean;
    rewrite?: boolean;
    index: NameList;
    type?: NameList;
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
    masterTimeout?: number;
    timeout?: number;
    id: string;
}

export interface IngestGetPipelineParams extends GenericParams {
    masterTimeout?: number;
    id: string;
}

export interface IngestPutPipelineParams extends GenericParams {
    masterTimeout?: number;
    timeout?: number;
    id: string;
    body: any;
}

export interface IngestSimulateParams extends GenericParams {
    verbose?: boolean;
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
    interval?: TimeSpan;
    snapshots?: number;
    threads?: number;
    ignoreIdleThreads?: boolean;
    type?: "cpu" | "wait" | "blocked";
    timeout?: TimeSpan;
    nodeId: NameList;
}

export interface NodesInfoParams extends GenericParams {
    flatSettings?: boolean;
    human?: boolean;
    timeout?: TimeSpan;
    nodeId: NameList;
    metric?: NameList;
}

export interface NodesStatsParams extends GenericParams {
    completionFields?: NameList;
    fielddataFields?: NameList;
    fields?: NameList;
    groups?: boolean;
    human?: boolean;
    level?: "indices" | "node" | "shards";
    types?: NameList;
    timeout?: TimeSpan;
    metric?: NameList;
    indexMetric?: NameList;
    nodeId?: NameList;
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
    masterTimeout?: TimeSpan;
    waitForCompletion?: boolean;
    repository: string;
    snapshot: string;
}

export interface SnapshotCreateRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
    verify?: boolean;
    repository: string;
}

export interface SnapshotDeleteParams extends GenericParams {
    masterTimeout?: TimeSpan;
    repository: string;
    snapshot: string;
}

export interface SnapshotDeleteRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
    repository: string;
}

export interface SnapshotGetParams extends GenericParams {
    masterTimeout?: TimeSpan;
    ignoreUnavailable?: boolean;
    repository: string;
    snapshot: NameList;
}

export interface SnapshotGetRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan;
    local?: boolean;
    repository: NameList;
}

export interface SnapshotRestoreParams extends GenericParams {
    masterTimeout?: TimeSpan;
    waitForCompletion?: boolean;
    repository: string;
    snapshot: string;
}

export interface SnapshotStatusParams extends GenericParams {
    masterTimeout?: TimeSpan;
    ignoreUnavailable?: boolean;
    repository: string;
    snapshot: NameList;
}

export interface SnapshotVerifyRepositoryParams extends GenericParams {
    masterTimeout?: TimeSpan;
    timeout?: TimeSpan;
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
    nodeId?: NameList;
    actions?: NameList;
    parentNode?: string;
    parentTask?: string;
    taskId?: string;
}

export interface TasksGetParams extends GenericParams {
    waitForCompletion?: boolean;
    taskId?: string;
}

export interface TasksListParams extends GenericParams {
    nodeId?: NameList;
    actions?: NameList;
    detailed?: boolean;
    parentNode?: string;
    parentTask?: string;
    waitForCompletion?: boolean;
    groupBy?: "nodes" | "parents";
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
