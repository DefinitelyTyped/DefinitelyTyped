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
            dataset: { dataset: { datasetId: "dataset", projectId: "project" }, targetTypes: ["VIEWS"] },
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
        arrowSerializationOptions: { bufferCompression: "ZSTD", picosTimestampPrecision: "PICOS" },
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
    datasets.patch(dataset, "project-id", "dataset-id", { accessPolicyVersion: 3, updateMode: "ACL" });
    datasets.remove("project-id", "dataset-id");
    datasets.remove("project-id", "dataset-id", {});
    datasets.remove("project-id", "dataset-id", { deleteContents: true });
    datasets.undelete({}, "project-id", "dataset-id");
    datasets.undelete({ deletionTime: "deletionTime" }, "project-id", "dataset-id");
    datasets.update(dataset, "project-id", "dataset-id");
    datasets.update(dataset, "project-id", "dataset-id", {});
    datasets.update(dataset, "project-id", "dataset-id", { accessPolicyVersion: 3, updateMode: "METADATA" });

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
        "formatOptions.timestampOutputFormat": " smeared",
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
        projection: "FULL",
        stateFilter: "DONE",
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
        "formatOptions.timestampOutputFormat": " smeared",
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
                        logType: "logType",
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
    // $ExpectType Document
    const create = documents.create({ title: "title" });
}

function testDriveActivity() {
    if (!DriveActivity) return;
    // $ExpectType DriveActivity
    const driveactivity = DriveActivity;
    // $ExpectType ActivityCollection
    const activity = driveactivity.Activity;
    // $ExpectType QueryDriveActivityResponse
    const query = activity.query({ consolidationStrategy: { legacy: {} } });
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
    // $ExpectType PeopleCollection
    const peopleCollection = people.People;
    // $ExpectType ListConnectionsResponse
    const list = peopleCollection.Connections.list("people/me");
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
