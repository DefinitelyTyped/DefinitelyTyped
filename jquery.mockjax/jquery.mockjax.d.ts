// Type definitions for jQuery Mockjax 1.5
// Project: https://github.com/jakerella/jquery-mockjax
// Definitions by: Laszlo Jakab <https://github.com/laszlojakab/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

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
    clear(id?: number): void;
    handler(id?: number): any;
    mockedAjaxCalls(): any[];
    unfiredHandlers(): any[];
    unmockedAjaxCalls(): any[];
}

interface JQueryStatic {
    mockjax: MockJaxStatic;
}
