import Client = require("@alicloud/log");

// Test Credentials interface
const credentials: Client.Credentials = {
    accessKeyId: "test-access-key-id",
    accessKeySecret: "test-access-key-secret",
    securityToken: "test-security-token",
};

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

const minimalClientConfig: Client.ClientConfig = {
    region: "cn-hangzhou",
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

// Test ProjectData interface
const projectData: Client.ProjectData = {
    description: "Test project description",
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

const partialListLogStoreQuery: Client.ListLogStoreQuery = {
    offset: 10,
};

// Test LogStoreData interface
const logStoreData: Client.LogStoreData = {
    ttl: 30,
    shardCount: 2,
};

const partialLogStoreData: Client.LogStoreData = {
    ttl: 7,
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

// Test GetHistogramsQuery interface
const getHistogramsQuery: Client.GetHistogramsQuery = {
    query: "level: *",
    topic: "all-logs",
    interval: "1h",
};

const minimalGetHistogramsQuery: Client.GetHistogramsQuery = {};

// Test ApiResponse interface
const apiResponse: Client.ApiResponse = {
    count: 100,
    logs: [logEntry],
    progress: "Complete",
    requestId: "test-request-id",
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
    const project: Client.ApiResponse = await client.getProject("test-project");
    const projectWithOptions: Client.ApiResponse = await client.getProject("test-project", requestOptions);

    // getProjectLogs
    const projectLogs: Client.ApiResponse = await client.getProjectLogs("test-project");
    const projectLogsWithData: Client.ApiResponse = await client.getProjectLogs("test-project", projectLogsQuery);
    const projectLogsWithOptions: Client.ApiResponse = await client.getProjectLogs(
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
    const logStores: Client.ApiResponse = await client.listLogStore("test-project");
    const logStoresWithData: Client.ApiResponse = await client.listLogStore("test-project", listLogStoreQuery);
    const logStoresWithOptions: Client.ApiResponse = await client.listLogStore(
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
    const logStore: Client.ApiResponse = await client.getLogStore("test-project", "test-logstore");
    const logStoreWithOptions: Client.ApiResponse = await client.getLogStore(
        "test-project",
        "test-logstore",
        requestOptions,
    );
}

// Test Client class methods - Index operations
async function testIndexOperations() {
    // getIndexConfig
    const indexConfigResult: Client.ApiResponse = await client.getIndexConfig("test-project", "test-logstore");
    const indexConfigWithOptions: Client.ApiResponse = await client.getIndexConfig(
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
    const logs: Client.ApiResponse = await client.getLogs("test-project", "test-logstore", fromDate, toDate);
    const logsWithQuery: Client.ApiResponse = await client.getLogs(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getLogsQuery,
    );
    const logsWithOptions: Client.ApiResponse = await client.getLogs(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getLogsQuery,
        requestOptions,
    );

    // getHistograms
    const histograms: Client.ApiResponse = await client.getHistograms(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
    );
    const histogramsWithQuery: Client.ApiResponse = await client.getHistograms(
        "test-project",
        "test-logstore",
        fromDate,
        toDate,
        getHistogramsQuery,
    );
    const histogramsWithOptions: Client.ApiResponse = await client.getHistograms(
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
