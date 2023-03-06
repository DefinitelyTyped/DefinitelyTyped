import DataApiClient = require('data-api-client');
import { PaginatorObject } from './pagination/Paginator';

export type iParams = Parameters<typeof DataApiClient>[0];

export type iDataAPIClient = ReturnType<typeof DataApiClient>;

export type AuroraDbServiceParams = Pick<iParams, 'secretArn' | 'resourceArn' | 'database'>;

export default class AuroraDbService {
    protected client: iDataAPIClient;

    constructor(params?: AuroraDbServiceParams);

    connect(opts: AuroraDbServiceParams): void;

    query(sql: string, params: [] | unknown): ReturnType<iDataAPIClient['query']>;

    select(sql: string, params: [] | unknown): Promise<any[]>;

    selectFirst(sql: string, params: [] | unknown): Promise<any>;

    selectPaginate(
        sql: string,
        params: [] | unknown,
        perPage?: number,
        currentPage?: number,
        total?: number | null,
    ): PaginatorObject<any>;

    insert(sql: string, sqlParams: [] | unknown): Promise<any>;

    update(sql: string, sqlParams: [] | unknown): Promise<void>;
}
