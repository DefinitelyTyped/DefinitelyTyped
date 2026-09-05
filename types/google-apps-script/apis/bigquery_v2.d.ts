// Generated From https://github.com/googleapis/discovery-artifact-manager.
declare namespace GoogleAppsScript {
    namespace BigQuery {
        namespace Collection {
            interface DatasetsCollection {
                /**
                 * Returns the dataset specified by datasetID. # IAM Permissions Requires the `bigquery.datasets.get` permission on the dataset.
                 */
                get(
                    /**
                     * Required. Project ID of the requested dataset
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the requested dataset
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * Optional. The version of the access policy schema to fetch. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for conditional access policy binding in datasets must specify version 3. Dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. This field will be mapped to [IAM Policy version] (https://cloud.google.com/iam/docs/policies#versions) and will be used to fetch policy from IAM. If unset or if 0 or 1 value is used for dataset with conditional bindings, access entry with condition will have role string appended by 'withcond' string followed by a hash value. For example : { "access": [ { "role": "roles/bigquery.dataViewer_with_conditionalbinding_7a34awqsda", "userByEmail": "user@example.com", \} ] \} Please refer https://cloud.google.com/iam/docs/troubleshooting-withcond for more details.
                         */
                        accessPolicyVersion?: number | undefined;
                        /**
                         * Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned.
                         */
                        datasetView?: string | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                /**
                 * Creates a new empty dataset. # IAM Permissions Requires the `bigquery.datasets.create` permission on the project.
                 */
                insert(
                    $resource: BigQuery.Schema.Dataset,
                    /**
                     * Required. Project ID of the new dataset
                     */
                    projectId: string,
                    args?: {
                        /**
                         * Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Requests with conditional access policy binding in datasets must specify version 3. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
                         */
                        accessPolicyVersion?: number | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                /**
                 * Lists all datasets in the specified project to which the user has been granted the READER dataset role. # IAM Permissions Requires no specific IAM permission(s) to use this method. Results are filtered to only include datasets on which the caller has the `bigquery.datasets.get` permission.
                 */
                list(
                    /**
                     * Required. Project ID of the datasets to be listed
                     */
                    projectId: string,
                    args?: {
                        /**
                         * Whether to list all datasets, including hidden ones
                         */
                        all?: boolean | undefined;
                        /**
                         * An expression for filtering the results of the request by label. The syntax is `labels.[:]`. Multiple filters can be AND-ed together by connecting with a space. Example: `labels.department:receiving labels.active`. See [Filtering datasets using labels](https://cloud.google.com/bigquery/docs/filtering-labels#filtering_datasets_using_labels) for details.
                         */
                        filter?: string | undefined;
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results
                         */
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.DatasetList;
                /**
                 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics. # IAM Permissions Requires the following IAM permission(s) to use this method: - `bigquery.datasets.update` on the dataset. - `bigquery.datasets.get` on the dataset.
                 */
                patch(
                    $resource: BigQuery.Schema.Dataset,
                    /**
                     * Required. Project ID of the dataset being updated
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the dataset being updated
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
                         */
                        accessPolicyVersion?: number | undefined;
                        /**
                         * Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
                         */
                        updateMode?: string | undefined;
                    },
                ): BigQuery.Schema.Dataset;
                /**
                 * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name. # IAM Permissions Requires the `bigquery.datasets.delete` permission on the dataset.
                 */
                remove(
                    /**
                     * Required. Project ID of the dataset being deleted
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of dataset being deleted
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
                         */
                        deleteContents?: boolean | undefined;
                    },
                ): void;
                /**
                 * Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted. # IAM Permissions Requires the following IAM permission(s) to use this method: - `bigquery.datasets.create` on the project. - `bigquery.datasets.get` on the dataset.
                 */
                undelete(
                    $resource: BigQuery.Schema.UndeleteDatasetRequest,
                    /**
                     * Required. Project ID of the dataset to be undeleted
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of dataset being deleted
                     */
                    datasetId: string,
                ): BigQuery.Schema.Dataset;
                /**
                 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. # IAM Permissions Requires the `bigquery.datasets.update` permission on the dataset.
                 */
                update(
                    $resource: BigQuery.Schema.Dataset,
                    /**
                     * Required. Project ID of the dataset being updated
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the dataset being updated
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
                         */
                        accessPolicyVersion?: number | undefined;
                        /**
                         * Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
                         */
                        updateMode?: string | undefined;
                    },
                ): BigQuery.Schema.Dataset;
            }
            interface JobsCollection {
                /**
                 * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs. # IAM Permissions Requires the `bigquery.jobs.update` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.
                 */
                cancel(
                    /**
                     * Required. Project ID of the job to cancel
                     */
                    projectId: string,
                    /**
                     * Required. Job ID of the job to cancel
                     */
                    jobId: string,
                    args?: {
                        /**
                         * The geographic location of the job. You must [specify the location](https://cloud.google.com/bigquery/docs/locations#specify_locations) to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`)
                         */
                        location?: string | undefined;
                    },
                ): BigQuery.Schema.JobCancelResponse;
                /**
                 * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role. # IAM Permissions Requires the `bigquery.jobs.get` permission on the job resource. If the user matches the creator of the job, the `bigquery.jobs.create` permission on the project is required instead.
                 */
                get(
                    /**
                     * Required. Project ID of the requested job.
                     */
                    projectId: string,
                    /**
                     * Required. Job ID of the requested job.
                     */
                    jobId: string,
                    args?: {
                        /**
                         * The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
                         */
                        location?: string | undefined;
                    },
                ): BigQuery.Schema.Job;
                /**
                 * RPC to get the results of a query job. # IAM Permissions Requires the following IAM permission(s) to use this method: - `bigquery.jobs.get` on the job. - `bigquery.tables.getData` on the destination table. If the user matches the creator of the job, the following IAM permission(s) are required instead: - `bigquery.jobs.create` on the project. - `bigquery.tables.getData` on the destination table.
                 */
                getQueryResults(
                    /**
                     * Required. Project ID of the query job.
                     */
                    projectId: string,
                    /**
                     * Required. Job ID of the query job.
                     */
                    jobId: string,
                    args?: {
                        /**
                         * Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
                         */
                        "formatOptions.timestampOutputFormat"?: string | undefined;
                        /**
                         * Optional. Output timestamp as usec int64. Default is false.
                         */
                        "formatOptions.useInt64Timestamp"?: boolean | undefined;
                        /**
                         * The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
                         */
                        location?: string | undefined;
                        /**
                         * Maximum number of results to read.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results.
                         */
                        pageToken?: string | undefined;
                        /**
                         * Zero-based index of the starting row.
                         */
                        startIndex?: string | undefined;
                        /**
                         * Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
                         */
                        timeoutMs?: number | undefined;
                    },
                ): BigQuery.Schema.GetQueryResultsResponse;
                /**
                 * Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Additional permissions are required depending on the job type: - **Load, Export, and Copy jobs**: Generally require data-level permissions such as `bigquery.tables.export` or access to external storage. - **Query jobs**: Permissions are dependent on the SQL statement. Complex queries (DDL, DCL) may require additional permissions to create reservations, modify IAM policies, or update project settings.
                 */
                insert(
                    $resource: BigQuery.Schema.Job,
                    /**
                     * Project ID of project that will be billed for the job.
                     */
                    projectId: string,
                ): BigQuery.Schema.Job;
                /**
                 * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property. # IAM Permissions Requires no specific IAM permission(s) to use this method. Users are able to list the jobs they created. Additional access is granted based on the following permissions: - Users with the `bigquery.jobs.listAll` permission can list all jobs with all metadata. - Users with the `bigquery.jobs.list` permission can list all jobs, but with redacted information for jobs they did not create.
                 */
                list(
                    /**
                     * Project ID of the jobs to list.
                     */
                    projectId: string,
                    args?: {
                        /**
                         * Whether to display jobs owned by all users in the project. Default False.
                         */
                        allUsers?: boolean | undefined;
                        /**
                         * Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned.
                         */
                        maxCreationTime?: string | undefined;
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned.
                         */
                        minCreationTime?: string | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results.
                         */
                        pageToken?: string | undefined;
                        /**
                         * If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs.
                         */
                        parentJobId?: string | undefined;
                        /**
                         * Restrict information returned to a set of selected fields
                         */
                        projection?: string | undefined;
                        /**
                         * Filter for job state
                         */
                        stateFilter?: string | undefined;
                    },
                ): BigQuery.Schema.JobList;
                /**
                 * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout. # IAM Permissions Requires the `bigquery.jobs.create` permission on the project resource. Data-level permissions are highly dependent on the SQL statement being executed. While standard queries require data access (such as `bigquery.tables.getData`), complex operations like DDL or DCL may require permissions to manage reservations, IAM policies, or project settings.
                 */
                query(
                    $resource: BigQuery.Schema.QueryRequest,
                    /**
                     * Required. Project ID of the query request.
                     */
                    projectId: string,
                ): BigQuery.Schema.QueryResponse;
                /**
                 * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted. # IAM Permissions Requires the `bigquery.jobs.delete` permission on the job resource.
                 */
                remove(
                    /**
                     * Required. Project ID of the job for which metadata is to be deleted.
                     */
                    projectId: string,
                    /**
                     * Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.
                     */
                    jobId: string,
                    args?: {
                        /**
                         * The geographic location of the job. Required. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
                         */
                        location?: string | undefined;
                    },
                ): void;
            }
            interface ModelsCollection {
                /**
                 * Gets the specified model resource by model ID. # IAM Permissions Requires the `bigquery.models.getMetadata` permission on the model.
                 */
                get(
                    /**
                     * Required. Project ID of the requested model.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the requested model.
                     */
                    datasetId: string,
                    /**
                     * Required. Model ID of the requested model.
                     */
                    modelId: string,
                ): BigQuery.Schema.Model;
                /**
                 * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method. # IAM Permissions Requires the `bigquery.models.list` permission on the dataset.
                 */
                list(
                    /**
                     * Required. Project ID of the models to list.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the models to list.
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call to request the next page of results
                         */
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ListModelsResponse;
                /**
                 * Patch specific fields in the specified model. # IAM Permissions Requires the `bigquery.models.updateMetadata` permission on the model.
                 */
                patch(
                    $resource: BigQuery.Schema.Model,
                    /**
                     * Required. Project ID of the model to patch.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the model to patch.
                     */
                    datasetId: string,
                    /**
                     * Required. Model ID of the model to patch.
                     */
                    modelId: string,
                ): BigQuery.Schema.Model;
                /**
                 * Deletes the model specified by modelId from the dataset. # IAM Permissions Requires the `bigquery.models.delete` permission on the model.
                 */
                remove(
                    /**
                     * Required. Project ID of the model to delete.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the model to delete.
                     */
                    datasetId: string,
                    /**
                     * Required. Model ID of the model to delete.
                     */
                    modelId: string,
                ): void;
            }
            interface ProjectsCollection {
                /**
                 * RPC to get the service account for a project used for interactions with Google Cloud KMS. Requires the `bigquery.jobs.create` permission on the project resource. This permission is required to authorize the retrieval of the project's service identity for technical management tasks like encryption configuration.
                 */
                getServiceAccount(
                    /**
                     * Required. ID of the project.
                     */
                    projectId: string,
                ): BigQuery.Schema.GetServiceAccountResponse;
                /**
                 * RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities. # IAM Permissions Requires no specific IAM permission(s) to use this method. The results are filtered to only include projects on which the caller has been granted a project-level role such as a BigQuery predefined IAM role or a basic role such as Viewer or Owner.
                 */
                list(
                    args?: {
                        /**
                         * `maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present.
                         */
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ProjectList;
            }
            interface RoutinesCollection {
                /**
                 * Gets the specified routine resource by routine ID. # IAM Permissions Requires the `bigquery.routines.get` permission on the routine.
                 */
                get(
                    /**
                     * Required. Project ID of the requested routine
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the requested routine
                     */
                    datasetId: string,
                    /**
                     * Required. Routine ID of the requested routine
                     */
                    routineId: string,
                    args?: {
                        /**
                         * If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
                         */
                        readMask?: string | undefined;
                    },
                ): BigQuery.Schema.Routine;
                /**
                 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 */
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    /**
                     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.Policy;
                /**
                 * Creates a new routine in the dataset. # IAM Permissions Requires the `bigquery.routines.create` permission on the dataset.
                 */
                insert(
                    $resource: BigQuery.Schema.Routine,
                    /**
                     * Required. Project ID of the new routine
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the new routine
                     */
                    datasetId: string,
                ): BigQuery.Schema.Routine;
                /**
                 * Lists all routines in the specified dataset. Requires the READER dataset role. # IAM Permissions Requires the `bigquery.routines.list` permission on the dataset.
                 */
                list(
                    /**
                     * Required. Project ID of the routines to list
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the routines to list
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType\}`, where `{RoutineType\}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.
                         */
                        filter?: string | undefined;
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results
                         */
                        pageToken?: string | undefined;
                        /**
                         * If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
                         */
                        readMask?: string | undefined;
                    },
                ): BigQuery.Schema.ListRoutinesResponse;
                /**
                 * Deletes the routine specified by routineId from the dataset. # IAM Permissions Requires the `bigquery.routines.delete` permission on the routine.
                 */
                remove(
                    /**
                     * Required. Project ID of the routine to delete
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the routine to delete
                     */
                    datasetId: string,
                    /**
                     * Required. Routine ID of the routine to delete
                     */
                    routineId: string,
                ): void;
                /**
                 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
                 */
                setIamPolicy(
                    $resource: BigQuery.Schema.SetIamPolicyRequest,
                    /**
                     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.Policy;
                /**
                 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 */
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    /**
                     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                /**
                 * Updates information in an existing routine. The update method replaces the entire Routine resource. # IAM Permissions Requires the `bigquery.routines.update` permission on the routine.
                 */
                update(
                    $resource: BigQuery.Schema.Routine,
                    /**
                     * Required. Project ID of the routine to update
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the routine to update
                     */
                    datasetId: string,
                    /**
                     * Required. Routine ID of the routine to update
                     */
                    routineId: string,
                ): BigQuery.Schema.Routine;
            }
            interface RowaccesspoliciesCollection {
                /**
                 * Deletes provided row access policies. # IAM Permissions Requires the following IAM permission(s) on the table: - `bigquery.rowAccessPolicies.delete` - `bigquery.rowAccessPolicies.setIamPolicy`
                 */
                batchDelete(
                    $resource: BigQuery.Schema.BatchDeleteRowAccessPoliciesRequest,
                    /**
                     * Required. Project ID of the table to delete the row access policies.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to delete the row access policies.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to delete the row access policies.
                     */
                    tableId: string,
                ): void;
                /**
                 * Gets the specified row access policy by policy ID. # IAM Permissions Requires the `bigquery.rowAccessPolicies.get` permission on the table.
                 */
                get(
                    /**
                     * Required. Project ID of the table to get the row access policy.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to get the row access policy.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to get the row access policy.
                     */
                    tableId: string,
                    /**
                     * Required. Policy ID of the row access policy.
                     */
                    policyId: string,
                ): BigQuery.Schema.RowAccessPolicy;
                /**
                 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 */
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    /**
                     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.Policy;
                /**
                 * Creates a row access policy. # IAM Permissions Requires the following IAM permission(s) on the table: - `bigquery.rowAccessPolicies.create` - `bigquery.rowAccessPolicies.setIamPolicy` - `bigquery.tables.getData`
                 */
                insert(
                    $resource: BigQuery.Schema.RowAccessPolicy,
                    /**
                     * Required. Project ID of the table to get the row access policy.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to get the row access policy.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to get the row access policy.
                     */
                    tableId: string,
                ): BigQuery.Schema.RowAccessPolicy;
                /**
                 * Lists all row access policies on the specified table. # IAM Permissions Requires the `bigquery.rowAccessPolicies.list` permission on the table.
                 */
                list(
                    /**
                     * Required. Project ID of the row access policies to list.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of row access policies to list.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to list row access policies.
                     */
                    tableId: string,
                    args?: {
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        pageSize?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results.
                         */
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.ListRowAccessPoliciesResponse;
                /**
                 * Deletes a row access policy. # IAM Permissions Requires the following IAM permission(s) on the table: - `bigquery.rowAccessPolicies.delete` - `bigquery.rowAccessPolicies.setIamPolicy`
                 */
                remove(
                    /**
                     * Required. Project ID of the table to delete the row access policy.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to delete the row access policy.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to delete the row access policy.
                     */
                    tableId: string,
                    /**
                     * Required. Policy ID of the row access policy.
                     */
                    policyId: string,
                    args?: {
                        /**
                         * If set to true, it deletes the row access policy even if it's the last row access policy on the table and the deletion will widen the access rather narrowing it.
                         */
                        force?: boolean | undefined;
                    },
                ): void;
                /**
                 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 */
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    /**
                     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                /**
                 * Updates a row access policy. # IAM Permissions Requires the following IAM permission(s) on the table: - `bigquery.rowAccessPolicies.update` - `bigquery.rowAccessPolicies.setIamPolicy` - `bigquery.tables.getData`
                 */
                update(
                    $resource: BigQuery.Schema.RowAccessPolicy,
                    /**
                     * Required. Project ID of the table to get the row access policy.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to get the row access policy.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to get the row access policy.
                     */
                    tableId: string,
                    /**
                     * Required. Policy ID of the row access policy.
                     */
                    policyId: string,
                ): BigQuery.Schema.RowAccessPolicy;
            }
            interface TabledataCollection {
                /**
                 * Streams data into BigQuery one record at a time without needing to run a load job. # IAM Permissions Requires the following IAM permission(s) to use this method: - `bigquery.tables.updateData` on the table. - `bigquery.tables.get` on the table. - `bigquery.datasets.get` on the dataset.
                 */
                insertAll(
                    $resource: BigQuery.Schema.TableDataInsertAllRequest,
                    /**
                     * Required. Project ID of the destination.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the destination.
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the destination.
                     */
                    tableId: string,
                ): BigQuery.Schema.TableDataInsertAllResponse;
                /**
                 * List the content of a table in rows. # IAM Permissions Requires the `bigquery.tables.getData` permission on the table.
                 */
                list(
                    /**
                     * Required. Project id of the table to list.
                     */
                    projectId: string,
                    /**
                     * Required. Dataset id of the table to list.
                     */
                    datasetId: string,
                    /**
                     * Required. Table id of the table to list.
                     */
                    tableId: string,
                    args?: {
                        /**
                         * Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
                         */
                        "formatOptions.timestampOutputFormat"?: string | undefined;
                        /**
                         * Optional. Output timestamp as usec int64. Default is false.
                         */
                        "formatOptions.useInt64Timestamp"?: boolean | undefined;
                        /**
                         * Row limit of the table.
                         */
                        maxResults?: number | undefined;
                        /**
                         * To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list.
                         */
                        pageToken?: string | undefined;
                        /**
                         * Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
                         */
                        selectedFields?: string | undefined;
                        /**
                         * Start row index of the table.
                         */
                        startIndex?: string | undefined;
                    },
                ): BigQuery.Schema.TableDataList;
            }
            interface TablesCollection {
                /**
                 * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table. # IAM Permissions Requires the `bigquery.tables.get` permission on the table.
                 */
                get(
                    /**
                     * Required. Project ID of the requested table
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the requested table
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the requested table
                     */
                    tableId: string,
                    args?: {
                        /**
                         * List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed.
                         */
                        selectedFields?: string | undefined;
                        /**
                         * Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
                         */
                        view?: string | undefined;
                    },
                ): BigQuery.Schema.Table;
                /**
                 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
                 */
                getIamPolicy(
                    $resource: BigQuery.Schema.GetIamPolicyRequest,
                    /**
                     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.Policy;
                /**
                 * Creates a new, empty table in the dataset. # IAM Permissions Requires the `bigquery.tables.create` permission on the dataset.
                 */
                insert(
                    $resource: BigQuery.Schema.Table,
                    /**
                     * Required. Project ID of the new table
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the new table
                     */
                    datasetId: string,
                ): BigQuery.Schema.Table;
                /**
                 * Lists all tables in the specified dataset. Requires the READER dataset role. # IAM Permissions Requires the `bigquery.tables.list` permission on the dataset.
                 */
                list(
                    /**
                     * Required. Project ID of the tables to list
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the tables to list
                     */
                    datasetId: string,
                    args?: {
                        /**
                         * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
                         */
                        maxResults?: number | undefined;
                        /**
                         * Page token, returned by a previous call, to request the next page of results
                         */
                        pageToken?: string | undefined;
                    },
                ): BigQuery.Schema.TableList;
                /**
                 * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics. # IAM Permissions Requires the following IAM permission(s) on the table: - `bigquery.tables.update` - `bigquery.tables.get`
                 */
                patch(
                    $resource: BigQuery.Schema.Table,
                    /**
                     * Required. Project ID of the table to update
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to update
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to update
                     */
                    tableId: string,
                    args?: {
                        /**
                         * Optional.  When true will autodetect schema, else will keep original schema
                         */
                        autodetect_schema?: boolean | undefined;
                    },
                ): BigQuery.Schema.Table;
                /**
                 * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted. # IAM Permissions Requires the `bigquery.tables.delete` permission on the table.
                 */
                remove(
                    /**
                     * Required. Project ID of the table to delete
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to delete
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to delete
                     */
                    tableId: string,
                ): void;
                /**
                 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
                 */
                setIamPolicy(
                    $resource: BigQuery.Schema.SetIamPolicyRequest,
                    /**
                     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.Policy;
                /**
                 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
                 */
                testIamPermissions(
                    $resource: BigQuery.Schema.TestIamPermissionsRequest,
                    /**
                     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
                     */
                    resource: string,
                ): BigQuery.Schema.TestIamPermissionsResponse;
                /**
                 * Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource. # IAM Permissions Requires the `bigquery.tables.update` permission on the table.
                 */
                update(
                    $resource: BigQuery.Schema.Table,
                    /**
                     * Required. Project ID of the table to update
                     */
                    projectId: string,
                    /**
                     * Required. Dataset ID of the table to update
                     */
                    datasetId: string,
                    /**
                     * Required. Table ID of the table to update
                     */
                    tableId: string,
                    args?: {
                        /**
                         * Optional.  When true will autodetect schema, else will keep original schema
                         */
                        autodetect_schema?: boolean | undefined;
                    },
                ): BigQuery.Schema.Table;
            }
        }
        namespace Schema {
            /**
             * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
             */
            interface AggregateClassificationMetrics {
                /**
                 * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
                 */
                accuracy?: number | undefined;
                /**
                 * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
                 */
                f1Score?: number | undefined;
                /**
                 * Logarithmic Loss. For multiclass this is a macro-averaged metric.
                 */
                logLoss?: number | undefined;
                /**
                 * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
                 */
                precision?: number | undefined;
                /**
                 * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
                 */
                recall?: number | undefined;
                /**
                 * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
                 */
                rocAuc?: number | undefined;
                /**
                 * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classification models this is the confidence threshold.
                 */
                threshold?: number | undefined;
            }
            /**
             * Represents privacy policy associated with "aggregation threshold" method.
             */
            interface AggregationThresholdPolicy {
                /**
                 * Optional. The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation ("outer.inner")
                 */
                privacyUnitColumns?: string[] | undefined;
                /**
                 * Optional. The threshold for the "aggregation threshold" policy.
                 */
                threshold?: string | undefined;
            }
            /**
             * Input/output argument of a function or a stored procedure.
             */
            interface Argument {
                /**
                 * Optional. Defaults to FIXED_TYPE.
                 */
                argumentKind?: string | undefined;
                /**
                 * Set if argument_kind == FIXED_TYPE.
                 */
                dataType?: BigQuery.Schema.StandardSqlDataType | undefined;
                /**
                 * Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding "NOT AGGREGATE" clause in DDL; Otherwise, it is equivalent to omitting "NOT AGGREGATE" clause in DDL.
                 */
                isAggregate?: boolean | undefined;
                /**
                 * Optional. Specifies whether the argument is input or output. Can be set for procedures only.
                 */
                mode?: string | undefined;
                /**
                 * Optional. The name of this argument. Can be absent for function return argument.
                 */
                name?: string | undefined;
                /**
                 * Optional. Set if argument_kind == FIXED_TABLE.
                 */
                tableType?: BigQuery.Schema.StandardSqlTableType | undefined;
            }
            /**
             * Arima coefficients.
             */
            interface ArimaCoefficients {
                /**
                 * Auto-regressive coefficients, an array of double.
                 */
                autoRegressiveCoefficients?: number[] | undefined;
                /**
                 * Intercept coefficient, just a double not an array.
                 */
                interceptCoefficient?: number | undefined;
                /**
                 * Moving-average coefficients, an array of double.
                 */
                movingAverageCoefficients?: number[] | undefined;
            }
            /**
             * ARIMA model fitting metrics.
             */
            interface ArimaFittingMetrics {
                /**
                 * AIC.
                 */
                aic?: number | undefined;
                /**
                 * Log-likelihood.
                 */
                logLikelihood?: number | undefined;
                /**
                 * Variance.
                 */
                variance?: number | undefined;
            }
            /**
             * Model evaluation metrics for ARIMA forecasting models.
             */
            interface ArimaForecastingMetrics {
                /**
                 * Arima model fitting metrics.
                 * @deprecated
                 */
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics[] | undefined;
                /**
                 * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
                 */
                arimaSingleModelForecastingMetrics?:
                    | BigQuery.Schema.ArimaSingleModelForecastingMetrics[]
                    | undefined;
                /**
                 * Whether Arima model fitted with drift or not. It is always false when d is not 1.
                 * @deprecated
                 */
                hasDrift?: boolean[] | undefined;
                /**
                 * Non-seasonal order.
                 * @deprecated
                 */
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder[] | undefined;
                /**
                 * Seasonal periods. Repeated because multiple periods are supported for one time series.
                 * @deprecated
                 */
                seasonalPeriods?: string[] | undefined;
                /**
                 * Id to differentiate different time series for the large-scale case.
                 * @deprecated
                 */
                timeSeriesId?: string[] | undefined;
            }
            /**
             * Arima model information.
             */
            interface ArimaModelInfo {
                /**
                 * Arima coefficients.
                 */
                arimaCoefficients?: BigQuery.Schema.ArimaCoefficients | undefined;
                /**
                 * Arima fitting metrics.
                 */
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics | undefined;
                /**
                 * Whether Arima model fitted with drift or not. It is always false when d is not 1.
                 */
                hasDrift?: boolean | undefined;
                /**
                 * If true, holiday_effect is a part of time series decomposition result.
                 */
                hasHolidayEffect?: boolean | undefined;
                /**
                 * If true, spikes_and_dips is a part of time series decomposition result.
                 */
                hasSpikesAndDips?: boolean | undefined;
                /**
                 * If true, step_changes is a part of time series decomposition result.
                 */
                hasStepChanges?: boolean | undefined;
                /**
                 * Non-seasonal order.
                 */
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                /**
                 * Seasonal periods. Repeated because multiple periods are supported for one time series.
                 */
                seasonalPeriods?: string[] | undefined;
                /**
                 * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
                 */
                timeSeriesId?: string | undefined;
                /**
                 * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
                 */
                timeSeriesIds?: string[] | undefined;
            }
            /**
             * Arima order, can be used for both non-seasonal and seasonal parts.
             */
            interface ArimaOrder {
                /**
                 * Order of the differencing part.
                 */
                d?: string | undefined;
                /**
                 * Order of the autoregressive part.
                 */
                p?: string | undefined;
                /**
                 * Order of the moving-average part.
                 */
                q?: string | undefined;
            }
            /**
             * (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results.
             */
            interface ArimaResult {
                /**
                 * This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one.
                 */
                arimaModelInfo?: BigQuery.Schema.ArimaModelInfo[] | undefined;
                /**
                 * Seasonal periods. Repeated because multiple periods are supported for one time series.
                 */
                seasonalPeriods?: string[] | undefined;
            }
            /**
             * Model evaluation metrics for a single ARIMA forecasting model.
             */
            interface ArimaSingleModelForecastingMetrics {
                /**
                 * Arima fitting metrics.
                 */
                arimaFittingMetrics?: BigQuery.Schema.ArimaFittingMetrics | undefined;
                /**
                 * Is arima model fitted with drift or not. It is always false when d is not 1.
                 */
                hasDrift?: boolean | undefined;
                /**
                 * If true, holiday_effect is a part of time series decomposition result.
                 */
                hasHolidayEffect?: boolean | undefined;
                /**
                 * If true, spikes_and_dips is a part of time series decomposition result.
                 */
                hasSpikesAndDips?: boolean | undefined;
                /**
                 * If true, step_changes is a part of time series decomposition result.
                 */
                hasStepChanges?: boolean | undefined;
                /**
                 * Non-seasonal order.
                 */
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                /**
                 * Seasonal periods. Repeated because multiple periods are supported for one time series.
                 */
                seasonalPeriods?: string[] | undefined;
                /**
                 * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
                 */
                timeSeriesId?: string | undefined;
                /**
                 * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
                 */
                timeSeriesIds?: string[] | undefined;
            }
            /**
             * Arrow RecordBatch. This feature is not yet available.
             */
            interface ArrowRecordBatch {
                /**
                 * IPC-serialized Arrow RecordBatch.
                 */
                serializedRecordBatch?: string | undefined;
            }
            /**
             * Arrow schema as specified in https://arrow.apache.org/docs/python/api/datatypes.html and serialized to bytes using IPC: https://arrow.apache.org/docs/format/Columnar.html#serialization-and-interprocess-communication-ipc See code samples on how this message can be deserialized. This feature is not yet available.
             */
            interface ArrowSchema {
                /**
                 * IPC serialized Arrow schema.
                 */
                serializedSchema?: string | undefined;
            }
            /**
             * Contains options specific to Arrow Serialization. This feature is not yet available.
             */
            interface ArrowSerializationOptions {
                /**
                 * The compression codec to use for Arrow buffers in serialized record batches.
                 */
                bufferCompression?: string | undefined;
                /**
                 * Optional. Set timestamp precision option. If not set, the default precision is microseconds.
                 */
                picosTimestampPrecision?: string | undefined;
            }
            /**
             * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
             */
            interface AuditConfig {
                /**
                 * The configuration for logging of each type of permission.
                 */
                auditLogConfigs?: BigQuery.Schema.AuditLogConfig[] | undefined;
                /**
                 * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
                 */
                service?: string | undefined;
            }
            /**
             * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
             */
            interface AuditLogConfig {
                /**
                 * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
                 */
                exemptedMembers?: string[] | undefined;
                /**
                 * The log type that this config enables.
                 */
                logType?: string | undefined;
            }
            /**
             * Options for external data sources.
             */
            interface AvroOptions {
                /**
                 * Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
                 */
                useAvroLogicalTypes?: boolean | undefined;
            }
            /**
             * Request message for the BatchDeleteRowAccessPoliciesRequest method.
             */
            interface BatchDeleteRowAccessPoliciesRequest {
                /**
                 * If set to true, it deletes the row access policy even if it's the last row access policy on the table and the deletion will widen the access rather narrowing it.
                 */
                force?: boolean | undefined;
                /**
                 * Required. Policy IDs of the row access policies.
                 */
                policyIds?: string[] | undefined;
            }
            /**
             * Reason why BI Engine didn't accelerate the query (or sub-query).
             */
            interface BiEngineReason {
                /**
                 * Output only. High-level BI Engine reason for partial or disabled acceleration
                 */
                code?: string | undefined;
                /**
                 * Output only. Free form human-readable reason for partial or disabled acceleration.
                 */
                message?: string | undefined;
            }
            /**
             * Statistics for a BI Engine specific query. Populated as part of JobStatistics2
             */
            interface BiEngineStatistics {
                /**
                 * Output only. Specifies which mode of BI Engine acceleration was performed (if any).
                 */
                accelerationMode?: string | undefined;
                /**
                 * Output only. Specifies which mode of BI Engine acceleration was performed (if any).
                 */
                biEngineMode?: string | undefined;
                /**
                 * In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated.
                 */
                biEngineReasons?: BigQuery.Schema.BiEngineReason[] | undefined;
            }
            /**
             * Configuration for BigQuery tables for Apache Iceberg (formerly BigLake managed tables.)
             */
            interface BigLakeConfiguration {
                /**
                 * Optional. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection_id can have the form `{project\}.{location\}.{connection_id\}` or `projects/{project\}/locations/{location\}/connections/{connection_id\}".
                 */
                connectionId?: string | undefined;
                /**
                 * Optional. The file format the table data is stored in.
                 */
                fileFormat?: string | undefined;
                /**
                 * Optional. The fully qualified location prefix of the external folder where table data is stored. The '*' wildcard character is not allowed. The URI should be in the format `gs://bucket/path_to_table/`
                 */
                storageUri?: string | undefined;
                /**
                 * Optional. The table format the metadata only snapshots are stored in.
                 */
                tableFormat?: string | undefined;
            }
            interface BigQueryModelTraining {
                /**
                 * Deprecated.
                 */
                currentIteration?: number | undefined;
                /**
                 * Deprecated.
                 */
                expectedTotalIterations?: string | undefined;
            }
            /**
             * Information related to a Bigtable column.
             */
            interface BigtableColumn {
                /**
                 * Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. PROTO_BINARY - indicates values are encoded using serialized proto messages. This can only be used in combination with JSON type. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.
                 */
                encoding?: string | undefined;
                /**
                 * Optional. If the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as the column field name and is used as field name in queries.
                 */
                fieldName?: string | undefined;
                /**
                 * Optional. If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.
                 */
                onlyReadLatest?: boolean | undefined;
                /**
                 * Optional. Protobuf-specific configurations, only takes effect when the encoding is PROTO_BINARY.
                 */
                protoConfig?: BigQuery.Schema.BigtableProtoConfig | undefined;
                /**
                 * [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as `.` field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as field_name.
                 */
                qualifierEncoded?: string | undefined;
                /**
                 * Qualifier string.
                 */
                qualifierString?: string | undefined;
                /**
                 * Optional. The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.
                 */
                type?: string | undefined;
            }
            /**
             * Information related to a Bigtable column family.
             */
            interface BigtableColumnFamily {
                /**
                 * Optional. Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as `.`. Other columns can be accessed as a list through the `.Column` field.
                 */
                columns?: BigQuery.Schema.BigtableColumn[] | undefined;
                /**
                 * Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. PROTO_BINARY - indicates values are encoded using serialized proto messages. This can only be used in combination with JSON type. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.
                 */
                encoding?: string | undefined;
                /**
                 * Identifier of the column family.
                 */
                familyId?: string | undefined;
                /**
                 * Optional. If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.
                 */
                onlyReadLatest?: boolean | undefined;
                /**
                 * Optional. Protobuf-specific configurations, only takes effect when the encoding is PROTO_BINARY.
                 */
                protoConfig?: BigQuery.Schema.BigtableProtoConfig | undefined;
                /**
                 * Optional. The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.
                 */
                type?: string | undefined;
            }
            /**
             * Options specific to Google Cloud Bigtable data sources.
             */
            interface BigtableOptions {
                /**
                 * Optional. List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.
                 */
                columnFamilies?: BigQuery.Schema.BigtableColumnFamily[] | undefined;
                /**
                 * Optional. If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
                 */
                ignoreUnspecifiedColumnFamilies?: boolean | undefined;
                /**
                 * Optional. If field is true, then each column family will be read as a single JSON column. Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.
                 */
                outputColumnFamiliesAsJson?: boolean | undefined;
                /**
                 * Optional. If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.
                 */
                readRowkeyAsString?: boolean | undefined;
            }
            /**
             * Information related to a Bigtable protobuf column.
             */
            interface BigtableProtoConfig {
                /**
                 * Optional. The fully qualified proto message name of the protobuf. In the format of "foo.bar.Message".
                 */
                protoMessageName?: string | undefined;
                /**
                 * Optional. The ID of the Bigtable SchemaBundle resource associated with this protobuf. The ID should be referred to within the parent table, e.g., `foo` rather than `projects/{project\}/instances/{instance\}/tables/{table\}/schemaBundles/foo`. See [more details on Bigtable SchemaBundles](https://docs.cloud.google.com/bigtable/docs/create-manage-protobuf-schemas).
                 */
                schemaBundleId?: string | undefined;
            }
            /**
             * Evaluation metrics for binary classification/classifier models.
             */
            interface BinaryClassificationMetrics {
                /**
                 * Aggregate classification metrics.
                 */
                aggregateClassificationMetrics?: BigQuery.Schema.AggregateClassificationMetrics | undefined;
                /**
                 * Binary confusion matrix at multiple thresholds.
                 */
                binaryConfusionMatrixList?: BigQuery.Schema.BinaryConfusionMatrix[] | undefined;
                /**
                 * Label representing the negative class.
                 */
                negativeLabel?: string | undefined;
                /**
                 * Label representing the positive class.
                 */
                positiveLabel?: string | undefined;
            }
            /**
             * Confusion matrix for binary classification models.
             */
            interface BinaryConfusionMatrix {
                /**
                 * The fraction of predictions given the correct label.
                 */
                accuracy?: number | undefined;
                /**
                 * The equally weighted average of recall and precision.
                 */
                f1Score?: number | undefined;
                /**
                 * Number of false samples predicted as false.
                 */
                falseNegatives?: string | undefined;
                /**
                 * Number of false samples predicted as true.
                 */
                falsePositives?: string | undefined;
                /**
                 * Threshold value used when computing each of the following metric.
                 */
                positiveClassThreshold?: number | undefined;
                /**
                 * The fraction of actual positive predictions that had positive actual labels.
                 */
                precision?: number | undefined;
                /**
                 * The fraction of actual positive labels that were given a positive prediction.
                 */
                recall?: number | undefined;
                /**
                 * Number of true samples predicted as false.
                 */
                trueNegatives?: string | undefined;
                /**
                 * Number of true samples predicted as true.
                 */
                truePositives?: string | undefined;
            }
            /**
             * Associates `members`, or principals, with a `role`.
             */
            interface Binding {
                /**
                 * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                 */
                condition?: BigQuery.Schema.Expr | undefined;
                /**
                 * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
                 */
                members?: string[] | undefined;
                /**
                 * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
                 */
                role?: string | undefined;
            }
            interface BqmlIterationResult {
                /**
                 * Deprecated.
                 */
                durationMs?: string | undefined;
                /**
                 * Deprecated.
                 */
                evalLoss?: number | undefined;
                /**
                 * Deprecated.
                 */
                index?: number | undefined;
                /**
                 * Deprecated.
                 */
                learnRate?: number | undefined;
                /**
                 * Deprecated.
                 */
                trainingLoss?: number | undefined;
            }
            interface BqmlTrainingRun {
                /**
                 * Deprecated.
                 */
                iterationResults?: BigQuery.Schema.BqmlIterationResult[] | undefined;
                /**
                 * Deprecated.
                 */
                startTime?: string | undefined;
                /**
                 * Deprecated.
                 */
                state?: string | undefined;
                /**
                 * Deprecated.
                 */
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
            /**
             * Representative value of a categorical feature.
             */
            interface CategoricalValue {
                /**
                 * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
                 */
                categoryCounts?: BigQuery.Schema.CategoryCount[] | undefined;
            }
            /**
             * Represents the count of a single category within the cluster.
             */
            interface CategoryCount {
                /**
                 * The name of category.
                 */
                category?: string | undefined;
                /**
                 * The count of training samples matching the category within the cluster.
                 */
                count?: string | undefined;
            }
            /**
             * Information about base table and clone time of a table clone.
             */
            interface CloneDefinition {
                /**
                 * Required. Reference describing the ID of the table that was cloned.
                 */
                baseTableReference?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Required. The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format.
                 */
                cloneTime?: string | undefined;
            }
            /**
             * Message containing the information about one cluster.
             */
            interface Cluster {
                /**
                 * Centroid id.
                 */
                centroidId?: string | undefined;
                /**
                 * Count of training data rows that were assigned to this cluster.
                 */
                count?: string | undefined;
                /**
                 * Values of highly variant features for this cluster.
                 */
                featureValues?: BigQuery.Schema.FeatureValue[] | undefined;
            }
            /**
             * Information about a single cluster for clustering model.
             */
            interface ClusterInfo {
                /**
                 * Centroid id.
                 */
                centroidId?: string | undefined;
                /**
                 * Cluster radius, the average distance from centroid to each point assigned to the cluster.
                 */
                clusterRadius?: number | undefined;
                /**
                 * Cluster size, the total number of points assigned to the cluster.
                 */
                clusterSize?: string | undefined;
            }
            /**
             * Configures table clustering.
             */
            interface Clustering {
                /**
                 * One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. The ordering of the clustering fields should be prioritized from most to least important for filtering purposes. For additional information, see [Introduction to clustered tables](https://cloud.google.com/bigquery/docs/clustered-tables#limitations).
                 */
                fields?: string[] | undefined;
            }
            /**
             * Evaluation metrics for clustering models.
             */
            interface ClusteringMetrics {
                /**
                 * Information for all clusters.
                 */
                clusters?: BigQuery.Schema.Cluster[] | undefined;
                /**
                 * Davies-Bouldin index.
                 */
                daviesBouldinIndex?: number | undefined;
                /**
                 * Mean of squared distances between each sample to its cluster centroid.
                 */
                meanSquaredDistance?: number | undefined;
            }
            /**
             * Confusion matrix for multi-class classification models.
             */
            interface ConfusionMatrix {
                /**
                 * Confidence threshold used when computing the entries of the confusion matrix.
                 */
                confidenceThreshold?: number | undefined;
                /**
                 * One row per actual label.
                 */
                rows?: BigQuery.Schema.Row[] | undefined;
            }
            /**
             * A connection-level property to customize query behavior. Under JDBC, these correspond directly to connection properties passed to the DriverManager. Under ODBC, these correspond to properties in the connection string. Currently supported connection properties: * **dataset_project_id**: represents the default project for datasets that are used in the query. Setting the system variable `@@dataset_project_id` achieves the same behavior. For more information about system variables, see: https://cloud.google.com/bigquery/docs/reference/system-variables * **time_zone**: represents the default timezone used to run the query. * **session_id**: associates the query with a given session. * **query_label**: associates the query with a given job label. If set, all subsequent queries in a script or session will have this label. For the format in which a you can specify a query label, see labels in the JobConfiguration resource type: https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfiguration * **service_account**: indicates the service account to use to run a continuous query. If set, the query job uses the service account to access Google Cloud resources. Service account access is bounded by the IAM permissions that you have granted to the service account. Additional properties are allowed, but ignored. Specifying multiple connection properties with the same key returns an error.
             */
            interface ConnectionProperty {
                /**
                 * The key of the property to set.
                 */
                key?: string | undefined;
                /**
                 * The value of the property to set.
                 */
                value?: string | undefined;
            }
            /**
             * Information related to a CSV data source.
             */
            interface CsvOptions {
                /**
                 * Optional. Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
                 */
                allowJaggedRows?: boolean | undefined;
                /**
                 * Optional. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
                 */
                allowQuotedNewlines?: boolean | undefined;
                /**
                 * Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
                 */
                encoding?: string | undefined;
                /**
                 * Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
                 */
                fieldDelimiter?: string | undefined;
                /**
                 * Optional. Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when querying a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
                 */
                nullMarker?: string | undefined;
                /**
                 * Optional. A list of strings represented as SQL NULL value in a CSV file. null_marker and null_markers can't be set at the same time. If null_marker is set, null_markers has to be not set. If null_markers is set, null_marker has to be not set. If both null_marker and null_markers are set at the same time, a user error would be thrown. Any strings listed in null_markers, including empty string would be interpreted as SQL NULL. This applies to all column types.
                 */
                nullMarkers?: string[] | undefined;
                /**
                 * Optional. Indicates if the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
                 */
                preserveAsciiControlCharacters?: boolean | undefined;
                /**
                 * Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ("). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '.
                 */
                quote?: string | undefined;
                /**
                 * Optional. The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
                 */
                skipLeadingRows?: string | undefined;
                /**
                 * Optional. Controls the strategy used to match loaded columns to the schema. If not set, a sensible default is chosen based on how the schema is provided. If autodetect is used, then columns are matched by name. Otherwise, columns are matched by position. This is done to keep the behavior backward-compatible. Acceptable values are: POSITION - matches by position. This assumes that the columns are ordered the same way as the schema. NAME - matches by name. This reads the header row as column names and reorders columns to match the field names in the schema.
                 */
                sourceColumnMatch?: string | undefined;
            }
            /**
             * Options for data format adjustments.
             */
            interface DataFormatOptions {
                /**
                 * Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
                 */
                timestampOutputFormat?: string | undefined;
                /**
                 * Optional. Output timestamp as usec int64. Default is false.
                 */
                useInt64Timestamp?: boolean | undefined;
            }
            /**
             * Statistics for data-masking.
             */
            interface DataMaskingStatistics {
                /**
                 * Whether any accessed data was protected by the data masking.
                 */
                dataMaskingApplied?: boolean | undefined;
            }
            /**
             * A list of data policy options. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
             */
            interface DataPolicyList {
                /**
                 * Contains a list of data policy options. At most 9 data policies are allowed per field.
                 */
                dataPolicies?: BigQuery.Schema.DataPolicyOption[] | undefined;
            }
            /**
             * Data policy option. For more information, see [Mask data by applying data policies to a column](https://docs.cloud.google.com/bigquery/docs/column-data-masking#data-policies-on-column).
             */
            interface DataPolicyOption {
                /**
                 * Data policy resource name in the form of projects/project_id/locations/location_id/dataPolicies/data_policy_id.
                 */
                name?: string | undefined;
            }
            /**
             * Represents a BigQuery dataset.
             */
            interface Dataset {
                /**
                 * Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; If you patch a dataset, then this field is overwritten by the patched dataset's access field. To add entities, you must supply the entire existing access array in addition to any new entities that you want to add.
                 */
                access?:
                    | Array<{
                        /**
                         * Optional. condition for the binding. If CEL expression in this field is true, this access binding will be considered
                         */
                        condition?: BigQuery.Schema.Expr | undefined;
                        /**
                         * [Pick one] A grant authorizing all resources of a particular type in a particular dataset access to this dataset. Only views are supported for now. The role field is not required when this field is set. If that dataset is deleted and re-created, its access needs to be granted again via an update operation.
                         */
                        dataset?: BigQuery.Schema.DatasetAccessEntry | undefined;
                        /**
                         * [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
                         */
                        domain?: string | undefined;
                        /**
                         * [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
                         */
                        groupByEmail?: string | undefined;
                        /**
                         * [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
                         */
                        iamMember?: string | undefined;
                        /**
                         * An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: * `OWNER`: `roles/bigquery.dataOwner` * `WRITER`: `roles/bigquery.dataEditor` * `READER`: `roles/bigquery.dataViewer` This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".
                         */
                        role?: string | undefined;
                        /**
                         * [Pick one] A routine from a different dataset to grant access to. Queries executed against that routine will have read access to views/tables/routines in this dataset. Only UDF is supported for now. The role field is not required when this field is set. If that routine is updated by any user, access to the routine needs to be granted again via an update operation.
                         */
                        routine?: BigQuery.Schema.RoutineReference | undefined;
                        /**
                         * [Pick one] A special group to grant access to. Possible values include: * projectOwners: Owners of the enclosing project. * projectReaders: Readers of the enclosing project. * projectWriters: Writers of the enclosing project. * allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.
                         */
                        specialGroup?: string | undefined;
                        /**
                         * [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".
                         */
                        userByEmail?: string | undefined;
                        /**
                         * [Pick one] A view from a different dataset to grant access to. Queries executed against that view will have read access to views/tables/routines in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.
                         */
                        view?: BigQuery.Schema.TableReference | undefined;
                    }>
                    | undefined;
                /**
                 * Output only. The origin of the dataset, one of: * (Unset) - Native BigQuery Dataset * BIGLAKE - Dataset is backed by a namespace stored natively in Biglake
                 */
                catalogSource?: string | undefined;
                /**
                 * Output only. The time when this dataset was created, in milliseconds since the epoch.
                 */
                creationTime?: string | undefined;
                /**
                 * Required. A reference that identifies the dataset.
                 */
                datasetReference?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
                 */
                defaultCollation?: string | undefined;
                /**
                 * The default encryption key for all tables in the dataset. After this property is set, the encryption key of all newly-created tables in the dataset is set to this value unless the table creation request or query explicitly overrides the key.
                 */
                defaultEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.
                 */
                defaultPartitionExpirationMs?: string | undefined;
                /**
                 * Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table's default rounding mode, unless otherwise specified.
                 */
                defaultRoundingMode?: string | undefined;
                /**
                 * Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
                 */
                defaultTableExpirationMs?: string | undefined;
                /**
                 * Optional. A user-friendly description of the dataset.
                 */
                description?: string | undefined;
                /**
                 * Output only. A hash of the resource.
                 */
                etag?: string | undefined;
                /**
                 * Optional. Options defining open source compatible datasets living in the BigQuery catalog. Contains metadata of open source database, schema or namespace represented by the current dataset.
                 */
                externalCatalogDatasetOptions?: BigQuery.Schema.ExternalCatalogDatasetOptions | undefined;
                /**
                 * Optional. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.
                 */
                externalDatasetReference?: BigQuery.Schema.ExternalDatasetReference | undefined;
                /**
                 * Optional. A descriptive name for the dataset.
                 */
                friendlyName?: string | undefined;
                /**
                 * Output only. The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
                 */
                id?: string | undefined;
                /**
                 * Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.
                 */
                isCaseInsensitive?: boolean | undefined;
                /**
                 * Output only. The resource type.
                 */
                kind?: string | undefined;
                /**
                 * The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See [Creating and Updating Dataset Labels](https://cloud.google.com/bigquery/docs/creating-managing-labels#creating_and_updating_dataset_labels) for more information.
                 */
                labels?: Record<string, string> | undefined;
                /**
                 * Output only. The date when this dataset was last modified, in milliseconds since the epoch.
                 */
                lastModifiedTime?: string | undefined;
                /**
                 * Output only. Metadata about the LinkedDataset. Filled out when the dataset type is LINKED.
                 */
                linkedDatasetMetadata?: BigQuery.Schema.LinkedDatasetMetadata | undefined;
                /**
                 * Optional. The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored.
                 */
                linkedDatasetSource?: BigQuery.Schema.LinkedDatasetSource | undefined;
                /**
                 * The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
                 */
                location?: string | undefined;
                /**
                 * Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.
                 */
                maxTimeTravelHours?: string | undefined;
                /**
                 * Optional. The [tags](https://cloud.google.com/bigquery/docs/tags) attached to this dataset. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details.
                 */
                resourceTags?: Record<string, string> | undefined;
                /**
                 * Optional. Output only. Restriction config for all tables and dataset. If set, restrict certain accesses on the dataset and all its tables based on the config. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details.
                 */
                restrictions?: BigQuery.Schema.RestrictionConfig | undefined;
                /**
                 * Output only. Reserved for future use.
                 */
                satisfiesPzi?: boolean | undefined;
                /**
                 * Output only. Reserved for future use.
                 */
                satisfiesPzs?: boolean | undefined;
                /**
                 * Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
                 */
                selfLink?: string | undefined;
                /**
                 * Optional. Updates storage_billing_model for the dataset.
                 */
                storageBillingModel?: string | undefined;
                /**
                 * Output only. Tags for the dataset. To provide tags as inputs, use the `resourceTags` field.
                 * @deprecated
                 */
                tags?:
                    | Array<{
                        /**
                         * Required. The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id.
                         */
                        tagKey?: string | undefined;
                        /**
                         * Required. The friendly short name of the tag value, e.g. "production".
                         */
                        tagValue?: string | undefined;
                    }>
                    | undefined;
                /**
                 * Output only. Same as `type` in `ListFormatDataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog, * BIGLAKE_ICEBERG - a Biglake dataset accessible through the Iceberg API, * BIGLAKE_HIVE - a Biglake dataset accessible through the Hive API.
                 */
                type?: string | undefined;
            }
            /**
             * Grants all resources of particular types in a particular dataset read access to the current dataset. Similar to how individually authorized views work, updates to any resource granted through its dataset (including creation of new resources) requires read permission to referenced resources, plus write permission to the authorizing dataset.
             */
            interface DatasetAccessEntry {
                /**
                 * The dataset this entry applies to
                 */
                dataset?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future.
                 */
                targetTypes?: string[] | undefined;
            }
            /**
             * Response format for a page of results when listing datasets.
             */
            interface DatasetList {
                /**
                 * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
                 */
                datasets?:
                    | Array<{
                        /**
                         * Output only. The origin of the dataset, one of: * (Unset) - Native BigQuery Dataset. * BIGLAKE - Dataset is backed by a namespace stored natively in Biglake.
                         */
                        catalogSource?: string | undefined;
                        /**
                         * The dataset reference. Use this property to access specific parts of the dataset's ID, such as project ID or dataset ID.
                         */
                        datasetReference?: BigQuery.Schema.DatasetReference | undefined;
                        /**
                         * Output only. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.
                         */
                        externalDatasetReference?: BigQuery.Schema.ExternalDatasetReference | undefined;
                        /**
                         * An alternate name for the dataset. The friendly name is purely decorative in nature.
                         */
                        friendlyName?: string | undefined;
                        /**
                         * The fully-qualified, unique, opaque ID of the dataset.
                         */
                        id?: string | undefined;
                        /**
                         * The resource type. This property always returns the value "bigquery#dataset"
                         */
                        kind?: string | undefined;
                        /**
                         * The labels associated with this dataset. You can use these to organize and group your datasets.
                         */
                        labels?: Record<string, string> | undefined;
                        /**
                         * The geographic location where the dataset resides.
                         */
                        location?: string | undefined;
                        /**
                         * Output only. Same as `type` in `Dataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog, * BIGLAKE_ICEBERG - a Biglake dataset accessible through the Iceberg API, * BIGLAKE_HIVE - a Biglake dataset accessible through the Hive API.
                         */
                        type?: string | undefined;
                    }>
                    | undefined;
                /**
                 * Output only. A hash value of the results page. You can use this property to determine if the page has changed since the last request.
                 */
                etag?: string | undefined;
                /**
                 * Output only. The resource type. This property always returns the value "bigquery#datasetList"
                 */
                kind?: string | undefined;
                /**
                 * A token that can be used to request the next results page. This property is omitted on the final results page.
                 */
                nextPageToken?: string | undefined;
                /**
                 * A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"
                 */
                unreachable?: string[] | undefined;
            }
            /**
             * Identifier for a dataset.
             */
            interface DatasetReference {
                /**
                 * Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
                 */
                datasetId?: string | undefined;
                /**
                 * Optional. The ID of the project containing this dataset.
                 */
                projectId?: string | undefined;
            }
            /**
             * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
             */
            interface DataSplitResult {
                /**
                 * Table reference of the evaluation data after split.
                 */
                evaluationTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Table reference of the test data after split.
                 */
                testTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Table reference of the training data after split.
                 */
                trainingTable?: BigQuery.Schema.TableReference | undefined;
            }
            /**
             * Properties for the destination table.
             */
            interface DestinationTableProperties {
                /**
                 * Optional. The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.
                 */
                description?: string | undefined;
                /**
                 * Internal use only.
                 */
                expirationTime?: string | undefined;
                /**
                 * Optional. Friendly name for the destination table. If the table already exists, it should be same as the existing friendly name.
                 */
                friendlyName?: string | undefined;
                /**
                 * Optional. The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.
                 */
                labels?: Record<string, string> | undefined;
            }
            /**
             * Represents privacy policy associated with "differential privacy" method.
             */
            interface DifferentialPrivacyPolicy {
                /**
                 * Optional. The total delta budget for all queries against the privacy-protected view. Each subscriber query against this view charges the amount of delta that is pre-defined by the contributor through the privacy policy delta_per_query field. If there is sufficient budget, then the subscriber query attempts to complete. It might still fail due to other reasons, in which case the charge is refunded. If there is insufficient budget the query is rejected. There might be multiple charge attempts if a single query references multiple views. In this case there must be sufficient budget for all charges or the query is rejected and charges are refunded in best effort. The budget does not have a refresh policy and can only be updated via ALTER VIEW or circumvented by creating a new view that can be queried with a fresh budget.
                 */
                deltaBudget?: number | undefined;
                /**
                 * Output only. The delta budget remaining. If budget is exhausted, no more queries are allowed. Note that the budget for queries that are in progress is deducted before the query executes. If the query fails or is cancelled then the budget is refunded. In this case the amount of budget remaining can increase.
                 */
                deltaBudgetRemaining?: number | undefined;
                /**
                 * Optional. The delta value that is used per query. Delta represents the probability that any row will fail to be epsilon differentially private. Indicates the risk associated with exposing aggregate rows in the result of a query.
                 */
                deltaPerQuery?: number | undefined;
                /**
                 * Optional. The total epsilon budget for all queries against the privacy-protected view. Each subscriber query against this view charges the amount of epsilon they request in their query. If there is sufficient budget, then the subscriber query attempts to complete. It might still fail due to other reasons, in which case the charge is refunded. If there is insufficient budget the query is rejected. There might be multiple charge attempts if a single query references multiple views. In this case there must be sufficient budget for all charges or the query is rejected and charges are refunded in best effort. The budget does not have a refresh policy and can only be updated via ALTER VIEW or circumvented by creating a new view that can be queried with a fresh budget.
                 */
                epsilonBudget?: number | undefined;
                /**
                 * Output only. The epsilon budget remaining. If budget is exhausted, no more queries are allowed. Note that the budget for queries that are in progress is deducted before the query executes. If the query fails or is cancelled then the budget is refunded. In this case the amount of budget remaining can increase.
                 */
                epsilonBudgetRemaining?: number | undefined;
                /**
                 * Optional. The maximum epsilon value that a query can consume. If the subscriber specifies epsilon as a parameter in a SELECT query, it must be less than or equal to this value. The epsilon parameter controls the amount of noise that is added to the groups — a higher epsilon means less noise.
                 */
                maxEpsilonPerQuery?: number | undefined;
                /**
                 * Optional. The maximum groups contributed value that is used per query. Represents the maximum number of groups to which each protected entity can contribute. Changing this value does not improve or worsen privacy. The best value for accuracy and utility depends on the query and data.
                 */
                maxGroupsContributed?: string | undefined;
                /**
                 * Optional. The privacy unit column associated with this policy. Differential privacy policies can only have one privacy unit column per data source object (table, view).
                 */
                privacyUnitColumn?: string | undefined;
            }
            /**
             * Model evaluation metrics for dimensionality reduction models.
             */
            interface DimensionalityReductionMetrics {
                /**
                 * Total percentage of variance explained by the selected principal components.
                 */
                totalExplainedVarianceRatio?: number | undefined;
            }
            /**
             * Detailed statistics for DML statements
             */
            interface DmlStatistics {
                /**
                 * Output only. Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements.
                 */
                deletedRowCount?: string | undefined;
                /**
                 * Output only. DML mode used.
                 */
                dmlMode?: string | undefined;
                /**
                 * Output only. Reason for disabling fine-grained DML if applicable.
                 */
                fineGrainedDmlUnusedReason?: string | undefined;
                /**
                 * Output only. Number of inserted Rows. Populated by DML INSERT and MERGE statements
                 */
                insertedRowCount?: string | undefined;
                /**
                 * Output only. Number of updated Rows. Populated by DML UPDATE and MERGE statements.
                 */
                updatedRowCount?: string | undefined;
            }
            /**
             * Discrete candidates of a double hyperparameter.
             */
            interface DoubleCandidates {
                /**
                 * Candidates for the double parameter in increasing order.
                 */
                candidates?: number[] | undefined;
            }
            /**
             * Search space for a double hyperparameter.
             */
            interface DoubleHparamSearchSpace {
                /**
                 * Candidates of the double hyperparameter.
                 */
                candidates?: BigQuery.Schema.DoubleCandidates | undefined;
                /**
                 * Range of the double hyperparameter.
                 */
                range?: BigQuery.Schema.DoubleRange | undefined;
            }
            /**
             * Range of a double hyperparameter.
             */
            interface DoubleRange {
                /**
                 * Max value of the double parameter.
                 */
                max?: number | undefined;
                /**
                 * Min value of the double parameter.
                 */
                min?: number | undefined;
            }
            /**
             * Configuration for Cloud KMS encryption settings.
             */
            interface EncryptionConfiguration {
                /**
                 * Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
                 */
                kmsKeyName?: string | undefined;
            }
            /**
             * A single entry in the confusion matrix.
             */
            interface Entry {
                /**
                 * Number of items being predicted as this label.
                 */
                itemCount?: string | undefined;
                /**
                 * The predicted label. For confidence_threshold \> 0, we will also add an entry indicating the number of items under the confidence threshold.
                 */
                predictedLabel?: string | undefined;
            }
            /**
             * Error details.
             */
            interface ErrorProto {
                /**
                 * Debugging information. This property is internal to Google and should not be used.
                 */
                debugInfo?: string | undefined;
                /**
                 * Specifies where the error occurred, if present.
                 */
                location?: string | undefined;
                /**
                 * A human-readable description of the error.
                 */
                message?: string | undefined;
                /**
                 * A short error code that summarizes the error.
                 */
                reason?: string | undefined;
            }
            /**
             * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
             */
            interface EvaluationMetrics {
                /**
                 * Populated for ARIMA models.
                 */
                arimaForecastingMetrics?: BigQuery.Schema.ArimaForecastingMetrics | undefined;
                /**
                 * Populated for binary classification/classifier models.
                 */
                binaryClassificationMetrics?: BigQuery.Schema.BinaryClassificationMetrics | undefined;
                /**
                 * Populated for clustering models.
                 */
                clusteringMetrics?: BigQuery.Schema.ClusteringMetrics | undefined;
                /**
                 * Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.
                 */
                dimensionalityReductionMetrics?: BigQuery.Schema.DimensionalityReductionMetrics | undefined;
                /**
                 * Populated for multi-class classification/classifier models.
                 */
                multiClassClassificationMetrics?:
                    | BigQuery.Schema.MultiClassClassificationMetrics
                    | undefined;
                /**
                 * Populated for implicit feedback type matrix factorization models.
                 */
                rankingMetrics?: BigQuery.Schema.RankingMetrics | undefined;
                /**
                 * Populated for regression models and explicit feedback type matrix factorization models.
                 */
                regressionMetrics?: BigQuery.Schema.RegressionMetrics | undefined;
            }
            /**
             * A single stage of query execution.
             */
            interface ExplainQueryStage {
                /**
                 * Number of parallel input segments completed.
                 */
                completedParallelInputs?: string | undefined;
                /**
                 * Output only. Compute mode for this stage.
                 */
                computeMode?: string | undefined;
                /**
                 * Milliseconds the average shard spent on CPU-bound tasks.
                 */
                computeMsAvg?: string | undefined;
                /**
                 * Milliseconds the slowest shard spent on CPU-bound tasks.
                 */
                computeMsMax?: string | undefined;
                /**
                 * Relative amount of time the average shard spent on CPU-bound tasks.
                 */
                computeRatioAvg?: number | undefined;
                /**
                 * Relative amount of time the slowest shard spent on CPU-bound tasks.
                 */
                computeRatioMax?: number | undefined;
                /**
                 * Stage end time represented as milliseconds since the epoch.
                 */
                endMs?: string | undefined;
                /**
                 * Unique ID for the stage within the plan.
                 */
                id?: string | undefined;
                /**
                 * IDs for stages that are inputs to this stage.
                 */
                inputStages?: string[] | undefined;
                /**
                 * Human-readable name for the stage.
                 */
                name?: string | undefined;
                /**
                 * Number of parallel input segments to be processed
                 */
                parallelInputs?: string | undefined;
                /**
                 * Milliseconds the average shard spent reading input.
                 */
                readMsAvg?: string | undefined;
                /**
                 * Milliseconds the slowest shard spent reading input.
                 */
                readMsMax?: string | undefined;
                /**
                 * Relative amount of time the average shard spent reading input.
                 */
                readRatioAvg?: number | undefined;
                /**
                 * Relative amount of time the slowest shard spent reading input.
                 */
                readRatioMax?: number | undefined;
                /**
                 * Number of records read into the stage.
                 */
                recordsRead?: string | undefined;
                /**
                 * Number of records written by the stage.
                 */
                recordsWritten?: string | undefined;
                /**
                 * Total number of bytes written to shuffle.
                 */
                shuffleOutputBytes?: string | undefined;
                /**
                 * Total number of bytes written to shuffle and spilled to disk.
                 */
                shuffleOutputBytesSpilled?: string | undefined;
                /**
                 * Slot-milliseconds used by the stage.
                 */
                slotMs?: string | undefined;
                /**
                 * Stage start time represented as milliseconds since the epoch.
                 */
                startMs?: string | undefined;
                /**
                 * Current status for this stage.
                 */
                status?: string | undefined;
                /**
                 * List of operations within the stage in dependency order (approximately chronological).
                 */
                steps?: BigQuery.Schema.ExplainQueryStep[] | undefined;
                /**
                 * Milliseconds the average shard spent waiting to be scheduled.
                 */
                waitMsAvg?: string | undefined;
                /**
                 * Milliseconds the slowest shard spent waiting to be scheduled.
                 */
                waitMsMax?: string | undefined;
                /**
                 * Relative amount of time the average shard spent waiting to be scheduled.
                 */
                waitRatioAvg?: number | undefined;
                /**
                 * Relative amount of time the slowest shard spent waiting to be scheduled.
                 */
                waitRatioMax?: number | undefined;
                /**
                 * Milliseconds the average shard spent on writing output.
                 */
                writeMsAvg?: string | undefined;
                /**
                 * Milliseconds the slowest shard spent on writing output.
                 */
                writeMsMax?: string | undefined;
                /**
                 * Relative amount of time the average shard spent on writing output.
                 */
                writeRatioAvg?: number | undefined;
                /**
                 * Relative amount of time the slowest shard spent on writing output.
                 */
                writeRatioMax?: number | undefined;
            }
            /**
             * An operation within a stage.
             */
            interface ExplainQueryStep {
                /**
                 * Machine-readable operation type.
                 */
                kind?: string | undefined;
                /**
                 * Human-readable description of the step(s).
                 */
                substeps?: string[] | undefined;
            }
            /**
             * Explanation for a single feature.
             */
            interface Explanation {
                /**
                 * Attribution of feature.
                 */
                attribution?: number | undefined;
                /**
                 * The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters.
                 */
                featureName?: string | undefined;
            }
            /**
             * Statistics for the EXPORT DATA statement as part of Query Job. EXTRACT JOB statistics are populated in JobStatistics4.
             */
            interface ExportDataStatistics {
                /**
                 * Number of destination files generated in case of EXPORT DATA statement only.
                 */
                fileCount?: string | undefined;
                /**
                 * [Alpha] Number of destination rows generated in case of EXPORT DATA statement only.
                 */
                rowCount?: string | undefined;
            }
            /**
             * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
             */
            interface Expr {
                /**
                 * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
                 */
                description?: string | undefined;
                /**
                 * Textual representation of an expression in Common Expression Language syntax.
                 */
                expression?: string | undefined;
                /**
                 * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
                 */
                location?: string | undefined;
                /**
                 * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
                 */
                title?: string | undefined;
            }
            /**
             * Options defining open source compatible datasets living in the BigQuery catalog. Contains metadata of open source database, schema, or namespace represented by the current dataset.
             */
            interface ExternalCatalogDatasetOptions {
                /**
                 * Optional. The storage location URI for all tables in the dataset. Equivalent to hive metastore's database locationUri. Maximum length of 1024 characters.
                 */
                defaultStorageLocationUri?: string | undefined;
                /**
                 * Optional. A map of key value pairs defining the parameters and properties of the open source schema. Maximum size of 2MiB.
                 */
                parameters?: Record<string, string> | undefined;
            }
            /**
             * Metadata about open source compatible table. The fields contained in these options correspond to Hive metastore's table-level properties.
             */
            interface ExternalCatalogTableOptions {
                /**
                 * Optional. A connection ID that specifies the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or Amazon S3. This connection is needed to read the open source table from BigQuery. The connection_id format must be either `..` or `projects//locations//connections/`.
                 */
                connectionId?: string | undefined;
                /**
                 * Optional. A map of the key-value pairs defining the parameters and properties of the open source table. Corresponds with Hive metastore table parameters. Maximum size of 4MiB.
                 */
                parameters?: Record<string, string> | undefined;
                /**
                 * Optional. A storage descriptor containing information about the physical storage of this table.
                 */
                storageDescriptor?: BigQuery.Schema.StorageDescriptor | undefined;
            }
            interface ExternalDataConfiguration {
                /**
                 * Try to detect schema and format options automatically. Any option specified explicitly will be honored.
                 */
                autodetect?: boolean | undefined;
                /**
                 * Optional. Additional properties to set if sourceFormat is set to AVRO.
                 */
                avroOptions?: BigQuery.Schema.AvroOptions | undefined;
                /**
                 * Optional. Additional options if sourceFormat is set to BIGTABLE.
                 */
                bigtableOptions?: BigQuery.Schema.BigtableOptions | undefined;
                /**
                 * Optional. The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats. An empty string is an invalid value.
                 */
                compression?: string | undefined;
                /**
                 * Optional. The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connection_id can have the form `{project_id\}.{location_id\};{connection_id\}` or `projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}`.
                 */
                connectionId?: string | undefined;
                /**
                 * Optional. Additional properties to set if sourceFormat is set to CSV.
                 */
                csvOptions?: BigQuery.Schema.CsvOptions | undefined;
                /**
                 * Optional. Format used to parse DATE values. Supports C-style and SQL-style values.
                 */
                dateFormat?: string | undefined;
                /**
                 * Optional. Format used to parse DATETIME values. Supports C-style and SQL-style values.
                 */
                datetimeFormat?: string | undefined;
                /**
                 * Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -\> NUMERIC; * (39,9) -\> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -\> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -\> BIGNUMERIC; * (77,38) -\> BIGNUMERIC (error if value exceeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.
                 */
                decimalTargetTypes?: string[] | undefined;
                /**
                 * Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems.
                 */
                fileSetSpecType?: string | undefined;
                /**
                 * Optional. Additional options if sourceFormat is set to GOOGLE_SHEETS.
                 */
                googleSheetsOptions?: BigQuery.Schema.GoogleSheetsOptions | undefined;
                /**
                 * Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
                 */
                hivePartitioningOptions?: BigQuery.Schema.HivePartitioningOptions | undefined;
                /**
                 * Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. ORC: This setting is ignored. Parquet: This setting is ignored.
                 */
                ignoreUnknownValues?: boolean | undefined;
                /**
                 * Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).
                 */
                jsonExtension?: string | undefined;
                /**
                 * Optional. Additional properties to set if sourceFormat is set to JSON.
                 */
                jsonOptions?: BigQuery.Schema.JsonOptions | undefined;
                /**
                 * Optional. The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats.
                 */
                maxBadRecords?: number | undefined;
                /**
                 * Optional. Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
                 */
                metadataCacheMode?: string | undefined;
                /**
                 * Optional. ObjectMetadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the source_uris. If ObjectMetadata is set, source_format should be omitted. Currently SIMPLE is the only supported Object Metadata type.
                 */
                objectMetadata?: string | undefined;
                /**
                 * Optional. Additional properties to set if sourceFormat is set to PARQUET.
                 */
                parquetOptions?: BigQuery.Schema.ParquetOptions | undefined;
                /**
                 * Optional. When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
                 */
                referenceFileSchemaUri?: string | undefined;
                /**
                 * Optional. The schema for the data. Schema is required for CSV and JSON formats if autodetect is not on. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, Avro, ORC and Parquet formats.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". For Apache Iceberg tables, specify "ICEBERG". For ORC files, specify "ORC". For Parquet files, specify "PARQUET". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
                 */
                sourceFormat?: string | undefined;
                /**
                 * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
                 */
                sourceUris?: string[] | undefined;
                /**
                 * Optional. Format used to parse TIME values. Supports C-style and SQL-style values.
                 */
                timeFormat?: string | undefined;
                /**
                 * Optional. Format used to parse TIMESTAMP values. Supports C-style and SQL-style values.
                 */
                timestampFormat?: string | undefined;
                /**
                 * Precisions (maximum number of total digits in base 10) for seconds of TIMESTAMP types that are allowed to the destination table for autodetection mode. Available for the formats: CSV, PARQUET, AVRO, and Iceberg External Table. Possible values include: Not Specified, [], or [6]: timestamp(6) for all auto detected TIMESTAMP columns [6, 12]: timestamp(6) for all auto detected TIMESTAMP columns that have less than 6 digits of subseconds. timestamp(12) for all auto detected TIMESTAMP columns that have more than 6 digits of subseconds. [12]: timestamp(12) for all auto detected TIMESTAMP columns. The order of the elements in this array is ignored. Inputs that have higher precision than the highest target precision in this array will be truncated.
                 */
                timestampTargetPrecision?: number[] | undefined;
                /**
                 * Optional. Time zone used when parsing timestamp values that do not have specific time zone information (e.g. 2024-04-20 12:34:56). The expected format is a IANA timezone string (e.g. America/Los_Angeles).
                 */
                timeZone?: string | undefined;
            }
            /**
             * Configures the access a dataset defined in an external metadata storage.
             */
            interface ExternalDatasetReference {
                /**
                 * Required. The connection id that is used to access the external_source. Format: projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}
                 */
                connection?: string | undefined;
                /**
                 * Required. External source that backs this dataset.
                 */
                externalSource?: string | undefined;
            }
            /**
             * Options for the runtime of the external system.
             */
            interface ExternalRuntimeOptions {
                /**
                 * Optional. Amount of CPU provisioned for a Python UDF container instance. For more information, see [Configure container limits for Python UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits)
                 */
                containerCpu?: number | undefined;
                /**
                 * Optional. Amount of memory provisioned for a Python UDF container instance. Format: {number\}{unit\} where unit is one of "M", "G", "Mi" and "Gi" (e.g. 1G, 512Mi). If not specified, the default value is 512Mi. For more information, see [Configure container limits for Python UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits)
                 */
                containerMemory?: string | undefined;
                /**
                 * Optional. Maximum number of requests that a Python UDF instance can handle concurrently. If absent or if `0`, the default concurrency value is used. For more information, see [Configure container limits for Python UDFs](https://cloud.google.com/bigquery/docs/user-defined-functions-python#configure-container-limits).
                 */
                containerRequestConcurrency?: string | undefined;
                /**
                 * Optional. Maximum number of rows in each batch sent to the external runtime. If absent or if 0, BigQuery dynamically decides the number of rows in a batch.
                 */
                maxBatchingRows?: string | undefined;
                /**
                 * Optional. Fully qualified name of the connection whose service account will be used to execute the code in the container. Format: ```"projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}"```
                 */
                runtimeConnection?: string | undefined;
                /**
                 * Optional. Language runtime version. Example: `python-3.11`.
                 */
                runtimeVersion?: string | undefined;
            }
            /**
             * The external service cost is a portion of the total cost, these costs are not additive with total_bytes_billed. Moreover, this field only track external service costs that will show up as BigQuery costs (e.g. training BigQuery ML job with google cloud CAIP or Automl Tables services), not other costs which may be accrued by running the query (e.g. reading from Bigtable or Cloud Storage). The external service costs with different billing sku (e.g. CAIP job is charged based on VM usage) are converted to BigQuery billed_bytes and slot_ms with equivalent amount of US dollars. Services may not directly correlate to these metrics, but these are the equivalents for billing purposes. Output only.
             */
            interface ExternalServiceCost {
                /**
                 * The billing method used for the external job. This field, set to `SERVICES_SKU`, is only used when billing under the services SKU. Otherwise, it is unspecified for backward compatibility.
                 */
                billingMethod?: string | undefined;
                /**
                 * External service cost in terms of bigquery bytes billed.
                 */
                bytesBilled?: string | undefined;
                /**
                 * External service cost in terms of bigquery bytes processed.
                 */
                bytesProcessed?: string | undefined;
                /**
                 * External service name.
                 */
                externalService?: string | undefined;
                /**
                 * Non-preemptable reserved slots used for external job. For example, reserved slots for Cloua AI Platform job are the VM usages converted to BigQuery slot with equivalent mount of price.
                 */
                reservedSlotCount?: string | undefined;
                /**
                 * External service cost in terms of bigquery slot milliseconds.
                 */
                slotMs?: string | undefined;
            }
            /**
             * Representative value of a single feature within the cluster.
             */
            interface FeatureValue {
                /**
                 * The categorical feature value.
                 */
                categoricalValue?: BigQuery.Schema.CategoricalValue | undefined;
                /**
                 * The feature column name.
                 */
                featureColumn?: string | undefined;
                /**
                 * The numerical feature value. This is the centroid value for this feature.
                 */
                numericalValue?: number | undefined;
            }
            /**
             * Metadata about the foreign data type definition such as the system in which the type is defined.
             */
            interface ForeignTypeInfo {
                /**
                 * Required. Specifies the system which defines the foreign data type.
                 */
                typeSystem?: string | undefined;
            }
            /**
             * A view can be represented in multiple ways. Each representation has its own dialect. This message stores the metadata required for these representations.
             */
            interface ForeignViewDefinition {
                /**
                 * Optional. Represents the dialect of the query.
                 */
                dialect?: string | undefined;
                /**
                 * Required. The query that defines the view.
                 */
                query?: string | undefined;
            }
            /**
             * Provides error statistics for the query job across all AI function calls.
             */
            interface GenAiErrorStats {
                /**
                 * A list of unique errors at query level (up to 5, truncated to 100 chars)
                 */
                errors?: string[] | undefined;
            }
            /**
             * Provides cache statistics for a GenAi function call.
             */
            interface GenAiFunctionCacheStats {
                /**
                 * Number of rows served from cache.
                 */
                numCacheHitRows?: string | undefined;
            }
            /**
             * Provides cost optimization statistics for a GenAi function call.
             */
            interface GenAiFunctionCostOptimizationStats {
                /**
                 * System generated message to provide insights into cost optimization state.
                 */
                message?: string | undefined;
                /**
                 * Number of rows inferred via cost optimized workflow.
                 */
                numCostOptimizedRows?: string | undefined;
            }
            /**
             * Provides error statistics for a GenAi function call.
             */
            interface GenAiFunctionErrorStats {
                /**
                 * A list of unique errors at function level (up to 5, truncated to 100 chars).
                 */
                errors?: string[] | undefined;
                /**
                 * Number of failed rows processed by the function
                 */
                numFailedRows?: string | undefined;
            }
            /**
             * Provides statistics for each Ai function call within a query.
             */
            interface GenAiFunctionStats {
                /**
                 * Cache stats for the function.
                 */
                cacheStats?: BigQuery.Schema.GenAiFunctionCacheStats | undefined;
                /**
                 * Cost optimization stats if applied on the rows processed by the function.
                 */
                costOptimizationStats?: BigQuery.Schema.GenAiFunctionCostOptimizationStats | undefined;
                /**
                 * Error stats for the function.
                 */
                errorStats?: BigQuery.Schema.GenAiFunctionErrorStats | undefined;
                /**
                 * Name of the function.
                 */
                functionName?: string | undefined;
                /**
                 * Number of rows processed by this GenAi function. This includes all cost_optimized, llm_inferred and failed_rows.
                 */
                numProcessedRows?: string | undefined;
                /**
                 * User input prompt of the function (truncated to 20 chars).
                 */
                prompt?: string | undefined;
            }
            /**
             * GenAi stats for the query job.
             */
            interface GenAiStats {
                /**
                 * Job level error stats across all GenAi functions
                 */
                errorStats?: BigQuery.Schema.GenAiErrorStats | undefined;
                /**
                 * Function level stats for GenAI Functions. For more information, see [Generative AI overview](https://docs.cloud.google.com/bigquery/docs/generative-ai-overview).
                 */
                functionStats?: BigQuery.Schema.GenAiFunctionStats[] | undefined;
            }
            /**
             * Optional. Definition of how values are generated for the field. Only valid for top-level schema fields (not nested fields).
             */
            interface GeneratedColumn {
                /**
                 * Definition of the expression used to generate the field.
                 */
                generatedExpressionInfo?: BigQuery.Schema.GeneratedExpressionInfo | undefined;
                /**
                 * Optional. Dictates when system generated values are used to populate the field.
                 */
                generatedMode?: string | undefined;
            }
            /**
             * Definition of the expression used to generate the field.
             */
            interface GeneratedExpressionInfo {
                /**
                 * Optional. Whether the column generation is done asynchronously.
                 */
                asynchronous?: boolean | undefined;
                /**
                 * Optional. The generation expression (e.g. AI.EMBED(...)) used to generate the field.
                 */
                generationExpression?: string | undefined;
                /**
                 * Optional. Whether the generated column is stored in the table.
                 */
                stored?: boolean | undefined;
            }
            /**
             * Request message for `GetIamPolicy` method.
             */
            interface GetIamPolicyRequest {
                /**
                 * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
                 */
                options?: BigQuery.Schema.GetPolicyOptions | undefined;
            }
            /**
             * Encapsulates settings provided to GetIamPolicy.
             */
            interface GetPolicyOptions {
                /**
                 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                 */
                requestedPolicyVersion?: number | undefined;
            }
            /**
             * Response object of GetQueryResults.
             */
            interface GetQueryResultsResponse {
                /**
                 * Whether the query result was fetched from the query cache.
                 */
                cacheHit?: boolean | undefined;
                /**
                 * Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).
                 */
                errors?: BigQuery.Schema.ErrorProto[] | undefined;
                /**
                 * A hash of this response.
                 */
                etag?: string | undefined;
                /**
                 * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
                 */
                jobComplete?: boolean | undefined;
                /**
                 * Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
                 */
                jobReference?: BigQuery.Schema.JobReference | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
                /**
                 * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                 */
                numDmlAffectedRows?: string | undefined;
                /**
                 * A token used for paging results. When this token is non-empty, it indicates additional results are available.
                 */
                pageToken?: string | undefined;
                /**
                 * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values.
                 */
                rows?: BigQuery.Schema.TableRow[] | undefined;
                /**
                 * The schema of the results. Present only when the query completes successfully.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * The total number of bytes processed for this query.
                 */
                totalBytesProcessed?: string | undefined;
                /**
                 * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
                 */
                totalRows?: string | undefined;
            }
            /**
             * Response object of GetServiceAccount
             */
            interface GetServiceAccountResponse {
                /**
                 * The service account email address.
                 */
                email?: string | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
            }
            /**
             * Global explanations containing the top most important features after training.
             */
            interface GlobalExplanation {
                /**
                 * Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order.
                 */
                classLabel?: string | undefined;
                /**
                 * A list of the top global explanations. Sorted by absolute value of attribution in descending order.
                 */
                explanations?: BigQuery.Schema.Explanation[] | undefined;
            }
            /**
             * Options specific to Google Sheets data sources.
             */
            interface GoogleSheetsOptions {
                /**
                 * Optional. Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
                 */
                range?: string | undefined;
                /**
                 * Optional. The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
                 */
                skipLeadingRows?: string | undefined;
            }
            /**
             * High cardinality join detailed information.
             */
            interface HighCardinalityJoin {
                /**
                 * Output only. Count of left input rows.
                 */
                leftRows?: string | undefined;
                /**
                 * Output only. Count of the output rows.
                 */
                outputRows?: string | undefined;
                /**
                 * Output only. Count of right input rows.
                 */
                rightRows?: string | undefined;
                /**
                 * Output only. The index of the join operator in the ExplainQueryStep lists.
                 */
                stepIndex?: number | undefined;
            }
            /**
             * Options for configuring hive partitioning detect.
             */
            interface HivePartitioningOptions {
                /**
                 * Output only. For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field.
                 */
                fields?: string[] | undefined;
                /**
                 * Optional. When set, what mode of hive partitioning to use when reading data. The following modes are supported: * AUTO: automatically infer partition key name(s) and type(s). * STRINGS: automatically infer partition key name(s). All types are strings. * CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported formats are: JSON, CSV, ORC, Avro and Parquet.
                 */
                mode?: string | undefined;
                /**
                 * Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with require_partition_filter explicitly set to true will fail.
                 */
                requirePartitionFilter?: boolean | undefined;
                /**
                 * Optional. When hive partition detection is requested, a common prefix for all source uris must be required. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout: gs://bucket/path_to_table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path_to_table/dt=2019-05-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/. CUSTOM detection requires encoding the partitioning schema immediately after the common prefix. For CUSTOM, any of * gs://bucket/path_to_table/{dt:DATE\}/{country:STRING\}/{id:INTEGER\} * gs://bucket/path_to_table/{dt:STRING\}/{country:STRING\}/{id:INTEGER\} * gs://bucket/path_to_table/{dt:DATE\}/{country:STRING\}/{id:STRING\} would all be valid source URI prefixes.
                 */
                sourceUriPrefix?: string | undefined;
            }
            /**
             * Hyperparameter search spaces. These should be a subset of training_options.
             */
            interface HparamSearchSpaces {
                /**
                 * Activation functions of neural network models.
                 */
                activationFn?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                /**
                 * Mini batch sample size.
                 */
                batchSize?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Booster type for boosted tree models.
                 */
                boosterType?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                /**
                 * Subsample ratio of columns for each level for boosted tree models.
                 */
                colsampleBylevel?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Subsample ratio of columns for each node(split) for boosted tree models.
                 */
                colsampleBynode?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Subsample ratio of columns when constructing each tree for boosted tree models.
                 */
                colsampleBytree?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Dart normalization type for boosted tree models.
                 */
                dartNormalizeType?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                /**
                 * Dropout probability for dnn model training and boosted tree models using dart booster.
                 */
                dropout?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Hidden units for neural network models.
                 */
                hiddenUnits?: BigQuery.Schema.IntArrayHparamSearchSpace | undefined;
                /**
                 * L1 regularization coefficient.
                 */
                l1Reg?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * L2 regularization coefficient.
                 */
                l2Reg?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Learning rate of training jobs.
                 */
                learnRate?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Maximum depth of a tree for boosted tree models.
                 */
                maxTreeDepth?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Minimum split loss for boosted tree models.
                 */
                minSplitLoss?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Minimum sum of instance weight needed in a child for boosted tree models.
                 */
                minTreeChildWeight?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Number of clusters for k-means.
                 */
                numClusters?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Number of latent factors to train on.
                 */
                numFactors?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Number of parallel trees for boosted tree models.
                 */
                numParallelTree?: BigQuery.Schema.IntHparamSearchSpace | undefined;
                /**
                 * Optimizer of TF models.
                 */
                optimizer?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                /**
                 * Subsample the training data to grow tree to prevent overfitting for boosted tree models.
                 */
                subsample?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
                /**
                 * Tree construction algorithm for boosted tree models.
                 */
                treeMethod?: BigQuery.Schema.StringHparamSearchSpace | undefined;
                /**
                 * Hyperparameter for matrix factoration when implicit feedback type is specified.
                 */
                walsAlpha?: BigQuery.Schema.DoubleHparamSearchSpace | undefined;
            }
            /**
             * Training info of a trial in [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
             */
            interface HparamTuningTrial {
                /**
                 * Ending time of the trial.
                 */
                endTimeMs?: string | undefined;
                /**
                 * Error message for FAILED and INFEASIBLE trial.
                 */
                errorMessage?: string | undefined;
                /**
                 * Loss computed on the eval data at the end of trial.
                 */
                evalLoss?: number | undefined;
                /**
                 * Evaluation metrics of this trial calculated on the test data. Empty in Job API.
                 */
                evaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                /**
                 * The hyperprameters selected for this trial.
                 */
                hparams?: BigQuery.Schema.TrainingOptions | undefined;
                /**
                 * Hyperparameter tuning evaluation metrics of this trial calculated on the eval data. Unlike evaluation_metrics, only the fields corresponding to the hparam_tuning_objectives are set.
                 */
                hparamTuningEvaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                /**
                 * Starting time of the trial.
                 */
                startTimeMs?: string | undefined;
                /**
                 * The status of the trial.
                 */
                status?: string | undefined;
                /**
                 * Loss computed on the training data at the end of trial.
                 */
                trainingLoss?: number | undefined;
                /**
                 * 1-based index of the trial.
                 */
                trialId?: string | undefined;
            }
            /**
             * Statistics related to Incremental Query Results. Populated as part of JobStatistics2. This feature is not yet available.
             */
            interface IncrementalResultStats {
                /**
                 * Output only. Reason why incremental query results are/were not written by the query.
                 */
                disabledReason?: string | undefined;
                /**
                 * Output only. Additional human-readable clarification, if available, for DisabledReason.
                 */
                disabledReasonDetails?: string | undefined;
                /**
                 * Output only. The time at which the first incremental result was written. If the query needed to restart internally, this only describes the final attempt.
                 */
                firstIncrementalRowTime?: string | undefined;
                /**
                 * Output only. Number of rows that were in the latest result set before query completion.
                 */
                incrementalRowCount?: string | undefined;
                /**
                 * Output only. The time at which the last incremental result was written. Does not include the final result written after query completion.
                 */
                lastIncrementalRowTime?: string | undefined;
                /**
                 * Output only. The time at which the result table's contents were modified. May be absent if no results have been written or the query has completed.
                 */
                resultSetLastModifyTime?: string | undefined;
                /**
                 * Output only. The time at which the result table's contents were completely replaced. May be absent if no results have been written or the query has completed.
                 */
                resultSetLastReplaceTime?: string | undefined;
            }
            /**
             * Statistics for index pruning.
             */
            interface IndexPruningStats {
                /**
                 * The base table reference.
                 */
                baseTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * The index id.
                 */
                indexId?: string | undefined;
                /**
                 * The number of parallel inputs after index pruning.
                 */
                postIndexPruningParallelInputCount?: string | undefined;
                /**
                 * The number of parallel inputs before index pruning.
                 */
                preIndexPruningParallelInputCount?: string | undefined;
            }
            /**
             * Reason about why no search index was used in the search query (or sub-query).
             */
            interface IndexUnusedReason {
                /**
                 * Specifies the base table involved in the reason that no search index was used.
                 */
                baseTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Specifies the high-level reason for the scenario when no search index was used.
                 */
                code?: string | undefined;
                /**
                 * Specifies the name of the unused search index, if available.
                 */
                indexName?: string | undefined;
                /**
                 * Free form human-readable reason for the scenario when no search index was used.
                 */
                message?: string | undefined;
            }
            /**
             * Details about the input data change insight.
             */
            interface InputDataChange {
                /**
                 * Output only. Records read difference percentage compared to a previous run.
                 */
                recordsReadDiffPercentage?: number | undefined;
            }
            /**
             * An array of int.
             */
            interface IntArray {
                /**
                 * Elements in the int array.
                 */
                elements?: string[] | undefined;
            }
            /**
             * Search space for int array.
             */
            interface IntArrayHparamSearchSpace {
                /**
                 * Candidates for the int array parameter.
                 */
                candidates?: BigQuery.Schema.IntArray[] | undefined;
            }
            /**
             * Discrete candidates of an int hyperparameter.
             */
            interface IntCandidates {
                /**
                 * Candidates for the int parameter in increasing order.
                 */
                candidates?: string[] | undefined;
            }
            /**
             * Search space for an int hyperparameter.
             */
            interface IntHparamSearchSpace {
                /**
                 * Candidates of the int hyperparameter.
                 */
                candidates?: BigQuery.Schema.IntCandidates | undefined;
                /**
                 * Range of the int hyperparameter.
                 */
                range?: BigQuery.Schema.IntRange | undefined;
            }
            /**
             * Range of an int hyperparameter.
             */
            interface IntRange {
                /**
                 * Max value of the int parameter.
                 */
                max?: string | undefined;
                /**
                 * Min value of the int parameter.
                 */
                min?: string | undefined;
            }
            /**
             * Information about a single iteration of the training run.
             */
            interface IterationResult {
                /**
                 * Arima result.
                 */
                arimaResult?: BigQuery.Schema.ArimaResult | undefined;
                /**
                 * Information about top clusters for clustering models.
                 */
                clusterInfos?: BigQuery.Schema.ClusterInfo[] | undefined;
                /**
                 * Time taken to run the iteration in milliseconds.
                 */
                durationMs?: string | undefined;
                /**
                 * Loss computed on the eval data at the end of iteration.
                 */
                evalLoss?: number | undefined;
                /**
                 * Index of the iteration, 0 based.
                 */
                index?: number | undefined;
                /**
                 * Learn rate used for this iteration.
                 */
                learnRate?: number | undefined;
                /**
                 * The information of the principal components.
                 */
                principalComponentInfos?: BigQuery.Schema.PrincipalComponentInfo[] | undefined;
                /**
                 * Loss computed on the training data at the end of iteration.
                 */
                trainingLoss?: number | undefined;
            }
            interface Job {
                /**
                 * Required. Describes the job configuration.
                 */
                configuration?: BigQuery.Schema.JobConfiguration | undefined;
                /**
                 * Output only. A hash of this resource.
                 */
                etag?: string | undefined;
                /**
                 * Output only. Opaque ID field of the job.
                 */
                id?: string | undefined;
                /**
                 * Output only. The reason why a Job was created.
                 */
                jobCreationReason?: BigQuery.Schema.JobCreationReason | undefined;
                /**
                 * Optional. Reference describing the unique-per-user name of the job.
                 */
                jobReference?: BigQuery.Schema.JobReference | undefined;
                /**
                 * Output only. The type of the resource.
                 */
                kind?: string | undefined;
                /**
                 * Output only. [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.
                 */
                principal_subject?: string | undefined;
                /**
                 * Output only. A URL that can be used to access the resource again.
                 */
                selfLink?: string | undefined;
                /**
                 * Output only. Information about the job, including starting time and ending time of the job.
                 */
                statistics?: BigQuery.Schema.JobStatistics | undefined;
                /**
                 * Output only. The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
                 */
                status?: BigQuery.Schema.JobStatus | undefined;
                /**
                 * Output only. Email address of the user who ran the job.
                 */
                user_email?: string | undefined;
            }
            /**
             * Describes format of a jobs cancellation response.
             */
            interface JobCancelResponse {
                /**
                 * The final state of the job.
                 */
                job?: BigQuery.Schema.Job | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
            }
            interface JobConfiguration {
                /**
                 * [Pick one] Copies a table.
                 */
                copy?: BigQuery.Schema.JobConfigurationTableCopy | undefined;
                /**
                 * Optional. If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
                 */
                dryRun?: boolean | undefined;
                /**
                 * [Pick one] Configures an extract job.
                 */
                extract?: BigQuery.Schema.JobConfigurationExtract | undefined;
                /**
                 * Optional. Job timeout in milliseconds relative to the job creation time. If this time limit is exceeded, BigQuery attempts to stop the job, but might not always succeed in canceling it before the job completes. For example, a job that takes more than 60 seconds to complete has a better chance of being stopped than a job that takes 10 seconds to complete.
                 */
                jobTimeoutMs?: string | undefined;
                /**
                 * Output only. The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
                 */
                jobType?: string | undefined;
                /**
                 * The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
                 */
                labels?: Record<string, string> | undefined;
                /**
                 * [Pick one] Configures a load job.
                 */
                load?: BigQuery.Schema.JobConfigurationLoad | undefined;
                /**
                 * Optional. A target limit on the rate of slot consumption by this job. If set to a value \> 0, BigQuery will attempt to limit the rate of slot consumption by this job to keep it below the configured limit, even if the job is eligible for more slots based on fair scheduling. The unused slots will be available for other jobs and queries to use. Note: This feature is not yet generally available.
                 */
                maxSlots?: number | undefined;
                /**
                 * [Pick one] Configures a query job.
                 */
                query?: BigQuery.Schema.JobConfigurationQuery | undefined;
                /**
                 * Optional. The reservation that job would use. User can specify a reservation to execute the job. If reservation is not set, reservation is determined based on the rules defined by the reservation assignments. The expected format is `projects/{project\}/locations/{location\}/reservations/{reservation\}`. Forces the query to use on-demand billing when set to `none`, which requires the project or organization to have `reservation_override_mode` set to `ALLOW_ANY_OVERRIDE`.
                 */
                reservation?: string | undefined;
            }
            /**
             * JobConfigurationExtract configures a job that exports data from a BigQuery table into Google Cloud Storage.
             */
            interface JobConfigurationExtract {
                /**
                 * Optional. The compression type to use for exported files. Possible values include DEFLATE, GZIP, NONE, SNAPPY, and ZSTD. The default value is NONE. Not all compression formats are support for all file formats. DEFLATE is only supported for Avro. ZSTD is only supported for Parquet. Not applicable when extracting models.
                 */
                compression?: string | undefined;
                /**
                 * Optional. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET, or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.
                 */
                destinationFormat?: string | undefined;
                /**
                 * [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
                 */
                destinationUri?: string | undefined;
                /**
                 * [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
                 */
                destinationUris?: string[] | undefined;
                /**
                 * Optional. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.
                 */
                fieldDelimiter?: string | undefined;
                /**
                 * Optional. Model extract options only applicable when extracting models.
                 */
                modelExtractOptions?: BigQuery.Schema.ModelExtractOptions | undefined;
                /**
                 * Optional. Whether to print out a header row in the results. Default is true. Not applicable when extracting models.
                 */
                printHeader?: boolean | undefined;
                /**
                 * A reference to the model being exported.
                 */
                sourceModel?: BigQuery.Schema.ModelReference | undefined;
                /**
                 * A reference to the table being exported.
                 */
                sourceTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Whether to use logical types when extracting to AVRO format. Not applicable when extracting models.
                 */
                useAvroLogicalTypes?: boolean | undefined;
            }
            /**
             * JobConfigurationLoad contains the configuration properties for loading data into a destination table.
             */
            interface JobConfigurationLoad {
                /**
                 * Optional. Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
                 */
                allowJaggedRows?: boolean | undefined;
                /**
                 * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
                 */
                allowQuotedNewlines?: boolean | undefined;
                /**
                 * Optional. Indicates if we should automatically infer the options and schema for CSV and JSON sources.
                 */
                autodetect?: boolean | undefined;
                /**
                 * Clustering specification for the destination table.
                 */
                clustering?: BigQuery.Schema.Clustering | undefined;
                /**
                 * Optional. Character map supported for column names in CSV/Parquet loads. Defaults to STRICT and can be overridden by Project Config Service. Using this option with unsupporting load formats will result in an error.
                 */
                columnNameCharacterMap?: string | undefined;
                /**
                 * Optional. Connection properties which can modify the load job behavior. Currently, only the 'session_id' connection property is supported, and is used to resolve _SESSION appearing as the dataset id.
                 */
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                /**
                 * Optional. [Experimental] Configures the load job to copy files directly to the destination BigLake managed table, bypassing file content reading and rewriting. Copying files only is supported when all the following are true: * `source_uris` are located in the same Cloud Storage location as the destination table's `storage_uri` location. * `source_format` is `PARQUET`. * `destination_table` is an existing BigLake managed table. The table's schema does not have flexible column names. The table's columns do not have type parameters other than precision and scale. * No options other than the above are specified.
                 */
                copyFilesOnly?: boolean | undefined;
                /**
                 * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                createDisposition?: string | undefined;
                /**
                 * Optional. If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
                 */
                createSession?: boolean | undefined;
                /**
                 * Optional. Date format used for parsing DATE values.
                 */
                dateFormat?: string | undefined;
                /**
                 * Optional. Date format used for parsing DATETIME values.
                 */
                datetimeFormat?: string | undefined;
                /**
                 * Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -\> NUMERIC; * (39,9) -\> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -\> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -\> BIGNUMERIC; * (77,38) -\> BIGNUMERIC (error if value exceeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.
                 */
                decimalTargetTypes?: string[] | undefined;
                /**
                 * Custom encryption configuration (e.g., Cloud KMS keys)
                 */
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * [Required] The destination table to load the data into.
                 */
                destinationTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Optional. [Experimental] Properties with which to create the destination table if it is new.
                 */
                destinationTableProperties?: BigQuery.Schema.DestinationTableProperties | undefined;
                /**
                 * Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the `quote` and `fieldDelimiter` properties. If you don't specify an encoding, or if you specify a UTF-8 encoding when the CSV file is not UTF-8 encoded, BigQuery attempts to convert the data to UTF-8. Generally, your data loads successfully, but it may not match byte-for-byte what you expect. To avoid this, specify the correct encoding by using the `--encoding` flag. If BigQuery can't convert a character other than the ASCII `0` character, BigQuery converts the character to the standard Unicode replacement character: �.
                 */
                encoding?: string | undefined;
                /**
                 * Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
                 */
                fieldDelimiter?: string | undefined;
                /**
                 * Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default, source URIs are expanded against the underlying storage. You can also specify manifest files to control how the file set is constructed. This option is only applicable to object storage systems.
                 */
                fileSetSpecType?: string | undefined;
                /**
                 * Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
                 */
                hivePartitioningOptions?: BigQuery.Schema.HivePartitioningOptions | undefined;
                /**
                 * Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names in the table schema Avro, Parquet, ORC: Fields in the file schema that don't exist in the table schema.
                 */
                ignoreUnknownValues?: boolean | undefined;
                /**
                 * Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).
                 */
                jsonExtension?: string | undefined;
                /**
                 * Optional. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This is only supported for CSV and NEWLINE_DELIMITED_JSON file formats.
                 */
                maxBadRecords?: number | undefined;
                /**
                 * Optional. Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
                 */
                nullMarker?: string | undefined;
                /**
                 * Optional. A list of strings represented as SQL NULL value in a CSV file. null_marker and null_markers can't be set at the same time. If null_marker is set, null_markers has to be not set. If null_markers is set, null_marker has to be not set. If both null_marker and null_markers are set at the same time, a user error would be thrown. Any strings listed in null_markers, including empty string would be interpreted as SQL NULL. This applies to all column types.
                 */
                nullMarkers?: string[] | undefined;
                /**
                 * Optional. Additional properties to set if sourceFormat is set to PARQUET.
                 */
                parquetOptions?: BigQuery.Schema.ParquetOptions | undefined;
                /**
                 * Optional. When sourceFormat is set to "CSV", this indicates whether the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
                 */
                preserveAsciiControlCharacters?: boolean | undefined;
                /**
                 * If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
                 */
                projectionFields?: string[] | undefined;
                /**
                 * Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '. @default "
                 */
                quote?: string | undefined;
                /**
                 * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
                 */
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                /**
                 * Optional. The user can provide a reference file with the reader schema. This file is only loaded if it is part of source URIs, but is not loaded otherwise. It is enabled for the following formats: AVRO, PARQUET, ORC.
                 */
                referenceFileSchemaUri?: string | undefined;
                /**
                 * Optional. The schema for the destination table. The schema can be omitted if the destination table already exists, or if you're loading data from Google Cloud Datastore.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
                 */
                schemaInline?: string | undefined;
                /**
                 * [Deprecated] The format of the schemaInline property.
                 */
                schemaInlineFormat?: string | undefined;
                /**
                 * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in three cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE_DATA; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
                 */
                schemaUpdateOptions?: string[] | undefined;
                /**
                 * Optional. The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
                 */
                skipLeadingRows?: number | undefined;
                /**
                 * Optional. Controls the strategy used to match loaded columns to the schema. If not set, a sensible default is chosen based on how the schema is provided. If autodetect is used, then columns are matched by name. Otherwise, columns are matched by position. This is done to keep the behavior backward-compatible.
                 */
                sourceColumnMatch?: string | undefined;
                /**
                 * Optional. The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV.
                 */
                sourceFormat?: string | undefined;
                /**
                 * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
                 */
                sourceUris?: string[] | undefined;
                /**
                 * Optional. Date format used for parsing TIME values.
                 */
                timeFormat?: string | undefined;
                /**
                 * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
                 */
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                /**
                 * Optional. Date format used for parsing TIMESTAMP values.
                 */
                timestampFormat?: string | undefined;
                /**
                 * Precisions (maximum number of total digits in base 10) for seconds of TIMESTAMP types that are allowed to the destination table for autodetection mode. Available for the formats: CSV, PARQUET, AVRO, and Iceberg External Table. Possible values include: Not Specified, [], or [6]: timestamp(6) for all auto detected TIMESTAMP columns [6, 12]: timestamp(6) for all auto detected TIMESTAMP columns that have less than 6 digits of subseconds. timestamp(12) for all auto detected TIMESTAMP columns that have more than 6 digits of subseconds. [12]: timestamp(12) for all auto detected TIMESTAMP columns. The order of the elements in this array is ignored. Inputs that have higher precision than the highest target precision in this array will be truncated.
                 */
                timestampTargetPrecision?: number[] | undefined;
                /**
                 * Optional. Default time zone that will apply when parsing timestamp values that have no specific time zone.
                 */
                timeZone?: string | undefined;
                /**
                 * Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
                 */
                useAvroLogicalTypes?: boolean | undefined;
                /**
                 * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints and uses the schema from the load job. * WRITE_TRUNCATE_DATA: If the table already exists, BigQuery overwrites the data, but keeps the constraints and schema of the existing table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                writeDisposition?: string | undefined;
            }
            /**
             * JobConfigurationQuery configures a BigQuery query job.
             */
            interface JobConfigurationQuery {
                /**
                 * Optional. If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For GoogleSQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
                 */
                allowLargeResults?: boolean | undefined;
                /**
                 * Clustering specification for the destination table.
                 */
                clustering?: BigQuery.Schema.Clustering | undefined;
                /**
                 * Connection properties which can modify the query behavior.
                 */
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                /**
                 * [Optional] Specifies whether the query should be executed as a continuous query. The default value is false.
                 */
                continuous?: boolean | undefined;
                /**
                 * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                createDisposition?: string | undefined;
                /**
                 * If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
                 */
                createSession?: boolean | undefined;
                /**
                 * Optional. Specifies the default dataset to use for unqualified table names in the query. This setting does not alter behavior of unqualified dataset names. Setting the system variable `@@dataset_id` achieves the same behavior. See https://cloud.google.com/bigquery/docs/reference/system-variables for more information on system variables.
                 */
                defaultDataset?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Custom encryption configuration (e.g., Cloud KMS keys)
                 */
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * Optional. Describes the table where the query results should be stored. This property must be set for large results that exceed the maximum response size. For queries that produce anonymous (cached) results, this field will be populated by BigQuery.
                 */
                destinationTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Optional. If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For GoogleSQL queries, this flag is ignored and results are never flattened.
                 */
                flattenResults?: boolean | undefined;
                /**
                 * Optional. [Deprecated] Maximum billing tier allowed for this query. The billing tier controls the amount of compute resources allotted to the query, and multiplies the on-demand cost of the query accordingly. A query that runs within its allotted resources will succeed and indicate its billing tier in statistics.query.billingTier, but if the query exceeds its allotted resources, it will fail with billingTierLimitExceeded. WARNING: The billed byte amount can be multiplied by an amount up to this number! Most users should not need to alter this setting, and we recommend that you avoid introducing new uses of it.
                 */
                maximumBillingTier?: number | undefined;
                /**
                 * Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
                 */
                maximumBytesBilled?: string | undefined;
                /**
                 * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
                 */
                parameterMode?: string | undefined;
                /**
                 * [Deprecated] This property is deprecated.
                 */
                preserveNulls?: boolean | undefined;
                /**
                 * Optional. Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
                 */
                priority?: string | undefined;
                /**
                 * [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or GoogleSQL.
                 */
                query?: string | undefined;
                /**
                 * Query parameters for GoogleSQL queries.
                 */
                queryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
                /**
                 * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
                 */
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                /**
                 * Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in three cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE_DATA; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
                 */
                schemaUpdateOptions?: string[] | undefined;
                /**
                 * Options controlling the execution of scripts.
                 */
                scriptOptions?: BigQuery.Schema.ScriptOptions | undefined;
                /**
                 * Output only. System variables for GoogleSQL queries. A system variable is output if the variable is settable and its value differs from the system default. "@@" prefix is not included in the name of the System variables.
                 */
                systemVariables?: BigQuery.Schema.SystemVariables | undefined;
                /**
                 * Optional. You can specify external table definitions, which operate as ephemeral tables that can be queried. These definitions are configured using a JSON map, where the string key represents the table identifier, and the value is the corresponding external data configuration object.
                 */
                tableDefinitions?: Record<string, BigQuery.Schema.ExternalDataConfiguration> | undefined;
                /**
                 * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
                 */
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                /**
                 * Optional. Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query uses BigQuery's [GoogleSQL](https://docs.cloud.google.com/bigquery/docs/introduction-sql). When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
                 */
                useLegacySql?: boolean | undefined;
                /**
                 * Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
                 */
                useQueryCache?: boolean | undefined;
                /**
                 * Describes user-defined function resources used in the query.
                 */
                userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
                /**
                 * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints, and uses the schema from the query result. * WRITE_TRUNCATE_DATA: If the table already exists, BigQuery overwrites the data, but keeps the constraints and schema of the existing table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                writeDisposition?: string | undefined;
                /**
                 * Optional. This is only supported for a SELECT query using a temporary table. If set, the query is allowed to write results incrementally to the temporary result table. This may incur a performance penalty. This option cannot be used with Legacy SQL. This feature is not yet available.
                 */
                writeIncrementalResults?: boolean | undefined;
            }
            /**
             * JobConfigurationTableCopy configures a job that copies data from one table to another. For more information on copying tables, see [Copy a table](https://cloud.google.com/bigquery/docs/managing-tables#copy-table).
             */
            interface JobConfigurationTableCopy {
                /**
                 * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                createDisposition?: string | undefined;
                /**
                 * Custom encryption configuration (e.g., Cloud KMS keys).
                 */
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * Optional. The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.
                 */
                destinationExpirationTime?: string | undefined;
                /**
                 * [Required] The destination table.
                 */
                destinationTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Optional. Supported operation types in table copy job.
                 */
                operationType?: string | undefined;
                /**
                 * [Pick one] Source table to copy.
                 */
                sourceTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * [Pick one] Source tables to copy.
                 */
                sourceTables?: BigQuery.Schema.TableReference[] | undefined;
                /**
                 * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema and table constraints from the source table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
                 */
                writeDisposition?: string | undefined;
            }
            /**
             * Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`.
             */
            interface JobCreationReason {
                /**
                 * Output only. Specifies the high level reason why a Job was created.
                 */
                code?: string | undefined;
            }
            /**
             * JobList is the response format for a jobs.list call.
             */
            interface JobList {
                /**
                 * A hash of this page of results.
                 */
                etag?: string | undefined;
                /**
                 * List of jobs that were requested.
                 */
                jobs?:
                    | Array<{
                        /**
                         * Required. Describes the job configuration.
                         */
                        configuration?: BigQuery.Schema.JobConfiguration | undefined;
                        /**
                         * A result object that will be present only if the job has failed.
                         */
                        errorResult?: BigQuery.Schema.ErrorProto | undefined;
                        /**
                         * Unique opaque ID of the job.
                         */
                        id?: string | undefined;
                        /**
                         * Unique opaque ID of the job.
                         */
                        jobReference?: BigQuery.Schema.JobReference | undefined;
                        /**
                         * The resource type.
                         */
                        kind?: string | undefined;
                        /**
                         * [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.
                         */
                        principal_subject?: string | undefined;
                        /**
                         * Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed.
                         */
                        state?: string | undefined;
                        /**
                         * Output only. Information about the job, including starting time and ending time of the job.
                         */
                        statistics?: BigQuery.Schema.JobStatistics | undefined;
                        /**
                         * [Full-projection-only] Describes the status of this job.
                         */
                        status?: BigQuery.Schema.JobStatus | undefined;
                        /**
                         * [Full-projection-only] Email address of the user who ran the job.
                         */
                        user_email?: string | undefined;
                    }>
                    | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
                /**
                 * A token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
                /**
                 * A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"
                 */
                unreachable?: string[] | undefined;
            }
            /**
             * A job reference is a fully qualified identifier for referring to a job.
             */
            interface JobReference {
                /**
                 * Required. The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
                 */
                jobId?: string | undefined;
                /**
                 * Optional. The geographic location of the job. The default value is US. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations
                 */
                location?: string | undefined;
                /**
                 * Required. The ID of the project containing this job.
                 */
                projectId?: string | undefined;
            }
            /**
             * Statistics for a single job execution.
             */
            interface JobStatistics {
                /**
                 * Output only. [TrustedTester] Job progress (0.0 -\> 1.0) for LOAD and EXTRACT jobs.
                 */
                completionRatio?: number | undefined;
                /**
                 * Output only. Statistics for a copy job.
                 */
                copy?: BigQuery.Schema.JobStatistics5 | undefined;
                /**
                 * Output only. Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
                 */
                creationTime?: string | undefined;
                /**
                 * Output only. Statistics for data-masking. Present only for query and extract jobs.
                 */
                dataMaskingStatistics?: BigQuery.Schema.DataMaskingStatistics | undefined;
                /**
                 * Output only. Name of edition corresponding to the reservation for this job at the time of this update.
                 */
                edition?: string | undefined;
                /**
                 * Output only. End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
                 */
                endTime?: string | undefined;
                /**
                 * Output only. Statistics for an extract job.
                 */
                extract?: BigQuery.Schema.JobStatistics4 | undefined;
                /**
                 * Output only. The duration in milliseconds of the execution of the final attempt of this job, as BigQuery may internally re-attempt to execute the job.
                 */
                finalExecutionDurationMs?: string | undefined;
                /**
                 * Output only. Regions where the global query accesses data.
                 */
                globalQueryRemoteRegions?: string[] | undefined;
                /**
                 * Output only. Statistics for a load job.
                 */
                load?: BigQuery.Schema.JobStatistics3 | undefined;
                /**
                 * Output only. Number of child jobs executed.
                 */
                numChildJobs?: string | undefined;
                /**
                 * Output only. The global query that created this job.
                 */
                parentGlobalQueryJob?: BigQuery.Schema.JobReference | undefined;
                /**
                 * Output only. If this is a child job, specifies the job ID of the parent.
                 */
                parentJobId?: string | undefined;
                /**
                 * Output only. Statistics for a query job.
                 */
                query?: BigQuery.Schema.JobStatistics2 | undefined;
                /**
                 * Output only. Quotas which delayed this job's start time.
                 */
                quotaDeferments?: string[] | undefined;
                /**
                 * Output only. The reservation group path of the reservation assigned to this job. This field has a limit of 10 nested reservation groups. This is to maintain consistency between reservatins info schema and jobs info schema. The first reservation group is the root reservation group and the last is the leaf or lowest level reservation group.
                 */
                reservationGroupPath?: string[] | undefined;
                /**
                 * Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
                 * @deprecated
                 */
                reservationUsage?:
                    | Array<{
                        /**
                         * Reservation name or "unreserved" for on-demand resource usage and multi-statement queries.
                         */
                        name?: string | undefined;
                        /**
                         * Total slot milliseconds used by the reservation for a particular job.
                         */
                        slotMs?: string | undefined;
                    }>
                    | undefined;
                /**
                 * Output only. Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
                 */
                reservation_id?: string | undefined;
                /**
                 * Output only. Statistics for row-level security. Present only for query and extract jobs.
                 */
                rowLevelSecurityStatistics?: BigQuery.Schema.RowLevelSecurityStatistics | undefined;
                /**
                 * Output only. If this a child job of a script, specifies information about the context of this job within the script.
                 */
                scriptStatistics?: BigQuery.Schema.ScriptStatistics | undefined;
                /**
                 * Output only. Information of the session if this job is part of one.
                 */
                sessionInfo?: BigQuery.Schema.SessionInfo | undefined;
                /**
                 * Output only. Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
                 */
                startTime?: string | undefined;
                /**
                 * Output only. Total bytes processed for the job.
                 */
                totalBytesProcessed?: string | undefined;
                /**
                 * Output only. Slot-milliseconds for the job.
                 */
                totalSlotMs?: string | undefined;
                /**
                 * Output only. [Alpha] Information of the multi-statement transaction if this job is part of one. This property is only expected on a child job or a job that is in a session. A script parent job is not part of the transaction started in the script.
                 */
                transactionInfo?: BigQuery.Schema.TransactionInfo | undefined;
            }
            /**
             * Statistics for a query job.
             */
            interface JobStatistics2 {
                /**
                 * Output only. BI Engine specific Statistics.
                 */
                biEngineStatistics?: BigQuery.Schema.BiEngineStatistics | undefined;
                /**
                 * Output only. Billing tier for the job. This is a BigQuery-specific concept which is not related to the Google Cloud notion of "free tier". The value here is a measure of the query's resource consumption relative to the amount of data scanned. For on-demand queries, the limit is 100, and all queries within this limit are billed at the standard on-demand rates. On-demand queries that exceed this limit will fail with a billingTierLimitExceeded error.
                 */
                billingTier?: number | undefined;
                /**
                 * Output only. Whether the query result was fetched from the query cache.
                 */
                cacheHit?: boolean | undefined;
                /**
                 * Output only. Referenced dataset for DCL statement.
                 */
                dclTargetDataset?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Output only. Referenced table for DCL statement.
                 */
                dclTargetTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Output only. Referenced view for DCL statement.
                 */
                dclTargetView?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Output only. The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.
                 */
                ddlAffectedRowAccessPolicyCount?: string | undefined;
                /**
                 * Output only. The table after rename. Present only for ALTER TABLE RENAME TO query.
                 */
                ddlDestinationTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Output only. The DDL operation performed, possibly dependent on the pre-existence of the DDL target.
                 */
                ddlOperationPerformed?: string | undefined;
                /**
                 * Output only. The DDL target dataset. Present only for CREATE/ALTER/DROP SCHEMA(dataset) queries.
                 */
                ddlTargetDataset?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Output only. [Beta] The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.
                 */
                ddlTargetRoutine?: BigQuery.Schema.RoutineReference | undefined;
                /**
                 * Output only. The DDL target row access policy. Present only for CREATE/DROP ROW ACCESS POLICY queries.
                 */
                ddlTargetRowAccessPolicy?: BigQuery.Schema.RowAccessPolicyReference | undefined;
                /**
                 * Output only. The DDL target table. Present only for CREATE/DROP TABLE/VIEW and DROP ALL ROW ACCESS POLICIES queries.
                 */
                ddlTargetTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.
                 */
                dmlStats?: BigQuery.Schema.DmlStatistics | undefined;
                /**
                 * Output only. The original estimate of bytes processed for the job.
                 */
                estimatedBytesProcessed?: string | undefined;
                /**
                 * Output only. Stats for EXPORT DATA statement.
                 */
                exportDataStatistics?: BigQuery.Schema.ExportDataStatistics | undefined;
                /**
                 * Output only. Job cost breakdown as bigquery internal cost and external service costs.
                 */
                externalServiceCosts?: BigQuery.Schema.ExternalServiceCost[] | undefined;
                /**
                 * Output only. Statistics related to GenAI usage in the query.
                 */
                genAiStats?: BigQuery.Schema.GenAiStats | undefined;
                /**
                 * Output only. Statistics related to incremental query results, if enabled for the query. This feature is not yet available.
                 */
                incrementalResultStats?: BigQuery.Schema.IncrementalResultStats | undefined;
                /**
                 * Output only. Statistics for a LOAD query.
                 */
                loadQueryStatistics?: BigQuery.Schema.LoadQueryStatistics | undefined;
                /**
                 * Output only. Statistics of materialized views of a query job.
                 */
                materializedViewStatistics?: BigQuery.Schema.MaterializedViewStatistics | undefined;
                /**
                 * Output only. Statistics of metadata cache usage in a query for BigLake tables.
                 */
                metadataCacheStatistics?: BigQuery.Schema.MetadataCacheStatistics | undefined;
                /**
                 * Output only. Statistics of a BigQuery ML training job.
                 */
                mlStatistics?: BigQuery.Schema.MlStatistics | undefined;
                /**
                 * Deprecated.
                 */
                modelTraining?: BigQuery.Schema.BigQueryModelTraining | undefined;
                /**
                 * Deprecated.
                 */
                modelTrainingCurrentIteration?: number | undefined;
                /**
                 * Deprecated.
                 */
                modelTrainingExpectedTotalIteration?: string | undefined;
                /**
                 * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                 */
                numDmlAffectedRows?: string | undefined;
                /**
                 * Output only. Storage and caching statistics per cloud provider for queries over object storage.
                 */
                objectStorageStats?: BigQuery.Schema.ObjectStorageStats[] | undefined;
                /**
                 * Output only. Performance insights.
                 */
                performanceInsights?: BigQuery.Schema.PerformanceInsights | undefined;
                /**
                 * Output only. Query optimization information for a QUERY job.
                 */
                queryInfo?: BigQuery.Schema.QueryInfo | undefined;
                /**
                 * Output only. Describes execution plan for the query.
                 */
                queryPlan?: BigQuery.Schema.ExplainQueryStage[] | undefined;
                /**
                 * Output only. Referenced property graphs for the job. Queries that reference more than 50 property graphs will not have a complete list.
                 */
                referencedPropertyGraphs?: BigQuery.Schema.PropertyGraphReference[] | undefined;
                /**
                 * Output only. Referenced routines for the job.
                 */
                referencedRoutines?: BigQuery.Schema.RoutineReference[] | undefined;
                /**
                 * Output only. Referenced tables for the job.
                 */
                referencedTables?: BigQuery.Schema.TableReference[] | undefined;
                /**
                 * Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
                 * @deprecated
                 */
                reservationUsage?:
                    | Array<{
                        /**
                         * Reservation name or "unreserved" for on-demand resource usage and multi-statement queries.
                         */
                        name?: string | undefined;
                        /**
                         * Total slot milliseconds used by the reservation for a particular job.
                         */
                        slotMs?: string | undefined;
                    }>
                    | undefined;
                /**
                 * Output only. The schema of the results. Present only for successful dry run of non-legacy SQL queries.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * Output only. Search query specific statistics.
                 */
                searchStatistics?: BigQuery.Schema.SearchStatistics | undefined;
                /**
                 * Output only. Statistics of a Spark procedure job.
                 */
                sparkStatistics?: BigQuery.Schema.SparkStatistics | undefined;
                /**
                 * Output only. The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#update_statement) statement. * `DELETE`: [`DELETE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `CREATE_TABLE`: [`CREATE TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement, without `AS SELECT`. * `CREATE_TABLE_AS_SELECT`: [`CREATE TABLE AS SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement. * `CREATE_VIEW`: [`CREATE VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_view_statement) statement. * `CREATE_MODEL`: [`CREATE MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create#create_model_statement) statement. * `CREATE_MATERIALIZED_VIEW`: [`CREATE MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_materialized_view_statement) statement. * `CREATE_FUNCTION`: [`CREATE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_function_statement) statement. * `CREATE_TABLE_FUNCTION`: [`CREATE TABLE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_function_statement) statement. * `CREATE_PROCEDURE`: [`CREATE PROCEDURE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_procedure) statement. * `CREATE_ROW_ACCESS_POLICY`: [`CREATE ROW ACCESS POLICY`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_row_access_policy_statement) statement. * `CREATE_SCHEMA`: [`CREATE SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_schema_statement) statement. * `CREATE_SNAPSHOT_TABLE`: [`CREATE SNAPSHOT TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_snapshot_table_statement) statement. * `CREATE_SEARCH_INDEX`: [`CREATE SEARCH INDEX`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_search_index_statement) statement. * `DROP_TABLE`: [`DROP TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_statement) statement. * `DROP_EXTERNAL_TABLE`: [`DROP EXTERNAL TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_external_table_statement) statement. * `DROP_VIEW`: [`DROP VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_view_statement) statement. * `DROP_MODEL`: [`DROP MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-drop-model) statement. * `DROP_MATERIALIZED_VIEW`: [`DROP MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_materialized_view_statement) statement. * `DROP_FUNCTION` : [`DROP FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_function_statement) statement. * `DROP_TABLE_FUNCTION` : [`DROP TABLE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_function) statement. * `DROP_PROCEDURE`: [`DROP PROCEDURE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_procedure_statement) statement. * `DROP_SEARCH_INDEX`: [`DROP SEARCH INDEX`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_search_index) statement. * `DROP_SCHEMA`: [`DROP SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_schema_statement) statement. * `DROP_SNAPSHOT_TABLE`: [`DROP SNAPSHOT TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_snapshot_table_statement) statement. * `DROP_ROW_ACCESS_POLICY`: [`DROP [ALL] ROW ACCESS POLICY|POLICIES`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_row_access_policy_statement) statement. * `ALTER_TABLE`: [`ALTER TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_table_set_options_statement) statement. * `ALTER_VIEW`: [`ALTER VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_view_set_options_statement) statement. * `ALTER_MATERIALIZED_VIEW`: [`ALTER MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_materialized_view_set_options_statement) statement. * `ALTER_SCHEMA`: [`ALTER SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_schema_set_options_statement) statement. * `SCRIPT`: [`SCRIPT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language). * `TRUNCATE_TABLE`: [`TRUNCATE TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#truncate_table_statement) statement. * `CREATE_EXTERNAL_TABLE`: [`CREATE EXTERNAL TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_external_table_statement) statement. * `EXPORT_DATA`: [`EXPORT DATA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/other-statements#export_data_statement) statement. * `EXPORT_MODEL`: [`EXPORT MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-export-model) statement. * `LOAD_DATA`: [`LOAD DATA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/other-statements#load_data_statement) statement. * `CALL`: [`CALL`](https://cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language#call) statement.
                 */
                statementType?: string | undefined;
                /**
                 * Output only. Describes a timeline of job execution.
                 */
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
                /**
                 * Output only. If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.
                 */
                totalBytesBilled?: string | undefined;
                /**
                 * Output only. Total bytes processed for the job.
                 */
                totalBytesProcessed?: string | undefined;
                /**
                 * Output only. For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
                 */
                totalBytesProcessedAccuracy?: string | undefined;
                /**
                 * Output only. Total number of partitions processed from all partitioned tables referenced in the job.
                 */
                totalPartitionsProcessed?: string | undefined;
                /**
                 * Output only. Total slot milliseconds for the job that ran on external services and billed on the services SKU. This field is only populated for jobs that have external service costs, and is the total of the usage for costs whose billing method is `"SERVICES_SKU"`.
                 */
                totalServicesSkuSlotMs?: string | undefined;
                /**
                 * Output only. Slot-milliseconds for the job.
                 */
                totalSlotMs?: string | undefined;
                /**
                 * Output only. Total bytes transferred for BigQuery Omni queries from the remote cloud back to Google Cloud. This tracks data movement over Google-managed connections (like query results). It doesn't include input data read from the external data lake (for example, S3) because that data stays within the remote cloud.
                 */
                transferredBytes?: string | undefined;
                /**
                 * Output only. GoogleSQL only: list of undeclared query parameters detected during a dry run validation.
                 */
                undeclaredQueryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
                /**
                 * Output only. Vector Search query specific statistics.
                 */
                vectorSearchStatistics?: BigQuery.Schema.VectorSearchStatistics | undefined;
            }
            /**
             * Statistics for a load job.
             */
            interface JobStatistics3 {
                /**
                 * Output only. The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
                 */
                badRecords?: string | undefined;
                /**
                 * Output only. Number of bytes of source data in a load job.
                 */
                inputFileBytes?: string | undefined;
                /**
                 * Output only. Number of source files in a load job.
                 */
                inputFiles?: string | undefined;
                /**
                 * Output only. Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
                 */
                outputBytes?: string | undefined;
                /**
                 * Output only. Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
                 */
                outputRows?: string | undefined;
                /**
                 * Output only. Describes a timeline of job execution.
                 */
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
            }
            /**
             * Statistics for an extract job.
             */
            interface JobStatistics4 {
                /**
                 * Output only. Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.
                 */
                destinationUriFileCounts?: string[] | undefined;
                /**
                 * Output only. Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes and doesn't have any relationship with the number of actual result bytes extracted in the desired format.
                 */
                inputBytes?: string | undefined;
                /**
                 * Output only. Describes a timeline of job execution.
                 */
                timeline?: BigQuery.Schema.QueryTimelineSample[] | undefined;
            }
            /**
             * Statistics for a copy job.
             */
            interface JobStatistics5 {
                /**
                 * Output only. Number of logical bytes copied to the destination table.
                 */
                copiedLogicalBytes?: string | undefined;
                /**
                 * Output only. Number of rows copied to the destination table.
                 */
                copiedRows?: string | undefined;
                /**
                 * Output only. Destination region for a cross-region copy job. Not set for in-region copy jobs.
                 */
                remoteDestinationRegion?: string | undefined;
            }
            interface JobStatus {
                /**
                 * Output only. Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
                 */
                errorResult?: BigQuery.Schema.ErrorProto | undefined;
                /**
                 * Output only. The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has not completed or was unsuccessful.
                 */
                errors?: BigQuery.Schema.ErrorProto[] | undefined;
                /**
                 * Output only. Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
                 */
                state?: string | undefined;
            }
            /**
             * Represents privacy policy associated with "join restrictions". Join restriction gives data providers the ability to enforce joins on the 'join_allowed_columns' when data is queried from a privacy protected view.
             */
            interface JoinRestrictionPolicy {
                /**
                 * Optional. The only columns that joins are allowed on. This field is must be specified for join_conditions JOIN_ANY and JOIN_ALL and it cannot be set for JOIN_BLOCKED.
                 */
                joinAllowedColumns?: string[] | undefined;
                /**
                 * Optional. Specifies if a join is required or not on queries for the view. Default is JOIN_CONDITION_UNSPECIFIED.
                 */
                joinCondition?: string | undefined;
            }
            /**
             * Represents a single JSON object.
             */
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface JsonObject {
            }
            /**
             * Json Options for load and make external tables.
             */
            interface JsonOptions {
                /**
                 * Optional. The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
                 */
                encoding?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface JsonValue {
            }
            /**
             * Metadata about the Linked Dataset.
             */
            interface LinkedDatasetMetadata {
                /**
                 * Output only. Specifies whether Linked Dataset is currently in a linked state or not.
                 */
                linkState?: string | undefined;
            }
            /**
             * A dataset source type which refers to another BigQuery dataset.
             */
            interface LinkedDatasetSource {
                /**
                 * The source dataset reference contains project numbers and not project ids.
                 */
                sourceDataset?: BigQuery.Schema.DatasetReference | undefined;
            }
            /**
             * Response format for a single page when listing BigQuery ML models.
             */
            interface ListModelsResponse {
                /**
                 * Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.
                 */
                models?: BigQuery.Schema.Model[] | undefined;
                /**
                 * A token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
            }
            /**
             * Describes the format of a single result page when listing routines.
             */
            interface ListRoutinesResponse {
                /**
                 * A token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
                /**
                 * Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options.
                 */
                routines?: BigQuery.Schema.Routine[] | undefined;
            }
            /**
             * Response message for the ListRowAccessPolicies method.
             */
            interface ListRowAccessPoliciesResponse {
                /**
                 * A token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
                /**
                 * Row access policies on the requested table.
                 */
                rowAccessPolicies?: BigQuery.Schema.RowAccessPolicy[] | undefined;
            }
            /**
             * Statistics for a LOAD query.
             */
            interface LoadQueryStatistics {
                /**
                 * Output only. The number of bad records encountered while processing a LOAD query. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
                 */
                badRecords?: string | undefined;
                /**
                 * Output only. This field is deprecated. The number of bytes of source data copied over the network for a `LOAD` query. `transferred_bytes` has the canonical value for physical transferred bytes, which is used for BigQuery Omni billing.
                 * @deprecated
                 */
                bytesTransferred?: string | undefined;
                /**
                 * Output only. Number of bytes of source data in a LOAD query.
                 */
                inputFileBytes?: string | undefined;
                /**
                 * Output only. Number of source files in a LOAD query.
                 */
                inputFiles?: string | undefined;
                /**
                 * Output only. Size of the loaded data in bytes. Note that while a LOAD query is in the running state, this value may change.
                 */
                outputBytes?: string | undefined;
                /**
                 * Output only. Number of rows imported in a LOAD query. Note that while a LOAD query is in the running state, this value may change.
                 */
                outputRows?: string | undefined;
            }
            /**
             * BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.
             */
            interface LocationMetadata {
                /**
                 * The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.
                 */
                legacyLocationId?: string | undefined;
            }
            /**
             * A materialized view considered for a query job.
             */
            interface MaterializedView {
                /**
                 * Whether the materialized view is chosen for the query. A materialized view can be chosen to rewrite multiple parts of the same query. If a materialized view is chosen to rewrite any part of the query, then this field is true, even if the materialized view was not chosen to rewrite others parts.
                 */
                chosen?: boolean | undefined;
                /**
                 * If present, specifies a best-effort estimation of the bytes saved by using the materialized view rather than its base tables.
                 */
                estimatedBytesSaved?: string | undefined;
                /**
                 * If present, specifies the reason why the materialized view was not chosen for the query.
                 */
                rejectedReason?: string | undefined;
                /**
                 * The candidate materialized view.
                 */
                tableReference?: BigQuery.Schema.TableReference | undefined;
            }
            /**
             * Definition and configuration of a materialized view.
             */
            interface MaterializedViewDefinition {
                /**
                 * Optional. This option declares the intention to construct a materialized view that isn't refreshed incrementally. Non-incremental materialized views support an expanded range of SQL queries. The `allow_non_incremental_definition` option can't be changed after the materialized view is created.
                 */
                allowNonIncrementalDefinition?: boolean | undefined;
                /**
                 * Optional. Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".
                 */
                enableRefresh?: boolean | undefined;
                /**
                 * Output only. The time when this materialized view was last refreshed, in milliseconds since the epoch.
                 */
                lastRefreshTime?: string | undefined;
                /**
                 * [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type).
                 */
                maxStaleness?: string | undefined;
                /**
                 * Required. A query whose results are persisted.
                 */
                query?: string | undefined;
                /**
                 * Optional. The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).
                 */
                refreshIntervalMs?: string | undefined;
            }
            /**
             * Statistics of materialized views considered in a query job.
             */
            interface MaterializedViewStatistics {
                /**
                 * Materialized views considered for the query job. Only certain materialized views are used. For a detailed list, see the child message. If many materialized views are considered, then the list might be incomplete.
                 */
                materializedView?: BigQuery.Schema.MaterializedView[] | undefined;
            }
            /**
             * Status of a materialized view. The last refresh timestamp status is omitted here, but is present in the MaterializedViewDefinition message.
             */
            interface MaterializedViewStatus {
                /**
                 * Output only. Error result of the last automatic refresh. If present, indicates that the last automatic refresh was unsuccessful.
                 */
                lastRefreshStatus?: BigQuery.Schema.ErrorProto | undefined;
                /**
                 * Output only. Refresh watermark of materialized view. The base tables' data were collected into the materialized view cache until this time.
                 */
                refreshWatermark?: string | undefined;
            }
            /**
             * Column Metadata Index staleness detailed infnormation.
             */
            interface MetadataCacheStalenessInsight {
                /**
                 * Output only. Average column metadata index staleness of previous runs with the same query hash.
                 */
                avgPreviousStalenessMs?: string | undefined;
                /**
                 * Output only. The percent increase in staleness between the current job and the average staleness of previous jobs with the same query hash.
                 */
                stalenessPercentageIncrease?: number | undefined;
            }
            /**
             * Statistics for metadata caching in queried tables.
             */
            interface MetadataCacheStatistics {
                /**
                 * Set for the Metadata caching eligible tables referenced in the query.
                 */
                tableMetadataCacheUsage?: BigQuery.Schema.TableMetadataCacheUsage[] | undefined;
            }
            /**
             * Job statistics specific to a BigQuery ML training job.
             */
            interface MlStatistics {
                /**
                 * Output only. Trials of a [hyperparameter tuning job](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) sorted by trial_id.
                 */
                hparamTrials?: BigQuery.Schema.HparamTuningTrial[] | undefined;
                /**
                 * Results for all completed iterations. Empty for [hyperparameter tuning jobs](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview).
                 */
                iterationResults?: BigQuery.Schema.IterationResult[] | undefined;
                /**
                 * Output only. Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop.
                 */
                maxIterations?: string | undefined;
                /**
                 * Output only. The type of the model that is being trained.
                 */
                modelType?: string | undefined;
                /**
                 * Output only. Training type of the job.
                 */
                trainingType?: string | undefined;
            }
            interface Model {
                /**
                 * The best trial_id across all training runs.
                 * @deprecated
                 */
                bestTrialId?: string | undefined;
                /**
                 * Output only. The time when this model was created, in millisecs since the epoch.
                 */
                creationTime?: string | undefined;
                /**
                 * Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials.
                 */
                defaultTrialId?: string | undefined;
                /**
                 * Optional. A user-friendly description of this model.
                 */
                description?: string | undefined;
                /**
                 * Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while stored in BigQuery storage. This field can be used with PatchModel to update encryption key for an already encrypted model.
                 */
                encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * Output only. A hash of this resource.
                 */
                etag?: string | undefined;
                /**
                 * Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
                 */
                expirationTime?: string | undefined;
                /**
                 * Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause.
                 */
                featureColumns?: BigQuery.Schema.StandardSqlField[] | undefined;
                /**
                 * Optional. A descriptive name for this model.
                 */
                friendlyName?: string | undefined;
                /**
                 * Output only. All hyperparameter search spaces in this model.
                 */
                hparamSearchSpaces?: BigQuery.Schema.HparamSearchSpaces | undefined;
                /**
                 * Output only. Trials of a [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id.
                 */
                hparamTrials?: BigQuery.Schema.HparamTuningTrial[] | undefined;
                /**
                 * Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.
                 */
                labelColumns?: BigQuery.Schema.StandardSqlField[] | undefined;
                /**
                 * The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
                 */
                labels?: Record<string, string> | undefined;
                /**
                 * Output only. The time when this model was last modified, in millisecs since the epoch.
                 */
                lastModifiedTime?: string | undefined;
                /**
                 * Output only. The geographic location where the model resides. This value is inherited from the dataset.
                 */
                location?: string | undefined;
                /**
                 * Required. Unique identifier for this model.
                 */
                modelReference?: BigQuery.Schema.ModelReference | undefined;
                /**
                 * Output only. Type of the model resource.
                 */
                modelType?: string | undefined;
                /**
                 * Output only. For single-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id.
                 */
                optimalTrialIds?: string[] | undefined;
                /**
                 * Output only. Remote model info
                 */
                remoteModelInfo?: BigQuery.Schema.RemoteModelInfo | undefined;
                /**
                 * Information for all training runs in increasing order of start_time.
                 */
                trainingRuns?: BigQuery.Schema.TrainingRun[] | undefined;
                /**
                 * Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model.
                 */
                transformColumns?: BigQuery.Schema.TransformColumn[] | undefined;
            }
            interface ModelDefinition {
                /**
                 * Deprecated.
                 */
                modelOptions?:
                    | { labels?: string[] | undefined; lossType?: string | undefined; modelType?: string | undefined }
                    | undefined;
                /**
                 * Deprecated.
                 */
                trainingRuns?: BigQuery.Schema.BqmlTrainingRun[] | undefined;
            }
            /**
             * Options related to model extraction.
             */
            interface ModelExtractOptions {
                /**
                 * The 1-based ID of the trial to be exported from a hyperparameter tuning model. If not specified, the trial with id = [Model](https://cloud.google.com/bigquery/docs/reference/rest/v2/models#resource:-model).defaultTrialId is exported. This field is ignored for models not trained with hyperparameter tuning.
                 */
                trialId?: string | undefined;
            }
            /**
             * Id path of a model.
             */
            interface ModelReference {
                /**
                 * Required. The ID of the dataset containing this model.
                 */
                datasetId?: string | undefined;
                /**
                 * Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
                 */
                modelId?: string | undefined;
                /**
                 * Required. The ID of the project containing this model.
                 */
                projectId?: string | undefined;
            }
            /**
             * Evaluation metrics for multi-class classification/classifier models.
             */
            interface MultiClassClassificationMetrics {
                /**
                 * Aggregate classification metrics.
                 */
                aggregateClassificationMetrics?: BigQuery.Schema.AggregateClassificationMetrics | undefined;
                /**
                 * Confusion matrix at different thresholds.
                 */
                confusionMatrixList?: BigQuery.Schema.ConfusionMatrix[] | undefined;
            }
            /**
             * Storage and caching statistics for object storage.
             */
            interface ObjectStorageStats {
                /**
                 * Total bytes read from the GCP Lakehouse-internal cache, avoiding an object storage read.
                 */
                cacheBytesRead?: string | undefined;
                /**
                 * The cloud provider for this block of statistics.
                 */
                cloudProvider?: string | undefined;
                /**
                 * Total bytes read directly from the cloud provider's storage.
                 */
                objectStorageBytesRead?: string | undefined;
            }
            /**
             * Parquet Options for load and make external tables.
             */
            interface ParquetOptions {
                /**
                 * Optional. Indicates whether to use schema inference specifically for Parquet LIST logical type.
                 */
                enableListInference?: boolean | undefined;
                /**
                 * Optional. Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
                 */
                enumAsString?: boolean | undefined;
                /**
                 * Optional. Indicates how to represent a Parquet map if present.
                 */
                mapTargetType?: string | undefined;
            }
            /**
             * The partitioning column information.
             */
            interface PartitionedColumn {
                /**
                 * Required. The name of the partition column.
                 */
                field?: string | undefined;
            }
            /**
             * The partitioning information, which includes managed table, external table and metastore partitioned table partition information.
             */
            interface PartitioningDefinition {
                /**
                 * Optional. Details about each partitioning column. This field is output only for all partitioning types other than metastore partitioned tables. BigQuery native tables only support 1 partitioning column. Other table types may support 0, 1 or more partitioning columns. For metastore partitioned tables, the order must match the definition order in the Hive Metastore, where it must match the physical layout of the table. For example, CREATE TABLE a_table(id BIGINT, name STRING) PARTITIONED BY (city STRING, state STRING). In this case the values must be ['city', 'state'] in that order.
                 */
                partitionedColumn?: BigQuery.Schema.PartitionedColumn[] | undefined;
            }
            /**
             * Partition skew detailed information.
             */
            interface PartitionSkew {
                /**
                 * Output only. Source stages which produce skewed data.
                 */
                skewSources?: BigQuery.Schema.SkewSource[] | undefined;
            }
            /**
             * Performance insights for the job.
             */
            interface PerformanceInsights {
                /**
                 * Output only. Average execution ms of previous runs. Indicates the job ran slow compared to previous executions. To find previous executions, use INFORMATION_SCHEMA tables and filter jobs with same query hash.
                 */
                avgPreviousExecutionMs?: string | undefined;
                /**
                 * Output only. Query stage performance insights compared to previous runs, for diagnosing performance regression.
                 */
                stagePerformanceChangeInsights?:
                    | BigQuery.Schema.StagePerformanceChangeInsight[]
                    | undefined;
                /**
                 * Output only. Standalone query stage performance insights, for exploring potential improvements.
                 */
                stagePerformanceStandaloneInsights?:
                    | BigQuery.Schema.StagePerformanceStandaloneInsight[]
                    | undefined;
                /**
                 * Output only. Performance insights for table-level attributes that changed compared to previous runs.
                 */
                tableChangeInsights?: BigQuery.Schema.TableChangeInsight[] | undefined;
            }
            /**
             * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
             */
            interface Policy {
                /**
                 * Specifies cloud audit logging configuration for this policy.
                 */
                auditConfigs?: BigQuery.Schema.AuditConfig[] | undefined;
                /**
                 * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
                 */
                bindings?: BigQuery.Schema.Binding[] | undefined;
                /**
                 * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
                 */
                etag?: string | undefined;
                /**
                 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
                 */
                version?: number | undefined;
            }
            /**
             * Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order.
             */
            interface PrincipalComponentInfo {
                /**
                 * The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio.
                 */
                cumulativeExplainedVarianceRatio?: number | undefined;
                /**
                 * Explained variance by this principal component, which is simply the eigenvalue.
                 */
                explainedVariance?: number | undefined;
                /**
                 * Explained_variance over the total explained variance.
                 */
                explainedVarianceRatio?: number | undefined;
                /**
                 * Id of the principal component.
                 */
                principalComponentId?: string | undefined;
            }
            /**
             * Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views.
             */
            interface PrivacyPolicy {
                /**
                 * Optional. Policy used for aggregation thresholds.
                 */
                aggregationThresholdPolicy?: BigQuery.Schema.AggregationThresholdPolicy | undefined;
                /**
                 * Optional. Policy used for differential privacy.
                 */
                differentialPrivacyPolicy?: BigQuery.Schema.DifferentialPrivacyPolicy | undefined;
                /**
                 * Optional. Join restriction policy is outside of the one of policies, since this policy can be set along with other policies. This policy gives data providers the ability to enforce joins on the 'join_allowed_columns' when data is queried from a privacy protected view.
                 */
                joinRestrictionPolicy?: BigQuery.Schema.JoinRestrictionPolicy | undefined;
            }
            /**
             * Response object of ListProjects
             */
            interface ProjectList {
                /**
                 * A hash of the page of results.
                 */
                etag?: string | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
                /**
                 * Use this token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
                /**
                 * Projects to which the user has at least READ access. This field can be omitted if `totalItems` is 0.
                 */
                projects?:
                    | Array<{
                        /**
                         * A descriptive name for this project. A wrapper is used here because friendlyName can be set to the empty string.
                         */
                        friendlyName?: string | undefined;
                        /**
                         * An opaque ID of this project.
                         */
                        id?: string | undefined;
                        /**
                         * The resource type.
                         */
                        kind?: string | undefined;
                        /**
                         * The numeric ID of this project.
                         */
                        numericId?: string | undefined;
                        /**
                         * A unique reference to this project.
                         */
                        projectReference?: BigQuery.Schema.ProjectReference | undefined;
                    }>
                    | undefined;
                /**
                 * The total number of projects in the page. A wrapper is used here because the field should still be in the response when the value is 0.
                 */
                totalItems?: number | undefined;
            }
            /**
             * A unique reference to a project.
             */
            interface ProjectReference {
                /**
                 * Required. ID of the project. Can be either the numeric ID or the assigned ID of the project.
                 */
                projectId?: string | undefined;
            }
            /**
             * Id path of a property graph.
             */
            interface PropertyGraphReference {
                /**
                 * Required. The ID of the dataset containing this property graph.
                 */
                datasetId?: string | undefined;
                /**
                 * Required. The ID of the project containing this property graph.
                 */
                projectId?: string | undefined;
                /**
                 * Required. The ID of the property graph. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
                 */
                propertyGraphId?: string | undefined;
            }
            /**
             * The column metadata index pruning statistics.
             */
            interface PruningStats {
                /**
                 * The number of parallel inputs matched.
                 */
                postCmetaPruningParallelInputCount?: string | undefined;
                /**
                 * The number of partitions matched.
                 */
                postCmetaPruningPartitionCount?: string | undefined;
                /**
                 * The number of parallel inputs scanned.
                 */
                preCmetaPruningParallelInputCount?: string | undefined;
            }
            /**
             * Options for a user-defined Python function.
             */
            interface PythonOptions {
                /**
                 * Required. The name of the function defined in Python code as the entry point when the Python UDF is invoked.
                 */
                entryPoint?: string | undefined;
                /**
                 * Optional. A list of Python package names along with versions to be installed. Example: ["pandas\>=2.1", "google-cloud-translate==3.11"]. For more information, see [Use third-party packages](https://cloud.google.com/bigquery/docs/user-defined-functions-python#third-party-packages).
                 */
                packages?: string[] | undefined;
            }
            /**
             * Query optimization information for a QUERY job.
             */
            interface QueryInfo {
                /**
                 * Output only. Information about query optimizations.
                 */
                optimizationDetails?: Record<string, any> | undefined;
            }
            /**
             * A parameter given to a query.
             */
            interface QueryParameter {
                /**
                 * Optional. If unset, this is a positional parameter. Otherwise, should be unique within a query.
                 */
                name?: string | undefined;
                /**
                 * Required. The type of this parameter.
                 */
                parameterType?: BigQuery.Schema.QueryParameterType | undefined;
                /**
                 * Required. The value of this parameter.
                 */
                parameterValue?: BigQuery.Schema.QueryParameterValue | undefined;
            }
            /**
             * The type of a query parameter.
             */
            interface QueryParameterType {
                /**
                 * Optional. The type of the array's elements, if this is an array.
                 */
                arrayType?: BigQuery.Schema.QueryParameterType | undefined;
                /**
                 * Optional. The element type of the range, if this is a range.
                 */
                rangeElementType?: BigQuery.Schema.QueryParameterType | undefined;
                /**
                 * Optional. The types of the fields of this struct, in order, if this is a struct.
                 */
                structTypes?:
                    | Array<{
                        /**
                         * Optional. Human-oriented description of the field.
                         */
                        description?: string | undefined;
                        /**
                         * Optional. The name of this field.
                         */
                        name?: string | undefined;
                        /**
                         * Required. The type of this field.
                         */
                        type?: BigQuery.Schema.QueryParameterType | undefined;
                    }>
                    | undefined;
                /**
                 * Optional. Precision (maximum number of total digits in base 10) for seconds of TIMESTAMP type. Possible values include: * 6 (Default, for TIMESTAMP type with microsecond precision) * 12 (For TIMESTAMP type with picosecond precision)
                 */
                timestampPrecision?: string | undefined;
                /**
                 * Required. The top level type of this field.
                 */
                type?: string | undefined;
            }
            /**
             * The value of a query parameter.
             */
            interface QueryParameterValue {
                /**
                 * Optional. The array values, if this is an array type.
                 */
                arrayValues?: BigQuery.Schema.QueryParameterValue[] | undefined;
                /**
                 * Optional. The range value, if this is a range type.
                 */
                rangeValue?: BigQuery.Schema.RangeValue | undefined;
                /**
                 * The struct field values.
                 */
                structValues?: Record<string, BigQuery.Schema.QueryParameterValue> | undefined;
                /**
                 * Optional. The value of this value, if a simple scalar type.
                 */
                value?: string | undefined;
            }
            /**
             * Describes the format of the jobs.query request.
             */
            interface QueryRequest {
                /**
                 * Optional. Options specific to the Apache Arrow output format.
                 */
                arrowSerializationOptions?: BigQuery.Schema.ArrowSerializationOptions | undefined;
                /**
                 * Optional. Connection properties which can modify the query behavior.
                 */
                connectionProperties?: BigQuery.Schema.ConnectionProperty[] | undefined;
                /**
                 * [Optional] Specifies whether the query should be executed as a continuous query. The default value is false.
                 */
                continuous?: boolean | undefined;
                /**
                 * Optional. If true, creates a new session using a randomly generated session_id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. The session location will be set to QueryRequest.location if it is present, otherwise it's set to the default location based on existing routing logic.
                 */
                createSession?: boolean | undefined;
                /**
                 * Optional. Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
                 */
                defaultDataset?: BigQuery.Schema.DatasetReference | undefined;
                /**
                 * Optional. Custom encryption configuration (e.g., Cloud KMS keys)
                 */
                destinationEncryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * Optional. If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
                 */
                dryRun?: boolean | undefined;
                /**
                 * Optional. Output format adjustments.
                 */
                formatOptions?: BigQuery.Schema.DataFormatOptions | undefined;
                /**
                 * Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode.
                 */
                jobCreationMode?: string | undefined;
                /**
                 * Optional. Job timeout in milliseconds. If this time limit is exceeded, BigQuery will attempt to stop a longer job, but may not always succeed in canceling it before the job completes. For example, a job that takes more than 60 seconds to complete has a better chance of being stopped than a job that takes 10 seconds to complete. This timeout applies to the query even if a job does not need to be created.
                 */
                jobTimeoutMs?: string | undefined;
                /**
                 * The resource type of the request.
                 */
                kind?: string | undefined;
                /**
                 * Optional. The labels associated with this query. Labels can be used to organize and group query jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label keys must start with a letter and each label in the list must have a different key.
                 */
                labels?: Record<string, string> | undefined;
                /**
                 * The geographic location where the job should run. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
                 */
                location?: string | undefined;
                /**
                 * Optional. Limits the bytes billed for this query. Queries with bytes billed above this limit will fail (without incurring a charge). If unspecified, the project default is used.
                 */
                maximumBytesBilled?: string | undefined;
                /**
                 * Optional. The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
                 */
                maxResults?: number | undefined;
                /**
                 * Optional. A target limit on the rate of slot consumption by this query. If set to a value \> 0, BigQuery will attempt to limit the rate of slot consumption by this query to keep it below the configured limit, even if the query is eligible for more slots based on fair scheduling. The unused slots will be available for other jobs and queries to use. Note: This feature is not yet generally available.
                 */
                maxSlots?: number | undefined;
                /**
                 * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
                 */
                parameterMode?: string | undefined;
                /**
                 * This property is deprecated.
                 * @deprecated
                 */
                preserveNulls?: boolean | undefined;
                /**
                 * Required. A query string to execute, using Google Standard SQL or legacy SQL syntax. Example: "SELECT COUNT(f1) FROM myProjectId.myDatasetId.myTableId".
                 */
                query?: string | undefined;
                /**
                 * Query parameters for GoogleSQL queries.
                 */
                queryParameters?: BigQuery.Schema.QueryParameter[] | undefined;
                /**
                 * Optional. The query results format. If the value is anything other than `STRUCT_ENCODING` or unspecified: * The schema of the results will be provided in `QueryResponse.results_schema` field. * The results of the first page will be provided in `QueryResponse.results` field. * The `QueryResponse.rows` will not be populated. * The `QueryResponse.schema` for `QueryResponse.rows` will also not be populated since it is the schema of the `QueryResponse.rows`. This feature is not yet available.
                 */
                queryResultsFormat?: string | undefined;
                /**
                 * Optional. A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of another request, all parameters in the request that may affect the result are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed.
                 */
                requestId?: string | undefined;
                /**
                 * Optional. The reservation that jobs.query request would use. User can specify a reservation to execute the job.query. The expected format is `projects/{project\}/locations/{location\}/reservations/{reservation\}`. Forces the query to use on-demand billing when set to `none`. This requires the project or organization to have `reservation_override_mode` set to `ALLOW_ANY_OVERRIDE`.
                 */
                reservation?: string | undefined;
                /**
                 * Optional. Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
                 */
                timeoutMs?: number | undefined;
                /**
                 * Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query uses BigQuery's [GoogleSQL](https://docs.cloud.google.com/bigquery/docs/introduction-sql). When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
                 */
                useLegacySql?: boolean | undefined;
                /**
                 * Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
                 */
                useQueryCache?: boolean | undefined;
                /**
                 * Optional. This is only supported for SELECT query. If set, the query is allowed to write results incrementally to the temporary result table. This may incur a performance penalty. This option cannot be used with Legacy SQL. This feature is not yet available.
                 */
                writeIncrementalResults?: boolean | undefined;
            }
            interface QueryResponse {
                /**
                 * Output only. Serialized row data in Arrow RecordBatch format.
                 */
                arrowRecordBatch?: BigQuery.Schema.ArrowRecordBatch | undefined;
                /**
                 * Output only. Arrow schema
                 */
                arrowSchema?: BigQuery.Schema.ArrowSchema | undefined;
                /**
                 * Whether the query result was fetched from the query cache.
                 */
                cacheHit?: boolean | undefined;
                /**
                 * Output only. Creation time of this query, in milliseconds since the epoch. This field will be present on all queries.
                 */
                creationTime?: string | undefined;
                /**
                 * Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.
                 */
                dmlStats?: BigQuery.Schema.DmlStatistics | undefined;
                /**
                 * Output only. End time of this query, in milliseconds since the epoch. This field will be present whenever a query job is in the DONE state.
                 */
                endTime?: string | undefined;
                /**
                 * Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).
                 */
                errors?: BigQuery.Schema.ErrorProto[] | undefined;
                /**
                 * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
                 */
                jobComplete?: boolean | undefined;
                /**
                 * Optional. The reason why a Job was created. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset.
                 */
                jobCreationReason?: BigQuery.Schema.JobCreationReason | undefined;
                /**
                 * Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults). If job_creation_mode was set to `JOB_CREATION_OPTIONAL` and the query completes without creating a job, this field will be empty.
                 */
                jobReference?: BigQuery.Schema.JobReference | undefined;
                /**
                 * The resource type.
                 */
                kind?: string | undefined;
                /**
                 * Output only. The geographic location of the query. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations
                 */
                location?: string | undefined;
                /**
                 * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
                 */
                numDmlAffectedRows?: string | undefined;
                /**
                 * Output only. The number of rows out of `total_rows` returned in this response. This feature is not yet available.
                 */
                pageRowCount?: string | undefined;
                /**
                 * A token used for paging results. A non-empty token indicates that additional results are available. To see additional results, query the [`jobs.getQueryResults`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/getQueryResults) method. For more information, see [Paging through table data](https://cloud.google.com/bigquery/docs/paging-results).
                 */
                pageToken?: string | undefined;
                /**
                 * Auto-generated ID for the query.
                 */
                queryId?: string | undefined;
                /**
                 * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
                 */
                rows?: BigQuery.Schema.TableRow[] | undefined;
                /**
                 * The schema of the results. Present only when the query completes successfully.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * Output only. Information of the session if this job is part of one.
                 */
                sessionInfo?: BigQuery.Schema.SessionInfo | undefined;
                /**
                 * Output only. Start time of this query, in milliseconds since the epoch. This field will be present when the query job transitions from the PENDING state to either RUNNING or DONE.
                 */
                startTime?: string | undefined;
                /**
                 * Output only. The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#update_statement) statement. * `DELETE`: [`DELETE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `CREATE_TABLE`: [`CREATE TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement, without `AS SELECT`. * `CREATE_TABLE_AS_SELECT`: [`CREATE TABLE AS SELECT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement. * `CREATE_VIEW`: [`CREATE VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_view_statement) statement. * `CREATE_MODEL`: [`CREATE MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create#create_model_statement) statement. * `CREATE_MATERIALIZED_VIEW`: [`CREATE MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_materialized_view_statement) statement. * `CREATE_FUNCTION`: [`CREATE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_function_statement) statement. * `CREATE_TABLE_FUNCTION`: [`CREATE TABLE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_table_function_statement) statement. * `CREATE_PROCEDURE`: [`CREATE PROCEDURE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_procedure) statement. * `CREATE_ROW_ACCESS_POLICY`: [`CREATE ROW ACCESS POLICY`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_row_access_policy_statement) statement. * `CREATE_SCHEMA`: [`CREATE SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_schema_statement) statement. * `CREATE_SNAPSHOT_TABLE`: [`CREATE SNAPSHOT TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_snapshot_table_statement) statement. * `CREATE_SEARCH_INDEX`: [`CREATE SEARCH INDEX`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_search_index_statement) statement. * `DROP_TABLE`: [`DROP TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_statement) statement. * `DROP_EXTERNAL_TABLE`: [`DROP EXTERNAL TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_external_table_statement) statement. * `DROP_VIEW`: [`DROP VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_view_statement) statement. * `DROP_MODEL`: [`DROP MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-drop-model) statement. * `DROP_MATERIALIZED_VIEW`: [`DROP MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_materialized_view_statement) statement. * `DROP_FUNCTION` : [`DROP FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_function_statement) statement. * `DROP_TABLE_FUNCTION` : [`DROP TABLE FUNCTION`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_function) statement. * `DROP_PROCEDURE`: [`DROP PROCEDURE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_procedure_statement) statement. * `DROP_SEARCH_INDEX`: [`DROP SEARCH INDEX`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_search_index) statement. * `DROP_SCHEMA`: [`DROP SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_schema_statement) statement. * `DROP_SNAPSHOT_TABLE`: [`DROP SNAPSHOT TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_snapshot_table_statement) statement. * `DROP_ROW_ACCESS_POLICY`: [`DROP [ALL] ROW ACCESS POLICY|POLICIES`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#drop_row_access_policy_statement) statement. * `ALTER_TABLE`: [`ALTER TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_table_set_options_statement) statement. * `ALTER_VIEW`: [`ALTER VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_view_set_options_statement) statement. * `ALTER_MATERIALIZED_VIEW`: [`ALTER MATERIALIZED VIEW`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_materialized_view_set_options_statement) statement. * `ALTER_SCHEMA`: [`ALTER SCHEMA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#alter_schema_set_options_statement) statement. * `SCRIPT`: [`SCRIPT`](https://cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language). * `TRUNCATE_TABLE`: [`TRUNCATE TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax#truncate_table_statement) statement. * `CREATE_EXTERNAL_TABLE`: [`CREATE EXTERNAL TABLE`](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#create_external_table_statement) statement. * `EXPORT_DATA`: [`EXPORT DATA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/other-statements#export_data_statement) statement. * `EXPORT_MODEL`: [`EXPORT MODEL`](https://cloud.google.com/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-export-model) statement. * `LOAD_DATA`: [`LOAD DATA`](https://cloud.google.com/bigquery/docs/reference/standard-sql/other-statements#load_data_statement) statement. * `CALL`: [`CALL`](https://cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language#call) statement.
                 */
                statementType?: string | undefined;
                /**
                 * Output only. If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.
                 */
                totalBytesBilled?: string | undefined;
                /**
                 * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
                 */
                totalBytesProcessed?: string | undefined;
                /**
                 * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
                 */
                totalRows?: string | undefined;
                /**
                 * Output only. Number of slot ms the user is actually billed for.
                 */
                totalSlotMs?: string | undefined;
            }
            /**
             * Summary of the state of query execution at a given time.
             */
            interface QueryTimelineSample {
                /**
                 * Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
                 */
                activeUnits?: string | undefined;
                /**
                 * Total parallel units of work completed by this query.
                 */
                completedUnits?: string | undefined;
                /**
                 * Milliseconds elapsed since the start of query execution.
                 */
                elapsedMs?: string | undefined;
                /**
                 * Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.
                 */
                estimatedRunnableUnits?: string | undefined;
                /**
                 * Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.
                 */
                pendingUnits?: string | undefined;
                /**
                 * Total shuffle usage ratio in shuffle RAM per reservation of this query. This will be provided for reservation customers only.
                 */
                shuffleRamUsageRatio?: number | undefined;
                /**
                 * Cumulative slot-ms consumed by the query.
                 */
                totalSlotMs?: string | undefined;
            }
            interface RangePartitioning {
                /**
                 * Required. The name of the column to partition the table on. It must be a top-level, INT64 column whose mode is NULLABLE or REQUIRED.
                 */
                field?: string | undefined;
                /**
                 * [Experimental] Defines the ranges for range partitioning.
                 */
                range?: {
                    /**
                     * [Experimental] The end of range partitioning, exclusive.
                     */
                    end?: string | undefined;
                    /**
                     * [Experimental] The width of each interval.
                     */
                    interval?: string | undefined;
                    /**
                     * [Experimental] The start of range partitioning, inclusive.
                     */
                    start?: string | undefined;
                } | undefined;
            }
            /**
             * Represents the value of a range.
             */
            interface RangeValue {
                /**
                 * Optional. The end value of the range. A missing value represents an unbounded end.
                 */
                end?: BigQuery.Schema.QueryParameterValue | undefined;
                /**
                 * Optional. The start value of the range. A missing value represents an unbounded start.
                 */
                start?: BigQuery.Schema.QueryParameterValue | undefined;
            }
            /**
             * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
             */
            interface RankingMetrics {
                /**
                 * Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.
                 */
                averageRank?: number | undefined;
                /**
                 * Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.
                 */
                meanAveragePrecision?: number | undefined;
                /**
                 * Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.
                 */
                meanSquaredError?: number | undefined;
                /**
                 * A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.
                 */
                normalizedDiscountedCumulativeGain?: number | undefined;
            }
            /**
             * Evaluation metrics for regression and explicit feedback type matrix factorization models.
             */
            interface RegressionMetrics {
                /**
                 * Mean absolute error.
                 */
                meanAbsoluteError?: number | undefined;
                /**
                 * Mean squared error.
                 */
                meanSquaredError?: number | undefined;
                /**
                 * Mean squared log error.
                 */
                meanSquaredLogError?: number | undefined;
                /**
                 * Median absolute error.
                 */
                medianAbsoluteError?: number | undefined;
                /**
                 * R^2 score. This corresponds to r2_score in ML.EVALUATE.
                 */
                rSquared?: number | undefined;
            }
            /**
             * Options for a remote user-defined function.
             */
            interface RemoteFunctionOptions {
                /**
                 * Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: ```"projects/{projectId\}/locations/{locationId\}/connections/{connectionId\}"```
                 */
                connection?: string | undefined;
                /**
                 * Endpoint of the user-provided remote service, e.g. ```https://us-east1-my_gcf_project.cloudfunctions.net/remote_add```
                 */
                endpoint?: string | undefined;
                /**
                 * Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch.
                 */
                maxBatchingRows?: string | undefined;
                /**
                 * User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB.
                 */
                userDefinedContext?: Record<string, string> | undefined;
            }
            /**
             * Remote Model Info
             */
            interface RemoteModelInfo {
                /**
                 * Output only. Fully qualified name of the user-provided connection object of the remote model. Format: ```"projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}"```
                 */
                connection?: string | undefined;
                /**
                 * Output only. The endpoint for remote model.
                 */
                endpoint?: string | undefined;
                /**
                 * Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically.
                 */
                maxBatchingRows?: string | undefined;
                /**
                 * Output only. The model version for LLM.
                 */
                remoteModelVersion?: string | undefined;
                /**
                 * Output only. The remote service type for remote model.
                 */
                remoteServiceType?: string | undefined;
                /**
                 * Output only. The name of the speech recognizer to use for speech recognition. The expected format is `projects/{project\}/locations/{location\}/recognizers/{recognizer\}`. Customers can specify this field at model creation. If not specified, a default recognizer `projects/{model project\}/locations/global/recognizers/_` will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers)
                 */
                speechRecognizer?: string | undefined;
            }
            interface RestrictionConfig {
                /**
                 * Output only. Specifies the type of dataset/table restriction.
                 */
                type?: string | undefined;
            }
            /**
             * A user-defined function or a stored procedure.
             */
            interface Routine {
                /**
                 * Optional.
                 */
                arguments?: BigQuery.Schema.Argument[] | undefined;
                /**
                 * Output only. The build status of the routine. This field is only applicable to Python UDFs. [Preview](https://cloud.google.com/products/#product-launch-stages)
                 */
                buildStatus?: BigQuery.Schema.RoutineBuildStatus | undefined;
                /**
                 * Output only. The time when this routine was created, in milliseconds since the epoch.
                 */
                creationTime?: string | undefined;
                /**
                 * Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask).
                 */
                dataGovernanceType?: string | undefined;
                /**
                 * Required. The body of the routine. For functions, this is the expression in the AS clause. If `language = "SQL"`, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If `language="JAVASCRIPT"`, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks. If `definition_body` references another routine, then that routine must be fully qualified with its project ID.
                 */
                definitionBody?: string | undefined;
                /**
                 * Optional. The description of the routine, if defined.
                 */
                description?: string | undefined;
                /**
                 * Optional. The determinism level of the JavaScript UDF, if defined.
                 */
                determinismLevel?: string | undefined;
                /**
                 * Output only. A hash of this resource.
                 */
                etag?: string | undefined;
                /**
                 * Optional. Options for the runtime of the external system executing the routine. This field is only applicable for Python UDFs. [Preview](https://cloud.google.com/products/#product-launch-stages)
                 */
                externalRuntimeOptions?: BigQuery.Schema.ExternalRuntimeOptions | undefined;
                /**
                 * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
                 */
                importedLibraries?: string[] | undefined;
                /**
                 * Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
                 */
                language?: string | undefined;
                /**
                 * Output only. The time when this routine was last modified, in milliseconds since the epoch.
                 */
                lastModifiedTime?: string | undefined;
                /**
                 * Optional. Options for the Python UDF. [Preview](https://cloud.google.com/products/#product-launch-stages)
                 */
                pythonOptions?: BigQuery.Schema.PythonOptions | undefined;
                /**
                 * Optional. Remote function specific options.
                 */
                remoteFunctionOptions?: BigQuery.Schema.RemoteFunctionOptions | undefined;
                /**
                 * Optional. Can be set only if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from definition_body at query time in each query that references this routine. If present, then the columns in the evaluated table result will be cast to match the column types specified in return table type, at query time.
                 */
                returnTableType?: BigQuery.Schema.StandardSqlTableType | undefined;
                /**
                 * Optional if language = "SQL"; required otherwise. Cannot be set if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return type is inferred from definition_body at query time in each query that references this routine. If present, then the evaluated result will be cast to the specified returned type at query time. For example, for the functions created with the following statements: * `CREATE FUNCTION Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x + y);` * `CREATE FUNCTION Increment(x FLOAT64) AS (Add(x, 1));` * `CREATE FUNCTION Decrement(x FLOAT64) RETURNS FLOAT64 AS (Add(x, -1));` The return_type is `{type_kind: "FLOAT64"\}` for `Add` and `Decrement`, and is absent for `Increment` (inferred as FLOAT64 at query time). Suppose the function `Add` is replaced by `CREATE OR REPLACE FUNCTION Add(x INT64, y INT64) AS (x + y);` Then the inferred return type of `Increment` is automatically changed to INT64 at query time, while the return type of `Decrement` remains FLOAT64.
                 */
                returnType?: BigQuery.Schema.StandardSqlDataType | undefined;
                /**
                 * Required. Reference describing the ID of this routine.
                 */
                routineReference?: BigQuery.Schema.RoutineReference | undefined;
                /**
                 * Required. The type of routine.
                 */
                routineType?: string | undefined;
                /**
                 * Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration.
                 */
                securityMode?: string | undefined;
                /**
                 * Optional. Spark specific options.
                 */
                sparkOptions?: BigQuery.Schema.SparkOptions | undefined;
                /**
                 * Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn't guarantee that the procedure will successfully execute at runtime. If `strictMode` is set to `TRUE`, the procedure body is further checked for errors such as non-existent tables or columns. The `CREATE PROCEDURE` statement fails if the body fails any of these checks. If `strictMode` is set to `FALSE`, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify `strictMode=FALSE` to avoid non-existent procedure errors during validation. Default value is `TRUE`.
                 */
                strictMode?: boolean | undefined;
            }
            /**
             * The status of a routine build.
             */
            interface RoutineBuildStatus {
                /**
                 * Output only. The time taken for the image build. Populated only after the build succeeds or fails.
                 */
                buildDuration?: string | undefined;
                /**
                 * Output only. The current build state of the routine.
                 */
                buildState?: string | undefined;
                /**
                 * Output only. The time when the build state was updated last.
                 */
                buildStateUpdateTime?: string | undefined;
                /**
                 * Output only. A result object that will be present only if the build has failed.
                 */
                errorResult?: BigQuery.Schema.ErrorProto | undefined;
                /**
                 * Output only. The size of the image in bytes. Populated only after the build succeeds.
                 */
                imageSizeBytes?: string | undefined;
            }
            /**
             * Id path of a routine.
             */
            interface RoutineReference {
                /**
                 * Required. The ID of the dataset containing this routine.
                 */
                datasetId?: string | undefined;
                /**
                 * Required. The ID of the project containing this routine.
                 */
                projectId?: string | undefined;
                /**
                 * Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
                 */
                routineId?: string | undefined;
            }
            /**
             * A single row in the confusion matrix.
             */
            interface Row {
                /**
                 * The original label of this row.
                 */
                actualLabel?: string | undefined;
                /**
                 * Info describing predicted label distribution.
                 */
                entries?: BigQuery.Schema.Entry[] | undefined;
            }
            /**
             * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
             */
            interface RowAccessPolicy {
                /**
                 * Output only. The time when this row access policy was created, in milliseconds since the epoch.
                 */
                creationTime?: string | undefined;
                /**
                 * Output only. A hash of this resource.
                 */
                etag?: string | undefined;
                /**
                 * Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0
                 */
                filterPredicate?: string | undefined;
                /**
                 * Optional. Input only. The optional list of iam_member users or groups that specifies the initial members that the row-level access policy should be created with. grantees types: - "user:alice@example.com": An email address that represents a specific Google account. - "serviceAccount:my-other-app@appspot.gserviceaccount.com": An email address that represents a service account. - "group:admins@example.com": An email address that represents a Google group. - "domain:example.com":The Google Workspace domain (primary) that represents all the users of that domain. - "allAuthenticatedUsers": A special identifier that represents all service accounts and all users on the internet who have authenticated with a Google Account. This identifier includes accounts that aren't connected to a Google Workspace or Cloud Identity domain, such as personal Gmail accounts. Users who aren't authenticated, such as anonymous visitors, aren't included. - "allUsers":A special identifier that represents anyone who is on the internet, including authenticated and unauthenticated users. Because BigQuery requires authentication before a user can access the service, allUsers includes only authenticated users.
                 */
                grantees?: string[] | undefined;
                /**
                 * Output only. The time when this row access policy was last modified, in milliseconds since the epoch.
                 */
                lastModifiedTime?: string | undefined;
                /**
                 * Required. Reference describing the ID of this row access policy.
                 */
                rowAccessPolicyReference?: BigQuery.Schema.RowAccessPolicyReference | undefined;
            }
            /**
             * Id path of a row access policy.
             */
            interface RowAccessPolicyReference {
                /**
                 * Required. The ID of the dataset containing this row access policy.
                 */
                datasetId?: string | undefined;
                /**
                 * Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
                 */
                policyId?: string | undefined;
                /**
                 * Required. The ID of the project containing this row access policy.
                 */
                projectId?: string | undefined;
                /**
                 * Required. The ID of the table containing this row access policy.
                 */
                tableId?: string | undefined;
            }
            /**
             * Statistics for row-level security.
             */
            interface RowLevelSecurityStatistics {
                /**
                 * Whether any accessed data was protected by row access policies.
                 */
                rowLevelSecurityApplied?: boolean | undefined;
            }
            /**
             * Options related to script execution.
             */
            interface ScriptOptions {
                /**
                 * Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. Default is LAST.
                 */
                keyResultStatement?: string | undefined;
                /**
                 * Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
                 */
                statementByteBudget?: string | undefined;
                /**
                 * Timeout period for each statement in a script.
                 */
                statementTimeoutMs?: string | undefined;
            }
            /**
             * Represents the location of the statement/expression being evaluated. Line and column numbers are defined as follows: - Line and column numbers start with one. That is, line 1 column 1 denotes the start of the script. - When inside a stored procedure, all line/column numbers are relative to the procedure body, not the script in which the procedure was defined. - Start/end positions exclude leading/trailing comments and whitespace. The end position always ends with a ";", when present. - Multi-byte Unicode characters are treated as just one column. - If the original script (or procedure definition) contains TAB characters, a tab "snaps" the indentation forward to the nearest multiple of 8 characters, plus 1. For example, a TAB on column 1, 2, 3, 4, 5, 6 , or 8 will advance the next character to column 9. A TAB on column 9, 10, 11, 12, 13, 14, 15, or 16 will advance the next character to column 17.
             */
            interface ScriptStackFrame {
                /**
                 * Output only. One-based end column.
                 */
                endColumn?: number | undefined;
                /**
                 * Output only. One-based end line.
                 */
                endLine?: number | undefined;
                /**
                 * Output only. Name of the active procedure, empty if in a top-level script.
                 */
                procedureId?: string | undefined;
                /**
                 * Output only. One-based start column.
                 */
                startColumn?: number | undefined;
                /**
                 * Output only. One-based start line.
                 */
                startLine?: number | undefined;
                /**
                 * Output only. Text of the current statement/expression.
                 */
                text?: string | undefined;
            }
            /**
             * Job statistics specific to the child job of a script.
             */
            interface ScriptStatistics {
                /**
                 * Whether this child job was a statement or expression.
                 */
                evaluationKind?: string | undefined;
                /**
                 * Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.
                 */
                stackFrames?: BigQuery.Schema.ScriptStackFrame[] | undefined;
            }
            /**
             * Statistics for a search query. Populated as part of JobStatistics2.
             */
            interface SearchStatistics {
                /**
                 * Search index pruning statistics, one for each base table that has a search index. If a base table does not have a search index or the index does not help with pruning on the base table, then there is no pruning statistics for that table.
                 */
                indexPruningStats?: BigQuery.Schema.IndexPruningStats[] | undefined;
                /**
                 * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
                 */
                indexUnusedReasons?: BigQuery.Schema.IndexUnusedReason[] | undefined;
                /**
                 * Specifies the index usage mode for the query.
                 */
                indexUsageMode?: string | undefined;
            }
            /**
             * Serializer and deserializer information.
             */
            interface SerDeInfo {
                /**
                 * Optional. Name of the SerDe. The maximum length is 256 characters.
                 */
                name?: string | undefined;
                /**
                 * Optional. Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib.
                 */
                parameters?: Record<string, string> | undefined;
                /**
                 * Required. Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures. The maximum length is 256 characters.
                 */
                serializationLibrary?: string | undefined;
            }
            /**
             * [Preview] Information related to sessions.
             */
            interface SessionInfo {
                /**
                 * Output only. The id of the session.
                 */
                sessionId?: string | undefined;
            }
            /**
             * Request message for `SetIamPolicy` method.
             */
            interface SetIamPolicyRequest {
                /**
                 * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
                 */
                policy?: BigQuery.Schema.Policy | undefined;
                /**
                 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
                 */
                updateMask?: string | undefined;
            }
            /**
             * Details about source stages which produce skewed data.
             */
            interface SkewSource {
                /**
                 * Output only. Max partition output size (in bytes) for this stage.
                 */
                outputBytesMax?: string | undefined;
                /**
                 * Output only. Median partition output size (in bytes) for this stage.
                 */
                outputBytesMedian?: string | undefined;
                /**
                 * Output only. 95-th percentile of partition output size (in bytes) for this stage.
                 */
                outputBytesP95?: string | undefined;
                /**
                 * Output only. Stage id of the skew source stage.
                 */
                stageId?: string | undefined;
            }
            /**
             * Information about base table and snapshot time of the snapshot.
             */
            interface SnapshotDefinition {
                /**
                 * Required. Reference describing the ID of the table that was snapshot.
                 */
                baseTableReference?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Required. The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format.
                 */
                snapshotTime?: string | undefined;
            }
            /**
             * Spark job logs can be filtered by these fields in Cloud Logging.
             */
            interface SparkLoggingInfo {
                /**
                 * Output only. Project ID where the Spark logs were written.
                 */
                projectId?: string | undefined;
                /**
                 * Output only. Resource type used for logging.
                 */
                resourceType?: string | undefined;
            }
            /**
             * Options for a user-defined Spark routine.
             */
            interface SparkOptions {
                /**
                 * Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
                 */
                archiveUris?: string[] | undefined;
                /**
                 * Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}"```
                 */
                connection?: string | undefined;
                /**
                 * Custom container image for the runtime environment.
                 */
                containerImage?: string | undefined;
                /**
                 * Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
                 */
                fileUris?: string[] | undefined;
                /**
                 * JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
                 */
                jarUris?: string[] | undefined;
                /**
                 * The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type.
                 */
                mainClass?: string | undefined;
                /**
                 * The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type.
                 */
                mainFileUri?: string | undefined;
                /**
                 * Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list).
                 */
                properties?: Record<string, string> | undefined;
                /**
                 * Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: `.py`, `.egg`, and `.zip`. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
                 */
                pyFileUris?: string[] | undefined;
                /**
                 * Runtime version. If not specified, the default runtime version is used.
                 */
                runtimeVersion?: string | undefined;
            }
            /**
             * Statistics for a BigSpark query. Populated as part of JobStatistics2
             */
            interface SparkStatistics {
                /**
                 * Output only. Endpoints returned from Dataproc. Key list: - history_server_endpoint: A link to Spark job UI.
                 */
                endpoints?: Record<string, string> | undefined;
                /**
                 * Output only. The Google Cloud Storage bucket that is used as the default file system by the Spark application. This field is only filled when the Spark procedure uses the invoker security mode. The `gcsStagingBucket` bucket is inferred from the `@@spark_proc_properties.staging_bucket` system variable (if it is provided). Otherwise, BigQuery creates a default staging bucket for the job and returns the bucket name in this field. Example: * `gs://[bucket_name]`
                 */
                gcsStagingBucket?: string | undefined;
                /**
                 * Output only. The Cloud KMS encryption key that is used to protect the resources created by the Spark job. If the Spark procedure uses the invoker security mode, the Cloud KMS encryption key is either inferred from the provided system variable, `@@spark_proc_properties.kms_key_name`, or the default key of the BigQuery job's project (if the CMEK organization policy is enforced). Otherwise, the Cloud KMS key is either inferred from the Spark connection associated with the procedure (if it is provided), or from the default key of the Spark connection's project if the CMEK organization policy is enforced. Example: * `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`
                 */
                kmsKeyName?: string | undefined;
                /**
                 * Output only. Logging info is used to generate a link to Cloud Logging.
                 */
                loggingInfo?: BigQuery.Schema.SparkLoggingInfo | undefined;
                /**
                 * Output only. Spark job ID if a Spark job is created successfully.
                 */
                sparkJobId?: string | undefined;
                /**
                 * Output only. Location where the Spark job is executed. A location is selected by BigQueury for jobs configured to run in a multi-region.
                 */
                sparkJobLocation?: string | undefined;
            }
            /**
             * Performance insights compared to the previous executions for a specific stage.
             */
            interface StagePerformanceChangeInsight {
                /**
                 * Output only. Input data change insight of the query stage.
                 */
                inputDataChange?: BigQuery.Schema.InputDataChange | undefined;
                /**
                 * Output only. The stage id that the insight mapped to.
                 */
                stageId?: string | undefined;
            }
            /**
             * Standalone performance insights for a specific stage.
             */
            interface StagePerformanceStandaloneInsight {
                /**
                 * Output only. If present, the stage had the following reasons for being disqualified from BI Engine execution.
                 */
                biEngineReasons?: BigQuery.Schema.BiEngineReason[] | undefined;
                /**
                 * Output only. High cardinality joins in the stage.
                 */
                highCardinalityJoins?: BigQuery.Schema.HighCardinalityJoin[] | undefined;
                /**
                 * Output only. True if the stage has insufficient shuffle quota.
                 */
                insufficientShuffleQuota?: boolean | undefined;
                /**
                 * Output only. Partition skew in the stage.
                 */
                partitionSkew?: BigQuery.Schema.PartitionSkew | undefined;
                /**
                 * Output only. True if the stage has a slot contention issue.
                 */
                slotContention?: boolean | undefined;
                /**
                 * Output only. The stage id that the insight mapped to.
                 */
                stageId?: string | undefined;
            }
            /**
             * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"\}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"\} \} * STRUCT\>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"\} \}, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"\} \} \} ] \} \} * RANGE: { "typeKind": "RANGE", "rangeElementType": {"typeKind": "DATE"\} \}
             */
            interface StandardSqlDataType {
                /**
                 * The type of the array's elements, if type_kind = "ARRAY".
                 */
                arrayElementType?: BigQuery.Schema.StandardSqlDataType | undefined;
                /**
                 * The type of the range's elements, if type_kind = "RANGE".
                 */
                rangeElementType?: BigQuery.Schema.StandardSqlDataType | undefined;
                /**
                 * The fields of this struct, in order, if type_kind = "STRUCT".
                 */
                structType?: BigQuery.Schema.StandardSqlStructType | undefined;
                /**
                 * Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY").
                 */
                typeKind?: string | undefined;
            }
            /**
             * A field or a column.
             */
            interface StandardSqlField {
                /**
                 * Optional. The name of this field. Can be absent for struct fields.
                 */
                name?: string | undefined;
                /**
                 * Optional. The type of this parameter. Absent if not explicitly specified (e.g., CREATE FUNCTION statement can omit the return type; in this case the output parameter does not have this "type" field).
                 */
                type?: BigQuery.Schema.StandardSqlDataType | undefined;
            }
            /**
             * The representation of a SQL STRUCT type.
             */
            interface StandardSqlStructType {
                /**
                 * Fields within the struct.
                 */
                fields?: BigQuery.Schema.StandardSqlField[] | undefined;
            }
            /**
             * A table type
             */
            interface StandardSqlTableType {
                /**
                 * The columns in this table type
                 */
                columns?: BigQuery.Schema.StandardSqlField[] | undefined;
            }
            /**
             * Contains information about how a table's data is stored and accessed by open source query engines.
             */
            interface StorageDescriptor {
                /**
                 * Optional. Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters.
                 */
                inputFormat?: string | undefined;
                /**
                 * Optional. The physical location of the table (e.g. `gs://spark-dataproc-data/pangea-data/case_sensitive/` or `gs://spark-dataproc-data/pangea-data/x`). The maximum length is 2056 bytes.
                 */
                locationUri?: string | undefined;
                /**
                 * Optional. Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters.
                 */
                outputFormat?: string | undefined;
                /**
                 * Optional. Serializer and deserializer information.
                 */
                serdeInfo?: BigQuery.Schema.SerDeInfo | undefined;
            }
            /**
             * If the stored column was not used, explain why.
             */
            interface StoredColumnsUnusedReason {
                /**
                 * Specifies the high-level reason for the unused scenario, each reason must have a code associated.
                 */
                code?: string | undefined;
                /**
                 * Specifies the detailed description for the scenario.
                 */
                message?: string | undefined;
                /**
                 * Specifies which columns were not covered by the stored columns for the specified code up to 20 columns. This is populated when the code is STORED_COLUMNS_COVER_INSUFFICIENT and BASE_TABLE_HAS_CLS.
                 */
                uncoveredColumns?: string[] | undefined;
            }
            /**
             * Indicates the stored columns usage in the query.
             */
            interface StoredColumnsUsage {
                /**
                 * Specifies the base table.
                 */
                baseTable?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Specifies whether the query was accelerated with stored columns.
                 */
                isQueryAccelerated?: boolean | undefined;
                /**
                 * If stored columns were not used, explain why.
                 */
                storedColumnsUnusedReasons?: BigQuery.Schema.StoredColumnsUnusedReason[] | undefined;
            }
            interface Streamingbuffer {
                /**
                 * Output only. A lower-bound estimate of the number of bytes currently in the streaming buffer.
                 */
                estimatedBytes?: string | undefined;
                /**
                 * Output only. A lower-bound estimate of the number of rows currently in the streaming buffer.
                 */
                estimatedRows?: string | undefined;
                /**
                 * Output only. Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.
                 */
                oldestEntryTime?: string | undefined;
            }
            /**
             * Search space for string and enum.
             */
            interface StringHparamSearchSpace {
                /**
                 * Canididates for the string or enum parameter in lower case.
                 */
                candidates?: string[] | undefined;
            }
            /**
             * System variables given to a query.
             */
            interface SystemVariables {
                /**
                 * Output only. Data type for each system variable.
                 */
                types?: Record<string, BigQuery.Schema.StandardSqlDataType> | undefined;
                /**
                 * Output only. Value for each system variable.
                 */
                values?: Record<string, any> | undefined;
            }
            interface Table {
                /**
                 * Optional. Specifies the configuration of a BigQuery table for Apache Iceberg.
                 */
                biglakeConfiguration?: BigQuery.Schema.BigLakeConfiguration | undefined;
                /**
                 * Output only. Contains information about the clone. This value is set via the clone operation.
                 */
                cloneDefinition?: BigQuery.Schema.CloneDefinition | undefined;
                /**
                 * Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
                 */
                clustering?: BigQuery.Schema.Clustering | undefined;
                /**
                 * Output only. The time when this table was created, in milliseconds since the epoch.
                 */
                creationTime?: string | undefined;
                /**
                 * Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
                 */
                defaultCollation?: string | undefined;
                /**
                 * Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn't affect existing fields.
                 */
                defaultRoundingMode?: string | undefined;
                /**
                 * Optional. A user-friendly description of this table.
                 */
                description?: string | undefined;
                /**
                 * Custom encryption configuration (e.g., Cloud KMS keys).
                 */
                encryptionConfiguration?: BigQuery.Schema.EncryptionConfiguration | undefined;
                /**
                 * Output only. A hash of this resource.
                 */
                etag?: string | undefined;
                /**
                 * Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
                 */
                expirationTime?: string | undefined;
                /**
                 * Optional. Options defining open source compatible table.
                 */
                externalCatalogTableOptions?: BigQuery.Schema.ExternalCatalogTableOptions | undefined;
                /**
                 * Optional. Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
                 */
                externalDataConfiguration?: BigQuery.Schema.ExternalDataConfiguration | undefined;
                /**
                 * Optional. A descriptive name for this table.
                 */
                friendlyName?: string | undefined;
                /**
                 * Output only. An opaque ID uniquely identifying the table.
                 */
                id?: string | undefined;
                /**
                 * The type of resource ID.
                 */
                kind?: string | undefined;
                /**
                 * The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
                 */
                labels?: Record<string, string> | undefined;
                /**
                 * Output only. The time when this table was last modified, in milliseconds since the epoch.
                 */
                lastModifiedTime?: string | undefined;
                /**
                 * Output only. The geographic location where the table resides. This value is inherited from the dataset.
                 */
                location?: string | undefined;
                /**
                 * Optional. If set, overrides the default managed table type configured in the dataset.
                 */
                managedTableType?: string | undefined;
                /**
                 * Optional. The materialized view definition.
                 */
                materializedView?: BigQuery.Schema.MaterializedViewDefinition | undefined;
                /**
                 * Output only. The materialized view status.
                 */
                materializedViewStatus?: BigQuery.Schema.MaterializedViewStatus | undefined;
                /**
                 * Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.
                 */
                maxStaleness?: string | undefined;
                /**
                 * Deprecated.
                 */
                model?: BigQuery.Schema.ModelDefinition | undefined;
                /**
                 * Output only. Number of logical bytes that are less than 90 days old.
                 */
                numActiveLogicalBytes?: string | undefined;
                /**
                 * Output only. Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numActivePhysicalBytes?: string | undefined;
                /**
                 * Output only. The size of this table in logical bytes, excluding any data in the streaming buffer.
                 */
                numBytes?: string | undefined;
                /**
                 * Output only. Number of physical bytes used by current live data storage. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numCurrentPhysicalBytes?: string | undefined;
                /**
                 * Output only. The number of logical bytes in the table that are considered "long-term storage".
                 */
                numLongTermBytes?: string | undefined;
                /**
                 * Output only. Number of logical bytes that are more than 90 days old.
                 */
                numLongTermLogicalBytes?: string | undefined;
                /**
                 * Output only. Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numLongTermPhysicalBytes?: string | undefined;
                /**
                 * Output only. The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numPartitions?: string | undefined;
                /**
                 * Output only. The physical size of this table in bytes. This includes storage used for time travel.
                 */
                numPhysicalBytes?: string | undefined;
                /**
                 * Output only. The number of rows of data in this table, excluding any data in the streaming buffer.
                 */
                numRows?: string | undefined;
                /**
                 * Output only. Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numTimeTravelPhysicalBytes?: string | undefined;
                /**
                 * Output only. Total number of logical bytes in the table or materialized view.
                 */
                numTotalLogicalBytes?: string | undefined;
                /**
                 * Output only. The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
                 */
                numTotalPhysicalBytes?: string | undefined;
                /**
                 * Optional. The partition information for all table formats, including managed partitioned tables, hive partitioned tables, iceberg partitioned, and metastore partitioned tables. This field is only populated for metastore partitioned tables. For other table formats, this is an output only field.
                 */
                partitionDefinition?: BigQuery.Schema.PartitioningDefinition | undefined;
                /**
                 * If specified, configures range partitioning for this table.
                 */
                rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                /**
                 * Optional. Output only. Table references of all replicas currently active on the table.
                 */
                replicas?: BigQuery.Schema.TableReference[] | undefined;
                /**
                 * Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
                 */
                requirePartitionFilter?: boolean | undefined;
                /**
                 * [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production".
                 */
                resourceTags?: Record<string, string> | undefined;
                /**
                 * Optional. Output only. Restriction config for table. If set, restrict certain accesses on the table based on the config. See [Data egress](https://cloud.google.com/bigquery/docs/analytics-hub-introduction#data_egress) for more details.
                 */
                restrictions?: BigQuery.Schema.RestrictionConfig | undefined;
                /**
                 * Optional. Describes the schema of this table.
                 */
                schema?: BigQuery.Schema.TableSchema | undefined;
                /**
                 * Output only. A URL that can be used to access this resource again.
                 */
                selfLink?: string | undefined;
                /**
                 * Output only. Contains information about the snapshot. This value is set via snapshot creation.
                 */
                snapshotDefinition?: BigQuery.Schema.SnapshotDefinition | undefined;
                /**
                 * Output only. Contains information regarding this table's streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer.
                 */
                streamingBuffer?: BigQuery.Schema.Streamingbuffer | undefined;
                /**
                 * Optional. Tables Primary Key and Foreign Key information
                 */
                tableConstraints?: BigQuery.Schema.TableConstraints | undefined;
                /**
                 * Required. Reference describing the ID of this table.
                 */
                tableReference?: BigQuery.Schema.TableReference | undefined;
                /**
                 * Optional. Table replication info for table created `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`
                 */
                tableReplicationInfo?: BigQuery.Schema.TableReplicationInfo | undefined;
                /**
                 * If specified, configures time-based partitioning for this table.
                 */
                timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                /**
                 * Output only. Describes the table type. The following values are supported: * `TABLE`: A normal BigQuery table. * `VIEW`: A virtual table defined by a SQL query. * `EXTERNAL`: A table that references data stored in an external storage system, such as Google Cloud Storage. * `MATERIALIZED_VIEW`: A precomputed view defined by a SQL query. * `SNAPSHOT`: An immutable BigQuery table that preserves the contents of a base table at a particular time. See additional information on [table snapshots](https://cloud.google.com/bigquery/docs/table-snapshots-intro). The default value is `TABLE`.
                 */
                type?: string | undefined;
                /**
                 * Optional. The view definition.
                 */
                view?: BigQuery.Schema.ViewDefinition | undefined;
            }
            interface TableCell {
                v?: any;
            }
            /**
             * Table-level performance insights compared to previous runs. These insights don't apply to specific query stages, rather they apply to the whole table.
             */
            interface TableChangeInsight {
                /**
                 * Output only. True if the table's column metadata index was not used in the current job, but was used in a previous job with the same query hash.
                 */
                metadataCacheNotUsedButUsedPreviously?: boolean | undefined;
                /**
                 * Output only. If present, indicates that the table's metadata column index staleness has increased significantly compared to previous jobs with the same query hash.
                 */
                metadataCacheStalenessInsight?: BigQuery.Schema.MetadataCacheStalenessInsight | undefined;
                /**
                 * Output only. The table that was queried.
                 */
                tableReference?: BigQuery.Schema.TableReference | undefined;
            }
            /**
             * The TableConstraints defines the primary key and foreign key.
             */
            interface TableConstraints {
                /**
                 * Optional. Present only if the table has a foreign key. The foreign key is not enforced.
                 */
                foreignKeys?:
                    | Array<{
                        /**
                         * Required. The columns that compose the foreign key.
                         */
                        columnReferences?:
                            | Array<{
                                /**
                                 * Required. The column in the primary key that are referenced by the referencing_column.
                                 */
                                referencedColumn?: string | undefined;
                                /**
                                 * Required. The column that composes the foreign key.
                                 */
                                referencingColumn?: string | undefined;
                            }>
                            | undefined;
                        /**
                         * Optional. Set only if the foreign key constraint is named.
                         */
                        name?: string | undefined;
                        referencedTable?: {
                            datasetId?: string | undefined;
                            projectId?: string | undefined;
                            tableId?: string | undefined;
                        } | undefined;
                    }>
                    | undefined;
                /**
                 * Represents the primary key constraint on a table's columns.
                 */
                primaryKey?: {
                    /**
                     * Required. The columns that are composed of the primary key constraint.
                     */
                    columns?: string[] | undefined;
                } | undefined;
            }
            /**
             * Request for sending a single streaming insert.
             */
            interface TableDataInsertAllRequest {
                /**
                 * Optional. Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
                 */
                ignoreUnknownValues?: boolean | undefined;
                /**
                 * Optional. The resource type of the response. The value is not checked at the backend. Historically, it has been set to "bigquery#tableDataInsertAllRequest" but you are not required to set it.
                 */
                kind?: string | undefined;
                rows?:
                    | Array<{
                        /**
                         * Insertion ID for best-effort deduplication. This feature is not recommended, and users seeking stronger insertion semantics are encouraged to use other mechanisms such as the BigQuery Write API.
                         */
                        insertId?: string | undefined;
                        /**
                         * Data for a single row.
                         */
                        json?: BigQuery.Schema.JsonObject | undefined;
                    }>
                    | undefined;
                /**
                 * Optional. Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
                 */
                skipInvalidRows?: boolean | undefined;
                /**
                 * Optional. If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination\}{templateSuffix\}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
                 */
                templateSuffix?: string | undefined;
                /**
                 * Optional. Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.
                 */
                traceId?: string | undefined;
            }
            /**
             * Describes the format of a streaming insert response.
             */
            interface TableDataInsertAllResponse {
                /**
                 * Describes specific errors encountered while processing the request.
                 */
                insertErrors?:
                    | Array<{
                        /**
                         * Error information for the row indicated by the index property.
                         */
                        errors?: BigQuery.Schema.ErrorProto[] | undefined;
                        /**
                         * The index of the row that error applies to.
                         */
                        index?: number | undefined;
                    }>
                    | undefined;
                /**
                 * Returns "bigquery#tableDataInsertAllResponse".
                 */
                kind?: string | undefined;
            }
            interface TableDataList {
                /**
                 * A hash of this page of results.
                 */
                etag?: string | undefined;
                /**
                 * The resource type of the response.
                 */
                kind?: string | undefined;
                /**
                 * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
                 */
                pageToken?: string | undefined;
                /**
                 * Rows of results.
                 */
                rows?: BigQuery.Schema.TableRow[] | undefined;
                /**
                 * Total rows of the entire table. In order to show default value 0 we have to present it as string.
                 */
                totalRows?: string | undefined;
            }
            /**
             * A field in TableSchema
             */
            interface TableFieldSchema {
                /**
                 * Deprecated.
                 */
                categories?: {
                    /**
                     * Deprecated.
                     */
                    names?: string[] | undefined;
                } | undefined;
                /**
                 * Optional. Field collation can be set only when the type of field is STRING. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
                 */
                collation?: string | undefined;
                /**
                 * Optional. Specifies the data governance tags on this field. This field works with other column-level security fields as follows: * **Precedence**: If a data governance tag is attached to a column, it takes precedence over the policy tag attached to the column. However, if a data policy is attached to a column, it takes precedence over the data governance tag. * **Patching behavior**: Describes how this field behaves during a `Table.patch` schema update: * **Unset**: If the `data_governance_tags_info` field is omitted from the update request, the existing tags on the column are preserved. * **Empty Field**: To clear data governance tags from a column, send the `data_governance_tags_info` field as an empty object. This removes all tags from the column. * **Updating tags**: To replace an existing tag, send the field with the new tag.
                 */
                dataGovernanceTagsInfo?: {
                    /**
                     * Optional. The data governance tags added to this field are used for field-level access control. Only one data governance tag is currently supported on a field. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "parent-id/pii" where parent-id is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "sensitive". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions) for more details. For example: "parent-id/pii": "sensitive", "myProject/cost_center": "sales"
                     */
                    dataGovernanceTags?: Record<string, string> | undefined;
                } | undefined;
                /**
                 * Optional. Data policies attached to this field, used for field-level access control.
                 */
                dataPolicies?: BigQuery.Schema.DataPolicyOption[] | undefined;
                /**
                 * Optional. Specifies data policies attached to this field, used for field-level access control. When set, this will be the source of truth for data policy information.
                 */
                dataPolicyList?: BigQuery.Schema.DataPolicyList | undefined;
                /**
                 * Optional. A SQL expression to specify the [default value] (https://cloud.google.com/bigquery/docs/default-values) for this field.
                 */
                defaultValueExpression?: string | undefined;
                /**
                 * Optional. The field description. The maximum length is 1,024 characters.
                 */
                description?: string | undefined;
                /**
                 * Optional. Describes the nested schema fields if the type property is set to RECORD.
                 */
                fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
                /**
                 * Optional. Definition of the foreign data type. Only valid for top-level schema fields (not nested fields). If the type is FOREIGN, this field is required.
                 */
                foreignTypeDefinition?: string | undefined;
                /**
                 * Optional. Definition of how values are generated for the field. Only valid for top-level schema fields (not nested fields).
                 */
                generatedColumn?: BigQuery.Schema.GeneratedColumn | undefined;
                /**
                 * Optional. Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES".
                 */
                maxLength?: string | undefined;
                /**
                 * Optional. The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
                 */
                mode?: string | undefined;
                /**
                 * Required. The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.
                 */
                name?: string | undefined;
                /**
                 * Optional. The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.
                 */
                policyTags?: {
                    /**
                     * A list of policy tag resource names. For example, "projects/1/locations/eu/taxonomies/2/policyTags/3". At most 1 policy tag is currently allowed.
                     */
                    names?: string[] | undefined;
                } | undefined;
                /**
                 * Optional. Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): * If type = "NUMERIC": 1 ≤ precision ≤ 29. * If type = "BIGNUMERIC": 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid.
                 */
                precision?: string | undefined;
                /**
                 * Represents the type of a field element.
                 */
                rangeElementType?: {
                    /**
                     * Required. The type of a field element. For more information, see TableFieldSchema.type.
                     */
                    type?: string | undefined;
                } | undefined;
                /**
                 * Optional. Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type.
                 */
                roundingMode?: string | undefined;
                /**
                 * Optional. See documentation for precision.
                 */
                scale?: string | undefined;
                /**
                 * Optional. Precision (maximum number of total digits in base 10) for seconds of TIMESTAMP type. Possible values include: * 6 (Default, for TIMESTAMP type with microsecond precision) * 12 (For TIMESTAMP type with picosecond precision)
                 */
                timestampPrecision?: string | undefined;
                /**
                 * Required. The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) * RANGE Use of RECORD/STRUCT indicates that the field contains a nested schema.
                 */
                type?: string | undefined;
            }
            /**
             * Partial projection of the metadata for a given table in a list response.
             */
            interface TableList {
                /**
                 * A hash of this page of results.
                 */
                etag?: string | undefined;
                /**
                 * The type of list.
                 */
                kind?: string | undefined;
                /**
                 * A token to request the next page of results.
                 */
                nextPageToken?: string | undefined;
                /**
                 * Tables in the requested dataset.
                 */
                tables?:
                    | Array<{
                        /**
                         * Clustering specification for this table, if configured.
                         */
                        clustering?: BigQuery.Schema.Clustering | undefined;
                        /**
                         * Output only. The time when this table was created, in milliseconds since the epoch.
                         */
                        creationTime?: string | undefined;
                        /**
                         * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
                         */
                        expirationTime?: string | undefined;
                        /**
                         * The user-friendly name for this table.
                         */
                        friendlyName?: string | undefined;
                        /**
                         * An opaque ID of the table.
                         */
                        id?: string | undefined;
                        /**
                         * The resource type.
                         */
                        kind?: string | undefined;
                        /**
                         * The labels associated with this table. You can use these to organize and group your tables.
                         */
                        labels?: Record<string, string> | undefined;
                        /**
                         * The range partitioning for this table.
                         */
                        rangePartitioning?: BigQuery.Schema.RangePartitioning | undefined;
                        /**
                         * Optional. If set to true, queries including this table must specify a partition filter. This filter is used for partition elimination.
                         */
                        requirePartitionFilter?: boolean | undefined;
                        /**
                         * A reference uniquely identifying table.
                         */
                        tableReference?: BigQuery.Schema.TableReference | undefined;
                        /**
                         * The time-based partitioning for this table.
                         */
                        timePartitioning?: BigQuery.Schema.TimePartitioning | undefined;
                        /**
                         * The type of table.
                         */
                        type?: string | undefined;
                        /**
                         * Information about a logical view.
                         */
                        view?: {
                            /**
                             * Specifies the privacy policy for the view.
                             */
                            privacyPolicy?: BigQuery.Schema.PrivacyPolicy | undefined;
                            /**
                             * True if view is defined in legacy SQL dialect, false if in GoogleSQL.
                             */
                            useLegacySql?: boolean | undefined;
                        } | undefined;
                    }>
                    | undefined;
                /**
                 * The total number of tables in the dataset.
                 */
                totalItems?: number | undefined;
            }
            /**
             * Table level detail on the usage of metadata caching. Only set for Metadata caching eligible tables referenced in the query.
             */
            interface TableMetadataCacheUsage {
                /**
                 * Free form human-readable reason metadata caching was unused for the job.
                 */
                explanation?: string | undefined;
                /**
                 * The column metadata index pruning statistics.
                 */
                pruningStats?: BigQuery.Schema.PruningStats | undefined;
                /**
                 * Duration since last refresh as of this job for managed tables (indicates metadata cache staleness as seen by this job).
                 */
                staleness?: string | undefined;
                /**
                 * Metadata caching eligible table referenced in the query.
                 */
                tableReference?: BigQuery.Schema.TableReference | undefined;
                /**
                 * [Table type](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.type).
                 */
                tableType?: string | undefined;
                /**
                 * Reason for not using metadata caching for the table.
                 */
                unusedReason?: string | undefined;
            }
            interface TableReference {
                /**
                 * Required. The ID of the dataset containing this table.
                 */
                datasetId?: string | undefined;
                /**
                 * Required. The ID of the project containing this table.
                 */
                projectId?: string | undefined;
                /**
                 * Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.
                 */
                tableId?: string | undefined;
            }
            /**
             * Replication info of a table created using `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`
             */
            interface TableReplicationInfo {
                /**
                 * Optional. Output only. If source is a materialized view, this field signifies the last refresh time of the source.
                 */
                replicatedSourceLastRefreshTime?: string | undefined;
                /**
                 * Optional. Output only. Replication error that will permanently stopped table replication.
                 */
                replicationError?: BigQuery.Schema.ErrorProto | undefined;
                /**
                 * Optional. Specifies the interval at which the source table is polled for updates. It's Optional. If not specified, default replication interval would be applied.
                 */
                replicationIntervalMs?: string | undefined;
                /**
                 * Optional. Output only. Replication status of configured replication.
                 */
                replicationStatus?: string | undefined;
                /**
                 * Required. Source table reference that is replicated.
                 */
                sourceTable?: BigQuery.Schema.TableReference | undefined;
            }
            interface TableRow {
                /**
                 * Represents a single row in the result set, consisting of one or more fields.
                 */
                f?: BigQuery.Schema.TableCell[] | undefined;
            }
            /**
             * Schema of a table
             */
            interface TableSchema {
                /**
                 * Describes the fields in a table.
                 */
                fields?: BigQuery.Schema.TableFieldSchema[] | undefined;
                /**
                 * Optional. Specifies metadata of the foreign data type definition in field schema (TableFieldSchema.foreign_type_definition).
                 */
                foreignTypeInfo?: BigQuery.Schema.ForeignTypeInfo | undefined;
            }
            /**
             * Request message for `TestIamPermissions` method.
             */
            interface TestIamPermissionsRequest {
                /**
                 * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
                 */
                permissions?: string[] | undefined;
            }
            /**
             * Response message for `TestIamPermissions` method.
             */
            interface TestIamPermissionsResponse {
                /**
                 * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
                 */
                permissions?: string[] | undefined;
            }
            interface TimePartitioning {
                /**
                 * Optional. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
                 */
                expirationMs?: string | undefined;
                /**
                 * Optional. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. A wrapper is used here because an empty string is an invalid value.
                 */
                field?: string | undefined;
                /**
                 * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. This field is deprecated; please set the field with the same name on the table itself instead. This field needs a wrapper because we want to output the default value, false, if the user explicitly set it.
                 * @deprecated
                 */
                requirePartitionFilter?: boolean | undefined;
                /**
                 * Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
                 */
                type?: string | undefined;
            }
            /**
             * Options used in model training.
             */
            interface TrainingOptions {
                /**
                 * Activation function of the neural nets.
                 */
                activationFn?: string | undefined;
                /**
                 * If true, detect step changes and make data adjustment in the input time series.
                 */
                adjustStepChanges?: boolean | undefined;
                /**
                 * Whether to use approximate feature contribution method in XGBoost model explanation for global explain.
                 */
                approxGlobalFeatureContrib?: boolean | undefined;
                /**
                 * Whether to enable auto ARIMA or not.
                 */
                autoArima?: boolean | undefined;
                /**
                 * The max value of the sum of non-seasonal p and q.
                 */
                autoArimaMaxOrder?: string | undefined;
                /**
                 * The min value of the sum of non-seasonal p and q.
                 */
                autoArimaMinOrder?: string | undefined;
                /**
                 * Whether to calculate class weights automatically based on the popularity of each label.
                 */
                autoClassWeights?: boolean | undefined;
                /**
                 * Batch size for dnn models.
                 */
                batchSize?: string | undefined;
                /**
                 * Booster type for boosted tree models.
                 */
                boosterType?: string | undefined;
                /**
                 * Budget in hours for AutoML training.
                 */
                budgetHours?: number | undefined;
                /**
                 * Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models.
                 */
                calculatePValues?: boolean | undefined;
                /**
                 * Categorical feature encoding method.
                 */
                categoryEncodingMethod?: string | undefined;
                /**
                 * If true, clean spikes and dips in the input time series.
                 */
                cleanSpikesAndDips?: boolean | undefined;
                /**
                 * Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace.
                 */
                colorSpace?: string | undefined;
                /**
                 * Subsample ratio of columns for each level for boosted tree models.
                 */
                colsampleBylevel?: number | undefined;
                /**
                 * Subsample ratio of columns for each node(split) for boosted tree models.
                 */
                colsampleBynode?: number | undefined;
                /**
                 * Subsample ratio of columns when constructing each tree for boosted tree models.
                 */
                colsampleBytree?: number | undefined;
                /**
                 * The contribution metric. Applies to contribution analysis models. Allowed formats supported are for summable and summable ratio contribution metrics. These include expressions such as `SUM(x)` or `SUM(x)/SUM(y)`, where x and y are column names from the base table.
                 */
                contributionMetric?: string | undefined;
                /**
                 * Type of normalization algorithm for boosted tree models using dart booster.
                 */
                dartNormalizeType?: string | undefined;
                /**
                 * The data frequency of a time series.
                 */
                dataFrequency?: string | undefined;
                /**
                 * The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data_type_properties
                 */
                dataSplitColumn?: string | undefined;
                /**
                 * The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
                 */
                dataSplitEvalFraction?: number | undefined;
                /**
                 * The data split type for training and evaluation, e.g. RANDOM.
                 */
                dataSplitMethod?: string | undefined;
                /**
                 * If true, perform decompose time series and save the results.
                 */
                decomposeTimeSeries?: boolean | undefined;
                /**
                 * Optional. Names of the columns to slice on. Applies to contribution analysis models.
                 */
                dimensionIdColumns?: string[] | undefined;
                /**
                 * Distance type for clustering models.
                 */
                distanceType?: string | undefined;
                /**
                 * Dropout probability for dnn models.
                 */
                dropout?: number | undefined;
                /**
                 * Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
                 */
                earlyStop?: boolean | undefined;
                /**
                 * If true, enable global explanation during training.
                 */
                enableGlobalExplain?: boolean | undefined;
                /**
                 * The idle TTL of the endpoint before the resources get destroyed. The default value is 6.5 hours.
                 */
                endpointIdleTtl?: string | undefined;
                /**
                 * Feedback type that specifies which algorithm to run for matrix factorization.
                 */
                feedbackType?: string | undefined;
                /**
                 * Whether the model should include intercept during model training.
                 */
                fitIntercept?: boolean | undefined;
                /**
                 * The forecast limit lower bound that was used during ARIMA model training with limits. To see more details of the algorithm: https://otexts.com/fpp2/limits.html
                 */
                forecastLimitLowerBound?: number | undefined;
                /**
                 * The forecast limit upper bound that was used during ARIMA model training with limits.
                 */
                forecastLimitUpperBound?: number | undefined;
                /**
                 * Hidden units for dnn models.
                 */
                hiddenUnits?: string[] | undefined;
                /**
                 * The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.
                 */
                holidayRegion?: string | undefined;
                /**
                 * A list of geographical regions that are used for time series modeling.
                 */
                holidayRegions?: string[] | undefined;
                /**
                 * The number of periods ahead that need to be forecasted.
                 */
                horizon?: string | undefined;
                /**
                 * The target evaluation metrics to optimize the hyperparameters for.
                 */
                hparamTuningObjectives?: string[] | undefined;
                /**
                 * The id of a Hugging Face model. For example, `google/gemma-2-2b-it`.
                 */
                huggingFaceModelId?: string | undefined;
                /**
                 * Include drift when fitting an ARIMA model.
                 */
                includeDrift?: boolean | undefined;
                /**
                 * Specifies the initial learning rate for the line search learn rate strategy.
                 */
                initialLearnRate?: number | undefined;
                /**
                 * Name of input label columns in training data.
                 */
                inputLabelColumns?: string[] | undefined;
                /**
                 * Name of the instance weight column for training data. This column isn't be used as a feature.
                 */
                instanceWeightColumn?: string | undefined;
                /**
                 * Number of integral steps for the integrated gradients explain method.
                 */
                integratedGradientsNumSteps?: string | undefined;
                /**
                 * Name of the column used to determine the rows corresponding to control and test. Applies to contribution analysis models.
                 */
                isTestColumn?: string | undefined;
                /**
                 * Item column specified for matrix factorization models.
                 */
                itemColumn?: string | undefined;
                /**
                 * The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
                 */
                kmeansInitializationColumn?: string | undefined;
                /**
                 * The method used to initialize the centroids for kmeans algorithm.
                 */
                kmeansInitializationMethod?: string | undefined;
                /**
                 * L1 regularization coefficient to activations.
                 */
                l1RegActivation?: number | undefined;
                /**
                 * L1 regularization coefficient.
                 */
                l1Regularization?: number | undefined;
                /**
                 * L2 regularization coefficient.
                 */
                l2Regularization?: number | undefined;
                /**
                 * Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
                 */
                labelClassWeights?: Record<string, number> | undefined;
                /**
                 * Learning rate in training. Used only for iterative training algorithms.
                 */
                learnRate?: number | undefined;
                /**
                 * The strategy to determine learn rate for the current iteration.
                 */
                learnRateStrategy?: string | undefined;
                /**
                 * Type of loss function used during training run.
                 */
                lossType?: string | undefined;
                /**
                 * The type of the machine used to deploy and serve the model.
                 */
                machineType?: string | undefined;
                /**
                 * The maximum number of iterations in training. Used only for iterative training algorithms.
                 */
                maxIterations?: string | undefined;
                /**
                 * Maximum number of trials to run in parallel.
                 */
                maxParallelTrials?: string | undefined;
                /**
                 * The maximum number of machine replicas that will be deployed on an endpoint. The default value is equal to min_replica_count.
                 */
                maxReplicaCount?: string | undefined;
                /**
                 * The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options.
                 */
                maxTimeSeriesLength?: string | undefined;
                /**
                 * Maximum depth of a tree for boosted tree models.
                 */
                maxTreeDepth?: string | undefined;
                /**
                 * The apriori support minimum. Applies to contribution analysis models.
                 */
                minAprioriSupport?: number | undefined;
                /**
                 * When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.
                 */
                minRelativeProgress?: number | undefined;
                /**
                 * The minimum number of machine replicas that will be always deployed on an endpoint. This value must be greater than or equal to 1. The default value is 1.
                 */
                minReplicaCount?: string | undefined;
                /**
                 * Minimum split loss for boosted tree models.
                 */
                minSplitLoss?: number | undefined;
                /**
                 * The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points.
                 */
                minTimeSeriesLength?: string | undefined;
                /**
                 * Minimum sum of instance weight needed in a child for boosted tree models.
                 */
                minTreeChildWeight?: string | undefined;
                /**
                 * The name of a Vertex model garden publisher model. Format is `publishers/{publisher\}/models/{model\}@{optional_version_id\}`.
                 */
                modelGardenModelName?: string | undefined;
                /**
                 * The model registry.
                 */
                modelRegistry?: string | undefined;
                /**
                 * Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
                 */
                modelUri?: string | undefined;
                /**
                 * A specification of the non-seasonal part of the ARIMA model: the three components (p, d, q) are the AR order, the degree of differencing, and the MA order.
                 */
                nonSeasonalOrder?: BigQuery.Schema.ArimaOrder | undefined;
                /**
                 * Number of clusters for clustering models.
                 */
                numClusters?: string | undefined;
                /**
                 * Num factors specified for matrix factorization models.
                 */
                numFactors?: string | undefined;
                /**
                 * Number of parallel trees constructed during each iteration for boosted tree models.
                 */
                numParallelTree?: string | undefined;
                /**
                 * Number of principal components to keep in the PCA model. Must be <= the number of features.
                 */
                numPrincipalComponents?: string | undefined;
                /**
                 * Number of trials to run this hyperparameter tuning job.
                 */
                numTrials?: string | undefined;
                /**
                 * Optimization strategy for training linear regression models.
                 */
                optimizationStrategy?: string | undefined;
                /**
                 * Optimizer used for training the neural nets.
                 */
                optimizer?: string | undefined;
                /**
                 * The minimum ratio of cumulative explained variance that needs to be given by the PCA model.
                 */
                pcaExplainedVarianceRatio?: number | undefined;
                /**
                 * The solver for PCA.
                 */
                pcaSolver?: string | undefined;
                /**
                 * Corresponds to the label key of a reservation resource used by Vertex AI. To target a SPECIFIC_RESERVATION by name, use `compute.googleapis.com/reservation-name` as the key and specify the name of your reservation as its value.
                 */
                reservationAffinityKey?: string | undefined;
                /**
                 * Specifies the reservation affinity type used to configure a Vertex AI resource. The default value is `NO_RESERVATION`.
                 */
                reservationAffinityType?: string | undefined;
                /**
                 * Corresponds to the label values of a reservation resource used by Vertex AI. This must be the full resource name of the reservation or reservation block.
                 */
                reservationAffinityValues?: string[] | undefined;
                /**
                 * Number of paths for the sampled Shapley explain method.
                 */
                sampledShapleyNumPaths?: string | undefined;
                /**
                 * If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA.
                 */
                scaleFeatures?: boolean | undefined;
                /**
                 * Whether to standardize numerical features. Default to true.
                 */
                standardizeFeatures?: boolean | undefined;
                /**
                 * Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
                 */
                subsample?: number | undefined;
                /**
                 * Based on the selected TF version, the corresponding docker image is used to train external models.
                 */
                tfVersion?: string | undefined;
                /**
                 * Column to be designated as time series data for ARIMA model.
                 */
                timeSeriesDataColumn?: string | undefined;
                /**
                 * The time series id column that was used during ARIMA model training.
                 */
                timeSeriesIdColumn?: string | undefined;
                /**
                 * The time series id columns that were used during ARIMA model training.
                 */
                timeSeriesIdColumns?: string[] | undefined;
                /**
                 * The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`.
                 */
                timeSeriesLengthFraction?: number | undefined;
                /**
                 * Column to be designated as time series timestamp for ARIMA model.
                 */
                timeSeriesTimestampColumn?: string | undefined;
                /**
                 * Tree construction algorithm for boosted tree models.
                 */
                treeMethod?: string | undefined;
                /**
                 * Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied.
                 */
                trendSmoothingWindowSize?: string | undefined;
                /**
                 * User column specified for matrix factorization models.
                 */
                userColumn?: string | undefined;
                /**
                 * The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model.
                 */
                vertexAiModelVersionAliases?: string[] | undefined;
                /**
                 * Hyperparameter for matrix factoration when implicit feedback type is specified.
                 */
                walsAlpha?: number | undefined;
                /**
                 * Whether to train a model from the last checkpoint.
                 */
                warmStart?: boolean | undefined;
                /**
                 * User-selected XGBoost versions for training of XGBoost models.
                 */
                xgboostVersion?: string | undefined;
            }
            /**
             * Information about a single training query run for the model.
             */
            interface TrainingRun {
                /**
                 * Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only.
                 */
                classLevelGlobalExplanations?: BigQuery.Schema.GlobalExplanation[] | undefined;
                /**
                 * Output only. Data split result of the training run. Only set when the input data is actually split.
                 */
                dataSplitResult?: BigQuery.Schema.DataSplitResult | undefined;
                /**
                 * Output only. The evaluation metrics over training/eval data that were computed at the end of training.
                 */
                evaluationMetrics?: BigQuery.Schema.EvaluationMetrics | undefined;
                /**
                 * Output only. Global explanation contains the explanation of top features on the model level. Applies to both regression and classification models.
                 */
                modelLevelGlobalExplanation?: BigQuery.Schema.GlobalExplanation | undefined;
                /**
                 * Output only. Output of each iteration run, results.size() <= max_iterations.
                 */
                results?: BigQuery.Schema.IterationResult[] | undefined;
                /**
                 * Output only. The start time of this training run.
                 */
                startTime?: string | undefined;
                /**
                 * Output only. Options that were used for this training run, includes user specified and default options that were used.
                 */
                trainingOptions?: BigQuery.Schema.TrainingOptions | undefined;
                /**
                 * Output only. The start time of this training run, in milliseconds since epoch.
                 * @deprecated
                 */
                trainingStartTime?: string | undefined;
                /**
                 * The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
                 */
                vertexAiModelId?: string | undefined;
                /**
                 * Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
                 */
                vertexAiModelVersion?: string | undefined;
            }
            /**
             * [Alpha] Information of a multi-statement transaction.
             */
            interface TransactionInfo {
                /**
                 * Output only. [Alpha] Id of the transaction.
                 */
                transactionId?: string | undefined;
            }
            /**
             * Information about a single transform column.
             */
            interface TransformColumn {
                /**
                 * Output only. Name of the column.
                 */
                name?: string | undefined;
                /**
                 * Output only. The SQL expression used in the column transform.
                 */
                transformSql?: string | undefined;
                /**
                 * Output only. Data type of the column after the transform.
                 */
                type?: BigQuery.Schema.StandardSqlDataType | undefined;
            }
            /**
             * Request format for undeleting a dataset.
             */
            interface UndeleteDatasetRequest {
                /**
                 * Optional. The exact time when the dataset was deleted. If not specified, the most recently deleted version is undeleted. Undeleting a dataset using deletion time is not supported.
                 */
                deletionTime?: string | undefined;
            }
            /**
             * This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of GoogleSQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
             */
            interface UserDefinedFunctionResource {
                /**
                 * [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
                 */
                inlineCode?: string | undefined;
                /**
                 * [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
                 */
                resourceUri?: string | undefined;
            }
            /**
             * Statistics for a vector search query. Populated as part of JobStatistics2.
             */
            interface VectorSearchStatistics {
                /**
                 * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the vector search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
                 */
                indexUnusedReasons?: BigQuery.Schema.IndexUnusedReason[] | undefined;
                /**
                 * Specifies the index usage mode for the query.
                 */
                indexUsageMode?: string | undefined;
                /**
                 * Specifies the usage of stored columns in the query when stored columns are used in the query.
                 */
                storedColumnsUsages?: BigQuery.Schema.StoredColumnsUsage[] | undefined;
            }
            /**
             * Describes the definition of a logical view.
             */
            interface ViewDefinition {
                /**
                 * Optional. Foreign view representations.
                 */
                foreignDefinitions?: BigQuery.Schema.ForeignViewDefinition[] | undefined;
                /**
                 * Optional. Specifies the privacy policy for the view.
                 */
                privacyPolicy?: BigQuery.Schema.PrivacyPolicy | undefined;
                /**
                 * Required. A query that BigQuery executes when the view is referenced.
                 */
                query?: string | undefined;
                /**
                 * True if the column names are explicitly specified. For example by using the 'CREATE VIEW v(c1, c2) AS ...' syntax. Can only be set for GoogleSQL views.
                 */
                useExplicitColumnNames?: boolean | undefined;
                /**
                 * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view uses BigQuery's [GoogleSQL](https://docs.cloud.google.com/bigquery/docs/introduction-sql). Queries and views that reference this view must use the same flag value. A wrapper is used here because the default value is True.
                 */
                useLegacySql?: boolean | undefined;
                /**
                 * Describes user-defined function resources used in the query.
                 */
                userDefinedFunctionResources?: BigQuery.Schema.UserDefinedFunctionResource[] | undefined;
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
        // Create a new instance of Clustering
        newClustering(): BigQuery.Schema.Clustering;
        // Create a new instance of CsvOptions
        newCsvOptions(): BigQuery.Schema.CsvOptions;
        // Create a new instance of Dataset
        newDataset(): BigQuery.Schema.Dataset;
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
        // Create a new instance of JobStatistics3
        newJobStatistics3(): BigQuery.Schema.JobStatistics3;
        // Create a new instance of JobStatistics4
        newJobStatistics4(): BigQuery.Schema.JobStatistics4;
        // Create a new instance of JobStatus
        newJobStatus(): BigQuery.Schema.JobStatus;
        // Create a new instance of MaterializedViewDefinition
        newMaterializedViewDefinition(): BigQuery.Schema.MaterializedViewDefinition;
        // Create a new instance of ModelDefinition
        newModelDefinition(): BigQuery.Schema.ModelDefinition;
        // Create a new instance of QueryParameter
        newQueryParameter(): BigQuery.Schema.QueryParameter;
        // Create a new instance of QueryParameterType
        newQueryParameterType(): BigQuery.Schema.QueryParameterType;
        // Create a new instance of QueryParameterValue
        newQueryParameterValue(): BigQuery.Schema.QueryParameterValue;
        // Create a new instance of QueryRequest
        newQueryRequest(): BigQuery.Schema.QueryRequest;
        // Create a new instance of QueryTimelineSample
        newQueryTimelineSample(): BigQuery.Schema.QueryTimelineSample;
        // Create a new instance of RangePartitioning
        newRangePartitioning(): BigQuery.Schema.RangePartitioning;
        // Create a new instance of RoutineReference
        newRoutineReference(): BigQuery.Schema.RoutineReference;
        // Create a new instance of Streamingbuffer
        newStreamingbuffer(): BigQuery.Schema.Streamingbuffer;
        // Create a new instance of Table
        newTable(): BigQuery.Schema.Table;
        // Create a new instance of TableDataInsertAllRequest
        newTableDataInsertAllRequest(): BigQuery.Schema.TableDataInsertAllRequest;
        // Create a new instance of TableFieldSchema
        newTableFieldSchema(): BigQuery.Schema.TableFieldSchema;
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
        // Create a new instance of BqmlTrainingRunTrainingOptions
        newBqmlTrainingRunTrainingOptions(): BigQuery.Schema.BqmlTrainingRunTrainingOptions;
        // Create a new instance of DatasetAccess
        newDatasetAccess(): BigQuery.Schema.DatasetAccess;
        // Create a new instance of JobStatistics2ReservationUsage
        newJobStatistics2ReservationUsage(): BigQuery.Schema.JobStatistics2ReservationUsage;
        // Create a new instance of JobStatisticsReservationUsage
        newJobStatisticsReservationUsage(): BigQuery.Schema.JobStatisticsReservationUsage;
        // Create a new instance of ModelDefinitionModelOptions
        newModelDefinitionModelOptions(): BigQuery.Schema.ModelDefinitionModelOptions;
        // Create a new instance of QueryParameterTypeStructTypes
        newQueryParameterTypeStructTypes(): BigQuery.Schema.QueryParameterTypeStructTypes;
        // Create a new instance of RangePartitioningRange
        newRangePartitioningRange(): BigQuery.Schema.RangePartitioningRange;
        // Create a new instance of TableDataInsertAllRequestRows
        newTableDataInsertAllRequestRows(): BigQuery.Schema.TableDataInsertAllRequestRows;
        // Create a new instance of TableFieldSchemaCategories
        newTableFieldSchemaCategories(): BigQuery.Schema.TableFieldSchemaCategories;
    }
}

/**
 * The `BigQuery` advanced service must be enabled.
 */
declare var BigQuery: GoogleAppsScript.BigQuery | undefined;
