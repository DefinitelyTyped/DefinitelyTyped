declare var phantom: Phantom;
declare var slimer: Slimer;

interface Slimer {
    version: number;
    geckoVersion: number;

    clearHttpAuth(): void;
    isExiting(): boolean;
    hasFeature(featureName: string): boolean;
    exit(returnValue?: number): void;
    wait(milliseconds: number): void;
}

interface Phantom {
    // Properties
    args: string[]; // DEPRECATED
    cookies: Cookie[];
    cookiesEnabled: boolean;
    libraryPath: string;
    scriptName: string; // DEPRECATED
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
    onError(msg: string, trace: string[]): any;
}

interface Std {
    read(): any;
    write(arg: any): void;
}

interface SystemModule {
    pid: number;
    platform: string;
    os: {
        architecture: string;
        name: string;
        version: string;
    };
    env: { [name: string]: string };
    args: string[];
    standarderr: Std;
    standardin: Std;
    standardout: Std;
    stdout: Std;
    stderr: Std;
    stdin: Std;
}

interface HttpConf {
    operation: string;
    data: any;
    headers: any;
}

interface WebPage {
    // Properties
    canGoBack: boolean;
    canGoForward: boolean;
    clipRect: ClipRect;
    content: string;
    cookies: Cookie[];
    customHeaders: { [name: string]: string };
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
    captureContent: RegExp[]; // slimerjs only

    // Functions
    addCookie(cookie: Cookie): boolean;
    childFramesCount(): number; // DEPRECATED
    childFramesName(): string; // DEPRECATED
    clearCookies(): void;
    close(): void;
    currentFrameName(): string; // DEPRECATED
    deleteCookie(cookieName: string): boolean;
    // evaluate<R>(callback: () => R): Promise<R>;
    // evaluate<T, R>(callback: (arg: T) => R, arg: T): Promise<R>;
    // evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, arg1: T1, arg2: T2): Promise<R>;
    // evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, arg1: T1, arg2: T2, arg3: T3): Promise<R>;
    // evaluate<R>(callback: (...args: any[]) => R, ...args: any[]): Promise<R>;
    evaluate<R>(callback: (...args: any[]) => R, ...args: any[]): R;
    evaluateAsync(fn: (...args: any[]) => void, delayMilli: number, ...args: any[]): void;
    evaluateJavaScript(str: string): any; // :TODO: elaborate this when documentation improves
    getPage(windowName: string): WebPage;
    go(index: number): void;
    goBack(): void;
    goForward(): void;
    includeJs(url: string): Promise<void>;
    includeJs(url: string, callback: () => void): void;
    injectJs(filename: string): Promise<boolean>;
    injectJs(filename: string): boolean;
    // open(url: string): Promise<string>;
    open(url: string, callback?: (status: string) => any): Promise<string>;
    open(url: string, method: string, callback: (status: string) => any): Promise<string>; // maybe data is missing
    open(url: string, method: string, data: any, callback?: (status: string) => any): Promise<string>;
    open(url: string, method: string, data: any, headers: any, callback: (status: string) => any): Promise<string>;
    openUrl(url: string, httpConf: HttpConf, settings: any): Promise<string>; // :TODO: elaborate this when documentation improves
    release(): void; // DEPRECATED
    reload(): void;
    // render(filename: string): Promise<void>;
    render(filename: string): void;
    render(
        filename: string,
        options?: {
            format?: string | undefined;
            quality?: string | undefined;
            ratio?: number | undefined;
            onlyViewport?: boolean | undefined;
        },
    ): Promise<void>;
    renderBase64(type: string): Promise<string>;
    renderBase64(format: string): string;
    sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): Promise<void>;
    sendEvent(keyboardEventType: string, key: string, null1?: null, null2?: null, modifier?: number): Promise<void>;
    sendEvent(mouseEventType: string, mouseX?: number, mouseY?: number, button?: string): void;
    sendEvent(keyboardEventType: string, keyOrKeys: any, aNull?: any, bNull?: any, modifier?: number): void;
    setContent(html: string, url: string): Promise<string>;
    setContent(content: string, url: string): void;
    stop(): void;
    switchToFocusedFrame(): void;
    switchToFrame(framePosOrName: number | string): void;
    // switchToFrame(framePosition: number): void;
    switchToChildFrame(framePosOrName: number | string): void;
    // switchToChildFrame(framePosition: number): void;
    switchToMainFrame(): void; // DEPRECATED
    switchToParentFrame(): void; // DEPRECATED
    uploadFile(selector: string, filename: string): void;

    // Callbacks
    onAlert(msg: string): any;
    onCallback(): void; // EXPERIMENTAL
    onClosing(closingPage: WebPage): any;
    onConfirm(msg: string): boolean;
    onConsoleMessage(msg: string, lineNum?: number, sourceId?: string): any;
    onError(msg: string, trace: string[]): any;
    onFilePicker(oldFile: string): string;
    onInitialized(): any;
    onLoadFinished(status: string): any;
    onLoadStarted(): any;
    onNavigationRequested(url: string, type: string, willNavigate: boolean, main: boolean): any;
    onPageCreated(newPage: WebPage): any;
    onPrompt(msg: string, defaultVal: string): string;
    onResourceError(resourceError: ResourceError): any;
    onResourceReceived(response: ResourceResponse): any;
    onResourceRequested(requestData: ResourceRequest, networkRequest: NetworkRequest): any;
    onUrlChanged(targetUrl: string): any;

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

interface HttpVersion {
    major: number;
    minor: number;
}

interface ResourceResponse {
    id: number;
    url: string;
    time: Date;
    headers: { [name: string]: string };
    bodySize: number;
    contentType?: string | undefined;
    redirectURL?: string | undefined;
    stage: string;
    status: number;
    statusText: string;
    contentCharset: string;
    referrer: string;
    isFileDownloading: boolean;
    body: any;
    httpVersion: HttpVersion;
}

interface ResourceRequest {
    id: number;
    method: string;
    url: string;
    time: Date;
    headers: { [name: string]: string };
}

interface NetworkRequest {
    abort(): void;
    changeUrl(url: string): void;
    setHeader(name: string, value: string): void;
}

interface PaperSize {
    width?: string | undefined;
    height?: string | undefined;
    border: string;
    format?: string | undefined;
    orientation?: string | undefined;
    margin?: any; // string | { top?: string; left?: string; bottom?: string; right?: string;  }
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
    // open(path: string, mode: string): IStream;
    // open(path: string, options: { mode: string; charset?: string; }): IStream;
    open(path: string, mode: string | { mode: string; charset?: string | undefined }): Stream;
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
    registerDirectory(urlpath: string, directoryPath: string): void;
    registerFile(urlpath: string, filePath: string): void;
    registerPathHandler(
        urlpath: string,
        handlerCallback: (request: WebServerRequest, response: WebServerResponse) => void,
    ): void;
    port: number;
    listen(port: number | string, cb?: (request: WebServerRequest, response: WebServerResponse) => void): boolean;
    // listen(ipAddressPort: string, cb?: (request: IWebServerRequest, response: IWebServerResponse) => void): boolean;
    close(): void;
}

interface WebServerModule {
    create(): WebServer;
}

interface WebServerRequest {
    method: string;
    url: string;
    httpVersion: number;
    headers: { [name: string]: string };
    post: string;
    postRaw: string;
}

interface WebServerResponse {
    headers: { [name: string]: string };
    setHeader(name: string, value: string): void;
    header(name: string): string;
    statusCode: number;
    setEncoding(encoding: string): void;
    write(data: string): void;
    writeHead(statusCode: number, headers?: { [name: string]: string }): void;
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
    domain?: string | undefined;
    path: string;
    httponly?: boolean | undefined;
    secure?: boolean | undefined;
    expires?: string | undefined;
    expiry: number;
}

interface WebPageModule {
    create(): WebPage;
    exit(returnValue?: number): void;
}

interface Opts {
    mode: string;
    charset: string;
    nobuffer: boolean;
}

interface FsModule {
    changeWorkingDirectory(path: string): void;
    workingDirectory: string;
    exists(path: string): boolean;
    isFile(path: string): boolean;
    isDirectory(path: string): boolean;
    isReadable(path: string): boolean;
    isWritable(path: string): boolean;
    isLink(path: string): boolean;
    size(path: string): number;
    lastModified(path: string): Date;
    read(path: string, mode: string): string;
    /*
      Mode is a string that can contain character which describes a characteristic of the returned stream.
      If the string contains "r", the file is opened in read-only mode.
      "w" opens the file in write-only mode.
      "b" opens the file in binary mode. If "b" is not present, the file is
          opened in text mode, and its contents are assumed to be UTF-8.
      "a" means to open as "append" mode: the file is open in write-only mode and all written character are append to the file
    */
    write(path: string, content: any, mode: string): void;
    separator: string;
    // last argument should be the filename
    join(basepath: string, dirname: string, ...args: string[]): string;
    split(path: string): string[];
    directory(path: string): string;
    dirname(path: string): string;
    base(path: string): string;
    basename(path: string): string;
    absolute(path: string): string;
    extension(path: string, withoutdot: boolean): string;
    list(path: string): string[];
    open(filename: string, opts: Opts): void;
    remove(path: string): void;
    makeDirectory(path: string): void;
    makeTree(path: string): void;
    mkpath(path: string): void;
    removeDirectory(path: string): void;
    removeTree(path: string): void;
    rmdir(path: string): void;
    copy(source: string, target: string): void;
    copyTree(source: string, target: string): void;
    rename(path: string, newname: string): void;
    move(source: string, target: string): void;
    touch(path: string, date: Date): void;
    readLink(path: string): string;
    isAbsolute(path: string): boolean;
    isExecutable(path: string): boolean;
}

declare function require(module: "webpage"): WebPageModule;
declare function require(module: "webserver"): WebServerModule;
declare function require(module: "system"): SystemModule;
declare function require(module: "fs"): FsModule;
declare function require(module: any): any;
