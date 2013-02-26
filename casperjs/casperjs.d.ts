// Type definitions for CasperJS v1.0.0 API
// Project: http://casperjs.org/
// Definitions by: Jed Hunsaker <https://github.com/jedhunsaker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../phantomjs/phantomjs.d.ts" />

interface Casper {

	constructor (options: CasperOptions);

	// Properties
	__utils__: ClientUtils;

	// Methods
	back();
	base64encode(url: string, method?: string, data?: any);
	click(selector: string);
	clickLabel(label: string, tag?: string);
	capture(targetFilePath: string, clipRect: ClipRect);
	captureBase64(format: string);
	captureBase64(format: string, area: string);
	captureBase64(format: string, area: ClipRect);
	captureBase64(format: string, area: any);
	captureSelector(targetFile: string, selector: string);
	clear();
	debugHTML(selector?: string, outer?: bool);
	debugPage();
	die(message: string, status?: number);
	download(url: string, target?: string, method?: string, data?: any);
	each(array: Array, fn: (self, link) => void);
	echo(message: string, style?: string);
	evaluate(fn: Function, ...args: any[]);
	evaluateOrDie(fn: Function, message?: string);
	exit(status?: number);
	exists(selector: string);
	fetchText(selector: string);
	forward();
	log(message: string, level?: string, space?: string);
	fill(selector: string, values: any, submit?: bool);
	getCurrentUrl(): string;
	getElementAttribute(selector: string, attribute: string): string;
	getElementBounds(selector: string): ElementBounds;
	getElementsBounds(selector: string): ElementBounds[];
	getElementInfo(selector: string): ElementInfo;
	getFormValues(selector: string): any;
	getGlobal(name: string): any;
	getHTML(selector?: string, outer?: bool): string;
	getPageContent(): string;
	getTitle(): string;
	mouseEvent(type: string, selector: string);
	open(location: string, settings: OpenSettings): Casper;
	reload(then?: (response: HttpResponse) => void);
	repeat(times: number, then: Function);
	resourceExists(test: Function);
	resourceExists(test: string);
	run(onComplete: Function, time?: number);
	sendKeys(selector: string, keys: string, options?: any);
	setHttpAuth(username: string, password: string);
	start(url?: string, then?: (response: HttpResponse) => void): Casper;
	status(asString: bool): any;
	then(fn: (self?: Casper) => void);
	thenClick(selector: string);
	thenEvaluate(fn: Function, ...args: any[]);
	thenOpen(location: string, then?: (response: HttpResponse) => void);
	thenOpen(location: string, options?: OpenSettings, then?: (response: HttpResponse) => void);
	thenOpenAndEvaluate(location: string, then?: Function, ...args: any[]);
	toString();
	userAgent(agent: string);
	viewport(width: number, height: number);
	visible(selector: string);
	wait(timeout: number, then?: Function);
	waitFor(testFx: Function, then?: Function, onTimeout?: Function, timeout?: number);
	waitForPopup(urlPattern: string, then?: Function, onTimeout?: Function, timeout?: number);
	waitForPopup(urlPattern: RegExp, then?: Function, onTimeout?: Function, timeout?: number);
	waitForSelector(selector: string, then?: Function, onTimeout?: Function, timeout?: number);
	waitWhileSelector(selector: string, then?: Function, onTimeout?: Function, timeout?: number);
	waitForResource(testFx: Function, then?: Function, onTimeout?: Function, timeout?: number);
	waitForText(pattern: string, then?: Function, onTimeout?: Function, timeout?: number);
	waitForText(pattern: RegExp, then?: Function, onTimeout?: Function, timeout?: number);
	waitUntilVisible(selector: string, then?: Function, onTimeout?: Function, timeout?: number);
	waitWhileVisible(selector: string, then?: Function, onTimeout?: Function, timeout?: number);
	warn(message: string);
	withFrame(frameInfo: string, then: Function);
	withFrame(frameInfo: number, then: Function);
	withPopup(popupInfo: string, step: Function);
	withPopup(popupInfo: RegExp, step: Function);
	zoom(factor: number);
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
	visible: bool;
}

interface CasperOptions {
	clientScripts: Array;
	exitOnError: bool;
	httpStatusHandlers: any;
	logLevel: string;
	onAlert: Function;
	onDie: Function;
	onError: Function;
	onLoadError: Function;
	onPageInitialized: Function;
	onResourceReceived: Function;
	onResourceRequested: Function;
	onStepComplete: Function;
	onStepTimeout: Function;
	onTimeout: Function;
	onWaitTimeout: Function;
	page: WebPage;
	pageSettings: any;
	remoteScripts: Array;
	safeLogs: bool;
	stepTimeout: number;
	timeout: number;
	verbose: bool;
	viewportSize: any;
	waitTimeout: number;
}

interface ClientUtils {
	echo(message: string);
	encode(contents: string);
	exists(selector: string);
	findAll(selector: string);
	findOne(selector: string);
	getBase64(url: string, method?: string, data?: any);
	getBinary(url: string, method?: string, data?: any);
	getDocumentHeight();
	getElementBounds(selector: string);
	getElementsBounds(selector: string);
	getElementByXPath(expression: string, scope?: HTMLElement);
	getElementsByXPath(expression: string, scope?: HTMLElement);
	getFieldValue(inputName: string);
	getFormValues(selector: string);
	mouseEvent(type: string, selector: string);
	removeElementsByXPath(expression: string);
	sendAJAX(url: string, method?: string, data?: any, async?: bool);
	visible(selector: string);
}

interface Colorizer {
	colorize(text: string, styleName: string);
	format(text: string, style: any);
}

interface Tester {
	assert(condition: bool, message?: string);
	assertDoesntExist(selector: string, message?: string);
	assertEquals(testValue: any, expected: any, message?: string);
	assertEval(fn: Function, message: string, arguments: any);
	assertEvalEquals(fn: Function, expected: any, message?: string, arguments?: any);
	assertExists(selector: string, message?: string);
	assertFalsy(subject: any, message?: string);
	assertField(inputName: string, expected: string, message?: string);
	assertHttpStatus(status: number, message?: string);
	assertMatch(subject: any, pattern: RegExp, message?: string);
	assertNot(subject: any, message?: string);
	assertNotEquals(testValue: any, expected: any, message?: string);
	assertNotVisible(selector: string, message?: string);
	assertRaises(fn: Function, args: Array, message?: string);
	assertSelectorDoesntHaveText(selector: string, text: string, message?: string);
	assertSelectorExists(selector: string, message?: string);
	assertSelectorHasText(selector: string, text: string, message?: string);
	assertResourceExists(testFx: Function, message?: string);
	assertTextExists(expected: string, message?: string);
	assertTextDoesntExist(unexpected: string, message: string);
	assertTitle(expected: string, message?: string);
	assertTitleMatch(pattern: RegExp, message?: string);
	assertTruthy(subject: any, message?: string);
	assertType(input: any, type: string, message?: string);
	assertUrlMatch(pattern: RegExp, message?: string);
	assertVisible(selector: string, message?: string);
	colorize(message: string, style: string);
	comment(message: string);
	done(expected?: number);
	error(message: string);
	fail(message: string);
	formatMessage(message: string, style: string);
	getFailures(): Cases;
	getPasses(): Cases;
	info(message: string);
	pass(message: string);
	renderResults(exit: bool, status: number, save: string);
}

interface Cases {
	length: number;
	cases: Case[];
}

interface Case {
	success: bool;
	type: string;
	standard: string;
	file: string;
	values: CaseValues;
}

interface CaseValues {
	subject: bool;
	expected: bool;
}

interface Utils {
	betterTypeOf(input: any);
	dump(value: any);
	fileExt(file: string);
	fillBlanks(text: string, pad: number);
	format(f: string, ...args: any[]);
	getPropertyPath(obj: any, path: string);
	inherits(ctor: any, superCtor: any);
	isArray(value: any);
	isCasperObject(value: any);
	isClipRect(value: any);
	isFalsy(subject: any);
	isFunction(value: any);
	isJsFile(file: string);
	isNull(value: any);
	isNumber(value: any);
	isObject(value: any);
	isRegExp(value: any);
	isString(value: any);
	isTruthy(subject: any);
	isType(what: any, type: string);
	isUndefined(value: any);
	isWebPage(what: any);
	mergeObjects(origin: any, add: any);
	node(name: string, attributes: any);
	serialize(value: any);
	unique(array: Array);
}
