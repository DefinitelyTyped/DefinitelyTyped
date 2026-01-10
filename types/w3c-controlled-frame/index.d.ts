/**
 * @see https://wicg.github.io/controlled-frame
 * @see https://wicg.github.io/urlpattern
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

export interface HTMLControlledFrameElementEventMap extends HTMLElementEventMap {
    "consolemessage": ConsoleMessageEvent;
    "contentload": ContentLoadEvent;
    "dialog": DialogEvent;
    "loadabort": LoadAbortEvent;
    "loadcommit": LoadCommitEvent;
    "loadstop": LoadStopEvent;
    "newwindow": NewWindowEvent;
    "permissionrequest": PermissionRequestEvent;
    "sizechanged": SizeChangedEvent;
    "zoomchange": ZoomChangeEvent;
}

declare global {
    class HTMLControlledFrameElement extends HTMLElement {
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
        reload(): void;
        stop(): void;
        addContentScripts(contentScriptList: ContentScriptDetails[]): Promise<void>;
        executeScript(details?: InjectDetails): Promise<any>;
        insertCSS(details?: InjectDetails): Promise<void>;
        removeContentScripts(scriptNameList?: string[]): Promise<void>;
        clearData(options?: ClearDataOptions, types?: ClearDataTypeSet): Promise<void>;
        getAudioState(): Promise<boolean>;
        getZoom(): Promise<number>;
        getZoomMode(): Promise<string>;
        isAudioMuted(): Promise<boolean>;
        setAudioMuted(mute: boolean): void;
        setZoom(zoomFactor: number): Promise<void>;
        setZoomMode(zoomMode: string): Promise<void>;
        captureVisibleRegion(options?: ImageDetails): Promise<void>;
        print(): void;
        onconsolemessage: ((this: this, ev: ConsoleMessageEvent) => any) | null;
        oncontentload: ((this: this, ev: ContentLoadEvent) => any) | null;
        ondialog: ((this: this, ev: DialogEvent) => any) | null;
        onloadabort: ((this: this, ev: LoadAbortEvent) => any) | null;
        onloadcommit: ((this: this, ev: LoadCommitEvent) => any) | null;
        onloadstop: ((this: this, ev: LoadStopEvent) => any) | null;
        onnewwindow: ((this: this, ev: NewWindowEvent) => any) | null;
        onpermissionrequest: ((this: this, ev: PermissionRequestEvent) => any) | null;
        onsizechanged: ((this: this, ev: SizeChangedEvent) => any) | null;
        onzoomchange: ((this: this, ev: ZoomChangeEvent) => any) | null;

        addEventListener<K extends keyof HTMLControlledFrameElementEventMap>(
            type: K,
            listener: (this: this, ev: HTMLControlledFrameElementEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof HTMLControlledFrameElementEventMap>(
            type: K,
            listener: (this: this, ev: HTMLControlledFrameElementEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions,
        ): void;
    }
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

declare global {
    interface ConsoleMessage {
        readonly level: number;
        readonly message: string;
    }
}

declare global {
    class ConsoleMessageEvent extends Event {
        constructor(type: string, eventInitDict?: ConsoleMessageEventInit);
        readonly consoleMessage: ConsoleMessage;
    }
}

export interface ConsoleMessageEventInit extends EventInit {
    consoleMessage?: ConsoleMessage | null;
}

export type DialogType =
    | "alert"
    | "confirm"
    | "prompt";

declare global {
    interface DialogController {
        okay(response?: string): void;
        cancel(): void;
    }
}

declare global {
    interface DialogMessage {
        readonly messageType: DialogType;
        readonly messageText: string;
        readonly dialog: DialogController;
    }
}

declare global {
    class DialogEvent extends Event {
        constructor(type: string, eventInitDict?: DialogEventInit);
        readonly dialogMessage: DialogMessage;
    }
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

declare global {
    interface NewWindowController {
        attach(newControlledFrame: HTMLControlledFrameElement): void;
        discard(): void;
    }
}

declare global {
    interface NewWindow {
        readonly window: NewWindowController;
        readonly targetUrl: string;
        readonly name: string;
        readonly windowOpenDisposition: WindowOpenDisposition;
    }
}

declare global {
    class NewWindowEvent extends Event {
        constructor(type: string, eventInitDict?: NewWindowEventInit);
        readonly newWindow: NewWindow;
    }
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

declare global {
    interface PermissionRequestControllerBase {
        allow(): void;
        cancel(): void;
    }
}

declare global {
    interface MediaPermissionRequestController extends PermissionRequestControllerBase {
        readonly url: string;
    }
}

declare global {
    interface GeolocationPermissionRequestController extends PermissionRequestControllerBase {
        readonly url: string;
    }
}

declare global {
    interface PointerLockPermissionRequestController extends PermissionRequestControllerBase {
        readonly lastUnlockedBySelf: boolean;
        readonly userGesture: boolean;
        readonly url: string;
    }
}

declare global {
    interface DownloadPermissionRequestController extends PermissionRequestControllerBase {
        readonly requestMethod: string;
        readonly url: string;
    }
}

declare global {
    interface FileSystemPermissionRequestController extends PermissionRequestControllerBase {
        readonly url: string;
    }
}

declare global {
    interface FullscreenPermissionRequestController extends PermissionRequestControllerBase {
        readonly origin: string;
    }
}

declare global {
    interface HidPermissionRequestController extends PermissionRequestControllerBase {
        readonly url: string;
    }
}

declare global {
    interface PermissionRequest {
        readonly permission: PermissionType;
        readonly request: PermissionRequestControllerBase;
    }
}

declare global {
    class PermissionRequestEvent extends Event {
        constructor(type: string, eventInitDict?: PermissionRequestEventInit);
        readonly permissionRequest: PermissionRequest;
    }
}

export interface PermissionRequestEventInit extends EventInit {
    permissionRequest?: PermissionRequest | null;
}

declare global {
    interface SizeChange {
        readonly oldWidth: number;
        readonly oldHeight: number;
        readonly newWidth: number;
        readonly newHeight: number;
    }
}

declare global {
    class SizeChangedEvent extends Event {
        constructor(type: string, eventInitDict?: SizeChangedEventInit);
        readonly sizeChange: SizeChange;
    }
}

export interface SizeChangedEventInit extends EventInit {
    sizeChange?: SizeChange | null;
}

declare global {
    interface ZoomChange {
        readonly oldZoomFactor: number;
        readonly newZoomFactor: number;
    }
}

declare global {
    class ZoomChangeEvent extends Event {
        constructor(type: string, eventInitDict?: ZoomChangeEventInit);
        readonly zoomChange: ZoomChange;
    }
}

export interface ZoomChangeEventInit extends EventInit {
    zoomChange?: ZoomChange | null;
}

declare global {
    class ContentLoadEvent extends Event {
        constructor(type: string, eventInitDict?: EventInit);
    }
}

declare global {
    interface LoadInfo {
        readonly url: string;
        readonly isTopLevel: boolean;
    }
}

declare global {
    interface LoadAbortInfo extends LoadInfo {
        readonly code: number;
        readonly reason: string;
    }
}

declare global {
    interface LoadRedirectInfo {
        readonly oldUrl: string;
        readonly newUrl: string;
        readonly isTopLevel: boolean;
    }
}

declare global {
    class LoadAbortEvent extends Event {
        constructor(type: string, eventInitDict?: LoadAbortEventInit);
        readonly loadAbortInfo: LoadAbortInfo;
    }
}

export interface LoadAbortEventInit extends EventInit {
    loadAbortInfo?: LoadAbortInfo | null;
}

declare global {
    class LoadCommitEvent extends Event {
        constructor(type: string, eventInitDict?: LoadCommitEventInit);
        readonly loadInfo: LoadInfo;
    }
}

export interface LoadCommitEventInit extends EventInit {
    loadInfo?: LoadInfo | null;
}

declare global {
    class LoadStopEvent extends Event {
        constructor(type: string, eventInitDict?: LoadStopEventInit);
    }
}

export type LoadStopEventInit = EventInit;

declare global {
    class LoadRedirectEvent extends Event {
        constructor(type: string, eventInitDict?: LoadRedirectEventInit);
        readonly loadRedirectInfo: LoadRedirectInfo;
    }
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

declare global {
    interface WebRequest {
        createWebRequestInterceptor(options: WebRequestInterceptorOptions): WebRequestInterceptor;
    }
}

export interface WebRequestInterceptorEventMap {
    "authrequired": Event;
    "beforeredirect": Event;
    "beforerequest": Event;
    "beforesendheaders": Event;
    "completed": Event;
    "erroroccurred": Event;
    "headersreceived": Event;
    "sendheaders": Event;
    "responsestarted": Event;
}

declare global {
    interface WebRequestInterceptor extends EventTarget {
        onauthrequired: ((this: this, ev: Event) => any) | null;
        onbeforeredirect: ((this: this, ev: Event) => any) | null;
        onbeforerequest: ((this: this, ev: Event) => any) | null;
        onbeforesendheaders: ((this: this, ev: Event) => any) | null;
        oncompleted: ((this: this, ev: Event) => any) | null;
        onerroroccurred: ((this: this, ev: Event) => any) | null;
        onheadersreceived: ((this: this, ev: Event) => any) | null;
        onsendheaders: ((this: this, ev: Event) => any) | null;
        onresponsestarted: ((this: this, ev: Event) => any) | null;

        addEventListener<K extends keyof WebRequestInterceptorEventMap>(
            type: K,
            listener: (this: this, ev: WebRequestInterceptorEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof WebRequestInterceptorEventMap>(
            type: K,
            listener: (this: this, ev: WebRequestInterceptorEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions,
        ): void;
    }
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

declare global {
    interface UploadData {
        readonly bytes: ArrayBuffer | null;
        readonly file: string | null;
    }
}

declare global {
    interface RequestBody {
        readonly error: string | null;
        readonly formData: any;
        readonly raw: readonly UploadData[] | null;
    }
}

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

declare global {
    interface AuthChallenger {
        readonly host: string;
        readonly port: number;
    }
}

declare global {
    interface WebRequestAuthDetails {
        readonly challenger: AuthChallenger;
        readonly isProxy: boolean;
        readonly scheme: string;
        readonly realm: string | null;
    }
}

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

export interface WebRequestAuthCredentials {
    username: string;
    password: string;
}

export interface WebRequestAuthOptions {
    signal?: AbortSignal;
}

declare global {
    interface WebRequestAuthRequiredEvent extends WebRequestEvent {
        readonly response: WebRequestResponse;
        setCredentials(credentials: Promise<WebRequestAuthCredentials>, options?: WebRequestAuthOptions): void;
    }
}

declare global {
    interface WebRequestBeforeRedirectEvent extends WebRequestEvent {
        readonly response: WebRequestResponse;
    }
}

declare global {
    interface WebRequestBeforeRequestEvent extends WebRequestEvent {
        redirect(redirectURL: string): void;
    }
}

declare global {
    interface WebRequestBeforeSendHeadersEvent extends WebRequestEvent {
        setRequestHeaders(requestHeaders: Headers | HeadersInit): void;
    }
}

declare global {
    interface WebRequestCompletedEvent extends WebRequestEvent {
        readonly response: WebRequestResponse;
    }
}

declare global {
    interface WebRequestErrorOccurredEvent extends WebRequestEvent {
        readonly error: string;
    }
}

declare global {
    interface WebRequestHeadersReceivedEvent extends WebRequestEvent {
        readonly response: WebRequestResponse;
        redirect(redirectURL: string): void;
        setResponseHeaders(responseHeaders: Headers | HeadersInit): void;
    }
}

declare global {
    interface WebRequestResponseStartedEvent extends WebRequestEvent {
        readonly response: WebRequestResponse;
    }
}

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

export interface ContextMenusEventMap {
    "click": ContextMenusClickEvent;
    "show": Event;
}

declare global {
    interface ContextMenus extends EventTarget {
        create(properties: ContextMenusCreateProperties): Promise<void>;
        remove(id: string): Promise<void>;
        removeAll(): Promise<void>;
        update(id: string, properties?: ContextMenusProperties): Promise<void>;
        onclick: ((this: this, ev: ContextMenusClickEvent) => any) | null;
        onshow: ((this: this, ev: Event) => any) | null;

        addEventListener<K extends keyof ContextMenusEventMap>(
            type: K,
            listener: (this: this, ev: ContextMenusEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof ContextMenusEventMap>(
            type: K,
            listener: (this: this, ev: ContextMenusEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions,
        ): void;
    }
}

declare global {
    interface MenuItemDetails {
        readonly id: string;
        readonly parentMenuId: string | null;
        readonly checked: boolean | null;
        readonly wasChecked: boolean | null;
    }
}

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

declare global {
    interface HTMLElementTagNameMap {
        "controlledframe": HTMLControlledFrameElement;
    }
}
