// Type definitions for elasticsearch
// Project: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
// Definitions by: Casper Skydt <https://github.com/CasperSkydt>, Blake Smith <https://github.com/bfsmith>, Dave Dunkin <https://github.com/ddunkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Elasticsearch {
    export class Client {
        constructor(params: ConfigOptions);
        indices: Indices;
        cluster: Cluster;
        cat: Cat;
        bulk(params: BulkIndexDocumentsParams): PromiseLike<any>;
        bulk(params: BulkIndexDocumentsParams, callback: (error: any, response: any) => void): void;
        create(params: CreateDocumentParams): PromiseLike<any>;
        create(params: CreateDocumentParams, callback: (err: any, response: any, status: any) => void): void;
        delete(params: DeleteDocumentParams): PromiseLike<any>;
        delete(params: DeleteDocumentParams, callback: (error: any, response: any) => void): void;
        exists(params: ExistsParams): PromiseLike<any>;
        exists(params: ExistsParams, callback: (error: any, response: any, status?: any) => void): void;
        get<T>(params: GetParams, callback: (error: any, response: GetResponse<T>) => void): void;
        get<T>(params: GetParams): PromiseLike<GetResponse<T>>;
        index<T>(params: IndexDocumentParams<T>): PromiseLike<any>;
        index<T>(params: IndexDocumentParams<T>, callback: (error: any, response: any) => void): void;
        mget<T>(params: MGetParams, callback: (error: any, response: MGetResponse<T>) => void): void;
        mget<T>(params: MGetParams): PromiseLike<MGetResponse<T>>;
        msearch<T>(params: MSearchParams, callback: (error: any, response: MSearchResponse<T>) => void): void;
        msearch<T>(params: MSearchParams): PromiseLike<MSearchResponse<T>>;
        ping(params: PingParams): PromiseLike<any>;
        ping(params: PingParams, callback: (err: any, response: any, status: any) => void): void;
        scroll(params: ScrollParams): PromiseLike<any>;
        scroll(params: ScrollParams, callback: (error: any, response: any) => void): void;
        search<T>(params: SearchParams): PromiseLike<SearchResponse<T>>;
        search<T>(params: SearchParams, callback: (error: any, response: SearchResponse<T>) => void): void;
        suggest(params: SuggestParams): PromiseLike<any>;
        suggest(params: SuggestParams, callback: (error: any, response: any) => void): void;
        update(params: UpdateDocumentParams): PromiseLike<any>;
        update(params: UpdateDocumentParams, callback: (error: any, response: any) => void): void;
    }

    export class Indices {
        delete(params: IndicesDeleteParams, callback: (error: any, response: any, status: any) => void): void;
        delete(params: IndicesDeleteParams): PromiseLike<any>;
        create(params: IndicesCreateParams, callback: (error: any, response: any, status: any) => void): void;
        create(params: IndicesCreateParams): PromiseLike<any>;
        exists(params: IndicesIndexExitsParams, callback: (error: any, response: any, status: any) => void): void;
        exists(params: IndicesIndexExitsParams): PromiseLike<any>;
        existsType(params: IndicesIndexExitsParams & {type: string}, callback: (error: any, response: any, status: any) => void): void;
        existsType(params: IndicesIndexExitsParams & {type: string}): PromiseLike<any>;
        get(params: IndicesGetParams, callback: (error: any, response: any, status: any) => void): void;
        get(params: IndicesGetParams): PromiseLike<any>;
        getAlias(params: IndicesGetAliasParams, callback: (error: any, response: any, status: any) => void): void;
        getAlias(params: IndicesGetAliasParams): PromiseLike<any>;
        putAlias(params: IndicesPutAliasParams, callback: (error: any, response: any, status: any) => void): void;
        putAlias(params: IndicesPutAliasParams): PromiseLike<any>;
        putTemplate(params: IndicesPutTemplateParams, callback: (error: any, response: any) => void): void;
        putTemplate(params: IndicesPutTemplateParams): PromiseLike<any>;
        putMapping(params: IndicesPutMappingParams, callback: (error: any, response: any) => void): void;
        putMapping(params: IndicesPutMappingParams): PromiseLike<any>;
        refresh(params: IndicesRefreshParams, callback: (error: any, response: any) => void): void;
        refresh(params: IndicesRefreshParams): PromiseLike<any>;
    }

    export interface ConfigOptions{
        host?: any;
        hosts?: any;
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
        ssl?: Object;
        selector?: any;
        defer?: () => void;
        nodesToHostCallback?: any;
        createNodeAgent?: any;
    }

    export interface Explanation {
        value: number,
        description: string,
        details: Explanation[]
    }

    export interface GenericParams {
        requestTimeout?: number;
        maxRetries?: number;
        method?: string;
        body?: any;
        ignore?: number | number[];
        filterPath?: string | string[];
    }

    export interface BulkIndexDocumentsParams extends GenericParams {
        refresh?: boolean;
        routing? : string;
        timeout?: number | Date;
        type?: string;
        fields?: string | string[] | boolean;
        index?: string;
    }

    export interface CreateDocumentParams extends GenericParams {
        consistency?: "one" | "quorum" | "all";
        parent?: string;
        refresh?: boolean;
        routing?: string;
        timeout?: number | Date;
        timestamp?: number | Date;
        ttl?: number;
        version?: number;
        versionType?: "internal" | "external" | "external_gte" | "force";
        id: string;
        index: string;
        type: string;
    }

    export interface IndicesGetParams extends GenericParams {
        ignoreUnavailable?: boolean;
        index: string | string[] | boolean;
    }

    export interface IndicesRefreshParams extends GenericParams {
        force?: boolean;
        ignoreUnavailable?: boolean;
        index: string | string[] | boolean;
    }

    export interface IndicesDeleteParams extends GenericParams {
        index: string | string[] | boolean;
        timeout?: Date | number;
        masterTimeout?: Date | number;
    }

    export interface IndicesCreateParams extends GenericParams {
        index: string | string[] | boolean;
        timeout?: Date | number;
        masterTimeout?: Date | number;
    }

    export interface IndicesPutTemplateParams extends GenericParams {
        order?: number;
        create?: boolean;
        timeout?: Date | number;
        masterTimeout?: Date | number;
        flatSettings?: boolean;
        name: string;
        body: string | any;
    }

    export interface IndicesPutMappingParams extends GenericParams {
        timeout?: Date | number;
        masterTimeout?: Date | number;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: "open" | "closed" | "none" | "all";
        updateAllTypes?: boolean;
        index: string | string[] | boolean;
        type: string;
    }

    export interface IndicesGetAliasParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: "open" | "closed" | "none" | "all";
        local?: boolean;
        index?: string | string[] | boolean;
        name: string | string[] | boolean;
    }

    export interface IndicesPutAliasParams extends GenericParams {
        index?: string | string[] | boolean;
        name: string | string[] | boolean;
    }

    export interface GetParams extends GenericParams {
        index: string;
        type: string;
        id: string;
        fields?: string | string[] | boolean;
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        _source?: string | string[] | boolean;
        _sourceExclude?: string | string[] | boolean;
        _sourceInclude?: string | string[] | boolean;
        version?: number;
        versionType?: string;
    }

    export interface GetResponse<T> {
        _index: string;
        _type: string;
        _id: string;
        _version: number;
        found: boolean;
        _source: T;
    }

    export interface ExistsParams extends GenericParams {
        id: string;
        index: string;
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        type: string;
    }

    export interface IndexDocumentParams<T> extends GenericParams {
        index: string;
        type: string;
        id: string;
        body: T;
        consistensy?: string;
        parent?: string;
        replication?: string;
        routing?: string;
        timeout?: Date | number;
        timestamp?: Date | number;
        version?: number;
        versionType?: string;
    }

    export interface ScrollParams extends GenericParams {
        scroll: string;
        scrollId: string;
    }

    export interface SearchParams extends GenericParams {
        index?: string;
        type?: string | string[] | number;
        body?: any;
        q?: string;
        scroll?: string;
        search_type?: string;
        fields?: string[];
        from?: number;
        size?: number;
        sort?: string | string[] | boolean;
        _source?: string | string[] | boolean;
        _sourceExclude?: string | string[] | boolean;
        _sourceInclude?: string | string[] | boolean;
        stats?: string | string[] | boolean;
        suggestField?: string;
        suggestSize?: number;
        suggestText?: string;
        timeout?: Date | number;
    }

    export interface SearchResponse<T> {
        took: number,
        timed_out: boolean,
        _scroll_id?: string,
        _shards: {
            total: number,
            successful: number,
            failed: number
        },
        hits: {
            total: number,
            max_score: number,
            hits: {
                _index: string,
                _type: string,
                _id: string,
                _score: number,
                _source: T,
                _version: number,
                _explanation?: Explanation,
                fields?: any,
                highlight?: any,
                inner_hits?: any
            }[]
        },
        aggregations?: any
    } 

    export interface MSearchParams extends GenericParams {
        index?: string | string[] | Boolean;
        type?: string | string[] | Boolean;
        search_type?: string;
    }

    export interface MSearchResponse<T> {
        responses?: SearchResponse<T>[];
    }

    export interface MGetParams extends GenericParams {
        fields?: string | string[] | Boolean;
        preference?: string;
        realtime?: Boolean;
        refresh?: Boolean;
        _sourceExclude?: string | string[] | boolean;
        _sourceInclude?: string | string[] | boolean;
        index?: string;
        type?: string;
    }

    export interface MGetResponse<T> {
        docs?: GetResponse<T>[];
    }

    export interface IndicesIndexExitsParams extends GenericParams {
        index: string | string[] | boolean;
        ignoreUnavailable?: boolean;
    }

    export interface PingParams extends GenericParams {
        requestTimeout?: number;
        hello?: string;
    }

    export interface DeleteDocumentParams extends GenericParams {
        index: string;
        type: string;
        id: string;
        parent?: string;
        refresh?: boolean;
    }

    export interface UpdateDocumentParams extends GenericParams {
        index: string;
        type: string;
        id: string;
        body?: string | any;
        version?: Number;
        timesstamp?: Date | Number;
        scriptedUpsert?: Boolean;
        scriptId?: any;
        script?: any;
        routing?: string;
        retryOnConflict?: Number;
        refresh?: Boolean;
        parent?: string;
        lang?:string;
        fields?: string | string[] | Boolean;
        consistensy?: string;
    }

    export interface SuggestParams extends GenericParams {
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: "open" | "closed" | "none" | "all";
        preference?: string;
        routing?: string;
        source?: string;
        body: string | any;
        index: string | string[] | boolean;
    }

    export interface Cat {
        health(params: CatHealthOptions, callback: (error: any, response: any) => void): void;
        health(params: CatHealthOptions): PromiseLike<any>
    }

    export interface CatHealthOptions extends GenericParams {
        local?: boolean;
        masterTimeout?: number | Date;
        h?: string | string[] | boolean;
        help?: boolean;
        ts?: boolean;
        v?: boolean;
    }

    export interface Cluster {
        getSettings(params: ClusterGetSettingsOptions, callback: (error: any, response: any) => void): void;
        getSettings(params: ClusterGetSettingsOptions): PromiseLike<any>;
        health(params: ClusterHealthOptions, callback: (error: any, response: any) => void): void;
        health(params: ClusterHealthOptions): PromiseLike<any>;
        pendingTasks(params: ClusterPendingTasksOptions, callback: (error: any, response: any) => void): void;
        pendingTasks(params: ClusterPendingTasksOptions): PromiseLike<any>;
        putSettings(params: ClusterPutSettingsOptions, callback: (error: any, response: any) => void): void;
        putSettings(params: ClusterPutSettingsOptions): PromiseLike<any>;
        reroute(params: ClusterRerouteOptions, callback: (error: any, response: any) => void): void;
        reroute(params: ClusterRerouteOptions): PromiseLike<any>;
        state(params: ClusterStateOptions, callback: (error: any, response: any) => void): void;
        state(params: ClusterStateOptions): PromiseLike<any>;
        stats(params: ClusterStatsOptions, callback: (error: any, response: any) => void): void;
        stats(params: ClusterStatsOptions): PromiseLike<any>;
    }

    export interface ClusterGetSettingsOptions extends GenericParams {
        flatSettings?: boolean;
        masterTimeout?: number | Date;
        timeout?: number | Date;
    }

    export interface ClusterHealthOptions extends GenericParams {
        level?: string; // cluster, indices, shards
        local?: boolean;
        masterTimeout?: number | Date;
        waitForActiveShards?: number;
        waitForNodes?: string;
        waitForRelocatingShards?: number;
        waitForStatus?: string; // green, yellow, red
        index?: string | string[] | boolean;
    }

    export interface ClusterPendingTasksOptions extends GenericParams {
        local?: boolean;
        masterTimeout?: number | Date;
    }

    export interface ClusterPutSettingsOptions extends GenericParams {
        flatSettings?: boolean;
        masterTimeout?: number | Date;
        timeout?: number | Date;
    }

    export interface ClusterRerouteOptions extends GenericParams {
        dryRun?: boolean;
        explain?: boolean;
        metric?: string | string[] | boolean;
        masterTimeout?: number | Date;
        timeout?: number | Date;
    }

    export interface ClusterStateOptions extends GenericParams {
        local?: boolean;
        masterTimeout?: number | Date;
        flatSettings?: boolean;
        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: string; // open, closed, none, all (default open)
        index?: string | string[] | boolean;
        metric?: string | string[] | boolean;
    }

    export interface ClusterStatsOptions extends GenericParams {
        flatSettings?: boolean;
        human?: boolean;
        timeout?: number | Date;
        nodeId?: string | string[] | boolean;
    }
}

declare module "elasticsearch" {
    export = Elasticsearch;
}
