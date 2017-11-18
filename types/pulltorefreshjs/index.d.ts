// Type definitions for pulltorefreshjs 0.1
// Project: https://github.com/BoxFactura/pulltorefresh.js
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function init(options?: Options): void;

export interface Options {
    /**
     * Minimum distance required to trigger the refresh.
     * (default: `60`)
     */
    distThreshold?: number;

    /**
     * Maximum distance possible for the element.
     * (default: `80`)
     */
    distMax?: number;

    /**
     * After the `distThreshold` is reached and released, the element will have this height.
     * (default: `50`)
     */
    distReload?: number;

    /**
     * Before which element the pull to refresh elements will be?
     * (default: `body`)
     */
    mainElement?: string;

    /**
     * Which element should trigger the pull to refresh?
     * (default: `body`)
     */
    triggerElement?: string;

    /**
     * What class will the main element have?
     * (default: `.ptr`)
     */
    ptrElement?: string;

    /**
     * What class prefix for the elements?
     * (default: `ptr--`)
     */
    classPrefix?: string;

    /**
     * What property will be used to calculate the element's proportions?
     * (default: `min-height`)
     */
    cssProp?: string;

    /**
     * The icon for both `instructionsPullToRefresh` and `instructionsReleaseToRefresh`
     * (default: `&#8675;`)
     */
    iconArrow?: string;

    /**
     * The icon when the refresh is in progress.
     * (default: `&hellip;`)
     */
    iconRefreshing?: string;

    /**
     * The initial instructions string.
     * (default: `Pull down to refresh`)
     */
    instructionsPullToRefresh?: string;

    /**
     * The instructions string when the `distThreshold` has been reached.
     * (default: `Release to refresh`)
     */
    instructionsReleaseToRefresh?: string;

    /**
     * The refreshing text.
     * (default: `Refreshing`)
     */
    instructionsRefreshing?: string;

    /**
     * The delay, in milliseconds before the `onRefresh` is triggered.
     * (default: `500`)
     */
    refreshTimeout?: number;

    /**
     * The initialize function.
     */
    onInit?(): void;

    /**
     * What will the pull to refresh trigger? You can return a promise.
     *
     * Defaults to `window.location.reload()`
     */
    onRefresh?: (() => PromiseLike<void>) | (() => void);

    /**
     * The resistance function, accepts one parameter, must return a number, capping at 1.
     *
     * Defaults to `t => Math.min(1, t / 2.5)`
     */
    resistanceFunction?(input: number): number;
}

/**
 * If no loader is present, this module is available as a global.
 */
export as namespace PullToRefresh;
