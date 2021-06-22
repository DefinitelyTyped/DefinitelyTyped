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
        currentIteration?: number;
        expectedTotalIterations?: string;
      }
      interface BigtableColumn {
        encoding?: string;
        fieldName?: string;
        onlyReadLatest?: boolean;
        qualifierEncoded?: string;
        qualifierString?: string;
        type?: string;
      }
      interface BigtableColumnFamily {
        columns?: BigQuery.Schema.BigtableColumn[];
        encoding?: string;
        familyId?: string;
        onlyReadLatest?: boolean;
        type?: string;
      }
      interface BigtableOptions {
        columnFamilies?: BigQuery.Schema.BigtableColumnFamily[];
        ignoreUnspecifiedColumnFamilies?: boolean;
        readRowkeyAsString?: boolean;
      }
      interface BqmlIterationResult {
        durationMs?: string;
        evalLoss?: number;
        index?: number;
        learnRate?: number;
        trainingLoss?: number;
      }
      interface BqmlTrainingRun {
        iterationResults?: BigQuery.Schema.BqmlIterationResult[];
        startTime?: string;
        state?: string;
        trainingOptions?: BigQuery.Schema.BqmlTrainingRunTrainingOptions;
      }
      interface BqmlTrainingRunTrainingOptions {
        earlyStop?: boolean;
        l1Reg?: number;
        l2Reg?: number;
        learnRate?: number;
        learnRateStrategy?: string;
        lineSearchInitLearnRate?: number;
        maxIteration?: string;
        minRelProgress?: number;
        warmStart?: boolean;
      }
      interface Clustering {
        fields?: string[];
      }
      interface CsvOptions {
        allowJaggedRows?: boolean;
        allowQuotedNewlines?: boolean;
        encoding?: string;
        fieldDelimiter?: string;
        quote?: string;
        skipLeadingRows?: string;
      }
      interface Dataset {
        access?: BigQuery.Schema.DatasetAccess[];
        creationTime?: string;
        datasetReference?: BigQuery.Schema.DatasetReference;
        defaultPartitionExpirationMs?: string;
        defaultTableExpirationMs?: string;
        description?: string;
        etag?: string;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        lastModifiedTime?: string;
        location?: string;
        selfLink?: string;
      }
      interface DatasetAccess {
        domain?: string;
        groupByEmail?: string;
        iamMember?: string;
        role?: string;
        specialGroup?: string;
        userByEmail?: string;
        view?: BigQuery.Schema.TableReference;
      }
      interface DatasetList {
        datasets?: BigQuery.Schema.DatasetListDatasets[];
        etag?: string;
        kind?: string;
        nextPageToken?: string;
      }
      interface DatasetListDatasets {
        datasetReference?: BigQuery.Schema.DatasetReference;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        location?: string;
      }
      interface DatasetReference {
        datasetId?: string;
        projectId?: string;
      }
      interface DestinationTableProperties {
        description?: string;
        friendlyName?: string;
        labels?: object;
      }
      interface EncryptionConfiguration {
        kmsKeyName?: string;
      }
      interface ErrorProto {
        debugInfo?: string;
        location?: string;
        message?: string;
        reason?: string;
      }
      interface ExplainQueryStage {
        completedParallelInputs?: string;
        computeMsAvg?: string;
        computeMsMax?: string;
        computeRatioAvg?: number;
        computeRatioMax?: number;
        endMs?: string;
        id?: string;
        inputStages?: string[];
        name?: string;
        parallelInputs?: string;
        readMsAvg?: string;
        readMsMax?: string;
        readRatioAvg?: number;
        readRatioMax?: number;
        recordsRead?: string;
        recordsWritten?: string;
        shuffleOutputBytes?: string;
        shuffleOutputBytesSpilled?: string;
        startMs?: string;
        status?: string;
        steps?: BigQuery.Schema.ExplainQueryStep[];
        waitMsAvg?: string;
        waitMsMax?: string;
        waitRatioAvg?: number;
        waitRatioMax?: number;
        writeMsAvg?: string;
        writeMsMax?: string;
        writeRatioAvg?: number;
        writeRatioMax?: number;
      }
      interface ExplainQueryStep {
        kind?: string;
        substeps?: string[];
      }
      interface ExternalDataConfiguration {
        autodetect?: boolean;
        bigtableOptions?: BigQuery.Schema.BigtableOptions;
        compression?: string;
        csvOptions?: BigQuery.Schema.CsvOptions;
        googleSheetsOptions?: BigQuery.Schema.GoogleSheetsOptions;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        schema?: BigQuery.Schema.TableSchema;
        sourceFormat?: string;
        sourceUris?: string[];
      }
      interface GetQueryResultsResponse {
        cacheHit?: boolean;
        errors?: BigQuery.Schema.ErrorProto[];
        etag?: string;
        jobComplete?: boolean;
        jobReference?: BigQuery.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: BigQuery.Schema.TableRow[];
        schema?: BigQuery.Schema.TableSchema;
        totalBytesProcessed?: string;
        totalRows?: string;
      }
      interface GetServiceAccountResponse {
        email?: string;
        kind?: string;
      }
      interface GoogleSheetsOptions {
        range?: string;
        skipLeadingRows?: string;
      }
      interface Job {
        configuration?: BigQuery.Schema.JobConfiguration;
        etag?: string;
        id?: string;
        jobReference?: BigQuery.Schema.JobReference;
        kind?: string;
        selfLink?: string;
        statistics?: BigQuery.Schema.JobStatistics;
        status?: BigQuery.Schema.JobStatus;
        user_email?: string;
      }
      interface JobCancelResponse {
        job?: BigQuery.Schema.Job;
        kind?: string;
      }
      interface JobConfiguration {
        copy?: BigQuery.Schema.JobConfigurationTableCopy;
        dryRun?: boolean;
        extract?: BigQuery.Schema.JobConfigurationExtract;
        jobTimeoutMs?: string;
        jobType?: string;
        labels?: object;
        load?: BigQuery.Schema.JobConfigurationLoad;
        query?: BigQuery.Schema.JobConfigurationQuery;
      }
      interface JobConfigurationExtract {
        compression?: string;
        destinationFormat?: string;
        destinationUri?: string;
        destinationUris?: string[];
        fieldDelimiter?: string;
        printHeader?: boolean;
        sourceTable?: BigQuery.Schema.TableReference;
      }
      interface JobConfigurationLoad {
        allowJaggedRows?: boolean;
        allowQuotedNewlines?: boolean;
        autodetect?: boolean;
        clustering?: BigQuery.Schema.Clustering;
        createDisposition?: string;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration;
        destinationTable?: BigQuery.Schema.TableReference;
        destinationTableProperties?: BigQuery.Schema.DestinationTableProperties;
        encoding?: string;
        fieldDelimiter?: string;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        nullMarker?: string;
        projectionFields?: string[];
        quote?: string;
        rangePartitioning?: BigQuery.Schema.RangePartitioning;
        schema?: BigQuery.Schema.TableSchema;
        schemaInline?: string;
        schemaInlineFormat?: string;
        schemaUpdateOptions?: string[];
        skipLeadingRows?: number;
        sourceFormat?: string;
        sourceUris?: string[];
        timePartitioning?: BigQuery.Schema.TimePartitioning;
        useAvroLogicalTypes?: boolean;
        writeDisposition?: string;
      }
      interface JobConfigurationQuery {
        allowLargeResults?: boolean;
        clustering?: BigQuery.Schema.Clustering;
        createDisposition?: string;
        defaultDataset?: BigQuery.Schema.DatasetReference;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration;
        destinationTable?: BigQuery.Schema.TableReference;
        flattenResults?: boolean;
        maximumBillingTier?: number;
        maximumBytesBilled?: string;
        parameterMode?: string;
        preserveNulls?: boolean;
        priority?: string;
        query?: string;
        queryParameters?: BigQuery.Schema.QueryParameter[];
        rangePartitioning?: BigQuery.Schema.RangePartitioning;
        schemaUpdateOptions?: string[];
        tableDefinitions?: object;
        timePartitioning?: BigQuery.Schema.TimePartitioning;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
        userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[];
        writeDisposition?: string;
      }
      interface JobConfigurationTableCopy {
        createDisposition?: string;
        destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration;
        destinationTable?: BigQuery.Schema.TableReference;
        sourceTable?: BigQuery.Schema.TableReference;
        sourceTables?: BigQuery.Schema.TableReference[];
        writeDisposition?: string;
      }
      interface JobList {
        etag?: string;
        jobs?: BigQuery.Schema.JobListJobs[];
        kind?: string;
        nextPageToken?: string;
      }
      interface JobListJobs {
        configuration?: BigQuery.Schema.JobConfiguration;
        errorResult?: BigQuery.Schema.ErrorProto;
        id?: string;
        jobReference?: BigQuery.Schema.JobReference;
        kind?: string;
        state?: string;
        statistics?: BigQuery.Schema.JobStatistics;
        status?: BigQuery.Schema.JobStatus;
        user_email?: string;
      }
      interface JobReference {
        jobId?: string;
        location?: string;
        projectId?: string;
      }
      interface JobStatistics {
        completionRatio?: number;
        creationTime?: string;
        endTime?: string;
        extract?: BigQuery.Schema.JobStatistics4;
        load?: BigQuery.Schema.JobStatistics3;
        numChildJobs?: string;
        parentJobId?: string;
        query?: BigQuery.Schema.JobStatistics2;
        quotaDeferments?: string[];
        reservationUsage?: BigQuery.Schema.JobStatisticsReservationUsage[];
        startTime?: string;
        totalBytesProcessed?: string;
        totalSlotMs?: string;
      }
      interface JobStatistics2 {
        billingTier?: number;
        cacheHit?: boolean;
        ddlOperationPerformed?: string;
        ddlTargetRoutine?: BigQuery.Schema.RoutineReference;
        ddlTargetTable?: BigQuery.Schema.TableReference;
        estimatedBytesProcessed?: string;
        modelTraining?: BigQuery.Schema.BigQueryModelTraining;
        modelTrainingCurrentIteration?: number;
        modelTrainingExpectedTotalIteration?: string;
        numDmlAffectedRows?: string;
        queryPlan?: BigQuery.Schema.ExplainQueryStage[];
        referencedTables?: BigQuery.Schema.TableReference[];
        reservationUsage?: BigQuery.Schema.JobStatistics2ReservationUsage[];
        schema?: BigQuery.Schema.TableSchema;
        statementType?: string;
        timeline?: BigQuery.Schema.QueryTimelineSample[];
        totalBytesBilled?: string;
        totalBytesProcessed?: string;
        totalBytesProcessedAccuracy?: string;
        totalPartitionsProcessed?: string;
        totalSlotMs?: string;
        undeclaredQueryParameters?: BigQuery.Schema.QueryParameter[];
      }
      interface JobStatistics2ReservationUsage {
        name?: string;
        slotMs?: string;
      }
      interface JobStatistics3 {
        badRecords?: string;
        inputFileBytes?: string;
        inputFiles?: string;
        outputBytes?: string;
        outputRows?: string;
      }
      interface JobStatistics4 {
        destinationUriFileCounts?: string[];
        inputBytes?: string;
      }
      interface JobStatisticsReservationUsage {
        name?: string;
        slotMs?: string;
      }
      interface JobStatus {
        errorResult?: BigQuery.Schema.ErrorProto;
        errors?: BigQuery.Schema.ErrorProto[];
        state?: string;
      }
      interface MaterializedViewDefinition {
        lastRefreshTime?: string;
        query?: string;
      }
      interface ModelDefinition {
        modelOptions?: BigQuery.Schema.ModelDefinitionModelOptions;
        trainingRuns?: BigQuery.Schema.BqmlTrainingRun[];
      }
      interface ModelDefinitionModelOptions {
        labels?: string[];
        lossType?: string;
        modelType?: string;
      }
      interface ProjectList {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        projects?: BigQuery.Schema.ProjectListProjects[];
        totalItems?: number;
      }
      interface ProjectListProjects {
        friendlyName?: string;
        id?: string;
        kind?: string;
        numericId?: string;
        projectReference?: BigQuery.Schema.ProjectReference;
      }
      interface ProjectReference {
        projectId?: string;
      }
      interface QueryParameter {
        name?: string;
        parameterType?: BigQuery.Schema.QueryParameterType;
        parameterValue?: BigQuery.Schema.QueryParameterValue;
      }
      interface QueryParameterType {
        arrayType?: BigQuery.Schema.QueryParameterType;
        structTypes?: BigQuery.Schema.QueryParameterTypeStructTypes[];
        type?: string;
      }
      interface QueryParameterTypeStructTypes {
        description?: string;
        name?: string;
        type?: BigQuery.Schema.QueryParameterType;
      }
      interface QueryParameterValue {
        arrayValues?: BigQuery.Schema.QueryParameterValue[];
        structValues?: object;
        value?: string;
      }
      interface QueryRequest {
        defaultDataset?: BigQuery.Schema.DatasetReference;
        dryRun?: boolean;
        kind?: string;
        location?: string;
        maxResults?: number;
        parameterMode?: string;
        preserveNulls?: boolean;
        query?: string;
        queryParameters?: BigQuery.Schema.QueryParameter[];
        timeoutMs?: number;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
      }
      interface QueryResponse {
        cacheHit?: boolean;
        errors?: BigQuery.Schema.ErrorProto[];
        jobComplete?: boolean;
        jobReference?: BigQuery.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: BigQuery.Schema.TableRow[];
        schema?: BigQuery.Schema.TableSchema;
        totalBytesProcessed?: string;
        totalRows?: string;
      }
      interface QueryTimelineSample {
        activeUnits?: string;
        completedUnits?: string;
        elapsedMs?: string;
        pendingUnits?: string;
        totalSlotMs?: string;
      }
      interface RangePartitioning {
        field?: string;
        range?: BigQuery.Schema.RangePartitioningRange;
      }
      interface RangePartitioningRange {
        end?: string;
        interval?: string;
        start?: string;
      }
      interface RoutineReference {
        datasetId?: string;
        projectId?: string;
        routineId?: string;
      }
      interface Streamingbuffer {
        estimatedBytes?: string;
        estimatedRows?: string;
        oldestEntryTime?: string;
      }
      interface Table {
        clustering?: BigQuery.Schema.Clustering;
        creationTime?: string;
        description?: string;
        encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration;
        etag?: string;
        expirationTime?: string;
        externalDataConfiguration?: BigQuery.Schema.ExternalDataConfiguration;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        lastModifiedTime?: string;
        location?: string;
        materializedView?: BigQuery.Schema.MaterializedViewDefinition;
        model?: BigQuery.Schema.ModelDefinition;
        numBytes?: string;
        numLongTermBytes?: string;
        numPhysicalBytes?: string;
        numRows?: string;
        rangePartitioning?: BigQuery.Schema.RangePartitioning;
        requirePartitionFilter?: boolean;
        schema?: BigQuery.Schema.TableSchema;
        selfLink?: string;
        streamingBuffer?: BigQuery.Schema.Streamingbuffer;
        tableReference?: BigQuery.Schema.TableReference;
        timePartitioning?: BigQuery.Schema.TimePartitioning;
        type?: string;
        view?: BigQuery.Schema.ViewDefinition;
      }
      interface TableCell {
        v?: object;
      }
      interface TableDataInsertAllRequest {
        ignoreUnknownValues?: boolean;
        kind?: string;
        rows?: BigQuery.Schema.TableDataInsertAllRequestRows[];
        skipInvalidRows?: boolean;
        templateSuffix?: string;
      }
      interface TableDataInsertAllRequestRows {
        insertId?: string;
        json?: object;
      }
      interface TableDataInsertAllResponse {
        insertErrors?: BigQuery.Schema.TableDataInsertAllResponseInsertErrors[];
        kind?: string;
      }
      interface TableDataInsertAllResponseInsertErrors {
        errors?: BigQuery.Schema.ErrorProto[];
        index?: number;
      }
      interface TableDataList {
        etag?: string;
        kind?: string;
        pageToken?: string;
        rows?: BigQuery.Schema.TableRow[];
        totalRows?: string;
      }
      interface TableFieldSchema {
        categories?: BigQuery.Schema.TableFieldSchemaCategories;
        description?: string;
        fields?: BigQuery.Schema.TableFieldSchema[];
        mode?: string;
        name?: string;
        type?: string;
      }
      interface TableFieldSchemaCategories {
        names?: string[];
      }
      interface TableList {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        tables?: BigQuery.Schema.TableListTables[];
        totalItems?: number;
      }
      interface TableListTables {
        clustering?: BigQuery.Schema.Clustering;
        creationTime?: string;
        expirationTime?: string;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        tableReference?: BigQuery.Schema.TableReference;
        timePartitioning?: BigQuery.Schema.TimePartitioning;
        type?: string;
        view?: BigQuery.Schema.TableListTablesView;
      }
      interface TableListTablesView {
        useLegacySql?: boolean;
      }
      interface TableReference {
        datasetId?: string;
        projectId?: string;
        tableId?: string;
      }
      interface TableRow {
        f?: BigQuery.Schema.TableCell[];
      }
      interface TableSchema {
        fields?: BigQuery.Schema.TableFieldSchema[];
      }
      interface TimePartitioning {
        expirationMs?: string;
        field?: string;
        requirePartitionFilter?: boolean;
        type?: string;
      }
      interface UserDefinedFunctionResource {
        inlineCode?: string;
        resourceUri?: string;
      }
      interface ViewDefinition {
        query?: string;
        useLegacySql?: boolean;
        userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[];
      }
    }
  }
  interface Bigquery {
    Datasets?: BigQuery.Collection.DatasetsCollection;
    Jobs?: BigQuery.Collection.JobsCollection;
    Projects?: BigQuery.Collection.ProjectsCollection;
    Tabledata?: BigQuery.Collection.TabledataCollection;
    Tables?: BigQuery.Collection.TablesCollection;
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

declare var Bigquery: GoogleAppsScript.Bigquery;
