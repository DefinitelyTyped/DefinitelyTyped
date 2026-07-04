export {};

type RequestMethod = "get" | "post" | "put" | "patch" | "delete";

export const FrameLoadingStyle: {
    readonly eager: "eager";
    readonly lazy: "lazy";
};

export class FrameElement extends HTMLElement {
    src: string | null;
    refresh: "morph" | null;
    disabled: boolean;
    loading: "eager" | "lazy";
    loaded: Promise<void>;
    autoscroll: boolean;

    readonly complete: boolean;
    readonly isActive: boolean;
    readonly isPreview: boolean;

    reload(): Promise<void>;
}

export class StreamElement extends HTMLElement {
    static renderElement(newElement: StreamElement): Promise<void>;

    connectedCallback(): Promise<void>;
    render(): Promise<void>;
    disconnect(): void;
    removeDuplicateTargetChildren(): void;
    removeDuplicateTargetSiblings(): void;

    /**
     * The current action, or `null` if the `action` attribute is absent.
     */
    readonly action: string | null;

    /**
     * The current target (an element ID) to which the result will
     * be rendered, or `null` if the `target` attribute is absent.
     */
    readonly target: string | null;

    /**
     * The current "targets" selector (a CSS selector), or `null` if the
     * `targets` attribute is absent.
     */
    readonly targets: string | null;

    /**
     * Reads the request-id attribute
     */
    readonly requestId: string | null;

    /**
     * Gets the main `<template>` element used for rendering.
     */
    readonly templateElement: HTMLTemplateElement;

    /**
     * Gets a cloned copy of the template's content.
     */
    readonly templateContent: DocumentFragment;

    /**
     * Gets the list of elements the stream action will be applied to,
     * resolved from the `target` (an element ID) or `targets` (a CSS
     * selector) attribute.
     */
    readonly targetElements: Element[];
}

export class StreamSourceElement extends HTMLElement {
    streamSource: WebSocket | EventSource | null;
    readonly src: string;
}

export interface StreamSource {
    addEventListener(
        type: "message",
        listener: (event: MessageEvent) => void,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
        type: "message",
        listener: (event: MessageEvent) => void,
        options?: boolean | EventListenerOptions,
    ): void;
}

/**
 * A stream message, as accepted by {@link renderStreamMessage}.
 *
 * Note that Turbo does not export the `StreamMessage` class at runtime, so
 * this interface only describes instances (there is no constructor and no
 * access to the static `wrap` method or `contentType` property).
 */
export interface StreamMessage {
    readonly fragment: DocumentFragment;
}

export interface FetchRequestHeaders {
    [header: string]: string | undefined;
}

export const FetchMethod: {
    readonly get: "get";
    readonly post: "post";
    readonly put: "put";
    readonly patch: "patch";
    readonly delete: "delete";
};

export const FetchEnctype: {
    readonly urlEncoded: "application/x-www-form-urlencoded";
    readonly multipart: "multipart/form-data";
    readonly plain: "text/plain";
};

/**
 * Parses a string into a lowercase HTTP method verb known to Turbo.
 *
 * @param method Method string to parse (case-insensitive)
 * @returns The matching method, or `undefined` for unknown methods
 */
export function fetchMethodFromString(method: string): RequestMethod | undefined;

/**
 * Parses a string into a form enctype, falling back to
 * "application/x-www-form-urlencoded" for unknown values.
 *
 * @param encoding Enctype string to parse (case-insensitive)
 */
export function fetchEnctypeFromString(
    encoding: string,
): "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";

/**
 * Determines whether the given HTTP method is "safe" (has no side effects
 * on the server). Only "get" is considered safe.
 *
 * @param fetchMethod Method string to test (case-insensitive)
 */
export function isSafe(fetchMethod: string): boolean;

/**
 * Performs a `window.fetch` with an `X-Turbo-Request-Id` header appended,
 * allowing the response to be correlated with Turbo's request tracking
 * (e.g. to avoid a full page refresh for a request this client initiated).
 *
 * @param url Resource to fetch
 * @param options Standard fetch options
 */
export function fetch(url: string | URL, options?: RequestInit): Promise<Response>;

/**
 * The object responsible for a {@link FetchRequest}'s lifecycle, receiving
 * callbacks as the request progresses.
 */
export interface FetchRequestDelegate {
    referrer?: URL;
    prepareRequest(request: FetchRequest): void;
    requestStarted(request: FetchRequest): void;
    requestPreventedHandlingResponse(request: FetchRequest, response: FetchResponse): void;
    requestSucceededWithResponse(request: FetchRequest, response: FetchResponse): void;
    requestFailedWithResponse(request: FetchRequest, response: FetchResponse): void;
    requestErrored(request: FetchRequest, error: Error): void;
    requestFinished(request: FetchRequest): void;
}

export class FetchRequest {
    constructor(
        delegate: FetchRequestDelegate,
        method: RequestMethod,
        location: URL | string,
        requestBody?: FormData | URLSearchParams,
        target?: HTMLFormElement | HTMLAnchorElement | FrameElement | null,
        enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain",
    );
    abortController: AbortController;
    readonly abortSignal: AbortSignal;
    body: FormData | URLSearchParams;
    readonly defaultHeaders: FetchRequestHeaders;
    delegate: FetchRequestDelegate;
    enctype: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    readonly entries: Array<[string, FormDataEntryValue]>;
    fetchOptions: RequestInit & { method: Uppercase<RequestMethod> };
    headers: FetchRequestHeaders;
    readonly isSafe: boolean;
    readonly location: URL;
    /**
     * Reads back the HTTP method verb in UPPERCASE (e.g. "GET"), as stored
     * on the underlying fetch options; assignments accept Turbo's lowercase
     * method names.
     */
    get method(): Uppercase<RequestMethod>;
    set method(value: RequestMethod);
    readonly params: URLSearchParams;
    target: HTMLFormElement | HTMLAnchorElement | FrameElement | null;
    url: URL;
    acceptResponseType(mimeType: string): void;
    cancel(): void;
    /**
     * Performs the request. Resolves with the response, or `undefined` when
     * the request was aborted via {@link cancel}.
     */
    perform(): Promise<FetchResponse | undefined>;
}

export class FetchResponse {
    constructor(response: Response);
    readonly clientError: boolean;
    readonly contentType: string | null;
    readonly failed: boolean;
    header(key: string): string | null;
    readonly isHTML: boolean;
    readonly location: URL;
    readonly redirected: boolean;
    /** Resolves with the response body, or `undefined` for non-HTML responses. */
    readonly responseHTML: Promise<string | undefined>;
    readonly responseText: Promise<string>;
    response: Response;
    readonly serverError: boolean;
    readonly statusCode: number;
    readonly succeeded: boolean;
}

export class PageRenderer {
    /**
     * The default render method for page visits: replaces the current `<body>`
     * with the new one. Can be reassigned via the `turbo:before-render`
     * event's `detail.render`.
     */
    static renderElement(currentElement: HTMLBodyElement, newElement: HTMLBodyElement): void;
}

export class FrameRenderer {
    /**
     * The default render method for frame navigations: replaces the current
     * frame's contents with the new frame's. Can be reassigned via the
     * `turbo:before-frame-render` event's `detail.render`.
     */
    static renderElement(currentElement: FrameElement, newElement: FrameElement): void;
}

export class PageSnapshot {
    static fromHTMLString(html?: string): PageSnapshot;
    static fromElement(element: Element): PageSnapshot;
    static fromDocument(document: Pick<Document, "documentElement" | "body" | "head">): PageSnapshot;

    readonly headElement: HTMLHeadElement;
    readonly isCacheable: boolean;
    readonly isPreviewable: boolean;
    readonly isVisitable: boolean;
    readonly lang: string | null;
    readonly rootLocation: URL;
    clone(): PageSnapshot;
}

export interface Visit {
    readonly action: Action;
    readonly location: URL;
    hasCachedSnapshot(): boolean;
    complete(): void;
    cancel(): void;
}

export interface Adapter {
    visitProposedToLocation(location: URL, options?: VisitOptions): void;
    visitStarted(visit: Visit): void;
    visitCompleted(visit: Visit): void;
    visitFailed(visit: Visit): void;
    visitRequestStarted(visit: Visit): void;
    visitRequestCompleted(visit: Visit): void;
    visitRequestFailedWithStatusCode(visit: Visit, statusCode: number): void;
    visitRequestFinished(visit: Visit): void;
    visitRendered(visit: Visit): void;
    pageInvalidated(reason: { reason: string }): void;
    formSubmissionStarted?(formSubmission: FormSubmission): void;
    formSubmissionFinished?(formSubmission: FormSubmission): void;
    linkPrefetchingIsEnabledForLocation?(location: URL): boolean;
}

/**
 * The default adapter installed on the session.
 *
 * Note that Turbo does not export the `BrowserAdapter` class at runtime —
 * obtain the instance via `session.adapter` or `navigator.delegate.adapter`.
 */
export interface BrowserAdapter extends Adapter {
    progressBar: ProgressBar;
    formSubmissionStarted(formSubmission: FormSubmission): void;
    formSubmissionFinished(formSubmission: FormSubmission): void;
    linkPrefetchingIsEnabledForLocation(location: URL): boolean;
}

export interface ProgressBar {
    hiding: boolean;
    value: number;
    visible: boolean;
    show(): void;
    hide(): void;
    setValue(value: number): void;
}

/**
 * The delegate for the Turbo navigator — in practice, the active session.
 * Provides access to the current adapter.
 */
export interface NavigatorDelegate {
    adapter: Adapter;
}

/**
 * Interface for the Turbo navigator.
 * Provides methods for programmatic navigation and form submission.
 */
export interface Navigator {
    /** The delegate for this navigator (the active Turbo session). */
    delegate: NavigatorDelegate;
    /**
     * Submits a form programmatically through Turbo Drive.
     *
     * @param form The form element to submit
     * @param submitter Optional submitter element (button or input)
     */
    submitForm(form: HTMLFormElement, submitter?: HTMLElement): void;
}

/**
 * Interface for the Turbo page cache.
 * Provides methods for managing the page cache.
 */
export interface Cache {
    /**
     * Removes all entries from the Turbo Drive page cache.
     * Call this when state has changed on the server that may affect cached pages.
     */
    clear(): void;

    /**
     * Resets the cache control meta tag to allow normal caching.
     */
    resetCacheControl(): void;

    /**
     * Sets the cache control meta tag to "no-cache", preventing the page from being cached.
     */
    exemptPageFromCache(): void;

    /**
     * Sets the cache control meta tag to "no-preview", preventing the page from being used as a preview.
     */
    exemptPageFromPreview(): void;
}

/**
 * Configuration for Turbo Drive.
 */
export interface DriveConfig {
    /** Whether Turbo Drive is enabled. Defaults to true. */
    enabled: boolean;
    /** Delay in milliseconds before showing the progress bar. Defaults to 500. */
    progressBarDelay: number;
    /** Set of file extensions that should not be handled by Turbo Drive. */
    unvisitableExtensions: Set<string>;
}

/**
 * Submitter configuration callbacks for form submission.
 */
export interface SubmitterConfig {
    /** Called before form submission to disable the submitter. */
    beforeSubmit(submitter: HTMLElement): void;
    /** Called after form submission to re-enable the submitter. */
    afterSubmit(submitter: HTMLElement): void;
}

/**
 * Configuration for Turbo form handling.
 */
export interface FormsConfig {
    /** Form handling mode: "on" (default), "off", or "optin". */
    mode: "on" | "off" | "optin";
    /** Custom confirmation method. Falls back to window.confirm if not defined. */
    confirm?: (message: string, element: HTMLFormElement, submitter: HTMLElement | null) => boolean | Promise<boolean>;
    /**
     * Controls how submitters are disabled during form submission.
     * Can be "disabled" (default), "aria-disabled", or a custom SubmitterConfig.
     */
    submitter: "disabled" | "aria-disabled" | SubmitterConfig;
}

/**
 * The Turbo configuration object.
 */
export interface TurboConfig {
    drive: DriveConfig;
    forms: FormsConfig;
}

/**
 * Connects a stream source to the main session.
 *
 * @param source Stream source to connect
 */
export function connectStreamSource(source: StreamSource): void;

/**
 * Disconnects a stream source from the main session.
 *
 * @param source Stream source to disconnect
 */
export function disconnectStreamSource(source: StreamSource): void;

/**
 * Renders a stream message to the main session by appending it to the
 * current document.
 *
 * @param message Message to render
 */
export function renderStreamMessage(message: StreamMessage | string): void;

export interface TurboHistory {
    readonly location: URL;
    readonly restorationIdentifier: string;
    push(location: URL, restorationIdentifier?: string): void;
    replace(location: URL, restorationIdentifier?: string): void;
}

/**
 * An LRU cache of page snapshots, keyed by location.
 *
 * Note that Turbo does not export the `SnapshotCache` class at runtime —
 * obtain the instance via `session.view.snapshotCache`.
 */
export interface SnapshotCache {
    has(location: URL): boolean;
    get(location: URL): PageSnapshot | undefined;
    put(location: URL, snapshot: PageSnapshot): PageSnapshot;
    clear(): void;
}

/**
 * The session's view of the current page.
 *
 * Note that Turbo does not export the `PageView` class at runtime —
 * obtain the instance via `session.view`.
 */
export interface PageView {
    element: HTMLElement;
    snapshotCache: SnapshotCache;
    /**
     * The location of the last rendered page. Keys the snapshot cache and
     * page-refresh detection.
     */
    lastRenderedLocation: URL;
    forceReloaded: boolean;
    readonly snapshot: PageSnapshot;
    cacheSnapshot(snapshot?: PageSnapshot): Promise<PageSnapshot | undefined>;
    getCachedSnapshotForLocation(location: URL): PageSnapshot | undefined;
    clearSnapshotCache(): void;
}

export interface TurboSession {
    readonly history: TurboHistory;
    readonly view: PageView;
    adapter: Adapter;
    readonly enabled: boolean;
    readonly started: boolean;

    connectStreamSource(source: StreamSource): void;
    disconnectStreamSource(source: StreamSource): void;
    renderStreamMessage(message: StreamMessage | string): void;

    drive: boolean;
    readonly location: URL;
    readonly restorationIdentifier: string;
}

/**
 * A stream action callback. Invoked with the matched `StreamElement` as
 * `this`, allowing access to its attributes and target elements.
 */
export type TurboStreamAction = (this: StreamElement) => void;

/**
 * A map of action names to their {@link TurboStreamAction} callbacks, as
 * used by {@link StreamActions}.
 */
export type TurboStreamActions = Record<string, TurboStreamAction>;

export const StreamActions: TurboStreamActions;

export type Action = "advance" | "replace" | "restore";
export interface VisitOptions {
    action?: Action;
    frame?: string;
}
export function visit(location: string | URL, options?: VisitOptions): void;

/**
 * Starts the main Turbo session.
 * This initializes observers to monitor link interactions.
 */
export function start(): void;

/**
 * Registers an adapter for the main session.
 *
 * @param adapter Adapter to register
 */
export function registerAdapter(adapter: Adapter): void;

/**
 * Sets the form mode for Turbo Drive.
 *
 * @param mode Form handling mode
 * @deprecated Use `Turbo.config.forms.mode = mode` instead.
 */
export function setFormMode(mode: "on" | "off" | "optin"): void;

/**
 * Sets the delay after which the progress bar will appear during navigation,
 * in milliseconds. The progress bar appears after 500ms by default.
 *
 * @param delayInMilliseconds
 * @deprecated Use `Turbo.config.drive.progressBarDelay = delayInMilliseconds` instead.
 */
export function setProgressBarDelay(delayInMilliseconds: number): void;

/**
 * Sets the method that is called by links decorated with `data-turbo-confirm`
 * and forms decorated with `data-turbo-confirm`.
 *
 * The default is the browser's built in confirm. The method should return
 * (or resolve with) `true` if the visit or submission can proceed.
 *
 * @param confirmMethod
 * @deprecated Use `Turbo.config.forms.confirm = confirmMethod` instead.
 */
export function setConfirmMethod(
    confirmMethod: (
        message: string,
        element: HTMLFormElement,
        submitter: HTMLElement | null,
    ) => boolean | Promise<boolean>,
): void;

/**
 * Options for morphing elements.
 */
export interface MorphOptions {
    callbacks?: {
        beforeNodeMorphed?: (currentElement: Element, newElement: Element) => boolean;
    };
    morphStyle?: "innerHTML" | "outerHTML";
}

/**
 * Morph the state of the currentElement based on the attributes and contents of
 * the newElement. Morphing may dispatch turbo:before-morph-element,
 * turbo:before-morph-attribute, and turbo:morph-element events.
 *
 * @param currentElement Element destination of morphing changes
 * @param newElement Element source of morphing changes
 * @param options Optional morphing options
 */
export function morphElements(currentElement: Element, newElement: Element | ChildNode[], options?: MorphOptions): void;

/**
 * Morph the child elements of the currentElement based on the child elements of
 * the newElement. Morphing children may dispatch turbo:before-morph-element,
 * turbo:before-morph-attribute, and turbo:morph-element events.
 *
 * @param currentElement Element destination of morphing children changes
 * @param newElement Element source of morphing children changes
 * @param options Optional morphing options
 */
export function morphChildren(currentElement: Element, newElement: Element, options?: MorphOptions): void;

/**
 * Morph the state of the currentBody based on the attributes and contents of
 * the newBody. Morphing body elements may dispatch turbo:morph,
 * turbo:before-morph-element, turbo:before-morph-attribute, and
 * turbo:morph-element events.
 *
 * @param currentBody HTMLBodyElement destination of morphing changes
 * @param newBody HTMLBodyElement source of morphing changes
 */
export function morphBodyElements(currentBody: HTMLBodyElement, newBody: HTMLBodyElement): void;

/**
 * Morph the child elements of the currentFrame based on the child elements of
 * the newFrame. Morphing turbo-frame elements may dispatch turbo:before-frame-morph,
 * turbo:before-morph-element, turbo:before-morph-attribute, and
 * turbo:morph-element events.
 *
 * @param currentFrame FrameElement destination of morphing children changes
 * @param newFrame FrameElement source of morphing children changes
 */
export function morphTurboFrameElements(currentFrame: FrameElement, newFrame: FrameElement): void;

/** The Turbo session navigator */
export const navigator: Navigator;

/** The Turbo page cache */
export const cache: Cache;

/** The Turbo configuration object */
export const config: TurboConfig;

/** The Turbo session */
export const session: TurboSession;

export interface TurboGlobal {
    /**
     * Sets the delay after which the {@link https://turbo.hotwired.dev/handbook/drive#displaying-progress progress bar} will appear during navigation, in milliseconds.
     * The progress bar appears after 500ms by default.
     *
     * Note that this method has no effect when used with the iOS or Android adapters.
     *
     * @param delayInMilliseconds
     * @deprecated Use `Turbo.config.drive.progressBarDelay = delayInMilliseconds` instead.
     */
    setProgressBarDelay(delayInMilliseconds: number): void;

    /**
     * Sets the method that is called by links decorated with {@link https://turbo.hotwired.dev/handbook/drive#requiring-confirmation-for-a-visit data-turbo-confirm}.
     **
     * The default is the browser's built in confirm.
     *
     * The method should return (or resolve with) true if the visit can proceed.
     *
     * @param confirmMethod
     * @deprecated Use `Turbo.config.forms.confirm = confirmMethod` instead.
     */
    setConfirmMethod(
        confirmMethod: (
            message: string,
            element: HTMLFormElement,
            submitter: HTMLElement | null,
        ) => boolean | Promise<boolean>,
    ): void;

    /**
     * Sets the form mode for Turbo Drive.
     *
     * @param mode Form handling mode
     * @deprecated Use `Turbo.config.forms.mode = mode` instead.
     */
    setFormMode(mode: "on" | "off" | "optin"): void;

    /**
     * Registers an adapter for the main session.
     *
     * @param adapter Adapter to register
     */
    registerAdapter(adapter: Adapter): void;

    visit(location: string | URL, options?: VisitOptions): void;

    /**
     * Starts the main Turbo session.
     * This initializes observers to monitor link interactions.
     */
    start(): void;

    connectStreamSource(source: StreamSource): void;
    disconnectStreamSource(source: StreamSource): void;
    renderStreamMessage(message: StreamMessage | string): void;

    morphElements(currentElement: Element, newElement: Element | ChildNode[], options?: MorphOptions): void;
    morphChildren(currentElement: Element, newElement: Element, options?: MorphOptions): void;
    morphBodyElements(currentBody: HTMLBodyElement, newBody: HTMLBodyElement): void;
    morphTurboFrameElements(currentFrame: FrameElement, newFrame: FrameElement): void;

    session: TurboSession;
    navigator: Navigator;
    cache: Cache;
    config: TurboConfig;
    StreamActions: TurboStreamActions;
}

declare global {
    const Turbo: TurboGlobal;
}

export type Render = (currentElement: StreamElement) => Promise<void>;
export type TimingData = unknown;
export type VisitFallback = (location: string | Response, options?: VisitOptions) => Promise<void>;

export type TurboBeforeCacheEvent = CustomEvent;
export type TurboBeforePrefetchEvent = CustomEvent;
export type TurboBeforeRenderEvent = CustomEvent<{
    newBody: HTMLBodyElement;
    renderMethod: "replace" | "morph";
    resume: (value?: unknown) => void;
    render: (currentBody: HTMLBodyElement, newBody: HTMLBodyElement) => void;
}>;
export type TurboBeforeVisitEvent = CustomEvent<{ url: string }>;
export type TurboClickEvent = CustomEvent<{
    url: string;
    originalEvent: MouseEvent;
}>;
export type TurboFrameLoadEvent = CustomEvent;
export type TurboBeforeFrameRenderEvent = CustomEvent<{
    newFrame: FrameElement;
    renderMethod: "replace" | "morph";
    resume: (value?: unknown) => void;
    render: (currentFrame: FrameElement, newFrame: FrameElement) => void;
}>;
export type TurboFrameRenderEvent = CustomEvent<{
    fetchResponse: FetchResponse;
}>;
export type TurboLoadEvent = CustomEvent<{ url: string; timing: TimingData }>;
export type TurboRenderEvent = CustomEvent<{ renderMethod: "replace" | "morph" }>;
export type TurboReloadEvent = CustomEvent<{
    reason: string;
    context?: { statusCode: number };
}>;
export type TurboVisitEvent = CustomEvent<{ url: string; action: Action }>;

export type TurboBeforeStreamRenderEvent = CustomEvent<{
    newStream: StreamElement;
    render: Render;
}>;

export type TurboMorphEvent = CustomEvent<{
    currentElement: Element;
    newElement: Element;
}>;

export type TurboBeforeMorphElementEvent = CustomEvent<{
    currentElement: Element;
    newElement: Element;
}>;

export type TurboMorphElementEvent = CustomEvent<{
    currentElement: Element;
    newElement: Element;
}>;

export type TurboBeforeMorphAttributeEvent = CustomEvent<{
    attributeName: string;
    mutationType: "update" | "remove";
}>;

export type TurboBeforeFrameMorphEvent = CustomEvent<{
    currentElement: FrameElement;
    newElement: FrameElement;
}>;

export interface FormSubmission {
    action: string;
    body: FormData | URLSearchParams;
    enctype: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    fetchRequest: FetchRequest;
    formElement: HTMLFormElement;
    isSafe: boolean;
    location: URL;
    /**
     * Reads back the HTTP method verb in UPPERCASE (e.g. "GET"); assignments
     * accept Turbo's lowercase method names.
     */
    get method(): Uppercase<RequestMethod>;
    set method(value: RequestMethod);
    stop(): void;
    submitter?: HTMLButtonElement | HTMLInputElement;
}
export type FormSubmissionResult =
    & { formSubmission: FormSubmission }
    & (
        | { success: true; error: undefined; fetchResponse: FetchResponse }
        | { success: false; error?: Error; fetchResponse?: FetchResponse }
    );

export type TurboSubmitStartEvent = CustomEvent<{
    formSubmission: FormSubmission;
}>;
export type TurboSubmitEndEvent = CustomEvent<FormSubmissionResult>;

export type TurboFrameMissingEvent = CustomEvent<{
    response: Response;
    visit: VisitFallback;
}>;

export type TurboBeforeFetchRequestEvent = CustomEvent<{
    fetchOptions: Omit<RequestInit, "headers"> & { headers: FetchRequestHeaders };
    url: URL;
    resume: (value?: unknown) => void;
}>;

export type TurboBeforeFetchResponseEvent = CustomEvent<{
    fetchResponse: FetchResponse;
}>;

export type TurboFetchRequestErrorEvent = CustomEvent<{
    request: FetchRequest;
    error: Error;
}>;

export interface TurboElementTagNameMap {
    "turbo-frame": FrameElement;
    "turbo-stream": StreamElement;
    "turbo-stream-source": StreamSourceElement;
}

export interface TurboElementEventMap {
    "turbo:before-frame-render": TurboBeforeFrameRenderEvent;
    "turbo:before-fetch-request": TurboBeforeFetchRequestEvent;
    "turbo:before-fetch-response": TurboBeforeFetchResponseEvent;
    "turbo:fetch-request-error": TurboFetchRequestErrorEvent;
    "turbo:frame-load": TurboFrameLoadEvent;
    "turbo:frame-render": TurboFrameRenderEvent;
    "turbo:frame-missing": TurboFrameMissingEvent;
    "turbo:submit-start": TurboSubmitStartEvent;
    "turbo:submit-end": TurboSubmitEndEvent;
}

export interface TurboGlobalEventHandlersEventMap extends TurboElementEventMap {
    "turbo:before-cache": TurboBeforeCacheEvent;
    "turbo:before-prefetch": TurboBeforePrefetchEvent;
    "turbo:before-stream-render": TurboBeforeStreamRenderEvent;
    "turbo:before-render": TurboBeforeRenderEvent;
    "turbo:before-visit": TurboBeforeVisitEvent;
    "turbo:click": TurboClickEvent;
    "turbo:load": TurboLoadEvent;
    "turbo:render": TurboRenderEvent;
    "turbo:reload": TurboReloadEvent;
    "turbo:visit": TurboVisitEvent;
    "turbo:morph": TurboMorphEvent;
    "turbo:before-morph-element": TurboBeforeMorphElementEvent;
    "turbo:morph-element": TurboMorphElementEvent;
    "turbo:before-morph-attribute": TurboBeforeMorphAttributeEvent;
    "turbo:before-frame-morph": TurboBeforeFrameMorphEvent;
}

declare global {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface HTMLElementTagNameMap extends TurboElementTagNameMap {}
    interface ElementEventMap extends TurboElementEventMap {}
    interface GlobalEventHandlersEventMap extends TurboGlobalEventHandlersEventMap {}
    /* eslint-enable @typescript-eslint/no-empty-interface */
}
