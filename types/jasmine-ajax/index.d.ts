interface JasmineAjaxResponse {
    status?: number | undefined;
    statusText?: string | undefined;
    responseText?: string | undefined;
    response?: string | undefined;
    responseURL?: string | undefined;
    responseJSON?: any;
    contentType?: string | undefined;
    responseHeaders?: { [key: string]: string } | undefined;
}

interface JasmineAjaxRequest extends XMLHttpRequest {
    url: string;
    method: string;
    params: any;
    username: string;
    password: string;
    requestHeaders: { [key: string]: string };
    overriddenMimeType: string;
    data(): string | object;

    respondWith(response: JasmineAjaxResponse): void;
    responseTimeout(): void;
    responseError(options?: JasmineAjaxRequestStubErrorOptions): void;
}

interface JasmineAjaxRequestTracker {
    track(request: JasmineAjaxRequest): void;
    first(): JasmineAjaxRequest;
    count(): number;
    reset(): void;
    mostRecent(): JasmineAjaxRequest;
    at(index: number): JasmineAjaxRequest;
    filter(urlToMatch: RegExp): JasmineAjaxRequest[];
    filter(urlToMatch: (request: JasmineAjaxRequest) => boolean): JasmineAjaxRequest[];
    filter(urlToMatch: string): JasmineAjaxRequest[];
}

/**
 * @deprecated Use JasmineAjaxResponse instead
 */
type JasmineAjaxRequestStubReturnOptions = JasmineAjaxResponse;

interface JasmineAjaxRequestStubErrorOptions {
    status?: number | undefined;
    statusText?: string | undefined;
}

interface JasmineAjaxRequestStub {
    url: RegExp | string;
    query: string;
    data: string;
    method: string;
    andReturn(options: JasmineAjaxResponse): void;
    andError(options: JasmineAjaxRequestStubErrorOptions): void;
    andTimeout(): void;
    andCallFunction(functionToCall: (request: JasmineAjaxRequest) => void): void;
    matches(fullUrl: string, data: string, method: string): boolean;
}

interface JasmineAjaxStubTracker {
    addStub(stub: JasmineAjaxRequestStub): void;
    reset(): void;
    findStub(url: string, data?: string, method?: string): JasmineAjaxRequestStub;
}

interface JasmineAjaxParamParser {
    test(xhr: XMLHttpRequest): boolean;
    parse(paramString: string): any;
}

declare class MockAjax {
    constructor(globals: any);

    install(): void;
    uninstall(): void;

    withMock(closure: () => void): void;
    addCustomParamParser(parser: JasmineAjaxParamParser): void;

    stubRequest(url: RegExp, data?: string, method?: string): JasmineAjaxRequestStub;
    stubRequest(url: string, data?: string, method?: string): JasmineAjaxRequestStub;

    stubRequest(url: RegExp, data?: RegExp, method?: string): JasmineAjaxRequestStub;
    stubRequest(url: string, data?: RegExp, method?: string): JasmineAjaxRequestStub;

    requests: JasmineAjaxRequestTracker;
    stubs: JasmineAjaxStubTracker;
}

declare namespace jasmine {
    const Ajax: MockAjax;
}
