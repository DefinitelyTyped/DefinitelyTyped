// Type definitions for PlantomJS v1.8.0 API
// Project: https://github.com/ariya/phantomjs/wiki/API-Reference
// Definitions by: Jed Hunsaker <https://github.com/jedhunsaker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Phantom {

	// Properties
	args: string[];  // DEPRECATED
	cookies: Cookie[];
	cookiesEnabled: bool;
	libraryPath: string;
	scriptName: string;  // DEPRECATED
	version: any;

	// Functions
	addCookie(cookie: Cookie): bool;
	clearCookies();
	deleteCookie(cookieName: string): bool;
	exit(returnValue: any): bool;
	injectJs(filename: string): bool;

	// Callbacks
	onError: Function;
}

interface System {
	pid: number;
	platform: string;
	os: OS;
	env: any;
	args: string[];
}

interface OS {
	architecture: string;
	name: string;
	version: string;
}

interface WebPage {
	
	// Properties
	canGoBack: bool;
	canGoForward: bool;
	clipRect: ClipRect;
	content: string;
	cookies: Cookie[];
	customHeaders: any;
	event;
	focusedFrameName: string;
	frameContent: string;
	frameName: string;
	framePlainText: string;
	frameTitle: string;
	frameUrl: string;
	framesCount: number;
	framesName;
	libraryPath: string;
	navigationLocked: bool;
	offlineStoragePath: string;
	offlineStorageQuota: number;
	ownsPages: bool;
	pages;
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
	addCookie(cookie: Cookie): bool;
	childFramesCount(): number;  // DEPRECATED
	childFramesName(): string;  // DEPRECATED
	clearCookies();
	close();
	currentFrameName(): string;  // DEPRECATED
	deleteCookie(cookieName: string): bool;
	evaluate(fn: Function, ...args: any[]): any;
	evaluateAsync(fn: Function);
	evaluateJavascript(str: string);
	getPage(windowName: string);
	go(index: number);
	goBack();
	goForward();
	includeJs(url: string, callback: Function);
	injectJs(filename: string): bool;
	open(url: string, callback: (status: string) => void);
	openUrl(url: string, httpConf: any, settings: any);
	release();  // DEPRECATED
	reload();
	render(filename: string);
	renderBase64(format: any): string;
	sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string);
	sendEvent(keyboardEventType: string, keyOrKeys, aNull?, bNull?, modifier?);
	setContent(content: string, url: string);
	stop();
	switchToFocusedFrame();
	switchToFrame(frameName: string);
	switchToFrame(framePosition);
	switchToChildFrame(frameName: string);
	switchToChildFrame(framePosition);
	switchToMainFrame();  // DEPRECATED
	switchToParentFrame();  // DEPRECATED
	uploadFile(selector: string, filename: string);

	// Callbacks
	onAlert: Function;
	onCallback: Function;  // EXPERIMENTAL
	onClosing: Function;
	onConfirm: Function;
	onConsoleMessage: Function;
	onError: Function;
	onFilePicker: Function;
	onInitialized: Function;
	onLoadFinished: Function;
	onLoadStarted: Function;
	onNavigationRequested: Function;
	onPageCreated: Function;
	onPrompt: Function;
	onResourceRequested: Function;
	onResourceReceived: Function;
	onUrlChanged: Function;

	// Callback triggers
	closing(page);
	initialized();
	javaScriptAlertSent(message: string);
	javaScriptConsoleMessageSent(message: string);
	loadFinished(status);
	loadStarted();
	navigationRequested(url: string, navigationType, navigationLocked, isMainFrame: bool);
	rawPageCreated(page);
	resourceReceived(request);
	resourceRequested(resource);
	urlChanged(url: string);
}

interface PaperSize {
	width: string;
	height: string;
	border: string;
	format: string;
	orientation: string;
}

interface WebPageSettings {
	javascriptEnabled: bool;
	loadImages: bool;
	localToRemoteUrlAccessEnabled: bool;
	userAgent: string;
	password: string;
	XSSAuditingEnabled: bool;
	webSecurityEnabled: bool;
}

interface FileSystem {
	
	// Properties
	separator: string;
	workingDirectory: string;
	
	// Functions
	
	// Query Functions
	list(path: string): string[];
	absolute(path: string): string;
	exists(path: string): bool;
	isDirectory(path: string): bool;
	isFile(path: string): bool;
	isAbsolute(path: string): bool;
	isExecutable(path: string): bool;
	isReadable(path: string): bool;
	isWritable(path: string): bool;
	isLink(path: string): bool;
	readLink(path: string): string;

	// Directory Functions
	changeWorkingDirectory(path: string);
	makeDirectory(path: string);
	makeTree(path: string);
	removeDirectory(path: string);
	removeTree(path: string);
	copyTree(source: string, destination: string);

	// File Functions
	open(path: string, mode: string): Stream;
	read(path: string): string;
	write(path: string, content: string, mode: string);
	size(path: string): number;
	remove(path: string);
	copy(source: string, destination: string);
	move(source: string, destination: string);
	touch(path: string);
}

interface Stream {
	read(): string;
	readLine(): string;
	write(data: string);
	writeLine(data: string);
	flush();
	close();
}

interface WebServer {
	port: number;
	listen(port: number, cb?:(request, response) => void): bool;
	listen(ipAddressPort: string, cb?:(request, response) => void): bool;
	close();
}

interface Request {
	method: string;
	url: string;
	httpVersion: number;
	headers: any;
	post: string;
	postRaw: string;
}

interface Response {
	headers: any;
	setHeader(name: string, value: string);
	header(name: string): string;
	statusCode: number;
	setEncoding(encoding: string);
	write(data: string);
	writeHead(statusCode: number, headers?: any);
	close();
	closeGracefully();
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
	width: number;
	height: number;
}

interface Cookie {
	name: string;
	value: string;
}
