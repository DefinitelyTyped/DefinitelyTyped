import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {DynamoDBCustomizations} from '../lib/services/dynamodb';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {DocumentClient as document_client} from '../lib/dynamodb/document_client';
import {Converter as converter} from '../lib/dynamodb/converter';
interface Blob {}
declare class DynamoDB extends DynamoDBCustomizations {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DynamoDB.Types.ClientConfiguration)
  config: Config & DynamoDB.Types.ClientConfiguration;
  /**
   * This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a BatchExecuteStatement must specify an equality condition on all key attributes. This enforces that each SELECT statement in a batch returns at most a single item.  The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.   A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the Error field of the BatchStatementResponse for each statement. 
   */
  batchExecuteStatement(params: DynamoDB.Types.BatchExecuteStatementInput, callback?: (err: AWSError, data: DynamoDB.Types.BatchExecuteStatementOutput) => void): Request<DynamoDB.Types.BatchExecuteStatementOutput, AWSError>;
  /**
   * This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a BatchExecuteStatement must specify an equality condition on all key attributes. This enforces that each SELECT statement in a batch returns at most a single item.  The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.   A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the Error field of the BatchStatementResponse for each statement. 
   */
  batchExecuteStatement(callback?: (err: AWSError, data: DynamoDB.Types.BatchExecuteStatementOutput) => void): Request<DynamoDB.Types.BatchExecuteStatementOutput, AWSError>;
  /**
   * The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. BatchGetItem returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get.  If you request more than 100 items, BatchGetItem returns a ValidationException with the message "Too many items requested for the BatchGetItem call."  For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate UnprocessedKeys value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchGetItem returns a ProvisionedThroughputExceededException. If at least one of the items is successfully processed, then BatchGetItem completes successfully, while returning the keys of the unread items in UnprocessedKeys.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables. In order to minimize response latency, BatchGetItem retrieves items in parallel. When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the ProjectionExpression parameter. If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide.
   */
  batchGetItem(params: DynamoDB.Types.BatchGetItemInput, callback?: (err: AWSError, data: DynamoDB.Types.BatchGetItemOutput) => void): Request<DynamoDB.Types.BatchGetItemOutput, AWSError>;
  /**
   * The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. BatchGetItem returns a partial result if the response size limit is exceeded, the table's provisioned throughput is exceeded, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get.  If you request more than 100 items, BatchGetItem returns a ValidationException with the message "Too many items requested for the BatchGetItem call."  For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate UnprocessedKeys value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchGetItem returns a ProvisionedThroughputExceededException. If at least one of the items is successfully processed, then BatchGetItem completes successfully, while returning the keys of the unread items in UnprocessedKeys.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables. In order to minimize response latency, BatchGetItem retrieves items in parallel. When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the ProjectionExpression parameter. If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide.
   */
  batchGetItem(callback?: (err: AWSError, data: DynamoDB.Types.BatchGetItemOutput) => void): Request<DynamoDB.Types.BatchGetItemOutput, AWSError>;
  /**
   * The BatchWriteItem operation puts or deletes multiple items in one or more tables. A single call to BatchWriteItem can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see Naming Rules and Data Types.   BatchWriteItem cannot update items. If you perform a BatchWriteItem operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the UpdateItem action.  The individual PutItem and DeleteItem operations specified in BatchWriteItem are atomic; however BatchWriteItem as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the UnprocessedItems response parameter. You can investigate and optionally resend the requests. Typically, you would call BatchWriteItem in a loop. Each iteration would check for unprocessed items and submit a new BatchWriteItem request with those unprocessed items until all items have been processed. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchWriteItem returns a ProvisionedThroughputExceededException.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  With BatchWriteItem, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, BatchWriteItem does not behave in the same way as individual PutItem and DeleteItem calls would. For example, you cannot specify conditions on individual put and delete requests, and BatchWriteItem does not return deleted items in the response. If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, BatchWriteItem performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application. Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit. If one or more of the following is true, DynamoDB rejects the entire batch write operation:   One or more tables specified in the BatchWriteItem request does not exist.   Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.   You try to perform multiple operations on the same item in the same BatchWriteItem request. For example, you cannot put and delete the same item in the same BatchWriteItem request.     Your request contains at least two items with identical hash and range keys (which essentially is two put operations).    There are more than 25 requests in the batch.   Any individual item in a batch exceeds 400 KB.   The total request size exceeds 16 MB.  
   */
  batchWriteItem(params: DynamoDB.Types.BatchWriteItemInput, callback?: (err: AWSError, data: DynamoDB.Types.BatchWriteItemOutput) => void): Request<DynamoDB.Types.BatchWriteItemOutput, AWSError>;
  /**
   * The BatchWriteItem operation puts or deletes multiple items in one or more tables. A single call to BatchWriteItem can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see Naming Rules and Data Types.   BatchWriteItem cannot update items. If you perform a BatchWriteItem operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the UpdateItem action.  The individual PutItem and DeleteItem operations specified in BatchWriteItem are atomic; however BatchWriteItem as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the UnprocessedItems response parameter. You can investigate and optionally resend the requests. Typically, you would call BatchWriteItem in a loop. Each iteration would check for unprocessed items and submit a new BatchWriteItem request with those unprocessed items until all items have been processed. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchWriteItem returns a ProvisionedThroughputExceededException.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  With BatchWriteItem, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, BatchWriteItem does not behave in the same way as individual PutItem and DeleteItem calls would. For example, you cannot specify conditions on individual put and delete requests, and BatchWriteItem does not return deleted items in the response. If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, BatchWriteItem performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application. Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit. If one or more of the following is true, DynamoDB rejects the entire batch write operation:   One or more tables specified in the BatchWriteItem request does not exist.   Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.   You try to perform multiple operations on the same item in the same BatchWriteItem request. For example, you cannot put and delete the same item in the same BatchWriteItem request.     Your request contains at least two items with identical hash and range keys (which essentially is two put operations).    There are more than 25 requests in the batch.   Any individual item in a batch exceeds 400 KB.   The total request size exceeds 16 MB.  
   */
  batchWriteItem(callback?: (err: AWSError, data: DynamoDB.Types.BatchWriteItemOutput) => void): Request<DynamoDB.Types.BatchWriteItemOutput, AWSError>;
  /**
   * Creates a backup for an existing table.  Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken.   When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes.  You can call CreateBackup at a maximum rate of 50 times per second. All backups in DynamoDB work without consuming any provisioned throughput on the table.  If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency.   Along with data, the following are also included on the backups:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Streams   Provisioned read and write capacity  
   */
  createBackup(params: DynamoDB.Types.CreateBackupInput, callback?: (err: AWSError, data: DynamoDB.Types.CreateBackupOutput) => void): Request<DynamoDB.Types.CreateBackupOutput, AWSError>;
  /**
   * Creates a backup for an existing table.  Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken.   When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes.  You can call CreateBackup at a maximum rate of 50 times per second. All backups in DynamoDB work without consuming any provisioned throughput on the table.  If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency.   Along with data, the following are also included on the backups:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Streams   Provisioned read and write capacity  
   */
  createBackup(callback?: (err: AWSError, data: DynamoDB.Types.CreateBackupOutput) => void): Request<DynamoDB.Types.CreateBackupOutput, AWSError>;
  /**
   * Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions.   This operation only applies to Version 2017.11.29 of global tables.  If you want to add a new replica table to a global table, each of the following conditions must be true:   The table must have the same primary key as all of the other replicas.   The table must have the same name as all of the other replicas.   The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.   None of the replica tables in the global table can contain any data.    If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     If local secondary indexes are specified, then the following conditions must also be met:     The local secondary indexes must have the same name.     The local secondary indexes must have the same hash key and sort key (if present).      Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes.   If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table.  
   */
  createGlobalTable(params: DynamoDB.Types.CreateGlobalTableInput, callback?: (err: AWSError, data: DynamoDB.Types.CreateGlobalTableOutput) => void): Request<DynamoDB.Types.CreateGlobalTableOutput, AWSError>;
  /**
   * Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions.   This operation only applies to Version 2017.11.29 of global tables.  If you want to add a new replica table to a global table, each of the following conditions must be true:   The table must have the same primary key as all of the other replicas.   The table must have the same name as all of the other replicas.   The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.   None of the replica tables in the global table can contain any data.    If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     If local secondary indexes are specified, then the following conditions must also be met:     The local secondary indexes must have the same name.     The local secondary indexes must have the same hash key and sort key (if present).      Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes.   If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table.  
   */
  createGlobalTable(callback?: (err: AWSError, data: DynamoDB.Types.CreateGlobalTableOutput) => void): Request<DynamoDB.Types.CreateGlobalTableOutput, AWSError>;
  /**
   * The CreateTable operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.  CreateTable is an asynchronous operation. Upon receiving a CreateTable request, DynamoDB immediately returns a response with a TableStatus of CREATING. After the table is created, DynamoDB sets the TableStatus to ACTIVE. You can perform read and write operations only on an ACTIVE table.  You can optionally define secondary indexes on the new table, as part of the CreateTable operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the CREATING state at any given time. You can use the DescribeTable action to check the table status.
   */
  createTable(params: DynamoDB.Types.CreateTableInput, callback?: (err: AWSError, data: DynamoDB.Types.CreateTableOutput) => void): Request<DynamoDB.Types.CreateTableOutput, AWSError>;
  /**
   * The CreateTable operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.  CreateTable is an asynchronous operation. Upon receiving a CreateTable request, DynamoDB immediately returns a response with a TableStatus of CREATING. After the table is created, DynamoDB sets the TableStatus to ACTIVE. You can perform read and write operations only on an ACTIVE table.  You can optionally define secondary indexes on the new table, as part of the CreateTable operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the CREATING state at any given time. You can use the DescribeTable action to check the table status.
   */
  createTable(callback?: (err: AWSError, data: DynamoDB.Types.CreateTableOutput) => void): Request<DynamoDB.Types.CreateTableOutput, AWSError>;
  /**
   * Deletes an existing backup of a table. You can call DeleteBackup at a maximum rate of 10 times per second.
   */
  deleteBackup(params: DynamoDB.Types.DeleteBackupInput, callback?: (err: AWSError, data: DynamoDB.Types.DeleteBackupOutput) => void): Request<DynamoDB.Types.DeleteBackupOutput, AWSError>;
  /**
   * Deletes an existing backup of a table. You can call DeleteBackup at a maximum rate of 10 times per second.
   */
  deleteBackup(callback?: (err: AWSError, data: DynamoDB.Types.DeleteBackupOutput) => void): Request<DynamoDB.Types.DeleteBackupOutput, AWSError>;
  /**
   * Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value. In addition to deleting an item, you can also return the item's attribute values in the same operation, using the ReturnValues parameter. Unless you specify conditions, the DeleteItem is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.
   */
  deleteItem(params: DynamoDB.Types.DeleteItemInput, callback?: (err: AWSError, data: DynamoDB.Types.DeleteItemOutput) => void): Request<DynamoDB.Types.DeleteItemOutput, AWSError>;
  /**
   * Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value. In addition to deleting an item, you can also return the item's attribute values in the same operation, using the ReturnValues parameter. Unless you specify conditions, the DeleteItem is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.
   */
  deleteItem(callback?: (err: AWSError, data: DynamoDB.Types.DeleteItemOutput) => void): Request<DynamoDB.Types.DeleteItemOutput, AWSError>;
  /**
   * The DeleteTable operation deletes a table and all of its items. After a DeleteTable request, the specified table is in the DELETING state until DynamoDB completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is in CREATING or UPDATING states, then DynamoDB returns a ResourceInUseException. If the specified table does not exist, DynamoDB returns a ResourceNotFoundException. If table is already in the DELETING state, no error is returned.   DynamoDB might continue to accept data read and write operations, such as GetItem and PutItem, on a table in the DELETING state until the table deletion is complete.  When you delete a table, any indexes on that table are also deleted. If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the DISABLED state, and the stream is automatically deleted after 24 hours. Use the DescribeTable action to check the status of the table. 
   */
  deleteTable(params: DynamoDB.Types.DeleteTableInput, callback?: (err: AWSError, data: DynamoDB.Types.DeleteTableOutput) => void): Request<DynamoDB.Types.DeleteTableOutput, AWSError>;
  /**
   * The DeleteTable operation deletes a table and all of its items. After a DeleteTable request, the specified table is in the DELETING state until DynamoDB completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is in CREATING or UPDATING states, then DynamoDB returns a ResourceInUseException. If the specified table does not exist, DynamoDB returns a ResourceNotFoundException. If table is already in the DELETING state, no error is returned.   DynamoDB might continue to accept data read and write operations, such as GetItem and PutItem, on a table in the DELETING state until the table deletion is complete.  When you delete a table, any indexes on that table are also deleted. If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the DISABLED state, and the stream is automatically deleted after 24 hours. Use the DescribeTable action to check the status of the table. 
   */
  deleteTable(callback?: (err: AWSError, data: DynamoDB.Types.DeleteTableOutput) => void): Request<DynamoDB.Types.DeleteTableOutput, AWSError>;
  /**
   * Describes an existing backup of a table. You can call DescribeBackup at a maximum rate of 10 times per second.
   */
  describeBackup(params: DynamoDB.Types.DescribeBackupInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeBackupOutput) => void): Request<DynamoDB.Types.DescribeBackupOutput, AWSError>;
  /**
   * Describes an existing backup of a table. You can call DescribeBackup at a maximum rate of 10 times per second.
   */
  describeBackup(callback?: (err: AWSError, data: DynamoDB.Types.DescribeBackupOutput) => void): Request<DynamoDB.Types.DescribeBackupOutput, AWSError>;
  /**
   * Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  After continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days.  You can call DescribeContinuousBackups at a maximum rate of 10 times per second.
   */
  describeContinuousBackups(params: DynamoDB.Types.DescribeContinuousBackupsInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeContinuousBackupsOutput) => void): Request<DynamoDB.Types.DescribeContinuousBackupsOutput, AWSError>;
  /**
   * Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  After continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days.  You can call DescribeContinuousBackups at a maximum rate of 10 times per second.
   */
  describeContinuousBackups(callback?: (err: AWSError, data: DynamoDB.Types.DescribeContinuousBackupsOutput) => void): Request<DynamoDB.Types.DescribeContinuousBackupsOutput, AWSError>;
  /**
   * Returns information about contributor insights, for a given table or global secondary index.
   */
  describeContributorInsights(params: DynamoDB.Types.DescribeContributorInsightsInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeContributorInsightsOutput) => void): Request<DynamoDB.Types.DescribeContributorInsightsOutput, AWSError>;
  /**
   * Returns information about contributor insights, for a given table or global secondary index.
   */
  describeContributorInsights(callback?: (err: AWSError, data: DynamoDB.Types.DescribeContributorInsightsOutput) => void): Request<DynamoDB.Types.DescribeContributorInsightsOutput, AWSError>;
  /**
   * Returns the regional endpoint information.
   */
  describeEndpoints(params: DynamoDB.Types.DescribeEndpointsRequest, callback?: (err: AWSError, data: DynamoDB.Types.DescribeEndpointsResponse) => void): Request<DynamoDB.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns the regional endpoint information.
   */
  describeEndpoints(callback?: (err: AWSError, data: DynamoDB.Types.DescribeEndpointsResponse) => void): Request<DynamoDB.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Describes an existing table export.
   */
  describeExport(params: DynamoDB.Types.DescribeExportInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeExportOutput) => void): Request<DynamoDB.Types.DescribeExportOutput, AWSError>;
  /**
   * Describes an existing table export.
   */
  describeExport(callback?: (err: AWSError, data: DynamoDB.Types.DescribeExportOutput) => void): Request<DynamoDB.Types.DescribeExportOutput, AWSError>;
  /**
   * Returns information about the specified global table.  This operation only applies to Version 2017.11.29 of global tables. If you are using global tables Version 2019.11.21 you can use DescribeTable instead. 
   */
  describeGlobalTable(params: DynamoDB.Types.DescribeGlobalTableInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeGlobalTableOutput) => void): Request<DynamoDB.Types.DescribeGlobalTableOutput, AWSError>;
  /**
   * Returns information about the specified global table.  This operation only applies to Version 2017.11.29 of global tables. If you are using global tables Version 2019.11.21 you can use DescribeTable instead. 
   */
  describeGlobalTable(callback?: (err: AWSError, data: DynamoDB.Types.DescribeGlobalTableOutput) => void): Request<DynamoDB.Types.DescribeGlobalTableOutput, AWSError>;
  /**
   * Describes Region-specific settings for a global table.  This operation only applies to Version 2017.11.29 of global tables. 
   */
  describeGlobalTableSettings(params: DynamoDB.Types.DescribeGlobalTableSettingsInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeGlobalTableSettingsOutput) => void): Request<DynamoDB.Types.DescribeGlobalTableSettingsOutput, AWSError>;
  /**
   * Describes Region-specific settings for a global table.  This operation only applies to Version 2017.11.29 of global tables. 
   */
  describeGlobalTableSettings(callback?: (err: AWSError, data: DynamoDB.Types.DescribeGlobalTableSettingsOutput) => void): Request<DynamoDB.Types.DescribeGlobalTableSettingsOutput, AWSError>;
  /**
   *  Represents the properties of the import. 
   */
  describeImport(params: DynamoDB.Types.DescribeImportInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeImportOutput) => void): Request<DynamoDB.Types.DescribeImportOutput, AWSError>;
  /**
   *  Represents the properties of the import. 
   */
  describeImport(callback?: (err: AWSError, data: DynamoDB.Types.DescribeImportOutput) => void): Request<DynamoDB.Types.DescribeImportOutput, AWSError>;
  /**
   * Returns information about the status of Kinesis streaming.
   */
  describeKinesisStreamingDestination(params: DynamoDB.Types.DescribeKinesisStreamingDestinationInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeKinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.DescribeKinesisStreamingDestinationOutput, AWSError>;
  /**
   * Returns information about the status of Kinesis streaming.
   */
  describeKinesisStreamingDestination(callback?: (err: AWSError, data: DynamoDB.Types.DescribeKinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.DescribeKinesisStreamingDestinationOutput, AWSError>;
  /**
   * Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there. When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see Service, Account, and Table Quotas page in the Amazon DynamoDB Developer Guide. Although you can increase these quotas by filing a case at Amazon Web Services Support Center, obtaining the increase is not instantaneous. The DescribeLimits action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota. For example, you could use one of the Amazon Web Services SDKs to do the following:   Call DescribeLimits for a particular Region to obtain your current account quotas on provisioned capacity there.   Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.   Call ListTables to obtain a list of all your DynamoDB tables.   For each table name listed by ListTables, do the following:   Call DescribeTable with the table name.   Use the data returned by DescribeTable to add the read capacity units and write capacity units provisioned for the table itself to your variables.   If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.     Report the account quotas for that Region returned by DescribeLimits, along with the total current provisioned capacity levels you have calculated.   This will let you see whether you are getting close to your account-level quotas. The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes. For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.   DescribeLimits should only be called periodically. You can expect throttling errors if you call it more than once in a minute.  The DescribeLimits Request element has no content.
   */
  describeLimits(params: DynamoDB.Types.DescribeLimitsInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeLimitsOutput) => void): Request<DynamoDB.Types.DescribeLimitsOutput, AWSError>;
  /**
   * Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there. When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see Service, Account, and Table Quotas page in the Amazon DynamoDB Developer Guide. Although you can increase these quotas by filing a case at Amazon Web Services Support Center, obtaining the increase is not instantaneous. The DescribeLimits action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota. For example, you could use one of the Amazon Web Services SDKs to do the following:   Call DescribeLimits for a particular Region to obtain your current account quotas on provisioned capacity there.   Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.   Call ListTables to obtain a list of all your DynamoDB tables.   For each table name listed by ListTables, do the following:   Call DescribeTable with the table name.   Use the data returned by DescribeTable to add the read capacity units and write capacity units provisioned for the table itself to your variables.   If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.     Report the account quotas for that Region returned by DescribeLimits, along with the total current provisioned capacity levels you have calculated.   This will let you see whether you are getting close to your account-level quotas. The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes. For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.   DescribeLimits should only be called periodically. You can expect throttling errors if you call it more than once in a minute.  The DescribeLimits Request element has no content.
   */
  describeLimits(callback?: (err: AWSError, data: DynamoDB.Types.DescribeLimitsOutput) => void): Request<DynamoDB.Types.DescribeLimitsOutput, AWSError>;
  /**
   * Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.  If you issue a DescribeTable request immediately after a CreateTable request, DynamoDB might return a ResourceNotFoundException. This is because DescribeTable uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the DescribeTable request again. 
   */
  describeTable(params: DynamoDB.Types.DescribeTableInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
  /**
   * Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.  If you issue a DescribeTable request immediately after a CreateTable request, DynamoDB might return a ResourceNotFoundException. This is because DescribeTable uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the DescribeTable request again. 
   */
  describeTable(callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
  /**
   * Describes auto scaling settings across replicas of the global table at once.  This operation only applies to Version 2019.11.21 of global tables. 
   */
  describeTableReplicaAutoScaling(params: DynamoDB.Types.DescribeTableReplicaAutoScalingInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableReplicaAutoScalingOutput) => void): Request<DynamoDB.Types.DescribeTableReplicaAutoScalingOutput, AWSError>;
  /**
   * Describes auto scaling settings across replicas of the global table at once.  This operation only applies to Version 2019.11.21 of global tables. 
   */
  describeTableReplicaAutoScaling(callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableReplicaAutoScalingOutput) => void): Request<DynamoDB.Types.DescribeTableReplicaAutoScalingOutput, AWSError>;
  /**
   * Gives a description of the Time to Live (TTL) status on the specified table. 
   */
  describeTimeToLive(params: DynamoDB.Types.DescribeTimeToLiveInput, callback?: (err: AWSError, data: DynamoDB.Types.DescribeTimeToLiveOutput) => void): Request<DynamoDB.Types.DescribeTimeToLiveOutput, AWSError>;
  /**
   * Gives a description of the Time to Live (TTL) status on the specified table. 
   */
  describeTimeToLive(callback?: (err: AWSError, data: DynamoDB.Types.DescribeTimeToLiveOutput) => void): Request<DynamoDB.Types.DescribeTimeToLiveOutput, AWSError>;
  /**
   * Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.
   */
  disableKinesisStreamingDestination(params: DynamoDB.Types.KinesisStreamingDestinationInput, callback?: (err: AWSError, data: DynamoDB.Types.KinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.KinesisStreamingDestinationOutput, AWSError>;
  /**
   * Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources.
   */
  disableKinesisStreamingDestination(callback?: (err: AWSError, data: DynamoDB.Types.KinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.KinesisStreamingDestinationOutput, AWSError>;
  /**
   * Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.
   */
  enableKinesisStreamingDestination(params: DynamoDB.Types.KinesisStreamingDestinationInput, callback?: (err: AWSError, data: DynamoDB.Types.KinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.KinesisStreamingDestinationOutput, AWSError>;
  /**
   * Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE.
   */
  enableKinesisStreamingDestination(callback?: (err: AWSError, data: DynamoDB.Types.KinesisStreamingDestinationOutput) => void): Request<DynamoDB.Types.KinesisStreamingDestinationOutput, AWSError>;
  /**
   * This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL. For PartiQL reads (SELECT statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a LastEvaluatedKey value to continue the read in a subsequent operation. If the filter criteria in WHERE clause does not match any data, the read will return an empty result set. A single SELECT statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using WHERE clause). If LastEvaluatedKey is present in the response, you need to paginate the result set.
   */
  executeStatement(params: DynamoDB.Types.ExecuteStatementInput, callback?: (err: AWSError, data: DynamoDB.Types.ExecuteStatementOutput) => void): Request<DynamoDB.Types.ExecuteStatementOutput, AWSError>;
  /**
   * This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL. For PartiQL reads (SELECT statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a LastEvaluatedKey value to continue the read in a subsequent operation. If the filter criteria in WHERE clause does not match any data, the read will return an empty result set. A single SELECT statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using WHERE clause). If LastEvaluatedKey is present in the response, you need to paginate the result set.
   */
  executeStatement(callback?: (err: AWSError, data: DynamoDB.Types.ExecuteStatementOutput) => void): Request<DynamoDB.Types.ExecuteStatementOutput, AWSError>;
  /**
   * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.  The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to ConditionCheck in the TransactWriteItems API. 
   */
  executeTransaction(params: DynamoDB.Types.ExecuteTransactionInput, callback?: (err: AWSError, data: DynamoDB.Types.ExecuteTransactionOutput) => void): Request<DynamoDB.Types.ExecuteTransactionOutput, AWSError>;
  /**
   * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.  The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to ConditionCheck in the TransactWriteItems API. 
   */
  executeTransaction(callback?: (err: AWSError, data: DynamoDB.Types.ExecuteTransactionOutput) => void): Request<DynamoDB.Types.ExecuteTransactionOutput, AWSError>;
  /**
   * Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.
   */
  exportTableToPointInTime(params: DynamoDB.Types.ExportTableToPointInTimeInput, callback?: (err: AWSError, data: DynamoDB.Types.ExportTableToPointInTimeOutput) => void): Request<DynamoDB.Types.ExportTableToPointInTimeOutput, AWSError>;
  /**
   * Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window.
   */
  exportTableToPointInTime(callback?: (err: AWSError, data: DynamoDB.Types.ExportTableToPointInTimeOutput) => void): Request<DynamoDB.Types.ExportTableToPointInTimeOutput, AWSError>;
  /**
   * The GetItem operation returns a set of attributes for the item with the given primary key. If there is no matching item, GetItem does not return any data and there will be no Item element in the response.  GetItem provides an eventually consistent read by default. If your application requires a strongly consistent read, set ConsistentRead to true. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.
   */
  getItem(params: DynamoDB.Types.GetItemInput, callback?: (err: AWSError, data: DynamoDB.Types.GetItemOutput) => void): Request<DynamoDB.Types.GetItemOutput, AWSError>;
  /**
   * The GetItem operation returns a set of attributes for the item with the given primary key. If there is no matching item, GetItem does not return any data and there will be no Item element in the response.  GetItem provides an eventually consistent read by default. If your application requires a strongly consistent read, set ConsistentRead to true. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value.
   */
  getItem(callback?: (err: AWSError, data: DynamoDB.Types.GetItemOutput) => void): Request<DynamoDB.Types.GetItemOutput, AWSError>;
  /**
   *  Imports table data from an S3 bucket. 
   */
  importTable(params: DynamoDB.Types.ImportTableInput, callback?: (err: AWSError, data: DynamoDB.Types.ImportTableOutput) => void): Request<DynamoDB.Types.ImportTableOutput, AWSError>;
  /**
   *  Imports table data from an S3 bucket. 
   */
  importTable(callback?: (err: AWSError, data: DynamoDB.Types.ImportTableOutput) => void): Request<DynamoDB.Types.ImportTableOutput, AWSError>;
  /**
   * List backups associated with an Amazon Web Services account. To list backups for a given table, specify TableName. ListBackups returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page. In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested. You can call ListBackups a maximum of five times per second.
   */
  listBackups(params: DynamoDB.Types.ListBackupsInput, callback?: (err: AWSError, data: DynamoDB.Types.ListBackupsOutput) => void): Request<DynamoDB.Types.ListBackupsOutput, AWSError>;
  /**
   * List backups associated with an Amazon Web Services account. To list backups for a given table, specify TableName. ListBackups returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page. In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested. You can call ListBackups a maximum of five times per second.
   */
  listBackups(callback?: (err: AWSError, data: DynamoDB.Types.ListBackupsOutput) => void): Request<DynamoDB.Types.ListBackupsOutput, AWSError>;
  /**
   * Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.
   */
  listContributorInsights(params: DynamoDB.Types.ListContributorInsightsInput, callback?: (err: AWSError, data: DynamoDB.Types.ListContributorInsightsOutput) => void): Request<DynamoDB.Types.ListContributorInsightsOutput, AWSError>;
  /**
   * Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.
   */
  listContributorInsights(callback?: (err: AWSError, data: DynamoDB.Types.ListContributorInsightsOutput) => void): Request<DynamoDB.Types.ListContributorInsightsOutput, AWSError>;
  /**
   * Lists completed exports within the past 90 days.
   */
  listExports(params: DynamoDB.Types.ListExportsInput, callback?: (err: AWSError, data: DynamoDB.Types.ListExportsOutput) => void): Request<DynamoDB.Types.ListExportsOutput, AWSError>;
  /**
   * Lists completed exports within the past 90 days.
   */
  listExports(callback?: (err: AWSError, data: DynamoDB.Types.ListExportsOutput) => void): Request<DynamoDB.Types.ListExportsOutput, AWSError>;
  /**
   * Lists all global tables that have a replica in the specified Region.  This operation only applies to Version 2017.11.29 of global tables. 
   */
  listGlobalTables(params: DynamoDB.Types.ListGlobalTablesInput, callback?: (err: AWSError, data: DynamoDB.Types.ListGlobalTablesOutput) => void): Request<DynamoDB.Types.ListGlobalTablesOutput, AWSError>;
  /**
   * Lists all global tables that have a replica in the specified Region.  This operation only applies to Version 2017.11.29 of global tables. 
   */
  listGlobalTables(callback?: (err: AWSError, data: DynamoDB.Types.ListGlobalTablesOutput) => void): Request<DynamoDB.Types.ListGlobalTablesOutput, AWSError>;
  /**
   *  Lists completed imports within the past 90 days. 
   */
  listImports(params: DynamoDB.Types.ListImportsInput, callback?: (err: AWSError, data: DynamoDB.Types.ListImportsOutput) => void): Request<DynamoDB.Types.ListImportsOutput, AWSError>;
  /**
   *  Lists completed imports within the past 90 days. 
   */
  listImports(callback?: (err: AWSError, data: DynamoDB.Types.ListImportsOutput) => void): Request<DynamoDB.Types.ListImportsOutput, AWSError>;
  /**
   * Returns an array of table names associated with the current account and endpoint. The output from ListTables is paginated, with each page returning a maximum of 100 table names.
   */
  listTables(params: DynamoDB.Types.ListTablesInput, callback?: (err: AWSError, data: DynamoDB.Types.ListTablesOutput) => void): Request<DynamoDB.Types.ListTablesOutput, AWSError>;
  /**
   * Returns an array of table names associated with the current account and endpoint. The output from ListTables is paginated, with each page returning a maximum of 100 table names.
   */
  listTables(callback?: (err: AWSError, data: DynamoDB.Types.ListTablesOutput) => void): Request<DynamoDB.Types.ListTablesOutput, AWSError>;
  /**
   * List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account. For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  listTagsOfResource(params: DynamoDB.Types.ListTagsOfResourceInput, callback?: (err: AWSError, data: DynamoDB.Types.ListTagsOfResourceOutput) => void): Request<DynamoDB.Types.ListTagsOfResourceOutput, AWSError>;
  /**
   * List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account. For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  listTagsOfResource(callback?: (err: AWSError, data: DynamoDB.Types.ListTagsOfResourceOutput) => void): Request<DynamoDB.Types.ListTagsOfResourceOutput, AWSError>;
  /**
   * Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the ReturnValues parameter. When you add an item, the primary key attributes are the only required attributes.  Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty.  Invalid Requests with empty values will be rejected with a ValidationException exception.  To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists.  For more information about PutItem, see Working with Items in the Amazon DynamoDB Developer Guide.
   */
  putItem(params: DynamoDB.Types.PutItemInput, callback?: (err: AWSError, data: DynamoDB.Types.PutItemOutput) => void): Request<DynamoDB.Types.PutItemOutput, AWSError>;
  /**
   * Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the ReturnValues parameter. When you add an item, the primary key attributes are the only required attributes.  Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty.  Invalid Requests with empty values will be rejected with a ValidationException exception.  To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists.  For more information about PutItem, see Working with Items in the Amazon DynamoDB Developer Guide.
   */
  putItem(callback?: (err: AWSError, data: DynamoDB.Types.PutItemOutput) => void): Request<DynamoDB.Types.PutItemOutput, AWSError>;
  /**
   * You must provide the name of the partition key attribute and a single value for that attribute. Query returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results. Use the KeyConditionExpression parameter to provide a specific value for the partition key. The Query operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the Query operation by specifying a sort key value and a comparison operator in KeyConditionExpression. To further refine the Query results, you can optionally provide a FilterExpression. A FilterExpression determines which items within the results should be returned to you. All of the other results are discarded.   A Query operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation.    DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a FilterExpression.    Query results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the ScanIndexForward parameter to false.   A single Query operation will read up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you will need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.   FilterExpression is applied after a Query finishes, but before the results are returned. A FilterExpression cannot contain partition key or sort key attributes. You need to specify those attributes in the KeyConditionExpression.    A Query operation can return an empty result set and a LastEvaluatedKey if all the items read for the page of results are filtered out.   You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the ConsistentRead parameter to true and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify ConsistentRead when querying a global secondary index.
   */
  query(params: DynamoDB.Types.QueryInput, callback?: (err: AWSError, data: DynamoDB.Types.QueryOutput) => void): Request<DynamoDB.Types.QueryOutput, AWSError>;
  /**
   * You must provide the name of the partition key attribute and a single value for that attribute. Query returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results. Use the KeyConditionExpression parameter to provide a specific value for the partition key. The Query operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the Query operation by specifying a sort key value and a comparison operator in KeyConditionExpression. To further refine the Query results, you can optionally provide a FilterExpression. A FilterExpression determines which items within the results should be returned to you. All of the other results are discarded.   A Query operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation.    DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a FilterExpression.    Query results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the ScanIndexForward parameter to false.   A single Query operation will read up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you will need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.   FilterExpression is applied after a Query finishes, but before the results are returned. A FilterExpression cannot contain partition key or sort key attributes. You need to specify those attributes in the KeyConditionExpression.    A Query operation can return an empty result set and a LastEvaluatedKey if all the items read for the page of results are filtered out.   You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the ConsistentRead parameter to true and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify ConsistentRead when querying a global secondary index.
   */
  query(callback?: (err: AWSError, data: DynamoDB.Types.QueryOutput) => void): Request<DynamoDB.Types.QueryOutput, AWSError>;
  /**
   * Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.  You can call RestoreTableFromBackup at a maximum rate of 10 times per second. You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings  
   */
  restoreTableFromBackup(params: DynamoDB.Types.RestoreTableFromBackupInput, callback?: (err: AWSError, data: DynamoDB.Types.RestoreTableFromBackupOutput) => void): Request<DynamoDB.Types.RestoreTableFromBackupOutput, AWSError>;
  /**
   * Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.  You can call RestoreTableFromBackup at a maximum rate of 10 times per second. You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings  
   */
  restoreTableFromBackup(callback?: (err: AWSError, data: DynamoDB.Types.RestoreTableFromBackupOutput) => void): Request<DynamoDB.Types.RestoreTableFromBackupOutput, AWSError>;
  /**
   * Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.   When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table.   Along with data, the following are also included on the new restored table using point in time recovery:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Provisioned read and write capacity   Encryption settings   All these settings come from the current settings of the source table at the time of restore.     You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings   Point in time recovery settings  
   */
  restoreTableToPointInTime(params: DynamoDB.Types.RestoreTableToPointInTimeInput, callback?: (err: AWSError, data: DynamoDB.Types.RestoreTableToPointInTimeOutput) => void): Request<DynamoDB.Types.RestoreTableToPointInTimeOutput, AWSError>;
  /**
   * Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.   When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table.   Along with data, the following are also included on the new restored table using point in time recovery:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Provisioned read and write capacity   Encryption settings   All these settings come from the current settings of the source table at the time of restore.     You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings   Point in time recovery settings  
   */
  restoreTableToPointInTime(callback?: (err: AWSError, data: DynamoDB.Types.RestoreTableToPointInTimeOutput) => void): Request<DynamoDB.Types.RestoreTableToPointInTimeOutput, AWSError>;
  /**
   * The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a FilterExpression operation. If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a LastEvaluatedKey value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria.  A single Scan operation reads up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.   Scan operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel Scan operation by providing the Segment and TotalSegments parameters. For more information, see Parallel Scan in the Amazon DynamoDB Developer Guide.  Scan uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the Scan begins, you can set the ConsistentRead parameter to true.
   */
  scan(params: DynamoDB.Types.ScanInput, callback?: (err: AWSError, data: DynamoDB.Types.ScanOutput) => void): Request<DynamoDB.Types.ScanOutput, AWSError>;
  /**
   * The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a FilterExpression operation. If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the scan stops and results are returned to the user as a LastEvaluatedKey value to continue the scan in a subsequent operation. The results also include the number of items exceeding the limit. A scan can result in no table data meeting the filter criteria.  A single Scan operation reads up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.   Scan operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel Scan operation by providing the Segment and TotalSegments parameters. For more information, see Parallel Scan in the Amazon DynamoDB Developer Guide.  Scan uses eventually consistent reads when accessing the data in a table; therefore, the result set might not include the changes to data in the table immediately before the operation began. If you need a consistent copy of the data, as of the time that the Scan begins, you can set the ConsistentRead parameter to true.
   */
  scan(callback?: (err: AWSError, data: DynamoDB.Types.ScanOutput) => void): Request<DynamoDB.Types.ScanOutput, AWSError>;
  /**
   * Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account.  For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  tagResource(params: DynamoDB.Types.TagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account.  For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  TransactGetItems is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A TransactGetItems call can contain up to 100 TransactGetItem objects, each of which contains a Get structure that specifies an item to retrieve from a table in the account and Region. A call to TransactGetItems cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB. DynamoDB rejects the entire TransactGetItems request if any of the following is true:   A conflicting operation is in the process of updating an item to be read.   There is insufficient provisioned capacity for the transaction to be completed.   There is a user error, such as an invalid data format.   The aggregate size of the items in the transaction cannot exceed 4 MB.  
   */
  transactGetItems(params: DynamoDB.Types.TransactGetItemsInput, callback?: (err: AWSError, data: DynamoDB.Types.TransactGetItemsOutput) => void): Request<DynamoDB.Types.TransactGetItemsOutput, AWSError>;
  /**
   *  TransactGetItems is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A TransactGetItems call can contain up to 100 TransactGetItem objects, each of which contains a Get structure that specifies an item to retrieve from a table in the account and Region. A call to TransactGetItems cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB. DynamoDB rejects the entire TransactGetItems request if any of the following is true:   A conflicting operation is in the process of updating an item to be read.   There is insufficient provisioned capacity for the transaction to be completed.   There is a user error, such as an invalid data format.   The aggregate size of the items in the transaction cannot exceed 4 MB.  
   */
  transactGetItems(callback?: (err: AWSError, data: DynamoDB.Types.TransactGetItemsOutput) => void): Request<DynamoDB.Types.TransactGetItemsOutput, AWSError>;
  /**
   *  TransactWriteItems is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both ConditionCheck and Update the same item. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:    Put  —   Initiates a PutItem operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Update  —   Initiates an UpdateItem operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Delete  —   Initiates a DeleteItem operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.    ConditionCheck  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.   DynamoDB rejects the entire TransactWriteItems request if any of the following is true:   A condition in one of the condition expressions is not met.   An ongoing operation is in the process of updating the same item.   There is insufficient provisioned capacity for the transaction to be completed.   An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.   The aggregate size of the items in the transaction exceeds 4 MB.   There is a user error, such as an invalid data format.  
   */
  transactWriteItems(params: DynamoDB.Types.TransactWriteItemsInput, callback?: (err: AWSError, data: DynamoDB.Types.TransactWriteItemsOutput) => void): Request<DynamoDB.Types.TransactWriteItemsOutput, AWSError>;
  /**
   *  TransactWriteItems is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both ConditionCheck and Update the same item. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:    Put  —   Initiates a PutItem operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Update  —   Initiates an UpdateItem operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Delete  —   Initiates a DeleteItem operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.    ConditionCheck  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.   DynamoDB rejects the entire TransactWriteItems request if any of the following is true:   A condition in one of the condition expressions is not met.   An ongoing operation is in the process of updating the same item.   There is insufficient provisioned capacity for the transaction to be completed.   An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.   The aggregate size of the items in the transaction exceeds 4 MB.   There is a user error, such as an invalid data format.  
   */
  transactWriteItems(callback?: (err: AWSError, data: DynamoDB.Types.TransactWriteItemsOutput) => void): Request<DynamoDB.Types.TransactWriteItemsOutput, AWSError>;
  /**
   * Removes the association of tags from an Amazon DynamoDB resource. You can call UntagResource up to five times per second, per account.  For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  untagResource(params: DynamoDB.Types.UntagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the association of tags from an Amazon DynamoDB resource. You can call UntagResource up to five times per second, per account.  For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  UpdateContinuousBackups enables or disables point in time recovery for the specified table. A successful UpdateContinuousBackups call returns the current ContinuousBackupsDescription. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  Once continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. 
   */
  updateContinuousBackups(params: DynamoDB.Types.UpdateContinuousBackupsInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateContinuousBackupsOutput) => void): Request<DynamoDB.Types.UpdateContinuousBackupsOutput, AWSError>;
  /**
   *  UpdateContinuousBackups enables or disables point in time recovery for the specified table. A successful UpdateContinuousBackups call returns the current ContinuousBackupsDescription. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  Once continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days. 
   */
  updateContinuousBackups(callback?: (err: AWSError, data: DynamoDB.Types.UpdateContinuousBackupsOutput) => void): Request<DynamoDB.Types.UpdateContinuousBackupsOutput, AWSError>;
  /**
   * Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
   */
  updateContributorInsights(params: DynamoDB.Types.UpdateContributorInsightsInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateContributorInsightsOutput) => void): Request<DynamoDB.Types.UpdateContributorInsightsOutput, AWSError>;
  /**
   * Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
   */
  updateContributorInsights(callback?: (err: AWSError, data: DynamoDB.Types.UpdateContributorInsightsOutput) => void): Request<DynamoDB.Types.UpdateContributorInsightsOutput, AWSError>;
  /**
   * Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.  Although you can use UpdateGlobalTable to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas.   If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     The global secondary indexes must have the same provisioned and maximum write capacity units.   
   */
  updateGlobalTable(params: DynamoDB.Types.UpdateGlobalTableInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateGlobalTableOutput) => void): Request<DynamoDB.Types.UpdateGlobalTableOutput, AWSError>;
  /**
   * Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.  Although you can use UpdateGlobalTable to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas.   If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     The global secondary indexes must have the same provisioned and maximum write capacity units.   
   */
  updateGlobalTable(callback?: (err: AWSError, data: DynamoDB.Types.UpdateGlobalTableOutput) => void): Request<DynamoDB.Types.UpdateGlobalTableOutput, AWSError>;
  /**
   * Updates settings for a global table.
   */
  updateGlobalTableSettings(params: DynamoDB.Types.UpdateGlobalTableSettingsInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateGlobalTableSettingsOutput) => void): Request<DynamoDB.Types.UpdateGlobalTableSettingsOutput, AWSError>;
  /**
   * Updates settings for a global table.
   */
  updateGlobalTableSettings(callback?: (err: AWSError, data: DynamoDB.Types.UpdateGlobalTableSettingsOutput) => void): Request<DynamoDB.Types.UpdateGlobalTableSettingsOutput, AWSError>;
  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values). You can also return the item's attribute values in the same UpdateItem operation using the ReturnValues parameter.
   */
  updateItem(params: DynamoDB.Types.UpdateItemInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateItemOutput) => void): Request<DynamoDB.Types.UpdateItemOutput, AWSError>;
  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values). You can also return the item's attribute values in the same UpdateItem operation using the ReturnValues parameter.
   */
  updateItem(callback?: (err: AWSError, data: DynamoDB.Types.UpdateItemOutput) => void): Request<DynamoDB.Types.UpdateItemOutput, AWSError>;
  /**
   * Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table. You can only perform one of the following operations at once:   Modify the provisioned throughput settings of the table.   Remove a global secondary index from the table.   Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations.    UpdateTable is an asynchronous operation; while it is executing, the table status changes from ACTIVE to UPDATING. While it is UPDATING, you cannot issue another UpdateTable request. When the table returns to the ACTIVE state, the UpdateTable operation is complete.
   */
  updateTable(params: DynamoDB.Types.UpdateTableInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateTableOutput) => void): Request<DynamoDB.Types.UpdateTableOutput, AWSError>;
  /**
   * Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table. You can only perform one of the following operations at once:   Modify the provisioned throughput settings of the table.   Remove a global secondary index from the table.   Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations.    UpdateTable is an asynchronous operation; while it is executing, the table status changes from ACTIVE to UPDATING. While it is UPDATING, you cannot issue another UpdateTable request. When the table returns to the ACTIVE state, the UpdateTable operation is complete.
   */
  updateTable(callback?: (err: AWSError, data: DynamoDB.Types.UpdateTableOutput) => void): Request<DynamoDB.Types.UpdateTableOutput, AWSError>;
  /**
   * Updates auto scaling settings on your global tables at once.  This operation only applies to Version 2019.11.21 of global tables. 
   */
  updateTableReplicaAutoScaling(params: DynamoDB.Types.UpdateTableReplicaAutoScalingInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateTableReplicaAutoScalingOutput) => void): Request<DynamoDB.Types.UpdateTableReplicaAutoScalingOutput, AWSError>;
  /**
   * Updates auto scaling settings on your global tables at once.  This operation only applies to Version 2019.11.21 of global tables. 
   */
  updateTableReplicaAutoScaling(callback?: (err: AWSError, data: DynamoDB.Types.UpdateTableReplicaAutoScalingOutput) => void): Request<DynamoDB.Types.UpdateTableReplicaAutoScalingOutput, AWSError>;
  /**
   * The UpdateTimeToLive method enables or disables Time to Live (TTL) for the specified table. A successful UpdateTimeToLive call returns the current TimeToLiveSpecification. It can take up to one hour for the change to fully process. Any additional UpdateTimeToLive calls for the same table during this one hour duration result in a ValidationException.  TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.   The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.   DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations.   DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.  As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation. For more information, see Time To Live in the Amazon DynamoDB Developer Guide. 
   */
  updateTimeToLive(params: DynamoDB.Types.UpdateTimeToLiveInput, callback?: (err: AWSError, data: DynamoDB.Types.UpdateTimeToLiveOutput) => void): Request<DynamoDB.Types.UpdateTimeToLiveOutput, AWSError>;
  /**
   * The UpdateTimeToLive method enables or disables Time to Live (TTL) for the specified table. A successful UpdateTimeToLive call returns the current TimeToLiveSpecification. It can take up to one hour for the change to fully process. Any additional UpdateTimeToLive calls for the same table during this one hour duration result in a ValidationException.  TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.   The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.   DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations.   DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.  As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation. For more information, see Time To Live in the Amazon DynamoDB Developer Guide. 
   */
  updateTimeToLive(callback?: (err: AWSError, data: DynamoDB.Types.UpdateTimeToLiveOutput) => void): Request<DynamoDB.Types.UpdateTimeToLiveOutput, AWSError>;
  /**
   * Waits for the tableExists state by periodically calling the underlying DynamoDB.describeTableoperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "tableExists", params: DynamoDB.Types.DescribeTableInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
  /**
   * Waits for the tableExists state by periodically calling the underlying DynamoDB.describeTableoperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "tableExists", callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
  /**
   * Waits for the tableNotExists state by periodically calling the underlying DynamoDB.describeTableoperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "tableNotExists", params: DynamoDB.Types.DescribeTableInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
  /**
   * Waits for the tableNotExists state by periodically calling the underlying DynamoDB.describeTableoperation every 20 seconds (at most 25 times).
   */
  waitFor(state: "tableNotExists", callback?: (err: AWSError, data: DynamoDB.Types.DescribeTableOutput) => void): Request<DynamoDB.Types.DescribeTableOutput, AWSError>;
}
declare namespace DynamoDB {
  export import DocumentClient = document_client;
  export import Converter = converter;
}
declare namespace DynamoDB {
  export type ArchivalReason = string;
  export interface ArchivalSummary {
    /**
     * The date and time when table archival was initiated by DynamoDB, in UNIX epoch time format.
     */
    ArchivalDateTime?: _Date;
    /**
     * The reason DynamoDB archived the table. Currently, the only possible value is:    INACCESSIBLE_ENCRYPTION_CREDENTIALS - The table was archived due to the table's KMS key being inaccessible for more than seven days. An On-Demand backup was created at the archival time.  
     */
    ArchivalReason?: ArchivalReason;
    /**
     * The Amazon Resource Name (ARN) of the backup the table was archived to, when applicable in the archival reason. If you wish to restore this backup to the same table name, you will need to delete the original table.
     */
    ArchivalBackupArn?: BackupArn;
  }
  export type AttributeAction = "ADD"|"PUT"|"DELETE"|string;
  export interface AttributeDefinition {
    /**
     * A name for the attribute.
     */
    AttributeName: KeySchemaAttributeName;
    /**
     * The data type for the attribute, where:    S - the attribute is of type String    N - the attribute is of type Number    B - the attribute is of type Binary  
     */
    AttributeType: ScalarAttributeType;
  }
  export type AttributeDefinitions = AttributeDefinition[];
  export type AttributeMap = {[key: string]: AttributeValue};
  export type AttributeName = string;
  export type AttributeNameList = AttributeName[];
  export type AttributeUpdates = {[key: string]: AttributeValueUpdate};
  export interface AttributeValue {
    /**
     * An attribute of type String. For example:  "S": "Hello" 
     */
    S?: StringAttributeValue;
    /**
     * An attribute of type Number. For example:  "N": "123.45"  Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
     */
    N?: NumberAttributeValue;
    /**
     * An attribute of type Binary. For example:  "B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk" 
     */
    B?: BinaryAttributeValue;
    /**
     * An attribute of type String Set. For example:  "SS": ["Giraffe", "Hippo" ,"Zebra"] 
     */
    SS?: StringSetAttributeValue;
    /**
     * An attribute of type Number Set. For example:  "NS": ["42.2", "-19", "7.5", "3.14"]  Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
     */
    NS?: NumberSetAttributeValue;
    /**
     * An attribute of type Binary Set. For example:  "BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="] 
     */
    BS?: BinarySetAttributeValue;
    /**
     * An attribute of type Map. For example:  "M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}} 
     */
    M?: MapAttributeValue;
    /**
     * An attribute of type List. For example:  "L": [ {"S": "Cookies"} , {"S": "Coffee"}, {"N": "3.14159"}] 
     */
    L?: ListAttributeValue;
    /**
     * An attribute of type Null. For example:  "NULL": true 
     */
    NULL?: NullAttributeValue;
    /**
     * An attribute of type Boolean. For example:  "BOOL": true 
     */
    BOOL?: BooleanAttributeValue;
  }
  export type AttributeValueList = AttributeValue[];
  export interface AttributeValueUpdate {
    /**
     * Represents the data for an attribute. Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself. For more information, see Data Types in the Amazon DynamoDB Developer Guide. 
     */
    Value?: AttributeValue;
    /**
     * Specifies how to perform the update. Valid values are PUT (default), DELETE, and ADD. The behavior depends on whether the specified primary key already exists in the table.  If an item with the specified Key is found in the table:     PUT - Adds the specified attribute to the item. If the attribute already exists, it is replaced by the new value.     DELETE - If no value is specified, the attribute and its value are removed from the item. The data type of the specified value must match the existing value's data type. If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set [a,b,c] and the DELETE action specified [a,c], then the final attribute value would be [b]. Specifying an empty set is an error.    ADD - If the attribute does not already exist, then the attribute and its values are added to the item. If the attribute does exist, then the behavior of ADD depends on the data type of the attribute:   If the existing attribute is a number, and if Value is also a number, then the Value is mathematically added to the existing attribute. If Value is a negative number, then it is subtracted from the existing attribute.   If you use ADD to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value. In addition, if you use ADD to update an existing item, and intend to increment or decrement an attribute value which does not yet exist, DynamoDB uses 0 as the initial value. For example, suppose that the item you want to update does not yet have an attribute named itemcount, but you decide to ADD the number 3 to this attribute anyway, even though it currently does not exist. DynamoDB will create the itemcount attribute, set its initial value to 0, and finally add 3 to it. The result will be a new itemcount attribute in the item, with a value of 3.    If the existing data type is a set, and if the Value is also a set, then the Value is added to the existing set. (This is a set operation, not mathematical addition.) For example, if the attribute value was the set [1,2], and the ADD action specified [3], then the final attribute value would be [1,2,3]. An error occurs if an Add action is specified for a set attribute and the attribute type specified does not match the existing set type.  Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the Value must also be a set of strings. The same holds true for number sets and binary sets.   This action is only valid for an existing attribute whose data type is number or is a set. Do not use ADD for any other data types.    If no item with the specified Key is found:     PUT - DynamoDB creates a new item with the specified primary key, and then adds the attribute.     DELETE - Nothing happens; there is no attribute to delete.    ADD - DynamoDB creates a new item with the supplied primary key and number (or set) for the attribute value. The only data types allowed are number, number set, string set or binary set.  
     */
    Action?: AttributeAction;
  }
  export interface AutoScalingPolicyDescription {
    /**
     * The name of the scaling policy.
     */
    PolicyName?: AutoScalingPolicyName;
    /**
     * Represents a target tracking scaling policy configuration.
     */
    TargetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
  }
  export type AutoScalingPolicyDescriptionList = AutoScalingPolicyDescription[];
  export type AutoScalingPolicyName = string;
  export interface AutoScalingPolicyUpdate {
    /**
     * The name of the scaling policy.
     */
    PolicyName?: AutoScalingPolicyName;
    /**
     * Represents a target tracking scaling policy configuration.
     */
    TargetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
  }
  export type AutoScalingRoleArn = string;
  export interface AutoScalingSettingsDescription {
    /**
     * The minimum capacity units that a global table or global secondary index should be scaled down to.
     */
    MinimumUnits?: PositiveLongObject;
    /**
     * The maximum capacity units that a global table or global secondary index should be scaled up to.
     */
    MaximumUnits?: PositiveLongObject;
    /**
     * Disabled auto scaling for this global table or global secondary index.
     */
    AutoScalingDisabled?: BooleanObject;
    /**
     * Role ARN used for configuring the auto scaling policy.
     */
    AutoScalingRoleArn?: String;
    /**
     * Information about the scaling policies.
     */
    ScalingPolicies?: AutoScalingPolicyDescriptionList;
  }
  export interface AutoScalingSettingsUpdate {
    /**
     * The minimum capacity units that a global table or global secondary index should be scaled down to.
     */
    MinimumUnits?: PositiveLongObject;
    /**
     * The maximum capacity units that a global table or global secondary index should be scaled up to.
     */
    MaximumUnits?: PositiveLongObject;
    /**
     * Disabled auto scaling for this global table or global secondary index.
     */
    AutoScalingDisabled?: BooleanObject;
    /**
     * Role ARN used for configuring auto scaling policy.
     */
    AutoScalingRoleArn?: AutoScalingRoleArn;
    /**
     * The scaling policy to apply for scaling target global table or global secondary index capacity units.
     */
    ScalingPolicyUpdate?: AutoScalingPolicyUpdate;
  }
  export interface AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
    /**
     * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
     */
    DisableScaleIn?: BooleanObject;
    /**
     * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately. 
     */
    ScaleInCooldown?: IntegerObject;
    /**
     * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.
     */
    ScaleOutCooldown?: IntegerObject;
    /**
     * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
     */
    TargetValue: Double;
  }
  export interface AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
    /**
     * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
     */
    DisableScaleIn?: BooleanObject;
    /**
     * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. The cooldown period is used to block subsequent scale in requests until it has expired. You should scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, application auto scaling scales out your scalable target immediately. 
     */
    ScaleInCooldown?: IntegerObject;
    /**
     * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. You should continuously (but not excessively) scale out.
     */
    ScaleOutCooldown?: IntegerObject;
    /**
     * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
     */
    TargetValue: Double;
  }
  export type Backfilling = boolean;
  export type BackupArn = string;
  export type BackupCreationDateTime = Date;
  export interface BackupDescription {
    /**
     * Contains the details of the backup created for the table. 
     */
    BackupDetails?: BackupDetails;
    /**
     * Contains the details of the table when the backup was created. 
     */
    SourceTableDetails?: SourceTableDetails;
    /**
     * Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.
     */
    SourceTableFeatureDetails?: SourceTableFeatureDetails;
  }
  export interface BackupDetails {
    /**
     * ARN associated with the backup.
     */
    BackupArn: BackupArn;
    /**
     * Name of the requested backup.
     */
    BackupName: BackupName;
    /**
     * Size of the backup in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    BackupSizeBytes?: BackupSizeBytes;
    /**
     * Backup can be in one of the following states: CREATING, ACTIVE, DELETED. 
     */
    BackupStatus: BackupStatus;
    /**
     * BackupType:    USER - You create and manage these using the on-demand backup feature.    SYSTEM - If you delete a table with point-in-time recovery enabled, a SYSTEM backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion.     AWS_BACKUP - On-demand backup created by you from Backup service.  
     */
    BackupType: BackupType;
    /**
     * Time at which the backup was created. This is the request time of the backup. 
     */
    BackupCreationDateTime: BackupCreationDateTime;
    /**
     * Time at which the automatic on-demand backup created by DynamoDB will expire. This SYSTEM on-demand backup expires automatically 35 days after its creation.
     */
    BackupExpiryDateTime?: _Date;
  }
  export type BackupName = string;
  export type BackupSizeBytes = number;
  export type BackupStatus = "CREATING"|"DELETED"|"AVAILABLE"|string;
  export type BackupSummaries = BackupSummary[];
  export interface BackupSummary {
    /**
     * Name of the table.
     */
    TableName?: TableName;
    /**
     * Unique identifier for the table.
     */
    TableId?: TableId;
    /**
     * ARN associated with the table.
     */
    TableArn?: TableArn;
    /**
     * ARN associated with the backup.
     */
    BackupArn?: BackupArn;
    /**
     * Name of the specified backup.
     */
    BackupName?: BackupName;
    /**
     * Time at which the backup was created.
     */
    BackupCreationDateTime?: BackupCreationDateTime;
    /**
     * Time at which the automatic on-demand backup created by DynamoDB will expire. This SYSTEM on-demand backup expires automatically 35 days after its creation.
     */
    BackupExpiryDateTime?: _Date;
    /**
     * Backup can be in one of the following states: CREATING, ACTIVE, DELETED.
     */
    BackupStatus?: BackupStatus;
    /**
     * BackupType:    USER - You create and manage these using the on-demand backup feature.    SYSTEM - If you delete a table with point-in-time recovery enabled, a SYSTEM backup is automatically created and is retained for 35 days (at no additional cost). System backups allow you to restore the deleted table to the state it was in just before the point of deletion.     AWS_BACKUP - On-demand backup created by you from Backup service.  
     */
    BackupType?: BackupType;
    /**
     * Size of the backup in bytes.
     */
    BackupSizeBytes?: BackupSizeBytes;
  }
  export type BackupType = "USER"|"SYSTEM"|"AWS_BACKUP"|string;
  export type BackupTypeFilter = "USER"|"SYSTEM"|"AWS_BACKUP"|"ALL"|string;
  export type BackupsInputLimit = number;
  export interface BatchExecuteStatementInput {
    /**
     * The list of PartiQL statements representing the batch to run.
     */
    Statements: PartiQLBatchRequest;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
  }
  export interface BatchExecuteStatementOutput {
    /**
     * The response to each PartiQL statement in the batch.
     */
    Responses?: PartiQLBatchResponse;
    /**
     * The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export interface BatchGetItemInput {
    /**
     * A map of one or more table names and, for each table, a map that describes one or more items to retrieve from that table. Each table name can be used only once per BatchGetItem request. Each element in the map of items to retrieve consists of the following:    ConsistentRead - If true, a strongly consistent read is used; if false (the default), an eventually consistent read is used.    ExpressionAttributeNames - One or more substitution tokens for attribute names in the ProjectionExpression parameter. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information about expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    Keys - An array of primary key attribute values that define specific items in the table. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide the partition key value. For a composite key, you must provide both the partition key value and the sort key value.    ProjectionExpression - A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    AttributesToGet - This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.   
     */
    RequestItems: BatchGetRequestMap;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
  }
  export interface BatchGetItemOutput {
    /**
     * A map of table name to a list of items. Each object in Responses consists of a table name, along with a map of attribute data consisting of the data type and attribute value.
     */
    Responses?: BatchGetResponseMap;
    /**
     * A map of tables and their respective keys that were not processed with the current response. The UnprocessedKeys value is in the same form as RequestItems, so the value can be provided directly to a subsequent BatchGetItem operation. For more information, see RequestItems in the Request Parameters section. Each element consists of:    Keys - An array of primary key attribute values that define specific items in the table.    ProjectionExpression - One or more attributes to be retrieved from the table or index. By default, all attributes are returned. If a requested attribute is not found, it does not appear in the result.    ConsistentRead - The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used.   If there are no unprocessed keys remaining, the response contains an empty UnprocessedKeys map.
     */
    UnprocessedKeys?: BatchGetRequestMap;
    /**
     * The read capacity units consumed by the entire BatchGetItem operation. Each element consists of:    TableName - The table that consumed the provisioned throughput.    CapacityUnits - The total number of capacity units consumed.  
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export type BatchGetRequestMap = {[key: string]: KeysAndAttributes};
  export type BatchGetResponseMap = {[key: string]: ItemList};
  export interface BatchStatementError {
    /**
     *  The error code associated with the failed PartiQL batch statement. 
     */
    Code?: BatchStatementErrorCodeEnum;
    /**
     *  The error message associated with the PartiQL batch response. 
     */
    Message?: String;
  }
  export type BatchStatementErrorCodeEnum = "ConditionalCheckFailed"|"ItemCollectionSizeLimitExceeded"|"RequestLimitExceeded"|"ValidationError"|"ProvisionedThroughputExceeded"|"TransactionConflict"|"ThrottlingError"|"InternalServerError"|"ResourceNotFound"|"AccessDenied"|"DuplicateItem"|string;
  export interface BatchStatementRequest {
    /**
     *  A valid PartiQL statement. 
     */
    Statement: PartiQLStatement;
    /**
     *  The parameters associated with a PartiQL statement in the batch request. 
     */
    Parameters?: PreparedStatementParameters;
    /**
     *  The read consistency of the PartiQL batch request. 
     */
    ConsistentRead?: ConsistentRead;
  }
  export interface BatchStatementResponse {
    /**
     *  The error associated with a failed PartiQL batch statement. 
     */
    Error?: BatchStatementError;
    /**
     *  The table name associated with a failed PartiQL batch statement. 
     */
    TableName?: TableName;
    /**
     *  A DynamoDB item associated with a BatchStatementResponse 
     */
    Item?: AttributeMap;
  }
  export interface BatchWriteItemInput {
    /**
     * A map of one or more table names and, for each table, a list of operations to be performed (DeleteRequest or PutRequest). Each element in the map consists of the following:    DeleteRequest - Perform a DeleteItem operation on the specified item. The item to be deleted is identified by a Key subelement:    Key - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.      PutRequest - Perform a PutItem operation on the specified item. The item to be put is identified by an Item subelement:    Item - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values are rejected with a ValidationException exception. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.    
     */
    RequestItems: BatchWriteItemRequestMap;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  }
  export interface BatchWriteItemOutput {
    /**
     * A map of tables and requests against those tables that were not processed. The UnprocessedItems value is in the same form as RequestItems, so you can provide this value directly to a subsequent BatchWriteItem operation. For more information, see RequestItems in the Request Parameters section. Each UnprocessedItems entry consists of a table name and, for that table, a list of operations to perform (DeleteRequest or PutRequest).    DeleteRequest - Perform a DeleteItem operation on the specified item. The item to be deleted is identified by a Key subelement:    Key - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value.      PutRequest - Perform a PutItem operation on the specified item. The item to be put is identified by an Item subelement:    Item - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values will be rejected with a ValidationException exception. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition.     If there are no unprocessed items remaining, the response contains an empty UnprocessedItems map.
     */
    UnprocessedItems?: BatchWriteItemRequestMap;
    /**
     * A list of tables that were processed by BatchWriteItem and, for each table, information about any item collections that were affected by individual DeleteItem or PutItem operations. Each entry consists of the following subelements:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item.    SizeEstimateRangeGB - An estimate of item collection size, expressed in GB. This is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on the table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
    /**
     * The capacity units consumed by the entire BatchWriteItem operation. Each element consists of:    TableName - The table that consumed the provisioned throughput.    CapacityUnits - The total number of capacity units consumed.  
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export type BatchWriteItemRequestMap = {[key: string]: WriteRequests};
  export type BilledSizeBytes = number;
  export type BillingMode = "PROVISIONED"|"PAY_PER_REQUEST"|string;
  export interface BillingModeSummary {
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.    PROVISIONED - Sets the read/write capacity mode to PROVISIONED. We recommend using PROVISIONED for predictable workloads.    PAY_PER_REQUEST - Sets the read/write capacity mode to PAY_PER_REQUEST. We recommend using PAY_PER_REQUEST for unpredictable workloads.   
     */
    BillingMode?: BillingMode;
    /**
     * Represents the time when PAY_PER_REQUEST was last set as the read/write capacity mode.
     */
    LastUpdateToPayPerRequestDateTime?: _Date;
  }
  export type BinaryAttributeValue = Buffer|Uint8Array|Blob|string;
  export type BinarySetAttributeValue = BinaryAttributeValue[];
  export type BooleanAttributeValue = boolean;
  export type BooleanObject = boolean;
  export interface Capacity {
    /**
     * The total number of read capacity units consumed on a table or an index.
     */
    ReadCapacityUnits?: ConsumedCapacityUnits;
    /**
     * The total number of write capacity units consumed on a table or an index.
     */
    WriteCapacityUnits?: ConsumedCapacityUnits;
    /**
     * The total number of capacity units consumed on a table or an index.
     */
    CapacityUnits?: ConsumedCapacityUnits;
  }
  export type ClientRequestToken = string;
  export type ClientToken = string;
  export type CloudWatchLogGroupArn = string;
  export type ComparisonOperator = "EQ"|"NE"|"IN"|"LE"|"LT"|"GE"|"GT"|"BETWEEN"|"NOT_NULL"|"NULL"|"CONTAINS"|"NOT_CONTAINS"|"BEGINS_WITH"|string;
  export interface Condition {
    /**
     * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the ComparisonOperator being used. For type Number, value comparisons are numeric. String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, a is greater than A, and a is greater than B. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters. For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values.
     */
    AttributeValueList?: AttributeValueList;
    /**
     * A comparator for evaluating attributes. For example, equals, greater than, less than, etc. The following comparison operators are available:  EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN  The following are descriptions of each comparison operator.    EQ : Equal. EQ is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     NE : Not equal. NE is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     LE : Less than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     LT : Less than.   AttributeValueList can contain only one AttributeValue of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GE : Greater than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GT : Greater than.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     NOT_NULL : The attribute exists. NOT_NULL is supported for all data types, including lists and maps.  This operator tests for the existence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NOT_NULL, the result is a Boolean true. This result is because the attribute "a" exists; its data type is not relevant to the NOT_NULL comparison operator.     NULL : The attribute does not exist. NULL is supported for all data types, including lists and maps.  This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NULL, the result is a Boolean false. This is because the attribute "a" exists; its data type is not relevant to the NULL comparison operator.     CONTAINS : Checks for a subsequence, or value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it finds an exact match with any member of the set. CONTAINS is supported for lists: When evaluating "a CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it does not find an exact match with any member of the set. NOT_CONTAINS is supported for lists: When evaluating "a NOT CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    BEGINS_WITH : Checks for a prefix.   AttributeValueList can contain only one AttributeValue of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).     IN : Checks for matching elements in a list.  AttributeValueList can contain one or more AttributeValue elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.    BETWEEN : Greater than or equal to the first value, and less than or equal to the second value.   AttributeValueList must contain two AttributeValue elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not compare to {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}    For usage examples of AttributeValueList and ComparisonOperator, see Legacy Conditional Parameters in the Amazon DynamoDB Developer Guide.
     */
    ComparisonOperator: ComparisonOperator;
  }
  export interface ConditionCheck {
    /**
     * The primary key of the item to be checked. Each element consists of an attribute name and a value for that attribute.
     */
    Key: Key;
    /**
     * Name of the table for the check item request.
     */
    TableName: TableName;
    /**
     * A condition that must be satisfied in order for a conditional update to succeed.
     */
    ConditionExpression: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * Use ReturnValuesOnConditionCheckFailure to get the item attributes if the ConditionCheck condition fails. For ReturnValuesOnConditionCheckFailure, the valid values are: NONE and ALL_OLD.
     */
    ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
  }
  export type ConditionExpression = string;
  export type ConditionalOperator = "AND"|"OR"|string;
  export type ConsistentRead = boolean;
  export interface ConsumedCapacity {
    /**
     * The name of the table that was affected by the operation.
     */
    TableName?: TableName;
    /**
     * The total number of capacity units consumed by the operation.
     */
    CapacityUnits?: ConsumedCapacityUnits;
    /**
     * The total number of read capacity units consumed by the operation.
     */
    ReadCapacityUnits?: ConsumedCapacityUnits;
    /**
     * The total number of write capacity units consumed by the operation.
     */
    WriteCapacityUnits?: ConsumedCapacityUnits;
    /**
     * The amount of throughput consumed on the table affected by the operation.
     */
    Table?: Capacity;
    /**
     * The amount of throughput consumed on each local index affected by the operation.
     */
    LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
    /**
     * The amount of throughput consumed on each global index affected by the operation.
     */
    GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
  }
  export type ConsumedCapacityMultiple = ConsumedCapacity[];
  export type ConsumedCapacityUnits = number;
  export interface ContinuousBackupsDescription {
    /**
     *  ContinuousBackupsStatus can be one of the following states: ENABLED, DISABLED
     */
    ContinuousBackupsStatus: ContinuousBackupsStatus;
    /**
     * The description of the point in time recovery settings applied to the table.
     */
    PointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
  }
  export type ContinuousBackupsStatus = "ENABLED"|"DISABLED"|string;
  export type ContributorInsightsAction = "ENABLE"|"DISABLE"|string;
  export type ContributorInsightsRule = string;
  export type ContributorInsightsRuleList = ContributorInsightsRule[];
  export type ContributorInsightsStatus = "ENABLING"|"ENABLED"|"DISABLING"|"DISABLED"|"FAILED"|string;
  export type ContributorInsightsSummaries = ContributorInsightsSummary[];
  export interface ContributorInsightsSummary {
    /**
     * Name of the table associated with the summary.
     */
    TableName?: TableName;
    /**
     * Name of the index associated with the summary, if any.
     */
    IndexName?: IndexName;
    /**
     * Describes the current status for contributor insights for the given table and index, if applicable.
     */
    ContributorInsightsStatus?: ContributorInsightsStatus;
  }
  export interface CreateBackupInput {
    /**
     * The name of the table.
     */
    TableName: TableName;
    /**
     * Specified name for the backup.
     */
    BackupName: BackupName;
  }
  export interface CreateBackupOutput {
    /**
     * Contains the details of the backup created for the table.
     */
    BackupDetails?: BackupDetails;
  }
  export interface CreateGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be created.
     */
    IndexName: IndexName;
    /**
     * The key schema for the global secondary index.
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     */
    Projection: Projection;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput?: ProvisionedThroughput;
  }
  export interface CreateGlobalTableInput {
    /**
     * The global table name.
     */
    GlobalTableName: TableName;
    /**
     * The Regions where the global table needs to be created.
     */
    ReplicationGroup: ReplicaList;
  }
  export interface CreateGlobalTableOutput {
    /**
     * Contains the details of the global table.
     */
    GlobalTableDescription?: GlobalTableDescription;
  }
  export interface CreateReplicaAction {
    /**
     * The Region of the replica to be added.
     */
    RegionName: RegionName;
  }
  export interface CreateReplicationGroupMemberAction {
    /**
     * The Region where the new replica will be created.
     */
    RegionName: RegionName;
    /**
     * The KMS key that should be used for KMS encryption in the new replica. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key alias/aws/dynamodb.
     */
    KMSMasterKeyId?: KMSMasterKeyId;
    /**
     * Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
    /**
     * Replica-specific global secondary index settings.
     */
    GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexList;
    /**
     * Replica-specific table class. If not specified, uses the source table's table class.
     */
    TableClassOverride?: TableClass;
  }
  export interface CreateTableInput {
    /**
     * An array of attributes that describe the key schema for the table and indexes.
     */
    AttributeDefinitions: AttributeDefinitions;
    /**
     * The name of the table to create.
     */
    TableName: TableName;
    /**
     * Specifies the attributes that make up the primary key for a table or an index. The attributes in KeySchema must also be defined in the AttributeDefinitions array. For more information, see Data Model in the Amazon DynamoDB Developer Guide. Each KeySchemaElement in the array is composed of:    AttributeName - The name of this key attribute.    KeyType - The role that the key attribute will assume:    HASH - partition key    RANGE - sort key      The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.  For a simple primary key (partition key), you must provide exactly one element with a KeyType of HASH. For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a KeyType of HASH, and the second element must have a KeyType of RANGE. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide.
     */
    KeySchema: KeySchema;
    /**
     * One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained. Each local secondary index in the array includes the following:    IndexName - The name of the local secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.    
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexList;
    /**
     * One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:    IndexName - The name of the global secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the global secondary index.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.  
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexList;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned Mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-Demand Mode.   
     */
    BillingMode?: BillingMode;
    /**
     * Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation.  If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput?: ProvisionedThroughput;
    /**
     * The settings for DynamoDB Streams on the table. These settings consist of:    StreamEnabled - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false).    StreamViewType - When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values for StreamViewType are:    KEYS_ONLY - Only the key attributes of the modified item are written to the stream.    NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream.    OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream.    NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.    
     */
    StreamSpecification?: StreamSpecification;
    /**
     * Represents the settings used to enable server-side encryption.
     */
    SSESpecification?: SSESpecification;
    /**
     * A list of key-value pairs to label the table. For more information, see Tagging for DynamoDB.
     */
    Tags?: TagList;
    /**
     * The table class of the new table. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS.
     */
    TableClass?: TableClass;
  }
  export interface CreateTableOutput {
    /**
     * Represents the properties of the table.
     */
    TableDescription?: TableDescription;
  }
  export type CsvDelimiter = string;
  export type CsvHeader = string;
  export type CsvHeaderList = CsvHeader[];
  export interface CsvOptions {
    /**
     *  The delimiter used for separating items in the CSV file being imported. 
     */
    Delimiter?: CsvDelimiter;
    /**
     *  List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header. 
     */
    HeaderList?: CsvHeaderList;
  }
  export type _Date = Date;
  export interface Delete {
    /**
     * The primary key of the item to be deleted. Each element consists of an attribute name and a value for that attribute.
     */
    Key: Key;
    /**
     * Name of the table in which the item to be deleted resides.
     */
    TableName: TableName;
    /**
     * A condition that must be satisfied in order for a conditional delete to succeed.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * Use ReturnValuesOnConditionCheckFailure to get the item attributes if the Delete condition fails. For ReturnValuesOnConditionCheckFailure, the valid values are: NONE and ALL_OLD.
     */
    ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
  }
  export interface DeleteBackupInput {
    /**
     * The ARN associated with the backup.
     */
    BackupArn: BackupArn;
  }
  export interface DeleteBackupOutput {
    /**
     * Contains the description of the backup created for the table.
     */
    BackupDescription?: BackupDescription;
  }
  export interface DeleteGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be deleted.
     */
    IndexName: IndexName;
  }
  export interface DeleteItemInput {
    /**
     * The name of the table from which to delete the item.
     */
    TableName: TableName;
    /**
     * A map of attribute names to AttributeValue objects, representing the primary key of the item to delete. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were deleted. For DeleteItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - The content of the old item is returned.   There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.  The ReturnValues parameter is used by several DynamoDB operations; however, DeleteItem does not recognize any values other than NONE or ALL_OLD. 
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * A condition that must be satisfied in order for a conditional DeleteItem to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information about condition expressions, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface DeleteItemOutput {
    /**
     * A map of attribute names to AttributeValue objects, representing the item as it appeared before the DeleteItem operation. This map appears in the response only if ReturnValues was specified as ALL_OLD in the request.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the DeleteItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Mode in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the DeleteItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRangeGB - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface DeleteReplicaAction {
    /**
     * The Region of the replica to be removed.
     */
    RegionName: RegionName;
  }
  export interface DeleteReplicationGroupMemberAction {
    /**
     * The Region where the replica exists.
     */
    RegionName: RegionName;
  }
  export interface DeleteRequest {
    /**
     * A map of attribute name to attribute values, representing the primary key of the item to delete. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema.
     */
    Key: Key;
  }
  export interface DeleteTableInput {
    /**
     * The name of the table to delete.
     */
    TableName: TableName;
  }
  export interface DeleteTableOutput {
    /**
     * Represents the properties of a table.
     */
    TableDescription?: TableDescription;
  }
  export interface DescribeBackupInput {
    /**
     * The Amazon Resource Name (ARN) associated with the backup.
     */
    BackupArn: BackupArn;
  }
  export interface DescribeBackupOutput {
    /**
     * Contains the description of the backup created for the table.
     */
    BackupDescription?: BackupDescription;
  }
  export interface DescribeContinuousBackupsInput {
    /**
     * Name of the table for which the customer wants to check the continuous backups and point in time recovery settings.
     */
    TableName: TableName;
  }
  export interface DescribeContinuousBackupsOutput {
    /**
     * Represents the continuous backups and point in time recovery settings on the table.
     */
    ContinuousBackupsDescription?: ContinuousBackupsDescription;
  }
  export interface DescribeContributorInsightsInput {
    /**
     * The name of the table to describe.
     */
    TableName: TableName;
    /**
     * The name of the global secondary index to describe, if applicable.
     */
    IndexName?: IndexName;
  }
  export interface DescribeContributorInsightsOutput {
    /**
     * The name of the table being described.
     */
    TableName?: TableName;
    /**
     * The name of the global secondary index being described.
     */
    IndexName?: IndexName;
    /**
     * List of names of the associated contributor insights rules.
     */
    ContributorInsightsRuleList?: ContributorInsightsRuleList;
    /**
     * Current status of contributor insights.
     */
    ContributorInsightsStatus?: ContributorInsightsStatus;
    /**
     * Timestamp of the last time the status was changed.
     */
    LastUpdateDateTime?: LastUpdateDateTime;
    /**
     * Returns information about the last failure that was encountered. The most common exceptions for a FAILED status are:   LimitExceededException - Per-account Amazon CloudWatch Contributor Insights rule limit reached. Please disable Contributor Insights for other tables/indexes OR disable Contributor Insights rules before retrying.   AccessDeniedException - Amazon CloudWatch Contributor Insights rules cannot be modified due to insufficient permissions.   AccessDeniedException - Failed to create service-linked role for Contributor Insights due to insufficient permissions.   InternalServerError - Failed to create Amazon CloudWatch Contributor Insights rules. Please retry request.  
     */
    FailureException?: FailureException;
  }
  export interface DescribeEndpointsRequest {
  }
  export interface DescribeEndpointsResponse {
    /**
     * List of endpoints.
     */
    Endpoints: Endpoints;
  }
  export interface DescribeExportInput {
    /**
     * The Amazon Resource Name (ARN) associated with the export.
     */
    ExportArn: ExportArn;
  }
  export interface DescribeExportOutput {
    /**
     * Represents the properties of the export.
     */
    ExportDescription?: ExportDescription;
  }
  export interface DescribeGlobalTableInput {
    /**
     * The name of the global table.
     */
    GlobalTableName: TableName;
  }
  export interface DescribeGlobalTableOutput {
    /**
     * Contains the details of the global table.
     */
    GlobalTableDescription?: GlobalTableDescription;
  }
  export interface DescribeGlobalTableSettingsInput {
    /**
     * The name of the global table to describe.
     */
    GlobalTableName: TableName;
  }
  export interface DescribeGlobalTableSettingsOutput {
    /**
     * The name of the global table.
     */
    GlobalTableName?: TableName;
    /**
     * The Region-specific settings for the global table.
     */
    ReplicaSettings?: ReplicaSettingsDescriptionList;
  }
  export interface DescribeImportInput {
    /**
     *  The Amazon Resource Name (ARN) associated with the table you're importing to. 
     */
    ImportArn: ImportArn;
  }
  export interface DescribeImportOutput {
    /**
     *  Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered. 
     */
    ImportTableDescription: ImportTableDescription;
  }
  export interface DescribeKinesisStreamingDestinationInput {
    /**
     * The name of the table being described.
     */
    TableName: TableName;
  }
  export interface DescribeKinesisStreamingDestinationOutput {
    /**
     * The name of the table being described.
     */
    TableName?: TableName;
    /**
     * The list of replica structures for the table being described.
     */
    KinesisDataStreamDestinations?: KinesisDataStreamDestinations;
  }
  export interface DescribeLimitsInput {
  }
  export interface DescribeLimitsOutput {
    /**
     * The maximum total read capacity units that your account allows you to provision across all of your tables in this Region.
     */
    AccountMaxReadCapacityUnits?: PositiveLongObject;
    /**
     * The maximum total write capacity units that your account allows you to provision across all of your tables in this Region.
     */
    AccountMaxWriteCapacityUnits?: PositiveLongObject;
    /**
     * The maximum read capacity units that your account allows you to provision for a new table that you are creating in this Region, including the read capacity units provisioned for its global secondary indexes (GSIs).
     */
    TableMaxReadCapacityUnits?: PositiveLongObject;
    /**
     * The maximum write capacity units that your account allows you to provision for a new table that you are creating in this Region, including the write capacity units provisioned for its global secondary indexes (GSIs).
     */
    TableMaxWriteCapacityUnits?: PositiveLongObject;
  }
  export interface DescribeTableInput {
    /**
     * The name of the table to describe.
     */
    TableName: TableName;
  }
  export interface DescribeTableOutput {
    /**
     * The properties of the table.
     */
    Table?: TableDescription;
  }
  export interface DescribeTableReplicaAutoScalingInput {
    /**
     * The name of the table.
     */
    TableName: TableName;
  }
  export interface DescribeTableReplicaAutoScalingOutput {
    /**
     * Represents the auto scaling properties of the table.
     */
    TableAutoScalingDescription?: TableAutoScalingDescription;
  }
  export interface DescribeTimeToLiveInput {
    /**
     * The name of the table to be described.
     */
    TableName: TableName;
  }
  export interface DescribeTimeToLiveOutput {
    /**
     * 
     */
    TimeToLiveDescription?: TimeToLiveDescription;
  }
  export type DestinationStatus = "ENABLING"|"ACTIVE"|"DISABLING"|"DISABLED"|"ENABLE_FAILED"|string;
  export type Double = number;
  export interface Endpoint {
    /**
     * IP address of the endpoint.
     */
    Address: String;
    /**
     * Endpoint cache time to live (TTL) value.
     */
    CachePeriodInMinutes: Long;
  }
  export type Endpoints = Endpoint[];
  export type ErrorCount = number;
  export type ExceptionDescription = string;
  export type ExceptionName = string;
  export interface ExecuteStatementInput {
    /**
     * The PartiQL statement representing the operation to run.
     */
    Statement: PartiQLStatement;
    /**
     * The parameters for the PartiQL statement, if any.
     */
    Parameters?: PreparedStatementParameters;
    /**
     * The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
     */
    ConsistentRead?: ConsistentRead;
    /**
     * Set this value to get remaining results, if NextToken was returned in the statement response.
     */
    NextToken?: PartiQLNextToken;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, along with a key in LastEvaluatedKey to apply in a subsequent operation so you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. 
     */
    Limit?: PositiveIntegerObject;
  }
  export interface ExecuteStatementOutput {
    /**
     * If a read operation was used, this property will contain the result of the read operation; a map of attribute names and their values. For the write operations this value will be empty.
     */
    Items?: ItemList;
    /**
     * If the response of a read request exceeds the response payload limit DynamoDB will set this value in the response. If set, you can use that this value in the subsequent request to get the remaining results.
     */
    NextToken?: PartiQLNextToken;
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedKey is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedKey is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedKey is empty. 
     */
    LastEvaluatedKey?: Key;
  }
  export interface ExecuteTransactionInput {
    /**
     * The list of PartiQL statements representing the transaction to run.
     */
    TransactStatements: ParameterizedStatements;
    /**
     * Set this value to get remaining results, if NextToken was returned in the statement response.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response. For more information, see TransactGetItems and TransactWriteItems.
     */
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
  }
  export interface ExecuteTransactionOutput {
    /**
     * The response to a PartiQL transaction.
     */
    Responses?: ItemResponseList;
    /**
     * The capacity units consumed by the entire operation. The values of the list are ordered according to the ordering of the statements.
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
  }
  export type ExpectedAttributeMap = {[key: string]: ExpectedAttributeValue};
  export interface ExpectedAttributeValue {
    /**
     * Represents the data for the expected attribute. Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself. For more information, see Data Types in the Amazon DynamoDB Developer Guide.
     */
    Value?: AttributeValue;
    /**
     * Causes DynamoDB to evaluate the value before attempting a conditional operation:   If Exists is true, DynamoDB will check to see if that attribute value already exists in the table. If it is found, then the operation succeeds. If it is not found, the operation fails with a ConditionCheckFailedException.   If Exists is false, DynamoDB assumes that the attribute value does not exist in the table. If in fact the value does not exist, then the assumption is valid and the operation succeeds. If the value is found, despite the assumption that it does not exist, the operation fails with a ConditionCheckFailedException.   The default setting for Exists is true. If you supply a Value all by itself, DynamoDB assumes the attribute exists: You don't have to set Exists to true, because it is implied. DynamoDB returns a ValidationException if:    Exists is true but there is no Value to check. (You expect a value to exist, but don't specify what that value is.)    Exists is false but you also provide a Value. (You cannot expect an attribute to have a value, while also expecting it not to exist.)  
     */
    Exists?: BooleanObject;
    /**
     * A comparator for evaluating attributes in the AttributeValueList. For example, equals, greater than, less than, etc. The following comparison operators are available:  EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH | IN | BETWEEN  The following are descriptions of each comparison operator.    EQ : Equal. EQ is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue element of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     NE : Not equal. NE is supported for all data types, including lists and maps.  AttributeValueList can contain only one AttributeValue of type String, Number, Binary, String Set, Number Set, or Binary Set. If an item contains an AttributeValue of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not equal {"NS":["6", "2", "1"]}.     LE : Less than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     LT : Less than.   AttributeValueList can contain only one AttributeValue of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GE : Greater than or equal.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     GT : Greater than.   AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not equal {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}.     NOT_NULL : The attribute exists. NOT_NULL is supported for all data types, including lists and maps.  This operator tests for the existence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NOT_NULL, the result is a Boolean true. This result is because the attribute "a" exists; its data type is not relevant to the NOT_NULL comparison operator.     NULL : The attribute does not exist. NULL is supported for all data types, including lists and maps.  This operator tests for the nonexistence of an attribute, not its data type. If the data type of attribute "a" is null, and you evaluate it using NULL, the result is a Boolean false. This is because the attribute "a" exists; its data type is not relevant to the NULL comparison operator.     CONTAINS : Checks for a subsequence, or value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is of type String, then the operator checks for a substring match. If the target attribute of the comparison is of type Binary, then the operator looks for a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it finds an exact match with any member of the set. CONTAINS is supported for lists: When evaluating "a CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in a set.  AttributeValueList can contain only one AttributeValue element of type String, Number, or Binary (not a set type). If the target attribute of the comparison is a String, then the operator checks for the absence of a substring match. If the target attribute of the comparison is Binary, then the operator checks for the absence of a subsequence of the target that matches the input. If the target attribute of the comparison is a set ("SS", "NS", or "BS"), then the operator evaluates to true if it does not find an exact match with any member of the set. NOT_CONTAINS is supported for lists: When evaluating "a NOT CONTAINS b", "a" can be a list; however, "b" cannot be a set, a map, or a list.    BEGINS_WITH : Checks for a prefix.   AttributeValueList can contain only one AttributeValue of type String or Binary (not a Number or a set type). The target attribute of the comparison must be of type String or Binary (not a Number or a set type).     IN : Checks for matching elements in a list.  AttributeValueList can contain one or more AttributeValue elements of type String, Number, or Binary. These attributes are compared against an existing attribute of an item. If any elements of the input are equal to the item attribute, the expression evaluates to true.    BETWEEN : Greater than or equal to the first value, and less than or equal to the second value.   AttributeValueList must contain two AttributeValue elements of the same type, either String, Number, or Binary (not a set type). A target attribute matches if the target value is greater than, or equal to, the first element and less than, or equal to, the second element. If an item contains an AttributeValue element of a different type than the one provided in the request, the value does not match. For example, {"S":"6"} does not compare to {"N":"6"}. Also, {"N":"6"} does not compare to {"NS":["6", "2", "1"]}   
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * One or more values to evaluate against the supplied attribute. The number of values in the list depends on the ComparisonOperator being used. For type Number, value comparisons are numeric. String value comparisons for greater than, equals, or less than are based on ASCII character code values. For example, a is greater than A, and a is greater than B. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters. For Binary, DynamoDB treats each byte of the binary data as unsigned when it compares binary values. For information on specifying data types in JSON, see JSON Data Format in the Amazon DynamoDB Developer Guide.
     */
    AttributeValueList?: AttributeValueList;
  }
  export type ExportArn = string;
  export interface ExportDescription {
    /**
     * The Amazon Resource Name (ARN) of the table export.
     */
    ExportArn?: ExportArn;
    /**
     * Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.
     */
    ExportStatus?: ExportStatus;
    /**
     * The time at which the export task began.
     */
    StartTime?: ExportStartTime;
    /**
     * The time at which the export task completed.
     */
    EndTime?: ExportEndTime;
    /**
     * The name of the manifest file for the export task.
     */
    ExportManifest?: ExportManifest;
    /**
     * The Amazon Resource Name (ARN) of the table that was exported.
     */
    TableArn?: TableArn;
    /**
     * Unique ID of the table that was exported.
     */
    TableId?: TableId;
    /**
     * Point in time from which table data was exported.
     */
    ExportTime?: ExportTime;
    /**
     * The client token that was provided for the export task. A client token makes calls to ExportTableToPointInTimeInput idempotent, meaning that multiple identical calls have the same effect as one single call.
     */
    ClientToken?: ClientToken;
    /**
     * The name of the Amazon S3 bucket containing the export.
     */
    S3Bucket?: S3Bucket;
    /**
     * The ID of the Amazon Web Services account that owns the bucket containing the export.
     */
    S3BucketOwner?: S3BucketOwner;
    /**
     * The Amazon S3 bucket prefix used as the file name and path of the exported snapshot.
     */
    S3Prefix?: S3Prefix;
    /**
     * Type of encryption used on the bucket where export data is stored. Valid values for S3SseAlgorithm are:    AES256 - server-side encryption with Amazon S3 managed keys    KMS - server-side encryption with KMS managed keys  
     */
    S3SseAlgorithm?: S3SseAlgorithm;
    /**
     * The ID of the KMS managed key used to encrypt the S3 bucket where export data is stored (if applicable).
     */
    S3SseKmsKeyId?: S3SseKmsKeyId;
    /**
     * Status code for the result of the failed export.
     */
    FailureCode?: FailureCode;
    /**
     * Export failure reason description.
     */
    FailureMessage?: FailureMessage;
    /**
     * The format of the exported data. Valid values for ExportFormat are DYNAMODB_JSON or ION.
     */
    ExportFormat?: ExportFormat;
    /**
     * The billable size of the table export.
     */
    BilledSizeBytes?: BilledSizeBytes;
    /**
     * The number of items exported.
     */
    ItemCount?: ItemCount;
  }
  export type ExportEndTime = Date;
  export type ExportFormat = "DYNAMODB_JSON"|"ION"|string;
  export type ExportManifest = string;
  export type ExportNextToken = string;
  export type ExportStartTime = Date;
  export type ExportStatus = "IN_PROGRESS"|"COMPLETED"|"FAILED"|string;
  export type ExportSummaries = ExportSummary[];
  export interface ExportSummary {
    /**
     * The Amazon Resource Name (ARN) of the export.
     */
    ExportArn?: ExportArn;
    /**
     * Export can be in one of the following states: IN_PROGRESS, COMPLETED, or FAILED.
     */
    ExportStatus?: ExportStatus;
  }
  export interface ExportTableToPointInTimeInput {
    /**
     * The Amazon Resource Name (ARN) associated with the table to export.
     */
    TableArn: TableArn;
    /**
     * Time in the past from which to export table data, counted in seconds from the start of the Unix epoch. The table export will be a snapshot of the table's state at this point in time.
     */
    ExportTime?: ExportTime;
    /**
     * Providing a ClientToken makes the call to ExportTableToPointInTimeInput idempotent, meaning that multiple identical calls have the same effect as one single call. A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an ImportConflictException.
     */
    ClientToken?: ClientToken;
    /**
     * The name of the Amazon S3 bucket to export the snapshot to.
     */
    S3Bucket: S3Bucket;
    /**
     * The ID of the Amazon Web Services account that owns the bucket the export will be stored in.
     */
    S3BucketOwner?: S3BucketOwner;
    /**
     * The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
     */
    S3Prefix?: S3Prefix;
    /**
     * Type of encryption used on the bucket where export data will be stored. Valid values for S3SseAlgorithm are:    AES256 - server-side encryption with Amazon S3 managed keys    KMS - server-side encryption with KMS managed keys  
     */
    S3SseAlgorithm?: S3SseAlgorithm;
    /**
     * The ID of the KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).
     */
    S3SseKmsKeyId?: S3SseKmsKeyId;
    /**
     * The format for the exported data. Valid values for ExportFormat are DYNAMODB_JSON or ION.
     */
    ExportFormat?: ExportFormat;
  }
  export interface ExportTableToPointInTimeOutput {
    /**
     * Contains a description of the table export.
     */
    ExportDescription?: ExportDescription;
  }
  export type ExportTime = Date;
  export type ExpressionAttributeNameMap = {[key: string]: AttributeName};
  export type ExpressionAttributeNameVariable = string;
  export type ExpressionAttributeValueMap = {[key: string]: AttributeValue};
  export type ExpressionAttributeValueVariable = string;
  export type FailureCode = string;
  export interface FailureException {
    /**
     * Exception name.
     */
    ExceptionName?: ExceptionName;
    /**
     * Description of the failure.
     */
    ExceptionDescription?: ExceptionDescription;
  }
  export type FailureMessage = string;
  export type FilterConditionMap = {[key: string]: Condition};
  export interface Get {
    /**
     * A map of attribute names to AttributeValue objects that specifies the primary key of the item to retrieve.
     */
    Key: Key;
    /**
     * The name of the table from which to retrieve the specified item.
     */
    TableName: TableName;
    /**
     * A string that identifies one or more attributes of the specified item to retrieve from the table. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes of the specified item are returned. If any of the requested attributes are not found, they do not appear in the result.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * One or more substitution tokens for attribute names in the ProjectionExpression parameter.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
  }
  export interface GetItemInput {
    /**
     * The name of the table containing the requested item.
     */
    TableName: TableName;
    /**
     * A map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads.
     */
    ConsistentRead?: ConsistentRead;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result. For more information, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
  }
  export interface GetItemOutput {
    /**
     * A map of attribute names to AttributeValue objects, as specified by ProjectionExpression.
     */
    Item?: AttributeMap;
    /**
     * The capacity units consumed by the GetItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Read/Write Capacity Mode in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export interface GlobalSecondaryIndex {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection: Projection;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput?: ProvisionedThroughput;
  }
  export interface GlobalSecondaryIndexAutoScalingUpdate {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
  }
  export type GlobalSecondaryIndexAutoScalingUpdateList = GlobalSecondaryIndexAutoScalingUpdate[];
  export interface GlobalSecondaryIndexDescription {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
    /**
     * The current state of the global secondary index:    CREATING - The index is being created.    UPDATING - The index is being updated.    DELETING - The index is being deleted.    ACTIVE - The index is ready for use.  
     */
    IndexStatus?: IndexStatus;
    /**
     * Indicates whether the index is currently backfilling. Backfilling is the process of reading items from the table and determining whether they can be added to the index. (Not all items will qualify: For example, a partition key cannot have any duplicate values.) If an item can be added to the index, DynamoDB will do so. After all items have been processed, the backfilling operation is complete and Backfilling is false. You can delete an index that is being created during the Backfilling phase when IndexStatus is set to CREATING and Backfilling is true. You can't delete the index that is being created when IndexStatus is set to CREATING and Backfilling is false.   For indexes that were created during a CreateTable operation, the Backfilling attribute does not appear in the DescribeTable output. 
     */
    Backfilling?: Backfilling;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput?: ProvisionedThroughputDescription;
    /**
     * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    IndexSizeBytes?: Long;
    /**
     * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the index.
     */
    IndexArn?: String;
  }
  export type GlobalSecondaryIndexDescriptionList = GlobalSecondaryIndexDescription[];
  export interface GlobalSecondaryIndexInfo {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. 
     */
    ProvisionedThroughput?: ProvisionedThroughput;
  }
  export type GlobalSecondaryIndexList = GlobalSecondaryIndex[];
  export interface GlobalSecondaryIndexUpdate {
    /**
     * The name of an existing global secondary index, along with new provisioned throughput settings to be applied to that index.
     */
    Update?: UpdateGlobalSecondaryIndexAction;
    /**
     * The parameters required for creating a global secondary index on an existing table:    IndexName      KeySchema      AttributeDefinitions      Projection      ProvisionedThroughput    
     */
    Create?: CreateGlobalSecondaryIndexAction;
    /**
     * The name of an existing global secondary index to be removed.
     */
    Delete?: DeleteGlobalSecondaryIndexAction;
  }
  export type GlobalSecondaryIndexUpdateList = GlobalSecondaryIndexUpdate[];
  export type GlobalSecondaryIndexes = GlobalSecondaryIndexInfo[];
  export interface GlobalTable {
    /**
     * The global table name.
     */
    GlobalTableName?: TableName;
    /**
     * The Regions where the global table has replicas.
     */
    ReplicationGroup?: ReplicaList;
  }
  export type GlobalTableArnString = string;
  export interface GlobalTableDescription {
    /**
     * The Regions where the global table has replicas.
     */
    ReplicationGroup?: ReplicaDescriptionList;
    /**
     * The unique identifier of the global table.
     */
    GlobalTableArn?: GlobalTableArnString;
    /**
     * The creation time of the global table.
     */
    CreationDateTime?: _Date;
    /**
     * The current state of the global table:    CREATING - The global table is being created.    UPDATING - The global table is being updated.    DELETING - The global table is being deleted.    ACTIVE - The global table is ready for use.  
     */
    GlobalTableStatus?: GlobalTableStatus;
    /**
     * The global table name.
     */
    GlobalTableName?: TableName;
  }
  export interface GlobalTableGlobalSecondaryIndexSettingsUpdate {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException. 
     */
    ProvisionedWriteCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for managing a global secondary index's write capacity units.
     */
    ProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
  }
  export type GlobalTableGlobalSecondaryIndexSettingsUpdateList = GlobalTableGlobalSecondaryIndexSettingsUpdate[];
  export type GlobalTableList = GlobalTable[];
  export type GlobalTableStatus = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|string;
  export type ImportArn = string;
  export type ImportEndTime = Date;
  export type ImportNextToken = string;
  export type ImportStartTime = Date;
  export type ImportStatus = "IN_PROGRESS"|"COMPLETED"|"CANCELLING"|"CANCELLED"|"FAILED"|string;
  export interface ImportSummary {
    /**
     *  The Amazon Resource Number (ARN) corresponding to the import request. 
     */
    ImportArn?: ImportArn;
    /**
     *  The status of the import operation. 
     */
    ImportStatus?: ImportStatus;
    /**
     *  The Amazon Resource Number (ARN) of the table being imported into. 
     */
    TableArn?: TableArn;
    /**
     *  The path and S3 bucket of the source file that is being imported. This includes the S3Bucket (required), S3KeyPrefix (optional) and S3BucketOwner (optional if the bucket is owned by the requester). 
     */
    S3BucketSource?: S3BucketSource;
    /**
     *  The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with this import task. 
     */
    CloudWatchLogGroupArn?: CloudWatchLogGroupArn;
    /**
     *  The format of the source data. Valid values are CSV, DYNAMODB_JSON or ION.
     */
    InputFormat?: InputFormat;
    /**
     *  The time at which this import task began. 
     */
    StartTime?: ImportStartTime;
    /**
     *  The time at which this import task ended. (Does this include the successful complete creation of the table it was imported to?) 
     */
    EndTime?: ImportEndTime;
  }
  export type ImportSummaryList = ImportSummary[];
  export interface ImportTableDescription {
    /**
     *  The Amazon Resource Number (ARN) corresponding to the import request. 
     */
    ImportArn?: ImportArn;
    /**
     *  The status of the import. 
     */
    ImportStatus?: ImportStatus;
    /**
     *  The Amazon Resource Number (ARN) of the table being imported into. 
     */
    TableArn?: TableArn;
    /**
     *  The table id corresponding to the table created by import table process. 
     */
    TableId?: TableId;
    /**
     *  The client token that was provided for the import task. Reusing the client token on retry makes a call to ImportTable idempotent. 
     */
    ClientToken?: ClientToken;
    /**
     *  Values for the S3 bucket the source file is imported from. Includes bucket name (required), key prefix (optional) and bucket account owner ID (optional). 
     */
    S3BucketSource?: S3BucketSource;
    /**
     *  The number of errors occurred on importing the source file into the target table. 
     */
    ErrorCount?: ErrorCount;
    /**
     *  The Amazon Resource Number (ARN) of the Cloudwatch Log Group associated with the target table. 
     */
    CloudWatchLogGroupArn?: CloudWatchLogGroupArn;
    /**
     *  The format of the source data going into the target table. 
     */
    InputFormat?: InputFormat;
    /**
     *  The format options for the data that was imported into the target table. There is one value, CsvOption. 
     */
    InputFormatOptions?: InputFormatOptions;
    /**
     *  The compression options for the data that has been imported into the target table. The values are NONE, GZIP, or ZSTD. 
     */
    InputCompressionType?: InputCompressionType;
    /**
     *  The parameters for the new table that is being imported into. 
     */
    TableCreationParameters?: TableCreationParameters;
    /**
     *  The time when this import task started. 
     */
    StartTime?: ImportStartTime;
    /**
     *  The time at which the creation of the table associated with this import task completed. 
     */
    EndTime?: ImportEndTime;
    /**
     *  The total size of data processed from the source file, in Bytes. 
     */
    ProcessedSizeBytes?: Long;
    /**
     *  The total number of items processed from the source file. 
     */
    ProcessedItemCount?: ProcessedItemCount;
    /**
     *  The number of items successfully imported into the new table. 
     */
    ImportedItemCount?: ImportedItemCount;
    /**
     *  The error code corresponding to the failure that the import job ran into during execution. 
     */
    FailureCode?: FailureCode;
    /**
     *  The error message corresponding to the failure that the import job ran into during execution. 
     */
    FailureMessage?: FailureMessage;
  }
  export interface ImportTableInput {
    /**
     * Providing a ClientToken makes the call to ImportTableInput idempotent, meaning that multiple identical calls have the same effect as one single call. A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an IdempotentParameterMismatch exception.
     */
    ClientToken?: ClientToken;
    /**
     *  The S3 bucket that provides the source for the import. 
     */
    S3BucketSource: S3BucketSource;
    /**
     *  The format of the source data. Valid values for ImportFormat are CSV, DYNAMODB_JSON or ION. 
     */
    InputFormat: InputFormat;
    /**
     *  Additional properties that specify how the input is formatted, 
     */
    InputFormatOptions?: InputFormatOptions;
    /**
     *  Type of compression to be used on the input coming from the imported table. 
     */
    InputCompressionType?: InputCompressionType;
    /**
     * Parameters for the table to import the data into. 
     */
    TableCreationParameters: TableCreationParameters;
  }
  export interface ImportTableOutput {
    /**
     *  Represents the properties of the table created for the import, and parameters of the import. The import parameters include import status, how many items were processed, and how many errors were encountered. 
     */
    ImportTableDescription: ImportTableDescription;
  }
  export type ImportedItemCount = number;
  export type IndexName = string;
  export type IndexStatus = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|string;
  export type InputCompressionType = "GZIP"|"ZSTD"|"NONE"|string;
  export type InputFormat = "DYNAMODB_JSON"|"ION"|"CSV"|string;
  export interface InputFormatOptions {
    /**
     *  The options for imported source files in CSV format. The values are Delimiter and HeaderList. 
     */
    Csv?: CsvOptions;
  }
  export type Integer = number;
  export type IntegerObject = number;
  export type ItemCollectionKeyAttributeMap = {[key: string]: AttributeValue};
  export interface ItemCollectionMetrics {
    /**
     * The partition key value of the item collection. This value is the same as the partition key value of the item.
     */
    ItemCollectionKey?: ItemCollectionKeyAttributeMap;
    /**
     * An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.
     */
    SizeEstimateRangeGB?: ItemCollectionSizeEstimateRange;
  }
  export type ItemCollectionMetricsMultiple = ItemCollectionMetrics[];
  export type ItemCollectionMetricsPerTable = {[key: string]: ItemCollectionMetricsMultiple};
  export type ItemCollectionSizeEstimateBound = number;
  export type ItemCollectionSizeEstimateRange = ItemCollectionSizeEstimateBound[];
  export type ItemCount = number;
  export type ItemList = AttributeMap[];
  export interface ItemResponse {
    /**
     * Map of attribute data consisting of the data type and attribute value.
     */
    Item?: AttributeMap;
  }
  export type ItemResponseList = ItemResponse[];
  export type KMSMasterKeyArn = string;
  export type KMSMasterKeyId = string;
  export type Key = {[key: string]: AttributeValue};
  export type KeyConditions = {[key: string]: Condition};
  export type KeyExpression = string;
  export type KeyList = Key[];
  export type KeySchema = KeySchemaElement[];
  export type KeySchemaAttributeName = string;
  export interface KeySchemaElement {
    /**
     * The name of a key attribute.
     */
    AttributeName: KeySchemaAttributeName;
    /**
     * The role that this key attribute will assume:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeyType: KeyType;
  }
  export type KeyType = "HASH"|"RANGE"|string;
  export interface KeysAndAttributes {
    /**
     * The primary key attribute values that define the items and the attributes associated with the items.
     */
    Keys: KeyList;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see Legacy Conditional Parameters in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used.
     */
    ConsistentRead?: ConsistentRead;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the ProjectionExpression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
  }
  export interface KinesisDataStreamDestination {
    /**
     * The ARN for a specific Kinesis data stream.
     */
    StreamArn?: StreamArn;
    /**
     * The current status of replication.
     */
    DestinationStatus?: DestinationStatus;
    /**
     * The human-readable string that corresponds to the replica status.
     */
    DestinationStatusDescription?: String;
  }
  export type KinesisDataStreamDestinations = KinesisDataStreamDestination[];
  export interface KinesisStreamingDestinationInput {
    /**
     * The name of the DynamoDB table.
     */
    TableName: TableName;
    /**
     * The ARN for a Kinesis data stream.
     */
    StreamArn: StreamArn;
  }
  export interface KinesisStreamingDestinationOutput {
    /**
     * The name of the table being modified.
     */
    TableName?: TableName;
    /**
     * The ARN for the specific Kinesis data stream.
     */
    StreamArn?: StreamArn;
    /**
     * The current status of the replication.
     */
    DestinationStatus?: DestinationStatus;
  }
  export type LastUpdateDateTime = Date;
  export type ListAttributeValue = AttributeValue[];
  export interface ListBackupsInput {
    /**
     * The backups from the table specified by TableName are listed. 
     */
    TableName?: TableName;
    /**
     * Maximum number of backups to return at once.
     */
    Limit?: BackupsInputLimit;
    /**
     * Only backups created after this time are listed. TimeRangeLowerBound is inclusive.
     */
    TimeRangeLowerBound?: TimeRangeLowerBound;
    /**
     * Only backups created before this time are listed. TimeRangeUpperBound is exclusive. 
     */
    TimeRangeUpperBound?: TimeRangeUpperBound;
    /**
     *  LastEvaluatedBackupArn is the Amazon Resource Name (ARN) of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the ExclusiveStartBackupArn of a new ListBackups operation in order to fetch the next page of results. 
     */
    ExclusiveStartBackupArn?: BackupArn;
    /**
     * The backups from the table specified by BackupType are listed. Where BackupType can be:    USER - On-demand backup created by you. (The default setting if no other backup types are specified.)    SYSTEM - On-demand backup automatically created by DynamoDB.    ALL - All types of on-demand backups (USER and SYSTEM).  
     */
    BackupType?: BackupTypeFilter;
  }
  export interface ListBackupsOutput {
    /**
     * List of BackupSummary objects.
     */
    BackupSummaries?: BackupSummaries;
    /**
     *  The ARN of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the ExclusiveStartBackupArn of a new ListBackups operation in order to fetch the next page of results.   If LastEvaluatedBackupArn is empty, then the last page of results has been processed and there are no more results to be retrieved.   If LastEvaluatedBackupArn is not empty, this may or may not indicate that there is more data to be returned. All results are guaranteed to have been returned if and only if no value for LastEvaluatedBackupArn is returned. 
     */
    LastEvaluatedBackupArn?: BackupArn;
  }
  export interface ListContributorInsightsInput {
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * A token to for the desired page, if there is one.
     */
    NextToken?: NextTokenString;
    /**
     * Maximum number of results to return per page.
     */
    MaxResults?: ListContributorInsightsLimit;
  }
  export type ListContributorInsightsLimit = number;
  export interface ListContributorInsightsOutput {
    /**
     * A list of ContributorInsightsSummary.
     */
    ContributorInsightsSummaries?: ContributorInsightsSummaries;
    /**
     * A token to go to the next page if there is one.
     */
    NextToken?: NextTokenString;
  }
  export interface ListExportsInput {
    /**
     * The Amazon Resource Name (ARN) associated with the exported table.
     */
    TableArn?: TableArn;
    /**
     * Maximum number of results to return per page.
     */
    MaxResults?: ListExportsMaxLimit;
    /**
     * An optional string that, if supplied, must be copied from the output of a previous call to ListExports. When provided in this manner, the API fetches the next page of results.
     */
    NextToken?: ExportNextToken;
  }
  export type ListExportsMaxLimit = number;
  export interface ListExportsOutput {
    /**
     * A list of ExportSummary objects.
     */
    ExportSummaries?: ExportSummaries;
    /**
     * If this value is returned, there are additional results to be displayed. To retrieve them, call ListExports again, with NextToken set to this value.
     */
    NextToken?: ExportNextToken;
  }
  export interface ListGlobalTablesInput {
    /**
     * The first global table name that this operation will evaluate.
     */
    ExclusiveStartGlobalTableName?: TableName;
    /**
     * The maximum number of table names to return, if the parameter is not specified DynamoDB defaults to 100. If the number of global tables DynamoDB finds reaches this limit, it stops the operation and returns the table names collected up to that point, with a table name in the LastEvaluatedGlobalTableName to apply in a subsequent operation to the ExclusiveStartGlobalTableName parameter.
     */
    Limit?: PositiveIntegerObject;
    /**
     * Lists the global tables in a specific Region.
     */
    RegionName?: RegionName;
  }
  export interface ListGlobalTablesOutput {
    /**
     * List of global table names.
     */
    GlobalTables?: GlobalTableList;
    /**
     * Last evaluated global table name.
     */
    LastEvaluatedGlobalTableName?: TableName;
  }
  export interface ListImportsInput {
    /**
     *  The Amazon Resource Name (ARN) associated with the table that was imported to. 
     */
    TableArn?: TableArn;
    /**
     *  The number of ImportSummary objects returned in a single page. 
     */
    PageSize?: ListImportsMaxLimit;
    /**
     *  An optional string that, if supplied, must be copied from the output of a previous call to ListImports. When provided in this manner, the API fetches the next page of results. 
     */
    NextToken?: ImportNextToken;
  }
  export type ListImportsMaxLimit = number;
  export interface ListImportsOutput {
    /**
     *  A list of ImportSummary objects. 
     */
    ImportSummaryList?: ImportSummaryList;
    /**
     *  If this value is returned, there are additional results to be displayed. To retrieve them, call ListImports again, with NextToken set to this value. 
     */
    NextToken?: ImportNextToken;
  }
  export interface ListTablesInput {
    /**
     * The first table name that this operation will evaluate. Use the value that was returned for LastEvaluatedTableName in a previous operation, so that you can obtain the next page of results.
     */
    ExclusiveStartTableName?: TableName;
    /**
     * A maximum number of table names to return. If this parameter is not specified, the limit is 100.
     */
    Limit?: ListTablesInputLimit;
  }
  export type ListTablesInputLimit = number;
  export interface ListTablesOutput {
    /**
     * The names of the tables associated with the current account at the current endpoint. The maximum size of this array is 100. If LastEvaluatedTableName also appears in the output, you can use this value as the ExclusiveStartTableName parameter in a subsequent ListTables request and obtain the next page of results.
     */
    TableNames?: TableNameList;
    /**
     * The name of the last table in the current page of results. Use this value as the ExclusiveStartTableName in a new request to obtain the next page of results, until all the table names are returned. If you do not receive a LastEvaluatedTableName value in the response, this means that there are no more table names to be retrieved.
     */
    LastEvaluatedTableName?: TableName;
  }
  export interface ListTagsOfResourceInput {
    /**
     * The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.
     */
    NextToken?: NextTokenString;
  }
  export interface ListTagsOfResourceOutput {
    /**
     * The tags currently associated with the Amazon DynamoDB resource.
     */
    Tags?: TagList;
    /**
     * If this value is returned, there are additional results to be displayed. To retrieve them, call ListTagsOfResource again, with NextToken set to this value.
     */
    NextToken?: NextTokenString;
  }
  export interface LocalSecondaryIndex {
    /**
     * The name of the local secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection: Projection;
  }
  export interface LocalSecondaryIndexDescription {
    /**
     * Represents the name of the local secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
    /**
     * The total size of the specified index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    IndexSizeBytes?: Long;
    /**
     * The number of items in the specified index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the index.
     */
    IndexArn?: String;
  }
  export type LocalSecondaryIndexDescriptionList = LocalSecondaryIndexDescription[];
  export interface LocalSecondaryIndexInfo {
    /**
     * Represents the name of the local secondary index.
     */
    IndexName?: IndexName;
    /**
     * The complete key schema for a local secondary index, which consists of one or more pairs of attribute names and key types:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. 
     */
    KeySchema?: KeySchema;
    /**
     * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. 
     */
    Projection?: Projection;
  }
  export type LocalSecondaryIndexList = LocalSecondaryIndex[];
  export type LocalSecondaryIndexes = LocalSecondaryIndexInfo[];
  export type Long = number;
  export type MapAttributeValue = {[key: string]: AttributeValue};
  export type NextTokenString = string;
  export type NonKeyAttributeName = string;
  export type NonKeyAttributeNameList = NonKeyAttributeName[];
  export type NonNegativeLongObject = number;
  export type NullAttributeValue = boolean;
  export type NumberAttributeValue = string;
  export type NumberSetAttributeValue = NumberAttributeValue[];
  export interface ParameterizedStatement {
    /**
     *  A PartiQL statment that uses parameters. 
     */
    Statement: PartiQLStatement;
    /**
     *  The parameter values. 
     */
    Parameters?: PreparedStatementParameters;
  }
  export type ParameterizedStatements = ParameterizedStatement[];
  export type PartiQLBatchRequest = BatchStatementRequest[];
  export type PartiQLBatchResponse = BatchStatementResponse[];
  export type PartiQLNextToken = string;
  export type PartiQLStatement = string;
  export interface PointInTimeRecoveryDescription {
    /**
     * The current state of point in time recovery:    ENABLED - Point in time recovery is enabled.    DISABLED - Point in time recovery is disabled.  
     */
    PointInTimeRecoveryStatus?: PointInTimeRecoveryStatus;
    /**
     * Specifies the earliest point in time you can restore your table to. You can restore your table to any point in time during the last 35 days. 
     */
    EarliestRestorableDateTime?: _Date;
    /**
     *  LatestRestorableDateTime is typically 5 minutes before the current time. 
     */
    LatestRestorableDateTime?: _Date;
  }
  export interface PointInTimeRecoverySpecification {
    /**
     * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
     */
    PointInTimeRecoveryEnabled: BooleanObject;
  }
  export type PointInTimeRecoveryStatus = "ENABLED"|"DISABLED"|string;
  export type PositiveIntegerObject = number;
  export type PositiveLongObject = number;
  export type PreparedStatementParameters = AttributeValue[];
  export type ProcessedItemCount = number;
  export interface Projection {
    /**
     * The set of attributes that are projected into the index:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - In addition to the attributes described in KEYS_ONLY, the secondary index will include other non-key attributes that you specify.    ALL - All of the table attributes are projected into the index.  
     */
    ProjectionType?: ProjectionType;
    /**
     * Represents the non-key attribute names which will be projected into the index. For local secondary indexes, the total count of NonKeyAttributes summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     */
    NonKeyAttributes?: NonKeyAttributeNameList;
  }
  export type ProjectionExpression = string;
  export type ProjectionType = "ALL"|"KEYS_ONLY"|"INCLUDE"|string;
  export interface ProvisionedThroughput {
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide. If read/write capacity mode is PAY_PER_REQUEST the value is set to 0.
     */
    ReadCapacityUnits: PositiveLongObject;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide. If read/write capacity mode is PAY_PER_REQUEST the value is set to 0.
     */
    WriteCapacityUnits: PositiveLongObject;
  }
  export interface ProvisionedThroughputDescription {
    /**
     * The date and time of the last provisioned throughput increase for this table.
     */
    LastIncreaseDateTime?: _Date;
    /**
     * The date and time of the last provisioned throughput decrease for this table.
     */
    LastDecreaseDateTime?: _Date;
    /**
     * The number of provisioned throughput decreases for this table during this UTC calendar day. For current maximums on provisioned throughput decreases, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    NumberOfDecreasesToday?: PositiveLongObject;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. Eventually consistent reads require less effort than strongly consistent reads, so a setting of 50 ReadCapacityUnits per second provides 100 eventually consistent ReadCapacityUnits per second.
     */
    ReadCapacityUnits?: NonNegativeLongObject;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException.
     */
    WriteCapacityUnits?: NonNegativeLongObject;
  }
  export interface ProvisionedThroughputOverride {
    /**
     * Replica-specific read capacity units. If not specified, uses the source table's read capacity settings.
     */
    ReadCapacityUnits?: PositiveLongObject;
  }
  export interface Put {
    /**
     * A map of attribute name to attribute values, representing the primary key of the item to be written by PutItem. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema. 
     */
    Item: PutItemInputAttributeMap;
    /**
     * Name of the table in which to write the item.
     */
    TableName: TableName;
    /**
     * A condition that must be satisfied in order for a conditional update to succeed.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * Use ReturnValuesOnConditionCheckFailure to get the item attributes if the Put condition fails. For ReturnValuesOnConditionCheckFailure, the valid values are: NONE and ALL_OLD.
     */
    ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
  }
  export interface PutItemInput {
    /**
     * The name of the table to contain the item.
     */
    TableName: TableName;
    /**
     * A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item. You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition. Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide. Each element in the Item map is an AttributeValue object.
     */
    Item: PutItemInputAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were updated with the PutItem request. For PutItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - If PutItem overwrote an attribute name-value pair, then the content of the old item is returned.   The values returned are strongly consistent. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.  The ReturnValues parameter is used by several DynamoDB operations; however, PutItem does not recognize any values other than NONE or ALL_OLD. 
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * A condition that must be satisfied in order for a conditional PutItem operation to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information on condition expressions, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export type PutItemInputAttributeMap = {[key: string]: AttributeValue};
  export interface PutItemOutput {
    /**
     * The attribute values as they appeared before the PutItem operation, but only if ReturnValues is specified as ALL_OLD in the request. Each element consists of an attribute name and an attribute value.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the PutItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Read/Write Capacity Mode in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the PutItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRangeGB - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface PutRequest {
    /**
     * A map of attribute name to attribute values, representing the primary key of an item to be processed by PutItem. All of the table's primary key attributes must be specified, and their data types must match those of the table's key schema. If any attributes are present in the item that are part of an index key schema for the table, their types must match the index key schema.
     */
    Item: PutItemInputAttributeMap;
  }
  export interface QueryInput {
    /**
     * The name of the table containing the requested items.
     */
    TableName: TableName;
    /**
     * The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that if you use the IndexName parameter, you must also provide TableName. 
     */
    IndexName?: IndexName;
    /**
     * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in ProjectionExpression. This return value is equivalent to specifying ProjectionExpression without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor ProjectionExpression are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and ProjectionExpression together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying ProjectionExpression without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error. 
     */
    Select?: Select;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Query and Scan in the Amazon DynamoDB Developer Guide.
     */
    Limit?: PositiveIntegerObject;
    /**
     * Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with ConsistentRead set to true, you will receive a ValidationException.
     */
    ConsistentRead?: ConsistentRead;
    /**
     * This is a legacy parameter. Use KeyConditionExpression instead. For more information, see KeyConditions in the Amazon DynamoDB Developer Guide.
     */
    KeyConditions?: KeyConditions;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see QueryFilter in the Amazon DynamoDB Developer Guide.
     */
    QueryFilter?: FilterConditionMap;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Specifies the order for index traversal: If true (default), the traversal is performed in ascending order; if false, the traversal is performed in descending order.  Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned. If ScanIndexForward is true, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If ScanIndexForward is false, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client.
     */
    ScanIndexForward?: BooleanObject;
    /**
     * The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number, or Binary. No set data types are allowed.
     */
    ExclusiveStartKey?: Key;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * A string that contains conditions that DynamoDB applies after the Query operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned. A FilterExpression does not allow key attributes. You cannot define a filter expression based on a partition key or a sort key.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide.
     */
    FilterExpression?: ConditionExpression;
    /**
     * The condition that specifies the key values for items to be retrieved by the Query action. The condition must perform an equality test on a single partition key value. The condition can optionally perform one of several comparison tests on a single sort key value. This allows Query to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values. The partition key equality test is required, and must be specified in the following format:  partitionKeyName = :partitionkeyval  If you also want to provide a condition for the sort key, it must be combined using AND with the condition for the sort key. Following is an example, using the = comparison operator for the sort key:  partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval  Valid comparisons for the sort key condition are as follows:    sortKeyName = :sortkeyval - true if the sort key value is equal to :sortkeyval.    sortKeyName &lt; :sortkeyval - true if the sort key value is less than :sortkeyval.    sortKeyName &lt;= :sortkeyval - true if the sort key value is less than or equal to :sortkeyval.    sortKeyName &gt; :sortkeyval - true if the sort key value is greater than :sortkeyval.    sortKeyName &gt;=  :sortkeyval - true if the sort key value is greater than or equal to :sortkeyval.    sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2 - true if the sort key value is greater than or equal to :sortkeyval1, and less than or equal to :sortkeyval2.    begins_with ( sortKeyName, :sortkeyval ) - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name begins_with is case-sensitive.   Use the ExpressionAttributeValues parameter to replace tokens such as :partitionval and :sortval with actual values at runtime. You can optionally use the ExpressionAttributeNames parameter to replace the names of the partition key and sort key with placeholder tokens. This option might be necessary if an attribute name conflicts with a DynamoDB reserved word. For example, the following KeyConditionExpression parameter causes an error because Size is a reserved word:    Size = :myval    To work around this, define a placeholder (such a #S) to represent the attribute name Size. KeyConditionExpression then is as follows:    #S = :myval    For a list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide. For more information on ExpressionAttributeNames and ExpressionAttributeValues, see Using Placeholders for Attribute Names and Values in the Amazon DynamoDB Developer Guide.
     */
    KeyConditionExpression?: KeyExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface QueryOutput {
    /**
     * An array of item attributes that match the query criteria. Each element in this array consists of an attribute name and the value for that attribute.
     */
    Items?: ItemList;
    /**
     * The number of items in the response. If you used a QueryFilter in the request, then Count is the number of items returned after the filter was applied, and ScannedCount is the number of matching items before the filter was applied. If you did not use a filter in the request, then Count and ScannedCount are the same.
     */
    Count?: Integer;
    /**
     * The number of items evaluated, before any QueryFilter is applied. A high ScannedCount value with few, or no, Count results indicates an inefficient Query operation. For more information, see Count and ScannedCount in the Amazon DynamoDB Developer Guide. If you did not use a filter in the request, then ScannedCount is the same as Count.
     */
    ScannedCount?: Integer;
    /**
     * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedKey is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedKey is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedKey is empty.
     */
    LastEvaluatedKey?: Key;
    /**
     * The capacity units consumed by the Query operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export type RegionName = string;
  export interface Replica {
    /**
     * The Region where the replica needs to be created.
     */
    RegionName?: RegionName;
  }
  export interface ReplicaAutoScalingDescription {
    /**
     * The Region where the replica exists.
     */
    RegionName?: RegionName;
    /**
     * Replica-specific global secondary index auto scaling settings.
     */
    GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexAutoScalingDescriptionList;
    ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * The current state of the replica:    CREATING - The replica is being created.    UPDATING - The replica is being updated.    DELETING - The replica is being deleted.    ACTIVE - The replica is ready for use.  
     */
    ReplicaStatus?: ReplicaStatus;
  }
  export type ReplicaAutoScalingDescriptionList = ReplicaAutoScalingDescription[];
  export interface ReplicaAutoScalingUpdate {
    /**
     * The Region where the replica exists.
     */
    RegionName: RegionName;
    /**
     * Represents the auto scaling settings of global secondary indexes that will be modified.
     */
    ReplicaGlobalSecondaryIndexUpdates?: ReplicaGlobalSecondaryIndexAutoScalingUpdateList;
    ReplicaProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
  }
  export type ReplicaAutoScalingUpdateList = ReplicaAutoScalingUpdate[];
  export interface ReplicaDescription {
    /**
     * The name of the Region.
     */
    RegionName?: RegionName;
    /**
     * The current state of the replica:    CREATING - The replica is being created.    UPDATING - The replica is being updated.    DELETING - The replica is being deleted.    ACTIVE - The replica is ready for use.    REGION_DISABLED - The replica is inaccessible because the Amazon Web Services Region has been disabled.  If the Amazon Web Services Region remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.     INACCESSIBLE_ENCRYPTION_CREDENTIALS  - The KMS key used to encrypt the table is inaccessible.  If the KMS key remains inaccessible for more than 20 hours, DynamoDB will remove this replica from the replication group. The replica will not be deleted and replication will stop from and to this region.   
     */
    ReplicaStatus?: ReplicaStatus;
    /**
     * Detailed information about the replica status.
     */
    ReplicaStatusDescription?: ReplicaStatusDescription;
    /**
     * Specifies the progress of a Create, Update, or Delete action on the replica as a percentage.
     */
    ReplicaStatusPercentProgress?: ReplicaStatusPercentProgress;
    /**
     * The KMS key of the replica that will be used for KMS encryption.
     */
    KMSMasterKeyId?: KMSMasterKeyId;
    /**
     * Replica-specific provisioned throughput. If not described, uses the source table's provisioned throughput settings.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
    /**
     * Replica-specific global secondary index settings.
     */
    GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescriptionList;
    /**
     * The time at which the replica was first detected as inaccessible. To determine cause of inaccessibility check the ReplicaStatus property.
     */
    ReplicaInaccessibleDateTime?: _Date;
    ReplicaTableClassSummary?: TableClassSummary;
  }
  export type ReplicaDescriptionList = ReplicaDescription[];
  export interface ReplicaGlobalSecondaryIndex {
    /**
     * The name of the global secondary index.
     */
    IndexName: IndexName;
    /**
     * Replica table GSI-specific provisioned throughput. If not specified, uses the source table GSI's read capacity settings.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  }
  export interface ReplicaGlobalSecondaryIndexAutoScalingDescription {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    /**
     * The current state of the replica global secondary index:    CREATING - The index is being created.    UPDATING - The table/index configuration is being updated. The table/index remains available for data operations when UPDATING     DELETING - The index is being deleted.    ACTIVE - The index is ready for use.  
     */
    IndexStatus?: IndexStatus;
    ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  }
  export type ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = ReplicaGlobalSecondaryIndexAutoScalingDescription[];
  export interface ReplicaGlobalSecondaryIndexAutoScalingUpdate {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    ProvisionedReadCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
  }
  export type ReplicaGlobalSecondaryIndexAutoScalingUpdateList = ReplicaGlobalSecondaryIndexAutoScalingUpdate[];
  export interface ReplicaGlobalSecondaryIndexDescription {
    /**
     * The name of the global secondary index.
     */
    IndexName?: IndexName;
    /**
     * If not described, uses the source table GSI's read capacity settings.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
  }
  export type ReplicaGlobalSecondaryIndexDescriptionList = ReplicaGlobalSecondaryIndexDescription[];
  export type ReplicaGlobalSecondaryIndexList = ReplicaGlobalSecondaryIndex[];
  export interface ReplicaGlobalSecondaryIndexSettingsDescription {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     *  The current status of the global secondary index:    CREATING - The global secondary index is being created.    UPDATING - The global secondary index is being updated.    DELETING - The global secondary index is being deleted.    ACTIVE - The global secondary index is ready for use.  
     */
    IndexStatus?: IndexStatus;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException.
     */
    ProvisionedReadCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for a global secondary index replica's read capacity units.
     */
    ProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException.
     */
    ProvisionedWriteCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for a global secondary index replica's write capacity units.
     */
    ProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
  }
  export type ReplicaGlobalSecondaryIndexSettingsDescriptionList = ReplicaGlobalSecondaryIndexSettingsDescription[];
  export interface ReplicaGlobalSecondaryIndexSettingsUpdate {
    /**
     * The name of the global secondary index. The name must be unique among all other indexes on this table.
     */
    IndexName: IndexName;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException.
     */
    ProvisionedReadCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for managing a global secondary index replica's read capacity units.
     */
    ProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
  }
  export type ReplicaGlobalSecondaryIndexSettingsUpdateList = ReplicaGlobalSecondaryIndexSettingsUpdate[];
  export type ReplicaList = Replica[];
  export interface ReplicaSettingsDescription {
    /**
     * The Region name of the replica.
     */
    RegionName: RegionName;
    /**
     * The current state of the Region:    CREATING - The Region is being created.    UPDATING - The Region is being updated.    DELETING - The Region is being deleted.    ACTIVE - The Region is ready for use.  
     */
    ReplicaStatus?: ReplicaStatus;
    /**
     * The read/write capacity mode of the replica.
     */
    ReplicaBillingModeSummary?: BillingModeSummary;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide. 
     */
    ReplicaProvisionedReadCapacityUnits?: NonNegativeLongObject;
    /**
     * Auto scaling settings for a global table replica's read capacity units.
     */
    ReplicaProvisionedReadCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide.
     */
    ReplicaProvisionedWriteCapacityUnits?: NonNegativeLongObject;
    /**
     * Auto scaling settings for a global table replica's write capacity units.
     */
    ReplicaProvisionedWriteCapacityAutoScalingSettings?: AutoScalingSettingsDescription;
    /**
     * Replica global secondary index settings for the global table.
     */
    ReplicaGlobalSecondaryIndexSettings?: ReplicaGlobalSecondaryIndexSettingsDescriptionList;
    ReplicaTableClassSummary?: TableClassSummary;
  }
  export type ReplicaSettingsDescriptionList = ReplicaSettingsDescription[];
  export interface ReplicaSettingsUpdate {
    /**
     * The Region of the replica to be added.
     */
    RegionName: RegionName;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException. For more information, see Specifying Read and Write Requirements in the Amazon DynamoDB Developer Guide. 
     */
    ReplicaProvisionedReadCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for managing a global table replica's read capacity units.
     */
    ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    /**
     * Represents the settings of a global secondary index for a global table that will be modified.
     */
    ReplicaGlobalSecondaryIndexSettingsUpdate?: ReplicaGlobalSecondaryIndexSettingsUpdateList;
    /**
     * Replica-specific table class. If not specified, uses the source table's table class.
     */
    ReplicaTableClass?: TableClass;
  }
  export type ReplicaSettingsUpdateList = ReplicaSettingsUpdate[];
  export type ReplicaStatus = "CREATING"|"CREATION_FAILED"|"UPDATING"|"DELETING"|"ACTIVE"|"REGION_DISABLED"|"INACCESSIBLE_ENCRYPTION_CREDENTIALS"|string;
  export type ReplicaStatusDescription = string;
  export type ReplicaStatusPercentProgress = string;
  export interface ReplicaUpdate {
    /**
     * The parameters required for creating a replica on an existing global table.
     */
    Create?: CreateReplicaAction;
    /**
     * The name of the existing replica to be removed.
     */
    Delete?: DeleteReplicaAction;
  }
  export type ReplicaUpdateList = ReplicaUpdate[];
  export interface ReplicationGroupUpdate {
    /**
     * The parameters required for creating a replica for the table.
     */
    Create?: CreateReplicationGroupMemberAction;
    /**
     * The parameters required for updating a replica for the table.
     */
    Update?: UpdateReplicationGroupMemberAction;
    /**
     * The parameters required for deleting a replica for the table.
     */
    Delete?: DeleteReplicationGroupMemberAction;
  }
  export type ReplicationGroupUpdateList = ReplicationGroupUpdate[];
  export type ResourceArnString = string;
  export type RestoreInProgress = boolean;
  export interface RestoreSummary {
    /**
     * The Amazon Resource Name (ARN) of the backup from which the table was restored.
     */
    SourceBackupArn?: BackupArn;
    /**
     * The ARN of the source table of the backup that is being restored.
     */
    SourceTableArn?: TableArn;
    /**
     * Point in time or source backup time.
     */
    RestoreDateTime: _Date;
    /**
     * Indicates if a restore is in progress or not.
     */
    RestoreInProgress: RestoreInProgress;
  }
  export interface RestoreTableFromBackupInput {
    /**
     * The name of the new table to which the backup must be restored.
     */
    TargetTableName: TableName;
    /**
     * The Amazon Resource Name (ARN) associated with the backup.
     */
    BackupArn: BackupArn;
    /**
     * The billing mode of the restored table.
     */
    BillingModeOverride?: BillingMode;
    /**
     * List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
     */
    GlobalSecondaryIndexOverride?: GlobalSecondaryIndexList;
    /**
     * List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
     */
    LocalSecondaryIndexOverride?: LocalSecondaryIndexList;
    /**
     * Provisioned throughput settings for the restored table.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughput;
    /**
     * The new server-side encryption settings for the restored table.
     */
    SSESpecificationOverride?: SSESpecification;
  }
  export interface RestoreTableFromBackupOutput {
    /**
     * The description of the table created from an existing backup.
     */
    TableDescription?: TableDescription;
  }
  export interface RestoreTableToPointInTimeInput {
    /**
     * The DynamoDB table that will be restored. This value is an Amazon Resource Name (ARN).
     */
    SourceTableArn?: TableArn;
    /**
     * Name of the source table that is being restored.
     */
    SourceTableName?: TableName;
    /**
     * The name of the new table to which it must be restored to.
     */
    TargetTableName: TableName;
    /**
     * Restore the table to the latest possible time. LatestRestorableDateTime is typically 5 minutes before the current time. 
     */
    UseLatestRestorableTime?: BooleanObject;
    /**
     * Time in the past to restore the table to.
     */
    RestoreDateTime?: _Date;
    /**
     * The billing mode of the restored table.
     */
    BillingModeOverride?: BillingMode;
    /**
     * List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
     */
    GlobalSecondaryIndexOverride?: GlobalSecondaryIndexList;
    /**
     * List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore.
     */
    LocalSecondaryIndexOverride?: LocalSecondaryIndexList;
    /**
     * Provisioned throughput settings for the restored table.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughput;
    /**
     * The new server-side encryption settings for the restored table.
     */
    SSESpecificationOverride?: SSESpecification;
  }
  export interface RestoreTableToPointInTimeOutput {
    /**
     * Represents the properties of a table.
     */
    TableDescription?: TableDescription;
  }
  export type ReturnConsumedCapacity = "INDEXES"|"TOTAL"|"NONE"|string;
  export type ReturnItemCollectionMetrics = "SIZE"|"NONE"|string;
  export type ReturnValue = "NONE"|"ALL_OLD"|"UPDATED_OLD"|"ALL_NEW"|"UPDATED_NEW"|string;
  export type ReturnValuesOnConditionCheckFailure = "ALL_OLD"|"NONE"|string;
  export type S3Bucket = string;
  export type S3BucketOwner = string;
  export interface S3BucketSource {
    /**
     *  The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional. 
     */
    S3BucketOwner?: S3BucketOwner;
    /**
     *  The S3 bucket that is being imported from. 
     */
    S3Bucket: S3Bucket;
    /**
     *  The key prefix shared by all S3 Objects that are being imported. 
     */
    S3KeyPrefix?: S3Prefix;
  }
  export type S3Prefix = string;
  export type S3SseAlgorithm = "AES256"|"KMS"|string;
  export type S3SseKmsKeyId = string;
  export interface SSEDescription {
    /**
     * Represents the current state of server-side encryption. The only supported values are:    ENABLED - Server-side encryption is enabled.    UPDATING - Server-side encryption is being updated.  
     */
    Status?: SSEStatus;
    /**
     * Server-side encryption type. The only supported value is:    KMS - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).  
     */
    SSEType?: SSEType;
    /**
     * The KMS key ARN used for the KMS encryption.
     */
    KMSMasterKeyArn?: KMSMasterKeyArn;
    /**
     * Indicates the time, in UNIX epoch date format, when DynamoDB detected that the table's KMS key was inaccessible. This attribute will automatically be cleared when DynamoDB detects that the table's KMS key is accessible again. DynamoDB will initiate the table archival process when table's KMS key remains inaccessible for more than seven days from this date.
     */
    InaccessibleEncryptionDateTime?: _Date;
  }
  export type SSEEnabled = boolean;
  export interface SSESpecification {
    /**
     * Indicates whether server-side encryption is done using an Amazon Web Services managed key or an Amazon Web Services owned key. If enabled (true), server-side encryption type is set to KMS and an Amazon Web Services managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to Amazon Web Services owned key.
     */
    Enabled?: SSEEnabled;
    /**
     * Server-side encryption type. The only supported value is:    KMS - Server-side encryption that uses Key Management Service. The key is stored in your account and is managed by KMS (KMS charges apply).  
     */
    SSEType?: SSEType;
    /**
     * The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key alias/aws/dynamodb.
     */
    KMSMasterKeyId?: KMSMasterKeyId;
  }
  export type SSEStatus = "ENABLING"|"ENABLED"|"DISABLING"|"DISABLED"|"UPDATING"|string;
  export type SSEType = "AES256"|"KMS"|string;
  export type ScalarAttributeType = "S"|"N"|"B"|string;
  export interface ScanInput {
    /**
     * The name of the table containing the requested items; or, if you provide IndexName, the name of the table to which that index belongs.
     */
    TableName: TableName;
    /**
     * The name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the IndexName parameter, you must also provide TableName.
     */
    IndexName?: IndexName;
    /**
     * This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide.
     */
    AttributesToGet?: AttributeNameList;
    /**
     * The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Working with Queries in the Amazon DynamoDB Developer Guide.
     */
    Limit?: PositiveIntegerObject;
    /**
     * The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in ProjectionExpression. This return value is equivalent to specifying ProjectionExpression without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation reads only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor ProjectionExpression are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and ProjectionExpression together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying ProjectionExpression without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error. 
     */
    Select?: Select;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ScanFilter in the Amazon DynamoDB Developer Guide.
     */
    ScanFilter?: FilterConditionMap;
    /**
     * This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number or Binary. No set data types are allowed. In a parallel scan, a Scan request that includes ExclusiveStartKey must specify the same segment whose previous Scan returned the corresponding value of LastEvaluatedKey.
     */
    ExclusiveStartKey?: Key;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * For a parallel Scan request, TotalSegments represents the total number of segments into which the Scan operation will be divided. The value of TotalSegments corresponds to the number of application workers that will perform the parallel scan. For example, if you want to use four application threads to scan a table or an index, specify a TotalSegments value of 4. The value for TotalSegments must be greater than or equal to 1, and less than or equal to 1000000. If you specify a TotalSegments value of 1, the Scan operation will be sequential rather than parallel. If you specify TotalSegments, you must also specify Segment.
     */
    TotalSegments?: ScanTotalSegments;
    /**
     * For a parallel Scan request, Segment identifies an individual segment to be scanned by an application worker. Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to scan a table or an index, then the first thread specifies a Segment value of 0, the second thread specifies 1, and so on. The value of LastEvaluatedKey returned from a parallel Scan request must be used as ExclusiveStartKey with the same segment ID in a subsequent Scan operation. The value for Segment must be greater than or equal to 0, and less than the value provided for TotalSegments. If you provide Segment, you must also provide TotalSegments.
     */
    Segment?: ScanSegment;
    /**
     * A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ProjectionExpression?: ProjectionExpression;
    /**
     * A string that contains conditions that DynamoDB applies after the Scan operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide.
     */
    FilterExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * A Boolean value that determines the read consistency model during the scan:   If ConsistentRead is false, then the data returned from Scan might not contain the results from other recently completed write operations (PutItem, UpdateItem, or DeleteItem).   If ConsistentRead is true, then all of the write operations that completed before the Scan began are guaranteed to be contained in the Scan response.   The default setting for ConsistentRead is false. The ConsistentRead parameter is not supported on global secondary indexes. If you scan a global secondary index with ConsistentRead set to true, you will receive a ValidationException.
     */
    ConsistentRead?: ConsistentRead;
  }
  export interface ScanOutput {
    /**
     * An array of item attributes that match the scan criteria. Each element in this array consists of an attribute name and the value for that attribute.
     */
    Items?: ItemList;
    /**
     * The number of items in the response. If you set ScanFilter in the request, then Count is the number of items returned after the filter was applied, and ScannedCount is the number of matching items before the filter was applied. If you did not use a filter in the request, then Count is the same as ScannedCount.
     */
    Count?: Integer;
    /**
     * The number of items evaluated, before any ScanFilter is applied. A high ScannedCount value with few, or no, Count results indicates an inefficient Scan operation. For more information, see Count and ScannedCount in the Amazon DynamoDB Developer Guide. If you did not use a filter in the request, then ScannedCount is the same as Count.
     */
    ScannedCount?: Integer;
    /**
     * The primary key of the item where the operation stopped, inclusive of the previous result set. Use this value to start a new operation, excluding this value in the new request. If LastEvaluatedKey is empty, then the "last page" of results has been processed and there is no more data to be retrieved. If LastEvaluatedKey is not empty, it does not necessarily mean that there is more data in the result set. The only way to know when you have reached the end of the result set is when LastEvaluatedKey is empty.
     */
    LastEvaluatedKey?: Key;
    /**
     * The capacity units consumed by the Scan operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
  }
  export type ScanSegment = number;
  export type ScanTotalSegments = number;
  export type SecondaryIndexesCapacityMap = {[key: string]: Capacity};
  export type Select = "ALL_ATTRIBUTES"|"ALL_PROJECTED_ATTRIBUTES"|"SPECIFIC_ATTRIBUTES"|"COUNT"|string;
  export interface SourceTableDetails {
    /**
     * The name of the table for which the backup was created. 
     */
    TableName: TableName;
    /**
     * Unique identifier for the table for which the backup was created. 
     */
    TableId: TableId;
    /**
     * ARN of the table for which backup was created. 
     */
    TableArn?: TableArn;
    /**
     * Size of the table in bytes. Note that this is an approximate value.
     */
    TableSizeBytes?: Long;
    /**
     * Schema of the table. 
     */
    KeySchema: KeySchema;
    /**
     * Time when the source table was created. 
     */
    TableCreationDateTime: TableCreationDateTime;
    /**
     * Read IOPs and Write IOPS on the table when the backup was created.
     */
    ProvisionedThroughput: ProvisionedThroughput;
    /**
     * Number of items in the table. Note that this is an approximate value. 
     */
    ItemCount?: ItemCount;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.    PROVISIONED - Sets the read/write capacity mode to PROVISIONED. We recommend using PROVISIONED for predictable workloads.    PAY_PER_REQUEST - Sets the read/write capacity mode to PAY_PER_REQUEST. We recommend using PAY_PER_REQUEST for unpredictable workloads.   
     */
    BillingMode?: BillingMode;
  }
  export interface SourceTableFeatureDetails {
    /**
     * Represents the LSI properties for the table when the backup was created. It includes the IndexName, KeySchema and Projection for the LSIs on the table at the time of backup. 
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexes;
    /**
     * Represents the GSI properties for the table when the backup was created. It includes the IndexName, KeySchema, Projection, and ProvisionedThroughput for the GSIs on the table at the time of backup. 
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexes;
    /**
     * Stream settings on the table when the backup was created.
     */
    StreamDescription?: StreamSpecification;
    /**
     * Time to Live settings on the table when the backup was created.
     */
    TimeToLiveDescription?: TimeToLiveDescription;
    /**
     * The description of the server-side encryption status on the table when the backup was created.
     */
    SSEDescription?: SSEDescription;
  }
  export type StreamArn = string;
  export type StreamEnabled = boolean;
  export interface StreamSpecification {
    /**
     * Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.
     */
    StreamEnabled: StreamEnabled;
    /**
     *  When an item in the table is modified, StreamViewType determines what information is written to the stream for this table. Valid values for StreamViewType are:    KEYS_ONLY - Only the key attributes of the modified item are written to the stream.    NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream.    OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream.    NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.  
     */
    StreamViewType?: StreamViewType;
  }
  export type StreamViewType = "NEW_IMAGE"|"OLD_IMAGE"|"NEW_AND_OLD_IMAGES"|"KEYS_ONLY"|string;
  export type String = string;
  export type StringAttributeValue = string;
  export type StringSetAttributeValue = StringAttributeValue[];
  export type TableArn = string;
  export interface TableAutoScalingDescription {
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * The current state of the table:    CREATING - The table is being created.    UPDATING - The table is being updated.    DELETING - The table is being deleted.    ACTIVE - The table is ready for use.  
     */
    TableStatus?: TableStatus;
    /**
     * Represents replicas of the global table.
     */
    Replicas?: ReplicaAutoScalingDescriptionList;
  }
  export type TableClass = "STANDARD"|"STANDARD_INFREQUENT_ACCESS"|string;
  export interface TableClassSummary {
    /**
     * The table class of the specified table. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS.
     */
    TableClass?: TableClass;
    /**
     * The date and time at which the table class was last updated.
     */
    LastUpdateDateTime?: _Date;
  }
  export type TableCreationDateTime = Date;
  export interface TableCreationParameters {
    /**
     *  The name of the table created as part of the import operation. 
     */
    TableName: TableName;
    /**
     *  The attributes of the table created as part of the import operation. 
     */
    AttributeDefinitions: AttributeDefinitions;
    /**
     *  The primary key and option sort key of the table created as part of the import operation. 
     */
    KeySchema: KeySchema;
    /**
     *  The billing mode for provisioning the table created as part of the import operation. 
     */
    BillingMode?: BillingMode;
    ProvisionedThroughput?: ProvisionedThroughput;
    SSESpecification?: SSESpecification;
    /**
     *  The Global Secondary Indexes (GSI) of the table to be created as part of the import operation. 
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexList;
  }
  export interface TableDescription {
    /**
     * An array of AttributeDefinition objects. Each of these objects describes one attribute in the table and index key schema. Each AttributeDefinition object in this array is composed of:    AttributeName - The name of the attribute.    AttributeType - The data type for the attribute.  
     */
    AttributeDefinitions?: AttributeDefinitions;
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * The primary key structure for the table. Each KeySchemaElement consists of:    AttributeName - The name of the attribute.    KeyType - The role of the attribute:    HASH - partition key    RANGE - sort key    The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.    For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide.
     */
    KeySchema?: KeySchema;
    /**
     * The current state of the table:    CREATING - The table is being created.    UPDATING - The table/index configuration is being updated. The table/index remains available for data operations when UPDATING.    DELETING - The table is being deleted.    ACTIVE - The table is ready for use.    INACCESSIBLE_ENCRYPTION_CREDENTIALS - The KMS key used to encrypt the table in inaccessible. Table operations may fail due to failure to use the KMS key. DynamoDB will initiate the table archival process when a table's KMS key remains inaccessible for more than seven days.     ARCHIVING - The table is being archived. Operations are not allowed until archival is complete.     ARCHIVED - The table has been archived. See the ArchivalReason for more information.   
     */
    TableStatus?: TableStatus;
    /**
     * The date and time when the table was created, in UNIX epoch time format.
     */
    CreationDateTime?: _Date;
    /**
     * The provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
     */
    ProvisionedThroughput?: ProvisionedThroughputDescription;
    /**
     * The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    TableSizeBytes?: Long;
    /**
     * The number of items in the specified table. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.
     */
    ItemCount?: Long;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the table.
     */
    TableArn?: String;
    /**
     * Unique identifier for the table for which the backup was created. 
     */
    TableId?: TableId;
    /**
     * Contains the details for the read/write capacity mode.
     */
    BillingModeSummary?: BillingModeSummary;
    /**
     * Represents one or more local secondary indexes on the table. Each index is scoped to a given partition key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB. Each element is composed of:    IndexName - The name of the local secondary index.    KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      IndexSizeBytes - Represents the total size of the index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.    ItemCount - Represents the number of items in the index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.   If the table is in the DELETING state, no information about indexes will be returned.
     */
    LocalSecondaryIndexes?: LocalSecondaryIndexDescriptionList;
    /**
     * The global secondary indexes, if any, on the table. Each index is scoped to a given partition key value. Each element is composed of:    Backfilling - If true, then the index is currently in the backfilling phase. Backfilling occurs only when a new global secondary index is added to the table. It is the process by which DynamoDB populates the new index with data from the table. (This attribute does not appear for indexes that were created during a CreateTable operation.)   You can delete an index that is being created during the Backfilling phase when IndexStatus is set to CREATING and Backfilling is true. You can't delete the index that is being created when IndexStatus is set to CREATING and Backfilling is false. (This attribute does not appear for indexes that were created during a CreateTable operation.)    IndexName - The name of the global secondary index.    IndexSizeBytes - The total size of the global secondary index, in bytes. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.     IndexStatus - The current status of the global secondary index:    CREATING - The index is being created.    UPDATING - The index is being updated.    DELETING - The index is being deleted.    ACTIVE - The index is ready for use.      ItemCount - The number of items in the global secondary index. DynamoDB updates this value approximately every six hours. Recent changes might not be reflected in this value.     KeySchema - Specifies the complete index key schema. The attribute names in the key schema must be between 1 and 255 characters (inclusive). The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - In addition to the attributes described in KEYS_ONLY, the secondary index will include other non-key attributes that you specify.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units, along with data about increases and decreases.    If the table is in the DELETING state, no information about indexes will be returned.
     */
    GlobalSecondaryIndexes?: GlobalSecondaryIndexDescriptionList;
    /**
     * The current DynamoDB Streams configuration for the table.
     */
    StreamSpecification?: StreamSpecification;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that LatestStreamLabel is not a unique identifier for the stream, because it is possible that a stream from another table might have the same timestamp. However, the combination of the following three elements is guaranteed to be unique:   Amazon Web Services customer ID   Table name    StreamLabel   
     */
    LatestStreamLabel?: String;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the latest stream for this table.
     */
    LatestStreamArn?: StreamArn;
    /**
     * Represents the version of global tables in use, if the table is replicated across Amazon Web Services Regions.
     */
    GlobalTableVersion?: String;
    /**
     * Represents replicas of the table.
     */
    Replicas?: ReplicaDescriptionList;
    /**
     * Contains details for the restore.
     */
    RestoreSummary?: RestoreSummary;
    /**
     * The description of the server-side encryption status on the specified table.
     */
    SSEDescription?: SSEDescription;
    /**
     * Contains information about the table archive.
     */
    ArchivalSummary?: ArchivalSummary;
    /**
     * Contains details of the table class.
     */
    TableClassSummary?: TableClassSummary;
  }
  export type TableId = string;
  export type TableName = string;
  export type TableNameList = TableName[];
  export type TableStatus = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|"INACCESSIBLE_ENCRYPTION_CREDENTIALS"|"ARCHIVING"|"ARCHIVED"|string;
  export interface Tag {
    /**
     * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     */
    Key: TagKeyString;
    /**
     * The value of the tag. Tag values are case-sensitive and can be null.
     */
    Value: TagValueString;
  }
  export type TagKeyList = TagKeyString[];
  export type TagKeyString = string;
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * The tags to be assigned to the Amazon DynamoDB resource.
     */
    Tags: TagList;
  }
  export type TagValueString = string;
  export type TimeRangeLowerBound = Date;
  export type TimeRangeUpperBound = Date;
  export type TimeToLiveAttributeName = string;
  export interface TimeToLiveDescription {
    /**
     *  The TTL status for the table.
     */
    TimeToLiveStatus?: TimeToLiveStatus;
    /**
     *  The name of the TTL attribute for items in the table.
     */
    AttributeName?: TimeToLiveAttributeName;
  }
  export type TimeToLiveEnabled = boolean;
  export interface TimeToLiveSpecification {
    /**
     * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
     */
    Enabled: TimeToLiveEnabled;
    /**
     * The name of the TTL attribute used to store the expiration time for items in the table.
     */
    AttributeName: TimeToLiveAttributeName;
  }
  export type TimeToLiveStatus = "ENABLING"|"DISABLING"|"ENABLED"|"DISABLED"|string;
  export interface TransactGetItem {
    /**
     * Contains the primary key that identifies the item to get, together with the name of the table that contains the item, and optionally the specific attributes of the item to retrieve.
     */
    Get: Get;
  }
  export type TransactGetItemList = TransactGetItem[];
  export interface TransactGetItemsInput {
    /**
     * An ordered array of up to 100 TransactGetItem objects, each of which contains a Get structure.
     */
    TransactItems: TransactGetItemList;
    /**
     * A value of TOTAL causes consumed capacity information to be returned, and a value of NONE prevents that information from being returned. No other value is valid.
     */
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
  }
  export interface TransactGetItemsOutput {
    /**
     * If the ReturnConsumedCapacity value was TOTAL, this is an array of ConsumedCapacity objects, one for each table addressed by TransactGetItem objects in the TransactItems parameter. These ConsumedCapacity objects report the read-capacity units consumed by the TransactGetItems call in that table.
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
    /**
     * An ordered array of up to 100 ItemResponse objects, each of which corresponds to the TransactGetItem object in the same position in the TransactItems array. Each ItemResponse object contains a Map of the name-value pairs that are the projected attributes of the requested item. If a requested item could not be retrieved, the corresponding ItemResponse object is Null, or if the requested item has no projected attributes, the corresponding ItemResponse object is an empty Map. 
     */
    Responses?: ItemResponseList;
  }
  export interface TransactWriteItem {
    /**
     * A request to perform a check item operation.
     */
    ConditionCheck?: ConditionCheck;
    /**
     * A request to perform a PutItem operation.
     */
    Put?: Put;
    /**
     * A request to perform a DeleteItem operation.
     */
    Delete?: Delete;
    /**
     * A request to perform an UpdateItem operation.
     */
    Update?: Update;
  }
  export type TransactWriteItemList = TransactWriteItem[];
  export interface TransactWriteItemsInput {
    /**
     * An ordered array of up to 100 TransactWriteItem objects, each of which contains a ConditionCheck, Put, Update, or Delete object. These can operate on items in different tables, but the tables must reside in the same Amazon Web Services account and Region, and no two of them can operate on the same item. 
     */
    TransactItems: TransactWriteItemList;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections (if any), that were modified during the operation and are returned in the response. If set to NONE (the default), no statistics are returned. 
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * Providing a ClientRequestToken makes the call to TransactWriteItems idempotent, meaning that multiple identical calls have the same effect as one single call. Although multiple identical calls using the same client request token produce the same result on the server (no side effects), the responses to the calls might not be the same. If the ReturnConsumedCapacity&gt; parameter is set, then the initial TransactWriteItems call returns the amount of write capacity units consumed in making the changes. Subsequent TransactWriteItems calls with the same client token return the number of read capacity units consumed in reading the item. A client request token is valid for 10 minutes after the first request that uses it is completed. After 10 minutes, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 10 minutes, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 10-minute idempotency window, DynamoDB returns an IdempotentParameterMismatch exception.
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface TransactWriteItemsOutput {
    /**
     * The capacity units consumed by the entire TransactWriteItems operation. The values of the list are ordered according to the ordering of the TransactItems request parameter. 
     */
    ConsumedCapacity?: ConsumedCapacityMultiple;
    /**
     * A list of tables that were processed by TransactWriteItems and, for each table, information about any item collections that were affected by individual UpdateItem, PutItem, or DeleteItem operations. 
     */
    ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
  }
  export interface UntagResourceInput {
    /**
     * The DynamoDB resource that the tags will be removed from. This value is an Amazon Resource Name (ARN).
     */
    ResourceArn: ResourceArnString;
    /**
     * A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the DynamoDB resource.
     */
    TagKeys: TagKeyList;
  }
  export interface Update {
    /**
     * The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute.
     */
    Key: Key;
    /**
     * An expression that defines one or more attributes to be updated, the action to be performed on them, and new value(s) for them.
     */
    UpdateExpression: UpdateExpression;
    /**
     * Name of the table for the UpdateItem request.
     */
    TableName: TableName;
    /**
     * A condition that must be satisfied in order for a conditional update to succeed.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
    /**
     * Use ReturnValuesOnConditionCheckFailure to get the item attributes if the Update condition fails. For ReturnValuesOnConditionCheckFailure, the valid values are: NONE, ALL_OLD, UPDATED_OLD, ALL_NEW, UPDATED_NEW.
     */
    ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
  }
  export interface UpdateContinuousBackupsInput {
    /**
     * The name of the table.
     */
    TableName: TableName;
    /**
     * Represents the settings used to enable point in time recovery.
     */
    PointInTimeRecoverySpecification: PointInTimeRecoverySpecification;
  }
  export interface UpdateContinuousBackupsOutput {
    /**
     * Represents the continuous backups and point in time recovery settings on the table.
     */
    ContinuousBackupsDescription?: ContinuousBackupsDescription;
  }
  export interface UpdateContributorInsightsInput {
    /**
     * The name of the table.
     */
    TableName: TableName;
    /**
     * The global secondary index name, if applicable.
     */
    IndexName?: IndexName;
    /**
     * Represents the contributor insights action.
     */
    ContributorInsightsAction: ContributorInsightsAction;
  }
  export interface UpdateContributorInsightsOutput {
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * The name of the global secondary index, if applicable.
     */
    IndexName?: IndexName;
    /**
     * The status of contributor insights
     */
    ContributorInsightsStatus?: ContributorInsightsStatus;
  }
  export type UpdateExpression = string;
  export interface UpdateGlobalSecondaryIndexAction {
    /**
     * The name of the global secondary index to be updated.
     */
    IndexName: IndexName;
    /**
     * Represents the provisioned throughput settings for the specified global secondary index. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide.
     */
    ProvisionedThroughput: ProvisionedThroughput;
  }
  export interface UpdateGlobalTableInput {
    /**
     * The global table name.
     */
    GlobalTableName: TableName;
    /**
     * A list of Regions that should be added or removed from the global table.
     */
    ReplicaUpdates: ReplicaUpdateList;
  }
  export interface UpdateGlobalTableOutput {
    /**
     * Contains the details of the global table.
     */
    GlobalTableDescription?: GlobalTableDescription;
  }
  export interface UpdateGlobalTableSettingsInput {
    /**
     * The name of the global table
     */
    GlobalTableName: TableName;
    /**
     * The billing mode of the global table. If GlobalTableBillingMode is not specified, the global table defaults to PROVISIONED capacity billing mode.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned Mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-Demand Mode.   
     */
    GlobalTableBillingMode?: BillingMode;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException. 
     */
    GlobalTableProvisionedWriteCapacityUnits?: PositiveLongObject;
    /**
     * Auto scaling settings for managing provisioned write capacity for the global table.
     */
    GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate?: AutoScalingSettingsUpdate;
    /**
     * Represents the settings of a global secondary index for a global table that will be modified.
     */
    GlobalTableGlobalSecondaryIndexSettingsUpdate?: GlobalTableGlobalSecondaryIndexSettingsUpdateList;
    /**
     * Represents the settings for a global table in a Region that will be modified.
     */
    ReplicaSettingsUpdate?: ReplicaSettingsUpdateList;
  }
  export interface UpdateGlobalTableSettingsOutput {
    /**
     * The name of the global table.
     */
    GlobalTableName?: TableName;
    /**
     * The Region-specific settings for the global table.
     */
    ReplicaSettings?: ReplicaSettingsDescriptionList;
  }
  export interface UpdateItemInput {
    /**
     * The name of the table containing the item to update.
     */
    TableName: TableName;
    /**
     * The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     */
    Key: Key;
    /**
     * This is a legacy parameter. Use UpdateExpression instead. For more information, see AttributeUpdates in the Amazon DynamoDB Developer Guide.
     */
    AttributeUpdates?: AttributeUpdates;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide.
     */
    Expected?: ExpectedAttributeMap;
    /**
     * This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide.
     */
    ConditionalOperator?: ConditionalOperator;
    /**
     * Use ReturnValues if you want to get the item attributes as they appear before or after they are updated. For UpdateItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.    UPDATED_OLD - Returns only the updated attributes, as they appeared before the UpdateItem operation.    ALL_NEW - Returns all of the attributes of the item, as they appear after the UpdateItem operation.    UPDATED_NEW - Returns only the updated attributes, as they appear after the UpdateItem operation.   There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed. The values returned are strongly consistent.
     */
    ReturnValues?: ReturnValue;
    ReturnConsumedCapacity?: ReturnConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned.
     */
    ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    /**
     * An expression that defines one or more attributes to be updated, the action to be performed on them, and new values for them. The following action values are available for UpdateExpression.    SET - Adds one or more attributes and values to an item. If any of these attributes already exist, they are replaced by the new values. You can also use SET to add or subtract from an attribute that is of type Number. For example: SET myNum = myNum + :val   SET supports the following functions:    if_not_exists (path, operand) - if the item does not contain an attribute at the specified path, then if_not_exists evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.    list_append (operand, operand) - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.   These function names are case-sensitive.    REMOVE - Removes one or more attributes from an item.    ADD - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of ADD depends on the data type of the attribute:   If the existing attribute is a number, and if Value is also a number, then Value is mathematically added to the existing attribute. If Value is a negative number, then it is subtracted from the existing attribute.  If you use ADD to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value. Similarly, if you use ADD for an existing item to increment or decrement an attribute value that doesn't exist before the update, DynamoDB uses 0 as the initial value. For example, suppose that the item you want to update doesn't have an attribute named itemcount, but you decide to ADD the number 3 to this attribute anyway. DynamoDB will create the itemcount attribute, set its initial value to 0, and finally add 3 to it. The result will be a new itemcount attribute in the item, with a value of 3.    If the existing data type is a set and if Value is also a set, then Value is added to the existing set. For example, if the attribute value is the set [1,2], and the ADD action specified [3], then the final attribute value is [1,2,3]. An error occurs if an ADD action is specified for a set attribute and the attribute type specified does not match the existing set type.  Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the Value must also be a set of strings.    The ADD action only supports Number and set data types. In addition, ADD can only be used on top-level attributes, not nested attributes.     DELETE - Deletes an element from a set. If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set [a,b,c] and the DELETE action specifies [a,c], then the final attribute value is [b]. Specifying an empty set is an error.  The DELETE action only supports set data types. In addition, DELETE can only be used on top-level attributes, not nested attributes.    You can have many actions in a single expression, such as the following: SET a=:value1, b=:value2 DELETE :value3, :value4, :value5  For more information on update expressions, see Modifying Items and Attributes in the Amazon DynamoDB Developer Guide.
     */
    UpdateExpression?: UpdateExpression;
    /**
     * A condition that must be satisfied in order for a conditional update to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | &lt;&gt; | &lt; | &gt; | &lt;= | &gt;= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information about condition expressions, see Specifying Conditions in the Amazon DynamoDB Developer Guide.
     */
    ConditionExpression?: ConditionExpression;
    /**
     * One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide.) To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information about expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeNames?: ExpressionAttributeNameMap;
    /**
     * One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide.
     */
    ExpressionAttributeValues?: ExpressionAttributeValueMap;
  }
  export interface UpdateItemOutput {
    /**
     * A map of attribute values as they appear before or after the UpdateItem operation, as determined by the ReturnValues parameter. The Attributes map is only present if ReturnValues was specified as something other than NONE in the request. Each element represents one attribute.
     */
    Attributes?: AttributeMap;
    /**
     * The capacity units consumed by the UpdateItem operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. ConsumedCapacity is only returned if the ReturnConsumedCapacity parameter was specified. For more information, see Provisioned Throughput in the Amazon DynamoDB Developer Guide.
     */
    ConsumedCapacity?: ConsumedCapacity;
    /**
     * Information about item collections, if any, that were affected by the UpdateItem operation. ItemCollectionMetrics is only returned if the ReturnItemCollectionMetrics parameter was specified. If the table does not have any local secondary indexes, this information is not returned in the response. Each ItemCollectionMetrics element consists of:    ItemCollectionKey - The partition key value of the item collection. This is the same as the partition key value of the item itself.    SizeEstimateRangeGB - An estimate of item collection size, in gigabytes. This value is a two-element array containing a lower bound and an upper bound for the estimate. The estimate includes the size of all the items in the table, plus the size of all attributes projected into all of the local secondary indexes on that table. Use this estimate to measure whether a local secondary index is approaching its size limit. The estimate is subject to change over time; therefore, do not rely on the precision or accuracy of the estimate.  
     */
    ItemCollectionMetrics?: ItemCollectionMetrics;
  }
  export interface UpdateReplicationGroupMemberAction {
    /**
     * The Region where the replica exists.
     */
    RegionName: RegionName;
    /**
     * The KMS key of the replica that should be used for KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS key alias/aws/dynamodb.
     */
    KMSMasterKeyId?: KMSMasterKeyId;
    /**
     * Replica-specific provisioned throughput. If not specified, uses the source table's provisioned throughput settings.
     */
    ProvisionedThroughputOverride?: ProvisionedThroughputOverride;
    /**
     * Replica-specific global secondary index settings.
     */
    GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexList;
    /**
     * Replica-specific table class. If not specified, uses the source table's table class.
     */
    TableClassOverride?: TableClass;
  }
  export interface UpdateTableInput {
    /**
     * An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, AttributeDefinitions must include the key element(s) of the new index.
     */
    AttributeDefinitions?: AttributeDefinitions;
    /**
     * The name of the table to be updated.
     */
    TableName: TableName;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. When switching from pay-per-request to provisioned capacity, initial provisioned capacity values must be set. The initial provisioned capacity values are estimated based on the consumed read and write capacity of your table and global secondary indexes over the past 30 minutes.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned Mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-Demand Mode.   
     */
    BillingMode?: BillingMode;
    /**
     * The new provisioned throughput settings for the specified table or index.
     */
    ProvisionedThroughput?: ProvisionedThroughput;
    /**
     * An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:    Create - add a new global secondary index to the table.    Update - modify the provisioned throughput settings of an existing global secondary index.    Delete - remove a global secondary index from the table.   You can create or delete only one global secondary index per UpdateTable operation. For more information, see Managing Global Secondary Indexes in the Amazon DynamoDB Developer Guide. 
     */
    GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdateList;
    /**
     * Represents the DynamoDB Streams configuration for the table.  You receive a ResourceInUseException if you try to enable a stream on a table that already has a stream, or if you try to disable a stream on a table that doesn't have a stream. 
     */
    StreamSpecification?: StreamSpecification;
    /**
     * The new server-side encryption settings for the specified table.
     */
    SSESpecification?: SSESpecification;
    /**
     * A list of replica update actions (create, delete, or update) for the table.  This property only applies to Version 2019.11.21 of global tables. 
     */
    ReplicaUpdates?: ReplicationGroupUpdateList;
    /**
     * The table class of the table to be updated. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS.
     */
    TableClass?: TableClass;
  }
  export interface UpdateTableOutput {
    /**
     * Represents the properties of the table.
     */
    TableDescription?: TableDescription;
  }
  export interface UpdateTableReplicaAutoScalingInput {
    /**
     * Represents the auto scaling settings of the global secondary indexes of the replica to be updated.
     */
    GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexAutoScalingUpdateList;
    /**
     * The name of the global table to be updated.
     */
    TableName: TableName;
    ProvisionedWriteCapacityAutoScalingUpdate?: AutoScalingSettingsUpdate;
    /**
     * Represents the auto scaling settings of replicas of the table that will be modified.
     */
    ReplicaUpdates?: ReplicaAutoScalingUpdateList;
  }
  export interface UpdateTableReplicaAutoScalingOutput {
    /**
     * Returns information about the auto scaling settings of a table with replicas.
     */
    TableAutoScalingDescription?: TableAutoScalingDescription;
  }
  export interface UpdateTimeToLiveInput {
    /**
     * The name of the table to be configured.
     */
    TableName: TableName;
    /**
     * Represents the settings used to enable or disable Time to Live for the specified table.
     */
    TimeToLiveSpecification: TimeToLiveSpecification;
  }
  export interface UpdateTimeToLiveOutput {
    /**
     * Represents the output of an UpdateTimeToLive operation.
     */
    TimeToLiveSpecification?: TimeToLiveSpecification;
  }
  export interface WriteRequest {
    /**
     * A request to perform a PutItem operation.
     */
    PutRequest?: PutRequest;
    /**
     * A request to perform a DeleteItem operation.
     */
    DeleteRequest?: DeleteRequest;
  }
  export type WriteRequests = WriteRequest[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2011-12-05"|"2012-08-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DynamoDB client.
   */
  export import Types = DynamoDB;
}
export = DynamoDB;
