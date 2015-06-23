// Type definitions for jasmine-ajax 3.1.1
// Project: https://github.com/jasmine/jasmine-ajax
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JasmineAjaxResponse {
	status?: number;
	statusText?: string;
	responseText?: string;
	response?: string;
	contentType?: string;
	responseHeaders?: { [key: string]: string };
}

interface JasmineAjaxRequest extends XMLHttpRequest {
	url: string;
	method: string;
	username: string;
	password: string;
	requestHeaders: { [key: string]: string };
	overriddenMimeType: string;

	respondWith(response: JasmineAjaxResponse): void;
}

interface JasmineAjaxRequestTracker {
    track(request: JasmineAjaxRequest): void;
    first(): JasmineAjaxRequest;
    count(): number;
    reset(): void;
    mostRecent(): JasmineAjaxRequest;
    at(index: number): JasmineAjaxRequest;
    filter(urlToMatch: RegExp): JasmineAjaxRequest[];
	filter(urlToMatch: Function): JasmineAjaxRequest[];
	filter(urlToMatch: string): JasmineAjaxRequest[];
}

interface JasmineAjaxRequestStubReturnOptions {
	status?: number;
	contentType?: string;
	response?: string;
	responseText?: string;
	responseHeaders?: { [key: string]: string };
}

interface JasmineAjaxRequestStub {
	data?: string;
    method?: string;
    andReturn(options: JasmineAjaxRequestStubReturnOptions): void;
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

	requests: JasmineAjaxRequestTracker;
	stubs: JasmineAjaxStubTracker;
}

declare module jasmine {
	export var Ajax: MockAjax;
}
