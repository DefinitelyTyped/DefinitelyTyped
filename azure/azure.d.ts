// Type definitions for Azure SDK for Node - v0.6.10
// Project: https://github.com/WindowsAzure/azure-sdk-for-node
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

import events = module("events");

/**
* TODO
*/
declare module "azure" {
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

        public getServiceProperties(callback: (error, servicePropertiesResult, response) => void ): void;
        public getServiceProperties(options, callback: (error, servicePropertiesResult, response) => void ): void;
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

    //#region Un-exported internal classes
    class StorageServiceClient extends ServiceClient {
        static incorrectStorageAccountErr: string;
        static incorrectStorageAccessKeyErr: string;
        static getStorageSettings(connectionString: string);
        static getStorageSettings(storageAccount?: string, storageAccessKey?: string, host?: string): StorageServiceSettings;
        private static _getStorageSettingsExplicitOrEnvironment(storageAccount?: string, storageAccessKey?: string, host?: string): StorageServiceSettings;

        apiVersion: string;
        usePathStyleUri: string;

        constructor(storageAccount: string, storageAccessKey: string, host: string, usePathStyleUri: bool, authenticationProvider);

        private _buildRequestOptions(webResource: WebResource, options, callback: (error, requestOptions) => void );
        private _getPath(path: string): string;
        private _setAccountCredentials(storageAccount: string, storageAccessKey: string): void;
    }
    //#endregion

    export function isEmulated(): bool;
}