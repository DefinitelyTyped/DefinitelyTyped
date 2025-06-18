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
    connectedCallback(): Promise<void>;
    render(): Promise<void>;
    disconnect(): void;
    removeDuplicateTargetChildren(): void;

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

export interface TurboGlobal {
    /**
     * Sets the delay after which the {@link https://turbo.hotwired.dev/handbook/drive#displaying-progress progress bar} will appear during navigation, in milliseconds.
     * The progress bar appears after 500ms by default.
     *
     * Note that this method has no effect when used with the iOS or Android adapters.
     *
     * @param delayInMilliseconds
     */
    setProgressBarDelay(delayInMilliseconds: number): void;

    /**
     * Sets the method that is called by links decorated with {@link https://turbo.hotwired.dev/handbook/drive#requiring-confirmation-for-a-visit data-turbo-confirm}.
     **
     * The default is the browser’s built in confirm.
     *
     * The method should return true if the visit can proceed.
     *
     * @param confirmMethod
     */
    setConfirmMethod(confirmMethod: () => boolean): void;

    visit(location: string, options?: { action?: Action; frame?: string }): void;

    session: TurboSession;
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
}

declare global {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface HTMLElementTagNameMap extends TurboElementTagNameMap {}
    interface ElementEventMap extends TurboElementEventMap {}
    interface GlobalEventHandlersEventMap extends TurboGlobalEventHandlersEventMap {}
    /* eslint-enable @typescript-eslint/no-empty-interface */
}
