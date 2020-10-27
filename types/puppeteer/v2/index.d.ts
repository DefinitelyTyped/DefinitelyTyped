// Type definitions for puppeteer 2.1
// Project: https://github.com/GoogleChrome/puppeteer#readme
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Christopher Deutsch <https://github.com/cdeutsch>
//                 Konstantin Simon Maria Möllers <https://github.com/ksm2>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Serban Ghita <https://github.com/SerbanGhita>
//                 Jason Kaczmarsky <https://github.com/JasonKaz>
//                 Dave Cardwell <https://github.com/davecardwell>
//                 Andrés Ortiz <https://github.com/angrykoala>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { EventEmitter } from "events";
import { ChildProcess } from "child_process";

import * as errors from "./Errors";
import * as devices from "./DeviceDescriptors";

export { errors, devices };

/** Wraps a DOM element into an ElementHandle instance */
export type WrapElementHandle<X> = X extends Element ? ElementHandle<X> : X;

/** Unwraps a DOM element out of an ElementHandle instance */
export type UnwrapElementHandle<X> = X extends ElementHandle<infer E> ? E : X;

export type Serializable =
  | number
  | string
  | boolean
  | null
  | JSONArray
  | JSONObject;
export interface JSONArray extends Array<Serializable> { }
export interface JSONObject {
  [key: string]: Serializable;
}
export type SerializableOrJSHandle = Serializable | JSHandle;

export type Platform = "mac" | "win32" | "win64" | "linux";

export type Product = "chrome" | "firefox";

/** Defines `$eval` and `$$eval` for Page, Frame and ElementHandle. */
export interface Evalable {
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
    ...args: SerializableOrJSHandle[],
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
    pageFunction: (elements: Element[]) => R | Promise<R>,
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
}

export interface JSEvalable<A = any> {
    /**
     * Evaluates a function in the browser context.
     * If the function, passed to the frame.evaluate, returns a Promise, then frame.evaluate would wait for the promise to resolve and return its value.
     * If the function passed into frame.evaluate returns a non-Serializable value, then frame.evaluate resolves to undefined.
     * @param fn Function to be evaluated in browser context
     * @param args Arguments to pass to `fn`
     */
    evaluate<T extends EvaluateFn<A>>(
      pageFunction: T,
      ...args: SerializableOrJSHandle[],
    ): Promise<EvaluateFnReturnType<T> extends PromiseLike<infer U> ? U : EvaluateFnReturnType<T>>;
    /**
     * The only difference between `evaluate` and `evaluateHandle` is that `evaluateHandle` returns in-page object (`JSHandle`).
     * If the function, passed to the `evaluateHandle`, returns a `Promise`, then `evaluateHandle` would wait for the
     * promise to resolve and return its value.
     * @param fn Function to be evaluated in browser context
     * @param args Arguments to pass to `fn`
     */
    evaluateHandle(
      pageFunction: string | ((arg1: A, ...args: any[]) => any),
      ...args: SerializableOrJSHandle[],
    ): Promise<JSHandle>;
}

/** Keyboard provides an api for managing a virtual keyboard. */
export interface Keyboard {
  /**
   * Dispatches a keydown event.
   * @param key Name of key to press, such as ArrowLeft.
   * @param options Specifies a input text event.
   */
  down(key: string, options?: { text?: string }): Promise<void>;

  /** Shortcut for `keyboard.down` and `keyboard.up`. */
  press(key: string, options?: { text?: string, delay?: number }): Promise<void>;

  /** Dispatches a `keypress` and `input` event. This does not send a `keydown` or keyup `event`. */
  sendCharacter(char: string): Promise<void>;

  /**
   * Sends a keydown, keypress/input, and keyup event for each character in the text.
   * @param text A text to type into a focused element.
   * @param options Specifies the typing options.
   */
  type(text: string, options?: { delay?: number }): Promise<void>;

  /**
   * Dispatches a keyup event.
   * @param key Name of key to release, such as ArrowLeft.
   */
  up(key: string): Promise<void>;
}

export interface MousePressOptions {
  /**
   * left, right, or middle.
   * @default left
   */
  button?: MouseButtons;
  /**
   * The number of clicks.
   * @default 1
   */
  clickCount?: number;
}

export interface MouseWheelOptions {
    /**
     * X delta in CSS pixels for mouse wheel event (default: 0). Positive values emulate a scroll up and negative values a scroll down event.
     * @default 0
     */
    deltaX?: number;
    /**
     *  Y delta in CSS pixels for mouse wheel event (default: 0). Positive values emulate a scroll right and negative values a scroll left event.
     * @default 0
     */
    deltaY?: number;
}

export interface Mouse {
  /**
   * Shortcut for `mouse.move`, `mouse.down` and `mouse.up`.
   * @param x The x position.
   * @param y The y position.
   * @param options The click options.
   */
  click(x: number, y: number, options?: ClickOptions): Promise<void>;
  /**
   * Dispatches a `mousedown` event.
   * @param options The mouse press options.
   */
  down(options?: MousePressOptions): Promise<void>;

  /**
   * Dispatches a `mousemove` event.
   * @param x The x position.
   * @param y The y position.
   * @param options The mouse move options.
   */
  move(x: number, y: number, options?: { steps: number }): Promise<void>;
  /**
   * Dispatches a `mouseup` event.
   * @param options The mouse press options.
   */
  up(options?: MousePressOptions): Promise<void>;
  /**
   * Dispatches a `mousewheel` event.
   * @param options The mouse wheel options.
   */
  wheel(options?: MouseWheelOptions): Promise<void>;
}

export interface Touchscreen {
  /**
   * Dispatches a touchstart and touchend event.
   * @param x The x position.
   * @param y The y position.
   */
  tap(x: number, y: number): Promise<void>;
}
/**
 * You can use `tracing.start` and `tracing.stop` to create a trace file which can be opened in Chrome DevTools or timeline viewer.
 */
export interface Tracing {
  start(options: TracingStartOptions): Promise<void>;
  stop(): Promise<Buffer>;
}

export interface TracingStartOptions {
  path?: string;
  screenshots?: boolean;
  categories?: string[];
}

export type DialogType = "alert" | "beforeunload" | "confirm" | "prompt";

/** Dialog objects are dispatched by page via the 'dialog' event. */
export interface Dialog {
  /**
   * Accepts the dialog.
   * @param promptText A text to enter in prompt. Does not cause any effects if the dialog's type is not prompt.
   */
  accept(promptText?: string): Promise<void>;

  /** If dialog is prompt, returns default prompt value. Otherwise, returns empty string. */
  defaultValue(): string;

  /** Dismiss the dialog */
  dismiss(): Promise<void>;

  /** Returns the message displayed in the dialog. */
  message(): string;

  /** The dialog type. Dialog's type, can be one of `alert`, `beforeunload`, `confirm` or `prompt`. */
  type(): DialogType;
}

export type ConsoleMessageType = "log"
  | "debug"
  | "info"
  | "error"
  | "warning"
  | "dir"
  | "dirxml"
  | "table"
  | "trace"
  | "clear"
  | "startGroup"
  | "startGroupCollapsed"
  | "endGroup"
  | "assert"
  | "profile"
  | "profileEnd"
  | "count"
  | "timeEnd";

export interface ConsoleMessageLocation {
  /**
   * URL of the resource if known.
   */
  url?: string;
  /**
   * Line number in the resource if known
   */
  lineNumber?: number;
  /**
   * Column number in the resource if known.
   */
  columnNumber?: number;
}

/** ConsoleMessage objects are dispatched by page via the 'console' event. */
export interface ConsoleMessage {
  /** The message arguments. */
  args(): JSHandle[];
  /** The location the message originated from */
  location(): ConsoleMessageLocation;
  /** The message text. */
  text(): string;
  type(): ConsoleMessageType;
}

export interface AuthOptions {
  username: string;
  password: string;
}

export type MouseButtons = "left" | "right" | "middle";

export interface ClickOptions {
  /** @default MouseButtons.Left */
  button?: MouseButtons;
  /** @default 1 */
  clickCount?: number;
  /**
   * Time to wait between mousedown and mouseup in milliseconds.
   * @default 0
   */
  delay?: number;
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

export interface Viewport {
  /** The page width in pixels. */
  width: number;
  /** The page height in pixels. */
  height: number;
  /**
   * Specify device scale factor (can be thought of as dpr).
   * @default 1
   */
  deviceScaleFactor?: number;
  /**
   * Whether the `meta viewport` tag is taken into account.
   * @default false
   */
  isMobile?: boolean;
  /**
   * Specifies if viewport supports touch events.
   * @default false
   */
  hasTouch?: boolean;
  /**
   * Specifies if viewport is in landscape mode.
   * @default false
   */
  isLandscape?: boolean;
}

/** Page emulation options. */
export interface EmulateOptions {
  /** The viewport emulation options. */
  viewport: Viewport;
  /** The emulated user-agent. */
  userAgent: string;
}

export type EvaluateFn<T = any> = string | ((arg1: T, ...args: any[]) => any);
export type EvaluateFnReturnType<T extends EvaluateFn> = T extends ((...args: any[]) => infer R) ? R : unknown;

export type LoadEvent =
  | "load"
  | "domcontentloaded"
  | "networkidle0"
  | "networkidle2";

export interface Timeoutable {
    /**
     * Maximum navigation time in milliseconds, pass 0 to disable timeout.
     * @default 30000
     */
    timeout?: number;
}

/** The navigation options. */
export interface NavigationOptions extends Timeoutable {
  /**
   * When to consider navigation succeeded.
   * @default load Navigation is consider when the `load` event is fired.
   */
  waitUntil?: LoadEvent | LoadEvent[];
}

/**
 * Navigation options for `page.goto`.
 */
export interface DirectNavigationOptions extends NavigationOptions {
  /**
   * Referer header value.
   * If provided it will take preference over the referer header value set by
   * [page.setExtraHTTPHeaders()](#pagesetextrahttpheadersheaders).
   */
  referer?: string;
}

/** Accepts values labeled with units. If number, treat as pixels. */
export type LayoutDimension = string | number;

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
  | "A5"
  | "A6";

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

/** Defines the screenshot options. */
export interface ScreenshotOptions {
  /**
   * The file path to save the image to. The screenshot type will be inferred from file extension.
   * If `path` is a relative path, then it is resolved relative to current working directory.
   * If no path is provided, the image won't be saved to the disk.
   */
  path?: string;
  /**
   * The screenshot type.
   * @default png
   */
  type?: "jpeg" | "png";
  /** The quality of the image, between 0-100. Not applicable to png images. */
  quality?: number;
  /**
   * When true, takes a screenshot of the full scrollable page.
   * @default false
   */
  fullPage?: boolean;
  /**
   * An object which specifies clipping region of the page.
   */
  clip?: BoundingBox;
  /**
   * Hides default white background and allows capturing screenshots with transparency.
   * @default false
   */
  omitBackground?: boolean;
  /**
   * The encoding of the image, can be either base64 or binary.
   * @default binary
   */
  encoding?: "base64" | "binary";
}

export interface BinaryScreenShotOptions extends ScreenshotOptions {
    encoding?: "binary";
}

export interface Base64ScreenShotOptions extends ScreenshotOptions {
    encoding: "base64";
}

/** Options for `addStyleTag` */
export interface StyleTagOptions {
  /** Url of the <link> tag. */
  url?: string;
  /** Path to the CSS file to be injected into frame. If `path` is a relative path, then it is resolved relative to current working directory. */
  path?: string;
  /** Raw CSS content to be injected into frame. */
  content?: string;
}
/** Options for `addScriptTag` */
export interface ScriptTagOptions {
  /** Url of a script to be added. */
  url?: string;
  /** Path to the JavaScript file to be injected into frame. If `path` is a relative path, then it is resolved relative to current working directory. */
  path?: string;
  /** Raw JavaScript content to be injected into frame. */
  content?: string;
  /** Script type. Use 'module' in order to load a Javascript ES6 module. */
  type?: string;
}

export interface PageFnOptions extends Timeoutable {
  polling?: "raf" | "mutation" | number;
}

export interface BoundingBox {
  /** The x-coordinate of top-left corner. */
  x: number;
  /** The y-coordinate of top-left corner. */
  y: number;
  /** The width. */
  width: number;
  /** The height. */
  height: number;
}

export interface BoxModel {
  /** Content box, represented as an array of {x, y} points. */
  content: Box[];
  /** Padding box, represented as an array of {x, y} points. */
  padding: Box[];
  /** Border box, represented as an array of {x, y} points. */
  border: Box[];
  /** Margin box, represented as an array of {x, y} points. */
  margin: Box[];
  width: number;
  height: number;
}

export interface Box {
  x: number;
  y: number;
}

/**
 * The Worker class represents a WebWorker.
 * The events workercreated and workerdestroyed are emitted on the page object to signal the worker lifecycle.
 */
export interface Worker extends JSEvalable {
  executionContext(): Promise<ExecutionContext>;

  url(): string;
}

/**
 * Represents an in-page DOM element. ElementHandles can be created with the page.$ method.
 */
export interface ElementHandle<E extends Element = Element> extends JSHandle<E>, Evalable {
  /**
   * The method runs element.querySelector within the page.
   * If no element matches the selector, the return value resolve to null.
   * @param selector A selector to query element for
   * @since 0.13.0
   */
  $(selector: string): Promise<ElementHandle | null>;

  /**
   * The method runs element.querySelectorAll within the page.
   * If no elements match the selector, the return value resolve to [].
   * @param selector A selector to query element for
   * @since 0.13.0
   */
  $$(selector: string): Promise<ElementHandle[]>;

  /**
   * @param selector XPath expression to evaluate.
   */
  $x(expression: string): Promise<ElementHandle[]>;
  /**
   * This method returns the value resolve to the bounding box of the element (relative to the main frame), or null if the element is not visible.
   */
  boundingBox(): Promise<BoundingBox | null>;
  /**
   * This method returns boxes of the element, or null if the element is not visible.
   * Boxes are represented as an array of points; each Point is an object {x, y}. Box points are sorted clock-wise.
   */
  boxModel(): Promise<BoxModel | null>;
  /**
   * This method scrolls element into view if needed, and then uses page.mouse to click in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   * @param options Specifies the options.
   * @since 0.9.0
   */
  click(options?: ClickOptions): Promise<void>;
  /**
   * @returns Resolves to the content frame for element handles referencing iframe nodes, or null otherwise.
   * @since 1.2.0
   */
  contentFrame(): Promise<Frame | null>;
  /**
   * Calls focus on the element.
   */
  focus(): Promise<void>;
  /**
   * This method scrolls element into view if needed, and then uses page.mouse to hover over the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  hover(): Promise<void>;
  /**
   * Resolves to true if the element is visible in the current viewport.
   */
  isIntersectingViewport(): Promise<boolean>;
  /**
   * Focuses the element, and then uses keyboard.down and keyboard.up.
   * @param key Name of key to press, such as ArrowLeft. See USKeyboardLayout for a list of all key names.
   * @param options The text and delay options.
   */
  press(key: string, options?: { text?: string, delay?: number }): Promise<void>;
  /**
   * This method scrolls element into view if needed, and then uses page.screenshot to take a screenshot of the element.
   * If the element is detached from DOM, the method throws an error.
   * @param options Same options as in page.screenshot.
   */
  screenshot(options?: Base64ScreenShotOptions): Promise<string>;
  screenshot(options?: BinaryScreenShotOptions): Promise<Buffer>;
  screenshot(options?: ScreenshotOptions): Promise<string | Buffer>;
  /**
   * Triggers a change and input event once all the provided options have been selected. If there's no <select> element
   * matching selector, the method throws an error.
   * @param values Values of options to select. If the <select> has the multiple attribute, all values are considered, otherwise only the first one is taken into account.
   * @returns An array of option values that have been successfully selected.
   * @since 1.12.0
   */
  select(...values: string[]): Promise<string[]>;
  /**
   * This method scrolls element into view if needed, and then uses touchscreen.tap to tap in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  tap(): Promise<void>;
  toString(): string;
  /**
   * Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.
   * @param text A text to type into a focused element.
   * @param options The typing options.
   */
  type(text: string, options?: { delay: number }): Promise<void>;
  /**
   * This method expects elementHandle to point to an input element.
   * @param filePaths Sets the value of the file input these paths. If some of the filePaths are relative paths, then they are resolved relative to current working directory.
   */
  uploadFile(...filePaths: string[]): Promise<void>;
}

/** The class represents a context for JavaScript execution. */
export interface ExecutionContext extends JSEvalable {
  queryObjects(prototypeHandle: JSHandle): JSHandle;
}

/** JSHandle represents an in-page JavaScript object. */
export interface JSHandle<T = any> extends JSEvalable<T> {
  /**
   * Returns a ElementHandle
   */
  asElement(): ElementHandle | null;
  /**
   * Stops referencing the element handle.
   */
  dispose(): Promise<void>;
  /**
   * Gets the execution context.
   */
  executionContext(): ExecutionContext;
  /**
   * Returns a map with property names as keys and JSHandle instances for the property values.
   */
  getProperties(): Promise<Map<string, JSHandle>>;
  /**
   * Fetches a single property from the objectHandle.
   * @param propertyName The property to get.
   */
  getProperty(propertyName: string): Promise<JSHandle>;

  /**
   * Returns a JSON representation of the object.
   * The JSON is generated by running JSON.stringify on the object in page and consequent JSON.parse in puppeteer.
   * @throws The method will throw if the referenced object is not stringifiable.
   */
  jsonValue(): Promise<unknown>;
}

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

export type Headers = Record<string, string>;
export type HttpMethod =
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE"
  | "OPTIONS";

export type ResourceType =
  | "document"
  | "stylesheet"
  | "image"
  | "media"
  | "font"
  | "script"
  | "texttrack"
  | "xhr"
  | "fetch"
  | "eventsource"
  | "websocket"
  | "manifest"
  | "other";

export type ErrorCode =
  | "aborted"
  | "accessdenied"
  | "addressunreachable"
  | "blockedbyclient"
  | "blockedbyresponse"
  | "connectionaborted"
  | "connectionclosed"
  | "connectionfailed"
  | "connectionrefused"
  | "connectionreset"
  | "internetdisconnected"
  | "namenotresolved"
  | "timedout"
  | "failed";

export interface Overrides {
  url?: string;
  method?: HttpMethod;
  postData?: string;
  headers?: Headers;
}

/** Represents a page request. */
export interface Request {
  /**
   * Aborts request.
   * To use this, request interception should be enabled with `page.setRequestInterception`.
   * @throws An exception is immediately thrown if the request interception is not enabled.
   */
  abort(errorCode?: ErrorCode): Promise<void>;

  /**
   * Continues request with optional request overrides.
   * To use this, request interception should be enabled with `page.setRequestInterception`.
   * @throws An exception is immediately thrown if the request interception is not enabled.
   */
  continue(overrides?: Overrides): Promise<void>;

  /**
   * @returns An object if the request failed, null otherwise.
   */
  failure(): { errorText: string; } | null;

  /**
   * @returns The `Frame` object that initiated the request, or `null` if navigating to error pages
   */
  frame(): Frame | null;

  /**
   * An object with HTTP headers associated with the request.
   * All header names are lower-case.
   */
  headers(): Headers;

  /** Whether this request is driving frame's navigation. */
   isNavigationRequest(): boolean;

  /** Returns the request's method (GET, POST, etc.) */

  method(): HttpMethod;

  /** Contains the request's post body, if any. */
  postData(): string | undefined;

  /**
   * A `redirectChain` is a chain of requests initiated to fetch a resource.
   *
   * - If there are no redirects and the request was successful, the chain will be empty.
   * - If a server responds with at least a single redirect, then the chain will contain all the requests that were redirected.
   *
   * `redirectChain` is shared between all the requests of the same chain.
   *
   * @since 1.2.0
   */
  redirectChain(): Request[];

  /** Contains the request's resource type as it was perceived by the rendering engine.  */
  resourceType(): ResourceType;

  /**
   * Fulfills request with given response.
   * To use this, request interception should be enabled with `page.setRequestInterception`.
   * @throws An exception is immediately thrown if the request interception is not enabled.
   * @param response The response options that will fulfill this request.
   */
  respond(response: RespondOptions): Promise<void>;

  /** A matching `Response` object, or `null` if the response has not been received yet. */
  response(): Response | null;

  /** Contains the URL of the request. */
  url(): string;
}
/** Options for `Request.respond` method */
export interface RespondOptions {
  /**
   * Specifies the response status code.
   * @default 200
   */
  status?: number;
  /** Specifies the response headers. */
  headers?: Headers;
  /** Specifies the Content-Type response header. */
  contentType?: string;
  /** Specifies the response body. */
  body?: Buffer | string;
}

export interface RemoteInfo {
    /** the IP address of the remote server */
    ip: string;
    /** the port used to connect to the remote server */
    port: number;
}

export interface SecurityDetails {
    /** A string with the name of issuer of the certificate. (e.g. "Let's Encrypt Authority X3"). */
    issuer(): string;
    /** String with the security protocol (e.g. TLS 1.2). */
    protocol(): string;
    /** Name of the subject to which the certificate was issued to (e.g. "www.example.com"). */
    subjectName(): string;
    /** Timestamp stating the start of validity of the certificate. */
    validFrom(): number;
    /** Timestamp stating the end of validity of the certificate. */
    validTo(): number;
}

/** Response class represents responses which are received by page. */
export interface Response {
  /** Promise which resolves to a buffer with response body. */
  buffer(): Promise<Buffer>;
  /** A Frame that initiated this response, or null if navigating to error pages. */
  frame(): Frame | null;
  /** True if the response was served from either the browser's disk cache or memory cache. */
  fromCache(): boolean;
  /** True if the response was served by a service worker. */
  fromServiceWorker(): boolean;
  /** An object with HTTP headers associated with the response. All header names are lower-case. */
  headers(): Headers;
  /**
   * Promise which resolves to a JSON representation of response body.
   * @throws This method will throw if the response body is not parsable via `JSON.parse`.
   */
  json(): Promise<unknown>;
  /** Contains a boolean stating whether the response was successful (status in the range 200-299) or not. */
  ok(): boolean;
  /** Returns remote connection info */
  remoteAddress(): RemoteInfo;
  /** Returns an object with security details associated with the response. */
  securityDetails(): SecurityDetails | null;
  /** A matching Request object. */
  request(): Request;
  /** Contains the status code of the response (e.g., 200 for a success). */
  status(): number;
  /** Contains the status text of the response (e.g. usually an "OK" for a success).  */
  statusText(): string;
  /** Promise which resolves to a text representation of response body. */
  text(): Promise<string>;
  /** Contains the URL of the response. */
  url(): string;
}

export interface WaitForSelectorOptions extends Timeoutable {
  /**
   * Wait for element to be present in DOM and to be visible,
   * i.e. to not have display: none or visibility: hidden CSS properties.
   * @default false
   */
  visible?: boolean;
  /**
   * Wait for element to not be found in the DOM or to be hidden,
   * i.e. have display: none or visibility: hidden CSS properties.
   * @default false
   */
  hidden?: boolean;
}

export interface WaitForSelectorOptionsHidden extends WaitForSelectorOptions {
  hidden: true;
}

export interface FrameBase extends Evalable, JSEvalable {
  /**
   * The method queries frame for the selector.
   * If there's no such element within the frame, the method will resolve to null.
   */
  $(selector: string): Promise<ElementHandle | null>;

  /**
   * The method runs document.querySelectorAll within the frame.
   * If no elements match the selector, the return value resolve to [].
   */
  $$(selector: string): Promise<ElementHandle[]>;

  /**
   * The method evaluates the XPath expression.
   * @param expression XPath expression to evaluate.
   */
  $x(expression: string): Promise<ElementHandle[]>;

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
   * Navigates to a URL.
   * @param url URL to navigate page to. The url should include scheme, e.g. `https://`
   * @param options The navigation parameters.
   */
  goto(url: string, options?: DirectNavigationOptions): Promise<Response | null>;

  /** This method fetches an element with selector and focuses it. */
  focus(selector: string): Promise<void>;

  /**
   * This method fetches an element with `selector`, scrolls it into view if needed,
   * and then uses page.mouse to hover over the center of the element. If there's no
   * element matching `selector`, the method throws an error.
   * @param selector A selector to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.
   */
  hover(selector: string): Promise<void>;

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

  /** Returns page's title. */
  title(): Promise<string>;

  /**
   * Sends a `keydown`, `keypress/input`, and `keyup` event for each character in the text.
   * @param selector A selector of an element to type into. If there are multiple elements satisfying the selector, the first will be used.
   * @param text: A text to type into a focused element.
   * @param options: The typing parameters.
   */
  type(selector: string, text: string, options?: { delay: number }): Promise<void>;

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
   * Allows waiting for various conditions.
   */
  waitForFunction(
    fn: EvaluateFn,
    options?: PageFnOptions,
    ...args: SerializableOrJSHandle[]
  ): Promise<JSHandle>;

  /**
   * Wait for the page navigation occur.
   * @param options The navigation parameters.
   */
  waitForNavigation(options?: NavigationOptions): Promise<Response>;

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

  /**
   * Waits for a certain amount of time before resolving.
   * @param duration The time to wait for.
   */
  waitForTimeout(duration: number): Promise<void>;
}

export interface Frame extends FrameBase {
  childFrames(): Frame[];
  /** Execution context associated with this frame. */
  executionContext(): ExecutionContext;
  /** Returns `true` if the frame has been detached, or `false` otherwise. */
  isDetached(): boolean;
  /** Returns frame's name attribute as specified in the tag. */
  name(): string;
  /** Returns parent frame, if any. Detached frames and main frames return null. */
  parentFrame(): Frame | null;
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

export type MediaType = "screen" | "print";

export interface AXNode {
  /**
   * The role.
   */
  role: string;
  /**
   * A human readable name for the node.
   */
  name: string;
  /**
   * The current value of the node.
   */
  value: string | number;
  /**
   * An additional human readable description of the node.
   */
  description: string;
  /**
   * Keyboard shortcuts associated with this node.
   */
  keyshortcuts: string;
  /**
   * A human readable alternative to the role.
   */
  roledescription: string;
  /**
   * A description of the current value.
   */
  valuetext: string;
  /**
   * Whether the node is disabled.
   */
  disabled: boolean;
  /**
   * Whether the node is expanded or collapsed.
   */
  expanded: boolean;
  /**
   * Whether the node is focused.
   */
  focused: boolean;
  /**
   * Whether the node is modal.
   */
  modal: boolean;
  /**
   * Whether the node text input supports multiline.
   */
  multiline: boolean;
  /**
   * Whether more than one child can be selected.
   */
  multiselectable: boolean;
  /**
   * Whether the node is read only.
   */
  readonly: boolean;
  /**
   * Whether the node is required.
   */
  required: boolean;
  /**
   * Whether the node is selected in its parent node.
   */
  selected: boolean;
  /**
   * Whether the checkbox is checked, or "mixed".
   */
  checked: boolean | "mixed";
  /**
   * Whether the toggle button is checked, or "mixed".
   */
  pressed: boolean | "mixed";
  /**
   * The level of a heading.
   */
  level: number;
  /**
   * The minimum value in a node.
   */
  valuemin: number;
  /**
   * The maximum value in a node.
   */
  valuemax: number;
  /**
   * What kind of autocomplete is supported by a control.
   */
  autocomplete: string;
  /**
   * What kind of popup is currently being shown for a node.
   */
  haspopup: string;
  /**
   * Whether and in what way this node's value is invalid.
   */
  invalid: string;
  /**
   * Whether the node is oriented horizontally or vertically.
   */
  orientation: string;
  /**
   * Child nodes of this node, if any.
   */
  children: AXNode[];
}

export interface SnapshopOptions {
  /**
   * Prune uninteresting nodes from the tree.
   * @default true
   */
  interestingOnly?: boolean;
  /**
   * The root DOM element for the snapshot.
   * @default document.body
   */
  root?: ElementHandle;
}

/**
 * The Accessibility class provides methods for inspecting Chromium's accessibility tree.
 * The accessibility tree is used by assistive technology such as screen readers.
 * Accessibility is a very platform-specific thing. On different platforms,
 * there are different screen readers that might have wildly different output.
 * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
 * which is than translated into different platform-specific APIs.
 * Accessibility namespace gives users access to the Blink Accessibility Tree.
 * Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or
 * by screen readers themselves. By default, Puppeteer tries to approximate this filtering,
 * exposing only the "interesting" nodes of the tree.
 */
export interface Accessibility {
  snapshot(options?: SnapshopOptions): Promise<AXNode>;
}

export interface MediaFeature {
    name: string;
    value: string;
}

export interface FileChooser {
  /**
   * Accept the file chooser request with given paths.
   * If some of the filePaths are relative paths, then they are resolved relative to the current working directory.
   */
  accept(filePaths: string[]): Promise<void>;
  /** Closes the file chooser without selecting any files. */
  cancel(): Promise<void>;
  /** Whether file chooser allow for multiple file selection. */
  isMultiple(): boolean;
}

/** Page provides methods to interact with a single tab in Chromium. One Browser instance might have multiple Page instances. */
export interface Page extends EventEmitter, FrameBase {
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
  emulateMediaType(mediaType: MediaType | null): Promise<void>;

  /**
   * Given an array of media feature objects, emulates CSS media features on the page.
   * Passing null resets all.
   */
  emulateMediaFeatures(features: MediaFeature[] | null): Promise<void>;

  /**
   * Changes the timezone of the page.
   * See ICU’s [metaZones.txt](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) for a list of supported timezone IDs.
   * Passing null disables timezone emulation.
   */
  emulateTimezone(tz: string | null): Promise<void>;

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

  /** Returns the page's title. */
  title(): Promise<string>;

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

  /**
   * In non-headless Chromium, this method results in the native file picker dialog not showing up for the user.
   * This method is typically coupled with an action that triggers file choosing.
   * This must be called before the file chooser is launched. It will not return a currently active file chooser.
   */
  waitForFileChooser(options?: Timeoutable): Promise<FileChooser>;

  /** This method returns all of the dedicated WebWorkers associated with the page. */
  workers(): Worker[];
}

export interface TargetAwaiter {
    waitForTarget(predicate: (target: Target) => boolean, options?: Timeoutable): Promise<Target>;
}

/** A Browser is created when Puppeteer connects to a Chromium instance, either through puppeteer.launch or puppeteer.connect. */
export interface Browser extends EventEmitter, TargetAwaiter {
  /**
   * Adds the listener function to the end of the listeners array for the event named `eventName`.
   * No checks are made to see if the listener has already been added. Multiple calls passing the same combination of
   * `eventName` and listener will result in the listener being added, and called, multiple times.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  on<K extends keyof BrowserEventObj>(
    eventName: K,
    handler: (e: BrowserEventObj[K], ...args: any[]) => void
  ): this;

  /**
   * Adds a one time listener function for the event named `eventName`.
   * The next time `eventName` is triggered, this listener is removed and then invoked.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  once<K extends keyof BrowserEventObj>(
    eventName: K,
    handler: (e: BrowserEventObj[K], ...args: any[]) => void
  ): this;

  /**
   * Returns an array of all open browser contexts.
   * In a newly created browser, this will return a single instance of BrowserContext.
   */
  browserContexts(): BrowserContext[];

  /**
   * Closes browser with all the pages (if any were opened).
   * The browser object itself is considered to be disposed and can not be used anymore.
   */
  close(): Promise<void>;

  /**
   * Creates a new incognito browser context.
   * This won't share cookies/cache with other browser contexts.
   */
  createIncognitoBrowserContext(): Promise<BrowserContext>;

  /**
   * Disconnects Puppeteer from the browser, but leaves the Chromium process running.
   * After calling `disconnect`, the browser object is considered disposed and cannot be used anymore.
   */
  disconnect(): void;

  /** Indicates that the browser is connected. */
  isConnected(): boolean;

  /**
   * Returns the default browser context.
   * The default browser context can not be closed.
   */
  defaultBrowserContext(): BrowserContext;

  /** Promise which resolves to a new Page object. */
  newPage(): Promise<Page>;

  /** Promise which resolves to an array of all open pages. */
  pages(): Promise<Page[]>;

  /** Spawned browser process. Returns `null` if the browser instance was created with `puppeteer.connect` method */
  process(): ChildProcess;

  /** A target associated with the browser. */
  target(): Target;

  /** Promise which resolves to an array of all active targets. */
  targets(): Promise<Target[]>;

  /**
   * Promise which resolves to the browser's original user agent.
   * **NOTE** Pages can override browser user agent with `page.setUserAgent`.
   */
  userAgent(): Promise<string>;

  /** For headless Chromium, this is similar to HeadlessChrome/61.0.3153.0. For non-headless, this is similar to Chrome/61.0.3153.0. */
  version(): Promise<string>;

  /** Browser websocket endpoint which can be used as an argument to puppeteer.connect. The format is ws://${host}:${port}/devtools/browser/<id> */
  wsEndpoint(): string;
}

export interface BrowserEventObj {
  /** Emitted when puppeteer gets disconnected from the browser instance. */
  disconnected: undefined;

  /** Emitted when the url of a target changes. */
  targetchanged: Target;

  /** Emitted when a target is created, for example when a new page is opened by `window.open` or `browser.newPage`. */
  targetcreated: Target;

  /** Emitted when a target is destroyed, for example when a page is closed. */
  targetdestroyed: Target;
}

export type Permission =
  "geolocation" |
  "midi" |
  "midi-sysex" |
  "notifications" |
  "push" |
  "camera" |
  "microphone" |
  "background-sync" |
  "ambient-light-sensor" |
  "accelerometer" |
  "gyroscope" |
  "magnetometer" |
  "accessibility-events" |
  "clipboard-read" |
  "clipboard-write" |
  "payment-handler";

/**
 * BrowserContexts provide a way to operate multiple independent browser sessions.
 * When a browser is launched, it has a single BrowserContext used by default.
 * The method `browser.newPage()` creates a page in the default browser context.
 */
export interface BrowserContext extends EventEmitter, TargetAwaiter {
  /**
   * Adds the listener function to the end of the listeners array for the event named `eventName`.
   * No checks are made to see if the listener has already been added. Multiple calls passing the same combination of
   * `eventName` and listener will result in the listener being added, and called, multiple times.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  on<K extends keyof BrowserContextEventObj>(
    eventName: K,
    handler: (e: BrowserContextEventObj[K], ...args: any[]) => void
  ): this;

  /**
   * Adds a one time listener function for the event named `eventName`.
   * The next time `eventName` is triggered, this listener is removed and then invoked.
   * @param event The name of the event.
   * @param handler The callback function.
   */
  once<K extends keyof BrowserContextEventObj>(
    eventName: K,
    handler: (e: BrowserContextEventObj[K], ...args: any[]) => void
  ): this;

  /** The browser this browser context belongs to. */
  browser(): Browser;

  /**
   * Clears all permission overrides for the browser context.
   */
  clearPermissionOverrides(): Promise<void>;

  /** Closes the browser context. All the targets that belong to the browser context will be closed. */
  close(): Promise<void>;

  /**
   * Returns whether BrowserContext is incognito.
   * The default browser context is the only non-incognito browser context.
   */
  isIncognito(): boolean;

  /** Creates a new page in the browser context. */
  newPage(): Promise<Page>;

  /**
   *
   * @param origin The origin to grant permissions to, e.g. "https://example.com".
   * @param permissions An array of permissions to grant.
   * All permissions that are not listed here will be automatically denied.
   */
  overridePermissions(origin: string, permissions: Permission[]): Promise<void>;

  /** Promise which resolves to an array of all open pages. */
  pages(): Promise<Page[]>;

  /** An array of all active targets inside the browser context. */
  targets(): Target[];
}

export interface BrowserContextEventObj {
  /** Emitted when the url of a target inside the browser context changes. */
  targetchanged: Target;

  /** Emitted when a target is created, for example when a new page is opened by `window.open` or `browserContext.newPage`. */
  targetcreated: Target;

  /** Emitted when a target is destroyed, for example when a page is closed. */
  targetdestroyed: Target;
}

export type TargetType = "page" | "background_page" | "shared_worker" | "service_worker" | "browser" | "other";

export interface Target {
  /** Get the browser the target belongs to. */
  browser(): Browser;

  /** The browser context the target belongs to. */
  browserContext(): BrowserContext;

  /** Creates a Chrome Devtools Protocol session attached to the target. */
  createCDPSession(): Promise<CDPSession>;

  /** Get the target that opened this target. Top-level targets return `null`. */
  opener(): Target | null;

  /** Returns the target `Page` or a `null` if the type of the page is not "page". */
  page(): Promise<Page>;

  /** Identifies what kind of target this is.  */
  type(): TargetType;

  /** Returns the target URL. */
  url(): string;

  /** If the target is not of type `service_worker` or `shared_worker`, resolves `null`. */
  worker(): Promise<Worker | null>;
}

export interface LaunchOptions extends ChromeArgOptions, BrowserOptions, Timeoutable {
  /**
   * Which browser to launch.
   * At this time, this is either `chrome` or `firefox`. See also `PUPPETEER_PRODUCT`.
   * @default 'chrome'
   */
  product?: Product;
  /**
   * Path to a Chromium executable to run instead of bundled Chromium. If
   * executablePath is a relative path, then it is resolved relative to current
   * working directory.
   */
  executablePath?: string;
  /**
   * Do not use `puppeteer.defaultArgs()` for launching Chromium.
   * @default false
   */
  ignoreDefaultArgs?: boolean | string[];
  /**
   * Close chrome process on Ctrl-C.
   * @default true
   */
  handleSIGINT?: boolean;
  /**
   * Close chrome process on SIGTERM.
   * @default true
   */
  handleSIGTERM?: boolean;
  /**
   * Close chrome process on SIGHUP.
   * @default true
   */
  handleSIGHUP?: boolean;
  /**
   * Whether to pipe browser process stdout and stderr into process.stdout and
   * process.stderr.
   * @default false
   */
  dumpio?: boolean;
  /**
   * Specify environment variables that will be visible to Chromium.
   * @default `process.env`.
   */
  env?: {
    [key: string]: string | boolean | number;
  };
  /**
   * Connects to the browser over a pipe instead of a WebSocket.
   * @default false
   */
  pipe?: boolean;
}

export interface ChromeArgOptions {
    /**
     * Whether to run browser in headless mode.
     * @default true unless the devtools option is true.
     */
    headless?: boolean;
    /**
     * Additional arguments to pass to the browser instance.
     * The list of Chromium flags can be found here.
     */
    args?: string[];
    /**
     * Path to a User Data Directory.
     */
    userDataDir?: string;
    /**
     * Whether to auto-open a DevTools panel for each tab.
     * If this option is true, the headless option will be set false.
     */
    devtools?: boolean;
}

export interface BrowserOptions {
  /**
   * Whether to ignore HTTPS errors during navigation.
   * @default false
   */
  ignoreHTTPSErrors?: boolean;
  /**
   * Sets a consistent viewport for each page. Defaults to an 800x600 viewport. null disables the default viewport.
   */
  defaultViewport?: {
    /**
     * page width in pixels.
     */
    width?: number;
    /**
     * page height in pixels.
     */
    height?: number;
    /**
     * Specify device scale factor (can be thought of as dpr).
     * @default 1
     */
    deviceScaleFactor?: number;
    /**
     * Whether the meta viewport tag is taken into account.
     * @default false
     */
    isMobile?: boolean;
    /**
     * Specifies if viewport supports touch events.
     * @default false
     */
    hasTouch?: boolean;
    /**
     * Specifies if viewport is in landscape mode.
     * @default false
     */
    isLandscape?: boolean;
  } | null;
  /**
   * Slows down Puppeteer operations by the specified amount of milliseconds.
   * Useful so that you can see what is going on.
   */
  slowMo?: number;
}

export interface ConnectOptions extends BrowserOptions {
  /**
   * A browser url to connect to, in format `http://${host}:${port}`.
   * Use interchangeably with browserWSEndpoint to let Puppeteer fetch it from metadata endpoint.
   */
  browserURL?: string;

  /** A browser websocket endpoint to connect to. */
  browserWSEndpoint?: string;

  /**
   * **Experimental** Specify a custom transport object for Puppeteer to use.
   */
  transport?: ConnectionTransport;
}

export interface ConnectionTransport {
  send(message: string): void;
  close(): void;
  onmessage?(message: string): void;
  onclose?(): void;
}

export interface CDPSession extends EventEmitter {
  /**
   * Detaches session from target. Once detached, session won't emit any events and can't be used
   * to send messages.
   */
  detach(): Promise<void>;

  /**
   * @param method Protocol method name
   */
  send(method: string, params?: object): Promise<object>;
}

export interface Coverage {
  startCSSCoverage(options?: StartCoverageOptions): Promise<void>;
  startJSCoverage(options?: StartCoverageOptions): Promise<void>;
  stopCSSCoverage(): Promise<CoverageEntry[]>;
  stopJSCoverage(): Promise<CoverageEntry[]>;
}

export interface StartCoverageOptions {
  /**
   * Whether to reset coverage on every navigation.
   * @default true
   */
  resetOnNavigation?: boolean;
  /**
   * Whether anonymous scripts generated by the page should be reported.
   * @default false
   */
  reportAnonymousScripts?: boolean;
}

export interface CoverageEntry {
  url: string;
  text: string;
  ranges: Array<{start: number, end: number}>;
}

/** BrowserFetcher can download and manage different versions of Chromium. */
export interface BrowserFetcher {
  /** The method initiates a HEAD request to check if the revision is available. */
  canDownload(revision: string): Promise<boolean>;
  /** The method initiates a GET request to download the revision from the host. */
  download(revision: string, progressCallback?: (downloadBytes: number, totalBytes: number) => void): Promise<RevisionInfo>;
  localRevisions(): Promise<string[]>;
  platform(): Platform;
  product(): Product;
  remove(revision: string): Promise<void>;
  revisionInfo(revision: string): RevisionInfo;
}

export interface RevisionInfo {
  /** The revision the info was created from */
  revision: string;
  /** Path to the extracted revision folder */
  folderPath: string;
  /** Path to the revision executable */
  executablePath: string;
  /** URL this revision can be downloaded from */
  url: string;
  /** whether the revision is locally available on disk */
  local: boolean;
  product: Product;
}

export interface FetcherOptions {
  /** A download host to be used. Defaults to `https://storage.googleapis.com`. */
  host?: string;
  /** A path for the downloads folder. Defaults to `<root>/.local-chromium`, where `<root>` is puppeteer's package root. */
  path?: string;
  /** Possible values are: `mac`, `win32`, `win64`, `linux`. Defaults to the current platform. */
  platform?: Platform;
  /**
   * @default 'chrome'
   */
  product?: Product;
}

/** Attaches Puppeteer to an existing Chromium instance */
export function connect(options?: ConnectOptions): Promise<Browser>;
/** The default flags that Chromium will be launched with */
export function defaultArgs(options?: ChromeArgOptions): string[];
/** Path where Puppeteer expects to find bundled Chromium */
export function executablePath(): string;
/** The method launches a browser instance with given arguments. The browser will be closed when the parent node.js process is closed. */
export function launch(options?: LaunchOptions): Promise<Browser>;
/** This methods attaches Puppeteer to an existing Chromium instance. */
export function createBrowserFetcher(options?: FetcherOptions): BrowserFetcher;
