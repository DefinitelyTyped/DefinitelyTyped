/**
 * @see https://wicg.github.io/controlled-frame
 * @see https://wicg.github.io/urlpattern
 */

type URLPatternCompatible = string | URLPatternInit | URLPattern;

type URLPatternComponent =
    | "protocol"
    | "username"
    | "password"
    | "hostname"
    | "port"
    | "pathname"
    | "search"
    | "hash";

interface URLPattern {
    /**
     * Tests whether the given input matches the URL pattern.
     * @param input The URL pattern input string or dictionary to test against.
     * @param baseURL The base URL string used to resolve relative inputs.
     * @return True if the input matches the pattern, false otherwise.
     * @throws {TypeError} If the input or base URL cannot be parsed.
     */
    test(input?: string | URLPatternInit, baseURL?: string): boolean;
    /**
     * Executes the URL pattern against the given input, returning detailed match
     * results and capture groups.
     * @param input The URL pattern input string or dictionary to execute against.
     * @param baseURL The base URL string used to resolve relative inputs.
     * @return A match result object containing capture groups for each component,
     *   or null if there is no match.
     * @throws {TypeError} If the input or base URL cannot be parsed.
     */
    exec(input?: string | URLPatternInit, baseURL?: string): URLPatternResult | null;
    /**
     * Generates a string for the specified component using the provided group
     * values.
     * @param component The URL pattern component to generate.
     * @param groups A record of group names and values to substitute into the
     *   pattern.
     * @return A string representing the generated component value.
     * @throws {TypeError} If the component is invalid or required groups are
     *   missing.
     */
    generate(component: URLPatternComponent, groups: Record<string, string>): string;
    /** A string representing the protocol component pattern. */
    readonly protocol: string;
    /** A string representing the username component pattern. */
    readonly username: string;
    /** A string representing the password component pattern. */
    readonly password: string;
    /** A string representing the hostname component pattern. */
    readonly hostname: string;
    /** A string representing the port component pattern. */
    readonly port: string;
    /** A string representing the pathname component pattern. */
    readonly pathname: string;
    /** A string representing the search component pattern. */
    readonly search: string;
    /** A string representing the hash component pattern. */
    readonly hash: string;
    /**
     * Boolean attribute indicating whether the pattern contains regular expression
     * groups.
     */
    readonly hasRegExpGroups: boolean;
}

declare var URLPattern: {
    prototype: URLPattern;
    /**
     * Creates a new URLPattern object from the provided input, base URL, and
     * options.
     * @param input The URL pattern input string or dictionary.
     * @param baseURL The base URL string or URL object used to resolve relative
     *   inputs.
     * @param options Configuration options for pattern matching, such as case
     *   sensitivity.
     * @throws {TypeError} If the pattern parsing fails or inputs are invalid.
     */
    new(input: string | URLPatternInit, baseURL: string | URL, options?: URLPatternOptions): URLPattern;
    /**
     * Creates a new URLPattern object from the provided input, base URL, and
     * options.
     * @param input The URL pattern input string or dictionary.
     * @param options Configuration options for pattern matching, such as case
     *   sensitivity.
     * @throws {TypeError} If the pattern parsing fails or inputs are invalid.
     */
    new(input?: string | URLPatternInit, options?: URLPatternOptions): URLPattern;
};

interface URLPatternComponentResult {
    input: string;
    groups: Record<string, string | undefined>;
}

interface URLPatternInit {
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

interface URLPatternOptions {
    /** @default false */
    ignoreCase?: boolean;
}

interface URLPatternResult {
    inputs: (string | URLPatternInit)[];
    protocol: URLPatternComponentResult;
    username: URLPatternComponentResult;
    password: URLPatternComponentResult;
    hostname: URLPatternComponentResult;
    port: URLPatternComponentResult;
    pathname: URLPatternComponentResult;
    search: URLPatternComponentResult;
    hash: URLPatternComponentResult;
}

interface HTMLControlledFrameElementEventMap extends HTMLElementEventMap {
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

declare class HTMLControlledFrameElement extends HTMLElement {
    /**
     * Creates a new HTMLControlledFrameElement instance with a new WebRequest and
     * ContextMenus instance.
     */
    constructor();
    /**
     * Content source URL to embed. Reflects the embedded navigable's current
     * session history entry URL.
     */
    src: string;
    /**
     * Partition name to hold data related to this content. Specifies where data
     * related to the Controlled Frame's instance should be stored.
     */
    partition: string;
    /** WindowProxy of the embedded navigable document or null. */
    readonly contentWindow: WindowProxy | null;
    /** ContextMenus instance associated with this controlled frame. */
    readonly contextMenus: ContextMenus;
    /** WebRequest instance associated with this controlled frame. */
    readonly request: WebRequest;
    /**
     * Goes back one step in the overall session history entries list for the
     * traversable navigable in the Controlled Frame.
     * @return A promise that resolves to true if the page was successfully
     *   navigated back, or false if the navigation failed or there was no previous
     *   step.
     */
    back(): Promise<boolean>;
    /**
     * Returns a promise that resolves to true if the current session history entry
     * is not the first one in the embedded navigable's session history entries.
     */
    canGoBack(): Promise<boolean>;
    /**
     * Goes forward one step in the overall session history entries list for the
     * traversable navigable in the Controlled Frame.
     * @return A promise that resolves to true if the page was successfully
     *   navigated forward, or false if the navigation failed or there was no next
     *   step.
     */
    forward(): Promise<boolean>;
    /**
     * Returns a promise that resolves to true if the current session history entry
     * is not the last one in the embedded navigable's session history entries.
     */
    canGoForward(): Promise<boolean>;
    /**
     * Goes back or forward relativeIndex number of steps in the overall session
     * history entries list for the current traversable navigable. A zero relative
     * index will reload the current page.
     * @param relativeIndex Number of steps to navigate in session history.
     * @return A promise that resolves to true if the page was successfully
     *   navigated, or false if the navigation failed or the provided relative
     *   index was out of range.
     */
    go(relativeIndex: number): Promise<boolean>;
    /** Reloads the current page. */
    reload(): void;
    /** Cancels the document load. */
    stop(): void;
    /**
     * Adds content scripts to the controlled frame's content script map.
     * @param contentScriptList Sequence of ContentScriptDetails specifying the
     *   content scripts to add.
     * @return A promise that resolves when the content scripts are successfully
     *   added.
     * @throws {TypeError} If contentScriptList is empty or validation fails.
     */
    addContentScripts(contentScriptList: ContentScriptDetails[]): Promise<void>;
    /**
     * Executes script in the embedded document's environment.
     * @param details Optional InjectDetails specifying code or file to execute.
     * @return A promise that resolves with the completion value of the script
     *   execution.
     * @throws {TypeError} If the embedded navigable is null, or both code and file
     *   are defined or undefined.
     */
    executeScript(details?: InjectDetails): Promise<any>;
    /**
     * Inserts CSS into the embedded document.
     * @param details Optional InjectDetails specifying CSS code or file to insert.
     * @return A promise that resolves when the stylesheet has been successfully
     *   injected.
     * @throws {TypeError} If the embedded navigable is null, or both code and file
     *   are defined or undefined.
     */
    insertCSS(details?: InjectDetails): Promise<void>;
    /**
     * Removes registered content scripts.
     * @param scriptNameList Optional sequence of script names to remove. If
     *   undefined, all content scripts are cleared.
     * @return A promise that resolves when the content scripts are successfully
     *   removed.
     */
    removeContentScripts(scriptNameList?: string[]): Promise<void>;
    /**
     * Clears data stored by the controlled frame within its storage partition.
     * @param options Optional ClearDataOptions specifying a timestamp limit.
     * @param types Optional ClearDataTypeSet specifying which storage types to
     *   clear.
     * @return A promise that resolves when data clearing is complete.
     */
    clearData(options?: ClearDataOptions, types?: ClearDataTypeSet): Promise<void>;
    /**
     * Gets whether audio is currently playing within the embedded content.
     * @return A promise that resolves to true if any content within the embedded
     *   navigable is currently playing audio, false otherwise.
     * @throws {TypeError} If the embedded navigable is null.
     */
    getAudioState(): Promise<boolean>;
    /**
     * Gets the current zoom factor of the controlled frame.
     * @return A promise that resolves to the current zoom factor.
     * @throws {TypeError} If the embedded navigable is null.
     */
    getZoom(): Promise<number>;
    /**
     * Gets the current zoom mode of the controlled frame.
     * @return A promise that resolves to the ZoomMode string.
     */
    getZoomMode(): Promise<string>;
    /**
     * Gets whether audio is muted for the embedded navigable.
     * @return A promise that resolves to true if the muted flag is set, false
     *   otherwise.
     * @throws {TypeError} If the embedded navigable is null.
     */
    isAudioMuted(): Promise<boolean>;
    /**
     * Sets whether audio is muted for the embedded navigable.
     * @param mute Boolean indicating whether to mute audio streams.
     * @throws {TypeError} If the embedded navigable is null.
     */
    setAudioMuted(mute: boolean): void;
    /**
     * Sets the zoom factor of the controlled frame.
     * @param zoomFactor The zoom factor to apply.
     * @return A promise that resolves when the zoom factor has been set.
     * @throws {TypeError} If the embedded navigable is null or zoom mode is
     *   disabled.
     */
    setZoom(zoomFactor: number): Promise<void>;
    /**
     * Sets the zoom mode of the controlled frame.
     * @param zoomMode The ZoomMode to set.
     * @return A promise that resolves when the zoom mode is updated.
     */
    setZoomMode(zoomMode: string): Promise<void>;
    /**
     * Captures an image showing the visible region of the embedded content.
     * @param options Optional ImageDetails specifying format and quality.
     * @return A promise that resolves to a data: URL containing the captured image
     *   data.
     * @throws {TypeError} If the embedded navigable is null or options are
     *   invalid.
     */
    captureVisibleRegion(options?: ImageDetails): Promise<void>;
    /**
     * Initiates the browser print page feature for embedded content.
     * @throws {TypeError} If the embedded navigable is null.
     */
    print(): void;
    /** Event handler for consolemessage events. */
    onconsolemessage: ((this: this, ev: ConsoleMessageEvent) => any) | null;
    /** Event handler for contentload events. */
    oncontentload: ((this: this, ev: ContentLoadEvent) => any) | null;
    /** Event handler for dialog events. */
    ondialog: ((this: this, ev: DialogEvent) => any) | null;
    /** Event handler for loadabort events. */
    onloadabort: ((this: this, ev: LoadAbortEvent) => any) | null;
    /** Event handler for loadcommit events. */
    onloadcommit: ((this: this, ev: LoadCommitEvent) => any) | null;
    /** Event handler for loadstop events. */
    onloadstop: ((this: this, ev: LoadStopEvent) => any) | null;
    /** Event handler for newwindow events. */
    onnewwindow: ((this: this, ev: NewWindowEvent) => any) | null;
    /** Event handler for permissionrequest events. */
    onpermissionrequest: ((this: this, ev: PermissionRequestEvent) => any) | null;
    /** Event handler for sizechanged events. */
    onsizechanged: ((this: this, ev: SizeChangedEvent) => any) | null;
    /** Event handler for zoomchange events. */
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

interface InjectDetails {
    /** JavaScript or CSS code string to inject. */
    code?: string;
    /** URL string of a file containing the script or CSS to inject. */
    file?: string;
}

interface InjectionItems {
    /** Code string for injection. */
    code?: string;
    /** Sequence of USVString file URL paths. */
    files?: string[];
}

type RunAt =
    | "document-start"
    | "document-end"
    | "document-idle";

interface ContentScriptDetails {
    /** Unique name of the content script. */
    name: string;
    /** JavaScript injection items. */
    js?: InjectionItems;
    /** CSS injection items. */
    css?: InjectionItems;
    /** Sequence of URL patterns defining which pages the content script applies to. */
    urlPatterns: (URLPattern | string | URLPatternInit)[];
    /**
     * Sequence of URL patterns defining which pages are excluded from content
     * script injection.
     */
    excludeURLPatterns?: (URLPattern | string | URLPatternInit)[];
    /**
     * Boolean indicating whether content should be injected into all frames or
     * just the top-level frame.
     */
    allFrames?: boolean;
    /**
     * Boolean indicating whether content should be injected into about:blank
     * pages.
     */
    matchAboutBlank?: boolean;
    /** RunAt phase indicating when JavaScript content should be executed. */
    runAt?: RunAt;
}

interface ClearDataOptions {
    /**
     * Timestamp in milliseconds since epoch representing the cutoff time for data
     * removal.
     */
    since?: number;
}

interface ClearDataTypeSet {
    /** Boolean indicating whether to clear cache. */
    cache?: boolean;
    /** Boolean indicating whether to clear cookies. */
    cookies?: boolean;
    /** Boolean indicating whether to clear file systems. */
    fileSystems?: boolean;
    /** Boolean indicating whether to clear indexedDB. */
    indexedDB?: boolean;
    /** Boolean indicating whether to clear localStorage. */
    localStorage?: boolean;
    /** Boolean indicating whether to clear persistent cookies. */
    persistentCookies?: boolean;
    /** Boolean indicating whether to clear session cookies. */
    sessionCookies?: boolean;
}

type ZoomMode =
    | "per-origin"
    | "per-view"
    | "disabled";

interface ImageDetails {
    /** Image format string such as JPEG or PNG. */
    format?: string;
    /** Image quality string or value between 0 and 100. */
    quality?: string;
}

interface ConsoleMessage {
    /** Log level integer of the console message. */
    readonly level: number;
    /** Text message of the console event. */
    readonly message: string;
}

declare class ConsoleMessageEvent extends Event {
    /** Creates a new ConsoleMessageEvent instance. */
    constructor(type: string, eventInitDict?: ConsoleMessageEventInit);
    /** ConsoleMessage object associated with the event. */
    readonly consoleMessage: ConsoleMessage;
}

interface ConsoleMessageEventInit extends EventInit {
    /** Optional ConsoleMessage object. */
    consoleMessage?: ConsoleMessage | null;
}

type DialogType =
    | "alert"
    | "confirm"
    | "prompt";

interface DialogController {
    /**
     * Accepts the dialog with an optional response string.
     * @param response Optional response string for prompt dialogs.
     */
    okay(response?: string): void;
    /** Cancels the dialog. */
    cancel(): void;
}

interface DialogMessage {
    /** DialogType of the message. */
    readonly messageType: DialogType;
    /** Text content of the dialog message. */
    readonly messageText: string;
    /** DialogController instance for managing the dialog response. */
    readonly dialog: DialogController;
}

declare class DialogEvent extends Event {
    /** Creates a new DialogEvent instance. */
    constructor(type: string, eventInitDict?: DialogEventInit);
    /** DialogMessage object associated with the event. */
    readonly dialogMessage: DialogMessage;
}

interface DialogEventInit extends EventInit {
    /** Optional DialogMessage object. */
    dialogMessage?: DialogMessage | null;
}

type WindowOpenDisposition =
    | "ignore"
    | "save_to_disk"
    | "current_tab"
    | "new_background_tab"
    | "new_foreground_tab"
    | "new_window"
    | "new_popup";

interface NewWindowController {
    /**
     * Attaches the target navigable to a new controlled frame element.
     * @param newControlledFrame The HTMLControlledFrameElement to attach the
     *   navigable to.
     */
    attach(newControlledFrame: HTMLControlledFrameElement): void;
    /** Discards the target navigable. */
    discard(): void;
}

interface NewWindow {
    /** NewWindowController instance. */
    readonly window: NewWindowController;
    /** Target URL of the new window request. */
    readonly targetUrl: string;
    /** Name attribute of the new window. */
    readonly name: string;
    /** WindowOpenDisposition of the request. */
    readonly windowOpenDisposition: WindowOpenDisposition;
}

declare class NewWindowEvent extends Event {
    /** Creates a new NewWindowEvent instance. */
    constructor(type: string, eventInitDict?: NewWindowEventInit);
    /** NewWindow object associated with the event. */
    readonly newWindow: NewWindow;
}

interface NewWindowEventInit extends EventInit {
    /** Optional NewWindow object. */
    newWindow?: NewWindow | null;
}

type PermissionType =
    | "media"
    | "geolocation"
    | "pointerLock"
    | "download"
    | "filesystem"
    | "fullscreen"
    | "hid";

interface PermissionRequestControllerBase {
    /** Allows the permission request. */
    allow(): void;
    /** Cancels or denies the permission request. */
    cancel(): void;
}

interface MediaPermissionRequestController extends PermissionRequestControllerBase {
    /** URL requesting media permission. */
    readonly url: string;
}

interface GeolocationPermissionRequestController extends PermissionRequestControllerBase {
    /** URL requesting geolocation permission. */
    readonly url: string;
}

interface PointerLockPermissionRequestController extends PermissionRequestControllerBase {
    /** Boolean indicating whether last unlocked by self. */
    readonly lastUnlockedBySelf: boolean;
    /** Boolean indicating whether a user gesture was present. */
    readonly userGesture: boolean;
    /** URL requesting pointer lock permission. */
    readonly url: string;
}

interface DownloadPermissionRequestController extends PermissionRequestControllerBase {
    /** HTTP request method of the download. */
    readonly requestMethod: string;
    /** URL requesting download permission. */
    readonly url: string;
}

interface FileSystemPermissionRequestController extends PermissionRequestControllerBase {
    /** URL requesting file system permission. */
    readonly url: string;
}

interface FullscreenPermissionRequestController extends PermissionRequestControllerBase {
    /** Origin requesting fullscreen permission. */
    readonly origin: string;
}

interface HidPermissionRequestController extends PermissionRequestControllerBase {
    /** URL requesting HID permission. */
    readonly url: string;
}

interface PermissionRequest {
    /** PermissionType of the request. */
    readonly permission: PermissionType;
    /** Base controller object for the permission request. */
    readonly request: PermissionRequestControllerBase;
}

declare class PermissionRequestEvent extends Event {
    /** Creates a new PermissionRequestEvent instance. */
    constructor(type: string, eventInitDict?: PermissionRequestEventInit);
    /** PermissionRequest object associated with the event. */
    readonly permissionRequest: PermissionRequest;
}

interface PermissionRequestEventInit extends EventInit {
    /** Optional PermissionRequest object. */
    permissionRequest?: PermissionRequest | null;
}

interface SizeChange {
    /** Previous width in pixels. */
    readonly oldWidth: number;
    /** Previous height in pixels. */
    readonly oldHeight: number;
    /** New width in pixels. */
    readonly newWidth: number;
    /** New height in pixels. */
    readonly newHeight: number;
}

declare class SizeChangedEvent extends Event {
    /** Creates a new SizeChangedEvent instance. */
    constructor(type: string, eventInitDict?: SizeChangedEventInit);
    /** SizeChange object associated with the event. */
    readonly sizeChange: SizeChange;
}

interface SizeChangedEventInit extends EventInit {
    /** Optional SizeChange object. */
    sizeChange?: SizeChange | null;
}

interface ZoomChange {
    /** Previous zoom factor float. */
    readonly oldZoomFactor: number;
    /** New zoom factor float. */
    readonly newZoomFactor: number;
}

declare class ZoomChangeEvent extends Event {
    /** Creates a new ZoomChangeEvent instance. */
    constructor(type: string, eventInitDict?: ZoomChangeEventInit);
    /** ZoomChange object associated with the event. */
    readonly zoomChange: ZoomChange;
}

interface ZoomChangeEventInit extends EventInit {
    /** Optional ZoomChange object. */
    zoomChange?: ZoomChange | null;
}

declare class ContentLoadEvent extends Event {
    /** Creates a new ContentLoadEvent instance. */
    constructor(type: string, eventInitDict?: EventInit);
}

interface LoadInfo {
    /** URL of the load. */
    readonly url: string;
    /** Boolean indicating whether the load is top-level. */
    readonly isTopLevel: boolean;
}

interface LoadAbortInfo extends LoadInfo {
    /** Error code of the abort. */
    readonly code: number;
    /** String reason for the abort. */
    readonly reason: string;
}

interface LoadRedirectInfo {
    /** Previous URL before redirection. */
    readonly oldUrl: string;
    /** New URL after redirection. */
    readonly newUrl: string;
    /** Boolean indicating whether the redirection is top-level. */
    readonly isTopLevel: boolean;
}

declare class LoadAbortEvent extends Event {
    /** Creates a new LoadAbortEvent instance. */
    constructor(type: string, eventInitDict?: LoadAbortEventInit);
    /** LoadAbortInfo object associated with the event. */
    readonly loadAbortInfo: LoadAbortInfo;
}

interface LoadAbortEventInit extends EventInit {
    /** Optional LoadAbortInfo object. */
    loadAbortInfo?: LoadAbortInfo | null;
}

declare class LoadCommitEvent extends Event {
    /** Creates a new LoadCommitEvent instance. */
    constructor(type: string, eventInitDict?: LoadCommitEventInit);
    /** LoadInfo object associated with the event. */
    readonly loadInfo: LoadInfo;
}

interface LoadCommitEventInit extends EventInit {
    /** Optional LoadInfo object. */
    loadInfo?: LoadInfo | null;
}

declare class LoadStopEvent extends Event {
    /** Creates a new LoadStopEvent instance. */
    constructor(type: string, eventInitDict?: LoadStopEventInit);
}

type LoadStopEventInit = EventInit;

declare class LoadRedirectEvent extends Event {
    /** Creates a new LoadRedirectEvent instance. */
    constructor(type: string, eventInitDict?: LoadRedirectEventInit);
    /** LoadRedirectInfo object associated with the event. */
    readonly loadRedirectInfo: LoadRedirectInfo;
}

interface LoadRedirectEventInit extends EventInit {
    /** Optional LoadRedirectInfo object. */
    loadRedirectInfo?: LoadRedirectInfo | null;
}

type ResourceType =
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

type RequestedHeaders =
    | "none"
    | "cors"
    | "all";

interface WebRequestInterceptorOptions {
    /** Sequence of URL patterns to intercept. */
    urlPatterns: (URLPattern | string | URLPatternInit)[];
    /**
     * Sequence of ResourceTypes to intercept.
     * @default []
     */
    resourceTypes?: ResourceType[];
    /**
     * Boolean indicating whether the interceptor is blocking.
     * @default false
     */
    blocking?: boolean;
    /**
     * Boolean indicating whether to include request body data.
     * @default false
     */
    includeRequestBody?: boolean;
    /**
     * RequestedHeaders inclusion mode.
     * @default "none"
     */
    includeHeaders?: RequestedHeaders;
}

interface WebRequest {
    /**
     * Creates a new WebRequestInterceptor with the specified options.
     * @param options WebRequestInterceptorOptions configuration.
     * @return The created WebRequestInterceptor instance.
     */
    createWebRequestInterceptor(options: WebRequestInterceptorOptions): WebRequestInterceptor;
}

interface WebRequestInterceptorEventMap {
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

interface WebRequestInterceptor extends EventTarget {
    /** Event handler for authrequired events. */
    onauthrequired: ((this: this, ev: Event) => any) | null;
    /** Event handler for beforeredirect events. */
    onbeforeredirect: ((this: this, ev: Event) => any) | null;
    /** Event handler for beforerequest events. */
    onbeforerequest: ((this: this, ev: Event) => any) | null;
    /** Event handler for beforesendheaders events. */
    onbeforesendheaders: ((this: this, ev: Event) => any) | null;
    /** Event handler for completed events. */
    oncompleted: ((this: this, ev: Event) => any) | null;
    /** Event handler for erroroccurred events. */
    onerroroccurred: ((this: this, ev: Event) => any) | null;
    /** Event handler for headersreceived events. */
    onheadersreceived: ((this: this, ev: Event) => any) | null;
    /** Event handler for sendheaders events. */
    onsendheaders: ((this: this, ev: Event) => any) | null;
    /** Event handler for responsestarted events. */
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

type DocumentLifecycle =
    | "prerender"
    | "active"
    | "cached"
    | "pending-deletion";

type FrameType =
    | "outermost-frame"
    | "fenced-frame"
    | "sub-frame";

interface UploadData {
    /** ArrayBuffer of raw upload bytes or null. */
    readonly bytes: ArrayBuffer | null;
    /** File name string or null. */
    readonly file: string | null;
}

interface RequestBody {
    /** Error string or null. */
    readonly error: string | null;
    /** Form data object or null. */
    readonly formData: any;
    /** FrozenArray of UploadData objects or null. */
    readonly raw: readonly UploadData[] | null;
}

interface WebRequestRequest {
    /** HTTP method string. */
    readonly method: string;
    /** Request identifier string. */
    readonly id: string;
    /** ResourceType of the request. */
    readonly type: ResourceType;
    /** URL string of the request. */
    readonly url: string;
    /** Initiator origin string or null. */
    readonly initiator: string | null;
    /** Headers object or null. */
    readonly headers: Headers | null;
    /** RequestBody object or null. */
    readonly body: RequestBody | null;
}

interface AuthChallenger {
    /** Host string. */
    readonly host: string;
    /** Port number. */
    readonly port: number;
}

interface WebRequestAuthDetails {
    /** AuthChallenger object. */
    readonly challenger: AuthChallenger;
    /** Boolean indicating whether authentication is via proxy. */
    readonly isProxy: boolean;
    /** Authentication scheme string. */
    readonly scheme: string;
    /** Authentication realm string or null. */
    readonly realm: string | null;
}

interface WebRequestResponse {
    /** HTTP status code. */
    readonly statusCode: number;
    /** HTTP status line string. */
    readonly statusLine: string;
    /** Boolean indicating whether the response was served from cache. */
    readonly fromCache: boolean;
    /** Headers object or null. */
    readonly headers: Headers | null;
    /** Server IP address string or null. */
    readonly ip: string | null;
    /** Redirect URL string or null. */
    readonly redirectURL: string | null;
    /** WebRequestAuthDetails object or null. */
    readonly auth: WebRequestAuthDetails | null;
}

interface WebRequestEvent extends Event {
    /** WebRequestRequest object. */
    readonly request: WebRequestRequest;
    /** Frame ID number. */
    readonly frameId: number;
    /** FrameType or null. */
    readonly frameType: FrameType | null;
    /** Document ID string or null. */
    readonly documentId: string | null;
    /** DocumentLifecycle state or null. */
    readonly documentLifecycle: DocumentLifecycle | null;
    /** Parent document ID string or null. */
    readonly parentDocumentId: string | null;
    /** Parent frame ID number or null. */
    readonly parentFrameId: number | null;
}

interface WebRequestAuthCredentials {
    /** Username string. */
    username: string;
    /** Password string. */
    password: string;
}

interface WebRequestAuthOptions {
    /** AbortSignal to cancel the authentication. */
    signal?: AbortSignal;
}

interface WebRequestAuthRequiredEvent extends WebRequestEvent {
    /** WebRequestResponse object. */
    readonly response: WebRequestResponse;
    /**
     * Sets authentication credentials for the request.
     * @param credentials Promise resolving to WebRequestAuthCredentials.
     * @param options Optional WebRequestAuthOptions.
     */
    setCredentials(credentials: Promise<WebRequestAuthCredentials>, options?: WebRequestAuthOptions): void;
}

interface WebRequestBeforeRedirectEvent extends WebRequestEvent {
    /** WebRequestResponse object. */
    readonly response: WebRequestResponse;
}

interface WebRequestBeforeRequestEvent extends WebRequestEvent {
    /**
     * Redirects the request to the specified URL.
     * @param redirectURL USVString target URL.
     */
    redirect(redirectURL: string): void;
}

interface WebRequestBeforeSendHeadersEvent extends WebRequestEvent {
    /**
     * Sets the request headers.
     * @param requestHeaders Headers or HeadersInit object.
     */
    setRequestHeaders(requestHeaders: Headers | HeadersInit): void;
}

interface WebRequestCompletedEvent extends WebRequestEvent {
    /** WebRequestResponse object. */
    readonly response: WebRequestResponse;
}

interface WebRequestErrorOccurredEvent extends WebRequestEvent {
    /** Error message string. */
    readonly error: string;
}

interface WebRequestHeadersReceivedEvent extends WebRequestEvent {
    /** WebRequestResponse object. */
    readonly response: WebRequestResponse;
    /**
     * Redirects the request to the specified URL.
     * @param redirectURL USVString target URL.
     */
    redirect(redirectURL: string): void;
    /**
     * Sets the response headers.
     * @param responseHeaders Headers or HeadersInit object.
     */
    setResponseHeaders(responseHeaders: Headers | HeadersInit): void;
}

interface WebRequestResponseStartedEvent extends WebRequestEvent {
    /** WebRequestResponse object. */
    readonly response: WebRequestResponse;
}

type WebRequestSendHeadersEvent = WebRequestEvent;

type ContextType =
    | "all"
    | "page"
    | "frame"
    | "selection"
    | "link"
    | "editable"
    | "image"
    | "video"
    | "audio";

type ItemType =
    | "normal"
    | "checkbox"
    | "radio"
    | "separator";

interface ContextMenusProperties {
    /** Boolean indicating whether the item is checked. */
    checked?: boolean;
    /** Sequence of ContextTypes where the item should appear. */
    contexts?: ContextType[];
    /** Sequence of URL patterns for document URLs. */
    documentURLPatterns?: (URLPattern | string | URLPatternInit)[];
    /** Boolean indicating whether the item is enabled. */
    enabled?: boolean;
    /** Parent menu item ID string. */
    parentId?: string;
    /** Sequence of URL patterns for target URLs. */
    targetURLPatterns?: (URLPattern | string | URLPatternInit)[];
    /** Title string of the menu item. */
    title?: string;
    /** ItemType of the menu item. */
    type?: ItemType;
}

interface ContextMenusCreateProperties extends ContextMenusProperties {
    /** Required unique ID string for the menu item. */
    id: string;
}

interface ContextMenusEventMap {
    "click": ContextMenusClickEvent;
    "show": Event;
}

interface ContextMenus extends EventTarget {
    /**
     * Creates a new context menu item.
     * @param properties ContextMenusCreateProperties defining the item.
     * @return A promise that resolves when the item is created.
     * @throws {TypeError} If an item with the same ID already exists.
     */
    create(properties: ContextMenusCreateProperties): Promise<void>;
    /**
     * Removes a context menu item by ID.
     * @param id ID string of the menu item to remove.
     * @return A promise that resolves when the item is removed.
     */
    remove(id: string): Promise<void>;
    /**
     * Removes all context menu items.
     * @return A promise that resolves when all items are cleared.
     */
    removeAll(): Promise<void>;
    /**
     * Updates an existing context menu item.
     * @param id ID string of the menu item to update.
     * @param properties Optional ContextMenusProperties to update.
     * @return A promise that resolves when the item is updated.
     * @throws {TypeError} If the menu item ID does not exist.
     */
    update(id: string, properties?: ContextMenusProperties): Promise<void>;
    /** Event handler for click events on context menus. */
    onclick: ((this: this, ev: ContextMenusClickEvent) => any) | null;
    /** Event handler for show events on context menus. */
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

interface MenuItemDetails {
    /** ID string of the menu item. */
    readonly id: string;
    /** Parent menu ID string or null. */
    readonly parentMenuId: string | null;
    /** Boolean checked state or null. */
    readonly checked: boolean | null;
    /** Boolean previous checked state or null. */
    readonly wasChecked: boolean | null;
}

interface ContextMenusClickEvent extends Event {
    /** MenuItemDetails object. */
    readonly menuItem: MenuItemDetails;
    /** Frame ID number where the context menu was opened. */
    readonly frameId: number;
    /** Frame URL string. */
    readonly frameURL: string;
    /** Page URL string. */
    readonly pageURL: string;
    /** Boolean indicating whether the target element is editable. */
    readonly editable: boolean;
    /** Link URL string or null. */
    readonly linkURL: string | null;
    /** Media type string or null. */
    readonly mediaType: string | null;
    /** Selected text string or null. */
    readonly selectionText: string | null;
    /** Source URL string or null. */
    readonly srcURL: string | null;
}

interface HTMLElementTagNameMap {
    "controlledframe": HTMLControlledFrameElement;
}
