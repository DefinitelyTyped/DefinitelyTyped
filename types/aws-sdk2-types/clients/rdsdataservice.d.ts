import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class RDSDataService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RDSDataService.Types.ClientConfiguration)
  config: Config & RDSDataService.Types.ClientConfiguration;
  /**
   * Runs a batch SQL statement over an array of data. You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set. The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated. 
   */
  batchExecuteStatement(params: RDSDataService.Types.BatchExecuteStatementRequest, callback?: (err: AWSError, data: RDSDataService.Types.BatchExecuteStatementResponse) => void): Request<RDSDataService.Types.BatchExecuteStatementResponse, AWSError>;
  /**
   * Runs a batch SQL statement over an array of data. You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set. The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated. 
   */
  batchExecuteStatement(callback?: (err: AWSError, data: RDSDataService.Types.BatchExecuteStatementResponse) => void): Request<RDSDataService.Types.BatchExecuteStatementResponse, AWSError>;
  /**
   * Starts a SQL transaction.  A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours. A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically. DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate ExecuteStatement call with continueAfterTimeout enabled. 
   */
  beginTransaction(params: RDSDataService.Types.BeginTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.BeginTransactionResponse) => void): Request<RDSDataService.Types.BeginTransactionResponse, AWSError>;
  /**
   * Starts a SQL transaction.  A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours. A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically. DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate ExecuteStatement call with continueAfterTimeout enabled. 
   */
  beginTransaction(callback?: (err: AWSError, data: RDSDataService.Types.BeginTransactionResponse) => void): Request<RDSDataService.Types.BeginTransactionResponse, AWSError>;
  /**
   * Ends a SQL transaction started with the BeginTransaction operation and commits the changes.
   */
  commitTransaction(params: RDSDataService.Types.CommitTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.CommitTransactionResponse) => void): Request<RDSDataService.Types.CommitTransactionResponse, AWSError>;
  /**
   * Ends a SQL transaction started with the BeginTransaction operation and commits the changes.
   */
  commitTransaction(callback?: (err: AWSError, data: RDSDataService.Types.CommitTransactionResponse) => void): Request<RDSDataService.Types.CommitTransactionResponse, AWSError>;
  /**
   * Runs one or more SQL statements.  This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation. 
   */
  executeSql(params: RDSDataService.Types.ExecuteSqlRequest, callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
  /**
   * Runs one or more SQL statements.  This operation is deprecated. Use the BatchExecuteStatement or ExecuteStatement operation. 
   */
  executeSql(callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
  /**
   * Runs a SQL statement against a database.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. If the binary response data from the database is more than 1 MB, the call is terminated. 
   */
  executeStatement(params: RDSDataService.Types.ExecuteStatementRequest, callback?: (err: AWSError, data: RDSDataService.Types.ExecuteStatementResponse) => void): Request<RDSDataService.Types.ExecuteStatementResponse, AWSError>;
  /**
   * Runs a SQL statement against a database.  If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. If the binary response data from the database is more than 1 MB, the call is terminated. 
   */
  executeStatement(callback?: (err: AWSError, data: RDSDataService.Types.ExecuteStatementResponse) => void): Request<RDSDataService.Types.ExecuteStatementResponse, AWSError>;
  /**
   * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
   */
  rollbackTransaction(params: RDSDataService.Types.RollbackTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.RollbackTransactionResponse) => void): Request<RDSDataService.Types.RollbackTransactionResponse, AWSError>;
  /**
   * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
   */
  rollbackTransaction(callback?: (err: AWSError, data: RDSDataService.Types.RollbackTransactionResponse) => void): Request<RDSDataService.Types.RollbackTransactionResponse, AWSError>;
}
declare namespace RDSDataService {
  export type Arn = string;
  export type ArrayOfArray = ArrayValue[];
  export interface ArrayValue {
    /**
     * An array of Boolean values.
     */
    booleanValues?: BooleanArray;
    /**
     * An array of integers.
     */
    longValues?: LongArray;
    /**
     * An array of floating-point numbers.
     */
    doubleValues?: DoubleArray;
    /**
     * An array of strings.
     */
    stringValues?: StringArray;
    /**
     * An array of arrays.
     */
    arrayValues?: ArrayOfArray;
  }
  export type ArrayValueList = Value[];
  export interface BatchExecuteStatementRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret. For information about creating the secret, see Create a database secret.
     */
    secretArn: Arn;
    /**
     * The SQL statement to run. Don't include a semicolon (;) at the end of the SQL statement.
     */
    sql: SqlStatement;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The name of the database schema.  Currently, the schema parameter isn't supported. 
     */
    schema?: DbName;
    /**
     * The parameter set for the batch operation. The SQL statement is executed as many times as the number of parameter sets provided. To execute a SQL statement with no parameters, use one of the following options:   Specify one or more empty parameter sets.   Use the ExecuteStatement operation instead of the BatchExecuteStatement operation.    Array parameters are not supported. 
     */
    parameterSets?: SqlParameterSets;
    /**
     * The identifier of a transaction that was started by using the BeginTransaction operation. Specify the transaction ID of the transaction that you want to include the SQL statement in. If the SQL statement is not part of a transaction, don't set this parameter.
     */
    transactionId?: Id;
  }
  export interface BatchExecuteStatementResponse {
    /**
     * The execution results of each batch entry.
     */
    updateResults?: UpdateResults;
  }
  export interface BeginTransactionRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
  }
  export interface BeginTransactionResponse {
    /**
     * The transaction ID of the transaction started by the call.
     */
    transactionId?: Id;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export type BooleanArray = BoxedBoolean[];
  export type BoxedBoolean = boolean;
  export type BoxedDouble = number;
  export type BoxedFloat = number;
  export type BoxedInteger = number;
  export type BoxedLong = number;
  export interface ColumnMetadata {
    /**
     * The name of the column.
     */
    name?: String;
    /**
     * The type of the column.
     */
    type?: Integer;
    /**
     * The database-specific data type of the column.
     */
    typeName?: String;
    /**
     * The label for the column.
     */
    label?: String;
    /**
     * The name of the schema that owns the table that includes the column.
     */
    schemaName?: String;
    /**
     * The name of the table that includes the column.
     */
    tableName?: String;
    /**
     * A value that indicates whether the column increments automatically.
     */
    isAutoIncrement?: Boolean;
    /**
     * A value that indicates whether an integer column is signed.
     */
    isSigned?: Boolean;
    /**
     * A value that indicates whether the column contains currency values.
     */
    isCurrency?: Boolean;
    /**
     * A value that indicates whether the column is case-sensitive.
     */
    isCaseSensitive?: Boolean;
    /**
     * A value that indicates whether the column is nullable.
     */
    nullable?: Integer;
    /**
     * The precision value of a decimal number column.
     */
    precision?: Integer;
    /**
     * The scale value of a decimal number column.
     */
    scale?: Integer;
    /**
     * The type of the column.
     */
    arrayBaseColumnType?: Integer;
  }
  export interface CommitTransactionRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The identifier of the transaction to end and commit.
     */
    transactionId: Id;
  }
  export interface CommitTransactionResponse {
    /**
     * The status of the commit operation.
     */
    transactionStatus?: TransactionStatus;
  }
  export type DbName = string;
  export type DecimalReturnType = "STRING"|"DOUBLE_OR_LONG"|string;
  export type DoubleArray = BoxedDouble[];
  export interface ExecuteSqlRequest {
    /**
     * The ARN of the Aurora Serverless DB cluster.
     */
    dbClusterOrInstanceArn: Arn;
    /**
     * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret. For information about creating the secret, see Create a database secret.
     */
    awsSecretStoreArn: Arn;
    /**
     * One or more SQL statements to run on the DB cluster. You can separate SQL statements from each other with a semicolon (;). Any valid SQL statement is permitted, including data definition, data manipulation, and commit statements. 
     */
    sqlStatements: SqlStatement;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
  }
  export interface ExecuteSqlResponse {
    /**
     * The results of the SQL statement or statements.
     */
    sqlStatementResults?: SqlStatementResults;
  }
  export interface ExecuteStatementRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The ARN of the secret that enables access to the DB cluster. Enter the database user name and password for the credentials in the secret. For information about creating the secret, see Create a database secret.
     */
    secretArn: Arn;
    /**
     * The SQL statement to run.
     */
    sql: SqlStatement;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The name of the database schema.  Currently, the schema parameter isn't supported. 
     */
    schema?: DbName;
    /**
     * The parameters for the SQL statement.  Array parameters are not supported. 
     */
    parameters?: SqlParametersList;
    /**
     * The identifier of a transaction that was started by using the BeginTransaction operation. Specify the transaction ID of the transaction that you want to include the SQL statement in. If the SQL statement is not part of a transaction, don't set this parameter.
     */
    transactionId?: Id;
    /**
     * A value that indicates whether to include metadata in the results.
     */
    includeResultMetadata?: Boolean;
    /**
     * A value that indicates whether to continue running the statement after the call times out. By default, the statement stops running when the call times out.  For DDL statements, we recommend continuing to run the statement after the call times out. When a DDL statement terminates before it is finished running, it can result in errors and possibly corrupted data structures. 
     */
    continueAfterTimeout?: Boolean;
    /**
     * Options that control how the result set is returned.
     */
    resultSetOptions?: ResultSetOptions;
    /**
     * A value that indicates whether to format the result set as a single JSON string. This parameter only applies to SELECT statements and is ignored for other types of statements. Allowed values are NONE and JSON. The default value is NONE. The result is returned in the formattedRecords field. For usage information about the JSON format for result sets, see Using the Data API in the Amazon Aurora User Guide.
     */
    formatRecordsAs?: RecordsFormatType;
  }
  export interface ExecuteStatementResponse {
    /**
     * The records returned by the SQL statement. This field is blank if the formatRecordsAs parameter is set to JSON.
     */
    records?: SqlRecords;
    /**
     * Metadata for the columns included in the results. This field is blank if the formatRecordsAs parameter is set to JSON.
     */
    columnMetadata?: Metadata;
    /**
     * The number of records updated by the request.
     */
    numberOfRecordsUpdated?: RecordsUpdated;
    /**
     * Values for fields generated during a DML request.  &lt;note&gt; &lt;p&gt;The &lt;code&gt;generatedFields&lt;/code&gt; data isn't supported by Aurora PostgreSQL. To get the values of generated fields, use the &lt;code&gt;RETURNING&lt;/code&gt; clause. For more information, see &lt;a href=&quot;https://www.postgresql.org/docs/10/dml-returning.html&quot;&gt;Returning Data From Modified Rows&lt;/a&gt; in the PostgreSQL documentation.&lt;/p&gt; &lt;/note&gt; 
     */
    generatedFields?: FieldList;
    /**
     * A string value that represents the result set of a SELECT statement in JSON format. This value is only present when the formatRecordsAs parameter is set to JSON. The size limit for this field is currently 10 MB. If the JSON-formatted string representing the result set requires more than 10 MB, the call returns an error.
     */
    formattedRecords?: FormattedSqlRecords;
  }
  export interface Field {
    /**
     * A NULL value.
     */
    isNull?: BoxedBoolean;
    /**
     * A value of Boolean data type.
     */
    booleanValue?: BoxedBoolean;
    /**
     * A value of long data type.
     */
    longValue?: BoxedLong;
    /**
     * A value of double data type.
     */
    doubleValue?: BoxedDouble;
    /**
     * A value of string data type.
     */
    stringValue?: String;
    /**
     * A value of BLOB data type.
     */
    blobValue?: _Blob;
    /**
     * An array of values.
     */
    arrayValue?: ArrayValue;
  }
  export type FieldList = Field[];
  export type FormattedSqlRecords = string;
  export type Id = string;
  export type Integer = number;
  export type Long = number;
  export type LongArray = BoxedLong[];
  export type LongReturnType = "STRING"|"LONG"|string;
  export type Metadata = ColumnMetadata[];
  export type ParameterName = string;
  export interface Record {
    /**
     * The values returned in the record.
     */
    values?: Row;
  }
  export type Records = Record[];
  export type RecordsFormatType = "NONE"|"JSON"|string;
  export type RecordsUpdated = number;
  export interface ResultFrame {
    /**
     * The result-set metadata in the result set.
     */
    resultSetMetadata?: ResultSetMetadata;
    /**
     * The records in the result set.
     */
    records?: Records;
  }
  export interface ResultSetMetadata {
    /**
     * The number of columns in the result set.
     */
    columnCount?: Long;
    /**
     * The metadata of the columns in the result set.
     */
    columnMetadata?: Metadata;
  }
  export interface ResultSetOptions {
    /**
     * A value that indicates how a field of DECIMAL type is represented in the response. The value of STRING, the default, specifies that it is converted to a String value. The value of DOUBLE_OR_LONG specifies that it is converted to a Long value if its scale is 0, or to a Double value otherwise.  Conversion to Double or Long can result in roundoff errors due to precision loss. We recommend converting to String, especially when working with currency values. 
     */
    decimalReturnType?: DecimalReturnType;
    /**
     * A value that indicates how a field of LONG type is represented. Allowed values are LONG and STRING. The default is LONG. Specify STRING if the length or precision of numeric values might cause truncation or rounding errors. 
     */
    longReturnType?: LongReturnType;
  }
  export interface RollbackTransactionRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The identifier of the transaction to roll back.
     */
    transactionId: Id;
  }
  export interface RollbackTransactionResponse {
    /**
     * The status of the rollback operation.
     */
    transactionStatus?: TransactionStatus;
  }
  export type Row = Value[];
  export interface SqlParameter {
    /**
     * The name of the parameter.
     */
    name?: ParameterName;
    /**
     * The value of the parameter.
     */
    value?: Field;
    /**
     * A hint that specifies the correct object type for data type mapping. Possible values are as follows:    DATE - The corresponding String parameter value is sent as an object of DATE type to the database. The accepted format is YYYY-MM-DD.    DECIMAL - The corresponding String parameter value is sent as an object of DECIMAL type to the database.    JSON - The corresponding String parameter value is sent as an object of JSON type to the database.    TIME - The corresponding String parameter value is sent as an object of TIME type to the database. The accepted format is HH:MM:SS[.FFF].    TIMESTAMP - The corresponding String parameter value is sent as an object of TIMESTAMP type to the database. The accepted format is YYYY-MM-DD HH:MM:SS[.FFF].    UUID - The corresponding String parameter value is sent as an object of UUID type to the database.   
     */
    typeHint?: TypeHint;
  }
  export type SqlParameterSets = SqlParametersList[];
  export type SqlParametersList = SqlParameter[];
  export type SqlRecords = FieldList[];
  export type SqlStatement = string;
  export interface SqlStatementResult {
    /**
     * The result set of the SQL statement.
     */
    resultFrame?: ResultFrame;
    /**
     * The number of records updated by a SQL statement.
     */
    numberOfRecordsUpdated?: RecordsUpdated;
  }
  export type SqlStatementResults = SqlStatementResult[];
  export type String = string;
  export type StringArray = String[];
  export interface StructValue {
    /**
     * The attributes returned in the record.
     */
    attributes?: ArrayValueList;
  }
  export type TransactionStatus = string;
  export type TypeHint = "JSON"|"UUID"|"TIMESTAMP"|"DATE"|"TIME"|"DECIMAL"|string;
  export interface UpdateResult {
    /**
     * Values for fields generated during the request.
     */
    generatedFields?: FieldList;
  }
  export type UpdateResults = UpdateResult[];
  export interface Value {
    /**
     * A NULL value.
     */
    isNull?: BoxedBoolean;
    /**
     * A value for a column of BIT data type.
     */
    bitValue?: BoxedBoolean;
    /**
     * A value for a column of big integer data type.
     */
    bigIntValue?: BoxedLong;
    /**
     * A value for a column of integer data type.
     */
    intValue?: BoxedInteger;
    /**
     * A value for a column of double data type.
     */
    doubleValue?: BoxedDouble;
    /**
     * A value for a column of real data type.
     */
    realValue?: BoxedFloat;
    /**
     * A value for a column of string data type.
     */
    stringValue?: String;
    /**
     * A value for a column of BLOB data type.
     */
    blobValue?: _Blob;
    /**
     * An array of column values.
     */
    arrayValues?: ArrayValueList;
    /**
     * A value for a column of STRUCT data type.
     */
    structValue?: StructValue;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the RDSDataService client.
   */
  export import Types = RDSDataService;
}
export = RDSDataService;
