/**
 * ahoy.js supports two import styles:
 *
 * - UMD
 *   - In Node.js, require('ahoy.js') is a namespace containing the individual exports.
 *   - If neither CJS nor AMD is available, a new `ahoy` global is created with the individual exports.
 * - ESM: the module 'ahoy.js' contains a single `default` export that is an object with the individual exports. No
 *   named exports are available.
 *
 * Since it is up to the bundler to pick which style gets used, this file attempts to model all supported situations:
 *
 * - To support CJS, types and functions are exported "normally" through ES2015 `export` declarations.
 * - `export as namespace ahoy` supports the global case.
 * - For the ESM case, we create a whole new `ahoy` namespace with copies of the exported functions. This namespace is
 *   the default export.
 */

export type EventProperties = Record<string, unknown>;

export interface Config {
    urlPrefix: string;
    visitsUrl: string;
    eventsUrl: string;

    page: string | null;
    platform: string;

    /** Use navigator.sendBeacon to send events. */
    useBeacon: boolean;
    /** @deprecated same as useBeacon */
    trackNow?: boolean | undefined;

    /** Call ahoy.start() upon the document's DOMContentLoaded event. */
    startOnReady: boolean;
    /** Send a visit to visitsUrl upon ahoy.start(). */
    trackVisits: boolean;

    /** Use cookies to store visit and visitor IDs. */
    cookies: boolean;
    /** Domain of the generated cookies. */
    cookieDomain: string | null;
    /** @deprecated same as cookieDomain */
    domain?: string | undefined;

    headers: Record<string, string>;
    withCredentials: boolean;
    visitParams: Record<string, unknown>;

    /** Expiry of the visit cookie in minutes. */
    visitDuration: number;
    /** Expiry of the visitor cookie in minutes. */
    visitorDuration: number;
}

/**
 * Modify Ahoy configuration. Must be called before ahoy.start() (or before DOMContentLoaded if startOnReady is set to
 * true).
 */
export function configure(options: Partial<Config>): void;

/** Initialize Ahoy.js if it has not yet been. */
export function start(): void;

/** Call callback when Ahoy.js has been initialized. */
export function ready(callback: () => void): void;

export function getVisitToken(): string;
export function getVisitId(): string;
export function getVisitorToken(): string;
export function getVisitorId(): string;

/** Force a new visit. */
export function reset(): boolean;

/**
 * Enable or disable debug logging.
 *
 * @param [enabled=true]
 */
export function debug(enabled?: boolean): boolean;

/** Send a single Ahoy tracking event. */
export function track(name: string, properties?: EventProperties): boolean;

/**
 * Track form control changes.
 * @deprecated trackChanges is deprecated and will be removed in 0.5.0
 */
export function trackChanges(selector: string): void;

/** Track link and button clicks. */
export function trackClicks(selector: string): void;

/** Track form submits. */
export function trackSubmits(selector: string): void;

/** Send a view event for the current page. */
export function trackView(additionalProperties?: EventProperties): void;

export as namespace ahoy;

declare namespace ahoy {
    /**
     * Modify Ahoy configuration. Must be called before ahoy.start() (or before DOMContentLoaded if startOnReady is set
     * to true).
     */
    function configure(options: Partial<Config>): void;

    /** Initialize Ahoy.js if it has not yet been. */
    function start(): void;

    /** Call callback when Ahoy.js has been initialized. */
    function ready(callback: () => void): void;

    function getVisitToken(): string;
    function getVisitId(): string;
    function getVisitorToken(): string;
    function getVisitorId(): string;

    /** Force a new visit. */
    function reset(): boolean;

    /**
     * Enable or disable debug logging.
     *
     * @param [enabled=true]
     */
    function debug(enabled?: boolean): boolean;

    /** Send a single Ahoy tracking event. */
    function track(name: string, properties?: EventProperties): boolean;

    /**
     * Track form control changes.
     * @deprecated trackChanges is deprecated and will be removed in 0.5.0
     */
    function trackChanges(selector: string): void;

    /** Track link and button clicks. */
    function trackClicks(selector: string): void;

    /** Track form submits. */
    function trackSubmits(selector: string): void;

    /** Send a view event for the current page. */
    function trackView(additionalProperties?: EventProperties): void;
}

export default ahoy;
