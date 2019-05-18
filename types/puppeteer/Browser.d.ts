import { EventEmitter } from "events";
import { Page } from "./Page";
import { ChildProcess } from "child_process";
import { Target } from "./Target";
import { TargetAwaiter } from "./able";

/**
 * Defines `ignoreHTTPSErrors`, `defaultViewport`, `slowMo`
 */
export interface BrowserOptions {
    /**
     * Whether to ignore HTTPS errors during navigation.
     * @default false
     */
    ignoreHTTPSErrors?: boolean;
    /**
     * Sets a consistent viewport for each page. Defaults to an 800x600 viewport. null disables the default viewport.
     */
    defaultViewport?: {
        /**
         * page width in pixels.
         */
        width?: number;
        /**
         * page height in pixels.
         */
        height?: number;
        /**
         * Specify device scale factor (can be thought of as dpr).
         * @default 1
         */
        deviceScaleFactor?: number;
        /**
         * Whether the meta viewport tag is taken into account.
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
    } | null;
    /**
     * Slows down Puppeteer operations by the specified amount of milliseconds.
     * Useful so that you can see what is going on.
     */
    slowMo?: number;
}

export interface ConnectionTransport {
    send(message: string): void;
    close(): void;
    onmessage?(message: string): void;
    onclose?(): void;
}

export type Permission =
    "geolocation" |
    "midi" |
    "midi-sysex" |
    "notifications" |
    "push" |
    "camera" |
    "microphone" |
    "background-sync" |
    "ambient-light-sensor" |
    "accelerometer" |
    "gyroscope" |
    "magnetometer" |
    "accessibility-events" |
    "clipboard-read" |
    "clipboard-write" |
    "payment-handler";

export interface ConnectOptions extends BrowserOptions {
    /**
     * A browser url to connect to, in format `http://${host}:${port}`.
     * Use interchangeably with browserWSEndpoint to let Puppeteer fetch it from metadata endpoint.
     */
    browserURL?: string;

    /** A browser websocket endpoint to connect to. */
    browserWSEndpoint?: string;

    /**
     * **Experimental** Specify a custom transport object for Puppeteer to use.
     */
    transport?: ConnectionTransport;
}

/** A Browser is created when Puppeteer connects to a Chromium instance, either through puppeteer.launch or puppeteer.connect. */
export interface Browser extends EventEmitter, TargetAwaiter {
    /**
     * Adds the listener function to the end of the listeners array for the event named `eventName`.
     * No checks are made to see if the listener has already been added. Multiple calls passing the same combination of
     * `eventName` and listener will result in the listener being added, and called, multiple times.
     * @param event The name of the event.
     * @param handler The callback function.
     */
    on<K extends keyof BrowserEventObj>(
        eventName: K,
        handler: (e: BrowserEventObj[K], ...args: any[]) => void
    ): this;

    /**
     * Adds a one time listener function for the event named `eventName`.
     * The next time `eventName` is triggered, this listener is removed and then invoked.
     * @param event The name of the event.
     * @param handler The callback function.
     */
    once<K extends keyof BrowserEventObj>(
        eventName: K,
        handler: (e: BrowserEventObj[K], ...args: any[]) => void
    ): this;

    /**
     * Returns an array of all open browser contexts.
     * In a newly created browser, this will return a single instance of BrowserContext.
     */
    browserContexts(): BrowserContext[];

    /**
     * Closes browser with all the pages (if any were opened).
     * The browser object itself is considered to be disposed and can not be used anymore.
     */
    close(): Promise<void>;

    /**
     * Creates a new incognito browser context.
     * This won't share cookies/cache with other browser contexts.
     */
    createIncognitoBrowserContext(): Promise<BrowserContext>;

    /**
     * Disconnects Puppeteer from the browser, but leaves the Chromium process running.
     * After calling `disconnect`, the browser object is considered disposed and cannot be used anymore.
     */
    disconnect(): void;

    /**
     * Returns the default browser context.
     * The default browser context can not be closed.
     */
    defaultBrowserContext(): BrowserContext;

    /** Promise which resolves to a new Page object. */
    newPage(): Promise<Page>;

    /** Promise which resolves to an array of all open pages. */
    pages(): Promise<Page[]>;

    /** Spawned browser process. Returns `null` if the browser instance was created with `puppeteer.connect` method */
    process(): ChildProcess;

    /** A target associated with the browser. */
    target(): Target;

    /** Promise which resolves to an array of all active targets. */
    targets(): Promise<Target[]>;

    /**
     * Promise which resolves to the browser's original user agent.
     * **NOTE** Pages can override browser user agent with `page.setUserAgent`.
     */
    userAgent(): Promise<string>;

    /** For headless Chromium, this is similar to HeadlessChrome/61.0.3153.0. For non-headless, this is similar to Chrome/61.0.3153.0. */
    version(): Promise<string>;

    /** Browser websocket endpoint which can be used as an argument to puppeteer.connect. The format is ws://${host}:${port}/devtools/browser/<id> */
    wsEndpoint(): string;

    /**
     * Indicates that the browser is connected.
     * @since 1.16.0
     */
    isConnected(): boolean;
}

export interface BrowserEventObj {
    /** Emitted when puppeteer gets disconnected from the browser instance. */
    disconnected: undefined;

    /** Emitted when the url of a target changes. */
    targetchanged: Target;

    /** Emitted when a target is created, for example when a new page is opened by `window.open` or `browser.newPage`. */
    targetcreated: Target;

    /** Emitted when a target is destroyed, for example when a page is closed. */
    targetdestroyed: Target;
}

/**
 * BrowserContexts provide a way to operate multiple independent browser sessions.
 * When a browser is launched, it has a single BrowserContext used by default.
 * The method `browser.newPage()` creates a page in the default browser context.
 */
export interface BrowserContext extends EventEmitter, TargetAwaiter {
    /**
     * Adds the listener function to the end of the listeners array for the event named `eventName`.
     * No checks are made to see if the listener has already been added. Multiple calls passing the same combination of
     * `eventName` and listener will result in the listener being added, and called, multiple times.
     * @param event The name of the event.
     * @param handler The callback function.
     */
    on<K extends keyof BrowserContextEventObj>(
        eventName: K,
        handler: (e: BrowserContextEventObj[K], ...args: any[]) => void
    ): this;

    /**
     * Adds a one time listener function for the event named `eventName`.
     * The next time `eventName` is triggered, this listener is removed and then invoked.
     * @param event The name of the event.
     * @param handler The callback function.
     */
    once<K extends keyof BrowserContextEventObj>(
        eventName: K,
        handler: (e: BrowserContextEventObj[K], ...args: any[]) => void
    ): this;

    /** The browser this browser context belongs to. */
    browser(): Browser;

    /**
     * Clears all permission overrides for the browser context.
     */
    clearPermissionOverrides(): Promise<void>;

    /** Closes the browser context. All the targets that belong to the browser context will be closed. */
    close(): Promise<void>;

    /**
     * Returns whether BrowserContext is incognito.
     * The default browser context is the only non-incognito browser context.
     */
    isIncognito(): boolean;

    /** Creates a new page in the browser context. */
    newPage(): Promise<Page>;

    /**
     *
     * @param origin The origin to grant permissions to, e.g. "https://example.com".
     * @param permissions An array of permissions to grant.
     * All permissions that are not listed here will be automatically denied.
     */
    overridePermissions(origin: string, permissions: Permission[]): Promise<void>;

    /** Promise which resolves to an array of all open pages. */
    pages(): Promise<Page[]>;

    /** An array of all active targets inside the browser context. */
    targets(): Target[];
}

export interface BrowserContextEventObj {
    /** Emitted when the url of a target inside the browser context changes. */
    targetchanged: Target;

    /** Emitted when a target is created, for example when a new page is opened by `window.open` or `browserContext.newPage`. */
    targetcreated: Target;

    /** Emitted when a target is destroyed, for example when a page is closed. */
    targetdestroyed: Target;
}

