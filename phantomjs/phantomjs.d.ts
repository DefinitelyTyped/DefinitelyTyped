// Type definitions for PhantomJS v1.9.0 API
// Project: https://github.com/ariya/phantomjs/wiki/API-Reference
// Definitions by: Jed Hunsaker <https://github.com/jedhunsaker> and Mike Keesey <https://github.com/keesey>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function require(module: string): any;

declare var phantom: Phantom;

interface Phantom {

	// Properties
	args: string[];  // DEPRECATED
	cookies: Cookie[];
	cookiesEnabled: boolean;
	libraryPath: string;
	scriptName: string;  // DEPRECATED
	version: {
		major: number;
		minor: number;
		patch: number;
	};

	// Functions
	addCookie(cookie: Cookie): boolean;
	clearCookies(): void;
	deleteCookie(cookieName: string): boolean;
	exit(returnValue?: any): boolean;
	injectJs(filename: string): boolean;

	// Callbacks
	onError: (msg: string, trace: string[]) => any;
}

interface System {
	pid: number;
	platform: string;
	os: {
		architecture: string;
		name: string;
		version: string;
	};
	env: { [name: string]: string; };
	args: string[];
}

interface WebPage {
	
	// Properties
	canGoBack: boolean;
	canGoForward: boolean;
	clipRect: ClipRect;
	content: string;
	cookies: Cookie[];
	customHeaders: { [name: string]: string; };
	event: any; // :TODO: elaborate this when documentation improves
	focusedFrameName: string;
	frameContent: string;
	frameName: string;
	framePlainText: string;
	frameTitle: string;
	frameUrl: string;
	framesCount: number;
	framesName: any; // :TODO: elaborate this when documentation improves
	libraryPath: string;
	navigationLocked: boolean;
	offlineStoragePath: string;
	offlineStorageQuota: number;
	ownsPages: boolean;
	pages: WebPage[];
	pagesWindowName: string;
	paperSize: PaperSize;
	plainText: string;
	scrollPosition: TopLeft;
	settings: WebPageSettings;
	title: string;
	url: string;
	viewportSize: Size;
	windowName: string;
	zoomFactor: number;

	// Functions
	addCookie(cookie: Cookie): boolean;
	childFramesCount(): number;  // DEPRECATED
	childFramesName(): string;  // DEPRECATED
	clearCookies(): void;
	close(): void;
	currentFrameName(): string;  // DEPRECATED
	deleteCookie(cookieName: string): boolean;
	evaluate(fn: Function, ...args: any[]): any;
	evaluateAsync(fn: Function): void;
	evaluateJavascript(str: string): any; // :TODO: elaborate this when documentation improves
	getPage(windowName: string): WebPage;
	go(index: number): void;
	goBack(): void;
	goForward(): void;
	includeJs(url: string, callback: Function): void;
	injectJs(filename: string): boolean;
	open(url: string, callback: (status: string) => any): void;
	open(url: string, method: string, callback: (status: string) => any): void;
	open(url: string, method: string, data: any, callback: (status: string) => any): void;
	openUrl(url: string, httpConf: any, settings: any): void; // :TODO: elaborate this when documentation improves
	release(): void;  // DEPRECATED
	reload(): void;
	render(filename: string): void;
	renderBase64(format: string): string;
	sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): void;
	sendEvent(keyboardEventType: string, keyOrKeys: any, aNull?: any, bNull?: any, modifier?: number): void;
	setContent(content: string, url: string): void;
	stop(): void;
	switchToFocusedFrame(): void;
	switchToFrame(frameName: string): void;
	switchToFrame(framePosition: number): void;
	switchToChildFrame(frameName: string): void;
	switchToChildFrame(framePosition: number): void;
	switchToMainFrame(): void;  // DEPRECATED
	switchToParentFrame(): void;  // DEPRECATED
	uploadFile(selector: string, filename: string): void;

	// Callbacks
	onAlert: (msg: string) => any;
	onCallback: Function;  // EXPERIMENTAL
	onClosing: (closingPage: WebPage) => any;
	onConfirm: (msg: string) => boolean;
	onConsoleMessage: (msg: string, lineNum?: number, sourceId?: string) => any;
	onError: (msg: string, trace: string[]) => any;
	onFilePicker: (oldFile: string) => string;
	onInitialized: () => any;
	onLoadFinished: (status: string) => any;
	onLoadStarted: () => any;
	onNavigationRequested: (url: string, type: string, willNavigate: boolean, main: boolean) => any;
	onPageCreated: (newPage: WebPage) => any;
	onPrompt: (msg: string, defaultVal: string) => string;
	onResourceError: (resourceError: ResourceError) => any;
	onResourceReceived: (response: ResourceResponse) => any;
	onResourceRequested: (requestData: ResourceRequest, networkRequest: NetworkRequest) => any;
	onUrlChanged: (targetUrl: string) => any;

	// Callback triggers
	closing(closingPage: WebPage): void;
	initialized(): void;
	javaScriptAlertSent(msg: string): void;
	javaScriptConsoleMessageSent(msg: string, lineNum?: number, sourceId?: string): void;
	loadFinished(status: string): void;
	loadStarted(): void;
	navigationRequested(url: string, type: string, willNavigate: boolean, main: boolean): void;
	rawPageCreated(newPage: WebPage): void;
	resourceReceived(response: ResourceResponse): void;
	resourceRequested(requestData: ResourceRequest, networkRequest: NetworkRequest): void;
	urlChanged(targetUrl: string): void;
}

interface ResourceError {
	id: number;
	url: string;
	errorCode: string;
	errorString: string;
}

interface ResourceResponse {
	id: number;
	url: string;
	time: Date;
	headers: { [name: string]: string; };
	bodySize: number;
	contentType?: string;
	redirectURL?: string;
	stage: string;
	status: number;
	statusText: string;
}

interface ResourceRequest {
	id: number;
	method: string;
	ur: string;
	time: Date;
	headers: { [name: string]: string; };
}

interface NetworkRequest {
	abort(): void;
	changeUrl(url: string): void;
	setHeader(name: string, value: string): void;
}

interface PaperSize {
	width?: string;
	height?: string;
	border: string;
	format?: string;
	orientation?: string;
}

interface WebPageSettings {
	javascriptEnabled: boolean;
	loadImages: boolean;
	localToRemoteUrlAccessEnabled: boolean;
	userAgent: string;
	userName: string;
	password: string;
	XSSAuditingEnabled: boolean;
	webSecurityEnabled: boolean;
	resourceTimeout: number;
}

interface FileSystem {
	
	// Properties
	separator: string;
	workingDirectory: string;
	
	// Functions
	
	// Query Functions
	list(path: string): string[];
	absolute(path: string): string;
	exists(path: string): boolean;
	isDirectory(path: string): boolean;
	isFile(path: string): boolean;
	isAbsolute(path: string): boolean;
	isExecutable(path: string): boolean;
	isReadable(path: string): boolean;
	isWritable(path: string): boolean;
	isLink(path: string): boolean;
	readLink(path: string): string;

	// Directory Functions
	changeWorkingDirectory(path: string): void;
	makeDirectory(path: string): void;
	makeTree(path: string): void;
	removeDirectory(path: string): void;
	removeTree(path: string): void;
	copyTree(source: string, destination: string): void;

	// File Functions
	open(path: string, mode: string): Stream;
	open(path: string, options: { mode: string; charset?: string; }): Stream;
	read(path: string): string;
	write(path: string, content: string, mode: string): void;
	size(path: string): number;
	remove(path: string): void;
	copy(source: string, destination: string): void;
	move(source: string, destination: string): void;
	touch(path: string): void;
}

interface Stream {
	atEnd(): boolean;
	close(): void;
	flush(): void;
	read(): string;
	readLine(): string;
	seek(position: number): void;
	write(data: string): void;
	writeLine(data: string): void;
}

interface WebServer {
	port: number;
	listen(port: number, cb?: (request: WebServerRequest, response: WebServerResponse) => void): boolean;
	listen(ipAddressPort: string, cb?: (request: WebServerRequest, response: WebServerResponse) => void): boolean;
	close(): void;
}

interface WebServerRequest {
	method: string;
	url: string;
	httpVersion: number;
	headers: { [name: string]: string; };
	post: string;
	postRaw: string;
}

interface WebServerResponse {
	headers: { [name: string]: string; };
	setHeader(name: string, value: string): void;
	header(name: string): string;
	statusCode: number;
	setEncoding(encoding: string): void;
	write(data: string): void;
	writeHead(statusCode: number, headers?: { [name: string]: string; }): void;
	close(): void;
	closeGracefully(): void;
}

interface TopLeft {
	top: number;
	left: number;
}

interface Size {
	width: number;
	height: number;
}

interface ClipRect extends TopLeft, Size {
}

interface Cookie {
	name: string;
	value: string;
	domain?: string;
}
