// Generated From https://github.com/googleapis/discovery-artifact-manager.
declare namespace GoogleAppsScript {
    namespace BigQuery {
        namespace Collection {
            interface DatasetsCollection {
                get(
                    projectId: string,
                    datasetId: string,
                    args?: {
                        accessPolicyVersion?: number | undefined;
                        datasetView?: "DATASET_VIEW_UNSPECIFIED" | "METADATA" | "ACL" | "FULL" | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                insert(
                    $resource: BigQuery.Schema.Dataset,
                    projectId: string,
                    args?: {
                        accessPolicyVersion?: number | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                list(
                    projectId: string,
                    args?: {
                        all?: boolean | undefined;
                        filter?: string | undefined;
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.DatasetList;
                patch(
                    $resource: BigQuery.Schema.Dataset,
                    projectId: string,
                    datasetId: string,
                    args?: {
                        accessPolicyVersion?: number | undefined;
                        updateMode?:
                            | "UPDATE_MODE_UNSPECIFIED"
                            | "UPDATE_METADATA"
                            | "UPDATE_ACL"
                            | "UPDATE_FULL"
                            | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                remove(
                    projectId: string,
                    datasetId: string,
                    args?: {
                        deleteContents?: boolean | undefined;
                    },
                ): void;
                undelete(
                    $resource: BigQuery.Schema.UndeleteDatasetRequest,
                    projectId: string,
                    datasetId: string,
                ): BigQuery.Schema.Dataset;
                update(
                    $resource: BigQuery.Schema.Dataset,
                    projectId: string,
                    datasetId: string,
                    args?: {
                        accessPolicyVersion?: number | undefined;
                        updateMode?:
                            | "UPDATE_MODE_UNSPECIFIED"
                            | "UPDATE_METADATA"
                            | "UPDATE_ACL"
                            | "UPDATE_FULL"
                            | undefined;
                    },
                ): BigQuery.Schema.Dataset;
            }
            interface JobsCollection {
                cancel(
                    projectId: string,
                    jobId: string,
                    args?: {
                        location?: string | undefined;
                    },
                ): BigQuery.Schema.JobCancelResponse;
                get(
                    projectId: string,
                    jobId: string,
                    args?: {
                        location?: string | undefined;
                    },
                ): BigQuery.Schema.Job;
                getQueryResults(
                    projectId: string,
                    jobId: string,
                    args?: {
                        "formatOptions.timestampOutputFormat"?:
                            | "TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED"
                            | "FLOAT64"
                            | "INT64"
                            | "ISO8601_STRING"
                            | undefined;
                        "formatOptions.useInt64Timestamp"?: boolean | undefined;
                        location?: string | undefined;
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                        startIndex?: string | undefined;
                        timeoutMs?: number | undefined;
                    },
                ): BigQuery.Schema.GetQueryResultsResponse;
                insert(
                    $resource: BigQuery.Schema.Job,
                    projectId: string,
                ): BigQuery.Schema.Job;
                list(
                    projectId: string,
                    args?: {
                        allUsers?: boolean | undefined;
                        maxCreationTime?: string | undefined;
                        maxResults?: number | undefined;
                        minCreationTime?: string | undefined;
                        pageToken?: string | undefined;
                        parentJobId?: string | undefined;
                        projection?: "full" | "minimal" | undefined;
                        stateFilter?: "done" | "pending" | "running" | undefined;
                    },
                ): BigQuery.Schema.JobList;
                query(
                    $resource: BigQuery.Schema.QueryRequest,
                    projectId: string,
                ): BigQuery.Schema.QueryResponse;
                remove(
                    projectId: string,
                    jobId: string,
                    args?: {
                        location?: string | undefined;
                    },
                ): void;
            }
            interface ModelsCollection {
                get(
                    projectId: string,
                    datasetId: string,
                    modelId: string,
                ): BigQuery.Schema.Model;
                list(
                    projectId: string,
                    datasetId: string,
                    args?: {
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ListModelsResponse;
                patch(
                    $resource: BigQuery.Schema.Model,
                    projectId: string,
                    datasetId: string,
                    modelId: string,
                ): BigQuery.Schema.Model;
                remove(
                    projectId: string,
                    datasetId: string,
                    modelId: string,
                ): void;
            }
            interface ProjectsCollection {
                getServiceAccount(
                    projectId: string,
                ): BigQuery.Schema.GetServiceAccountResponse;
                list(
                    args?: {
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ProjectList;
            }
            interface RoutinesCollection {
                get(
                    projectId: string,
                    datasetId: string,
                    routineId: string,
                    args?: {
                        readMask?: string | undefined;
                    },
                ): BigQuery.Schema.Routine;
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    resource: string,
                ): BigQuery.Schema.Policy;
                insert(
                    $resource: BigQuery.Schema.Routine,
                    projectId: string,
                    datasetId: string,
                ): BigQuery.Schema.Routine;
                list(
                    projectId: string,
                    datasetId: string,
                    args?: {
                        filter?: string | undefined;
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                        readMask?: string | undefined;
                    },
                ): BigQuery.Schema.ListRoutinesResponse;
                remove(
                    projectId: string,
                    datasetId: string,
                    routineId: string,
                ): void;
                setIamPolicy(
                    $resource: BigQuery.Schema.SetIamPolicyRequest,
                    resource: string,
                ): BigQuery.Schema.Policy;
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                update(
                    $resource: BigQuery.Schema.Routine,
                    projectId: string,
                    datasetId: string,
                    routineId: string,
                ): BigQuery.Schema.Routine;
            }
            interface RowaccesspoliciesCollection {
                batchDelete(
                    $resource: BigQuery.Schema.BatchDeleteRowAccessPoliciesRequest,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                ): void;
                get(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    policyId: string,
                ): BigQuery.Schema.RowAccessPolicy;
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    resource: string,
                ): BigQuery.Schema.Policy;
                insert(
                    $resource: BigQuery.Schema.RowAccessPolicy,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                ): BigQuery.Schema.RowAccessPolicy;
                list(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    args?: {
                        pageSize?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ListRowAccessPoliciesResponse;
                remove(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    policyId: string,
                    args?: {
                        force?: boolean | undefined;
                    },
                ): void;
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                update(
                    $resource: BigQuery.Schema.RowAccessPolicy,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    policyId: string,
                ): BigQuery.Schema.RowAccessPolicy;
            }
            interface TabledataCollection {
                insertAll(
                    $resource: BigQuery.Schema.TableDataInsertAllRequest,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                ): BigQuery.Schema.TableDataInsertAllResponse;
                list(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    args?: {
                        "formatOptions.timestampOutputFormat"?:
                            | "TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED"
                            | "FLOAT64"
                            | "INT64"
                            | "ISO8601_STRING"
                            | undefined;
                        "formatOptions.useInt64Timestamp"?: boolean | undefined;
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                        selectedFields?: string | undefined;
                        startIndex?: string | undefined;
                    },
                ): BigQuery.Schema.TableDataList;
            }
            interface TablesCollection {
                get(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    args?: {
                        selectedFields?: string | undefined;
                        view?: "TABLE_METADATA_VIEW_UNSPECIFIED" | "BASIC" | "STORAGE_STATS" | "FULL" | undefined;
                    },
                ): BigQuery.Schema.Table;
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    resource: string,
                ): BigQuery.Schema.Policy;
                insert(
                    $resource: BigQuery.Schema.Table,
                    projectId: string,
                    datasetId: string,
                ): BigQuery.Schema.Table;
                list(
                    projectId: string,
                    datasetId: string,
                    args?: {
                        maxResults?: number | undefined;
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.TableList;
                patch(
                    $resource: BigQuery.Schema.Table,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    args?: {
                        autodetect_schema?: boolean | undefined;
                    },
                ): BigQuery.Schema.Table;
                remove(
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                ): void;
                setIamPolicy(
                    $resource: BigQuery.Schema.SetIamPolicyRequest,
                    resource: string,
                ): BigQuery.Schema.Policy;
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                update(
                    $resource: BigQuery.Schema.Table,
                    projectId: string,
                    datasetId: string,
                    tableId: string,
                    args?: {
                        autodetect_schema?: boolean | undefined;
                    },
                ): BigQuery.Schema.Table;
            }
        }

        namespace Schema {
            interface AggregateClassificationMetrics {
                accuracy?: number | undefined;
                f1Score?: number | undefined;
                logLoss?: number | undefined;
                precision?: number | undefined;
                recall?: number | undefined;
                rocAuc?: number | undefined;
                threshold?: number | undefined;
            }
            interface AggregationThresholdPolicy {
                privacyUnitColumns?: Array<string> | undefined;
                threshold?: string | undefined;
            }
            interface Argument {
                argumentKind?:
                    | "ARGUMENT_KIND_UNSPECIFIED"
                    | "FIXED_TYPE"
                    | "ANY_TYPE"
                    | "FIXED_TABLE"
                    | "ANY_TABLE"
                    | undefined;
                dataType?: BigQuery.Schema.StandardSqlDataType | undefined;
                isAggregate?: boolean | undefined;
                mode?: "MODE_UNSPECIFIED" | "IN" | "OUT" | "INOUT" | undefined;
                name?: string | undefined;
                tableType?: BigQuery.Schema.StandardSqlTableType | undefined;
            }
            interface ArimaCoefficients {
                autoRegressiveCoefficients?: Array<number> | undefined;
                interceptCoefficient?: number | undefined;
                movingAverageCoefficients?: Array<number> | undefined;
            }
            interface ArimaFittingMetrics {
                aic?: number | undefined;
                logLikelihood?: number | undefined;
                variance?: number | undefined;
            }
            interface ArimaForecastingMetrics {
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics[] | undefined;
                arimaSingleModelForecastingMetrics?:
                    | BigQuery.Schema.ArimaSingleModelForecastingMetrics[]
                    | undefined;
                hasDrift?: Array<boolean> | undefined;
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder[] | undefined;
                seasonalPeriods?:
                    | Array<
                        | "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
                        | "NO_SEASONALITY"
                        | "DAILY"
                        | "WEEKLY"
                        | "MONTHLY"
                        | "QUARTERLY"
                        | "YEARLY"
                        | "HOURLY"
                    >
                    | undefined;
                timeSeriesId?: Array<string> | undefined;
            }
            interface ArimaModelInfo {
                arimaCoefficients?: BigQuery.Schema.ArimaCoefficients | undefined;
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics | undefined;
                hasDrift?: boolean | undefined;
                hasHolidayEffect?: boolean | undefined;
                hasSpikesAndDips?: boolean | undefined;
                hasStepChanges?: boolean | undefined;
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                seasonalPeriods?:
                    | Array<
                        | "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
                        | "NO_SEASONALITY"
                        | "DAILY"
                        | "WEEKLY"
                        | "MONTHLY"
                        | "QUARTERLY"
                        | "YEARLY"
                        | "HOURLY"
                    >
                    | undefined;
                timeSeriesId?: string | undefined;
                timeSeriesIds?: Array<string> | undefined;
            }
            interface ArimaOrder {
                d?: string | undefined;
                p?: string | undefined;
                q?: string | undefined;
            }
            interface ArimaResult {
                arimaModelInfo?: BigQuery.Schema.ArimaModelInfo[] | undefined;
                seasonalPeriods?:
                    | Array<
                        | "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
                        | "NO_SEASONALITY"
                        | "DAILY"
                        | "WEEKLY"
                        | "MONTHLY"
                        | "QUARTERLY"
                        | "YEARLY"
                        | "HOURLY"
                    >
                    | undefined;
            }
            interface ArimaSingleModelForecastingMetrics {
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics | undefined;
                hasDrift?: boolean | undefined;
                hasHolidayEffect?: boolean | undefined;
                hasSpikesAndDips?: boolean | undefined;
                hasStepChanges?: boolean | undefined;
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                seasonalPeriods?:
                    | Array<
                        | "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
                        | "NO_SEASONALITY"
                        | "DAILY"
                        | "WEEKLY"
                        | "MONTHLY"
                        | "QUARTERLY"
                        | "YEARLY"
                        | "HOURLY"
                    >
                    | undefined;
                timeSeriesId?: string | undefined;
                timeSeriesIds?: Array<string> | undefined;
            }
            interface ArrowRecordBatch {
                serializedRecordBatch?: string | undefined;
            }
            interface ArrowSchema {
                serializedSchema?: string | undefined;
            }
            interface ArrowSerializationOptions {
                bufferCompression?: "COMPRESSION_UNSPECIFIED" | "LZ4_FRAME" | "ZSTD" | undefined;
                picosTimestampPrecision?:
                    | "PICOS_TIMESTAMP_PRECISION_UNSPECIFIED"
                    | "TIMESTAMP_PRECISION_MICROS"
                    | "TIMESTAMP_PRECISION_NANOS"
                    | "TIMESTAMP_PRECISION_PICOS"
                    | undefined;
            }
            interface AuditConfig {
                auditLogConfigs?: BigQuery.Schema.AuditLogConfig[] | undefined;
                service?: string | undefined;
            }
            interface AuditLogConfig {
                exemptedMembers?: Array<string> | undefined;
                logType?: "LOG_TYPE_UNSPECIFIED" | "ADMIN_READ" | "DATA_WRITE" | "DATA_READ" | undefined;
            }
            interface AvroOptions {
                useAvroLogicalTypes?: boolean | undefined;
            }
            interface BatchDeleteRowAccessPoliciesRequest {
                force?: boolean | undefined;
                policyIds?: Array<string> | undefined;
            }
            interface BiEngineReason {
                code?:
                    | "CODE_UNSPECIFIED"
                    | "NO_RESERVATION"
                    | "INSUFFICIENT_RESERVATION"
                    | "UNSUPPORTED_SQL_TEXT"
                    | "INPUT_TOO_LARGE"
                    | "OTHER_REASON"
                    | "TABLE_EXCLUDED"
                    | undefined;
                message?: string | undefined;
            }
            interface BiEngineStatistics {
                accelerationMode?:
                    | "BI_ENGINE_ACCELERATION_MODE_UNSPECIFIED"
                    | "BI_ENGINE_DISABLED"
                    | "PARTIAL_INPUT"
                    | "FULL_INPUT"
                    | "FULL_QUERY"
                    | undefined;
                biEngineMode?: "ACCELERATION_MODE_UNSPECIFIED" | "DISABLED" | "PARTIAL" | "FULL" | undefined;
                biEngineReasons?: BigQuery.Schema.BiEngineReason[] | undefined;
            }
            interface BigLakeConfiguration {
                connectionId?: string | undefined;
                fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "PARQUET" | undefined;
                storageUri?: string | undefined;
                tableFormat?: "TABLE_FORMAT_UNSPECIFIED" | "ICEBERG" | undefined;
            }
            interface BigQueryModelTraining {
                currentIteration?: number | undefined;
                expectedTotalIterations?: string | undefined;
            }
            interface BigtableColumn {
                encoding?: string | undefined;
                fieldName?: string | undefined;
                onlyReadLatest?: boolean | undefined;
                protoConfig?: BigQuery.Schema.BigtableProtoConfig | undefined;
                qualifierEncoded?: string | undefined;
                qualifierString?: string | undefined;
                type?: string | undefined;
            }
            interface BigtableColumnFamily {
                columns?: BigQuery.Schema.BigtableColumn[] | undefined;
                encoding?: string | undefined;
                familyId?: string | undefined;
                onlyReadLatest?: boolean | undefined;
                protoConfig?: BigQuery.Schema.BigtableProtoConfig | undefined;
                type?: string | undefined;
            }
            interface BigtableOptions {
                columnFamilies?: BigQuery.Schema.BigtableColumnFamily[] | undefined;
                ignoreUnspecifiedColumnFamilies?: boolean | undefined;
                outputColumnFamiliesAsJson?: boolean | undefined;
                readRowkeyAsString?: boolean | undefined;
            }
            interface BigtableProtoConfig {
                protoMessageName?: string | undefined;
                schemaBundleId?: string | undefined;
            }
            interface BinaryClassificationMetrics {
                aggregateClassificationMetrics?: BigQuery.Schema.AggregateClassificationMetrics | undefined;
                binaryConfusionMatrixList?: BigQuery.Schema.BinaryConfusionMatrix[] | undefined;
                negativeLabel?: string | undefined;
                positiveLabel?: string | undefined;
            }
            interface BinaryConfusionMatrix {
                accuracy?: number | undefined;
                f1Score?: number | undefined;
                falseNegatives?: string | undefined;
                falsePositives?: string | undefined;
                positiveClassThreshold?: number | undefined;
                precision?: number | undefined;
                recall?: number | undefined;
                trueNegatives?: string | undefined;
                truePositives?: string | undefined;
            }
            interface Binding {
                condition?: BigQuery.Schema.Expr | undefined;
                members?: Array<string> | undefined;
                role?: string | undefined;
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
                trainingOptions?: {
                    earlyStop?: boolean | undefined;
                    l1Reg?: number | undefined;
                    l2Reg?: number | undefined;
                    learnRate?: number | undefined;
                    learnRateStrategy?: string | undefined;
                    lineSearchInitLearnRate?: number | undefined;
                    maxIteration?: string | undefined;
                    minRelProgress?: number | undefined;
                    warmStart?: boolean | undefined;
                } | undefined;
            }
            interface CategoricalValue {
                categoryCounts?: BigQuery.Schema.CategoryCount[] | undefined;
            }
            interface CategoryCount {
                category?: string | undefined;
                count?: string | undefined;
            }
            interface CloneDefinition {
                baseTableReference?: BigQuery.Schema.TableReference | undefined;
                cloneTime?: string | undefined;
            }
            interface Cluster {
                centroidId?: string | undefined;
                count?: string | undefined;
                featureValues?: BigQuery.Schema.FeatureValue[] | undefined;
            }
            interface ClusterInfo {
                centroidId?: string | undefined;
                clusterRadius?: number | undefined;
                clusterSize?: string | undefined;
            }
            interface Clustering {
                fields?: Array<string> | undefined;
            }
            interface ClusteringMetrics {
                clusters?: BigQuery.Schema.Cluster[] | undefined;
                daviesBouldinIndex?: number | undefined;
                meanSquaredDistance?: number | undefined;
            }
            interface ConfusionMatrix {
                confidenceThreshold?: number | undefined;
                rows?: BigQuery.Schema.Row[] | undefined;
            }
            interface ConnectionProperty {
                key?: string | undefined;
                value?: string | undefined;
            }
            interface CsvOptions {
                allowJaggedRows?: boolean | undefined;
                allowQuotedNewlines?: boolean | undefined;
                encoding?: string | undefined;
                fieldDelimiter?: string | undefined;
                nullMarker?: string | undefined;
                nullMarkers?: Array<string> | undefined;
                preserveAsciiControlCharacters?: boolean | undefined;
                quote?: string | undefined;
                skipLeadingRows?: string | undefined;
                sourceColumnMatch?: string | undefined;
            }
            interface DataFormatOptions {
                timestampOutputFormat?:
                    | "TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED"
                    | "FLOAT64"
                    | "INT64"
                    | "ISO8601_STRING"
                    | undefined;
                useInt64Timestamp?: boolean | undefined;
            }
            interface DataMaskingStatistics {
                dataMaskingApplied?: boolean | undefined;
            }
            interface DataPolicyList {
                dataPolicies?: BigQuery.Schema.DataPolicyOption[] | undefined;
            }
            interface DataPolicyOption {
                name?: string | undefined;
            }
            interface Dataset {
                access?:
                    | Array<{
                        condition?: BigQuery.Schema.Expr | undefined;
                        dataset?: BigQuery.Schema.DatasetAccessEntry | undefined;
                        domain?: string | undefined;
                        groupByEmail?: string | undefined;
                        iamMember?: string | undefined;
                        role?: string | undefined;
                        routine?: BigQuery.Schema.RoutineReference | undefined;
                        specialGroup?: string | undefined;
                        userByEmail?: string | undefined;
                        view?: BigQuery.Schema.TableReference | undefined;
                    }>
                    | undefined;
                catalogSource?: string | undefined;
                creationTime?: string | undefined;
                datasetReference?: BigQuery.Schema.DatasetReference | undefined;
                defaultCollation?: string | undefined;
                defaultEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                defaultPartitionExpirationMs?: string | undefined;
                defaultRoundingMode?:
                    | "ROUNDING_MODE_UNSPECIFIED"
                    | "ROUND_HALF_AWAY_FROM_ZERO"
                    | "ROUND_HALF_EVEN"
                    | undefined;
                defaultTableExpirationMs?: string | undefined;
                description?: string | undefined;
                etag?: string | undefined;
                externalCatalogDatasetOptions?: BigQuery.Schema.ExternalCatalogDatasetOptions | undefined;
                externalDatasetReference?: BigQuery.Schema.ExternalDatasetReference | undefined;
                friendlyName?: string | undefined;
                id?: string | undefined;
                isCaseInsensitive?: boolean | undefined;
                kind?: string | undefined;
                labels?: Record<string, string> | undefined;
                lastModifiedTime?: string | undefined;
                linkedDatasetMetadata?: BigQuery.Schema.LinkedDatasetMetadata | undefined;
                linkedDatasetSource?: BigQuery.Schema.LinkedDatasetSource | undefined;
                location?: string | undefined;
                maxTimeTravelHours?: string | undefined;
                resourceTags?: Record<string, string> | undefined;
                restrictions?: BigQuery.Schema.RestrictionConfig | undefined;
                satisfiesPzi?: boolean | undefined;
                satisfiesPzs?: boolean | undefined;
                selfLink?: string | undefined;
                storageBillingModel?: "STORAGE_BILLING_MODEL_UNSPECIFIED" | "LOGICAL" | "PHYSICAL" | undefined;
                tags?:
                    | Array<{
                        tagKey?: string | undefined;
                        tagValue?: string | undefined;
                    }>
                    | undefined;
                type?: string | undefined;
            }
            interface DatasetAccessEntry {
                dataset?: BigQuery.Schema.DatasetReference | undefined;
                targetTypes?: Array<"TARGET_TYPE_UNSPECIFIED" | "VIEWS" | "ROUTINES"> | undefined;
            }
            interface DatasetList {
                datasets?:
                    | Array<{
                        catalogSource?: string | undefined;
                        datasetReference?: BigQuery.Schema.DatasetReference | undefined;
                        externalDatasetReference?: BigQuery.Schema.ExternalDatasetReference | undefined;
                        friendlyName?: string | undefined;
                        id?: string | undefined;
                        kind?: string | undefined;
                        labels?: Record<string, string> | undefined;
                        location?: string | undefined;
                        type?: string | undefined;
                    }>
                    | undefined;
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                unreachable?: Array<string> | undefined;
            }
            interface DatasetReference {
                datasetId?: string | undefined;
                projectId?: string | undefined;
            }
            interface DataSplitResult {
                evaluationTable?: BigQuery.Schema.TableReference | undefined;
                testTable?: BigQuery.Schema.TableReference | undefined;
                trainingTable?: BigQuery.Schema.TableReference | undefined;
            }
            interface DestinationTableProperties {
                description?: string | undefined;
                expirationTime?: string | undefined;
                friendlyName?: string | undefined;
                labels?: Record<string, string> | undefined;
            }
            interface DifferentialPrivacyPolicy {
                deltaBudget?: number | undefined;
                deltaBudgetRemaining?: number | undefined;
                deltaPerQuery?: number | undefined;
                epsilonBudget?: number | undefined;
                epsilonBudgetRemaining?: number | undefined;
                maxEpsilonPerQuery?: number | undefined;
                maxGroupsContributed?: string | undefined;
                privacyUnitColumn?: string | undefined;
            }
            interface DimensionalityReductionMetrics {
                totalExplainedVarianceRatio?: number | undefined;
            }
            interface DmlStatistics {
                deletedRowCount?: string | undefined;
                dmlMode?: "DML_MODE_UNSPECIFIED" | "COARSE_GRAINED_DML" | "FINE_GRAINED_DML" | undefined;
                fineGrainedDmlUnusedReason?:
                    | "FINE_GRAINED_DML_UNUSED_REASON_UNSPECIFIED"
                    | "MAX_PARTITION_SIZE_EXCEEDED"
                    | "TABLE_NOT_ENROLLED"
                    | "DML_IN_MULTI_STATEMENT_TRANSACTION"
                    | undefined;
                insertedRowCount?: string | undefined;
                updatedRowCount?: string | undefined;
            }
            interface DoubleCandidates {
                candidates?: Array<number> | undefined;
            }
            interface DoubleHparamSearchSpace {
                candidates?: BigQuery.Schema.DoubleCandidates | undefined;
                range?: BigQuery.Schema.DoubleRange | undefined;
            }
            interface DoubleRange {
                max?: number | undefined;
                min?: number | undefined;
            }
            interface EncryptionConfiguration {
                kmsKeyName?: string | undefined;
            }
            interface Entry {
                itemCount?: string | undefined;
                predictedLabel?: string | undefined;
            }
            interface ErrorProto {
                debugInfo?: string | undefined;
                location?: string | undefined;
                message?: string | undefined;
                reason?: string | undefined;
            }
            interface EvaluationMetrics {
                arimaForecastingMetrics?: BigQuery.Schema.ArimaForecastingMetrics | undefined;
                binaryClassificationMetrics?: BigQuery.Schema.BinaryClassificationMetrics | undefined;
                clusteringMetrics?: BigQuery.Schema.ClusteringMetrics | undefined;
                dimensionalityReductionMetrics?: BigQuery.Schema.DimensionalityReductionMetrics | undefined;
                multiClassClassificationMetrics?:
                    | BigQuery.Schema.MultiClassClassificationMetrics
                    | undefined;
                rankingMetrics?: BigQuery.Schema.RankingMetrics | undefined;
                regressionMetrics?: BigQuery.Schema.RegressionMetrics | undefined;
            }
            interface ExplainQueryStage {
                completedParallelInputs?: string | undefined;
                computeMode?: "COMPUTE_MODE_UNSPECIFIED" | "BIGQUERY" | "BI_ENGINE" | undefined;
                computeMsAvg?: string | undefined;
                computeMsMax?: string | undefined;
                computeRatioAvg?: number | undefined;
                computeRatioMax?: number | undefined;
                endMs?: string | undefined;
                id?: string | undefined;
                inputStages?: Array<string> | undefined;
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
                slotMs?: string | undefined;
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
                substeps?: Array<string> | undefined;
            }
            interface Explanation {
                attribution?: number | undefined;
                featureName?: string | undefined;
            }
            interface ExportDataStatistics {
                fileCount?: string | undefined;
                rowCount?: string | undefined;
            }
            interface Expr {
                description?: string | undefined;
                expression?: string | undefined;
                location?: string | undefined;
                title?: string | undefined;
            }
            interface ExternalCatalogDatasetOptions {
                defaultStorageLocationUri?: string | undefined;
                parameters?: Record<string, string> | undefined;
            }
            interface ExternalCatalogTableOptions {
                connectionId?: string | undefined;
                parameters?: Record<string, string> | undefined;
                storageDescriptor?: BigQuery.Schema.StorageDescriptor | undefined;
            }
            interface ExternalDataConfiguration {
                autodetect?: boolean | undefined;
                avroOptions?: BigQuery.Schema.AvroOptions | undefined;
                bigtableOptions?: BigQuery.Schema.BigtableOptions | undefined;
                compression?: string | undefined;
                connectionId?: string | undefined;
                csvOptions?: BigQuery.Schema.CsvOptions | undefined;
                dateFormat?: string | undefined;
                datetimeFormat?: string | undefined;
                decimalTargetTypes?:
                    | Array<"DECIMAL_TARGET_TYPE_UNSPECIFIED" | "NUMERIC" | "BIGNUMERIC" | "STRING">
                    | undefined;
                fileSetSpecType?:
                    | "FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH"
                    | "FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST"
                    | undefined;
                googleSheetsOptions?: BigQuery.Schema.GoogleSheetsOptions | undefined;
                hivePartitioningOptions?: BigQuery.Schema.HivePartitioningOptions | undefined;
                ignoreUnknownValues?: boolean | undefined;
                jsonExtension?: "JSON_EXTENSION_UNSPECIFIED" | "GEOJSON" | undefined;
                jsonOptions?: BigQuery.Schema.JsonOptions | undefined;
                maxBadRecords?: number | undefined;
                metadataCacheMode?: "METADATA_CACHE_MODE_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | undefined;
                objectMetadata?: "OBJECT_METADATA_UNSPECIFIED" | "DIRECTORY" | "SIMPLE" | undefined;
                parquetOptions?: BigQuery.Schema.ParquetOptions | undefined;
                referenceFileSchemaUri?: string | undefined;
                schema?: BigQuery.Schema.TableSchema | undefined;
                sourceFormat?: string | undefined;
                sourceUris?: Array<string> | undefined;
                timeFormat?: string | undefined;
                timestampFormat?: string | undefined;
                timestampTargetPrecision?: Array<number> | undefined;
                timeZone?: string | undefined;
            }
            interface ExternalDatasetReference {
                connection?: string | undefined;
                externalSource?: string | undefined;
            }
            interface ExternalRuntimeOptions {
                containerCpu?: number | undefined;
                containerMemory?: string | undefined;
                containerRequestConcurrency?: string | undefined;
                maxBatchingRows?: string | undefined;
                runtimeConnection?: string | undefined;
                runtimeVersion?: string | undefined;
            }
            interface ExternalServiceCost {
                billingMethod?: string | undefined;
                bytesBilled?: string | undefined;
                bytesProcessed?: string | undefined;
                externalService?: string | undefined;
                reservedSlotCount?: string | undefined;
                slotMs?: string | undefined;
            }
            interface FeatureValue {
                categoricalValue?: BigQuery.Schema.CategoricalValue | undefined;
                featureColumn?: string | undefined;
                numericalValue?: number | undefined;
            }
            interface ForeignTypeInfo {
                typeSystem?: "TYPE_SYSTEM_UNSPECIFIED" | "HIVE" | undefined;
            }
            interface ForeignViewDefinition {
                dialect?: string | undefined;
                query?: string | undefined;
            }
            interface GenAiErrorStats {
                errors?: Array<string> | undefined;
            }
            interface GenAiFunctionCacheStats {
                numCacheHitRows?: string | undefined;
            }
            interface GenAiFunctionCostOptimizationStats {
                message?: string | undefined;
                numCostOptimizedRows?: string | undefined;
            }
            interface GenAiFunctionErrorStats {
                errors?: Array<string> | undefined;
                numFailedRows?: string | undefined;
            }
            interface GenAiFunctionStats {
                cacheStats?: BigQuery.Schema.GenAiFunctionCacheStats | undefined;
                costOptimizationStats?: BigQuery.Schema.GenAiFunctionCostOptimizationStats | undefined;
                errorStats?: BigQuery.Schema.GenAiFunctionErrorStats | undefined;
                functionName?: string | undefined;
                numProcessedRows?: string | undefined;
                prompt?: string | undefined;
            }
            interface GenAiStats {
                errorStats?: BigQuery.Schema.GenAiErrorStats | undefined;
                functionStats?: BigQuery.Schema.GenAiFunctionStats[] | undefined;
            }
            interface GeneratedColumn {
                generatedExpressionInfo?: BigQuery.Schema.GeneratedExpressionInfo | undefined;
                generatedMode?: "GENERATED_MODE_UNSPECIFIED" | "GENERATED_ALWAYS" | "GENERATED_BY_DEFAULT" | undefined;
            }
            interface GeneratedExpressionInfo {
                asynchronous?: boolean | undefined;
                generationExpression?: string | undefined;
                stored?: boolean | undefined;
            }
            interface GetIamPolicyRequest {
                options?: BigQuery.Schema.GetPolicyOptions | undefined;
            }
            interface GetPolicyOptions {
                requestedPolicyVersion?: number | undefined;
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
            interface GlobalExplanation {
                classLabel?: string | undefined;
                explanations?: BigQuery.Schema.Explanation[] | undefined;
            }
            interface GoogleSheetsOptions {
                range?: string | undefined;
                skipLeadingRows?: string | undefined;
            }
            interface HighCardinalityJoin {
                leftRows?: string | undefined;
                outputRows?: string | undefined;
                rightRows?: string | undefined;
                stepIndex?: number | undefined;
            }
            interface HivePartitioningOptions {
                fields?: Array<string> | undefined;
                mode?: string | undefined;
                requirePartitionFilter?: boolean | undefined;
                sourceUriPrefix?: string | undefined;
            }
            interface HparamSearchSpaces {
                activationFn?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                batchSize?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                boosterType?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                colsampleBylevel?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                colsampleBynode?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                colsampleBytree?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                dartNormalizeType?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                dropout?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                hiddenUnits?: BigQuery.Schema.IntArrayHparamSearchSpace | undefined;
                l1Reg?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                l2Reg?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                learnRate?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                maxTreeDepth?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                minSplitLoss?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                minTreeChildWeight?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                numClusters?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                numFactors?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                numParallelTree?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                optimizer?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                subsample?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                treeMethod?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                walsAlpha?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
            }
            interface HparamTuningTrial {
                endTimeMs?: string | undefined;
                errorMessage?: string | undefined;
                evalLoss?: number | undefined;
                evaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                hparams?: BigQuery.Schema.TrainingOptions | undefined;
                hparamTuningEvaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                startTimeMs?: string | undefined;
                status?:
                    | "TRIAL_STATUS_UNSPECIFIED"
                    | "NOT_STARTED"
                    | "RUNNING"
                    | "SUCCEEDED"
                    | "FAILED"
                    | "INFEASIBLE"
                    | "STOPPED_EARLY"
                    | undefined;
                trainingLoss?: number | undefined;
                trialId?: string | undefined;
            }
            interface IncrementalResultStats {
                disabledReason?: "DISABLED_REASON_UNSPECIFIED" | "OTHER" | "UNSUPPORTED_OPERATOR" | undefined;
                disabledReasonDetails?: string | undefined;
                firstIncrementalRowTime?: string | undefined;
                incrementalRowCount?: string | undefined;
                lastIncrementalRowTime?: string | undefined;
                resultSetLastModifyTime?: string | undefined;
                resultSetLastReplaceTime?: string | undefined;
            }
            interface IndexPruningStats {
                baseTable?: BigQuery.Schema.TableReference | undefined;
                indexId?: string | undefined;
                postIndexPruningParallelInputCount?: string | undefined;
                preIndexPruningParallelInputCount?: string | undefined;
            }
            interface IndexUnusedReason {
                baseTable?: BigQuery.Schema.TableReference | undefined;
                code?:
                    | "CODE_UNSPECIFIED"
                    | "INDEX_CONFIG_NOT_AVAILABLE"
                    | "PENDING_INDEX_CREATION"
                    | "BASE_TABLE_TRUNCATED"
                    | "INDEX_CONFIG_MODIFIED"
                    | "TIME_TRAVEL_QUERY"
                    | "NO_PRUNING_POWER"
                    | "UNINDEXED_SEARCH_FIELDS"
                    | "UNSUPPORTED_SEARCH_PATTERN"
                    | "OPTIMIZED_WITH_MATERIALIZED_VIEW"
                    | "SECURED_BY_DATA_MASKING"
                    | "MISMATCHED_TEXT_ANALYZER"
                    | "BASE_TABLE_TOO_SMALL"
                    | "BASE_TABLE_TOO_LARGE"
                    | "ESTIMATED_PERFORMANCE_GAIN_TOO_LOW"
                    | "COLUMN_METADATA_INDEX_NOT_USED"
                    | "NOT_SUPPORTED_IN_STANDARD_EDITION"
                    | "INDEX_SUPPRESSED_BY_FUNCTION_OPTION"
                    | "QUERY_CACHE_HIT"
                    | "STALE_INDEX"
                    | "INTERNAL_ERROR"
                    | "OTHER_REASON"
                    | undefined;
                indexName?: string | undefined;
                message?: string | undefined;
            }
            interface InputDataChange {
                recordsReadDiffPercentage?: number | undefined;
            }
            interface IntArray {
                elements?: Array<string> | undefined;
            }
            interface IntArrayHparamSearchSpace {
                candidates?: BigQuery.Schema.IntArray[] | undefined;
            }
            interface IntCandidates {
                candidates?: Array<string> | undefined;
            }
            interface IntHparamSearchSpace {
                candidates?: BigQuery.Schema.IntCandidates | undefined;
                range?: BigQuery.Schema.IntRange | undefined;
            }
            interface IntRange {
                max?: string | undefined;
                min?: string | undefined;
            }
            interface IterationResult {
                arimaResult?: BigQuery.Schema.ArimaResult | undefined;
                clusterInfos?: BigQuery.Schema.ClusterInfo[] | undefined;
                durationMs?: string | undefined;
                evalLoss?: number | undefined;
                index?: number | undefined;
                learnRate?: number | undefined;
                principalComponentInfos?: BigQuery.Schema.PrincipalComponentInfo[] | undefined;
                trainingLoss?: number | undefined;
            }
            interface Job {
                configuration?: BigQuery.Schema.JobConfiguration | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                jobCreationReason?: BigQuery.Schema.JobCreationReason | undefined;
                jobReference?: BigQuery.Schema.JobReference | undefined;
                kind?: string | undefined;
                principal_subject?: string | undefined;
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
                labels?: Record<string, string> | undefined;
                load?: BigQuery.Schema.JobConfigurationLoad | undefined;
                maxSlots?: number | undefined;
                query?: BigQuery.Schema.JobConfigurationQuery | undefined;
                reservation?: string | undefined;
            }
            interface JobConfigurationExtract {
                compression?: string | undefined;
                destinationFormat?: string | undefined;
                destinationUri?: string | undefined;
                destinationUris?: Array<string> | undefined;
                fieldDelimiter?: string | undefined;
                modelExtractOptions?: BigQuery.Schema.ModelExtractOptions | undefined;
                printHeader?: boolean | undefined;
                sourceModel?: BigQuery.Schema.ModelReference | undefined;
                sourceTable?: BigQuery.Schema.TableReference | undefined;
                useAvroLogicalTypes?: boolean | undefined;
            }
            interface JobConfigurationLoad {
                allowJaggedRows?: boolean | undefined;
                allowQuotedNewlines?: boolean | undefined;
                autodetect?: boolean | undefined;
                clustering?: BigQuery.Schema.Clustering | undefined;
                columnNameCharacterMap?: "COLUMN_NAME_CHARACTER_MAP_UNSPECIFIED" | "STRICT" | "V1" | "V2" | undefined;
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                copyFilesOnly?: boolean | undefined;
                createDisposition?: string | undefined;
                createSession?: boolean | undefined;
                dateFormat?: string | undefined;
                datetimeFormat?: string | undefined;
                decimalTargetTypes?:
                    | Array<"DECIMAL_TARGET_TYPE_UNSPECIFIED" | "NUMERIC" | "BIGNUMERIC" | "STRING">
                    | undefined;
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                destinationTable?: BigQuery.Schema.TableReference | undefined;
                destinationTableProperties?: BigQuery.Schema.DestinationTableProperties | undefined;
                encoding?: string | undefined;
                fieldDelimiter?: string | undefined;
                fileSetSpecType?:
                    | "FILE_SET_SPEC_TYPE_FILE_SYSTEM_MATCH"
                    | "FILE_SET_SPEC_TYPE_NEW_LINE_DELIMITED_MANIFEST"
                    | undefined;
                hivePartitioningOptions?: BigQuery.Schema.HivePartitioningOptions | undefined;
                ignoreUnknownValues?: boolean | undefined;
                jsonExtension?: "JSON_EXTENSION_UNSPECIFIED" | "GEOJSON" | undefined;
                maxBadRecords?: number | undefined;
                nullMarker?: string | undefined;
                nullMarkers?: Array<string> | undefined;
                parquetOptions?: BigQuery.Schema.ParquetOptions | undefined;
                preserveAsciiControlCharacters?: boolean | undefined;
                projectionFields?: Array<string> | undefined;
                quote?: string | undefined;
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                referenceFileSchemaUri?: string | undefined;
                schema?: BigQuery.Schema.TableSchema | undefined;
                schemaInline?: string | undefined;
                schemaInlineFormat?: string | undefined;
                schemaUpdateOptions?: Array<string> | undefined;
                skipLeadingRows?: number | undefined;
                sourceColumnMatch?: "SOURCE_COLUMN_MATCH_UNSPECIFIED" | "POSITION" | "NAME" | undefined;
                sourceFormat?: string | undefined;
                sourceUris?: Array<string> | undefined;
                timeFormat?: string | undefined;
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                timestampFormat?: string | undefined;
                timestampTargetPrecision?: Array<number> | undefined;
                timeZone?: string | undefined;
                useAvroLogicalTypes?: boolean | undefined;
                writeDisposition?: string | undefined;
            }
            interface JobConfigurationQuery {
                allowLargeResults?: boolean | undefined;
                clustering?: BigQuery.Schema.Clustering | undefined;
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                continuous?: boolean | undefined;
                createDisposition?: string | undefined;
                createSession?: boolean | undefined;
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
                schemaUpdateOptions?: Array<string> | undefined;
                scriptOptions?: BigQuery.Schema.ScriptOptions | undefined;
                systemVariables?: BigQuery.Schema.SystemVariables | undefined;
                tableDefinitions?: Record<string, BigQuery.Schema.ExternalDataConfiguration> | undefined;
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                useLegacySql?: boolean | undefined;
                useQueryCache?: boolean | undefined;
                userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
                writeDisposition?: string | undefined;
                writeIncrementalResults?: boolean | undefined;
            }
            interface JobConfigurationTableCopy {
                createDisposition?: string | undefined;
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                destinationExpirationTime?: string | undefined;
                destinationTable?: BigQuery.Schema.TableReference | undefined;
                operationType?: "OPERATION_TYPE_UNSPECIFIED" | "COPY" | "SNAPSHOT" | "RESTORE" | "CLONE" | undefined;
                sourceTable?: BigQuery.Schema.TableReference | undefined;
                sourceTables?: BigQuery.Schema.TableReference[] | undefined;
                writeDisposition?: string | undefined;
            }
            interface JobCreationReason {
                code?: "CODE_UNSPECIFIED" | "REQUESTED" | "LONG_RUNNING" | "LARGE_RESULTS" | "OTHER" | undefined;
            }
            interface JobList {
                etag?: string | undefined;
                jobs?:
                    | Array<{
                        configuration?: BigQuery.Schema.JobConfiguration | undefined;
                        errorResult?: BigQuery.Schema.ErrorProto | undefined;
                        id?: string | undefined;
                        jobReference?: BigQuery.Schema.JobReference | undefined;
                        kind?: string | undefined;
                        principal_subject?: string | undefined;
                        state?: string | undefined;
                        statistics?: BigQuery.Schema.JobStatistics | undefined;
                        status?: BigQuery.Schema.JobStatus | undefined;
                        user_email?: string | undefined;
                    }>
                    | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                unreachable?: Array<string> | undefined;
            }
            interface JobReference {
                jobId?: string | undefined;
                location?: string | undefined;
                projectId?: string | undefined;
            }
            interface JobStatistics {
                completionRatio?: number | undefined;
                copy?: BigQuery.Schema.JobStatistics5 | undefined;
                creationTime?: string | undefined;
                dataMaskingStatistics?: BigQuery.Schema.DataMaskingStatistics | undefined;
                edition?: "RESERVATION_EDITION_UNSPECIFIED" | "STANDARD" | "ENTERPRISE" | "ENTERPRISE_PLUS" | undefined;
                endTime?: string | undefined;
                extract?: BigQuery.Schema.JobStatistics4 | undefined;
                finalExecutionDurationMs?: string | undefined;
                globalQueryRemoteRegions?: Array<string> | undefined;
                load?: BigQuery.Schema.JobStatistics3 | undefined;
                numChildJobs?: string | undefined;
                parentGlobalQueryJob?: BigQuery.Schema.JobReference | undefined;
                parentJobId?: string | undefined;
                query?: BigQuery.Schema.JobStatistics2 | undefined;
                quotaDeferments?: Array<string> | undefined;
                reservationGroupPath?: Array<string> | undefined;
                reservationUsage?:
                    | Array<{
                        name?: string | undefined;
                        slotMs?: string | undefined;
                    }>
                    | undefined;
                reservation_id?: string | undefined;
                rowLevelSecurityStatistics?: BigQuery.Schema.RowLevelSecurityStatistics | undefined;
                scriptStatistics?: BigQuery.Schema.ScriptStatistics | undefined;
                sessionInfo?: BigQuery.Schema.SessionInfo | undefined;
                startTime?: string | undefined;
                totalBytesProcessed?: string | undefined;
                totalSlotMs?: string | undefined;
                transactionInfo?: BigQuery.Schema.TransactionInfo | undefined;
            }
            interface JobStatistics2 {
                biEngineStatistics?: BigQuery.Schema.BiEngineStatistics | undefined;
                billingTier?: number | undefined;
                cacheHit?: boolean | undefined;
                dclTargetDataset?: BigQuery.Schema.DatasetReference | undefined;
                dclTargetTable?: BigQuery.Schema.TableReference | undefined;
                dclTargetView?: BigQuery.Schema.TableReference | undefined;
                ddlAffectedRowAccessPolicyCount?: string | undefined;
                ddlDestinationTable?: BigQuery.Schema.TableReference | undefined;
                ddlOperationPerformed?: string | undefined;
                ddlTargetDataset?: BigQuery.Schema.DatasetReference | undefined;
                ddlTargetRoutine?: BigQuery.Schema.RoutineReference | undefined;
                ddlTargetRowAccessPolicy?: BigQuery.Schema.RowAccessPolicyReference | undefined;
                ddlTargetTable?: BigQuery.Schema.TableReference | undefined;
                dmlStats?: BigQuery.Schema.DmlStatistics | undefined;
                estimatedBytesProcessed?: string | undefined;
                exportDataStatistics?: BigQuery.Schema.ExportDataStatistics | undefined;
                externalServiceCosts?: BigQuery.Schema.ExternalServiceCost[] | undefined;
                genAiStats?: BigQuery.Schema.GenAiStats | undefined;
                incrementalResultStats?: BigQuery.Schema.IncrementalResultStats | undefined;
                loadQueryStatistics?: BigQuery.Schema.LoadQueryStatistics | undefined;
                materializedViewStatistics?: BigQuery.Schema.MaterializedViewStatistics | undefined;
                metadataCacheStatistics?: BigQuery.Schema.MetadataCacheStatistics | undefined;
                mlStatistics?: BigQuery.Schema.MlStatistics | undefined;
                modelTraining?: BigQuery.Schema.BigQueryModelTraining | undefined;
                modelTrainingCurrentIteration?: number | undefined;
                modelTrainingExpectedTotalIteration?: string | undefined;
                numDmlAffectedRows?: string | undefined;
                objectStorageStats?: BigQuery.Schema.ObjectStorageStats[] | undefined;
                performanceInsights?: BigQuery.Schema.PerformanceInsights | undefined;
                queryInfo?: BigQuery.Schema.QueryInfo | undefined;
                queryPlan?: BigQuery.Schema.ExplainQueryStage[] | undefined;
                referencedPropertyGraphs?: BigQuery.Schema.PropertyGraphReference[] | undefined;
                referencedRoutines?: BigQuery.Schema.RoutineReference[] | undefined;
                referencedTables?: BigQuery.Schema.TableReference[] | undefined;
                reservationUsage?:
                    | Array<{
                        name?: string | undefined;
                        slotMs?: string | undefined;
                    }>
                    | undefined;
                schema?: BigQuery.Schema.TableSchema | undefined;
                searchStatistics?: BigQuery.Schema.SearchStatistics | undefined;
                sparkStatistics?: BigQuery.Schema.SparkStatistics | undefined;
                statementType?: string | undefined;
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
                totalBytesBilled?: string | undefined;
                totalBytesProcessed?: string | undefined;
                totalBytesProcessedAccuracy?: string | undefined;
                totalPartitionsProcessed?: string | undefined;
                totalServicesSkuSlotMs?: string | undefined;
                totalSlotMs?: string | undefined;
                transferredBytes?: string | undefined;
                undeclaredQueryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
                vectorSearchStatistics?: BigQuery.Schema.VectorSearchStatistics | undefined;
            }
            interface JobStatistics3 {
                badRecords?: string | undefined;
                inputFileBytes?: string | undefined;
                inputFiles?: string | undefined;
                outputBytes?: string | undefined;
                outputRows?: string | undefined;
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
            }
            interface JobStatistics4 {
                destinationUriFileCounts?: Array<string> | undefined;
                inputBytes?: string | undefined;
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
            }
            interface JobStatistics5 {
                copiedLogicalBytes?: string | undefined;
                copiedRows?: string | undefined;
                remoteDestinationRegion?: string | undefined;
            }
            interface JobStatus {
                errorResult?: BigQuery.Schema.ErrorProto | undefined;
                errors?: BigQuery.Schema.ErrorProto[] | undefined;
                state?: string | undefined;
            }
            interface JoinRestrictionPolicy {
                joinAllowedColumns?: Array<string> | undefined;
                joinCondition?:
                    | "JOIN_CONDITION_UNSPECIFIED"
                    | "JOIN_ANY"
                    | "JOIN_ALL"
                    | "JOIN_NOT_REQUIRED"
                    | "JOIN_BLOCKED"
                    | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface JsonObject {
            }
            interface JsonOptions {
                encoding?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface JsonValue {
            }
            interface LinkedDatasetMetadata {
                linkState?: "LINK_STATE_UNSPECIFIED" | "LINKED" | "UNLINKED" | undefined;
            }
            interface LinkedDatasetSource {
                sourceDataset?: BigQuery.Schema.DatasetReference | undefined;
            }
            interface ListModelsResponse {
                models?: BigQuery.Schema.Model[] | undefined;
                nextPageToken?: string | undefined;
            }
            interface ListRoutinesResponse {
                nextPageToken?: string | undefined;
                routines?: BigQuery.Schema.Routine[] | undefined;
            }
            interface ListRowAccessPoliciesResponse {
                nextPageToken?: string | undefined;
                rowAccessPolicies?: BigQuery.Schema.RowAccessPolicy[] | undefined;
            }
            interface LoadQueryStatistics {
                badRecords?: string | undefined;
                bytesTransferred?: string | undefined;
                inputFileBytes?: string | undefined;
                inputFiles?: string | undefined;
                outputBytes?: string | undefined;
                outputRows?: string | undefined;
            }
            interface LocationMetadata {
                legacyLocationId?: string | undefined;
            }
            interface MaterializedView {
                chosen?: boolean | undefined;
                estimatedBytesSaved?: string | undefined;
                rejectedReason?:
                    | "REJECTED_REASON_UNSPECIFIED"
                    | "NO_DATA"
                    | "COST"
                    | "BASE_TABLE_TRUNCATED"
                    | "BASE_TABLE_DATA_CHANGE"
                    | "BASE_TABLE_PARTITION_EXPIRATION_CHANGE"
                    | "BASE_TABLE_EXPIRED_PARTITION"
                    | "BASE_TABLE_INCOMPATIBLE_METADATA_CHANGE"
                    | "TIME_ZONE"
                    | "OUT_OF_TIME_TRAVEL_WINDOW"
                    | "BASE_TABLE_FINE_GRAINED_SECURITY_POLICY"
                    | "BASE_TABLE_TOO_STALE"
                    | undefined;
                tableReference?: BigQuery.Schema.TableReference | undefined;
            }
            interface MaterializedViewDefinition {
                allowNonIncrementalDefinition?: boolean | undefined;
                enableRefresh?: boolean | undefined;
                lastRefreshTime?: string | undefined;
                maxStaleness?: string | undefined;
                query?: string | undefined;
                refreshIntervalMs?: string | undefined;
            }
            interface MaterializedViewStatistics {
                materializedView?: BigQuery.Schema.MaterializedView[] | undefined;
            }
            interface MaterializedViewStatus {
                lastRefreshStatus?: BigQuery.Schema.ErrorProto | undefined;
                refreshWatermark?: string | undefined;
            }
            interface MetadataCacheStalenessInsight {
                avgPreviousStalenessMs?: string | undefined;
                stalenessPercentageIncrease?: number | undefined;
            }
            interface MetadataCacheStatistics {
                tableMetadataCacheUsage?: BigQuery.Schema.TableMetadataCacheUsage[] | undefined;
            }
            interface MlStatistics {
                hparamTrials?: BigQuery.Schema.HparamTuningTrial[] | undefined;
                iterationResults?: BigQuery.Schema.IterationResult[] | undefined;
                maxIterations?: string | undefined;
                modelType?:
                    | "MODEL_TYPE_UNSPECIFIED"
                    | "LINEAR_REGRESSION"
                    | "LOGISTIC_REGRESSION"
                    | "KMEANS"
                    | "MATRIX_FACTORIZATION"
                    | "DNN_CLASSIFIER"
                    | "TENSORFLOW"
                    | "DNN_REGRESSOR"
                    | "XGBOOST"
                    | "BOOSTED_TREE_REGRESSOR"
                    | "BOOSTED_TREE_CLASSIFIER"
                    | "ARIMA"
                    | "AUTOML_REGRESSOR"
                    | "AUTOML_CLASSIFIER"
                    | "PCA"
                    | "DNN_LINEAR_COMBINED_CLASSIFIER"
                    | "DNN_LINEAR_COMBINED_REGRESSOR"
                    | "AUTOENCODER"
                    | "ARIMA_PLUS"
                    | "ARIMA_PLUS_XREG"
                    | "RANDOM_FOREST_REGRESSOR"
                    | "RANDOM_FOREST_CLASSIFIER"
                    | "TENSORFLOW_LITE"
                    | "ONNX"
                    | "TRANSFORM_ONLY"
                    | "CONTRIBUTION_ANALYSIS"
                    | undefined;
                trainingType?: "TRAINING_TYPE_UNSPECIFIED" | "SINGLE_TRAINING" | "HPARAM_TUNING" | undefined;
            }
            interface Model {
                bestTrialId?: string | undefined;
                creationTime?: string | undefined;
                defaultTrialId?: string | undefined;
                description?: string | undefined;
                encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                etag?: string | undefined;
                expirationTime?: string | undefined;
                featureColumns?: BigQuery.Schema.StandardSqlField[] | undefined;
                friendlyName?: string | undefined;
                hparamSearchSpaces?: BigQuery.Schema.HparamSearchSpaces | undefined;
                hparamTrials?: BigQuery.Schema.HparamTuningTrial[] | undefined;
                labelColumns?: BigQuery.Schema.StandardSqlField[] | undefined;
                labels?: Record<string, string> | undefined;
                lastModifiedTime?: string | undefined;
                location?: string | undefined;
                modelReference?: BigQuery.Schema.ModelReference | undefined;
                modelType?:
                    | "MODEL_TYPE_UNSPECIFIED"
                    | "LINEAR_REGRESSION"
                    | "LOGISTIC_REGRESSION"
                    | "KMEANS"
                    | "MATRIX_FACTORIZATION"
                    | "DNN_CLASSIFIER"
                    | "TENSORFLOW"
                    | "DNN_REGRESSOR"
                    | "XGBOOST"
                    | "BOOSTED_TREE_REGRESSOR"
                    | "BOOSTED_TREE_CLASSIFIER"
                    | "ARIMA"
                    | "AUTOML_REGRESSOR"
                    | "AUTOML_CLASSIFIER"
                    | "PCA"
                    | "DNN_LINEAR_COMBINED_CLASSIFIER"
                    | "DNN_LINEAR_COMBINED_REGRESSOR"
                    | "AUTOENCODER"
                    | "ARIMA_PLUS"
                    | "ARIMA_PLUS_XREG"
                    | "RANDOM_FOREST_REGRESSOR"
                    | "RANDOM_FOREST_CLASSIFIER"
                    | "TENSORFLOW_LITE"
                    | "ONNX"
                    | "TRANSFORM_ONLY"
                    | "CONTRIBUTION_ANALYSIS"
                    | undefined;
                optimalTrialIds?: Array<string> | undefined;
                remoteModelInfo?: BigQuery.Schema.RemoteModelInfo | undefined;
                trainingRuns?: BigQuery.Schema.TrainingRun[] | undefined;
                transformColumns?: BigQuery.Schema.TransformColumn[] | undefined;
            }
            interface ModelDefinition {
                modelOptions?: {
                    labels?: Array<string> | undefined;
                    lossType?: string | undefined;
                    modelType?: string | undefined;
                } | undefined;
                trainingRuns?: BigQuery.Schema.BqmlTrainingRun[] | undefined;
            }
            interface ModelExtractOptions {
                trialId?: string | undefined;
            }
            interface ModelReference {
                datasetId?: string | undefined;
                modelId?: string | undefined;
                projectId?: string | undefined;
            }
            interface MultiClassClassificationMetrics {
                aggregateClassificationMetrics?: BigQuery.Schema.AggregateClassificationMetrics | undefined;
                confusionMatrixList?: BigQuery.Schema.ConfusionMatrix[] | undefined;
            }
            interface ObjectStorageStats {
                cacheBytesRead?: string | undefined;
                cloudProvider?: "CLOUD_PROVIDER_UNSPECIFIED" | "GCP" | "AWS" | "AZURE" | undefined;
                objectStorageBytesRead?: string | undefined;
            }
            interface ParquetOptions {
                enableListInference?: boolean | undefined;
                enumAsString?: boolean | undefined;
                mapTargetType?: "MAP_TARGET_TYPE_UNSPECIFIED" | "ARRAY_OF_STRUCT" | undefined;
            }
            interface PartitionedColumn {
                field?: string | undefined;
            }
            interface PartitioningDefinition {
                partitionedColumn?: BigQuery.Schema.PartitionedColumn[] | undefined;
            }
            interface PartitionSkew {
                skewSources?: BigQuery.Schema.SkewSource[] | undefined;
            }
            interface PerformanceInsights {
                avgPreviousExecutionMs?: string | undefined;
                stagePerformanceChangeInsights?:
                    | BigQuery.Schema.StagePerformanceChangeInsight[]
                    | undefined;
                stagePerformanceStandaloneInsights?:
                    | BigQuery.Schema.StagePerformanceStandaloneInsight[]
                    | undefined;
                tableChangeInsights?: BigQuery.Schema.TableChangeInsight[] | undefined;
            }
            interface Policy {
                auditConfigs?: BigQuery.Schema.AuditConfig[] | undefined;
                bindings?: BigQuery.Schema.Binding[] | undefined;
                etag?: string | undefined;
                version?: number | undefined;
            }
            interface PrincipalComponentInfo {
                cumulativeExplainedVarianceRatio?: number | undefined;
                explainedVariance?: number | undefined;
                explainedVarianceRatio?: number | undefined;
                principalComponentId?: string | undefined;
            }
            interface PrivacyPolicy {
                aggregationThresholdPolicy?: BigQuery.Schema.AggregationThresholdPolicy | undefined;
                differentialPrivacyPolicy?: BigQuery.Schema.DifferentialPrivacyPolicy | undefined;
                joinRestrictionPolicy?: BigQuery.Schema.JoinRestrictionPolicy | undefined;
            }
            interface ProjectList {
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                projects?:
                    | Array<{
                        friendlyName?: string | undefined;
                        id?: string | undefined;
                        kind?: string | undefined;
                        numericId?: string | undefined;
                        projectReference?: BigQuery.Schema.ProjectReference | undefined;
                    }>
                    | undefined;
                totalItems?: number | undefined;
            }
            interface ProjectReference {
                projectId?: string | undefined;
            }
            interface PropertyGraphReference {
                datasetId?: string | undefined;
                projectId?: string | undefined;
                propertyGraphId?: string | undefined;
            }
            interface PruningStats {
                postCmetaPruningParallelInputCount?: string | undefined;
                postCmetaPruningPartitionCount?: string | undefined;
                preCmetaPruningParallelInputCount?: string | undefined;
            }
            interface PythonOptions {
                entryPoint?: string | undefined;
                packages?: Array<string> | undefined;
            }
            interface QueryInfo {
                optimizationDetails?: Record<string, any> | undefined;
            }
            interface QueryParameter {
                name?: string | undefined;
                parameterType?: BigQuery.Schema.QueryParameterType | undefined;
                parameterValue?: BigQuery.Schema.QueryParameterValue | undefined;
            }
            interface QueryParameterType {
                arrayType?: BigQuery.Schema.QueryParameterType | undefined;
                rangeElementType?: BigQuery.Schema.QueryParameterType | undefined;
                structTypes?:
                    | Array<{
                        description?: string | undefined;
                        name?: string | undefined;
                        type?: BigQuery.Schema.QueryParameterType | undefined;
                    }>
                    | undefined;
                timestampPrecision?: string | undefined;
                type?: string | undefined;
            }
            interface QueryParameterValue {
                arrayValues?: BigQuery.Schema.QueryParameterValue[] | undefined;
                rangeValue?: BigQuery.Schema.RangeValue | undefined;
                structValues?: Record<string, BigQuery.Schema.QueryParameterValue> | undefined;
                value?: string | undefined;
            }
            interface QueryRequest {
                arrowSerializationOptions?: BigQuery.Schema.ArrowSerializationOptions | undefined;
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                continuous?: boolean | undefined;
                createSession?: boolean | undefined;
                defaultDataset?: BigQuery.Schema.DatasetReference | undefined;
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                dryRun?: boolean | undefined;
                formatOptions?: BigQuery.Schema.DataFormatOptions | undefined;
                jobCreationMode?:
                    | "JOB_CREATION_MODE_UNSPECIFIED"
                    | "JOB_CREATION_REQUIRED"
                    | "JOB_CREATION_OPTIONAL"
                    | undefined;
                jobTimeoutMs?: string | undefined;
                kind?: string | undefined;
                labels?: Record<string, string> | undefined;
                location?: string | undefined;
                maximumBytesBilled?: string | undefined;
                maxResults?: number | undefined;
                maxSlots?: number | undefined;
                parameterMode?: string | undefined;
                preserveNulls?: boolean | undefined;
                query?: string | undefined;
                queryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
                queryResultsFormat?: "QUERY_RESULTS_FORMAT_UNSPECIFIED" | "STRUCT_ENCODING" | "ARROW" | undefined;
                requestId?: string | undefined;
                reservation?: string | undefined;
                timeoutMs?: number | undefined;
                useLegacySql?: boolean | undefined;
                useQueryCache?: boolean | undefined;
                writeIncrementalResults?: boolean | undefined;
            }
            interface QueryResponse {
                arrowRecordBatch?: BigQuery.Schema.ArrowRecordBatch | undefined;
                arrowSchema?: BigQuery.Schema.ArrowSchema | undefined;
                cacheHit?: boolean | undefined;
                creationTime?: string | undefined;
                dmlStats?: BigQuery.Schema.DmlStatistics | undefined;
                endTime?: string | undefined;
                errors?: BigQuery.Schema.ErrorProto[] | undefined;
                jobComplete?: boolean | undefined;
                jobCreationReason?: BigQuery.Schema.JobCreationReason | undefined;
                jobReference?: BigQuery.Schema.JobReference | undefined;
                kind?: string | undefined;
                location?: string | undefined;
                numDmlAffectedRows?: string | undefined;
                pageRowCount?: string | undefined;
                pageToken?: string | undefined;
                queryId?: string | undefined;
                rows?: BigQuery.Schema.TableRow[] | undefined;
                schema?: BigQuery.Schema.TableSchema | undefined;
                sessionInfo?: BigQuery.Schema.SessionInfo | undefined;
                startTime?: string | undefined;
                statementType?: string | undefined;
                totalBytesBilled?: string | undefined;
                totalBytesProcessed?: string | undefined;
                totalRows?: string | undefined;
                totalSlotMs?: string | undefined;
            }
            interface QueryTimelineSample {
                activeUnits?: string | undefined;
                completedUnits?: string | undefined;
                elapsedMs?: string | undefined;
                estimatedRunnableUnits?: string | undefined;
                pendingUnits?: string | undefined;
                shuffleRamUsageRatio?: number | undefined;
                totalSlotMs?: string | undefined;
            }
            interface RangePartitioning {
                field?: string | undefined;
                range?: {
                    end?: string | undefined;
                    interval?: string | undefined;
                    start?: string | undefined;
                } | undefined;
            }
            interface RangeValue {
                end?: BigQuery.Schema.QueryParameterValue | undefined;
                start?: BigQuery.Schema.QueryParameterValue | undefined;
            }
            interface RankingMetrics {
                averageRank?: number | undefined;
                meanAveragePrecision?: number | undefined;
                meanSquaredError?: number | undefined;
                normalizedDiscountedCumulativeGain?: number | undefined;
            }
            interface RegressionMetrics {
                meanAbsoluteError?: number | undefined;
                meanSquaredError?: number | undefined;
                meanSquaredLogError?: number | undefined;
                medianAbsoluteError?: number | undefined;
                rSquared?: number | undefined;
            }
            interface RemoteFunctionOptions {
                connection?: string | undefined;
                endpoint?: string | undefined;
                maxBatchingRows?: string | undefined;
                userDefinedContext?: Record<string, string> | undefined;
            }
            interface RemoteModelInfo {
                connection?: string | undefined;
                endpoint?: string | undefined;
                maxBatchingRows?: string | undefined;
                remoteModelVersion?: string | undefined;
                remoteServiceType?:
                    | "REMOTE_SERVICE_TYPE_UNSPECIFIED"
                    | "CLOUD_AI_TRANSLATE_V3"
                    | "CLOUD_AI_VISION_V1"
                    | "CLOUD_AI_NATURAL_LANGUAGE_V1"
                    | "CLOUD_AI_SPEECH_TO_TEXT_V2"
                    | undefined;
                speechRecognizer?: string | undefined;
            }
            interface RestrictionConfig {
                type?: "RESTRICTION_TYPE_UNSPECIFIED" | "RESTRICTED_DATA_EGRESS" | undefined;
            }
            interface Routine {
                arguments?: BigQuery.Schema.Argument[] | undefined;
                buildStatus?: BigQuery.Schema.RoutineBuildStatus | undefined;
                creationTime?: string | undefined;
                dataGovernanceType?: "DATA_GOVERNANCE_TYPE_UNSPECIFIED" | "DATA_MASKING" | undefined;
                definitionBody?: string | undefined;
                description?: string | undefined;
                determinismLevel?: "DETERMINISM_LEVEL_UNSPECIFIED" | "DETERMINISTIC" | "NOT_DETERMINISTIC" | undefined;
                etag?: string | undefined;
                externalRuntimeOptions?: BigQuery.Schema.ExternalRuntimeOptions | undefined;
                importedLibraries?: Array<string> | undefined;
                language?: "LANGUAGE_UNSPECIFIED" | "SQL" | "JAVASCRIPT" | "PYTHON" | "JAVA" | "SCALA" | undefined;
                lastModifiedTime?: string | undefined;
                pythonOptions?: BigQuery.Schema.PythonOptions | undefined;
                remoteFunctionOptions?: BigQuery.Schema.RemoteFunctionOptions | undefined;
                returnTableType?: BigQuery.Schema.StandardSqlTableType | undefined;
                returnType?: BigQuery.Schema.StandardSqlDataType | undefined;
                routineReference?: BigQuery.Schema.RoutineReference | undefined;
                routineType?:
                    | "ROUTINE_TYPE_UNSPECIFIED"
                    | "SCALAR_FUNCTION"
                    | "PROCEDURE"
                    | "TABLE_VALUED_FUNCTION"
                    | "AGGREGATE_FUNCTION"
                    | undefined;
                securityMode?: "SECURITY_MODE_UNSPECIFIED" | "DEFINER" | "INVOKER" | undefined;
                sparkOptions?: BigQuery.Schema.SparkOptions | undefined;
                strictMode?: boolean | undefined;
            }
            interface RoutineBuildStatus {
                buildDuration?: string | undefined;
                buildState?: "BUILD_STATE_UNSPECIFIED" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | undefined;
                buildStateUpdateTime?: string | undefined;
                errorResult?: BigQuery.Schema.ErrorProto | undefined;
                imageSizeBytes?: string | undefined;
            }
            interface RoutineReference {
                datasetId?: string | undefined;
                projectId?: string | undefined;
                routineId?: string | undefined;
            }
            interface Row {
                actualLabel?: string | undefined;
                entries?: BigQuery.Schema.Entry[] | undefined;
            }
            interface RowAccessPolicy {
                creationTime?: string | undefined;
                etag?: string | undefined;
                filterPredicate?: string | undefined;
                grantees?: Array<string> | undefined;
                lastModifiedTime?: string | undefined;
                rowAccessPolicyReference?: BigQuery.Schema.RowAccessPolicyReference | undefined;
            }
            interface RowAccessPolicyReference {
                datasetId?: string | undefined;
                policyId?: string | undefined;
                projectId?: string | undefined;
                tableId?: string | undefined;
            }
            interface RowLevelSecurityStatistics {
                rowLevelSecurityApplied?: boolean | undefined;
            }
            interface ScriptOptions {
                keyResultStatement?: "KEY_RESULT_STATEMENT_KIND_UNSPECIFIED" | "LAST" | "FIRST_SELECT" | undefined;
                statementByteBudget?: string | undefined;
                statementTimeoutMs?: string | undefined;
            }
            interface ScriptStackFrame {
                endColumn?: number | undefined;
                endLine?: number | undefined;
                procedureId?: string | undefined;
                startColumn?: number | undefined;
                startLine?: number | undefined;
                text?: string | undefined;
            }
            interface ScriptStatistics {
                evaluationKind?: "EVALUATION_KIND_UNSPECIFIED" | "STATEMENT" | "EXPRESSION" | undefined;
                stackFrames?: BigQuery.Schema.ScriptStackFrame[] | undefined;
            }
            interface SearchStatistics {
                indexPruningStats?: BigQuery.Schema.IndexPruningStats[] | undefined;
                indexUnusedReasons?: BigQuery.Schema.IndexUnusedReason[] | undefined;
                indexUsageMode?:
                    | "INDEX_USAGE_MODE_UNSPECIFIED"
                    | "UNUSED"
                    | "PARTIALLY_USED"
                    | "FULLY_USED"
                    | undefined;
            }
            interface SerDeInfo {
                name?: string | undefined;
                parameters?: Record<string, string> | undefined;
                serializationLibrary?: string | undefined;
            }
            interface SessionInfo {
                sessionId?: string | undefined;
            }
            interface SetIamPolicyRequest {
                policy?: BigQuery.Schema.Policy | undefined;
                updateMask?: string | undefined;
            }
            interface SkewSource {
                outputBytesMax?: string | undefined;
                outputBytesMedian?: string | undefined;
                outputBytesP95?: string | undefined;
                stageId?: string | undefined;
            }
            interface SnapshotDefinition {
                baseTableReference?: BigQuery.Schema.TableReference | undefined;
                snapshotTime?: string | undefined;
            }
            interface SparkLoggingInfo {
                projectId?: string | undefined;
                resourceType?: string | undefined;
            }
            interface SparkOptions {
                archiveUris?: Array<string> | undefined;
                connection?: string | undefined;
                containerImage?: string | undefined;
                fileUris?: Array<string> | undefined;
                jarUris?: Array<string> | undefined;
                mainClass?: string | undefined;
                mainFileUri?: string | undefined;
                properties?: Record<string, string> | undefined;
                pyFileUris?: Array<string> | undefined;
                runtimeVersion?: string | undefined;
            }
            interface SparkStatistics {
                endpoints?: Record<string, string> | undefined;
                gcsStagingBucket?: string | undefined;
                kmsKeyName?: string | undefined;
                loggingInfo?: BigQuery.Schema.SparkLoggingInfo | undefined;
                sparkJobId?: string | undefined;
                sparkJobLocation?: string | undefined;
            }
            interface StagePerformanceChangeInsight {
                inputDataChange?: BigQuery.Schema.InputDataChange | undefined;
                stageId?: string | undefined;
            }
            interface StagePerformanceStandaloneInsight {
                biEngineReasons?: BigQuery.Schema.BiEngineReason[] | undefined;
                highCardinalityJoins?: BigQuery.Schema.HighCardinalityJoin[] | undefined;
                insufficientShuffleQuota?: boolean | undefined;
                partitionSkew?: BigQuery.Schema.PartitionSkew | undefined;
                slotContention?: boolean | undefined;
                stageId?: string | undefined;
            }
            interface StandardSqlDataType {
                arrayElementType?: BigQuery.Schema.StandardSqlDataType | undefined;
                rangeElementType?: BigQuery.Schema.StandardSqlDataType | undefined;
                structType?: BigQuery.Schema.StandardSqlStructType | undefined;
                typeKind?:
                    | "TYPE_KIND_UNSPECIFIED"
                    | "INT64"
                    | "BOOL"
                    | "FLOAT64"
                    | "STRING"
                    | "BYTES"
                    | "TIMESTAMP"
                    | "DATE"
                    | "TIME"
                    | "DATETIME"
                    | "INTERVAL"
                    | "GEOGRAPHY"
                    | "NUMERIC"
                    | "BIGNUMERIC"
                    | "JSON"
                    | "ARRAY"
                    | "STRUCT"
                    | "RANGE"
                    | undefined;
            }
            interface StandardSqlField {
                name?: string | undefined;
                type?: BigQuery.Schema.StandardSqlDataType | undefined;
            }
            interface StandardSqlStructType {
                fields?: BigQuery.Schema.StandardSqlField[] | undefined;
            }
            interface StandardSqlTableType {
                columns?: BigQuery.Schema.StandardSqlField[] | undefined;
            }
            interface StorageDescriptor {
                inputFormat?: string | undefined;
                locationUri?: string | undefined;
                outputFormat?: string | undefined;
                serdeInfo?: BigQuery.Schema.SerDeInfo | undefined;
            }
            interface StoredColumnsUnusedReason {
                code?:
                    | "CODE_UNSPECIFIED"
                    | "STORED_COLUMNS_COVER_INSUFFICIENT"
                    | "BASE_TABLE_HAS_RLS"
                    | "BASE_TABLE_HAS_CLS"
                    | "UNSUPPORTED_PREFILTER"
                    | "INTERNAL_ERROR"
                    | "OTHER_REASON"
                    | undefined;
                message?: string | undefined;
                uncoveredColumns?: Array<string> | undefined;
            }
            interface StoredColumnsUsage {
                baseTable?: BigQuery.Schema.TableReference | undefined;
                isQueryAccelerated?: boolean | undefined;
                storedColumnsUnusedReasons?: BigQuery.Schema.StoredColumnsUnusedReason[] | undefined;
            }
            interface Streamingbuffer {
                estimatedBytes?: string | undefined;
                estimatedRows?: string | undefined;
                oldestEntryTime?: string | undefined;
            }
            interface StringHparamSearchSpace {
                candidates?: Array<string> | undefined;
            }
            interface SystemVariables {
                types?: Record<string, BigQuery.Schema.StandardSqlDataType> | undefined;
                values?: Record<string, any> | undefined;
            }
            interface Table {
                biglakeConfiguration?: BigQuery.Schema.BigLakeConfiguration | undefined;
                cloneDefinition?: BigQuery.Schema.CloneDefinition | undefined;
                clustering?: BigQuery.Schema.Clustering | undefined;
                creationTime?: string | undefined;
                defaultCollation?: string | undefined;
                defaultRoundingMode?:
                    | "ROUNDING_MODE_UNSPECIFIED"
                    | "ROUND_HALF_AWAY_FROM_ZERO"
                    | "ROUND_HALF_EVEN"
                    | undefined;
                description?: string | undefined;
                encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                etag?: string | undefined;
                expirationTime?: string | undefined;
                externalCatalogTableOptions?: BigQuery.Schema.ExternalCatalogTableOptions | undefined;
                externalDataConfiguration?: BigQuery.Schema.ExternalDataConfiguration | undefined;
                friendlyName?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                labels?: Record<string, string> | undefined;
                lastModifiedTime?: string | undefined;
                location?: string | undefined;
                managedTableType?: "MANAGED_TABLE_TYPE_UNSPECIFIED" | "NATIVE" | "BIGLAKE" | undefined;
                materializedView?: BigQuery.Schema.MaterializedViewDefinition | undefined;
                materializedViewStatus?: BigQuery.Schema.MaterializedViewStatus | undefined;
                maxStaleness?: string | undefined;
                model?: BigQuery.Schema.ModelDefinition | undefined;
                numActiveLogicalBytes?: string | undefined;
                numActivePhysicalBytes?: string | undefined;
                numBytes?: string | undefined;
                numCurrentPhysicalBytes?: string | undefined;
                numLongTermBytes?: string | undefined;
                numLongTermLogicalBytes?: string | undefined;
                numLongTermPhysicalBytes?: string | undefined;
                numPartitions?: string | undefined;
                numPhysicalBytes?: string | undefined;
                numRows?: string | undefined;
                numTimeTravelPhysicalBytes?: string | undefined;
                numTotalLogicalBytes?: string | undefined;
                numTotalPhysicalBytes?: string | undefined;
                partitionDefinition?: BigQuery.Schema.PartitioningDefinition | undefined;
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                replicas?: BigQuery.Schema.TableReference[] | undefined;
                requirePartitionFilter?: boolean | undefined;
                resourceTags?: Record<string, string> | undefined;
                restrictions?: BigQuery.Schema.RestrictionConfig | undefined;
                schema?: BigQuery.Schema.TableSchema | undefined;
                selfLink?: string | undefined;
                snapshotDefinition?: BigQuery.Schema.SnapshotDefinition | undefined;
                streamingBuffer?: BigQuery.Schema.Streamingbuffer | undefined;
                tableConstraints?: BigQuery.Schema.TableConstraints | undefined;
                tableReference?: BigQuery.Schema.TableReference | undefined;
                tableReplicationInfo?: BigQuery.Schema.TableReplicationInfo | undefined;
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                type?: string | undefined;
                view?: BigQuery.Schema.ViewDefinition | undefined;
            }
            interface TableCell {
                v?: any;
            }
            interface TableChangeInsight {
                metadataCacheNotUsedButUsedPreviously?: boolean | undefined;
                metadataCacheStalenessInsight?: BigQuery.Schema.MetadataCacheStalenessInsight | undefined;
                tableReference?: BigQuery.Schema.TableReference | undefined;
            }
            interface TableConstraints {
                foreignKeys?:
                    | Array<{
                        columnReferences?:
                            | Array<{
                                referencedColumn?: string | undefined;
                                referencingColumn?: string | undefined;
                            }>
                            | undefined;
                        name?: string | undefined;
                        referencedTable?: {
                            datasetId?: string | undefined;
                            projectId?: string | undefined;
                            tableId?: string | undefined;
                        } | undefined;
                    }>
                    | undefined;
                primaryKey?: {
                    columns?: Array<string> | undefined;
                } | undefined;
            }
            interface TableDataInsertAllRequest {
                ignoreUnknownValues?: boolean | undefined;
                kind?: string | undefined;
                rows?:
                    | Array<{
                        insertId?: string | undefined;
                        json?: BigQuery.Schema.JsonObject | undefined;
                    }>
                    | undefined;
                skipInvalidRows?: boolean | undefined;
                templateSuffix?: string | undefined;
                traceId?: string | undefined;
            }
            interface TableDataInsertAllResponse {
                insertErrors?:
                    | Array<{
                        errors?: BigQuery.Schema.ErrorProto[] | undefined;
                        index?: number | undefined;
                    }>
                    | undefined;
                kind?: string | undefined;
            }
            interface TableDataList {
                etag?: string | undefined;
                kind?: string | undefined;
                pageToken?: string | undefined;
                rows?: BigQuery.Schema.TableRow[] | undefined;
                totalRows?: string | undefined;
            }
            interface TableFieldSchema {
                categories?: {
                    names?: Array<string> | undefined;
                } | undefined;
                collation?: string | undefined;
                dataGovernanceTagsInfo?: {
                    dataGovernanceTags?: Record<string, string> | undefined;
                } | undefined;
                dataPolicies?: BigQuery.Schema.DataPolicyOption[] | undefined;
                dataPolicyList?: BigQuery.Schema.DataPolicyList | undefined;
                defaultValueExpression?: string | undefined;
                description?: string | undefined;
                fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
                foreignTypeDefinition?: string | undefined;
                generatedColumn?: BigQuery.Schema.GeneratedColumn | undefined;
                maxLength?: string | undefined;
                mode?: string | undefined;
                name?: string | undefined;
                policyTags?: {
                    names?: Array<string> | undefined;
                } | undefined;
                precision?: string | undefined;
                rangeElementType?: {
                    type?: string | undefined;
                } | undefined;
                roundingMode?:
                    | "ROUNDING_MODE_UNSPECIFIED"
                    | "ROUND_HALF_AWAY_FROM_ZERO"
                    | "ROUND_HALF_EVEN"
                    | undefined;
                scale?: string | undefined;
                timestampPrecision?: string | undefined;
                type?: string | undefined;
            }
            interface TableList {
                etag?: string | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                tables?:
                    | Array<{
                        clustering?: BigQuery.Schema.Clustering | undefined;
                        creationTime?: string | undefined;
                        expirationTime?: string | undefined;
                        friendlyName?: string | undefined;
                        id?: string | undefined;
                        kind?: string | undefined;
                        labels?: Record<string, string> | undefined;
                        rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                        requirePartitionFilter?: boolean | undefined;
                        tableReference?: BigQuery.Schema.TableReference | undefined;
                        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                        type?: string | undefined;
                        view?: {
                            privacyPolicy?: BigQuery.Schema.PrivacyPolicy | undefined;
                            useLegacySql?: boolean | undefined;
                        } | undefined;
                    }>
                    | undefined;
                totalItems?: number | undefined;
            }
            interface TableMetadataCacheUsage {
                explanation?: string | undefined;
                pruningStats?: BigQuery.Schema.PruningStats | undefined;
                staleness?: string | undefined;
                tableReference?: BigQuery.Schema.TableReference | undefined;
                tableType?: string | undefined;
                unusedReason?:
                    | "UNUSED_REASON_UNSPECIFIED"
                    | "EXCEEDED_MAX_STALENESS"
                    | "METADATA_CACHING_NOT_ENABLED"
                    | "OTHER_REASON"
                    | undefined;
            }
            interface TableReference {
                datasetId?: string | undefined;
                projectId?: string | undefined;
                tableId?: string | undefined;
            }
            interface TableReplicationInfo {
                replicatedSourceLastRefreshTime?: string | undefined;
                replicationError?: BigQuery.Schema.ErrorProto | undefined;
                replicationIntervalMs?: string | undefined;
                replicationStatus?:
                    | "REPLICATION_STATUS_UNSPECIFIED"
                    | "ACTIVE"
                    | "SOURCE_DELETED"
                    | "PERMISSION_DENIED"
                    | "UNSUPPORTED_CONFIGURATION"
                    | undefined;
                sourceTable?: BigQuery.Schema.TableReference | undefined;
            }
            interface TableRow {
                f?: BigQuery.Schema.TableCell[] | undefined;
            }
            interface TableSchema {
                fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
                foreignTypeInfo?: BigQuery.Schema.ForeignTypeInfo | undefined;
            }
            interface TestIamPermissionsRequest {
                permissions?: Array<string> | undefined;
            }
            interface TestIamPermissionsResponse {
                permissions?: Array<string> | undefined;
            }
            interface TimePartitioning {
                expirationMs?: string | undefined;
                field?: string | undefined;
                requirePartitionFilter?: boolean | undefined;
                type?: string | undefined;
            }
            interface TrainingOptions {
                activationFn?: string | undefined;
                adjustStepChanges?: boolean | undefined;
                approxGlobalFeatureContrib?: boolean | undefined;
                autoArima?: boolean | undefined;
                autoArimaMaxOrder?: string | undefined;
                autoArimaMinOrder?: string | undefined;
                autoClassWeights?: boolean | undefined;
                batchSize?: string | undefined;
                boosterType?: "BOOSTER_TYPE_UNSPECIFIED" | "GBTREE" | "DART" | undefined;
                budgetHours?: number | undefined;
                calculatePValues?: boolean | undefined;
                categoryEncodingMethod?:
                    | "ENCODING_METHOD_UNSPECIFIED"
                    | "ONE_HOT_ENCODING"
                    | "LABEL_ENCODING"
                    | "DUMMY_ENCODING"
                    | undefined;
                cleanSpikesAndDips?: boolean | undefined;
                colorSpace?: "COLOR_SPACE_UNSPECIFIED" | "RGB" | "HSV" | "YIQ" | "YUV" | "GRAYSCALE" | undefined;
                colsampleBylevel?: number | undefined;
                colsampleBynode?: number | undefined;
                colsampleBytree?: number | undefined;
                contributionMetric?: string | undefined;
                dartNormalizeType?: "DART_NORMALIZE_TYPE_UNSPECIFIED" | "TREE" | "FOREST" | undefined;
                dataFrequency?:
                    | "DATA_FREQUENCY_UNSPECIFIED"
                    | "AUTO_FREQUENCY"
                    | "YEARLY"
                    | "QUARTERLY"
                    | "MONTHLY"
                    | "WEEKLY"
                    | "DAILY"
                    | "HOURLY"
                    | "PER_MINUTE"
                    | undefined;
                dataSplitColumn?: string | undefined;
                dataSplitEvalFraction?: number | undefined;
                dataSplitMethod?:
                    | "DATA_SPLIT_METHOD_UNSPECIFIED"
                    | "RANDOM"
                    | "CUSTOM"
                    | "SEQUENTIAL"
                    | "NO_SPLIT"
                    | "AUTO_SPLIT"
                    | undefined;
                decomposeTimeSeries?: boolean | undefined;
                dimensionIdColumns?: Array<string> | undefined;
                distanceType?: "DISTANCE_TYPE_UNSPECIFIED" | "EUCLIDEAN" | "COSINE" | undefined;
                dropout?: number | undefined;
                earlyStop?: boolean | undefined;
                enableGlobalExplain?: boolean | undefined;
                endpointIdleTtl?: string | undefined;
                feedbackType?: "FEEDBACK_TYPE_UNSPECIFIED" | "IMPLICIT" | "EXPLICIT" | undefined;
                fitIntercept?: boolean | undefined;
                forecastLimitLowerBound?: number | undefined;
                forecastLimitUpperBound?: number | undefined;
                hiddenUnits?: Array<string> | undefined;
                holidayRegion?:
                    | "HOLIDAY_REGION_UNSPECIFIED"
                    | "GLOBAL"
                    | "NA"
                    | "JAPAC"
                    | "EMEA"
                    | "LAC"
                    | "AE"
                    | "AR"
                    | "AT"
                    | "AU"
                    | "BE"
                    | "BR"
                    | "CA"
                    | "CH"
                    | "CL"
                    | "CN"
                    | "CO"
                    | "CS"
                    | "CZ"
                    | "DE"
                    | "DK"
                    | "DZ"
                    | "EC"
                    | "EE"
                    | "EG"
                    | "ES"
                    | "FI"
                    | "FR"
                    | "GB"
                    | "GR"
                    | "HK"
                    | "HU"
                    | "ID"
                    | "IE"
                    | "IL"
                    | "IN"
                    | "IR"
                    | "IT"
                    | "JP"
                    | "KR"
                    | "LV"
                    | "MA"
                    | "MX"
                    | "MY"
                    | "NG"
                    | "NL"
                    | "NO"
                    | "NZ"
                    | "PE"
                    | "PH"
                    | "PK"
                    | "PL"
                    | "PT"
                    | "RO"
                    | "RS"
                    | "RU"
                    | "SA"
                    | "SE"
                    | "SG"
                    | "SI"
                    | "SK"
                    | "TH"
                    | "TR"
                    | "TW"
                    | "UA"
                    | "US"
                    | "VE"
                    | "VN"
                    | "ZA"
                    | undefined;
                holidayRegions?:
                    | Array<
                        | "HOLIDAY_REGION_UNSPECIFIED"
                        | "GLOBAL"
                        | "NA"
                        | "JAPAC"
                        | "EMEA"
                        | "LAC"
                        | "AE"
                        | "AR"
                        | "AT"
                        | "AU"
                        | "BE"
                        | "BR"
                        | "CA"
                        | "CH"
                        | "CL"
                        | "CN"
                        | "CO"
                        | "CS"
                        | "CZ"
                        | "DE"
                        | "DK"
                        | "DZ"
                        | "EC"
                        | "EE"
                        | "EG"
                        | "ES"
                        | "FI"
                        | "FR"
                        | "GB"
                        | "GR"
                        | "HK"
                        | "HU"
                        | "ID"
                        | "IE"
                        | "IL"
                        | "IN"
                        | "IR"
                        | "IT"
                        | "JP"
                        | "KR"
                        | "LV"
                        | "MA"
                        | "MX"
                        | "MY"
                        | "NG"
                        | "NL"
                        | "NO"
                        | "NZ"
                        | "PE"
                        | "PH"
                        | "PK"
                        | "PL"
                        | "PT"
                        | "RO"
                        | "RS"
                        | "RU"
                        | "SA"
                        | "SE"
                        | "SG"
                        | "SI"
                        | "SK"
                        | "TH"
                        | "TR"
                        | "TW"
                        | "UA"
                        | "US"
                        | "VE"
                        | "VN"
                        | "ZA"
                    >
                    | undefined;
                horizon?: string | undefined;
                hparamTuningObjectives?:
                    | Array<
                        | "HPARAM_TUNING_OBJECTIVE_UNSPECIFIED"
                        | "MEAN_ABSOLUTE_ERROR"
                        | "MEAN_SQUARED_ERROR"
                        | "MEAN_SQUARED_LOG_ERROR"
                        | "MEDIAN_ABSOLUTE_ERROR"
                        | "R_SQUARED"
                        | "EXPLAINED_VARIANCE"
                        | "PRECISION"
                        | "RECALL"
                        | "ACCURACY"
                        | "F1_SCORE"
                        | "LOG_LOSS"
                        | "ROC_AUC"
                        | "DAVIES_BOULDIN_INDEX"
                        | "MEAN_AVERAGE_PRECISION"
                        | "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN"
                        | "AVERAGE_RANK"
                    >
                    | undefined;
                huggingFaceModelId?: string | undefined;
                includeDrift?: boolean | undefined;
                initialLearnRate?: number | undefined;
                inputLabelColumns?: Array<string> | undefined;
                instanceWeightColumn?: string | undefined;
                integratedGradientsNumSteps?: string | undefined;
                isTestColumn?: string | undefined;
                itemColumn?: string | undefined;
                kmeansInitializationColumn?: string | undefined;
                kmeansInitializationMethod?:
                    | "KMEANS_INITIALIZATION_METHOD_UNSPECIFIED"
                    | "RANDOM"
                    | "CUSTOM"
                    | "KMEANS_PLUS_PLUS"
                    | undefined;
                l1RegActivation?: number | undefined;
                l1Regularization?: number | undefined;
                l2Regularization?: number | undefined;
                labelClassWeights?: Record<string, number> | undefined;
                learnRate?: number | undefined;
                learnRateStrategy?: "LEARN_RATE_STRATEGY_UNSPECIFIED" | "LINE_SEARCH" | "CONSTANT" | undefined;
                lossType?: "LOSS_TYPE_UNSPECIFIED" | "MEAN_SQUARED_LOSS" | "MEAN_LOG_LOSS" | undefined;
                machineType?: string | undefined;
                maxIterations?: string | undefined;
                maxParallelTrials?: string | undefined;
                maxReplicaCount?: string | undefined;
                maxTimeSeriesLength?: string | undefined;
                maxTreeDepth?: string | undefined;
                minAprioriSupport?: number | undefined;
                minRelativeProgress?: number | undefined;
                minReplicaCount?: string | undefined;
                minSplitLoss?: number | undefined;
                minTimeSeriesLength?: string | undefined;
                minTreeChildWeight?: string | undefined;
                modelGardenModelName?: string | undefined;
                modelRegistry?: "MODEL_REGISTRY_UNSPECIFIED" | "VERTEX_AI" | undefined;
                modelUri?: string | undefined;
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                numClusters?: string | undefined;
                numFactors?: string | undefined;
                numParallelTree?: string | undefined;
                numPrincipalComponents?: string | undefined;
                numTrials?: string | undefined;
                optimizationStrategy?:
                    | "OPTIMIZATION_STRATEGY_UNSPECIFIED"
                    | "BATCH_GRADIENT_DESCENT"
                    | "NORMAL_EQUATION"
                    | undefined;
                optimizer?: string | undefined;
                pcaExplainedVarianceRatio?: number | undefined;
                pcaSolver?: "UNSPECIFIED" | "FULL" | "RANDOMIZED" | "AUTO" | undefined;
                reservationAffinityKey?: string | undefined;
                reservationAffinityType?:
                    | "RESERVATION_AFFINITY_TYPE_UNSPECIFIED"
                    | "NO_RESERVATION"
                    | "ANY_RESERVATION"
                    | "SPECIFIC_RESERVATION"
                    | undefined;
                reservationAffinityValues?: Array<string> | undefined;
                sampledShapleyNumPaths?: string | undefined;
                scaleFeatures?: boolean | undefined;
                standardizeFeatures?: boolean | undefined;
                subsample?: number | undefined;
                tfVersion?: string | undefined;
                timeSeriesDataColumn?: string | undefined;
                timeSeriesIdColumn?: string | undefined;
                timeSeriesIdColumns?: Array<string> | undefined;
                timeSeriesLengthFraction?: number | undefined;
                timeSeriesTimestampColumn?: string | undefined;
                treeMethod?: "TREE_METHOD_UNSPECIFIED" | "AUTO" | "EXACT" | "APPROX" | "HIST" | undefined;
                trendSmoothingWindowSize?: string | undefined;
                userColumn?: string | undefined;
                vertexAiModelVersionAliases?: Array<string> | undefined;
                walsAlpha?: number | undefined;
                warmStart?: boolean | undefined;
                xgboostVersion?: string | undefined;
            }
            interface TrainingRun {
                classLevelGlobalExplanations?: BigQuery.Schema.GlobalExplanation[] | undefined;
                dataSplitResult?: BigQuery.Schema.DataSplitResult | undefined;
                evaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                modelLevelGlobalExplanation?: BigQuery.Schema.GlobalExplanation | undefined;
                results?: BigQuery.Schema.IterationResult[] | undefined;
                startTime?: string | undefined;
                trainingOptions?: BigQuery.Schema.TrainingOptions | undefined;
                trainingStartTime?: string | undefined;
                vertexAiModelId?: string | undefined;
                vertexAiModelVersion?: string | undefined;
            }
            interface TransactionInfo {
                transactionId?: string | undefined;
            }
            interface TransformColumn {
                name?: string | undefined;
                transformSql?: string | undefined;
                type?: BigQuery.Schema.StandardSqlDataType | undefined;
            }
            interface UndeleteDatasetRequest {
                deletionTime?: string | undefined;
            }
            interface UserDefinedFunctionResource {
                inlineCode?: string | undefined;
                resourceUri?: string | undefined;
            }
            interface VectorSearchStatistics {
                indexUnusedReasons?: BigQuery.Schema.IndexUnusedReason[] | undefined;
                indexUsageMode?:
                    | "INDEX_USAGE_MODE_UNSPECIFIED"
                    | "UNUSED"
                    | "PARTIALLY_USED"
                    | "FULLY_USED"
                    | undefined;
                storedColumnsUsages?: BigQuery.Schema.StoredColumnsUsage[] | undefined;
            }
            interface ViewDefinition {
                foreignDefinitions?: BigQuery.Schema.ForeignViewDefinition[] | undefined;
                privacyPolicy?: BigQuery.Schema.PrivacyPolicy | undefined;
                query?: string | undefined;
                useExplicitColumnNames?: boolean | undefined;
                useLegacySql?: boolean | undefined;
                userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
            }
        }
    }
}

// Handwritten patch for backward compatibility regarding types,
// or for adding back missing types against discovery-artifact-manager.
declare namespace GoogleAppsScript {
    namespace BigQuery {
        namespace Schema {
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
            interface DatasetAccess {
                domain?: string | undefined;
                groupByEmail?: string | undefined;
                iamMember?: string | undefined;
                role?: string | undefined;
                specialGroup?: string | undefined;
                userByEmail?: string | undefined;
                view?: BigQuery.Schema.TableReference | undefined;
            }
            interface JobStatistics2ReservationUsage {
                name?: string | undefined;
                slotMs?: string | undefined;
            }
            interface JobStatisticsReservationUsage {
                name?: string | undefined;
                slotMs?: string | undefined;
            }
            interface ModelDefinitionModelOptions {
                labels?: string[] | undefined;
                lossType?: string | undefined;
                modelType?: string | undefined;
            }
            interface QueryParameterTypeStructTypes {
                description?: string | undefined;
                name?: string | undefined;
                type?: BigQuery.Schema.QueryParameterType | undefined;
            }
            interface RangePartitioningRange {
                end?: string | undefined;
                interval?: string | undefined;
                start?: string | undefined;
            }
            interface TableDataInsertAllRequestRows {
                insertId?: string | undefined;
                json?: object | undefined;
            }
            interface TableFieldSchemaCategories {
                names?: string[] | undefined;
            }
            interface DatasetListDatasets {
                catalogSource?: string | undefined;
                datasetReference?: BigQuery.Schema.DatasetReference | undefined;
                externalDatasetReference?: BigQuery.Schema.ExternalDatasetReference | undefined;
                friendlyName?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                labels?: Record<string, string> | undefined;
                location?: string | undefined;
                type?: string | undefined;
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
            interface ProjectListProjects {
                friendlyName?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                numericId?: string | undefined;
                projectReference?: BigQuery.Schema.ProjectReference | undefined;
            }
            interface TableListTables {
                clustering?: BigQuery.Schema.Clustering | undefined;
                creationTime?: string | undefined;
                expirationTime?: string | undefined;
                friendlyName?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                labels?: Record<string, string> | undefined;
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                requirePartitionFilter?: boolean | undefined;
                tableReference?: BigQuery.Schema.TableReference | undefined;
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                type?: string | undefined;
                view?: BigQuery.Schema.TableListTablesView | undefined;
            }
            interface TableListTablesView {
                privacyPolicy?: BigQuery.Schema.PrivacyPolicy | undefined;
                useLegacySql?: boolean | undefined;
            }
        }
    }

    interface BigQuery {
        Datasets: BigQuery.Collection.DatasetsCollection;
        Jobs: BigQuery.Collection.JobsCollection;
        Projects: BigQuery.Collection.ProjectsCollection;
        Tabledata: BigQuery.Collection.TabledataCollection;
        Tables: BigQuery.Collection.TablesCollection;
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

/**
 * The `BigQuery` advanced service must be enabled.
 */
declare var BigQuery: GoogleAppsScript.BigQuery | undefined;
