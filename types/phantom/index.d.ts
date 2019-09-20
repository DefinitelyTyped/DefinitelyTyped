// Type definitions for PhantomJS bridge for NodeJS 3.2
// Project: https://github.com/sgentle/phantomjs-node
// Definitions by: horiuchi <https://github.com/horiuchi>, Random <https://github.com/llRandom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function create(args?: string[], config?: {
    phantomPath?: string,
    shimPath?: string,
    logger?: {
        info?: winstonLeveledLogMethod,
        debug?: winstonLeveledLogMethod,
        error?: winstonLeveledLogMethod,
        warn?: winstonLeveledLogMethod,
    },
    logLevel?: 'debug' | 'info' | 'warn' | 'error',
}): Promise<PhantomJS>;

export interface winstonLeveledLogMethod {
    (message: string, callback: (...args: any[]) => void): any;
    (message: string, meta: any, callback: (...args: any[]) => void): any;
    (message: string, ...meta: any[]): any;
    (infoObject: any): any;
}

export interface PhantomJS {
    callback(fn: (pageNum: number, numPages: number) => string): IPhantomCallback;
    createPage(): Promise<WebPage>;
    exit(returnValue?: number): void;
}

export interface WebPage {
    open(url: string): Promise<string>;
    open(url: string, settings: IOpenWebPageSettings): Promise<string>;
    on(event: 'onResourceRequested', runOnPhantom: false, listener: (requestData: IRequestData, networkRequest: { abort: () => void, changeUrl: (newUrl: string) => void, setHeader: (key: string, value: string) => void }) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceRequested', listener: (requestData: IRequestData, networkRequest: { abort: () => void, changeUrl: (newUrl: string) => void, setHeader: (key: string, value: string) => void }) => void): Promise<{ pageId: string }>;
    on(event: 'onLoadFinished', runOnPhantom: false, listener: (status: 'success' | 'fail') => void): Promise<{ pageId: string }>;
    on(event: 'onLoadFinished', listener: (status: 'success' | 'fail') => void): Promise<{ pageId: string }>;
    on(event: 'onAlert', runOnPhantom: false, listener: (msg: string) => void): Promise<{ pageId: string }>;
    on(event: 'onAlert', listener: (msg: string) => void): Promise<{ pageId: string }>;
    on(event: 'onCallback', runOnPhantom: false, listener: (data: any) => void): Promise<{ pageId: string }>;
    on(event: 'onCallback', listener: (data: any) => void): Promise<{ pageId: string }>;
    on(event: 'onClosing', runOnPhantom: false, listener: (closingPage: any) => void): Promise<{ pageId: string }>;
    on(event: 'onClosing', listener: (closingPage: any) => void): Promise<{ pageId: string }>;
    on(event: 'onConfirm', runOnPhantom: false, listener: (msg: string) => void): Promise<{ pageId: string }>;
    on(event: 'onConfirm', listener: (msg: string) => void): Promise<{ pageId: string }>;
    on(event: 'onConsoleMessage', runOnPhantom: false, listener: (msg: string, lineNum: number, sourceId: string) => void): Promise<{ pageId: string }>;
    on(event: 'onConsoleMessage', listener: (msg: string, lineNum: number, sourceId: string) => void): Promise<{ pageId: string }>;
    on(event: 'onError', runOnPhantom: false, listener: (msg: string, trace: { file: string, line: string, function: string }[]) => void): Promise<{ pageId: string }>;
    on(event: 'onError', listener: (msg: string, trace: { file: string, line: string, function: string }[]) => void): Promise<{ pageId: string }>;
    on(event: 'onFilePicker', runOnPhantom: false, listener: (oldFile: any) => void): Promise<{ pageId: string }>;
    on(event: 'onFilePicker', listener: (oldFile: any) => void): Promise<{ pageId: string }>;
    on(event: 'onInitialized', runOnPhantom: false, listener: () => void): Promise<{ pageId: string }>;
    on(event: 'onInitialized', listener: () => void): Promise<{ pageId: string }>;
    on(event: 'onLoadStarted', runOnPhantom: false, listener: () => void): Promise<{ pageId: string }>;
    on(event: 'onLoadStarted', listener: () => void): Promise<{ pageId: string }>;
    on(event: 'onNavigationRequested', runOnPhantom: false, listener: (url: string, type: 'Undefined' | 'LinkClicked' | 'FormSubmitted' | 'BackOrForward' | 'Reload' | 'FormResubmitted' | 'Other', willNavigate: boolean, main: boolean) => void): Promise<{ pageId: string }>;
    on(event: 'onNavigationRequested', listener: (url: string, type: 'Undefined' | 'LinkClicked' | 'FormSubmitted' | 'BackOrForward' | 'Reload' | 'FormResubmitted' | 'Other', willNavigate: boolean, main: boolean) => void): Promise<{ pageId: string }>;
    on(event: 'onPageCreated', runOnPhantom: false, listener: (newPage: any) => void): Promise<{ pageId: string }>;
    on(event: 'onPageCreated', listener: (newPage: any) => void): Promise<{ pageId: string }>;
    on(event: 'onPrompt', runOnPhantom: false, listener: (msg: string, defaultVal: string) => void): Promise<{ pageId: string }>;
    on(event: 'onPrompt', listener: (msg: string, defaultVal: string) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceError', runOnPhantom: false, listener: (resourceError: { id: string, url: string, errorCode: number, errorString: string }) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceError', listener: (resourceError: { id: string, url: string, errorCode: number, errorString: string }) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceReceived', runOnPhantom: false, listener: (response: IResponse) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceReceived', listener: (response: IResponse) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceTimeout', runOnPhantom: false, listener: (request: IRequestData & { errorCode: number, errorString: string }) => void): Promise<{ pageId: string }>;
    on(event: 'onResourceTimeout', listener: (request: IRequestData & { errorCode: number, errorString: string }) => void): Promise<{ pageId: string }>;
    on(event: 'onUrlChanged', runOnPhantom: false, listener: (targetUrl: string) => void): Promise<{ pageId: string }>;
    on(event: 'onUrlChanged', listener: (targetUrl: string) => void): Promise<{ pageId: string }>;
    off(event: 'onResourceRequested' | 'onLoadFinished' | 'onAlert'
        | 'onCallback' | 'onClosing' | 'onConfirm'
        | 'onConsoleMessage' | 'onError' | 'onFilePicker'
        | 'onInitialized' | 'onLoadStarted' | 'onNavigationRequested'
        | 'onPageCreated' | 'onPrompt' | 'onResourceError'
        | 'onResourceReceived' | 'onResourceTimeout' | 'onUrlChanged'): Promise<{ pageId: string }>;
    close(): Promise<void>;

    evaluate<R>(callback: () => R): Promise<R>;
    evaluate<T, R>(callback: (arg: T) => R, arg: T): Promise<R>;
    evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, arg1: T1, arg2: T2): Promise<R>;
    evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, arg1: T1, arg2: T2, arg3: T3): Promise<R>;
    evaluate<R>(callback: (...args: any[]) => R, ...args: any[]): Promise<R>;
    includeJs(url: string): Promise<void>;
    injectJs(filename: string): Promise<boolean>;
    sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): Promise<void>;
    sendEvent(keyboardEventType: string, key: string, null1?: void, null2?: void, modifier?: number): Promise<void>;

    render(filename: string): Promise<void>;
    render(filename: string, options?: { format?: string; quality?: string; }): Promise<void>;
    renderBase64(type: string): Promise<string>;

    setContent(html: string, url: string): Promise<string>;

    property(key: 'content' | 'plainText'
        | 'focusedFrameName' | 'frameContent'
        | 'frameName' | 'framePlainText' | 'frameTitle'
        | 'libraryPath' | 'offlineStoragePath' | 'title' | 'url' | 'windowName'): Promise<string>;
    property(key: 'framesName' | 'pagesWindowName' | 'pages'): Promise<string[]>;
    property(key: 'canGoBack' | 'canGoForward' | 'navigationLocked' | 'ownsPages'): Promise<boolean>;
    property(key: 'framesCount' | 'offlineStorageQuota' | 'zoomFactor'): Promise<number>;
    property(key: 'clipRect'): Promise<{
        top: number, left: number, width: number, height: number
    }>;
    property(key: 'cookies'): Promise<ICookie[]>;
    property(key: 'customHeaders'): Promise<{ [key: string]: string }>;
    property(key: 'paperSize'): Promise<IPaperSizeOptions>;
    property(key: 'scrollPosition'): Promise<{ top: number, left: number }>;
    property(key: 'viewportSize'): Promise<{ width: number, height: number }>;
    property<T>(key: string): Promise<T>;
    property<T>(key: string, value: T): Promise<void>;

    setting(key: 'javascriptEnabled' | 'loadImages'
        | 'localToRemoteUrlAccessEnabled' | 'XSSAuditingEnabled'
        | 'webSecurityEnabled'): Promise<boolean>;
    setting(key: 'userAgent' | 'userName' | 'password'): Promise<string>;
    setting(key: 'resourceTimeout'): Promise<number>;
    setting<T>(key: string): Promise<T>;
    setting<T>(key: string, value: T): Promise<T>;

    addCookie(cookie: ICookie): Promise<boolean>;
    deleteCookie(cookieName: string): Promise<boolean>;
    clearCookies(): Promise<void>;
}

export interface ICookie {
    name: string,
    value: string,
    domain?: string,
    path: string,
    httponly?: boolean,
    secure?: boolean,
    expires?: string
}

export interface IPaperSizeOptions {
    width?: string;
    height?: string;
    format?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid';
    orientation?: 'portrait' | 'landscape';
    margin?: string | { top?: string; left?: string; bottom?: string; right?: string; };
    header?: {
        height: string,
        contents: IPhantomCallback
    };
    footer?: {
        height: string;
        contents: IPhantomCallback
    };
}

export interface IOpenWebPageSettings {
    operation?: 'GET' | 'POST' | 'HEAD' | 'DELETE' | 'PUT' | string;
    encoding?: 'utf8' | string;
    headers?: { [s: string]: string };
    data?: string;
}

/**
 * The phantom.callback object
 */
export interface IPhantomCallback {
    transform: true;
    target: Function;
    method: 'callback';
    parent: 'phantom'
}

export interface IResponse {
    id: string;
    url: string;
    time: Date;
    headers: { name: string, value: string }[];
    bodySize: number;
    contentType: string;
    redirectURL: string;
    stage: 'start' | 'end';
    status: number;
    statusText: string;
}

export interface IRequestData {
    id: number;
    method: string;
    url: string;
    time: Date;
    headers: { name: string, value: string }[];
}
