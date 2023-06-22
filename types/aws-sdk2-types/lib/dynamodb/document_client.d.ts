import DynamoDB = require('../../clients/dynamodb');
import * as stream from 'stream';
import {Request} from '../request';
import {AWSError} from '../error';

interface File {}
interface Blob {}

/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 */
export class DocumentClient {
    /**
     * Creates a DynamoDB document client with a set of configuration options.
     */
    constructor(options?: DocumentClient.DocumentClientOptions & DynamoDB.Types.ClientConfiguration)

    /**
     * Creates a set of elements inferring the type of set from the type of the first element. Amazon DynamoDB currently supports the number sets, string sets, and binary sets. For more information about DynamoDB data types see the documentation on the Amazon DynamoDB Data Model.
     */
    createSet(list: number[]|string[]|DocumentClient.binaryType[], options?: DocumentClient.CreateSetOptions): DocumentClient.DynamoDbSet;
    /**
     * Returns the attributes of one or more items from one or more tables by delegating to AWS.DynamoDB.batchGetItem().
     */
    batchGet(params: DocumentClient.BatchGetItemInput, callback?: (err: AWSError, data: DocumentClient.BatchGetItemOutput) => void): Request<DocumentClient.BatchGetItemOutput, AWSError>;
    /**
     * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
     */
    batchWrite(params: DocumentClient.BatchWriteItemInput, callback?: (err: AWSError, data: DocumentClient.BatchWriteItemOutput) => void): Request<DocumentClient.BatchWriteItemOutput, AWSError>;
    /**
     * Deletes a single item in a table by primary key by delegating to AWS.DynamoDB.deleteItem().
     */
    delete(params: DocumentClient.DeleteItemInput, callback?: (err: AWSError, data: DocumentClient.DeleteItemOutput) => void): Request<DocumentClient.DeleteItemOutput, AWSError>;
    /**
     * Returns a set of attributes for the item with the given primary key by delegating to AWS.DynamoDB.getItem().
     */
    get(params: DocumentClient.GetItemInput, callback?: (err: AWSError, data: DocumentClient.GetItemOutput) => void): Request<DocumentClient.GetItemOutput, AWSError>;
    /**
     * Creates a new item, or replaces an old item with a new item by delegating to AWS.DynamoDB.putItem().
     */
    put(params: DocumentClient.PutItemInput, callback?: (err: AWSError, data: DocumentClient.PutItemOutput) => void): Request<DocumentClient.PutItemOutput, AWSError>;
    /**
     * Directly access items from a table by primary key or a secondary index.
     */
    query(params: DocumentClient.QueryInput, callback?: (err: AWSError, data: DocumentClient.QueryOutput) => void): Request<DocumentClient.QueryOutput, AWSError>;
    /**
     * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
     */
    scan(params: DocumentClient.ScanInput, callback?: (err: AWSError, data: DocumentClient.ScanOutput) => void): Request<DocumentClient.ScanOutput, AWSError>;
    /**
     * Edits an existing item's attributes, or adds a new item to the table if it does not already exist by delegating to AWS.DynamoDB.updateItem().
     */
    update(params: DocumentClient.UpdateItemInput, callback?: (err: AWSError, data: DocumentClient.UpdateItemOutput) => void): Request<DocumentClient.UpdateItemOutput, AWSError>;

    /**
     * Atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and region.
     */
    transactGet(params: DocumentClient.TransactGetItemsInput, callback?: (err: AWSError, data: DocumentClient.TransactGetItemsOutput) => void): Request<DocumentClient.TransactGetItemsOutput, AWSError>;

    /**
     * Synchronous write operation that groups up to 25 action requests.
     */
    transactWrite(params: DocumentClient.TransactWriteItemsInput, callback?: (err: AWSError, data: DocumentClient.TransactWriteItemsOutput) => void): Request<DocumentClient.TransactWriteItemsOutput, AWSError>;
}

export namespace DocumentClient {
    interface ConverterOptions {
        /**
         * An optional flag indicating that the document client should cast
         * empty strings, buffers, and sets to NULL shapes
         */
        convertEmptyValues?: boolean;

        /**
         * Whether to return numbers as a NumberValue object instead of
         * converting them to native JavaScript numbers. This allows for the
         * safe round-trip transport of numbers of arbitrary size.
         */
        wrapNumbers?: boolean;
    }

    export interface DocumentClientOptions extends ConverterOptions {
        /**
         * An optional map of parameters to bind to every request sent by this service object.
         */
        params?: {[key: string]: any}
        /**
         * An optional pre-configured instance
         * of the AWS.DynamoDB service object. This instance's config will be
         * copied to a new instance used by this client. You should not need to
         * retain a reference to the input object, and may destroy it or allow it
         * to be garbage collected.
         */
        service?: DynamoDB
    }

    export interface CreateSetOptions {
        /**
         * Set to true if you want to validate the type of each element in the set. Defaults to false.
         */
        validate?: boolean
    }

    export type binaryType = Buffer|File|Blob|ArrayBuffer|DataView|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|stream.Stream;

    interface StringSet {
        type: 'String';
        values: Array<string>;
    }

    interface NumberSet {
        type: 'Number';
        values: Array<number>;
    }

    interface BinarySet {
        type: 'Binary';
        values: Array<binaryType>;
    }

    export type DynamoDbSet = StringSet|NumberSet|BinarySet;
}

export namespace DocumentClient {
  //<!--auto-generated start-->
  interface Blob {}
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
  /**
   * A JavaScript object or native type.
   */
  export type AttributeValue = any;
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

  //<!--auto-generated end-->
}
