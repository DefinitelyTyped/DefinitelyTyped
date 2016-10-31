// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {
    export enum RequestExecutorErrors {
        requestAbortedOrTimedout,
        unexpectedResponse,
        httpError,
        noAppWeb,
        domainDoesNotMatch,
        noTrustedOrigins,
        iFrameLoadError
    }

    export class RequestExecutor {
        constructor(url: string, options?: any);
        get_formDigestHandlingEnabled(): boolean;
        set_formDigestHandlingEnabled(value: boolean): void;
        get_iFrameSourceUrl(): string;
        set_iFrameSourceUrl(value: string): void;
        executeAsync(requestInfo: RequestInfo): void;
        attemptLogin(returnUrl: string, success: (response: ResponseInfo) => void, error?: (response: ResponseInfo, error: RequestExecutorErrors, statusText: string) => void): void;
    }

    export interface RequestInfo {
        url: string;
        method?: string;
        headers?: { [key: string]: string; };
        /** Can be string or bytearray depending on binaryStringRequestBody field */
        body?: string | Uint8Array;
        binaryStringRequestBody?: boolean;

        /** Currently need fix to get ginary response. Details: http://techmikael.blogspot.ru/2013/07/how-to-copy-files-between-sites-using.html */
        binaryStringResponseBody?: boolean;
        timeout?: number;
        success?: (response: ResponseInfo) => void;
        error?: (response: ResponseInfo, error: RequestExecutorErrors, statusText: string) => void;
        state?: any;
    }

    export interface ResponseInfo {
        statusCode?: number;
        statusText?: string;
        responseAvailable: boolean;
        allResponseHeaders?: string;
        headers?: { [key: string]: string; };
        contentType?: string;
        /** Can be string or bytearray depending on request.binaryStringResponseBody field */
        body?: string | Uint8Array;
        state?: any;
    }

    export class ProxyWebRequestExecutor extends Sys.Net.WebRequestExecutor {
        constructor(url: string, options?: any);
    }

    export class ProxyWebRequestExecutorFactory implements SP.IWebRequestExecutorFactory {
        constructor(url: string, options?: any);
        createWebRequestExecutor(): ProxyWebRequestExecutor;
    }
}