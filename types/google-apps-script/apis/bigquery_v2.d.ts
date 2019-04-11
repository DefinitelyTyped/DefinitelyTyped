// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Bigquery_v2 {
    namespace Collection {
      export interface DatasetsCollection {
        // Returns the dataset specified by datasetID.
        get(projectId: string, datasetId: string): Bigquery_v2.Schema.Dataset;
        // Creates a new empty dataset.
        insert(resource: Bigquery_v2.Schema.Dataset, projectId: string): Bigquery_v2.Schema.Dataset;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string): Bigquery_v2.Schema.DatasetList;
        // Lists all datasets in the specified project to which you have been granted the READER dataset role.
        list(projectId: string, optionalArgs: object): Bigquery_v2.Schema.DatasetList;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
        patch(resource: Bigquery_v2.Schema.Dataset, projectId: string, datasetId: string): Bigquery_v2.Schema.Dataset;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string): void;
        // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
        remove(projectId: string, datasetId: string, optionalArgs: object): void;
        // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
        update(resource: Bigquery_v2.Schema.Dataset, projectId: string, datasetId: string): Bigquery_v2.Schema.Dataset;
      }
      export interface JobsCollection {
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string): Bigquery_v2.Schema.JobCancelResponse;
        // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
        cancel(projectId: string, jobId: string, optionalArgs: object): Bigquery_v2.Schema.JobCancelResponse;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string): Bigquery_v2.Schema.Job;
        // Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
        get(projectId: string, jobId: string, optionalArgs: object): Bigquery_v2.Schema.Job;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string): Bigquery_v2.Schema.GetQueryResultsResponse;
        // Retrieves the results of a query job.
        getQueryResults(projectId: string, jobId: string, optionalArgs: object): Bigquery_v2.Schema.GetQueryResultsResponse;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: Bigquery_v2.Schema.Job, projectId: string): Bigquery_v2.Schema.Job;
        // Starts a new asynchronous job. Requires the Can View project role.
        insert(resource: Bigquery_v2.Schema.Job, projectId: string, mediaData: any): Bigquery_v2.Schema.Job;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string): Bigquery_v2.Schema.JobList;
        // Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
        list(projectId: string, optionalArgs: object): Bigquery_v2.Schema.JobList;
        // Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
        query(resource: Bigquery_v2.Schema.QueryRequest, projectId: string): Bigquery_v2.Schema.QueryResponse;
      }
      export interface ProjectsCollection {
        // Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
        getServiceAccount(projectId: string): Bigquery_v2.Schema.GetServiceAccountResponse;
        // Lists all projects to which you have been granted any project role.
        list(): Bigquery_v2.Schema.ProjectList;
        // Lists all projects to which you have been granted any project role.
        list(optionalArgs: object): Bigquery_v2.Schema.ProjectList;
      }
      export interface TabledataCollection {
        // Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
        insertAll(resource: Bigquery_v2.Schema.TableDataInsertAllRequest, projectId: string, datasetId: string, tableId: string): Bigquery_v2.Schema.TableDataInsertAllResponse;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string): Bigquery_v2.Schema.TableDataList;
        // Retrieves table data from a specified set of rows. Requires the READER dataset role.
        list(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Bigquery_v2.Schema.TableDataList;
      }
      export interface TablesCollection {
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string): Bigquery_v2.Schema.Table;
        // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
        get(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Bigquery_v2.Schema.Table;
        // Creates a new, empty table in the dataset.
        insert(resource: Bigquery_v2.Schema.Table, projectId: string, datasetId: string): Bigquery_v2.Schema.Table;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string): Bigquery_v2.Schema.TableList;
        // Lists all tables in the specified dataset. Requires the READER dataset role.
        list(projectId: string, datasetId: string, optionalArgs: object): Bigquery_v2.Schema.TableList;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
        patch(resource: Bigquery_v2.Schema.Table, projectId: string, datasetId: string, tableId: string): Bigquery_v2.Schema.Table;
        // Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
        remove(projectId: string, datasetId: string, tableId: string): void;
        // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
        update(resource: Bigquery_v2.Schema.Table, projectId: string, datasetId: string, tableId: string): Bigquery_v2.Schema.Table;
      }
    }
    namespace Schema {
      export interface BigQueryModelTraining {
        currentIteration?: number;
        expectedTotalIterations?: string;
      }
      export interface BigtableColumn {
        encoding?: string;
        fieldName?: string;
        onlyReadLatest?: boolean;
        qualifierEncoded?: string;
        qualifierString?: string;
        type?: string;
      }
      export interface BigtableColumnFamily {
        columns?: Bigquery_v2.Schema.BigtableColumn[];
        encoding?: string;
        familyId?: string;
        onlyReadLatest?: boolean;
        type?: string;
      }
      export interface BigtableOptions {
        columnFamilies?: Bigquery_v2.Schema.BigtableColumnFamily[];
        ignoreUnspecifiedColumnFamilies?: boolean;
        readRowkeyAsString?: boolean;
      }
      export interface BqmlIterationResult {
        durationMs?: string;
        evalLoss?: Number;
        index?: number;
        learnRate?: Number;
        trainingLoss?: Number;
      }
      export interface BqmlTrainingRun {
        iterationResults?: Bigquery_v2.Schema.BqmlIterationResult[];
        startTime?: string;
        state?: string;
        trainingOptions?: Bigquery_v2.Schema.BqmlTrainingRunTrainingOptions;
      }
      export interface BqmlTrainingRunTrainingOptions {
        earlyStop?: boolean;
        l1Reg?: Number;
        l2Reg?: Number;
        learnRate?: Number;
        learnRateStrategy?: string;
        lineSearchInitLearnRate?: Number;
        maxIteration?: string;
        minRelProgress?: Number;
        warmStart?: boolean;
      }
      export interface Clustering {
        fields?: string[];
      }
      export interface CsvOptions {
        allowJaggedRows?: boolean;
        allowQuotedNewlines?: boolean;
        encoding?: string;
        fieldDelimiter?: string;
        quote?: string;
        skipLeadingRows?: string;
      }
      export interface Dataset {
        access?: Bigquery_v2.Schema.DatasetAccess[];
        creationTime?: string;
        datasetReference?: Bigquery_v2.Schema.DatasetReference;
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
      export interface DatasetAccess {
        domain?: string;
        groupByEmail?: string;
        iamMember?: string;
        role?: string;
        specialGroup?: string;
        userByEmail?: string;
        view?: Bigquery_v2.Schema.TableReference;
      }
      export interface DatasetList {
        datasets?: Bigquery_v2.Schema.DatasetListDatasets[];
        etag?: string;
        kind?: string;
        nextPageToken?: string;
      }
      export interface DatasetListDatasets {
        datasetReference?: Bigquery_v2.Schema.DatasetReference;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        location?: string;
      }
      export interface DatasetReference {
        datasetId?: string;
        projectId?: string;
      }
      export interface DestinationTableProperties {
        description?: string;
        friendlyName?: string;
        labels?: object;
      }
      export interface EncryptionConfiguration {
        kmsKeyName?: string;
      }
      export interface ErrorProto {
        debugInfo?: string;
        location?: string;
        message?: string;
        reason?: string;
      }
      export interface ExplainQueryStage {
        completedParallelInputs?: string;
        computeMsAvg?: string;
        computeMsMax?: string;
        computeRatioAvg?: Number;
        computeRatioMax?: Number;
        endMs?: string;
        id?: string;
        inputStages?: string[];
        name?: string;
        parallelInputs?: string;
        readMsAvg?: string;
        readMsMax?: string;
        readRatioAvg?: Number;
        readRatioMax?: Number;
        recordsRead?: string;
        recordsWritten?: string;
        shuffleOutputBytes?: string;
        shuffleOutputBytesSpilled?: string;
        startMs?: string;
        status?: string;
        steps?: Bigquery_v2.Schema.ExplainQueryStep[];
        waitMsAvg?: string;
        waitMsMax?: string;
        waitRatioAvg?: Number;
        waitRatioMax?: Number;
        writeMsAvg?: string;
        writeMsMax?: string;
        writeRatioAvg?: Number;
        writeRatioMax?: Number;
      }
      export interface ExplainQueryStep {
        kind?: string;
        substeps?: string[];
      }
      export interface ExternalDataConfiguration {
        autodetect?: boolean;
        bigtableOptions?: Bigquery_v2.Schema.BigtableOptions;
        compression?: string;
        csvOptions?: Bigquery_v2.Schema.CsvOptions;
        googleSheetsOptions?: Bigquery_v2.Schema.GoogleSheetsOptions;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        schema?: Bigquery_v2.Schema.TableSchema;
        sourceFormat?: string;
        sourceUris?: string[];
      }
      export interface GetQueryResultsResponse {
        cacheHit?: boolean;
        errors?: Bigquery_v2.Schema.ErrorProto[];
        etag?: string;
        jobComplete?: boolean;
        jobReference?: Bigquery_v2.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: Bigquery_v2.Schema.TableRow[];
        schema?: Bigquery_v2.Schema.TableSchema;
        totalBytesProcessed?: string;
        totalRows?: string;
      }
      export interface GetServiceAccountResponse {
        email?: string;
        kind?: string;
      }
      export interface GoogleSheetsOptions {
        range?: string;
        skipLeadingRows?: string;
      }
      export interface Job {
        configuration?: Bigquery_v2.Schema.JobConfiguration;
        etag?: string;
        id?: string;
        jobReference?: Bigquery_v2.Schema.JobReference;
        kind?: string;
        selfLink?: string;
        statistics?: Bigquery_v2.Schema.JobStatistics;
        status?: Bigquery_v2.Schema.JobStatus;
        user_email?: string;
      }
      export interface JobCancelResponse {
        job?: Bigquery_v2.Schema.Job;
        kind?: string;
      }
      export interface JobConfiguration {
        copy?: Bigquery_v2.Schema.JobConfigurationTableCopy;
        dryRun?: boolean;
        extract?: Bigquery_v2.Schema.JobConfigurationExtract;
        jobTimeoutMs?: string;
        jobType?: string;
        labels?: object;
        load?: Bigquery_v2.Schema.JobConfigurationLoad;
        query?: Bigquery_v2.Schema.JobConfigurationQuery;
      }
      export interface JobConfigurationExtract {
        compression?: string;
        destinationFormat?: string;
        destinationUri?: string;
        destinationUris?: string[];
        fieldDelimiter?: string;
        printHeader?: boolean;
        sourceTable?: Bigquery_v2.Schema.TableReference;
      }
      export interface JobConfigurationLoad {
        allowJaggedRows?: boolean;
        allowQuotedNewlines?: boolean;
        autodetect?: boolean;
        clustering?: Bigquery_v2.Schema.Clustering;
        createDisposition?: string;
        destinationEncryptionConfiguration?: Bigquery_v2.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery_v2.Schema.TableReference;
        destinationTableProperties?: Bigquery_v2.Schema.DestinationTableProperties;
        encoding?: string;
        fieldDelimiter?: string;
        hivePartitioningMode?: string;
        ignoreUnknownValues?: boolean;
        maxBadRecords?: number;
        nullMarker?: string;
        projectionFields?: string[];
        quote?: string;
        rangePartitioning?: Bigquery_v2.Schema.RangePartitioning;
        schema?: Bigquery_v2.Schema.TableSchema;
        schemaInline?: string;
        schemaInlineFormat?: string;
        schemaUpdateOptions?: string[];
        skipLeadingRows?: number;
        sourceFormat?: string;
        sourceUris?: string[];
        timePartitioning?: Bigquery_v2.Schema.TimePartitioning;
        useAvroLogicalTypes?: boolean;
        writeDisposition?: string;
      }
      export interface JobConfigurationQuery {
        allowLargeResults?: boolean;
        clustering?: Bigquery_v2.Schema.Clustering;
        createDisposition?: string;
        defaultDataset?: Bigquery_v2.Schema.DatasetReference;
        destinationEncryptionConfiguration?: Bigquery_v2.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery_v2.Schema.TableReference;
        flattenResults?: boolean;
        maximumBillingTier?: number;
        maximumBytesBilled?: string;
        parameterMode?: string;
        preserveNulls?: boolean;
        priority?: string;
        query?: string;
        queryParameters?: Bigquery_v2.Schema.QueryParameter[];
        rangePartitioning?: Bigquery_v2.Schema.RangePartitioning;
        schemaUpdateOptions?: string[];
        tableDefinitions?: object;
        timePartitioning?: Bigquery_v2.Schema.TimePartitioning;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
        userDefinedFunctionResources?: Bigquery_v2.Schema.UserDefinedFunctionResource[];
        writeDisposition?: string;
      }
      export interface JobConfigurationTableCopy {
        createDisposition?: string;
        destinationEncryptionConfiguration?: Bigquery_v2.Schema.EncryptionConfiguration;
        destinationTable?: Bigquery_v2.Schema.TableReference;
        sourceTable?: Bigquery_v2.Schema.TableReference;
        sourceTables?: Bigquery_v2.Schema.TableReference[];
        writeDisposition?: string;
      }
      export interface JobList {
        etag?: string;
        jobs?: Bigquery_v2.Schema.JobListJobs[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface JobListJobs {
        configuration?: Bigquery_v2.Schema.JobConfiguration;
        errorResult?: Bigquery_v2.Schema.ErrorProto;
        id?: string;
        jobReference?: Bigquery_v2.Schema.JobReference;
        kind?: string;
        state?: string;
        statistics?: Bigquery_v2.Schema.JobStatistics;
        status?: Bigquery_v2.Schema.JobStatus;
        user_email?: string;
      }
      export interface JobReference {
        jobId?: string;
        location?: string;
        projectId?: string;
      }
      export interface JobStatistics {
        completionRatio?: Number;
        creationTime?: string;
        endTime?: string;
        extract?: Bigquery_v2.Schema.JobStatistics4;
        load?: Bigquery_v2.Schema.JobStatistics3;
        numChildJobs?: string;
        parentJobId?: string;
        query?: Bigquery_v2.Schema.JobStatistics2;
        quotaDeferments?: string[];
        reservationUsage?: Bigquery_v2.Schema.JobStatisticsReservationUsage[];
        startTime?: string;
        totalBytesProcessed?: string;
        totalSlotMs?: string;
      }
      export interface JobStatistics2 {
        billingTier?: number;
        cacheHit?: boolean;
        ddlOperationPerformed?: string;
        ddlTargetRoutine?: Bigquery_v2.Schema.RoutineReference;
        ddlTargetTable?: Bigquery_v2.Schema.TableReference;
        estimatedBytesProcessed?: string;
        modelTraining?: Bigquery_v2.Schema.BigQueryModelTraining;
        modelTrainingCurrentIteration?: number;
        modelTrainingExpectedTotalIteration?: string;
        numDmlAffectedRows?: string;
        queryPlan?: Bigquery_v2.Schema.ExplainQueryStage[];
        referencedTables?: Bigquery_v2.Schema.TableReference[];
        reservationUsage?: Bigquery_v2.Schema.JobStatistics2ReservationUsage[];
        schema?: Bigquery_v2.Schema.TableSchema;
        statementType?: string;
        timeline?: Bigquery_v2.Schema.QueryTimelineSample[];
        totalBytesBilled?: string;
        totalBytesProcessed?: string;
        totalBytesProcessedAccuracy?: string;
        totalPartitionsProcessed?: string;
        totalSlotMs?: string;
        undeclaredQueryParameters?: Bigquery_v2.Schema.QueryParameter[];
      }
      export interface JobStatistics2ReservationUsage {
        name?: string;
        slotMs?: string;
      }
      export interface JobStatistics3 {
        badRecords?: string;
        inputFileBytes?: string;
        inputFiles?: string;
        outputBytes?: string;
        outputRows?: string;
      }
      export interface JobStatistics4 {
        destinationUriFileCounts?: string[];
        inputBytes?: string;
      }
      export interface JobStatisticsReservationUsage {
        name?: string;
        slotMs?: string;
      }
      export interface JobStatus {
        errorResult?: Bigquery_v2.Schema.ErrorProto;
        errors?: Bigquery_v2.Schema.ErrorProto[];
        state?: string;
      }
      export interface MaterializedViewDefinition {
        lastRefreshTime?: string;
        query?: string;
      }
      export interface ModelDefinition {
        modelOptions?: Bigquery_v2.Schema.ModelDefinitionModelOptions;
        trainingRuns?: Bigquery_v2.Schema.BqmlTrainingRun[];
      }
      export interface ModelDefinitionModelOptions {
        labels?: string[];
        lossType?: string;
        modelType?: string;
      }
      export interface ProjectList {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        projects?: Bigquery_v2.Schema.ProjectListProjects[];
        totalItems?: number;
      }
      export interface ProjectListProjects {
        friendlyName?: string;
        id?: string;
        kind?: string;
        numericId?: string;
        projectReference?: Bigquery_v2.Schema.ProjectReference;
      }
      export interface ProjectReference {
        projectId?: string;
      }
      export interface QueryParameter {
        name?: string;
        parameterType?: Bigquery_v2.Schema.QueryParameterType;
        parameterValue?: Bigquery_v2.Schema.QueryParameterValue;
      }
      export interface QueryParameterType {
        arrayType?: Bigquery_v2.Schema.QueryParameterType;
        structTypes?: Bigquery_v2.Schema.QueryParameterTypeStructTypes[];
        type?: string;
      }
      export interface QueryParameterTypeStructTypes {
        description?: string;
        name?: string;
        type?: Bigquery_v2.Schema.QueryParameterType;
      }
      export interface QueryParameterValue {
        arrayValues?: Bigquery_v2.Schema.QueryParameterValue[];
        structValues?: object;
        value?: string;
      }
      export interface QueryRequest {
        defaultDataset?: Bigquery_v2.Schema.DatasetReference;
        dryRun?: boolean;
        kind?: string;
        location?: string;
        maxResults?: number;
        parameterMode?: string;
        preserveNulls?: boolean;
        query?: string;
        queryParameters?: Bigquery_v2.Schema.QueryParameter[];
        timeoutMs?: number;
        useLegacySql?: boolean;
        useQueryCache?: boolean;
      }
      export interface QueryResponse {
        cacheHit?: boolean;
        errors?: Bigquery_v2.Schema.ErrorProto[];
        jobComplete?: boolean;
        jobReference?: Bigquery_v2.Schema.JobReference;
        kind?: string;
        numDmlAffectedRows?: string;
        pageToken?: string;
        rows?: Bigquery_v2.Schema.TableRow[];
        schema?: Bigquery_v2.Schema.TableSchema;
        totalBytesProcessed?: string;
        totalRows?: string;
      }
      export interface QueryTimelineSample {
        activeUnits?: string;
        completedUnits?: string;
        elapsedMs?: string;
        pendingUnits?: string;
        totalSlotMs?: string;
      }
      export interface RangePartitioning {
        field?: string;
        range?: Bigquery_v2.Schema.RangePartitioningRange;
      }
      export interface RangePartitioningRange {
        end?: string;
        interval?: string;
        start?: string;
      }
      export interface RoutineReference {
        datasetId?: string;
        projectId?: string;
        routineId?: string;
      }
      export interface Streamingbuffer {
        estimatedBytes?: string;
        estimatedRows?: string;
        oldestEntryTime?: string;
      }
      export interface Table {
        clustering?: Bigquery_v2.Schema.Clustering;
        creationTime?: string;
        description?: string;
        encryptionConfiguration?: Bigquery_v2.Schema.EncryptionConfiguration;
        etag?: string;
        expirationTime?: string;
        externalDataConfiguration?: Bigquery_v2.Schema.ExternalDataConfiguration;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        lastModifiedTime?: string;
        location?: string;
        materializedView?: Bigquery_v2.Schema.MaterializedViewDefinition;
        model?: Bigquery_v2.Schema.ModelDefinition;
        numBytes?: string;
        numLongTermBytes?: string;
        numPhysicalBytes?: string;
        numRows?: string;
        rangePartitioning?: Bigquery_v2.Schema.RangePartitioning;
        requirePartitionFilter?: boolean;
        schema?: Bigquery_v2.Schema.TableSchema;
        selfLink?: string;
        streamingBuffer?: Bigquery_v2.Schema.Streamingbuffer;
        tableReference?: Bigquery_v2.Schema.TableReference;
        timePartitioning?: Bigquery_v2.Schema.TimePartitioning;
        type?: string;
        view?: Bigquery_v2.Schema.ViewDefinition;
      }
      export interface TableCell {
        v?: object;
      }
      export interface TableDataInsertAllRequest {
        ignoreUnknownValues?: boolean;
        kind?: string;
        rows?: Bigquery_v2.Schema.TableDataInsertAllRequestRows[];
        skipInvalidRows?: boolean;
        templateSuffix?: string;
      }
      export interface TableDataInsertAllRequestRows {
        insertId?: string;
        json?: object;
      }
      export interface TableDataInsertAllResponse {
        insertErrors?: Bigquery_v2.Schema.TableDataInsertAllResponseInsertErrors[];
        kind?: string;
      }
      export interface TableDataInsertAllResponseInsertErrors {
        errors?: Bigquery_v2.Schema.ErrorProto[];
        index?: number;
      }
      export interface TableDataList {
        etag?: string;
        kind?: string;
        pageToken?: string;
        rows?: Bigquery_v2.Schema.TableRow[];
        totalRows?: string;
      }
      export interface TableFieldSchema {
        categories?: Bigquery_v2.Schema.TableFieldSchemaCategories;
        description?: string;
        fields?: Bigquery_v2.Schema.TableFieldSchema[];
        mode?: string;
        name?: string;
        type?: string;
      }
      export interface TableFieldSchemaCategories {
        names?: string[];
      }
      export interface TableList {
        etag?: string;
        kind?: string;
        nextPageToken?: string;
        tables?: Bigquery_v2.Schema.TableListTables[];
        totalItems?: number;
      }
      export interface TableListTables {
        clustering?: Bigquery_v2.Schema.Clustering;
        creationTime?: string;
        expirationTime?: string;
        friendlyName?: string;
        id?: string;
        kind?: string;
        labels?: object;
        tableReference?: Bigquery_v2.Schema.TableReference;
        timePartitioning?: Bigquery_v2.Schema.TimePartitioning;
        type?: string;
        view?: Bigquery_v2.Schema.TableListTablesView;
      }
      export interface TableListTablesView {
        useLegacySql?: boolean;
      }
      export interface TableReference {
        datasetId?: string;
        projectId?: string;
        tableId?: string;
      }
      export interface TableRow {
        f?: Bigquery_v2.Schema.TableCell[];
      }
      export interface TableSchema {
        fields?: Bigquery_v2.Schema.TableFieldSchema[];
      }
      export interface TimePartitioning {
        expirationMs?: string;
        field?: string;
        requirePartitionFilter?: boolean;
        type?: string;
      }
      export interface UserDefinedFunctionResource {
        inlineCode?: string;
        resourceUri?: string;
      }
      export interface ViewDefinition {
        query?: string;
        useLegacySql?: boolean;
        userDefinedFunctionResources?: Bigquery_v2.Schema.UserDefinedFunctionResource[];
      }
    }
  }
  export interface Bigquery_v2 {
    Datasets?: Bigquery_v2.Collection.DatasetsCollection;
    Jobs?: Bigquery_v2.Collection.JobsCollection;
    Projects?: Bigquery_v2.Collection.ProjectsCollection;
    Tabledata?: Bigquery_v2.Collection.TabledataCollection;
    Tables?: Bigquery_v2.Collection.TablesCollection;
    // Create a new instance of BigQueryModelTraining
    newBigQueryModelTraining(): Bigquery_v2.Schema.BigQueryModelTraining;
    // Create a new instance of BigtableColumn
    newBigtableColumn(): Bigquery_v2.Schema.BigtableColumn;
    // Create a new instance of BigtableColumnFamily
    newBigtableColumnFamily(): Bigquery_v2.Schema.BigtableColumnFamily;
    // Create a new instance of BigtableOptions
    newBigtableOptions(): Bigquery_v2.Schema.BigtableOptions;
    // Create a new instance of BqmlIterationResult
    newBqmlIterationResult(): Bigquery_v2.Schema.BqmlIterationResult;
    // Create a new instance of BqmlTrainingRun
    newBqmlTrainingRun(): Bigquery_v2.Schema.BqmlTrainingRun;
    // Create a new instance of BqmlTrainingRunTrainingOptions
    newBqmlTrainingRunTrainingOptions(): Bigquery_v2.Schema.BqmlTrainingRunTrainingOptions;
    // Create a new instance of Clustering
    newClustering(): Bigquery_v2.Schema.Clustering;
    // Create a new instance of CsvOptions
    newCsvOptions(): Bigquery_v2.Schema.CsvOptions;
    // Create a new instance of Dataset
    newDataset(): Bigquery_v2.Schema.Dataset;
    // Create a new instance of DatasetAccess
    newDatasetAccess(): Bigquery_v2.Schema.DatasetAccess;
    // Create a new instance of DatasetReference
    newDatasetReference(): Bigquery_v2.Schema.DatasetReference;
    // Create a new instance of DestinationTableProperties
    newDestinationTableProperties(): Bigquery_v2.Schema.DestinationTableProperties;
    // Create a new instance of EncryptionConfiguration
    newEncryptionConfiguration(): Bigquery_v2.Schema.EncryptionConfiguration;
    // Create a new instance of ErrorProto
    newErrorProto(): Bigquery_v2.Schema.ErrorProto;
    // Create a new instance of ExplainQueryStage
    newExplainQueryStage(): Bigquery_v2.Schema.ExplainQueryStage;
    // Create a new instance of ExplainQueryStep
    newExplainQueryStep(): Bigquery_v2.Schema.ExplainQueryStep;
    // Create a new instance of ExternalDataConfiguration
    newExternalDataConfiguration(): Bigquery_v2.Schema.ExternalDataConfiguration;
    // Create a new instance of GoogleSheetsOptions
    newGoogleSheetsOptions(): Bigquery_v2.Schema.GoogleSheetsOptions;
    // Create a new instance of Job
    newJob(): Bigquery_v2.Schema.Job;
    // Create a new instance of JobConfiguration
    newJobConfiguration(): Bigquery_v2.Schema.JobConfiguration;
    // Create a new instance of JobConfigurationExtract
    newJobConfigurationExtract(): Bigquery_v2.Schema.JobConfigurationExtract;
    // Create a new instance of JobConfigurationLoad
    newJobConfigurationLoad(): Bigquery_v2.Schema.JobConfigurationLoad;
    // Create a new instance of JobConfigurationQuery
    newJobConfigurationQuery(): Bigquery_v2.Schema.JobConfigurationQuery;
    // Create a new instance of JobConfigurationTableCopy
    newJobConfigurationTableCopy(): Bigquery_v2.Schema.JobConfigurationTableCopy;
    // Create a new instance of JobReference
    newJobReference(): Bigquery_v2.Schema.JobReference;
    // Create a new instance of JobStatistics
    newJobStatistics(): Bigquery_v2.Schema.JobStatistics;
    // Create a new instance of JobStatistics2
    newJobStatistics2(): Bigquery_v2.Schema.JobStatistics2;
    // Create a new instance of JobStatistics2ReservationUsage
    newJobStatistics2ReservationUsage(): Bigquery_v2.Schema.JobStatistics2ReservationUsage;
    // Create a new instance of JobStatistics3
    newJobStatistics3(): Bigquery_v2.Schema.JobStatistics3;
    // Create a new instance of JobStatistics4
    newJobStatistics4(): Bigquery_v2.Schema.JobStatistics4;
    // Create a new instance of JobStatisticsReservationUsage
    newJobStatisticsReservationUsage(): Bigquery_v2.Schema.JobStatisticsReservationUsage;
    // Create a new instance of JobStatus
    newJobStatus(): Bigquery_v2.Schema.JobStatus;
    // Create a new instance of MaterializedViewDefinition
    newMaterializedViewDefinition(): Bigquery_v2.Schema.MaterializedViewDefinition;
    // Create a new instance of ModelDefinition
    newModelDefinition(): Bigquery_v2.Schema.ModelDefinition;
    // Create a new instance of ModelDefinitionModelOptions
    newModelDefinitionModelOptions(): Bigquery_v2.Schema.ModelDefinitionModelOptions;
    // Create a new instance of QueryParameter
    newQueryParameter(): Bigquery_v2.Schema.QueryParameter;
    // Create a new instance of QueryParameterType
    newQueryParameterType(): Bigquery_v2.Schema.QueryParameterType;
    // Create a new instance of QueryParameterTypeStructTypes
    newQueryParameterTypeStructTypes(): Bigquery_v2.Schema.QueryParameterTypeStructTypes;
    // Create a new instance of QueryParameterValue
    newQueryParameterValue(): Bigquery_v2.Schema.QueryParameterValue;
    // Create a new instance of QueryRequest
    newQueryRequest(): Bigquery_v2.Schema.QueryRequest;
    // Create a new instance of QueryTimelineSample
    newQueryTimelineSample(): Bigquery_v2.Schema.QueryTimelineSample;
    // Create a new instance of RangePartitioning
    newRangePartitioning(): Bigquery_v2.Schema.RangePartitioning;
    // Create a new instance of RangePartitioningRange
    newRangePartitioningRange(): Bigquery_v2.Schema.RangePartitioningRange;
    // Create a new instance of RoutineReference
    newRoutineReference(): Bigquery_v2.Schema.RoutineReference;
    // Create a new instance of Streamingbuffer
    newStreamingbuffer(): Bigquery_v2.Schema.Streamingbuffer;
    // Create a new instance of Table
    newTable(): Bigquery_v2.Schema.Table;
    // Create a new instance of TableDataInsertAllRequest
    newTableDataInsertAllRequest(): Bigquery_v2.Schema.TableDataInsertAllRequest;
    // Create a new instance of TableDataInsertAllRequestRows
    newTableDataInsertAllRequestRows(): Bigquery_v2.Schema.TableDataInsertAllRequestRows;
    // Create a new instance of TableFieldSchema
    newTableFieldSchema(): Bigquery_v2.Schema.TableFieldSchema;
    // Create a new instance of TableFieldSchemaCategories
    newTableFieldSchemaCategories(): Bigquery_v2.Schema.TableFieldSchemaCategories;
    // Create a new instance of TableReference
    newTableReference(): Bigquery_v2.Schema.TableReference;
    // Create a new instance of TableSchema
    newTableSchema(): Bigquery_v2.Schema.TableSchema;
    // Create a new instance of TimePartitioning
    newTimePartitioning(): Bigquery_v2.Schema.TimePartitioning;
    // Create a new instance of UserDefinedFunctionResource
    newUserDefinedFunctionResource(): Bigquery_v2.Schema.UserDefinedFunctionResource;
    // Create a new instance of ViewDefinition
    newViewDefinition(): Bigquery_v2.Schema.ViewDefinition;
  }
}

declare var Bigquery_v2: GoogleAppsScript.Bigquery_v2;