// Type definitions for Azure SDK for Node - v0.6.10
// Project: https://github.com/WindowsAzure/azure-sdk-for-node
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
* TODO
*/
declare module "azure" {
    //#region Services
    export class TableService extends ServiceClient {
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

    //#region Helpers
    export class WebResource {

    }

    export class ServiceClient {

    }

    export class ServiceManagementClient {

    }

    export class TableQuery {

    }

    export class BatchServiceClient {

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

    export function isEmulated(): bool;
}