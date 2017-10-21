// Type definitions for puppeteer 0.12
// Project: https://github.com/GoogleChrome/puppeteer#readme
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Noah Guillory <https://github.com/slokomisu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export interface Keyboard {
  down(key: string, options?: { text: string }): Promise<void>;

  press(key: string, options?: PressOptions): Promise<void>;

  type(text: string, options?: { delay: number }): Promise<void>;

  sendCharacter(char: string): Promise<void>;

  up(key: string): Promise<void>;
}

export interface MousePressOptions {
  button?: MouseButtons;
  clickCount?: number;
  delay?: number;
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

  type: 'alert' | 'beforeunload' | 'confirm' | 'prompt';
}

export interface AuthOptions {
  username: string;
  password: string;
}

export type MouseButtons = 'left' | 'right' | 'middle';

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
  sameSite: 'Strict' | 'Lax';
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
  waitUntil?: 'load' | 'networkidle';
  networkIdleInflight?: number;
  networkIdleTimeout?: number;
}

export type PDFFormat =
  | 'Letter'
  | 'Legal'
  | 'Tabload'
  | 'Ledger'
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5';

export interface PDFOptions {
  /** If no path is provided, the PDF won't be saved to the disk. */
  path?: string;
  scale?: number;
  displayHeaderFooter?: boolean;
  printBackground?: boolean;
  landscape?: boolean;
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
  type?: 'jpeg' | 'png';
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

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PressOptions {
  text?: string;
  delay?: number;
}

export interface ElementHandle extends JSHandle {
  asElement(): ElementHandle;

  boundingBox(): BoundingBox;

  click(options?: ClickOptions): Promise<void>;

  focus(): Promise<void>;

  hover(): Promise<void>;

  tap(): Promise<void>;

  press(key: string, options?: PressOptions): Promise<void>;

  screenshot(options?: ScreenshotOptions): Promise<Buffer>;

  toString(): string;

  type(text: string, options?: { delay: number }): Promise<void>;

  uploadFile(...filePaths: string[]): Promise<void>;
}

export type Headers = Record<string, string>;
export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS';

export type ResourceType =
  | 'Document'
  | 'Stylesheet'
  | 'Image'
  | 'Media'
  | 'Font'
  | 'Script'
  | 'TextTrack'
  | 'XHR'
  | 'Fetch'
  | 'EventSource'
  | 'WebSocket'
  | 'Manifest'
  | 'Other';

export type ErrorCode =
  | 'aborted'
  | 'accessdenied'
  | 'addressunreachable'
  | 'connectionaborted'
  | 'connectionclosed '
  | 'connectionfailed'
  | 'connectionrefused'
  | 'connectionreset'
  | 'internetdisconnected'
  | 'namenotresolved'
  | 'timedout'
  | 'failed';

export interface Overrides {
  url?: string;
  method?: HttpMethod;
  postData?: string;
  headers?: Headers;
}

export interface RequestError {
  errorText: string;
}

export interface RequestResponse {
  status: number;
  headers?: Headers;
  contentType: string;
  body: Buffer | string;
}

export interface Request {
  headers: Headers;
  method: HttpMethod;
  postData: string | undefined;
  resourceType: ResourceType;
  url: string;

  abort(errorCode: ErrorCode): Promise<void>;
  continue(overrides?: Overrides): Promise<void>;
  failure(): RequestError;
  respond(response: RequestResponse): Promise<void>;
  response(): Response | null;
}

export interface Response {
  buffer(): Promise<Buffer>;

  headers: Headers;

  json(): Promise<Object>;

  ok: boolean;

  request(): Request;

  status: number;

  text(): Promise<string>;

  url: string;
}

export type TargetType = 'page' | 'service_worker' | 'other';

export interface Target {
  page(): Promise<Page>;
  type(): TargetType;
  url(): string;
}

export type Serializable = boolean | number | string | object;

export interface TagOptions {
  url?: string;
  path?: string;
  content?: string;
}

export interface WaitingOptions {
  polling?: 'raf' | 'mutation' | number;
  timeout?: number;
}

export interface SelectorWaitOptions {
  visible?: boolean;
  hidden?: boolean;
  timeout?: number;
}

export interface FrameBase {
  $(selector: string): Promise<ElementHandle>;

  $$(selector: string): Promise<ElementHandle[]>;

  $eval(
    selector: string,
    pageFunction: (element: ElementHandle | undefined) => void,
    ...args: Array<Serializable | ElementHandle>
  ): Promise<Serializable>;

  $$eval(
    selector: string,
    pageFunction: (elements: ElementHandle[] | undefined) => void,
    ...args: Array<Serializable | ElementHandle>
  ): Promise<Serializable>;

  addScriptTag(options: TagOptions): Promise<void>;

  addStyleTag(options: TagOptions): Promise<void>;

  injectFile(filePath: string): Promise<void>;

  evaluate<T = string>(
    fn: T | EvaluateFn<T>,
    ...args: Array<Serializable | ElementHandle>
  ): Promise<T>;

  executionContext(): ExecutionContext;

  url(): Promise<string>;

  title(): Promise<string>;

  url(): string;

  waitFor(
    // fn can be an abritary function
    // tslint:disable-next-line ban-types
    selectorOrFunctionOrTimeout: string | number | Function,
    options?: WaitingOptions
  ): Promise<void>;

  waitForFunction(
    // fn can be an abritary function
    // tslint:disable-next-line ban-types
    pageFunction: string | Function,
    options?: WaitingOptions,
    ...args: Serializable[]
  ): Promise<void>;

  waitForNavigation(options?: NavigationOptions): Promise<Response>;

  waitForSelector(selector: string, options?: SelectorWaitOptions): Promise<void>;
}

export interface Frame extends FrameBase {
  childFrames(): Frame[];

  isDetached(): boolean;

  name(): string;

  parentFrame(): Frame | undefined;
}

export interface ExecutionContext {
  evaluate<T = string>(
    pageFunction: T | EvaluateFn<T>,
    ...args: Array<Serializable | ElementHandle>
  ): Promise<Serializable>;

  evaluateHandle<T = string>(
    pageFunction: T | EvaluateFn<T>,
    ...args: Array<Serializable | JSHandle>
  ): Promise<JSHandle>;
}

export interface JSHandle {
  asHandle(): ElementHandle;

  dispose(): Promise<void>;

  executionContext(): ExecutionContext;

  getProperties(): Promise<Map<string, JSHandle>>;

  getProperty(properyName: string): Promise<JSHandle>;

  jsonValue(): Promise<Object>;
}

export interface Metric {
    Timestamp: number;
    Documents: number;
    Frames: number;
    JSEventListeners: number;
    Nodes: number;
    LayoutCount: number;
    RecalcStyleCount: number;
    LayoutDuration: number;
    RecalcStyleDuration: number;
    ScriptDuration: number;
    TaskDuration: number;
    JSHeapUsedSize: number;
    JSHeapTotalSize: number;
}

export interface Metrics {
  title: string;
  metrics: Metric;
}

export type ConsoleMessageType =
  | 'log'
  | 'debug'
  | 'info'
  | 'error'
  | 'warning'
  | 'dir'
  | 'dirxml'
  | 'table'
  | 'trace'
  | 'clear'
  | 'startGroup'
  | 'startGroupCollapsed'
  | 'endGroup'
  | 'assert'
  | 'profile'
  | 'profileEnd'
  | 'count'
  | 'timeEnd';

export interface ConsoleMessage {
  args: JSHandle[];
  text: string;
  type: ConsoleMessageType;
}

export interface PageEvent {
  console: ConsoleMessage;
  dialog: Dialog;
  error: Error;
  frameattached: Frame;
  framedetached: Frame;
  framenavigated: Frame;
  load: undefined;
  metrics: Metrics;
  pageerror: string;
  request: Request;
  requestfinished: Request;
  response: Response;
}

export type MediaType = 'screen' | 'print';

export interface Page extends FrameBase {
  on<K extends keyof PageEvent>(event: K, handler: (e: PageEvent[K], ...args: any[]) => void): void;

  authenticate(credentials: AuthOptions | null): Promise<void>;

  click(selector: string, options?: ClickOptions): Promise<void>;

  close(): Promise<void>;

  content(): Promise<string>;

  cookies(...urls: string[]): Promise<Cookie[]>;

  deleteCookie(...cookies: Cookie[]): Promise<void>;

  emulate(options: Partial<EmulateOptions>): Promise<void>;

  emulateMedia(mediaType: MediaType | null): Promise<void>;

  evaluateHandle<T = string>(
    pageFunction: T | EvaluateFn<T>,
    ...args: Array<Serializable | JSHandle>
  ): Promise<JSHandle>;

  evaluateOnNewDocument(
    pageFunction: string | EvaluateFn<string>,
    ...args: Serializable[]
  ): Promise<void>;

  // Argument `fn` can be an arbitrary function
  exposeFunction(name: string, puppeteerFunction: Function): Promise<void>;

  focus(selector: string): Promise<void>;

  frames(): Frame[];

  getMetrics(): Metrics;

  goBack(options?: Partial<NavigationOptions>): Promise<Response>;

  goForward(options?: Partial<NavigationOptions>): Promise<Response>;

  goto(url: string, options?: Partial<NavigationOptions>): Promise<Response>;

  hover(selector: string): Promise<void>;

  keyboard: Keyboard;

  mainFrame(): Frame;

  mouse: Mouse;

  pdf(options?: Partial<PDFOptions>): Promise<Buffer>;

  queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>

  plainText(): Promise<string>;

  press(key: string, options?: PressOptions): Promise<void>;

  reload(options?: NavigationOptions): Promise<Response>;

  screenshot(options?: ScreenshotOptions): Promise<Buffer>;

  select(selector: string, ...values: string[]): Promise<void>;

  setContent(html: string): Promise<void>;

  setCookie(...cookies: Cookie[]): Promise<void>;

  setExtraHTTPHeaders(headers: Headers): Promise<void>;

  setJavaScriptEnabled(enabled: boolean): Promise<void>;

  setOfflineMode(enabled: boolean): Promise<void>;

  setRequestInterceptionEnabled(value: boolean): Promise<void>;

  setUserAgent(userAgent: string): Promise<void>;

  setViewport(viewport: Viewport): Promise<void>;

  tap(selector: string): Promise<void>;

  touchscreen: Touchscreen;
  tracing: Tracing;

  type(text: string, options?: { delay: number }): Promise<void>;

  viewport(): Viewport;
}

export interface BrowserEvents {
  targetchanged: Target;
  targetcreated: Target;
  targetdestroyed: Target;
}

export interface Browser {
  on<K extends keyof BrowserEvents>(
    event: K,
    handler: (e: BrowserEvents[K], ...args: any[]) => void
  ): void;

  close(): Promise<void>;
  disconnect(): void;
  newPage(): Promise<Page>;
  pages(): Promise<Page[]>;
  targets(): Target[];
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
  /** Specify environment variables that will be visible to Chromium. Defaults to process.env  */
  env?: Object;
  /** Whether to auto-open DevTools panel for each tab. If this option is true, the headless option will be set false. */
  devtools?: boolean;
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
