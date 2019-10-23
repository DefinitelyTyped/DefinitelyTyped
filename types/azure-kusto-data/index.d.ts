// Type definitions for azure-kusto-data 0.2
// Project: https://github.com/Azure/azure-kusto-node/tree/master/azure-kusto-data
// Definitions by: Armando Aguirre <https://github.com/armanio123>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import { UserCodeInfo } from "adal-node";

export class Client {
    constructor(kcsb: string | KustoConnectionStringBuilder);
    connectionString: KustoConnectionStringBuilder;
    cluster: string;
    endpoints: { mgmt: string, query: string };
    aadHelper: any;
    execute(db: any, query: any, callback: (err: Error, results: Client.KustoResponseDataSetV2<any>) => void, properties?: any): any;
    executeMgmt(db: any, query: any, callback: (err: Error, results: Client.KustoResponseDataSetV2<any>) => void, properties: any): any;
    executeQuery(db: any, query: any, callback: (err: Error, results: Client.KustoResponseDataSetV2<any>) => void, properties: any): any;
}

export class ClientRequestProperties {
    constructor(options?: any, parameters?: any);
    clearOptions(): void;
    clearParameters(): void;
    getOption(name: string, defaultValue: any): any;
    getParameter(name: string, defaultValue: any): any;
    getTimeout(): any;
    setOption(name: string, value: any): void;
    setParameter(name: string, value: any): void;
    setTimeout(timeoutMillis: any): void;
    toJson(): any;
}

export class KustoConnectionStringBuilder {
    constructor(connectionString: string);
    dataSource: string;
    aadUserId: string | undefined;
    password: string | undefined;
    applicationClientId: string | undefined;
    applicationKey: string | undefined;
    applicationCertificate: string | undefined;
    applicationCertificateThumbprint: string | undefined;
    authorityId: string;
    static withAadApplicationCertificateAuthentication(connectionString: string, aadAppId: string, certificate: string, thumbprint: string, authorityId: string): KustoConnectionStringBuilder;
    static withAadApplicationKeyAuthentication(connectionString: string, aadAppId: string, appKey: string, authorityId: string): KustoConnectionStringBuilder;
    static withAadDeviceAuthentication(connectionString: string, authorityId: string, authCallback?: (tokenReponse: UserCodeInfo) => void): KustoConnectionStringBuilder;
    static withAadUserPasswordAuthentication(connectionString: string, userId: string, password: string, authorityId?: any): KustoConnectionStringBuilder;
    static withAadManagedIdentities(connectionString: string, msiEndpoint?: string, clientId?: string): KustoConnectionStringBuilder;
}

export namespace Client {
    interface KustoResponseDataSet<T> {
        tables: Array<KustoResultTable<T>>;
        tableNames: string[];
        primaryResults: Array<KustoResultTable<T>>;
        statusTable: KustoResultTable<T>;
    }

    interface KustoResponseDataSetV2<T> extends KustoResponseDataSet<T> {
        version: string;
        getStatusColumn(): string;
        getErrorColumn(): string;
        getCridColumn(): string;
    }

    interface KustoResultTable<T> {
        name: string;
        id: string;
        kind: string;
        columns: any[];

        rows: () => IterableIterator<KustoResultRow<T>>;
        toJson(): any;
        toString(): string;
    }

    type KustoResultRow<T> = {
        [P in keyof T]: T[P];
    };
}
