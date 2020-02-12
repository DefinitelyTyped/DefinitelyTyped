// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Bigquery {
    namespace Collection {
      interface DatasetsCollection {
        // Returns the dataset specified by datasetID.
        get(projectId: string, datasetId: string): Bigquery.Schema.Dataset;
        // Creates a new empty dataset.
        insert(resource: Bigquery.Schema.Dataset, projectId: string): Bigquery.Schema.Dataset;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string): Bigquery.Schema.DatasetList;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string, optionalArgs: object): Bigquery.Schema.DatasetList;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
        patch(resource: Bigquery.Schema.Dataset, projectId: string, datasetId: string): Bigquery.Schema.Dataset;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string): void;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string, optionalArgs: object): void;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        update(resource: Bigquery.Schema.Dataset, projectId: string, datasetId: string): Bigquery.Schema.Dataset;
      }
      interface JobsCollection {
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string): Bigquery.Schema.JobCancelResponse;
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string, optionalArgs: object): Bigquery.Schema.JobCancelResponse;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string): Bigquery.Schema.Job;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string, optionalArgs: object): Bigquery.Schema.Job;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string): Bigquery.Schema.GetQueryResultsResponse;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string, optionalArgs: object): Bigquery.Schema.GetQueryResultsResponse;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: Bigquery.Schema.Job, projectId: string): Bigquery.Schema.Job;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: Bigquery.Schema.Job, projectId: string, mediaData: any): Bigquery.Schema.Job;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string): Bigquery.Schema.JobList;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string, optionalArgs: object): Bigquery.Schema.JobList;
        // Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
        query(resource: Bigquery.Schema.QueryRequest, projectId: string): Bigquery.Schema.QueryResponse;
      }
      interface ProjectsCollection {
        // Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
        getServiceAccount(projectId: string): Bigquery.Schema.GetServiceAccountResponse;
        // Lists all projects to which you have been granted any project role.
        list(): Bigquery.Schema.ProjectList;
        // Lists all projects to which you have been granted any project role.
        list(optionalArgs: object): Bigquery.Schema.ProjectList;
      }
      interface TabledataCollection {
        // Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
        insertAll(resource: Bigquery.Schema.TableDataInsertAllRequest, projectId: string, datasetId: string, tableId: string): Bigquery.Schema.TableDataInsertAllResponse;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string): Bigquery.Schema.TableDataList;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Bigquery.Schema.TableDataList;
      }
      interface TablesCollection {
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string): Bigquery.Schema.Table;
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Bigquery.Schema.Table;
        // Creates a new, empty table in the dataset.
        insert(resource: Bigquery.Schema.Table, projectId: string, datasetId: string): Bigquery.Schema.Table;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string): Bigquery.Schema.TableList;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string, optionalArgs: object): Bigquery.Schema.TableList;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
        patch(resource: Bigquery.Schema.Table, projectId: string, datasetId: string, tableId: string): Bigquery.Schema.Table;
        // Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
        remove(projectId: string, datasetId: string, tableId: string): void;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
        update(resource: Bigquery.Schema.Table, projectId: string, datasetId: string, tableId: string): Bigquery.Schema.Table;
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
        columns?: Bigquery.Schema.BigtableColumn[];
        encoding?: string;
        familyId?: string;
        onlyReadLatest?: boolean;
        type?: string;
      }
      interface BigtableOptions {
        columnFamilies?: Bigquery.Schema.BigtableColumnFamily[];
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
        iterationResults?: Bigquery.Schema.BqmlIterationResult[];
        startTime?: string;
        state?: string;
        trainingOptions?: Bigquery.Schema.BqmlTrainingRunTrainingOptions;
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
        access?: Bigquery.Schema.DatasetAccess[];
        creationTime?: string;
        datasetReference?: Bigquery.Schema.DatasetReference;
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
        view?: Bigquery.Schema.TableReference;
      }
      interface DatasetList {
        datasets?: Bigquery.Schema.DatasetListDatasets[];
        etag?: string;
        kind?: string;
        nextPageToken?: string;
      }
      interface DatasetListDatasets {
        datasetReference?: Bigquery.Schema.DatasetReference;
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
        steps?: Bigquery.Schema.ExplainQueryStep[];
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
        bigtableOptions?: Bigquery.Schema.BigtableOptions;
        compression?: string;
        csvOptions?: Bigquery.Schema.CsvOptions;
        googleSheetsOptions?: Bigquery.Schema.GoogleSheetsOptions;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        schema?: Bigquery.Schema.TableSchema;
        sourceFormat?: string;
        sourceUris?: string[];
      }
      interface GetQueryResultsResponse {
        cacheHit?: boolean;
        errors?: Bigquery.Schema.ErrorProto[];
        etag?: string;
        jobComplete?: boolean;
        jobReference?: Bigquery.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: Bigquery.Schema.TableRow[];
        schema?: Bigquery.Schema.TableSchema;
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
        configuration?: Bigquery.Schema.JobConfiguration;
        etag?: string;
        id?: string;
        jobReference?: Bigquery.Schema.JobReference;
        kind?: string;
        selfLink?: string;
        statistics?: Bigquery.Schema.JobStatistics;
        status?: Bigquery.Schema.JobStatus;
        user_email?: string;
      }
      interface JobCancelResponse {
        job?: Bigquery.Schema.Job;
        kind?: string;
      }
      interface JobConfiguration {
        copy?: Bigquery.Schema.JobConfigurationTableCopy;
        dryRun?: boolean;
        extract?: Bigquery.Schema.JobConfigurationExtract;
        jobTimeoutMs?: string;
        jobType?: string;
        labels?: object;
        load?: Bigquery.Schema.JobConfigurationLoad;
        query?: Bigquery.Schema.JobConfigurationQuery;
      }
      interface JobConfigurationExtract {
        compression?: string;
        destinationFormat?: string;
        destinationUri?: string;
        destinationUris?: string[];
        fieldDelimiter?: string;
        printHeader?: boolean;
        sourceTable?: Bigquery.Schema.TableReference;
      }
      interface JobConfigurationLoad {
        allowJaggedRows?: boolean;
        allowQuotedNewlines?: boolean;
        autodetect?: boolean;
        clustering?: Bigquery.Schema.Clustering;
        createDisposition?: string;
        destinationEncryptionConfiguration?: Bigquery.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery.Schema.TableReference;
        destinationTableProperties?: Bigquery.Schema.DestinationTableProperties;
        encoding?: string;
        fieldDelimiter?: string;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        nullMarker?: string;
        projectionFields?: string[];
        quote?: string;
        rangePartitioning?: Bigquery.Schema.RangePartitioning;
        schema?: Bigquery.Schema.TableSchema;
        schemaInline?: string;
        schemaInlineFormat?: string;
        schemaUpdateOptions?: string[];
        skipLeadingRows?: number;
        sourceFormat?: string;
        sourceUris?: string[];
        timePartitioning?: Bigquery.Schema.TimePartitioning;
        useAvroLogicalTypes?: boolean;
        writeDisposition?: string;
      }
      interface JobConfigurationQuery {
        allowLargeResults?: boolean;
        clustering?: Bigquery.Schema.Clustering;
        createDisposition?: string;
        defaultDataset?: Bigquery.Schema.DatasetReference;
        destinationEncryptionConfiguration?: Bigquery.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery.Schema.TableReference;
        flattenResults?: boolean;
        maximumBillingTier?: number;
        maximumBytesBilled?: string;
        parameterMode?: string;
        preserveNulls?: boolean;
        priority?: string;
        query?: string;
        queryParameters?: Bigquery.Schema.QueryParameter[];
        rangePartitioning?: Bigquery.Schema.RangePartitioning;
        schemaUpdateOptions?: string[];
        tableDefinitions?: object;
        timePartitioning?: Bigquery.Schema.TimePartitioning;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
        userDefinedFunctionResources?: Bigquery.Schema.UserDefinedFunctionResource[];
        writeDisposition?: string;
      }
      interface JobConfigurationTableCopy {
        createDisposition?: string;
        destinationEncryptionConfiguration?: Bigquery.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery.Schema.TableReference;
        sourceTable?: Bigquery.Schema.TableReference;
        sourceTables?: Bigquery.Schema.TableReference[];
        writeDisposition?: string;
      }
      interface JobList {
        etag?: string;
        jobs?: Bigquery.Schema.JobListJobs[];
        kind?: string;
        nextPageToken?: string;
      }
      interface JobListJobs {
        configuration?: Bigquery.Schema.JobConfiguration;
        errorResult?: Bigquery.Schema.ErrorProto;
        id?: string;
        jobReference?: Bigquery.Schema.JobReference;
        kind?: string;
        state?: string;
        statistics?: Bigquery.Schema.JobStatistics;
        status?: Bigquery.Schema.JobStatus;
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
        extract?: Bigquery.Schema.JobStatistics4;
        load?: Bigquery.Schema.JobStatistics3;
        numChildJobs?: string;
        parentJobId?: string;
        query?: Bigquery.Schema.JobStatistics2;
        quotaDeferments?: string[];
        reservationUsage?: Bigquery.Schema.JobStatisticsReservationUsage[];
        startTime?: string;
        totalBytesProcessed?: string;
        totalSlotMs?: string;
      }
      interface JobStatistics2 {
        billingTier?: number;
        cacheHit?: boolean;
        ddlOperationPerformed?: string;
        ddlTargetRoutine?: Bigquery.Schema.RoutineReference;
        ddlTargetTable?: Bigquery.Schema.TableReference;
        estimatedBytesProcessed?: string;
        modelTraining?: Bigquery.Schema.BigQueryModelTraining;
        modelTrainingCurrentIteration?: number;
        modelTrainingExpectedTotalIteration?: string;
        numDmlAffectedRows?: string;
        queryPlan?: Bigquery.Schema.ExplainQueryStage[];
        referencedTables?: Bigquery.Schema.TableReference[];
        reservationUsage?: Bigquery.Schema.JobStatistics2ReservationUsage[];
        schema?: Bigquery.Schema.TableSchema;
        statementType?: string;
        timeline?: Bigquery.Schema.QueryTimelineSample[];
        totalBytesBilled?: string;
        totalBytesProcessed?: string;
        totalBytesProcessedAccuracy?: string;
        totalPartitionsProcessed?: string;
        totalSlotMs?: string;
        undeclaredQueryParameters?: Bigquery.Schema.QueryParameter[];
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
        errorResult?: Bigquery.Schema.ErrorProto;
        errors?: Bigquery.Schema.ErrorProto[];
        state?: string;
      }
      interface MaterializedViewDefinition {
        lastRefreshTime?: string;
        query?: string;
      }
      interface ModelDefinition {
        modelOptions?: Bigquery.Schema.ModelDefinitionModelOptions;
        trainingRuns?: Bigquery.Schema.BqmlTrainingRun[];
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
        projects?: Bigquery.Schema.ProjectListProjects[];
        totalItems?: number;
      }
      interface ProjectListProjects {
        friendlyName?: string;
        id?: string;
        kind?: string;
        numericId?: string;
        projectReference?: Bigquery.Schema.ProjectReference;
      }
      interface ProjectReference {
        projectId?: string;
      }
      interface QueryParameter {
        name?: string;
        parameterType?: Bigquery.Schema.QueryParameterType;
        parameterValue?: Bigquery.Schema.QueryParameterValue;
      }
      interface QueryParameterType {
        arrayType?: Bigquery.Schema.QueryParameterType;
        structTypes?: Bigquery.Schema.QueryParameterTypeStructTypes[];
        type?: string;
      }
      interface QueryParameterTypeStructTypes {
        description?: string;
        name?: string;
        type?: Bigquery.Schema.QueryParameterType;
      }
      interface QueryParameterValue {
        arrayValues?: Bigquery.Schema.QueryParameterValue[];
        structValues?: object;
        value?: string;
      }
      interface QueryRequest {
        defaultDataset?: Bigquery.Schema.DatasetReference;
        dryRun?: boolean;
        kind?: string;
        location?: string;
        maxResults?: number;
        parameterMode?: string;
        preserveNulls?: boolean;
        query?: string;
        queryParameters?: Bigquery.Schema.QueryParameter[];
        timeoutMs?: number;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
      }
      interface QueryResponse {
        cacheHit?: boolean;
        errors?: Bigquery.Schema.ErrorProto[];
        jobComplete?: boolean;
        jobReference?: Bigquery.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: Bigquery.Schema.TableRow[];
        schema?: Bigquery.Schema.TableSchema;
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
        range?: Bigquery.Schema.RangePartitioningRange;
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
        clustering?: Bigquery.Schema.Clustering;
        creationTime?: string;
        description?: string;
        encryptionConfiguration?: Bigquery.Schema.EncryptionConfiguration;
        etag?: string;
        expirationTime?: string;
        externalDataConfiguration?: Bigquery.Schema.ExternalDataConfiguration;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        lastModifiedTime?: string;
        location?: string;
        materializedView?: Bigquery.Schema.MaterializedViewDefinition;
        model?: Bigquery.Schema.ModelDefinition;
        numBytes?: string;
        numLongTermBytes?: string;
        numPhysicalBytes?: string;
        numRows?: string;
        rangePartitioning?: Bigquery.Schema.RangePartitioning;
        requirePartitionFilter?: boolean;
        schema?: Bigquery.Schema.TableSchema;
        selfLink?: string;
        streamingBuffer?: Bigquery.Schema.Streamingbuffer;
        tableReference?: Bigquery.Schema.TableReference;
        timePartitioning?: Bigquery.Schema.TimePartitioning;
        type?: string;
        view?: Bigquery.Schema.ViewDefinition;
      }
      interface TableCell {
        v?: object;
      }
      interface TableDataInsertAllRequest {
        ignoreUnknownValues?: boolean;
        kind?: string;
        rows?: Bigquery.Schema.TableDataInsertAllRequestRows[];
        skipInvalidRows?: boolean;
        templateSuffix?: string;
      }
      interface TableDataInsertAllRequestRows {
        insertId?: string;
        json?: object;
      }
      interface TableDataInsertAllResponse {
        insertErrors?: Bigquery.Schema.TableDataInsertAllResponseInsertErrors[];
        kind?: string;
      }
      interface TableDataInsertAllResponseInsertErrors {
        errors?: Bigquery.Schema.ErrorProto[];
        index?: number;
      }
      interface TableDataList {
        etag?: string;
        kind?: string;
        pageToken?: string;
        rows?: Bigquery.Schema.TableRow[];
        totalRows?: string;
      }
      interface TableFieldSchema {
        categories?: Bigquery.Schema.TableFieldSchemaCategories;
        description?: string;
        fields?: Bigquery.Schema.TableFieldSchema[];
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
        tables?: Bigquery.Schema.TableListTables[];
        totalItems?: number;
      }
      interface TableListTables {
        clustering?: Bigquery.Schema.Clustering;
        creationTime?: string;
        expirationTime?: string;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        tableReference?: Bigquery.Schema.TableReference;
        timePartitioning?: Bigquery.Schema.TimePartitioning;
        type?: string;
        view?: Bigquery.Schema.TableListTablesView;
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
        f?: Bigquery.Schema.TableCell[];
      }
      interface TableSchema {
        fields?: Bigquery.Schema.TableFieldSchema[];
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
        userDefinedFunctionResources?: Bigquery.Schema.UserDefinedFunctionResource[];
      }
    }
  }
  interface Bigquery {
    Datasets?: Bigquery.Collection.DatasetsCollection;
    Jobs?: Bigquery.Collection.JobsCollection;
    Projects?: Bigquery.Collection.ProjectsCollection;
    Tabledata?: Bigquery.Collection.TabledataCollection;
    Tables?: Bigquery.Collection.TablesCollection;
    // Create a new instance of BigQueryModelTraining
    newBigQueryModelTraining(): Bigquery.Schema.BigQueryModelTraining;
    // Create a new instance of BigtableColumn
    newBigtableColumn(): Bigquery.Schema.BigtableColumn;
    // Create a new instance of BigtableColumnFamily
    newBigtableColumnFamily(): Bigquery.Schema.BigtableColumnFamily;
    // Create a new instance of BigtableOptions
    newBigtableOptions(): Bigquery.Schema.BigtableOptions;
    // Create a new instance of BqmlIterationResult
    newBqmlIterationResult(): Bigquery.Schema.BqmlIterationResult;
    // Create a new instance of BqmlTrainingRun
    newBqmlTrainingRun(): Bigquery.Schema.BqmlTrainingRun;
    // Create a new instance of BqmlTrainingRunTrainingOptions
    newBqmlTrainingRunTrainingOptions(): Bigquery.Schema.BqmlTrainingRunTrainingOptions;
    // Create a new instance of Clustering
    newClustering(): Bigquery.Schema.Clustering;
    // Create a new instance of CsvOptions
    newCsvOptions(): Bigquery.Schema.CsvOptions;
    // Create a new instance of Dataset
    newDataset(): Bigquery.Schema.Dataset;
    // Create a new instance of DatasetAccess
    newDatasetAccess(): Bigquery.Schema.DatasetAccess;
    // Create a new instance of DatasetReference
    newDatasetReference(): Bigquery.Schema.DatasetReference;
    // Create a new instance of DestinationTableProperties
    newDestinationTableProperties(): Bigquery.Schema.DestinationTableProperties;
    // Create a new instance of EncryptionConfiguration
    newEncryptionConfiguration(): Bigquery.Schema.EncryptionConfiguration;
    // Create a new instance of ErrorProto
    newErrorProto(): Bigquery.Schema.ErrorProto;
    // Create a new instance of ExplainQueryStage
    newExplainQueryStage(): Bigquery.Schema.ExplainQueryStage;
    // Create a new instance of ExplainQueryStep
    newExplainQueryStep(): Bigquery.Schema.ExplainQueryStep;
    // Create a new instance of ExternalDataConfiguration
    newExternalDataConfiguration(): Bigquery.Schema.ExternalDataConfiguration;
    // Create a new instance of GoogleSheetsOptions
    newGoogleSheetsOptions(): Bigquery.Schema.GoogleSheetsOptions;
    // Create a new instance of Job
    newJob(): Bigquery.Schema.Job;
    // Create a new instance of JobConfiguration
    newJobConfiguration(): Bigquery.Schema.JobConfiguration;
    // Create a new instance of JobConfigurationExtract
    newJobConfigurationExtract(): Bigquery.Schema.JobConfigurationExtract;
    // Create a new instance of JobConfigurationLoad
    newJobConfigurationLoad(): Bigquery.Schema.JobConfigurationLoad;
    // Create a new instance of JobConfigurationQuery
    newJobConfigurationQuery(): Bigquery.Schema.JobConfigurationQuery;
    // Create a new instance of JobConfigurationTableCopy
    newJobConfigurationTableCopy(): Bigquery.Schema.JobConfigurationTableCopy;
    // Create a new instance of JobReference
    newJobReference(): Bigquery.Schema.JobReference;
    // Create a new instance of JobStatistics
    newJobStatistics(): Bigquery.Schema.JobStatistics;
    // Create a new instance of JobStatistics2
    newJobStatistics2(): Bigquery.Schema.JobStatistics2;
    // Create a new instance of JobStatistics2ReservationUsage
    newJobStatistics2ReservationUsage(): Bigquery.Schema.JobStatistics2ReservationUsage;
    // Create a new instance of JobStatistics3
    newJobStatistics3(): Bigquery.Schema.JobStatistics3;
    // Create a new instance of JobStatistics4
    newJobStatistics4(): Bigquery.Schema.JobStatistics4;
    // Create a new instance of JobStatisticsReservationUsage
    newJobStatisticsReservationUsage(): Bigquery.Schema.JobStatisticsReservationUsage;
    // Create a new instance of JobStatus
    newJobStatus(): Bigquery.Schema.JobStatus;
    // Create a new instance of MaterializedViewDefinition
    newMaterializedViewDefinition(): Bigquery.Schema.MaterializedViewDefinition;
    // Create a new instance of ModelDefinition
    newModelDefinition(): Bigquery.Schema.ModelDefinition;
    // Create a new instance of ModelDefinitionModelOptions
    newModelDefinitionModelOptions(): Bigquery.Schema.ModelDefinitionModelOptions;
    // Create a new instance of QueryParameter
    newQueryParameter(): Bigquery.Schema.QueryParameter;
    // Create a new instance of QueryParameterType
    newQueryParameterType(): Bigquery.Schema.QueryParameterType;
    // Create a new instance of QueryParameterTypeStructTypes
    newQueryParameterTypeStructTypes(): Bigquery.Schema.QueryParameterTypeStructTypes;
    // Create a new instance of QueryParameterValue
    newQueryParameterValue(): Bigquery.Schema.QueryParameterValue;
    // Create a new instance of QueryRequest
    newQueryRequest(): Bigquery.Schema.QueryRequest;
    // Create a new instance of QueryTimelineSample
    newQueryTimelineSample(): Bigquery.Schema.QueryTimelineSample;
    // Create a new instance of RangePartitioning
    newRangePartitioning(): Bigquery.Schema.RangePartitioning;
    // Create a new instance of RangePartitioningRange
    newRangePartitioningRange(): Bigquery.Schema.RangePartitioningRange;
    // Create a new instance of RoutineReference
    newRoutineReference(): Bigquery.Schema.RoutineReference;
    // Create a new instance of Streamingbuffer
    newStreamingbuffer(): Bigquery.Schema.Streamingbuffer;
    // Create a new instance of Table
    newTable(): Bigquery.Schema.Table;
    // Create a new instance of TableDataInsertAllRequest
    newTableDataInsertAllRequest(): Bigquery.Schema.TableDataInsertAllRequest;
    // Create a new instance of TableDataInsertAllRequestRows
    newTableDataInsertAllRequestRows(): Bigquery.Schema.TableDataInsertAllRequestRows;
    // Create a new instance of TableFieldSchema
    newTableFieldSchema(): Bigquery.Schema.TableFieldSchema;
    // Create a new instance of TableFieldSchemaCategories
    newTableFieldSchemaCategories(): Bigquery.Schema.TableFieldSchemaCategories;
    // Create a new instance of TableReference
    newTableReference(): Bigquery.Schema.TableReference;
    // Create a new instance of TableSchema
    newTableSchema(): Bigquery.Schema.TableSchema;
    // Create a new instance of TimePartitioning
    newTimePartitioning(): Bigquery.Schema.TimePartitioning;
    // Create a new instance of UserDefinedFunctionResource
    newUserDefinedFunctionResource(): Bigquery.Schema.UserDefinedFunctionResource;
    // Create a new instance of ViewDefinition
    newViewDefinition(): Bigquery.Schema.ViewDefinition;
  }
}

declare var Bigquery: GoogleAppsScript.Bigquery;
