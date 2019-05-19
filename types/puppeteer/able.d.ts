import { ElementHandle, JSHandle } from "./JSHandle";
import { ClickOptions } from "./Input";
import { Target } from "./Target";
import { ExecutionContext } from "./ExecutionContext";
import { Response } from "./NetworkManager";

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

/**
 * implemented in TimeoutSettings.js
 */
export interface TimeoutSettings {
    setDefaultTimeout(timeout: number): void;
    setDefaultNavigationTimeout(timeout: number): void;
    navigationTimeout(): number;
    timeout(): number;
}

/** Wraps a DOM element into an ElementHandle instance */
export type WrapElementHandle<X> = X extends Element ? ElementHandle<X> : X;

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

/** Options for `addStyleTag` */
export interface StyleTagOptions {
    /** Url of the <link> tag. */
    url?: string;
    /** Path to the CSS file to be injected into frame. If `path` is a relative path, then it is resolved relative to current working directory. */
    path?: string;
    /** Raw CSS content to be injected into frame. */
    content?: string;
}

export type LoadEvent =
    | "load"
    | "domcontentloaded"
    | "networkidle0"
    | "networkidle2";

/** The navigation options. */
export interface NavigationOptions extends Timeoutable {
    /**
     * When to consider navigation succeeded.
     * @default load Navigation is consider when the `load` event is fired.
     */
    waitUntil?: LoadEvent | LoadEvent[];
}

/**
 * Implemented by `DOMWorld`, `Frame`, `Page`
 * Defines `addScriptTag`, `addStyleTag`, `click`, `content`, `select`, `setContent`, `tap`, `title`, `type`
 */
export interface Contentable {
    /** Adds a `<script>` tag into the page with the desired url or content. */
    addScriptTag(options: ScriptTagOptions): Promise<void>;

    /** Adds a `<link rel="stylesheet">` tag into the page with the desired url or a `<style type="text/css">` tag with the content. */
    addStyleTag(options: StyleTagOptions): Promise<void>;

    /**
     * This method fetches an element with selector, scrolls it into view if needed, and
     * then uses `page.mouse` to click in the center of the element. If there's no element
     * matching selector, the method throws an error.
     * @param selector A selector to search for element to click. If there are multiple elements satisfying the selector, the first will be clicked.
     * @param options Specifies the click options.
     */
    click(selector: string, options?: ClickOptions): Promise<void>;

    /** Gets the full HTML contents of the page, including the doctype. */
    content(): Promise<string>;

    /**
     * Triggers a `change` and `input` event once all the provided options have been selected.
     * If there's no `<select>` element matching selector, the method throws an error.
     * @param selector A selector to query page for.
     * @param values Values of options to select. If the `<select>` has the `multiple` attribute,
     * all values are considered, otherwise only the first one is taken into account.
     */
    select(selector: string, ...values: string[]): Promise<string[]>;

    /**
     * Sets the page content.
     * @param html HTML markup to assign to the page.
     * @param options The navigation parameters.
     */
    setContent(html: string, options?: NavigationOptions): Promise<void>;

    /**
     * This method fetches an element with `selector`, scrolls it into view if needed,
     * and then uses page.touchscreen to tap in the center of the element.
     * @param selector A `selector` to search for element to tap. If there are multiple elements
     * satisfying the selector, the first will be tapped.
     */
    tap(selector: string): Promise<void>;

    /**
     * Returns the page's title.
     */
    title(): Promise<string>;

    /**
     * Sends a `keydown`, `keypress/input`, and `keyup` event for each character in the text.
     * @param selector A selector of an element to type into. If there are multiple elements satisfying the selector, the first will be used.
     * @param text: A text to type into a focused element.
     * @param options: The typing parameters.
     */
    type(selector: string, text: string, options?: { delay: number }): Promise<void>;
}

/**
 * Implemented by `DOMWorld`, `Frame`, `JSHandle`, `ElementHandle`, `Page`.
 * Defines `$eval`, `$$eval` `$`, `$$`, `$x`
 */
export interface Evalable {
    /**
     * The method runs querySelector.
     * If there's no such element within the frame, the method will resolve to null.
     * @param selector A selector to query element for
     * @since 0.13.0
     */
    $(selector: string): Promise<ElementHandle | null>;
    /**
     * The method runs element.querySelectorAll within the page / frame.
     * If no elements match the selector, the return value resolve to [].
     * @param selector A selector to query element for
     * @since 0.13.0
     */
    $$(selector: string): Promise<ElementHandle[]>;

    /**
     * The method evaluates the XPath expression.
     * @param expression XPath expression to evaluate.
     */
    $x(expression: string): Promise<ElementHandle[]>;

    /**
     * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
     * If there's no element matching `selector`, the method throws an error.
     *
     * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @returns Promise which resolves to the return value of pageFunction
     */
    $eval<R>(
        selector: string,
        pageFunction: (element: Element) => R | Promise<R>,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
     * If there's no element matching `selector`, the method throws an error.
     *
     * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $eval<R, X1>(
        selector: string,
        pageFunction: (element: Element, x1: UnwrapElementHandle<X1>) => R | Promise<R>,
        x1: X1,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
     * If there's no element matching `selector`, the method throws an error.
     *
     * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @param x2 Second argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $eval<R, X1, X2>(
        selector: string,
        pageFunction: (element: Element, x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>) => R | Promise<R>,
        x1: X1,
        x2: X2,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
     * If there's no element matching `selector`, the method throws an error.
     *
     * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @param x2 Second argument to pass to pageFunction
     * @param x3 Third argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $eval<R, X1, X2, X3>(
        selector: string,
        pageFunction: (element: Element, x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>, x3: UnwrapElementHandle<X3>) => R | Promise<R>,
        x1: X1,
        x2: X2,
        x3: X3,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `document.querySelector` within the context and passes it as the first argument to `pageFunction`.
     * If there's no element matching `selector`, the method throws an error.
     *
     * If `pageFunction` returns a Promise, then `$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param args Arguments to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $eval<R>(
        selector: string,
        pageFunction: (element: Element, ...args: any[]) => R | Promise<R>,
        ...args: SerializableOrJSHandle[]
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
     * first argument to `pageFunction`.
     *
     * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @returns Promise which resolves to the return value of pageFunction
     */
    $$eval<R>(
        selector: string,
        pageFunction: (elements: Element[], ...args: any[]) => R | Promise<R>,
        ...args: SerializableOrJSHandle[]
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
     * first argument to `pageFunction`.
     *
     * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $$eval<R, X1>(
        selector: string,
        pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>) => R | Promise<R>,
        x1: X1,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
     * first argument to `pageFunction`.
     *
     * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @param x2 Second argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $$eval<R, X1, X2>(
        selector: string,
        pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>) => R | Promise<R>,
        x1: X1,
        x2: X2,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
     * first argument to `pageFunction`.
     *
     * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param x1 First argument to pass to pageFunction
     * @param x2 Second argument to pass to pageFunction
     * @param x3 Third argument to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $$eval<R, X1, X2, X3>(
        selector: string,
        pageFunction: (elements: Element[], x1: UnwrapElementHandle<X1>, x2: UnwrapElementHandle<X2>, x3: UnwrapElementHandle<X3>) => R | Promise<R>,
        x1: X1,
        x2: X2,
        x3: X3,
    ): Promise<WrapElementHandle<R>>;

    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within the context and passes it as the
     * first argument to `pageFunction`.
     *
     * If `pageFunction` returns a Promise, then `$$eval` would wait for the promise to resolve and return its value.
     *
     * @param selector A selector to query for
     * @param pageFunction Function to be evaluated in browser context
     * @param args Arguments to pass to pageFunction
     * @returns Promise which resolves to the return value of pageFunction
     */
    $$eval<R>(
        selector: string,
        pageFunction: (elements: Element[], ...args: any[]) => R | Promise<R>,
        ...args: SerializableOrJSHandle[]
    ): Promise<WrapElementHandle<R>>;
}

export type EvaluateFnReturnType<T extends EvaluateFn> = T extends ((...args: any[]) => infer R) ? R : any;

/**
 * Implemented by `DOMWorld`, `ExecutionContext`, `Frame`, `Page`, `Worker`
 * Defines `evaluate`, `evaluateHandle`
 */
export interface Evaluateable {
    /**
     * If the function passed to the `evaluate` returns a Promise,
     * then `evaluate` would wait for the promise to resolve and return its value.
     *
     * If the function passed to the `evaluate` returns a non-Serializable value,
     * then `evaluate` resolves to `undefined`.
     *
     * If `pageFunction` is a string args is ignore
     *
     * @param pageFunction Function to be evaluated in browser context
     * @param args Arguments to pass to `pageFunction`
     */
    evaluate<T extends EvaluateFn>(
        pageFunction: T,
        ...args: SerializableOrJSHandle[]
    ): Promise<EvaluateFnReturnType<T>>;

    /**
     * The only difference between `evaluate` and `evaluateHandle` is
     * that `evaluateHandle` returns in-page object (JSHandle).
     * Evaluates a function in the page context.
     * If the function, passed to the `evaluateHandle`, returns a Promise, then `evaluateHandle`
     * would wait for the promise to resolve and return its value.
     *
     * If `pageFunction` is a string args is ignore
     * @param pageFunction The function to be evaluated in the page context.
     * @param args The arguments to pass to the `pageFunction`.
     * @returns A promise which resolves to return value of `pageFunction`.
     */
    evaluateHandle(
        pageFunction: EvaluateFn,
        ...args: SerializableOrJSHandle[]
    ): Promise<JSHandle>;
}

/**
 * Implemented by `DOMWorld`, `Frame`, `Worker`
 * Defines `executionContext`
 */
export interface ExecutionContextable {
    executionContext(): Promise<ExecutionContext>;
}

/**
 * Implemented by `DOMWorld`, `Frame`, `JSHandle`
 * Defines `focus`, `hover`
 */
export interface FocusHoverable {
    /** This method fetches an element with selector and focuses it. */
    focus(selector: string): Promise<void>;
    /**
     * This method fetches an element with `selector`, scrolls it into view if needed,
     * and then uses page.mouse to hover over the center of the element. If there's no
     * element matching `selector`, the method throws an error.
     * @param selector A selector to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.
     */
    hover(selector: string): Promise<void>;
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

/**
 * implemented by `Frame` and `Page`
 * Defines `goto`, `url`, `waitFor`, `waitForNavigation`
 */
export interface FrameBase extends WaitForable {
    /**
     * Navigates to a URL.
     * @param url URL to navigate page to. The url should include scheme, e.g. `https://`
     * @param options The navigation parameters.
     */
    goto(url: string, options?: DirectNavigationOptions): Promise<Response | null>;

    /** Returns frame's url. */
    url(): string;

    /**
     * Waits for a certain amount of time before resolving.
     * @param duration The time to wait for.
     */
    waitFor(duration: number): Promise<void>;
    /**
     * Shortcut for waitForSelector and waitForXPath
     */
    waitFor(selector: string, options: WaitForSelectorOptionsHidden): Promise<ElementHandle | null>;
    waitFor(selector: string, options?: WaitForSelectorOptions): Promise<ElementHandle>;

    /**
     * Shortcut for waitForFunction.
     */
    waitFor(
        selector: EvaluateFn,
        options?: WaitForSelectorOptions,
        ...args: SerializableOrJSHandle[]
    ): Promise<JSHandle>;

    /**
     * Wait for the page navigation occur.
     * @param options The navigation parameters.
     */
    waitForNavigation(options?: NavigationOptions): Promise<Response>;
}

export interface PageFnOptions extends Timeoutable {
    polling?: "raf" | "mutation" | number;
}

/**
 * implemented by `DOMWorld`, `Frame` and `Page`
 * Defines `waitForFunction`, `waitForSelector`, `waitForXPath`
 */
export interface WaitForable {
    /**
     * Allows waiting for various conditions.
     */
    waitForFunction(
        fn: EvaluateFn,
        options?: PageFnOptions,
        ...args: SerializableOrJSHandle[]
    ): Promise<JSHandle>;

    waitForSelector(
        selector: string,
        options?: WaitForSelectorOptions,
    ): Promise<ElementHandle>;

    waitForSelector(
        selector: string,
        options?: WaitForSelectorOptionsHidden,
    ): Promise<ElementHandle | null>;

    waitForXPath(
        xpath: string,
        options?: WaitForSelectorOptions,
    ): Promise<ElementHandle>;
}

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

/**
 * Implemented by `Browser`, `BrowserContext`
 * Defines `TargetAwaiter`
 */
export interface TargetAwaiter {
    waitForTarget(predicate: (target: Target) => boolean, options?: Timeoutable): Promise<Target>;
}

export interface WaitForSelectorOptions extends Timeoutable {
    /**
     * Wait for element to be present in DOM and to be visible,
     * i.e. to not have display: none or visibility: hidden CSS properties.
     * @default false
     */
    visible?: boolean;
    /**
     * Wait for element to not be found in the DOM or to be hidden,
     * i.e. have display: none or visibility: hidden CSS properties.
     * @default false
     */
    hidden?: boolean;
}

export interface WaitForSelectorOptionsHidden extends WaitForSelectorOptions {
    hidden: true;
}
