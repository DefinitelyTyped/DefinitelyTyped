import { JSHandle, ElementHandle } from "./JSHandle";
import { EventEmitter } from "events";

/** Wraps a DOM element into an ElementHandle instance */
export type WrapElementHandle<X> = X extends Element ? ElementHandle<X> : X;

/** Unwraps a DOM element out of an ElementHandle instance */
export type UnwrapElementHandle<X> = X extends ElementHandle<infer E> ? E : X;

export type Serializable =
    | number
    | string
    | boolean
    | null
    | JSONArray
    | JSONObject;
export interface JSONArray extends Array<Serializable> { }
export interface JSONObject {
    [key: string]: Serializable;
}
export type SerializableOrJSHandle = Serializable | JSHandle;
// WARN NOT used
export type PageEvents =
    | "close"
    | "console"
    | "dialog"
    | "error"
    | "frameattached"
    | "framedetached"
    | "framenavigated"
    | "load"
    | "pageerror"
    | "request"
    | "requestfailed"
    | "requestfinished"
    | "response"
    | "workercreated"
    | "workerdestroyed";

// WARN NOT used
export type BrowserEvents =
    | "disconnected"
    | "targetchanged"
    | "targetcreated"
    | "targetdestroyed";

export interface Viewport {
    /** The page width in pixels. */
    width: number;
    /** The page height in pixels. */
    height: number;
    /**
     * Specify device scale factor (can be thought of as dpr).
     * @default 1
     */
    deviceScaleFactor?: number;
    /**
     * Whether the `meta viewport` tag is taken into account.
     * @default false
     */
    isMobile?: boolean;
    /**
     * Specifies if viewport supports touch events.
     * @default false
     */
    hasTouch?: boolean;
    /**
     * Specifies if viewport is in landscape mode.
     * @default false
     */
    isLandscape?: boolean;
}

export type EvaluateFn = string | ((...args: any[]) => any);

export type LoadEvent =
    | "load"
    | "domcontentloaded"
    | "networkidle0"
    | "networkidle2";

/**
 * Implemented by `NavigationOptions`, `PageFnOptions`, `WaitForSelectorOptions`, `LaunchOptions`
 * Defines `timeout`
 */
export interface Timeoutable {
    /**
     * Maximum navigation time in milliseconds, pass 0 to disable timeout.
     * @default 30000
     */
    timeout?: number;
}

/** The navigation options. */
export interface NavigationOptions extends Timeoutable {
    /**
     * When to consider navigation succeeded.
     * @default load Navigation is consider when the `load` event is fired.
     */
    waitUntil?: LoadEvent | LoadEvent[];
}

/**
 * Navigation options for `page.goto`.
 */
export interface DirectNavigationOptions extends NavigationOptions {
    /**
     * Referer header value.
     * If provided it will take preference over the referer header value set by
     * [page.setExtraHTTPHeaders()](#pagesetextrahttpheadersheaders).
     */
    referer?: string;
}

/** Options for `addStyleTag` */
export interface StyleTagOptions {
    /** Url of the <link> tag. */
    url?: string;
    /** Path to the CSS file to be injected into frame. If `path` is a relative path, then it is resolved relative to current working directory. */
    path?: string;
    /** Raw CSS content to be injected into frame. */
    content?: string;
}
/** Options for `addScriptTag` */
export interface ScriptTagOptions {
    /** Url of a script to be added. */
    url?: string;
    /** Path to the JavaScript file to be injected into frame. If `path` is a relative path, then it is resolved relative to current working directory. */
    path?: string;
    /** Raw JavaScript content to be injected into frame. */
    content?: string;
    /** Script type. Use 'module' in order to load a Javascript ES6 module. */
    type?: string;
}

export interface PageFnOptions extends Timeoutable {
    polling?: "raf" | "mutation" | number;
}

export interface CDPSession extends EventEmitter {
    /**
     * Detaches session from target. Once detached, session won't emit any events and can't be used
     * to send messages.
     */
    detach(): Promise<void>;

    /**
     * @param method Protocol method name
     */
    send(method: string, params?: object): Promise<object>;
}

/**
 * implemented in TimeoutSettings.js
 */
export interface TimeoutSettings {
    setDefaultTimeout(timeout: number): void;
    setDefaultNavigationTimeout(timeout: number): void;
    navigationTimeout(): number;
    timeout(): number;
}
