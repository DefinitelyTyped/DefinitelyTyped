declare namespace Client {
    interface Credentials {
        accessKeyId: string;
        accessKeySecret: string;
        securityToken?: string;
    }

    interface CredentialsProvider {
        getCredentials(): Promise<Credentials>;
    }

    interface ClientConfig {
        region: string;
        net?: string;
        accessKeyId?: string;
        accessKeySecret?: string;
        securityToken?: string;
        credentialsProvider?: CredentialsProvider;
        endpoint?: string;
    }

    interface RequestOptions {
        timeout?: number;
        headers?: Record<string, string>;
        [key: string]: any;
    }

    interface ProjectData {
        description: string;
    }

    interface ProjectLogsQuery {
        [key: string]: any;
    }

    interface ListLogStoreQuery {
        logstoreName?: string;
        offset?: number;
        size?: number;
    }

    interface LogStoreData {
        ttl?: number;
        shardCount?: number;
    }

    interface IndexConfig {
        [key: string]: any;
    }

    interface LogContent {
        [key: string]: string;
    }

    interface LogEntry {
        timestamp: number;
        timestampNsPart?: number;
        content: LogContent;
    }

    interface LogTag {
        [key: string]: string;
    }

    interface PostLogStoreLogsData {
        logs: LogEntry[];
        tags?: LogTag[];
        topic?: string;
        source?: string;
    }

    interface GetLogsQuery {
        query?: string;
        topic?: string;
        reverse?: boolean;
        line?: number;
        offset?: number;
        [key: string]: any;
    }

    interface GetHistogramsQuery {
        query?: string;
        topic?: string;
        [key: string]: any;
    }

    interface ApiResponse {
        [key: string]: any;
    }
}

declare class Client {
    region: string;
    net?: string;
    accessKeyId?: string;
    accessKeySecret?: string;
    securityToken?: string;
    credentialsProvider?: Client.CredentialsProvider;
    endpoint: string;

    constructor(config: Client.ClientConfig);

    getProject(projectName: string, options?: Client.RequestOptions): Promise<Client.ApiResponse>;
    getProjectLogs(
        projectName: string,
        data?: Client.ProjectLogsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    createProject(
        projectName: string,
        data: Client.ProjectData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    deleteProject(projectName: string, options?: Client.RequestOptions): Promise<Client.ApiResponse>;

    listLogStore(
        projectName: string,
        data?: Client.ListLogStoreQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    createLogStore(
        projectName: string,
        logstoreName: string,
        data?: Client.LogStoreData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    deleteLogStore(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    updateLogStore(
        projectName: string,
        logstoreName: string,
        data?: Client.LogStoreData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    getLogStore(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    getIndexConfig(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    createIndex(
        projectName: string,
        logstoreName: string,
        index: Client.IndexConfig,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    updateIndex(
        projectName: string,
        logstoreName: string,
        index: Client.IndexConfig,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    deleteIndex(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    getLogs(
        projectName: string,
        logstoreName: string,
        from: Date,
        to: Date,
        data?: Client.GetLogsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    getHistograms(
        projectName: string,
        logstoreName: string,
        from: Date,
        to: Date,
        data?: Client.GetHistogramsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
    postLogStoreLogs(
        projectName: string,
        logstoreName: string,
        data: Client.PostLogStoreLogsData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
}

export = Client;
