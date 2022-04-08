// Type definitions for jQuery Mockjax 2.3.0
// Project: https://github.com/jakerella/jquery-mockjax
// Definitions by: 
//                 Laszlo Jakab <https://github.com/laszlojakab>, 
//                 Vladimir Đokić <https://github.com/vladeck>,
//                 James Johnson <https://github.com/hasaki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

type MockJaxLoggingFunction = (message?: any, ...additionalParameters: any[]) => void;

interface MockJaxStandardLogger {
    error?: MockJaxLoggingFunction;
    warn?: MockJaxLoggingFunction;
    info?: MockJaxLoggingFunction;
    log?: MockJaxLoggingFunction;
    debug?: MockJaxLoggingFunction;
}

interface MockJaxCustomLogger {
    [key: string]: MockJaxLoggingFunction;
}

interface MockJaxSettingsHeaders {
    [key: string]: string;
}

interface MockJaxSettings {
    url?: string | RegExp;
    urlParams?: string[];
    data?: any;
    type?: string;
    headers?: MockJaxSettingsHeaders;
    logging?: boolean | number;
    status?: number;
    statusText?: string;
    responseTime?: number;
    isTimeout?: boolean;
    dataType?: string;
    contentType?: string;
    response?: (settings: any, done?: Function) => void;
    responseText?: string | Object;
    responseXml?: string;
    proxy?: string;
    proxyType?: string;
    lastModified?: string;
    etag?: string;
    onAfterSuccess?: Function;
    onAfterError?: Function;
    onAfterComplete?: Function;
    logger?: MockJaxStandardLogger | MockJaxCustomLogger;
    logLevelMethods?: string[];
    namespace?: string;
    throwUnmocked?: boolean;
    retainAjaxCalls?: boolean;
}

interface MockJaxStatic {
    (options: MockJaxSettings): number;
    (options: MockJaxSettings[]): number[];
    handler(id?: number): any;
    clear(id?: number): void;
    mockedAjaxCalls(): any[];
    unfiredHandlers(): any[];
    unmockedAjaxCalls(): any[];
    clearRetainedAjaxCalls(): void;
}

interface JQueryStatic {
    mockjax: MockJaxStatic;
    mockjaxSettings: MockJaxSettings;
}
