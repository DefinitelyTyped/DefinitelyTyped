import { ConnectionOptions } from 'mysql2';
import { RowDataPacket, OkPacket, ResultSetHeader, FieldPacket, Connection } from 'mysql2/promise';
import { PaginatorObject } from './pagination/Paginator';

export type AuroraDbRDSProxyServiceParams = Pick<ConnectionOptions, 'host' | 'user' | 'password' | 'database'> & {
    persists?: boolean;
};

export type AuroraDbRDSProxyServiceResult = any[];

export interface AuroraDbRDSProxyServiceResponse {
    results: AuroraDbRDSProxyServiceResult;
    fields: FieldPacket[];
}

export default class AuroraDbRDSProxyService {
    protected conn: Connection;

    constructor(params?: AuroraDbRDSProxyServiceParams);

    pConnect(opts?: AuroraDbRDSProxyServiceParams): void;

    connect(opts?: AuroraDbRDSProxyServiceParams): Promise<Connection>;

    end(conn?: Connection): void;

    query(
        sql: string,
        params?: any,
        connectionOpts?: AuroraDbRDSProxyServiceParams,
    ): Promise<AuroraDbRDSProxyServiceResponse>;

    select(
        sql: string,
        params?: any,
        connectionOpts?: AuroraDbRDSProxyServiceParams,
    ): Promise<AuroraDbRDSProxyServiceResult>;

    selectFirst(sql: string, params?: any, connectionOpts?: AuroraDbRDSProxyServiceParams): Promise<any>;

    selectPaginate(
        sql: string,
        params?: any,
        perPage?: number,
        currentPage?: number,
        total?: number | null,
        connectionOpts?: AuroraDbRDSProxyServiceParams,
    ): PaginatorObject<any>;

    insert(sql: string, sqlParams?: any, connectionOpts?: AuroraDbRDSProxyServiceParams): Promise<number>;

    update(sql: string, sqlParams?: any, connectionOpts?: AuroraDbRDSProxyServiceParams): Promise<void>;
}
