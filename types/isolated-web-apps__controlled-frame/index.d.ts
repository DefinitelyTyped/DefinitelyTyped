/**
 * Generated from:
 * - controlled-frame.idl
 *
 * @see https://wicg.github.io/urlpattern/
 */

export type URLPatternInput = string | URLPatternInit;

export type URLPatternCompatible = string | URLPatternInit | URLPattern;

export type URLPatternComponent =
  | "protocol"
  | "username"
  | "password"
  | "hostname"
  | "port"
  | "pathname"
  | "search"
  | "hash";

export class URLPattern {
  constructor(input: URLPatternInput, baseURL: string | URL, options?: URLPatternOptions);
  constructor(input?: URLPatternInput, options?: URLPatternOptions);
  test(input?: URLPatternInput, baseURL?: string): boolean;
  exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
  generate(component: URLPatternComponent, groups: Record<string, string>): string;
  readonly protocol: string;
  readonly username: string;
  readonly password: string;
  readonly hostname: string;
  readonly port: string;
  readonly pathname: string;
  readonly search: string;
  readonly hash: string;
  readonly hasRegExpGroups: boolean;
}

export interface URLPatternComponentResult {
  input?: string;
  groups?: Record<string, any>;
}

export interface URLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

export interface URLPatternOptions {
  /** @default false */
  ignoreCase?: boolean;
}

export interface URLPatternResult {
  inputs?: URLPatternInput[];
  protocol?: URLPatternComponentResult;
  username?: URLPatternComponentResult;
  password?: URLPatternComponentResult;
  hostname?: URLPatternComponentResult;
  port?: URLPatternComponentResult;
  pathname?: URLPatternComponentResult;
  search?: URLPatternComponentResult;
  hash?: URLPatternComponentResult;
}

export class HTMLControlledFrameElement extends HTMLElement {
  constructor();
  src: string;
  partition: string;
  readonly contentWindow: WindowProxy | null;
  readonly contextMenus: ContextMenus;
  readonly request: WebRequest;
  back(): Promise<boolean>;
  canGoBack(): Promise<boolean>;
  forward(): Promise<boolean>;
  canGoForward(): Promise<boolean>;
  go(relativeIndex: number): Promise<boolean>;
  reload(): undefined;
  stop(): undefined;
  addContentScripts(contentScriptList: ContentScriptDetails[]): Promise<undefined>;
  executeScript(details?: InjectDetails): Promise<any>;
  insertCSS(details?: InjectDetails): Promise<undefined>;
  removeContentScripts(scriptNameList?: string[]): Promise<undefined>;
  clearData(options?: ClearDataOptions, types?: ClearDataTypeSet): Promise<undefined>;
  getAudioState(): Promise<boolean>;
  getZoom(): Promise<number>;
  getZoomMode(): Promise<string>;
  isAudioMuted(): Promise<boolean>;
  setAudioMuted(mute: boolean): undefined;
  setZoom(zoomFactor: number): Promise<undefined>;
  setZoomMode(zoomMode: string): Promise<undefined>;
  captureVisibleRegion(options?: ImageDetails): Promise<undefined>;
  print(): undefined;
  onconsolemessage: ((ev: Event) => any) | null;
  oncontentload: ((ev: Event) => any) | null;
  ondialog: ((ev: Event) => any) | null;
  onloadabort: ((ev: Event) => any) | null;
  onloadcommit: ((ev: Event) => any) | null;
  onloadstart: ((ev: Event) => any) | null;
  onloadstop: ((ev: Event) => any) | null;
  onnewwindow: ((ev: Event) => any) | null;
  onpermissionrequest: ((ev: Event) => any) | null;
  onsizechanged: ((ev: Event) => any) | null;
  onzoomchange: ((ev: Event) => any) | null;
}

export interface InjectDetails {
  code?: string;
  file?: string;
}

export interface InjectionItems {
  code?: string;
  files?: string[];
}

export type RunAt =
  | "document-start"
  | "document-end"
  | "document-idle";

export interface ContentScriptDetails {
  name: string;
  js?: InjectionItems;
  css?: InjectionItems;
  urlPatterns: (URLPattern | URLPatternInput)[];
  excludeURLPatterns?: (URLPattern | URLPatternInput)[];
  allFrames?: boolean;
  matchAboutBlank?: boolean;
  runAt?: RunAt;
}

export interface ClearDataOptions {
  since?: number;
}

export interface ClearDataTypeSet {
  cache?: boolean;
  cookies?: boolean;
  fileSystems?: boolean;
  indexedDB?: boolean;
  localStorage?: boolean;
  persistentCookies?: boolean;
  sessionCookies?: boolean;
}

export type ZoomMode =
  | "per-origin"
  | "per-view"
  | "disabled";

export interface ImageDetails {
  format?: string;
  quality?: string;
}

export interface ConsoleMessage {
  readonly level: number;
  readonly message: string;
}

export class ConsoleMessageEvent extends Event {
  constructor(type: string, eventInitDict?: ConsoleMessageEventInit);
  readonly consoleMessage: ConsoleMessage;
}

export interface ConsoleMessageEventInit extends EventInit {
  consoleMessage?: ConsoleMessage | null;
}

export type DialogType =
  | "alert"
  | "confirm"
  | "prompt";

export interface DialogController {
  okay(response?: string): undefined;
  cancel(): undefined;
}

export interface DialogMessage {
  readonly messageType: DialogType;
  readonly messageText: string;
  readonly dialog: DialogController;
}

export class DialogEvent extends Event {
  constructor(type: string, eventInitDict?: DialogEventInit);
  readonly dialogMessage: DialogMessage;
}

export interface DialogEventInit extends EventInit {
  dialogMessage?: DialogMessage | null;
}

export type WindowOpenDisposition =
  | "ignore"
  | "save_to_disk"
  | "current_tab"
  | "new_background_tab"
  | "new_foreground_tab"
  | "new_window"
  | "new_popup";

export interface NewWindowController {
  attach(newControlledFrame: HTMLControlledFrameElement): undefined;
  discard(): undefined;
}

export interface NewWindow {
  readonly window: NewWindowController;
  readonly targetUrl: string;
  readonly name: string;
  readonly windowOpenDisposition: WindowOpenDisposition;
}

export class NewWindowEvent extends Event {
  constructor(type: string, eventInitDict?: NewWindowEventInit);
  readonly newWindow: NewWindow;
}

export interface NewWindowEventInit extends EventInit {
  newWindow?: NewWindow | null;
}

export type PermissionType =
  | "media"
  | "geolocation"
  | "pointerLock"
  | "download"
  | "filesystem"
  | "fullscreen"
  | "hid";

export interface PermissionRequestControllerBase {
  allow(): undefined;
  cancel(): undefined;
}

export interface MediaPermissionRequestController extends PermissionRequestControllerBase {
  readonly url: string;
}

export interface GeolocationPermissionRequestController extends PermissionRequestControllerBase {
  readonly url: string;
}

export interface PointerLockPermissionRequestController extends PermissionRequestControllerBase {
  readonly lastUnlockedBySelf: boolean;
  readonly userGesture: boolean;
  readonly url: string;
}

export interface DownloadPermissionRequestController extends PermissionRequestControllerBase {
  readonly requestMethod: string;
  readonly url: string;
}

export interface FileSystemPermissionRequestController extends PermissionRequestControllerBase {
  readonly url: string;
}

export interface FullscreenPermissionRequestController extends PermissionRequestControllerBase {
  readonly origin: string;
}

export interface HidPermissionRequestController extends PermissionRequestControllerBase {
  readonly url: string;
}

export interface PermissionRequest {
  readonly permission: PermissionType;
  readonly request: PermissionRequestControllerBase;
}

export class PermissionRequestEvent extends Event {
  constructor(type: string, eventInitDict?: PermissionRequestEventInit);
  readonly permissionRequest: PermissionRequest;
}

export interface PermissionRequestEventInit extends EventInit {
  permissionRequest?: PermissionRequest | null;
}

export interface SizeChange {
  readonly oldWidth: number;
  readonly oldHeight: number;
  readonly newWidth: number;
  readonly newHeight: number;
}

export class SizeChangedEvent extends Event {
  constructor(type: string, eventInitDict?: SizeChangedEventInit);
  readonly sizeChange: SizeChange;
}

export interface SizeChangedEventInit extends EventInit {
  sizeChange?: SizeChange | null;
}

export interface ZoomChange {
  readonly oldZoomFactor: number;
  readonly newZoomFactor: number;
}

export class ZoomChangeEvent extends Event {
  constructor(type: string, eventInitDict?: ZoomChangeEventInit);
  readonly zoomChange: ZoomChange;
}

export interface ZoomChangeEventInit extends EventInit {
  zoomChange?: ZoomChange | null;
}

export class ContentLoadEvent extends Event {
  constructor(type: string, eventInitDict?: EventInit);
}

export interface LoadInfo {
  readonly url: string;
  readonly isTopLevel: boolean;
}

export interface LoadAbortInfo extends LoadInfo {
  readonly code: number;
  readonly reason: string;
}

export interface LoadRedirectInfo {
  readonly oldUrl: string;
  readonly newUrl: string;
  readonly isTopLevel: boolean;
}

export class LoadAbortEvent extends Event {
  constructor(type: string, eventInitDict?: LoadAbortEventInit);
  readonly loadAbortInfo: LoadAbortInfo;
}

export interface LoadAbortEventInit extends EventInit {
  loadAbortInfo?: LoadAbortInfo | null;
}

export class LoadCommitEvent extends Event {
  constructor(type: string, eventInitDict?: LoadCommitEventInit);
  readonly loadInfo: LoadInfo;
}

export interface LoadCommitEventInit extends EventInit {
  loadInfo?: LoadInfo | null;
}

export class LoadStartEvent extends Event {
  constructor(type: string, eventInitDict?: LoadStartEventInit);
  readonly loadInfo: LoadInfo;
}

export interface LoadStartEventInit extends EventInit {
  loadInfo?: LoadInfo | null;
}

export class LoadStopEvent extends Event {
  constructor(type: string, eventInitDict?: LoadStopEventInit);
}

export interface LoadStopEventInit extends EventInit {
}

export class LoadRedirectEvent extends Event {
  constructor(type: string, eventInitDict?: LoadRedirectEventInit);
  readonly loadRedirectInfo: LoadRedirectInfo;
}

export interface LoadRedirectEventInit extends EventInit {
  loadRedirectInfo?: LoadRedirectInfo | null;
}

export type ResourceType =
  | "main-frame"
  | "sub-frame"
  | "stylesheet"
  | "script"
  | "image"
  | "font"
  | "object"
  | "xmlhttprequest"
  | "ping"
  | "csp-report"
  | "media"
  | "websocket"
  | "other";

export type RequestedHeaders =
  | "none"
  | "cors"
  | "all";

export interface WebRequestInterceptorOptions {
  urlPatterns: (URLPattern | URLPatternInput)[];
  /** @default [] */
  resourceTypes?: ResourceType[];
  /** @default false */
  blocking?: boolean;
  /** @default false */
  includeRequestBody?: boolean;
  /** @default "none" */
  includeHeaders?: RequestedHeaders;
}

export interface WebRequest {
  createWebRequestInterceptor(options: WebRequestInterceptorOptions): WebRequestInterceptor;
}

export interface WebRequestInterceptor extends EventTarget {
  onauthrequired: ((ev: Event) => any) | null;
  onbeforeredirect: ((ev: Event) => any) | null;
  onbeforerequest: ((ev: Event) => any) | null;
  onbeforesendheaders: ((ev: Event) => any) | null;
  oncompleted: ((ev: Event) => any) | null;
  onerroroccurred: ((ev: Event) => any) | null;
  onheadersreceived: ((ev: Event) => any) | null;
  onsendheaders: ((ev: Event) => any) | null;
  onresponsestarted: ((ev: Event) => any) | null;
}

export type DocumentLifecycle =
  | "prerender"
  | "active"
  | "cached"
  | "pending-deletion";

export type FrameType =
  | "outermost-frame"
  | "fenced-frame"
  | "sub-frame";

export interface UploadData {
  readonly bytes: ArrayBuffer | null;
  readonly file: string | null;
}

export interface RequestBody {
  readonly error: string | null;
  readonly formData: any;
  readonly raw: readonly UploadData[] | null;
}

export interface WebRequestRequest {
  readonly method: string;
  readonly id: string;
  readonly type: ResourceType;
  readonly url: string;
  readonly initiator: string | null;
  readonly headers: Headers | null;
  readonly body: RequestBody | null;
}

export interface AuthChallenger {
  readonly host: string;
  readonly port: number;
}

export interface WebRequestAuthDetails {
  readonly challenger: AuthChallenger;
  readonly isProxy: boolean;
  readonly scheme: string;
  readonly realm: string | null;
}

export interface WebRequestResponse {
  readonly statusCode: number;
  readonly statusLine: string;
  readonly fromCache: boolean;
  readonly headers: Headers | null;
  readonly ip: string | null;
  readonly redirectURL: string | null;
  readonly auth: WebRequestAuthDetails | null;
}

export interface WebRequestEvent extends Event {
  readonly request: WebRequestRequest;
  readonly frameId: number;
  readonly frameType: FrameType | null;
  readonly documentId: string | null;
  readonly documentLifecycle: DocumentLifecycle | null;
  readonly parentDocumentId: string | null;
  readonly parentFrameId: number | null;
}

export interface WebRequestAuthCredentials {
  username: string;
  password: string;
}

export interface WebRequestAuthOptions {
  signal?: AbortSignal;
}

export interface WebRequestAuthRequiredEvent extends WebRequestEvent {
  readonly response: WebRequestResponse;
  setCredentials(credentials: Promise<WebRequestAuthCredentials>, options?: WebRequestAuthOptions): undefined;
}

export interface WebRequestBeforeRedirectEvent extends WebRequestEvent {
  readonly response: WebRequestResponse;
}

export interface WebRequestBeforeRequestEvent extends WebRequestEvent {
  redirect(redirectURL: string): undefined;
}

export interface WebRequestBeforeSendHeadersEvent extends WebRequestEvent {
  setRequestHeaders(requestHeaders: Headers | HeadersInit): undefined;
}

export interface WebRequestCompletedEvent extends WebRequestEvent {
  readonly response: WebRequestResponse;
}

export interface WebRequestErrorOccurredEvent extends WebRequestEvent {
  readonly error: string;
}

export interface WebRequestHeadersReceivedEvent extends WebRequestEvent {
  readonly response: WebRequestResponse;
  redirect(redirectURL: string): undefined;
  setResponseHeaders(responseHeaders: Headers | HeadersInit): undefined;
}

export interface WebRequestResponseStartedEvent extends WebRequestEvent {
  readonly response: WebRequestResponse;
}

export interface WebRequestSendHeadersEvent extends WebRequestEvent {
}

export type ContextType =
  | "all"
  | "page"
  | "frame"
  | "selection"
  | "link"
  | "editable"
  | "image"
  | "video"
  | "audio";

export type ItemType =
  | "normal"
  | "checkbox"
  | "radio"
  | "separator";

export interface ContextMenusProperties {
  checked?: boolean;
  contexts?: ContextType[];
  documentURLPatterns?: (URLPattern | URLPatternInput)[];
  enabled?: boolean;
  parentId?: string;
  targetURLPatterns?: (URLPattern | URLPatternInput)[];
  title?: string;
  type?: ItemType;
}

export interface ContextMenusCreateProperties extends ContextMenusProperties {
  id: string;
}

export interface ContextMenus extends EventTarget {
  create(properties: ContextMenusCreateProperties): Promise<undefined>;
  remove(id: string): Promise<undefined>;
  removeAll(): Promise<undefined>;
  update(id: string, properties?: ContextMenusProperties): Promise<undefined>;
  onclick: ((ev: Event) => any) | null;
  onshow: ((ev: Event) => any) | null;
}

export interface MenuItemDetails {
  readonly id: string;
  readonly parentMenuId: string | null;
  readonly checked: boolean | null;
  readonly wasChecked: boolean | null;
}

export interface ContextMenusClickEvent extends Event {
  readonly menuItem: MenuItemDetails;
  readonly frameId: number;
  readonly frameURL: string;
  readonly pageURL: string;
  readonly editable: boolean;
  readonly linkURL: string | null;
  readonly mediaType: string | null;
  readonly selectionText: string | null;
  readonly srcURL: string | null;
}
