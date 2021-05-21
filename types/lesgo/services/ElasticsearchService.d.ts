import {
    Client,
    NameList,
    ConfigOptions,
    SearchParams,
    SearchResponse,
    IndicesCreateParams,
    IndicesDeleteParams,
    IndicesExistsParams,
    IndicesPutMappingParams,
    GetResponse,
    IndexDocumentParams,
} from "elasticsearch";

export type ProfileAttribute = Record<string, unknown> & {
    profile_id: unknown;
};

export type ConnectionType = "aws";

export default class ElasticsearchService {
    index: NameList;

    options: ConfigOptions;

    type: NameList;

    protected client: Client;

    constructor(params: { index: NameList; type: NameList; options: ConfigOptions });

    setConnection(conn?: ConnectionType): ElasticsearchService;

    getClient(): Client;

    search(body: SearchParams["body"]): Promise<SearchResponse<any>>;

    createIndices(settings: IndicesCreateParams["body"], index?: string): Promise<any>;

    deleteIndices(index: string, options?: IndicesDeleteParams): Promise<any>;

    existIndices(index: string, options?: IndicesExistsParams): Promise<any>;

    putMapping(index: string, type: string, body: any): Promise<any>;

    get(id: string): Promise<GetResponse<any>>;

    indexOrCreateById(body: IndexDocumentParams<any>["body"], refresh?: boolean): Promise<any>;

    bulkIndex(bodies: ProfileAttribute[]): Promise<any>;

    create(id: string, body: IndicesCreateParams["body"]): Promise<any>;

    updateById(id: string): Promise<GetResponse<any>>;

    constructBulkIndex(bodies: ProfileAttribute[]): Promise<any>;
}
