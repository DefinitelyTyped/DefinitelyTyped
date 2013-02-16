/**********************************************************
*                                                         *
*                 PlantomJS v1.8.0 API                    *
*  https://github.com/ariya/phantomjs/wiki/API-Reference  *
*                                                         *
**********************************************************/

interface Phantom {

	// Properties
	args: string[];  // DEPRECATED
	cookies: Cookie[];
	cookiesEnabled: bool;
	libraryPath: string;
	scriptName: string;  // DEPRECATED
	version: any;

	// Methods
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
	paperSize: any;
	plainText: string;
	scrollPosition: TopLeft;
	settings: WebPageSettings;
	title: string;
	url: string;
	viewportSize: Size;
	windowName: string;
	zoomFactor: number;

	// Methods
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
	open(url: string, callback: Function);
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

interface WebPageSettings {
	javascriptEnabled: bool;
	loadImages: bool;
	localToRemoteUrlAccessEnabled: bool;
	userAgent: string;
	password: string;
	XSSAuditingEnabled: bool;
	webSecurityEnabled: bool;
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

interface NameValuePair {
	name: string;
	value: any;
}

interface Cookie extends NameValuePair {
	value: string;
}
