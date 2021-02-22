// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace BigQuery {
        namespace Collection {
            interface DatasetsCollection {
                // Returns the dataset specified by datasetID.
                get(projectId: string, datasetId: string): Schema.Dataset;
                // Creates a new empty dataset.
                insert(resource: Schema.Dataset, projectId: string): Schema.Dataset;
                // Lists all datasets in the specified project to which you have been granted the READER dataset role.
                list(projectId: string): Schema.DatasetList;
                // Lists all datasets in the specified project to which you have been granted the READER dataset role.
                list(projectId: string, optionalArgs: object): Schema.DatasetList;
                // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch
                // method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
                patch(resource: Schema.Dataset, projectId: string, datasetId: string): Schema.Dataset;
                // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables,
                // either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the
                // same name.
                remove(projectId: string, datasetId: string): void;
                // Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables,
                // either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the
                // same name.
                remove(projectId: string, datasetId: string, optionalArgs: object): void;
                // Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch
                // method only replaces fields that are provided in the submitted dataset resource.
                update(resource: Schema.Dataset, projectId: string, datasetId: string): Schema.Dataset;
            }
            interface JobsCollection {
                // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status
                // to see if the cancel completed successfully. Cancelled jobs may still incur costs.
                cancel(projectId: string, jobId: string): Schema.JobCancelResponse;
                // Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status
                // to see if the cancel completed successfully. Cancelled jobs may still incur costs.
                cancel(projectId: string, jobId: string, optionalArgs: object): Schema.JobCancelResponse;
                // Returns information about a specific job. Job information is available for a six month period after creation. Requires
                // that you're the person who ran the job, or have the Is Owner project role.
                get(projectId: string, jobId: string): Schema.Job;
                // Returns information about a specific job. Job information is available for a six month period after creation. Requires
                // that you're the person who ran the job, or have the Is Owner project role.
                get(projectId: string, jobId: string, optionalArgs: object): Schema.Job;
                // Retrieves the results of a query job.
                getQueryResults(projectId: string, jobId: string): Schema.GetQueryResultsResponse;
                // Retrieves the results of a query job.
                getQueryResults(projectId: string, jobId: string, optionalArgs: object): Schema.GetQueryResultsResponse;
                // Starts a new asynchronous job. Requires the Can View project role.
                insert(resource: Schema.Job, projectId: string): Schema.Job;
                // Starts a new asynchronous job. Requires the Can View project role.
                insert(resource: Schema.Job, projectId: string, mediaData: Base.Blob): Schema.Job;
                // Lists all jobs that you started in the specified project. Job information is available for a six month period after
                // creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project
                // role, or the Is Owner project role if you set the allUsers property.
                list(projectId: string): Schema.JobList;
                // Lists all jobs that you started in the specified project. Job information is available for a six month period after
                // creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project
                // role, or the Is Owner project role if you set the allUsers property.
                list(projectId: string, optionalArgs: object): Schema.JobList;
                // Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
                query(resource: Schema.QueryRequest, projectId: string): Schema.QueryResponse;
            }
            interface ModelsCollection {
                // Gets the specified model resource by model ID.
                get(projectId: string, datasetId: string, modelId: string): Schema.Model;
                // Lists all models in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string): Schema.ListModelsResponse;
                // Lists all models in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string, optionalArgs: object): Schema.ListModelsResponse;
                // Patch specific fields in the specified model.
                patch(resource: Schema.Model, projectId: string, datasetId: string, modelId: string): Schema.Model;
                // Deletes the model specified by modelId from the dataset.
                remove(projectId: string, datasetId: string, modelId: string): void;
            }
            interface ProjectsCollection {
                // Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
                getServiceAccount(projectId: string): Schema.GetServiceAccountResponse;
                // Lists all projects to which you have been granted any project role.
                list(): Schema.ProjectList;
                // Lists all projects to which you have been granted any project role.
                list(optionalArgs: object): Schema.ProjectList;
            }
            interface RoutinesCollection {
                // Gets the specified routine resource by routine ID.
                get(projectId: string, datasetId: string, routineId: string): Schema.Routine;
                // Gets the specified routine resource by routine ID.
                get(projectId: string, datasetId: string, routineId: string, optionalArgs: object): Schema.Routine;
                // Creates a new routine in the dataset.
                insert(resource: Schema.Routine, projectId: string, datasetId: string): Schema.Routine;
                // Lists all routines in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string): Schema.ListRoutinesResponse;
                // Lists all routines in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string, optionalArgs: object): Schema.ListRoutinesResponse;
                // Deletes the routine specified by routineId from the dataset.
                remove(projectId: string, datasetId: string, routineId: string): void;
                // Updates information in an existing routine. The update method replaces the entire Routine resource.
                update(resource: Schema.Routine, projectId: string, datasetId: string, routineId: string): Schema.Routine;
            }
            interface RowAccessPoliciesCollection {
                // Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
                // set.
                getIamPolicy(resource0: Schema.GetIamPolicyRequest, resource: string): Schema.Policy;
                // Lists all row access policies on the specified table.
                list(projectId: string, datasetId: string, tableId: string): Schema.ListRowAccessPoliciesResponse;
                // Lists all row access policies on the specified table.
                list(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Schema.ListRowAccessPoliciesResponse;
                // Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`,
                // `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
                setIamPolicy(resource0: Schema.SetIamPolicyRequest, resource: string): Schema.Policy;
                // Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an
                // empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building
                // permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without
                // warning.
                testIamPermissions(resource0: Schema.TestIamPermissionsRequest, resource: string): Schema.TestIamPermissionsResponse;
            }
            interface TabledataCollection {
                // Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
                insertAll(resource: Schema.TableDataInsertAllRequest, projectId: string, datasetId: string, tableId: string): Schema.TableDataInsertAllResponse;
                // Retrieves table data from a specified set of rows. Requires the READER dataset role.
                list(projectId: string, datasetId: string, tableId: string): Schema.TableDataList;
                // Retrieves table data from a specified set of rows. Requires the READER dataset role.
                list(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Schema.TableDataList;
            }
            interface TablesCollection {
                // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the
                // table resource, which describes the structure of this table.
                get(projectId: string, datasetId: string, tableId: string): Schema.Table;
                // Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the
                // table resource, which describes the structure of this table.
                get(projectId: string, datasetId: string, tableId: string, optionalArgs: object): Schema.Table;
                // Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
                // set.
                getIamPolicy(resource0: Schema.GetIamPolicyRequest, resource: string): Schema.Policy;
                // Creates a new, empty table in the dataset.
                insert(resource: Schema.Table, projectId: string, datasetId: string): Schema.Table;
                // Lists all tables in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string): Schema.TableList;
                // Lists all tables in the specified dataset. Requires the READER dataset role.
                list(projectId: string, datasetId: string, optionalArgs: object): Schema.TableList;
                // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method
                // only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
                patch(resource: Schema.Table, projectId: string, datasetId: string, tableId: string): Schema.Table;
                // Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
                remove(projectId: string, datasetId: string, tableId: string): void;
                // Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`,
                // `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
                setIamPolicy(resource0: Schema.SetIamPolicyRequest, resource: string): Schema.Policy;
                // Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an
                // empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building
                // permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without
                // warning.
                testIamPermissions(resource0: Schema.TestIamPermissionsRequest, resource: string): Schema.TestIamPermissionsResponse;
                // Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method
                // only replaces fields that are provided in the submitted table resource.
                update(resource: Schema.Table, projectId: string, datasetId: string, tableId: string): Schema.Table;
            }
        }
        namespace Schema {
            // Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or
            // micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken
            // of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly
            // predicted rows.
            interface AggregateClassificationMetrics {
                // Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
                accuracy?: number;
                // The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
                f1Score?: number;
                // Logarithmic Loss. For multiclass this is a macro-averaged metric.
                logLoss?: number;
                // Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a
                // macro-averaged metric treating each class as a binary classifier.
                precision?: number;
                // Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a
                // macro-averaged metric.
                recall?: number;
                // Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
                rocAuc?: number;
                // Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For
                // multi-class classfication models this is the confidence threshold.
                threshold?: number;
            }
            // Input/output argument of a function or a stored procedure.
            interface Argument {
                // Optional. Defaults to FIXED_TYPE.
                argumentKind?: string;
                // Required unless argument_kind = ANY_TYPE.
                dataType?: Schema.StandardSqlDataType;
                // Optional. Specifies whether the argument is input or output. Can be set for procedures only.
                mode?: string;
                // Optional. The name of this argument. Can be absent for function return argument.
                name?: string;
            }
            // Arima coefficients.
            interface ArimaCoefficients {
                // Auto-regressive coefficients, an array of double.
                autoRegressiveCoefficients?: number[];
                // Intercept coefficient, just a double not an array.
                interceptCoefficient?: number;
                // Moving-average coefficients, an array of double.
                movingAverageCoefficients?: number[];
            }
            // ARIMA model fitting metrics.
            interface ArimaFittingMetrics {
                // AIC.
                aic?: number;
                // Log-likelihood.
                logLikelihood?: number;
                // Variance.
                variance?: number;
            }
            // Model evaluation metrics for ARIMA forecasting models.
            interface ArimaForecastingMetrics {
                // Arima model fitting metrics.
                arimaFittingMetrics?: Schema.ArimaFittingMetrics[];
                // Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
                arimaSingleModelForecastingMetrics?: Schema.ArimaSingleModelForecastingMetrics[];
                // Whether Arima model fitted with drift or not. It is always false when d is not 1.
                hasDrift?: boolean[];
                // Non-seasonal order.
                nonSeasonalOrder?: Schema.ArimaOrder[];
                // Seasonal periods. Repeated because multiple periods are supported for one time series.
                seasonalPeriods?: string[];
                // Id to differentiate different time series for the large-scale case.
                timeSeriesId?: string[];
            }
            // Arima model information.
            interface ArimaModelInfo {
                // Arima coefficients.
                arimaCoefficients?: Schema.ArimaCoefficients;
                // Arima fitting metrics.
                arimaFittingMetrics?: Schema.ArimaFittingMetrics;
                // Whether Arima model fitted with drift or not. It is always false when d is not 1.
                hasDrift?: boolean;
                // Non-seasonal order.
                nonSeasonalOrder?: Schema.ArimaOrder;
                // Seasonal periods. Repeated because multiple periods are supported for one time series.
                seasonalPeriods?: string[];
                // The id to indicate different time series.
                timeSeriesId?: string;
            }
            // Arima order, can be used for both non-seasonal and seasonal parts.
            interface ArimaOrder {
                // Order of the differencing part.
                d?: string;
                // Order of the autoregressive part.
                p?: string;
                // Order of the moving-average part.
                q?: string;
            }
            // (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific
            // iteration results.
            interface ArimaResult {
                // This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its
                // size is one.
                arimaModelInfo?: Schema.ArimaModelInfo[];
                // Seasonal periods. Repeated because multiple periods are supported for one time series.
                seasonalPeriods?: string[];
            }
            // Model evaluation metrics for a single ARIMA forecasting model.
            interface ArimaSingleModelForecastingMetrics {
                // Arima fitting metrics.
                arimaFittingMetrics?: Schema.ArimaFittingMetrics;
                // Is arima model fitted with drift or not. It is always false when d is not 1.
                hasDrift?: boolean;
                // Non-seasonal order.
                nonSeasonalOrder?: Schema.ArimaOrder;
                // Seasonal periods. Repeated because multiple periods are supported for one time series.
                seasonalPeriods?: string[];
                // The id to indicate different time series.
                timeSeriesId?: string;
            }
            // Specifies the audit configuration for a service. The configuration determines which permission types are logged, and
            // what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are
            // AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service:
            // the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.
            // Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ {
            // "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type":
            // "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, {
            // "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy
            // enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and
            // aliya@example.com from DATA_WRITE logging.
            interface AuditConfig {
                // The configuration for logging of each type of permission.
                auditLogConfigs?: Schema.AuditLogConfig[];
                // Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`,
                // `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
                service?: string;
            }
            // Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type":
            // "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables
            // 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
            interface AuditLogConfig {
                // Specifies the identities that do not cause logging for this type of permission. Follows the same format of
                // Binding.members.
                exemptedMembers?: string[];
                // The log type that this config enables.
                logType?: string;
            }
            interface BigQueryModelTraining {
                // [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress.
                currentIteration?: Integer;
                // [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the
                // input query. The actual total number of iterations may be less than this number due to early stop.
                expectedTotalIterations?: string;
            }
            interface BigtableColumn {
                // [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates
                // values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of
                // functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if
                // 'encoding' is set at both levels.
                encoding?: string;
                // [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid
                // identifier must be provided as the column field name and is used as field name in queries.
                fieldName?: string;
                // [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set
                // at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both
                // levels.
                onlyReadLatest?: boolean;
                // [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as .
                // field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64
                // encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if
                // the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier
                // must be provided as field_name.
                qualifierEncoded?: Byte[];
                qualifierString?: string;
                // [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase
                // Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) -
                // BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. 'type' can also be set at the column family level. However,
                // the setting at this level takes precedence if 'type' is set at both levels.
                type?: string;
            }
            interface BigtableColumnFamily {
                // [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value)
                // pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed
                // as a list through .Column field.
                columns?: Schema.BigtableColumn[];
                // [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates
                // values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of
                // functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding
                // for it.
                encoding?: string;
                // Identifier of the column family.
                familyId?: string;
                // [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can
                // be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that
                // column.
                onlyReadLatest?: boolean;
                // [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using
                // HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive)
                // - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that
                // column in 'columns' and specifying a type for it.
                type?: string;
            }
            interface BigtableOptions {
                // [Optional] List of column families to expose in the table schema along with their types. This list restricts the column
                // families that can be referenced in queries and specifies their value types. You can use this list to do type conversions
                // - see the 'type' field for more details. If you leave this list empty, all column families are present in the table
                // schema and their values are read as BYTES. During a query only the column families referenced in that query are read
                // from Bigtable.
                columnFamilies?: Schema.BigtableColumnFamily[];
                // [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in
                // the table schema. Otherwise, they are read with BYTES type values. The default value is false.
                ignoreUnspecifiedColumnFamilies?: boolean;
                // [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are
                // read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.
                readRowkeyAsString?: boolean;
            }
            // Evaluation metrics for binary classification/classifier models.
            interface BinaryClassificationMetrics {
                // Aggregate classification metrics.
                aggregateClassificationMetrics?: Schema.AggregateClassificationMetrics;
                // Binary confusion matrix at multiple thresholds.
                binaryConfusionMatrixList?: Schema.BinaryConfusionMatrix[];
                // Label representing the negative class.
                negativeLabel?: string;
                // Label representing the positive class.
                positiveLabel?: string;
            }
            // Confusion matrix for binary classification models.
            interface BinaryConfusionMatrix {
                // The fraction of predictions given the correct label.
                accuracy?: number;
                // The equally weighted average of recall and precision.
                f1Score?: number;
                // Number of false samples predicted as false.
                falseNegatives?: string;
                // Number of false samples predicted as true.
                falsePositives?: string;
                // Threshold value used when computing each of the following metric.
                positiveClassThreshold?: number;
                // The fraction of actual positive predictions that had positive actual labels.
                precision?: number;
                // The fraction of actual positive labels that were given a positive prediction.
                recall?: number;
                // Number of true samples predicted as false.
                trueNegatives?: string;
                // Number of true samples predicted as true.
                truePositives?: string;
            }
            // Associates `members` with a `role`.
            interface Binding {
                // The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to
                // the current request. If the condition evaluates to `false`, then this binding does not apply to the current request.
                // However, a different role binding might grant the same role to one or more of the members in this binding. To learn
                // which resources support conditions in their IAM policies, see the [IAM
                // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                condition?: Schema.Expr;
                // Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: *
                // `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. *
                // `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a
                // service account. * `user:{emailid}`: An email address that represents a specific Google account. For example,
                // `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example,
                // `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For
                // example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier)
                // representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the
                // user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. *
                // `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service
                // account that has been recently deleted. For example,
                // `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value
                // reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. *
                // `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has
                // been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this
                // value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G
                // Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
                members?: string[];
                // Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
                role?: string;
            }
            interface BqmlIterationResult {
                // [Output-only, Beta] Time taken to run the training iteration in milliseconds.
                durationMs?: string;
                // [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early
                // stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with
                // input data size less than 500 rows.
                evalLoss?: number;
                // [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run.
                index?: Integer;
                // [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if
                // learn_rate_strategy option is not constant.
                learnRate?: number;
                // [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function
                // is defined by model type.
                trainingLoss?: number;
            }
            interface BqmlTrainingRun {
                // [Output-only, Beta] List of each iteration results.
                iterationResults?: Schema.BqmlIterationResult[];
                // [Output-only, Beta] Training run start time in milliseconds since the epoch.
                startTime?: string;
                // [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED:
                // Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training
                // run cancelled by the user.
                state?: string;
                // [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs.
                // Default values are explicitly stored for options not specified in the input query of the first training run. For
                // subsequent training runs, any option not explicitly specified in the input query will be copied from the previous
                // training run.
                trainingOptions?: Schema.BqmlTrainingRunTrainingOptions;
            }
            // [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs.
            // Default values are explicitly stored for options not specified in the input query of the first training run. For
            // subsequent training runs, any option not explicitly specified in the input query will be copied from the previous
            // training run.
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
            // Representative value of a categorical feature.
            interface CategoricalValue {
                // Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by
                // count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
                categoryCounts?: Schema.CategoryCount[];
            }
            // Represents the count of a single category within the cluster.
            interface CategoryCount {
                // The name of category.
                category?: string;
                // The count of training samples matching the category within the cluster.
                count?: string;
            }
            // Message containing the information about one cluster.
            interface Cluster {
                // Centroid id.
                centroidId?: string;
                // Count of training data rows that were assigned to this cluster.
                count?: string;
                // Values of highly variant features for this cluster.
                featureValues?: Schema.FeatureValue[];
            }
            // Information about a single cluster for clustering model.
            interface ClusterInfo {
                // Centroid id.
                centroidId?: string;
                // Cluster radius, the average distance from centroid to each point assigned to the cluster.
                clusterRadius?: number;
                // Cluster size, the total number of points assigned to the cluster.
                clusterSize?: string;
            }
            interface Clustering {
                // [Repeated] One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are
                // supported. When you cluster a table using multiple columns, the order of columns you specify is important. The order of
                // the specified columns determines the sort order of the data.
                fields?: string[];
            }
            // Evaluation metrics for clustering models.
            interface ClusteringMetrics {
                // Information for all clusters.
                clusters?: Schema.Cluster[];
                // Davies-Bouldin index.
                daviesBouldinIndex?: number;
                // Mean of squared distances between each sample to its cluster centroid.
                meanSquaredDistance?: number;
            }
            // Confusion matrix for multi-class classification models.
            interface ConfusionMatrix {
                // Confidence threshold used when computing the entries of the confusion matrix.
                confidenceThreshold?: number;
                // One row per actual label.
                rows?: Schema.Row[];
            }
            interface ConnectionProperty {
                // [Required] Name of the connection property to set.
                key?: string;
                // [Required] Value of the connection property.
                value?: string;
            }
            interface CsvOptions {
                // [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats
                // missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and
                // if there are too many bad records, an invalid error is returned in the job result. The default value is false.
                allowJaggedRows?: boolean;
                // [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The
                // default value is false.
                allowQuotedNewlines?: boolean;
                // [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8.
                // BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter
                // properties.
                encoding?: string;
                // [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses
                // the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape
                // sequence "\t" to specify a tab separator. The default value is a comma (',').
                fieldDelimiter?: string;
                // [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1
                // encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default
                // value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
                // If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
                quote?: string;
                // [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value
                // is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the
                // behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they
                // are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 -
                // Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows =
                // N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just
                // skipped. Otherwise row N is used to extract column names for the detected schema.
                skipLeadingRows?: string;
            }
            // Data split result. This contains references to the training and evaluation data tables that were used to train the
            // model.
            interface DataSplitResult {
                // Table reference of the evaluation data after split.
                evaluationTable?: Schema.TableReference;
                // Table reference of the training data after split.
                trainingTable?: Schema.TableReference;
            }
            interface Dataset {
                // [Optional] An array of objects that define dataset access for one or more entities. You can set this property when
                // inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset
                // creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders;
                // access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners;
                // access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
                access?: Schema.DatasetAccess[];
                // [Output-only] The time when this dataset was created, in milliseconds since the epoch.
                creationTime?: string;
                // [Required] A reference that identifies the dataset.
                datasetReference?: Schema.DatasetReference;
                defaultEncryptionConfiguration?: Schema.EncryptionConfiguration;
                // [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this
                // property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the
                // timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The
                // storage in a partition will have an expiration time of its partition time plus this value. Setting this property
                // overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and
                // defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit
                // timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the
                // default partition expiration time indicated by this property.
                defaultPartitionExpirationMs?: string;
                // [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds
                // (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set
                // to the creation time plus the value in this property, and changing the value will only affect new tables, not existing
                // ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's
                // expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when
                // creating a table, that value takes precedence over the default expiration time indicated by this property.
                defaultTableExpirationMs?: string;
                // [Optional] A user-friendly description of the dataset.
                description?: string;
                // [Output-only] A hash of the resource.
                etag?: string;
                // [Optional] A descriptive name for the dataset.
                friendlyName?: string;
                // [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without
                // the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead
                // specify the datasetId field.
                id?: string;
                // [Output-only] The resource type.
                kind?: string;
                // The labels associated with this dataset. You can use these to organize and group your datasets. You can set this
                // property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.
                labels?: object;
                // [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
                lastModifiedTime?: string;
                // The geographic location where the dataset should reside. The default value is US. See details at
                // https://cloud.google.com/bigquery/docs/locations.
                location?: string;
                // [Output-only] Reserved for future use.
                satisfiesPZS?: boolean;
                // [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the
                // resource.
                selfLink?: string;
            }
            interface DatasetAccess {
                // [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified
                // access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
                domain?: string;
                // [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
                groupByEmail?: string;
                // [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
                iamMember?: string;
                // [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The
                // following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER
                // roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For
                // example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".
                role?: string;
                // [Pick one] A routine from a different dataset to grant access to. Queries executed against that routine will have read
                // access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this
                // field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update
                // operation.
                routine?: Schema.RoutineReference;
                // [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project.
                // projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project.
                // allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.
                specialGroup?: string;
                // [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member
                // "user:EMAIL" or "serviceAccount:EMAIL".
                userByEmail?: string;
                // [Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access
                // to tables in this dataset. The role field is not required when this field is set. If that view is updated by any user,
                // access to the view needs to be granted again via an update operation.
                view?: Schema.TableReference;
            }
            interface DatasetList {
                // An array of the dataset resources in the project. Each resource contains basic information. For full information about a
                // particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the
                // project.
                datasets?: Schema.DatasetListDatasets[];
                // A hash value of the results page. You can use this property to determine if the page has changed since the last request.
                etag?: string;
                // The list type. This property always returns the value "bigquery#datasetList".
                kind?: string;
                // A token that can be used to request the next results page. This property is omitted on the final results page.
                nextPageToken?: string;
            }
            interface DatasetListDatasets {
                // The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID.
                datasetReference?: Schema.DatasetReference;
                // A descriptive name for the dataset, if one exists.
                friendlyName?: string;
                // The fully-qualified, unique, opaque ID of the dataset.
                id?: string;
                // The resource type. This property always returns the value "bigquery#dataset".
                kind?: string;
                // The labels associated with this dataset. You can use these to organize and group your datasets.
                labels?: object;
                // The geographic location where the data resides.
                location?: string;
            }
            interface DatasetReference {
                // [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers
                // (0-9), or underscores (_). The maximum length is 1,024 characters.
                datasetId?: string;
                // [Optional] The ID of the project containing this dataset.
                projectId?: string;
            }
            interface DestinationTableProperties {
                // [Optional] The description for the destination table. This will only be used if the destination table is newly created.
                // If the table already exists and a value different than the current description is provided, the job will fail.
                description?: string;
                // [Optional] The friendly name for the destination table. This will only be used if the destination table is newly
                // created. If the table already exists and a value different than the current friendly name is provided, the job will
                // fail.
                friendlyName?: string;
                // [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be
                // used if the destination table is newly created. If the table already exists and labels are different than the current
                // labels are provided, the job will fail.
                labels?: object;
            }
            // Model evaluation metrics for dimensionality reduction models.
            interface DimensionalityReductionMetrics {
                // Total percentage of variance explained by the selected principal components.
                totalExplainedVarianceRatio?: number;
            }
            interface EncryptionConfiguration {
                // [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery
                // Service Account associated with your project requires access to this encryption key.
                kmsKeyName?: string;
            }
            // A single entry in the confusion matrix.
            interface Entry {
                // Number of items being predicted as this label.
                itemCount?: string;
                // The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the
                // confidence threshold.
                predictedLabel?: string;
            }
            interface ErrorProto {
                // Debugging information. This property is internal to Google and should not be used.
                debugInfo?: string;
                // Specifies where the error occurred, if present.
                location?: string;
                // A human-readable description of the error.
                message?: string;
                // A short error code that summarizes the error.
                reason?: string;
            }
            // Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether
            // eval data was used during training. These are not present for imported models.
            interface EvaluationMetrics {
                // Populated for ARIMA models.
                arimaForecastingMetrics?: Schema.ArimaForecastingMetrics;
                // Populated for binary classification/classifier models.
                binaryClassificationMetrics?: Schema.BinaryClassificationMetrics;
                // Populated for clustering models.
                clusteringMetrics?: Schema.ClusteringMetrics;
                // Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.
                dimensionalityReductionMetrics?: Schema.DimensionalityReductionMetrics;
                // Populated for multi-class classification/classifier models.
                multiClassClassificationMetrics?: Schema.MultiClassClassificationMetrics;
                // Populated for implicit feedback type matrix factorization models.
                rankingMetrics?: Schema.RankingMetrics;
                // Populated for regression models and explicit feedback type matrix factorization models.
                regressionMetrics?: Schema.RegressionMetrics;
            }
            interface ExplainQueryStage {
                // Number of parallel input segments completed.
                completedParallelInputs?: string;
                // Milliseconds the average shard spent on CPU-bound tasks.
                computeMsAvg?: string;
                // Milliseconds the slowest shard spent on CPU-bound tasks.
                computeMsMax?: string;
                // Relative amount of time the average shard spent on CPU-bound tasks.
                computeRatioAvg?: number;
                // Relative amount of time the slowest shard spent on CPU-bound tasks.
                computeRatioMax?: number;
                // Stage end time represented as milliseconds since epoch.
                endMs?: string;
                // Unique ID for stage within plan.
                id?: string;
                // IDs for stages that are inputs to this stage.
                inputStages?: string[];
                // Human-readable name for stage.
                name?: string;
                // Number of parallel input segments to be processed.
                parallelInputs?: string;
                // Milliseconds the average shard spent reading input.
                readMsAvg?: string;
                // Milliseconds the slowest shard spent reading input.
                readMsMax?: string;
                // Relative amount of time the average shard spent reading input.
                readRatioAvg?: number;
                // Relative amount of time the slowest shard spent reading input.
                readRatioMax?: number;
                // Number of records read into the stage.
                recordsRead?: string;
                // Number of records written by the stage.
                recordsWritten?: string;
                // Total number of bytes written to shuffle.
                shuffleOutputBytes?: string;
                // Total number of bytes written to shuffle and spilled to disk.
                shuffleOutputBytesSpilled?: string;
                // Slot-milliseconds used by the stage.
                slotMs?: string;
                // Stage start time represented as milliseconds since epoch.
                startMs?: string;
                // Current status for the stage.
                status?: string;
                // List of operations within the stage in dependency order (approximately chronological).
                steps?: Schema.ExplainQueryStep[];
                // Milliseconds the average shard spent waiting to be scheduled.
                waitMsAvg?: string;
                // Milliseconds the slowest shard spent waiting to be scheduled.
                waitMsMax?: string;
                // Relative amount of time the average shard spent waiting to be scheduled.
                waitRatioAvg?: number;
                // Relative amount of time the slowest shard spent waiting to be scheduled.
                waitRatioMax?: number;
                // Milliseconds the average shard spent on writing output.
                writeMsAvg?: string;
                // Milliseconds the slowest shard spent on writing output.
                writeMsMax?: string;
                // Relative amount of time the average shard spent on writing output.
                writeRatioAvg?: number;
                // Relative amount of time the slowest shard spent on writing output.
                writeRatioMax?: number;
            }
            interface ExplainQueryStep {
                // Machine-readable operation type.
                kind?: string;
                // Human-readable stage descriptions.
                substeps?: string[];
            }
            // Explanation for a single feature.
            interface Explanation {
                // Attribution of feature.
                attribution?: number;
                // Full name of the feature. For non-numerical features, will be formatted like .. Overall size of feature name will always
                // be truncated to first 120 characters.
                featureName?: string;
            }
            // Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The
            // syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary
            // size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100"
            // Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression:
            // "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether
            // the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example
            // (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp."
            // expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be
            // referenced within an expression are determined by the service that evaluates it. See the service documentation for
            // additional information.
            interface Expr {
                // Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it
                // in a UI.
                description?: string;
                // Textual representation of an expression in Common Expression Language syntax.
                expression?: string;
                // Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the
                // file.
                location?: string;
                // Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow
                // to enter the expression.
                title?: string;
            }
            interface ExternalDataConfiguration {
                // Try to detect schema and format options automatically. Any option specified explicitly will be honored.
                autodetect?: boolean;
                // [Optional] Additional options if sourceFormat is set to BIGTABLE.
                bigtableOptions?: Schema.BigtableOptions;
                // [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE.
                // This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
                compression?: string;
                // [Optional, Trusted Tester] Connection for external data source.
                connectionId?: string;
                // Additional properties to set if sourceFormat is set to CSV.
                csvOptions?: Schema.CsvOptions;
                // [Optional] Additional options if sourceFormat is set to GOOGLE_SHEETS.
                googleSheetsOptions?: Schema.GoogleSheetsOptions;
                // [Optional] Options to configure hive partitioning support.
                hivePartitioningOptions?: Schema.HivePartitioningOptions;
                // [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the
                // extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad
                // records, an invalid error is returned in the job result. The default value is false. The sourceFormat property
                // determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column
                // names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro:
                // This setting is ignored.
                ignoreUnknownValues?: boolean;
                // [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records
                // exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets.
                // The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable,
                // Google Cloud Datastore backups and Avro formats.
                maxBadRecords?: Integer;
                // [Optional] The schema for the data. Schema is required for CSV and JSON formats. Schema is disallowed for Google Cloud
                // Bigtable, Cloud Datastore backups, and Avro formats.
                schema?: Schema.TableSchema;
                // [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For
                // newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore
                // backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
                sourceFormat?: string;
                // [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can
                // contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to
                // external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified
                // and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be
                // specified. Also, the '*' wildcard character is not allowed.
                sourceUris?: string[];
            }
            // Representative value of a single feature within the cluster.
            interface FeatureValue {
                // The categorical feature value.
                categoricalValue?: Schema.CategoricalValue;
                // The feature column name.
                featureColumn?: string;
                // The numerical feature value. This is the centroid value for this feature.
                numericalValue?: number;
            }
            // Request message for `GetIamPolicy` method.
            interface GetIamPolicyRequest {
                // OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
                options?: Schema.GetPolicyOptions;
            }
            // Encapsulates settings provided to GetIamPolicy.
            interface GetPolicyOptions {
                // Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value
                // will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any
                // conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions
                // in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                requestedPolicyVersion?: Integer;
            }
            interface GetQueryResultsResponse {
                // Whether the query result was fetched from the query cache.
                cacheHit?: boolean;
                // [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the
                // number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was
                // unsuccessful.
                errors?: Schema.ErrorProto[];
                // A hash of this response.
                etag?: string;
                // Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false,
                // totalRows will not be available.
                jobComplete?: boolean;
                // Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request
                // timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API
                // only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
                jobReference?: Schema.JobReference;
                // The resource type of the response.
                kind?: string;
                // [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                numDmlAffectedRows?: string;
                // A token used for paging results.
                pageToken?: string;
                // An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows,
                // you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes
                // successfully.
                rows?: Schema.TableRow[];
                // The schema of the results. Present only when the query completes successfully.
                schema?: Schema.TableSchema;
                // The total number of bytes processed for this query.
                totalBytesProcessed?: string;
                // The total number of rows in the complete query result set, which can be more than the number of rows in this single page
                // of results. Present only when the query completes successfully.
                totalRows?: string;
            }
            interface GetServiceAccountResponse {
                // The service account email address.
                email?: string;
                // The resource type of the response.
                kind?: string;
            }
            // Global explanations containing the top most important features after training.
            interface GlobalExplanation {
                // Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models.
                // Sorted alphabetically in descending order.
                classLabel?: string;
                // A list of the top global explanations. Sorted by absolute value of attribution in descending order.
                explanations?: Schema.Explanation[];
            }
            interface GoogleSheetsOptions {
                // [Optional] Range of a sheet to query from. Only used when non-empty. Typical format:
                // sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
                range?: string;
                // [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is
                // 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the
                // following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not
                // detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 -
                // Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows =
                // N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just
                // skipped. Otherwise row N is used to extract column names for the detected schema.
                skipLeadingRows?: string;
            }
            interface HivePartitioningOptions {
                // [Optional] When set, what mode of hive partitioning to use when reading data. The following modes are supported. (1)
                // AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All
                // types are interpreted as strings. (3) CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage
                // formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error.
                // Currently supported types include: AVRO, CSV, JSON, ORC and Parquet.
                mode?: string;
                // [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination
                // to be specified. Note that this field should only be true when creating a permanent external table or querying a
                // temporary external table. Hive-partitioned loads with requirePartitionFilter explicitly set to true will fail.
                requirePartitionFilter?: boolean;
                // [Optional] When hive partition detection is requested, a common prefix for all source uris should be supplied. The
                // prefix must end immediately before the partition key encoding begins. For example, consider files following this data
                // layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro
                // gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO
                // or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/
                // (trailing slash does not matter).
                sourceUriPrefix?: string;
            }
            // Information about a single iteration of the training run.
            interface IterationResult {
                arimaResult?: Schema.ArimaResult;
                // Information about top clusters for clustering models.
                clusterInfos?: Schema.ClusterInfo[];
                // Time taken to run the iteration in milliseconds.
                durationMs?: string;
                // Loss computed on the eval data at the end of iteration.
                evalLoss?: number;
                // Index of the iteration, 0 based.
                index?: Integer;
                // Learn rate used for this iteration.
                learnRate?: number;
                // The information of the principal components.
                principalComponentInfos?: Schema.PrincipalComponentInfo[];
                // Loss computed on the training data at the end of iteration.
                trainingLoss?: number;
            }
            interface Job {
                // [Required] Describes the job configuration.
                configuration?: Schema.JobConfiguration;
                // [Output-only] A hash of this resource.
                etag?: string;
                // [Output-only] Opaque ID field of the job
                id?: string;
                // [Optional] Reference describing the unique-per-user name of the job.
                jobReference?: Schema.JobReference;
                // [Output-only] The type of the resource.
                kind?: string;
                // [Output-only] A URL that can be used to access this resource again.
                selfLink?: string;
                // [Output-only] Information about the job, including starting time and ending time of the job.
                statistics?: Schema.JobStatistics;
                // [Output-only] The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
                status?: Schema.JobStatus;
                // [Output-only] Email address of the user who ran the job.
                user_email?: string;
            }
            interface JobCancelResponse {
                // The final state of the job.
                job?: Schema.Job;
                // The resource type of the response.
                kind?: string;
            }
            interface JobConfiguration {
                // [Pick one] Copies a table.
                copy?: Schema.JobConfigurationTableCopy;
                // [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing
                // statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query
                // jobs is undefined.
                dryRun?: boolean;
                // [Pick one] Configures an extract job.
                extract?: Schema.JobConfigurationExtract;
                // [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
                jobTimeoutMs?: string;
                // [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
                jobType?: string;
                // The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no
                // longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International
                // characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must
                // have a different key.
                labels?: object;
                // [Pick one] Configures a load job.
                load?: Schema.JobConfigurationLoad;
                // [Pick one] Configures a query job.
                query?: Schema.JobConfigurationQuery;
            }
            interface JobConfigurationExtract {
                // [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The
                // default value is NONE. DEFLATE and SNAPPY are only supported for Avro. Not applicable when extracting models.
                compression?: string;
                // [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET or AVRO for tables and
                // ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated
                // fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.
                destinationFormat?: string;
                // [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud
                // Storage URI where the extracted table should be written.
                destinationUri?: string;
                // [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
                destinationUris?: string[];
                // [Optional] Delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.
                fieldDelimiter?: string;
                // [Optional] Whether to print out a header row in the results. Default is true. Not applicable when extracting models.
                printHeader?: boolean;
                // A reference to the model being exported.
                sourceModel?: Schema.ModelReference;
                // A reference to the table being exported.
                sourceTable?: Schema.TableReference;
                // [Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column
                // types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw
                // types (avro-long). Not applicable when extracting models.
                useAvroLogicalTypes?: boolean;
            }
            interface JobConfigurationLoad {
                // [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false,
                // records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid
                // error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
                allowJaggedRows?: boolean;
                // Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value
                // is false.
                allowQuotedNewlines?: boolean;
                // [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources.
                autodetect?: boolean;
                // [Beta] Clustering specification for the destination table. Must be specified with time-based partitioning, data in the
                // table will be first partitioned and subsequently clustered.
                clustering?: Schema.Clustering;
                // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported:
                // CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist.
                // If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation,
                // truncation and append actions occur as one atomic update upon job completion.
                createDisposition?: string;
                // Defines the list of possible SQL data types to which the source decimal values are converted. This list and the
                // precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC
                // ([Preview](/products/#product-launch-stages)), and STRING, a type is picked if it is in the specified list and if it
                // supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types
                // supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a
                // value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this
                // field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -> NUMERIC; * (39,9) -> BIGNUMERIC (NUMERIC cannot
                // hold 30 integer digits); * (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -> BIGNUMERIC; *
                // (77,38) -> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of
                // the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and
                // NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other
                // file formats.
                decimalTargetTypes?: string[];
                // Custom encryption configuration (e.g., Cloud KMS keys).
                destinationEncryptionConfiguration?: Schema.EncryptionConfiguration;
                // [Required] The destination table to load the data into.
                destinationTable?: Schema.TableReference;
                // [Beta] [Optional] Properties with which to create the destination table if it is new.
                destinationTableProperties?: Schema.DestinationTableProperties;
                // [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8.
                // BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter
                // properties.
                encoding?: string;
                // [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a
                // character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1
                // encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also
                // supports the escape sequence "\t" to specify a tab separator. The default value is a comma (',').
                fieldDelimiter?: string;
                // [Optional] Options to configure hive partitioning support.
                hivePartitioningOptions?: Schema.HivePartitioningOptions;
                // [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the
                // extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad
                // records, an invalid error is returned in the job result. The default value is false. The sourceFormat property
                // determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column
                // names
                ignoreUnknownValues?: boolean;
                // [Optional] If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant
                // such as GeoJSON. For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: -
                // for newline-delimited GeoJSON: set to GEOJSON.
                jsonExtension?: string;
                // [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records
                // exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default
                // value is 0, which requires that all records are valid.
                maxBadRecords?: Integer;
                // [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery
                // interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property
                // to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE.
                // For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
                nullMarker?: string;
                // If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud
                // Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified,
                // BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is
                // returned in the job result.
                projectionFields?: string[];
                // [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1
                // encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default
                // value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
                // If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
                quote?: string;
                // [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning
                // should be specified.
                rangePartitioning?: Schema.RangePartitioning;
                // [Optional] The schema for the destination table. The schema can be omitted if the destination table already exists, or
                // if you're loading data from Google Cloud Datastore.
                schema?: Schema.TableSchema;
                // [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING,
                // bar:INTEGER, baz:FLOAT".
                schemaInline?: string;
                // [Deprecated] The format of the schemaInline property.
                schemaInlineFormat?: string;
                // Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
                // supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is
                // WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by
                // partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following
                // values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow
                // relaxing a required field in the original schema to nullable.
                schemaUpdateOptions?: string[];
                // [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value
                // is 0. This property is useful if you have header rows in the file that should be skipped.
                skipLeadingRows?: Integer;
                // [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify
                // "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet,
                // specify "PARQUET". For orc, specify "ORC". The default value is CSV.
                sourceFormat?: string;
                // [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can
                // contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to
                // external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified
                // and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be
                // specified. Also, the '*' wildcard character is not allowed.
                sourceUris?: string[];
                // Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning
                // should be specified.
                timePartitioning?: Schema.TimePartitioning;
                // [Optional] If sourceFormat is set to "AVRO", indicates whether to enable interpreting logical types into their
                // corresponding types (ie. TIMESTAMP), instead of only using their raw types (ie. INTEGER).
                useAvroLogicalTypes?: boolean;
                // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported:
                // WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already
                // exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a
                // 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only
                // occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic
                // update upon job completion.
                writeDisposition?: string;
            }
            interface JobConfigurationQuery {
                // [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a
                // slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and
                // large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed
                // maximum response size.
                allowLargeResults?: boolean;
                // [Beta] Clustering specification for the destination table. Must be specified with time-based partitioning, data in the
                // table will be first partitioned and subsequently clustered.
                clustering?: Schema.Clustering;
                // Connection properties.
                connectionProperties?: Schema.ConnectionProperty[];
                // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported:
                // CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist.
                // If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation,
                // truncation and append actions occur as one atomic update upon job completion.
                createDisposition?: string;
                // [Optional] Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter
                // behavior of unqualified dataset names.
                defaultDataset?: Schema.DatasetReference;
                // Custom encryption configuration (e.g., Cloud KMS keys).
                destinationEncryptionConfiguration?: Schema.EncryptionConfiguration;
                // [Optional] Describes the table where the query results should be stored. If not present, a new table will be created to
                // store the results. This property must be set for large results that exceed the maximum response size.
                destinationTable?: Schema.TableReference;
                // [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
                // allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are
                // never flattened.
                flattenResults?: boolean;
                // [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without
                // incurring a charge). If unspecified, this will be set to your project default.
                maximumBillingTier?: Integer;
                // [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail
                // (without incurring a charge). If unspecified, this will be set to your project default.
                maximumBytesBilled?: string;
                // Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query
                // parameters in this query.
                parameterMode?: string;
                // [Deprecated] This property is deprecated.
                preserveNulls?: boolean;
                // [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is
                // INTERACTIVE.
                priority?: string;
                // [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL
                // or standard SQL.
                query?: string;
                // Query parameters for standard SQL queries.
                queryParameters?: Schema.QueryParameter[];
                // [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning
                // should be specified.
                rangePartitioning?: Schema.RangePartitioning;
                // Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are
                // supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the
                // destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will
                // always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a
                // nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to
                // nullable.
                schemaUpdateOptions?: string[];
                // [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other
                // properties of the data source. By defining these properties, the data source can then be queried as if it were a
                // standard BigQuery table.
                tableDefinitions?: object;
                // Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning
                // should be specified.
                timePartitioning?: Schema.TimePartitioning;
                // Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the
                // query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to
                // false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
                useLegacySql?: boolean;
                // [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be
                // flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not
                // have a destination table specified. The default value is true.
                useQueryCache?: boolean;
                // Describes user-defined function resources used in the query.
                userDefinedFunctionResources?: Schema.UserDefinedFunctionResource[];
                // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported:
                // WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query
                // result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table
                // already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY.
                // Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and
                // append actions occur as one atomic update upon job completion.
                writeDisposition?: string;
            }
            interface JobConfigurationTableCopy {
                // [Optional] Specifies whether the job is allowed to create new tables. The following values are supported:
                // CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist.
                // If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation,
                // truncation and append actions occur as one atomic update upon job completion.
                createDisposition?: string;
                // Custom encryption configuration (e.g., Cloud KMS keys).
                destinationEncryptionConfiguration?: Schema.EncryptionConfiguration;
                // [Optional] The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.
                destinationExpirationTime?: object;
                // [Required] The destination table
                destinationTable?: Schema.TableReference;
                // [Optional] Supported operation types in table copy job.
                operationType?: string;
                // [Pick one] Source table to copy.
                sourceTable?: Schema.TableReference;
                // [Pick one] Source tables to copy.
                sourceTables?: Schema.TableReference[];
                // [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported:
                // WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already
                // exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a
                // 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs
                // if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update
                // upon job completion.
                writeDisposition?: string;
            }
            interface JobList {
                // A hash of this page of results.
                etag?: string;
                // List of jobs that were requested.
                jobs?: Schema.JobListJobs[];
                // The resource type of the response.
                kind?: string;
                // A token to request the next page of results.
                nextPageToken?: string;
            }
            interface JobListJobs {
                // [Full-projection-only] Specifies the job configuration.
                configuration?: Schema.JobConfiguration;
                // A result object that will be present only if the job has failed.
                errorResult?: Schema.ErrorProto;
                // Unique opaque ID of the job.
                id?: string;
                // Job reference uniquely identifying the job.
                jobReference?: Schema.JobReference;
                // The resource type.
                kind?: string;
                // Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or
                // failed.
                state?: string;
                // [Output-only] Information about the job, including starting time and ending time of the job.
                statistics?: Schema.JobStatistics;
                // [Full-projection-only] Describes the state of the job.
                status?: Schema.JobStatus;
                // [Full-projection-only] Email address of the user who ran the job.
                user_email?: string;
            }
            interface JobReference {
                // [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes
                // (-). The maximum length is 1,024 characters.
                jobId?: string;
                // The geographic location of the job. See details at
                // https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
                location?: string;
                // [Required] The ID of the project containing this job.
                projectId?: string;
            }
            interface JobStatistics {
                // [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs.
                completionRatio?: number;
                // [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
                creationTime?: string;
                // [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the
                // DONE state.
                endTime?: string;
                // [Output-only] Statistics for an extract job.
                extract?: Schema.JobStatistics4;
                // [Output-only] Statistics for a load job.
                load?: Schema.JobStatistics3;
                // [Output-only] Number of child jobs executed.
                numChildJobs?: string;
                // [Output-only] If this is a child job, the id of the parent.
                parentJobId?: string;
                // [Output-only] Statistics for a query job.
                query?: Schema.JobStatistics2;
                // [Output-only] Quotas which delayed this job's start time.
                quotaDeferments?: string[];
                // [Output-only] Job resource usage breakdown by reservation.
                reservationUsage?: Schema.JobStatisticsReservationUsage[];
                // [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations
                // reported in the reservation usage field if parent reservations were used to execute this job.
                reservation_id?: string;
                // [Output-only] [Preview] Statistics for row-level security. Present only for query and extract jobs.
                rowLevelSecurityStatistics?: Schema.RowLevelSecurityStatistics;
                // [Output-only] Statistics for a child job of a script.
                scriptStatistics?: Schema.ScriptStatistics;
                // [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job
                // transitions from the PENDING state to either RUNNING or DONE.
                startTime?: string;
                // [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
                totalBytesProcessed?: string;
                // [Output-only] Slot-milliseconds for the job.
                totalSlotMs?: string;
                // [Output-only] [Alpha] Information of the multi-statement transaction if this job is part of one.
                transactionInfoTemplate?: Schema.TransactionInfo;
            }
            interface JobStatistics2 {
                // [Output-only] Billing tier for the job.
                billingTier?: Integer;
                // [Output-only] Whether the query result was fetched from the query cache.
                cacheHit?: boolean;
                // [Output-only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW
                // ACCESS POLICIES queries.
                ddlAffectedRowAccessPolicyCount?: string;
                // The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values
                // might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is
                // CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not
                // exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table
                // already exists. "DROP": The query deleted the DDL target.
                ddlOperationPerformed?: string;
                // The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.
                ddlTargetRoutine?: Schema.RoutineReference;
                // [Output-only] [Preview] The DDL target row access policy. Present only for CREATE/DROP ROW ACCESS POLICY queries.
                ddlTargetRowAccessPolicy?: Schema.RowAccessPolicyReference;
                // [Output-only] The DDL target table. Present only for CREATE/DROP TABLE/VIEW and DROP ALL ROW ACCESS POLICIES queries.
                ddlTargetTable?: Schema.TableReference;
                // [Output-only] The original estimate of bytes processed for the job.
                estimatedBytesProcessed?: string;
                // [Output-only, Beta] Information about create model query job progress.
                modelTraining?: Schema.BigQueryModelTraining;
                // [Output-only, Beta] Deprecated; do not use.
                modelTrainingCurrentIteration?: Integer;
                // [Output-only, Beta] Deprecated; do not use.
                modelTrainingExpectedTotalIteration?: string;
                // [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                numDmlAffectedRows?: string;
                // [Output-only] Describes execution plan for the query.
                queryPlan?: Schema.ExplainQueryStage[];
                // [Output-only] Referenced routines (persistent user-defined functions and stored procedures) for the job.
                referencedRoutines?: Schema.RoutineReference[];
                // [Output-only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
                referencedTables?: Schema.TableReference[];
                // [Output-only] Job resource usage breakdown by reservation.
                reservationUsage?: Schema.JobStatistics2ReservationUsage[];
                // [Output-only] The schema of the results. Present only for successful dry run of non-legacy SQL queries.
                schema?: Schema.TableSchema;
                // The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT
                // query. "INSERT": INSERT query; see
                // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see
                // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see
                // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see
                // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE
                // query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION
                // query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query.
                // "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS
                // SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query.
                // "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query.
                statementType?: string;
                // [Output-only] [Beta] Describes a timeline of job execution.
                timeline?: Schema.QueryTimelineSample[];
                // [Output-only] Total bytes billed for the job.
                totalBytesBilled?: string;
                // [Output-only] Total bytes processed for the job.
                totalBytesProcessed?: string;
                // [Output-only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the
                // estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise.
                // LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the
                // query would cost.
                totalBytesProcessedAccuracy?: string;
                // [Output-only] Total number of partitions processed from all partitioned tables referenced in the job.
                totalPartitionsProcessed?: string;
                // [Output-only] Slot-milliseconds for the job.
                totalSlotMs?: string;
                // Standard SQL only: list of undeclared query parameters detected during a dry run validation.
                undeclaredQueryParameters?: Schema.QueryParameter[];
            }
            interface JobStatistics2ReservationUsage {
                // [Output-only] Reservation name or "unreserved" for on-demand resources usage.
                name?: string;
                // [Output-only] Slot-milliseconds the job spent in the given reservation.
                slotMs?: string;
            }
            interface JobStatistics3 {
                // [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records
                // encountered than the maximum allowed in the load job configuration, then this number can be less than the total number
                // of bad records present in the input data.
                badRecords?: string;
                // [Output-only] Number of bytes of source data in a load job.
                inputFileBytes?: string;
                // [Output-only] Number of source files in a load job.
                inputFiles?: string;
                // [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may
                // change.
                outputBytes?: string;
                // [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value
                // may change.
                outputRows?: string;
            }
            interface JobStatistics4 {
                // [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values
                // will be in the same order as the URIs specified in the 'destinationUris' field.
                destinationUriFileCounts?: string[];
                // [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing
                // purposes.
                inputBytes?: string;
            }
            interface JobStatisticsReservationUsage {
                // [Output-only] Reservation name or "unreserved" for on-demand resources usage.
                name?: string;
                // [Output-only] Slot-milliseconds the job spent in the given reservation.
                slotMs?: string;
            }
            interface JobStatus {
                // [Output-only] Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
                errorResult?: Schema.ErrorProto;
                // [Output-only] The first errors encountered during the running of the job. The final message includes the number of
                // errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was
                // unsuccessful.
                errors?: Schema.ErrorProto[];
                // [Output-only] Running state of the job.
                state?: string;
            }
            interface ListModelsResponse {
                // Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time,
                // last_modified_time and labels.
                models?: Schema.Model[];
                // A token to request the next page of results.
                nextPageToken?: string;
            }
            interface ListRoutinesResponse {
                // A token to request the next page of results.
                nextPageToken?: string;
                // Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated:
                // etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
                routines?: Schema.Routine[];
            }
            // Response message for the ListRowAccessPolicies method.
            interface ListRowAccessPoliciesResponse {
                // A token to request the next page of results.
                nextPageToken?: string;
                // Row access policies on the requested table.
                rowAccessPolicies?: Schema.RowAccessPolicy[];
            }
            // BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud
            // Location API responses.
            interface LocationMetadata {
                // The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy
                // “US” and “EU” locations.
                legacyLocationId?: string;
            }
            interface MaterializedViewDefinition {
                // [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default
                // value is "true".
                enableRefresh?: boolean;
                // [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch.
                lastRefreshTime?: string;
                // [Required] A query whose result is persisted.
                query?: string;
                // [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is
                // "1800000" (30 minutes).
                refreshIntervalMs?: string;
            }
            interface Model {
                // Output only. The time when this model was created, in millisecs since the epoch.
                creationTime?: string;
                // Optional. A user-friendly description of this model.
                description?: string;
                // Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while
                // stored in BigQuery storage. This field can be used with PatchModel to update encryption key for an already encrypted
                // model.
                encryptionConfiguration?: Schema.EncryptionConfiguration;
                // Output only. A hash of this resource.
                etag?: string;
                // Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist
                // indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the
                // encapsulating dataset can be used to set a default expirationTime on newly created models.
                expirationTime?: string;
                // Output only. Input feature columns that were used to train this model.
                featureColumns?: Schema.StandardSqlField[];
                // Optional. A descriptive name for this model.
                friendlyName?: string;
                // Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix
                // to these columns.
                labelColumns?: Schema.StandardSqlField[];
                // The labels associated with this model. You can use these to organize and group your models. Label keys and values can be
                // no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes.
                // International characters are allowed. Label values are optional. Label keys must start with a letter and each label in
                // the list must have a different key.
                labels?: object;
                // Output only. The time when this model was last modified, in millisecs since the epoch.
                lastModifiedTime?: string;
                // Output only. The geographic location where the model resides. This value is inherited from the dataset.
                location?: string;
                // Required. Unique identifier for this model.
                modelReference?: Schema.ModelReference;
                // Output only. Type of the model resource.
                modelType?: string;
                // Output only. Information for all training runs in increasing order of start_time.
                trainingRuns?: Schema.TrainingRun[];
            }
            interface ModelDefinition {
                // [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training
                // runs. Default values are used for any options not specified in the input query.
                modelOptions?: Schema.ModelDefinitionModelOptions;
                // [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may
                // be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled
                // query.
                trainingRuns?: Schema.BqmlTrainingRun[];
            }
            // [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training
            // runs. Default values are used for any options not specified in the input query.
            interface ModelDefinitionModelOptions {
                labels?: string[];
                lossType?: string;
                modelType?: string;
            }
            interface ModelReference {
                // [Required] The ID of the dataset containing this model.
                datasetId?: string;
                // [Required] The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The
                // maximum length is 1,024 characters.
                modelId?: string;
                // [Required] The ID of the project containing this model.
                projectId?: string;
            }
            // Evaluation metrics for multi-class classification/classifier models.
            interface MultiClassClassificationMetrics {
                // Aggregate classification metrics.
                aggregateClassificationMetrics?: Schema.AggregateClassificationMetrics;
                // Confusion matrix at different thresholds.
                confusionMatrixList?: Schema.ConfusionMatrix[];
            }
            // An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy`
            // is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts,
            // service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can
            // be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also
            // specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates
            // to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which
            // resources support conditions in their IAM policies, see the [IAM
            // documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ {
            // "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com",
            // "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role":
            // "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable
            // access", "description": "Does not grant access after Sep 2020", "expression": "request.time <
            // timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: -
            // members: - user:mike@example.com - group:admins@example.com - domain:google.com -
            // serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: -
            // user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does
            // not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= -
            // version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
            interface Policy {
                // Specifies cloud audit logging configuration for this policy.
                auditConfigs?: Schema.AuditConfig[];
                // Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the
                // `bindings` are applied. Each of the `bindings` must contain at least one member.
                bindings?: Schema.Binding[];
                // `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from
                // overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to
                // perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and
                // systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to
                // the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you
                // call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1`
                // policy, and all of the conditions in the version `3` policy are lost.
                etag?: Byte[];
                // Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are
                // rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the
                // following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to
                // a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition,
                // from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field
                // whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a
                // version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any
                // conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources
                // support conditions in their IAM policies, see the [IAM
                // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                version?: Integer;
            }
            // Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in
            // the descending order.
            interface PrincipalComponentInfo {
                // The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio.
                cumulativeExplainedVarianceRatio?: number;
                // Explained variance by this principal component, which is simply the eigenvalue.
                explainedVariance?: number;
                // Explained_variance over the total explained variance.
                explainedVarianceRatio?: number;
                // Id of the principal component.
                principalComponentId?: string;
            }
            interface ProjectList {
                // A hash of the page of results
                etag?: string;
                // The type of list.
                kind?: string;
                // A token to request the next page of results.
                nextPageToken?: string;
                // Projects to which you have at least READ access.
                projects?: Schema.ProjectListProjects[];
                // The total number of projects in the list.
                totalItems?: Integer;
            }
            interface ProjectListProjects {
                // A descriptive name for this project.
                friendlyName?: string;
                // An opaque ID of this project.
                id?: string;
                // The resource type.
                kind?: string;
                // The numeric ID of this project.
                numericId?: string;
                // A unique reference to this project.
                projectReference?: Schema.ProjectReference;
            }
            interface ProjectReference {
                // [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project.
                projectId?: string;
            }
            interface QueryParameter {
                // [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query.
                name?: string;
                // [Required] The type of this parameter.
                parameterType?: Schema.QueryParameterType;
                // [Required] The value of this parameter.
                parameterValue?: Schema.QueryParameterValue;
            }
            interface QueryParameterType {
                // [Optional] The type of the array's elements, if this is an array.
                arrayType?: Schema.QueryParameterType;
                // [Optional] The types of the fields of this struct, in order, if this is a struct.
                structTypes?: Schema.QueryParameterTypeStructTypes[];
                // [Required] The top level type of this field.
                type?: string;
            }
            interface QueryParameterTypeStructTypes {
                // [Optional] Human-oriented description of the field.
                description?: string;
                // [Optional] The name of this field.
                name?: string;
                // [Required] The type of this field.
                type?: Schema.QueryParameterType;
            }
            interface QueryParameterValue {
                // [Optional] The array values, if this is an array type.
                arrayValues?: Schema.QueryParameterValue[];
                // [Optional] The struct field values, in order of the struct type's declaration.
                structValues?: object;
                // [Optional] The value of this value, if a simple scalar type.
                value?: string;
            }
            interface QueryRequest {
                // Connection properties.
                connectionProperties?: Schema.ConnectionProperty[];
                // [Optional] Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not
                // set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
                defaultDataset?: Schema.DatasetReference;
                // [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics
                // about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is
                // false.
                dryRun?: boolean;
                // The resource type of the request.
                kind?: string;
                // The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no
                // longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International
                // characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must
                // have a different key.
                labels?: object;
                // The geographic location where the job should run. See details at
                // https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
                location?: string;
                // [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as
                // 1000 and then paging through results might improve reliability when the query result set is large. In addition to this
                // limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
                maxResults?: Integer;
                // [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail
                // (without incurring a charge). If unspecified, this will be set to your project default.
                maximumBytesBilled?: string;
                // Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query
                // parameters in this query.
                parameterMode?: string;
                // [Deprecated] This property is deprecated.
                preserveNulls?: boolean;
                // [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM
                // [myProjectId:myDatasetId.myTableId]".
                query?: string;
                // Query parameters for Standard SQL queries.
                queryParameters?: Schema.QueryParameter[];
                // A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the
                // job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is
                // recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of
                // idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same
                // request_id and are actually duplicates. When determining whether a request is a duplicate of the previous request, all
                // parameters in the request that may affect the behavior are considered. For example, query, connection_properties,
                // query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a
                // request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run
                // query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is
                // detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running
                // operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other
                // words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed.
                requestId?: string;
                // [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note
                // that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the
                // call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait
                // for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds).
                timeoutMs?: Integer;
                // Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the
                // query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to
                // false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
                useLegacySql?: boolean;
                // [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be
                // flushed whenever tables in the query are modified. The default value is true.
                useQueryCache?: boolean;
            }
            interface QueryResponse {
                // Whether the query result was fetched from the query cache.
                cacheHit?: boolean;
                // [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the
                // number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was
                // unsuccessful.
                errors?: Schema.ErrorProto[];
                // Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false,
                // totalRows will not be available.
                jobComplete?: boolean;
                // Reference to the Job that was created to run the query. This field will be present even if the original request timed
                // out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only
                // returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
                jobReference?: Schema.JobReference;
                // The resource type.
                kind?: string;
                // [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                numDmlAffectedRows?: string;
                // A token used for paging results.
                pageToken?: string;
                // An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows,
                // you can call GetQueryResults and specify the jobReference returned above.
                rows?: Schema.TableRow[];
                // The schema of the results. Present only when the query completes successfully.
                schema?: Schema.TableSchema;
                // The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would
                // be processed if the query were run.
                totalBytesProcessed?: string;
                // The total number of rows in the complete query result set, which can be more than the number of rows in this single page
                // of results.
                totalRows?: string;
            }
            interface QueryTimelineSample {
                // Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the
                // largest value observed since the last sample.
                activeUnits?: string;
                // Total parallel units of work completed by this query.
                completedUnits?: string;
                // Milliseconds elapsed since the start of query execution.
                elapsedMs?: string;
                // Total parallel units of work remaining for the active stages.
                pendingUnits?: string;
                // Cumulative slot-ms consumed by the query.
                totalSlotMs?: string;
            }
            interface RangePartitioning {
                // [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED
                // field. The only supported type is INTEGER/INT64.
                field?: string;
                // [TrustedTester] [Required] Defines the ranges for range partitioning.
                range?: Schema.RangePartitioningRange;
            }
            // [TrustedTester] [Required] Defines the ranges for range partitioning.
            interface RangePartitioningRange {
                // [TrustedTester] [Required] The end of range partitioning, exclusive.
                end?: string;
                // [TrustedTester] [Required] The width of each interval.
                interval?: string;
                // [TrustedTester] [Required] The start of range partitioning, inclusive.
                start?: string;
            }
            // Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
            interface RankingMetrics {
                // Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by
                // the original rank.
                averageRank?: number;
                // Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the
                // users.
                meanAveragePrecision?: number;
                // Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing
                // the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the
                // rating exists or not.
                meanSquaredError?: number;
                // A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal
                // rank measured by the original ratings.
                normalizedDiscountedCumulativeGain?: number;
            }
            // Evaluation metrics for regression and explicit feedback type matrix factorization models.
            interface RegressionMetrics {
                // Mean absolute error.
                meanAbsoluteError?: number;
                // Mean squared error.
                meanSquaredError?: number;
                // Mean squared log error.
                meanSquaredLogError?: number;
                // Median absolute error.
                medianAbsoluteError?: number;
                // R^2 score. This corresponds to r2_score in ML.EVALUATE.
                rSquared?: number;
            }
            // A user-defined function or a stored procedure.
            interface Routine {
                // Optional.
                arguments?: Schema.Argument[];
                // Output only. The time when this routine was created, in milliseconds since the epoch.
                creationTime?: string;
                // Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the
                // substring inside (but excluding) the parentheses. For example, for the function created with the following statement:
                // `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n
                // is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for
                // the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'`
                // The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
                definitionBody?: string;
                // Optional. [Experimental] The description of the routine if defined.
                description?: string;
                // Optional. [Experimental] The determinism level of the JavaScript UDF if defined.
                determinismLevel?: string;
                // Output only. A hash of this resource.
                etag?: string;
                // Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
                importedLibraries?: string[];
                // Optional. Defaults to "SQL".
                language?: string;
                // Output only. The time when this routine was last modified, in milliseconds since the epoch.
                lastModifiedTime?: string;
                // Optional if language = "SQL"; required otherwise. If absent, the return type is inferred from definition_body at query
                // time in each query that references this routine. If present, then the evaluated result will be cast to the specified
                // returned type at query time. For example, for the functions created with the following statements: * `CREATE FUNCTION
                // Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x + y);` * `CREATE FUNCTION Increment(x FLOAT64) AS (Add(x, 1));` *
                // `CREATE FUNCTION Decrement(x FLOAT64) RETURNS FLOAT64 AS (Add(x, -1));` The return_type is `{type_kind: "FLOAT64"}` for
                // `Add` and `Decrement`, and is absent for `Increment` (inferred as FLOAT64 at query time). Suppose the function `Add` is
                // replaced by `CREATE OR REPLACE FUNCTION Add(x INT64, y INT64) AS (x + y);` Then the inferred return type of `Increment`
                // is automatically changed to INT64 at query time, while the return type of `Decrement` remains FLOAT64.
                returnType?: Schema.StandardSqlDataType;
                // Required. Reference describing the ID of this routine.
                routineReference?: Schema.RoutineReference;
                // Required. The type of routine.
                routineType?: string;
            }
            interface RoutineReference {
                // [Required] The ID of the dataset containing this routine.
                datasetId?: string;
                // [Required] The ID of the project containing this routine.
                projectId?: string;
                // [Required] The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The
                // maximum length is 256 characters.
                routineId?: string;
            }
            // A single row in the confusion matrix.
            interface Row {
                // The original label of this row.
                actualLabel?: string;
                // Info describing predicted label distribution.
                entries?: Schema.Entry[];
            }
            // Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of
            // rows is controlled by its IAM policy.
            interface RowAccessPolicy {
                // Output only. The time when this row access policy was created, in milliseconds since the epoch.
                creationTime?: string;
                // Output only. A hash of this resource.
                etag?: string;
                // Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean
                // expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions
                // are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field
                // BETWEEN 1.0 AND 5.0
                filterPredicate?: string;
                // Output only. The time when this row access policy was last modified, in milliseconds since the epoch.
                lastModifiedTime?: string;
                // Required. Reference describing the ID of this row access policy.
                rowAccessPolicyReference?: Schema.RowAccessPolicyReference;
            }
            interface RowAccessPolicyReference {
                // [Required] The ID of the dataset containing this row access policy.
                datasetId?: string;
                // [Required] The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores
                // (_). The maximum length is 256 characters.
                policyId?: string;
                // [Required] The ID of the project containing this row access policy.
                projectId?: string;
                // [Required] The ID of the table containing this row access policy.
                tableId?: string;
            }
            interface RowLevelSecurityStatistics {
                // [Output-only] [Preview] Whether any accessed data was protected by row access policies.
                rowLevelSecurityApplied?: boolean;
            }
            interface ScriptStackFrame {
                // [Output-only] One-based end column.
                endColumn?: Integer;
                // [Output-only] One-based end line.
                endLine?: Integer;
                // [Output-only] Name of the active procedure, empty if in a top-level script.
                procedureId?: string;
                // [Output-only] One-based start column.
                startColumn?: Integer;
                // [Output-only] One-based start line.
                startLine?: Integer;
                // [Output-only] Text of the current statement/expression.
                text?: string;
            }
            interface ScriptStatistics {
                // [Output-only] Whether this child job was a statement or expression.
                evaluationKind?: string;
                // Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation
                // happened. The leaf frame is first, the primary script is last. Never empty.
                stackFrames?: Schema.ScriptStackFrame[];
            }
            // Request message for `SetIamPolicy` method.
            interface SetIamPolicyRequest {
                // REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An
                // empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
                policy?: Schema.Policy;
                // OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If
                // no mask is provided, the following default mask is used: `paths: "bindings, etag"`
                updateMask?: string;
            }
            interface SnapshotDefinition {
                // [Required] Reference describing the ID of the table that is snapshotted.
                baseTableReference?: Schema.TableReference;
                // [Required] The time at which the base table was snapshot.
                snapshotTime?: string;
            }
            // The type of a variable, e.g., a function argument. Examples: INT64: {type_kind="INT64"} ARRAY: {type_kind="ARRAY",
            // array_element_type="STRING"} STRUCT>: {type_kind="STRUCT", struct_type={fields=[ {name="x", type={type_kind="STRING"}},
            // {name="y", type={type_kind="ARRAY", array_element_type="DATE"}} ]}}
            interface StandardSqlDataType {
                // The type of the array's elements, if type_kind = "ARRAY".
                arrayElementType?: Schema.StandardSqlDataType;
                // The fields of this struct, in order, if type_kind = "STRUCT".
                structType?: Schema.StandardSqlStructType;
                // Required. The top level type of this field. Can be any standard SQL data type (e.g., "INT64", "DATE", "ARRAY").
                typeKind?: string;
            }
            // A field or a column.
            interface StandardSqlField {
                // Optional. The name of this field. Can be absent for struct fields.
                name?: string;
                // Optional. The type of this parameter. Absent if not explicitly specified (e.g., CREATE FUNCTION statement can omit the
                // return type; in this case the output parameter does not have this "type" field).
                type?: Schema.StandardSqlDataType;
            }
            interface StandardSqlStructType {
                fields?: Schema.StandardSqlField[];
            }
            interface Streamingbuffer {
                // [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
                estimatedBytes?: string;
                // [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
                estimatedRows?: string;
                // [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if
                // the streaming buffer is available.
                oldestEntryTime?: string;
            }
            interface Table {
                // [Beta] Clustering specification for the table. Must be specified with partitioning, data in the table will be first
                // partitioned and subsequently clustered.
                clustering?: Schema.Clustering;
                // [Output-only] The time when this table was created, in milliseconds since the epoch.
                creationTime?: string;
                // [Optional] A user-friendly description of this table.
                description?: string;
                // Custom encryption configuration (e.g., Cloud KMS keys).
                encryptionConfiguration?: Schema.EncryptionConfiguration;
                // [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when
                // attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes
                // or lastModifiedTime change.
                etag?: string;
                // [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist
                // indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the
                // encapsulating dataset can be used to set a default expirationTime on newly created tables.
                expirationTime?: string;
                // [Optional] Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining
                // these properties, the data source can then be queried as if it were a standard BigQuery table.
                externalDataConfiguration?: Schema.ExternalDataConfiguration;
                // [Optional] A descriptive name for this table.
                friendlyName?: string;
                // [Output-only] An opaque ID uniquely identifying the table.
                id?: string;
                // [Output-only] The type of the resource.
                kind?: string;
                // The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be
                // no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes.
                // International characters are allowed. Label values are optional. Label keys must start with a letter and each label in
                // the list must have a different key.
                labels?: object;
                // [Output-only] The time when this table was last modified, in milliseconds since the epoch.
                lastModifiedTime?: string;
                // [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
                location?: string;
                // [Optional] Materialized view definition.
                materializedView?: Schema.MaterializedViewDefinition;
                // [Output-only, Beta] Present iff this table represents a ML model. Describes the training information for the model, and
                // it is required to run 'PREDICT' queries.
                model?: Schema.ModelDefinition;
                // [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
                numBytes?: string;
                // [Output-only] The number of bytes in the table that are considered "long-term storage".
                numLongTermBytes?: string;
                // [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This
                // includes compression and storage used for time travel.
                numPhysicalBytes?: string;
                // [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
                numRows?: string;
                // [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning
                // should be specified.
                rangePartitioning?: Schema.RangePartitioning;
                // [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination
                // to be specified.
                requirePartitionFilter?: boolean;
                // [Optional] Describes the schema of this table.
                schema?: Schema.TableSchema;
                // [Output-only] A URL that can be used to access this resource again.
                selfLink?: string;
                // [Output-only] Snapshot definition.
                snapshotDefinition?: Schema.SnapshotDefinition;
                // [Output-only] Contains information regarding this table's streaming buffer, if one is present. This field will be absent
                // if the table is not being streamed to or if there is no data in the streaming buffer.
                streamingBuffer?: Schema.Streamingbuffer;
                // [Required] Reference describing the ID of this table.
                tableReference?: Schema.TableReference;
                // Time-based partitioning specification for this table. Only one of timePartitioning and rangePartitioning should be
                // specified.
                timePartitioning?: Schema.TimePartitioning;
                // [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A
                // virtual table defined by a SQL query. SNAPSHOT: An immutable, read-only table that is a copy of another table.
                // [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in
                // an external storage system, such as Google Cloud Storage. The default value is TABLE.
                type?: string;
                // [Optional] The view definition.
                view?: Schema.ViewDefinition;
            }
            interface TableCell {
                v?: object;
            }
            interface TableDataInsertAllRequest {
                // [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is
                // false, which treats unknown values as errors.
                ignoreUnknownValues?: boolean;
                // The resource type of the response.
                kind?: string;
                // The rows to insert.
                rows?: Schema.TableDataInsertAllRequestRows[];
                // [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the
                // entire request to fail if any invalid rows exist.
                skipInvalidRows?: boolean;
                // If specified, treats the destination table as a base template, and inserts the rows into an instance table named
                // "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base
                // template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations
                // when working with templates tables.
                templateSuffix?: string;
            }
            interface TableDataInsertAllRequestRows {
                // [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort
                // basis.
                insertId?: string;
                // [Required] A JSON object that contains a row of data. The object's properties and values must match the destination
                // table's schema.
                json?: any;
            }
            interface TableDataInsertAllResponse {
                // An array of errors for rows that were not inserted.
                insertErrors?: Schema.TableDataInsertAllResponseInsertErrors[];
                // The resource type of the response.
                kind?: string;
            }
            interface TableDataInsertAllResponseInsertErrors {
                // Error information for the row indicated by the index property.
                errors?: Schema.ErrorProto[];
                // The index of the row that error applies to.
                index?: Integer;
            }
            interface TableDataList {
                // A hash of this page of results.
                etag?: string;
                // The resource type of the response.
                kind?: string;
                // A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable
                // results when an underlying table is changing.
                pageToken?: string;
                // Rows of results.
                rows?: Schema.TableRow[];
                // The total number of rows in the complete table.
                totalRows?: string;
            }
            interface TableFieldSchema {
                // [Optional] The categories attached to this field, used for field-level access control.
                categories?: Schema.TableFieldSchemaCategories;
                // [Optional] The field description. The maximum length is 1,024 characters.
                description?: string;
                // [Optional] Describes the nested schema fields if the type property is set to RECORD.
                fields?: Schema.TableFieldSchema[];
                // [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
                mode?: string;
                // [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must
                // start with a letter or underscore. The maximum length is 128 characters.
                name?: string;
                policyTags?: Schema.TableFieldSchemaPolicyTags;
                // [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64
                // (same as FLOAT), NUMERIC, BIGNUMERIC, BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, RECORD (where
                // RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD).
                type?: string;
            }
            // [Optional] The categories attached to this field, used for field-level access control.
            interface TableFieldSchemaCategories {
                // A list of category resource names. For example, "projects/1/taxonomies/2/categories/3". At most 5 categories are
                // allowed.
                names?: string[];
            }
            interface TableFieldSchemaPolicyTags {
                // A list of category resource names. For example, "projects/1/location/eu/taxonomies/2/policyTags/3". At most 1 policy tag
                // is allowed.
                names?: string[];
            }
            interface TableList {
                // A hash of this page of results.
                etag?: string;
                // The type of list.
                kind?: string;
                // A token to request the next page of results.
                nextPageToken?: string;
                // Tables in the requested dataset.
                tables?: Schema.TableListTables[];
                // The total number of tables in the dataset.
                totalItems?: Integer;
            }
            interface TableListTables {
                // [Beta] Clustering specification for this table, if configured.
                clustering?: Schema.Clustering;
                // The time when this table was created, in milliseconds since the epoch.
                creationTime?: string;
                // [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist
                // indefinitely. Expired tables will be deleted and their storage reclaimed.
                expirationTime?: string;
                // The user-friendly name for this table.
                friendlyName?: string;
                // An opaque ID of the table
                id?: string;
                // The resource type.
                kind?: string;
                // The labels associated with this table. You can use these to organize and group your tables.
                labels?: object;
                // The range partitioning specification for this table, if configured.
                rangePartitioning?: Schema.RangePartitioning;
                // A reference uniquely identifying the table.
                tableReference?: Schema.TableReference;
                // The time-based partitioning specification for this table, if configured.
                timePartitioning?: Schema.TimePartitioning;
                // The type of table. Possible values are: TABLE, VIEW.
                type?: string;
                // Additional details for a view.
                view?: Schema.TableListTablesView;
            }
            // Additional details for a view.
            interface TableListTablesView {
                // True if view is defined in legacy SQL dialect, false if in standard SQL.
                useLegacySql?: boolean;
            }
            interface TableReference {
                // [Required] The ID of the dataset containing this table.
                datasetId?: string;
                // [Required] The ID of the project containing this table.
                projectId?: string;
                // [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The
                // maximum length is 1,024 characters.
                tableId?: string;
            }
            interface TableRow {
                // Represents a single row in the result set, consisting of one or more fields.
                f?: Schema.TableCell[];
            }
            interface TableSchema {
                // Describes the fields in a table.
                fields?: Schema.TableFieldSchema[];
            }
            // Request message for `TestIamPermissions` method.
            interface TestIamPermissionsRequest {
                // The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not
                // allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
                permissions?: string[];
            }
            // Response message for `TestIamPermissions` method.
            interface TestIamPermissionsResponse {
                // A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
                permissions?: string[];
            }
            interface TimePartitioning {
                // [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition
                // will have an expiration time of its partition time plus this value.
                expirationMs?: string;
                // [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either '_PARTITIONTIME' as
                // TIMESTAMP type, or '_PARTITIONDATE' as DATE type. If field is specified, the table is instead partitioned by this field.
                // The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
                field?: string;
                requirePartitionFilter?: boolean;
                // [Required] The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month,
                // and year, respectively. When the type is not specified, the default behavior is DAY.
                type?: string;
            }
            // Options used in model training.
            interface TrainingOptions {
                // Whether to enable auto ARIMA or not.
                autoArima?: boolean;
                // The max value of non-seasonal p and q.
                autoArimaMaxOrder?: string;
                // Batch size for dnn models.
                batchSize?: string;
                // The data frequency of a time series.
                dataFrequency?: string;
                // The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the
                // corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2.
                // When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding
                // column are used as training data, and the rest are eval data. It respects the order in Orderable data types:
                // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
                dataSplitColumn?: string;
                // The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format
                // should be double. Accurate to two decimal places. Default value is 0.2.
                dataSplitEvalFraction?: number;
                // The data split type for training and evaluation, e.g. RANDOM.
                dataSplitMethod?: string;
                // Distance type for clustering models.
                distanceType?: string;
                // Dropout probability for dnn models.
                dropout?: number;
                // Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used
                // only for iterative training algorithms.
                earlyStop?: boolean;
                // Feedback type that specifies which algorithm to run for matrix factorization.
                feedbackType?: string;
                // Hidden units for dnn models.
                hiddenUnits?: string[];
                // The geographical region based on which the holidays are considered in time series modeling. If a valid value is
                // specified, then holiday effects modeling is enabled.
                holidayRegion?: string;
                // The number of periods ahead that need to be forecasted.
                horizon?: string;
                // Include drift when fitting an ARIMA model.
                includeDrift?: boolean;
                // Specifies the initial learning rate for the line search learn rate strategy.
                initialLearnRate?: number;
                // Name of input label columns in training data.
                inputLabelColumns?: string[];
                // Item column specified for matrix factorization models.
                itemColumn?: string;
                // The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
                kmeansInitializationColumn?: string;
                // The method used to initialize the centroids for kmeans algorithm.
                kmeansInitializationMethod?: string;
                // L1 regularization coefficient.
                l1Regularization?: number;
                // L2 regularization coefficient.
                l2Regularization?: number;
                // Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
                labelClassWeights?: object;
                // Learning rate in training. Used only for iterative training algorithms.
                learnRate?: number;
                // The strategy to determine learn rate for the current iteration.
                learnRateStrategy?: string;
                // Type of loss function used during training run.
                lossType?: string;
                // The maximum number of iterations in training. Used only for iterative training algorithms.
                maxIterations?: string;
                // Maximum depth of a tree for boosted tree models.
                maxTreeDepth?: string;
                // When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for
                // iterative training algorithms.
                minRelativeProgress?: number;
                // Minimum split loss for boosted tree models.
                minSplitLoss?: number;
                // Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
                modelUri?: string;
                // A specification of the non-seasonal part of the ARIMA model: the three components (p, d, q) are the AR order, the degree
                // of differencing, and the MA order.
                nonSeasonalOrder?: Schema.ArimaOrder;
                // Number of clusters for clustering models.
                numClusters?: string;
                // Num factors specified for matrix factorization models.
                numFactors?: string;
                // Optimization strategy for training linear regression models.
                optimizationStrategy?: string;
                // Whether to preserve the input structs in output feature names. Suppose there is a struct A with field b. When false
                // (default), the output feature name is A_b. When true, the output feature name is A.b.
                preserveInputStructs?: boolean;
                // Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
                subsample?: number;
                // Column to be designated as time series data for ARIMA model.
                timeSeriesDataColumn?: string;
                // The id column that will be used to indicate different time series to forecast in parallel.
                timeSeriesIdColumn?: string;
                // Column to be designated as time series timestamp for ARIMA model.
                timeSeriesTimestampColumn?: string;
                // User column specified for matrix factorization models.
                userColumn?: string;
                // Hyperparameter for matrix factoration when implicit feedback type is specified.
                walsAlpha?: number;
                // Whether to train a model from the last checkpoint.
                warmStart?: boolean;
            }
            // Information about a single training query run for the model.
            interface TrainingRun {
                // Data split result of the training run. Only set when the input data is actually split.
                dataSplitResult?: Schema.DataSplitResult;
                // The evaluation metrics over training/eval data that were computed at the end of training.
                evaluationMetrics?: Schema.EvaluationMetrics;
                // Global explanations for important features of the model. For multi-class models, there is one entry for each label
                // class. For other models, there is only one entry in the list.
                globalExplanations?: Schema.GlobalExplanation[];
                // Output of each iteration run, results.size() <= max_iterations.
                results?: Schema.IterationResult[];
                // The start time of this training run.
                startTime?: string;
                // Options that were used for this training run, includes user specified and default options that were used.
                trainingOptions?: Schema.TrainingOptions;
            }
            interface TransactionInfo {
                // [Output-only] // [Alpha] Id of the transaction.
                transactionId?: string;
            }
            // This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should
            // leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional
            // information on migrating, see:
            // https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
            interface UserDefinedFunctionResource {
                // [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is
                // equivalent to providing a URI for a file containing the same code.
                inlineCode?: string;
                // [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
                resourceUri?: string;
            }
            interface ViewDefinition {
                // [Required] A query that BigQuery executes when the view is referenced.
                query?: string;
                // Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will
                // use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view
                // must use the same flag value.
                useLegacySql?: boolean;
                // Describes user-defined function resources used in the query.
                userDefinedFunctionResources?: Schema.UserDefinedFunctionResource[];
            }
        }
    }
    // A data platform for customers to create, manage, share and query data.
    interface BigQuery {
        Datasets?: BigQuery.Collection.DatasetsCollection;
        Jobs?: BigQuery.Collection.JobsCollection;
        Models?: BigQuery.Collection.ModelsCollection;
        Projects?: BigQuery.Collection.ProjectsCollection;
        Routines?: BigQuery.Collection.RoutinesCollection;
        RowAccessPolicies?: BigQuery.Collection.RowAccessPoliciesCollection;
        Tabledata?: BigQuery.Collection.TabledataCollection;
        Tables?: BigQuery.Collection.TablesCollection;
        // Create a new instance of AggregateClassificationMetrics
        newAggregateClassificationMetrics(): BigQuery.Schema.AggregateClassificationMetrics;
        // Create a new instance of Argument
        newArgument(): BigQuery.Schema.Argument;
        // Create a new instance of ArimaCoefficients
        newArimaCoefficients(): BigQuery.Schema.ArimaCoefficients;
        // Create a new instance of ArimaFittingMetrics
        newArimaFittingMetrics(): BigQuery.Schema.ArimaFittingMetrics;
        // Create a new instance of ArimaForecastingMetrics
        newArimaForecastingMetrics(): BigQuery.Schema.ArimaForecastingMetrics;
        // Create a new instance of ArimaModelInfo
        newArimaModelInfo(): BigQuery.Schema.ArimaModelInfo;
        // Create a new instance of ArimaOrder
        newArimaOrder(): BigQuery.Schema.ArimaOrder;
        // Create a new instance of ArimaResult
        newArimaResult(): BigQuery.Schema.ArimaResult;
        // Create a new instance of ArimaSingleModelForecastingMetrics
        newArimaSingleModelForecastingMetrics(): BigQuery.Schema.ArimaSingleModelForecastingMetrics;
        // Create a new instance of AuditConfig
        newAuditConfig(): BigQuery.Schema.AuditConfig;
        // Create a new instance of AuditLogConfig
        newAuditLogConfig(): BigQuery.Schema.AuditLogConfig;
        // Create a new instance of BigQueryModelTraining
        newBigQueryModelTraining(): BigQuery.Schema.BigQueryModelTraining;
        // Create a new instance of BigtableColumn
        newBigtableColumn(): BigQuery.Schema.BigtableColumn;
        // Create a new instance of BigtableColumnFamily
        newBigtableColumnFamily(): BigQuery.Schema.BigtableColumnFamily;
        // Create a new instance of BigtableOptions
        newBigtableOptions(): BigQuery.Schema.BigtableOptions;
        // Create a new instance of BinaryClassificationMetrics
        newBinaryClassificationMetrics(): BigQuery.Schema.BinaryClassificationMetrics;
        // Create a new instance of BinaryConfusionMatrix
        newBinaryConfusionMatrix(): BigQuery.Schema.BinaryConfusionMatrix;
        // Create a new instance of Binding
        newBinding(): BigQuery.Schema.Binding;
        // Create a new instance of BqmlIterationResult
        newBqmlIterationResult(): BigQuery.Schema.BqmlIterationResult;
        // Create a new instance of BqmlTrainingRun
        newBqmlTrainingRun(): BigQuery.Schema.BqmlTrainingRun;
        // Create a new instance of BqmlTrainingRunTrainingOptions
        newBqmlTrainingRunTrainingOptions(): BigQuery.Schema.BqmlTrainingRunTrainingOptions;
        // Create a new instance of CategoricalValue
        newCategoricalValue(): BigQuery.Schema.CategoricalValue;
        // Create a new instance of CategoryCount
        newCategoryCount(): BigQuery.Schema.CategoryCount;
        // Create a new instance of Cluster
        newCluster(): BigQuery.Schema.Cluster;
        // Create a new instance of ClusterInfo
        newClusterInfo(): BigQuery.Schema.ClusterInfo;
        // Create a new instance of Clustering
        newClustering(): BigQuery.Schema.Clustering;
        // Create a new instance of ClusteringMetrics
        newClusteringMetrics(): BigQuery.Schema.ClusteringMetrics;
        // Create a new instance of ConfusionMatrix
        newConfusionMatrix(): BigQuery.Schema.ConfusionMatrix;
        // Create a new instance of ConnectionProperty
        newConnectionProperty(): BigQuery.Schema.ConnectionProperty;
        // Create a new instance of CsvOptions
        newCsvOptions(): BigQuery.Schema.CsvOptions;
        // Create a new instance of DataSplitResult
        newDataSplitResult(): BigQuery.Schema.DataSplitResult;
        // Create a new instance of Dataset
        newDataset(): BigQuery.Schema.Dataset;
        // Create a new instance of DatasetAccess
        newDatasetAccess(): BigQuery.Schema.DatasetAccess;
        // Create a new instance of DatasetReference
        newDatasetReference(): BigQuery.Schema.DatasetReference;
        // Create a new instance of DestinationTableProperties
        newDestinationTableProperties(): BigQuery.Schema.DestinationTableProperties;
        // Create a new instance of DimensionalityReductionMetrics
        newDimensionalityReductionMetrics(): BigQuery.Schema.DimensionalityReductionMetrics;
        // Create a new instance of EncryptionConfiguration
        newEncryptionConfiguration(): BigQuery.Schema.EncryptionConfiguration;
        // Create a new instance of Entry
        newEntry(): BigQuery.Schema.Entry;
        // Create a new instance of ErrorProto
        newErrorProto(): BigQuery.Schema.ErrorProto;
        // Create a new instance of EvaluationMetrics
        newEvaluationMetrics(): BigQuery.Schema.EvaluationMetrics;
        // Create a new instance of ExplainQueryStage
        newExplainQueryStage(): BigQuery.Schema.ExplainQueryStage;
        // Create a new instance of ExplainQueryStep
        newExplainQueryStep(): BigQuery.Schema.ExplainQueryStep;
        // Create a new instance of Explanation
        newExplanation(): BigQuery.Schema.Explanation;
        // Create a new instance of Expr
        newExpr(): BigQuery.Schema.Expr;
        // Create a new instance of ExternalDataConfiguration
        newExternalDataConfiguration(): BigQuery.Schema.ExternalDataConfiguration;
        // Create a new instance of FeatureValue
        newFeatureValue(): BigQuery.Schema.FeatureValue;
        // Create a new instance of GetIamPolicyRequest
        newGetIamPolicyRequest(): BigQuery.Schema.GetIamPolicyRequest;
        // Create a new instance of GetPolicyOptions
        newGetPolicyOptions(): BigQuery.Schema.GetPolicyOptions;
        // Create a new instance of GlobalExplanation
        newGlobalExplanation(): BigQuery.Schema.GlobalExplanation;
        // Create a new instance of GoogleSheetsOptions
        newGoogleSheetsOptions(): BigQuery.Schema.GoogleSheetsOptions;
        // Create a new instance of HivePartitioningOptions
        newHivePartitioningOptions(): BigQuery.Schema.HivePartitioningOptions;
        // Create a new instance of IterationResult
        newIterationResult(): BigQuery.Schema.IterationResult;
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
        // Create a new instance of Model
        newModel(): BigQuery.Schema.Model;
        // Create a new instance of ModelDefinition
        newModelDefinition(): BigQuery.Schema.ModelDefinition;
        // Create a new instance of ModelDefinitionModelOptions
        newModelDefinitionModelOptions(): BigQuery.Schema.ModelDefinitionModelOptions;
        // Create a new instance of ModelReference
        newModelReference(): BigQuery.Schema.ModelReference;
        // Create a new instance of MultiClassClassificationMetrics
        newMultiClassClassificationMetrics(): BigQuery.Schema.MultiClassClassificationMetrics;
        // Create a new instance of Policy
        newPolicy(): BigQuery.Schema.Policy;
        // Create a new instance of PrincipalComponentInfo
        newPrincipalComponentInfo(): BigQuery.Schema.PrincipalComponentInfo;
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
        // Create a new instance of RankingMetrics
        newRankingMetrics(): BigQuery.Schema.RankingMetrics;
        // Create a new instance of RegressionMetrics
        newRegressionMetrics(): BigQuery.Schema.RegressionMetrics;
        // Create a new instance of Routine
        newRoutine(): BigQuery.Schema.Routine;
        // Create a new instance of RoutineReference
        newRoutineReference(): BigQuery.Schema.RoutineReference;
        // Create a new instance of Row
        newRow(): BigQuery.Schema.Row;
        // Create a new instance of RowAccessPolicyReference
        newRowAccessPolicyReference(): BigQuery.Schema.RowAccessPolicyReference;
        // Create a new instance of RowLevelSecurityStatistics
        newRowLevelSecurityStatistics(): BigQuery.Schema.RowLevelSecurityStatistics;
        // Create a new instance of ScriptStackFrame
        newScriptStackFrame(): BigQuery.Schema.ScriptStackFrame;
        // Create a new instance of ScriptStatistics
        newScriptStatistics(): BigQuery.Schema.ScriptStatistics;
        // Create a new instance of SetIamPolicyRequest
        newSetIamPolicyRequest(): BigQuery.Schema.SetIamPolicyRequest;
        // Create a new instance of SnapshotDefinition
        newSnapshotDefinition(): BigQuery.Schema.SnapshotDefinition;
        // Create a new instance of StandardSqlDataType
        newStandardSqlDataType(): BigQuery.Schema.StandardSqlDataType;
        // Create a new instance of StandardSqlField
        newStandardSqlField(): BigQuery.Schema.StandardSqlField;
        // Create a new instance of StandardSqlStructType
        newStandardSqlStructType(): BigQuery.Schema.StandardSqlStructType;
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
        // Create a new instance of TableFieldSchemaPolicyTags
        newTableFieldSchemaPolicyTags(): BigQuery.Schema.TableFieldSchemaPolicyTags;
        // Create a new instance of TableReference
        newTableReference(): BigQuery.Schema.TableReference;
        // Create a new instance of TableSchema
        newTableSchema(): BigQuery.Schema.TableSchema;
        // Create a new instance of TestIamPermissionsRequest
        newTestIamPermissionsRequest(): BigQuery.Schema.TestIamPermissionsRequest;
        // Create a new instance of TimePartitioning
        newTimePartitioning(): BigQuery.Schema.TimePartitioning;
        // Create a new instance of TrainingOptions
        newTrainingOptions(): BigQuery.Schema.TrainingOptions;
        // Create a new instance of TrainingRun
        newTrainingRun(): BigQuery.Schema.TrainingRun;
        // Create a new instance of TransactionInfo
        newTransactionInfo(): BigQuery.Schema.TransactionInfo;
        // Create a new instance of UserDefinedFunctionResource
        newUserDefinedFunctionResource(): BigQuery.Schema.UserDefinedFunctionResource;
        // Create a new instance of ViewDefinition
        newViewDefinition(): BigQuery.Schema.ViewDefinition;
    }
}
declare const BigQuery: GoogleAppsScript.BigQuery;
