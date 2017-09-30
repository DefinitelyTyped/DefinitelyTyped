// Type definitions for puppeteer 0.10
// Project: https://github.com/GoogleChrome/puppeteer#readme
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export interface Keyboard {
  down(key: string, options?: { text: string }): Promise<void>;
  sendCharacter(char: string): Promise<void>;
  up(key: string): Promise<void>;
}

export interface MousePressOptions {
  button?: MouseButtons;
  clickCount?: number;
}

export interface Mouse {
  click(x: number, y: number, options: ClickOptions): Promise<void>;
  down(options?: MousePressOptions): Promise<void>;
  move(x: number, y: number, options?: { steps: number }): Promise<void>;
  up(options?: MousePressOptions): Promise<void>;
}

export interface Touchscreen {
  tap(x: number, y: number): Promise<void>;
}

export interface Tracing {
  start(options: { path: string; screenshots?: boolean }): Promise<void>;
  stop(): Promise<void>;
}

export interface Dialog {
  accept(promptText?: string): Promise<void>;
  defaultValue(): string;
  dismiss(): Promise<void>;
  message(): string;
  type: "alert" | "beforeunload" | "confirm" | "prompt";
}

export type PageEvents =
  | "console"
  | "dialog"
  | "error"
  | "frameattached"
  | "framedetached"
  | "framenavigated"
  | "load"
  | "pageerror"
  | "request"
  | "requestfailed"
  | "requestfinished"
  | "response";

export interface AuthOptions {
  username: string;
  password: string;
}

export type MouseButtons = "left" | "right" | "middle";

export interface ClickOptions {
  /** defaults to left */
  button?: MouseButtons;
  /** defaults to 1 */
  clickCount?: number;
  /**
   * Time to wait between mousedown and mouseup in milliseconds.
   * Defaults to 0.
   */
  delay?: number;
}

export interface Cookie {
  name: string;
  value: string;
  domain: string;
  path: string;
  expires: number;
  httpOnly: boolean;
  secure: boolean;
  sameSite: "Strict" | "Lax";
}

export interface Viewport {
  width: number;
  height: number;
  deviceScaleFactor?: number;
  isMobile?: boolean;
  hasTouch?: boolean;
  isLandscape?: boolean;
}

export interface EmulateOptions {
  viewport?: Viewport;
  userAgent?: string;
}

export type EvaluateFn<T> = (elem?: ElementHandle) => Promise<T>;

export interface NavigationOptions {
  timeout?: number;
  waitUntil?: "load" | "networkidle" | "networkIdleTimeout";
  networkIdleInflight?: number;
  networkIdleTimeout?: number;
}

export type PDFFormat =
  | "Letter"
  | "Legal"
  | "Tabload"
  | "Ledger"
  | "A0"
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5";

export interface PDFOptions {
  /** If no path is provided, the PDF won't be saved to the disk. */
  path?: string;
  scale?: number;
  displayHeaderFooter?: boolean;
  printBackground?: false;
  landscape?: false;
  /**
   * Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty
   * string, which means print all pages.
   */
  pageRanges?: string;
  format?: PDFFormat;
  width?: string;
  height?: string;
  margin?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

export interface ScreenshotOptions {
  path?: string;
  type?: "jpeg" | "png";
  /** The quality of the image, between 0-100. Not applicable to png images. */
  quality?: number;
  fullPage?: boolean;
  clip?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  omitBackground?: boolean;
}

export interface PageFnOptions {
  polling?: "raf" | "mutation" | number;
  timeout?: number;
}

export interface ElementHandle {
  click(options?: ClickOptions): Promise<void>;
  dispose(): Promise<void>;
  hover(): Promise<void>;
  tap(): Promise<void>;
  uploadFile(...filePaths: string[]): Promise<void>;
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
  | "Document"
  | "Stylesheet"
  | "Image"
  | "Media"
  | "Font"
  | "Script"
  | "TextTrack"
  | "XHR"
  | "Fetch"
  | "EventSource"
  | "WebSocket"
  | "Manifest"
  | "Other";

export interface Overrides {
  url?: string;
  method?: HttpMethod;
  postData?: string;
  headers?: Headers;
}

export interface Request {
  abort(): Promise<void>;
  continue(overrides?: Overrides): Promise<void>;
  headers: Headers;
  method: HttpMethod;
  postData: string | undefined;
  resourceType: ResourceType;
  response(): Response | null;
  url: string;
}

export interface Response {
  buffer(): Promise<Buffer>;
  headers: Headers;
  json(): Promise<object>;
  ok: boolean;
  request(): Request;
  status: number;
  text(): Promise<string>;
  url: string;
}

export interface FrameBase {
  $(selector: string): Promise<ElementHandle>;
  $$(selector: string): Promise<ElementHandle[]>;
  $eval(
    selector: string,
    fn: (...args: Array<object | ElementHandle>) => void
  ): Promise<object>;
  addScriptTag(url: string): Promise<void>;
  injectFile(filePath: string): Promise<void>;
  evaluate<T = string>(
    fn: T | EvaluateFn<T>,
    ...args: Array<object | ElementHandle>
  ): Promise<T>;
  title(): Promise<string>;
  url(): Promise<string>;
  waitFor(
    // fn can be an abritary function
    // tslint:disable-next-line ban-types
    selectorOrFunctionOrTimeout: string | number | Function,
    options?: object
  ): Promise<void>;
  waitForFunction(
    // fn can be an abritary function
    // tslint:disable-next-line ban-types
    fn: string | Function,
    options?: PageFnOptions,
    ...args: any[]
  ): Promise<void>;
  waitForNavigation(options?: NavigationOptions): Promise<Response>;
  waitForSelector(
    selector: string,
    options?: { visible: boolean; timeout: number }
  ): Promise<void>;
}

export interface Frame extends FrameBase {
  childFrames(): Frame[];
  isDetached(): boolean;
  name(): string;
  parentFrame(): Frame | undefined;
}

export interface EventObj {
  console: string;
  dialog: Dialog;
  error: Error;
  frameattached: Frame;
  framedetached: Frame;
  framenavigated: Frame;
  load: undefined;
  pageerror: string;
  request: Request;
  requestfailed: Request;
  requestfinished: Request;
  response: Response;
}

export interface Page extends FrameBase {
  on(event: "console", handler: (...args: any[]) => void): void;
  on<K extends keyof EventObj>(
    event: K,
    handler: (e: EventObj[K], ...args: any[]) => void
  ): void;
  authenticate(credentials: AuthOptions | null): Promise<void>;
  click(selector: string, options?: ClickOptions): Promise<void>;
  close(): Promise<void>;
  content(): Promise<string>;
  cookies(...urls: string[]): Cookie;
  emulate(options: Partial<EmulateOptions>): Promise<void>;
  emulateMedia(mediaType: string | null): Promise<void>;
  evaluateOnNewDocument(
    fn: EvaluateFn<string>,
    ...args: object[]
  ): Promise<void>;

  // Argument `fn` can be an arbitrary function
  exposeFunction(name: string, fn: any): Promise<void>;

  focus(selector: string): Promise<void>;
  frames(): Frame[];
  goBack(options?: Partial<NavigationOptions>): Promise<Response>;
  goForward(options?: Partial<NavigationOptions>): Promise<Response>;
  goto(url: string, options?: Partial<NavigationOptions>): Promise<Response>;
  hover(selector: string): Promise<void>;
  keyboard: Keyboard;
  mainFrame(): Frame;
  mouse: Mouse;
  pdf(options?: Partial<PDFOptions>): Promise<Buffer>;
  plainText(): Promise<string>;
  press(key: string, options?: { text: string; delay: number }): Promise<void>;
  reload(options?: NavigationOptions): Promise<Response>;
  screenshot(options?: ScreenshotOptions): Promise<Buffer>;
  setContent(html: string): Promise<void>;
  setCookie(...cookies: Cookie[]): Promise<void>;
  setExtraHTTPHeaders(headers: Headers): Promise<void>;
  setJavaScriptEnabled(enabled: boolean): Promise<void>;
  setRequestInterceptionEnabled(value: boolean): Promise<void>;
  setUserAgent(userAgent: string): Promise<void>;
  setViewport(viewport: Viewport): Promise<void>;
  tap(selector: string): Promise<void>;
  touchscreen: Touchscreen;
  tracing: Tracing;
  type(text: string, options?: { delay: number }): Promise<void>;
  viewport(): Viewport;
}

export interface Browser {
  close(): Promise<void>;
  newPage(): Promise<Page>;
  version(): Promise<string>;
  wsEndpoint(): string;
}

export interface LaunchOptions {
  /** Whether to ignore HTTPS errors during navigation. Defaults to false. */
  ignoreHTTPSErrors?: boolean;
  /** Whether to run Chromium in headless mode. Defaults to true. */
  headless?: boolean;
  /**
   * Path to a Chromium executable to run instead of bundled Chromium. If
   * executablePath is a relative path, then it is resolved relative to current
   * working directory.
   */
  executablePath?: string;
  /**
   * Slows down Puppeteer operations by the specified amount of milliseconds.
   * Useful so that you can see what is going on.
   */
  slowMo?: number;
  /**
   * Additional arguments to pass to the Chromium instance. List of Chromium
   * flags can be found here.
   */
  args?: string[];
  /** Close chrome process on Ctrl-C. Defaults to true. */
  handleSIGINT?: boolean;
  /**
   * Maximum time in milliseconds to wait for the Chrome instance to start.
   * Defaults to 30000 (30 seconds). Pass 0 to disable timeout.
   */
  timeout?: number;
  /**
   * Whether to pipe browser process stdout and stderr into process.stdout and
   * process.stderr. Defaults to false.
   */
  dumpio?: boolean;
  /** Path to a User Data Directory. */
  userDataDir?: string;
}

export interface ConnectOptions {
  browserWSEndpoint?: string;
  ignoreHTTPSErrors?: boolean;
}

/** Attaches Puppeteer to an existing Chromium instance */
export function connect(options?: ConnectOptions): Promise<Browser>;
/** Path where Puppeteer expects to find bundled Chromium */
export function executablePath(): string;
export function launch(options?: LaunchOptions): Promise<Browser>;
