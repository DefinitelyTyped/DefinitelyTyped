// Type definitions for data-api-client 1.2
// Project: https://github.com/jeremydaly/data-api-client
// Definitions by: Idan Lottan <https://github.com/idanlo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Minimum TypeScript Version: 3.8

// This is added because aws-sdk depends on @types/node
/// <reference types="node" />

import type { ClientConfiguration, Types } from 'aws-sdk/clients/rdsdataservice';

type OmittedValues = 'database' | 'resourceArn' | 'secretArn' | 'schema';

interface iParams {
    secretArn: string;
    resourceArn: string;
    database?: string;
    keepAlive?: boolean;
    hydrateColumnNames?: boolean;
    sslEnabled?: boolean;
    options?: ClientConfiguration;
    region?: string;
}

interface Transaction {
    query(sql: string, params?: [] | unknown): Transaction; // params can be [] or {};
    query(
        obj:
            | {
                  sql: string;
                  parameters: [] | unknown;
                  database?: string;
                  hydrateColumnNames?: boolean;
              }
            | ((prevResult: { insertId?: any }) => any),
    ): Transaction;

    rollback: (error: Error, status: any) => void;
    commit: () => Promise<void>;
}

interface iDataAPIClient {
    /* tslint:disable:no-unnecessary-generics */
    query<T = any>(sql: string, params?: [] | unknown): Promise<iDataAPIQueryResult<T>>; // params can be [] or {};
    query<T = any>(obj: {
        sql: string;
        parameters?: [] | unknown;
        transactionId?: string;
        database?: string;
        hydrateColumnNames?: boolean;
    }): Promise<iDataAPIQueryResult<T>>;
    transaction(): Transaction; // needs to return an interface with

    // promisified versions of the RDSDataService methods
    batchExecuteStatement: (params: Omit<Types.BatchExecuteStatementRequest, OmittedValues>) => Promise<any>;
    beginTransaction: () => Promise<Types.BeginTransactionResponse>;
    commitTransaction: (params: Omit<Types.CommitTransactionRequest, OmittedValues>) => Promise<any>;
    executeStatement: (params: Omit<Types.ExecuteStatementRequest, OmittedValues>) => Promise<any>;
    rollbackTransaction: (params: Omit<Types.RollbackTransactionRequest, OmittedValues>) => Promise<any>;
}

interface iDataAPIQueryResult<T = any> {
    records: T[];
}

declare function Client(params: iParams): iDataAPIClient;

export = Client;
