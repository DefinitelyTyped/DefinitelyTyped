import { Client, ClientOptions, RequestParams } from '@elastic/elasticsearch';
import { Readable as ReadableStream } from 'stream';

export type ProfileId = string | number;

export type RequestBodyWithId<T = Record<string, any>> = T & {
    profile_id: ProfileId;
};

export interface Index {
    index: {
        _index: string | string[];
        _type: string | string[];
        _id: ProfileId;
    };
}

export type ConnectionType = 'aws' | string;

export interface ElasticsearchServiceParams {
    index: string | string[];
    type: string | string[];
    connection: ConnectionType;
    options: ClientOptions;
}

/**
 * Duplicated from elasticsearch
 */
export type RequestBody<T = Record<string, any>> = T | string | Buffer | ReadableStream;

// export interface AWSConnectionClientOptions {
//     awsRegion:
// }

export default class ElasticsearchService {
    index: string | string[];

    options: ClientOptions;

    type: string | string[];

    protected client: Client;

    constructor(params: ElasticsearchServiceParams);

    setConnection(conn?: ConnectionType): ElasticsearchService;

    getClient(): Client;

    search(body: RequestParams.Search['body']): Promise<Record<string, any>>;

    createIndices(
        settings: RequestParams.IndicesCreate['body'],
        index?: string | string[],
    ): Promise<Record<string, any>>;

    deleteIndices(
        index: string | string[],
        options?: Omit<RequestParams.IndicesDelete, 'index'>,
    ): Promise<Record<string, any>>;

    // The return here should've been a boolean but the actual code implementation gets for response.body
    existIndices(
        index: string | string[],
        options?: Omit<RequestParams.IndicesExists, 'index'>,
    ): Promise<Record<string, any>['body']>;

    putMapping(index: string | string[], type: string, body: Record<string, any>): Promise<Record<string, any>>;

    get(id: string): Promise<Record<string, any>>;

    indexOrCreateById(body: RequestParams.Index['body'], refresh?: 'wait_for' | boolean): Promise<Record<string, any>>;

    bulkIndex(bodies: RequestBodyWithId[]): Promise<Record<string, any>>;

    create(id: string, body: RequestParams.Index['body']): Promise<Record<string, any>>;

    updateById(id: string): Promise<Record<string, any>>;

    protected constructBulkIndex(bodies: RequestBodyWithId[]): Array<Index | RequestBodyWithId[]>;
}
