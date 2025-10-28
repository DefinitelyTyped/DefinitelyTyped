/** Namespace for AliCloud Log Client types and interfaces. */
declare namespace Client {
    /** Represents the credentials for accessing AliCloud Log services. */
    interface Credentials {
        /** The access key ID. */
        accessKeyId: string;
        /** The access key secret. */
        accessKeySecret: string;
        /** Optional security token. */
        securityToken?: string;
    }

    /** Interface for providing credentials asynchronously. */
    interface CredentialsProvider {
        /** Retrieves the credentials. */
        getCredentials(): Promise<Credentials>;
    }

    /** Configuration options for the Client. */
    interface ClientConfig {
        /**
         * The region for the client.
         * @example "cn-hangzhou"
         */
        region: string;
        /** Optional network type. */
        net?: string;
        /** Optional access key ID. */
        accessKeyId?: string;
        /** Optional access key secret. */
        accessKeySecret?: string;
        /** Optional security token. */
        securityToken?: string;
        /** Optional credentials provider. */
        credentialsProvider?: CredentialsProvider;
        /** Optional endpoint URL. */
        endpoint?: string;
    }

    /** Options for HTTP requests. */
    interface RequestOptions {
        /** Optional request timeout in milliseconds. */
        timeout?: number;
        /** Optional headers for the request. */
        headers?: Record<string, string>;
        /** Additional custom options. */
        [key: string]: any;
    }

    // Project-related interfaces
    /** Data for creating a project. */
    interface ProjectData {
        /** The description of the project. */
        description: string;
    }

    /** Quota information for a project. */
    interface ProjectQuota {
        /**
         * Maximum number of log stores allowed.
         * @example 200
         */
        logstore: number;
        /**
         * Maximum number of shards allowed.
         * @example 400
         */
        shard: number;
        /**
         * Maximum number of configurations allowed.
         * @example 200
         */
        config: number;
        /**
         * Maximum number of machine groups allowed.
         * @example 200
         */
        machineGroup: number;
        /**
         * Maximum number of dashboards allowed.
         * @example 100
         */
        dashboard: number;
        /**
         * Maximum number of charts allowed.
         * @example 200
         */
        chart: number;
        /**
         * Maximum number of saved searches allowed.
         * @example 100
         */
        savedsearch: number;
        /**
         * Maximum number of ETL jobs allowed.
         * @example 100
         */
        ETL: number;
        /**
         * Maximum number of domains allowed.
         * @example 1
         */
        domain: number;
        /**
         * Maximum number of exports allowed.
         * @example 100
         */
        export: number;
        /**
         * Maximum number of ingestions allowed.
         * @example 100
         */
        ingestion: number;
        /**
         * Maximum number of alerts allowed.
         * @example 100
         */
        alert: number;
        /**
         * Maximum number of reports allowed.
         * @example 100
         */
        report: number;
        /**
         * Maximum number of scheduled SQL queries allowed.
         * @example 100
         */
        scheduledSQL: number;
        /**
         * Maximum number of store views allowed.
         * @example 10
         */
        storeView: number;
        /**
         * Maximum number of store view stores allowed.
         * @example 50
         */
        storeViewStore: number;
        /**
         * Maximum number of materialized views allowed.
         * @example 30
         */
        materializedView: number;
        /**
         * Maximum number of ingest processors allowed.
         * @example 100
         */
        ingestProcessor: number;
        /**
         * Maximum number of consume processors allowed.
         * @example 100
         */
        consumeProcessor: number;
        /**
         * Maximum write size per minute in bytes.
         * @example 100000000000
         */
        writeSizePerMin: number;
        /**
         * Maximum write queries per minute.
         * @example 600000
         */
        writeQpsPerMin: number;
        /**
         * Maximum read queries per minute.
         * @example 600000
         */
        readQpsPerMin: number;

        /** Additional quota properties. */
        [key: string]: unknown;
    }

    /** Response from getProject API call. */
    interface GetProjectResponse {
        /**
         * The name of the project.
         * @example "ali-test-project"
         */
        projectName: string;
        /**
         * The status of the project.
         * - `Normal` - The project is active.
         * - `Disable` - The project has been disabled.
         * @example "Normal"
         */
        status: string;
        /**
         * The owner of the project.
         * @example "1015810200442489"
         */
        owner: string;
        /** The description of the project.
         * @example "Description of my-project"
         */
        description: string;
        /**
         * The creation time of the project.
         * @example "2021-07-07 14:08:09"
         */
        createTime: string;
        /**
         * The last modification time of the project.
         * @example "2022-04-18 13:30:19"
         */
        lastModifyTime: string;
        /**
         * The region where the project is located.
         * @example "cn-hangzhou"
         */
        region: string;
        /**
         * The location of the project.
         * @example "cn-hangzhou"
         */
        location: string;
        /**
         * The resource group ID associated with the project.
         * @example "rg-acfmvpxejaibm6i"
         */
        resourceGroupId: string;
        /**
         * The data redundancy type.
         * @example "LRS"
         */
        dataRedundancyType: string;
        /**
         * The transfer acceleration status.
         * @example "Disabled"
         */
        transferAcceleration: string;
        /**
         * Whether recycle bin is enabled.
         * @example false
         */
        recycleBinEnabled: boolean;
        /** The quota information for the project. */
        quota: ProjectQuota;
    }

    /** Query parameters for project logs. */
    interface ProjectLogsQuery {
        /** Optional [SPL](https://help.aliyun.com/zh/sls/spl-instructions-and-functions/) query string. */
        query?: string;
        /** Optional flag to enable dedicated SQL. */
        powerSql?: boolean;
        /** Additional query parameters. */
        [key: string]: any;
    }

    // Store-related interfaces
    /** Query parameters for listing log stores. */
    interface ListLogStoreQuery {
        /** Optional log store name to filter. */
        logstoreName?: string;
        /** Optional offset for pagination. */
        offset?: number;
        /** Optional size for pagination. */
        size?: number;
    }

    /** Data for log store operations. */
    interface LogStoreData {
        /** Optional time to live in days. */
        ttl?: number;
        /** Optional number of shards. */
        shardCount?: number;
    }

    /** Resource quota information for a log store. */
    interface LogStoreResourceQuota {
        /** Storage quota information. */
        storage: {
            /** Preserved storage quota in bytes. */
            preserved: number;
            /** Used storage in bytes. */
            used: number;
        };
        /** Additional log store quota properties. */
        [key: string]: unknown;
    }

    /** Response from getLogStore API call. */
    interface GetLogStoreResponse {
        /**
         * The name of the log store.
         * @example "resources-operations"
         */
        logstoreName: string;
        /**
         * Time to live in days for the log store.
         * @example 3650
         */
        ttl: number;
        /**
         * Number of shards in the log store.
         * @example 2
         */
        shardCount: number;
        /**
         * Whether tracking is enabled for the log store.
         * @example false
         */
        enable_tracking: boolean;
        /**
         * Whether automatic splitting is enabled.
         * @example false
         */
        autoSplit: boolean;
        /**
         * Maximum number of shards for automatic splitting.
         * @example 6
         */
        maxSplitShard: number;
        /**
         * Creation time as Unix timestamp.
         * @example 1751613373
         */
        createTime: number;
        /**
         * Last modification time as Unix timestamp.
         * @example 1760179655
         */
        lastModifyTime: number;
        /**
         * Archive time in seconds.
         * @example 0
         */
        archiveSeconds: number;
        /**
         * Whether to append metadata to logs.
         * @example false
         */
        appendMeta: boolean;
        /**
         * Type of telemetry data.
         * @example ""
         */
        telemetryType: string;
        /**
         * Mode of the log store.
         * @example "standard"
         */
        mode: string;
        /**
         * Product type associated with the log store.
         * @example ""
         */
        productType: string;
        /** Resource quota information for the log store. */
        resourceQuota: LogStoreResourceQuota;
        /** Additional log store properties. */
        [key: string]: unknown;
    }

    /** Response from listLogStore API call. */
    interface ListLogStoresResponse {
        /**
         * Total number of log stores.
         * @example 2
         */
        total: number;
        /**
         * Number of log stores returned in this response.
         * @example 2
         */
        count: number;
        /**
         * List of log store names.
         * @example ["test-1", "test-2"]
         */
        logstores: string[];
    }

    // Index-related interfaces
    /** Configuration for log index. */
    interface IndexConfig {
        /** Index configuration properties. */
        [key: string]: any;
    }

    /** Configuration for a single index key. */
    interface IndexKeyConfig {
        /**
         * Whether to enable Chinese word segmentation.
         * @example true
         */
        chn: boolean;
        /**
         * Whether the search is case sensitive.
         * @example true
         */
        caseSensitive: boolean;
        /**
         * Token delimiters for text splitting.
         * @example ["|"]
         */
        token: string[];
        /**
         * Alias for the key.
         * @example "myAlias"
         */
        alias?: string;
        /**
         * Data type of the key.
         * @example "text"
         */
        type: string;
        /**
         * Whether to enable doc value for faster queries.
         * @example true
         */
        doc_value: boolean;
        /**
         * Whether to index all subfields.
         * @example true
         */
        index_all?: boolean;
        /**
         * Maximum depth for JSON indexing.
         * @example 0
         */
        max_depth?: number;
        /** Nested JSON key configurations. */
        json_keys?: Record<string, IndexKeyConfig>;
    }

    /** Configuration for line-based indexing. */
    interface IndexLineConfig {
        /**
         * Whether to enable Chinese word segmentation.
         * @example false
         */
        chn: boolean;
        /**
         * Whether the search is case sensitive.
         * @example false
         */
        caseSensitive: boolean;
        /**
         * Token delimiters for text splitting.
         * @example [","]
         */
        token: string[];
        /**
         * Keys to include in line indexing.
         * @example ["includeField"]
         */
        include_keys: string[];
        /**
         * Keys to exclude from line indexing.
         * @example ["excludeField"]
         */
        exclude_keys: string[];
    }

    /** Response from getIndexConfig API call. */
    interface GetIndexConfigResponse {
        /**
         * Time to live for the index in days.
         * @example 30
         */
        ttl: number;
        /**
         * Maximum length of text fields.
         * @example 2048
         */
        max_text_len: number;
        /**
         * Whitelist for log reduction.
         * @example ["a"]
         */
        log_reduce_white_list: string[];
        /**
         * Blacklist for log reduction.
         * @example ["b"]
         */
        log_reduce_black_list: string[];
        /** Line-based indexing configuration. */
        line: IndexLineConfig;
        /** Key-based indexing configurations. */
        keys: Record<string, IndexKeyConfig>;
        /**
         * Whether log reduction is enabled.
         * @example false
         */
        log_reduce: boolean;
        /**
         * Last modification time as Unix timestamp.
         * @example 1524155379
         */
        lastModifyTime: number;
        /**
         * Index mode version.
         * @example "v2"
         */
        index_mode: string;
        /**
         * Storage type for the index.
         * @example "pg"
         */
        storage: string;
    }

    // Log-related interfaces
    /** A single histogram item representing log distribution in a time range. */
    interface HistogramItem {
        /**
         * Start time of the histogram interval as Unix timestamp.
         * @example 1409529600
         */
        from: number;
        /**
         * End time of the histogram interval as Unix timestamp.
         * @example 1409569200
         */
        to: number;
        /**
         * Number of logs in this time interval.
         * @example 2
         */
        count: number;
        /**
         * Progress status of the query.
         * - `Complete` - Query is complete.
         * - `Incomplete` - Query is incomplete, more calls needed.
         * @example "Complete"
         */
        progress: string;
    }

    /** Response from getHistograms API call. */
    type GetHistogramsResponse = HistogramItem[];

    /** A single result from project logs query. */
    interface ProjectLogResult {
        /** Array of log entries returned by the query. */
        key: Array<Record<string, any>>;
    }

    /** Response from getProjectLogs API call. */
    type GetProjectLogsResponse = ProjectLogResult[];

    /** Response from getLogs API call. */
    interface GetLogsResponse {
        /** Log timestamp (10 digits) */
        __time__: string;
        /** Log topic */
        __topic__: string;
        /** Log source */
        __source__: string;
        /** Log content */
        [key: string]: string;
    }

    /** Content of a log entry. */
    interface LogContent {
        /** Log content key-value pairs. */
        [key: string]: string;
    }

    /** A single log entry. */
    interface LogEntry {
        /** The timestamp of the log entry. */
        timestamp: number;
        /** Optional nanosecond part of the timestamp. */
        timestampNsPart?: number;
        /** The content of the log entry. */
        content: LogContent;
    }

    /** Tags for log entries. */
    interface LogTag {
        /** Tag key-value pairs. */
        [key: string]: string;
    }

    /** Data for posting logs to a log store. */
    interface PostLogStoreLogsData {
        /** Array of log entries to post. */
        logs: LogEntry[];
        /** Optional tags for the logs. */
        tags?: LogTag[];
        /** Optional topic for the logs. */
        topic?: string;
        /** Optional source for the logs. */
        source?: string;
    }

    /** Query parameters for retrieving logs. */
    interface GetLogsQuery {
        /** Optional [SPL](https://help.aliyun.com/zh/sls/spl-instructions-and-functions/) query string. */
        query?: string;
        /** Optional topic filter. */
        topic?: string;
        /** Optional flag to reverse the order. */
        reverse?: boolean;
        /** Optional number of lines to return. */
        line?: number;
        /** Optional offset for pagination. */
        offset?: number;
        /** Optional flag to enable dedicated SQL. */
        powerSql?: boolean;
        /** Additional query options. */
        [key: string]: any;
    }

    /** Query parameters for retrieving histograms. */
    interface GetHistogramsQuery {
        /** Optional [SPL](https://help.aliyun.com/zh/sls/spl-instructions-and-functions/) query string. */
        query?: string;
        /** Optional topic filter. */
        topic?: string;
        /** Additional histogram query options. */
        [key: string]: any;
    }

    /** Response from API calls. */
    interface ApiResponse {
        /** Response data. */
        [key: string]: any;
    }
}

/** The main client class for interacting with AliCloud Log services. */
declare class Client {
    /** The region for the client. */
    region: string;
    /** Optional network type. */
    net?: string;
    /** Optional access key ID. */
    accessKeyId?: string;
    /** Optional access key secret. */
    accessKeySecret?: string;
    /** Optional security token. */
    securityToken?: string;
    /** Optional credentials provider. */
    credentialsProvider?: Client.CredentialsProvider;
    /** The endpoint URL. */
    endpoint: string;

    /**
     * Creates a new Client instance.
     * @param config The configuration for the client.
     */
    constructor(config: Client.ClientConfig);

    /**
     * Retrieves project information.
     * @param projectName The name of the project.
     * @param options Optional request options.
     */
    getProject(projectName: string, options?: Client.RequestOptions): Promise<Client.GetProjectResponse>;

    /**
     * Retrieves logs for a project.
     * @param projectName The name of the project.
     * @param data Optional query parameters for project logs.
     * @param options Optional request options.
     */
    getProjectLogs(
        projectName: string,
        data?: Client.ProjectLogsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.GetProjectLogsResponse>;

    /**
     * Creates a new project.
     * @param projectName The name of the project.
     * @param data The data for creating the project.
     * @param options Optional request options.
     */
    createProject(
        projectName: string,
        data: Client.ProjectData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Deletes a project.
     * @param projectName The name of the project.
     * @param options Optional request options.
     */
    deleteProject(projectName: string, options?: Client.RequestOptions): Promise<Client.ApiResponse>;

    /**
     * Lists log stores in a project.
     * @param projectName The name of the project.
     * @param data Optional query parameters for listing log stores.
     * @param options Optional request options.
     */
    listLogStore(
        projectName: string,
        data?: Client.ListLogStoreQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.ListLogStoresResponse>;

    /**
     * Creates a new log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param data Optional data for the log store.
     * @param options Optional request options.
     */
    createLogStore(
        projectName: string,
        logstoreName: string,
        data?: Client.LogStoreData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Deletes a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param options Optional request options.
     */
    deleteLogStore(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Updates a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param data Optional data for updating the log store.
     * @param options Optional request options.
     */
    updateLogStore(
        projectName: string,
        logstoreName: string,
        data?: Client.LogStoreData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Retrieves log store information.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param options Optional request options.
     */
    getLogStore(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.GetLogStoreResponse>;

    /**
     * Retrieves index configuration.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param options Optional request options.
     */
    getIndexConfig(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.GetIndexConfigResponse>;

    /**
     * Creates an index for a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param index The index configuration.
     * @param options Optional request options.
     */
    createIndex(
        projectName: string,
        logstoreName: string,
        index: Client.IndexConfig,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Updates an index for a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param index The index configuration.
     * @param options Optional request options.
     */
    updateIndex(
        projectName: string,
        logstoreName: string,
        index: Client.IndexConfig,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Deletes an index for a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param options Optional request options.
     */
    deleteIndex(
        projectName: string,
        logstoreName: string,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;

    /**
     * Retrieves logs from a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param from The start date for the logs.
     * @param to The end date for the logs.
     * @param data Optional query parameters for retrieving logs.
     * @param options Optional request options.
     */
    getLogs(
        projectName: string,
        logstoreName: string,
        from: Date,
        to: Date,
        data?: Client.GetLogsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.GetLogsResponse[]>;

    /**
     * Retrieves histograms from a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param from The start date for the histograms.
     * @param to The end date for the histograms.
     * @param data Optional query parameters for retrieving histograms.
     * @param options Optional request options.
     */
    getHistograms(
        projectName: string,
        logstoreName: string,
        from: Date,
        to: Date,
        data?: Client.GetHistogramsQuery,
        options?: Client.RequestOptions,
    ): Promise<Client.GetHistogramsResponse>;

    /**
     * Posts logs to a log store.
     * @param projectName The name of the project.
     * @param logstoreName The name of the log store.
     * @param data The data containing logs to post.
     * @param options Optional request options.
     */
    postLogStoreLogs(
        projectName: string,
        logstoreName: string,
        data: Client.PostLogStoreLogsData,
        options?: Client.RequestOptions,
    ): Promise<Client.ApiResponse>;
}

export = Client;
