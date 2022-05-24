// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace BigQuery {
    namespace Collection {
      interface DatasetsCollection {
        // Returns the dataset specified by datasetID.
        get(projectId: string, datasetId: string): BigQuery.Schema.Dataset;
        // Creates a new empty dataset.
        insert(resource: BigQuery.Schema.Dataset, projectId: string): BigQuery.Schema.Dataset;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string): BigQuery.Schema.DatasetList;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string, optionalArgs: object): BigQuery.Schema.DatasetList;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
        patch(resource: BigQuery.Schema.Dataset, projectId: string, datasetId: string): BigQuery.Schema.Dataset;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string): void;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string, optionalArgs: object): void;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        update(resource: BigQuery.Schema.Dataset, projectId: string, datasetId: string): BigQuery.Schema.Dataset;
      }
      interface JobsCollection {
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string): BigQuery.Schema.JobCancelResponse;
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string, optionalArgs: object): BigQuery.Schema.JobCancelResponse;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string): BigQuery.Schema.Job;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string, optionalArgs: object): BigQuery.Schema.Job;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string): BigQuery.Schema.GetQueryResultsResponse;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string, optionalArgs: object): BigQuery.Schema.GetQueryResultsResponse;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: BigQuery.Schema.Job, projectId: string): BigQuery.Schema.Job;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: BigQuery.Schema.Job, projectId: string, mediaData: any): BigQuery.Schema.Job;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string): BigQuery.Schema.JobList;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string, optionalArgs: object): BigQuery.Schema.JobList;
        // Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
        query(resource: BigQuery.Schema.QueryRequest, projectId: string): BigQuery.Schema.QueryResponse;
      }
      interface ProjectsCollection {
        // Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
        getServiceAccount(projectId: string): BigQuery.Schema.GetServiceAccountResponse;
        // Lists all projects to which you have been granted any project role.
        list(): BigQuery.Schema.ProjectList;
        // Lists all projects to which you have been granted any project role.
        list(optionalArgs: object): BigQuery.Schema.ProjectList;
      }
      interface TabledataCollection {
        // Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
        insertAll(resource: BigQuery.Schema.TableDataInsertAllRequest, projectId: string, datasetId: string, tableId: string): BigQuery.Schema.TableDataInsertAllResponse;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string): BigQuery.Schema.TableDataList;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string, optionalArgs: object): BigQuery.Schema.TableDataList;
      }
      interface TablesCollection {
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string): BigQuery.Schema.Table;
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string, optionalArgs: object): BigQuery.Schema.Table;
        // Creates a new, empty table in the dataset.
        insert(resource: BigQuery.Schema.Table, projectId: string, datasetId: string): BigQuery.Schema.Table;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string): BigQuery.Schema.TableList;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string, optionalArgs: object): BigQuery.Schema.TableList;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
        patch(resource: BigQuery.Schema.Table, projectId: string, datasetId: string, tableId: string): BigQuery.Schema.Table;
        // Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
        remove(projectId: string, datasetId: string, tableId: string): void;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
        update(resource: BigQuery.Schema.Table, projectId: string, datasetId: string, tableId: string): BigQuery.Schema.Table;
      }
    }
    namespace Schema {
      interface BigQueryModelTraining {
        currentIteration?: number | undefined;
        expectedTotalIterations?: string | undefined;
      }
      interface BigtableColumn {
        encoding?: string | undefined;
        fieldName?: string | undefined;
        onlyReadLatest?: boolean | undefined;
        qualifierEncoded?: string | undefined;
        qualifierString?: string | undefined;
        type?: string | undefined;
      }
      interface BigtableColumnFamily {
        columns?: BigQuery.Schema.BigtableColumn[] | undefined;
        encoding?: string | undefined;
        familyId?: string | undefined;
        onlyReadLatest?: boolean | undefined;
        type?: string | undefined;
      }
      interface BigtableOptions {
        columnFamilies?: BigQuery.Schema.BigtableColumnFamily[] | undefined;
        ignoreUnspecifiedColumnFamilies?: boolean | undefined;
        readRowkeyAsString?: boolean | undefined;
      }
      interface BqmlIterationResult {
        durationMs?: string | undefined;
        evalLoss?: number | undefined;
        index?: number | undefined;
        learnRate?: number | undefined;
        trainingLoss?: number | undefined;
      }
      interface BqmlTrainingRun {
        iterationResults?: BigQuery.Schema.BqmlIterationResult[] | undefined;
        startTime?: string | undefined;
        state?: string | undefined;
        trainingOptions?: BigQuery.Schema.BqmlTrainingRunTrainingOptions | undefined;
      }
      interface BqmlTrainingRunTrainingOptions {
        earlyStop?: boolean | undefined;
        l1Reg?: number | undefined;
        l2Reg?: number | undefined;
        learnRate?: number | undefined;
        learnRateStrategy?: string | undefined;
        lineSearchInitLearnRate?: number | undefined;
        maxIteration?: string | undefined;
        minRelProgress?: number | undefined;
        warmStart?: boolean | undefined;
      }
      interface Clustering {
        fields?: string[] | undefined;
      }
      interface CsvOptions {
        allowJaggedRows?: boolean | undefined;
        allowQuotedNewlines?: boolean | undefined;
        encoding?: string | undefined;
        fieldDelimiter?: string | undefined;
        quote?: string | undefined;
        skipLeadingRows?: string | undefined;
      }
      interface Dataset {
        access?: BigQuery.Schema.DatasetAccess[] | undefined;
        creationTime?: string | undefined;
        datasetReference?: BigQuery.Schema.DatasetReference | undefined;
        defaultPartitionExpirationMs?: string | undefined;
        defaultTableExpirationMs?: string | undefined;
        description?: string | undefined;
        etag?: string | undefined;
        friendlyName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        labels?: object | undefined;
        lastModifiedTime?: string | undefined;
        location?: string | undefined;
        selfLink?: string | undefined;
      }
      interface DatasetAccess {
        domain?: string | undefined;
        groupByEmail?: string | undefined;
        iamMember?: string | undefined;
        role?: string | undefined;
        specialGroup?: string | undefined;
        userByEmail?: string | undefined;
        view?: BigQuery.Schema.TableReference | undefined;
      }
      interface DatasetList {
        datasets?: BigQuery.Schema.DatasetListDatasets[] | undefined;
        etag?: string | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface DatasetListDatasets {
        datasetReference?: BigQuery.Schema.DatasetReference | undefined;
        friendlyName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        labels?: object | undefined;
        location?: string | undefined;
      }
      interface DatasetReference {
        datasetId?: string | undefined;
        projectId?: string | undefined;
      }
      interface DestinationTableProperties {
        description?: string | undefined;
        friendlyName?: string | undefined;
        labels?: object | undefined;
      }
      interface EncryptionConfiguration {
        kmsKeyName?: string | undefined;
      }
      interface ErrorProto {
        debugInfo?: string | undefined;
        location?: string | undefined;
        message?: string | undefined;
        reason?: string | undefined;
      }
      interface ExplainQueryStage {
        completedParallelInputs?: string | undefined;
        computeMsAvg?: string | undefined;
        computeMsMax?: string | undefined;
        computeRatioAvg?: number | undefined;
        computeRatioMax?: number | undefined;
        endMs?: string | undefined;
        id?: string | undefined;
        inputStages?: string[] | undefined;
        name?: string | undefined;
        parallelInputs?: string | undefined;
        readMsAvg?: string | undefined;
        readMsMax?: string | undefined;
        readRatioAvg?: number | undefined;
        readRatioMax?: number | undefined;
        recordsRead?: string | undefined;
        recordsWritten?: string | undefined;
        shuffleOutputBytes?: string | undefined;
        shuffleOutputBytesSpilled?: string | undefined;
        startMs?: string | undefined;
        status?: string | undefined;
        steps?: BigQuery.Schema.ExplainQueryStep[] | undefined;
        waitMsAvg?: string | undefined;
        waitMsMax?: string | undefined;
        waitRatioAvg?: number | undefined;
        waitRatioMax?: number | undefined;
        writeMsAvg?: string | undefined;
        writeMsMax?: string | undefined;
        writeRatioAvg?: number | undefined;
        writeRatioMax?: number | undefined;
      }
      interface ExplainQueryStep {
        kind?: string | undefined;
        substeps?: string[] | undefined;
      }
      interface ExternalDataConfiguration {
        autodetect?: boolean | undefined;
        bigtableOptions?: BigQuery.Schema.BigtableOptions | undefined;
        compression?: string | undefined;
        csvOptions?: BigQuery.Schema.CsvOptions | undefined;
        googleSheetsOptions?: BigQuery.Schema.GoogleSheetsOptions | undefined;
        hivePartitioningMode?: string | undefined;
        ignoreUnknownValues?: boolean | undefined;
        maxBadRecords?: number | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        sourceFormat?: string | undefined;
        sourceUris?: string[] | undefined;
      }
      interface GetQueryResultsResponse {
        cacheHit?: boolean | undefined;
        errors?: BigQuery.Schema.ErrorProto[] | undefined;
        etag?: string | undefined;
        jobComplete?: boolean | undefined;
        jobReference?: BigQuery.Schema.JobReference | undefined;
        kind?: string | undefined;
        numDmlAffectedRows?: string | undefined;
        pageToken?: string | undefined;
        rows?: BigQuery.Schema.TableRow[] | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        totalBytesProcessed?: string | undefined;
        totalRows?: string | undefined;
      }
      interface GetServiceAccountResponse {
        email?: string | undefined;
        kind?: string | undefined;
      }
      interface GoogleSheetsOptions {
        range?: string | undefined;
        skipLeadingRows?: string | undefined;
      }
      interface Job {
        configuration?: BigQuery.Schema.JobConfiguration | undefined;
        etag?: string | undefined;
        id?: string | undefined;
        jobReference?: BigQuery.Schema.JobReference | undefined;
        kind?: string | undefined;
        selfLink?: string | undefined;
        statistics?: BigQuery.Schema.JobStatistics | undefined;
        status?: BigQuery.Schema.JobStatus | undefined;
        user_email?: string | undefined;
      }
      interface JobCancelResponse {
        job?: BigQuery.Schema.Job | undefined;
        kind?: string | undefined;
      }
      interface JobConfiguration {
        copy?: BigQuery.Schema.JobConfigurationTableCopy | undefined;
        dryRun?: boolean | undefined;
        extract?: BigQuery.Schema.JobConfigurationExtract | undefined;
        jobTimeoutMs?: string | undefined;
        jobType?: string | undefined;
        labels?: object | undefined;
        load?: BigQuery.Schema.JobConfigurationLoad | undefined;
        query?: BigQuery.Schema.JobConfigurationQuery | undefined;
      }
      interface JobConfigurationExtract {
        compression?: string | undefined;
        destinationFormat?: string | undefined;
        destinationUri?: string | undefined;
        destinationUris?: string[] | undefined;
        fieldDelimiter?: string | undefined;
        printHeader?: boolean | undefined;
        sourceTable?: BigQuery.Schema.TableReference | undefined;
      }
      interface JobConfigurationLoad {
        allowJaggedRows?: boolean | undefined;
        allowQuotedNewlines?: boolean | undefined;
        autodetect?: boolean | undefined;
        clustering?: BigQuery.Schema.Clustering | undefined;
        createDisposition?: string | undefined;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
        destinationTable?: BigQuery.Schema.TableReference | undefined;
        destinationTableProperties?: BigQuery.Schema.DestinationTableProperties | undefined;
        encoding?: string | undefined;
        fieldDelimiter?: string | undefined;
        hivePartitioningMode?: string | undefined;
        ignoreUnknownValues?: boolean | undefined;
        maxBadRecords?: number | undefined;
        nullMarker?: string | undefined;
        projectionFields?: string[] | undefined;
        quote?: string | undefined;
        rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        schemaInline?: string | undefined;
        schemaInlineFormat?: string | undefined;
        schemaUpdateOptions?: string[] | undefined;
        skipLeadingRows?: number | undefined;
        sourceFormat?: string | undefined;
        sourceUris?: string[] | undefined;
        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
        useAvroLogicalTypes?: boolean | undefined;
        writeDisposition?: string | undefined;
      }
      interface JobConfigurationQuery {
        allowLargeResults?: boolean | undefined;
        clustering?: BigQuery.Schema.Clustering | undefined;
        createDisposition?: string | undefined;
        defaultDataset?: BigQuery.Schema.DatasetReference | undefined;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
        destinationTable?: BigQuery.Schema.TableReference | undefined;
        flattenResults?: boolean | undefined;
        maximumBillingTier?: number | undefined;
        maximumBytesBilled?: string | undefined;
        parameterMode?: string | undefined;
        preserveNulls?: boolean | undefined;
        priority?: string | undefined;
        query?: string | undefined;
        queryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
        rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
        schemaUpdateOptions?: string[] | undefined;
        tableDefinitions?: object | undefined;
        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
        useLegacySql?: boolean | undefined;
        useQueryCache?: boolean | undefined;
        userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
        writeDisposition?: string | undefined;
      }
      interface JobConfigurationTableCopy {
        createDisposition?: string | undefined;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
        destinationTable?: BigQuery.Schema.TableReference | undefined;
        sourceTable?: BigQuery.Schema.TableReference | undefined;
        sourceTables?: BigQuery.Schema.TableReference[] | undefined;
        writeDisposition?: string | undefined;
      }
      interface JobList {
        etag?: string | undefined;
        jobs?: BigQuery.Schema.JobListJobs[] | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
      }
      interface JobListJobs {
        configuration?: BigQuery.Schema.JobConfiguration | undefined;
        errorResult?: BigQuery.Schema.ErrorProto | undefined;
        id?: string | undefined;
        jobReference?: BigQuery.Schema.JobReference | undefined;
        kind?: string | undefined;
        state?: string | undefined;
        statistics?: BigQuery.Schema.JobStatistics | undefined;
        status?: BigQuery.Schema.JobStatus | undefined;
        user_email?: string | undefined;
      }
      interface JobReference {
        jobId?: string | undefined;
        location?: string | undefined;
        projectId?: string | undefined;
      }
      interface JobStatistics {
        completionRatio?: number | undefined;
        creationTime?: string | undefined;
        endTime?: string | undefined;
        extract?: BigQuery.Schema.JobStatistics4 | undefined;
        load?: BigQuery.Schema.JobStatistics3 | undefined;
        numChildJobs?: string | undefined;
        parentJobId?: string | undefined;
        query?: BigQuery.Schema.JobStatistics2 | undefined;
        quotaDeferments?: string[] | undefined;
        reservationUsage?: BigQuery.Schema.JobStatisticsReservationUsage[] | undefined;
        startTime?: string | undefined;
        totalBytesProcessed?: string | undefined;
        totalSlotMs?: string | undefined;
      }
      interface JobStatistics2 {
        billingTier?: number | undefined;
        cacheHit?: boolean | undefined;
        ddlOperationPerformed?: string | undefined;
        ddlTargetRoutine?: BigQuery.Schema.RoutineReference | undefined;
        ddlTargetTable?: BigQuery.Schema.TableReference | undefined;
        estimatedBytesProcessed?: string | undefined;
        modelTraining?: BigQuery.Schema.BigQueryModelTraining | undefined;
        modelTrainingCurrentIteration?: number | undefined;
        modelTrainingExpectedTotalIteration?: string | undefined;
        numDmlAffectedRows?: string | undefined;
        queryPlan?: BigQuery.Schema.ExplainQueryStage[] | undefined;
        referencedTables?: BigQuery.Schema.TableReference[] | undefined;
        reservationUsage?: BigQuery.Schema.JobStatistics2ReservationUsage[] | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        statementType?: string | undefined;
        timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
        totalBytesBilled?: string | undefined;
        totalBytesProcessed?: string | undefined;
        totalBytesProcessedAccuracy?: string | undefined;
        totalPartitionsProcessed?: string | undefined;
        totalSlotMs?: string | undefined;
        undeclaredQueryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
      }
      interface JobStatistics2ReservationUsage {
        name?: string | undefined;
        slotMs?: string | undefined;
      }
      interface JobStatistics3 {
        badRecords?: string | undefined;
        inputFileBytes?: string | undefined;
        inputFiles?: string | undefined;
        outputBytes?: string | undefined;
        outputRows?: string | undefined;
      }
      interface JobStatistics4 {
        destinationUriFileCounts?: string[] | undefined;
        inputBytes?: string | undefined;
      }
      interface JobStatisticsReservationUsage {
        name?: string | undefined;
        slotMs?: string | undefined;
      }
      interface JobStatus {
        errorResult?: BigQuery.Schema.ErrorProto | undefined;
        errors?: BigQuery.Schema.ErrorProto[] | undefined;
        state?: string | undefined;
      }
      interface MaterializedViewDefinition {
        lastRefreshTime?: string | undefined;
        query?: string | undefined;
      }
      interface ModelDefinition {
        modelOptions?: BigQuery.Schema.ModelDefinitionModelOptions | undefined;
        trainingRuns?: BigQuery.Schema.BqmlTrainingRun[] | undefined;
      }
      interface ModelDefinitionModelOptions {
        labels?: string[] | undefined;
        lossType?: string | undefined;
        modelType?: string | undefined;
      }
      interface ProjectList {
        etag?: string | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        projects?: BigQuery.Schema.ProjectListProjects[] | undefined;
        totalItems?: number | undefined;
      }
      interface ProjectListProjects {
        friendlyName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        numericId?: string | undefined;
        projectReference?: BigQuery.Schema.ProjectReference | undefined;
      }
      interface ProjectReference {
        projectId?: string | undefined;
      }
      interface QueryParameter {
        name?: string | undefined;
        parameterType?: BigQuery.Schema.QueryParameterType | undefined;
        parameterValue?: BigQuery.Schema.QueryParameterValue | undefined;
      }
      interface QueryParameterType {
        arrayType?: BigQuery.Schema.QueryParameterType | undefined;
        structTypes?: BigQuery.Schema.QueryParameterTypeStructTypes[] | undefined;
        type?: string | undefined;
      }
      interface QueryParameterTypeStructTypes {
        description?: string | undefined;
        name?: string | undefined;
        type?: BigQuery.Schema.QueryParameterType | undefined;
      }
      interface QueryParameterValue {
        arrayValues?: BigQuery.Schema.QueryParameterValue[] | undefined;
        structValues?: object | undefined;
        value?: string | undefined;
      }
      interface QueryRequest {
        defaultDataset?: BigQuery.Schema.DatasetReference | undefined;
        dryRun?: boolean | undefined;
        kind?: string | undefined;
        location?: string | undefined;
        maxResults?: number | undefined;
        parameterMode?: string | undefined;
        preserveNulls?: boolean | undefined;
        query?: string | undefined;
        queryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
        timeoutMs?: number | undefined;
        useLegacySql?: boolean | undefined;
        useQueryCache?: boolean | undefined;
      }
      interface QueryResponse {
        cacheHit?: boolean | undefined;
        errors?: BigQuery.Schema.ErrorProto[] | undefined;
        jobComplete?: boolean | undefined;
        jobReference?: BigQuery.Schema.JobReference | undefined;
        kind?: string | undefined;
        numDmlAffectedRows?: string | undefined;
        pageToken?: string | undefined;
        rows?: BigQuery.Schema.TableRow[] | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        totalBytesProcessed?: string | undefined;
        totalRows?: string | undefined;
      }
      interface QueryTimelineSample {
        activeUnits?: string | undefined;
        completedUnits?: string | undefined;
        elapsedMs?: string | undefined;
        pendingUnits?: string | undefined;
        totalSlotMs?: string | undefined;
      }
      interface RangePartitioning {
        field?: string | undefined;
        range?: BigQuery.Schema.RangePartitioningRange | undefined;
      }
      interface RangePartitioningRange {
        end?: string | undefined;
        interval?: string | undefined;
        start?: string | undefined;
      }
      interface RoutineReference {
        datasetId?: string | undefined;
        projectId?: string | undefined;
        routineId?: string | undefined;
      }
      interface Streamingbuffer {
        estimatedBytes?: string | undefined;
        estimatedRows?: string | undefined;
        oldestEntryTime?: string | undefined;
      }
      interface Table {
        clustering?: BigQuery.Schema.Clustering | undefined;
        creationTime?: string | undefined;
        description?: string | undefined;
        encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
        etag?: string | undefined;
        expirationTime?: string | undefined;
        externalDataConfiguration?: BigQuery.Schema.ExternalDataConfiguration | undefined;
        friendlyName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        labels?: object | undefined;
        lastModifiedTime?: string | undefined;
        location?: string | undefined;
        materializedView?: BigQuery.Schema.MaterializedViewDefinition | undefined;
        model?: BigQuery.Schema.ModelDefinition | undefined;
        numBytes?: string | undefined;
        numLongTermBytes?: string | undefined;
        numPhysicalBytes?: string | undefined;
        numRows?: string | undefined;
        rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
        requirePartitionFilter?: boolean | undefined;
        schema?: BigQuery.Schema.TableSchema | undefined;
        selfLink?: string | undefined;
        streamingBuffer?: BigQuery.Schema.Streamingbuffer | undefined;
        tableReference?: BigQuery.Schema.TableReference | undefined;
        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
        type?: string | undefined;
        view?: BigQuery.Schema.ViewDefinition | undefined;
      }
      interface TableCell {
        v?: object | undefined;
      }
      interface TableDataInsertAllRequest {
        ignoreUnknownValues?: boolean | undefined;
        kind?: string | undefined;
        rows?: BigQuery.Schema.TableDataInsertAllRequestRows[] | undefined;
        skipInvalidRows?: boolean | undefined;
        templateSuffix?: string | undefined;
      }
      interface TableDataInsertAllRequestRows {
        insertId?: string | undefined;
        json?: object | undefined;
      }
      interface TableDataInsertAllResponse {
        insertErrors?: BigQuery.Schema.TableDataInsertAllResponseInsertErrors[] | undefined;
        kind?: string | undefined;
      }
      interface TableDataInsertAllResponseInsertErrors {
        errors?: BigQuery.Schema.ErrorProto[] | undefined;
        index?: number | undefined;
      }
      interface TableDataList {
        etag?: string | undefined;
        kind?: string | undefined;
        pageToken?: string | undefined;
        rows?: BigQuery.Schema.TableRow[] | undefined;
        totalRows?: string | undefined;
      }
      interface TableFieldSchema {
        categories?: BigQuery.Schema.TableFieldSchemaCategories | undefined;
        description?: string | undefined;
        fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
        mode?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
      }
      interface TableFieldSchemaCategories {
        names?: string[] | undefined;
      }
      interface TableList {
        etag?: string | undefined;
        kind?: string | undefined;
        nextPageToken?: string | undefined;
        tables?: BigQuery.Schema.TableListTables[] | undefined;
        totalItems?: number | undefined;
      }
      interface TableListTables {
        clustering?: BigQuery.Schema.Clustering | undefined;
        creationTime?: string | undefined;
        expirationTime?: string | undefined;
        friendlyName?: string | undefined;
        id?: string | undefined;
        kind?: string | undefined;
        labels?: object | undefined;
        tableReference?: BigQuery.Schema.TableReference | undefined;
        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
        type?: string | undefined;
        view?: BigQuery.Schema.TableListTablesView | undefined;
      }
      interface TableListTablesView {
        useLegacySql?: boolean | undefined;
      }
      interface TableReference {
        datasetId?: string | undefined;
        projectId?: string | undefined;
        tableId?: string | undefined;
      }
      interface TableRow {
        f?: BigQuery.Schema.TableCell[] | undefined;
      }
      interface TableSchema {
        fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
      }
      interface TimePartitioning {
        expirationMs?: string | undefined;
        field?: string | undefined;
        requirePartitionFilter?: boolean | undefined;
        type?: string | undefined;
      }
      interface UserDefinedFunctionResource {
        inlineCode?: string | undefined;
        resourceUri?: string | undefined;
      }
      interface ViewDefinition {
        query?: string | undefined;
        useLegacySql?: boolean | undefined;
        userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
      }
    }
  }
  interface BigQuery {
    Datasets?: BigQuery.Collection.DatasetsCollection | undefined;
    Jobs?: BigQuery.Collection.JobsCollection | undefined;
    Projects?: BigQuery.Collection.ProjectsCollection | undefined;
    Tabledata?: BigQuery.Collection.TabledataCollection | undefined;
    Tables?: BigQuery.Collection.TablesCollection | undefined;
    // Create a new instance of BigQueryModelTraining
    newBigQueryModelTraining(): BigQuery.Schema.BigQueryModelTraining;
    // Create a new instance of BigtableColumn
    newBigtableColumn(): BigQuery.Schema.BigtableColumn;
    // Create a new instance of BigtableColumnFamily
    newBigtableColumnFamily(): BigQuery.Schema.BigtableColumnFamily;
    // Create a new instance of BigtableOptions
    newBigtableOptions(): BigQuery.Schema.BigtableOptions;
    // Create a new instance of BqmlIterationResult
    newBqmlIterationResult(): BigQuery.Schema.BqmlIterationResult;
    // Create a new instance of BqmlTrainingRun
    newBqmlTrainingRun(): BigQuery.Schema.BqmlTrainingRun;
    // Create a new instance of BqmlTrainingRunTrainingOptions
    newBqmlTrainingRunTrainingOptions(): BigQuery.Schema.BqmlTrainingRunTrainingOptions;
    // Create a new instance of Clustering
    newClustering(): BigQuery.Schema.Clustering;
    // Create a new instance of CsvOptions
    newCsvOptions(): BigQuery.Schema.CsvOptions;
    // Create a new instance of Dataset
    newDataset(): BigQuery.Schema.Dataset;
    // Create a new instance of DatasetAccess
    newDatasetAccess(): BigQuery.Schema.DatasetAccess;
    // Create a new instance of DatasetReference
    newDatasetReference(): BigQuery.Schema.DatasetReference;
    // Create a new instance of DestinationTableProperties
    newDestinationTableProperties(): BigQuery.Schema.DestinationTableProperties;
    // Create a new instance of EncryptionConfiguration
    newEncryptionConfiguration(): BigQuery.Schema.EncryptionConfiguration;
    // Create a new instance of ErrorProto
    newErrorProto(): BigQuery.Schema.ErrorProto;
    // Create a new instance of ExplainQueryStage
    newExplainQueryStage(): BigQuery.Schema.ExplainQueryStage;
    // Create a new instance of ExplainQueryStep
    newExplainQueryStep(): BigQuery.Schema.ExplainQueryStep;
    // Create a new instance of ExternalDataConfiguration
    newExternalDataConfiguration(): BigQuery.Schema.ExternalDataConfiguration;
    // Create a new instance of GoogleSheetsOptions
    newGoogleSheetsOptions(): BigQuery.Schema.GoogleSheetsOptions;
    // Create a new instance of Job
    newJob(): BigQuery.Schema.Job;
    // Create a new instance of JobConfiguration
    newJobConfiguration(): BigQuery.Schema.JobConfiguration;
    // Create a new instance of JobConfigurationExtract
    newJobConfigurationExtract(): BigQuery.Schema.JobConfigurationExtract;
    // Create a new instance of JobConfigurationLoad
    newJobConfigurationLoad(): BigQuery.Schema.JobConfigurationLoad;
    // Create a new instance of JobConfigurationQuery
    newJobConfigurationQuery(): BigQuery.Schema.JobConfigurationQuery;
    // Create a new instance of JobConfigurationTableCopy
    newJobConfigurationTableCopy(): BigQuery.Schema.JobConfigurationTableCopy;
    // Create a new instance of JobReference
    newJobReference(): BigQuery.Schema.JobReference;
    // Create a new instance of JobStatistics
    newJobStatistics(): BigQuery.Schema.JobStatistics;
    // Create a new instance of JobStatistics2
    newJobStatistics2(): BigQuery.Schema.JobStatistics2;
    // Create a new instance of JobStatistics2ReservationUsage
    newJobStatistics2ReservationUsage(): BigQuery.Schema.JobStatistics2ReservationUsage;
    // Create a new instance of JobStatistics3
    newJobStatistics3(): BigQuery.Schema.JobStatistics3;
    // Create a new instance of JobStatistics4
    newJobStatistics4(): BigQuery.Schema.JobStatistics4;
    // Create a new instance of JobStatisticsReservationUsage
    newJobStatisticsReservationUsage(): BigQuery.Schema.JobStatisticsReservationUsage;
    // Create a new instance of JobStatus
    newJobStatus(): BigQuery.Schema.JobStatus;
    // Create a new instance of MaterializedViewDefinition
    newMaterializedViewDefinition(): BigQuery.Schema.MaterializedViewDefinition;
    // Create a new instance of ModelDefinition
    newModelDefinition(): BigQuery.Schema.ModelDefinition;
    // Create a new instance of ModelDefinitionModelOptions
    newModelDefinitionModelOptions(): BigQuery.Schema.ModelDefinitionModelOptions;
    // Create a new instance of QueryParameter
    newQueryParameter(): BigQuery.Schema.QueryParameter;
    // Create a new instance of QueryParameterType
    newQueryParameterType(): BigQuery.Schema.QueryParameterType;
    // Create a new instance of QueryParameterTypeStructTypes
    newQueryParameterTypeStructTypes(): BigQuery.Schema.QueryParameterTypeStructTypes;
    // Create a new instance of QueryParameterValue
    newQueryParameterValue(): BigQuery.Schema.QueryParameterValue;
    // Create a new instance of QueryRequest
    newQueryRequest(): BigQuery.Schema.QueryRequest;
    // Create a new instance of QueryTimelineSample
    newQueryTimelineSample(): BigQuery.Schema.QueryTimelineSample;
    // Create a new instance of RangePartitioning
    newRangePartitioning(): BigQuery.Schema.RangePartitioning;
    // Create a new instance of RangePartitioningRange
    newRangePartitioningRange(): BigQuery.Schema.RangePartitioningRange;
    // Create a new instance of RoutineReference
    newRoutineReference(): BigQuery.Schema.RoutineReference;
    // Create a new instance of Streamingbuffer
    newStreamingbuffer(): BigQuery.Schema.Streamingbuffer;
    // Create a new instance of Table
    newTable(): BigQuery.Schema.Table;
    // Create a new instance of TableDataInsertAllRequest
    newTableDataInsertAllRequest(): BigQuery.Schema.TableDataInsertAllRequest;
    // Create a new instance of TableDataInsertAllRequestRows
    newTableDataInsertAllRequestRows(): BigQuery.Schema.TableDataInsertAllRequestRows;
    // Create a new instance of TableFieldSchema
    newTableFieldSchema(): BigQuery.Schema.TableFieldSchema;
    // Create a new instance of TableFieldSchemaCategories
    newTableFieldSchemaCategories(): BigQuery.Schema.TableFieldSchemaCategories;
    // Create a new instance of TableReference
    newTableReference(): BigQuery.Schema.TableReference;
    // Create a new instance of TableSchema
    newTableSchema(): BigQuery.Schema.TableSchema;
    // Create a new instance of TimePartitioning
    newTimePartitioning(): BigQuery.Schema.TimePartitioning;
    // Create a new instance of UserDefinedFunctionResource
    newUserDefinedFunctionResource(): BigQuery.Schema.UserDefinedFunctionResource;
    // Create a new instance of ViewDefinition
    newViewDefinition(): BigQuery.Schema.ViewDefinition;
  }
}

declare var BigQuery: GoogleAppsScript.BigQuery;
