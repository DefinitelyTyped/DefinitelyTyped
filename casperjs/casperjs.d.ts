// Type definitions for CasperJS v1.0.0 API
// Project: http://casperjs.org/
// Definitions by: Jed Mao <https://github.com/jedmao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../phantomjs/phantomjs.d.ts" />

interface CasperModule {
    create(options: CasperOptions): Casper;
    selectXPath(expression: string): Object
}

interface EventEmitter {
    removeAllFilters(filter: string): Casper;
    setFilter(filter: string, cb: Function): boolean;
}

interface Casper extends EventEmitter {
    test: Tester;

	constructor (options: CasperOptions): Casper;

	options: CasperOptions;
	// Properties
	__utils__: ClientUtils;

	// Methods
	back(): Casper;
	base64encode(url: string, method?: string, data?: any): string;
	bypass(nb: number): any;
	click(selector: string): boolean;
	clickLabel(label: string, tag?: string): boolean;
	capture(targetFilePath: string, clipRect: ClipRect): Casper;
	captureBase64(format: string): string;
	captureBase64(format: string, area: string): string;
	captureBase64(format: string, area: ClipRect): string;
	captureBase64(format: string, area: any): string;
	captureSelector(targetFile: string, selector: string): Casper;
	clear(): Casper;
	debugHTML(selector?: string, outer?: boolean): Casper;
	debugPage(): Casper;
	die(message: string, status?: number): Casper;
	download(url: string, target?: string, method?: string, data?: any): Casper;
    each<T>(array: T[], fn: (self: Casper, item: T, index: number) => void): Casper;
	echo(message: string, style?: string): Casper;
    evaluate<T>(fn: () => T, ...args: any[]): T
    evaluateOrDie(fn: () => any, message?: string, status?: number): Casper;
	exit(status?: number): Casper;
	exists(selector: string): boolean;
	fetchText(selector: string): string;
	forward(): Casper;
	log(message: string, level?: string, space?: string): Casper;
	fill(selector: string, values: any, submit?: boolean): void;
	fillSelectors(selector: string, values: any, submit?: boolean): void;
	fillXPath(selector: string, values: any, submit?: boolean): void;
	getCurrentUrl(): string;
	getElementAttribute(selector: string, attribute: string): string;
	getElementsAttribute(selector: string, attribute: string): string;
	getElementBounds(selector: string): ElementBounds;
	getElementsBounds(selector: string): ElementBounds[];
	getElementInfo(selector: string): ElementInfo;
	getElementsInfo(selector: string): ElementInfo;
	getFormValues(selector: string): any;
	getGlobal(name: string): any;
	getHTML(selector?: string, outer?: boolean): string;
	getPageContent(): string;
	getTitle(): string;
	mouseEvent(type: string, selector: string): boolean;
	open(location: string, settings: OpenSettings): Casper;
	reload(then?: (response: HttpResponse) => void): Casper;
	repeat(times: number, then: Function): Casper;
	resourceExists(test: Function): boolean;
	resourceExists(test: string): boolean;
	run(onComplete: Function, time?: number): Casper;
	scrollTo(x: number, y: number): Casper;
	scrollToBottom(): Casper;
	sendKeys(selector: string, keys: string, options?: any): Casper;
	setHttpAuth(username: string, password: string): Casper;
	start(url?: string, then?: (response: HttpResponse) => void): Casper;
	status(asString: boolean): any;
	then(fn: (self?: Casper) => void): Casper;
	thenBypass(nb: number): Casper;
	thenBypassIf(condition: any, nb: number): Casper;
	thenBypassUnless(condition: any, nb: number): Casper;
	thenClick(selector: string): Casper;
    thenEvaluate(fn: () => any, ...args: any[]): Casper;
	thenOpen(location: string, then?: (response: HttpResponse) => void): Casper;
	thenOpen(location: string, options?: OpenSettings, then?: (response: HttpResponse) => void): Casper;
	thenOpenAndEvaluate(location: string, then?: Function, ...args: any[]): Casper;
	toString(): string;
	unwait(): Casper;
	userAgent(agent: string): string;
	viewport(width: number, height: number): Casper;
	visible(selector: string): boolean;
	wait(timeout: number, then?: Function): Casper;
	waitFor(testFx: Function, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForAlert(then: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForPopup(urlPattern: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForPopup(urlPattern: RegExp, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForUrl(url: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForUrl(url: RegExp, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForSelector(selector: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitWhileSelector(selector: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForResource(testFx: Function, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForText(pattern: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitForText(pattern: RegExp, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitUntilVisible(selector: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	waitWhileVisible(selector: string, then?: Function, onTimeout?: Function, timeout?: number): Casper;
	warn(message: string): Casper;
	withFrame(frameInfo: string, then: Function): Casper;
	withFrame(frameInfo: number, then: Function): Casper;
	withPopup(popupInfo: string, step: Function): Casper;
	withPopup(popupInfo: RegExp, step: Function): Casper;
	zoom(factor: number): Casper;
}

interface HttpResponse {
	contentType: string;
	headers: any[];
	id: number;
	redirectURL: string;
	stage: string;
	status: number;
	statusText: string;
	time: string;
	url: string;
}

interface OpenSettings {
	method: string;
	data: any;
	headers: any;
}

interface ElementBounds {
	top: number;
	left: number;
	width: number;
	height: number;
}

interface ElementInfo {
	nodeName: string;
	attributes: any;
	tag: string;
	html: string;
	text: string;
	x: number;
	y: number;
	width: number;
	height: number;
	visible: boolean;
}

interface CasperOptions {
	clientScripts?: any[];
	exitOnError?: boolean;
	httpStatusHandlers?: any;
	logLevel?: string;
	onAlert?: Function;
	onDie?: Function;
	onError?: Function;
	onLoadError?: Function;
	onPageInitialized?: Function;
	onResourceReceived?: Function;
	onResourceRequested?: Function;
	onStepComplete?: Function;
	onStepTimeout?: Function;
	onTimeout?: Function;
	onWaitTimeout?: Function;
	page?: WebPage;
	pageSettings?: any;
	remoteScripts?: any[];
	safeLogs?: boolean;
	silentErrors?: boolean;
	stepTimeout?: number;
	timeout?: number;
	verbose?: boolean;
	viewportSize?: any;
	retryTimeout?: number;
	waitTimeout?: number;
}

interface ClientUtils {
	echo(message: string): void;
	encode(contents: string): void;
	exists(selector: string): void;
	findAll(selector: string): void;
	findOne(selector: string): void;
	getBase64(url: string, method?: string, data?: any): void;
	getBinary(url: string, method?: string, data?: any): void;
	getDocumentHeight(): void;
	getElementBounds(selector: string): void;
	getElementsBounds(selector: string): void;
	getElementByXPath(expression: string, scope?: HTMLElement): void;
	getElementsByXPath(expression: string, scope?: HTMLElement): void;
	getFieldValue(inputName: string): void;
	getFormValues(selector: string): void;
	mouseEvent(type: string, selector: string): void;
	removeElementsByXPath(expression: string): void;
	sendAJAX(url: string, method?: string, data?: any, async?: boolean): void;
	visible(selector: string): void;
}

interface Colorizer {
	colorize(text: string, styleName: string): void;
	format(text: string, style: any): void;
}

interface Tester {
	assert(condition: boolean, message?: string): any;
	assertDoesntExist(selector: string, message?: string): any;
	assertElementCount(selctor: string, expected: number, message?: string): any;
	assertEquals(testValue: any, expected: any, message?: string): any;
	assertEval(fn: Function, message: string, arguments: any): any;
	assertEvalEquals(fn: Function, expected: any, message?: string, arguments?: any): any;
	assertExists(selector: string, message?: string): any;
	assertFalsy(subject: any, message?: string): any;
	assertField(inputName: string, expected: string, message?: string): any;
	assertFieldName(inputName: string, expected: string, message?: string, options?: any): any;
	assertFieldCSS(cssSelector: string, expected: string, message?: string): any;
	assertFieldXPath(xpathSelector: string, expected: string, message?: string): any;
	assertHttpStatus(status: number, message?: string): any;
	assertMatch(subject: any, pattern: RegExp, message?: string): any;
	assertNot(subject: any, message?: string): any;
	assertNotEquals(testValue: any, expected: any, message?: string): any;
	assertNotVisible(selector: string, message?: string): any;
	assertRaises(fn: Function, args: any[], message?: string): any;
	assertSelectorDoesntHaveText(selector: string, text: string, message?: string): any;
	assertSelectorExists(selector: string, message?: string): any;
	assertSelectorHasText(selector: string, text: string, message?: string): any;
	assertResourceExists(testFx: Function, message?: string): any;
	assertTextExists(expected: string, message?: string): any;
	assertTextDoesntExist(unexpected: string, message: string): any;
	assertTitle(expected: string, message?: string): any;
	assertTitleMatch(pattern: RegExp, message?: string): any;
	assertTruthy(subject: any, message?: string): any;
	assertType(input: any, type: string, message?: string): any;
	assertInstanceOf(input: any, ctor: Function, message?: string): any;
	assertUrlMatch(pattern: string, message?: string): any;
	assertUrlMatch(pattern: RegExp, message?: string): any;
	assertVisible(selector: string, message?: string): any;

    /* since 1.1 */
    begin(description: string, planned: number, suite: Function): any;
    begin(description: string, suite: Function): any;
    begin(description: string, planned: number, config: Object): any;
    begin(description: string, config: Object): any;

	colorize(message: string, style: string): any;
	comment(message: string): any;
	done(expected?: number): any;
	error(message: string): any;
	fail(message: string): any;
	formatMessage(message: string, style: string): any;
	getFailures(): Cases;
	getPasses(): Cases;
	info(message: string): any;
	pass(message: string): any;
	renderResults(exit: boolean, status: number, save: string): any;

	setup(fn: Function): any;
	skip(nb: number, message: string): any;
	tearDown(fn: Function): any;
}

interface Cases {
	length: number;
	cases: Case[];
}

interface Case {
	success: boolean;
	type: string;
	standard: string;
	file: string;
	values: CaseValues;
}

interface CaseValues {
	subject: boolean;
	expected: boolean;
}

interface Utils {
	betterTypeOf(input: any): any;
	dump(value: any): any;
	fileExt(file: string): any;
	fillBlanks(text: string, pad: number): any;
	format(f: string, ...args: any[]): any;
	getPropertyPath(obj: any, path: string): any;
	inherits(ctor: any, superCtor: any): any;
	isArray(value: any): any;
	isCasperObject(value: any): any;
	isClipRect(value: any): any;
	isFalsy(subject: any): any;
	isFunction(value: any): any;
	isJsFile(file: string): any;
	isNull(value: any): any;
	isNumber(value: any): any;
	isObject(value: any): any;
	isRegExp(value: any): any;
	isString(value: any): any;
	isTruthy(subject: any): any;
	isType(what: any, type: string): any;
	isUndefined(value: any): any;
	isWebPage(what: any): any;
	mergeObjects(origin: any, add: any): any;
	node(name: string, attributes: any): any;
	serialize(value: any): any;
	unique(array: any[]): any;
}
