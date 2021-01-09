import type { ClientConfiguration, Types } from 'aws-sdk/clients/rdsdataservice';

type OmittedValues = 'database' | 'resourceArn' | 'secretArn' | 'schema';

export interface iParams {
    secretArn: string;
    resourceArn: string;
    database?: string;
    keepAlive?: boolean;
    hydrateColumnNames?: boolean;
    sslEnabled?: boolean;
    options?: ClientConfiguration;
    region?: string;
}

interface iTransaction {
    query(sql: string, params?: [] | unknown): iTransaction; // params can be [] or {};
    query(obj: {
        sql: string;
        parameters: [] | unknown;
        database?: string;
        hydrateColumnNames?: boolean;
    }): iTransaction;
    query(callback: (prevResult: { insertId?: any }) => any): iTransaction;
    rollback: (error: Error, status: any) => void;
    commit: () => Promise<void>;
}

export interface iDataAPIClient {
    query<T = any>(sql: string, params?: [] | unknown): Promise<iDataAPIQueryResult<T>>; // params can be [] or {};
    query<T = any>(obj: {
        sql: string;
        parameters: [] | unknown;
        database?: string;
        hydrateColumnNames?: boolean;
    }): Promise<iDataAPIQueryResult<T>>;
    transaction(): iTransaction; // needs to return an interface with

    // promisified versions of the RDSDataService methods
    batchExecuteStatement: (params: Omit<Types.BatchExecuteStatementRequest, OmittedValues>) => Promise<any>;
    beginTransaction: () => Promise<Types.BeginTransactionResponse>;
    commitTransaction: (params: Omit<Types.CommitTransactionRequest, OmittedValues>) => Promise<any>;
    executeStatement: (params: Omit<Types.ExecuteStatementRequest, OmittedValues>) => Promise<any>;
    rollbackTransaction: (params: Omit<Types.RollbackTransactionRequest, OmittedValues>) => Promise<any>;
}

export interface iDataAPIQueryResult<T = any> {
    records: Array<T>;
}

export default function (params: iParams): iDataAPIClient;
