import Client = require("@alicloud/log");

// Test Credentials interface
const credentials: Client.Credentials = {
    accessKeyId: "test-access-key-id",
    accessKeySecret: "test-access-key-secret",
    securityToken: "test-security-token",
};

// Test credentials object without token.
const credentialsWithoutToken: Client.Credentials = {
    accessKeyId: "test-access-key-id",
    accessKeySecret: "test-access-key-secret",
};

// Test CredentialsProvider interface
class TestCredentialsProvider implements Client.CredentialsProvider {
    async getCredentials(): Promise<Client.Credentials> {
        return {
            accessKeyId: "test-key",
            accessKeySecret: "test-secret",
        };
    }
}

// Instantiate TestCredentialsProvider
const credentialsProvider = new TestCredentialsProvider();

// Test ClientConfig interface
const clientConfig: Client.ClientConfig = {
    region: "cn-hangzhou",
    net: "ipv4",
    accessKeyId: "test-access-key-id",
    accessKeySecret: "test-access-key-secret",
    securityToken: "test-security-token",
    credentialsProvider,
    endpoint: "https://test.log.aliyuncs.com",
};

// Minimal ClientConfig interface
const minimalClientConfig: Client.ClientConfig = {
    region: "cn-hangzhou",
};

// Additional ClientConfig variations
const clientConfigWithNet: Client.ClientConfig = {
    region: "cn-hangzhou",
    net: "ipv6",
};

const clientConfigWithCredentials: Client.ClientConfig = {
    region: "cn-hangzhou",
    accessKeyId: "test-key",
    accessKeySecret: "test-secret",
};

const clientConfigWithProviderOnly: Client.ClientConfig = {
    region: "cn-hangzhou",
    credentialsProvider,
};

// Test RequestOptions interface
const requestOptions: Client.RequestOptions = {
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "test-agent",
    },
    customProperty: "custom-value",
};

// Additional RequestOptions variations
const minimalRequestOptions: Client.RequestOptions = {};
const requestOptionsTimeout: Client.RequestOptions = {
    timeout: 10000,
};

// Test ProjectData interface
const projectData: Client.ProjectData = {
    description: "Test project description",
};

// Test ProjectQuota interface
const projectQuota: Client.ProjectQuota = {
    logstore: 200,
    shard: 400,
    config: 200,
    machineGroup: 200,
    dashboard: 100,
    chart: 200,
    savedsearch: 100,
    ETL: 100,
    domain: 1,
    export: 100,
    ingestion: 100,
    alert: 100,
    report: 100,
    scheduledSQL: 100,
    storeView: 10,
    storeViewStore: 50,
    materializedView: 30,
    ingestProcessor: 100,
    consumeProcessor: 100,
    writeSizePerMin: 100000000000,
    writeQpsPerMin: 600000,
    readQpsPerMin: 600000,
};

// Test ProjectResponse interface
const projectResponse: Client.GetProjectResponse = {
    projectName: "ykerp",
    status: "Normal",
    owner: "1015810200442489",
    description: "Yike ERP Project",
    createTime: "2025-07-04 15:05:32",
    lastModifyTime: "2025-07-04 15:05:32",
    region: "cn-hangzhou",
    location: "cn-hangzhou",
    resourceGroupId: "rg-acfmvpxejaibm6i",
    dataRedundancyType: "LRS",
    transferAcceleration: "Disabled",
    recycleBinEnabled: false,
    quota: projectQuota,
};

// Test ProjectLogsQuery interface
const projectLogsQuery: Client.ProjectLogsQuery = {
    logstoreName: "test-logstore",
    query: "test query",
    from: 1640995200,
    to: 1641081600,
};

// Test ListLogStoreQuery interface
const listLogStoreQuery: Client.ListLogStoreQuery = {
    logstoreName: "test-logstore",
    offset: 0,
    size: 100,
};

// Partial ListLogStoreQuery interface
const partialListLogStoreQuery: Client.ListLogStoreQuery = {
    offset: 10,
};

// Test ListLogStoresResponse interface
const listLogStoresResponse: Client.ListLogStoresResponse = {
    total: 2,
    count: 2,
    logstores: ["test-1", "test-2"],
};

// Test LogStoreResourceQuota interface
const logStoreData: Client.LogStoreData = {
    ttl: 30,
    shardCount: 2,
};

// Partial LogStoreData interface
const partialLogStoreData: Client.LogStoreData = {
    ttl: 7,
};

// Additional LogStoreData variations
const logStoreDataShard: Client.LogStoreData = {
    shardCount: 4,
};

const logStoreDataTtl: Client.LogStoreData = {
    ttl: 365,
};

// Test LogStoreResourceQuota interface
const logStoreResourceQuota: Client.LogStoreResourceQuota = {
    storage: {
        preserved: -1,
        used: 0,
    },
};

// Test LogStoreResponse interface
const logStoreResponse: Client.GetLogStoreResponse = {
    logstoreName: "resources-operations",
    ttl: 3650,
    shardCount: 2,
    enable_tracking: false,
    autoSplit: false,
    maxSplitShard: 0,
    createTime: 1751613373,
    lastModifyTime: 1760179655,
    archiveSeconds: 0,
    appendMeta: false,
    telemetryType: "",
    mode: "standard",
    productType: "",
    resourceQuota: logStoreResourceQuota,
};

// Test IndexConfig interface
const indexConfig: Client.IndexConfig = {
    ttl: 90,
    line: {
        token: ["content"],
        caseSensitive: false,
        chn: true,
    },
    keys: {
        level: {
            type: "text",
            token: [
                ",",
                " ",
                "'",
                "\"",
                ";",
                "=",
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                "?",
                "@",
                "&",
                "<",
                ">",
                "/",
                ":",
                "\n",
                "\t",
                "\r",
            ],
        },
    },
};

// Test GetIndexConfigResponse interface
const getIndexConfigResponse: Client.GetIndexConfigResponse = {
    ttl: 30,
    max_text_len: 2048,
    log_reduce_white_list: ["a"],
    log_reduce_black_list: ["b"],
    line: {
        chn: false,
        caseSensitive: false,
        token: [","],
        include_keys: ["includeField"],
        exclude_keys: ["excludeField"],
    },
    keys: {
        key: {
            chn: true,
            caseSensitive: true,
            token: ["|"],
            alias: "myAlias",
            type: "text",
            doc_value: true,
            index_all: true,
            max_depth: 0,
            json_keys: {
                subkey: {
                    chn: true,
                    caseSensitive: true,
                    token: ["|"],
                    alias: "myAlias",
                    type: "text",
                    doc_value: true,
                },
            },
        },
    },
    log_reduce: false,
    lastModifyTime: 1524155379,
    index_mode: "v2",
    storage: "pg",
};

// Test LogContent interface
const logContent: Client.LogContent = {
    level: "INFO",
    message: "Test log message",
    timestamp: "2022-01-01T00:00:00Z",
    source: "test-source",
};

// Test LogEntry interface
const logEntry: Client.LogEntry = {
    timestamp: 1640995200,
    timestampNsPart: 123456789,
    content: logContent,
};

const minimalLogEntry: Client.LogEntry = {
    timestamp: 1640995200,
    content: {
        message: "Simple log message",
    },
};

// Test LogTag interface
const logTag: Client.LogTag = {
    environment: "production",
    service: "web-server",
    version: "1.0.0",
};

// Test PostLogStoreLogsData interface
const postLogStoreLogsData: Client.PostLogStoreLogsData = {
    logs: [logEntry, minimalLogEntry],
    tags: [logTag],
    topic: "test-topic",
    source: "test-source",
};

const minimalPostLogStoreLogsData: Client.PostLogStoreLogsData = {
    logs: [minimalLogEntry],
};

// Additional PostLogStoreLogsData variations
const postLogStoreLogsDataNoTags: Client.PostLogStoreLogsData = {
    logs: [logEntry],
    topic: "topic",
};

// Test GetLogsQuery interface
const getLogsQuery: Client.GetLogsQuery = {
    query: "level: ERROR",
    topic: "error-logs",
    reverse: true,
    line: 100,
    offset: 0,
    customParam: "custom-value",
};

const partialGetLogsQuery: Client.GetLogsQuery = {
    query: "level: INFO",
};

// Additional GetLogsQuery variations
const getLogsQueryMinimal: Client.GetLogsQuery = {
    query: "test",
};

// Test GetHistogramsQuery interface
const getHistogramsQuery: Client.GetHistogramsQuery = {
    query: "level: *",
    topic: "all-logs",
    interval: "1h",
};

const minimalGetHistogramsQuery: Client.GetHistogramsQuery = {};

// Additional GetHistogramsQuery variations
const getHistogramsQueryWithTopic: Client.GetHistogramsQuery = {
    topic: "test-topic",
};

// Test GetHistogramsResponse type
const getHistogramsResponse: Client.GetHistogramsResponse = [
    {
        from: 1409529600,
        to: 1409569200,
        count: 2,
        progress: "Complete",
    },
];

// Test GetProjectLogsResponse type
const getProjectLogsResponse: Client.GetProjectLogsResponse = [
    {
        key: [
            {
                "__time__": 1409529660,
                "__source__": "192.168.1.100",
                "Key1": "error",
                "Key2": "Value2",
            },
            {
                "__time__": 1409529680,
                "__source__": "192.168.1.100",
                "Key3": "error",
                "Key4": "Value4",
            },
        ],
    },
];

// Test GetLogsResponse type
const getLogsResponse: Client.GetLogsResponse[] = [
    {
        __time__: "1409529660",
        __topic__: "test-topic",
        __source__: "192.168.1.100",
        level: "INFO",
        message: "Test log message",
        timestamp: "2022-01-01T00:00:00Z",
        source: "test-source",
    },
    {
        __time__: "1409529680",
        __topic__: "test-topic",
        __source__: "192.168.1.100",
        level: "ERROR",
        message: "Error log message",
        timestamp: "2022-01-01T00:01:00Z",
        source: "test-source",
    },
];

// Test ApiResponse interface
const apiResponse: Client.ApiResponse = {
    count: 100,
    logs: [logEntry],
    progress: "Complete",
    requestId: "test-request-id",
};

// Additional ApiResponse variations
const apiResponseMinimal: Client.ApiResponse = {};
const apiResponseWithError: Client.ApiResponse = {
    error: "test error",
    code: 500,
};

// Test Client class constructor
const client = new Client(clientConfig);
const minimalClient = new Client(minimalClientConfig);

// Test Client class properties
const region: string = client.region;
const net: string | undefined = client.net;
const accessKeyId: string | undefined = client.accessKeyId;
const accessKeySecret: string | undefined = client.accessKeySecret;
const securityToken: string | undefined = client.securityToken;
const provider: Client.CredentialsProvider | undefined = client.credentialsProvider;
const endpoint: string = client.endpoint;

// Test Client class methods - Project operations
async function testProjectOperations() {
    // getProject
    const project: Client.GetProjectResponse = await client.getProject("test-project");
    const projectWithOptions: Client.GetProjectResponse = await client.getProject("test-project", requestOptions);

    // getProjectLogs
    const projectLogs: Client.GetProjectLogsResponse = await client.getProjectLogs("test-project");
    const projectLogsWithData: Client.GetProjectLogsResponse = await client.getProjectLogs(
        "test-project",
        projectLogsQuery,
    );
    const projectLogsWithOptions: Client.GetProjectLogsResponse = await client.getProjectLogs(
        "test-project",
        projectLogsQuery,
        requestOptions,
    );

    // createProject
    const createdProject: Client.ApiResponse = await client.createProject("test-project", projectData);
    const createdProjectWithOptions: Client.ApiResponse = await client.createProject(
        "test-project",
        projectData,
        requestOptions,
    );

    // deleteProject
    const deletedProject: Client.ApiResponse = await client.deleteProject("test-project");
    const deletedProjectWithOptions: Client.ApiResponse = await client.deleteProject("test-project", requestOptions);
}

// Test Client class methods - LogStore operations
async function testLogStoreOperations() {
    // listLogStore
    const logStores: Client.ListLogStoresResponse = await client.listLogStore("test-project");
    const logStoresWithData: Client.ListLogStoresResponse = await client.listLogStore(
        "test-project",
        listLogStoreQuery,
    );
    const logStoresWithOptions: Client.ListLogStoresResponse = await client.listLogStore(
        "test-project",
        listLogStoreQuery,
        requestOptions,
    );

    // createLogStore
    const createdLogStore: Client.ApiResponse = await client.createLogStore("test-project", "test-logstore");
    const createdLogStoreWithData: Client.ApiResponse = await client.createLogStore(
        "test-project",
        "test-logstore",
        logStoreData,
    );
    const createdLogStoreWithOptions: Client.ApiResponse = await client.createLogStore(
        "test-project",
        "test-logstore",
        logStoreData,
        requestOptions,
    );

    // deleteLogStore
    const deletedLogStore: Client.ApiResponse = await client.deleteLogStore("test-project", "test-logstore");
    const deletedLogStoreWithOptions: Client.ApiResponse = await client.deleteLogStore(
        "test-project",
        "test-logstore",
        requestOptions,
    );

    // updateLogStore
    const updatedLogStore: Client.ApiResponse = await client.updateLogStore("test-project", "test-logstore");
    const updatedLogStoreWithData: Client.ApiResponse = await client.updateLogStore(
        "test-project",
        "test-logstore",
        logStoreData,
    );
    const updatedLogStoreWithOptions: Client.ApiResponse = await client.updateLogStore(
        "test-project",
        "test-logstore",
        logStoreData,
        requestOptions,
    );

    // getLogStore
    const logStore: Client.GetLogStoreResponse = await client.getLogStore("test-project", "test-logstore");
    const logStoreWithOptions: Client.GetLogStoreResponse = await client.getLogStore(
        "test-project",
        "test-logstore",
        requestOptions,
    );
}

// Test Client class methods - Index operations
async function testIndexOperations() {
    // getIndexConfig
    const indexConfigResult: Client.GetIndexConfigResponse = await client.getIndexConfig(
        "test-project",
        "test-logstore",
    );
    const indexConfigWithOptions: Client.GetIndexConfigResponse = await client.getIndexConfig(
        "test-project",
        "test-logstore",
        requestOptions,
    );

    // createIndex
    const createdIndex: Client.ApiResponse = await client.createIndex("test-project", "test-logstore", indexConfig);
    const createdIndexWithOptions: Client.ApiResponse = await client.createIndex(
        "test-project",
        "test-logstore",
        indexConfig,
        requestOptions,
    );

    // updateIndex
    const updatedIndex: Client.ApiResponse = await client.updateIndex("test-project", "test-logstore", indexConfig);
    const updatedIndexWithOptions: Client.ApiResponse = await client.updateIndex(
        "test-project",
        "test-logstore",
        indexConfig,
        requestOptions,
    );

    // deleteIndex
    const deletedIndex: Client.ApiResponse = await client.deleteIndex("test-project", "test-logstore");
    const deletedIndexWithOptions: Client.ApiResponse = await client.deleteIndex(
        "test-project",
        "test-logstore",
        requestOptions,
    );
}

// Test Client class methods - Log operations
async function testLogOperations() {
    const fromDate = new Date("2022-01-01T00:00:00Z");
    const toDate = new Date("2022-01-01T23:59:59Z");

    // getLogs
    const logs: Client.GetLogsResponse[] = await client.getLogs("test-project", "test-logstore", fromDate, toDate);
    const logsWithQuery: Client.GetLogsResponse[] = await client.getLogs(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getLogsQuery,
    );
    const logsWithOptions: Client.GetLogsResponse[] = await client.getLogs(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getLogsQuery,
        requestOptions,
    );

    // getHistograms
    const histograms: Client.GetHistogramsResponse = await client.getHistograms(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
    );
    const histogramsWithQuery: Client.GetHistogramsResponse = await client.getHistograms(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getHistogramsQuery,
    );
    const histogramsWithOptions: Client.GetHistogramsResponse = await client.getHistograms(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getHistogramsQuery,
        requestOptions,
    );

    // postLogStoreLogs
    const postedLogs: Client.ApiResponse = await client.postLogStoreLogs(
        "test-project",
        "test-logstore",
        postLogStoreLogsData,
    );
    const postedLogsWithOptions: Client.ApiResponse = await client.postLogStoreLogs(
        "test-project",
        "test-logstore",
        postLogStoreLogsData,
        requestOptions,
    );
}
