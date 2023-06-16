/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

export { Page } from './page';
export { Touchscreen } from './touchscreen';
export { Request } from './request';
export { Response } from './response';
export { Locator } from './locator';
export { JSHandle } from './js_handle';
export { Keyboard } from './keyboard';
export { ElementHandle } from './element_handle';
export { Frame } from './frame';
export { Worker } from './worker';

/**
 * `BrowserContexts` provide a way to operate multiple independent sessions, with
 * separate pages, cache, and cookies.
 */
export class BrowserContext {}

/**
 * Represents event-specific properties. Refer to the events documentation for
 * the lists of initial properties:
 * - [DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent)
 * - [FocusEvent](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent)
 * - [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
 * - [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)
 * - [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent)
 * - [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent)
 * - [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
 */
export type EvaluationArgument = object;

export type PageFunction<Arg, R> = string | ((arg: Unboxed<Arg>) => R);

export type Unboxed<Arg> = Arg extends [infer A0, infer A1]
    ? [Unboxed<A0>, Unboxed<A1>]
    : Arg extends [infer A0, infer A1, infer A2]
    ? [Unboxed<A0>, Unboxed<A1>, Unboxed<A2>]
    : Arg extends [infer A0, infer A1, infer A2, infer A3]
    ? [Unboxed<A0>, Unboxed<A1>, Unboxed<A2>, Unboxed<A3>]
    : Arg extends Array<infer T>
    ? Array<Unboxed<T>>
    : Arg extends object
    ? { [Key in keyof Arg]: Unboxed<Arg[Key]> }
    : Arg;

export interface SelectOptionsObject {
    /**
     * Matches by `option.value`.
     */
    value?: string;

    /**
     * Matches by `option.label`.
     */
    label?: string;

    /**
     * Matches by the index.
     */
    index?: number;
}

export type ResourceType =
    | 'document'
    | 'stylesheet'
    | 'image'
    | 'media'
    | 'font'
    | 'script'
    | 'texttrack'
    | 'xhr'
    | 'fetch'
    | 'eventsource'
    | 'websocket'
    | 'manifest'
    | 'other';
export type MouseButton = 'left' | 'right' | 'middle';
export type KeyboardModifier = 'Alt' | 'Control' | 'Meta' | 'Shift';
export type ElementState = 'attached' | 'detached' | 'visible' | 'hidden';
export type InputElementState = ElementState | 'enabled' | 'disabled' | 'editable';
export type LifecycleEvent = 'load' | 'domcontentloaded' | 'networkidle';

export interface TimeoutOptions {
    /**
     * Maximum time in milliseconds. Pass 0 to disable the timeout. Default is overridden by the setDefaultTimeout option on `BrowserContext` or `Page`.
     * Defaults to 30000.
     */
    timeout?: number;
}

export interface StrictnessOptions {
    /**
     * When `true`, the call requires selector to resolve to a single element.
     * If given selector resolves to more than one element, the call throws
     * an exception. Defaults to `false`.
     */
    strict?: boolean;
}

export interface EventSequenceOptions {
    /**
     * Delay between events in milliseconds. Defaults to 0.
     */
    delay?: number;
}

export type ElementHandleOptions = {
    /**
     * Setting this to `true` will bypass the actionability checks (visible,
     * stable, enabled). Defaults to `false`.
     */
    force?: boolean;

    /**
     * If set to `true` and a navigation occurs from performing this action, it will not wait for it to complete.
     * Defaults to `false`.
     */
    noWaitAfter?: boolean;
} & TimeoutOptions;

export type ElementHandlePointerOptions = ElementHandleOptions & {
    /**
     * Setting this to `true` will perform the actionability checks without
     * performing the action. Useful to wait until the element is ready for the
     * action without performing it. Defaults to `false`.
     */
    trial?: boolean;
};

export type ElementClickOptions = ElementHandlePointerOptions & {
    /**
     * A point to use relative to the top left corner of the element. If not supplied,
     * a visible point of the element is used.
     */
    position?: { x: number; y: number };
};

export interface KeyboardModifierOptions {
    /**
     * `Alt`, `Control`, `Meta` or `Shift` modifiers keys pressed during the action.
     * If not specified, currently pressed modifiers are used.
     */
    modifiers?: KeyboardModifier[];
}

export type KeyboardPressOptions = {
    /**
     * If set to `true` and a navigation occurs from performing this action, it
     * will not wait for it to complete. Defaults to `false`.
     */
    noWaitAfter?: boolean;
} & EventSequenceOptions &
    TimeoutOptions;

export type MouseMoveOptions = ElementClickOptions & KeyboardModifierOptions;

export type MouseClickOptions = {
    /**
     * The mouse button to use during the action.
     * Defaults to `left`.
     */
    button?: MouseButton;
} & EventSequenceOptions;

export type MouseMultiClickOptions = MouseClickOptions & {
    /**
     * The number of times the action is performed.
     * Defaults to 1.
     */
    clickCount?: number;
};

export interface MouseDownUpOptions {
    /**
     * The mouse button to use during the action.
     * Defaults to `left`.
     */
    button?: MouseButton;

    /**
     * Defaults to 1.
     */
    clickCount?: number;
}

export type ContentLoadOptions = {
    /**
     * When to consider operation succeeded, defaults to `load`. Events can be
     * either:
     * - `'domcontentloaded'` - consider operation to be finished when the
     * `DOMContentLoaded` event is fired.
     * - `'load'` - consider operation to be finished when the `load` event is
     * fired.
     * - `'networkidle'` - **DISCOURAGED** consider operation to be finished
     * when there are no network connections for at least `500` ms. Don't use
     * this method for testing especially with chatty websites where the event
     * may never fire, rely on web assertions to assess readiness instead.
     */
    waitUntil?: LifecycleEvent;
} & TimeoutOptions;

export type NavigationOptions = {
    /**
     * Referer header value.
     */
    referer?: string;
} & ContentLoadOptions;

export interface ResourceTiming {
    /**
     * Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC
     */
    startTime: number;

    /**
     * Time immediately before the browser starts the domain name lookup for the resource.
     * The value is given in milliseconds relative to `startTime`, -1 if not available.
     */
    domainLookupStart: number;

    /**
     * Time immediately after the browser ends the domain name lookup for the resource.
     * The value is given in milliseconds relative to `startTime`, -1 if not available.
     */
    domainLookupEnd: number;

    /**
     * Time immediately before the user agent starts establishing the connection to the server
     * to retrieve the resource. The value is given in milliseconds relative to `startTime`,
     * -1 if not available.
     */
    connectStart: number;

    /**
     * Time immediately before the browser starts the handshake process to secure the current
     * connection. The value is given in milliseconds relative to `startTime`, -1 if not available.
     */
    secureConnectionStart: number;

    /**
     * Time immediately after the user agent establishes the connection to the server
     * to retrieve the resource. The value is given in milliseconds relative to `startTime`,
     * -1 if not available.
     */
    connectEnd: number;

    /**
     * Time immediately before the browser starts requesting the resource from the server,
     * cache, or local resource. The value is given in milliseconds relative to `startTime`,
     * -1 if not available.
     */
    requestStart: number;

    /**
     * Time immediately after the browser receives the first byte of the response from the server,
     * cache, or local resource. The value is given in milliseconds relative to `startTime`,
     * -1 if not available.
     */
    responseStart: number;

    /**
     * Time immediately after the browser receives the last byte of the resource or immediately
     * before the transport connection is closed, whichever comes first. The value is given
     * in milliseconds relative to `startTime`, -1 if not available.
     */
    responseEnd: number;
}

export interface SecurityDetailsObject {
    /**
     * Common Name component of the Issuer field. The value is extracted from the
     * certificate. This should only be used for informational purposes.
     */
    issuer?: string;

    /**
     * The specific TLS protocol used. For example `TLS 1.3`.
     */
    protocol?: string;

    /**
     * Common Name component of the Subject field. The value is extracted from the
     * certificate. This should only be used for informational purposes.
     */
    subjectName?: string;

    /**
     * Unix timestamp (in seconds) specifying the exact date/time when this cert
     * becomes valid.
     */
    validFrom?: number;

    /**
     * Unix timestamp (in seconds) specifying the exact date/time when this cert
     * becomes invalid.
     */
    validTo?: number;

    /**
     * String with hex encoded SHA256 fingerprint of the certificate. The value is
     * extracted from the certificate.
     */
    sanList?: string[];
}

export interface Rect {
    /**
     * The x coordinate of the element in pixels.
     * (0, 0) is the top left corner of the viewport.
     */
    x: number;

    /**
     * The y coordinate of the element in pixels.
     * (0, 0) is the top left corner of the viewport.
     */
    y: number;

    /**
     * The width of the element in pixels.
     */
    width: number;

    /**
     * The height of the element in pixels.
     */
    height: number;
}

export type ImageFormat = 'jpeg' | 'png';

export interface ScreenshotOptions {
    /**
     * The file path to save the image to. The screenshot type will be inferred from file extension.
     */
    path?: string;

    /**
     * The screenshot format.
     * @default 'png'
     */
    type?: ImageFormat;

    /**
     * Hide default white background and allow capturing screenshots with transparency.
     * Not applicable to `jpeg` images.
     * @default false
     */
    omitBackground?: boolean;

    /**
     * The quality of the image, between 0-100. Not applicable to `png` images.
     * @default 100
     */
    quality?: number;
}

/**
 * Methods to periodically check for a value.
 * - `raf` - use `requestAnimationFrame` callback to poll
 * - `mutation` - use a mutation observer
 * - `interval` - use a polling interval
 */
export type PollingMethod = 'raf' | 'mutation' | 'interval';

export interface PollingOptions {
    /**
     * Polling method to use.
     * @default 'raf'
     */
    polling?: 'raf' | 'mutation' | 'interval';

    /**
     * Polling interval in milliseconds if `polling` is set to `interval`.
     */
    interval?: number;
}

export interface ElementStateFilter {
    /**
     * The element state to filter for.
     * @default 'visible'
     */
    state?: ElementState;
}
