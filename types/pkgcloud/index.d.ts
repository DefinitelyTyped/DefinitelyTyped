// Type definitions for pkgcloud 1.7
// Project: https://github.com/pkgcloud/pkgcloud#readme
// Definitions by: Daniel Friesen <https://github.com/dantman>
//                 Adam Smith <https://github.com/ScriptSmith>
//                 Cornelis Heuperman <https://github.com/heuperman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

export const version: string;

export interface ClientError extends Error {
    provider?: Providers;
    method?: string;
    failCode?: string;
    statusCode?: number;
    href?: string;
    headers?: { [headerName: string]: string };
    result?: any;
}

export type Providers =
    | 'amazon'
    | 'azure'
    | 'digitalocean'
    | 'google'
    | 'hp'
    | 'iriscouch'
    | 'joyent'
    | 'mongohq'
    | 'mongolab'
    | 'oneandone'
    | 'openstack'
    | 'rackspace'
    | 'redistogo'
    | 'telefonic';

export interface BaseProviderOptions {
    provider: Providers;
}

export interface AmazonProviderOptions {
    provider: 'amazon';
    keyId: string;
    key: string;
    region?: string;
}

export interface AzureProviderOptions {
    provider: 'azure';
    storageAccount: string;
    storageAccessKey: string;
    location?: string;
}

export interface GoogleProviderOptions {
    provider: 'google';
    keyFilename: string;
    projectId: string;
}

export interface OpenstackProviderOptions {
    provider: 'openstack';
    username: string;
    password: string;
    authUrl: string;
    region?: string;
    tenantId?: string;
    version?: string;
    keystoneAuthVersion?: string;
    domainId?: string;
    domainName?: string;
}

export type RackspaceRegions =
    | 'DFW' // Dallas/Fort Worth, United States
    | 'ORD' // Chicago, United States
    | 'IAD' // Northern Virginia, United States
    | 'LON' // London, United Kingdom
    | 'HKG' // Hong Kong, China
    | 'SYD'; // Sydney, Australia

export interface RackspaceProviderOptions {
    provider: 'rackspace';
    username: string;
    apiKey: string;
    region: RackspaceRegions;
    useInternal?: boolean;
}

export type ProviderOptions = BaseProviderOptions & Partial<
    | AmazonProviderOptions
    | AzureProviderOptions
    | GoogleProviderOptions
    | OpenstackProviderOptions
    | RackspaceProviderOptions
>;

/**
 * Storage
 */

export namespace storage {
    interface StorageUploadOptions {
        container: string;
        remote: string;
    }

    interface StorageDownloadOptions {
        container: string;
        remote: string;
    }

    interface Client {
        provider: string;
        config: ProviderOptions;
        protocol: string;

        getContainers(
            callback: (err: ClientError, containers: Container[]) => any,
        ): void;
        createContainer(
            options: any,
            callback: (err: ClientError, container: Container) => any,
        ): void;
        destroyContainer(
            containerName: string,
            callback: (err: ClientError) => any,
        ): void;
        getContainer(
            containerName: string,
            callback: (err: ClientError, container: Container) => any,
        ): void;
        upload(options: StorageUploadOptions): NodeJS.WriteStream;
        download(options: StorageDownloadOptions): NodeJS.ReadStream;
        getFiles(
            containerName: string,
            callback: (err: ClientError, files: File[]) => any,
        ): void;
        getFile(
            containerName: string,
            file: string,
            callback: (err: ClientError, file: File) => any,
        ): void;
        removeFile(
            containerName: string,
            file: string,
            callback: (err: ClientError) => any,
        ): void;
        // Logs
        on(
            eventName: string,
            callback: (message: string, object?: any) => any,
        ): void;
    }

    interface Container {
        // files: ?
        client: Client;
    }

    interface File {
        container: string;
        name: string;
        size: number;
        client: Client;
    }

    function createClient(options: ProviderOptions): Client;
}
