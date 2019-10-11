/**
 * Definition from Page.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Page.js
 */
import { Contentable, Evalable, EvaluateFn, Evaluateable, FrameBase, NavigationOptions, SerializableOrJSHandle, Timeoutable, Viewport, WaitForable, ScriptTagOptions, StyleTagOptions, UnwrapElementHandle, WrapElementHandle, EvaluateFnReturnType, WaitForSelectorOptionsHidden, WaitForSelectorOptions, DirectNavigationOptions, PageFnOptions } from "./able";
import { EventEmitter } from "events";
import { Accessibility } from "./Accessibility";
import { Browser, BrowserContext } from "./Browser";
import { Frame } from "./FrameManager";
import { Keyboard, Mouse, Touchscreen, ClickOptions } from "./Input";
import { JSHandle, Base64ScreenShotOptions, BinaryScreenShotOptions, ScreenshotOptions, ElementHandle } from "./JSHandle";
import { Target } from "./Target";
import { Coverage } from "./Coverage";
import { ConsoleMessage, Headers, Request, Response } from "./NetworkManager";
import { Dialog } from "./Dialog";
import { Worker } from "./Worker";

/** Page provides methods to interact with a single tab in Chromium. One Browser instance might have multiple Page instances. */
export class Page extends EventEmitter {
  /**
   * Adds the listener function to the end of the listeners array for the event named `eventName`.
   * No checks are made to see if the listener has already been added. Multiple calls passing the same combination of
   * `eventName` and listener will result in the listener being added, and called, multiple times.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  on<K extends keyof PageEventObj>(
    eventName: K,
    handler: (e: PageEventObj[K], ...args: any[]) => void
  ): this;

  /**
   * Adds a one time listener function for the event named `eventName`.
   * The next time `eventName` is triggered, this listener is removed and then invoked.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  once<K extends keyof PageEventObj>(
    eventName: K,
    handler: (e: PageEventObj[K], ...args: any[]) => void
  ): this;

  accessibility: Accessibility;

  /**
   * Provide credentials for http authentication.
   * To disable authentication, pass `null`.
   */
  authenticate(credentials: AuthOptions | null): Promise<void>;

  /** Brings page to front (activates tab). */
  bringToFront(): Promise<void>;

  /** Get the browser the page belongs to. */
  browser(): Browser;

  /** Get the browser context that the page belongs to. */
  browserContext(): BrowserContext;

  /** Closes the current page. */
  close(options?: PageCloseOptions): Promise<void>;

  /**
   * Gets the cookies.
   * If no URLs are specified, this method returns cookies for the current page URL.
   * If URLs are specified, only cookies for those URLs are returned.
   */
  cookies(...urls: string[]): Promise<Cookie[]>;

  coverage: Coverage;

  /**
   * Deletes the specified cookies.
   */
  deleteCookie(...cookies: DeleteCookie[]): Promise<void>;

  /** Emulates given device metrics and user agent. This method is a shortcut for `setUserAgent` and `setViewport`.  */
  emulate(options: EmulateOptions): Promise<void>;

  /** Emulates the media. */
  emulateMedia(mediaType: MediaType | null): Promise<void>;

  /**
   * Adds a function which would be invoked in one of the following scenarios: whenever the page is navigated; whenever the child frame is attached or navigated.
   * The function is invoked after the document was created but before any of its scripts were run. This is useful to amend JavaScript environment, e.g. to seed Math.random.
   * @param fn The function to be evaluated in browser context.
   * @param args The arguments to pass to the `fn`.
   */
  evaluateOnNewDocument(
    fn: EvaluateFn,
    ...args: SerializableOrJSHandle[]
  ): Promise<void>;

  /**
   * The method adds a function called name on the page's `window` object.
   * When called, the function executes `puppeteerFunction` in node.js and returns a
   * Promise which resolves to the return value of `puppeteerFunction`.
   * @param name The name of the function on the window object.
   * @param fn Callback function which will be called in Puppeteer's context.
   */
  exposeFunction(name: string, puppeteerFunction: (...args: any[]) => any): Promise<void>;

  /** An array of all frames attached to the page. */
  frames(): Frame[];

  /**
   * Navigate to the previous page in history.
   * @param options The navigation parameters.
   */
  goBack(options?: NavigationOptions): Promise<Response | null>;

  /**
   * Navigate to the next page in history.
   * @param options The navigation parameters.
   */
  goForward(options?: NavigationOptions): Promise<Response | null>;

  /** Returns the virtual keyboard. */
  keyboard: Keyboard;

  /** Indicates that the page has been closed. */
  isClosed(): boolean;

  /** Page is guaranteed to have a main frame which persists during navigation's. */
  mainFrame(): Frame;

  /** Gets the page metrics. */
  metrics(): Promise<Metrics>;

  /** Gets the virtual mouse. */
  mouse: Mouse;

  /**
   * Generates a PDF of the page with `print` css media.
   * To generate a pdf with `screen` media, call `page.emulateMedia('screen')` before calling `page.pdf()`:
   * @param options The PDF parameters.
   */
  pdf(options?: PDFOptions): Promise<Buffer>;

  /**
   * The method iterates JavaScript heap and finds all the objects with the given prototype.
   * @param prototypeHandle A handle to the object prototype.
   */
  queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>;

  /**
   * Reloads the current page.
   * @param options The navigation parameters.
   */
  reload(options?: NavigationOptions): Promise<Response>;

  /**
   * Captures a screenshot of the page.
   * @param options The screenshot options.
   */
  screenshot(options?: Base64ScreenShotOptions): Promise<string>;
  screenshot(options?: BinaryScreenShotOptions): Promise<Buffer>;
  screenshot(options?: ScreenshotOptions): Promise<string | Buffer>;

  /**
   * Toggles bypassing page's Content-Security-Policy.
   * NOTE CSP bypassing happens at the moment of CSP initialization rather then evaluation.
   * Usually this means that page.setBypassCSP should be called before navigating to the domain.
   * @param enabled sets bypassing of page's Content-Security-Policy.
   */
  setBypassCSP(enabled: boolean): Promise<void>;

  /**
   * Determines whether cache is enabled on the page.
   * @param [enabled=true] Whether or not to enable cache on the page.
   */
  setCacheEnabled(enabled?: boolean): Promise<void>;

  /**
   * Sets the cookies on the page.
   * @param cookies The cookies to set.
   */
  setCookie(...cookies: SetCookie[]): Promise<void>;

  /**
   * This setting will change the default maximum navigation time of 30 seconds for the following methods:
   * - `page.goto`
   * - `page.goBack`
   * - `page.goForward`
   * - `page.reload`
   * - `page.waitForNavigation`
   */
  setDefaultNavigationTimeout(timeout: number): void;

  /**
   * This setting will change the default maximum time for the following methods and related shortcuts:
   * - `page.goBack`
   * - `page.goForward`
   * - `page.goto`
   * - `page.reload`
   * - `page.setContent`
   * - `page.waitFor`
   * - `page.waitForFunction`
   * - `page.waitForNavigation`
   * - `page.waitForRequest`
   * - `page.waitForResponse`
   * - `page.waitForSelector`
   * - `page.waitForXPath`
   *
   * NOTE page.setDefaultNavigationTimeout takes priority over page.setDefaultTimeout
   * @since 1.12.0
   */
  setDefaultTimeout(timeout: number): void;

  /**
   * The extra HTTP headers will be sent with every request the page initiates.
   * @param headers An object containing additional http headers to be sent with every request. All header values must be strings.
   */
  setExtraHTTPHeaders(headers: Headers): Promise<void>;

  /**
   * Sets the page's geolocation.
   */
  setGeolocation(options: GeoOptions): Promise<void>;

  /**
   * Determines whether JavaScript is enabled on the page.
   * @param enable Whether or not to enable JavaScript on the page.
   */
  setJavaScriptEnabled(enabled: boolean): Promise<void>;

  /**
   * Determines whether the offline mode is enabled.
   * @param enabled When `true`, enables the offline mode for the page.
   */
  setOfflineMode(enabled: boolean): Promise<void>;

  /**
   * Determines whether the request interception is enabled.
   * @param enabled When `true` the methods `request.abort`, `request.continue` and `request.respond` must be used.
   */
  setRequestInterception(enabled: boolean): Promise<void>;

  /**
   * Specifies the User-Agent used in this page.
   * @param userAgent The user-agent to be used in the page.
   */
  setUserAgent(userAgent: string): Promise<void>;
  /**
   * Sets the viewport of the page.
   * @param viewport The viewport parameters.
   */
  setViewport(viewport: Viewport): Promise<void>;

  /** @returns The target this page was created from */
  target(): Target;

  /** Returns the virtual touchscreen object. */
  touchscreen: Touchscreen;

  /** Returns the tracing object. */
  tracing: Tracing;

  /**
   * The page's URL. This is a shortcut for `page.mainFrame().url()`
   */
  url(): string;

  /** Gets the page viewport. */
  viewport(): Viewport;

  waitForRequest(
    urlOrPredicate: string | ((req: Request) => boolean),
    options?: Timeoutable
  ): Promise<Request>;

  waitForResponse(
    urlOrPredicate: string | ((res: Response) => boolean),
    options?: Timeoutable
  ): Promise<Response>;

  /** This method returns all of the dedicated WebWorkers associated with the page. */
  workers(): Worker[];


  /**
   * Common Interface Contentable
   * share by `DOMWorld`, `Frame`, `Page`
   * Defines `addScriptTag`, `addStyleTag`, `click`, `content`, `select`, `setContent`, `tap`, `title`, `type`
   */

  /** Adds a `<script>` tag into the page with the desired url or content. */
  addScriptTag(options: ScriptTagOptions): Promise<void>;

  /** Adds a `<link rel="stylesheet">` tag into the page with the desired url or a `<style type="text/css">` tag with the content. */
  addStyleTag(options: StyleTagOptions): Promise<void>;

  /**
   * This method fetches an element with selector, scrolls it into view if needed, and
   * then uses `page.mouse` to click in the center of the element. If there's no element
   * matching selector, the method throws an error.
   * @param selector A selector to search for element to click. If there are multiple elements satisfying the selector, the first will be clicked.
   * @param options Specifies the click options.
   */
  click(selector: string, options?: ClickOptions): Promise<void>;

  /** Gets the full HTML contents of the page, including the doctype. */
  content(): Promise<string>;

  /**
   * Triggers a `change` and `input` event once all the provided options have been selected.
   * If there's no `<select>` element matching selector, the method throws an error.
   * @param selector A selector to query page for.
   * @param values Values of options to select. If the `<select>` has the `multiple` attribute,
   * all values are considered, otherwise only the first one is taken into account.
   */
  select(selector: string, ...values: string[]): Promise<string[]>;

  /**
   * Sets the page content.
   * @param html HTML markup to assign to the page.
   * @param options The navigation parameters.
   */
  setContent(html: string, options?: NavigationOptions): Promise<void>;

  /**
   * This method fetches an element with `selector`, scrolls it into view if needed,
   * and then uses page.touchscreen to tap in the center of the element.
   * @param selector A `selector` to search for element to tap. If there are multiple elements
   * satisfying the selector, the first will be tapped.
   */
  tap(selector: string): Promise<void>;

  /**
   * Returns the page's title.
   */
  title(): Promise<string>;

  /**
   * Sends a `keydown`, `keypress/input`, and `keyup` event for each character in the text.
   * @param selector A selector of an element to type into. If there are multiple elements satisfying the selector, the first will be used.
   * @param text: A text to type into a focused element.
   * @param options: The typing parameters.
   */
  type(selector: string, text: string, options?: { delay: number }): Promise<void>;

  /**
   * Common Interface Evalable
   * share by `DOMWorld`, `Frame`, `JSHandle`, `ElementHandle`, `Page`.
   * Defines `$eval`, `$$eval` `$`, `$$`, `$x`
   */
  /**
   * The method runs querySelector.
   * If there's no such element within the frame, the method will resolve to null.
   * @param selector A selector to query element for
   * @since 0.13.0
   */
  $(selector: string): Promise<ElementHandle | null>;
  /**
   * The method runs element.querySelectorAll within the page / frame.
   * If no elements match the selector, the return value resolve to [].
   * @param selector A selector to query element for
   * @since 0.13.0
   */
  $$(selector: string): Promise<ElementHandle[]>;

  /**
   * The method evaluates the XPath expression.
   * @param expression XPath expression to evaluate.
   */
  $x(expression: string): Promise<ElementHandle[]>;

  /**
   * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
   * If there's no element matching `selector`, the method throws an error.
   *
   * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @returns Promise which resolves to the return value of pageFunction
   */
  $eval<R>(
    selector: string,
    pageFunction: (element: Element) => R | Promise<R>,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
   * If there's no element matching `selector`, the method throws an error.
   *
   * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $eval<R, X1>(
    selector: string,
    pageFunction: (element: Element, x1: UnwrapElementHandle<X1>) => R | Promise<R>,
    x1: X1,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
   * If there's no element matching `selector`, the method throws an error.
   *
   * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @param x2 Second argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $eval<R, X1, X2>(
    selector: string,
    pageFunction: (element: Element, x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>) => R | Promise<R>,
    x1: X1,
    x2: X2,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
   * If there's no element matching `selector`, the method throws an error.
   *
   * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @param x2 Second argument to pass to pageFunction
   * @param x3 Third argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $eval<R, X1, X2, X3>(
    selector: string,
    pageFunction: (element: Element, x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>, x3: UnwrapElementHandle<X3>) => R | Promise<R>,
    x1: X1,
    x2: X2,
    x3: X3,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
   * If there's no element matching `selector`, the method throws an error.
   *
   * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param args Arguments to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $eval<R>(
    selector: string,
    pageFunction: (element: Element, ...args: any[]) => R | Promise<R>,
    ...args: SerializableOrJSHandle[]
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
   * first argument to `pageFunction`.
   *
   * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @returns Promise which resolves to the return value of pageFunction
   */
  $$eval<R>(
    selector: string,
    pageFunction: (elements: Element[], ...args: any[]) => R | Promise<R>,
    ...args: SerializableOrJSHandle[]
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
   * first argument to `pageFunction`.
   *
   * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $$eval<R, X1>(
    selector: string,
    pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>) => R | Promise<R>,
    x1: X1,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
   * first argument to `pageFunction`.
   *
   * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @param x2 Second argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $$eval<R, X1, X2>(
    selector: string,
    pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>) => R | Promise<R>,
    x1: X1,
    x2: X2,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
   * first argument to `pageFunction`.
   *
   * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param x1 First argument to pass to pageFunction
   * @param x2 Second argument to pass to pageFunction
   * @param x3 Third argument to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $$eval<R, X1, X2, X3>(
    selector: string,
    pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>, x3: UnwrapElementHandle<X3>) => R | Promise<R>,
    x1: X1,
    x2: X2,
    x3: X3,
  ): Promise<WrapElementHandle<R>>;

  /**
   * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
   * first argument to `pageFunction`.
   *
   * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
   *
   * @param selector A selector to query for
   * @param pageFunction Function to be evaluated in browser context
   * @param args Arguments to pass to pageFunction
   * @returns Promise which resolves to the return value of pageFunction
   */
  $$eval<R>(
    selector: string,
    pageFunction: (elements: Element[], ...args: any[]) => R | Promise<R>,
    ...args: SerializableOrJSHandle[]
  ): Promise<WrapElementHandle<R>>;


  /**
   * Common Interface Evaluateable
   * share by `DOMWorld`, `ExecutionContext`, `Frame`, `Page`, `Worker`
   * Defines `evaluate`, `evaluateHandle`
   */

  /**
   * If the function passed to the `evaluate` returns a Promise,
   * then `evaluate` would wait for the promise to resolve and return its value.
   *
   * If the function passed to the `evaluate` returns a non-Serializable value,
   * then `evaluate` resolves to `undefined`.
   *
   * If `pageFunction` is a string args is ignore
   *
   * @param pageFunction Function to be evaluated in browser context
   * @param args Arguments to pass to `pageFunction`
   */
  evaluate<T extends EvaluateFn>(
    pageFunction: T,
    ...args: SerializableOrJSHandle[]
  ): Promise<EvaluateFnReturnType<T>>;

  /**
   * The only difference between `evaluate` and `evaluateHandle` is
   * that `evaluateHandle` returns in-page object (JSHandle).
   * Evaluates a function in the page context.
   * If the function, passed to the `evaluateHandle`, returns a Promise, then `evaluateHandle`
   * would wait for the promise to resolve and return its value.
   *
   * If `pageFunction` is a string args is ignore
   * @param pageFunction The function to be evaluated in the page context.
   * @param args The arguments to pass to the `pageFunction`.
   * @returns A promise which resolves to return value of `pageFunction`.
   */
  evaluateHandle(
    pageFunction: EvaluateFn,
    ...args: SerializableOrJSHandle[]
  ): Promise<JSHandle>;


  /**
   * Common Interface FrameBase
   * share by `Frame` and `Page`
   * Defines `goto`, `url`, `waitFor`, `waitForNavigation`
   */
    /**
     * Navigates to a URL.
     * @param url URL to navigate page to. The url should include scheme, e.g. `https://`
     * @param options The navigation parameters.
     */
    goto(url: string, options?: DirectNavigationOptions): Promise<Response | null>;

    /** Returns frame's url. */
    url(): string;

    /**
     * Waits for a certain amount of time before resolving.
     * @param duration The time to wait for.
     */
    waitFor(duration: number): Promise<void>;
    /**
     * Shortcut for waitForSelector and waitForXPath
     */
    waitFor(selector: string, options: WaitForSelectorOptionsHidden): Promise<ElementHandle | null>;
    waitFor(selector: string, options?: WaitForSelectorOptions): Promise<ElementHandle>;

    /**
     * Shortcut for waitForFunction.
     */
    waitFor(
        selector: EvaluateFn,
        options?: WaitForSelectorOptions,
        ...args: SerializableOrJSHandle[]
    ): Promise<JSHandle>;

    /**
     * Wait for the page navigation occur.
     * @param options The navigation parameters.
     */
    waitForNavigation(options?: NavigationOptions): Promise<Response>;


    /**
     * Common Interface WaitForable
     * share by `DOMWorld`, `Frame` and `Page`
     * Defines `waitForFunction`, `waitForSelector`, `waitForXPath`
     */
    /**
     * Allows waiting for various conditions.
     */
    waitForFunction(
      fn: EvaluateFn,
      options?: PageFnOptions,
      ...args: SerializableOrJSHandle[]
  ): Promise<JSHandle>;

  waitForSelector(
      selector: string,
      options?: WaitForSelectorOptions,
  ): Promise<ElementHandle>;

  waitForSelector(
      selector: string,
      options?: WaitForSelectorOptionsHidden,
  ): Promise<ElementHandle | null>;

  waitForXPath(
      xpath: string,
      options?: WaitForSelectorOptions,
  ): Promise<ElementHandle>;
}

export interface PageEventObj {
  /** Emitted when the page closes. */
  close: undefined;
  /**
   * Emitted when JavaScript within the page calls one of console API methods, e.g. console.log or console.dir.
   * Also emitted if the page throws an error or a warning.
   */
  console: ConsoleMessage;
  /**
   * Emitted when a JavaScript dialog appears, such as alert, prompt, confirm or beforeunload.
   * Puppeteer can respond to the dialog via Dialog's accept or dismiss methods.
   */
  dialog: Dialog;
  /**
   * Emitted when the initial HTML document has been completely loaded and parsed,
   * without waiting for stylesheets, images, and subframes to finish loading.
   */
  domcontentloaded: never;
  /** Emitted when the page crashes. */
  error: Error;
  /** Emitted when a frame is attached. */
  frameattached: Frame;
  /** Emitted when a frame is detached. */
  framedetached: Frame;
  /** Emitted when a frame is navigated to a new url. */
  framenavigated: Frame;
  /** Emitted when the JavaScript load event is dispatched. */
  load: undefined;
  /**
   * Emitted when the JavaScript code makes a call to `console.timeStamp`.
   * For the list of metrics see `page.metrics`.
   */
  metrics: { title: string, metrics: Metrics };
  /** Emitted when an uncaught exception happens within the page. */
  pageerror: Error;
  /** Emitted when the page opens a new tab or window. */
  popup: Page;
  /**
   * Emitted when a page issues a request. The request object is read-only.
   * In order to intercept and mutate requests, see page.setRequestInterceptionEnabled.
   */
  request: Request;
  /** Emitted when a request fails, for example by timing out. */
  requestfailed: Request;
  /** Emitted when a request finishes successfully. */
  requestfinished: Request;
  /** Emitted when a response is received. */
  response: Response;
  /** Emitted when a dedicated WebWorker is spawned by the page. */
  workercreated: Worker;
  /** Emitted when a dedicated WebWorker is terminated. */
  workerdestroyed: Worker;
}

export interface PageCloseOptions {
  /**
   * Whether to run the before unload page handlers.
   * @default false
   */
  runBeforeUnload?: boolean;
}

export interface GeoOptions {
  /**
   * Latitude between -90 and 90.
   */
  latitude: number;
  /**
   * Longitude between -180 and 180.
   */
  longitude: number;
  /**
   * Non-negative accuracy value.
   */
  accuracy?: number;
}

/**
 * You can use `tracing.start` and `tracing.stop` to create a trace file which can be opened in Chrome DevTools or timeline viewer.
 */
export interface Tracing {
  start(options: TracingStartOptions): Promise<void>;
  stop(): Promise<Buffer>;
}

export interface TracingStartOptions {
  path: string;
  screenshots?: boolean;
  categories?: string[];
}

export type MediaType = "screen" | "print";

export interface AuthOptions {
  username: string;
  password: string;
}

export type SameSiteSetting = "Strict" | "Lax";

/** Represents a browser cookie. */
export interface Cookie {
  /** The cookie name. */
  name: string;
  /** The cookie value. */
  value: string;
  /** The cookie domain. */
  domain: string;
  /** The cookie path. */
  path: string;
  /** The cookie Unix expiration time in seconds. */
  expires: number;
  /** The cookie size */
  size: number;
  /** The cookie http only flag. */
  httpOnly: boolean;
  /** The session cookie flag. */
  session: boolean;
  /** The cookie secure flag. */
  secure: boolean;
  /** The cookie same site definition. */
  sameSite: SameSiteSetting;
}

export interface DeleteCookie {
  /** The cookie name. */
  name: string;
  url?: string;
  domain?: string;
  path?: string;
}

export interface SetCookie {
  /** The cookie name. */
  name: string;
  /** The cookie value. */
  value: string;
  /** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. */
  url?: string;
  /** The cookie domain. */
  domain?: string;
  /** The cookie path. */
  path?: string;
  /** The cookie Unix expiration time in seconds. */
  expires?: number;
  /** The cookie http only flag. */
  httpOnly?: boolean;
  /** The session cookie flag. */
  session?: boolean;
  /** The cookie secure flag. */
  secure?: boolean;
  /** The cookie same site definition. */
  sameSite?: SameSiteSetting;
}
export interface PDFOptions {
  /**
   * The file path to save the PDF to.
   * If `path` is a relative path, then it is resolved relative to current working directory.
   * If no path is provided, the PDF won't be saved to the disk.
   */
  path?: string;
  /**
   * Scale of the webpage rendering.
   * @default 1
   */
  scale?: number;
  /**
   * Display header and footer.
   * @default false
   */
  displayHeaderFooter?: boolean;
  /**
   * HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them:
   * - `date` formatted print date
   * - `title` document title
   * - `url` document location
   * - `pageNumber` current page number
   * - `totalPages` total pages in the document
   */
  headerTemplate?: string;
  /**
   * HTML template for the print footer. Should be valid HTML markup with following classes used to inject printing values into them:
   * - `date` formatted print date
   * - `title` document title
   * - `url` document location
   * - `pageNumber` current page number
   * - `totalPages` total pages in the document
   */
  footerTemplate?: string;
  /**
   * Print background graphics.
   * @default false
   */
  printBackground?: boolean;
  /**
   * Paper orientation.
   * @default false
   */
  landscape?: boolean;
  /**
   * Paper ranges to print, e.g., '1-5, 8, 11-13'.
   * @default '' which means print all pages.
   */
  pageRanges?: string;
  /**
   * Paper format. If set, takes priority over width or height options.
   * @default 'Letter'
   */
  format?: PDFFormat;
  /** Paper width. */
  width?: LayoutDimension;
  /** Paper height. */
  height?: LayoutDimension;
  /** Paper margins, defaults to none. */
  margin?: {
    /** Top margin. */
    top?: LayoutDimension;
    /** Right margin. */
    right?: LayoutDimension;
    /** Bottom margin. */
    bottom?: LayoutDimension;
    /** Left margin. */
    left?: LayoutDimension;
  };
  /**
   * Give any CSS @page size declared in the page priority over what is declared in width and
   * height or format options.
   * @default false which will scale the content to fit the paper size.
   */
  preferCSSPageSize?: boolean;
}

export type PDFFormat =
  | "Letter"
  | "Legal"
  | "Tabloid"
  | "Ledger"
  | "A0"
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5";

/** Accepts values labeled with units. If number, treat as pixels. */
export type LayoutDimension = string | number;

export interface Metrics {
  /** The timestamp when the metrics sample was taken. */
  Timestamp: number;
  /** Number of documents in the page. */
  Documents: number;
  /** Number of frames in the page. */
  Frames: number;
  /** Number of events in the page. */
  JSEventListeners: number;
  /** Number of DOM nodes in the page. */
  Nodes: number;
  /** Total number of full or partial page layout. */
  LayoutCount: number;
  /** Total number of page style recalculations. */
  RecalcStyleCount: number;
  /** Combined durations of all page layouts. */
  LayoutDuration: number;
  /** Combined duration of all page style recalculations. */
  RecalcStyleDuration: number;
  /** Combined duration of JavaScript execution. */
  ScriptDuration: number;
  /** Combined duration of all tasks performed by the browser. */
  TaskDuration: number;
  /** Used JavaScript heap size. */
  JSHeapUsedSize: number;
  /** Total JavaScript heap size. */
  JSHeapTotalSize: number;
}

/** Page emulation options. */
export interface EmulateOptions {
  /** The viewport emulation options. */
  viewport?: Viewport;
  /** The emulated user-agent. */
  userAgent?: string;
}
