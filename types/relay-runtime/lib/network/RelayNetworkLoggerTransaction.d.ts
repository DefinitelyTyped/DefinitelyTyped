import { RequestParameters } from '../util/RelayConcreteNode';
import { Variables, CacheConfig } from '../util/RelayRuntimeTypes';
import { UploadableMap, GraphQLResponse } from './RelayNetworkTypes';

export interface RelayNetworkLog {
    label: string;
    values: ReadonlyArray<any>;
}

export interface LoggerTransactionConfig {
    request: RequestParameters;
    variables: Variables;
    cacheConfig: CacheConfig;
    uploadables?: UploadableMap;
}

export class RelayNetworkLoggerTransaction {
    constructor(config: LoggerTransactionConfig);
    addLog(label: string, ...values: any[]): void;
    commitLogs(error: Error, payload: GraphQLResponse, status?: string): void;
    flushLogs(error: Error, payload: GraphQLResponse, status?: string): void;
    markCommitted(): void;
    getCacheConfig(): CacheConfig;
    getIdentifier(): string;
    getLogsToPrint(): RelayNetworkLog[];
    getRequest(): RequestParameters;
    getUploadables(): UploadableMap;
    getVariables(): Variables;
    timerStart(): void;
    timerEnd(): void;
}
