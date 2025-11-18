// Based on https://wicg.github.io/controlled-frame
import { URLPattern, URLPatternInput } from "./url-pattern";

export interface HTMLElementTagNameMap {
    controlledframe: HTMLControlledFrameElement;
}

export interface ControlledFrameEventMap extends HTMLElementEventMap {
    consolemessage: ConsoleMessageEvent;
    contentload: ContentLoadEvent;
    dialog: DialogEvent;
    loadabort: LoadAbortEvent;
    loadcommit: LoadCommitEvent;
    loadstart: LoadStartEvent;
    loadstop: LoadStopEvent;
    newwindow: NewWindowEvent;
    permissionrequest: PermissionRequestEvent;
    sizechanged: SizeChangedEvent;
    zoomchange: ZoomChangeEvent;
    loadredirect: LoadRedirectEvent;
}

export interface HTMLControlledFrameElement extends HTMLElement {
    src: string;
    partition: string;
    readonly contentWindow: WindowProxy | null;

    readonly contextMenus: ContextMenus;
    readonly request: WebRequest;

    autosize: boolean;
    minwidth: number;
    maxwidth: number;
    minheight: number;
    maxheight: number;

    // Navigation methods.
    back(): Promise<boolean>;
    canGoBack(): Promise<boolean>;
    forward(): Promise<boolean>;
    canGoForward(): Promise<boolean>;
    go(relativeIndex: number): Promise<boolean>;
    reload(): void;
    stop(): void;

    // Scripting methods.
    addContentScripts(contentScriptList: ContentScriptDetails[]): Promise<void>;
    executeScript(details?: InjectDetails): Promise<any>;
    insertCSS(details?: InjectDetails): Promise<void>;
    removeContentScripts(scriptNameList?: string[]): Promise<void>;

    // Configuration methods.
    clearData(
        options?: ClearDataOptions,
        types?: ClearDataTypeSet
    ): Promise<void>;
    getAudioState(): Promise<boolean>;
    getZoom(): Promise<number>;
    getZoomMode(): Promise<string>;
    isAudioMuted(): Promise<boolean>;
    setAudioMuted(mute: boolean): void;
    setZoom(zoomFactor: number): Promise<void>;
    setZoomMode(zoomMode: ZoomMode): Promise<void>;

    // Capture methods.
    captureVisibleRegion(options?: ImageDetails): Promise<void>;
    print(): void;

    addEventListener<K extends keyof ControlledFrameEventMap>(
        type: K,
        listener: (
            this: HTMLControlledFrameElement,
            ev: ControlledFrameEventMap[K]
        ) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof ControlledFrameEventMap>(
        type: K,
        listener: (
            this: HTMLControlledFrameElement,
            ev: ControlledFrameEventMap[K]
        ) => any,
        options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ): void;
}

export interface InjectDetails {
    code?: string;
    file?: string;
}

export interface InjectionItems {
    code?: string;
    files?: string[];
}

export type RunAt = 'document-start' | 'document-end' | 'document-idle';

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

export type ZoomMode = 'per-origin' | 'per-view' | 'disabled';

export interface ImageDetails{
    format?: string;
    quality?: string;
}

export interface ConsoleMessageEvent extends Event {
    readonly level: number;
    readonly message: string;
}

export type DialogType = 'alert' | 'confirm' | 'prompt';

export interface DialogController {
    okay(response?: string): void;
    cancel(): void;
}

export interface DialogEvent extends Event {
    readonly messageType: DialogType;
    readonly messageText: string;
    readonly dialog: DialogController;
}

export type WindowOpenDisposition =
    | 'ignore'
    | 'save_to_disk'
    | 'current_tab'
    | 'new_background_tab'
    | 'new_foreground_tab'
    | 'new_window'
    | 'new_popup';

export interface NewWindowController {
    attach(newControlledFrame: HTMLControlledFrameElement): void;
    discard(): void;
}

export interface NewWindowEvent extends Event {
    readonly window: NewWindowController;
    readonly targetUrl: string;
    readonly name: string;
    readonly windowOpenDisposition: WindowOpenDisposition;
    readonly partition: string;
    readonly initialHeight: number;
    readonly initialWidth: number;
}

export type PermissionType =
    | 'media'
    | 'geolocation'
    | 'pointerLock'
    | 'download'
    | 'filesystem'
    | 'fullscreen'
    | 'hid';

export interface PermissionRequestController {
    allow(): void;
    cancel(): void;

    readonly url: string;
    readonly origin?: string;
    readonly requestMethod?: string;
    readonly lastUnlockedBySelf?: boolean;
    readonly userGesture?: boolean;
}

export interface PermissionRequestEvent extends Event {
    readonly permission: PermissionType;
    readonly request: PermissionRequestController;
}

export interface SizeChangedEvent extends Event {
    readonly oldWidth: number;
    readonly oldHeight: number;
    readonly newWidth: number;
    readonly newHeight: number;
}

export interface ZoomChangeEvent extends Event {
    readonly oldZoomFactor: number;
    readonly newZoomFactor: number;
}

export type ContentLoadEvent = Event;

export interface LoadAbortEvent extends Event {
    readonly url: string;
    readonly isTopLevel: boolean;
    readonly code: number;
    readonly reason: string;
}

export interface LoadCommitEvent extends Event {
    readonly url: string;
    readonly isTopLevel: boolean;
}

export interface LoadStartEvent extends Event {
    readonly url: string;
    readonly isTopLevel: boolean;
}

export type LoadStopEvent = Event;

export interface LoadRedirectEvent extends Event {
    readonly oldUrl: string;
    readonly newUrl: string;
    readonly isTopLevel: boolean;
}

export type ResourceType =
    | 'main-frame'
    | 'sub-frame'
    | 'stylesheet'
    | 'script'
    | 'image'
    | 'font'
    | 'object'
    | 'xmlhttprequest'
    | 'ping'
    | 'csp-report'
    | 'media'
    | 'websocket'
    | 'other';

export type RequestedHeaders = 'none' | 'cors' | 'all';

export interface WebRequestInterceptorOptions {
    urlPatterns: (URLPattern | URLPatternInput)[];
    resourceTypes?: ResourceType[];
    blocking?: boolean;
    includeRequestBody?: boolean;
    includeHeaders?: RequestedHeaders;
}

export interface WebRequest {
    createWebRequestInterceptor(
        options: WebRequestInterceptorOptions
    ): WebRequestInterceptor;
}

export interface WebRequestInterceptorEventMap {
    authrequired: WebRequestAuthRequiredEvent;
    beforeredirect: WebRequestBeforeRedirectEvent;
    beforerequest: WebRequestBeforeRequestEvent;
    beforesendheaders: WebRequestBeforeSendHeadersEvent;
    completed: WebRequestCompletedEvent;
    erroroccurred: WebRequestErrorOccurredEvent;
    headersreceived: WebRequestHeadersReceivedEvent;
    sendheaders: WebRequestSendHeadersEvent;
    responsestarted: WebRequestResponseStartedEvent;
}

export interface WebRequestInterceptor extends EventTarget {
    addEventListener<K extends keyof WebRequestInterceptorEventMap>(
        type: K,
        listener: (
            this: WebRequestInterceptor,
            ev: WebRequestInterceptorEventMap[K]
        ) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof WebRequestInterceptorEventMap>(
        type: K,
        listener: (
            this: WebRequestInterceptor,
            ev: WebRequestInterceptorEventMap[K]
        ) => any,
        options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ): void;
}

export type DocumentLifecycle = 'prerender' | 'active' | 'cached' | 'pending-deletion';

export type FrameType = 'outermost-frame' | 'fenced-frame' | 'sub-frame';

export interface WebRequestUploadData {
    readonly bytes?: ArrayBuffer;
    readonly file?: string;
}

export interface WebRequestResponse {
    readonly statusCode: number;
    readonly statusLine: string;
    readonly fromCache: boolean;
    readonly headers?: Headers;
    readonly ip?: string;
    readonly redirectURL?: string;
    readonly auth?: {
        readonly challenger: {
            readonly host: string;
            readonly port: number;
        };
        readonly isProxy: boolean;
        readonly scheme: string;
        readonly realm?: string;
    };
}

export interface WebRequestEvent extends Event {
    readonly request: {
        readonly method: string;
        readonly id: string;
        readonly type: ResourceType;
        readonly url: string;
        readonly initiator?: string;
        readonly headers?: Headers;
        readonly body?: {
            readonly error?: string;
            readonly formData: any;
            readonly raw?: readonly WebRequestUploadData[];
        };
    };
    readonly frameId: number;
    readonly frameType?: FrameType;
    readonly documentId?: string;
    readonly documentLifecycle?: DocumentLifecycle;
    readonly parentDocumentId?: string;
    readonly parentFrameId?: number;
}

export interface WebRequestAuthCredentials {
    username: string;
    password: string;
}

export interface WebRequestAuthOptions {
    signal: AbortSignal;
}

export interface WebRequestAuthRequiredEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
    setCredentials(
        credentials: Promise<WebRequestAuthCredentials>,
        options?: WebRequestAuthOptions
    ): void;
}

export interface WebRequestBeforeRedirectEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
}

export interface WebRequestBeforeRequestEvent extends WebRequestEvent {
    redirect(redirectURL: string): void;
}

export interface WebRequestBeforeSendHeadersEvent extends WebRequestEvent {
    setRequestHeader(requestHeaders: Headers | HeadersInit): void;
}

export interface WebRequestCompletedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
}

export interface WebRequestErrorOccurredEvent extends WebRequestEvent {
    readonly error: string;
}

export interface WebRequestHeadersReceivedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
    redirect(redirectURL: string): void;
    setResponseHeaders(responseHeaders: Headers | HeadersInit): void;
}

export interface WebRequestResponseStartedEvent extends WebRequestEvent {
    readonly response: WebRequestResponse;
}

export type WebRequestSendHeadersEvent = WebRequestEvent;

export type ContextMenusContextType =
    | 'all'
    | 'page'
    | 'frame'
    | 'selection'
    | 'link'
    | 'editable'
    | 'image'
    | 'video'
    | 'audio';

export type ContextMenusItemType = 'normal' | 'checkbox' | 'radio' | 'separator';

export interface ContextMenusProperties {
    checked?: boolean;
    contexts?: ContextMenusContextType[];
    documentURLPatterns?: (URLPattern | URLPatternInput)[];
    enabled?: boolean;
    parentId?: string;
    targetURLPatterns?: (URLPattern | URLPatternInput)[];
    title?: string;
    type?: ContextMenusItemType;
}

export type ContextMenusCreateProperties = ContextMenusProperties & {
    id: string;
};

export interface ContextMenusEventMap {
    click: ContextMenusClickEvent;
    show: Event;
}

export interface ContextMenus extends EventTarget {
    create(properties: ContextMenusCreateProperties): Promise<void>;
    remove(id: string): Promise<void>;
    removeAll(): Promise<void>;
    update(id: string, properties?: ContextMenusProperties): Promise<void>;

    addEventListener<K extends keyof ContextMenusEventMap>(
        type: K,
        listener: (this: ContextMenus, ev: ContextMenusEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof ContextMenusEventMap>(
        type: K,
        listener: (this: ContextMenus, ev: ContextMenusEventMap[K]) => any,
        options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ): void;
}

export interface ContextMenusClickEvent extends Event {
    readonly menuItem: {
        readonly id: string;
        readonly parentMenuId?: string;
        readonly checked?: boolean;
        readonly wasChecked?: boolean;
    };
    readonly frameId: number;
    readonly frameURL: string;
    readonly pageURL: string;
    readonly editable: boolean;
    readonly linkURL?: string;
    readonly mediaType?: string;
    readonly selectionText?: string;
    readonly srcURL?: string;
}
