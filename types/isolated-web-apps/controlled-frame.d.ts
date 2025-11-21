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

/** @remarks Extended attributes: [Exposed=Window, Worker, ShadowRealm] */
declare global {
  /** @remarks Extended attributes: [Exposed=Window, Worker, ShadowRealm] */
  interface URLPattern {
    /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
    test(input?: URLPatternInput, baseURL?: string): boolean;
    /** @remarks Extended attributes: [RaisesException, CallWith=Isolate, Measure] */
    exec(input?: URLPatternInput, baseURL?: string): URLPatternResult | null;
    /** @remarks Extended attributes: [RuntimeEnabled=URLPatternGenerate, RaisesException, Measure] */
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
  var URLPattern: {
    prototype: URLPattern;
    new(input: URLPatternInput, baseURL: string | URL, options?: URLPatternOptions): URLPattern;
    new(input?: URLPatternInput, options?: URLPatternOptions): URLPattern;
  };
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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class HTMLControlledFrameElement extends HTMLElement {
    /** @remarks Extended attributes: [HTMLConstructor] */
    constructor();
    /** @remarks Extended attributes: [CEReactions] */
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
}
export type HTMLControlledFrameElement = globalThis.HTMLControlledFrameElement;

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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface ConsoleMessage {
    readonly level: number;
    readonly message: string;
  }
}
export type ConsoleMessage = globalThis.ConsoleMessage;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class ConsoleMessageEvent extends Event {
    constructor(type: string, eventInitDict?: ConsoleMessageEventInit);
    readonly consoleMessage: ConsoleMessage;
  }
}
export type ConsoleMessageEvent = globalThis.ConsoleMessageEvent;

export interface ConsoleMessageEventInit extends EventInit {
  consoleMessage?: ConsoleMessage | null;
}

export type DialogType =
  | "alert"
  | "confirm"
  | "prompt";

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface DialogController {
    okay(response?: string): undefined;
    cancel(): undefined;
  }
}
export type DialogController = globalThis.DialogController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface DialogMessage {
    readonly messageType: DialogType;
    readonly messageText: string;
    readonly dialog: DialogController;
  }
}
export type DialogMessage = globalThis.DialogMessage;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class DialogEvent extends Event {
    constructor(type: string, eventInitDict?: DialogEventInit);
    readonly dialogMessage: DialogMessage;
  }
}
export type DialogEvent = globalThis.DialogEvent;

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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface NewWindowController {
    attach(newControlledFrame: HTMLControlledFrameElement): undefined;
    discard(): undefined;
  }
}
export type NewWindowController = globalThis.NewWindowController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface NewWindow {
    readonly window: NewWindowController;
    readonly targetUrl: string;
    readonly name: string;
    readonly windowOpenDisposition: WindowOpenDisposition;
  }
}
export type NewWindow = globalThis.NewWindow;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class NewWindowEvent extends Event {
    constructor(type: string, eventInitDict?: NewWindowEventInit);
    readonly newWindow: NewWindow;
  }
}
export type NewWindowEvent = globalThis.NewWindowEvent;

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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface PermissionRequestControllerBase {
    allow(): undefined;
    cancel(): undefined;
  }
}
export type PermissionRequestControllerBase = globalThis.PermissionRequestControllerBase;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface MediaPermissionRequestController extends PermissionRequestControllerBase {
    readonly url: string;
  }
}
export type MediaPermissionRequestController = globalThis.MediaPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface GeolocationPermissionRequestController extends PermissionRequestControllerBase {
    readonly url: string;
  }
}
export type GeolocationPermissionRequestController = globalThis.GeolocationPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface PointerLockPermissionRequestController extends PermissionRequestControllerBase {
    readonly lastUnlockedBySelf: boolean;
    readonly userGesture: boolean;
    readonly url: string;
  }
}
export type PointerLockPermissionRequestController = globalThis.PointerLockPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface DownloadPermissionRequestController extends PermissionRequestControllerBase {
    readonly requestMethod: string;
    readonly url: string;
  }
}
export type DownloadPermissionRequestController = globalThis.DownloadPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface FileSystemPermissionRequestController extends PermissionRequestControllerBase {
    readonly url: string;
  }
}
export type FileSystemPermissionRequestController = globalThis.FileSystemPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface FullscreenPermissionRequestController extends PermissionRequestControllerBase {
    readonly origin: string;
  }
}
export type FullscreenPermissionRequestController = globalThis.FullscreenPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface HidPermissionRequestController extends PermissionRequestControllerBase {
    readonly url: string;
  }
}
export type HidPermissionRequestController = globalThis.HidPermissionRequestController;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface PermissionRequest {
    readonly permission: PermissionType;
    readonly request: PermissionRequestControllerBase;
  }
}
export type PermissionRequest = globalThis.PermissionRequest;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class PermissionRequestEvent extends Event {
    constructor(type: string, eventInitDict?: PermissionRequestEventInit);
    readonly permissionRequest: PermissionRequest;
  }
}
export type PermissionRequestEvent = globalThis.PermissionRequestEvent;

export interface PermissionRequestEventInit extends EventInit {
  permissionRequest?: PermissionRequest | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface SizeChange {
    readonly oldWidth: number;
    readonly oldHeight: number;
    readonly newWidth: number;
    readonly newHeight: number;
  }
}
export type SizeChange = globalThis.SizeChange;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class SizeChangedEvent extends Event {
    constructor(type: string, eventInitDict?: SizeChangedEventInit);
    readonly sizeChange: SizeChange;
  }
}
export type SizeChangedEvent = globalThis.SizeChangedEvent;

export interface SizeChangedEventInit extends EventInit {
  sizeChange?: SizeChange | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface ZoomChange {
    readonly oldZoomFactor: number;
    readonly newZoomFactor: number;
  }
}
export type ZoomChange = globalThis.ZoomChange;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class ZoomChangeEvent extends Event {
    constructor(type: string, eventInitDict?: ZoomChangeEventInit);
    readonly zoomChange: ZoomChange;
  }
}
export type ZoomChangeEvent = globalThis.ZoomChangeEvent;

export interface ZoomChangeEventInit extends EventInit {
  zoomChange?: ZoomChange | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class ContentLoadEvent extends Event {
    constructor(type: string, eventInitDict?: EventInit);
  }
}
export type ContentLoadEvent = globalThis.ContentLoadEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface LoadInfo {
    readonly url: string;
    readonly isTopLevel: boolean;
  }
}
export type LoadInfo = globalThis.LoadInfo;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface LoadAbortInfo extends LoadInfo {
    readonly code: number;
    readonly reason: string;
  }
}
export type LoadAbortInfo = globalThis.LoadAbortInfo;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface LoadRedirectInfo {
    readonly oldUrl: string;
    readonly newUrl: string;
    readonly isTopLevel: boolean;
  }
}
export type LoadRedirectInfo = globalThis.LoadRedirectInfo;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class LoadAbortEvent extends Event {
    constructor(type: string, eventInitDict?: LoadAbortEventInit);
    readonly loadAbortInfo: LoadAbortInfo;
  }
}
export type LoadAbortEvent = globalThis.LoadAbortEvent;

export interface LoadAbortEventInit extends EventInit {
  loadAbortInfo?: LoadAbortInfo | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class LoadCommitEvent extends Event {
    constructor(type: string, eventInitDict?: LoadCommitEventInit);
    readonly loadInfo: LoadInfo;
  }
}
export type LoadCommitEvent = globalThis.LoadCommitEvent;

export interface LoadCommitEventInit extends EventInit {
  loadInfo?: LoadInfo | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class LoadStartEvent extends Event {
    constructor(type: string, eventInitDict?: LoadStartEventInit);
    readonly loadInfo: LoadInfo;
  }
}
export type LoadStartEvent = globalThis.LoadStartEvent;

export interface LoadStartEventInit extends EventInit {
  loadInfo?: LoadInfo | null;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class LoadStopEvent extends Event {
    constructor(type: string, eventInitDict?: LoadStopEventInit);
  }
}
export type LoadStopEvent = globalThis.LoadStopEvent;

export type LoadStopEventInit = EventInit;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  class LoadRedirectEvent extends Event {
    constructor(type: string, eventInitDict?: LoadRedirectEventInit);
    readonly loadRedirectInfo: LoadRedirectInfo;
  }
}
export type LoadRedirectEvent = globalThis.LoadRedirectEvent;

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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequest {
    createWebRequestInterceptor(options: WebRequestInterceptorOptions): WebRequestInterceptor;
  }
}
export type WebRequest = globalThis.WebRequest;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestInterceptor extends EventTarget {
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
}
export type WebRequestInterceptor = globalThis.WebRequestInterceptor;

export type DocumentLifecycle =
  | "prerender"
  | "active"
  | "cached"
  | "pending-deletion";

export type FrameType =
  | "outermost-frame"
  | "fenced-frame"
  | "sub-frame";

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface UploadData {
    readonly bytes: ArrayBuffer | null;
    readonly file: string | null;
  }
}
export type UploadData = globalThis.UploadData;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface RequestBody {
    readonly error: string | null;
    readonly formData: any;
    readonly raw: readonly UploadData[] | null;
  }
}
export type RequestBody = globalThis.RequestBody;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestRequest {
    readonly method: string;
    readonly id: string;
    readonly type: ResourceType;
    readonly url: string;
    readonly initiator: string | null;
    readonly headers: Headers | null;
    readonly body: RequestBody | null;
  }
}
export type WebRequestRequest = globalThis.WebRequestRequest;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface AuthChallenger {
    readonly host: string;
    readonly port: number;
  }
}
export type AuthChallenger = globalThis.AuthChallenger;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestAuthDetails {
    readonly challenger: AuthChallenger;
    readonly isProxy: boolean;
    readonly scheme: string;
    readonly realm: string | null;
  }
}
export type WebRequestAuthDetails = globalThis.WebRequestAuthDetails;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestResponse {
    readonly statusCode: number;
    readonly statusLine: string;
    readonly fromCache: boolean;
    readonly headers: Headers | null;
    readonly ip: string | null;
    readonly redirectURL: string | null;
    readonly auth: WebRequestAuthDetails | null;
  }
}
export type WebRequestResponse = globalThis.WebRequestResponse;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestEvent extends Event {
    readonly request: WebRequestRequest;
    readonly frameId: number;
    readonly frameType: FrameType | null;
    readonly documentId: string | null;
    readonly documentLifecycle: DocumentLifecycle | null;
    readonly parentDocumentId: string | null;
    readonly parentFrameId: number | null;
  }
}
export type WebRequestEvent = globalThis.WebRequestEvent;

export interface WebRequestAuthCredentials {
  username: string;
  password: string;
}

export interface WebRequestAuthOptions {
  signal?: AbortSignal;
}

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestAuthRequiredEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
    setCredentials(credentials: Promise<WebRequestAuthCredentials>, options?: WebRequestAuthOptions): undefined;
  }
}
export type WebRequestAuthRequiredEvent = globalThis.WebRequestAuthRequiredEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestBeforeRedirectEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
  }
}
export type WebRequestBeforeRedirectEvent = globalThis.WebRequestBeforeRedirectEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestBeforeRequestEvent extends WebRequestEvent {
    redirect(redirectURL: string): undefined;
  }
}
export type WebRequestBeforeRequestEvent = globalThis.WebRequestBeforeRequestEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestBeforeSendHeadersEvent extends WebRequestEvent {
    setRequestHeaders(requestHeaders: Headers | HeadersInit): undefined;
  }
}
export type WebRequestBeforeSendHeadersEvent = globalThis.WebRequestBeforeSendHeadersEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestCompletedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
  }
}
export type WebRequestCompletedEvent = globalThis.WebRequestCompletedEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestErrorOccurredEvent extends WebRequestEvent {
    readonly error: string;
  }
}
export type WebRequestErrorOccurredEvent = globalThis.WebRequestErrorOccurredEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestHeadersReceivedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
    redirect(redirectURL: string): undefined;
    setResponseHeaders(responseHeaders: Headers | HeadersInit): undefined;
  }
}
export type WebRequestHeadersReceivedEvent = globalThis.WebRequestHeadersReceivedEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface WebRequestResponseStartedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
  }
}
export type WebRequestResponseStartedEvent = globalThis.WebRequestResponseStartedEvent;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
export type WebRequestSendHeadersEvent = WebRequestEvent;

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

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface ContextMenus extends EventTarget {
    create(properties: ContextMenusCreateProperties): Promise<undefined>;
    remove(id: string): Promise<undefined>;
    removeAll(): Promise<undefined>;
    update(id: string, properties?: ContextMenusProperties): Promise<undefined>;
    onclick: ((ev: Event) => any) | null;
    onshow: ((ev: Event) => any) | null;
  }
}
export type ContextMenus = globalThis.ContextMenus;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface MenuItemDetails {
    readonly id: string;
    readonly parentMenuId: string | null;
    readonly checked: boolean | null;
    readonly wasChecked: boolean | null;
  }
}
export type MenuItemDetails = globalThis.MenuItemDetails;

/** @remarks Extended attributes: [Exposed=Window, IsolatedContext] */
declare global {
  interface ContextMenusClickEvent extends Event {
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
}
export type ContextMenusClickEvent = globalThis.ContextMenusClickEvent;
