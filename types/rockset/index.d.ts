// Type definitions for rockset 1.0
// Project: https://github.com/rockset/rockset-node-client#readme
// Definitions by: Kshitij Wadhwa <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface XmlParams {
    // tag until which xml is ignored
    root_tag?: string;
    // encoding in which data source is encoded
    encoding?: string;
    // tags with which documents are identified
    doc_tag?: string;
    // tag used for the value when there are attributes in the element having no child
    value_tag?: string;
    // tag to differentiate between attributes and elements
    attribute_prefix?: string;
}
export interface Workspace {
    // ISO-8601 date of when workspace was created
    created_at?: string;
    // email of user who created the workspace
    created_by?: string;
    // descriptive label and unique identifier
    name?: string;
    // longer explanation for the workspace
    description?: string;
    // number of collections that are immediate children of workspace
    collection_count?: number;
}
export interface User {
    // ISO-8601 date
    created_at?: string;
    // user email
    email: string;
    // user first name
    first_name?: string;
    // user last name
    last_name?: string;
    // List of roles for a given user
    roles?: string[];
    // state of user - NEW / ACTIVE
    state?: string;
}
export interface Status {
    // Status of the Source's ingestion, one of: INITIALIZING, WATCHING, PROCESSING, COMPLETED, ERROR
    state?: 'INITIALIZING' | 'WATCHING' | 'PROCESSING' | 'COMPLETED' | 'ERROR';
    // ISO-8601 date when state was triggered
    since?: string;
    // state message
    message?: string;
    // ISO-8601 date when source was last processed
    last_processed_at?: string;
    // last source item processed by ingester
    last_processed_item?: string;
    // Total items processed of source
    total_processed_items?: number;
    // ISO-8601 date when last error occurred
    last_error_at?: string;
    // last source item that errored
    last_error_item?: string;
    // reason for the last error
    last_error_reason?: string;
    // Total items that errored
    total_error_items?: number;
}
export interface SqlExpression {
    // The name of a sql function
    sql?: string;
}
export interface SourceS3 {
    // Prefix that selects keys to ingest.
    prefix?: string;
    // Pattern that selects keys to ingest.
    pattern?: string;
    // address of S3 bucket containing data
    bucket: string;
}
export interface SourceRedshift {
    // name of the database in Redshift Cluster
    database: string;
    // schema which contains the Redshift table
    schema: string;
    // name of Redshift table containing data
    table_name: string;
    // field in Redshift source table to monitor for updates
    incremental_field?: string;
}
export interface SourceKinesis {
    // name of kinesis stream
    stream_name: string;
    // AWS region name of Kinesis stream, by default us-west-2 is used
    aws_region?: string;
}
export interface SourceGcs {
    // name of GCS bucket you want to ingest from
    bucket?: string;
    // Prefix that selects keys to ingest.
    prefix?: string;
}
export interface SourceFileUpload {
    // name of the file
    file_name: string;
    // size of the file in bytes
    file_size: number;
    // time of file upload
    file_upload_time: string;
}
export interface SourceDynamoDb {
    // name of DynamoDB table containing data
    table_name: string;
    // AWS region name of DynamoDB table, by default us-west-2 is used
    aws_region?: string;
}
export interface Source {
    // name of integration to use
    integration_name: string;
    // configuration for ingestion from S3
    s3?: SourceS3;
    // configuration for ingestion from kinesis stream
    kinesis?: SourceKinesis;
    // configuration for ingestion from  a dynamodb table
    dynamodb?: SourceDynamoDb;
    // configuration for ingestion from GCS
    gcs?: SourceGcs;
    // configuration for ingestion from Redshift
    redshift?: SourceRedshift;
    // file upload details
    file_upload?: SourceFileUpload;
    // format parameters for data from this source
    format_params?: FormatParams;
    // the ingest status of this source
    status?: Status;
}
export interface S3Integration {
    // details of an AWS cross-account role integration
    aws_role?: AwsRole;
    // credentials for an AWS access key integration
    aws_access_key?: AwsAccessKey;
}
export interface RedshiftIntegration {
    // AWS access key credentials
    aws_access_key?: AwsAccessKey;
    // Username associated with Redshift cluster
    username: string;
    // Password associated with Redshift cluster
    password: string;
    // Redshift Cluster host
    host: string;
    // Redshift Cluster port
    port: number;
    // unload S3 bucket path
    s3_bucket_path: string;
}
export interface QueryResponseStats {
    // query time in milliseconds
    elapsed_time_ms?: number;
    // rows scanned as part of query execution
    rows_scanned?: number;
}
export interface QueryResponse {
    // list of objects returned by the query
    results?: QueryResponseResults[];
    // list of fields returned by the query
    fields?: QueryFieldType[];
    // meta information about the query
    stats?: QueryResponseStats;
    // meta information about each column in the result set
    column_fields?: QueryFieldType[];
}
export interface QueryResponseResults {}
export interface QueryRequestSql {
    // SQL query as a string
    query: string;
    // list of named parameters
    parameters?: QueryParameter[];
}
export interface QueryRequest {
    // details about the query
    sql?: QueryRequestSql;
}
export interface QueryParameter {
    // name of the field
    name: string;
    // data type of the field
    type: string;
    // literal value of the field
    value: string;
}
export interface QueryFieldType {
    // name of the field
    name: string;
    // data type of the field
    type: string;
}
export interface OutputField {
    // The name of a field, parsed as a SQL qualified name
    field_name?: string;
    // The name of a sql function
    value?: SqlExpression;
    // Error in Mapping execution: 'skip' or 'fail'
    on_error?: 'SKIP' | 'FAIL';
}
export interface OrganizationResponse {
    // Organization object
    data?: Organization;
}
export interface Organization {
    // unique identifier for the organization
    id?: string;
    // ISO-8601 date
    created_at?: string;
    // name of the organization
    display_name?: string;
    // name of the company
    company_name?: string;
    // pricing tier
    tier?: 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE';
    // number of QCUs
    qcu?: number;
    // org state
    state?: 'ACTIVE' | 'TRIAL' | 'TRIAL_EXPIRED' | 'DELETED';
}
export interface ListWorkspacesResponse {
    // list of workspaces
    data?: Workspace[];
}
export interface ListUsersResponse {
    // list of users
    data?: User[];
}
export interface ListIntegrationsResponse {
    // list of integration objects
    data?: Integration[];
}
export interface ListCollectionsResponse {
    // list of all collections
    data?: Collection[];
}
export interface ListApiKeysResponse {
    // list of API key objects
    data?: ApiKey[];
}
export interface KinesisIntegration {
    // details of an AWS cross-account role integration
    aws_role?: AwsRole;
    // credentials for an AWS access key integration
    aws_access_key?: AwsAccessKey;
}
export interface Integration {
    // ISO-8601 date
    created_at?: string;
    // email of user who created the integration
    created_by: string;
    // descriptive label and unique identifier
    name: string;
    // longer explanation for the integration
    description?: string;
    // Amazon S3 details, must have one of aws_access_key or aws_role
    s3?: S3Integration;
    // Amazon Kinesis details, must have one of aws_access_key or aws_role
    kinesis?: KinesisIntegration;
    // Amazon DynamoDB details, must have one of aws_access_key or aws_role
    dynamodb?: DynamodbIntegration;
    // Amazon Redshift details
    redshift?: RedshiftIntegration;
    // GCS details
    gcs?: GcsIntegration;
}
export interface InputField {
    // The name of a field, parsed as a SQL qualified name
    field_name?: string;
    // Define the behaviour if fieldName is missing or is null
    if_missing?: 'SKIP' | 'PASS';
    // If true, then drop fieldName from the document
    is_drop?: boolean;
    // Sql parameter name
    param?: string;
}
export interface GetWorkspaceResponse {
    // the workspace that was requested
    data?: Workspace;
}
export interface GetIntegrationResponse {
    // integration object
    data?: Integration;
}
export interface GetCollectionResponse {
    // collection that was requested
    data?: Collection;
}
export interface GcsIntegration {
    // credentials for an AWS key integration
    gcp_service_account?: GcpServiceAccount;
}
export interface GcpServiceAccount {
    // Contents of JSON Service Account key file
    service_account_key_file_json: string;
}
export interface FormatParams {
    // source data is in json format
    json?: boolean;
    csv?: CsvParams;
    xml?: XmlParams;
}
export interface FieldMaskMask {
    name: string;
    args?: object;
}
export interface FieldMask {
    input_path: string[];
    mask?: FieldMaskMask;
}
export interface FieldMappingV2 {
    // A user specified string that is a name for this mapping
    name?: string;
    // A List of InputField for this mapping
    input_fields?: InputField[];
    // An OutputField for this mapping
    output_field?: OutputField;
}
export interface FieldMapping {}
export interface EventTimeInfo {
    // name of the field containing event time
    field: string;
    // format of time field, can be one of: milliseconds_since_epoch, seconds_since_epoch
    format?: string;
    // default time zone, in standard IANA format
    time_zone?: string;
}
export interface ErrorModel {
    // descriptive message about the error
    message?: string;
    // category of the error
    type?:
        | 'AUTHEXCEPTION'
        | 'VERSIONEXCEPTION'
        | 'INTERNALERROR'
        | 'INVALIDINPUT'
        | 'NOTIMPLEMENTEDYET'
        | 'RESOURCEEXCEEDED'
        | 'ALREADYEXISTS'
        | 'NOTFOUND'
        | 'DEPENDENTRESOURCES'
        | 'QUERY_ERROR'
        | 'NOT_READY'
        | 'FORBIDDEN'
        | 'QUERY_TIMEOUT'
        | 'INTEGRATION_NOT_FOUND'
        | 'ROLE_NOT_FOUND'
        | 'CONNECTION_ERROR';
    // Line where the error happened (if applicable)
    line?: number;
    // Column where the error happened (if applicable)
    column?: number;
    // Internal trace ID to help with debugging
    trace_id?: string;
}
export interface DynamodbIntegration {
    // credentials for an AWS access key integration
    aws_access_key?: AwsAccessKey;
}
export interface DocumentStatus {
    // collection name
    _collection?: string;
    // error message, if any
    error?: ErrorModel;
    // unique document ID
    _id?: string;
    // status, one of ADDED, REPLACED, DELETED, ERROR
    status?: 'ADDED' | 'REPLACED' | 'DELETED' | 'ERROR';
}
export interface DeleteWorkspaceResponse {
    // the workspace that was deleted
    data?: Workspace;
}
export interface DeleteUserResponse {
    // user object that was deleted
    data?: User;
}
export interface DeleteIntegrationResponse {
    // integration object that was deleted
    data?: Integration;
}
export interface DeleteDocumentsResponse {
    // information about deleted documents
    data?: DocumentStatus[];
}
export interface DeleteDocumentsRequestData {
    // unique document ID
    _id: string;
}
export interface DeleteDocumentsRequest {
    // array of document IDs
    data: DeleteDocumentsRequestData[];
}
export interface DeleteCollectionResponse {
    // collection that was deleted
    data?: Collection;
}
export interface DeleteApiKeyResponse {
    // the API key that was deleted
    data?: ApiKey;
}
export interface CsvParams {
    // If the first line in every object specifies the column names
    firstLineAsColumnNames?: boolean;
    // a single character that is the column seperator
    separator?: string;
    // can be one of: UTF-8, ISO_8859_1, UTF-16
    encoding?: string;
    // names of columns
    columnNames?: string[];
    // names of columns
    columnTypes?: string[];
    // character within which a cell value is enclosed,null character if no such character, default is '"'
    quoteChar?: string;
}
export interface CreateWorkspaceResponse {
    // the workspace that was created
    data?: Workspace;
}
export interface CreateWorkspaceRequest {
    // descriptive label and unique identifier
    name: string;
    // longer explanation for the workspace
    description?: string;
}
export interface CreateUserResponse {
    // user that was created
    data?: User;
}
export interface CreateUserRequest {
    // user email, must be unique
    email: string;
    // List of roles for a given user
    roles?: string[];
}
export interface CreateIntegrationResponse {
    // integration object that was created
    data?: Integration;
}
export interface CreateIntegrationRequest {
    // descriptive label
    name: string;
    // longer explanation for the integration
    description?: string;
    // Amazon S3 details, must have one of aws_access_key or aws_role
    s3?: S3Integration;
    // Amazon Kinesis details, must have one of aws_access_key or aws_role
    kinesis?: KinesisIntegration;
    // Amazon DynamoDB details, must have one of aws_access_key or aws_role
    dynamodb?: DynamodbIntegration;
    // Amazon Redshift details
    redshift?: RedshiftIntegration;
    // GCS details
    gcs?: GcsIntegration;
}
export interface CreateCollectionResponse {
    // collection that was created
    data?: Collection;
}
export interface CreateCollectionRequest {
    // unique identifer for collection, can contain alphanumeric or dash characters
    name: string;
    // text describing the collection
    description?: string;
    // list of sources from which to ingest data
    sources?: Source[];
    // number of seconds after which data is purged, based on event time
    retention_secs?: number;
    // configuration for event data
    event_time_info?: EventTimeInfo;
    // list of mappings
    field_mappings?: FieldMappingV2[];
}
export interface CreateApiKeyResponse {
    // the API key that was created
    data?: ApiKey;
}
export interface CreateApiKeyRequest {
    // descriptive label
    name: string;
}
export interface CommitMarkPositions {}
export interface CommitMark {}
export interface CollectionStats {
    // number of documents in the collection
    doc_count?: number;
    // total collection size in bytes
    total_size?: number;
    // number between 0 and 1 that indicates progress of collection creation
    fill_progress?: number;
    // number of documents purged from the collection
    purged_doc_count?: number;
    // total collection size in bytes purged
    purged_doc_size?: number;
    // milliseconds since Unix epoch Jan 1, 1970
    last_updated_ms?: number;
    // milliseconds since Unix epoch Jan 1, 1970
    last_queried_ms?: number;
}
export interface Collection {
    // ISO-8601 date
    created_at?: string;
    // email of user who created the collection
    created_by?: string;
    // unique identifer for collection, can contain alphanumeric or dash characters
    name?: string;
    // text describing the collection
    description?: string;
    // name of the workspace that the collection is in
    workspace?: string;
    // current status of collection, one of: CREATED, READY, DELETED
    status?: 'CREATED' | 'READY' | 'PAUSED' | 'DELETED' | 'PAUSING' | 'RESUMING' | 'CATCHINGUP' | 'UNKNOWN';
    // list of sources from which collection ingests
    sources?: Source[];
    // metrics about the collection
    stats?: CollectionStats;
    // number of seconds after which data is purged based on event time
    retention_secs?: number;
    // list of mappings applied on all documents in a collection
    field_mappings?: FieldMappingV2[];
}
export interface AwsRole {
    // ARN of rockset-role created in your account
    aws_role_arn: string;
}
export interface AwsAccessKey {
    // AWS access key ID
    aws_access_key_id: string;
    // AWS secret access key
    aws_secret_access_key: string;
}
export interface ApiKey {
    // ISO-8601 date
    created_at?: string;
    // descriptive label
    name: string;
    // string of 64 alphanumeric characters
    key: string;
}
export interface AddDocumentsResponse {
    // information about the added documents
    data?: DocumentStatus[];
}
export interface AddDocumentsRequest {
    // Array of JSON documents
    data: AddDocumentsRequestData[];
}
export interface AddDocumentsRequestData {}
