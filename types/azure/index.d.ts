// Type definitions for Azure SDK for Node v0.9.16
// Project: https://github.com/WindowsAzure/azure-sdk-for-node
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar>,
//                 Anti Veeranna <https://github.com/antiveeranna>,
//                 Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
* TODO
*/

import events = require("events");
import stream = require("stream");
import url = require("url");

//#region Services
export declare class TableService extends BatchServiceClient {
    static incorrectTableNameErr: string;
    static incorrectCallbackErr: string;
    static incorrectTableQuery: string;
    static incorrectPartitionErr: string;

    //#region Constructors

    /**
    * Creates a new TableService object.
    * Uses the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    *
    * @constructor
    * @extends {ServiceClient}
    */
    constructor();
    /**
    * Creates a new TableService object.
    * Uses a connectionString to connect
    *
    * @constructor
    * @extends {ServiceClient}
    * @param {string} connectionString The connection string.
    */
    constructor(connectionString: string);
    /**
    * Creates a new TableService object.
    * Uses a storage account and an access key.
    *
    * @constructor
    * @extends {ServiceClient}
    * @param {string} storageAccount                    The storage account or the connection string.
    * @param {string} storageAccessKey                  The storage access key.
    * @param {string} host                              The host address.
    * @param {object} authenticationProvider            The authentication provider.
    */
    constructor(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string);

    //#endregion

    //#region Service Methods

    getServiceProperties(callback: StorageServicePropertiesCallback): void;
    getServiceProperties(options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback): void;

    setServiceProperties(serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid): void;
    setServiceProperties(serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid): void;

    //#endregion

    //#region Table Methods

    getTable(table: string, callback?: TableRequestCallback): void;
    getTable(table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback): void;

    createTable(table: string, callback?: TableRequestCallback): void;
    createTable(table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback): void;

    createTableIfNotExists(table: string, callback?: CreateTableIfNotExistsCallback): void;
    createTableIfNotExists(table: string, options: TimeoutIntervalOptions, callback?: CreateTableIfNotExistsCallback): void;

    deleteTable(table: string, callback?: DeleteTableCallback): void;
    deleteTable(table: string, options: TimeoutIntervalOptions, callback?: DeleteTableCallback): void;

    queryTables(callback?: QueryTablesCallback): void;
    queryTables(options: QueryTablesOptions, callback?: QueryTablesCallback): void;

    //#endregion

    //#region Entities Methods

    queryEntity(table: string, partitionKey: string, rowKey: string, callback?: QueryEntityCallback): void;
    queryEntity(table: string, partitionKey: string, rowKey: string, options: TimeoutIntervalOptions, callback?: QueryEntityCallback): void;

    queryEntities(tableQuery: TableQuery, callback?: QueryEntitiesCallback): void;
    queryEntities(tableQuery: TableQuery, options: TimeoutIntervalOptions, callback?: QueryEntitiesCallback): void;

    insertEntity(tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback): void;
    insertEntity(tableName: string, entityDescriptor: Entity, options: TimeoutIntervalOptions, callback?: ModifyEntityCallback): void;

    insertOrReplaceEntity(tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback): void;
    insertOrReplaceEntity(tableName: string, entityDescriptor: Entity, options: TimeoutIntervalOptions, callback?: ModifyEntityCallback): void;

    updateEntity(tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback): void;
    updateEntity(tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback): void;

    mergeEntity(tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback): void;
    mergeEntity(tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback): void;

    insertOrMergeEntity(tableName: string, entityDescriptor: Entity, callback?: ModifyEntityCallback): void;
    insertOrMergeEntity(tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: ModifyEntityCallback): void;

    deleteEntity(tableName: string, entityDescriptor: Entity, callback?: DeleteEntityCallback): void;
    deleteEntity(tableName: string, entityDescriptor: Entity, options: UpdateEntityOptions, callback?: DeleteEntityCallback): void;

    //#endregion
}

export declare class BlobService extends StorageServiceClient {
    singleBlobPutThresholdInBytes: number;
    parallelOperationThreadCount: number;

    SpeedSummary: typeof SpeedSummary;

    //#region Constructors

    /**
    * Creates a new BlobService object.
    * Uses the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    *
    * @constructor
    * @extends {StorageServiceClient}
    */
    constructor();

    /**
    * Creates a new BlobService object.
    * Uses a connectionString to connect
    *
    * @constructor
    * @extends {StorageServiceClient}
    * @param {string} connectionString The connection string.
    */
    constructor(connectionString: string);

    /**
    * Creates a new BlobService object.
    * Uses a storage account and an access key.
    *
    * @constructor
    * @extends {StorageServiceClient}
    * @param {string} storageAccount                    The storage account or the connection string.
    * @param {string} storageAccessKey                  The storage access key.
    * @param {string} host                              The host address.
    * @param {object} sasToken                          The Shared Access Signature token.
    */
    constructor(storageAccount: string, storageAccessKey: string, host?: string, sasToken?: string);

    //#endregion

    //#region Service Methods

    /**
    * Gets the properties of a storage account�s Blob service, including Azure Storage Analytics.
    */
    getServiceProperties(callback: StorageServicePropertiesCallback): void;
    getServiceProperties(options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback): void;

    /**
    * Sets the properties of a storage account�s Blob service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    */
    setServiceProperties(serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid): void;
    setServiceProperties(serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid): void;

    //#endregion

    //#region Containers Methods

    /**
    * Lists a segment containing a collection of container items under the specified account.
    */
    listContainers(callback: ListContainersCallback): void;
    listContainers(options: ListContainersOptions, callback: ListContainersCallback): void;

    /**
     * Creates a new container under the specified account.
     * If a container with the same name already exists, the operation fails.
     */
    createContainer(container: string, callback: StorageCallback<ContainerResult>): void;
    createContainer(container: string, options: CreateContainerOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Creates a new container under the specified account if the container does not exists.
     */
    createContainerIfNotExists(container: string, callback: StorageCallback<boolean>): void;
    createContainerIfNotExists(container: string, options: CreateContainerOptions, callback: StorageCallback<boolean>): void;

    /**
     * Retrieves a container and its properties from a specified account.
     */
    getContainerProperties(container: string, callback: StorageCallback<ContainerResult>): void;
    getContainerProperties(container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Returns all user-defined metadata for the container.
     */
    getContainerMetadata(container: string, callback: StorageCallback<ContainerResult>): void;
    getContainerMetadata(container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Sets the container's metadata.
     */
    setContainerMetadata(container: string, metadata: StorageMetadata, callback: StorageCallback<ContainerResult>): void;
    setContainerMetadata(container: string, metadata: StorageMetadata, options: AccessConditionsOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Gets the container's ACL.
     */
    getContainerAcl(container: string, callback: StorageCallback<ContainerResult>): void;
    getContainerAcl(container: string, options: GetContainerPropertiesOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Updates the container's ACL.
     */
    setContainerAcl(container: string, publicAccessLevel: string, callback: StorageCallback<ContainerResult>): void;
    setContainerAcl(container: string, publicAccessLevel: string, options: StorageAclOptions, callback: StorageCallback<ContainerResult>): void;

    /**
     * Marks the specified container for deletion.
     * The container and any blobs contained within it are later deleted during garbage collection.
     */
    deleteContainer(container: string, callback: StorageCallbackVoid): void;
    deleteContainer(container: string, options: LeaseIdOptions, callback: StorageCallbackVoid): void;

    //#endregion

    //#region Blob Methods

    /**
    * Lists all of the blobs in the given container.
    */
    listBlobs(container: string, callback: ListBlobsCallback): void;
    listBlobs(container: string, options: ListBlobsOptions, callback: ListBlobsCallback): void;

    /**
     * Returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
     * It does not return or modify the content of the blob.
     */
    getBlobProperties(container: string, blob: string, callback: StorageCallback<BlobResult>): void;
    getBlobProperties(container: string, blob: string, options: GetBlobPropertiesOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Sets user-defined properties for the specified blob or snapshot.
     * It does not return or modify the content of the blob.
     */
    setBlobProperties(container: string, blob: string, callback: StorageCallback<BlobResult>): void;
    setBlobProperties(container: string, blob: string, options: SetBlobPropertiesOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Sets user-defined metadata for the specified blob or snapshot as one or more name-value pairs 
     * It does not return or modify the content of the blob.
     */
    setBlobMetadata(container: string, blob: string, metadata: StorageMetadata, callback: StorageCallback<BlobResult>): void;
    setBlobMetadata(container: string, blob: string, metadata: StorageMetadata, options: GetBlobPropertiesOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Provides a stream to read from a blob.
     */
    getBlob(container: string, blob: string, callback: StorageCallback<BlobResult>): stream.Readable;
    getBlob(container: string, blob: string, options: ReadBlobOptions, callback: StorageCallback<BlobResult>): stream.Readable;

    /**
     * Downloads a blob into a file.
     */
    getBlobToFile(container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>): void;
    getBlobToFile(container: string, blob: string, localFileName: string, options: ReadBlobOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Downloads a blob into a stream.
     */
    getBlobToStream(container: string, blob: string, stream: stream.Writable, callback: StorageCallback<BlobResult>): void;
    getBlobToStream(container: string, blob: string, stream: stream.Writable, options: ReadBlobOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Downloads a blob into a text string.
     */
    getBlobToText(container: string, blob: string, callback: GetBlobToTextCallback): void;
    getBlobToText(container: string, blob: string, options: ReadBlobOptions, callback: GetBlobToTextCallback): void;

    /**
     * Marks the specified blob or snapshot for deletion. The blob is later deleted during garbage collection.
     * If a blob has snapshots, you must delete them when deleting the blob. Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, 
     * or to delete only the snapshots but not the blob itself. If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error
     * and nothing will be deleted. 
     * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
     */
    deleteBlob(container: string, blob: string, callback: StorageCallback<boolean>): void;
    deleteBlob(container: string, blob: string, options: DeleteBlobOptions, callback: StorageCallback<boolean>): void;

    /**
     * Creates a read-only snapshot of a blob.
     */
    createBlobSnapshot(container: string, blob: string, callback: StorageCallback<string>): void;
    createBlobSnapshot(container: string, blob: string, options: BlobSnapshotOptions, callback: StorageCallback<string>): void;

    /**
     * Starts to copy a blob to a destination within the storage account. The Copy Blob operation copies the entire committed blob.
     */
    copyBlob(sourceUri: string, targetContainer: string, targetBlob: string, callback: StorageCallback<BlobResult>): void;
    copyBlob(sourceUri: string, targetContainer: string, targetBlob: string, options: CopyBlobOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Creates a read-only snapshot of a blob.
     */
    abortCopyBlob(container: string, blob: string, copyId: string, callback: StorageCallbackVoid): void;
    abortCopyBlob(container: string, blob: string, copyId: string, options: LeaseIdOptions, callback: StorageCallbackVoid): void;

    /**
     * Retrieves a shared access signature token.
     */
    generateSharedAccessSignature(container: string, blob: string, sharedAccessPolicy: SharedAccessPolicy): SharedAccessSignatureResult;

    /**
     * Retrieves a blob or container URL.
     */
    getBlobUrl(container: string): string;
    getBlobUrl(container: string, blob: string): string;
    getBlobUrl(container: string, blob: string, sharedAccessPolicy: SharedAccessPolicy): string;

    /**
     * Uploads a blob.
     */
    createBlob(container: string, blob: string, blobType: string, callback: StorageCallback<string>): stream.Writable;
    createBlob(container: string, blob: string, blobType: string, options: UploadBlockBlobOptions, callback: StorageCallback<string>): stream.Writable;

    //#endregion

    //#region Page Blob Methods

    /**
     * Creates a page blob of the specified length.
     */
    createPageBlob(container: string, blob: string, length: number, callback: StorageCallbackVoid): void;
    createPageBlob(container: string, blob: string, length: number, options: SetBlobPropertiesOptions, callback: StorageCallbackVoid): void;

    /**
     * Updates a page blob from a stream.
     */
    createBlobPagesFromStream(container: string, blob: string, readStream: stream.Readable, rangeStart: number, rangeEnd: number, callback: StorageCallback<BlobResult>): void;
    createBlobPagesFromStream(container: string, blob: string, readStream: stream.Readable, rangeStart: number, rangeEnd: number, options: CreatePagesOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Updates a page blob from a text string.
     */
    createBlobPagesFromText(container: string, blob: string, text: string, rangeStart: number, rangeEnd: number, callback: StorageCallback<BlobResult>): void;
    createBlobPagesFromText(container: string, blob: string, text: string, rangeStart: number, rangeEnd: number, options: CreatePagesOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Lists page ranges.
     * Lists all of the page ranges by default, or only the page ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
     */
    listBlobRegions(container: string, blob: string, callback: StorageCallback<PageRange[]>): void;
    listBlobRegions(container: string, blob: string, options: PageRangeOptions, callback: StorageCallback<PageRange[]>): void;

    /**
     * Clears a range of pages.
     */
    clearBlobPages(container: string, blob: string, rangeStart: number, rangeEnd: number, callback: StorageCallbackVoid): void;
    clearBlobPages(container: string, blob: string, rangeStart: number, rangeEnd: number, options: LeaseAccessConditionsOptions, callback: StorageCallbackVoid): void;

    /**
     * Resizes a page blob.
     */
    resizePageBlob(container: string, blob: string, size: number, callback: StorageCallback<BlobResult>): void;
    resizePageBlob(container: string, blob: string, size: number, options: LeaseAccessConditionsOptions, callback: StorageCallback<BlobResult>): void;

    /**
     * Sets the page blob's sequence number.
     */
    setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: string, sequenceNumber: string, callback: StorageCallback<BlobResult>): void;
    setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: string, sequenceNumber: string, options: AccessConditionsOptions, callback: StorageCallback<BlobResult>): void;

    //#endregion

    //#region Block Blob Methods

    /**
     * Uploads a block blob from file.
     */
    putBlockBlobFromFile(container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>): SpeedSummary;
    putBlockBlobFromFile(container: string, blob: string, localFileName: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>): SpeedSummary;
    createBlockBlobFromFile(container: string, blob: string, localFileName: string, callback: StorageCallback<BlobResult>): SpeedSummary;
    createBlockBlobFromFile(container: string, blob: string, localFileName: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>): SpeedSummary;

    /**
     * Uploads a block blob from a stream.
     */
    putBlockBlobFromStream(container: string, blob: string, stream: stream.Stream, streamLength: number, callback: StorageCallback<BlobResult>): SpeedSummary;
    putBlockBlobFromStream(container: string, blob: string, stream: stream.Stream, streamLength: number, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>): SpeedSummary;
    createBlockBlobFromStream(container: string, blob: string, stream: stream.Stream, streamLength: number, callback: StorageCallback<BlobResult>): SpeedSummary;
    createBlockBlobFromStream(container: string, blob: string, stream: stream.Stream, streamLength: number, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>): SpeedSummary;

    /**
     * Uploads a block blob from a text string.
     */
    createBlockBlobFromText(container: string, blob: string, text: string, callback: StorageCallback<BlobResult>): SpeedSummary;
    createBlockBlobFromText(container: string, blob: string, text: string, options: UploadBlockBlobOptions, callback: StorageCallback<BlobResult>): SpeedSummary;

    /**
     * Creates a new block to be committed as part of a blob.
     */
    createBlobBlockFromStream(blockId: string, container: string, blob: string, readStream: stream.Stream, streamLength: number, callback: StorageCallbackVoid): void;
    createBlobBlockFromStream(blockId: string, container: string, blob: string, readStream: stream.Stream, streamLength: number, options: CreateBlockOptions, callback: StorageCallbackVoid): void;

    /**
     * Creates a new block to be committed as part of a blob.
     */
    createBlobBlockFromText(blockId: string, container: string, blob: string, text: string, callback: StorageCallbackVoid): void;
    createBlobBlockFromText(blockId: string, container: string, blob: string, text: string, options: CreateBlockOptions, callback: StorageCallbackVoid): void;

    /**
     * Writes a blob by specifying the list of block IDs that make up the blob.
     * In order to be written as part of a blob, a block must have been successfully written to the server in a prior
     * createBlock operation.
     */
    commitBlobBlocks(container: string, blob: string, blockList: BlockList, callback: StorageCallback<BlockList>): void;
    commitBlobBlocks(container: string, blob: string, blockList: BlockList, options: CreateBlockOptions, callback: StorageCallback<BlockList>): void;

    /**
     * Retrieves the list of blocks that have been uploaded as part of a block blob.
     */
    listBlobBlocks(container: string, blob: string, blockListType: string, callback: StorageCallback<BlockList>): void;
    listBlobBlocks(container: string, blob: string, blockListType: string, options: GetBlobPropertiesOptions, callback: StorageCallback<BlockList>): void;

    /**
     * Generate a random block id prefix.
     */
    generateBlockIdPrefix(): string;
    /**
     * Get a block id according to prefix and block number.
     */
    getBlockId(prefix: string, number: number): string;

    //#endregion

    //#region Lease Methods

    /**
     * Acquires a new lease. 
     * If container and blob are specified, acquires a blob lease. 
     * Otherwise, if only container is specified and blob is null, acquires a container lease.
     */
    acquireLease(container: string, blob: string, callback: StorageCallback<LeaseResult>): void;
    acquireLease(container: string, blob: string, options: LeaseOptions, callback: StorageCallback<LeaseResult>): void;

    /**
     * Renews an existing lease.
     * If container and blob are specified, renews the blob lease.
     * Otherwise, if only container is specified and blob is null, renews the container lease.
     */
    renewLease(container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>): void;
    renewLease(container: string, blob: string, leaseId: string, options: AccessConditionsOptions, callback: StorageCallback<LeaseResult>): void;

    /**
     * Releases the lease.
     * If container and blob are specified, releases the blob lease.
     * Otherwise, if only container is specified and blob is null, releases the container lease.
     */
    releaseLease(container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>): void;
    releaseLease(container: string, blob: string, leaseId: string, options: AccessConditionsOptions, callback: StorageCallback<LeaseResult>): void;

    /**
     * Breaks the lease but ensures that another client cannot acquire a new lease until the current lease period has expired.
     * If container and blob are specified, breaks the blob lease.
     * Otherwise, if only container is specified and blob is null, breaks the container lease.
     */
    breakLease(container: string, blob: string, leaseId: string, callback: StorageCallback<LeaseResult>): void;
    breakLease(container: string, blob: string, leaseId: string, options: BreakLeaseOptions, callback: StorageCallback<LeaseResult>): void;

    //#endregion
}

export declare class QueueService extends StorageServiceClient {
    authenticationProvider: SharedKey;

    //#region Constructors

    /**
    * Creates a new BlobService object.
    * Uses the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    *
    * @constructor
    * @extends {StorageServiceClient}
    */
    constructor();

    /**
    * Creates a new BlobService object.
    * Uses a connectionString to connect
    *
    * @constructor
    * @extends {StorageServiceClient}
    * @param {string} connectionString The connection string.
    */
    constructor(connectionString: string);

    /**
    * Creates a new BlobService object.
    * Uses a storage account and an access key.
    *
    * @constructor
    * @extends {StorageServiceClient}
    * @param {string} storageAccount                    The storage account or the connection string.
    * @param {string} storageAccessKey                  The storage access key.
    * @param {string} host                              The host address.
    * @param {object} sasToken                          The Shared Access Signature token.
    */
    constructor(storageAccount: string, storageAccessKey: string, host?: string, sasToken?: string);

    //#endregion

    //#region Service Methods

    /**
    * Gets the properties of a storage account�s Blob service, including Azure Storage Analytics.
    */
    getServiceProperties(callback: StorageServicePropertiesCallback): void;
    getServiceProperties(options: TimeoutIntervalOptions, callback: StorageServicePropertiesCallback): void;

    /**
    * Sets the properties of a storage account�s Blob service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    */
    setServiceProperties(serviceProperties: StorageServiceProperties, callback: StorageCallbackVoid): void;
    setServiceProperties(serviceProperties: StorageServiceProperties, options: TimeoutIntervalOptions, callback: StorageCallbackVoid): void;

    //#endregion

    //#region Queue Methods

    /**
     * Lists all queues under the given account.
     */
    listQueues(callback: ListQueuesCallback): void;
    listQueues(options: ListQueuesOptions, callback: ListQueuesCallback): void;

    /**
     * Creates a new queue under the given account.
     */
    createQueue(queue: string, callback: StorageCallback<QueueResult>): void;
    createQueue(queue: string, options: MetadataOptions, callback: StorageCallback<QueueResult>): void;

    /**
     * Creates a new queue under the given account if it doesn't exist.
     */
    createQueueIfNotExists(queue: string, callback: StorageCallback<boolean>): void;
    createQueueIfNotExists(queue: string, options: MetadataOptions, callback: StorageCallback<boolean>): void;

    /**
     * Permanently deletes the specified queue.
     */
    deleteQueue(queue: string, callback: StorageCallback<boolean>): void;
    deleteQueue(queue: string, options: TimeoutIntervalOptions, callback: StorageCallback<boolean>): void;

    /**
     * Returns queue properties, including user-defined metadata.
     */
    getQueueMetadata(queue: string, callback: StorageCallback<QueueResult>): void;
    getQueueMetadata(queue: string, options: TimeoutIntervalOptions, callback: StorageCallback<QueueResult>): void;

    /**
     * Sets user-defined metadata on the specified queue. Metadata is associated with the queue as name-value pairs.
     */
    setQueueMetadata(queue: string, metadata: StorageMetadata, callback: StorageCallback<QueueResult>): void;
    setQueueMetadata(queue: string, metadata: StorageMetadata, options: TimeoutIntervalOptions, callback: StorageCallback<QueueResult>): void;

    //#endregion

    //#region Message Methods

    /**
     * Adds a new message to the back of the message queue. A visibility timeout can also be specified to make the message
     * invisible until the visibility timeout expires. A message must be in a format that can be included in an XML request
     * with UTF-8 encoding. The encoded message can be up to 64KB in size for versions 2011-08-18 and newer, or 8KB in size
     * for previous versions.
     */
    createMessage(queue: string, messageText: string, callback: StorageCallback<QueueMessageResult>): void
    createMessage(queue: string, messageText: string, options: CreateQueueMessageOptions, callback: StorageCallback<QueueMessageResult>): void

    /**
     * Retrieves a message from the queue and makes it invisible to other consumers.
     */
    getMessages(queue: string, callback: StorageCallback<QueueMessageResult[]>): void;
    getMessages(queue: string, options: GetQueueMessagesOptions, callback: StorageCallback<QueueMessageResult[]>): void;

    /**
     * Retrieves a message from the front of the queue, without changing the message visibility.
     */
    peekMessages(queue: string, callback: StorageCallback<QueueMessageResult[]>): void;
    peekMessages(queue: string, options: PeekQueueMessagesOptions, callback: StorageCallback<QueueMessageResult[]>): void;

    /**
     * Deletes a specified message from the queue.
     */
    deleteMessage(queue: string, messageId: string, popreceipt: string, callback: StorageCallback<boolean>): void
    deleteMessage(queue: string, messageId: string, popreceipt: string, options: TimeoutIntervalOptions, callback: StorageCallback<boolean>): void

    /**
     * Clears all messages from the queue.
     */
    clearMessages(queue: string, callback: StorageCallbackVoid): void;
    clearMessages(queue: string, options: TimeoutIntervalOptions, callback: StorageCallbackVoid): void;

    /**
     * Deletes a specified message from the queue.
     */
    updateMessage(queue: string, messageId: string, popreceipt: string, visibilitytimeout: number, callback: StorageCallback<QueueMessageResult>): void
    updateMessage(queue: string, messageId: string, popreceipt: string, visibilitytimeout: number, options: UpdateQueueMessagesOptions, callback: StorageCallback<QueueMessageResult>): void

    //#endregion
}

export declare class ServiceBusService {

}

export declare class SqlService {

}

export declare class ServiceManagementService {

}

export declare class SqlManagementService {
}
//#endregion

//#region Service Creators
export declare function createTableService(): TableService;
export declare function createTableService(connectionString: string): TableService;
export declare function createTableService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): TableService;

export declare function createBlobService(): BlobService;
export declare function createBlobService(connectionString: string): BlobService;
export declare function createBlobService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): BlobService;

export declare function createQueueService(): QueueService;
export declare function createQueueService(connectionString: string): QueueService;
export declare function createQueueService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): QueueService;

export declare function createServiceBusService(): ServiceBusService;
export declare function createServiceBusService(connectionString: string): ServiceBusService;
export declare function createServiceBusService(namespace: string, accessKey?: string, issuer?: string, acsNamespace?: string, host?: string, authenticationProvider?: string): ServiceBusService;

export declare function createSqlService(serverName: string, administratorLogin: string, administratorLoginPassword: string, host?: string, acsHost?: string, authenticationProvider?: string): SqlService;

export declare function createServiceManagementService(subscriptionId: string, authentication: string, hostOptions: string): ServiceManagementService;

export declare function createSqlManagementService(subscriptionId: string, authentication: string, hostOptions: string): SqlManagementService;
//#endregion

//#region RoleEnvironment

interface RoleEnvironmentInterface extends events.EventEmitter {
    incorrectCallbackErr: string;
    clientId: string;
    VersionEndpointFixedPath: string;
    EnvironmentVariables: {
        [key: string]: string;
        VersionEndpointEnvironmentName: string;
    };

    /**
     * Returns a RoleInstance object that represents the role instance
     * in which this code is currently executing.
     */
    getCurrentRoleInstance(callback: SimpleCallback<RoleInstance>): void;

    /**
     * Returns the deployment ID that uniquely identifies the deployment in
     * which this role instance is running.
     */
    getDeploymentId(callback: SimpleCallback<string>): void;

    /**
     * Indicates whether the role instance is running in the Microsoft Azure
     * environment.  It is good practice to enclose any code that uses 
     * service runtime in the isAvailable callback.
     */
    isAvailable(callback: SimpleCallback<boolean>): void;

    /**
     * Indicates whether the role instance is running in the development fabric.
     */
    isEmulated(callback: SimpleCallback<boolean>): void;

    /**
     * Returns the set of Role objects defined for your service.
     * Roles are defined in the service definition file.
     */
    getRoles(callback: SimpleCallback<Dictionary<Role>>): void;

    /**
     * Retrieves the settings in the service configuration file.
     * 
     * A role's configuration settings are defined in the service definition file.
     * Values for configuration settings are set in the service configuration file.
     * For more information on configuration settings, see the [Service Definition Schema](http://msdn.microsoft.com/en-us/library/windowsazure/ee758711.aspx)
     * and [Service Configuration Schema](http://msdn.microsoft.com/en-us/library/windowsazure/ee758710.aspx).
     */
    getConfigurationSettings(callback: SimpleCallback<Dictionary<string>>): void;

    /**
     * Retrieves the set of named local storage resources, along with the path.
     * For example, the DiagnosticStore resource which is defined for every role
     * provides a location for runtime diagnostics and logs.
     */
    getLocalResources(callback: SimpleCallback<Dictionary<RoleLocalResource>>): void;

    /**
     * Requests that the current role instance be stopped and restarted.
     * 
     * Before the role instance is recycled, the Microsoft Azure load balancer takes the role instance out of rotation.
     * This ensures that no new requests are routed to the instance while it is restarting.
     * 
     * A call to `RequestRecycle` initiates the normal shutdown cycle. Microsoft Azure raises the
     * `Stopping` event and calls the `OnStop` method so that you can run the necessary code to
     * prepare the instance to be recycled.
     */
    requestRecycle(callback: ErrorCallback): void;

    /**
     * Sets the status of the role instance.
     * 
     * An instance may indicate that it is in one of two states: Ready or Busy. If an instance's state is Ready, it is
     * prepared to receive requests from the load balancer. If the instance's state is Busy, it will not receive
     * requests from the load balancer.
     */
    setStatus(roleInstanceStatus: string, expirationUtc: Date, callback: ErrorCallback): void;

    /**
     * Clears the status of the role instance.
     * An instance may indicate that it has completed communicating status by calling this method.
     */
    clearStatus(callback: ErrorCallback): void;
}

export declare var RoleEnvironment: RoleEnvironmentInterface;

//#endregion

//#region Export of internal classes
export declare class WebResource {
    rawResponse: boolean;
    queryString: Dictionary<string>;

    constructor();

    get(path: string): WebResource;
    put(path: string): WebResource;
    post(path: string): WebResource;
    merge(path: string): WebResource;
    head(path: string): WebResource;
    del(path: string): WebResource;

    withProperty(name: string, value: string): WebResource;
    withRawResponse(rawResponse: boolean): WebResource;
    withHeadersOnly(headersOnly: boolean): WebResource;
    withQueryOption(name: string, value: string, defaultValue: string): WebResource;
    withQueryOptions(queryOptions: Dictionary<string>): WebResource;
    withHeader(name: string, value: string): WebResource;
    withHeaders(headers: Dictionary<string>): WebResource;
    withBody(body: any): WebResource;
    addOptionalMetadataHeaders(metadata: StorageMetadata): WebResource;

    validResponse(statusCode: number): boolean;
    pipeInput(inputStream: stream.Stream, destStream: stream.Stream): stream.Stream;
}

export declare class ServiceClient extends events.EventEmitter {
    static EnvironmentVariables: any;
    static DEVSTORE_STORAGE_ACCOUNT: string;
    static DEVSTORE_STORAGE_ACCESS_KEY: string;
    static DEVSTORE_BLOB_HOST: string;
    static DEVSTORE_QUEUE_HOST: string;
    static DEVSTORE_TABLE_HOST: string;
    static CLOUD_BLOB_HOST: string;
    static CLOUD_QUEUE_HOST: string;
    static CLOUD_TABLE_HOST: string;
    static CLOUD_SERVICEBUS_HOST: string;
    static CLOUD_ACCESS_CONTROL_HOST: string;
    static CLOUD_SERVICE_MANAGEMENT_HOST: string;
    static CLOUD_DATABASE_HOST: string;
    static DEFAULT_SERVICEBUS_ISSUER: string;
    static DEFAULT_WRAP_NAMESPACE_SUFFIX: string;
    static DEFAULT_PROTOCOL: string;

    constructor(host: string, authenticationProvider: any);

    setHost(host: string): void;
    performRequest(webResource: WebResource, outputData: string, options: any, callback: Function): void;
    performRequestOutputStream(webResource: WebResource, outputStream: any, options: any, callback: Function): void;
    performRequestInputStream(webResource: WebResource, outputData: string, inputStream: any, options: any, callback: Function): void;
    withFilter(newFilter: Filter): ServiceClient;
    parseMetadataHeaders(headers: any): any;
    isEmulated(): boolean;
    setProxy(proxyUrl: string, proxyPort: number): void;
}

export declare class BatchServiceClient extends StorageServiceClient {
    operations: any[];

    constructor(storageAccount: string, storageAccessKey: string, host: string, usePathstyleUri: boolean, authenticationProvider: any);
    beginBatch(): void;
    isInBatch(): boolean;
    rollback(): void;
    hasOperations(): boolean;
    addOperation(webResource: WebResource, outputData: any): void;
    commitBatch(callback: (error: any, operationResponses: any[], response: any) => void): void;
    commitBatch(options: any, callback: (error: any, operationResponses: any[], response: any) => void): void;
    processResponse(responseObject: any, requestOperations: any[]): any[];
    processOperation(webResource: WebResource, rawResponse: string): any;
}

export declare class ServiceManagementClient {

}

export declare class TableQuery {
    static select(...fields: string[]): TableQuery;
    from(table: string): TableQuery;
    whereKeys(partitionKey: string, rowKey: string): TableQuery;
    whereNextKeys(partitionKey: string, rowKey: string): TableQuery;
    where(condition: string, ...values: string[]): TableQuery;
    and(condition: string, ...args: string[]): TableQuery;
    or(condition: string, ...args: string[]): TableQuery;
    top(integer: number): TableQuery;
    toQueryObject(): any;
    toPath(): string;
}

export declare class BlobResult {
    blob: string;
    container: string;

    etag: string;
    lastModified: string;
    contentType: string;
    contentEncoding: string;
    contentLanguage: string;
    contentMD5: string;
    cacheControl: string;
    contentRange: string;
    contentTypeHeader: string;
    contentEncodingHeader: string;
    contentLanguageHeader: string;
    contentMD5Header: string;
    cacheControlHeader: string;
    contentLength: number;
    contentLengthHeader: number;
    contentDisposition: string;
    contentDispositionHeader: string;
    range: string;
    rangeHeader: string;
    getContentMd5: string;
    acceptRanges: string;
    blobType: string;
    leaseStatus: string;
    leaseId: string;
    leaseDuration: string;
    leaseState: string;
    sequenceNumber: string;
    copyStatus: string;
    copyCompletionTime: string;
    copyStatusDescription: string;
    copyId: string;
    copyProgress: number;
    requestId: string;

    metadata: StorageMetadata;

    constructor();
    constructor(container: string);
    constructor(container: string, blob: string);

    static parse(blobXml: any): BlobResult;
    static setHeadersFromBlob(webResource: WebResource, blob: BlobResult): void;

    getPropertiesFromHeaders(headers: any): void;
}

export declare class ContainerResult {
    name: string;
    publicAccessLevel: string;

    etag: string;
    lastModified: string;
    leaseStatus: string;
    leaseDuration: string;
    leaseState: string;
    requestId: string;

    metadata: StorageMetadata;
    signedIdentifiers: SignedIdentifier[];

    constructor();
    constructor(name: string);
    constructor(name: string, publicAccessLevel: string);

    static parse(containerXml: any): ContainerResult;

    getPropertiesFromHeaders(headers: any): void;
}

export declare class LeaseResult {
    container: string;
    blob: string;
    id: string;
    time: string;
    etag: string;
    lastModified: string;

    constructor();
    constructor(container: string);
    constructor(container: string, blob: string);
    constructor(container: string, blob: string, id: string);
    constructor(container: string, blob: string, id: string, time: string);

    getPropertiesFromHeaders(header: any): void;
}

export declare class QueueResult {
    name: string;
    metadata: StorageMetadata;
    approximatemessagecount: number;

    constructor();
    constructor(name: string);
    constructor(name: string, metadata: StorageMetadata);

    static parse(messageXml: any): QueueResult;

    getPropertiesFromHeaders(headers: any): void;
}

export declare class QueueMessageResult {
    queue: string;
    insertiontime: string;
    expirationtime: string;
    timenextvisible: string;
    messagetext: string;
    dequeuecount: string;
    messageid: string;
    popreceipt: string;
    metadata: StorageMetadata;

    constructor();
    constructor(queue: string);
    constructor(queue: string, messageid: string);
    constructor(queue: string, messageid: string, popreceipt: string);
    constructor(queue: string, messageid: string, popreceipt: string, metadata: StorageMetadata);

    static serialize(messageJs: string): string;
    static parse(messageXml: any): QueueMessageResult;

    getPropertiesFromHeaders(headers: any): void;
}

export declare class SpeedSummary {
    name: string;
    totalSize: number;
    completeSize: number;

    _startTime: Date;
    _timeWindowInSeconds: number;
    _timeWindow: number;
    _totalWindowSize: number;
    _speedTracks: number[];
    _speedTrackPtr: number;

    constructor(name: string);

    /**
     * Get running seconds
     */
    getElapsedSeconds(): string;
    getElapsedSeconds(humanReadable: boolean): number;

    /**
     * Get complete percentage
     */
    getCompletePercent(): number;
    getCompletePercent(len: number): number;

    /**
     * Get average upload/download speed
     */
    getAverageSpeed(): string;
    getAverageSpeed(humanReadable: boolean): number;

    /**
     * Get internal speed
     */
    getSpeed(): string;
    getSpeed(humanReadable: boolean): number;

    /**
     * Get auto increment function
     */
    getSpeed(size: number): (error: Error, value: any) => void;

    /**
     * Get total size
     */
    getTotalSize(): string;
    getTotalSize(humanReadable: boolean): number;

    /**
     * Get completed data size
     */
    getCompleteSize(): string;
    getCompleteSize(humanReadable: boolean): number;
}

export declare module Constants {

}

export interface Filter {
    handle(requestOptions: any, next: Function): void;
}

export declare class LinearRetryPolicyFilter implements Filter {
    constructor(retryCount?: number, retryInterval?: number);
    retryCount: number;
    retryInterval: number;
    handle(requestOptions: any, next: Function): void;
}

export declare class ExponentialRetryPolicyFilter implements Filter {
    constructor(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number);
    retryCount: number;
    retryInterval: number;
    minRetryInterval: number;
    maxRetryInterval: number;
    handle(requestOptions: any, next: Function): void;
}

export declare class HmacSha256Sign {

}

export declare class SharedAccessSignature {
    storageAccount: string;
    storageAccessKey: string;
    permissionSet: string[];
    signer: HmacSha256Sign;

    constructor(storageAccount: string, storageAccessKey: string, permissionSet: string[])

    /**
     * Generates the query string for a shared access signature signing.
     */
    generateSignedQueryString(path: string, queryString: Dictionary<string>, resourceType: string, sharedAccessPolicy: SharedAccessPolicy): Dictionary<string>;

    /**
     * Signs a request with the signature header.
     */
    signRequest(webResource: WebResource, callback: ErrorCallback): void;

    /**
     * Generates the shared access signature for a resource.
     */
    _generateSignature(path: string, resourceType: string, sharedAccessPolicy: SharedAccessPolicy): string;

    /**
     * Generates the query string for a shared access signature signing.
     */
    _permissionMatchesRequest(sharedAccessSignature: string, webResource: WebResource, resourceType: string, requiredPermissions: string[]): string;
}

export declare class SharedKey {
    storageAccount: string;
    storageAccessKey: string;
    usePathStyleUri: string;
    signer: HmacSha256Sign;

    constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean);

    /**
     * Signs a request with the Authentication header.
     */
    signRequest(webResource: WebResource, callback: ErrorCallback): void;

    /**
     * Retrieves the webresource's canonicalized resource string.
     */
    _getCanonicalizedResource(webResource: WebResource): string;

    /**
     * Constructs the Canonicalized Headers string.
     *
     * To construct the CanonicalizedHeaders portion of the signature string,
     * follow these steps: 1. Retrieve all headers for the resource that begin
     * with x-ms-, including the x-ms-date header. 2. Convert each HTTP header
     * name to lowercase. 3. Sort the headers lexicographically by header name,
     * in ascending order. Each header may appear only once in the
     * string. 4. Unfold the string by replacing any breaking white space with a
     * single space. 5. Trim any white space around the colon in the header. 6.
     * Finally, append a new line character to each canonicalized header in the
     * resulting list. Construct the CanonicalizedHeaders string by
     * concatenating all headers in this list into a single string.
     */
    _getCanonicalizedHeaders(webResource: WebResource): string;
}

export declare class SharedKeyLite {
    storageAccount: string;
    storageAccessKey: string;
    usePathStyleUri: string;
    signer: HmacSha256Sign;

    constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean);

    /**
     * Signs a request with the Authentication header.
     */
    signRequest(webResource: WebResource, callback: ErrorCallback): void;

    /**
     * Retrieves the webresource's canonicalized resource string.
     */
    _getCanonicalizedResource(webResource: WebResource): string;

    /**
     * Constructs the Canonicalized Headers string.
     *
     * To construct the CanonicalizedHeaders portion of the signature string,
     * follow these steps: 1. Retrieve all headers for the resource that begin
     * with x-ms-, including the x-ms-date header. 2. Convert each HTTP header
     * name to lowercase. 3. Sort the headers lexicographically by header name,
     * in ascending order. Each header may appear only once in the
     * string. 4. Unfold the string by replacing any breaking white space with a
     * single space. 5. Trim any white space around the colon in the header. 6.
     * Finally, append a new line character to each canonicalized header in the
     * resulting list. Construct the CanonicalizedHeaders string by
     * concatenating all headers in this list into a single string.
     */
    _getCanonicalizedHeaders(webResource: WebResource): string;
}

export declare class SharedKeyTable {
    storageAccount: string;
    storageAccessKey: string;
    usePathStyleUri: string;
    signer: HmacSha256Sign;

    constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean);

    /**
     * Signs a request with the Authentication header.
     */
    signRequest(webResource: WebResource, callback: ErrorCallback): void;

    /**
     * Retrieves the webresource's canonicalized resource string.
     */
    _getCanonicalizedResource(webResource: WebResource): string;
}

export declare class SharedKeyLiteTable {
    torageAccount: string;
    storageAccessKey: string;
    usePathStyleUri: string;
    signer: HmacSha256Sign;

    constructor(storageAccount: string, storageAccessKey: string, usePathStyleUri: boolean);

    /**
     * Signs a request with the Authentication header.
     */
    signRequest(webResource: WebResource, callback: ErrorCallback): void;

    /**
     * Retrieves the webresource's canonicalized resource string.
     */
    _getCanonicalizedResource(webResource: WebResource): string;
}

export declare module ISO8061Date {
    /**
     * Formats a date into an iso 8061 string.
     */
    export function format(date: Date): string;

    /**
     * Parses an ISO 8061 date string into a date object.
     */
    export function parse(stringDateTime: string): Date;
}

export declare class Logger {
    level: string;
    loggerFunction: (level: string, message: string) => void;

    static LogLevels: {
        EMERGENCY: string;
        ALERT: string;
        CRITICAL: string;
        ERROR: string;
        WARNING: string;
        NOTICE: string;
        INFO: string;
        DEBUG: string;
    };
    static logPriority: string[];

    log(level: string, message: string): void;
    emergency(message: string): void;
    alert(message: string): void;
    critical(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    notice(message: string): void;
    info(message: string): void;
    debug(message: string): void;

    defaultLoggerFunction(level: string, message: string): void;
}

export declare class ConnectionStringParser {
    _value: string;
    _pos: number;
    _state: string;

    constructor(connectionString: string);

    _parse(options: ConnectionStringParseOptions): Dictionary<string>;

    _extractKey(): string;
    _extractString(quote: string): string;
    _extractValue(): string;

    _skipWhitespaces(): void;
    _skipOperator(operator: string): void;

    static parse(connectionString: string): Dictionary<string>;
}

export declare module ServiceSettings {
    export var DEFAULT_PROTOCOL: string;

    export class NoMatchError implements Error {
        name: string;
        message: string;
        constr: any;

        constructor();
        constructor(message: string);
        constructor(message: string, constr: any);
    }

    /**
     * Throws an exception if the connection string format does not match any of the
     * available formats.
     */
    export function noMatchConnectionString(connectionString: string): void;

    /**
     * Throws an exception if the settings dont match any of the available formats.
     */
    export function noMatchSettings(settings: any): void;

    /**
     * Parses the connection string and then validate that the parsed keys belong to
     * the validSettingKeys
     */
    export function parseAndValidateKeys(connectionString: string, validKeys: string[]): string[];

    /**
     * Creates an anonymous function that acts as predicate to perform a validation.
     */
    export function getValidator(requirements: Dictionary<Requirement>, isRequired: boolean, atLeastOne: boolean): ValidatorFunction;

    /**
     * Creates a setting value condition that validates it is one of the passed valid values.
     */
    export function setting(name: string): string[];

    /**
     * Creates an "at least one" predicate for the provided list of requirements.
     */
    export function atLeastOne(...args: any[]): ValidatorFunction;

    /**
     * Creates an optional predicate for the provided list of requirements.
     */
    export function optional(...args: any[]): ValidatorFunction;

    /**
     * Creates an required predicate for the provided list of requirements.
     */
    export function allRequired(...args: any[]): ValidatorFunction;

    /**
     * Creates a setting value condition using the passed predicate.
     */
    export function settingWithFunc(name: string, predicate: Function): Requirement[];

    /**
     * Tests to see if a given list of settings matches a set of filters exactly.
     */
    export function matchedSpecification(settings: Dictionary<any>): boolean;

    /**
     * Tests to see if a given list of settings matches a set of filters exactly.
     */
    export function parseHost(uri: string): url.Url;
}

export declare class StorageServiceSettings {
    _name: string;
    _key: string;
    _blobEndpointUri: string;
    _queueEndpointUri: string;
    _tableEndpointUri: string;
    _usePathStyleUri: boolean;

    constructor(name: string, key: string, blobEndpointUri: string, queueEndpointUri: string, tableEndpointUri: string, usePathStyleUri: boolean);

    /**
     * Returns a StorageServiceSettings with development storage credentials using
     * the specified proxy Uri.
     */
    static _getDevelopmentStorageAccount(): StorageServiceSettings;
    static _getDevelopmentStorageAccount(proxy: string): StorageServiceSettings;

    /**
     * Gets a StorageServiceSettings object that references the development storage
     * account.
     */
    static getDevelopmentStorageAccountSettings(): StorageServiceSettings;

    /**
     * Gets the default service endpoint using the specified protocol and account
     * name.
     */
    static _getDefaultServiceEndpoint(settings: Dictionary<string>, dns: string): string;

    /**
     * Creates StorageServiceSettings object given endpoints uri.
     */
    static _createStorageServiceSettings(settings: Dictionary<string>, blobEndpointUri: string, queueEndpointUri: string, tableEndpointUri: string): StorageServiceSettings;

    /**
     * Creates a ServiceBusSettings object from a set of settings.
     */
    static createFromSettings(settings: Dictionary<string>): StorageServiceSettings;

    /**
     * Creates a StorageServiceSettings object from the given connection string.
     */
    static createFromConnectionString(connectionString: string): StorageServiceSettings;

    static createExplicitlyOrFromEnvironment(storageAccount: string, storageAccessKey: string, host: string): StorageServiceSettings;

    static isDevelopmentStorage(storageAccount: string, storageAccessKey: string, parsedHost: string): boolean;

    static createFromConfig(config: any): StorageServiceSettings;

    static customizeConfig(config: any): void;
}

export declare class ServiceBusSettings {

}

export declare class ServiceManagementSettinsg {

}

export declare module Validate {
    /**
     * Checks if the given uri is valid or not.
     */
    export function isValidUri(uri: string): boolean;

    /**
     * Validates that a clusterCreationObject is properly formed.
     */
    export function isValidHDInsightCreationObject(clusterCreationObject: ClusterCreationOptions): void;
    export function isValidHDInsightCreationObject(clusterCreationObject: ClusterCreationOptions, callback: ErrorCallback): void;

    export function isValidUuid(uuid: string): void;
    export function isValidUuid(uuid: string, callback: ErrorCallback): void;

    /**
     * Creates a anonymous function that check if a given key is base 64 encoded.
     */
    export function isBase64Encoded(key: string): boolean;

    /**
     * Validates a function.
     */
    export function isValidFunction(functionObject: any, functionName: string): void;

    /**
     * Validates that a Service Bus namespace name
     * is legally allowable. Does not check availability.
     */
    export function namespaceNameIsValid(name: string): boolean;
    export function namespaceNameIsValid(name: string, callback: ErrorCallback): boolean;

    /**
     * Validates a container name.
     */
    export function containerNameIsValid(containerName: string): boolean;
    export function containerNameIsValid(containerName: string, callback: ErrorCallback): boolean;

    /**
     * Validates a blob name.
     */
    export function blobNameIsValid(containerName: string, blob: string): boolean;
    export function blobNameIsValid(containerName: string, blob: string, callback: ErrorCallback): boolean;

    /**
     * Validates a table name.
     */
    export function tableNameIsValid(tableName: string): boolean;
    export function tableNameIsValid(tableName: string, callback: ErrorCallback): boolean;

    /**
     * Validates a queue name.
     */
    export function queueNameIsValid(queueName: string): boolean;
    export function queueNameIsValid(queueName: string, callback: ErrorCallback): boolean;

    export function pageRangesAreValid(rangeStart: number, rangeEnd: number, writeBlockSizeInBytes: number): boolean;
    export function pageRangesAreValid(rangeStart: number, rangeEnd: number, writeBlockSizeInBytes: number, callback: ErrorCallback): boolean;

    export function validateArgs(functionName: string, validationRules: Function): boolean;
}

export declare module date {
    /**
     * Generates a Date object which is in the given days from now.
     */
    export function daysFromNow(days: number): Date;

    /**
     * Generates a Date object which is in the given hours from now.
     */
    export function hoursFromNow(hours: number): Date;

    /**
     * Generates a Date object which is in the given minutes from now.
     */
    export function minutesFromNow(minutes: number): Date;

    /**
     * Generates a Date object which is in the given seconds from now.
     */
    export function secondsFromNow(seconds: number): Date;
}
//#endregion

//#region Non-explicit, undeclared interfaces
export interface WebResponse {
    isSuccessful: boolean;
    statusCode: number;
    body: {
        entry: {
            id: string;
            title: any;
            updated: string;
            author: {
                name: any;
            };
            link: any;
            category: any;
            content: any;
        };
    };
    headers: any;
    md5: any;
}

//#region Common Interfaces
export interface SimpleCallback<T> {
    (error: Error, result: T): void;
}
export interface ErrorCallback {
    (error: Error): void;
}
export interface StorageCallbackVoid {
    (err: Error, response: WebResponse): void;
}
export interface StorageCallback<T> {
    (err: Error, result: T, response: WebResponse): void;
}
export interface StorageServiceStatsCallback extends StorageCallback<StorageServiceStats> { }
export interface StorageServicePropertiesCallback extends StorageCallback<StorageServiceProperties> { }

export interface TimeoutIntervalOptions {
    locationMode?: string;
    timeoutIntervalInMs?: number;
    maximumExecutionTimeInMs?: number;
}
export interface MetadataOptions extends TimeoutIntervalOptions {
    metadata?: StorageMetadata;
}
export interface StorageAclOptions extends TimeoutIntervalOptions {
    leaseId?: string;
    signedIdentifiers: SignedIdentifier[]
}

export interface Dictionary<T> {
    [key: string]: T;
}
export interface StorageServiceProperties {
    Logging: {
        Version: number;
        Delete: boolean;
        Read: boolean;
        Write: boolean;
        RetentionPolicy: {
            Enabled: boolean;
            Days: number;
        };
    };
    Metrics: {
        Version: number;
        Enabled: boolean;
        IncludeAPIs: boolean;
        RetentionPolicy: {
            Enabled: boolean;
            Days: number;
        };
    };
    DefaultServiceVersion: string;
}
export interface StorageServiceStats {
    GeoReplication: {
        Status: string;
        LastSyncTime: Date;
    }
}
export interface SignedIdentifier {
    Id: string;
    AccessPolicy: SharedAccessPolicy;
}
export interface StorageMetadata {
    [key: string]: string;
}
export interface ContinuationToken {
    nextMarker: string;
    targetLocation: string;
}
export interface SharedAccessPolicy {
    Id?: string;
    AccessPolicy: {
        Start?: Date;
        Expiry: Date;
        Permission?: string;
    }
}
//#endregion
//#region TableService Interfaces
export interface TableRequestCallback {
    (error: Error, tableResult: { TableName: string; }, response: WebResponse): void;
}

export interface CreateTableIfNotExistsCallback {
    (error: Error, created: boolean, response: WebResponse): void;
}

export interface DeleteTableCallback {
    (error: Error, successful: boolean, response: WebResponse): void;
}

export interface QueryTablesCallback {
    (error: Error, queryTablesResult: TableResult[], resultsContinuation: QueryResultContinuation, response: WebResponse): void;
}

export interface QueryResultContinuation {
    tableService: TableService;
}

export interface QueryTablesOptions extends TimeoutIntervalOptions {
    nextTableName?: string;
}

export interface TableResult {
    TableName: string;
}

export interface QueryEntityCallback {
    (error: Error, entity: Entity, response: WebResponse): void;
}

export interface QueryEntitiesCallback {
    (error: Error, entities: Entity[], resultContinuation: QueryEntitiesResultContinuation, response: WebResponse): void;
}

export interface QueryEntitiesResultContinuation extends QueryResultContinuation {
    tableQuery: TableQuery;
    nextPartitionKey: string;
    nextRowKey: string;
    getNextPage(callback?: QueryEntitiesCallback): void;
    hasNextPage(): boolean;
}

export interface ModifyEntityCallback {
    (error: Error, entity: Entity, response: WebResponse): void;
}

export interface DeleteEntityCallback {
    (error: Error, successful: boolean, response: WebResponse): void;
}

export interface UpdateEntityOptions extends TimeoutIntervalOptions {
    checkEtag?: boolean;
}

export interface Entity {
    PartitionKey: string;
    RowKey: string;
    Timestamp?: Date;
    etag?: string;
    [property: string]: string | number | boolean | Date | undefined;
}
//#endregion
//#region BlobService Interfaces
export interface LeaseIdOptions extends TimeoutIntervalOptions {
    leaseId?: string;
}
export interface AccessConditionsOptions extends TimeoutIntervalOptions {
    accessConditions?: StorageAccessCondition;
}
export interface LeaseAccessConditionsOptions extends LeaseIdOptions {
    accessConditions?: StorageAccessCondition;
}

export interface ListContainersOptions extends TimeoutIntervalOptions {
    prefix?: string;
    maxresults?: number;
    marker: string;
    include?: string;
}
export interface ListContainersCallback {
    (err: Error, containers: ContainerResult[], continuationToken: ContinuationToken, response: WebResponse): void;
}
export interface CreateContainerOptions extends TimeoutIntervalOptions {
    metadata?: StorageMetadata;
    publicAccessLevel?: string;
}
export interface GetContainerPropertiesOptions extends TimeoutIntervalOptions {
    leaseId?: string;
}
export interface GetContainerMetadataOptions extends GetContainerPropertiesOptions {
    accessConditions?: StorageAccessCondition;
}

export interface ListBlobsOptions extends ListContainersOptions {
    prefix?: string;
    delimiter?: string;
}
export interface ListBlobsCallback {
    (err: Error, blobs: BlobResult[], continuationToken: ContinuationToken, response: WebResponse): void;
}
export interface GetBlobPropertiesOptions extends LeaseAccessConditionsOptions {
    snapshotId?: string;
}
export interface SetBlobPropertiesOptions extends LeaseAccessConditionsOptions {
    contentType?: string;
    contentEncoding?: string;
    contentLanguage?: string;
    contentMD5?: string;
    cacheControl?: string;
    contentDisposition?: string;
}
export interface ReadBlobOptions extends GetBlobPropertiesOptions {
    rangeStart?: string;
    rangeEnd?: string;
    useTransactionalMD5?: boolean;
    disableContentMD5Validation?: boolean;
}
export interface GetBlobToTextCallback {
    (err: Error, text: string, result: BlobResult, response: WebResponse): void;
}
export interface DeleteBlobOptions extends GetBlobPropertiesOptions {
    deleteSnapshots?: string;
}
export interface BlobSnapshotOptions extends GetBlobPropertiesOptions {
    metadata?: StorageMetadata;
}
export interface CopyBlobOptions extends BlobSnapshotOptions {
    sourceLeaseId?: string;
    sourceAccessConditions: StorageAccessCondition;
}

export interface UploadBlobOptions extends SetBlobPropertiesOptions {
    metadata?: StorageMetadata;
    speedSummary?: SpeedSummary;
    parallelOperationThreadCount?: number;
    storeBlobContentMD5?: boolean;
    useTransactionalMD5?: boolean;
}
export interface CreatePagesOptions extends LeaseAccessConditionsOptions {
    contentMD5?: string;
    useTransactionalMD5?: boolean;
}
export interface PageRangeOptions extends LeaseIdOptions {
    snapshotId?: string;
    rangeStart?: number;
    rangeEnd?: number;
}

export interface UploadBlockBlobOptions extends UploadBlobOptions {
    blockIdPrefix?: string;
}
export interface CreateBlockOptions extends LeaseAccessConditionsOptions {
    contentMD5?: string;
    useTransactionalMD5?: boolean;
}

export interface LeaseOptions extends AccessConditionsOptions {
    leaseDuration?: string;
    proposedLeaseId?: string;
}
export interface BreakLeaseOptions extends AccessConditionsOptions {
    leaseBreakPeriod?: number;
}

export interface SharedAccessSignatureResult {
    baseUrl: string;
    path: string;
    queryString: {
        se: string;
        sp: string;
        sr: string;
        sv: string;
        sig: string;
    };
    url: () => string;
}
export interface BlobHeaders {
    cacheControl?: string;
    contentType?: string;
    contentEncoding?: string;
    contentLanguage?: string;
    contentDisposition?: string;
}
export interface PageRange {
    start: number;
    end: number;
}
export interface BlockList {
    LatestBlocks: string[];
    CommittedBlocks: string[];
    UncommittedBlocks: string[];
}
export interface StorageAccessCondition {
    "If-Modified-Since": Date;
    "If-Unmodified-Since": Date;
    "If-Match": string;
    "If-None-Match": string;
}
//#endregion
//#region QueueService Interfaces
export interface ListQueuesOptions extends TimeoutIntervalOptions {
    prefix?: string;
    maxresults?: number;
    marker: string;
    include?: string;
}
export interface ListQueuesCallback {
    (err: Error, queues: QueueResult[], continuationToken: ContinuationToken, response: WebResponse): void;
}

export interface CreateQueueMessageOptions extends TimeoutIntervalOptions {
    messagettl?: number;
    visibilitytimeout?: number;
}
export interface PeekQueueMessagesOptions extends TimeoutIntervalOptions {
    numofmessages?: number;
}
export interface GetQueueMessagesOptions extends PeekQueueMessagesOptions {
    peekonly?: boolean;
    visibilitytimeout?: number;
}
export interface UpdateQueueMessagesOptions extends TimeoutIntervalOptions {
    messagetext?: string;
}
//#endregion

//#region RoleEnvironment Interfaces
export interface Role {
    name: string;
    instances: {
        [instanceId: string]: RoleInstance;
    };
}
export interface RoleInstance {
    id: string;
    faultDomain: string;
    updateDomain: string;
    endpoints: {
        [endpoint: string]: RoleInstanceEndpoint
    };
}
export interface RoleInstanceEndpoint {
    protocol: string;
    address: string;
    port: number;
}
export interface RoleLocalResource {
    name: string;
    path: string;
    maximumSizeInMegabytes: number;
}
//#endregion
//#region ConnectionStringParser Interfaces
export interface ConnectionStringParseOptions {
    skipLowerCase: boolean;
}
//#endregion
//#region Validate Interfaces
export interface ClusterCreationOptions {
    name: string;
    location: string;
    defaultStorageAccountName: string;
    defaultStorageAccountKey: string;
    defaultStorageContainer: string;
    user: string;
    password: string;
    nodes: number;
    additionalStorageAccounts?: {
        name: string;
        key: string;
    }[];
    oozieMetastore?: {
        server: string;
        database: string;
        user: string;
        password: string;
    };
    hiveMetastore?: {
        server: string;
        database: string;
        user: string;
        password: string;
    };
}
//#endregion
//#region ServiceSettings Interfaces
export interface Requirement {
    SettingName: string;
    SettingPredicate: Function;
}
export interface ValidatorFunction {
    (userSettings: Dictionary<any>): any;
}
//#endregion
//#endregion

//#region Un-exported internal classes
declare class StorageServiceClient extends ServiceClient {
    static incorrectStorageAccountErr: string;
    static incorrectStorageAccessKeyErr: string;
    static getStorageSettings(connectionString: string): StorageServiceSettings;
    static getStorageSettings(storageAccount?: string, storageAccessKey?: string, host?: string): StorageServiceSettings;

    apiVersion: string;
    usePathStyleUri: string;

    constructor(storageAccount: string, storageAccessKey: string, host: string, usePathStyleUri: boolean, authenticationProvider: any);
}
//#endregion

export declare function isEmulated(): boolean;
