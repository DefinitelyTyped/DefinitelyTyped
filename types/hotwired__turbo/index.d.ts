export class FrameElement extends HTMLElement {
    src: string;
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
     * The current action.
     */
    readonly action: string;

    /**
     * The current target (an element ID) to which the result will
     * be rendered.
     */
    readonly target: string;

    /**
     * The current "targets" selector (a CSS selector)
     */
    readonly targets: string;

    /**
     * Reads the request-id attribute
     */
    readonly requestId: string;

    /**
     * Gets the main `<template>` element used for rendering.
     */
    readonly templateElement: HTMLTemplateElement;

    /**
     * Gets a cloned copy of the template's content.
     */
    readonly templateContent: DocumentFragment;
}

export class StreamSourceElement extends HTMLElement {
    streamSource: WebSocket | EventSource | null;
    readonly src: string;
}

export class FetchRequest {
    body: FormData | URLSearchParams;
    enctype: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    fetchOptions: RequestInit;
    headers: Headers | { [k: string]: any };
    method: "get" | "post" | "put" | "patch" | "delete";
    params: URLSearchParams;
    target: HTMLFormElement | HTMLAnchorElement | FrameElement | null;
    url: URL;
}

export class FetchResponse {
    clientError: boolean;
    contentType: string;
    failed: boolean;
    header(key: string): string | undefined;
    isHTML: boolean;
    location: URL;
    redirected: boolean;
    responseHTML: Promise<string>;
    responseText: Promise<string>;
    response: Response;
    serverError: boolean;
    statusCode: number;
    succeeded: boolean;
}

/**
 * Interface for accessing the browser adapter.
 * The adapter handles form submission lifecycle events.
 */
export interface BrowserAdapter {
    formSubmissionStarted(formSubmission?: FormSubmission): void;
    formSubmissionFinished(formSubmission?: FormSubmission): void;
}

/**
 * Interface for the Turbo navigator.
 * Provides methods for programmatic navigation and form submission.
 */
export interface Navigator {
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
    /** Custom confirmation method. Replaces window.confirm. */
    confirm: (message: string, element: HTMLFormElement, submitter: HTMLElement | null) => Promise<boolean>;
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
export function connectStreamSource(source: unknown): void;

/**
 * Disconnects a stream source from the main session.
 *
 * @param source Stream source to disconnect
 */
export function disconnectStreamSource(source: unknown): void;

/**
 * Renders a stream message to the main session by appending it to the
 * current document.
 *
 * @param message Message to render
 */
export function renderStreamMessage(message: unknown): void;

export interface TurboSession {
    connectStreamSource(source: unknown): void;
    disconnectStreamSource(source: unknown): void;
    renderStreamMessage(message: unknown): void;
    drive: boolean;
    adapter: BrowserAdapter;
}

export const StreamActions: {
    [action: string]: (this: StreamElement) => void;
};

export type Action = "advance" | "replace" | "restore";
export interface VisitOptions {
    action?: Action;
    frame?: string;
}
export function visit(location: string, options?: VisitOptions): void;

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
export function registerAdapter(adapter: unknown): void;

/**
 * Sets the form mode for Turbo Drive.
 *
 * @param mode Form handling mode
 * @deprecated Use `Turbo.config.forms.mode = mode` instead.
 */
export function setFormMode(mode: "on" | "off" | "optin"): void;

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
     * The method should return true if the visit can proceed.
     *
     * @param confirmMethod
     * @deprecated Use `Turbo.config.forms.confirm = confirmMethod` instead.
     */
    setConfirmMethod(confirmMethod: () => boolean): void;

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
    registerAdapter(adapter: unknown): void;

    visit(location: string, options?: { action?: Action; frame?: string }): void;

    /**
     * Starts the main Turbo session.
     * This initializes observers to monitor link interactions.
     */
    start(): void;

    connectStreamSource(source: unknown): void;
    disconnectStreamSource(source: unknown): void;
    renderStreamMessage(message: unknown): void;

    morphElements(currentElement: Element, newElement: Element | ChildNode[], options?: MorphOptions): void;
    morphChildren(currentElement: Element, newElement: Element, options?: MorphOptions): void;
    morphBodyElements(currentBody: HTMLBodyElement, newBody: HTMLBodyElement): void;
    morphTurboFrameElements(currentFrame: FrameElement, newFrame: FrameElement): void;

    session: TurboSession;
    navigator: Navigator;
    cache: Cache;
    config: TurboConfig;
    StreamActions: {
        [action: string]: (this: StreamElement) => void;
    };
}

declare global {
    const Turbo: TurboGlobal;
}

export type Render = (currentElement: StreamElement) => Promise<void>;
export type TimingData = unknown;
export type VisitFallback = (location: string | Response, options: VisitOptions) => Promise<void>;

export type TurboBeforeCacheEvent = CustomEvent;
export type TurboBeforePrefetchEvent = CustomEvent;
export type TurboBeforeRenderEvent = CustomEvent<{
    newBody: HTMLBodyElement;
    renderMethod: "replace" | "morph";
    isPreview: boolean;
    resume: (value?: any) => void;
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
    resume: (value?: any) => void;
    render: (currentFrame: FrameElement, newFrame: FrameElement) => void;
}>;
export type TurboFrameRenderEvent = CustomEvent<{
    fetchResponse: FetchResponse;
}>;
export type TurboLoadEvent = CustomEvent<{ url: string; timing: TimingData }>;
export type TurboRenderEvent = CustomEvent;
export type TurboReloadEvent = CustomEvent;
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
    mutationType: "updated" | "removed";
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
    method: "get" | "post" | "put" | "patch" | "delete";
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
    fetchOptions: RequestInit;
    url: URL;
    resume: (value: any) => void;
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
