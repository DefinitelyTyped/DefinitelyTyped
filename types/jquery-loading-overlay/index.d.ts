// Type definitions for JQuery Loading Overlay 1.0
// Project: https://github.com/jgerigmeyer/jquery-loading-overlay, http://jgerigmeyer.github.io/jquery-loading-overlay
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export type Options = Partial<{
    /**
     * Class added to target while loading
     */
    loadingClass: string;

    /**
     * Class added to overlay (style with CSS)
     */
    overlayClass: string;

    /**
     * Class added to loading overlay spinner
     */
    spinnerClass: string;

    /**
     * Class added to loading overlay spinner
     */
    iconClass: string;

    /**
     * Class added to loading overlay spinner
     */
    textClass: string;

    /**
     * Text within loading overlay
     */
    loadingText: string;
}>;

declare global {
    interface JQuery {
        loadingOverlay(options?: Options): JQuery;
        loadingOverlay(method: 'remove', options?: Options): JQuery;
    }
}
