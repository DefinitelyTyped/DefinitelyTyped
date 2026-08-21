export = horseman;

declare class horseman {
    constructor(options: any);
    /** Handle page events inside PhantomJS. Phantom receives callback return value with .at but not with .on */
    at(eventType: string, callback: () => void): this;

    /** Get the value of an attribute for a selector. */
    attribute(selector: string, attr: string): string;

    /** Use basic HTTP authentication when opening a page. */
    authentication(username: string, password: string): this;

    /** Go back a page. */
    back(): this;

    /** Get the bounding rectangle of a selector. */
    boundingRectangle(selector: string): ClientRect;

    /** Clear an input field. */
    clear(selector: string): any;

    /** Click on a selector and fire a 'click event'. */
    click(selector: string): this;

    /** Close the instance and perform cleanup. */
    close(): this;

    /** Close a tab and release its resources. */
    closeTab(tabNumber: string): this;

    /** Set the cookies for Phantom. */
    cookies(args: object | object[] | string): this;
    /** Get the cookies from Phantom. */
    cookies(): string;

    /** Count the number of occurances of 'selector' on the page. */
    count(selector: string): number;

    /** Save a cropped screenshot to disk. */
    crop(area: string | object, path: string): this;

    /** Take a base64 encoded cropped screenshot. */
    cropBase64(area: string, type: string | "PNG"): any;

    /** Get the value of an css property of a selector. */
    cssProperty(selector: string, prop: string): string;

    /** Execute a function without breaking the api chain. */
    do(fn: () => void): this;

    /** Download a URL. */
    download(url: string, path: string, binary: boolean, method: string, data: string): this;

    /** Run a javascript function on the current page and optionally return the results. */
    evaluate(fn: () => void, args?: any[]): this;

    /** Determine if the selector exists, at least once, on the page. */
    exists(selector: string): boolean;

    /** Go forward a page. */
    forward(): this;

    /** Get the count of frames inside the current frame. */
    frameCount(): number;

    /** Get the name of the current frame. */
    frameName(): string;

    /** Get the names of the frames inside the current frame. */
    frameNames(): string;

    /** Set headers sent to the remote server during an 'open'. */
    headers(headers: object[]): this;

    /** Get the height of an element. */
    height(selector: string): number;

    /** Get the HTML for the page, or optionally for a selector. */
    html(selector?: string, file?: string): Promise<string>;

    /** Includes javascript script from a url on the page. */
    includeJs(url: string): this;

    /** Injects javascript from a file into the page. */
    injectJs(file: string): this;

    /** Fire a key event. */
    keyboardEvent(type?: string, key?: string, modifier?: number): this;

    /** Log the output from either a previous chain method, or a string the user passed in. */
    log(output?: string): this;

    /** Run javascript on the page. */
    manipulate(fn: () => void, args?: any[]): this;

    /** Fire a mouse event. */
    mouseEvent(type?: string, x?: number, y?: number, button?: string): this;

    /**
     * Handles page events.
     * eventType can be one of:
     *  initialized - callback()
     *  loadStarted - callback()
     *  loadFinished - callback(status)
     *  tabCreated - callback(tabNum, tab)
     *  tabClosed - callback(tabNum, tab)
     *  urlChanged - callback(targetUrl)
     *  navigationRequested - callback(url, type, willNavigate, main)
     *  resourceRequested - callback(requestData, networkRequest)
     *  resourceReceived - callback(response)
     *  pageCreated - callback(newPage)
     *  consoleMessage(msg, lineNum, sourceId)
     *  alert - callback(msg)
     *  confirm - callback(msg)
     *  prompt - callback(msg, defaultVal)
     *  filePicker - callback(oldFile)
     *  error - callback(msg, trace);
     *  timeout - callback(type)
     */
    on(
        event:
            | string
            | "timeout"
            | "tabCreated"
            | "tabClosed"
            | "resourceTimeout"
            | "urlChanged"
            | "resourceReceived"
            | "pageCreated"
            | "loadFinished",
        func: (...args: any[]) => void,
    ): this;

    /** Open a url in Phantom. */
    open(url: string, method?: string | "GET"): this;

    /** Open URL in a new tab */
    openTab(url: string): this;

    pageMaker(url: any, _page: any, ...args: any[]): any;

    /** Save the current page as a pdf. */
    pdf(path: string, paperSize: {
        format?: "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid" | undefined;
        orientation?: "portrait" | "landscape" | undefined;
        margin?: string | undefined;
    }): this;

    /** Get the plain text for the body of the page. */
    plainText(): string;

    /** Send Post data to a url. */
    post(url: string, postData: string): this;

    /** Send Put data to a url. */
    put(url: string, putData: string): this;

    /** Reload the page. */
    reload(): this;

    /** Save a screenshot to disk. */
    screenshot(path: string): this;

    /** Take a base64 encoded screenshot, e.g., PNG. */
    screenshotBase64(type: string | "PNG"): any;

    /** Scroll to a position on the page. */
    scrollTo(top: number, left: number): this;

    /** Select a value in an html select element. */
    select(selector: string, value: string): any;

    /** Change the proxy settings. */
    setProxy(ip: string, port: string, type: string, username: string, password: string): this;

    /** Get the HTTP status of the last opened page. */
    status(): string;

    /** Switch to a child frame. */
    switchToChildFrame(nameOrPosition: string | number): this;

    /** Switch to the focused frame. */
    switchToFocusedFrame(): this;

    /** Switch to a frame inside the current frame. */
    switchToFrame(nameOrPosition: string | number): this;

    /** Switch to the main frame. */
    switchToMainFrame(): this;

    /** Switch to the parent frame of the current frame. */
    switchToParentFrame(): this;

    /** Switch to another of the open tabs */
    switchToTab(tabNumber: number): this;

    /** Returns the number of tabs */
    tabCount(): number;

    /** Get the text for the body of the page, or optionally for a selector. */
    text(selector?: string): string;

    /** Get the title of the current page. */
    title(): string;

    /** Simulate a keypress on a selector */
    type(selector: string, text: string, options?: object): this;

    /** Upload a file to the page. */
    upload(selector: string, file: string): this;

    /** Get the url of the current page. */
    url(): string;

    /** Get or set the user agent for Phantom. */
    userAgent(...args: any[]): any;

    /** Get the value of an element. */
    value(selector: string): string;
    /** Sets the value of an element. */
    value(selector: string, value: string): this;

    /** Set the size of the viewport. */
    viewport(width: number, height: number): this;
    /** Get the size of the viewport. */
    viewport(): object;

    /** Determines if an element is visible. */
    visible(selector: string): boolean;

    /** Wait for a specified period of time */
    wait(milliseconds: number): this;

    /** Waits for a function to evaluate to a given value in browser. If optsOrFn is a function, use the classic signature waitFor(fn, arg1, arg2, value), If arg is an object, use waitFor(options). */
    waitFor(...args: any[]): this;

    /** Wait for a page load to occur */
    waitForNextPage(object?: object): this;

    /** Wait for a selector to be present on the current page. */
    waitForSelector(selector: string, options: object): this;

    /** Get the width of an element. */
    width(selector: string): number;

    /** Set the zoom factor of the page. */
    zoom(zoomFactor: number): this;
}
