// Type definitions for Azure SDK for Node - v0.6.10
// Project: https://github.com/WindowsAzure/azure-sdk-for-node
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

/**
* TODO
*/
declare module "azure" {
    import events = module("events");

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

        getServiceProperties(callback?: (error, servicePropertiesResult, response) => void ): void;
        getServiceProperties(options: TimeoutIntervalOptions, callback?: (error, servicePropertiesResult, response) => void ): void;

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
    
    export module RoleEnvironment {

    }

    //#region Export of internal classes
    export class WebResource {

    }

    export class ServiceClient extends events.EventEmitter {
        static EnvironmentVariables;
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

        constructor(host: string, authenticationProvider);

        setHost(host: string): void;
        performRequest(webResource: WebResource, outputData: string, options, callback: Function): void;
        performRequestOutputStream(webResource: WebResource, outputStream, options, callback: Function): void;
        performRequestInputStream(webResource: WebResource, outputData: string, inputStream, options, callback: Function): void;
        withFilter(newFilter: { handle: (requestOptions, next: Function) => void; }): ServiceClient;
        parseMetadataHeaders(headers): any;
        isEmulated(): bool;
        setProxy(proxyUrl: string, proxyPort: number): void;
    }

    export class ServiceManagementClient {

    }

    export class TableQuery {

    }

    export class BatchServiceClient extends StorageServiceClient {
        operations: any[];

        constructor(storageAccount: string, storageAccessKey: string, host: string, usePathstyleUri: bool, authenticationProvider);
        beginBatch(): void;
        isInBatch(): bool;
        rollback(): void;
        hasOperations(): bool;
        addOperation(webResource: WebResource, outputData): void;
        commitBatch(callback: (error, operationResponses: any[], response) => void ): void;
        commitBatch(options, callback: (error, operationResponses: any[], response) => void ): void;
        processResponse(responseObject, requestOperations: any[]): any[];
        processOperation(webResource: WebResource, rawResponse: string): any;
    }

    export module Constants {

    }

    export class LinearRetryPolicyFilter {

    }

    export class ExponentialRetryPolicyFilter {

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
        isSuccessful: bool;
        statusCode: number;
        body: { entry: { id: string; title; updated: string; author: { name; }; link; category; content; }; };
        headers;
        md5;
    }

    export interface TimeoutIntervalOptions {
        timeoutIntervalInMs?: number;
    }

    ///#region TableService Callbacks
    export interface TableRequestCallback {
        (error: Error, tableResult: { TableName: string; }, response: WebResponse): void;
    }

    export interface CreateTableIfNotExistsCallback {
        (error: Error, created: bool, response: WebResponse): void;
    }

    export interface DeleteTableCallback {
        (error: Error, successful: bool, response: WebResponse): void;
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
    }

    export interface ModifyEntityCallback {
        (error: Error, entity: Entity, response: WebResponse): void;
    }

    export interface DeleteEntityCallback {
        (error: Error, successful: bool, response: WebResponse): void;
    }

    export interface UpdateEntityOptions extends TimeoutIntervalOptions {
        checkEtag?: bool;
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
        static getStorageSettings(connectionString: string);
        static getStorageSettings(storageAccount?: string, storageAccessKey?: string, host?: string): StorageServiceSettings;

        apiVersion: string;
        usePathStyleUri: string;

        constructor(storageAccount: string, storageAccessKey: string, host: string, usePathStyleUri: bool, authenticationProvider);
    }
    //#endregion

    export function isEmulated(): bool;
}