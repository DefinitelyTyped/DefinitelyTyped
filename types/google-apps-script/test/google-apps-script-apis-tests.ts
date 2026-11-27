// Tests for Google Apps Script Advanced Services APIs
// These tests verify that the global service variables are optional
// and that their properties are required when the service is defined.

function testAdsense() {
    if (!Adsense) return;
    // $ExpectType Adsense
    const adsense = Adsense;
    // $ExpectType AccountsCollection
    const accounts = adsense.Accounts;
    // $ExpectType Accounts
    const list = accounts.list();
}

function testCalendar() {
    if (!Calendar) return;
    // $ExpectType Calendar
    const calendar = Calendar;
    // $ExpectType AclCollection
    const acl = calendar.Acl;
    // $ExpectType Acl
    const list = acl.list("primary");
}

function testDriveV2() {
    if (!Drive_v2) return; // Drive v2 global is Drive_v2
    // $ExpectType Drive_v2
    const drive = Drive_v2;
    // $ExpectType FilesCollection
    const files = drive.Files;
    // $ExpectType FileList
    const list = files.list();
}

function testDriveV3() {
    if (!Drive) return; // Drive v3 global is Drive
    // $ExpectType Drive
    const drive = Drive;
    // $ExpectType FilesCollection
    const files = drive.Files;
    // $ExpectType FileList
    const list = files.list();
}

function testAdminDirectory() {
    if (!AdminDirectory) return;
    // $ExpectType AdminDirectory
    const admin = AdminDirectory;
    // $ExpectType UsersCollection
    const users = admin.Users;
    // $ExpectType Users
    const list = users.list();
}

function testSheets() {
    if (!Sheets) return;
    // $ExpectType Sheets
    const sheets = Sheets;
    // $ExpectType SpreadsheetsCollection
    const spreadsheets = sheets.Spreadsheets;
    // $ExpectType Spreadsheet
    const create = spreadsheets.create({});
    // $ExpectType Spreadsheet
    const get1 = Sheets.Spreadsheets.get("spreeadsheet_id");
    // $ExpectType Spreadsheet
    const get2 = Sheets.Spreadsheets.get("spreeadsheet_id", {});
    // $ExpectType Spreadsheet
    const getByDataFilter1 = Sheets.Spreadsheets.getByDataFilter(
        Sheets.newGetSpreadsheetByDataFilterRequest(),
        "spreeadsheet_id",
    );
    // $ExpectType Spreadsheet
    const getByDataFilter2 = Sheets.Spreadsheets.getByDataFilter(
        Sheets.newGetSpreadsheetByDataFilterRequest(),
        "spreeadsheet_id",
        {},
    );
}

function testSheetShallow() {
    if (!Sheets) return;
    // $ExpectType Spreadsheet
    const spreadsheet = Sheets.Spreadsheets.get("spreeadsheet_id");
    // $ExpectType Sheet
    const sheet = spreadsheet.sheets![0]!;
    // $ExpectType BandedRange[];
    const bandedRanges = sheet.bandedRanges!;
    // $ExpectType BasicFilter;
    const basicFilter = sheet.basicFilter!;
    // $ExpectType EmbeddedChart[]
    const charts = sheet.charts!;
    // $ExpectType DimensionGroup[]
    const columnGroups = sheet.columnGroups!;
    // $ExpectType ConditionalFormatRule[]
    const conditionalFormats = sheet.conditionalFormats!;
    // $ExpectType GridData[]
    const data = sheet.data!;
    // $ExpectType DeveloperMetadata[]
    const developerMetadata = sheet.developerMetadata!;
    // $ExpectType FilterView[]
    const filterViews = sheet.filterViews!;
    // $ExpectType GridRange[]
    const merges = sheet.merges!;
    // $ExpectType SheetProperties
    const properties = sheet.properties!;
    // $ExpectType ProtectedRange[]
    const protectedRanges = sheet.protectedRanges!;
    // $ExpectType DimensionGroup[]
    const rowGroups = sheet.rowGroups!;
    // TODO: ExpectType Slicer[] const slicers = sheet.slicers!;
    // $ExpectType Table[]
    const tables = sheet.tables!;
}

function testSheetsTables() {
    if (!Sheets) return;
    // $ExpectType AddTableRequest
    const addTableReq = Sheets.newAddTableRequest();
    // $ExpectType DeleteTableRequest
    const deleteTableReq = Sheets.newDeleteTableRequest();
    // $ExpectType Table
    const table = Sheets.newTable();
    // $ExpectType TableColumnDataValidationRule
    const tableColumnDataValidationRule = Sheets.newTableColumnDataValidationRule();
    // $ExpectType TableColumnProperties
    const tableColumnProperties = Sheets.newTableColumnProperties();
    // $ExpectType TableRowsProperties
    const tableRowsProperties = Sheets.newTableRowsProperties();
    // $ExpectType UpdateTableRequest
    const updateTableReq = Sheets.newUpdateTableRequest();

    // Test Table interface
    tableColumnDataValidationRule.condition = { "values": [{ "userEnteredValue": "option1" }] };
    tableColumnProperties.columnIndex = 1;
    tableColumnProperties.columnName = "Col1";
    tableColumnProperties.columnType = "ONE_OF_LIST";
    tableColumnProperties.dataValidationRule = tableColumnDataValidationRule;
    tableRowsProperties.firstBandColorStyle = { themeColor: "blue" };
    tableRowsProperties.footerColorStyle = { themeColor: "cyan" };
    tableRowsProperties.headerColorStyle = { themeColor: "magenta" };
    tableRowsProperties.secondBandColorStyle = { themeColor: "mauve" };
    table.columnProperties = [tableColumnProperties];
    table.name = "Table1";
    table.range = {
        endColumnIndex: 3,
        endRowIndex: 5,
        sheetId: 1234,
        startColumnIndex: 1,
        startRowIndex: 1,
    };
    table.rowsProperties = tableRowsProperties;
    table.tableId = "1729";

    // Test table batch requests and response
    const batchResp = Sheets.Spreadsheets.batchUpdate(
        {
            requests: [
                {
                    addTable: addTableReq,
                },
                {
                    deleteTable: deleteTableReq,
                },
                {
                    updateTable: updateTableReq,
                },
            ],
        },
        "spreadsheet_id",
    );
    // $ExpectType AddTableResponse
    const addTableResp = batchResp.replies![0].addTable!;

    // Test tableId in various types
    // $ExpectType string
    const tableId1 = Sheets.newAppendCellsRequest().tableId!;
    // $ExpectType string
    const tableId2 = Sheets.newBasicFilter().tableId!;
    // $ExpectType string
    const tableId3 = Sheets.newFilterView().tableId!;
    // $ExpectType string
    const tableId4 = Sheets.newProtectedRange().tableId!;
    // $ExpectType string
    const tableId5 = Sheets.newFilterView().tableId!;

    // Test excludeTablesInBandedRanges field in one type
    // $ExpectType boolean
    const excludeTablesInBandedRanges = Sheets.newGetSpreadsheetByDataFilterRequest().excludeTablesInBandedRanges!;
}

function testSlides() {
    if (!Slides) return;
    // $ExpectType Slides
    const slides = Slides;
    // $ExpectType PresentationsCollection
    const presentations = slides.Presentations;
    // $ExpectType Presentation
    const create = presentations.create({});
}

function testGmail() {
    if (!Gmail) return;
    // $ExpectType Gmail
    const gmail = Gmail;
    // $ExpectType UsersCollection
    const users = gmail.Users;
    // $ExpectType Profile
    const profile = users.getProfile("me");
}

function testTasks() {
    if (!Tasks) return;
    // $ExpectType Tasks
    const tasks = Tasks;
    // $ExpectType TasklistsCollection
    const tasklists = tasks.Tasklists;
    // $ExpectType TaskLists
    const list = tasklists.list();
}

function testYouTube() {
    if (!YouTube) return;
    // $ExpectType YouTube
    const youtube = YouTube;
    // $ExpectType VideosCollection
    const videos = youtube.Videos;
    // $ExpectType VideoListResponse
    const list = videos.list("snippet");
}

function testBigQuery() {
    if (!BigQuery) return;
    // $ExpectType BigQuery
    const bigquery = BigQuery;
    // $ExpectType JobsCollection
    const jobs = bigquery.Jobs;
    // $ExpectType JobList
    const list = jobs.list("project-id");

    const dataset: GoogleAppsScript.BigQuery.Schema.Dataset = {
        access: [{
            condition: { expression: "resource.name.startsWith('projects/')" },
            dataset: {
                dataset: { datasetId: "dataset", projectId: "project" },
                targetTypes: ["TARGET_TYPE_UNSPECIFIED"],
            },
            domain: "example.com",
            groupByEmail: "group@example.com",
            iamMember: "member",
            role: "READER",
            routine: { datasetId: "dataset", projectId: "project", routineId: "routine" },
            specialGroup: "projectReaders",
            userByEmail: "user@example.com",
            view: { datasetId: "dataset", projectId: "project", tableId: "table" },
        }],
        creationTime: "1",
        datasetReference: { datasetId: "dataset", projectId: "project" },
        defaultPartitionExpirationMs: "2",
        defaultTableExpirationMs: "3",
        description: "description",
        etag: "etag",
        friendlyName: "dataset",
        id: "project:dataset",
        kind: "bigquery#dataset",
        labels: { environment: "test" },
        lastModifiedTime: "4",
        location: "US",
        selfLink: "https://example.com/dataset",
        tags: [{ tagKey: "12345/environment", tagValue: "test" }],
        type: "DEFAULT",
    };
    const tableReference: GoogleAppsScript.BigQuery.Schema.TableReference = {
        datasetId: "dataset",
        projectId: "project",
        tableId: "table",
    };
    const fieldSchema: GoogleAppsScript.BigQuery.Schema.TableFieldSchema = {
        categories: { names: ["one", "two"] },
        description: "field",
        fields: [{ name: "nested", type: "STRING" }],
        mode: "NULLABLE",
        name: "field",
        type: "STRING",
    };
    const queryParameter: GoogleAppsScript.BigQuery.Schema.QueryParameter = {
        name: "parameter",
        parameterType: {
            arrayType: { type: "STRING" },
            structTypes: [{ description: "field", name: "field", type: { type: "INT64" } }],
            type: "ARRAY",
        },
        parameterValue: { arrayValues: [{ value: "one" }], structValues: { field: { value: "one" } }, value: "one" },
    };
    const queryRequest: GoogleAppsScript.BigQuery.Schema.QueryRequest = {
        arrowSerializationOptions: {
            bufferCompression: "ZSTD",
            picosTimestampPrecision: "PICOS_TIMESTAMP_PRECISION_UNSPECIFIED",
        },
        connectionProperties: [{ key: "time_zone", value: "UTC" }],
        continuous: false,
        createSession: true,
        defaultDataset: tableReference,
        destinationEncryptionConfiguration: { kmsKeyName: "key" },
        dryRun: false,
        formatOptions: { useInt64Timestamp: true },
        jobCreationMode: "JOB_CREATION_OPTIONAL",
        jobTimeoutMs: "1000",
        kind: "bigquery#queryRequest",
        labels: { environment: "test" },
        location: "US",
        maximumBytesBilled: "1000",
        maxResults: 10,
        maxSlots: 10,
        parameterMode: "NAMED",
        preserveNulls: true,
        query: "select 1",
        queryParameters: [queryParameter],
        queryResultsFormat: "STRUCT_ENCODING",
        requestId: "request-id",
        reservation: "projects/project/locations/US/reservations/reservation",
        timeoutMs: 1000,
        useLegacySql: false,
        useQueryCache: true,
        writeIncrementalResults: false,
    };
    const loadConfiguration: GoogleAppsScript.BigQuery.Schema.JobConfigurationLoad = {
        allowJaggedRows: true,
        allowQuotedNewlines: true,
        autodetect: true,
        clustering: { fields: ["field"] },
        createDisposition: "CREATE_IF_NEEDED",
        destinationEncryptionConfiguration: { kmsKeyName: "key" },
        destinationTable: tableReference,
        destinationTableProperties: { description: "description", friendlyName: "table", labels: { key: "value" } },
        encoding: "UTF-8",
        fieldDelimiter: ",",
        ignoreUnknownValues: true,
        maxBadRecords: 1,
        nullMarker: "NULL",
        projectionFields: ["field"],
        quote: "\"",
        rangePartitioning: { field: "id", range: { end: "10", interval: "1", start: "0" } },
        schema: { fields: [fieldSchema] },
        schemaInline: "field:STRING",
        schemaInlineFormat: "CSV",
        schemaUpdateOptions: ["ALLOW_FIELD_ADDITION"],
        skipLeadingRows: 1,
        sourceFormat: "CSV",
        sourceUris: ["gs://bucket/file.csv"],
        timePartitioning: { expirationMs: "1000", field: "created", requirePartitionFilter: true, type: "DAY" },
        useAvroLogicalTypes: true,
        writeDisposition: "WRITE_APPEND",
    };
    const queryConfiguration: GoogleAppsScript.BigQuery.Schema.JobConfigurationQuery = {
        allowLargeResults: true,
        clustering: { fields: ["field"] },
        createDisposition: "CREATE_IF_NEEDED",
        defaultDataset: tableReference,
        destinationEncryptionConfiguration: { kmsKeyName: "key" },
        destinationTable: tableReference,
        flattenResults: true,
        maximumBillingTier: 1,
        maximumBytesBilled: "1000",
        parameterMode: "NAMED",
        preserveNulls: true,
        priority: "INTERACTIVE",
        query: "select 1",
        queryParameters: [queryParameter],
        rangePartitioning: { field: "id", range: { end: "10", interval: "1", start: "0" } },
        schemaUpdateOptions: ["ALLOW_FIELD_ADDITION"],
        tableDefinitions: { table: { sourceUris: ["gs://bucket/file.csv"] } },
        timePartitioning: { expirationMs: "1000", field: "created", requirePartitionFilter: true, type: "DAY" },
        useLegacySql: false,
        useQueryCache: true,
        userDefinedFunctionResources: [{ inlineCode: "return 1;" }, { resourceUri: "gs://bucket/function.js" }],
        writeDisposition: "WRITE_TRUNCATE",
    };
    const jobConfiguration: GoogleAppsScript.BigQuery.Schema.JobConfiguration = {
        copy: {
            createDisposition: "CREATE_IF_NEEDED",
            destinationEncryptionConfiguration: { kmsKeyName: "key" },
            destinationTable: tableReference,
            sourceTable: tableReference,
            sourceTables: [tableReference],
            writeDisposition: "WRITE_TRUNCATE",
        },
        dryRun: false,
        extract: {
            compression: "GZIP",
            destinationFormat: "CSV",
            destinationUri: "gs://bucket/file.csv",
            destinationUris: ["gs://bucket/file-*.csv"],
            fieldDelimiter: ",",
            printHeader: true,
            sourceTable: tableReference,
        },
        jobTimeoutMs: "1000",
        jobType: "QUERY",
        labels: { environment: "test" },
        load: loadConfiguration,
        maxSlots: 10,
        query: queryConfiguration,
        reservation: "projects/project/locations/US/reservations/reservation",
    };
    const error: GoogleAppsScript.BigQuery.Schema.ErrorProto = {
        debugInfo: "debug",
        location: "query",
        message: "message",
        reason: "invalid",
    };
    const statistics: GoogleAppsScript.BigQuery.Schema.JobStatistics = {
        completionRatio: 1,
        creationTime: "1",
        endTime: "2",
        extract: { destinationUriFileCounts: ["1"], inputBytes: "2" },
        load: { badRecords: "0", inputFileBytes: "1", inputFiles: "1", outputBytes: "2", outputRows: "3" },
        numChildJobs: "0",
        parentJobId: "parent",
        query: {
            billingTier: 1,
            cacheHit: true,
            ddlOperationPerformed: "CREATE_TABLE",
            ddlTargetRoutine: { datasetId: "dataset", projectId: "project", routineId: "routine" },
            ddlTargetTable: tableReference,
            estimatedBytesProcessed: "10",
            modelTraining: { currentIteration: 1, expectedTotalIterations: "2" },
            modelTrainingCurrentIteration: 1,
            modelTrainingExpectedTotalIteration: "2",
            numDmlAffectedRows: "1",
            queryPlan: [{
                completedParallelInputs: "1",
                computeMsAvg: "1",
                computeMsMax: "2",
                computeRatioAvg: 0.5,
                computeRatioMax: 1,
                endMs: "2",
                id: "stage",
                inputStages: ["input"],
                name: "stage",
                parallelInputs: "1",
                readMsAvg: "1",
                readMsMax: "2",
                readRatioAvg: 0.5,
                readRatioMax: 1,
                recordsRead: "1",
                recordsWritten: "1",
                shuffleOutputBytes: "1",
                shuffleOutputBytesSpilled: "0",
                startMs: "0",
                status: "COMPLETE",
                steps: [{ kind: "READ", substeps: ["step"] }],
                waitMsAvg: "1",
                waitMsMax: "2",
                waitRatioAvg: 0.5,
                waitRatioMax: 1,
                writeMsAvg: "1",
                writeMsMax: "2",
                writeRatioAvg: 0.5,
                writeRatioMax: 1,
            }],
            referencedTables: [tableReference],
            reservationUsage: [{ name: "reservation", slotMs: "1" }],
            schema: { fields: [fieldSchema] },
            statementType: "SELECT",
            timeline: [{ activeUnits: "1", completedUnits: "1", elapsedMs: "1", pendingUnits: "0", totalSlotMs: "1" }],
            totalBytesBilled: "1",
            totalBytesProcessed: "1",
            totalBytesProcessedAccuracy: "PRECISE",
            totalPartitionsProcessed: "1",
            totalSlotMs: "1",
            undeclaredQueryParameters: [queryParameter],
        },
        quotaDeferments: ["quota"],
        reservationUsage: [{ name: "reservation", slotMs: "1" }],
        startTime: "0",
        totalBytesProcessed: "10",
        totalSlotMs: "1",
    };
    const job: GoogleAppsScript.BigQuery.Schema.Job = {
        configuration: jobConfiguration,
        etag: "etag",
        id: "job",
        jobCreationReason: { code: "REQUESTED" },
        jobReference: { jobId: "job", location: "US", projectId: "project" },
        kind: "bigquery#job",
        principal_subject: "user@example.com",
        selfLink: "https://example.com/job",
        statistics,
        status: { errorResult: error, errors: [error], state: "DONE" },
        user_email: "user@example.com",
    };
    const response: GoogleAppsScript.BigQuery.Schema.QueryResponse = {
        cacheHit: true,
        creationTime: "1",
        dmlStats: { deletedRowCount: "0", insertedRowCount: "1", updatedRowCount: "0" },
        endTime: "2",
        errors: [error],
        jobComplete: true,
        jobCreationReason: { code: "REQUESTED" },
        jobReference: job.jobReference,
        kind: "bigquery#queryResponse",
        numDmlAffectedRows: "1",
        pageToken: "token",
        queryId: "query-id",
        rows: [{ f: [{ v: { value: "one" } }] }],
        schema: { fields: [fieldSchema] },
        startTime: "0",
        totalBytesBilled: "1",
        totalBytesProcessed: "1",
        totalRows: "1",
    };
    const table: GoogleAppsScript.BigQuery.Schema.Table = {
        clustering: { fields: ["field"] },
        creationTime: "1",
        description: "table",
        encryptionConfiguration: { kmsKeyName: "key" },
        etag: "etag",
        expirationTime: "2",
        externalDataConfiguration: {
            autodetect: true,
            bigtableOptions: {
                columnFamilies: [{
                    columns: [{
                        encoding: "UTF-8",
                        fieldName: "field",
                        onlyReadLatest: true,
                        qualifierEncoded: "encoded",
                        qualifierString: "qualifier",
                        type: "STRING",
                    }],
                    encoding: "UTF-8",
                    familyId: "family",
                    onlyReadLatest: true,
                    type: "STRING",
                }],
                ignoreUnspecifiedColumnFamilies: true,
                readRowkeyAsString: true,
            },
            compression: "GZIP",
            csvOptions: {
                allowJaggedRows: true,
                allowQuotedNewlines: true,
                encoding: "UTF-8",
                fieldDelimiter: ",",
                quote: "\"",
                skipLeadingRows: "1",
            },
            googleSheetsOptions: { range: "Sheet1!A:B", skipLeadingRows: "1" },
            ignoreUnknownValues: true,
            maxBadRecords: 1,
            schema: { fields: [fieldSchema] },
            sourceFormat: "CSV",
            sourceUris: ["gs://bucket/file.csv"],
        },
        friendlyName: "table",
        id: "project:dataset.table",
        kind: "bigquery#table",
        labels: { environment: "test" },
        lastModifiedTime: "3",
        location: "US",
        materializedView: { lastRefreshTime: "4", query: "select 1" },
        model: {
            modelOptions: { labels: ["label"], lossType: "MEAN_SQUARED_LOSS", modelType: "LINEAR_REG" },
            trainingRuns: [{
                iterationResults: [{ durationMs: "1", evalLoss: 0.1, index: 1, learnRate: 0.1, trainingLoss: 0.1 }],
                startTime: "0",
                state: "SUCCEEDED",
                trainingOptions: {
                    earlyStop: true,
                    l1Reg: 0.1,
                    l2Reg: 0.1,
                    learnRate: 0.1,
                    learnRateStrategy: "LINE_SEARCH",
                    lineSearchInitLearnRate: 0.1,
                    maxIteration: "10",
                    minRelProgress: 0.1,
                    warmStart: true,
                },
            }],
        },
        numBytes: "1",
        numLongTermBytes: "1",
        numPhysicalBytes: "1",
        numRows: "1",
        rangePartitioning: { field: "id", range: { end: "10", interval: "1", start: "0" } },
        requirePartitionFilter: true,
        schema: { fields: [fieldSchema] },
        selfLink: "https://example.com/table",
        streamingBuffer: { estimatedBytes: "1", estimatedRows: "1", oldestEntryTime: "1" },
        tableReference,
        timePartitioning: { expirationMs: "1", field: "created", requirePartitionFilter: true, type: "DAY" },
        type: "TABLE",
        view: {
            query: "select 1",
            useLegacySql: false,
            userDefinedFunctionResources: [{ inlineCode: "return 1;", resourceUri: "gs://bucket/function.js" }],
        },
    };
    const datasetListDataset: GoogleAppsScript.BigQuery.Schema.DatasetListDatasets = {
        datasetReference: tableReference,
        friendlyName: "dataset",
        id: "dataset",
        kind: "bigquery#dataset",
        labels: { environment: "test" },
        location: "US",
    };
    const datasetList: GoogleAppsScript.BigQuery.Schema.DatasetList = {
        datasets: [datasetListDataset],
        etag: "etag",
        kind: "bigquery#datasetList",
        nextPageToken: "token",
    };
    const getQueryResults: GoogleAppsScript.BigQuery.Schema.GetQueryResultsResponse = {
        cacheHit: true,
        errors: [error],
        etag: "etag",
        jobComplete: true,
        jobReference: job.jobReference,
        kind: "bigquery#getQueryResultsResponse",
        numDmlAffectedRows: "1",
        pageToken: "token",
        rows: [{ f: [{ v: { value: "one" } }] }],
        schema: { fields: [fieldSchema] },
        totalBytesProcessed: "1",
        totalRows: "1",
    };
    const serviceAccount: GoogleAppsScript.BigQuery.Schema.GetServiceAccountResponse = {
        email: "service-account@example.com",
        kind: "bigquery#getServiceAccountResponse",
    };
    const jobCancel: GoogleAppsScript.BigQuery.Schema.JobCancelResponse = { job, kind: "bigquery#jobCancelResponse" };
    const jobListJob: GoogleAppsScript.BigQuery.Schema.JobListJobs = {
        configuration: jobConfiguration,
        errorResult: error,
        id: "job",
        jobReference: job.jobReference,
        kind: "bigquery#job",
        state: "DONE",
        statistics,
        status: { errorResult: error, errors: [error], state: "DONE" },
        user_email: "user@example.com",
    };
    const jobList: GoogleAppsScript.BigQuery.Schema.JobList = {
        etag: "etag",
        jobs: [jobListJob],
        kind: "bigquery#jobList",
        nextPageToken: "token",
    };
    const project: GoogleAppsScript.BigQuery.Schema.ProjectListProjects = {
        friendlyName: "project",
        id: "project",
        kind: "bigquery#project",
        numericId: "1",
        projectReference: { projectId: "project" },
    };
    const projectList: GoogleAppsScript.BigQuery.Schema.ProjectList = {
        etag: "etag",
        kind: "bigquery#projectList",
        nextPageToken: "token",
        projects: [project],
        totalItems: 1,
    };
    const tableDataList: GoogleAppsScript.BigQuery.Schema.TableDataList = {
        etag: "etag",
        kind: "bigquery#tableDataList",
        pageToken: "token",
        rows: [{ f: [{ v: { value: "one" } }] }],
        totalRows: "1",
    };
    const insertAllResponse: GoogleAppsScript.BigQuery.Schema.TableDataInsertAllResponse = {
        insertErrors: [{ errors: [error], index: 0 }],
        kind: "bigquery#tableDataInsertAllResponse",
    };
    const tableListTable: GoogleAppsScript.BigQuery.Schema.TableListTables = {
        clustering: { fields: ["field"] },
        creationTime: "1",
        expirationTime: "2",
        friendlyName: "table",
        id: "table",
        kind: "bigquery#table",
        labels: { environment: "test" },
        tableReference,
        timePartitioning: { expirationMs: "1", field: "created", requirePartitionFilter: true, type: "DAY" },
        type: "TABLE",
        view: { useLegacySql: false },
    };
    const tableList: GoogleAppsScript.BigQuery.Schema.TableList = {
        etag: "etag",
        kind: "bigquery#tableList",
        nextPageToken: "token",
        tables: [tableListTable],
        totalItems: 1,
    };

    console.log(
        dataset,
        datasetList,
        getQueryResults,
        serviceAccount,
        jobCancel,
        jobList,
        projectList,
        response,
        tableDataList,
        insertAllResponse,
        tableList,
        table,
    );

    const factories = [
        bigquery.newBigQueryModelTraining(),
        bigquery.newBigtableColumn(),
        bigquery.newBigtableColumnFamily(),
        bigquery.newBigtableOptions(),
        bigquery.newBqmlIterationResult(),
        bigquery.newBqmlTrainingRun(),
        bigquery.newBqmlTrainingRunTrainingOptions(),
        bigquery.newClustering(),
        bigquery.newCsvOptions(),
        bigquery.newDataset(),
        bigquery.newDatasetAccess(),
        bigquery.newDatasetReference(),
        bigquery.newDestinationTableProperties(),
        bigquery.newEncryptionConfiguration(),
        bigquery.newErrorProto(),
        bigquery.newExplainQueryStage(),
        bigquery.newExplainQueryStep(),
        bigquery.newExternalDataConfiguration(),
        bigquery.newGoogleSheetsOptions(),
        bigquery.newJob(),
        bigquery.newJobConfiguration(),
        bigquery.newJobConfigurationExtract(),
        bigquery.newJobConfigurationLoad(),
        bigquery.newJobConfigurationQuery(),
        bigquery.newJobConfigurationTableCopy(),
        bigquery.newJobReference(),
        bigquery.newJobStatistics(),
        bigquery.newJobStatistics2(),
        bigquery.newJobStatistics2ReservationUsage(),
        bigquery.newJobStatistics3(),
        bigquery.newJobStatistics4(),
        bigquery.newJobStatisticsReservationUsage(),
        bigquery.newJobStatus(),
        bigquery.newMaterializedViewDefinition(),
        bigquery.newModelDefinition(),
        bigquery.newModelDefinitionModelOptions(),
        bigquery.newQueryParameter(),
        bigquery.newQueryParameterType(),
        bigquery.newQueryParameterTypeStructTypes(),
        bigquery.newQueryParameterValue(),
        bigquery.newQueryRequest(),
        bigquery.newQueryTimelineSample(),
        bigquery.newRangePartitioning(),
        bigquery.newRangePartitioningRange(),
        bigquery.newRoutineReference(),
        bigquery.newStreamingbuffer(),
        bigquery.newTable(),
        bigquery.newTableDataInsertAllRequest(),
        bigquery.newTableDataInsertAllRequestRows(),
        bigquery.newTableFieldSchema(),
        bigquery.newTableFieldSchemaCategories(),
        bigquery.newTableReference(),
        bigquery.newTableSchema(),
        bigquery.newTimePartitioning(),
        bigquery.newUserDefinedFunctionResource(),
        bigquery.newViewDefinition(),
    ];
    console.log(factories);

    const datasets = bigquery.Datasets;
    datasets.get("project-id", "dataset-id");
    datasets.get("project-id", "dataset-id", {});
    datasets.get("project-id", "dataset-id", { accessPolicyVersion: 3, datasetView: "FULL" });
    datasets.insert(dataset, "project-id");
    datasets.insert(dataset, "project-id", {});
    datasets.insert(dataset, "project-id", { accessPolicyVersion: 3 });
    datasets.list("project-id");
    datasets.list("project-id", {});
    datasets.list("project-id", { all: true, filter: "labels.env:test", maxResults: 10, pageToken: "token" });
    datasets.patch(dataset, "project-id", "dataset-id");
    datasets.patch(dataset, "project-id", "dataset-id", {});
    datasets.patch(dataset, "project-id", "dataset-id", {
        accessPolicyVersion: 3,
        updateMode: "UPDATE_MODE_UNSPECIFIED",
    });
    datasets.remove("project-id", "dataset-id");
    datasets.remove("project-id", "dataset-id", {});
    datasets.remove("project-id", "dataset-id", { deleteContents: true });
    datasets.undelete({}, "project-id", "dataset-id");
    datasets.undelete({ deletionTime: "deletionTime" }, "project-id", "dataset-id");
    datasets.update(dataset, "project-id", "dataset-id");
    datasets.update(dataset, "project-id", "dataset-id", {});
    datasets.update(dataset, "project-id", "dataset-id", {
        accessPolicyVersion: 3,
        updateMode: "UPDATE_MODE_UNSPECIFIED",
    });

    jobs.cancel("project-id", "job-id");
    jobs.cancel("project-id", "job-id", {});
    jobs.cancel("project-id", "job-id", { location: "US" });
    jobs.remove("project-id", "job-id");
    jobs.remove("project-id", "job-id", {});
    jobs.remove("project-id", "job-id", { location: "US" });
    jobs.get("project-id", "job-id");
    jobs.get("project-id", "job-id", {});
    jobs.get("project-id", "job-id", { location: "US" });
    jobs.getQueryResults("project-id", "job-id");
    jobs.getQueryResults("project-id", "job-id", {});
    jobs.getQueryResults("project-id", "job-id", {
        location: "US",
        maxResults: 10,
        pageToken: "token",
        startIndex: "0",
        timeoutMs: 1000,
        "formatOptions.timestampOutputFormat": "TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED",
        "formatOptions.useInt64Timestamp": true,
    });
    jobs.insert({}, "project-id");
    jobs.insert(job, "project-id");
    jobs.list("project-id");
    jobs.list("project-id", {});
    jobs.list("project-id", {
        allUsers: true,
        maxCreationTime: "2",
        maxResults: 10,
        minCreationTime: "1",
        pageToken: "token",
        parentJobId: "parent",
        projection: "minimal",
        stateFilter: "running",
    });
    jobs.query(queryRequest, "project-id");

    const projects = bigquery.Projects;
    projects.getServiceAccount("project-id");
    projects.list();
    projects.list({});
    projects.list({ maxResults: 10, pageToken: "token" });

    const tabledata = bigquery.Tabledata;
    tabledata.insertAll({}, "project-id", "dataset-id", "table-id");
    const insertAll: GoogleAppsScript.BigQuery.Schema.TableDataInsertAllRequest = {
        ignoreUnknownValues: true,
        kind: "bigquery#tableDataInsertAllRequest",
        rows: [{ insertId: "1", json: { field: "value" } }],
        skipInvalidRows: true,
        templateSuffix: "_suffix",
    };
    tabledata.insertAll(insertAll, "project-id", "dataset-id", "table-id");
    tabledata.list("project-id", "dataset-id", "table-id");
    tabledata.list("project-id", "dataset-id", "table-id", {});
    tabledata.list("project-id", "dataset-id", "table-id", {
        "formatOptions.timestampOutputFormat": "TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED",
        "formatOptions.useInt64Timestamp": true,
        maxResults: 10,
        pageToken: "token",
        selectedFields: "field",
        startIndex: "0",
    });

    const tables = bigquery.Tables;
    tables.get("project-id", "dataset-id", "table-id");
    tables.get("project-id", "dataset-id", "table-id", {});
    tables.get("project-id", "dataset-id", "table-id", { selectedFields: "schema", view: "FULL" });
    tables.getIamPolicy({}, "projects/project/datasets/dataset/tables/table");
    tables.insert(table, "project-id", "dataset-id");
    tables.list("project-id", "dataset-id");
    tables.list("project-id", "dataset-id", {});
    tables.list("project-id", "dataset-id", { maxResults: 10, pageToken: "token" });
    tables.patch(table, "project-id", "dataset-id", "table-id");
    tables.patch(table, "project-id", "dataset-id", "table-id", {});
    tables.patch(table, "project-id", "dataset-id", "table-id", { autodetect_schema: true });
    tables.remove("project-id", "dataset-id", "table-id");
    tables.setIamPolicy({}, "projects/project/datasets/dataset/tables/table");
    tables.setIamPolicy({ policy: {}, updateMask: "" }, "projects/project/datasets/dataset/tables/table");
    tables.setIamPolicy({
        policy: {
            auditConfigs: [{
                auditLogConfigs: [
                    {
                        exemptedMembers: ["exemptedMembers"],
                        logType: "LOG_TYPE_UNSPECIFIED",
                    },
                ],
            }],
            bindings: [{
                condition: {
                    description: "description",
                    expression: "expression",
                    location: "location",
                    title: "title",
                },
                members: ["members"],
                role: "role",
            }],
            etag: "etag",
            version: -1,
        },
    }, "projects/project/datasets/dataset/tables/table");
    tables.testIamPermissions({}, "projects/project/datasets/dataset/tables/table");
    tables.testIamPermissions({ permissions: ["permissions"] }, "projects/project/datasets/dataset/tables/table");
    tables.update(table, "project-id", "dataset-id", "table-id");
    tables.update(table, "project-id", "dataset-id", "table-id", {});
    tables.update(table, "project-id", "dataset-id", "table-id", { autodetect_schema: false });
}

function testClassroom() {
    if (!Classroom) return;
    // $ExpectType Classroom
    const classroom = Classroom;
    // $ExpectType CoursesCollection
    const courses = classroom.Courses;
    // $ExpectType ListCoursesResponse
    const list = courses.list();
}

function testDfareporting() {
    if (!Dfareporting) return;
    // $ExpectType Dfareporting
    const dfareporting = Dfareporting;
    // $ExpectType AccountUserProfilesCollection
    const accountUserProfiles = dfareporting.AccountUserProfiles;
    // $ExpectType AccountUserProfilesListResponse
    const list = accountUserProfiles.list("profile-id");
}

function testDocs() {
    if (!Docs) return;
    // $ExpectType Docs
    const docs = Docs;
    // $ExpectType DocumentsCollection
    const documents = docs.Documents;

    const rgbColor: GoogleAppsScript.Docs.Schema.RgbColor = { red: 0.2, green: 0.4, blue: 0.8 };
    const optionalColor: GoogleAppsScript.Docs.Schema.OptionalColor = { color: { rgbColor } };
    const dimension: GoogleAppsScript.Docs.Schema.Dimension = { magnitude: 72, unit: "PT" };
    const range: GoogleAppsScript.Docs.Schema.Range = {
        startIndex: 1,
        endIndex: 5,
        segmentId: "body",
        tabId: "tab-id",
    };
    const location: GoogleAppsScript.Docs.Schema.Location = { index: 1, segmentId: "body", tabId: "tab-id" };
    const endOfSegmentLocation: GoogleAppsScript.Docs.Schema.EndOfSegmentLocation = {
        segmentId: "body",
        tabId: "tab-id",
    };
    const tabsCriteria: GoogleAppsScript.Docs.Schema.TabsCriteria = { tabIds: ["tab-id"] };
    const tabProperties: GoogleAppsScript.Docs.Schema.TabProperties = {
        iconEmoji: "📄",
        index: 0,
        nestingLevel: 0,
        parentTabId: "parent-tab-id",
        tabId: "tab-id",
        title: "Main",
    };
    const tableCellLocation: GoogleAppsScript.Docs.Schema.TableCellLocation = {
        tableStartLocation: location,
        rowIndex: 0,
        columnIndex: 0,
    };
    const textStyle: GoogleAppsScript.Docs.Schema.TextStyle = {
        backgroundColor: optionalColor,
        baselineOffset: "SUPERSCRIPT",
        bold: true,
        fontSize: dimension,
        foregroundColor: optionalColor,
        italic: true,
        link: {
            url: "https://example.com",
            bookmarkId: "bookmark",
            headingId: "heading",
            bookmark: { id: "bookmark", tabId: "tab-id" },
            heading: { id: "heading", tabId: "tab-id" },
            tabId: "tab-id",
        },
        smallCaps: true,
        strikethrough: true,
        underline: true,
        weightedFontFamily: { fontFamily: "Arial", weight: 400 },
    };
    const paragraphStyle: GoogleAppsScript.Docs.Schema.ParagraphStyle = {
        alignment: "START",
        avoidWidowAndOrphan: true,
        borderBottom: { color: optionalColor, dashStyle: "SOLID", padding: dimension, width: dimension },
        direction: "LEFT_TO_RIGHT",
        headingId: "heading",
        indentEnd: dimension,
        indentFirstLine: dimension,
        indentStart: dimension,
        keepLinesTogether: true,
        keepWithNext: true,
        lineSpacing: 115,
        namedStyleType: "HEADING_1",
        pageBreakBefore: true,
        shading: { backgroundColor: optionalColor },
        spaceAbove: dimension,
        spaceBelow: dimension,
        spacingMode: "COLLAPSE_LISTS",
        tabStops: [{ alignment: "START", offset: dimension }],
    };
    const textRun: GoogleAppsScript.Docs.Schema.TextRun = { content: "Hello, Docs!", textStyle };
    const paragraphElement: GoogleAppsScript.Docs.Schema.ParagraphElement = {
        startIndex: 1,
        endIndex: 12,
        textRun,
        inlineObjectElement: { inlineObjectId: "object-id" },
        pageBreak: { suggestedDeletionIds: ["deletion"], textStyle },
        horizontalRule: { suggestedDeletionIds: ["deletion"], textStyle },
        autoText: { type: "PAGE_NUMBER", suggestedTextStyleChanges: {}, textStyle },
        columnBreak: { suggestedDeletionIds: ["deletion"], textStyle },
        equation: { suggestedDeletionIds: ["deletion"] },
        footnoteReference: { footnoteId: "footnote", textStyle },
        dateElement: {
            dateId: "date-id",
            dateElementProperties: {
                dateFormat: "DATE_FORMAT_ISO8601",
                displayText: "2026-11-07",
                locale: "en",
                timeFormat: "TIME_FORMAT_DISABLED",
                timestamp: "1762473600",
                timeZoneId: "UTC",
            },
        },
        dropdown: {
            dropdownId: "dropdown-id",
            dropdownProperties: {
                displayValue: "Open",
                dropdownDefinitionId: "definition-id",
                selectedOptionId: "option-id",
            },
        },
        person: { personId: "person-id", personProperties: { email: "person@example.com", name: "Person" } },
        richLink: {
            richLinkId: "rich-link-id",
            richLinkProperties: { mimeType: "text/plain", title: "Example", uri: "https://example.com" },
        },
    };
    const paragraph: GoogleAppsScript.Docs.Schema.Paragraph = {
        elements: [paragraphElement],
        paragraphStyle,
        bullet: { listId: "list-id", nestingLevel: 0, textStyle },
        positionedObjectIds: ["positioned-object"],
    };
    const tableCell: GoogleAppsScript.Docs.Schema.TableCell = {
        startIndex: 13,
        endIndex: 18,
        content: [{ startIndex: 13, endIndex: 18, paragraph }],
        tableCellStyle: {
            backgroundColor: optionalColor,
            borderBottom: { color: optionalColor, dashStyle: "SOLID", width: dimension },
            borderLeft: { color: optionalColor, dashStyle: "SOLID", width: dimension },
            borderRight: { color: optionalColor, dashStyle: "SOLID", width: dimension },
            borderTop: { color: optionalColor, dashStyle: "SOLID", width: dimension },
            columnSpan: 1,
            contentAlignment: "MIDDLE",
            paddingBottom: dimension,
            paddingLeft: dimension,
            paddingRight: dimension,
            paddingTop: dimension,
            rowSpan: 1,
        },
    };
    const table: GoogleAppsScript.Docs.Schema.Table = {
        rows: 1,
        columns: 1,
        tableStyle: { tableColumnProperties: [{ widthType: "FIXED_WIDTH", width: dimension }] },
        tableRows: [{
            startIndex: 13,
            endIndex: 18,
            tableCells: [tableCell],
            tableRowStyle: { minRowHeight: dimension, preventOverflow: true, tableHeader: true },
        }],
    };
    const sectionStyle: GoogleAppsScript.Docs.Schema.SectionStyle = {
        contentDirection: "LEFT_TO_RIGHT",
        columnSeparatorStyle: "NONE",
        columnProperties: [{ paddingEnd: dimension, width: dimension }],
        sectionType: "CONTINUOUS",
        defaultFooterId: "footer",
        defaultHeaderId: "header",
        evenPageFooterId: "even-footer",
        evenPageHeaderId: "even-header",
        firstPageFooterId: "first-footer",
        firstPageHeaderId: "first-header",
        flipPageOrientation: true,
        marginBottom: dimension,
        marginFooter: dimension,
        marginHeader: dimension,
        marginLeft: dimension,
        marginRight: dimension,
        marginTop: dimension,
        pageNumberStart: 1,
        useFirstPageHeaderFooter: true,
    };
    const sectionBreak: GoogleAppsScript.Docs.Schema.SectionBreak = { sectionStyle };
    const body: GoogleAppsScript.Docs.Schema.Body = {
        content: [
            { startIndex: 0, endIndex: 12, paragraph },
            { startIndex: 12, endIndex: 18, table },
            { startIndex: 18, endIndex: 18, sectionBreak },
            {
                startIndex: 18,
                endIndex: 18,
                tableOfContents: { content: [{ startIndex: 18, endIndex: 18, paragraph }] },
            },
        ],
    };
    const documentStyle: GoogleAppsScript.Docs.Schema.DocumentStyle = {
        background: { color: optionalColor },
        defaultFooterId: "footer",
        defaultHeaderId: "header",
        firstPageFooterId: "first-footer",
        firstPageHeaderId: "first-header",
        marginBottom: dimension,
        marginLeft: dimension,
        marginRight: dimension,
        marginTop: dimension,
        pageNumberStart: 1,
        pageSize: { width: dimension, height: dimension },
        useEvenPageHeaderFooter: true,
        useFirstPageHeaderFooter: true,
        documentFormat: { documentMode: "PAGES" },
        flipPageOrientation: true,
        marginFooter: dimension,
        marginHeader: dimension,
        useCustomHeaderFooterMargins: true,
    };
    const namedStyle: GoogleAppsScript.Docs.Schema.NamedStyle = {
        namedStyleType: "NORMAL_TEXT",
        paragraphStyle,
        textStyle,
    };
    const namedStyles: GoogleAppsScript.Docs.Schema.NamedStyles = { styles: [namedStyle] };
    const documentTab: GoogleAppsScript.Docs.Schema.DocumentTab = {
        body,
        documentStyle,
        namedStyles,
    };
    const tab: GoogleAppsScript.Docs.Schema.Tab = { tabProperties, documentTab, childTabs: [] };
    const suggestionThread: GoogleAppsScript.Docs.Schema.SuggestionThread = {
        suggestionId: "suggestion-id",
        status: "OPEN",
        summaryText: "Suggested change",
        summaryHtml: "<b>Suggested change</b>",
        headPost: {
            postId: "post-id",
            author: { displayName: "Person", user: "person@example.com", me: false, anonymous: false },
            content: "Change this text",
            contentHtml: "<b>Change this text</b>",
            createTime: "2026-11-07T00:00:00Z",
            updateTime: "2026-11-07T00:00:00Z",
            deleted: false,
            commentAction: "RESOLVE",
            suggestionAction: "ACCEPT",
        },
        replies: [],
    };
    const document: GoogleAppsScript.Docs.Schema.Document = {
        title: "title",
        body,
        documentId: "document-id",
        documentStyle,
        revisionId: "revision-id",
        namedStyles,
        suggestionsViewMode: "PREVIEW_SUGGESTIONS_ACCEPTED",
        footers: {},
        footnotes: {},
        headers: {},
        inlineObjects: {},
        lists: {},
        namedRanges: {},
        positionedObjects: {},
        comments: [{
            commentId: "comment-id",
            status: "OPEN",
            anchorId: "anchor-id",
            plainTextQuote: "Quoted text",
            headPost: {
                postId: "post-id",
                content: "Comment",
                author: { displayName: "Person", user: "person@example.com" },
            },
            replies: [],
        }],
        commentsViewMode: "COMMENTS_VIEW_MODE_INCLUDED",
        suggestions: [suggestionThread],
        tabs: [tab],
        suggestedDocumentStyleChanges: {},
        suggestedNamedStylesChanges: {},
    };

    const tableRange: GoogleAppsScript.Docs.Schema.TableRange = { tableCellLocation, rowSpan: 1, columnSpan: 2 };
    const dropdownDefinition: GoogleAppsScript.Docs.Schema.DropdownDefinition = {
        dropdownDefinitionId: "definition-id",
        dropdownDefinitionProperties: {
            title: "Status",
            options: [{ optionId: "option-id", displayValue: "Open", textStyle }],
        },
    };
    const requests: GoogleAppsScript.Docs.Schema.Request[] = [
        { acceptSuggestion: { suggestionId: "suggestion-id" } },
        { rejectSuggestion: { suggestionId: "suggestion-id" } },
        { deleteSuggestion: { suggestionId: "suggestion-id" } },
        { addCommentReply: { commentId: "comment-id", suggestionId: "suggestion-id", post: { content: "Reply" } } },
        {
            updateCommentPost: {
                commentId: "comment-id",
                postId: "post-id",
                suggestionId: "suggestion-id",
                content: "Updated",
            },
        },
        { deleteCommentReply: { commentId: "comment-id", postId: "post-id", suggestionId: "suggestion-id" } },
        { deleteComment: { commentId: "comment-id" } },
        { insertComment: { content: "Review this", assigneeEmailAddress: "person@example.com", range } },
        { addDocumentTab: { tabProperties } },
        { deleteTab: { tabId: "tab-id" } },
        { updateDocumentTabProperties: { fields: "title,index", tabProperties } },
        { createDropdownDefinition: { dropdownDefinition, tabId: "tab-id" } },
        { deleteDropdownDefinition: { dropdownDefinitionId: "definition-id", tabId: "tab-id" } },
        {
            updateDropdownDefinitionProperties: {
                dropdownDefinitionId: "definition-id",
                dropdownDefinitionProperties: dropdownDefinition.dropdownDefinitionProperties,
                fields: "title,options",
                selectedOptionIdReplacements: { old: "option-id" },
                tabId: "tab-id",
            },
        },
        {
            insertDropdown: {
                dropdownDefinitionId: "definition-id",
                selectedOptionId: "option-id",
                location,
                endOfSegmentLocation,
            },
        },
        {
            updateDropdownProperties: {
                dropdownId: "dropdown-id",
                dropdownProperties: {
                    displayValue: "Open",
                    dropdownDefinitionId: "definition-id",
                    selectedOptionId: "option-id",
                },
                fields: "selectedOptionId",
                tabId: "tab-id",
            },
        },
        { createFooter: { sectionBreakLocation: location, type: "DEFAULT" } },
        { createHeader: { sectionBreakLocation: location, type: "DEFAULT" } },
        { createFootnote: { location, endOfSegmentLocation } },
        { deleteFooter: { footerId: "footer-id", tabId: "tab-id" } },
        { deleteHeader: { headerId: "header-id", tabId: "tab-id" } },
        {
            insertDate: {
                location,
                endOfSegmentLocation,
                dateElementProperties: {
                    dateFormat: "DATE_FORMAT_ISO8601",
                    displayText: "2026-11-07",
                    locale: "en",
                    timeFormat: "TIME_FORMAT_DISABLED",
                    timestamp: "1762473600",
                    timeZoneId: "UTC",
                },
            },
        },
        {
            insertPerson: {
                location,
                endOfSegmentLocation,
                personProperties: { email: "person@example.com", name: "Person" },
            },
        },
        {
            insertRichLink: {
                location,
                endOfSegmentLocation,
                richLinkProperties: { mimeType: "text/plain", title: "Example", uri: "https://example.com" },
            },
        },
        { insertSectionBreak: { location, endOfSegmentLocation, sectionType: "NEXT_PAGE" } },
        { insertTableColumn: { tableCellLocation, insertRight: true } },
        { mergeTableCells: { tableRange } },
        { unmergeTableCells: { tableRange } },
        { pinTableHeaderRows: { tableStartLocation: location, pinnedHeaderRowsCount: 1 } },
        {
            replaceImage: {
                imageObjectId: "image-id",
                imageReplaceMethod: "CENTER_CROP",
                uri: "https://example.com/image.png",
                tabId: "tab-id",
            },
        },
        {
            replaceNamedRangeContent: {
                namedRangeId: "named-range-id",
                namedRangeName: "named-range",
                tabsCriteria,
                text: "replacement",
            },
        },
        { updateDocumentStyle: { documentStyle, fields: "marginTop,documentFormat", tabId: "tab-id" } },
        { updateNamedStyle: { fields: "paragraphStyle,textStyle", namedStyle, tabId: "tab-id" } },
        { updateSectionStyle: { fields: "sectionType,marginTop", range, sectionStyle } },
        {
            updateTableCellStyle: {
                fields: "backgroundColor",
                tableCellStyle: tableCell.tableCellStyle,
                tableRange,
                tableStartLocation: location,
            },
        },
        {
            updateTableColumnProperties: {
                columnIndices: [0, 1],
                fields: "width,widthType",
                tableColumnProperties: { width: dimension, widthType: "FIXED_WIDTH" },
                tableStartLocation: location,
            },
        },
        {
            updateTableRowStyle: {
                rowIndices: [0],
                fields: "minRowHeight,tableHeader,preventOverflow",
                tableRowStyle: { minRowHeight: dimension, preventOverflow: true, tableHeader: true },
                tableStartLocation: location,
            },
        },
        { createNamedRange: { name: "named-range", range } },
        { createParagraphBullets: { range, bulletPreset: "BULLET_DISC_CIRCLE_SQUARE" } },
        { deleteContentRange: { range } },
        { deleteNamedRange: { name: "named-range", namedRangeId: "named-range-id", tabsCriteria } },
        { deleteParagraphBullets: { range } },
        { deletePositionedObject: { objectId: "positioned-object", tabId: "tab-id" } },
        { deleteTableColumn: { tableCellLocation } },
        { deleteTableRow: { tableCellLocation } },
        {
            insertInlineImage: {
                uri: "https://example.com/image.png",
                location,
                endOfSegmentLocation,
                objectSize: { width: dimension, height: dimension },
            },
        },
        { insertPageBreak: { location, endOfSegmentLocation } },
        { insertTable: { rows: 2, columns: 3, location, endOfSegmentLocation } },
        { insertTableRow: { tableCellLocation, insertBelow: true } },
        { insertText: { text: "inserted text", location, endOfSegmentLocation } },
        {
            replaceAllText: {
                containsText: { text: "old", matchCase: true, searchByRegex: true },
                replaceText: "new",
                tabsCriteria,
            },
        },
        { updateParagraphStyle: { range, fields: "alignment,namedStyleType", paragraphStyle } },
        { updateTextStyle: { range, fields: "bold,foregroundColor", textStyle } },
    ];
    const batchRequest: GoogleAppsScript.Docs.Schema.BatchUpdateDocumentRequest = {
        requests,
        writeControl: { requiredRevisionId: "revision-id", targetRevisionId: "target-revision-id" },
    };
    const batchResponse: GoogleAppsScript.Docs.Schema.BatchUpdateDocumentResponse = {
        documentId: "document-id",
        commentUpdateState: "ALL_SAVED",
        suggestionResponses: [{
            acceptedSuggestionIds: ["suggestion-id"],
            createdSuggestionIds: ["new-suggestion-id"],
            deletedSuggestionIds: ["deleted-suggestion-id"],
            rejectedSuggestionIds: ["rejected-suggestion-id"],
            updatedSummarySuggestionIds: ["updated-suggestion-id"],
        }],
        writeControl: { requiredRevisionId: "revision-id", targetRevisionId: "target-revision-id" },
        replies: [{
            createNamedRange: { namedRangeId: "named-range-id" },
            insertInlineImage: { objectId: "inline-object-id" },
            insertInlineSheetsChart: { objectId: "chart-object-id" },
            replaceAllText: { occurrencesChanged: 3 },
            addCommentReply: { post: { postId: "post-id", content: "Reply" } },
            addDocumentTab: { tabProperties },
            createDropdownDefinition: { dropdownDefinition },
            createFooter: { footerId: "footer-id" },
            createFootnote: { footnoteId: "footnote-id" },
            createHeader: { headerId: "header-id" },
            insertComment: { commentThread: { commentId: "comment-id", status: "OPEN", plainTextQuote: "text" } },
            insertDropdown: {
                dropdown: {
                    dropdownId: "dropdown-id",
                    dropdownProperties: {
                        dropdownDefinitionId: "definition-id",
                        selectedOptionId: "option-id",
                        displayValue: "Open",
                    },
                },
            },
        }],
    };

    // $ExpectType Document
    const create = documents.create(document);
    // $ExpectType Document
    const get = documents.get("document-id");
    // $ExpectType Document
    const getWithOptions = documents.get("document-id", {
        commentsViewMode: "COMMENTS_VIEW_MODE_INCLUDED",
        includeTabsContent: true,
        suggestionsViewMode: "PREVIEW_SUGGESTIONS_ACCEPTED",
    });
    // $ExpectType BatchUpdateDocumentResponse
    const batchUpdate = documents.batchUpdate(batchRequest, "document-id");

    // $ExpectType Document
    const newDocument = docs.newDocument();
    // $ExpectType BatchUpdateDocumentRequest
    const newBatchUpdateRequest = docs.newBatchUpdateDocumentRequest();
    // $ExpectType Request
    const newRequest = docs.newRequest();
    // $ExpectType Paragraph
    const newParagraph = docs.newParagraph();
    // $ExpectType Table
    const newTable = docs.newTable();
    // $ExpectType TextStyle
    const newTextStyle = docs.newTextStyle();
}

function testDriveActivity() {
    if (!DriveActivity) return;
    // $ExpectType DriveActivity
    const driveactivity = DriveActivity;
    // $ExpectType ActivityCollection
    const activity = driveactivity.Activity;

    // $ExpectType ConsolidationStrategy
    const consolidationStrategy = driveactivity.newConsolidationStrategy();
    // $ExpectType Legacy
    const legacy = driveactivity.newLegacy();
    // $ExpectType NoConsolidation
    const noConsolidation = driveactivity.newNoConsolidation();
    // $ExpectType QueryDriveActivityRequest
    const request = driveactivity.newQueryDriveActivityRequest();

    const administrator: GoogleAppsScript.DriveActivity.Schema.Administrator = {};
    const anonymousUser: GoogleAppsScript.DriveActivity.Schema.AnonymousUser = {};
    const anyone: GoogleAppsScript.DriveActivity.Schema.Anyone = {};
    const deletedUser: GoogleAppsScript.DriveActivity.Schema.DeletedUser = {};
    const unknownUser: GoogleAppsScript.DriveActivity.Schema.UnknownUser = {};
    const driveFile: GoogleAppsScript.DriveActivity.Schema.DriveFile = {};
    const driveFolder: GoogleAppsScript.DriveActivity.Schema.DriveFolder = { type: "SHARED_DRIVE_ROOT" };
    const file: GoogleAppsScript.DriveActivity.Schema.File = {};
    const folder: GoogleAppsScript.DriveActivity.Schema.Folder = { type: "STANDARD_FOLDER" };
    const edit: GoogleAppsScript.DriveActivity.Schema.Edit = {};
    const newAction: GoogleAppsScript.DriveActivity.Schema.New = {};
    const upload: GoogleAppsScript.DriveActivity.Schema.Upload = {};

    const targetReference: GoogleAppsScript.DriveActivity.Schema.TargetReference = {
        drive: { name: "drives/123", title: "Shared Drive" },
        driveItem: {
            driveFile,
            driveFolder,
            file,
            folder,
            name: "items/123",
            title: "Document",
        },
        teamDrive: { name: "teamDrives/123", title: "Team Drive" },
    };

    const fieldValue: GoogleAppsScript.DriveActivity.Schema.FieldValue = {
        date: { value: "2024-01-01" },
        integer: { value: "42" },
        selection: { displayName: "Approved", value: "approved" },
        selectionList: { values: [{ displayName: "Approved", value: "approved" }] },
        text: { value: "Text" },
        textList: { values: [{ value: "One" }, { value: "Two" }] },
        user: { value: "people/123" },
        userList: { values: [{ value: "people/123" }, { value: "people/456" }] },
    };

    const labelChange: GoogleAppsScript.DriveActivity.Schema.AppliedLabelChange = {
        changes: [{
            fieldChanges: [{
                displayName: "Status",
                fieldId: "status",
                newValue: fieldValue,
                oldValue: { text: { value: "Draft" } },
            }],
            label: "labels/123",
            title: "Approval status",
            types: ["LABEL_ADDED", "LABEL_FIELD_VALUE_CHANGED"],
        }],
    };

    const activityDetail: GoogleAppsScript.DriveActivity.Schema.ActionDetail = {
        appliedLabelChange: labelChange,
        comment: {
            assignment: {
                assignedUser: { knownUser: { personName: "people/456" } },
                subtype: "REASSIGNED",
            },
            mentionedUsers: [{ knownUser: { isCurrentUser: true, personName: "people/123" } }],
            post: { subtype: "REPLY_ADDED" },
            suggestion: { subtype: "ACCEPTED" },
        },
        create: { copy: { originalObject: targetReference }, new: newAction, upload },
        delete: { type: "PERMANENT_DELETE" },
        dlpChange: { type: "FLAGGED" },
        edit,
        move: { addedParents: [targetReference], removedParents: [targetReference] },
        permissionChange: {
            addedPermissions: [{
                allowDiscovery: true,
                anyone,
                domain: { name: "example.com" },
                group: { email: "group@example.com", title: "Editors" },
                role: "EDITOR",
                user: { knownUser: { personName: "people/456" } },
            }],
            removedPermissions: [{ role: "VIEWER", user: { unknownUser } }],
        },
        reference: { type: "LINK" },
        rename: { newTitle: "New title", oldTitle: "Old title" },
        restore: { type: "UNTRASH" },
        settingsChange: {
            restrictionChanges: [{
                feature: "SHARING_OUTSIDE_DOMAIN",
                newRestriction: "FULLY_RESTRICTED",
            }],
        },
    };

    const driveItem: GoogleAppsScript.DriveActivity.Schema.DriveItem = {
        driveFile,
        driveFolder,
        file,
        folder,
        mimeType: "application/vnd.google-apps.document",
        name: "items/123",
        owner: {
            domain: { legacyId: "123456789", name: "example.com" },
            drive: { name: "drives/123", title: "Shared Drive" },
            teamDrive: { name: "teamDrives/123", title: "Team Drive" },
            user: { knownUser: { isCurrentUser: true, personName: "people/123" } },
        },
        title: "Document",
    };

    const activityItem: GoogleAppsScript.DriveActivity.Schema.DriveActivity = {
        actions: [{
            actor: {
                administrator,
                anonymous: anonymousUser,
                impersonation: { impersonatedUser: { knownUser: { personName: "people/789" } } },
                system: { type: "USER_DELETION" },
                user: { deletedUser, knownUser: { isCurrentUser: false, personName: "people/123" }, unknownUser },
            },
            detail: activityDetail,
            target: {
                drive: { name: "drives/123", root: driveItem, title: "Shared Drive" },
                driveItem,
                fileComment: {
                    legacyCommentId: "comment-1",
                    legacyDiscussionId: "discussion-1",
                    linkToDiscussion: "https://example.com/discussion/comment-1",
                    parent: driveItem,
                },
                teamDrive: { name: "teamDrives/123", root: driveItem, title: "Team Drive" },
            },
            timeRange: { endTime: "2024-01-02T00:00:00Z", startTime: "2024-01-01T00:00:00Z" },
            timestamp: "2024-01-01T12:00:00Z",
        }],
        actors: [{ user: { knownUser: { isCurrentUser: true, personName: "people/123" } } }],
        primaryActionDetail: activityDetail,
        targets: [{ driveItem, drive: { name: "drives/123", title: "Shared Drive" } }],
        timeRange: { endTime: "2024-01-02T00:00:00Z", startTime: "2024-01-01T00:00:00Z" },
        timestamp: "2024-01-01T12:00:00Z",
    };

    const response: GoogleAppsScript.DriveActivity.Schema.QueryDriveActivityResponse = {
        activities: [activityItem],
        nextPageToken: "next-page",
    };

    const legacyRequest: GoogleAppsScript.DriveActivity.Schema.QueryDriveActivityRequest = {
        ancestorName: "items/root",
        consolidationStrategy: { legacy },
        filter: "time > 1704067200000",
        itemName: "items/123",
        pageSize: 100,
        pageToken: "page-token",
    };
    // $ExpectType QueryDriveActivityResponse
    const legacyQuery = activity.query(legacyRequest);

    const noneRequest: GoogleAppsScript.DriveActivity.Schema.QueryDriveActivityRequest = {
        consolidationStrategy: { none: noConsolidation },
        filter: "detail.action_detail_case:EDIT",
        itemName: "items/456",
        pageSize: 25,
    };
    // $ExpectType QueryDriveActivityResponse
    const noneQuery = activity.query(noneRequest);

    // $ExpectType QueryDriveActivityResponse
    const emptyRequestQuery = activity.query({ consolidationStrategy: { legacy: {} } });
}

function testAdminGroupsMigration() {
    if (!AdminGroupsMigration) return;
    // $ExpectType AdminGroupsMigration
    const adminGroupsMigration = AdminGroupsMigration;
    // $ExpectType ArchiveCollection
    const archive = adminGroupsMigration.Archive;
    // $ExpectType Groups
    const insert = archive.insert("groupId");
}

function testAdminGroupsSettings() {
    if (!AdminGroupsSettings) return;
    // $ExpectType AdminGroupsSettings
    const adminGroupsSettings = AdminGroupsSettings;
    // $ExpectType GroupsCollection
    const groups = adminGroupsSettings.Groups;
    // $ExpectType Groups
    const get = groups.get("groupUniqueId");
}

function testAdminLicenseManager() {
    if (!AdminLicenseManager) return;
    // $ExpectType AdminLicenseManager
    const adminLicenseManager = AdminLicenseManager;
    // $ExpectType LicenseAssignmentsCollection
    const licenseAssignments = adminLicenseManager.LicenseAssignments;
    // $ExpectType LicenseAssignmentList
    const list = licenseAssignments.listForProduct("productId", "customerId");
}

function testPeopleApi() {
    if (!People) return;
    // $ExpectType People
    const people = People;

    // $ExpectType Address
    const address = people.newAddress();
    // $ExpectType BatchCreateContactsRequest
    const batchCreateRequest = people.newBatchCreateContactsRequest();
    // $ExpectType BatchDeleteContactsRequest
    const batchDeleteRequest = people.newBatchDeleteContactsRequest();
    // $ExpectType BatchUpdateContactsRequest
    const batchUpdateRequest = people.newBatchUpdateContactsRequest();
    // $ExpectType ContactGroup
    const contactGroup = people.newContactGroup();
    // $ExpectType CreateContactGroupRequest
    const createContactGroupRequest = people.newCreateContactGroupRequest();
    // $ExpectType ModifyContactGroupMembersRequest
    const modifyMembersRequest = people.newModifyContactGroupMembersRequest();
    // $ExpectType Person
    const person = people.newPerson();
    // $ExpectType UpdateContactGroupRequest
    const updateContactGroupRequest = people.newUpdateContactGroupRequest();
    // $ExpectType UpdateContactPhotoRequest
    const updatePhotoRequest = people.newUpdateContactPhotoRequest();

    const fieldMetadata: GoogleAppsScript.People.Schema.FieldMetadata = {
        primary: true,
        source: { etag: "etag", id: "source-id", type: "CONTACT", updateTime: "2024-01-01T00:00:00Z" },
        verified: true,
    };
    const personFixture: GoogleAppsScript.People.Schema.Person = {
        addresses: [{
            city: "Hong Kong",
            country: "Hong Kong",
            countryCode: "HK",
            formattedValue: "Hong Kong",
            metadata: fieldMetadata,
            postalCode: "00000",
            region: "HK",
            streetAddress: "1 Example Street",
            type: "home",
        }],
        ageRanges: [{ ageRange: "EIGHTEEN_TO_TWENTY", metadata: fieldMetadata }],
        biographies: [{ contentType: "TEXT_PLAIN", metadata: fieldMetadata, value: "Developer" }],
        birthdays: [{ date: { day: 1, month: 1, year: 1990 }, metadata: fieldMetadata, text: "January 1" }],
        emailAddresses: [{
            displayName: "Example User",
            metadata: fieldMetadata,
            type: "work",
            value: "user@example.com",
        }],
        etag: "person-etag",
        names: [{
            displayName: "Example User",
            familyName: "User",
            givenName: "Example",
            metadata: fieldMetadata,
            middleName: "Test",
        }],
        phoneNumbers: [{
            canonicalForm: "+85200000000",
            formattedType: "Mobile",
            metadata: fieldMetadata,
            type: "mobile",
            value: "+852 0000 0000",
        }],
        photos: [{ default: false, metadata: fieldMetadata, url: "https://example.com/photo.jpg" }],
        resourceName: "people/123",
        skills: [{ metadata: fieldMetadata, value: "TypeScript" }],
    };
    const contactGroupFixture: GoogleAppsScript.People.Schema.ContactGroup = {
        etag: "group-etag",
        formattedName: "Friends",
        groupType: "USER_CONTACT_GROUP",
        memberCount: 1,
        memberResourceNames: ["people/123"],
        metadata: { deleted: false, updateTime: "2024-01-01T00:00:00Z" },
        name: "Friends",
        resourceName: "contactGroups/friends",
    };

    // $ExpectType ContactGroupsCollection
    const contactGroups = people.ContactGroups;
    // $ExpectType MembersCollection
    const contactGroupMembers = contactGroups.Members;
    // $ExpectType ModifyContactGroupMembersResponse
    const modifyMembers = contactGroupMembers.modify({
        resourceNamesToAdd: ["people/123"],
        resourceNamesToRemove: ["people/456"],
    }, "contactGroups/friends");
    // $ExpectType BatchGetContactGroupsResponse
    const batchGetContactGroups = contactGroups.batchGet();
    // $ExpectType BatchGetContactGroupsResponse
    const batchGetContactGroupsWithArgs = contactGroups.batchGet({
        resourceNames: ["contactGroups/friends"],
        maxMembers: 100,
        groupFields: "name,memberCount",
    });
    // $ExpectType ContactGroup
    const createContactGroup = contactGroups.create({ contactGroup: contactGroupFixture });
    // $ExpectType ContactGroup
    const getContactGroup = contactGroups.get("contactGroups/friends");
    // $ExpectType ContactGroup
    const getContactGroupWithArgs = contactGroups.get("contactGroups/friends", { maxMembers: 100 });
    // $ExpectType ListContactGroupsResponse
    const listContactGroups = contactGroups.list();
    // $ExpectType ListContactGroupsResponse
    const listContactGroupsWithArgs = contactGroups.list({
        pageSize: 100,
        pageToken: "page-token",
        syncToken: "sync-token",
    });
    // $ExpectType Empty
    const removeContactGroup = contactGroups.remove("contactGroups/friends");
    // $ExpectType Empty
    const removeContactGroupWithArgs = contactGroups.remove("contactGroups/friends", { deleteContacts: false });
    // $ExpectType ContactGroup
    const updateContactGroup = contactGroups.update({
        contactGroup: contactGroupFixture,
    }, "contactGroups/friends");

    // $ExpectType OtherContactsCollection
    const otherContacts = people.OtherContacts;
    // $ExpectType Person
    const copyOtherContact = otherContacts.copyOtherContactToMyContactsGroup({
        copyMask: "names,emailAddresses",
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    }, "otherContacts/123");
    // $ExpectType ListOtherContactsResponse
    const listOtherContacts = otherContacts.list();
    // $ExpectType ListOtherContactsResponse
    const listOtherContactsWithArgs = otherContacts.list({
        pageSize: 100,
        pageToken: "page-token",
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType SearchResponse
    const searchOtherContacts = otherContacts.search();
    // $ExpectType SearchResponse
    const searchOtherContactsWithArgs = otherContacts.search({
        pageSize: 100,
        query: "Example",
        readMask: "names,emailAddresses",
    });

    // $ExpectType PeopleCollection
    const peopleCollection = people.People;
    // $ExpectType ConnectionsCollection
    const connections = peopleCollection.Connections;
    // $ExpectType ListConnectionsResponse
    const listConnections = connections.list("people/me");
    // $ExpectType ListConnectionsResponse
    const listConnectionsWithArgs = connections.list("people/me", {
        pageSize: 100,
        pageToken: "page-token",
        personFields: "names,emailAddresses",
        "requestMask.includeField": "personNames,emailAddresses",
        requestSyncToken: true,
        sortOrder: "FIRST_NAME_ASCENDING",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
        syncToken: "sync-token",
    });

    // $ExpectType BatchCreateContactsResponse
    const batchCreateContacts = peopleCollection.batchCreateContacts({
        contacts: [{ contactPerson: personFixture }],
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType Empty
    const batchDeleteContacts = peopleCollection.batchDeleteContacts({
        resourceNames: ["people/123", "people/456"],
    });
    // $ExpectType BatchUpdateContactsResponse
    const batchUpdateContacts = peopleCollection.batchUpdateContacts({
        contacts: { "people/123": personFixture },
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
        updateMask: "names,emailAddresses",
    });
    // $ExpectType Person
    const createContact = peopleCollection.createContact(personFixture);
    // $ExpectType Person
    const createContactWithArgs = peopleCollection.createContact(personFixture, {
        personFields: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType Empty
    const deleteContact = peopleCollection.deleteContact("people/123");
    // $ExpectType DeleteContactPhotoResponse
    const deleteContactPhoto = peopleCollection.deleteContactPhoto("people/123");
    // $ExpectType DeleteContactPhotoResponse
    const deleteContactPhotoWithArgs = peopleCollection.deleteContactPhoto("people/123", {
        personFields: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType Person
    const getPerson = peopleCollection.get("people/123");
    // $ExpectType Person
    const getPersonWithArgs = peopleCollection.get("people/123", {
        personFields: "names,emailAddresses",
        "requestMask.includeField": "personNames,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType GetPeopleResponse
    const getBatchPeople = peopleCollection.getBatchGet();
    // $ExpectType GetPeopleResponse
    const getBatchPeopleWithArgs = peopleCollection.getBatchGet({
        resourceNames: ["people/123", "people/456"],
        personFields: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType ListDirectoryPeopleResponse
    const listDirectoryPeople = peopleCollection.listDirectoryPeople();
    // $ExpectType ListDirectoryPeopleResponse
    const listDirectoryPeopleWithArgs = peopleCollection.listDirectoryPeople({
        pageSize: 100,
        pageToken: "page-token",
        readMask: "names,emailAddresses",
        mergeSources: ["DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"],
        requestSyncToken: true,
        sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
    });
    // $ExpectType SearchResponse
    const searchContacts = peopleCollection.searchContacts();
    // $ExpectType SearchResponse
    const searchContactsWithArgs = peopleCollection.searchContacts({
        pageSize: 100,
        query: "Example",
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    });
    // $ExpectType SearchDirectoryPeopleResponse
    const searchDirectoryPeople = peopleCollection.searchDirectoryPeople();
    // $ExpectType SearchDirectoryPeopleResponse
    const searchDirectoryPeopleWithArgs = peopleCollection.searchDirectoryPeople({
        mergeSources: ["DIRECTORY_MERGE_SOURCE_TYPE_CONTACT"],
        pageSize: 100,
        pageToken: "page-token",
        query: "Example",
        readMask: "names,emailAddresses",
        sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
    });
    // $ExpectType Person
    const updateContact = peopleCollection.updateContact(personFixture, "people/123");
    // $ExpectType Person
    const updateContactWithArgs = peopleCollection.updateContact(personFixture, "people/123", {
        personFields: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
        updatePersonFields: "names,emailAddresses",
    });
    // $ExpectType UpdateContactPhotoResponse
    const updateContactPhoto = peopleCollection.updateContactPhoto({
        personFields: "names,emailAddresses",
        photoBytes: "base64-photo",
        sources: ["READ_SOURCE_TYPE_CONTACT"],
    }, "people/123");
}

function testAdminReports() {
    if (!AdminReports) return;
    // $ExpectType AdminReports
    const adminReports = AdminReports;
    // $ExpectType ActivitiesCollection
    const activities = adminReports.Activities;
    // $ExpectType Activities
    const list = activities.list("userKey", "applicationName");
}

function testAdminReseller() {
    if (!AdminReseller) return;
    // $ExpectType AdminReseller
    const adminReseller = AdminReseller;
    // $ExpectType CustomersCollection
    const customers = adminReseller.Customers;
    // $ExpectType Customer
    const get = customers.get("customerId");
}

function testTagManager() {
    if (!TagManager) return;
    // $ExpectType TagManager
    const tagManager = TagManager;
    // $ExpectType AccountsCollection
    const accounts = tagManager.Accounts;
    // $ExpectType ListAccountsResponse
    const list = accounts.list();
}

function testYouTubeAnalytics() {
    if (!YouTubeAnalytics) return;
    // $ExpectType YouTubeAnalytics
    const youTubeAnalytics = YouTubeAnalytics;
    // $ExpectType ReportsCollection
    const reports = youTubeAnalytics.Reports;
    // $ExpectType QueryResponse
    const query = reports.query();
}

function testYoutubePartner() {
    if (!YoutubePartner) return;
    // $ExpectType YoutubePartner
    const youtubePartner = YoutubePartner;
    // $ExpectType AssetsCollection
    const assets = youtubePartner.Assets;
    // $ExpectType AssetListResponse
    const list = assets.list("id");
}
