// Type definitions for Azure SDK for Node - v0.6.10
// Project: https://github.com/WindowsAzure/azure-sdk-for-node
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar>, Anti Veeranna <https://github.com/antiveeranna>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

/**
* TODO
*/
declare module "azure" {
    import events = require("events");

    //#region Services
    export class TableService extends BatchServiceClient {
        static incorrectTableNameErr: string;
        static incorrectCallbackErr: string;
        static incorrectTableQuery: string;
        static incorrectPartitionErr: string;

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

        getServiceProperties(callback?: (error: any, servicePropertiesResult: any, response: any) => void ): void;
        getServiceProperties(options: TimeoutIntervalOptions, callback?: (error: any, servicePropertiesResult: any, response: any) => void ): void;

        setServiceProperties(serviceProperties: any, options: TimeoutIntervalOptions, callback?: Function): void;

        getTable(table: string, callback?: TableRequestCallback ): void;
        getTable(table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback ): void;

        createTable(table: string, callback?: TableRequestCallback ): void;
        createTable(table: string, options: TimeoutIntervalOptions, callback?: TableRequestCallback ): void;

        createTableIfNotExists(table: string, callback?: CreateTableIfNotExistsCallback ): void;
        createTableIfNotExists(table: string, options: TimeoutIntervalOptions, callback?: CreateTableIfNotExistsCallback): void;

        deleteTable(table: string, callback?: DeleteTableCallback ): void;
        deleteTable(table: string, options: TimeoutIntervalOptions, callback?: DeleteTableCallback ): void;

        queryTables(callback?: QueryTablesCallback ): void;
        queryTables(options: QueryTablesOptions, callback?: QueryTablesCallback ): void;

        queryEntity(table: string, partitionKey: string, rowKey: string, callback?: QueryEntityCallback ): void;
        queryEntity(table: string, partitionKey: string, rowKey: string, options: TimeoutIntervalOptions, callback?: QueryEntityCallback ): void;
        
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
    }

    export class BlobService {

    }

    export class QueueService {

    }

    export class ServiceBusService {

    }

    export class SqlService {

    }

    export class ServiceManagementService {

    }

    export class SqlManagementService {
    }
    //#endregion
    //#region Service Creators
    export function createTableService(): TableService;
    export function createTableService(connectionString: string): TableService;
    export function createTableService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): TableService;

    export function createBlobService(): BlobService;
    export function createBlobService(connectionString: string): BlobService;
    export function createBlobService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): BlobService;

    export function createQueueService(): QueueService;
    export function createQueueService(connectionString: string): QueueService;
    export function createQueueService(storageAccount: string, storageAccessKey: string, host?: string, authenticationProvider?: string): QueueService;

    export function createServiceBusService(): ServiceBusService;
    export function createServiceBusService(connectionString: string): ServiceBusService;
    export function createServiceBusService(namespace: string, accessKey?: string, issuer?: string, acsNamespace?: string, host?: string, authenticationProvider?: string): ServiceBusService;

    export function createSqlService(serverName: string, administratorLogin: string, administratorLoginPassword: string, host?: string, acsHost?: string, authenticationProvider?: string): SqlService;

    export function createServiceManagementService(subscriptionId: string, authentication: string, hostOptions: string): ServiceManagementService;

    export function createSqlManagementService(subscriptionId: string, authentication: string, hostOptions: string): SqlManagementService;
    //#endregion

    interface RoleEnvironmentInterface extends events.EventEmitter {
        getCurrentRoleInstance(callback: (error: any, instance: any) => void): void;
        getDeploymentId(callback: (error: any, id:string) => void): void;
        isAvailable(callback: (error: any, available: boolean) => void): void;
        isEmulated(callback: (error: any, emulated: boolean) => void): void;
        getRoles(callback: (error: any, roles: any) => void): void;
        getConfigurationSettings(callback: (error: any, settings: any) => void): void;
        getLocalResources(callback: (error: any, resources: any) => void): void;
        requestRecycle(callback: (error: any) => void): void;
        setStatus(roleInstanceStatus: any, expirationUtc: any, callback: (error: any) => void): void;
        clearStatus(callback: (error: any) => void): void;
    }

    export var RoleEnvironment: RoleEnvironmentInterface;
    

    //#region Export of internal classes
    export class WebResource {

    }

    export class ServiceClient extends events.EventEmitter {
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
        withFilter(newFilter: { handle: (requestOptions: any, next: Function) => void; }): ServiceClient;
        parseMetadataHeaders(headers: any): any;
        isEmulated(): boolean;
        setProxy(proxyUrl: string, proxyPort: number): void;
    }

    export class ServiceManagementClient {

    }

    export class TableQuery {
        static select(...fields: string[]): TableQuery;
        from(table: string): TableQuery;
        whereKeys(partitionKey: string, rowKey: string): TableQuery;
        whereNextKeys(partitionKey: string, rowKey: string): TableQuery;
        where(condition: string, ...values: string[]): TableQuery;
        and(condition: string, ...arguments: string[]): TableQuery;
        or(condition: string, ...arguments: string[]): TableQuery;
        top(integer: number): TableQuery;
        toQueryObject(): any;
        toPath(): string;
    }

    export class BatchServiceClient extends StorageServiceClient {
        operations: any[];

        constructor(storageAccount: string, storageAccessKey: string, host: string, usePathstyleUri: boolean, authenticationProvider: any);
        beginBatch(): void;
        isInBatch(): boolean;
        rollback(): void;
        hasOperations(): boolean;
        addOperation(webResource: WebResource, outputData: any): void;
        commitBatch(callback: (error: any, operationResponses: any[], response: any) => void ): void;
        commitBatch(options: any, callback: (error: any, operationResponses: any[], response: any) => void ): void;
        processResponse(responseObject: any, requestOperations: any[]): any[];
        processOperation(webResource: WebResource, rawResponse: string): any;
    }

    export module Constants {

    }

    export class LinearRetryPolicyFilter {
        constructor(retryCount?: number, retryInterval?: number);
        retryCount: number;
        retryInterval: number;
    }

    export class ExponentialRetryPolicyFilter {
        constructor(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number);
        retryCount: number;
        retryInterval: number;
        minRetryInterval: number;
        maxRetryInterval: number;
    }

    export class SharedAccessSignature {

    }

    export class SharedKey {

    }

    export class SharedKeyLite {

    }

    export class SharedKeyTable {

    }

    export class SharedKeyLiteTable {

    }

    export module ISO8061Date {

    }

    export class Logger {

    }

    export class ConnectionStringParser {

    }

    export module ServiceSettings {

    }

    export class StorageServiceSettings {

    }

    export class ServiceBusSettings {

    }

    export class ServiceManagementSettinsg {

    }

    export module Validate {

    }

    export module date {

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

    export interface TimeoutIntervalOptions {
        timeoutIntervalInMs?: number;
    }

    ///#region TableService Callbacks
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
    }
    //#endregion
    //#endregion

    //#region Un-exported internal classes
    class StorageServiceClient extends ServiceClient {
        static incorrectStorageAccountErr: string;
        static incorrectStorageAccessKeyErr: string;
        static getStorageSettings(connectionString: string) : StorageServiceSettings;
        static getStorageSettings(storageAccount?: string, storageAccessKey?: string, host?: string): StorageServiceSettings;

        apiVersion: string;
        usePathStyleUri: string;

        constructor(storageAccount: string, storageAccessKey: string, host: string, usePathStyleUri: boolean, authenticationProvider: any);
    }
    //#endregion

    export function isEmulated(): boolean;

}
