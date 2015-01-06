interface MockJaxSettings {
    url?: string;
    data?: any;
    dataType?: string;
    type?: string;
    headers?: any;
    status?: number;
    statusText?: string;
    responseTime?: number;
    isTimeout?: boolean;
    contentType?: string;
    response?: (settings: any) => void;
    responseText?: string;
    responseXml?: string;
    proxy?: string;
    lastModified?: string;
    etag?: string;
}

interface MockJaxStatic {
    (options: MockJaxSettings): number;
    mockedAjaxCalls(): any; // TODO: any?
    unfiredHandlers(): any; // TODO: any?
}

interface JQueryStatic {
    mockjax: MockJaxStatic;
    mockjaxClear(id?: number): any;
}