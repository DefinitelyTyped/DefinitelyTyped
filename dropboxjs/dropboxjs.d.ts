// Type definitions for dropbox-js
// Project: https://github.com/dropbox/dropbox-js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Dropbox {
    export interface DropboxConfig {
        key: string;
        secret?: string;
    }

    export interface AccountInfoData {
        name: string;
        email: string;
        countryCode: string;
        uid: string;
        referralUrl: string;
        publicAppUrl: string;
        quota: number;
        usedQuota: number;
        privateBytes: number;
        sharedBytes: number;
    }

    export interface AccountInfo extends AccountInfoData {
        parse(accountInfo: string): AccountInfo;
        json(): AccountInfoData;
    }

    export interface ApiError {
        INVALID_TOKEN: number;
        NOT_FOUND: number;
        OVER_QUOTA: number;
        RATE_LIMITED: number;
        NETWORK_ERROR: number;
        INVALID_PARAM: number;
        OAUTH_ERROR: number;
        INVALID_METHOD: number;
    }

    export interface FileStatisticsData {
        path: string;
        name: string;
        inAppFolder: boolean;
        isFolder: boolean;
        isFile: boolean;
        isRemoved: boolean;
        typeIcon: string;
        versionTag: string;
        contentHash: string;
        mimeType: string;
        size: number;
        humanSize: string;
        hasThumbnail: boolean;
        modifiedAt: Date;
        clientModifiedAt: Date;
    }

    export interface FileStatistics extends FileStatisticsData {
        parse(stats: string): FileStatistics;
        json(): FileStatisticsData;
    }

    export interface ClientOnError {
        addListener(callback: (error: number) => any): void;
    }

    export interface Client {
        new (config: DropboxConfig): Client;
        authDriver(authDriver: any): Client;
        authenticate(callback: (error: number, client: Client) => any): Client;
        credentials(): string;
        dropboxUid(): string;
        isAuthenticated(): boolean;
        onError: ClientOnError;
        getAccountInfo(callback: (error: number, accountInfo: AccountInfo) => any): XMLHttpRequest;
        getUserInfo(callback: (error: number, accountInfo: AccountInfo) => any): XMLHttpRequest;
        signOut(options: {}, callback: (error: number) => any): XMLHttpRequest;
        signOff(options: {}, callback: (error: number) => any): XMLHttpRequest;
        writeFile(fileName: string, contents: string, options: {}, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        writeFile(fileName: string, contents: string, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        readFile(fileName: string, options: {}, callback: (error: number, contents: string, stats: FileStatistics) => any): XMLHttpRequest;
        readFile(fileName: string, callback: (error: number, contents: string, stats: FileStatistics) => any): XMLHttpRequest;
        stat(path: string, options: {}, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        stat(path: string, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        metadata(path: string, options: {}, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        metadata(path: string, callback: (error: number, stats: FileStatistics) => any): XMLHttpRequest;
        readdir(path: string, options: {}, callback: (error: number, entries: any[]) => any): XMLHttpRequest;
        readdir(path: string, callback: (error: number, entries: any[]) => any): XMLHttpRequest;
    }

    export module AuthDriver {
        export interface NodeServer {
            new (port: number): any;
        }

        export var NodeServer: NodeServer;
    }

    export var Client: Client;
}
