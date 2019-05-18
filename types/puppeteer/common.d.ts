import { JSHandle, ElementHandle } from "./JSHandle";
import { EventEmitter } from "events";

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
 * implemented in Connection.js
 */
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
