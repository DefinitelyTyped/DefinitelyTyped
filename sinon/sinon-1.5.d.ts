// Type definitions for Sinon 1.5
// Project: http://sinonjs.org/
// Definitions by: William Sears <https://github.com/mrbigdog2u>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

interface SinonSpyCall {
	// Properties
	thisValue: any;
	args: any[];
	exception: any;
	returnValue: any;

	// Methods
	calledOn(obj: any): bool;
	calledWith(...args: any[]);
	calledWithExactly(...args: any[]): bool;
	calledWithMatch(...args: any[]): bool;
	notCalledWith(...args: any[]);
	notCalledWithMatch(...args: any[]): bool;
	threw(): bool;
	threw(type: string);
	threw(obj: any);
}

interface SinonSpyApi {
	// Properties
	callCount: number;
	called: bool;
	calledOnce: bool;
	calledTwice: bool;
	calledThrice: bool;
	firstCall: SinonSpyCall;
	secondCall: SinonSpyCall;
	thirdCall: SinonSpyCall;
	lastCall: SinonSpyCall;
	thisValues: any[];
	args: any[][];
	exceptions: any[];
	returnValues: any[];

	//Methods
	withArgs(...args: any[]): void;
	calledBefore(anotherSpy: SinonSpy): bool;
	calledAfter(anotherSpy: SinonSpy): bool;
	calledOn(obj: any);
	alwaysCalledOn(obj: any);
	calledWith(...args: any[]);
	alwaysCalledWith(...args: any[]);
	calledWithExactly(...args: any[]);
	alwaysCalledWithExactly(...args: any[]);
	calledWithMatch(...args: any[]);
	alwaysCalledWithMatch(...args: any[]);
	calledWithNew(): bool;
	notCalledWith(...args: any[]);
	neverCalledWith(...args: any[]);
	notCalledWithMatch(...args: any[]);
	neverCalledWithMatch(...args: any[]);
	threw(): bool;
	threw(type: string);
	threw(obj: any);
	alwaysThrew(): bool;
	alwaysThrew(type: string);
	alwaysThrew(obj: any);
	returned(): bool;
	alwaysReturned(): bool;
	yield(...args: any[]): void;
	invokeCallback(...args: any[]): void;
	yieldTo(property: string, ...args: any[]): void;
	callArg(index: number): void;
	callArgWith(index: number, ...args: any[]): void;
	getCall(n: number): SinonSpyCall;
	reset(): void;
	printf(format: string, ...args: any[]);
	restore(): void;
}

interface SinonSpy {
	(): SinonSpyApi;
	(func: any): SinonSpyApi;
	(obj: any, method: string): SinonSpyApi;
}

interface SinonApi {
	spy: SinonSpy;
}

interface SinonStubApi extends SinonSpyApi {
	returns(obj: any): SinonStubApi;
	returnsArg(index: number): SinonStubApi;
	throws(type?: string): SinonStubApi;
	throws(obj: any): SinonStubApi;
	callsArg(index: number): SinonStubApi;
	callsArgOn(index: number, context: any): SinonStubApi;
	callsArgWith(index: number, ...args: any[]): SinonStubApi;
	callsArgOnWith(index: number, context: any, ...args: any[]): SinonStubApi;
	yields(...args: any[]): SinonStubApi;
	yieldsOn(context: any, ...args: any[]): SinonStubApi;
	yieldsTo(property: string, ...args: any[]): SinonStubApi;
	yieldsToOn(property: string, context: any, ...args: any[]): SinonStubApi;
}

interface SinonStub {
	(): SinonStubApi;
	(obj: any): SinonStubApi;
	(obj: any, method: string): SinonStubApi;
	(obj: any, method: string, func: any): SinonStubApi;
}

interface SinonApi {
	stub: SinonStub;
}

interface SinonExpectationApi {
	atLeast(n: number): SinonExpectation;
	atMost(n: number): SinonExpectation;
	never(): SinonExpectation;
	once(): SinonExpectation;
	twice(): SinonExpectation;
	thrice(): SinonExpectation;
	exactly(n: number): SinonExpectation;
	withArgs(...args: any[]): SinonExpectation;
	withExactArgs(...args: any[]): SinonExpectation;
	on(obj: any): SinonExpectation;
	verify(): SinonExpectation;
	restore(): void;
}

interface SinonExpectation {
	create(methodName?: string): SinonExpectationApi;
}

interface SinonMockApi {
	expects(method: string): SinonExpectationApi;
	restore(): void;
	verify(): void;
}

interface SinonMock {
	(): SinonExpectationApi;
	(obj: any): SinonMockApi;
}

interface SinonApi {
	expectation: SinonExpectation;
	mock: SinonMock;
}

interface SinonFakeTimersApi {
	now: number;
	create(now: number): SinonFakeTimers;
	setTimeout(callback: (...args: any[]) => void , timeout: number, ...args: any[]): number;
	clearTimeout(id: number): void;
	setInterval(callback: (...args: any[]) => void , timeout: number, ...args: any[]): number;
	clearInterval(id: number): void;
	tick(ms: number): number;
	reset(): void;
	Date(): Date;
	Date(year: number): Date;
	Date(year: number, month: number): Date;
	Date(year: number, month: number, day: number): Date;
	Date(year: number, month: number, day: number, hour: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
	Date(year: number, month: number, day: number, hour: number, minute: number, second: number, ms: number): Date;
	restore(): void;
}

interface SinonFakeTimers {
	(): SinonFakeTimersApi;
	(...timers: string[]): SinonFakeTimersApi;
	(now: number, ...timers: string[]): SinonFakeTimersApi;
}

interface SinonApi {
	useFakeTimers: SinonFakeTimers;
	clock: SinonFakeTimers;
}

interface SinonFakeXMLHttpRequestApi {
	// Properties
	onCreate: (xhr: SinonFakeXMLHttpRequest) => void;
	url: string;
	method: string;
	requestHeaders: any;
	requestBody: string;
	status: number;
	statusText: string;
	async: bool;
	username: string;
	password: string;
	responseXML: Document;
	getResponseHeader(header: string): string;
	getAllResponseHeaders(): any;

	// Methods
	restore(): void;
	useFilters: bool;
	addFilter(filter: (method, url, async, username, password) => bool): void;
	setResponseHeaders(headers: any): void;
	setResponseBody(body: string): void;
	respond(status: number, headers: any, body: string): void;
	autoRespond(ms: number): void;
}

interface SinonFakeXMLHttpRequest {
	(): SinonFakeXMLHttpRequestApi;
}

interface SinonApi {
	useFakeXMLHttpRequest: SinonFakeXMLHttpRequest;
	FakeXMLHttpRequest: SinonFakeXMLHttpRequestApi;
}

interface SinonFakeServerApi {
	// Properties
	autoRespond: bool;
	autoRespondAfter: number;
	fakeHTTPMethods: bool;
	getHTTPMethod: (request: SinonFakeXMLHttpRequest) => string;

	// Methods
	respondWith(body: string): void;
	respondWith(response: any[]): void;
	respondWith(fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(url: string, body: string): void;
	respondWith(url: string, response: any[]): void;
	respondWith(url: string, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(method: string, url: string, body: string): void;
	respondWith(method: string, url: string, response: any[]): void;
	respondWith(method: string, url: string, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(url: RegExp, body: string): void;
	respondWith(url: RegExp, response: any[]): void;
	respondWith(url: RegExp, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respondWith(method: string, url: RegExp, body: string): void;
	respondWith(method: string, url: RegExp, response: any[]): void;
	respondWith(method: string, url: RegExp, fn: (SinonFakeXMLHttpRequest) => void ): void;
	respond(): void;
	restore(): void;
}

interface SinonFakeServer {
	create(): SinonFakeServerApi;
}

interface SinonApi {
	fakeServer: SinonFakeServer;
	fakeServerWithClock: SinonFakeServer;
}

interface SinonExposeOptions {
	prefix?: string;
	includeFail?: bool;
}

interface SinonAssertApi {
	// Properties
	failException: string;
	fail: (message?: string) => void;		// Overridable
	pass: (assertion: any) => void;			// Overridable

	// Methods
	notCalled(spy: SinonSpy): void;
	called(spy: SinonSpy): void;
	calledOnce(spy: SinonSpy): void;
	calledTwice(spy: SinonSpy): void;
	calledThrice(spy: SinonSpy): void;
	callCount(spy: SinonSpy, count: number): void;
	callOrder(...spies: SinonSpy[]): void;
	calledOn(spy: SinonSpy, obj: any): void;
	alwaysCalledOn(spy: SinonSpy, obj: any): void;
	calledWith(spy: SinonSpy, ...args: any[]): void;
	alwaysCalledWith(spy: SinonSpy, ...args: any[]): void;
	neverCalledWith(spy: SinonSpy, ...args: any[]): void;
	calledWithExactly(spy: SinonSpy, ...args: any[]): void;
	alwaysCalledWithExactly(spy: SinonSpy, ...args: any[]): void;
	calledWithMatch(spy: SinonSpy, ...args: any[]): void;
	alwaysCalledWithMatch(spy: SinonSpy, ...args: any[]): void;
	neverCalledWithMatch(spy: SinonSpy, ...args: any[]): void;
	threw(spy: SinonSpy): void;
	threw(spy: SinonSpy, exception: string): void;
	threw(spy: SinonSpy, exception: any): void;
	alwaysThrew(spy: SinonSpy): void;
	alwaysThrew(spy: SinonSpy, exception: string): void;
	alwaysThrew(spy: SinonSpy, exception: any): void;
	expose(obj: any, options?: SinonExposeOptions): void;
}

interface SinonApi {
	assert: SinonAssertApi;
}

interface SinonMatcherTerm {
	and(expr: SinonMatcherTerm): SinonMatcherTerm;
	or(expr: SinonMatcherTerm): SinonMatcherTerm;
}

interface SinonMatcherApi {
	any: SinonMatcherTerm;
	defined: SinonMatcherTerm;
	truthy: SinonMatcherTerm;
	falsy: SinonMatcherTerm;
	bool: SinonMatcherTerm;
	number: SinonMatcherTerm;
	string: SinonMatcherTerm;
	object: SinonMatcherTerm;
	func: SinonMatcherTerm;
	array: SinonMatcherTerm;
	regexp: SinonMatcherTerm;
	date: SinonMatcherTerm;
	same(obj: any): SinonMatcherTerm;
	typeOf(type: string): SinonMatcherTerm;
	instanceOf(type: any): SinonMatcherTerm;
	has(property: string, expect?: any): SinonMatcherTerm;
	hasOwn(property: string, expect?: any): SinonMatcherTerm;
}

interface SinonMatcher {
	(value: number): SinonMatcherApi;
	(value: string): SinonMatcherApi;
	(expr: RegExp): SinonMatcherApi;
	(obj: any): SinonMatcherApi;
	(callback: (value: any) => bool): SinonMatcherApi;
}

interface SinonApi {
	match: SinonMatcher;
}

interface SinonSandboxConfig {
	injectInto?: any;
	properties?: string[];
	useFakeTimers?: any;
	useFakeServer?: any;
}

interface SinonSandboxApi {
	clock: SinonFakeTimers;
	requests: SinonFakeXMLHttpRequest;
	server: SinonFakeServer;
	spy(): SinonSpyApi;
	stub(): SinonStubApi;
	mock(): SinonMockApi;
	useFakeTimers: SinonFakeTimers;
	useFakeXMLHttpRequest: SinonFakeXMLHttpRequest;
	restore(): void;
}

interface SinonSandbox {
	create(): SinonSandboxApi;
	create(config: SinonSandboxConfig): SinonSandboxApi;
}

interface SinonApi {
	sandbox: SinonSandbox;
}

interface SinonTestConfig {
	injectIntoThis?: bool;
	injectInto?: any;
	properties?: string[];
	useFakeTimers?: bool;
	useFakeServer?: bool;
}

interface SinonTestWrapper extends SinonSandboxApi{
	(...args: any[]): any;
}

interface SinonApi {
	config: SinonTestConfig;
	test(fn: (...args: any[]) => any): SinonTestWrapper;
	testCase(tests: any): any;
}

// Utility overridables
interface SinonApi {
	format: (obj: any) => string;
	log: (message: string) => void;
}

var sinon: SinonApi;
