export function init(options?: Options): PullToRefreshInstance;

export interface PullToRefreshInstance {
    destroy(): void;
}

export function destroyAll(): void;

export function setPassiveMode(isPassive: boolean): void;

export interface Options {
    /**
     * Minimum distance required to trigger the refresh.
     * (default: `60`)
     */
    distThreshold?: number | undefined;

    /**
     * Maximum distance possible for the element.
     * (default: `80`)
     */
    distMax?: number | undefined;

    /**
     * After the `distThreshold` is reached and released, the element will have this height.
     * (default: `50`)
     */
    distReload?: number | undefined;

    /**
     * After which distance should we start pulling.
     * (Default: `0`)
     */
    distIgnore?: number | undefined;

    /**
     * Before which element the pull to refresh elements will be?
     * (default: `body`)
     */
    mainElement?: string | undefined;

    /**
     * Which element should trigger the pull to refresh?
     * (default: `body`)
     */
    triggerElement?: string | undefined;

    /**
     * What class will the main element have?
     * (default: `.ptr`)
     */
    ptrElement?: string | undefined;

    /**
     * What class prefix for the elements?
     * (default: `ptr--`)
     */
    classPrefix?: string | undefined;

    /**
     * What property will be used to calculate the element's proportions?
     * (default: `min-height`)
     */
    cssProp?: string | undefined;

    /**
     * The icon for both `instructionsPullToRefresh` and `instructionsReleaseToRefresh`
     * (default: `&#8675;`)
     */
    iconArrow?: string | undefined;

    /**
     * The icon when the refresh is in progress.
     * (default: `&hellip;`)
     */
    iconRefreshing?: string | undefined;

    /**
     * The initial instructions string.
     * (default: `Pull down to refresh`)
     */
    instructionsPullToRefresh?: string | undefined;

    /**
     * The instructions string when the `distThreshold` has been reached.
     * (default: `Release to refresh`)
     */
    instructionsReleaseToRefresh?: string | undefined;

    /**
     * The refreshing text.
     * (default: `Refreshing`)
     */
    instructionsRefreshing?: string | undefined;

    /**
     * The delay, in milliseconds before the `onRefresh` is triggered.
     * (default: `500`)
     */
    refreshTimeout?: number | undefined;

    /**
     * It returns the default HTML for the widget, __PREFIX__ is replaced.
     */
    getMarkup?(): string;

    /**
     * It returns the default CSS for the widget, __PREFIX__ is replaced.
     */
    getStyles?(): string;

    /**
     * The initialize function.
     */
    onInit?(): void;

    /**
     * What will the pull to refresh trigger? You can return a promise.
     *
     * Defaults to `window.location.reload()`
     */
    onRefresh?: (() => PromiseLike<void>) | (() => void) | undefined;

    /**
     * The resistance function, accepts one parameter, must return a number, capping at 1.
     *
     * Defaults to `t => Math.min(1, t / 2.5)`
     */
    resistanceFunction?(input: number): number;

    /**
     * Which condition should be met for pullToRefresh to trigger?
     *
     * Defaults to `!window.scrollY`
     */
    shouldPullToRefresh?(): boolean;
}

/**
 * If no loader is present, this module is available as a global.
 */
export as namespace PullToRefresh;
