/**
 * Gets the viewport dimensions including any scrollbars.
 */
declare function getViewportDimensions(): getViewportDimensions.ViewportDimensions;

declare namespace getViewportDimensions {
    interface ViewportDimensions {
        width: number;
        height: number;
    }

    function withoutScrollbars(): ViewportDimensions;
}

export = getViewportDimensions;
