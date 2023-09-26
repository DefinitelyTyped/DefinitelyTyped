/// <reference types="node" />

import { Browser, Page, Serializable } from "puppeteer";

export type Channel = string;

/**
 * Evaluates a function in the context of the page
 * @param pageFunction  Function to be evaluated in the page context.
 * @param args Arguments to pass to pageFunction.
 *
 * If the function passed to the Window.evaluate returns a Promise,
 * then Window.evaluate would wait for the promise to resolve and return its value.
 *
 * If the function passed to the Window.evaluate returns a non-Serializable value,
 * then Window.evaluate resolves to undefined.
 */
export type EvaluateFunction = (
    pageFunction: ((...args: any[]) => any) | string,
    ...args: Serializable[]
) => Promise<Serializable>;

export interface WindowOptions {
    /**
     * App window width in pixels.
     */
    width?: number | undefined;

    /**
     * App window height in pixels.
     */
    height?: number | undefined;

    /**
     * App window top offset in pixels.
     */
    top?: number | undefined;

    /**
     * App window left offset in pixels.
     */
    left?: number | undefined;

    /**
     * Background color using hex notation, defaults to '#ffffff'.
     */
    bgcolor?: string | undefined;
}

/**
 * Set of configurable options to set on the app.
 */
export interface LaunchOptions extends WindowOptions {
    /**
     * Browser to be used, defaults to ['stable']
     */
    channel?: Channel[] | undefined;

    /**
     * Application icon to be used in the system dock.
     * Either buffer containing PNG or a path to the PNG file on the file system.
     * This feature is only available in Chrome M72+.
     * One can use 'canary' channel to see it in action before M72 hits stable.
     */
    icon?: Buffer | string | undefined;

    /**
     * Optional parameters to share between Carlo instances.
     */
    paramsForReuse?: any;

    /**
     * Application title
     */
    title?: string | undefined;

    /**
     *  Path to a User Data Directory. This folder is created upon the first app launch and contains user settings and Web storage data. Defaults to '.profile'.
     */
    userDataDir?: string | undefined;

    /**
     * Path to a Chromium or Chrome executable to run instead of the automatically located Chrome.
     * If executablePath is a relative path, then it is resolved relative to current working directory.
     * Carlo is only guaranteed to work with the latest Chrome stable version.
     */
    executablePath?: string | undefined;

    /**
     * Additional arguments to pass to the browser instance.
     */
    args?: string[] | undefined;
}

export type AppEvent = "exit" | "window";
export type WindowEvent = "close";

export interface Bounds {
    /**
     * Top offset in pixels.
     */
    top: number;

    /**
     * Left offset in pixels.
     */
    left: number;

    /**
     * Width in pixels.
     */
    width: number;

    /**
     * Height in pixels.
     */
    height: number;
}

export interface Window {
    /**
     * 'close' - Emitted when the window closes.
     * @param name 'close'
     */
    on(name: AppEvent, callback: (...args: any[]) => void): void;

    /**
     * Returns window bounds
     */
    bounds(): Promise<Bounds>;

    /**
     * Brings this window to front.
     */
    bringToFront(): Promise<void>;

    /**
     * Closes this window.
     */
    close(): Promise<void>;

    evaluate: EvaluateFunction;

    /**
     * @param name Name of the function on the window object.
     * @param carloFunction Callback function which will be called in Carlo's context.
     */
    exposeFunction(name: string, carloFunction: (...args: any[]) => any): Promise<void>;

    /**
     * Turns the window into the full screen mode. Behavior is platform specific.
     */
    fullscreen(): Promise<void>;

    /**
     * Navigates the corresponding web page to the given uri,
     * makes given params available in web page via carlo.loadParams()
     * Resolves upon DOMContentLoaded event in the web page.
     * @param uri Path to the resource relative to the folder passed into serveFolder()
     * @param params Optional parameters to pass to the web application.
     */
    load(uri: string, params?: any): Promise<void>;

    /**
     * Maximizes the window. Behavior is platform-specific.
     */
    maximize(): Promise<void>;

    /**
     * Minimizes the window. Behavior is platform-specific.
     */
    minimize(): Promise<void>;

    /**
     * Returns Puppeteer page object for testing.
     */
    pageForTest(): Page;

    /**
     * Returns the options.paramsForReuse value passed into the carlo.launch.
     */
    paramsForReuse(): any;

    /**
     * Same as App.serveFolder(folder[, prefix]), but only applies to current window.
     * @param folder Folder with web content to make available to Chrome.
     * @param prefix Prefix of the URL path to serve from the given folder.
     */
    serveFolder(folder: string, prefix?: string): void;

    /**
     * Same as App.serveHandler(handler), but only applies to the current window requests.
     * Only single window-level handler can be installed in window.
     * @param handle Network handler callback accepting the HttpRequest parameter.
     */
    serveHandler(handle: (request: HttpRequest) => void): void;

    /**
     * Same as App.serveOrigin(base[, prefix]), but only applies to current window.
     * @param base Base to serve web content from.
     * @param prefix Prefix of the URL path to serve from the given folder.
     */
    serveOrigin(base: string, prefix?: string): Promise<void>;

    /**
     * Sets window bounds. Parameters top, left, width and height are all optional.
     * Dimension or the offset is only applied when specified.
     * @param bounds Window bounds
     */
    setBounds(bounds: {
        /**
         * Top offset in pixels.
         */
        top?: number | undefined;

        /**
         * Left offset in pixels.
         */
        left?: number | undefined;

        /**
         * Width in pixels.
         */
        width?: number | undefined;

        /**
         * Height in pixels.
         */
        height?: number | undefined;
    }): Promise<void>;
}

export interface HttpRequest {
    /**
     * Aborts request.
     * If request is a navigation request, navigation is aborted as well.
     */
    abort(): Promise<void>;

    /**
     * Proceeds with the default behavior for this request.
     * Either serves it from the filesystem or defers to the browser.
     */
    continue(): Promise<void>;

    /**
     * Marks the request as failed.
     * If request is a navigation request, navigation is still committed, but to a location that fails to be fetched.
     */
    fail(): Promise<void>;

    /**
     * Fulfills the network request with the given data. 'Content-Length' header is generated in case it is not listed in the headers.
     */
    fulfill(options: {
        /**
         * HTTP status code (200, 304, etc), defaults to 200.
         */
        status: number;

        /**
         * HTTP response headers.
         */
        headers: object;

        /**
         *  Response body.
         */
        body: Buffer;
    }): Promise<void>;

    /**
     * Network request headers
     */
    headers(): object;

    /**
     * HTTP method of this network request (GET, POST, etc.)
     */
    method(): string;

    /**
     * Network request URL
     */
    url(): string;
}

export interface App {
    /**
     * 'exit' - Emitted when the last window closes.
     * 'window' - Emitted when the new window opens.
     * @param name 'exit' or 'window'
     * @param callback
     */
    on(name: AppEvent, callback: (...args: any[]) => void): void;

    /**
     * Puppeteer browser object for testing.
     */
    browserForTest(): Browser;

    createWindow(options?: WindowOptions): Promise<Window>;

    evaluate: EvaluateFunction;

    /**
     * Closes the browser window
     */
    exit(): Promise<void>;

    /**
     * The method adds a function called name on the pages' window object.
     * When called, the function executes carloFunction in Node.js and returns a Promise which resolves to the return value of carloFunction.
     * @param name
     * @param carloFunction
     */
    exposeFunction(name: string, carloFunction: (...args: any[]) => any): Promise<void>;

    /**
     * Shortcut to the main window's Window.load
     * @param uri
     * @param params
     */
    load(uri: string, ...params: any[]): Promise<void>;

    /**
     * Running app guarantees to have main window.
     * If current main window closes, a next open window becomes the main one.
     */
    mainWindow(): Window;

    /**
     * Makes the content of the given folder available to the Chrome web app
     * @param folder Folder with web content to make available to Chrome
     * @param prefix Prefix of the URL path to serve from the given folder
     */
    serveFolder(folder: string, prefix?: string): void;

    /**
     * Handler function is called with every network request in this app.
     * It can abort, continue or fulfill each request.
     * Only single app-wide handler can be registered.
     * @param handler Network handler callback accepting the HttpRequest parameter.
     */
    serveHandler(handler: (request: HttpRequest) => void): void;

    /**
     * Fetches Carlo content from the specified origin instead of reading it from the file system, eg http://localhost:8080.
     * This mode can be used for the fast development mode available in web frameworks.
     * @param base Base to serve web content from.
     * @param prefix Prefix of the URL path to serve from the given folder.
     */
    serveOrigin(base: string, prefix?: string): void;

    /**
     * Specifies image to be used as an app icon in the system dock.
     * This feature is only available in Chrome M72+. One can use 'canary' channel to see it in action before M72 hits stable.
     * @param image Either buffer containing PNG or a path to the PNG file on the file system.
     */
    setIcon(image: Buffer | string): void;

    /**
     * Returns all currently opened windows.
     * Running app guarantees to have at least one open window.
     */
    windows(): Window[];
}

/**
 * Launches the browser
 * @param options Set of configurable options to set on the app.
 */
export function launch(options?: LaunchOptions): Promise<App>;

/**
 * Enters headless test mode.
 */
export function enterTestMode(): void;

/**
 * Returns additional information about the file, otherwise not available to the web.
 * Available in Chrome M73+
 *
 * @param file File to get additional information for
 */
export function fileInfo(file: any): Promise<{
    /**
     * absolute path to the given file
     */
    path: string;
}>;

/**
 * This method is available in the Web world and returns parameters passed into the window.load().
 * This is how Carlo passes initial set of <rpc> handles to Node objects into the web world.
 */
export function loadParams(): Promise<ReadonlyArray<any>>;
