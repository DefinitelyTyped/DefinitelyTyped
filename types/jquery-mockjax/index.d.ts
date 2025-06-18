/// <reference types="jquery" />

type MockJaxLoggingFunction = (message?: any, ...additionalParameters: any[]) => void;

interface MockJaxStandardLogger {
    error?: MockJaxLoggingFunction | undefined;
    warn?: MockJaxLoggingFunction | undefined;
    info?: MockJaxLoggingFunction | undefined;
    log?: MockJaxLoggingFunction | undefined;
    debug?: MockJaxLoggingFunction | undefined;
}

interface MockJaxCustomLogger {
    [key: string]: MockJaxLoggingFunction;
}

interface MockJaxSettingsHeaders {
    [key: string]: string;
}

interface MockJaxSettings {
    url?: string | RegExp | undefined;
    urlParams?: string[] | undefined;
    data?: any;
    type?: string | undefined;
    headers?: MockJaxSettingsHeaders | undefined;
    logging?: boolean | number | undefined;
    status?: number | undefined;
    statusText?: string | undefined;
    responseTime?: number | undefined;
    isTimeout?: boolean | undefined;
    dataType?: string | undefined;
    contentType?: string | undefined;
    response?: ((settings: any, done?: Function) => void) | undefined;
    responseText?: string | Object | undefined;
    responseXml?: string | undefined;
    proxy?: string | undefined;
    proxyType?: string | undefined;
    lastModified?: string | undefined;
    etag?: string | undefined;
    onAfterSuccess?: Function | undefined;
    onAfterError?: Function | undefined;
    onAfterComplete?: Function | undefined;
    logger?: MockJaxStandardLogger | MockJaxCustomLogger | undefined;
    logLevelMethods?: string[] | undefined;
    namespace?: string | undefined;
    throwUnmocked?: boolean | undefined;
    retainAjaxCalls?: boolean | undefined;
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
