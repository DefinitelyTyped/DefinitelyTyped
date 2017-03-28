// Type definitions for SlimerJS 0.10
// Project: https://docs.slimerjs.org/current/index.html#api-reference
// Definitions by: Alex Wall <https://github.com/alexwall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare var phantom: IPhantom;
declare var slimer: ISlimer;

interface ISlimer {
  version: number;
  geckoVersion: number;

  clearHttpAuth(): void;
  isExiting(): boolean;
  hasFeature(featureName: string): boolean;
  exit(returnValue?: number): void;
  wait(milliseconds: number): void;
}

interface IPhantom {

    // Properties
    args: string[];  // DEPRECATED
    cookies: ICookie[];
    cookiesEnabled: boolean;
    libraryPath: string;
    scriptName: string;  // DEPRECATED
    version: {
        major: number;
        minor: number;
        patch: number;
    };

    // Functions
    addCookie(cookie: ICookie): boolean;
    clearCookies(): void;
    deleteCookie(cookieName: string): boolean;
    exit(returnValue?: any): boolean;
    injectJs(filename: string): boolean;

    // Callbacks
    onError: (msg: string, trace: string[]) => any;
}

interface IStd {
    read(): any;
    write(arg: any): void;
}

interface ISystemModule {
    pid: number;
    platform: string;
    os: {
        architecture: string;
        name: string;
        version: string;
    };
    env: { [name: string]: string; };
    args: string[];
    standarderr: IStd;
    standardin: IStd;
    standardout: IStd;
    stdout: IStd;
    stderr: IStd;
    stdin: IStd;
}

interface IHttpConf {
    operation: string;
    data: any;
    headers: any
}

interface IWebPage {

    // Properties
    canGoBack: boolean;
    canGoForward: boolean;
    clipRect: IClipRect;
    content: string;
    cookies: ICookie[];
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
    pages: IWebPage[];
    pagesWindowName: string;
    paperSize: IPaperSize;
    plainText: string;
    scrollPosition: ITopLeft;
    settings: IWebPageSettings;
    title: string;
    url: string;
    viewportSize: ISize;
    windowName: string;
    zoomFactor: number;
    captureContent: Array<RegExp>; // slimerjs only

    // Functions
    addCookie(cookie: ICookie): boolean;
    childFramesCount(): number;  // DEPRECATED
    childFramesName(): string;  // DEPRECATED
    clearCookies(): void;
    close(): Promise<void>;
    close(): void;
    currentFrameName(): string;  // DEPRECATED
    deleteCookie(cookieName: string): boolean;
    // evaluate<R>(callback: () => R): Promise<R>;
    // evaluate<T, R>(callback: (arg: T) => R, arg: T): Promise<R>;
    // evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, arg1: T1, arg2: T2): Promise<R>;
    // evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, arg1: T1, arg2: T2, arg3: T3): Promise<R>;
    // evaluate<R>(callback: (...args: any[]) => R, ...args: any[]): Promise<R>;
    evaluate<R>(callback: () => R, ...args: any[]): R;
    evaluateAsync(fn: () => void): void;
    evaluateJavaScript(str: string): any; // :TODO: elaborate this when documentation improves
    getPage(windowName: string): IWebPage;
    go(index: number): void;
    goBack(): void;
    goForward(): void;
    includeJs(url: string): Promise<void>;
    includeJs(url: string, callback: () => void): void;
    injectJs(filename: string): Promise<boolean>;
    injectJs(filename: string): boolean;
    open(url: string): Promise<string>;
    open(url: string, callback: (status: string) => any): Promise<string>;
    open(url: string, method: string, callback: (status: string) => any): Promise<string>; // maybe data is missing
    open(url: string, method: string, data: any, callback?: (status: string) => any): Promise<string>;
    open(url: string, method: string, data: any, headers: any, callback: (status: string) => any): Promise<string>;
    openUrl(url: string, httpConf: IHttpConf, settings: any): Promise<string>; // :TODO: elaborate this when documentation improves
    release(): void;  // DEPRECATED
    reload(): void;
    render(filename: string): Promise<void>;
    render(filename: string, options?: { format?: string; quality?: string; ratio?: number; onlyViewport?: boolean }): Promise<void>;
    renderBase64(type: string): Promise<string>;
    render(filename: string): void;
    renderBase64(format: string): string;
    sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): Promise<void>;
    sendEvent(keyboardEventType: string, key: string, null1?: undefined, null2?: undefined, modifier?: number): Promise<void>;
    sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): void;
    sendEvent(keyboardEventType: string, keyOrKeys: any, aNull?: any, bNull?: any, modifier?: number): void;
    setContent(html: string, url: string): Promise<string>;
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
    onCallback: () => void;  // EXPERIMENTAL
    onClosing: (closingPage: IWebPage) => any;
    onConfirm: (msg: string) => boolean;
    onConsoleMessage: (msg: string, lineNum?: number, sourceId?: string) => any;
    onError: (msg: string, trace: string[]) => any;
    onFilePicker: (oldFile: string) => string;
    onInitialized: () => any;
    onLoadFinished: (status: string) => any;
    onLoadStarted: () => any;
    onNavigationRequested: (url: string, type: string, willNavigate: boolean, main: boolean) => any;
    onPageCreated: (newPage: IWebPage) => any;
    onPrompt: (msg: string, defaultVal: string) => string;
    onResourceError: (resourceError: IResourceError) => any;
    onResourceReceived: (response: IResourceResponse) => any;
    onResourceRequested: (requestData: IResourceRequest, networkRequest: INetworkRequest) => any;
    onUrlChanged: (targetUrl: string) => any;

    // Callback triggers
    closing(closingPage: IWebPage): void;
    initialized(): void;
    javaScriptAlertSent(msg: string): void;
    javaScriptConsoleMessageSent(msg: string, lineNum?: number, sourceId?: string): void;
    loadFinished(status: string): void;
    loadStarted(): void;
    navigationRequested(url: string, type: string, willNavigate: boolean, main: boolean): void;
    rawPageCreated(newPage: IWebPage): void;
    resourceReceived(response: IResourceResponse): void;
    resourceRequested(requestData: IResourceRequest, networkRequest: INetworkRequest): void;
    urlChanged(targetUrl: string): void;
}

interface IResourceError {
    id: number;
    url: string;
    errorCode: string;
    errorString: string;
}

interface IHttpVersion {
  major: number,
  minor: number
}

interface IResourceResponse {
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
    contentCharset: string;
    referrer: string;
    isFileDownloading: boolean;
    body: any;
    httpVersion: IHttpVersion;
}

interface IResourceRequest {
    id: number;
    method: string;
    url: string;
    time: Date;
    headers: { [name: string]: string; };
}

interface INetworkRequest {
    abort(): void;
    changeUrl(url: string): void;
    setHeader(name: string, value: string): void;
}

interface IPaperSize {
    width?: string;
    height?: string;
    border: string;
    format?: string;
    orientation?: string;
    margin?: any; // string | { top?: string; left?: string; bottom?: string; right?: string;  }
}

interface IWebPageSettings {
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

interface IFileSystem {

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
    open(path: string, mode: string): IStream;
    open(path: string, options: { mode: string; charset?: string; }): IStream;
    read(path: string): string;
    write(path: string, content: string, mode: string): void;
    size(path: string): number;
    remove(path: string): void;
    copy(source: string, destination: string): void;
    move(source: string, destination: string): void;
    touch(path: string): void;
}

interface IStream {
    atEnd(): boolean;
    close(): void;
    flush(): void;
    read(): string;
    readLine(): string;
    seek(position: number): void;
    write(data: string): void;
    writeLine(data: string): void;
}

interface IWebServerModule {
    registerDirectory(urlpath: string, directoryPath: string): void;
    registerFile(urlpath: string, filePath: string): void;
    registerPathHandler(urlpath: string, handlerCallback: (request: IWebServerRequest, response: IWebServerResponse) => void): void
    port: number;
    listen(port: number, cb?: (request: IWebServerRequest, response: IWebServerResponse) => void): boolean;
    listen(ipAddressPort: string, cb?: (request: IWebServerRequest, response: IWebServerResponse) => void): boolean;
    close(): void;

}

interface IWebServerRequest {
    method: string;
    url: string;
    httpVersion: number;
    headers: { [name: string]: string; };
    post: string;
    postRaw: string;
}

interface IWebServerResponse {
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

interface ITopLeft {
    top: number;
    left: number;
}

interface ISize {
    width: number;
    height: number;
}

interface IClipRect extends ITopLeft, ISize {
}

interface ICookie {
    name: string,
    value: string,
    domain?: string,
    path: string,
    httponly?: boolean,
    secure?: boolean,
    expires?: string,
    expiry: number
}

interface IWebPageModule {
  create(): IWebPage;
  exit(returnValue?: number): void;
}

declare function require(module: "webpage"): IWebPageModule;
declare function require(module: "webserver"): IWebServerModule;
declare function require(module: "system"): ISystemModule;
