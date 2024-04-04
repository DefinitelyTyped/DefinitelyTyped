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

export class FetchRequest {}
export class FetchResponse {}

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

export function visit(
    location: string,
    options?: { action?: "advance" | "replace"; frame?: string },
): void;

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

    visit(
        location: string,
        options?: { action?: "advance" | "replace"; frame?: string },
    ): void;

    session: TurboSession;
}

declare global {
    const Turbo: TurboGlobal;
}
